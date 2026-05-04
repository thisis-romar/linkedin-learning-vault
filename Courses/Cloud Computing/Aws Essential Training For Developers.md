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
  - '[Advance Your AWS Development Skills- Exploring Complex Application Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20AWS%20Development%20Skills-%20Exploring%20Complex%20Application%20Development.md)'
  - '[Develop Your AWS Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Develop%20Your%20AWS%20Skills.md)'
next_courses:
  - '[Introduction to AWS AI Services for Developers](../Artificial%20Intelligence%20(AI)/Introduction%20to%20AWS%20AI%20Services%20for%20Developers.md)'
  - '[Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md)'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":1,"total":6,"prev":null,"next":"Introduction to AWS AI Services for Developers"},{"path":"Develop Your AWS Skills","position":1,"total":4,"prev":null,"next":"Complete Guide to AWS Software Deployment"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=0)** - [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) has over a hundred different services, and it just seems like they're adding more and more each year. Now, don't worry. You're not going to be an expert in every service. I'm not an expert in every service. They've got AWS Ground Station for helping you communicate with your fleet of satellites in orbit. I don't have satellites in orbit, but if I ever run into a situation where I need to download data from satellites, I know that AWS has a service for that, and at that time, I'll just read the documentation and start looking for some other courses in our catalog that can give me some more information on how Ground Station works. This is how you'll walk around your AWS Starship as well. Once you've identified a potential need for an AWS service that you haven't used yet, you'll walk into that unused room of your Starship, turn on the lights and start twirling knobs and dials, and then explore a catalog for a course that's going to take you deeper into how to actually use that service when developing for your application. So it's important that you start learning what kinds of services AWS offers, what AWS has named that service, and the architecture icon for that service that you'll find in the documentation, blogs, and in other courses. Okay, fine. So why are we even doing this? As an example, let's say that your mobile application has a feature that lets your users upload video taken from a job site. You could install some open source tools directly onto some AWS servers,
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=94)** and build a background job that processes these videos in different sizes and formats, or you could have just used the Elastic Trans Coder Service, which is cheaper, more scalable, easier to use, and saved yourself a ton of time and money. You just need to know that Elastic Transcoder processes videos. And when you have a potential need for it, look up its pricing, figure out how it works, which might include reading a few architecture diagrams, and then determine if it's right for your project. Once again, you aren't going to use every service that AWS offers, but you should know what all the services can do for you, so that when you're building your app, you can use the right tool for the right job. Oh, and to make things a little more interesting for you, AWS has published new versions of the architecture icons, as you'll see in these clips from the AWS, "This is my architecture" video series. So sometimes you're going to see diagrams that use the new icons, and then sometimes you'll see diagrams that use the old icons. For this course, we use the new icons. And these are usually labeled on the diagrams so don't think you need to memorize the service name for all of them. However, when I show you the old and the new icon at the same time, these are common services that aren't typically labeled on the diagram.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/how-to-choose-aws-services?u=76281980&t=178)** - So these are the only instances where I suggest you learn both icons, the name of the service, so this is Route53 as an example, and a brief summary of what this service does. Route53 is for DNS records, and I'll get into all that in a later video. But before we start diving into a bunch of AWS services, we're going to cover some key security concepts that you're going to see come up again and again in the various AWS services, and we're going to show you how to safely use your AWS Starship for the first time so you don't crash it into the side of a planet. Then, we're going to start from the bottom of the Starship in our engine room, and we're going to get our hands dirty with some servers and some storage options, and go through some cloud networking concepts. From there, we're going to move up to the nicer decks of our Starship, where AWS has done all the work of managing servers and [Databases](../../Skills/Software%20Development/Databases.md), and look at the various tools they have for quickly deploying your code, or helping you quickly develop a mobile application, or leverage machine learning in your application for text recognition or voice detection. Along the way, we'll encounter several terms that you might have heard related to [Cloud Computing](../../Topics/Cloud%20Computing.md), such as [infrastructure as a service](../../Glossary/Concept/IaaS.md), [Big Data](../../Skills/Data%20Science/Big%20Data.md), and serverless architecture. Hey, listen, don't worry, we're going to break down all the buzzwords for you, so get ready to learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Infrastructure as a service](../../Glossary/Concept/IaaS.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **CLI Commands:** aws (14), find (1), make (1)
> **Env Vars:** aws (14), dns (1)
> **Documentation:** the documentation (2)
> **Prerequisites:** install (1), before we start (1)
> **Speakers:** - amazon (1), - so (1)
> **Analogies:** such as (1)

#### [What you need to know](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=0)** - You don't have to be an expert on managing servers to take this course, but it helps if you have a basic understanding of how a computer works and how devices talk to each other in an IP network, much like the network you probably have at home. This course is going to introduce [Cloud Computing](../../Topics/Cloud%20Computing.md) concepts using computer parts that you would find on the shelves of any big box electronic store, such as CPUs, and RAM, and networking switches, and routers. So, it helps if you've used these components before and you're at least a little familiar with what they do. The application that you're developing may not be a web or mobile app, but I'll introduce you to some cloud concepts by showing you a few ways you can host a website with AWS, such as one built on [WordPress](../../Skills/Web%20Development/WordPress.md). You should have a basic understanding of how a web server works and how a domain name like [linkedin.com](https://linkedin.com) points to an IP address for serving up that site to your web browser. You likely don't transport your source code around using a huge external hard drive like this one anymore, but this hard drive will represent the source code and the assets to the application you want to run from within AWS. And this book will represent the database to your application. This is all of your user data, transaction history, website analytics, pet medical records, whatever. You should be familiar with what a database does and how you would use it in your application to read and store user data. We'll also look at a few code samples but we'll keep the samples as simple as possible.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-you-need-to-know?u=76281980&t=95)** If you have any familiarity with a modern programming language, you shouldn't have too much trouble reading the code samples even if it's in a language that you haven't used before. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=0)** - Before we do anything on your AWS account, we first need to figure out what kind of account you have. If you don't have an AWS account, you can sign up for your own account by going to aws.[amazon.com](https://amazon.com). You'll be asked to put in a credit card on file for the billing but most AWS services have a free tier that allow you to try out several services for the first year while you're learning about AWS. If you signed up for your account this way or someone in your organization only sent you a username and password then you have an AWS root account. If you were sent a username, a password and an account ID or an account alias or maybe someone sent you a special link to click on to sign in then you have an IAM user account. IAM stands for Identity and Access Management and this is how AWS controls who has access to your organization's account. Now, if you have an IAM user account then your login screen will include a field at the top that says Account ID or Alias and it should already be filled in for you. If you have an AWS root account, you are using a special account within AWS and you should only sign in to AWS using the root account under certain circumstances. When you sign in with the AWS root account, you become captain of your starship and the captain of the starship has special abilities.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=95)** You can promote and demote your officers. You can even tell your ship to self-destruct. When you interact with AWS using the root account, imagine yourself wearing the captain's uniform and the great responsibilities that come with the uniform. There's a complete list of the special privileges the root user has in the documentation but the most common uses are creating your first IAM user, changing the login credentials of the root user itself, changing your support plan with AWS and deleting the entire AWS account. So you can see how dangerous it would be for someone to get ahold of your AWS root account. You never want to give out your AWS root account and you should only log into the AWS root account when you absolutely have to. Make sure your AWS root account has a strong password and if you want to take extra precautions, AWS recommends that you secure the root account by using a physical [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) key. The MFA key requires that whoever puts on the captain's uniform must have the root username and password and have the MFA key in hand. The physical MFA keys they support along with their associated costs are listed in the AWS Docs. To set up MFA, log into the AWS console, click on your username in the upper right toolbar and in the sub menu, select my Security Credentials. Under Multi-factor Authentication,
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/the-aws-root-account-22739499?u=76281980&t=189)** click on the Assign MFA Device button. The Virtual MFA Device option allows you to use an app on your phone in place of a physical device but I recommend using the physical MFA key for the AWS root account and then using the Virtual MFA option to secure your individual IAM user account. To set up MFA, you just follow the instructions listed in this wizard for the device that you selected. Now, let's keep on the captain's uniform just a little bit longer so we can create you an IAM user and then hang up the captain's uniform up in the closet where no one can find it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=0)** - [Instructor] The AWS documentation gives you several best practices for securing your root account. We are now going to implement the first recommendation, which is to create a new IAM user. In the AWS console as the root user, click on your name in the upper right side of the AWS console, and in the pull down, click on account. If you were given an IAM user to log to AWS, you can follow along with these steps. But since you already have an IAM user, you won't need to create a second one. You also may not see all the same options since you aren't a root user. Scroll down until you see the section titled IAM User and Role Access to Billing Information, and click on the edit button on the right. Click the Activate IAM Access checkbox and click Update. This will allow an IAM user, such as yourself in a few minutes, to control access to the billing areas of AWS, so that someone other than the root user can see the current charges being racked up, or change the billing details. In the services search bar at the top, type IAM and click on the entry that auto completes. In the IAM console, click on user groups on the left hand
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=97)** sub menu under the access management section. I recommend dividing your team up into groups, so that you can add users to the appropriate group and they'll inherit all the policies and their associated permissions that you've assigned to that group. Click on the create group button and for the user group name type admins. if you have existing IAM users already, you can attach them to this new group by selecting them in the section below, but we're going to create a new user and attach them to this group in the next video. Scroll down and under the section attach permissions policies, click inside of the policy search bar, type administrator access, all one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) with no spaces, and press enter. Click the checkbox next to the Administrator Access policy. The Administrator Access policy includes all of the default security policies that AWS has for administrator access. But if you would like to really dial in exactly what your team members have access to in AWS, such as allowing a team member to create servers and read data from your AWS [Databases](../../Skills/Software%20Development/Databases.md), but restrict them from viewing your billing details, you can create a custom policy for this group
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=192)** and grant or deny access to specific permissions and resources within AWS. AWS recommends that you follow the rule of only granting least-privilege or only giving your team members the bare minimum of rights over your AWS account that they need to perform their jobs well. If you want to write a custom policy, search our catalog for AWS IAM, and you will find several courses that will show you how to create and test custom policies. Click on the create group button. To view the group we just created, click on admins from the group list. Notice under the summary that this user group has an ARN, or A-R-N, which stands for Amazon Resource Names, all of your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), including your servers, networking components, storage, IAM users, your roles, almost everything will have a unique ARN. This is like the dog tags to your cloud infrastructure. Everything will have a unique ID, and you'll use these IDs in various places around AWS to link your cloud infrastructure together. That number that you see in the ARN is your account ID, so any resources you or your users create
>
> **[4:46](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-group?u=76281980&t=286)** will have this account ID. Now, let's assign a new user to the group that we just created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=0)** - [Instructor] On the left-hand submenu, click on users. And at the top of that page, click on the Add users button. Enter a unique username. Under Select AWS access type, check Access key - Programmatic access. The access key will allow our user to access AWS services on your account without providing your username and password. It's like creating a set of car keys for your AWS account. We need this key later because later in the course we're going to use the AWS command-line interface or [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) to interact with our AWS account. And you'll need this key to tell AWS who you are. Also, check the Password - AWS Management Console Access checkbox. This will give you an option to create your own password or just use an auto-generated password for this new user. It'll also give you the option to force a password reset upon the first login. For best practice, leave Autogenerated password selected and also make sure that Require password reset is selected. At the bottom click Next: Permissions. Click the checkbox next to the admins group to assign this new user to the admins group
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=93)** that we just created. And click Next. And then click Next again. Click the Create user button. Click the Download .csv button for the access keys and the password for your IAM sign in URL. You will only ever be shown this screen once. Copy all this information from the CSV into a secure password store, such as LastPass, or 1Password, or a similar tool. And make sure to securely delete the CSV file After putting this into a secure location. The access key ID is as important as your password. Don't paste your password or your secret access key directly into your source code or put it in an unsecure location that can be compromised. Copy the console login link from the spreadsheet. Back in the AWS console, click on the Close button at the bottom, and then click on your name in the upper right-hand corner of the console. And in the pull down, click the Sign out button. Now go to the login URL that you copied out of the CSV file.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=184)** You'll see that it auto fills your account ID. Type in the new username that you picked for yourself and paste in your temporary password. Set your new password and click Confirm password change.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-iam-user-and-access-key?u=76281980&t=205)** There you go. Now you can put away that captain's uniform and start using AWS only with your new IAM user. You can even load up the IAM console again and start adding the other users on your team. If you need to manage a large list of users and you already use another identity provider such as [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) take a look at AWS Identity Center. This can be configured so that your users have a single sign-on that they will use inside your [office](../../Skills/Web%20Development/Microsoft%20Office.md) and from within AWS. And if you have a ton of departments, or separate companies, or startup projects that you need to stay somewhat isolated from each other, you might find it easier to create multiple root accounts. Take a look at AWS organizations, which is like having a single billing master account that is like an admiral over a fleet of individual starships and captains. Before we get much further into AWS, the first thing we need to do is to make sure that we get a handle on the billing before we rack up too many charges on our new accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=1)** - Man, nobody likes paying bills. AWS has made this a little easier on you by asking for a credit card upfront when you create your AWS root account. The only problem is they'll charge your card automatically each month based on your usage and then send you the statement after they've already charged your card. And so if you're not watching your usage, then you're going to be in for quite a shock. But don't worry, there's some alarms that we can set on your account so that you don't run into any surprises. When you first log on to your AWS account, you'll see the console home screen. No matter where you are within the AWS console, if you click the AWS logo in the upper left-hand corner, you'll always be taken back to the console home. It has some widgets on it that you can rearrange to your liking and it'll show you the AWS services that you've most recently used. It also has some recent announcements and it's a great way to keep up with the new services and features that are being launched. On this page, you'll see a widget called Cost and usage. This will give you a quick glance of how much usage you've already racked up this month, as well as give you a forecast of projection of your costs for this month, if you continue to run the same amount of services. If this is a new account, it may take a little bit
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=97)** before AWS starts showing you billing metrics. At the bottom of this widget, click on the Go to AWS [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) link. Within the AWS Cost Management screen, on the left-hand side, click Cost Explorer. The Cost Explorer will give you some charts and reports that will allow you to see a breakdown of which AWS services are being included in your monthly total. Several AWS services have a free tier offering that allow you to try out the services for free in some limited fashion. And if your AWS account is less than a year old, you will get some additional free tier offerings. If you want to keep everything within the free tier, check out this page for the service you are wanting to demo and see what the restrictions are. The services that we will explore in this course should all be included within the free tier, if you meet the requirements, and we will delete any resources that could continue to incur costs if they were kept running. However, it's always a good idea to occasionally check the Cost Explorer to make sure that you've deleted every last item you're no longer using. At the end of the month, AWS will charge your card and generate a bill of the services that you have used. In the AWS console in the search bar at the top,
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/break-down-the-bill-in-aws?u=76281980&t=196)** type billing and click on the entry that auto completes. This is the billing dashboard, and this is where you can view your current and previous bills. In the left-hand menu, scroll down and click on Billing preferences. If you would like to get emailed a PDF summary of your usage each month, check Receive PDF invoice by Email. And since we're using the free tier for this course, check Receive Free Tier Usage Alerts and input your email address. This will give you an alert if you are running out of free tier resources and you may be billed for additional services. Scroll down and click Save preferences. Now let's set a budget within AWS so that if we are charged for services that fall outside of the free tier, it's an amount that falls within our budget.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2)
> **Env Vars:** aws (15), pdf (2)
> **CLI Commands:** aws (15), make (1)
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **Tools:** aws console (2)
> **Definitions:** is a  (1)
> **Speakers:** - man (1)

