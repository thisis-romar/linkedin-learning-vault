---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: aws-for-developers-cli-tips
url: "https://www.linkedin.com/learning/aws-for-developers-cli-tips"
duration_minutes: 113
duration: 1h 53m
level: Intermediate
updated: 10/11/2023
learners: 9774
skills:
  - AWS Command Line Interface (CLI)
exercise_files: true
github: "https://github.com/LinkedInLearning/aws-for-developers-cli-tips-4469953"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEOai9Mk_3_lg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696618989101?e=2147483647&amp;v=beta&amp;t=GExiqCGKB5DhYgREzfp7ekdgycP5rCknmmHhnHKzJmc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your AWS Development Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Introduction to AWS AI Services for Developers]]'
next_courses:
  - '[[AWS Security Best Practices for Developers]]'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":3,"total":6,"prev":"Introduction to AWS AI Services for Developers","next":"AWS Security Best Practices for Developers"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/aws-command-line-interface-cli
status: not-started
created: 2026-04-21
---

![AWS for Developers: CLI Tips](https://media.licdn.com/dms/image/v2/D560DAQEOai9Mk_3_lg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696618989101?e=2147483647&amp;v=beta&amp;t=GExiqCGKB5DhYgREzfp7ekdgycP5rCknmmHhnHKzJmc)

# AWS for Developers: CLI Tips

> The command line interface for AWS allows you to interact with AWS services, right from your terminal. In this course, instructor Rishab Kumar provides best practice tips for managing common tasks using the AWS CLI, including managing EC2 instances, S3 buckets, permissions, and more. He also shares insights on advanced topics, including integrating the CLI with CloudTrail and troubleshooting commo

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips) | 1h 53m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Rishab Kumar]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/aws-for-developers-cli-tips-4469953)

## Skills Covered

- AWS Command Line Interface (CLI)

## Table of Contents

### Introduction

#### Why use AWS CLI?
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980&t=0)** - Using the command line interface for AWS allows you to interact with AWS services right from your terminal.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980&t=6)** With a few keystrokes you can create resources, modify configurations, and manage your cloud infrastructure.
>
> **[0:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980&t=13)** I'm Rishab Kumar.
>
> **[0:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980&t=14)** I'm a Developer Evangelist, and AWS Community Builder and this LinkedIn Learning Course will cover all you need to know about setting up and using CLI for AWS.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980&t=23)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), cli (1)
> **CLI Commands:** aws (4)
> **Code Keywords:** interface (1), let (1)
> **Tools:** command line (1), terminal (1)
> **Speakers:** - using (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we dive into the exciting world of AWS command line interface, let's talk about what you should know to make the most of this learning experience.
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=9)** While you don't need to be an AWS expert, having a solid understanding of the following concepts will certainly help.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=16)** The first is familiarity with basic cloud computing concepts.
>
> **[0:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=20)** Understanding things like virtualization, scalability and cloud computing models will provide you with a solid foundation for the rest of the course.
>
> **[0:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=29)** Next, a general understanding of Amazon Web Services is beneficial.
>
> **[0:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=35)** Knowing about Key AWS services like EC2, S3, IAM, RDS and CloudWatch will help you grasp the concepts more easily.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=45)** Finally, while you don't need to be an expert in using the command line, some familiarity with basic command line operations will be helpful.
>
> **[0:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=53)** If you have used command prompts or terminals before, you're in great position.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), ec2 (1), iam (1), rds (1)
> **CLI Commands:** aws (3), make (1)
> **Code Keywords:** interface (1), let (1), finally, (1)
> **Tools:** command line (3)
> **Speakers:** - [instructor] (1)


### 1. Introduction to AWS CLI

#### Overview of AWS CLI and its benefits
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=0)** - [Instructor] Welcome to chapter one of our AWS CLI course.
>
> **[0:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=3)** In this video, we'll start by providing an overview of the AWS Command Line Interface, also known as the AWS CLI, and explore its numerous benefits.
>
> **[0:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=15)** By the end of this video, you'll understand what AWS CLI is, and how it can simplify your cloud management tasks and enhance your workflow.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=25)** So let's dive in.
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=27)** The AWS Command Line Interface is a powerful tool that allows you to interact with various AWS services directly from your command-line interface or terminal.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=38)** It provides a command line interface to AWS services and offers a comprehensive set of commands and options for managing your AWS resources.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=49)** Now, you might be wondering why should you use AWS CLI when you already have access to the AWS Management console?
>
> **[0:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=59)** Well, let me share some of the key benefits of using AWS CLI.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=66)** The first benefit is efficiency and speed.
>
> **[1:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=70)** AWS CLI enables you to perform actions quickly and efficiently.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=75)** With a few keystrokes, you can create resources, modify configurations, and manage your cloud infrastructure.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=83)** By leveraging the power of the command line, you can save valuable time and streamline your workflows.
>
> **[1:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=91)** Next is automation and scripting.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=94)** AWS CLI offers extensive support for automation and scripting.
>
> **[1:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=99)** You can write scripts to automate repetitive tasks, set up complex deployments, and orchestrate resource management.
>
> **[1:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=107)** This allows you to standardize and reproduce your configurations consistently, reducing the chances of human error and promoting Infrastructure as Code practices.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=120)** Third one is flexibility and portability.
>
> **[2:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=124)** One of the great advantages of AWS CLI is its flexibility and portability.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=131)** It works seamlessly across different platforms including Windows, macOS, and Linux.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=138)** Whether you're working on your local machine or within a remote environment, you can rely on AWS CLI to manage your AWS resources consistently.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=148)** Finally, integration and extensibility.
>
> **[2:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=152)** AWS CLI is designed to integrate with other tools and services, allowing you to build custom workflows and leverage third party integrations.
>
> **[2:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=163)** You can combine AWS CLI commands with other scripting languages, SDKs, and automation frameworks to create powerful solutions tailored to your specific needs.
>
> **[2:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=175)** These are just a few of the benefits you'll experience when using AWS CLI.
>
> **[3:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=181)** Throughout this course, we'll explore the capabilities of AWS CLI in detail, covering various AWS services and scenarios.
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=190)** By the end, you'll have the knowledge and confidence to harness the full potential of AWS CLI for your cloud management tasks.

> [!info]- Semantic Content
>
> **Env Vars:** aws (22), cli (14)
> **CLI Commands:** aws (22)
> **Code Keywords:** interface (4), let (2), finally, (1)
> **Tools:** command line (4), terminal (1)
> **Definitions:** known as (1), is a  (1)
> **Code Identifiers:** macos (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Installing and configuring AWS CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=0)** - [Instructor] Let's go through the process of installing and configuring the AWS Command Line Interface on your local machine.
>
> **[0:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=7)** By the end of this video you'll be ready to start using AWS CLI and manage your AWS resources from the command line.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=16)** Let's get started.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=18)** The first thing that's needed is Python 3.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=22)** Ensure that you have Python 3 version 3.3 or higher installed on your machine.
>
> **[0:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=28)** AWS CLI requires Python to function properly.
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=33)** You can check that by typing python3 --version, or python --version, depending on your system.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=45)** And as you can see, we have Python 3.9 installed on this machine, so we are good.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=52)** The second requirement is an AWS account.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=56)** To configure AWS CLI, you'll need an AWS access key and secret access key.
>
> **[1:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=62)** These credentials provide secure access to your AWS resources.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=68)** You can obtain these keys from the AWS Management Console by navigating to the Identity and Access Management service.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=78)** Head over to your AWS Management Console.
>
> **[1:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=82)** And mine might look different because it's zoomed in for better visibility.
>
> **[1:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=87)** On the top you'll see a search bar, and type in IAM.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=94)** And click on the IAM tab.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=100)** This should open up your IAM dashboard.
>
> **[1:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=104)** And as you can see, I only have one user.
>
> **[1:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=109)** And if we click on Users on the left-hand side of the navigation pane.
>
> **[1:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=115)** And now to add a new user, click on Add users.
>
> **[2:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=123)** I'm going to name this user as aws-cli-user.
>
> **[2:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=130)** Click Next.
>
> **[2:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=134)** And let's keep everything else as default, so click Next.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=142)** Now click on Create user.
>
> **[2:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=145)** As you can see, we have a green check mark saying, "User created successfully."
>
> **[2:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=150)** Now we need to create an access key and secret access key.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=156)** Click on the user that you just created.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=160)** And now you want to click on the Security credentials tab.
>
> **[2:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=170)** After scrolling down, you'll see that we have no access keys.
>
> **[2:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=174)** Click on Create access key.
>
> **[2:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=179)** And as you can see, there are different use cases you might use your access key and secret access key.
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=185)** For us, it's going to be Command Line Interface, which is the first option.
>
> **[3:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=193)** And then if you scroll to the bottom, click on I understand the above recommendations and want to proceed.
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=201)** And then click Next.
>
> **[3:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=205)** It's a best practice to give your secret key and access key a tag value.
>
> **[3:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=223)** Then click on Create access key.
>
> **[3:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=227)** And now you can see a green check mark on top saying, "Access key created."
>
> **[3:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=232)** You have to treat them as username and password for any of the other services that you might use, since these provide access to your AWS account.
>
> **[4:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=243)** Make sure that you have saved your access key and secret access key somewhere safe.
>
> **[4:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=249)** You can also download the CSV file.
>
> **[4:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=253)** After you have saved your access Key and secret access key securely, click Done.
>
> **[4:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=261)** And now if we go back to the Users tab, you can see we have an AWS access key generated for our user.
>
> **[4:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=270)** Now that we have our user created, it's time to install AWS CLI on our local machine.
>
> **[4:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=277)** The installation process may vary slightly depending on your operating system, but the overall steps remain the same.
>
> **[4:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=285)** I'll guide you through the general installation process for a macOS system, since that's what I'm using here.
>
> **[4:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=292)** Go to the AWS Command Line Interface official documentation website.
>
> **[4:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=297)** And there you'll find the instructions for installing AWS CLI.
>
> **[5:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=303)** Since mine is a macOS system, I'll click on the macOS instructions.
>
> **[5:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=313)** And you'll see a few options to install or update the AWS CLI.
>
> **[5:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=318)** One of them is a GUI installer.
>
> **[5:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=320)** And you could also use the command line installer.
>
> **[5:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=324)** Since this is a CLI course, let's go with the command line installer.
>
> **[5:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=334)** You'll see a bunch of commands that you'll have to run in your terminal.
>
> **[5:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=338)** Let's copy them and head over to our terminal.
>
> **[5:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=344)** Paste the commands in your terminal and hit Enter.
>
> **[5:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=350)** Also to note, depending on the access that your user have, you might have to enter an admin password.
>
> **[5:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=358)** But now we have the AWS CLI version to install.
>
> **[6:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=363)** And you can verify that installation by typing in aws --version.
>
> **[6:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=374)** As you can see, the output says aws-cli version 2.13.7.
>
> **[6:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=383)** So if everything is set up correctly, you should see the version number of the installed AWS CLI.
>
> **[6:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=390)** Now that you have AWS CLI installed on your machine, let's move on to configuring it to work with your AWS account.
>
> **[6:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=399)** So I'm going to clear this out for better readability and type in aws configure.
>
> **[6:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=409)** And now it should ask you for the AWS access key ID.
>
> **[6:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=413)** Remember, these are the access key and secret access key that we created a few minutes ago.
>
> **[7:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=421)** So copy the access key ID and paste it into your terminal.
>
> **[7:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=426)** And next it'll ask you for your AWS secret access key.
>
> **[7:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=431)** And now you also have the opportunity to give AWS CLI a default region.
>
> **[7:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=437)** I'll choose the closest one to me, which is us-west-1.
>
> **[7:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=446)** And you can find this in your AWS account and pick whatever your preferred region is.
>
> **[7:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=455)** For the default output format, I'll leave it blank, which defaults to none.
>
> **[7:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=462)** And there we go.
>
> **[7:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=463)** We have our AWS CLI installed and configured with our access key and secret access key.
>
> **[7:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=473)** Now you're ready to start managing your AWS resources directly from the command line.
>
> **[7:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=479)** Now you're ready to start managing your AWS resources directly from the command line.

> [!info]- Semantic Content
>
> **Env Vars:** aws (27), cli (12), iam (3), csv (1), gui (1)
> **CLI Commands:** aws (31), python (5), find (2), python3 (1), make (1)
> **Tools:** command line (8), terminal (4)
> **Code Keywords:** let (6), interface (3), function (1), default, (1)
> **UI Navigation:** click on (10), go to (1)
> **Prerequisites:** install (3), configure (2), you'll need (1), set up (1)
> **Versions:** python 3 (3), version 3 (1), version 2 (1), 13.7 (1)
> **Definitions:** is a  (3), is an  (1)

#### Basic commands and syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=0)** - [Instructor] Let's cover the basics of AWS CLI commands and syntax.
>
> **[0:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=5)** Understanding these fundamentals is crucial as we'll be using them throughout the course.
>
> **[0:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=10)** By the end of this video, you'll have a solid grasp of how to structure AWS CLI commands effectively.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=18)** AWS CLI commands follow a specific syntax that contains of a command name, options and arguments.
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=27)** Let's break it down.
>
> **[0:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=29)** An AWS CLI command typically follows this structure: Aws, space, service, space, operation.
>
> **[0:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=37)** The aws keyword signifies the start of a command followed by the AWS service you want to interact with.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=45)** And finally, the specific operation you wish to perform on that service.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=51)** Options and arguments provide additional information to AWS CLI commands.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=56)** Options modify the behavior of the command, while arguments specify the resources or values the command should operate on.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=66)** Options are typically proceeded by dash, dash, while arguments are specified without any prefixes.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=75)** Now let's go over some common command elements you'll frequently encounter in AWS CLI.
>
> **[1:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=82)** First is service-specific commands.
>
> **[1:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=84)** Each AWS service has its own set of commands tailored to its functionalities.
>
> **[1:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=90)** For example, ec2 run-instances is a command specific to Amazon EC2 that launches EC2 instances.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=100)** Next is flags.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=101)** Flags are options that change the behavior of the command.
>
> **[1:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=105)** They're usually preceded by dash, dash.
>
> **[1:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=109)** For example, --region specifies the AWS region to perform the command in.
>
> **[1:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=117)** Next, we have output format.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=120)** AWS CLI provides various output formats to display command results.
>
> **[2:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=126)** The --output flag allows you to specify the desired format, such as JSON, text or table.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=135)** We also have filtering and curing.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=138)** AWS CLI commands often include options to filter and curate the results.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=144)** For instance, --filter can be used to narrow down the output based on a specific criteria.
>
> **[2:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=152)** Last but not least, we have pagination.
>
> **[2:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=155)** When dealing with large result sets, AWS CLI employs pagination by default.
>
> **[2:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=161)** You can control pagination using --page-size or --starting-token options.
>
> **[2:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=170)** Let's look at a few examples to solidify our understanding of AWS CLI commands and syntax.
>
> **[2:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=176)** To list your S3 buckets, you would use the command aws s3 ls.
>
> **[3:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=183)** The s3 denotes the S3 service and ls stands for list.
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=190)** Running this command will display a list of your S3 buckets.
>
> **[3:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=195)** Let's try that out in our terminal.
>
> **[3:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=198)** Let's type aws s3 ls to list our S3 buckets.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=206)** Oops, an error occurred.
>
> **[3:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=209)** We got an AccessDenied when we were trying to call the ListBuckets operation.
>
> **[3:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=214)** Let's go over it together.
>
> **[3:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=217)** Head over to your AWS management console and go to the IAM dashboard.
>
> **[3:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=224)** Click on the users and then click on the user that you just created for your CLI use.
>
> **[3:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=232)** If you scroll to permissions, you can see we have zero permission policies assigned to this user.
>
> **[4:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=241)** Let's click on add permissions.
>
> **[4:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=248)** Here you can either add the CLI user to a group that you might have.
>
> **[4:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=254)** You could also copy permissions that you might have for another user or you could attach some policies directly to this user.
>
> **[4:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=262)** And that's what I'm going to do.
>
> **[4:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=266)** And if you scroll down, you can see all these different type of policies that you can attach depending on the services you'll be needing.
>
> **[4:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=275)** For the purposes of this course, I'm going to give it the administrator access but it is not best practice.
>
> **[4:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=283)** Make sure you use fine grain access for your CLI user.
>
> **[4:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=288)** After picking up the policies, click next and click on add permissions.
>
> **[4:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=298)** Okay, we see a green check mark saying one policy added.
>
> **[5:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=302)** Let's head over to our terminal again and run the aws s3 ls command again.
>
> **[5:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=308)** So instead of typing it out, I'm going to hit the up arrow and save some time because it'll type out the last command and hit enter.
>
> **[5:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=319)** There we go.
>
> **[5:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=320)** It listed two buckets that I created a while ago.
>
> **[5:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=323)** In your case, it might have listed zero buckets if you don't have any.
>
> **[5:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=327)** Great, now we have permissions set for our CLI IAM user and have a solid understanding of AWS CLI commands and syntax.
>
> **[5:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=336)** We will dive deep into some common AWS services.
>
> **[5:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=339)** Remember, mastering these basics will set a strong foundation for your journey with AWS CLI.

> [!info]- Semantic Content
>
> **Env Vars:** aws (17), cli (16), ec2 (2), iam (2), json (1)
> **CLI Commands:** aws (22), ls (4), make (1)
> **Code Keywords:** let (9), finally, (1), default. (1), case, (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1)
> **Analogies:** for example (2), such as (1), for instance (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), stands for (1)
> **Best Practices:** best practice (1)


### 2. Managing EC2 Instances with AWS CLI

#### Creating and launching EC2 instances
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of AWS CLI, let's dive into creating and launching Amazon Elastic Compute Cloud instances, also known as EC2 instances using the AWS CLI.
>
> **[0:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=14)** By the end of this video, you'll be able to leverage AWS CLI to provision EC2 instances with ease.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=21)** Let's get started.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=23)** The first step to creating an EC2 instance is choosing an Amazon machine image, also known as AMI.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=30)** AMIs provide the foundation for your virtual machine containing the operating system and any additional software you may need.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=38)** Let's head over to AWS Management console and find a suitable AMI.
>
> **[0:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=43)** So, in your AWS Management console in the search bar type EC2, click on the tab that says EC2, and on the left-hand side of the navigation window, you'll see images tab, click on AMIs, and you might have your personal Amazon machine images already that you might see here, but you can also explore the public images that are provided by Amazon.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=78)** You can do that by clicking on the AMI catalog, and now, you can see we have 44 Quickstart AMIs.
>
> **[1:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=87)** For the purposes of this course, I'll be using Amazon Linux 2023 AMI.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=93)** In order to create an instance, you'll need the AMI ID, which you can find right under the name of the Amazon Linux 2023 AMI or whatever AMI you decide to use.
>
> **[1:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=106)** Now, let's go over the basic command structure to launch your EC2 instance.
>
> **[1:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=110)** To create an EC2 instance using AWS CLI, we'll use the run-instances command.
>
> **[1:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=116)** It follows the following syntax.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=119)** The image ID is the option that specifies the ID of the AMI you want to use for your instance.
>
> **[2:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=125)** Instance-type defines the instance type such as t2.micro, M5 large, or any other supported instance types.
>
> **[2:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=134)** The key name option specifies the key pair to associate with the instance enabling, as such access for Linux instances.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=142)** We'll also need to provide the security group IDs that control the inbound and outbound traffic to the instance.
>
> **[2:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=149)** Since we haven't created a security group and a key pair yet, our command is not complete, but to create the instance, this is what the command would look like because the AMI ID, 12345678, does not exist.
>
> **[2:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=165)** But to get an idea, you have the AMI ID, you have an instance type that's t2.micro, we have a key name, which is my-key-pair, and we are also specifying a security group ID valued sg-12345678.
>
> **[3:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=181)** Once you execute this command, AWS CLI will initiate the instance creation process.
>
> **[3:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=187)** You'll receive a response containing details about the new instance such as the instance ID, public IP address, and more.
>
> **[3:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=196)** Congratulations.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=197)** You now know the command structure and additional configuration needed before we can launch our first instance.
>
> **[3:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=204)** Now, let's configure a security group and a key pair so that we can launch an actual instance.

> [!info]- Semantic Content
>
> **Env Vars:** ami (10), aws (7), ec2 (7), cli (5)
> **CLI Commands:** aws (7), find (2)
> **Code Keywords:** let (5), public (2)
> **UI Navigation:** click on (2)
> **Definitions:** known as (2)
> **Analogies:** such as (2)
> **Prerequisites:** you'll need (1), configure (1)
> **Speakers:** - [instructor] (1)