#### [Set a budget to save money](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=0)** - Another way to make sure we keep our AWS monthly costs within an expected range is to create a budget. Just like you can create a budget in real life to monitor how you would spend on groceries and eating out, you can create budgets within AWS to monitor your spending on one or all of your AWS services. On the left underneath [Cost Management](../../Skills/Software%20Development/Cost%20Management.md), click on Budgets. Click on Create a budget. Make sure that Cost budget is selected and click Next. Scroll down, and for budget name, type "All AWS services". Make sure the budget period is set to monthly in the pull down and that recurring budget is selected. For the budget amount, type in a monthly amount that you feel comfortable spending while you are learning AWS. For myself, I'm going to set my budget at $20 a month, so in the field, I just want to type 20, period, zero, zero. Verify that the budget scope is set to all AWS services and click Next at the bottom of this screen. Scroll down and click the add an alert threshold button. Set the threshold to 80
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-a-budget-to-save-money?u=76281980&t=97)** and change the trigger to forecasted. This says I'm going to give them an alert when AWS predicts that monthly spend is going to go over $16 at my current rate of usage. This will let me know ahead of time that I need to come back into the cost explorer and shut down any services I don't want to be billed for. In the email recipients box, type in your email address and then click the Next button. The Attach actions screen will let you set up automations that will run when the budget alert is triggered, such as shutting down servers. But for now, let's just rely on the email that AWS will send us and we'll take action manually. Click Next, and then at the bottom of the summary page, click Create budget. Now that we've got a budget set up, and we know that we're not going to get unexpected charges, let's dive into what the cloud is and all the services that AWS offers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=0)** - Let's clear the air and demystify the cloud. And to do this, we need to go back in time to the birth of the cloud, to the year 2006, right before [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) launched. So at this time, to host an application over to the internet, most medium to large organizations would self-host and build out an expensive data center room in their [office](../../Skills/Web%20Development/Microsoft%20Office.md). Or they would do what most small businesses were doing and they would rent space in someone else's data center called co-location, which would provide you with redundant sources of power and internet so that, you know, your whole website doesn't go down every time building maintenance shuts off the breakers. If you've never been inside a data center, you've likely seen one of these in the movies. This is the part where the hacker breaks into the super secret facility, plugs their laptop into one of the racks and steals the secret files. And a real data center really kind of looks like that, except that person in the hoodie crouched on the floor with their laptop is someone who actually works for the data center and not a real life hacker. All right, so what we're looking at here is just one of those servers from one of those racks. Now I've taken the lid off the server and now we can see inside it. And if you look at it, you'll see that it's mostly all the same components you would find in your computer at home. These components are just arranged in a different casing so that it slots easily into the rack to save space in the data center. But it's still got a processor, it's got sticks of ram and it's got a hard drive that's 99% identical
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=93)** to the one that's in your computer at home. So let me push this off to the side. Let's take a look at this. This tower computer is sold as a small business server, and it has almost the same components as the flat 1U server in the rack. It just comes in a different form factor. In fact, it's almost identical to a tower computer you'd use as a workstation or your PC at home, except usually these servers don't have these sweet graphics cards because they rarely even have monitors attached to them. We'll use this small business server in this course when referring to servers, although in real life, your cloud servers run off a flat 1U server like the one that we saw earlier. So in 2006, if you needed a server, you would just go online and buy a server, just like you would shop online for a new laptop. And you'd just have this giant thing shipped to you. Then you would self-host it from a room within your office or you'd set it up, the fancy [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for this was to provision it, and then take it down to your co-located data center, which was called the colo, and slot it into your server rack. So a third option that you had is that you could lease dedicated servers. So instead of bringing your own server down to the colo you would just rent one of these servers. And if anything happened to say the [Hardware](../../Topics/Hardware.md) of the server, instead of you driving down to the data center to fix it the data center text would just walk over and look at your server and fix anything that was wrong with it.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/on-premise-infrastructure?u=76281980&t=189)** These three types of deployments fell under a category called on-premise hosting, which is some form of just do it yourself hosting where you had the full responsibility of figuring out what to do if your single server failed on a busy Tuesday afternoon. So around this time, virtualization started to appear within the server space. Now a virtual server is just a software abstraction that allows a physical server like this to divide up its CPU and its ram and its disk resources, which is called the bare metal, and run different virtual servers on top of the bare metal. And they may even have different operating systems from the physical server's operating system. So this allowed a single physical server to split up its resources and appear to the outside world as three or even 10 separate servers. So you can do this today with your own computer using software from VMware or VirtualBox and it'll let you run an old copy of say, you know, [Windows](../../Glossary/Service/Windows.md) 7 virtually on top of any operating system you've got. Why does virtualization matter? Virtualization let data centers sell even more dedicated servers because now I can get maybe four virtual servers out of one physical server. Let's talk about how Amazon started capitalizing on this technology to fix some of the common problems that people were having with dedicated hardware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** cpu (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - let (1)

#### [Birth of the cloud: EC2 and S3](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=0)** - Running your own servers, whether from your own [office](../../Skills/Web%20Development/Microsoft%20Office.md), or from within a data center, has a lot of challenges to it. You need to have staff that understands how to maintain and to fix all that [Hardware](../../Topics/Hardware.md), and that team also needs to be responsible for maintaining all the software that's running on that hardware. Another issue that companies were facing was scaling. So depending on how your application works, a single server has a limit to how much traffic it can handle. Doubling the size of your business might mean that you have to double your physical hardware to handle the load. But what if over the weekend your website suddenly got a hundred times the normal amount of traffic because you got mentioned in a news publication. Typically, the servers would become so overloaded that most people trying to hit your website would wait, and wait, and wait, and they would see nothing. It could take weeks to order and set up new servers, so by the time you rack 10 more servers and brought them online, the traffic from that news article has already moved on, and you lost a key moment to acquire a lot of new customers. So to help with this, Amazon launched two services, one of these services is called Elastic Compute Cloud, which is abbreviated as [EC2](../../Skills/DevOps/Amazon%20EC2.md). This is the old icon for the entire EC2 service, and this is the new icon. On the surface, this just looked like virtual servers that you could rent from Amazon, which a lot of other companies were doing this at the same time.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=93)** The secret sauce here is that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) elastic. Think about the number of servers stretching automatically when traffic increases, and then shrinking back down again when the traffic drops off. For EC2 instances, this feature was called Auto Scaling. So when all that traffic hits your website over the weekend, EC2 would Auto Scale your existing server from two, maybe even up to 10 to handle the load, and then back on Monday, it just scales back down to a single server when the traffic is gone. The other AWS service that got launched in 2006, was called Simple Storage Service, and it's abbreviated as S3. Here's the old icons for S3, and this is the new one. S3 was Dropbox before there was Dropbox, it was a simple way to access off-premise storage for your important backups, like hard drives in the cloud, and Amazon used their size to offer this monthly service at a pretty cheap rate. In fact, when Dropbox launched two years later in 2008, it was originally built on top of S3 and EC2. So when you were using Dropbox, you were really using S3 storage. Because you could now virtually build servers and storage solutions in the cloud with EC2 and S3, these services acquired the term [Infrastructure as a Service](../../Glossary/Concept/IaaS.md), or [IaaS](../../Glossary/Concept/IaaS.md), where instead of building out your own
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=189)** physical infrastructure of racks and servers, you're renting someone else's racks, and only paying them for how much of the service you consume. The cloud revolution led to greater up times, and total lower costs of ownership, because you no longer had to buy your own physical servers and replace them every few years, and have all that staff to maintain that hardware. However, even though Amazon manages the physical servers, you still have responsibilities over the software on your virtual servers, this is called the Shared Responsibility Model, where you, and [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), share different responsibilities in keeping your servers up. AWS handles the data center and its physical security so no one can sneak into the data center and steal your files, and AWS holds certifications for the physical and hardware requirements of most industry compliance standards. They will also handle hardware level problems with all those servers sitting in their racks. To use the Infrastructure as a Service offerings, you are responsible for the security of your virtual machine. You will need to run the operating system updates for [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), configure backups, make sure your firewalls are set up correctly, and check on these things regularly on a maintenance schedule to ensure that you're practicing proper security. You are also responsible for ensuring that your application is secured against known attacks, such as [SQL](../../Skills/Data%20Science/SQL.md) injections.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/birth-of-the-cloud-ec2-and-s3?u=76281980&t=282)** Okay, if these topics are brand new to you, and you've never managed servers before, search our catalog for [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) Security, or Linux Security, and you can dive deeper into these topics. To get started with [Application Security](../../Skills/Cybersecurity/Application%20Security.md), check out our course on [Learning the OWASP Top 10](../Cybersecurity/Learning%20the%20OWASP%20Top%2010.md), which will cover the top 10 vulnerabilities in web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (6), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6), [Infrastructure as a service](../../Glossary/Concept/IaaS.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=0)** - Each AWS data center has its own set of electricity and internet providers to ensure redundancy if one provider is having an outage. Amazon has built multiple data centers near each other, and it's linked them all together with fast connections. Amazon has grouped these data centers into availability zones. You won't ever see which exact data center your AWS services are running in, and AWS keeps the data centers' locations as secret as they can. But you do select an availability zone. So your services may be served up behind the scenes by one or more AWS data centers linked together within that availability zone. AWS recommends that you always design your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) so that it can run simultaneously across at least two availability zones. Going back to our server rack, they want you to think of a single availability zone as a single rack in the data center. So if you want your service to have the highest uptime, you need to be able to accept the loss of a single availability zone. You'll see options within various AWS services that refer to multi AZ for cloning your service into at least two availability zones. Okay, let's [Zoom](../../Skills/Software%20Development/Zoom.md) out once more. The availability zones are clustered together by region. So all of the availability zones near North Virginia are called the North Virginia Region, or us-east-1, and the availability zones within North Virginia are labeled
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/where-in-the-world-are-your-aws-services?u=76281980&t=98)** as us-east-1a, us-east-1b, and so on. Since each availability zone has so many redundancies, and if you go with a multi AZ architecture and run your services across at least two availability zones within a region, you are protecting yourself fairly well by running everything out of a single region. We'll set up two servers within the same region, but in different availability zones. If your application needs to be built to withstand the failure of an entire region, check out my other course on ECS and multi-region load balancing, and search our catalog for AWS high availability for some other courses on how to design applications for the highest uptime. To switch which region you are in and to create cloud infrastructure within a given region, click on the region pull down next to your name in the upper right hand corner of the AWS console, and pick a region you'd like to use. For my demo, I'm going to create my infrastructure in us-east-1, which is North Virginia. When selecting a region, pick a region that is closest to most of your users and supports the AWS services that you want to use, because not all regions offer the exact same services. The largest regions are North Virginia, Ohio, and Oregon, and they usually get new features before the other regions. So these are always a safe bet. When any of these regions does have a large outage, you'll usually hear about it later on in the evening news.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **CLI Commands:** aws (9), az (2)
> **Env Vars:** aws (9), ecs (1)
> **Tools:** aws console (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - each (1)

#### [Get closer to users with Local Zones](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/get-closer-to-users-with-local-zones?u=76281980&t=0)** - [Instructor] Information travels really fast through the internet, as fast as light can travel through glass fibers in fact. Picking a region near most of your users is usually fast enough for most applications, but sometimes there are those applications like in video games or streaming live video where you need to shave off those extra milliseconds and get even closer to your users. AWS has local zones, which are extensions of the AWS regions that put a set of servers even closer to a set of users. Local zones are labeled as the region name such as US East One, followed by the physical location of the [Hardware](../../Topics/Hardware.md) such as DFW1A to indicate that these physical servers are located within Dallas, Texas. For our demo, it'll be fast enough to use US East one without using a local zone. So let's create your first server in the cloud so you can take this thing for a spin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** aws (2), dfw1a (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 3. IaaS Compute

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn how to create an EC2 instance](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=0)** - [Instructor] Let's create our first server within [EC2](../../Skills/DevOps/Amazon%20EC2.md). From within the AWS console, in the services search bar, type in EC2 and click on the entry that auto-completes. Click on the Launch Instance button. And in the pull down, select Launch Instance. For name, type awsdemo1. Scroll down to the section titled Application and OS Images or Amazon Machine Image. [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) in AWS are called Amazon Machine Images or AMI. These virtual machines already have an operating system or OS installed on them, such as [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) or your favorite [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) distribution. There are several AMIs that already have entire server applications, such as [WordPress](../../Skills/Web%20Development/WordPress.md), installed and configured for you. Type WordPress into the AMI search bar and hit Enter. You'll see several AMIs that you can choose from that come with pre-configured WordPress installs. The AMI Marketplace allows vendors to post server images that you can launch without additional charges. However, there are also some AMIs that have additional charges to cover the licensing
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-ec2-instance?u=76281980&t=95)** and service fees for any commercial applications, so be sure to read the details before launching these. We are going to launch an instance with just [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) installed on it and set up the web server ourselves. So click on Launch an Instance from the breadcrumbs to return to the launch instance screen. Click on Ubuntu and select the Ubuntu Server 22.04 LTS image. Scroll down to the instance type and select t2.micro. There's several options in this pull down, so let's break down the most common EC2 instance types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=0)** - Sometimes you might build a computer with a fancy graphics card for playing the latest PC games, and you typically don't find these in a server like this. But these chips on the graphics cards are faster at running some [Algorithms](../../Skills/Software%20Development/Algorithms.md), such as finance models and some machine learning tasks. You select more than just the number of CPU cores and RAM when you're building an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. It really is like specking out your own computer. So let's go take a look at some of the different types of EC2 instances that Amazon has. From the EC2 console, on the launch instance screen, click on the compare instance types link. The instance types will start with t2, t3, or c1 and so on, and this is the instance family. Each instance family has [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) that are optimized for certain workloads. The T and M families are the most commonly used general purpose instances. Now, a thing to note about the T instance family is that they use something called a burstable CPU threshold. Think of this like hitting the turbo button on your starship. When the CPU on this instance is below its threshold such as when a t3 medium instance is running below 20% CPU usage, it'll accrue CPU credits, which are like the crystals that you're storing up in your warp drive.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=99)** When the instance has a burst above its CPU limit then it'll start using these crystals that you've built up. When the crystals run out, your instance can't run at warp speed anymore. If you have an application that has constantly high CPU load, choose a compute optimized or C class instance or one of the other general instance M class instances. These instances don't use the CPU credits so you don't have to worry about that. The memory optimized R an X classes are for workloads that need more memory and there's even instances under the accelerated computing category that include GPUs which are great for 3D rendering pipelines or training some [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) models. Once you've selected an instance family, you'll need to choose the size of the instance. Think of it like picking out the size of a t-shirt or ordering a beverage where an extra large is bigger than a medium. Larger instances will give you more resources in that instance family, which might be more memory, virtual CPUs, networking speed, and so on. The chart in the EC2 launch wizard compare instances screen will give you a breakdown of these differences.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-the-best-ec2-instance-type?u=76281980&t=199)** If you want to estimate your costs before picking an instance type or any other AWS service, AWS has a pricing calculator at calculator.aws. Click on the create estimate button, type in ec2 into the search box and click configure. If you scroll down under the EC2 instance specifications and change the number of vCPUs from say four to eight, you'll see the monthly cost change at the bottom of the screen. Later on, we'll discuss savings plans and reserved instances to help you bring some of these costs down. Back on the launch instant screen, select t2.micro and click the select instance type button. We're going to pick a t2.micro because it's a really small instance for us to do some testing with, and it says that it's eligible for the free tier, so it's great for learning. Next, we're going to create a key pair and launch our new server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=0)** - [Instructor] When you launch a new [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) instance within Amazon, you must use a key pair to set up SSH access to your server. This will allow you to connect a terminal application to your server so that you can run commands against it. In the [EC2](../../Skills/DevOps/Amazon%20EC2.md) Launch Wizard, click on the Create new key pair link. For the key name type AWS demo and then click Create key pair. A .PEM file will download within your browser. You need to keep this file in a safe location because it is like a really long password that must be kept safe. And just like the access keys we created earlier, this file will only ever be generated once by AWS. My .PEM file went into my downloads folder by default and I can open it up using a plain text editor like Notepad or text edit on a Mac. You'll see that it's a really long private key and it's matching public key is kept by Amazon and installed onto our Linux virtual machine. If you are launching a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) EC2 instance this private key in the key pair is used to decrypt the administrator password to connect to your instance.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=94)** If you're working on a team with several people it's a good idea to copy this private key into a secure password store and to grant access to your team members who need to access these servers. In the EC2 Launch Wizard, under network settings, make sure that Create a security group is checked. Check Allow SSH traffic from and make sure that anywhere is selected in the pull down. This will allow you to connect a terminal to your EC2 instance using your private key from the key pair from anywhere in the world. Later on, we'll dive more into how security groups work and talk about some of the ways that you can further protect your server. Also, check Allow HTTP traffic from the internet since this EC2 instance will be a publicly available web server. I have the HTTPS option unchecked because we won't be installing an SSL key directly onto our web server in this course. But I'll mention a few other ways that you can implement HTTPS later on. You can scroll to the bottom of the wizard, but I'm going to leave the other options as their defaults. Now click the Launch instance button. Great.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-a-key-pair?u=76281980&t=185)** AWS is starting up our instance. It'll take a few minutes to get everything up and running and then we'll connect to our instance and turn it into a web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=0)** - [Instructor] In the [EC2](../../Skills/DevOps/Amazon%20EC2.md) console, you might have to expand out the left hand side by clicking on the hamburger icon and then under the instances header, click on instances. The instance state is listed next to our new instance and if it doesn't say running yet, just give it a few more minutes to start up. Click the checkbox next to the new instance name and then click on the connect button. Make sure that the EC2 instance connect tab is selected and then click on the connect button. This is going to launch a new tab with an SSH terminal connecting us to our running instance. Inside of your SSH session type sudo space apt space update, and hit enter.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=55)** The AMI images that Amazon provides do not always include the latest packages or OS updates, so you'll want to make sure your virtual machine has the latest packages in OS updates before starting. Now that [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) has updated its list of available packages, type sudo space apt space upgrade, and hit enter. Type capital Y to confirm, and hit enter. If there is a kernel update that has to be run and Ubuntu needs to update its core operating system itself, then you may see a message pop up asking you to update the kernel or to confirm if you want to restart any services. In these modals, you'll press tab to navigate between any options and hit enter when the okay button is highlighted. Press tab again and hit enter when it highlights okay to clear any of these dialogues. Because the kernel was just updated, it wants us to now restart the virtual machine. Close the browser tab with your SSH connection and switch back to the tab that has the EC2 console. Click on the instances link from within the breadcrumbs at the top. Click on the checkbox next to the instance name, and then click Instance state at the top of the console, and in the pull down select reboot instance.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=152)** Click the reboot button. After a few moments, click the refresh button and check to make sure that the instance state is in the running state. Select the checkbox next to the instance name and click on the connect button. Under EC2 instance connect, click the connect button. We are now connected to our instance again with the latest kernel and it's showing us that we have no packages that need to be updated. Remember that in the AWS Shared Responsibility model, it will be your responsibility to connect to your servers periodically and run the updates to keep everything secure. Later on, we'll discuss some automation and orchestration tools that you can use to help you manage your parts of the shared responsibility model. In your terminal window type sudo space apt space install space apache, and the number two, and hit enter. Press capital Y and hit enter to confirm. This will install the Apache Web Server with its default configuration and installing a web server is one of the first steps to setting up a web application, like [WordPress](../../Skills/Web%20Development/WordPress.md). Switch back to the previous browser tab that has the EC2 console.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=247)** Click on the instances link in the breadcrumb and then click on your running instance. In the details pane that pops up, you'll see a public IP version four address. Press the copy button to the left of that public IP address. In a new browser tab, type http:// and then paste in
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/set-up-a-web-server?u=76281980&t=276)** the public IP address and hit enter. And it works. You are seeing the default Apache webpage from your web server. Remember that your URL must include HTTP and not HTTPS. And your browser will tell you that you're viewing an insecure site, but since this is just a demo, we won't get into the steps for installing an SSL certificate. Now that we have one web server, let's make many more and take over the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (5), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=0)** - [Instructor] In the [EC2](../../Skills/DevOps/Amazon%20EC2.md) console, on the instances screen make sure you've selected your running instance. Then click on the Instance state pull down at the top and in the options select Stop instance and then click the Stop button. If you stop an instance, you won't be charged for the compute time while the instance is stopped but you will be charged for the storage costs of its hard drive and any snapshots that you've taken which are pretty minimal. Stopping and starting an instance is different than just rebooting it. If you stop and start an instance this virtual machine will actually move to another physical server in the availability zone. So do this if you're having problems connecting to the instance because it could be a [Hardware](../../Topics/Hardware.md) failure on the AWS side. After a few moments, click the Refresh button and you'll see that your instance is in a stopped state. Select the instance again. Click on Instance state and select Start instance. Give it a few minutes to start the instance back up and you can hit the Refresh button to see when the instance state changes. When the instance is running again, click on it and in the details pane, click on the Status checks tab. When the instance is starting up
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/stopping-and-starting-vs-rebooting-instances?u=76281980&t=95)** the checks will say initializing but if you occasionally hit the refresh button these systems checks will start to pass. You can check the system status to see if there's a hardware failure but it takes a few minutes for AWS to see the problem so you might even notice it before the alarm goes off. Remember, if you reboot an instance, it comes back up faster but it stays on the same physical server it was before. Occasionally, AWS will perform scheduled maintenance on the physical hosts and they may send you a message asking you to stop and start an instance to move the instance to a new host prior to their maintenance window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (3), ec2 (1)
> **Speakers:** - [instructor] (1)