#### Working with EC2 security groups and key pairs
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=0)** - [Instructor] Now let's work with EC2 security groups and key pairs using the AWS Command Line Interface.
>
> **[0:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=7)** By the end of this video you'll be able to effectively create and manage EC2 security groups and key pairs using AWS CLI.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=17)** EC2 security groups and key pairs are essential components for securing your EC2 instances.
>
> **[0:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=24)** Let's explore how to work with them using AWS CLI.
>
> **[0:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=29)** Security groups act as virtual firewalls controlling inbound and outbound traffic for your instances.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=36)** You can specify the protocols, ports, and IP ranges allowed to access your instances.
>
> **[0:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=44)** Let's see how to create a security group using the CLI.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=48)** To create an EC2 security group using CLI we'll use the create security group command.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=54)** It follows the syntax AWS space EC2 space create security group and then the group name and description.
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=63)** Let's break down each element.
>
> **[1:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=65)** The first one is group name.
>
> **[1:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=67)** This option specifies the name you want to assign to the security group.
>
> **[1:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=71)** The second one is description.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=73)** Here, you provide a description that explains the purpose and characteristics of the security group.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=80)** Now let's put it all together and run the command to create a security group.
>
> **[1:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=85)** Let's head over to our terminal and now I'm going to clear the screen for better visibility.
>
> **[1:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=91)** And let's type out the command.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=93)** AWS EC2 create-security-group.
>
> **[1:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=102)** The first option was group name and we'll call this my security group.
>
> **[1:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=113)** You can name your security group appropriately and the second one was description.
>
> **[2:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=121)** And then give this a description of my first security group.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=129)** And remember to have your description in quotes.
>
> **[2:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=133)** Hit enter and there we go.
>
> **[2:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=136)** It gives us an output of the security group ID, which means the creation of the security group happened successfully.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=144)** With the security group created we can now add rules to allow inbound and outbound traffic.
>
> **[2:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=151)** These rules define which protocols, ports and IP ranges are allowed or denied access.
>
> **[2:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=158)** You can configure rules for SSH, HTTP, HTTPS, and any other protocols your application requires.
>
> **[2:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=167)** To add rules to an EC2 security group using AWS CLI we'll use the authorize-security-group-ingress and authorize-security-group-egress commands.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=180)** They follow a very similar syntax to create security group.
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=185)** The ingress goes AWS space EC2 space authorize-security-group-ingress along with the group ID, the protocol, the port, and the CIDR.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=197)** And similarly for egress you just specify authorize-security-group-egress with the same options.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=206)** Let's break down each element.
>
> **[3:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=209)** The first one is the group ID.
>
> **[3:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=211)** This option specifies the security group ID to which rule should be added.
>
> **[3:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=217)** The second one is protocol.
>
> **[3:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=218)** Here you define the protocol such as TCP, UDP or ICMP.
>
> **[3:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=224)** Third one is the port.
>
> **[3:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=226)** This option allows you to specify the port or port range for the rule.
>
> **[3:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=231)** Last but not least is CIDR.
>
> **[3:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=233)** You'll need to provide the CIDR block or IP range that should be allowed access.
>
> **[3:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=239)** Now let's put it all together and run the commands to add rules to our security group.
>
> **[4:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=245)** Let's head over to terminal and let's add SSH access to our security group.
>
> **[4:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=251)** And we can do that by typing AWS EC2 authorize security group ingress
>
> **[4:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=268)** group ID, which is the security group ID that was outputted.
>
> **[4:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=282)** Protocol, which will be TCP.
>
> **[4:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=290)** Port, which is 22 for SSH.
>
> **[4:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=296)** The last one is CIDR.
>
> **[4:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=298)** And we'll use our own public IP as it is not good practice to open up port 22 to the entire world.
>
> **[5:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=306)** So in my case, it's 172.217.22.14 and hit enter.
>
> **[5:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=314)** Oops, looks like there is an error.
>
> **[5:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=316)** So I missed out a slash for my IP address CIDR.
>
> **[5:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=321)** So I'm going to hit the up arrow to get that command back and add /32 just for that individual IP.
>
> **[5:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=330)** And if we hit enter again, you can see that the ingress rule was added to our security group which allows SSH access from this specific public IP which is 172.217.22.14.
>
> **[5:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=345)** Moving forward, key pairs provides secure access to your EC2 instances by enabling SSH connectivity for Linux instances.
>
> **[5:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=354)** Let's explore how to create and manage key pairs using AWS CLI.
>
> **[6:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=360)** To create a key pair using AWS CLI we'll use the create-key-pair command.
>
> **[6:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=366)** It follows the following syntax, AWS space EC2 space create-key-pair with a parameter key-name.
>
> **[6:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=377)** This command will generate a new key pair and provide you with the private key.
>
> **[6:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=381)** Remember to keep the private key secure and treat it as your password.
>
> **[6:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=387)** Now let's put it into action and run the command to create a key pair.
>
> **[6:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=391)** Head over to your terminal.
>
> **[6:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=393)** And again, for readability, I'm going to hit clear.
>
> **[6:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=398)** Let's type the command AWS space EC2 space create key pair, and the key name I'm going to name it my key pair.
>
> **[6:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=419)** And as you can see, it gave us the private key, which again I've blurred this out so that the private key remains secure.
>
> **[7:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=427)** Make sure you treat yours as a password.
>
> **[7:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=431)** Remember, we needed a security group and a key pair to launch our first EC2 instance.
>
> **[7:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=437)** Since we have both of these now let's launch our first instance.
>
> **[7:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=441)** Let's head back over to our terminal again and let's execute the EC2 run instance command.
>
> **[7:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=449)** So AWS space EC2 space run-instance.
>
> **[7:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=459)** The first option was image ID.
>
> **[7:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=462)** And you can copy this from your AWS management console.
>
> **[7:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=467)** Remember, I was going to use the Amazon Linux 2023 AMI.
>
> **[7:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=471)** So the AMI ID is right under the name.
>
> **[7:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=475)** I'm going to copy this, use it in our command.
>
> **[8:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=480)** The next option is the instance type.
>
> **[8:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=485)** I'm going to be using a T2 micro instance.
>
> **[8:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=491)** Next is key name.
>
> **[8:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=493)** I named my key, my key pair.
>
> **[8:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=500)** And the last one is security group.
>
> **[8:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=507)** And here I have the security group ID from earlier which we created.
>
> **[8:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=512)** Hit enter.
>
> **[8:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=515)** Now you can see that it gave us an output with some of the instance settings in JSON format.
>
> **[8:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=522)** And to confirm if the EC2 instance was created we can go into our management console and visit the EC2 dashboard.
>
> **[8:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=533)** And you can see it says instances running 1.
>
> **[8:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=537)** As you can see, we have this instance that has no name because we didn't specify it in the command but is a T2 micro instance, which is in the initializing phase.
>
> **[9:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=549)** Fantastic.
>
> **[9:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=550)** You now know how to launch an EC2 instance and also create and manage EC2 security groups and keep pairs using AWS CLI.
>
> **[9:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=560)** These skills will empower you to enhance the security and access control of your EC2 instances effectively.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (21), aws (15), cli (8), ssh (5), cidr (5)
> **Code Keywords:** let (17), private (4), public (2), interface (1), case, (1)
> **CLI Commands:** aws (15), ssh (5), make (1)
> **Tools:** terminal (4), command line (1)
> **Best Practices:** remember to (2), good practice (1)
> **Versions:** 172.217.22 (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** configure (1), you'll need (1)

#### Managing EC2 instances with AWS CLI commands
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=0)** - [Instructor] We launched our first EC2 instance.
>
> **[0:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=3)** Now let's start managing that instance using AWS CLI.
>
> **[0:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=7)** Specifically, we'll explore how to start, stop, and terminate instances to have full control over your compute resources.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=16)** Managing your EC2 instance efficiently is a critical aspect of cloud management.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=22)** AWS CLI provides a set of commands that allow you to start, stop, and terminate instances easily.
>
> **[0:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=29)** Let's explore how to do that.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=32)** Before we dive into managing instances, let's learn how to list the EC2 instances in your AWS account using AWS CLI.
>
> **[0:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=42)** The describe-instances command allows you to retrieve information about your instances such as their IDs, states, and more.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=51)** Let's head over to our terminal and list the instances.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=56)** To do that, type in: aws ec2 describe-instances, hit Enter.
>
> **[1:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=67)** And you'll see A JSON output of all the instances in your account.
>
> **[1:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=72)** And as you can see, the instance ID: i-091 is the t2.micro instance that we just launched, and the t2.micro as I said.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=83)** And similarly, if you had more instances, you will see that in this JSON output.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=89)** And to start an EC2 instance using AWS CLI, we'll use the start-instances command.
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=96)** It follows the following syntax: aws ec2 start-instances, and then the option of instance-ids.
>
> **[1:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=107)** Since our EC2 instance is already running, we can't start it again.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=112)** But we can stop our EC2 instance using the AWS CLI.
>
> **[1:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=117)** We'll use the stop-instances command.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=120)** It follows the following syntax: aws ec2 stop-instances, and then the option instance-ids.
>
> **[2:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=130)** This command gracefully shuts down the instance and stops its operation.
>
> **[2:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=136)** Let's put it to action.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=138)** Head over to your terminal, and I'm going to clear my screen here.
>
> **[2:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=143)** To stop the instance, type in: aws ec2 stop-instances, and then the option --instance-id.
>
> **[2:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=157)** I'm going to head over to my AWS Management Console to grab the instance ID, or you could list the instance ID by using the describe-instances command.
>
> **[2:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=169)** Here is the instance ID, I'm going to copy this, paste it in my terminal, and hit Enter.
>
> **[3:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=181)** As you can see, we got a JSON output saying StoppingInstances, and the instance ID is i-091.
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=189)** When you no longer need an EC2 instance, you can also terminate and release the associate resources and stop incurring charges.
>
> **[3:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=199)** To terminate an EC2 instance using AWS CLI, we'll use the terminate-instances command.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=206)** It follows the following syntax: aws ec2 terminate-instances, and then the option instance-ids.
>
> **[3:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=216)** This command permanently deletes the instance.
>
> **[3:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=219)** So back in our console, we had this instance which is now stopped but not terminated.
>
> **[3:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=226)** So let's put the terminate-instance command in action.
>
> **[3:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=230)** Head over to your terminal and type in the command: aws ec2 terminate-instances with the option --instance-ids.
>
> **[4:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=250)** And I'm going to paste my instance ID.
>
> **[4:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=252)** Hit Enter, and as you can see in the output we have terminating instances.
>
> **[4:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=259)** We have an instanceId, i-091, which was our instance.
>
> **[4:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=263)** Keep in mind that you can manage multiple instances at once by providing multiple instance IDs separated by spaces.
>
> **[4:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=272)** AWS CLI will apply the specified action to each instance accordingly.
>
> **[4:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=278)** You now know how to manage your EC2 instances using AWS CLI commands.
>
> **[4:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=284)** Starting, stopping, and terminating instances gives you full control over your compute resources and allows you to optimize their usage.

> [!info]- Semantic Content
>
> **Env Vars:** aws (10), ec2 (9), cli (8), json (3)
> **CLI Commands:** aws (16)
> **Code Keywords:** let (6), this, (1)
> **Tools:** terminal (4)
> **Code Identifiers:** instanceid (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)


### 3. Working with S3 and AWS CLI