#### [Right-sizing with EC2 autoscaling](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=0)** - Remember, [EC2](../../Skills/DevOps/Amazon%20EC2.md) stands for Elastic Compute Cloud, and the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of the day is elastic. An Auto Scaling policy can tell AWS that when an event occurs, such as our instance CPU usage goes above 80% for five minutes to stretch our one server into two. And then we can tell it to shrink back down again to one server when things have calmed down again. Your application needs to be designed in a way that if 1, or 2, or 10 clones of your single server come online, that your application can load balance your traffic across all of these new servers. Now this is called horizontal scaling. If you think of a busy grocery store, the manager will open several new checkout lanes to reduce wait time. When the rush is over, they'll close those extra checkout lanes. This is different than vertical scaling, which would handle the problem by still only having a single checkout lane, but just putting a faster cashier and speeding up the conveyor belt. Vertical scaling in AWS is fairly easy. You just stop your running EC2 instance, which you know will cause a little downtime, and change the instance to a larger, faster server with more CPU cores and ram, but this has its limits. And all large applications use horizontal scaling to handle an increase in traffic. We're not going to set up Auto Scaling for this course, but we will create an AMI snapshot of our current running server
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/right-sizing-with-ec2-autoscaling?u=76281980&t=94)** and create a clone of it manually, which is one of the first steps to setting up Auto Scaling anyway. If you'd like to dive deeper into Auto Scaling, I recommend our AWS course on automation and optimization. Okay, if you're totally new to these concepts of horizontally scaling servers in your application design, search our catalog for AWS high availability and we have a few courses that'll show you how to keep your application running when a single server fails, or when that single server gets overloaded due to high demand. Finish out this course first though, because you're going to need to know a bit more about storage and networking in AWS to get a full understanding of the material that's presented in those courses. So let's jump into the console, and I'll show you how to clone our existing server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** aws (5), ec2 (2), cpu (2), ami (1)
> **CLI Commands:** aws (5)
> **Definitions:** stands for (1), is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - remember (1)