#### Uploading, downloading, and managing files in S3 buckets
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=0)** - [Instructor] Let us now explore how to work with files in Amazon Simple Storage Service, also known as S3, using the AWS Command Line Interface.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=11)** Specifically, we'll cover uploading, downloading, and managing files.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=16)** By the end of this video, you'll have the skills to efficiently handle your files in S3 using CLI.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=23)** What is Amazon S3?
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=25)** S3 is a highly scalable and durable object storage service offered by Amazon Web Services.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=32)** Let's dive into how you can interact with S3 buckets and manage your files using AWS CLI.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=38)** Before we proceed, let's briefly touch on creating an S3 bucket.
>
> **[0:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=43)** You can create a bucket using the AWS Management Console, or using the AWS CLI.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=49)** For CLI, you can create a bucket by using the following command, aws + Space + s3 + Space mb + Space + s3 and then the bucket name.
>
> **[1:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=62)** Mb, here, stands for make bucket.
>
> **[1:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=65)** Now, let's put this into action and head over to our terminal.
>
> **[1:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=70)** I'm going to create a bucket with a unique name.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=73)** Remember, S3 buckets need to have a globally unique name.
>
> **[1:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=79)** So to create a bucket, type in aws + Space + s3 + Space + mb + Space + S3:// and then a unique bucket name.
>
> **[1:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=92)** I'll go with my-demo-bucket and some random numbers at the end.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=101)** Hit Enter, and as you can see, we got an output saying make_bucket and then the bucket name.
>
> **[1:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=109)** And we can also verify if the bucket was created by using the ls command.
>
> **[1:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=115)** So to do that, type in aws + Space + s3 + Space + ls.
>
> **[2:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=122)** As you can see, we have a bucket named my-demo-bucket-743748.
>
> **[2:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=128)** Now, to upload files to an S3 bucket using the AWS CLI, we'll use the cp command, also known as copy.
>
> **[2:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=137)** It allows you to copy files and directories between your local machine and S3.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=144)** The syntax goes AWS + Space + s3 + Space + cp, then source and the destination.
>
> **[2:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=153)** Let's break down each element.
>
> **[2:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=155)** The first one is source.
>
> **[2:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=157)** This represents the path or location of the file or directory you want to upload.
>
> **[2:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=163)** It can be a local file path or another S3 object.
>
> **[2:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=168)** The second one is destination.
>
> **[2:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=170)** Here, you specify the target location in your S3 bucket where you want to upload the file.
>
> **[2:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=176)** Now, let's put it into practice and run the command to upload a file to an S3 bucket.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=182)** Head over to your terminal.
>
> **[3:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=184)** Now, I have created a local directory, here, called aws-cli and it has a TXT file, or a text file, called hello.txt, as you can see.
>
> **[3:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=200)** The hello.txt file just has a text saying, "hello world."
>
> **[3:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=208)** But I want to copy this file to my newly created S3 bucket.
>
> **[3:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=213)** And in order to do that, I'll type in the command aws + Space + s3 + Space + cp, and then the source, which is the path to my local file, which is hello.txt, because I am currently in that directory, and then the destination, which is my S3 bucket.
>
> **[4:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=240)** So I'm going to copy the name of my bucket here, and use s3:// the name of my bucket as source, hit Enter.
>
> **[4:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=252)** And this would upload the hello.txt or copy hello.txt to my S3 bucket.
>
> **[4:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=260)** You can confirm that by going over to your AWS Management Console.
>
> **[4:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=265)** So, if I head over to AWS Console, go to Services, go to S3, and I have my demo bucket that just got created.
>
> **[4:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=282)** And you can see we have a hello.txt file that was uploaded.
>
> **[4:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=287)** Similarly, you can download files from an S3 bucket using AWS CLI.
>
> **[4:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=292)** The cp command works for downloading as well.
>
> **[4:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=295)** You'll just need to reverse the source and destination paths.
>
> **[4:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=299)** Here's the syntax.
>
> **[5:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=301)** aws + Space + S3 + Space + CP, and then source and destination, which looks exactly like we're uploading a file to S3.
>
> **[5:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=311)** But instead of source being our local file we'll make that the S3 bucket, and the destination would be our local path.
>
> **[5:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=319)** Let's put that into action and head over to our terminal.
>
> **[5:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=323)** So let me change my directory, here.
>
> **[5:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=327)** And in this directory, we don't have any hello.txt file.
>
> **[5:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=331)** So what I'm going to do is download the hello.txt, which was in my S3 bucket, to my local machine.
>
> **[5:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=339)** And in order to do that, I'll type in aws + Space + s3 + Space + cp And now our source is going to be S3 bucket
>
> **[6:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=361)** /hello.txt.
>
> **[6:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=366)** And the destination is my current directory.
>
> **[6:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=371)** Hit Enter.
>
> **[6:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=373)** Oops, we have got an error saying that the download failed because it's a read-only file system.
>
> **[6:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=381)** And we'll talk about permissions and policies for S3 buckets in one of the upcoming videos.
>
> **[6:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=388)** AWS CLI provides additional commands to manage files in an S3 bucket.
>
> **[6:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=393)** You can use commands like ls to list files, mv to move files within the bucket, and rm to remove files.
>
> **[6:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=403)** There's also a sync command to synchronize files between local storage and the S3 bucket.
>
> **[6:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=409)** Fantastic, you now know how to upload, download, and manage files in S3 bucket using the CLI.
>
> **[6:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=416)** This knowledge will empower you to efficiently handle your data in S3 and leverage its scalability and durability.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (17), cp (6), ls (3), make (2), mv (1)
> **Env Vars:** aws (10), cli (8), txt (1)
> **File Paths:** hello.txt (9)
> **Code Keywords:** let (8), interface (1)
> **Tools:** terminal (3), command line (1), aws console (1)
> **Definitions:** known as (2), is a  (1), stands for (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** make_bucket (1)

#### Managing S3 bucket policies and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=1)** Now, we'll dive into managing S3 bucket policies and permissions using the AWS command line interface.
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=9)** By the end of this video, you'll be able to effectively control access to your S3 buckets and manage bucket level permissions using AWS CLI.
>
> **[0:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=19)** Let's get started.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=21)** "Securing your S3 buckets and managing access permissions is crucial for protecting your data."
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=27)** AWS CLI provides commands that allow you to manage bucket policies and permissions effortlessly.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=34)** Let's explore how to do that.
>
> **[0:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=37)** But first, let's understand S3 bucket policies.
>
> **[0:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=41)** "S3 bucket policies are a JSON-based access policies that define who can access your S3 bucket and what actions they can perform."
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=51)** These policies are powerful tools for managing fine grain access control.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=57)** Let's see how to work with them using AWS CLI.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=61)** To create an S3 bucket policy using AWS CLI, we'll use the S3 API command with the put bucket policy option.
>
> **[1:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=72)** The command follows the following syntax: aws space s3api space put-bucket-policy.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=80)** And then, the bucket as the option, and policy where you will add your policy file as an option.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=89)** Let's break down each element.
>
> **[1:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=91)** First, we have bucket.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=93)** This option specifies the name of the bucket to which you want to apply the policy.
>
> **[1:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=98)** Second, we have policy.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=100)** Here you provide the JSON file containing the policy definition.
>
> **[1:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=105)** Now let's put this into action and run the command to create an S3 bucket policy.
>
> **[1:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=111)** Head over to your terminal.
>
> **[1:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=113)** So before I type out the command, I have a local policy dot JSON file,
>
> **[2:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=124)** which only allows the user to access my S3 bucket over HTTPS.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=131)** So any of the requests that come over HTTP are rejected.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=138)** And you can look up different policies in JSON format on the AWS website.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=144)** So if you go to AWS's documentation, you can find bucket policy examples.
>
> **[2:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=151)** And here, depending on what's your need, you can download different JSON files depending on the permission level you need.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=160)** But let's go back to our terminal and apply the HTTPS request dot JSON policy to my bucket.
>
> **[2:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=169)** Okay, now we can apply this policy.
>
> **[2:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=172)** But before I do that, we have to change the doc dash example dash bucket to the bucket name that we generated.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=182)** So I'll be using the text editor called nano to edit this file.
>
> **[3:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=187)** So nano HTTPS dash request, or you can do tab that auto fills the command.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=197)** Hit enter.
>
> **[3:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=198)** This would open up the HTTPS dash request dot JSON.
>
> **[3:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=202)** And we will change the doc dash example bucket here to our own bucket name.
>
> **[3:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=212)** So I have my bucket name copied.
>
> **[3:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=214)** I'm just going to paste it here and the line beneath.
>
> **[3:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=220)** And your bucket name is going to be different than mine, so make sure you replace with whatever the appropriate bucket name is.
>
> **[3:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=229)** Hit control X to save your file, and hit Y.
>
> **[3:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=234)** Hit enter, and this will save the file and exit the nano code editor.
>
> **[4:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=241)** I'm going to clear the screen again, and let's do cat HTTPS just to see the file.
>
> **[4:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=248)** Again, you can do tab to auto fill the command.
>
> **[4:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=251)** Hit enter.
>
> **[4:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=252)** And now instead of that example bucket, we actually see the bucket name that I had.
>
> **[4:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=260)** Now, let's apply this policy to our bucket by typing in the command aws space s3api space put-bucket-policy.
>
> **[4:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=276)** The first option, which is the bucket, and name of my bucket.
>
> **[4:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=291)** And the second option, which is policy.
>
> **[4:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=297)** And the policy file that it will be using, which is HTTPS dash request dot JSON with a prefix file colon double slash HTTPS dash request dot JSON.
>
> **[5:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=317)** Hit enter.
>
> **[5:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=320)** And this should apply the bucket policy to our bucket.
>
> **[5:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=324)** You can verify that by going into your AWS management console.
>
> **[5:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=330)** Click on the bucket name where you applied the policy and go into "Permissions" tab.
>
> **[5:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=339)** Scroll down.
>
> **[5:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=340)** You will see a setting called "Bucket Policy," which would have the text that was contained in the policy dot JSON.
>
> **[5:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=352)** In addition to bucket policies, AWS CLI allows you to manage bucket permissions at a granular level.
>
> **[5:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=359)** You can add or remove permissions for specific users, groups, or AWS accounts using commands like S3 API put bucket ACL and S3 API put object ACL.
>
> **[6:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=375)** Now let's put this into action and run a command to add a bucket permission.
>
> **[6:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=380)** Head over to your terminal.
>
> **[6:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=383)** I'm going to clear my screen here.
>
> **[6:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=386)** And now we'll use the put bucket ACL.
>
> **[6:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=389)** In order to do that, type in aws space s3api space put-bucket-acl.
>
> **[6:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=400)** The first option is bucket and the name of our bucket.
>
> **[6:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=413)** And the second option is your bucket ACL.
>
> **[6:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=418)** I'm going to give read access to all users.
>
> **[7:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=422)** In order to do that, I'll go with the grant read option and the URI to give all users access.
>
> **[7:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=435)** And you can find this information on the AWS documentation.
>
> **[7:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=439)** So let's hit enter.
>
> **[7:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=443)** Oops, we have got an error saying that the bucket does not allow ACLs, and that is because our ACLs on this bucket are not enabled.
>
> **[7:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=454)** And you can find this setting in your AWS management console.
>
> **[7:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=461)** So if we go under the "Permissions" tab...
>
> **[7:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=469)** As you can see, the bucket owner enforced setting doesn't allow ACLs.
>
> **[7:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=475)** If we click on "Edit," you will have the ability to enable ACLs.
>
> **[8:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=482)** So click on "ACLs Enabled," and click on "I acknowledge that ACLs will be restored."
>
> **[8:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=494)** Click on "Save changes."
>
> **[8:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=499)** Now, let's try running that command again.
>
> **[8:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=502)** And there we go.
>
> **[8:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=503)** We have our global read access to all users applied to our S3 bucket.
>
> **[8:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=512)** So after applying the bucket policy and permissions, it's essential to verify that they are correctly set.
>
> **[8:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=519)** You can use commands like aws s3api space get-bucket-policy and aws space s3api space get-bucket-acl to retrieve and review the current policy and permissions for your S3 bucket.
>
> **[8:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=539)** Great work.
>
> **[9:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=540)** You now know how to manage S3 bucket policies and permissions using AWS CLI.
>
> **[9:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=547)** Controlling access to your S3 bucket ensures the security and confidentiality of your data.

> [!info]- Semantic Content
>
> **Env Vars:** aws (13), json (10), https (7), cli (6), acl (4)
> **CLI Commands:** aws (18), find (3), make (1), cat (1)
> **Code Keywords:** let (12), interface (1)
> **UI Navigation:** click on (5), go to (1), scroll down (1)
> **Tools:** terminal (3), command line (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Using AWS CLI to automate S3 tasks and workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=0)** - [Instructor] Now let's explore how to use the AWS Command Line Interface to automate common tasks and workflows in Amazon Simple Storage Service, or S3.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=11)** Specifically we'll focus on automating file synchronization between local and S3 storage.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=17)** By the end of this video, you'll have the skills to automate repetitive S3 tasks using AWS CLI.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=25)** Automation is a key aspect of managing your S3 storage efficiently.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=30)** AWS CLI provides powerful commands and options that allow you to automate tasks and workflows saving you time and effort.
>
> **[0:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=40)** Let's dive into how to automate S3 tasks using AWS CLI.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=45)** Syncing files between your local storage and S3 is a common task.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=50)** AWS CLI provides the S3 sync command, which compares the source and destination directories and copies only the differences.
>
> **[1:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=60)** Let's explore this command in more detail.
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=63)** To sync files between local and S3 storage using AWS CLI, we'll use the S3 sync command.
>
> **[1:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=69)** It follows the following syntax, aws, space, s3, space, sync, space, source, space, destination, and space, additional options.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=80)** Let's break down each element.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=83)** The first one is source.
>
> **[1:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=85)** This represents the source directory or S3 bucket from which you want to sync files.
>
> **[1:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=92)** The second one is destination.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=94)** Here you specify the destination directory or S3 bucket to which you want to sync files.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=101)** Additionally, we have options.
>
> **[1:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=103)** Options can be specified to control the sync behavior, such as excluding certain files or enabling multi-part uploads.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=112)** Now let's put it into practice and run the command to sync files between local and S3 storage.
>
> **[1:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=118)** Head over to your terminal.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=120)** I am currently in my aws-cli directory and I have another subdirectory called sync.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=129)** In that sync directory, I have a sync.txt file.
>
> **[2:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=140)** That TXT file just has one sentence that says, "This is a sync file."
>
> **[2:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=146)** Now I want to sync my sync directory to my S3 bucket.
>
> **[2:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=151)** And if you forgot the name of your S3 bucket, you can list your S3 buckets by aws, space, s3, space, ls.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=160)** The bucket that I want to sync my files to is called my-demo-bucket-743748.
>
> **[2:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=167)** Now let me change my directory back to aws-cli,
>
> **[2:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=177)** and let's sync the sync directory to our S3 bucket.
>
> **[3:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=181)** In order to do that, type in aws, space, s3, space, sync, space, the path to the directory that you want to sync.
>
> **[3:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=191)** In my case, it's sync, so aws-cli/sync
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=201)** and then my S3 bucket.
>
> **[3:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=210)** Hit enter, and this should sync my sync directory, which is on my local machine, to my S3 bucket.
>
> **[3:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=220)** While the S3 sync command is powerful on its own, you can enhance your automation by incorporating AWS CLI commands into scripts.
>
> **[3:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=230)** By writing scripts.
>
> **[3:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=231)** You can automate complex workflows, schedule tasks, and combine S3 operations with other AWS services or custom logic.
>
> **[4:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=241)** To execute scripts containing AWS CLI commands you can run them directly from your command line interface or integrate them into your automation workflows.
>
> **[4:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=252)** AWS CLI provides the flexibility to incorporate scripting into your S3 automation tasks seamlessly.
>
> **[4:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=260)** Congratulations, you now have the skills to automate common S3 tasks and workflows using AWS CLI.
>
> **[4:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=267)** By leveraging the power of automation, you can save time, ensure consistency, and enhance your overall productivity when working with S3 storage.