#### [Learn how to create backups with an AMI Snapshot](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=0)** - [Instructor] From within the [EC2](../../Skills/DevOps/Amazon%20EC2.md) console in the details pane of your running instance, click on the Networking tab, scroll down and take note of the availability zone. the instance is currently running in. Mine is running in us-east-1b. At the top of the details pane, click on the Security tab. Under security groups, take note of the name of the security group on our running instance. Mine is called launch-wizard-1 because it was a security group that the EC2 launch instance wizard made for us. Okay, at the top, click on the actions pull down, and under image and templates, select Create image. For image name, type ec2demo. And there's an option on here that says No reboot. AWS needs to stop the virtual machine to take an image of it. If you select reboot, and this instance was still running, it would attempt to create a snapshot of the hard drive listed here as the instance volume while the instance is still running. And that could have unintended consequences since the hard drive is still in use. At the bottom, click on the create image button. On the left-hand menu, under images, click on AMIs.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=96)** If you scroll to the right, our image will have a status of pending while the process is running. You can click the refresh button at the top to check on the status. After several minutes, you'll see the status change to available. Click on the AMI and click on the launch instance from AMI button. Now we are back on the EC2 launch instance screen but we're launching a new server based on our server image. For name, type awsdemo2. Our AMI that we just created has already been selected for us as the image. For instance type, make sure that t2.micro is selected. For the key pair, select the key pair that we already created called awsdemo. Underneath the networking settings, click the edit button. Under the subnet pulldown, select an availability zone that's different than your other instance. So for me, I'm going to pick us-east-1a. Under firewall, security groups, click the select existing security group option. Select a security group that your other instance using. Mine is using launch-wizard-1. Click on the launch instance button on the right.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-backups-with-an-ami-snapshot?u=76281980&t=194)** Click the view all instances button and you'll see that the other instances starting up. After a few minutes, click the refresh button and the instance state should change to running. Once the new instance enters the running state, click on it and in the details tab, copy the public IP address. In a new browser tab, type http:// and paste in the IP address and hit enter. You'll see the default Apache site once again because remember, this server is a clone of the other server that we just set up. An AMI image is a great way to take a snapshot in time of your server in its full configuration and launch new instances to handle a spike in traffic or restore the instance to a previous state if it gets messed up somehow. Let's leave both instances running and we'll connect them together later in the course. But remember to come back after you're done and under instance state, you're going to select terminate on both of your instances so that you don't run up your bill.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=0)** - [Instructor] The instances that we just spun up, are called on demand instances, and we can turn them off at any time to stop accumulating billing charges. But, if you can help out AWS by telling them upfront what your usage will be over the next year, you can help AWS plan out their needed [Hardware](../../Topics/Hardware.md) capacity. And as a thank you, they'll give you some discounts on your usage. One way to do this, is through reserved instances. Reserved instances aren't actual [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, they're billing coupons you are purchasing for a specific instance type. For example, when you buy a T3 medium reserved instance, you're telling AWS you would like a coupon for the monthly discount off any one, on demand, T3 medium instance. And you can buy this coupon in three different ways. You can buy a coupon where you pay now for the entire T3 medium instance, for the next 12 months, or for the next three years. It's the biggest monthly discount, and it's like getting a great deal by paying upfront for your cell phone plan. Or, you can buy a coupon where you only pay half upfront for the whole year, and ask AWS to split up the remainder each month. Or, you can buy a coupon where you just pay nothing now, but you get the T3 medium for a fixed lower rate
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=94)** for the next year. But you can't get out of the contract, just like a cell phone plan. You don't assign the coupon to one of your T3 mediums. It just comes off in the billing automatically. If you delete one of your T3 mediums, the coupon will just count towards another T3 medium already on your account. The downside is, is that if you have no T3 mediums running, or you changed your T3 medium into say, a T3 large, you already paid for the T3 medium coupon and there's no refunds. Now there's a marketplace where you can sell your partially used coupons, but you're not going to get all of your money back. If you want to purchase a reserved instance coupon, in the services search bar, type cost explorer, and click on the entry that auto completes. On the left hand menu, under reservations, click on recommendations. Once you have your instances up and running for a bit, it will give you some recommendations, and show you your potential cost savings by purchasing reserved instances. If you need a bit more flexibility and you want to be able to go up and down in your t-shirt sizes, use an EC2 instant savings plan instead. Under savings plans, click on purchase savings plans. An EC2 instant savings plan will allow you
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/saving-money-in-ec2-22737463?u=76281980&t=192)** to change the size of your server over the course of your contract, but you must stay within the same instance family. So you could go from a T3 medium to a T3 large, or switch between [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) and [Windows](../../Glossary/Service/Windows.md) instance types, and still stay within your contract. If you need to be able to switch instance families entirely, use a compute savings plan instead. With a compute savings plan, you can switch between instance families because now you are just committing to a minimum hourly spend. This has a lot more flexibility, but it doesn't give you the same savings rate as an EC2 instance savings plan. However, a reserved instance will usually give you the greatest long-term savings, but it's the least flexible option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Hardware](../../Topics/Hardware.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=0)** - So let's say that this cable represents our external internet traffic, and we're going to connect it to our network interface so that our customers can access our web server. Now, for anyone who's run servers before, or set up a home network, you would know that what I'm doing here is a pretty bad idea. This is unfiltered internet traffic, which means that unless I'm plugging this cord first into a firewall, or say a home router, or I'm running a software firewall on my server, that I'm exposing my server to attacks from hackers that are scanning Amazon's IP ranges, just looking for exposed servers like this one. To solve this, Amazon uses security groups, which act as simple firewalls, which allow you to expose only the parts of your server that are configured for public internet traffic. Think of these as line filters on ethernet cords going into your servers. If you do see a security group on a diagram, it's usually a black and red dashed line that is drawn around the resource it's protecting, such as an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. Now that I've got a security group in place, I'm ready to connect back to the public internet. Let's take a look at an example diagram, and then we'll make a change to our security group. Back in the EC2 console, select your first web server instance, and under the Security tab, you'll see that my instance is running a security group called Launch Wizard 1. When creating new security groups
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=97)** from the EC2 Launch Wizard, you can assign different names to new security groups before creating the instance by clicking the Edit button and giving the security group a different name. But once the security group is created, like Launch Wizard 1, you can't edit its name. Once your account gets more usage, keeping up with your security groups can be challenging. In the EC2 console, on the left hand menu, under Network and Security, click on Security Groups. Select the security group Launch Wizard 1, and at the top, click on the Actions pull down. Click the option Copy to New Security Group for security group name, type webservers. And for description, type Allows Public SSH and HTTP for webservers. Under the inbound rules, this security group allows 0.0.0.0/0, and the forward slash here is called a netmask, and it's a shorthand abbreviation for an IP address range. The pull down underneath Source tells us that this will allow traffic from anywhere. If instead, you selected My IP, the /32 means the range is a single IP address. So the range is only limited to
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=193)** the current public IP address of your computer. Whereas /0 here means the range is all IP addresses. Select Anywhere, IP version 4. So this bottom rule says that the server will accept incoming traffic over Port 22, which is the SSH port, from any IP address on the internet. It's not a great idea to have our SSH port publicly exposed to the entire internet, even though AWS gave us a really long and secure private key to use when we created the key pair. Throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter, we are going to discuss some other networking strategies that will give you better security. Our security group will also accept any traffic over Port 80, which is the default HTTP port used by [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) that are not encrypting their traffic. Next to the HTTP Port 80 rule, click the Delete button, and we're going to see what this does to our web server. Also, look down at the outbound rules, and you'll see that this server can make an outbound connection with any destination on the internet using any protocol. So this means that our server can go out on the internet and get software updates or use external APIs. Click Create Security Group.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=288)** On the left hand menu, under Instances, click on Instances, and click on your first running EC2 instance. At the top, in the Actions pull down, under Security, select the option that says Change Security Groups. In the search bar, you can click inside of it and click on the auto completed web server security group, or type webservers to search for it. Click Add Security Group. Instances can use multiple security groups, and their rules stack together. So since Launch Wizard 1 still has the HTTP port open, click Remove next to it. Now click Save. Click on the first instance again, and under the Details tab, click Copy next to the IP version 4 public address. Open a new browser tab, type http:// and paste in the public IP address and hit Enter. You'll see that the web server is now inaccessible because the HTTP Port, Port 80, is not listed as an allowed port, and it's being blocked by the security group. Go back to your previous browser tab,
>
> **[6:22](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-security-groups-as-firewalls-22739500?u=76281980&t=382)** and in the EC2 console, under Security Groups, click on the web server's security group, and under Actions, click Edit Inbound Rules. Click the Add Rule button. In the Type pulldown, select HTTP. This will automatically fill out this rule as being TPC Port 80. For the source, click the pulldown and select Anywhere, IP Version 4. Click Save Rules. Jump back over to the tab that you have up with our web server's public address. Press the Refresh button in your browser, and you should see the web server come back up. Now let's make sure our second instance is using the web server's security group. On your own, repeat the instructions for removing the old security group from your second instance, and assign only the web server's security group to it. Now, let's up our security game and talk about some ways you can securely hide entire servers from public internet traffic and create a private network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=0)** - Just as AWS has virtual servers and virtual hard drives, AWS also has virtual networking components. In the real world, if I had two computers that I wanted to talk to each other, I would plug an ethernet cord into the networking card of each computer, and then I would plug the other end of that ethernet cord into a networking switch. At home, you may also have an internet router that these would plug into and that router has a four port switch built into it, which works the same way that this dedicated switch does. Now if I put a private non ratable IP address on each of these computers, such as 192.168.1.2, and then let's say on my other computer, I give it 192.168.1.3, then these two computers could share files over this private network. Notice that I haven't yet connected external internet to either computer or to the switch. In AWS, the network that we just created is called a virtual private cloud or VPC. Here's the old icon for a VPC. Your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances still have security groups on them and those still take priority, but your instances will also sit within a VPC with private networking addresses, which will allow your servers to talk privately
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=94)** with each other without traversing the public internet. A VPC is indicated on diagrams as a green box that is drawn around the components within the VPC. And the upper left border of the box will have a small VPC icon. Every VPC will have a range of non-routable IPs or private IPs that you can pick from to use in your private network. Within your home network, when you try to link two computers together with a switch, also called your [Local Area Network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) or LAN, you'll be working with ranges of non-routable IP addresses which can be used by any local network such as the common 192.168.1.1 through 255 address ranges
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/virtual-private-cloud-vpc-22731602?u=76281980&t=150)** you'll see used by most home routers. To view and create VPCs in the AWS console, go to the services search bar, and at the top, type in VPC, and click on the entry that auto completes. On the left hand side, click on your VPCs. You might only have one VPC listed, but scroll over in the table and look for a column that says default VPC. AWS created this VPC for us already in the EC2 launch wizard when it launched the first instance. This is called the default VPC, and you must not ever delete it. However, you can create your own VPCs if you want a completely separate network to separate different projects or businesses. You can see that my default VPC operates within the range of non-routable private IP addresses of 172.31.0.0/16 which will go all the way through 172.31.255.255, which is 65,534 usable IP addresses, and it's way more than I'll ever need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=0)** - [Instructor] Since you are given so many private IP addresses to work with in a VPC, you can then create subnets within these IP ranges. A subnet is a group of sequential IP addresses and it's a way for you to divide up your network of available IP ranges into smaller buckets so that you can write networking rules that apply to a group of addresses. On the left-hand menu in the VPC console, click on Subnets. AWS has already created some subnets for us within our default VPC. If you scroll to the right in the table, you'll notice that it created a subnet within each availability zone in this region. So if my [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance has a private IP address of 172.31.0.something, then it's going to be in the US East One region, in the 1A availability zone. You can divide up your subnets even further and a best practice is to create a public subnet within an availability zone that includes all of your servers that will be exposed to incoming internet traffic, like your [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), and then to also create a private subnet, which will include servers that need to be more protected, such as your database servers or file servers.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/public-and-private-subnets?u=76281980&t=95)** This diagram shows one VPC created within a region that includes a public and a private subnet. It shows another VPC created within that same region that also includes a separate set of public and private subnets that extend into a local zone so that these servers can sit even closer to a particular set of end users. If you want to utilize local zones, there are steps to enable them in a new subnet in the AWS docs, but for most applications, you can just create your resources in a region close enough to your users. For this course, we will just use a single public subnet to make things easy, but if you're going to be building out a lot of servers within EC2, it's best to plan out your VPC and subnets now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=0)** - Your router at home creates a private network, much like a VPC, that links all of your local computers and devices together, either through wired connections or through wireless ones. It then routes traffic from the public internet (plastic rubbing) to your private network through a technique called network address translation, or NAT. This allows your wide area network interface to get a single public IP address from your internet provider, like 1.2.3.4, and to share that IP address to all the devices on your local area, network, or LAN. So when one of your computers, such as 192.168.1.2, goes to a website like [linkedin.com](https://linkedin.com), the servers at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) will see traffic coming from the WAN interface at 1.2.3.4, and then when LinkedIn responds, the return traffic is sent to 1.2.3.4, and it's routed by your router back to the originating computer at 192.168.1.2. Now, if some random person on the internet, such as 5.6.7.8, wants to reach one of your private devices, it's going to try to open a connection with 1.2.3.4, which is your WAN interface, and then your router will drop the traffic because it doesn't know which computer on your private network it needs to route this traffic to because no private device first talked to 5.6.7.8.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=96)** With NAT, think of your router like a door with a single doorknob on the inside. Your computers inside the network can turn that doorknob and open the door, which will allow two-way traffic to pass with whoever they just contacted, but once that door closes, traffic from the outside can't get in because there's no doorknob on the outside of the door. In AWS, this is called a NAT gateway, and it attaches to your VPC, and it creates a door to the internet that can only be opened from inside the VPC. Now, your instances can have internet access to reach other services and to download software updates, but no one on the public internet can get to your instances. This is a great way to secure internal servers, such as database servers or file shares from outside attacks, but if you need to run a public server at home, like a web server, the only way to get around this limitation in NAT is to go into your router settings, usually turn on a feature that's called port forwarding, and then that will tell the router to always route certain types of public-initiated traffic to a specific computer on your private network, and you might've done this before if you were hosting a game server for your friends. Now the door to your router has a doorknob on both sides, and it can be opened from either end. Now, in AWS, this is called an internet gateway. Unlike a NAT gateway that only has a doorknob on the inside,
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/internet-and-nat-gateways-22736458?u=76281980&t=194)** an internet gateway has a doorknob on both sides, and it allows traffic originating from the public internet to open that door and to route to instances within your VPC. In the VPC console, on the left-hand menu, click on Internet Gateways. One was already created for us when we launched our new instance. This allows our servers and our public subnet to talk out to the internet, and it also allows for outside internet traffic to pass into our server, which is filtered by the security groups on that instance. In the VPC console, click on NAT Gateways in the left-hand sub-menu and click on Create NAT Gateway. Here, if you had a private subnet, then you would select it in the subnet pulldown and then select an elastic IP in the second pulldown. To go back to our home router example, this is the IP address that your NAT gateway is going to use on its WAN port, and any servers using the NAT gateway will appear to the outside world as only having a single IP address. Now, let's look at what an elastic IP address is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=0)** - Because we told AWS that each of our instances could have a public IP address, AWS randomly assigned a public IP to each of our servers, which is written here in red. And now our computers are accessible from the public internet through the internet gateway that they created for us. But the only catch with these public IP addresses is that if you stop the instance, which is kind of like pulling power to the server, and then you start it back up again later, it's going to go to Amazon's pool of IP addresses and get a new public IP. Now, if you've hard coded your IP address anywhere, such as in your DNS records, which we'll get into DNS later, then you'll need to go through and update everything with your new public IP address. Now, if this happens randomly in the middle of the night, which it can, especially if AWS is trying to recover an instance due to a [Hardware](../../Topics/Hardware.md) failure, then your site's going to be down until you get up and make your DNS changes. It's like waking up one morning, going out to check your mail, and realizing that the post [office](../../Skills/Web%20Development/Microsoft%20Office.md) changed the house number on your mailbox. If you need this public IP address to stay the same, regardless of what happens to this instance, then you'll need to request an elastic IP. Elastic IPs come from Amazon's pool of IP addresses, but they're bound to your AWS account instead of being temporarily tied
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=92)** to a single running instance. You then assign your elastic IP to your running instance, but if you choose to terminate your instance, this elastic IP is going to stay on your account and can be assigned to another instance in the future. But because the internet is running out of IPV4 addresses, they are a precious resource, and Amazon will penalize you with a small fee each month for keeping elastic IPs on your account that aren't in use. So if you terminate your instance, make sure you release its elastic IP if you have no further need of it, because you will be billed for it if you don't. You can manage your elastic IPs from the VPC console, and you would do this to request an elastic IP and bind it to a NAT gateway, but you can also request Elastic IPs from the [EC2](../../Skills/DevOps/Amazon%20EC2.md) console and then bind them to EC2 servers. This will replace the public IP address that AWS has randomly assigned to your running public instance, but now it's a fixed IP that won't change when you stop and start your instance. In the Services menu at the top of the AWS console, switch back to the EC2 console. On the left hand menu, scroll down, and under Network & Security, click on Elastic IPs, click Allocate Elastic IP Address,
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=190)** scroll to the bottom, and click Allocate. And that's it. Now we've got an elastic IP. Remember, we'll be billed for this elastic IP unless we bind it to something like a NAT gateway or an EC2 instance. If you scroll over in the elastic IP addresses table, you'll see that there's no associated instance ID or association ID. Currently, our elastic IP isn't bound to anything yet. If you end up with a ton of elastic IPs, you'll need to periodically review this table and release any elastic IP that isn't in use. To do this, select the IP and click Actions, and then Release Elastic IP Addresses. To bind it to an instance, click on Associate Elastic IP Address. For instance, click inside the search box, and click on AWS Demo 1. For private IP, click inside the search box, and select the only IP address that's listed for this instance. At the bottom, click the Associate button. On the left hand menu, click on Instances and select AWS Demo 1. Now under the details tab,
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/static-addresses-with-elastic-ips-22740496?u=76281980&t=284)** you'll see that the public IP address is now our elastic IP. Now we've got a public IP bound to this instance that will remain with the instance if it stopped and started again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Hardware](../../Topics/Hardware.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=0)** - [Instructor] There are several VPC scenarios laid out in the documentation. The first scenario is a VPC with a single public subnet and this is similar to the architecture we already have for our two running instances. Scenario number two shows what your architecture would look like if you split up your subnets into public and private subnets. A NAT gateway in the public subnet allows your servers within the private subnet to talk to the outside internet but protects the servers from incoming traffic. But if the servers in the private subnet are protected from all outside internet traffic, how do you connect to them to administer them? And what if you want to restrict administrative access to the servers in the public subnet, such as closing off the ports for SSH for [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) terminal access or Remote Desktop Protocol, or RDP, for [Windows](../../Glossary/Service/Windows.md) servers? One way to securely connect to your instances is by using a bastion host. A bastion host is an instance you put in the public subnet that is really locked down and monitored, and you connect to this machine first, and then from there, you make connections to the other servers in your VPC. AWS has a quick start script for this. Type bastion into the search bar and hit Enter.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=97)** Click on the Linux Bastion Hosts entry. These quick starts are some common architectures using AWS best practices that you can launch directly into your AWS account. You can view their recommended architecture and launch this directly into your account using an automation language for infrastructure called CloudFormation, but we'll get into CloudFormation later. Another method for connecting securely to Linux and Windows instances is to use AWS Session Manager. Session Manager is available from within the Systems Manager dashboard from within the AWS console. With Session Manager, an agent runs on your server, and after you've set up the correct IAM roles and permissions, you can securely connect to your instances through the AWS console or command line tools. To learn how to set this up, click on the Setup Session Manager link. Another common solution to securing your network is to use a VPN. By using an AWS client VPN, you can use a VPN client on your home or work computer to establish a secure connection with your VPC. This works really well for allowing you to use coding
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=193)** and [Database Management](../../Topics/Database%20Management.md) tools with your servers just like they were sitting across the desk from you. Another way you can use a VPN within AWS is a site-to-site VPN and this is one of the ways that you can bridge your existing on-premise datacenter network or your entire [office](../../Skills/Web%20Development/Microsoft%20Office.md) network with your VPC. You could use a site-to-site VPN to securely move your data up to AWS as a part of a cloud migration or you would use this in a hybrid model where some of your on-premise infrastructure continues to serve your application, but you start using AWS services to support your on-premise application. If you create multiple VPCs and you need to join these networks together along with the VPN connections to on-premise networks, check out AWS Transit Gateway to help you manage bridging all these networks together. If you need a fast, reliable and stable connection between your data center and AWS, look at AWS Direct Connect. This provides a physical connection between your data center and AWS, and it's used in large-scale hybrid deployments. There's a lot of different ways to go about this and your needs will depend on the size of your deployment.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-vpns-to-access-private-subnets?u=76281980&t=288)** But let's get back to our simple public subnet example with moderate security and talk about some ways to handle our incoming internet traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Windows](../../Glossary/Service/Windows.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=0)** - In our discussion on autoscaling, I had you imagine that you were at a grocery store and then, when the checkout lanes started getting long, autoscaling would open up more checkout lanes by scaling up the number of instances. Sometimes when lanes start getting really, really long, the grocery store will have an attendant walk up and down in front of all the checkout lanes, so that attendant will direct you to which checkout lane you should go to. In a networking world, that attendant is called a load balancer, and it splits up the incoming traffic and balances it among your healthy servers. It's a key component to horizontal scaling. And in AWS, this is called an elastic load balancer. Let me demonstrate how a load balancer works. Now, this isn't an actual load balancer. They're much larger, and some just don't look any different than a rack-mounted computer. But this little hub will make it easier to show you what a load balancer does. You point your users at your load balancer, and that load balancer will then forward that traffic onto any healthy server. If you need to scale up, you add an instance to your load balancer, and it'll start directing a share of the traffic to that new instance. If it detects that one of the servers isn't healthy, it'll stop directing traffic to that server. And you can also tell it to take a healthy server out of rotation, such as when you need to perform maintenance on that server. If the grocery store attendant knows
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/scaling-with-elastic-load-balancer-elb-22736457?u=76281980&t=93)** that the cashier on lane one is about to go on break, they'll stop directing customers to lane one, and that cashier will check out the remaining customers and then close their lane. Likewise, a load balancer will stop sending new connections to a server and let it drain its remaining connections before going offline. Let's set up an elastic load balancer so you can see how this works. There are three types of elastic load balancers. Network load balancers are really fast, but they don't have many features because they achieve that speed by not looking too closely at the traffic coming in. Gateway load balancers are for switching traffic coming into virtual networking appliances made by vendors that aren't AWS, such as Cisco virtual firewalls. Application load balancers are great for web traffic because they will look at the incoming traffic and route it based on a set of rules. We will be using an application load balancer since we are running [Web Servers](../../Skills/Web%20Development/Web%20Servers.md). So let's set one up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=0)** - [Instructor] In the [EC2](../../Skills/DevOps/Amazon%20EC2.md) console take a look at your two running instances. You'll need to note two things before starting. Remember which availability zones your instances are running in, and also remember the name of the security group that both of your instances are using. On the left-hand sub menu, click on Load Balancers, click Create Load Balancer. And under Application Load Balancer press the Create button. For name type testalb. Under Network mapping, select your default VPC. And for mappings, select the two availability zones that your EC2 instances are currently in. I'm going to select the only two subnets that I have in these availability zones, but if you had created public and private subnets, you would select your public subnet. Scroll down to security groups. Load balancers use security groups just like EC2 servers do, so there's a filter on the network lines coming into and out of your load balancer. Click on the link Create new security group. For name type alb-sg for security group and for description type http for webservers.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=101)** Under the Inbound rules, click Add rule. For type select HTTP. For source, select Anywhere-IPv4. This will allow incoming HTTP traffic from the public internet to come into our ALB. Under Outbound rules, click Add rule. For type select HTTP because the HTTP port is open on our target webservers. And to specify our target servers set the destination to Custom and left click inside the search box. Inside the pull down, scroll down until you see a section titled Security Groups. Select the security group that is bound to each of your running EC2 instances. So instead of specifying IP ranges for my [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), you can specify security groups. So any instance that is bound with this security group will be able to receive traffic from the ALB. If you have an all traffic rule above that, click the Delete button. At the bottom click the Create security group button. Now close the new tab that this window spawned in.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=198)** In the ALB launch wizard, click the refresh button next to the security group pull down and select the new security group we just created. Load balancers route their traffic to target groups which include your target servers. If you click inside the select target group pull down, you may find that you don't have any target groups yet. Click the Create target group link and this will open the target group settings in a new tab. The target type will be instances. For name type webservers. The port we'll be forwarding is port 80 and we'll forward HTTP version one traffic. Make sure that you have your default VPC selected. ALB will use health checks to determine that a server is healthy before sending traffic to it. You might have a specific page you want ALB to check, but the route of our site is fine so leave these settings the same and just click Next. If you wanted to check the health of your server by pinging a different port other than port 80, you need to make sure that this health check port is also in the outbound rules of the ALBs security group. Now we are registering target servers
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=295)** to the target group we just created. Click the check boxes next to both servers and click the Include as pending below button. Click the Create target group button. Now you can close this new tab and return to the ALB launch wizard tab. Click the refresh button next to the target group pull down. And now inside the pull down select the webservers target group we just created. At the bottom of this page click on the Create load balancer button. Click View load balancer. In the details panel of our new load balancer, click on the Listeners tab. Under the rules column on the port 80 line click on the webservers target group. Click on the webservers target group name again. And under the Targets tab you will see the two servers in this target group. Since we just created this load balancer, the status of each of our target servers might be initial because it hasn't completed the health check yet. If you give it a few minutes, your health status will change to healthy. And then in the left-hand menu, click on Load Balancers again. Under the description Tab of our test ALB load balancer,
>
> **[6:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/learn-how-to-create-an-application-load-balancer-alb?u=76281980&t=395)** copy the DNS name that's assigned to your load balancer. In a new browser tab type http:// and then paste in your DNS name. Now hit Enter. And it works. Now our load balancer is shuffling the incoming port 80 traffic to both healthy servers. If you want to see some other things that ALB can do and see how you can set up HTTPS for secure traffic, check out my other course called ECS and multi-region load balancing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=0)** - Computers and servers use hard drives to store data, and virtual servers need hard drives as well because this is where they store their operating systems, [Server Configuration](../../Skills/Network%20and%20System%20Administration/Server%20Configuration.md) files, and the source code that you'll create and upload to them to run your applications. But unlike physical hard drives in the real world, virtual drives can grow and shrink in size. You can even snapshot them at any point in time and you can easily clone them. Amazon's primary storage service for [EC2](../../Skills/DevOps/Amazon%20EC2.md) servers is called Elastic Block Store, elastic because it can stretch in size when you need it to. Let's take a look at Elastic Block Store in the EC2 console. Switch back over to the EC2 console. On the left, underneath Elastic Block Store, click on Snapshots. When we made our AMI, you'll see that it created an EBS snapshot of your server's main drive. Now, this snapshot is a little different than the AMI snapshot. The AMI includes everything you'll need to relaunch the instance. The EBS volume is just a snapshot of its hard drive. In the left hand menu, click on volumes. These are the hard drives
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=94)** that are connected to your instances. You can create additional EBS volumes and mount them to your running instance, and this is like adding a second hard drive to your computer. At the top, you would click create volume, and then decide how big you want this drive to be. Select the availability zone of the instance you're going to attach it to, and then click create volume. Click on the new EBS volume that you just created and scroll over to the volume state column. Periodically click the refresh button until the volume state changes to available. Once the volume state is set to available, click on the volume, and then click the actions pull down, and then click the attach volume option. Under instance, select your running instance in this availability zone. At the bottom, click attach volume. This is just like buying a hard drive at the store and plugging it into your computer. Your computer will see that a new device was attached, but the drive is completely blank. There's no file system on the drive, so you need to connect to your instance and format the drive so that you can use this. If you want to do this under [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or [Windows](../../Glossary/Service/Windows.md) Operating Systems, the AWS Docs has a guide that'll help you.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=191)** Some of the other things you can do with EBS volumes is that you can also detach the drive and move it to another computer. With your volume selected, click on actions and click on modify volume. You'll notice here that you can also increase the size of the volume. If you do this, take note that the new space that you add to the drive must also be formatted. If you click the info button next to the size label and scroll down in the Learn more section on the right, you'll see some links to the AWS Docs and they'll tell you how to expand a volume in Linux and in Windows. Click Cancel, because we aren't going to modify this drive at this time. For backups of your server, the best thing to do is to take an AMI image periodically because this can be easily relaunched to restore the server to a point in time. If you have an application where you need to take a lot of snapshots of a data volume that frequently changes, such as a database server, you can create a second EBS volume for your instance and configure your database to store its data files on this new volume. Then you can set a higher interval for when you want snapshots of this volume to occur. EBS volumes are fast, which is why they are the default for new EC2 instances,
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hard-drives-with-elastic-block-store-ebs-22738477?u=76281980&t=287)** but let's look at some options for sharing a drive between several instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [Server Configuration](../../Skills/Network%20and%20System%20Administration/Server%20Configuration.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=0)** - [Instructor] Let's use the AWS SDK, or [Software Development](../../Topics/Software%20Development.md) Kit to interface with S3 from our source code on our server. Before we begin, write down the name of the S3 bucket that we just created, since we'll reference this later within our code. In the AWS console, type [EC2](../../Skills/DevOps/Amazon%20EC2.md) into the search bar and click on the entry that auto completes. Click on instances and click on your first running instance and then click the connect button. Under the EC2 instance connect tab make sure that your username is [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). This is the default local user for this Ubuntu AMI. Click the connect button. Included in the exercise files, you'll find a text file that includes all the terminal commands we're going to run, and it might be easier to pull this up and cut and paste the commands. Paste in the first command which will install [PHP](../../Skills/Software%20Development/PHP.md) on our server along with several other packages that'll help get the AWS SDK installed. Right click inside of this session and click the paste as plain text option. I'm using Chrome as my browser,
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=94)** but if you're using another browser it should have a similar option. Or on [Windows](../../Glossary/Service/Windows.md), you can try Ctrl + Shift + V or on Mac, Apple + Shift + V. If you see the commands pasting into the terminal with any special characters added to the end of it, you might have to hand type the commands into the terminal window if pasting doesn't work. Once the command is pasted or typed in, hit enter to run it. Hit capital Y and enter to confirm. If you're prompted to restart services hit tab to highlight okay, and then hit enter. This next command will install the AWS SDK for PHP using a package manager for PHP called Composer. The command is composer, space, require, space, aws/aws-sdk-php and then hit enter.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=168)** Type nano, space, s3test.php, and hit enter.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=178)** This will open the nano editor in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) and create a new file called s3test.php. Included in the same example files is a PHP file that we first need to edit and put in our credentials. On your local machine, edit this file and change the region where it says region here to the name of your region. Mine is us-east-1. And under credentials, where it says key and secret, and then it says "KEYHERE", you need to put in your access key and your secret access key. On the line that says Bucket and the value says "YOURBUCKET", you'll need to change the name of this to the name of your S3 bucket that you just created. When you're done with your changes highlight just the PHP code and copy it. Back in your terminal window, paste in the code as plain text. To save this file in Nano, hold down the Ctrl key and hit O.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=261)** Then hit enter. This will tell Nano to save the file onto the server. Now hold Ctrl again and hit X to exit Nano. Type PHP, space, s3test.php and hit enter to run our file.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=284)** Once the code has run, switch back to the original browser tab from the EC2 console that launched our terminal session. Type S3 into the service's search bar and click on the entry that auto completes. Click on the bucket name to start browsing the bucket from its route. You'll see a testfromphp.txt file, and if you click on it you can open it. Click on the open button at the top, and after the file downloads in your browser go ahead and open it in notepad. You'll see that the contents of this text file is the same as what we inserted from our source code. Using the other SDKs, such as the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or [Node.js](../../Skills/Web%20Development/Node.js.md) SDKs, is very similar to this example in PHP. There's a lot you can do with this. So check out the full AWS documentation for your SDK to get an idea of some of the other integrations you can use in your apps. Now that you can see how this works, you'll notice that we already stepped over the line and made a major mistake. We pasted our access key and secret access key directly into the source code. So now anyone with access to this server can assume all of our rights within AWS.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/use-the-sdk-to-create-a-file-within-s3-22737461?u=76281980&t=380)** Let's talk about another way to grant our code access to S3 without compromising our access keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (11), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=0)** - Do you remember that I said not to place your access keys directly into a server? Well, to get my code to work, I put my access key, with all of its administrative permissions, directly onto our test server. But now my access key could be compromised if anything ever happens to this server. So how do I prevent this key from getting stolen? IAM or identity access management has a feature called roles. By creating an IAM role, I can tell AWS what permissions this [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance has. In our example, I can use a role to grant read and write permissions to my S3 buckets and apply that role to my instances. Since this role is a property of the instance, it's like the instance type. There's no keys or passwords on the server that can now be stolen. Let's create a new role from our EC2 instance and fix our code. From the AWS console, in the services search bar type IAM and click on the entry that auto completes. On the left-hand sub menu within IAM, click on roles, and then click on create role. Make sure that AWS service is selected as the trusted entity type. And then under use case, click on EC2 and click next.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=97)** In the policies filter box, type S3 and hit enter. Click on the checkbox next to Amazon S3 full access. At the bottom, click next. For role name, type s3grantforec2 all as one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md).
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=123)** And then at the bottom, click on create role. This will create a role that grants full access to any S3 bucket on our account. But you can also create a custom policy that allows only read or write permissions to, say, a single bucket if you would like. The AWS documentation has a few examples to get you started with writing a custom policy, and you can also search our catalog for AWS policy for a deep dive into writing your own policy. Now at the top, click on services. And under recently visited, switch back to the EC2 console. On the left, click on instances and click on the first instance that we created. Then click on the actions pulldown, and underneath security, select modify IAM role.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=193)** In the role pulldown, select the S3 grant for EC2 role that we just created, and then click update IAM role. In your browser, switch your tab back to the SSH session that we already have with our first server. If yours is disconnected, you'll just need to click on the AWSdemo1 instance, and then click connect again. Type nano S3 test.[PHP](../../Skills/Software%20Development/PHP.md) and hit enter. Now we're going to remove the credentials element from this array. So use your arrow keys to place your cursor at the end of the closing bracket, and hold down the backspace key until you get to the comma at the end of the region element. Delete that trailing comma and save the file again by holding down CTRL+O and hitting enter. And then hold down CTRL+X to exit. Type php S3test.php to run the file again.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/iam-roles-for-ec2-22737465?u=76281980&t=268)** You'll notice that the code still works even without the access key because the EC2 instance is now using the role we defined to authorize itself against S3. With any new EC2 instances that you launch, you'll find the role setting in the launch wizard. So you can select this S3 grant for EC2 role, and your code will automatically be granted these permissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (8), [PHP](../../Skills/Software%20Development/PHP.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), cursor (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=0)** - [Instructor] Now that we've seen what a role can do, let's put together all the concepts we've learned so far about Identity and Access Management. It has a lot of terms that sound similar and it can get confusing. IAM is always controlled by the AWS Global Region, which is a special region within AWS. That just means these are settings and services that aren't tied to a specific region. IAM resources are different from your regular AWS resources like your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances or VPCs. Your root account sits off to the side and it's not an IAM resource. But already in this course, we created several IAM resources such as our IAM group called admins, our IAM user that we're currently logged in as, and the S3 grant for EC2 role that we just created. Groups, users, and roles fall under the label of IAM identities. IAM entities are the users and roles that want to access AWS resources. A group will never access AWS services directly. It's the users inside that group that will want to access things.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=94)** So a group is not an entity. An IAM policy is also an IAM resource and these policies attach to IAM identities and tell AWS what the entities can and cannot do. We assigned the administrator access policy to our IAM group called admins to give any users in that group full control over our AWS account. We also attach the Amazon S3 full access policy to our S3 grant for EC2 role. So anything using that role, such as an EC2 instance, will have full control over our S3 buckets. Principles are anyone or anything that is asking to do something with one of our AWS resources, like reading or writing to our S3 bucket. Principles include the root account itself, although you shouldn't use this in everyday use cases, and any IAM entities. When an IAM entity, whether that be a user or a role, makes a call to AWS resources, the IAM policies attached to that role, user, or users group will determine if that principle can access that resource and what rights it'll have. You'll see these terms come up a lot
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/putting-together-all-of-the-iam-resources?u=76281980&t=191)** in the other AWS services, and understanding these concepts will help you design a strong security model and properly wire together your various AWS services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4)
> **Env Vars:** iam (15), aws (11), ec2 (4)
> **CLI Commands:** aws (11)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Storing passwords with Secrets Manager](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/storing-passwords-with-secrets-manager?u=76281980&t=0)** - [Instructor] We followed best practices by creating the IAM role for our [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance to access S3 and removing our secret access key from within our code. However, there are times when you need to pass in credentials to external third party services that aren't AWS services from within your code and you don't want to put those passwords or keys directly within your code either. In these instances, look at AWS Secrets Manager. You can find it by typing Secrets Manager into the search bar. With Secrets Manager, you will store the key or passwords securely into Secrets Manager. In your source code, instead of hard coding this password or key directly into your code you'll just call the AWS API with a small bit of code and retrieve the secret from Secrets Manager. So if your server is compromised or your code is leaked it won't contain your keys and passwords to your external services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** aws (3), iam (1), ec2 (1), api (1)
> **CLI Commands:** aws (3), find (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Long-term storage with S3 Glacier](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=0)** - S3 has a lot of cool features, and when I say cool, I mean ice cold. - [Recordist] Ice cold. If you have older data that's just sitting around your S3 bucket, but let's say you don't want to delete it, you can create a lifecycle policy that'll automatically move the older files in your S3 bucket to a cheaper storage class within S3, and the cheapest storage class that's in S3 is called S3 Glacier. With Glacier, you're charged a fraction of the monthly fee for the files that you put in here. So it's great for server backups or for log files that you just need to keep around for auditing purposes, but just like that extra freezer that, you know, you keep around your garage, anytime that you pull your data out of Glacier, you have to let it thaw. This could take several hours. So only put data in here that's infrequently used, and you're willing to accept the long wait time before you can access it again. In the AWS console, click on the Services pulldown, and then click on Recently Viewed. Hover over S3, and on the left side of the S3 title, click on the star button. This will add S3 as a favorite to your AWS console and create a link for you that stays at the top of the console. Add [EC2](../../Skills/DevOps/Amazon%20EC2.md) as a favorite as well by clicking the star next to its title, since we've been using that one a lot as well.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=98)** Click on S3 and go to the S3 console. From the S3 console, select the test bucket that we just made. Click on the test folder and then click on the first [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) logo that we had uploaded earlier. Scroll down and under Storage class, click on Edit.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=127)** Here you'll see the different storage classes that S3 has. This infographic in the AWS docs gives you a pretty good overview of the differences in the storage classes and how many availability zones your data is going to be replicated into for redundancy. You'll notice one-zone IA only lives in a single availability zone, and this storage class is really good for third redundant copies of your on-premise backups because it's kind of cheap, and you can get your data back faster than you can with Glacier, but since it's your plan C or plan D in a data redundancy plan, you don't need it replicated across a bunch of availability zones and protected against failure like your other data. At the bottom of the storage classes screen, click Cancel because for such a small file, it's kind of a waste to use Glacier for this, but you can see where the options are and how you would apply these to folders or large files. Click the bucket name, up in the breadcrumbs, and click on the Management tab. Here you can create lifecycle policies that automatically move older files in your S3 bucket to a cheaper storage class, and then maybe even eventually delete the files entirely. On the Properties tab of your S3 bucket,
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/long-term-storage-with-s3-glacier-22735519?u=76281980&t=223)** you can see a few of the other features of S3. Versioning lets you keep point-in-time versions of your changed files. At the bottom, static website hosting lets you host an entirely static website directly from an S3 bucket. If you've used [GitHub](../../Skills/Software%20Development/GitHub.md) pages, it's sort of like that, but a little more basic, where you can use a static site generator like Hugo to host a simple blog or marketing site without [Node.js](../../Skills/Web%20Development/Node.js.md) or [WordPress](../../Skills/Web%20Development/WordPress.md) or [Databases](../../Skills/Software%20Development/Databases.md). Search our catalog for AWS S3, and you'll see a number of videos that walk through static site hosting and lifecycle management, if this is something you'd like to use. If you need to move a lot of data into AWS, check out the AWS Snow family of services. With an AWS Snowball, Amazon will ship you a fancy hard drive array that you plug directly into your server, copy your files to it and mail it back to AWS, where they will connect it to their network and load all of your data into S3. This can be much cheaper from moving a lot of data than paying the data transfer costs for using S3 over the public internet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=0)** - So we already know that you can use an S3 bucket to host the static content for your website, like images, and videos. With CloudFront, you can push the contents of this S3 bucket to Edge servers all over the world. So if you have users in Ireland, your videos will load faster for them because they're being served a local copy from the Ireland data center. Now your users in Tokyo or your users in Brazil, will be served content from the data center that's closest to them. CloudFront is a Content Delivery Network or CDN, that can mirror your S3 bucket all across the world, and it's a lot cheaper than a plane ticket to Tokyo. In the S3 Console in your Bucket settings, click on the Permissions tab. This will let you control public access to your bucket, but I can't stress enough that you really need to stop and read the documentation here and observe the warnings. Be careful to not publicly expose your database backups to the entire world. Search our Catalog for S3 Policies, and you'll find some additional resources on how to safely open up permissions to your S3 bucket. Under Block public access, click Edit. We're only going to be hosting public web content through this public bucket.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=92)** So uncheck the box that says, "Block all public access," and make sure the other check boxes are not checked. Click the Save changes button. Heeded the warning here, that, "We are making this bucket public and you need to make sure you aren't exposing sensitive files now or in the future." Type "confirm" into the field and press the Confirm button. Scroll down and under Object Ownership, click Edit. Select ACLs enabled, and then select, "I acknowledge that ACLs will be restored." At the bottom, click the Save changes button. Click on the Objects tab, and then click on the test folder, and then click on the first [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) logo that we uploaded earlier. Click on the Permissions tab, and then click the Edit button. Under Everyone (public access) underneath the Objects column, click on the Read checkbox. Scroll down and and click, "I understand the effects of these changes on this object." At the bottom, click Save changes.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=190)** Now click on the Object URL, and this time you should see the LinkedIn logo and not a permissions denied error. Now that we have a public S3 bucket and a public object, let's use CloudFront to replicate this bucket across several Edge locations for speed and redundancy. In the Services search bar type, "CloudFront," and click on the entry that auto completes. Click Create a CloudFront distribution. In the Origin domain field, Click on it, and it'll auto-populate with a list of your S3 buckets. Select the S3 bucket that we had already created. Scroll to the bottom of the page, and click on Create distribution. Its status is now "Deploying," and it'll take a few minutes for CloudFront to push this bucket out to all the Edge locations. The Edge locations are located all over the globe and getting your static content closer to your end users, will result in faster load times. If you need to speed up more than just website content, take a look at AWS Global Accelerator.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=287)** It can move network traffic between your application running in a single region to an Edge location faster than if that traffic had bounced across the public internet. Think of it like a subspace warp zone to get your data across the world faster. Another thing that you can do with the Edge locations is to turn on S3 Transfer acceleration. This will use an Edge location closer to you or your users for faster uploads and downloads into an S3 bucket. You'll find this setting in the Properties of your S3 bucket. There's even a speed comparison tool, that'll run a quick test from your browser to show you how much faster transfer acceleration will be. Back in the CloudFront dashboard, now that my distribution is complete, click the Copy button next to the Domain Name column. In a new browser tab, paste the URL you just copied, and then at the end of the URL type, "/testfolder/linkedinlogo.png."
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serve-content-faster-with-cloudfront-22734525?u=76281980&t=373)** This matches the same object path from our origin S3 bucket to this file. Hit Enter to see the results. (button clicking) And there we go, now we've sent the LinkedIn logo all across the world and we used Edge locations to go global with just a few clicks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=0)** - AWS has a lot of services for helping you manage [Databases](../../Skills/Software%20Development/Databases.md), and this can be pretty overwhelming. Having a cloud vendor help you manage the servers and backups of your data is called Database as a Service or DBaaS, and it lets you focus on the data itself and optimizing retrieval versus configuring failover and managing database engine updates. If you are migrating an existing application into AWS, then your database technology has already been chosen for you, either by your development team or by the vendor who created your app. And so I would recommend looking at the AWS Data Migration Service, which can take your on-premise relational database and create a [Real-Time](../../Skills/Database%20Management/Real-Time.md) in-sync clone of your database in the cloud so you can perform a smooth transition from your on-premise data center into AWS. Now, if you're building a new application or re-architecting an existing application, choosing a database provider can be complicated. Before you start having an internal war with your team about whether to use an Oracle database or a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database, I would back up and look at the data needs for your whole application. What kind of data will you be storing? How much data do you currently have? How much data will you write to your database over the period of, I don't know, say one hour? How much data will you read? Will you be running a bunch of large queries and reports? What kind of uptime do you need?
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=94)** Ask some higher level questions first and then design a database solution around those broad categories. If you're going to store a lot of historical data for reporting, I don't know, maybe you need a [Big Data](../../Skills/Data%20Science/Big%20Data.md) solution, but if you need real-time access to a current month of data, maybe you just store that in a relational database and then move the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of it into a big data store later. If your relational database is going to ingest a large stream of data, maybe you need a queue that sits in front of the relational database that aggregates some of the data over, say, like a five minute period, and then it only inserts the aggregated data into the relational database. If the data types that you're storing are object base and you don't need a lot of reporting, maybe it's better to use a [NoSQL](../../Skills/Software%20Development/NoSQL.md) database. Once you know the broad strokes and identified the larger pieces of how it's all going to tie together, then you research which relational database would be good for your application based on feature sets and budget and things like vendor support. There are not right and wrong answers here when choosing database vendors, but there's only good, better, and best for your specific use case. But using the wrong type of database technology in the wrong way can really hurt your app going forward. [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) are not a good substitute for a big data store, and vice versa. Even if you're familiar with database types, I would recommend you read the book,
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-database-as-a-service-dbaas?u=76281980&t=187)** "Designing Data-Intensive Applications." It doesn't favor one specific database engine, but it talks about the broad strokes and how the database technologies all differ from each other and when is the right time to deploy each strategy. Most of my experiences with relational database engines, and this book really helped me fill in some gaps in my own knowledge. Getting this higher perspective on how to store and process data within your app will help you select between all of the various services that AWS offers for storing your data. Now, let's look at what AWS can do for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (3), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** aws (6)
> **Env Vars:** aws (6)
> **Definitions:** is called (1)
> **Speakers:** - aws (1)