> [!info]- Semantic Content
>
> **Env Vars:** aws (11), cli (9), txt (1)
> **CLI Commands:** aws (17), ls (1)
> **Code Keywords:** let (7), interface (2), case, (1)
> **Definitions:** is a  (3), is called (1)
> **Tools:** command line (2), terminal (1)
> **File Paths:** sync.txt (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Permissions with IAM and AWS CLI

#### Introduction to IAM users, groups, and policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=0)** - [Instructor] Let's dive into managing permissions with AWS Identity and Access Management, also known as IAM and AWS command line interface.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=11)** Specifically, we'll focus on understanding IAM users and groups and how they can help you control access to your AWS resources.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=21)** By the end of this video, you'll have a solid understanding of IAM users and groups, policies, and permissions, Let's get started.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=30)** IAM users represent individual or services that interact with your AWS account.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=38)** They are associated with security credentials and permissions that determine what actions they can perform within your AWS resources.
>
> **[0:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=47)** Each user has a unique username and can have a specific access key for programmatic access.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=54)** IAM groups are a collection of IAM users.
>
> **[0:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=58)** By organizing users into groups, you can manage permissions collectively and simplify Access Management.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=66)** Instead of individually assigning permissions to each user, you can assign permissions to groups, making it easier to manage permissions as your team or organization grows.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=78)** In the beginning of this course, we did work with IAM when we created a IAM user specifically for our CLI use.
>
> **[1:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=86)** And we also generated an access key and secret access key for the CLI access.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=93)** Now let's look at permissions and policies.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=97)** Permissions in IAM are defined through policies.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=100)** IAM policies are adjacent documents that specify the actions allowed or denied on a specific resource.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=108)** Policies can be attached to IAM users or groups, granting or restricting access based on the defined permissions.

> [!info]- Semantic Content
>
> **Env Vars:** iam (11), aws (5), cli (2)
> **CLI Commands:** aws (5)
> **Code Keywords:** let (3), interface (1)
> **Tools:** command line (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Creating and managing IAM users and groups
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=0)** - [Instructor] IAM users and groups play a crucial role in managing access to your AWS resources.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=6)** In this video, we'll explore how to create and manage IAM users and groups using AWS CLI, providing you with the flexibility and automation you need.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=16)** To create an IAM user using the AWS CLI, we'll use the create-user command.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=23)** The command follows the following syntax, aws iam create-user --user-name.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=34)** Let's break down each element.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=36)** The --user-name option specifies the username for the IAM user you want to create.
>
> **[0:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=42)** Now, let's put it into practice and run the command to create an IAM user.
>
> **[0:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=47)** Head over to your Terminal.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=49)** I'm going to clear my screen here.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=51)** Now, let's create an IAM user.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=54)** aws iam create-user
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=63)** and then, the option --user-name.
>
> **[1:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=67)** I'm going to name my user myawsdemouser.
>
> **[1:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=74)** Hit Enter and there we go.
>
> **[1:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=77)** We got the output of the new user that we just created using the AWS CLI.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=83)** IAM groups allow you to manage permissions collectively.
>
> **[1:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=87)** To create an IAM group using AWS CLI, we'll use the create-group command.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=93)** The syntax is aws iam create-group --group-name.
>
> **[1:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=102)** The --group-name option specifies the name of the group you want to create.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=108)** Now, let's create a new IAM group using AWS CLI.
>
> **[1:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=111)** Head over to your Terminal.
>
> **[1:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=113)** To create a group, type aws iam create-group with the option --group-name, and I'm going to name my group myawsdemogroup.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=131)** Hit Enter and we got the output saying that the group myawsdemogroup was created using the AWS CLI.
>
> **[2:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=139)** Now that we have created the user and the group, let's add our IAM user to our IAM group.
>
> **[2:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=145)** To do this using the AWS CLI, we'll use the add-user-to-group command.
>
> **[2:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=154)** The syntax is aws iam add-user-to-group with the --user-name option and the --group-name option.
>
> **[2:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=165)** Let's break down each element.
>
> **[2:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=167)** The --user-name option specifies the username of the IAM user you want to add to the group.
>
> **[2:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=174)** In the --group-name option, you provide the name of the group to which you want to add the user.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=180)** Let's put it into practice and run the command to add our user to the IAM group we just created.
>
> **[3:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=187)** Head over to your Terminal and type aws iam add-user-to-group
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=201)** with the option --user-name.
>
> **[3:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=203)** In my case, my username was myawsdemouser.
>
> **[3:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=208)** And the second option is --group-name.
>
> **[3:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=212)** The group name I created was myawsdemogroup.
>
> **[3:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=219)** Hit Enter.
>
> **[3:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=222)** Now, this command will add the user to the specified group and you can double check by visiting the AWS management console.
>
> **[3:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=232)** Click on the IAM service.
>
> **[3:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=238)** As you can see, we had zero user groups before.
>
> **[4:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=241)** Click on the one user group and now, we can see that our group, myawsdemo group, was created and also, it has one user.
>
> **[4:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=256)** If you hover over the one user, you'll see myawsdemouser was added to this group which means our command executed successfully.
>
> **[4:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=265)** Great work.
>
> **[4:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=266)** You now know how to create IAM user, create IAM groups, and add users to groups using AWS CLI.
>
> **[4:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=275)** With these commands, you can efficiently manage access and permissions across your AWS environment.

> [!info]- Semantic Content
>
> **Env Vars:** iam (16), aws (11), cli (8)
> **CLI Commands:** aws (17)
> **Code Keywords:** let (7), case, (1)
> **Tools:** terminal (3)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)

#### Using AWS CLI to manage IAM roles and policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=0)** - [Instructor] IAM roles and policies provide a powerful mechanism for granting temporary access to AWS resources and defining permissions.
>
> **[0:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=10)** Using AWS CLI, we can create, manage and attach these roles and policies seamlessly.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=17)** To create an IAM role using AWS CLI will use the create-role command.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=23)** The command follows the following syntax: aws iam create-role with the option --role-name and the second option --assume-role-policy-document.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=38)** Let's break down each element.
>
> **[0:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=41)** The first one is --role-name.
>
> **[0:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=43)** This option specifies the name you want to assign to the IAM role.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=49)** The second option is --assume-role-policy-document.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=52)** Here you provide the policy document that defines who can assume the role and what actions they can perform.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=61)** Now let's put it into practice and run the command to create an IAM role.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=66)** Head over to your terminal.
>
> **[1:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=69)** So I have a policy document in my aws-cli directory called assume-role-policy.json.
>
> **[1:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=82)** This trust policy allows users and roles of my account to assume this role if they allow the sts:AssumeRole action in their permission policy.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=94)** Remember to replace the principle of AWS account number with your own AWS account number.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=101)** Now let's create a new role and attach this assume role policy.
>
> **[1:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=107)** Type in aws iam create-role with the option --role-name.
>
> **[1:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=118)** I'm going to name this my demo role.
>
> **[2:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=122)** And the second option is --assume-role-policy-document
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=138)** and your policy document .json file.
>
> **[2:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=152)** Hit Enter.
>
> **[2:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=157)** And now we just created my demo role with attaching the assume-role-policy.json document.
>
> **[2:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=167)** I am policies define permissions and access control for IAM roles, users and groups.
>
> **[2:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=175)** To create an IAM policy using AWS CLI we'll use the create-policy command.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=182)** The syntax is AWS IAM create-policy.
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=189)** The first option is --policy-name and the second option is --policy-document.
>
> **[3:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=194)** Let's break down each element.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=197)** The --policy-name option specifies the name you want to assign to the IAM policy.
>
> **[3:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=203)** And with the --policy-document option, you provide the policy document that defines the permission and actions allowed or denied.
>
> **[3:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=212)** Now let's head over to our terminal and run the command to create an IAM policy in my aws-cli directory, I have another policy document.
>
> **[3:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=224)** And it's the s3-access-policy.json.
>
> **[3:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=232)** This policy document gives a user or a role access to the S3 bucket, and you can look at the actions that user or role can perform, but remember to change the bucket name with the appropriate bucket name.
>
> **[4:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=253)** So let's update those bucket names to our own buckets.
>
> **[4:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=260)** If you don't remember your bucket name, you can do aws s3 ls.
>
> **[4:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=267)** I'm going to use my demo bucket.
>
> **[4:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=273)** And to edit the document, I'm going to use the nano editor.
>
> **[4:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=280)** To save the file hit Control + X and hit Y for yes, and then hit Enter.
>
> **[4:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=290)** Now let's create the policy.
>
> **[4:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=292)** Type in aws iam create-policy.
>
> **[4:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=299)** And then the first option which is the policy name.
>
> **[5:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=304)** And let's name this policy as mys3accesspolicy.
>
> **[5:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=312)** And the second option is the policy document.
>
> **[5:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=319)** And here you specify the S3 access policy document.
>
> **[5:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=323)** Again, these resources will be available on the GitHub repo.
>
> **[5:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=335)** Hit Enter. And there we go.
>
> **[5:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=337)** We just created a policy called mys3accesspolicy with the specified JSON document.
>
> **[5:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=344)** To attach an IAM policy to an existing IAM role using AWS CLI will use the attach-role-policy command.
>
> **[5:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=354)** The syntax is aws iam attach-role-policy with the first option --role-name, and the second option --policy-arn.
>
> **[6:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=366)** Let's break down each element.
>
> **[6:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=368)** The role name option specifies the name of the IAM role to which you want to attach the policy.
>
> **[6:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=374)** And the second option --policy-arn.
>
> **[6:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=376)** Here you provide the Amazon resource name also known as the ARN of the IAM policy.
>
> **[6:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=384)** Let's put it into practice and run the command to attach an IAM policy to our IAM role.
>
> **[6:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=390)** Head over to your terminal.
>
> **[6:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=392)** Now I'll attach my S3 access policy to my demo role.
>
> **[6:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=398)** In order to do that, type in aws iam attach-role-policy with the first option --role-name.
>
> **[6:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=417)** In my case it's my demo role and the --policy-arn as second option.
>
> **[7:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=429)** And you can find the --policy-arn in the output of the last command, which we use to create the policy.
>
> **[7:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=436)** Or you can head to your AWS management console to get this ARN.
>
> **[7:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=445)** Hit Enter.
>
> **[7:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=447)** There we go.
>
> **[7:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=448)** We just attached the S3 access policy to my demo role.
>
> **[7:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=453)** Fantastic.
>
> **[7:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=454)** You now know how to use AWS CLI to manage I am roles and policies effectively.
>
> **[7:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=460)** Creating roles, defining policies and attaching policies to roles provide a robust foundation for controlling access to your AWS resources.