#### [Relational Database Service (RDS)](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=0)** - If you have a relational database, like [MySQL](../../Skills/Software%20Development/MySQL.md) or [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), you can always spin up an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance and install the database engine directly onto the server. If you're coming from an on-premise environment, this is probably how you already configured your servers and AWS will let you replicate that same environment in the cloud. However, just like your on-premise environment, you may not have responsibilities over the [Hardware](../../Topics/Hardware.md) anymore, but you're still responsible for all the configuration, the operating system updates, the database engine updates, the monitoring, setting up failover replication in case your database instance fails, and, you know, the list goes on and on. So to help you out, AWS has a managed platform where you just give them your database and they do all this for you. They manage the EC2 instances, the database backups, the database engine upgrades, even the failover replication. The service is called Relational Database Service, or RDS. RDS supports most of the popular [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), such as [Postgres](../../Skills/Software%20Development/PostgreSQL.md) and MySQL, [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), and Oracle. Let's dive into a few ways that you can use RDS. This is the RDS console and I'm going to launch a Postgres cluster just so that you can see what some of these settings look like. Similar to launching an EC2 instance, you select a T-shirt size for your database instance. Now you can start small
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=94)** and increase the size of your instance as you scale up; however, you can't scale back down. If you need to scale down, you'll need to launch another smaller RDS instance, transfer your data, and then change your database connections in your code. So start small and scale up only when you need to. If you select the Multi-AZ deployment option, RDS will create a second database instance for you in another availability zone within the same region and automatically configure the cluster for you. Now, if you're running a production database that needs a high uptime, I would highly recommend using Multi-AZ, but it does double your cost, because now you're running two instances instead of one. Although in RDS and in your code, you were still only ever going to connect to the one cluster endpoint. If you have the Multi-AZ option enabled and you need to make changes to your cluster, like provisioning more disk space or going to a larger instance, you'll likely not experience any downtime from these changes, because RDS will make changes to the secondary database first, swap the cluster, and then make changes to the primary database instance. You can always start in a single availability zone and then as your uptime needs increase, turn on Multi-AZ later and tell RDS to provision the cluster in the middle of the night so that you reduce the impact to your customers
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/relational-database-service-rds?u=76281980&t=186)** while it's performing this change. Another thing to note here is that if you choose to restore your database instance from the backups to a point in time in the past, RDS will create a second cluster for you. It won't restore the backups on top of your existing cluster, which is different than how restoring a database works from an on-premise environment. You can manually move data between your new cluster and your existing cluster and then just delete the new cluster when you're done with your repairs. Or if you want to use the new cluster as your main database endpoint, it'll come up with a different database connection string because it's a new cluster. So you'll have to change these database connections in your code to roll the entire cluster back to a point in time. RDS is great, but you still have a few [Database Administration](../../Skills/Database%20Management/Database%20Administration.md) tasks you have to perform, like keeping some monitors on read and write throughput. If the thought of this scares or just bores you, look at Aurora. Aurora works very similar to MySQL or Postgres from a developer standpoint. However, it's a service where even more of the server management is handled by AWS and it'll even run in a serverless model, where you don't even manage the instances at all. So if you want to be as hands-off as possible in managing your MySQL or Postgres workloads or you are picking a relational database for a new project and you don't want to have to deal with anything even remotely close to the engine room, look at Aurora.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (4), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Hardware](../../Topics/Hardware.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=0)** - [Narrator] AWS has a great page that breaks down the terminology around [NoSQL](../../Skills/Software%20Development/NoSQL.md) [Databases](../../Skills/Software%20Development/Databases.md) and shows the different NoSQL databases that they offer. A NoSQL database is just what the name implies. It's usually a database engine that isn't a relational database type that doesn't use the standard [SQL](../../Skills/Data%20Science/SQL.md) query language. There's NoSQL. Instead of imagining the data being stored in a tabular form, like a spreadsheet with fixed data types for the columns, NoSQL databases are great for storing data in a schemaless format. Instead of a mail slot that only accepts postal letters, it's like a package delivery locker where each cubby can fit anything that you want and they all store different things like shoes, or footballs, a candy bar, whatever. The most popular key value store that they offer is called DynamoDB, and it's pretty easy to use. So this exists higher up in the database-as-a-service offering where you really don't do any management of it. You just pay for what you use. And if you partitioned it correctly, it's easier than the RDS offerings to scale up and down. Another really great feature of DynamoDB is global tables, which let you replicate your data across several regions for speed and redundancy. And you don't have to do anything complicated for cross-regional replication if you need that kind of uptime and performance. I recommend you search our catalog for DynamoDB, because we've got a lot of in-depth dives on how this works.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/nosql-databases-22731601?u=76281980&t=96)** And I walked through partitioning and global tables in my other course, "ECS and Multi-Region Load Balancing." One of the databases that popularize NoSQL databases is [MongoDB](../../Skills/Software%20Development/MongoDB.md). DocumentDB is a database platform that's Mongo like, but you don't have to deal with servers and Mongo clusters. Although if you do need to run Mongo directly from AWS servers, there's a white paper in the docs on how to do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [NoSQL](../../Skills/Software%20Development/NoSQL.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1)
> **CLI Commands:** mongo (3), aws (2)
> **Env Vars:** aws (2), sql (1), rds (1), ecs (1)
> **Definitions:** is called (1), is a  (1)
> **Documentation:** the docs (1)
> **Analogies:** it's like (1)
> **Speakers:** - [narrator] (1)

#### [In-memory caches](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/in-memory-caches?u=76281980&t=0)** - When the database has to look up data, it can be slow. And if you need to keep looking up the same piece of data over and over again it can really slow down your application. Some [Databases](../../Skills/Software%20Development/Databases.md) are used like scratch pads where you can just look something up from your database and then you just write it down real fast on your scratch pad and then you don't have to keep looking it up each time. In-memory caches can do this for you and to help you deploy one of these AWS has created ElastiCache. ElastiCache will help you manage and deploy two of the most common types of in-memory caches, Mimcached and [Redis](../../Skills/Software%20Development/Redis.md). Redis is the more popular in-memory cache but I've used Mimchached because it's supported by a few [PHP](../../Skills/Software%20Development/PHP.md) open source apps. Now, you can always install Redis or Mimcached directly on some [EC2](../../Skills/DevOps/Amazon%20EC2.md) servers and set all this up yourself but AWS has simplified a lot of the management of these services with ElastiCache. Not every application will need an in-memory store and to learn the right use cases, I would refer you back to the designing data intensive applications book. If you think you might need this for your project, search our catalog for ElastiCache and we've got a few walkthroughs on how to set one of these clusters up and tie it into your app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Redis](../../Skills/Software%20Development/Redis.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** aws (2), php (1), ec2 (1)
> **CLI Commands:** aws (2), php (1)
> **Prerequisites:** install (1)
> **Speakers:** - when (1)

#### [Big data databases](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/big-data-databases-22740499?u=76281980)