> [!info]- Semantic Content
>
> **Env Vars:** iam (15), aws (11), cli (5), arn (2), json (1)
> **CLI Commands:** aws (19), ls (1), find (1)
> **Code Keywords:** let (10)
> **Tools:** terminal (3), github (1)
> **File Paths:** assume-role-policy.json (2), s3-access-policy.json (1)
> **Best Practices:** remember to (2)
> **Exercise Files:** github repo (1)
> **Definitions:** known as (1)


### 5. Managing Other AWS Services with AWS CLI

#### Managing RDS databases with AWS CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=0)** - [Instructor] Now we'll explore managing other AWS services with the AWS Command Line Interface.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=6)** Specifically, we'll focus on managing Amazon RDS databases using AWS CLI.
>
> **[0:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=13)** By the end of this video, you'll be equipped with the skills to manage your RDS databases efficiently using AWS CLI.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=22)** Let's get started.
>
> **[0:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=24)** Amazon RDS is a managed relational database service offered by AWS.
>
> **[0:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=29)** With AWS CLI, you can interact with RDS databases and perform a variety of management tasks from creating and modifying databases to managing snapshots and monitoring.
>
> **[0:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=41)** To get an overview of your RDS instances, you can use the describe-db-instances command.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=48)** It allows you to retrieve information about your RDS instances such as their names, statuses, and configurations.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=57)** Here's how the command looks like, aws rds and then you have your first option called region and describe-db-instances.
>
> **[1:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=69)** Replace the region with the AWS region where your RDS instances are located.
>
> **[1:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=74)** Let's give this a try.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=75)** Head over to your terminal and type in aws rds --region.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=83)** In my case, the region is us-west-1.
>
> **[1:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=88)** Again, you can find your region in the AWS Management Console.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=93)** And the command is describe-db-instances.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=101)** Hit Enter.
>
> **[1:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=103)** In my case, I have one RDS database that's running.
>
> **[1:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=107)** So I'm seeing the information about that DB instance.
>
> **[1:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=110)** In your case, the output might be empty.
>
> **[1:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=113)** Creating an RDS database using AWS CLI involves using the create-db-instance command.
>
> **[2:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=121)** This commands allows you to specify various parameters such as the database engine instance type, storage and more.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=129)** Here's how the command looks like.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=131)** And as you can see, there are various parameters and options to define your DB instance.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=138)** Let's go through the each element.
>
> **[2:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=141)** The first option is --region.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=142)** And again here you define the AWS region where you want to create the database.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=148)** The second option is --db-instance-identifier which is a unique identifier for your RDS instance.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=156)** The third option is the --engine.
>
> **[2:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=158)** Here you select the desired database engine.
>
> **[2:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=162)** Popular ones are MySQL and Postgres.
>
> **[2:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=165)** The next one is the --db-instance-class.
>
> **[2:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=168)** This is the instance type for your RDS database.
>
> **[2:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=172)** The next one is --allocated-storage.
>
> **[2:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=174)** Here you define the allocated storage size in gigabytes.
>
> **[2:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=179)** Next we have the --master-username.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=182)** This is whatever you want to name the master user for your database.
>
> **[3:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=186)** The last one is --master-password.
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=189)** Here you define the password for your master user.
>
> **[3:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=194)** So now that we know the command structure, let's create our first RDS database.
>
> **[3:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=199)** Head over to your terminal.
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=201)** I'm going to clear my screen here and start by typing in aws rds --region.
>
> **[3:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=211)** Again, I'm going to use the us-west-1 region.
>
> **[3:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=214)** You might use whatever is the nearest AWS region to you.
>
> **[3:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=219)** And the command to create a DB instance is create-db-instance.
>
> **[3:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=228)** And as we saw, there were many options for this command.
>
> **[3:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=231)** So it's a little big.
>
> **[3:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=232)** I'm going to copy and paste it into my terminal but you can find the exact command in the GitHub repo.
>
> **[3:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=239)** So for the DB instance identifier I'm using mydemordsdatabase as the name.
>
> **[4:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=246)** For the engine, I'm using Postgres.
>
> **[4:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=250)** For the DB instance class, I'm using db.t4g.micro.
>
> **[4:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=257)** And the allocated storage, I'm going with 20 gigabytes.
>
> **[4:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=262)** I'm using main as the master username and I'm using a really strong password here for my master user password.
>
> **[4:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=271)** Hit Enter.
>
> **[4:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=273)** And now as you can see in the output our DB instance creation process has started.
>
> **[4:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=279)** You can look at the status as creating in the output.
>
> **[4:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=284)** And this should take some time for your RDS database to be created.
>
> **[4:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=289)** And one tip that I want to give to select your instance class, which you might be wondering how I got this, is a really good website that I recommend.
>
> **[5:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=300)** So if you head over to your browser and type instances.vantage.sh, and you can filter the instance types by RDS which stands for relational database service, you'll find all the instance classes that you can deploy to your AWS account.
>
> **[5:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=318)** I went with the t4g.micro but depending on the power that you need, you can pick a bigger instance class.
>
> **[5:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=328)** So for me, it took about five minutes to launch my RDSS database and you can confirm that by going to your AWS Management Console.
>
> **[5:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=336)** Click on the RDS service.
>
> **[5:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=338)** If you don't have it in recently visited, you can also search RDS.
>
> **[5:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=347)** And here you'll see DB Instances.
>
> **[5:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=351)** You should see one or a higher number depending on how many database instances you have.
>
> **[5:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=356)** Also, make sure you are in the right region.
>
> **[6:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=360)** And you can choose the right region by going on the top right-hand corner and select the appropriate region.
>
> **[6:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=373)** Click on DB instances.
>
> **[6:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=377)** And as we can see, my demo RDS database is available.
>
> **[6:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=382)** Once you have an existing RDS database, you may need to modify its configuration.
>
> **[6:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=388)** AWS CLI provides the modified DB instance command, which allows you to modify parameters such as allocated storage, instance class and other database settings.
>
> **[6:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=400)** Here's an example of the command: aws rds --region and then modify-db-instance.
>
> **[6:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=410)** And then you provide it with the DB instance identifier, the new allocated storage and the new database instance class.
>
> **[7:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=420)** So let's try to modify our newly created RDS database.
>
> **[7:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=425)** Head over to your terminal.
>
> **[7:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=427)** I'm quickly going to clear my screen.
>
> **[7:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=429)** And in order to modify our database, type in aws rds --region.
>
> **[7:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=438)** Enter your appropriate region, for me, it's us-west-1.
>
> **[7:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=444)** And the command modify-db-instance.
>
> **[7:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=450)** Again, it's a bit long command so I'm just going to copy and paste it in my terminal.
>
> **[7:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=455)** This will be available in the GitHub repo as well.
>
> **[7:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=458)** So for the DB instance identifier, I chose the name of my demo RDS database.
>
> **[7:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=465)** The allocated storage, I want to change it to 30 gigabytes from 20, which was originally allocated.
>
> **[7:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=473)** And I've also changed the DB instance class to t4g.medium.
>
> **[7:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=479)** And you're also seeing another flag at the end which is --apply-immediately.
>
> **[8:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=484)** The --apply-immediately flag is to instantly modify our DB instance, otherwise the modification happens during the set maintenance window.
>
> **[8:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=495)** And to see what your set maintenance window is you can navigate to AWS Management Console.
>
> **[8:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=501)** So let's go ahead and apply these changes to our RDS instance.
>
> **[8:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=506)** Hit Enter.
>
> **[8:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=508)** And you can see that it'll start applying the new allocated storage and the DB instance class change to our RDS database.
>
> **[8:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=520)** Here's the pending modified values.
>
> **[8:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=524)** The new DB instance class, and the new allocated storage.
>
> **[8:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=528)** This should take few minutes to apply.
>
> **[8:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=531)** If we head over to our AWS Management Console, so as we can see, my demo RDS database is under the status available again.
>
> **[9:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=541)** It might take 15 to 20 minutes for the modifications that we just did to apply.
>
> **[9:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=548)** So we just created our first RDS database instance using the AWS CLI and also modify the configuration using the CLI.

> [!info]- Semantic Content
>
> **Env Vars:** rds (24), aws (17), cli (7), rdss (1)
> **CLI Commands:** aws (22), find (3), mysql (1), make (1)
> **Code Keywords:** let (6), case, (3), class. (3), class, (3), interface (1)
> **Tools:** terminal (5), github (2), command line (1)
> **UI Navigation:** select the (2), click on (2), navigate to (1)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** such as (3)
> **Exercise Files:** github repo (2)

#### Managing RDS Snapshots and monitoring with CloudWatch
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=0)** - [Instructor] Now let's explore managing RDS snapshots With the AWS Command line interface.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=6)** We'll also focus on monitoring RDS databases using CloudWatch with AWS CLI.
>
> **[0:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=12)** By the end of this video, you'll be equipped with scales to manage your RDS databases efficiently using AWS CLI.
>
> **[0:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=20)** Let's get started.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=21)** RDS snapshots are point in time backups of your databases.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=26)** Amazon RDS creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just the individual databases.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=36)** AWS CLI enables you to manage snapshots effectively.
>
> **[0:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=39)** You can create snapshots, copy them across regions and restore databases from snapshots using the following commands.
>
> **[0:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=47)** To create a snapshot, the syntaxes AWS space RDS with the option of region and the command create-db-snapshot along with the options of db-snapshot-identifier and db-instance-identifier.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=64)** The option db-snapshot-identifier is a unique identifier for your snapshot and the option db-instance-identifier is the identifier of the target RDS instance you want snapshot of.
>
> **[1:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=77)** To copy a snapshot across regions, the command is AWS space RDS with the option of region and copy-db-snapshot with the option of source-db-snapshot-identifier and target-db-snapshot-identifier.
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=95)** Let's break down each element.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=97)** The first option region here is the target AWS region where you want the snapshot.
>
> **[1:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=103)** The second option, source-db-snapshot-identifier is the ARN identifier of the source snapshot you want to copy.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=112)** The last option, target-db-snapshot-identifier is the unique identifier for the target snapshot.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=119)** And now to restore a snapshot, the command is AWS space RDS with the region option and restore-db-instance-from-db-snapshot with the option db-instance-identifier and db-snapshot-identifier.
>
> **[2:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=140)** Now let's put this into action and create a snapshot for the RDS database that we created.
>
> **[2:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=146)** Head over to your terminal.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=148)** I'm going to clear my screen here.
>
> **[2:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=151)** Start by typing the command AWS space RDS dash dash region.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=156)** My case is us-west-1 and the command create-db-snapshot followed with the option db-snapshot-identifier.
>
> **[2:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=175)** I'm going to name my snapshot mydemoinstance-snapshot
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=185)** followed with the db-instance-identifier option
>
> **[3:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=195)** and the name of our RDS database.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=197)** In my case, it's mydemordsdatabase.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=206)** Hit enter and there we go.
>
> **[3:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=209)** We got the output of the DB snapshot that is being created for us.
>
> **[3:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=215)** You can double check by going to AWS Management Console.
>
> **[3:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=219)** Click on your database.
>
> **[3:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=225)** Click on Maintenance and backups tab.
>
> **[3:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=231)** Scroll down to snapshots and you'll see the mydemoinstance-snapshot being created.
>
> **[4:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=243)** Okay. As you can see, the snapshot is available.
>
> **[4:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=249)** Now let's copy this snapshot to another region.
>
> **[4:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=252)** Head over to your terminal and start by typing in the command AWS space RDS space copy-db-snapshot.
>
> **[4:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=265)** The first option is source-db-snapshot-identifier.
>
> **[4:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=278)** And here we'll need the ARN of our snapshot that we just created.
>
> **[4:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=283)** Head over to your management console.
>
> **[4:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=287)** Under the snapshots, click on the mydemoinstance-snapshot.
>
> **[4:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=294)** Under details you'll find the ARN, copy that, head back to your terminal.
>
> **[5:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=303)** Paste the ARN.
>
> **[5:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=307)** The next option is the target-db-snapshot-identifier.
>
> **[5:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=316)** Here you'll add the name that your target DB snapshot should be.
>
> **[5:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=326)** In my case, I just added useast at the end since the source snapshot is in US West.
>
> **[5:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=337)** And the last option is to add the region.
>
> **[5:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=340)** And I want to copy this snapshot over to us-east-1, hit enter.
>
> **[5:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=349)** So the command we just executed is copying over our mydemoinstance-snapshot to us-east-1 region.
>
> **[5:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=357)** In order to confirm, head over to your AWS Management console and now change the region to whatever you selected as the target region.
>
> **[6:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=367)** In my case, it was us-east-1 and make sure you're under Amazon RDS and under snapshots.
>
> **[6:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=377)** And as you can see, mydemoinstance-snapshot-useast was just copied which means our command executed successfully.
>
> **[6:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=389)** Monitoring the performance of your RDS databases is essential for optimal operation.
>
> **[6:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=396)** AWS CLI offers the monitoring command which allows you to retrieve metrics and insights about your RDS instances such as CPU utilization, storage usage and database connections.
>
> **[6:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=409)** Here's an example command, aws space cloudwatch.
>
> **[6:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=413)** The first option is region and the command is get-metric-statistics.
>
> **[7:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=420)** And then we have the namespace option followed by metric name, start time, end time, period, statistics and dimensions.
>
> **[7:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=432)** Replace the region with the appropriate AWS region, metric name with the specific metric you want to monitor.
>
> **[7:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=439)** Instance identifier with the identifier of your RDS instance, statistics with the desired statistical values, start time and end time with the time range for the monitoring data and period with the interval for these statistics.
>
> **[7:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=455)** Now let's figure out how to get the CPU utilization for our RDS database instance.
>
> **[7:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=461)** Head over to your terminal.
>
> **[7:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=463)** I'm going to clear my screen here.
>
> **[7:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=465)** To obtain the metric information by using AWS CLI, use the CloudWatch command list-metrics.
>
> **[7:54](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=474)** Type in aws space cloudwatch space list-metrics and the namespace AWS/RDS.
>
> **[8:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=489)** Hit enter and here you'll get the list of metrics that are available for your RDS instance.
>
> **[8:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=500)** I'm going to clear my screen again.
>
> **[8:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=502)** Now I'm going to use the command get-metric-statistics.
>
> **[8:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=505)** The following command will get us the CPU utilization statistics for the instance that I just created over the specific 24 hour period.
>
> **[8:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=515)** Type in the command AWS CloudWatch and we'll use the get metric statistics.
>
> **[8:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=527)** We'll be using the AWS/RDS namespace.
>
> **[8:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=537)** And since this command is bit lengthy, I'm going to copy and paste it in my terminal.
>
> **[9:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=542)** So for the metric name we have CPU utilization.
>
> **[9:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=545)** I've given it a start and end time.
>
> **[9:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=548)** The period is 360 seconds, which translates to five minutes.
>
> **[9:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=554)** And the statistics that I'm looking for is the minimum CPU utilization.
>
> **[9:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=560)** For the dimensions, I have set the value to mydemordsdatabase, let's hit enter, there we go.
>
> **[9:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=569)** We have the output of CPU utilization with minimum as the statistics over the course of 360 seconds as interval.
>
> **[9:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=581)** Fantastic, you now have the skills to manage your RDS database efficiently using AWS CLI, from creating databases and listing instances to modifying configurations, managing snapshots, and monitoring performance, AWS CLI empowers you to take control of your RDS environment.

> [!info]- Semantic Content
>
> **Env Vars:** rds (23), aws (20), cli (7), cpu (6), arn (4)
> **CLI Commands:** aws (22), find (1), make (1)
> **Code Keywords:** let (7), case, (3), interface (1)
> **Tools:** terminal (5), command line (1)
> **UI Navigation:** click on (3), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Working with CloudWatch using AWS CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=0)** - [Instructor] We saw how we can monitor our AWS RDS instance using AWS CLI.
>
> **[0:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=5)** In this video, let's learn more on how to effectively use and manage AWS CloudWatch using AWS command line interface.
>
> **[0:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=15)** CloudWatch is a powerful monitoring and observability service provided by AWS and with AWS CLI, we can easily access and analyze important metrics and logs.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=25)** By the end of this video, you'll have the knowledge to leverage AWS CLI to interact with CloudWatch and gain valuable insights into your AWS resources.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=36)** AWS CloudWatch offers a comprehensive set of monitoring tools that allow you to collect and track metrics, collect and monitor log files, set alarms, and react to changes in your AWS resources and applications.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=51)** To get started, let's take a look at how to list CloudWatch metrics using AWS CLI.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=57)** By using the list-metrics command, you can view a list of available metrics, such as CPU utilization, network traffic, and more.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=66)** Here's the command.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=68)** Aws cloudwatch list-metrics.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=73)** This will return a list of metrics across all AWS services.
>
> **[1:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=77)** Once you have identified the metrics of interest, you can retrieve their data using get-metric-statistics command.
>
> **[1:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=84)** This command enables you to curate and analyze metric data over a specified time period, just like we did with RDS metrics in last video.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=94)** Here's an example command.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=97)** This command fetches the average CPU utilization for an EC2 instance with the ID i-12345678 over the specified time range.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=108)** Now let's try this on one of our instances.
>
> **[1:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=111)** For this command, we'll need the instance ID of our EC2 instance.
>
> **[1:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=116)** Head over to your AWS management console.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=119)** If you don't have EC2 under recently visited, you can type it in the search bar.
>
> **[2:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=130)** Make sure you're under the right region, click on instances
>
> **[2:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=139)** and then copy the instance ID, head back to your terminal.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=144)** The command for get-metric-statistics is a bit lengthy, so I'm going to copy and paste it into my terminal, but again, this will be available in the GitHub repo.
>
> **[2:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=154)** So we'll be using the CloudWatch service.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=156)** So the command is aws cloudwatch and then the get-metric-statistics.
>
> **[2:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=162)** And then I'm using the AWS/EC2 namespace with the metric name CPUUtilization.
>
> **[2:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=170)** The dimensions I'm using is InstanceId and the value that we retrieved from the AWS management console.
>
> **[2:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=178)** For the statistics, I'm going with average and then start-time and end-time with a period of 300 seconds, hit enter.
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=189)** And as you can see, it gave us an output of average CPU utilization over the period of 300 seconds, which translates to five minutes.
>
> **[3:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=199)** CloudWatch alarms enable you to monitor metrics and take automated actions based on predefined thresholds.
>
> **[3:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=205)** Using AWS CLI, you can create alarms using the put-metric-alarm command.
>
> **[3:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=212)** Here's an example command.
>
> **[3:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=214)** This command sets up an alarm named HighCPUAlarm that triggers if the CPU utilization of the EC2 instance with ID i-12345678 exceeds 80% of three consecutive evaluation periods.
>
> **[3:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=232)** The alarm action is configured to notify an SNS topic with the ARN.
>
> **[3:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=239)** Great, you have now learned the basics of using AWS CLI to interact with Amazon CloudWatch.
>
> **[4:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=245)** From listing metrics and retrieving data to creating alarms, AWS CLI empowers you to efficiently monitor your AWS resources and applications.

> [!info]- Semantic Content
>
> **Env Vars:** aws (19), cli (7), ec2 (5), cpu (4), rds (2)
> **CLI Commands:** aws (21), make (1)
> **Code Keywords:** let (3), interface (1)
> **Tools:** terminal (2), command line (1), github (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), just like (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** github repo (1)


### 6. Advanced AWS CLI Topics

#### Integrating AWS CLI with AWS CloudTrail
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=0)** - [Instructor] Let's dive into the powerful world of AWS CloudTrail and learn how to integrate it with AWS CLI.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=6)** AWS CloudTrail is a service that enables you to monitor AWS API calls and track changes to your AWS resources in real time.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=17)** By integrating AWS CLI with CloudTrail, you gain valuable insights into the activities occurring within your AWS environment.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=25)** By the end of this video you'll have the knowledge to set up CloudTrail with CLI and enhance your AWS security and governance.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=34)** Let's get started.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=36)** AWS CloudTrail provides detailed event logs that capture API activities and resource changes made within your AWS account.
>
> **[0:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=44)** With AWS CLI, you can access these logs and take advantage of the comprehensive information they offer.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=51)** To get started, we need to create a CloudTrail trail using AWS CLI.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=57)** The trail defines where the logs will be stored, and which AWS resources are monitored.
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=63)** Here's an example command.
>
> **[1:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=65)** In this command, we create a trail named MyCloudTrail and specify the S3 three bucket, my-cloudtrail-bucket to store the logs.
>
> **[1:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=74)** The is-multi-region flag enables the trail to receive logs from all regions and the is-organization-trail allows the trail to capture events from all accounts in the organization if applicable.
>
> **[1:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=87)** In my case I don't have multiple accounts within the organization.
>
> **[1:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=91)** Also, remember how we set up an S3 bucket using the CLI, and applied a specific policy to it, same is needed here.
>
> **[1:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=99)** I have set up a S3 bucket with a policy for CloudTrail, and this link is also available in the GitHub repo.
>
> **[1:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=106)** And now let me show the S3 bucket that I have configured.
>
> **[1:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=109)** I'm in my AWS management console, and heading over to S3.
>
> **[1:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=116)** Under buckets you can see I have my CloudTrail bucket with a random number at the end.
>
> **[2:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=125)** And if I go into the permissions tab, scroll down to the policy, you can see that I have applied the bucket policy that we just saw on the AWS documentation.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=135)** Now let's create a trail.
>
> **[2:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=137)** Head over to your terminal.
>
> **[2:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=139)** I'm going to quickly clear my screen here.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=142)** Type in the command aws space cloudtrail since we'll be working with the CloudTrail service.
>
> **[2:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=149)** And in order to create a trail, you type in create-trail.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=156)** I'm going to name my trail as MyDemoCloudTrail and then the s3-bucket-name.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=180)** Hit enter, and we just created MyDemoCloudTrail.
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=185)** Once the trail is created, we need to start it to begin capturing AWS API calls and resource changes.
>
> **[3:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=192)** The command to start the trail is simple.
>
> **[3:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=195)** AWS space cloudtrail space start-logging and then the name of our CloudTrail.
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=201)** Head over to your terminal and type in AWS space cloudtrail space start-logging
>
> **[3:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=213)** and then the name of our CloudTrail which is MyDemoCloudTrail.
>
> **[3:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=220)** Hit enter.
>
> **[3:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=221)** This command starts logging events for the trail, MyDemoCloudTrail.
>
> **[3:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=226)** And from this point forward CloudTrail will record all relevant activities within your AWS account.
>
> **[3:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=233)** AWS CloudTrail generates vast amounts of log data, but with AWS CLI, you can efficiently filter and query the logs to find specific information.
>
> **[4:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=243)** The lookup-events command allow you to search for events that match certain criteria.
>
> **[4:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=249)** This is how the command looks like, AWS space cloudtrail space lookup-events.
>
> **[4:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=255)** The first option lookup attributes, and then you define the event name and the attribute value which in this example is creating bucket.
>
> **[4:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=265)** This command retrieves CloudTrail events related to the create bucket API Action.
>
> **[4:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=270)** Let's try it out.
>
> **[4:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=272)** Head over to your terminal and I'm going to paste the exact command.
>
> **[4:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=275)** Again, it will be available in the GitHub repo.
>
> **[4:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=281)** Hit enter.
>
> **[4:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=283)** And as you can see, we are getting the logs for every time there was a create bucket event.
>
> **[4:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=289)** CloudTrail Insights is a feature that helps you detect unusual activity in your AWS account.
>
> **[4:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=295)** With AWS CLI, you can enable or disable CloudTrail Insights for your trail using the put insight selectors command.
>
> **[5:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=304)** And here's how you can do it.
>
> **[5:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=306)** AWS space cloudtrail space put-insight-selectors with the first option of trail name and second option of insight selectors.
>
> **[5:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=316)** This command enables CloudTrail insights for the trail, my CloudTrail, and configures it to detect read-only and management events activities.
>
> **[5:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=326)** Fantastic, you have learned how to integrate AWS CLI with AWS CloudTrail, enabling you to monitor AWS API calls and track changes to your AWS resources.
>
> **[5:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=338)** The combination of AWS CLI and CloudTrail empowers you with an additional layer of security and visibility into your AWS environment.