#### [Buffer data with a message queue](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=0)** - When new data needs to be written to your database, your database engine may place a lock or a hold on the table that you're writing to and this is going to prevent other users from reading from that table until you're done writing your new data. Now, when you have a lot of [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) into your database, this wait time on reading from the tables can really slow down your application. A queue temporarily store the data that you need to write, so that a spike in incoming data doesn't cause your database to melt down. This means that your application's users aren't sitting around waiting on your database, so they can move on and keep using the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your app and their data will be written later. This is just one use case for a queue and there's several other use cases, such as creating a messaging framework to help the components of your app talk to each other without relying on the database for this. In AWS, two such services for creating a queue are Kinesis and Simple Queue Service. Kinesis is able to handle a large stream of incoming data, such as [Real-Time](../../Skills/Database%20Management/Real-Time.md) data on what your users are clicking on in your web application or streaming of real-time application logs from your servers. It's also able to connect to other services to do real-time reporting on these large data streams. SQS is more popular and it's simpler to use, hence it's name, Simple Queue Service,
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/buffer-data-with-a-message-queue?u=76281980&t=98)** but it can get expensive if you're sending it lots and lots of events, which is one reason why there's Kinesis. Simple Notification Service, or SNS, can be used to push out a message, such as an email or text message or an HTTP call to a web hook. So after your SQS queue has finished generating the report they were waiting on, SNS can send them an email and let them know that they can log back in and download their report. All the messaging services work a bit differently, so it's important to understand when to use the right tool for the right job. The question isn't, how should I choose between Kinesis or SQS or SNS, like you're somehow choosing between cereal boxes at a grocery store No, no, no, the real question is, when should I use Kinesis or SQS or SNS? Because you might use Kinesis to buffer your incoming data, but then also use SQS at the same time from one of your Kinesis workers to kick off a separate workflow when only certain events come into your Kinesis stream. If Kinesis is a nail gun, then SQS is a hammer and you wouldn't use your nail gun to hang a picture, but if you're replacing a roof, you'll need both tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=0)** - [Instructor] Elastic Beanstalk is great if you have a single code base for your project and you just want to give AWS your code and let them do more of the work of managing the servers and the operating system updates. Underneath the hood, it's still [EC2](../../Skills/DevOps/Amazon%20EC2.md) servers, but it's great for developers who don't have the time for managing servers. Elastic Beanstalk is one way we can host our [WordPress](../../Skills/Web%20Development/WordPress.md) marketing site and AWS has a tutorial in their docs where you can create a high availability WordPress site using RDS for the database and EFS to store the uploaded files. If you're used to hosting WordPress from a shared host like GoDaddy or Blue Host, you usually pick a dedicated hosting plan based on your needs. If you want an experience similar to what you would get with one of these hosts, look at Lightsail. It's interface and [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) are similar to what you would get with another web host and it's a great way to bring a site into AWS. If you're already used to using something like C Panel for managing your web host. If you outgrow the limitations of Lightsail, it has a built-in upgrade path for your site that will transition you to your own EC2 instances.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/hosting-web-apps-with-elastic-beanstalk?u=76281980&t=93)** If you decide in the future that you'd like to move your site back down to the engine room and control it yourself

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** aws (3), ec2 (2), rds (1), efs (1)
> **CLI Commands:** aws (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Running containers on AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=0)** - Containers can be used to take a large monolithic single application and break its features down into smaller [Microservices](../../Skills/Software%20Development/Microservices.md) that can be easier to scale, monitor, and maintain. So instead of my large monolithic app, let's say I've got a microservice container that handles the signups for my app, maybe one that handles the payments for my app, and maybe another one that handles all the reports for my app. Now, if you're new to the world of containers, or you've only briefly heard of technologies like Docker, think of a container like a mini virtual machine, although it's not technically a virtual machine like your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances. Imagine it more like its own little computer, like a Raspberry Pi, where all of your application's software dependencies and libraries are already installed and configured, things like NodeJS and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and all your code is already set up, and just by, say, plugging it in to your container host, your app immediately starts and runs with no setup on your part. Now, if this talk about containers has piqued your interest, search our catalog for Docker or microservices and we'll walk you through hands-on examples so you can use these concepts in your apps. Now, AWS has gone container crazy and they have several platforms to help you host your containers,
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=94)** but the most popular service they have is called Elastic Container Service. Let's dive into this some more. Elastic Container Service is a container orchestration tool. You first create a cluster, and within that cluster, you create nodes, such as EC2 instances, that will run your individual containers. Just like when we load balanced our [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) across two availability zones, you can load balance multiple copies of your containers across nodes running in different availability zones. This will allow your app to scale and provide redundancies if one of those EC2 instances were to fail. Elastic Container Registry, or ECR, gives you a place within AWS to put your container images, which are the blueprints needed to spawn copies of your containers. Your container image will include all of your bundled source code, and the configuration for the operating system layer and any packages and dependencies your application needs. You will tell ECS about your container image when creating the container definition. A service is something that your microservices will do for you, like maintain a login service or a reports service. A task definition will tell ECS that it should always keep
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=191)** two copies of the login containers running at all times. When setting up your ECS task definitions, you'll select the launch type for your containers, either EC2 to create your nodes as EC2 instances, Fargate, or external. External allows you to run containers on your own on-premise servers in a [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) environment. Select EC2 for your launch type if your containers are always going to be running and will be processing lots of incoming requests and need to be available immediately to return responses quickly. Use this launch type if you're going to stash an entire web server backend into a container, like NodeJS, to handle API calls from your application. You will specify which EC2 instance types you want, such as T2 mediums, and how many servers you want in your cluster. Fargate is a bunch of on-demand nodes that are willing to run any number of containers. Select Fargate if you can have a container that only performs a single task, and when it's done, it stops executing. This could be a container that starts up, pulls in a new uploaded image from S3, does some resizing on it, and then writes out the processed image and then it's done,
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/running-containers-on-aws?u=76281980&t=287)** and the nice thing is that you'll only be billed for the time that container spent running. Fargate is great if your containers don't always need to be running and you can afford a little bit of spin-up time while Amazon launches your container on a spare Fargate server. Once your containers on Fargate start running too long or are always being spun up, you'll find it's cheaper just to move these nodes to EC2 instances. To set up your own ECS cluster that is powered by always running EC2 instances, watch my other course on ECS and multi-region load balancing. To see what Fargate can do for you, check out my course on Fargate and GitLab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (9), [Microservices](../../Skills/Software%20Development/Microservices.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1), [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=0)** - [Instructor] One of the most popular container orchestration services is called [Kubernetes](../../Skills/DevOps/Kubernetes.md). Kubernetes is an open source version of an internal [Google](../../Glossary/Service/Google.md) project called Borg that they use to orchestrate their server clusters. If you want to use Kubernetes to orchestrate your containers instead of ECS, Amazon has a service called Elastic Kubernetes Service or EKS. You'll find a lot of similarities between ECS and EKS and it can be hard to decide between them. ECS is simpler to use. Kubernetes can be harder to learn, but it can be run on any on-premise server or cloud provider so you aren't locked into using AWS if you decide you want to switch later. Kubernetes is more popular and you may find more community support, and it may integrate better with some automation tools you'd like to use. Kubernetes also lets you get more control over the networking layer of how your containers will talk to each other. With both ECS and EKS, you can use either [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances for your nodes, Fargate for on-demand nodes, or blend in your own on-premise servers. Depending on the size of your project and its projected future, my recommendations for building
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/using-kubernetes-with-aws?u=76281980&t=94)** a new microservice application are to start small and scale up. Use ECS and Fargate nodes to get started quickly, then migrate the workloads that need to always run to EC2 instances. As the app starts to grow and mature, scale up to Kubernetes and use EKS. And once your app starts getting really big, you might find it's cheaper to start hosting your own on-premise servers instead of paying EC2 prices. And you can run your nodes on-premise with EKS anywhere. Now let's look at another way you can build your app where you can skip setting up servers and clusters and all this complicated container orchestration stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (8), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** ecs (5), eks (5), ec2 (3), aws (1)
> **CLI Commands:** find (3), aws (1)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Serverless functions with Lambda](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=0)** - As a subset of the [Platform as a Service](../../Glossary/Concept/PaaS.md) offerings or [PaaS](../../Glossary/Concept/PaaS.md), a new category has come about called Functions as a Service. Now, containers have all this like extra tooling around them where you need to define what your dependencies are, build them into the container, and then tell the host what kind of resources your container needs, and all this extra stuff just surrounds the actual source code that you want to run. So Amazon thought, could we make containers even easier? Instead of giving us the container and configuring ECS for how to spawn multiple copies of the same container, can people just give us the actual code inside of here that they want to run and just let us, I don't know, figure out the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md)? Whoa, this actually works. Using a service called Lambda you can create Lambda functions that run a single execution of your code as many times as you need to build an entire app. This way is called Serverless Architecture, and it forces you to think about the organization of your application in a slightly different way. And although it's called serverless, it's actually taking your source code and building and running a container for you, which is running on an [EC2](../../Skills/DevOps/Amazon%20EC2.md) virtual machine on a physical server within an AWS availability zone. Serverless doesn't mean that there aren't servers involved, it just means that you don't have to deal with those servers. However, when you're debugging problems
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=95)** with your Lambda functions, it helps to understand a bit about the magic behind the curtain. You can find Lambda in the AWS console by clicking on services and typing in, yep, you got it, Lambda. I've got an example Lambda function here, and I'll just run it by clicking the test button. In serverless design, you don't want a large function, like maybe you could pull off with a [Node.js](../../Skills/Web%20Development/Node.js.md) container that does several things. But you want this Lambda function just to do a single thing. So if your app would have three larger containers on ECS, in Lambda, you could break that down into maybe 15 functions that do the same thing. Here's another example function that we use in my other course on Simple Email Service or SES. The Lambda editor takes inputs, like it can run this Lambda function every time a timer goes off, or every time Simple Notification Service, which is SNS, sends it a notification. So in this example, it's triggered every time an email message is bounced back to us. You can even set up Lambda functions as targets for Application Load Balancer. So anytime someone goes to, say, [halvanta.com/signup](https://halvanta.com/signup), a Lambda function will process that HTTP request and return the response to it. So you can build an entire web app using Lambda or you can even expand your existing web app
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/serverless-functions-with-lambda?u=76281980&t=191)** with new features that you just quickly code in Lambda. Search our catalog for Lambda for a closer look on what you can do with serverless architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Platform as a service](../../Glossary/Concept/PaaS.md) (1), [PaaS](../../Glossary/Concept/PaaS.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=0)** - Remember our lambda functions? These are great for code that runs quickly, but a single execution can't run any longer than 15 minutes. If you have a job that needs to crunch a bunch of data or wait on something to come back from a service or database, you'll need to look at the services that AWS has for [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) and workflows. You can use the messaging services that we talked about earlier, like SQS, within your lambda function, and that could be the trigger to kick off a batch processing job to say, resize a bunch of images. Or it could be the start of a more complicated workflow where say an image is processed, someone manually reviews it sometime in the future, and it goes through another layer of processing and is reviewed again. In other applications, I've seen these jobs handled by either having a long running process within the app somewhere, and that's not good for the server, or there's a cron job somewhere, and that runs in the middle of the night and it crunches on a bunch of data. Now, if your app has some tasks like this, let's take a look at a few other ways that you can accomplish that same job in AWS. If your app needs to crunch through some backend jobs, take a look at AWS Batch. It's a great way to manage and schedule jobs that can use [EC2](../../Skills/DevOps/Amazon%20EC2.md) spot instances. Spot instances have a model very much like Priceline for airfare, where you can bid on using Amazon's unused capacity at a steep discount, but you can get bumped from the flight if someone else
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/managing-long-running-jobs?u=76281980&t=96)** is willing to pay full price for your server. This is great for workloads that just have to be done sometime before next week or sometime before tomorrow morning, and you can save some serious money if you've got some flexibility on when your jobs get done. If you have a multi-step workflow that you need to manage, look at step functions. Step functions are great when you need to step through a series of tasks, and they're easier to read and organize than a 3000 line bash script that you would've just run as a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) cron job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=0)** - We're now moving up to the Softwares of service [products](../../Skills/Software%20Development/Microsoft%20Products.md) abbreviated as [SaaS](../../Glossary/Concept/SaaS.md). In this part of our AWS Starship, high above the engine room, this is the nicest part of the ship. The towels are folded for you and your food is brought directly to your door. These are services you can bake straight into your application and you don't have to worry about how it's hosted or how you're going to maintain it. These services just work and in the shared responsibility model, most of the effort is now on AWS and it's off of you. All of these services that AWSs offers are built on top of the [EC2](../../Skills/DevOps/Amazon%20EC2.md) and storage options that we already looked at but at this level, you won't see any of the servers running this software or have to manage them in any way. You just use the service. They bill you for what you use and AWS worries about keeping it up and scaling it. One such set of services is the AWS tools for storing login details for your app's users. Managing password hashes in your database and making sure you're practicing proper security in case of a data breach has always been a struggle but AWSS has a few services to help you manage your user authentication for you. One of those services is Cognito and it can help you implement sign-in integrations with other providers so your users can sign in with [Google](../../Glossary/Service/Google.md) or their [Facebook](../../Glossary/Service/Facebook.md) logins. Let's take a look at how this works. In the Services search bar type Cognito
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=94)** and click on the Entry that auto completes. Click Create User Pool. This is a pool of users where you would store all of the users related to your app. You first choose if you want Cognito to manage all of the logins by itself. So your app would require that every user sign up for a new account by entering say their email address or phone number. Or you can select to also enable Federated Identity Providers so your users could create accounts in your app by signing in with their Google, Facebook, Amazon or Apple logins. This is similar to creating a new account with [linkedin.com](https://linkedin.com) where it gives you the option to sign in with Google. I'm going to leave Federated Identity Providers off for now. Under the Cognito User Pool Sign-in options, select email address and phone number. Click Next. You define the rules of how strong you want your passwords. You also define whether or not your users will use MFA just like your AWSs account users. For our demo, select No MFA. You also define how your users can reset their passwords. Leave these settings at their defaults and just click Next.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=189)** You then define how new accounts get confirmed. At the bottom of this screen, click Next. AWS wants to know how they should send password reset and account confirmation emails for you on your behalf. Select Send Email with Cognito. Since this is just a demo, AWS has their own email sending service called Simple Email Service or SES and you can check out my other course on SES if you want to know how to send outgoing emails through AWS. Under SMS, make sure the Create a New IAM role option is selected. And for the IAM role name, just type cognitorole. At the bottom, click Next. For user pool name, type awsuserdemo. And then just put some random numbers at the end of this, so that it's always unique. With the Use Cognito hosted UI option, you can have Cognito host your user signup and sign in pages for your app. Scroll down and for app client name, type awsuserdemo. And at the bottom, click Next. And then on the last page scroll to the bottom and click Create User Pool. Click on the name of the pool we just created.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/user-authentication-for-your-app-22731603?u=76281980&t=289)** You can see from the user's tab this is where your app's users will be listed. You can even create a user on someone's behalf. And now you're ready to wire this into your web or mobile app. Cognito does so much for you for handling the drudgery of securely handling account logins for your applications. Search our catalog for Cognito and you'll see examples of how to use Cognito in a sample mobile application. But for now, click the Delete User Pool button at the top of the console and type in your pool name and click Delete so we can clean up our resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Facebook](../../Glossary/Service/Facebook.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=0)** - [Instructor] If you were designing a [Microservices](../../Skills/Software%20Development/Microservices.md) architecture for the backend of your web or mobile app, you were likely building out your own API that will allow your front-end code to interface with your backend code on your servers, containers, or serverless functions. Take a look at API Gateway as a way to publish your [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API endpoints for each of your microservices and point them at various AWS services. So, for instance, your backend could have an API endpoint such as [halvanta.com/login](https://halvanta.com/login), and that's handled by your EKS cluster, but /reports is answered by a Lambda function. If you're building out a newer [GraphQL](../../Skills/Web%20Development/GraphQL.md) API instead of a REST API, take a look at AppSync. These services are great for allowing you to wire together multiple solutions within AWS to handle specific functions within your app, and they make managing the API layer with authentication and logging a bit easier. You'll typically find these services sitting at the very edge of a backend API and brokering traffic for [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, ECS, and EKS clusters and Lambda functions. When you need to start wiring all these services together
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/designing-backend-apis?u=76281980&t=97)** to create a backend, you might need to track down errors or slowdowns in your system. Try out AWS X-Ray. It can perform an x-ray scan on your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) and let you know that your slow endpoint is being caused by some inefficient code on your EC2 instance and not the large image file it's uploading to an S3 bucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Env Vars:** api (8), aws (3), rest (2), eks (2), ec2 (2)
> **CLI Commands:** aws (3), make (1), find (1)
> **Analogies:** for instance (1), such as (1)
> **URLs:** [halvanta.com](https://halvanta.com) (1)
> **Speakers:** - [instructor] (1)

#### [Helpful machine learning services](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=0)** - We've been hearing a lot about machine learning and how computers are beating us at Jeopardy and how they're learning to drive cars. You may not be developing an app that plays trivia games or drives cars but there are pieces to this technology that you can bring into your app to provide some enriching features. However, setting up these servers and learning how to use them can be overwhelming. So AWS has given you some tools that you can build directly into your app to leverage machine learning skills to help with image classification, reading text, understanding voice inputs, translating text into other languages and several other sci-fi future technologies. Let's take a look at what they've got to offer. Machine learning seems like stuff for smart people and if you're into all things machine learning, AWS has SageMaker which helps you build and train machine learning models without making you go through all the hassles of managing servers directly. If you're an aspiring data scientist, this is great news because you want to work with data, not learn how to manage a fleet of servers. We've got a great course on getting started with SageMaker so just search the catalog for SageMaker. For the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of us, Amazon has packaged up some machine learning technologies in an easy to use set of APIs that you can just bake directly into your app. You can pass a block of text into Comprehend and it can tell you the mood of the writer.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=94)** So this would be great for chatbots to find out is a customer starting to get frustrated and then maybe transfer them to a live agent. You can see a few use cases on the Comprehend page and it'll show you some example text and then what response you'd get back from using Comprehend. You can use Lex to build a chatbot for your apps or you can use Personalize to promote recommended [products](../../Skills/Software%20Development/Microsoft%20Products.md) to a specific user based on their shopping habits. Polly can narrate dynamic text into some pretty life-like voices.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=133)** - [Computer] Hello, do you speak a foreign language? One language is never enough.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=141)** - [Instructor] Rekognition can find faces in an image or extract text from an image but if you're processing a large number of documents or handwritten [Forms](../../Skills/Web%20Development/Forms.md), look at Textract which can automate a lot of this for you. Translate can translate text into several languages and it can even detect the language that you're passing into it. Transcribe will work like Alexa does and take natural speech and transcribe it to text.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/helpful-machine-learning-services?u=76281980&t=177)** Hello, Amazon, are you hearing me right now? You can use these services to build out some really cutting edge features that otherwise would be pretty hard to pull off with a small team or a tight deadline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=0)** - Man, this new feature's going to be great. Hey, here's that new code release. I need that up by six tonight, okay, buddy. Thanks. At the start of my career, I was this developer and I couldn't understand why IT couldn't just push a button and release my code. I had deadlines and customers were waiting on my bug fixes. And then ironically, later in my career I became the IT person who took the buggy code from the developers. Now, I was responsible for keeping the servers fast and stable, which put my new priorities at odds with the developers who always wanted to change stuff. [DevOps](../../Topics/DevOps.md) removes the barrier between these two teams and creates a single team that has responsibility over development and operations, DevOps. The developers now help maintain the servers and the IT people now start working more in the code. Now the DevOps team has shared goals. They need to release new features and maintain site reliability. And instead of just asking the question, is our site up, a DevOps team asks the question, is the site running well? Which is a much different approach that now includes things like backend API response times. If new code is released to the site that causes a drop in site performance,
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/what-is-devops?u=76281980&t=94)** a DevOps team should be able to trace that dip in performance back to the code that caused it. And with cloud technologies, servers aren't these prize possessions anymore that take weeks to set up and configure? We used to give servers clever names such as choosing a name for them from the list of moons in our solar system. Now they're just easy come, easy go. We can start looking at infrastructure like we look at code as throwaway objects derived by defined classes. If something's not working, we just delete it. If I need a hundred servers, I'll just define it once and then loop over my code 100 times. Let's dive into the services that AWS has created to help us on this journey to a DevOps team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (6)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=0)** - Every time I make a change to my code, I need to check in the changes into my source control, rebuild my app and then package it back up and deploy it to my platform or my [EC2](../../Skills/DevOps/Amazon%20EC2.md) servers. But what if every time I checked in my code, all this just happened automatically? Imagine how much faster you would be and the team would be if every time a code change is approved, it's automatically tested and deployed to a staging environment, and then if everything's working, deployed into production with a single click. A key component of [agile](../../Skills/DevOps/Agile%20Development.md) development is to release early and often. And this allows the development team to make smaller changes to the code more frequently. And combined with automated testing, performance monitoring and feedback from your users, it allows you to find bugs faster and to easily identify which small set of code changes correlated to the introduction of that bug. To align with this agile principle, a key [DevOps](../../Topics/DevOps.md) practice is the creation of a system that allows for [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md), or CI, which allows the code changes from multiple developers to play together regularly to work out any conflicts when two developers are both working on the same file. It can also run an automated test suite against the code to make sure that the new changes haven't broken anything. For that, Amazon has a tool that's called CodePipeline. CodePipeline can be used to create a workflow
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/developer-tools-within-aws?u=76281980&t=93)** that automatically pulls your code, such as, you know, your code that you have in [GitHub](../../Skills/Software%20Development/GitHub.md) or CodeCommit, and then builds your project and runs some automated tests using CodeBuild. A related key DevOps practice is called continuous deployment, or CD, and this step would occur at the end of your pipeline so that you can quickly introduce these changes into your production system without manually moving new code and changes up to your fleet of servers by hand. CodePipeline can use CodeDeploy and continuously deploy your tested code from your container platform like ECS, or directly to your EC2 servers. Now if you want to see a full CodePipeline in action, check out my other course on ECS and multi-region load balancing, and I'll walk you through setting up an example container that automatically deploys to ECS whenever you make a change to it, and check it in to CodeCommit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (2), [DevOps](../../Topics/DevOps.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (4), find (1), cd (1)
> **Env Vars:** ecs (3), ec2 (2)
> **Analogies:** imagine (1), such as (1)
> **Tools:** github (1)
> **Definitions:** is called (1)
> **Speakers:** - every (1)

#### [Infrastructure as Code with AWS](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=0)** - A key component to [DevOps](../../Topics/DevOps.md) is treating your [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). Earlier in this course, we looked at physical server racks and servers, and while all these objects exist in the real world, in the cloud, these are just representations of virtual components that we've wired together. And because all of this is virtual, we can start treating our infrastructure as bits of code. Using code to describe your infrastructure allows you to keep a single source of truth for the configuration of your servers. It's like a packing manifest of everything that should be on that server and describes and documents the server in a very real way. Okay, for example, if you have 10 identical [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) behind a load balancer and let's say a change is made manually to a single server, the problem will only show up for your users one out of every 10 times and so it's hard to figure out which server is different. Deployment automation tools can check all of your servers against the source of truth and set configurations back to their original states. The three most popular open source tools for this are Puppet, Chef and [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). If you're already using Chef or Puppet, AWS has a service to help you set up the control servers for these tools and that's called AWS OpsWorks. Okay, in addition to Puppet, Chef and Ansible, AWS has created their own infrastructure management tool
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=95)** and that's called CloudFormation. Whereas Ansible and Chef really shine with the management and configuration state of several servers, CloudFormation goes a level deeper for AWS customers. It allows you to script the creation of [EC2](../../Skills/DevOps/Amazon%20EC2.md) servers, VPCs, load balancers, and almost any of the AWS infrastructure and platform services that we've looked at so far. We've got several resources in our catalog on CloudFormation if you want to get started with describing your AWS resources as blocks of code. My advice with CloudFormation is to start early on with it and build it up over time. It can be difficult to wedge an existing AWS infrastructure into a new CloudFormation template that completely describes and configures it, so it's a lot easier to start with CloudFormation from day one, and as your app grows, grow your CloudFormation templates. In the AWS console, type CloudFormation into the services search bar and click on the entry that auto completes. On the right, click on create stack. You can choose whether you would like to create a CloudFormation template that describes new AWS resources or you could even create a script that defines your existing resources, such as the web servers and security groups and load balancers we've already created. Click the use a sample template option
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=189)** and in the search bar, type [WordPress](../../Skills/Web%20Development/WordPress.md). Click on the WordPress blog entry underneath the simple category. Click the view in designer button to view this sample CloudFormation template. Click the fit to window target button right above the [Zoom](../../Skills/Software%20Development/Zoom.md) slider. This script is creating for us an EC2 instance and a new security group to apply to that instance. Click the EC2 instance on the right of the diagram. Click the full screen option next to the code window to see the full script. If you scroll down and look at this web server definition, you'll see that it automatically creates some files directly onto the new instance. It will even install server packages for us. This script can do everything that we had to type in by hand when we set up our web servers. We won't be creating these resources right now but I wanted to show you a sample CloudFormation template and these are great resources for customizing your own templates. Another popular infrastructure as code tool is called [Terraform](../../Skills/DevOps/Terraform.md). Whereas CloudFormation is built into AWS, Terraform will let you use AWS
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/infrastructure-as-code-with-aws?u=76281980&t=284)** or any of the other popular [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) as providers. Terraform also has a large community and the templating style looks similar to CloudFormation but some people find it a lot easier to work with than CloudFormation. In this example, the script is defining the US West 2 region in AWS as the provider, and it's creating a T2 micro instance based on an AMI image. When you set up Terraform, it's going to ask you for your secret access key, and under the hood, it's going to use the AWS API to create and manage resources for you. Just as you might have picked [Kubernetes](../../Skills/DevOps/Kubernetes.md) for your container orchestration service, you might also want to choose Terraform so you aren't locked into an AWS environment if you want to move between cloud providers. If you want to get started with either CloudFormation or Terraform, search our catalog for some great resources on both these topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (6), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (3), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (3), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=0)** - [Instructor] One change that [DevOps](../../Topics/DevOps.md) made on how a service operates is to expand the role of monitoring the service past "Is the site up?" to "How is the site performing?" The easiest way to think about this is to look at the status page of a popular SMS messaging service called [Twilio](../../Skills/Software%20Development/Twilio.md). Their status page is showing a high level status of the various parts of their service in a stoplight format. Red, it's down, yellow, it's having problems, green, it's up And if you scroll down to the bottom of the page, you'll see a line graph of their API's performance over time. A good DevOps team will monitor service performance. So if your service starts to run slower after a new code change was introduced into your environment, then you can identify the slowdown and push up a fix. AWS has a similar status screen for their services. From your console home screen, scroll down. And under AWS Health, click on Go to AWS Health. You'll use the health dashboard to check for outages or performance issues with your AWS services. On the left, click on Service history to see a chart of the AWS services and if they've recently had any service issues.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=95)** Click on Scheduled changes to see if there's any upcoming changes that would impact your services. To monitor the performance of your own AWS resources, type CloudWatch into the services search bar and click on the entry that auto completes. In the CloudWatch console, you can click on Metrics in the left hand menu. And underneath that, click on All metrics. Click on the [EC2](../../Skills/DevOps/Amazon%20EC2.md) card and then click on Per-Instance Metrics. This will show you just some of the metrics that are available on the EC2 instances themselves. You can also use CloudWatch to log errors within your application or within your Lambda functions so you can spot problems and track errors over time. CloudWatch ties into several AWS services and you can do a lot with this to monitor your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). But its strong suit has never been on getting underneath your code or tracing the root cause of a nasty error message from your application. This area is called application performance monitoring or APM. And there's some third-party companies that are AWS partners such as New Relic, Dynatrace, and Datadog. These tools can hook into your AWS account
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/monitoring-with-cloudwatch?u=76281980&t=191)** and hook into your source code and combine the data that you get with CloudWatch with realtime information about how your application is performing on user devices, and give you more visibility into how your code is performing across your servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Twilio](../../Skills/Software%20Development/Twilio.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=0)** - [Instructor] CloudWatch is great at storing logs of the metrics of your AWS resources, such as how much memory your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances have left or how many reads are happening against your database. But unless you know ahead of time the metrics you want to put monitors on, CloudWatch can only help you out in debugging a problem after it's occurred. [DevOps](../../Topics/DevOps.md) Guru takes this a step further and it uses machine learning to look at operational data across your AWS resources and it'll notify you when it sees that things are out of place. Think of it like hiring a robot to bring up the CloudWatch console and constantly scan your metrics for anything that's out of the ordinary. DevOps Guru can notify you if it finds some performance issues with your RDS [Databases](../../Skills/Software%20Development/Databases.md) or if it sees that your Lambda functions are running out of control. An AWS has also [Applied Machine Learning](../../Skills/Artificial%20Intelligence%20(AI)/Applied%20Machine%20Learning.md) tools to help you spot problems directly within the source code of your application. Code Guru will look at your source code repository and every time that you submit a new change to your code base, it'll do an automated [Code Review](../../Skills/Software%20Development/Code%20Review.md) on your source code. It won't fix your code for you, but it will make a comment on your code change inside of your code repository. It can give you suggestions on security flaws
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/devops-using-machine-learning?u=76281980&t=96)** or out-of-date API calls or it can tell you when you've copy and pasted your secret access keys into your source code. We all make mistakes from time to time, and Code Guru is like having a robot programmer sitting over your shoulder double checking your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Applied Machine Learning](../../Skills/Artificial%20Intelligence%20(AI)/Applied%20Machine%20Learning.md) (1), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=0)** - Now, we're looking at the shield surrounding our AWS Starship, and their primary purpose is to deflect attacks from hackers. There's a lot of security features to AWS and we've already looked at a few of the things that we can do such as security groups and some of the features of IM, and there's a lot more we could have dived into with this. AWS has a very short guide on some best practices on security and we've already implemented some of these earlier in the course. And now, we'll talk about some of these other items later in this chapter. It's a very short read, so I recommend looking through this because I'm not going to be able to cover every bullet point here, but I do want you to be aware of two AWS services that help with filtering and blocking suspicious web traffic: WAF, or Web Application Firewall, and Shield. Web Application Firewall can connect to your load balancer and it can be used like any other firewall product you might have used to filter your web traffic. So, your service only responds to customers who are, for instance, within the countries that you operate in, and blocks IP traffic from countries where you don't offer service. This will mitigate some attacks, but one really powerful feature is that they have managed rules that you can subscribe to. So, if you're running a web application, there's a set of managed rules that are being updated constantly to combat the latest threats
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-shield-and-firewalls-with-waf?u=76281980&t=94)** and this can really help out if you've got a hundred other things you need to be doing and you don't always have time to keep a close eye on the web server logs for that, you know, one [WordPress](../../Skills/Web%20Development/WordPress.md) marketing site that you're running. Another product to take a look at is Shield, which can help mitigate a denial of service attack against your application. AWS does have security experts who are monitoring the network as a whole and trying to mitigate these attacks, but a denial of service attack against your specific application will fall into your side of the shared responsibility model. If you have an application that's at high risk of being targeted by bad actors controlling botnets, look into Shield Advanced to get some extra help from AWS to protect your app against these denial of service attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** aws (6), waf (1)
> **CLI Commands:** aws (6)
> **Cross-References:** earlier in (1), later in (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - now (1)

#### [Spot issues with Inspector, GuardDuty, and Macie](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=0)** - I mentioned previously that for your [WordPress](../../Skills/Web%20Development/WordPress.md) marketing site that runs off that single [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance buried in your account somewhere. You may not always have the time to dig through Apache server logs and look for hacking attempts or signs of intrusion. Using the managed rules for WAF will block some of this stuff from getting into your instance. But an unpatched WordPress plugin could be an easily exploitable door for even an entry level hacker. Because you can't always keep an eye on everything your server is doing, AWS created GuardDuty. Think of it as the night security guard walking around your server, shining a flashlight into closets and folders of logs that you may not always be looking at. GuardDuty can find suspicious network connections that your server might be making to indicate that it's been compromised. It's an extra set of eyes on how your server is behaving to see if it's doing anything that looks out of place. Now, getting started with this level of security can be overwhelming from a developer's perspective, especially if you've never had to deal with servers or infrastructure before. Inspector is like a full scan of your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) and it looks for unpatched servers or common security or vulnerabilities that you'll need to fix or block access to using your firewall. If you stepped into an AWS account that was managed by somebody else and you are now responsible for the security of your application,
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/spot-issues-with-inspector-guardduty-and-macie?u=76281980&t=94)** this is a great place to start. And as you make changes to your application and cloud infrastructure, you can rerun this scan periodically so you don't miss anything. Think of it as a full virus scan for your AWS account looking for potential security problems. And do you remember how many times I mentioned in this course to not put sensitive data in a public S3 bucket? AWS made you click through several settings and warnings to prevent even sharing a single file from an S3 bucket, and I made you read all of those warnings. Because this has been such a problem, AWS has a service called Macie that'll scan your cloud resources and look for things that look like sensitive data and report it to you if you're publicly sharing this information. Now, if all the companies on the S3 wall of shame had just used Macie, then we wouldn't be reading in the news about how much data was easily collected from a data breach. If you handle sensitive data for your application, then I recommend looking at Macie to help keep this data secure. Even if you know what you're doing with an AWS account, sometimes things like this just happen because you didn't have time to perform an audit of your S3 bucket and its settings, especially when you've got five other projects due. Ask for the budget to run these services on a regular schedule because it's much cheaper than a data breach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **CLI Commands:** aws (6), apache (1), find (1), make (1)
> **Env Vars:** aws (6), ec2 (1), waf (1)
> **Analogies:** think of it as (2)
> **Prerequisites:** getting started (1), you'll need (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)