> [!info]- Semantic Content
>
> **Env Vars:** aws (31), cli (10), api (5)
> **CLI Commands:** aws (32), find (1)
> **Code Keywords:** let (5)
> **Tools:** terminal (3), github (2)
> **Prerequisites:** set up (3)
> **Exercise Files:** github repo (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)

#### Troubleshooting AWS CLI issues
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=0)** - [Presenter] So now that we understand how AWS CLI works let's talk about some of the common issues and how you can troubleshoot them.
>
> **[0:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=7)** The first one is config and credentials.
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=9)** So remember when we first started with AWS CLI, the first command that we ran was AWS configure and we set some default properties.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=18)** And you might be asking, how do I change that?
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=21)** Because we had a default value for region and in my case it was US West one.
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=27)** So let's go over the files where these configurations and credentials are stored.
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=33)** Head over to your terminal.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=34)** So in order to list the configurations you can use the command AWS space, configure space list and this will give you your profile access key, secret key and the region that you have set.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=52)** But you can also see it tells you where the config file is stored.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=56)** Let's see what is in that config file.
>
> **[0:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=59)** So do cat dot aws slash config.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=66)** And you can see the default value for region is set to US West one.
>
> **[1:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=71)** So you can edit this file to reflect the changes you need.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=75)** So let's say I want the default region to change to US East one.
>
> **[1:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=79)** In order to do that, I'll open this file in any text editor and change the region value to us dash E dash one.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=89)** And the second file that I want to talk about is the credentials.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=93)** As we can see, we have access key and secret key but there is a file where this information is stored and that is the credentials file.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=101)** It is located in the same directory which is period AWS or dot AWS.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=108)** And the file is called credentials.
>
> **[1:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=111)** And you can see that these access key and secret key are my default credentials.
>
> **[1:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=118)** You might be wondering how I can work with different profiles.
>
> **[2:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=122)** I want to have one profile for my dev account and one for my prod account which might be the case in many of your situations.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=129)** You can do that by creating different profiles in the credentials file and the structure of the file is same.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=135)** So you'll create a new profile called dev in square brackets and have your access key ID and secret key ID.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=144)** And similarly, you can have multiple profiles.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=148)** Once you have created multiple profiles, maybe you want to get a list of those profiles.
>
> **[2:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=154)** There's a command for that too.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=156)** You can do AWS space configure space list dash profiles.
>
> **[2:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=164)** In my case I only have my default profile, but in your case if you have set up multiple AWS CLI profiles, you'll see an output off the list here.
>
> **[2:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=173)** After you have set those profiles, you have the ability to use these profiles with individual commands.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=180)** So let's say I want to list iam groups.
>
> **[3:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=184)** The command for that is AWS space, iam space list groups but I want to do it for my dev profile.
>
> **[3:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=192)** I can add the flag dash dash profile space whatever the profile name is and you can add the dash dash profile flag to any of the commands we have gone through.
>
> **[3:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=204)** One of the other common issues you might face is AWS CLI not having the run permission.
>
> **[3:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=210)** On Linux or Mac OS, make sure that the AWS program has run permissions for the calling user.
>
> **[3:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=217)** Typically the permissions are set to 755 to add run permissions for your user, run the following command, chmod space plus X space dot local slash bin slash AWS but you might have to substitute this with a pad to program on your computer based on the installation process you followed.
>
> **[3:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=238)** Also, one of the other access denied errors is the I am identity not having the right permissions.
>
> **[4:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=245)** Let's say you run the AWS3 space LS command and you get an error saying access denied when calling the list buckets operation.
>
> **[4:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=254)** This means the iam account that you created, for the CLI use doesn't have permissions.
>
> **[4:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=261)** In my case, remember I added the administrator access in the beginning of the course when I created my im user.
>
> **[4:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=268)** But again, the best practice is to have granular access.
>
> **[4:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=272)** So only add permissions to im users that are needed.
>
> **[4:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=276)** In our case here we only need the s three list bucket permission so I'll be adding that specific permission to my im identity.
>
> **[4:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=285)** So these are all the common errors that you might get or might run into as issues but AWS has a dedicated document for any of the common errors or issues that you might run into with AWS CLI.
>
> **[4:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=299)** The link to that documentation page will be shared in the GitHub repo.
>
> **[5:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=304)** So this is the page provided by AWS dedicated to AWS CLI errors.
>
> **[5:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=310)** And as you can see, there is list of commonly caused issues or errors that users see.
>
> **[5:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=315)** So if you're having any problems with your AWS CLI make sure to use this page as reference if needed.
>
> **[5:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=322)** Now you know how to work with AWS CLI but there is this one last step and that is cleaning up our environment.
>
> **[5:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=329)** So let's go through all the resources that were deployed especially the expensive ones like RDS and EC2 instances and let's delete them.
>
> **[5:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=338)** Also, you can find a cool dashboard on your console home in AWS management console for any cost that you might have had.
>
> **[5:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=347)** If you scroll down, you'll see cost and usage.
>
> **[5:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=350)** And as you can see for the resources that I have deployed the current month costs are already at $8 and 45 cents.
>
> **[5:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=357)** And you can also see the forecasted month-end cost.
>
> **[6:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=361)** I want to make sure that I don't receive a huge bill from AWS.
>
> **[6:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=364)** So I'm going to go ahead and delete my RDS instance for first go into your DB instances and make sure you're under the right region on the top right-hand corner.
>
> **[6:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=377)** And I'm going to delete my demo RDS database.
>
> **[6:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=384)** Since this was a test database in my case I don't need to take a final snapshot.
>
> **[6:29](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=389)** And also I don't want to restore any automated backups.
>
> **[6:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=398)** And while that's happening, let's go and delete our EC2 instance.
>
> **[6:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=402)** If there were any running.
>
> **[6:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=407)** In my case I had one and we'll do the same thing.
>
> **[6:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=413)** Go into the instant state dropdown and click terminate instance.
>
> **[7:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=425)** And as you can see, it'll take a few minutes to shut down the instance and then terminate it.
>
> **[7:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=431)** While this is happening let's go check back on our RDS instance.
>
> **[7:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=438)** As we can see, my demo RDS database has been deleted.
>
> **[7:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=446)** And now let's go ahead and delete the S3 buckets since I don't need them anymore.
>
> **[7:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=453)** In my case, I don't need my cloud trail bucket and also the my demo bucket, so I'll be deleting those.
>
> **[7:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=461)** So let's go ahead with the CloudTrail bucket first.
>
> **[7:45](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=465)** And as you can see these buckets need to be empty before they can be deleted.
>
> **[7:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=470)** So if you have CloudTrail logs in your bucket or any of the sample files that we uploaded make sure you clear them up.
>
> **[7:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=479)** Let's go back to my CloudTrail bucket here.
>
> **[8:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=484)** I have a directory called AWS Logs.
>
> **[8:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=486)** Let's click on delete.
>
> **[8:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=493)** Type in permanently delete.
>
> **[8:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=500)** Click delete objects, and now our bucket should be empty.
>
> **[8:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=506)** So click on the source, my CloudTrail bucket 0798.
>
> **[8:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=512)** You'll see that it has no objects.
>
> **[8:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=514)** Now if we go to the S3 dashboard again, click on buckets, we should be able to delete the CloudTrail bucket since it's empty.
>
> **[8:47](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=527)** Click on delete, type in the bucket name.
>
> **[8:52](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=532)** I'm just going to copy this.
>
> **[8:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=536)** Hit delete bucket and make sure you delete all of the other S3 buckets that you created during this course.
>
> **[9:08](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=548)** Let's head back to the EC2 instance dashboard and see if our instance has been terminated.
>
> **[9:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=558)** As you can see, we had zero running instances but if I click on the little X bar, we can see that we have one instance but it's in terminated state, which is what we wanted.
>
> **[9:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=572)** After a few minutes you'll not see this instance in terminated state.
>
> **[9:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=575)** It'll be deleted from the dashboard.
>
> **[9:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=578)** So that should clean up all the resources that we spun up during this course.
>
> **[9:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=582)** Great job.

> [!info]- Semantic Content
>
> **Env Vars:** aws (21), cli (9), rds (5), ec2 (3), aws3 (1)
> **CLI Commands:** aws (22), make (6), cat (1), chmod (1), ls (1)
> **Code Keywords:** let (15), delete (12), case, (2), this. (1)
> **UI Navigation:** click on (5), scroll down (1), dropdown (1), go to (1)
> **Prerequisites:** configure (3)
> **Tools:** terminal (1), github (1)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** best practice (1), make sure to (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=0)** - Congratulations on completing the AWS CLI course.
>
> **[0:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=3)** You have taken an incredible journey through the world of AWS command line interface, exploring how to manage various AWS services efficiently and effectively.
>
> **[0:13](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=13)** As you venture further into AWS there are several exciting avenues you can explore to deepen your expertise and stay ahead in the fast paced cloud computing world.
>
> **[0:24](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=24)** Here are some recommended next steps for you to consider.
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=27)** First, explore advanced AWS CLI features.
>
> **[0:31](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=31)** AWS CLI is a powerful tool with many advanced features.
>
> **[0:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=35)** Consider diving deeper into the AWS CLI documentation and explore less commonly used commands and options.
>
> **[0:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=42)** You can practice managing more complex AWS resources and leveraging AWS CLI to automate advanced workflows.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=51)** Next, check out the AWS Cloud Formation and infrastructure as code.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=56)** Exploring infrastructure as code or IaC with AWS cloud formation is highly valuable.
>
> **[1:02](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=62)** Cloud formation allows you to define and provision AWS infrastructure in a declarative way, making it easier to manage complex infrastructures and ensure consistency.
>
> **[1:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=74)** Also, consider AWS certifications.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=78)** Earning AWS certifications is an excellent way to validate your expertise and stand out in the job market.
>
> **[1:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=86)** Consider pursuing certifications like AWS Certified Solutions Architect, AWS Certified Developer, or AWS Certified SysOps Administrator.
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=96)** These certifications are well respected in the industry and can boost your career opportunities.
>
> **[1:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=102)** Finally, stay up to date with latest AWS announcements, trends and practices by regularly reading AWS blogs, attending webinars and participating in AWS community events.
>
> **[1:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=115)** Networking with other professionals and sharing knowledge is an enriching experience.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=119)** Remember, learning is a continuous journey.
>
> **[2:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=123)** Embrace curiosity and practice hands-on with AWS CLI.
>
> **[2:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=127)** Seek opportunities to apply your skills in real world projects.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=131)** AWS is constantly evolving and staying curious and engaged will keep you at the forefront of cloud technology.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=138)** Keep exploring, keep growing, and enjoy your journey in the cloud.

> [!info]- Semantic Content
>
> **Env Vars:** aws (22), cli (6)
> **CLI Commands:** aws (22)
> **Definitions:** is a  (2), is an  (2)
> **Code Keywords:** interface (1), finally, (1)
> **Tools:** command line (1)
> **Best Practices:** recommended (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
← [[Introduction to AWS AI Services for Developers]] | **3 of 6** | [[AWS Security Best Practices for Developers]] →

## Appears In

- [[Advance Your AWS Development Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)