#### [Manage EC2 with Systems Manager](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=0)** - [Instructor] In our two running [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, we would have to connect to each instance individually and run [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) terminal commands to install package updates and keep our operating system up to date with patches. But how would you do this with 50 or 100 instances? What if your fleet of servers maintains numerous services that all have to be monitored? Systems Manager gives you a suite of tools for managing a fleet of instances. The Node Management section of Systems Manager will notify you if one set of servers is, say, out of compliance, if one of your servers is missing required [Hardware](../../Topics/Hardware.md), or having operational issues, or needs new patches to be applied to it. Session Manager can give you a secure way to access your EC2 instances. You can always use [Terraform](../../Skills/DevOps/Terraform.md) or other [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) tools to apply automations across a fleet of servers, but Run Command will give you another way to do this from within AWS. Under the Operations Management category, you can use OpsCenter as a central console to tie together alarms from CloudWatch, logs from CloudTrail, and alerts and information from other AWS services. Then with Incident Manager, your [DevOps](../../Topics/DevOps.md) team can get notified of the incident and coordinate their efforts
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/manage-ec2-with-systems-manager?u=76281980&t=95)** as they work together to resolve the issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Terraform](../../Skills/DevOps/Terraform.md) (1), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1)
> **CLI Commands:** aws (2), node (1), terraform (1)
> **Env Vars:** ec2 (2), aws (2)
> **Tools:** terminal (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Traceability with CloudTrail and Security Hub](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=0)** - Sometimes, problems with hacking and data breaches don't always originate outside the shields to your AWS starship. You've got a good crew, but that green guy you picked up at the last star base has been seen poking around areas of the ship you aren't sure he should be in. CloudTrail is an audit trail of changes made internally to your AWS starship. It can also log requests coming in through the AWS API and let you know if somebody's made off with your AWS access keys and is using them for the wrong purposes. Not to sound too paranoid here, but these are always things that happen when we aren't looking and when you least suspect them. CloudTrail can be used to trace back in time what someone was doing in your AWS account and what changes were made. Now, I hope you never have to use this, but for applications that store and manage highly sensitive data that's regulated by compliance standards, it's probably wise to look into CloudTrail so that you can spot problems before someone tries to delete all your servers. And I know I've thrown a lot of different security [products](../../Skills/Software%20Development/Microsoft%20Products.md) at you, but Security Hub tries to bring a lot of these products under one dashboard. Think of Security Hub like the security workstation on your ship's bridge. It's like a single readout of things you should look into from these various security products. So if you think this service would be valuable to you, I highly recommend that you search our catalog
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/traceability-with-cloudtrail-and-security-hub?u=76281980&t=95)** for Security Hub to see it in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3)
> **Env Vars:** aws (5), api (1)
> **CLI Commands:** aws (5)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - sometimes (1)

#### [Investigate threats with AWS Detective](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/investigate-threats-with-aws-detective?u=76281980&t=0)** - [Narrator] Let's say that despite your best efforts, someone navigated around the shields to your Starship, got on board and dug around in your computer core. Your security officer is going to want to start an investigation into what happened and determine if anything was stolen. AWS Detective can log and then scan through all your VPC logs and scan your cloud trail data and tell you which AWS users or resources were making suspicious API calls and what they were trying to do. Then once your investigation is complete, you can take action based upon your investigation. You can find Detective in the services search in the AWS console, and you just click on get started to start collecting the data that you need for your future investigations.

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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/check-for-unwanted-charges?u=76281980&t=0)** - [Instructor] The first thing that we want to do at the end of this course is to clean up. Make sure you terminate any [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances that you started and release any elastic IPs. Delete any EBS volumes to your instances and delete the load balancer and any S3 buckets you created. If you clicked around and explored on your own, check your bill at the end of this month and even if you don't get charged check the line items because they may fall under the free tier and in a year from now you might start getting billed for those services. Remember to periodically check the cost explorer to make sure that you've deleted any other resources that you don't want to continue being charged for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** ec2 (1), ebs (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [AWS Well-Architected Framework](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=0)** - [Instructor] To get some tips from AWS on the best way to build out your cloud architecture, go to aws.[amazon.com](https://amazon.com), and under the Learn menu, click on Architecture Center. Here you can search for architectures that other companies have used. Amazon has published their own set of design principles that they follow, which is called the AWS Well-Architected Framework. You'll also find a Well-Architected Framework Tool within the AWS console that'll analyze your current architecture and let you know if there's any improvements you can make to align with these design principles. The framework is composed of pillars, and under each pillar there are design principles. As we go through these, I will call attention to the design principles AWS feels our most important to implement, such as designing for failure. AWS also has a list of value propositions for you to use when discussing the benefits of [Cloud Computing](../../Topics/Cloud%20Computing.md). I have marked this list of keywords, two of which are included right here in the names of the pillars, security and reliability. In the first pillar for [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md), you should follow the design principles of treating your [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), like you can with cloud formation.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=94)** Make many small changes that are easy to test and back out of, and always design for failure, such as putting your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances in different availability zones. and then learn from those failures and quickly make any changes to your operational procedures. To get reliability, you should automatically recover from a failure to keep high uptime and high availability of your service, and you need to periodically test your recovery automations in a safe environment. Stop guessing at expected usage or server capacity. Track these metrics and then right-size your resources to match your current needs by doing something that your fixed capital expenses of on-premise [Hardware](../../Topics/Hardware.md) can't do. Implement elasticity and shrink your resources to match your actual demand. And then, as need arises, use the [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) of the cloud to scale horizontally, such as using EC2 auto-scaling with load balancers and use automation to control and track all of these processes. For security, you should use identity management policies and audit who has access to your data, and then use traceability tools like CloudTrail to know what they are doing with that access. Apply security everywhere,
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=189)** in your application source code and on all layers of your starship. Automate your security audits so they happen more frequently. Secure your data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) or in transit as it moves through your app and then sits within AWS, and anywhere that you can, just hide sensitive data, even from your own team. If someone doesn't absolutely need to see the email addresses of your users, restrict their access. Practice for all security events, threats that require server patches, warnings, and even practice what you would do if you had a security breach. To get the best performance efficiency, have mechanical sympathy, which means to think about or have sympathy for how your tools are having to work underneath the hood from within your engine room, such as what's actually happening to an EBS disc volume when you have a long running database query. Then you can tweak all of your settings for maximum performance. But, on the flip side, so that you don't have to be an expert on database engine design, just use managed services and use the upper decks of your starship wherever you can and focus your team's effort on building your product and let the smart AWS engineers sweat the engine room for you. Speaking of managed services,
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=284)** use serverless architectures like Lambda to decouple the components in your app into a [Microservices](../../Skills/Software%20Development/Microservices.md) design, and design for failure of these smaller parts instead of having one giant monolithic architecture. And then think parallel. If a job takes one hour to run off of a single server, if you split up the work of that job and instead run a serverless Lambda function 60 times in parallel concurrently and you started all of those 60 executions at once, your entire job would be done in one minute. If this seems like a good idea, run an experiment first. Instead of writing a proposal to outline the potential risk, be quick and [agile](../../Skills/DevOps/Agile%20Development.md) and just clone your application into a test environment, whip up a quick test of how all this would work, and gather some real data. And remember to always start small, but be thinking ahead to deploying into multiple regions, because then, with just a few clicks, you can go global in minutes. To get the best cost optimization, don't spend on IT capital expenses and instead leverage AWS' economies of scale and instead hire a team that focuses on creating business value. In most cases, the operational cost of AWS, which is your monthly AWS bill,
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=380)** will be a lower total cost of ownership because AWS is handling the upfront capital expenses of all of the hardware, some of the software licensing, getting compliance certifications for handling sensitive data, the operational costs of all the smart people it takes to run these systems 24/7, and so on. But even though you might be saving money, put yourself on a budget and practice good cloud financial management, such as optimizing the pay-as-you-go consumption model by measuring efficiencies of what you are consuming for right-sized infrastructure that is tailored to the current needs of your application. If your needs are fixed, consider reserved EC2 instances. If they're elastic, consider savings plans or spot instances. And track and tag expenditures on your AWS bill by team, department, or project to give individual owners the ability to optimize their part of the bill. It's also important that we focus on the [Sustainability](../../Skills/Software%20Development/Sustainability.md) of our planet, and you can do your part to reduce electricity usage and waste by maximizing your application's efficiency, which can lower your costs as well. Know your impact on the environment and set sustainability goals to reduce waste in your application by optimizing your code and being elastic
>
> **[7:56](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/aws-well-architected-framework?u=76281980&t=476)** and right-sizing your resources to match your exact workload. And an easy way to do this is to just use the managed services on the upper decks of the starship, because the AWS team has already heavily optimized these services for sustainability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Sustainability](../../Skills/Software%20Development/Sustainability.md) (3), [Hardware](../../Topics/Hardware.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=0)** - [Instructor] So now you've looked at a few architecture diagrams and you're trying to apply the well architected framework to your application. Where do you go now if you need more information? For starters, you can always use an online learning platform, like [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. AWS also has their own resources and teams that'll help you dive further into AWS. From aws.[amazon.com](https://amazon.com), hover over the documentation menu item. Reading the docs is always a great place to start and there's several examples to help you get started with a new service. Hover over the learn menu to see more ways to dive in. AWS offers their own training resources and their own AWS Academy. If you want to interface with a real person, hover over the partner network menu item. The Amazon Partner Network, or APN, can connect you with consultants and companies who have partnered with AWS to help you get the most out of your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). You can also attend several events that AWS hosts each year to attend in-person sessions. If you need to reach out to AWS directly, you'll need to contact them through the AWS support dashboard, and you'll need to have a paid support plan. Remember, only the root user can change the support plan
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-developers-2023/getting-help-from-aws-support?u=76281980&t=98)** with your root user type support into the services search and click on the entry that auto completes. On the left, next to your support plan, click the change button. The Basic plan is the free plan and it's a great plan to use while you're learning AWS. As you start to build out your application or plan your migration, I recommend switching to the Developer plan. This will give you the ability to open cases with AWS Support. After your application launches or your migration to the cloud goes live, switch to the Business Support plan. This will get you faster support if your production application goes down in the middle of a busy day. Once your reliance on AWS increases, look at the Enterprise Support plan. This will get you an even faster response and it'll assign you to the Concierge Support Team. You'll also get a designated technical account manager assigned to your AWS account to make sure you're getting all the support and training that your team needs to be successful. This is like being invited into the executive lounge at the airport. I envy you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
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

### In [Advance Your AWS Development Skills- Exploring Complex Application Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20AWS%20Development%20Skills-%20Exploring%20Complex%20Application%20Development.md)
**1 of 6** | [Introduction to AWS AI Services for Developers](../Artificial%20Intelligence%20(AI)/Introduction%20to%20AWS%20AI%20Services%20for%20Developers.md) →

### In [Develop Your AWS Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Develop%20Your%20AWS%20Skills.md)
**1 of 4** | [Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md) →

## Appears In

- [Advance Your AWS Development Skills- Exploring Complex Application Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20AWS%20Development%20Skills-%20Exploring%20Complex%20Application%20Development.md)
- [Develop Your AWS Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Develop%20Your%20AWS%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [AWS- Monitoring, Logging, and Remediation (2021)](AWS-%20Monitoring%2C%20Logging%2C%20and%20Remediation%20(2021).md) — Amazon Web Services (AWS)
- [Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md) — Amazon Web Services (AWS)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Amazon Web Services (AWS)
- [AWS Essential Training for Architects](../DevOps/AWS%20Essential%20Training%20for%20Architects.md) — Amazon Web Services (AWS)
- [Building Intelligent Chatbots on AWS](../Artificial%20Intelligence%20(AI)/Building%20Intelligent%20Chatbots%20on%20AWS.md) — Amazon Web Services (AWS)

---

[↑ Back to top](#)