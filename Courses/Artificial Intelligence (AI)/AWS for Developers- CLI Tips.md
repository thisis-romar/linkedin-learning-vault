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
  - '[Advance Your AWS Development Skills- Exploring Complex Application Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20AWS%20Development%20Skills-%20Exploring%20Complex%20Application%20Development.md)'
prev_courses:
  - '[Introduction to AWS AI Services for Developers](Introduction%20to%20AWS%20AI%20Services%20for%20Developers.md)'
next_courses:
  - '[AWS Security Best Practices for Developers](AWS%20Security%20Best%20Practices%20for%20Developers.md)'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":3,"total":6,"prev":"Introduction to AWS AI Services for Developers","next":"AWS Security Best Practices for Developers"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/aws-command-line-interface-cli
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AWS%20for%20Developers-%20CLI%20Tips.md)

![AWS for Developers: CLI Tips](https://media.licdn.com/dms/image/v2/D560DAQEOai9Mk_3_lg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696618989101?e=2147483647&amp;v=beta&amp;t=GExiqCGKB5DhYgREzfp7ekdgycP5rCknmmHhnHKzJmc)

# AWS for Developers: CLI Tips

> The command line interface for AWS allows you to interact with AWS services, right from your terminal. In this course, instructor Rishab Kumar provides best practice tips for managing common tasks using the AWS CLI, including managing EC2 instances, S3 buckets, permissions, and more. He also shares insights on advanced topics, including integrating the CLI with CloudTrail and troubleshooting commo

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-cli-tips) | 1h 53m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why use AWS CLI?](#why-use-aws-cli)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to AWS CLI**](#1-introduction-to-aws-cli) (3 videos)
  - [Overview of AWS CLI and its benefits](#overview-of-aws-cli-and-its-benefits)
  - [Installing and configuring AWS CLI](#installing-and-configuring-aws-cli)
  - [Basic commands and syntax](#basic-commands-and-syntax)
- [**2. Managing EC2 Instances with AWS CLI**](#2-managing-ec2-instances-with-aws-cli) (3 videos)
  - [Creating and launching EC2 instances](#creating-and-launching-ec2-instances)
  - [Working with EC2 security groups and key pairs](#working-with-ec2-security-groups-and-key-pairs)
  - [Managing EC2 instances with AWS CLI commands](#managing-ec2-instances-with-aws-cli-commands)
- [**3. Working with S3 and AWS CLI**](#3-working-with-s3-and-aws-cli) (3 videos)
  - [Uploading, downloading, and managing files in S3 buckets](#uploading-downloading-and-managing-files-in-s3-buckets)
  - [Managing S3 bucket policies and permissions](#managing-s3-bucket-policies-and-permissions)
  - [Using AWS CLI to automate S3 tasks and workflows](#using-aws-cli-to-automate-s3-tasks-and-workflows)
- [**4. Managing Permissions with IAM and AWS CLI**](#4-managing-permissions-with-iam-and-aws-cli) (3 videos)
  - [Introduction to IAM users, groups, and policies](#introduction-to-iam-users-groups-and-policies)
  - [Creating and managing IAM users and groups](#creating-and-managing-iam-users-and-groups)
  - [Using AWS CLI to manage IAM roles and policies](#using-aws-cli-to-manage-iam-roles-and-policies)
- [**5. Managing Other AWS Services with AWS CLI**](#5-managing-other-aws-services-with-aws-cli) (3 videos)
  - [Managing RDS databases with AWS CLI](#managing-rds-databases-with-aws-cli)
  - [Managing RDS Snapshots and monitoring with CloudWatch](#managing-rds-snapshots-and-monitoring-with-cloudwatch)
  - [Working with CloudWatch using AWS CLI](#working-with-cloudwatch-using-aws-cli)
- [**6. Advanced AWS CLI Topics**](#6-advanced-aws-cli-topics) (2 videos)
  - [Integrating AWS CLI with AWS CloudTrail](#integrating-aws-cli-with-aws-cloudtrail)
  - [Troubleshooting AWS CLI issues](#troubleshooting-aws-cli-issues)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use AWS CLI?](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/why-use-aws-cli?u=76281980&t=0)** - Using the command line interface for AWS allows you to interact with AWS services right from your terminal. With a few keystrokes you can create resources, modify configurations, and manage your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). I'm Rishab Kumar. I'm a Developer Evangelist, and AWS Community Builder and this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Course will cover all you need to know about setting up and using [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) for AWS. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Env Vars:** aws (4), cli (1)
> **CLI Commands:** aws (4)
> **Tools:** command line (1), terminal (1)
> **Speakers:** - using (1)

#### [What you should know](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we dive into the exciting world of AWS command line interface, let's talk about what you should know to make the most of this learning experience. While you don't need to be an AWS expert, having a solid understanding of the following concepts will certainly help. The first is familiarity with basic [Cloud Computing](../../Topics/Cloud%20Computing.md) concepts. Understanding things like virtualization, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and cloud computing models will provide you with a solid foundation for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course. Next, a general understanding of [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) is beneficial. Knowing about Key AWS services like [EC2](../../Skills/DevOps/Amazon%20EC2.md), S3, IAM, RDS and CloudWatch will help you grasp the concepts more easily. Finally, while you don't need to be an expert in using the command line, some familiarity with basic command line operations will be helpful. If you have used command prompts or terminals before, you're in great position.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** aws (3), ec2 (1), iam (1), rds (1)
> **CLI Commands:** aws (3), make (1)
> **Tools:** command line (3)
> **Speakers:** - [instructor] (1)


### 1. Introduction to AWS CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of AWS CLI and its benefits](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=0)** - [Instructor] Welcome to chapter one of our AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) course. In this video, we'll start by providing an overview of the AWS Command Line Interface, also known as the AWS CLI, and explore its numerous benefits. By the end of this video, you'll understand what AWS CLI is, and how it can simplify your cloud management tasks and enhance your workflow. So let's dive in. The AWS Command Line Interface is a powerful tool that allows you to interact with various AWS services directly from your command-line interface or terminal. It provides a command line interface to AWS services and offers a comprehensive set of commands and options for managing your AWS resources. Now, you might be wondering why should you use AWS CLI when you already have access to the AWS Management console? Well, let me share some of the key benefits of using AWS CLI. The first benefit is efficiency and speed. AWS CLI enables you to perform actions quickly and efficiently. With a few keystrokes, you can create resources, modify configurations, and manage your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). By leveraging the power of the command line, you can save valuable time and streamline your workflows. Next is automation and scripting.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=94)** AWS CLI offers extensive support for automation and scripting. You can write scripts to automate repetitive tasks, set up complex deployments, and orchestrate resource management. This allows you to standardize and reproduce your configurations consistently, reducing the chances of human error and promoting [Infrastructure as Code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) practices. Third one is flexibility and portability. One of the great advantages of AWS CLI is its flexibility and portability. It works seamlessly across different platforms including [Windows](../../Glossary/Service/Windows.md), macOS, and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Whether you're working on your local machine or within a remote environment, you can rely on AWS CLI to manage your AWS resources consistently. Finally, integration and extensibility. AWS CLI is designed to integrate with other tools and services, allowing you to build custom workflows and leverage third party integrations. You can combine AWS CLI commands with other scripting languages, SDKs, and automation frameworks to create powerful solutions tailored to your specific needs. These are just a few of the benefits you'll experience when using AWS CLI. Throughout this course, we'll explore the capabilities of AWS CLI in detail,
>
> **[3:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/overview-of-aws-cli-and-its-benefits?u=76281980&t=187)** covering various AWS services and scenarios. By the end, you'll have the knowledge and confidence to harness the full potential of AWS CLI for your cloud management tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (14), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** aws (22), cli (14)
> **CLI Commands:** aws (22)
> **Tools:** command line (4), terminal (1)
> **Definitions:** known as (1), is a  (1)
> **Code Identifiers:** macos (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Installing and configuring AWS CLI](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=0)** - [Instructor] Let's go through the process of installing and configuring the AWS Command Line Interface on your local machine. By the end of this video you'll be ready to start using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) and manage your AWS resources from the command line. Let's get started. The first thing that's needed is [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3. Ensure that you have Python 3 version 3.3 or higher installed on your machine. AWS CLI requires Python to function properly. You can check that by typing python3 --version, or python --version, depending on your system. And as you can see, we have Python 3.9 installed on this machine, so we are good. The second requirement is an AWS account. To configure AWS CLI, you'll need an AWS access key and secret access key. These credentials provide secure access to your AWS resources. You can obtain these keys from the AWS Management Console by navigating to the Identity and Access Management service. Head over to your AWS Management Console. And mine might look different because it's zoomed in for better visibility. On the top you'll see a search bar, and type in IAM. And click on the IAM tab.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=100)** This should open up your IAM dashboard. And as you can see, I only have one user. And if we click on Users on the left-hand side of the navigation pane. And now to add a new user, click on Add users. I'm going to name this user as aws-cli-user. Click Next. And let's keep everything else as default, so click Next. Now click on Create user. As you can see, we have a green check mark saying, "User created successfully." Now we need to create an access key and secret access key. Click on the user that you just created. And now you want to click on the Security credentials tab.
>
> **[2:50](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=170)** After scrolling down, you'll see that we have no access keys. Click on Create access key. And as you can see, there are different use cases you might use your access key and secret access key. For us, it's going to be Command Line Interface, which is the first option. And then if you scroll to the bottom, click on I understand the above recommendations and want to proceed. And then click Next. It's a best practice to give your secret key and access key a tag value.
>
> **[3:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=223)** Then click on Create access key. And now you can see a green check mark on top saying, "Access key created." You have to treat them as username and password for any of the other services that you might use, since these provide access to your AWS account. Make sure that you have saved your access key and secret access key somewhere safe. You can also download the CSV file. After you have saved your access Key and secret access key securely, click Done. And now if we go back to the Users tab, you can see we have an AWS access key generated for our user. Now that we have our user created, it's time to install AWS CLI on our local machine. The installation process may vary slightly depending on your operating system, but the overall steps remain the same. I'll guide you through the general installation process for a macOS system, since that's what I'm using here. Go to the AWS Command Line Interface official documentation website. And there you'll find the instructions for installing AWS CLI. Since mine is a macOS system, I'll click on the macOS instructions. And you'll see a few options to install or update the AWS CLI.
>
> **[5:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=318)** One of them is a GUI installer. And you could also use the command line installer. Since this is a CLI course, let's go with the command line installer.
>
> **[5:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=334)** You'll see a bunch of commands that you'll have to run in your terminal. Let's copy them and head over to our terminal. Paste the commands in your terminal and hit Enter. Also to note, depending on the access that your user have, you might have to enter an admin password. But now we have the AWS CLI version to install. And you can verify that installation by typing in aws --version.
>
> **[6:14](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=374)** As you can see, the output says aws-cli version 2.13.7. So if everything is set up correctly, you should see the version number of the installed AWS CLI. Now that you have AWS CLI installed on your machine, let's move on to configuring it to work with your AWS account. So I'm going to clear this out for better readability and type in aws configure. And now it should ask you for the AWS access key ID. Remember, these are the access key and secret access key that we created a few minutes ago. So copy the access key ID and paste it into your terminal. And next it'll ask you for your AWS secret access key. And now you also have the opportunity to give AWS CLI a default region. I'll choose the closest one to me, which is us-west-1.
>
> **[7:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/installing-and-configuring-aws-cli?u=76281980&t=446)** And you can find this in your AWS account and pick whatever your preferred region is. For the default output format, I'll leave it blank, which defaults to none. And there we go. We have our AWS CLI installed and configured with our access key and secret access key. Now you're ready to start managing your AWS resources directly from the command line. Now you're ready to start managing your AWS resources directly from the command line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (14), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **Env Vars:** aws (27), cli (12), iam (3), csv (1), gui (1)
> **CLI Commands:** aws (31), python (5), find (2), python3 (1), make (1)
> **Tools:** command line (8), terminal (4)
> **UI Navigation:** click on (10), go to (1)
> **Prerequisites:** install (3), configure (2), you'll need (1), set up (1)
> **Versions:** python 3 (3), version 3 (1), version 2 (1), 13.7 (1)
> **Definitions:** is a  (3), is an  (1)

#### [Basic commands and syntax](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=0)** - [Instructor] Let's cover the basics of AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) commands and syntax. Understanding these fundamentals is crucial as we'll be using them throughout the course. By the end of this video, you'll have a solid grasp of how to structure AWS CLI commands effectively. AWS CLI commands follow a specific syntax that contains of a command name, options and arguments. Let's break it down. An AWS CLI command typically follows this structure: Aws, space, service, space, operation. The aws keyword signifies the start of a command followed by the AWS service you want to interact with. And finally, the specific operation you wish to perform on that service. Options and arguments provide additional information to AWS CLI commands. Options modify the behavior of the command, while arguments specify the resources or values the command should operate on. Options are typically proceeded by dash, dash, while arguments are specified without any prefixes. Now let's go over some common command elements you'll frequently encounter in AWS CLI. First is service-specific commands. Each AWS service has its own set of commands tailored to its functionalities. For example, [ec2](../../Skills/DevOps/Amazon%20EC2.md) run-instances is a command specific
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=95)** to [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) that launches EC2 instances. Next is flags. Flags are options that change the behavior of the command. They're usually preceded by dash, dash. For example, --region specifies the AWS region to perform the command in. Next, we have output format. AWS CLI provides various output formats to display command results. The --output flag allows you to specify the desired format, such as [JSON](../../Skills/Web%20Development/JSON.md), text or table. We also have filtering and curing. AWS CLI commands often include options to filter and curate the results. For instance, --filter can be used to narrow down the output based on a specific criteria. Last but not least, we have pagination. When dealing with large result sets, AWS CLI employs pagination by default. You can control pagination using --page-size or --starting-token options. Let's look at a few examples to solidify our understanding of AWS CLI commands and syntax. To list your S3 buckets, you would use the command aws s3 ls. The s3 denotes the S3 service and ls stands for list.
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=190)** Running this command will display a list of your S3 buckets. Let's try that out in our terminal. Let's type aws s3 ls to list our S3 buckets.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=206)** Oops, an error occurred. We got an AccessDenied when we were trying to call the ListBuckets operation. Let's go over it together. Head over to your AWS management console and go to the IAM dashboard. Click on the users and then click on the user that you just created for your CLI use. If you scroll to permissions, you can see we have zero permission policies assigned to this user. Let's click on add permissions. Here you can either add the CLI user to a group that you might have. You could also copy permissions that you might have for another user or you could attach some policies directly to this user. And that's what I'm going to do. And if you scroll down, you can see all these different type of policies that you can attach depending on the services you'll be needing. For the purposes of this course, I'm going to give it the administrator access but it is not best practice. Make sure you use fine grain access for your CLI user. After picking up the policies, click next and click on add permissions.
>
> **[4:58](https://www.linkedin.com/learning/aws-for-developers-cli-tips/basic-commands-and-syntax?u=76281980&t=298)** Okay, we see a green check mark saying one policy added. Let's head over to our terminal again and run the aws s3 ls command again. So instead of typing it out, I'm going to hit the up arrow and save some time because it'll type out the last command and hit enter. There we go. It listed two buckets that I created a while ago. In your case, it might have listed zero buckets if you don't have any. Great, now we have permissions set for our CLI IAM user and have a solid understanding of AWS CLI commands and syntax. We will dive deep into some common AWS services. Remember, mastering these basics will set a strong foundation for your journey with AWS CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (16), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** aws (17), cli (16), ec2 (2), iam (2), json (1)
> **CLI Commands:** aws (22), ls (4), make (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1)
> **Analogies:** for example (2), such as (1), for instance (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), stands for (1)
> **Best Practices:** best practice (1)


### 2. Managing EC2 Instances with AWS CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating and launching EC2 instances](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), let's dive into creating and launching Amazon Elastic Compute Cloud instances, also known as [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances using the AWS CLI. By the end of this video, you'll be able to leverage AWS CLI to provision EC2 instances with ease. Let's get started. The first step to creating an EC2 instance is choosing an Amazon machine image, also known as AMI. AMIs provide the foundation for your virtual machine containing the operating system and any additional software you may need. Let's head over to AWS Management console and find a suitable AMI. So, in your AWS Management console in the search bar type EC2, click on the tab that says EC2, and on the left-hand side of the navigation window, you'll see images tab, click on AMIs, and you might have your personal Amazon machine images already that you might see here, but you can also explore the public images that are provided by Amazon. You can do that by clicking on the AMI catalog, and now, you can see we have 44 Quickstart AMIs. For the purposes of this course, I'll be using Amazon [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) 2023 AMI. In order to create an instance,
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=96)** you'll need the AMI ID, which you can find right under the name of the Amazon Linux 2023 AMI or whatever AMI you decide to use. Now, let's go over the basic command structure to launch your EC2 instance. To create an EC2 instance using AWS CLI, we'll use the run-instances command. It follows the following syntax. The image ID is the option that specifies the ID of the AMI you want to use for your instance. Instance-type defines the instance type such as t2.micro, M5 large, or any other supported instance types. The key name option specifies the key pair to associate with the instance enabling, as such access for Linux instances. We'll also need to provide the security group IDs that control the inbound and outbound traffic to the instance. Since we haven't created a security group and a key pair yet, our command is not complete, but to create the instance, this is what the command would look like because the AMI ID, 12345678, does not exist. But to get an idea, you have the AMI ID, you have an instance type that's t2.micro, we have a key name, which is my-key-pair, and we are also specifying a security group ID valued sg-12345678. Once you execute this command, AWS CLI will initiate the instance creation process. You'll receive a response containing details
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-launching-ec2-instances?u=76281980&t=190)** about the new instance such as the instance ID, public IP address, and more. Congratulations. You now know the command structure and additional configuration needed before we can launch our first instance. Now, let's configure a security group and a key pair so that we can launch an actual instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (7), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3)
> **Env Vars:** ami (10), aws (7), ec2 (7), cli (5)
> **CLI Commands:** aws (7), find (2)
> **UI Navigation:** click on (2)
> **Definitions:** known as (2)
> **Analogies:** such as (2)
> **Prerequisites:** you'll need (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Working with EC2 security groups and key pairs](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=0)** - [Instructor] Now let's work with [EC2](../../Skills/DevOps/Amazon%20EC2.md) security groups and key pairs using the AWS Command Line Interface. By the end of this video you'll be able to effectively create and manage EC2 security groups and key pairs using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). EC2 security groups and key pairs are essential components for securing your EC2 instances. Let's explore how to work with them using AWS CLI. Security groups act as virtual firewalls controlling inbound and outbound traffic for your instances. You can specify the protocols, ports, and IP ranges allowed to access your instances. Let's see how to create a security group using the CLI. To create an EC2 security group using CLI we'll use the create security group command. It follows the syntax AWS space EC2 space create security group and then the group name and description. Let's break down each element. The first one is group name. This option specifies the name you want to assign to the security group. The second one is description. Here, you provide a description that explains the purpose and characteristics of the security group. Now let's put it all together and run the command to create a security group. Let's head over to our terminal and now I'm going to clear the screen for better visibility. And let's type out the command.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=93)** AWS EC2 create-security-group.
>
> **[1:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=102)** The first option was group name and we'll call this my security group. You can name your security group appropriately and the second one was description. And then give this a description of my first security group.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=129)** And remember to have your description in quotes. Hit enter and there we go. It gives us an output of the security group ID, which means the creation of the security group happened successfully. With the security group created we can now add rules to allow inbound and outbound traffic. These rules define which protocols, ports and IP ranges are allowed or denied access. You can configure rules for SSH, HTTP, HTTPS, and any other protocols your application requires. To add rules to an EC2 security group using AWS CLI we'll use the authorize-security-group-ingress and authorize-security-group-egress commands. They follow a very similar syntax to create security group. The ingress goes AWS space EC2 space authorize-security-group-ingress along with the group ID, the protocol, the port, and the CIDR. And similarly for egress you just specify authorize-security-group-egress with the same options. Let's break down each element. The first one is the group ID. This option specifies the security group ID to which rule should be added. The second one is protocol. Here you define the protocol such as TCP, UDP or ICMP. Third one is the port.
>
> **[3:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=226)** This option allows you to specify the port or port range for the rule. Last but not least is CIDR. You'll need to provide the CIDR block or IP range that should be allowed access. Now let's put it all together and run the commands to add rules to our security group. Let's head over to terminal and let's add SSH access to our security group. And we can do that by typing AWS EC2 authorize security group ingress
>
> **[4:28](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=268)** group ID, which is the security group ID that was outputted.
>
> **[4:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=282)** Protocol, which will be TCP. Port, which is 22 for SSH. The last one is CIDR. And we'll use our own public IP as it is not good practice to open up port 22 to the entire world. So in my case, it's 172.217.22.14 and hit enter. Oops, looks like there is an error. So I missed out a slash for my IP address CIDR. So I'm going to hit the up arrow to get that command back and add /32 just for that individual IP. And if we hit enter again, you can see that the ingress rule was added to our security group which allows SSH access from this specific public IP which is 172.217.22.14. Moving forward, key pairs provides secure access to your EC2 instances by enabling SSH connectivity for [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) instances. Let's explore how to create and manage key pairs using AWS CLI. To create a key pair using AWS CLI we'll use the create-key-pair command. It follows the following syntax, AWS space EC2 space create-key-pair with a parameter key-name. This command will generate a new key pair
>
> **[6:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=379)** and provide you with the private key. Remember to keep the private key secure and treat it as your password. Now let's put it into action and run the command to create a key pair. Head over to your terminal. And again, for readability, I'm going to hit clear. Let's type the command AWS space EC2 space create key pair, and the key name I'm going to name it my key pair.
>
> **[6:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=419)** And as you can see, it gave us the private key, which again I've blurred this out so that the private key remains secure. Make sure you treat yours as a password. Remember, we needed a security group and a key pair to launch our first EC2 instance. Since we have both of these now let's launch our first instance. Let's head back over to our terminal again and let's execute the EC2 run instance command. So AWS space EC2 space run-instance.
>
> **[7:39](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=459)** The first option was image ID. And you can copy this from your AWS management console. Remember, I was going to use the Amazon Linux 2023 AMI. So the AMI ID is right under the name. I'm going to copy this, use it in our command. The next option is the instance type. I'm going to be using a T2 micro instance. Next is key name. I named my key, my key pair. And the last one is security group. And here I have the security group ID from earlier which we created. Hit enter. Now you can see that it gave us an output with some of the instance settings in [JSON](../../Skills/Web%20Development/JSON.md) format. And to confirm if the EC2 instance was created we can go into our management console and visit the EC2 dashboard. And you can see it says instances running 1. As you can see, we have this instance that has no name because we didn't specify it in the command but is a T2 micro instance, which is in the initializing phase. Fantastic.
>
> **[9:10](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-ec2-security-groups-and-key-pairs?u=76281980&t=550)** You now know how to launch an EC2 instance and also create and manage EC2 security groups and keep pairs using AWS CLI. These skills will empower you to enhance the security and access control of your EC2 instances effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (21), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (8), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** ec2 (21), aws (15), cli (8), ssh (5), cidr (5)
> **CLI Commands:** aws (15), ssh (5), make (1)
> **Tools:** terminal (4), command line (1)
> **Best Practices:** remember to (2), good practice (1)
> **Versions:** 172.217.22 (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** configure (1), you'll need (1)

#### [Managing EC2 instances with AWS CLI commands](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=0)** - [Instructor] We launched our first [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. Now let's start managing that instance using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Specifically, we'll explore how to start, stop, and terminate instances to have full control over your compute resources. Managing your EC2 instance efficiently is a critical aspect of cloud management. AWS CLI provides a set of commands that allow you to start, stop, and terminate instances easily. Let's explore how to do that. Before we dive into managing instances, let's learn how to list the EC2 instances in your AWS account using AWS CLI. The describe-instances command allows you to retrieve information about your instances such as their IDs, states, and more. Let's head over to our terminal and list the instances. To do that, type in: aws ec2 describe-instances, hit Enter. And you'll see A [JSON](../../Skills/Web%20Development/JSON.md) output of all the instances in your account. And as you can see, the instance ID: i-091 is the t2.micro instance that we just launched, and the t2.micro as I said. And similarly, if you had more instances, you will see that in this JSON output. And to start an EC2 instance using AWS CLI, we'll use the start-instances command.
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=96)** It follows the following syntax: aws ec2 start-instances, and then the option of instance-ids. Since our EC2 instance is already running, we can't start it again. But we can stop our EC2 instance using the AWS CLI. We'll use the stop-instances command. It follows the following syntax: aws ec2 stop-instances, and then the option instance-ids. This command gracefully shuts down the instance and stops its operation. Let's put it to action. Head over to your terminal, and I'm going to clear my screen here. To stop the instance, type in: aws ec2 stop-instances, and then the option --instance-id. I'm going to head over to my AWS Management Console to grab the instance ID, or you could list the instance ID by using the describe-instances command. Here is the instance ID, I'm going to copy this, paste it in my terminal, and hit Enter. As you can see, we got a JSON output saying StoppingInstances, and the instance ID is i-091. When you no longer need an EC2 instance,
>
> **[3:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=192)** you can also terminate and release the associate resources and stop incurring charges. To terminate an EC2 instance using AWS CLI, we'll use the terminate-instances command. It follows the following syntax: aws ec2 terminate-instances, and then the option instance-ids. This command permanently deletes the instance. So back in our console, we had this instance which is now stopped but not terminated. So let's put the terminate-instance command in action. Head over to your terminal and type in the command: aws ec2 terminate-instances with the option --instance-ids. And I'm going to paste my instance ID. Hit Enter, and as you can see in the output we have terminating instances. We have an instanceId, i-091, which was our instance. Keep in mind that you can manage multiple instances at once by providing multiple instance IDs separated by spaces. AWS CLI will apply the specified action to each instance accordingly. You now know how to manage your EC2 instances using AWS CLI commands. Starting, stopping, and terminating instances
>
> **[4:46](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-ec2-instances-with-aws-cli-commands?u=76281980&t=286)** gives you full control over your compute resources and allows you to optimize their usage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (15), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (3)
> **Env Vars:** aws (10), ec2 (9), cli (8), json (3)
> **CLI Commands:** aws (16)
> **Tools:** terminal (4)
> **Code Identifiers:** instanceid (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)


### 3. Working with S3 and AWS CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [Uploading, downloading, and managing files in S3 buckets](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=0)** - [Instructor] Let us now explore how to work with files in Amazon Simple Storage Service, also known as S3, using the AWS Command Line Interface. Specifically, we'll cover uploading, downloading, and managing files. By the end of this video, you'll have the skills to efficiently handle your files in S3 using [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). What is Amazon S3? S3 is a highly scalable and durable object storage service offered by [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md). Let's dive into how you can interact with S3 buckets and manage your files using AWS CLI. Before we proceed, let's briefly touch on creating an S3 bucket. You can create a bucket using the AWS Management Console, or using the AWS CLI. For CLI, you can create a bucket by using the following command, aws + Space + s3 + Space mb + Space + s3 and then the bucket name. Mb, here, stands for make bucket. Now, let's put this into action and head over to our terminal. I'm going to create a bucket with a unique name. Remember, S3 buckets need to have a globally unique name. So to create a bucket, type in aws + Space + s3 + Space + mb + Space + S3:// and then a unique bucket name. I'll go with my-demo-bucket
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=97)** and some random numbers at the end. Hit Enter, and as you can see, we got an output saying make_bucket and then the bucket name. And we can also verify if the bucket was created by using the ls command. So to do that, type in aws + Space + s3 + Space + ls. As you can see, we have a bucket named my-demo-bucket-743748. Now, to upload files to an S3 bucket using the AWS CLI, we'll use the cp command, also known as copy. It allows you to copy files and directories between your local machine and S3. The syntax goes AWS + Space + s3 + Space + cp, then source and the destination. Let's break down each element. The first one is source. This represents the path or location of the file or directory you want to upload. It can be a local file path or another S3 object. The second one is destination. Here, you specify the target location in your S3 bucket where you want to upload the file. Now, let's put it into practice and run the command to upload a file to an S3 bucket. Head over to your terminal. Now, I have created a local directory, here, called aws-cli and it has a TXT file, or a text file,
>
> **[3:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=195)** called hello.txt, as you can see. The hello.txt file just has a text saying, "hello world." But I want to copy this file to my newly created S3 bucket. And in order to do that, I'll type in the command aws + Space + s3 + Space + cp, and then the source, which is the path to my local file, which is hello.txt, because I am currently in that directory, and then the destination, which is my S3 bucket. So I'm going to copy the name of my bucket here, and use s3:// the name of my bucket as source, hit Enter. And this would upload the hello.txt or copy hello.txt to my S3 bucket. You can confirm that by going over to your AWS Management Console. So, if I head over to AWS Console, go to Services, go to S3, and I have my demo bucket that just got created. And you can see we have a hello.txt file that was uploaded. Similarly, you can download files
>
> **[4:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=289)** from an S3 bucket using AWS CLI. The cp command works for downloading as well. You'll just need to reverse the source and destination paths. Here's the syntax. aws + Space + S3 + Space + CP, and then source and destination, which looks exactly like we're uploading a file to S3. But instead of source being our local file we'll make that the S3 bucket, and the destination would be our local path. Let's put that into action and head over to our terminal. So let me change my directory, here. And in this directory, we don't have any hello.txt file. So what I'm going to do is download the hello.txt, which was in my S3 bucket, to my local machine. And in order to do that, I'll type in aws + Space + s3 + Space + cp And now our source is going to be S3 bucket
>
> **[6:01](https://www.linkedin.com/learning/aws-for-developers-cli-tips/uploading-downloading-and-managing-files-in-s3-buckets?u=76281980&t=361)** /hello.txt. And the destination is my current directory. Hit Enter. Oops, we have got an error saying that the download failed because it's a read-only file system. And we'll talk about permissions and policies for S3 buckets in one of the upcoming videos. AWS CLI provides additional commands to manage files in an S3 bucket. You can use commands like ls to list files, mv to move files within the bucket, and rm to remove files. There's also a sync command to synchronize files between local storage and the S3 bucket. Fantastic, you now know how to upload, download, and manage files in S3 bucket using the CLI. This knowledge will empower you to efficiently handle your data in S3 and leverage its [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and durability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (9), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** aws (17), cp (6), ls (3), make (2), mv (1)
> **Env Vars:** aws (10), cli (8), txt (1)
> **File Paths:** hello.txt (9)
> **Tools:** terminal (3), command line (1), aws console (1)
> **Definitions:** known as (2), is a  (1), stands for (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** make_bucket (1)

#### [Managing S3 bucket policies and permissions](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=0)** - [Instructor] Welcome back. Now, we'll dive into managing S3 bucket policies and permissions using the AWS command line interface. By the end of this video, you'll be able to effectively control access to your S3 buckets and manage bucket level permissions using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Let's get started. "Securing your S3 buckets and managing access permissions is crucial for protecting your data." AWS CLI provides commands that allow you to manage bucket policies and permissions effortlessly. Let's explore how to do that. But first, let's understand S3 bucket policies. "S3 bucket policies are a [JSON](../../Skills/Web%20Development/JSON.md)-based access policies that define who can access your S3 bucket and what actions they can perform." These policies are powerful tools for managing fine grain access control. Let's see how to work with them using AWS CLI. To create an S3 bucket policy using AWS CLI, we'll use the S3 API command with the put bucket policy option. The command follows the following syntax: aws space s3api space put-bucket-policy. And then, the bucket as the option, and policy where you will add your policy file as an option. Let's break down each element. First, we have bucket.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=93)** This option specifies the name of the bucket to which you want to apply the policy. Second, we have policy. Here you provide the JSON file containing the policy definition. Now let's put this into action and run the command to create an S3 bucket policy. Head over to your terminal. So before I type out the command, I have a local policy dot JSON file,
>
> **[2:04](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=124)** which only allows the user to access my S3 bucket over HTTPS. So any of the requests that come over HTTP are rejected. And you can look up different policies in JSON format on the AWS website. So if you go to AWS's documentation, you can find bucket policy examples. And here, depending on what's your need, you can download different JSON files depending on the permission level you need. But let's go back to our terminal and apply the HTTPS request dot JSON policy to my bucket. Okay, now we can apply this policy. But before I do that, we have to change the doc dash example dash bucket to the bucket name that we generated. So I'll be using the text editor called nano to edit this file. So nano HTTPS dash request, or you can do tab that auto fills the command. Hit enter. This would open up the HTTPS dash request dot JSON. And we will change the doc dash example bucket here to our own bucket name. So I have my bucket name copied. I'm just going to paste it here and the line beneath.
>
> **[3:40](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=220)** And your bucket name is going to be different than mine, so make sure you replace with whatever the appropriate bucket name is. Hit control X to save your file, and hit Y. Hit enter, and this will save the file and exit the nano code editor. I'm going to clear the screen again, and let's do cat HTTPS just to see the file. Again, you can do tab to auto fill the command. Hit enter. And now instead of that example bucket, we actually see the bucket name that I had. Now, let's apply this policy to our bucket by typing in the command aws space s3api space put-bucket-policy.
>
> **[4:36](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=276)** The first option, which is the bucket, and name of my bucket.
>
> **[4:51](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=291)** And the second option, which is policy. And the policy file that it will be using, which is HTTPS dash request dot JSON with a prefix file colon double slash HTTPS dash request dot JSON. Hit enter. And this should apply the bucket policy to our bucket. You can verify that by going into your AWS management console. Click on the bucket name where you applied the policy and go into "Permissions" tab. Scroll down. You will see a setting called "Bucket Policy," which would have the text that was contained in the policy dot JSON. In addition to bucket policies, AWS CLI allows you to manage bucket permissions at a granular level. You can add or remove permissions for specific users, groups, or AWS accounts using commands like S3 API put bucket ACL and S3 API put object ACL. Now let's put this into action and run a command to add a bucket permission. Head over to your terminal. I'm going to clear my screen here.
>
> **[6:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=386)** And now we'll use the put bucket ACL. In order to do that, type in aws space s3api space put-bucket-acl. The first option is bucket and the name of our bucket.
>
> **[6:53](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=413)** And the second option is your bucket ACL. I'm going to give read access to all users. In order to do that, I'll go with the grant read option and the URI to give all users access. And you can find this information on the AWS documentation. So let's hit enter. Oops, we have got an error saying that the bucket does not allow ACLs, and that is because our ACLs on this bucket are not enabled. And you can find this setting in your AWS management console. So if we go under the "Permissions" tab...
>
> **[7:49](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-s3-bucket-policies-and-permissions?u=76281980&t=469)** As you can see, the bucket owner enforced setting doesn't allow ACLs. If we click on "Edit," you will have the ability to enable ACLs. So click on "ACLs Enabled," and click on "I acknowledge that ACLs will be restored." Click on "Save changes." Now, let's try running that command again. And there we go. We have our global read access to all users applied to our S3 bucket. So after applying the bucket policy and permissions, it's essential to verify that they are correctly set. You can use commands like aws s3api space get-bucket-policy and aws space s3api space get-bucket-acl to retrieve and review the current policy and permissions for your S3 bucket. Great work. You now know how to manage S3 bucket policies and permissions using AWS CLI. Controlling access to your S3 bucket ensures the security and confidentiality of your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (10), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (6)
> **Env Vars:** aws (13), json (10), https (7), cli (6), acl (4)
> **CLI Commands:** aws (18), find (3), make (1), cat (1)
> **UI Navigation:** click on (5), go to (1), scroll down (1)
> **Tools:** terminal (3), command line (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Using AWS CLI to automate S3 tasks and workflows](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=0)** - [Instructor] Now let's explore how to use the AWS Command Line Interface to automate common tasks and workflows in Amazon Simple Storage Service, or S3. Specifically we'll focus on automating file synchronization between local and S3 storage. By the end of this video, you'll have the skills to automate repetitive S3 tasks using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Automation is a key aspect of managing your S3 storage efficiently. AWS CLI provides powerful commands and options that allow you to automate tasks and workflows saving you time and effort. Let's dive into how to automate S3 tasks using AWS CLI. Syncing files between your local storage and S3 is a common task. AWS CLI provides the S3 sync command, which compares the source and destination directories and copies only the differences. Let's explore this command in more detail. To sync files between local and S3 storage using AWS CLI, we'll use the S3 sync command. It follows the following syntax, aws, space, s3, space, sync, space, source, space, destination, and space, additional options. Let's break down each element. The first one is source. This represents the source directory or S3 bucket from which you want to sync files. The second one is destination.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=94)** Here you specify the destination directory or S3 bucket to which you want to sync files. Additionally, we have options. Options can be specified to control the sync behavior, such as excluding certain files or enabling multi-part uploads. Now let's put it into practice and run the command to sync files between local and S3 storage. Head over to your terminal. I am currently in my aws-cli directory and I have another subdirectory called sync. In that sync directory, I have a sync.txt file.
>
> **[2:20](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=140)** That TXT file just has one sentence that says, "This is a sync file." Now I want to sync my sync directory to my S3 bucket. And if you forgot the name of your S3 bucket, you can list your S3 buckets by aws, space, s3, space, ls. The bucket that I want to sync my files to is called my-demo-bucket-743748. Now let me change my directory back to aws-cli,
>
> **[2:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=177)** and let's sync the sync directory to our S3 bucket. In order to do that, type in aws, space, s3, space, sync, space, the path to the directory that you want to sync. In my case, it's sync, so aws-cli/sync
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=201)** and then my S3 bucket.
>
> **[3:30](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-automate-s3-tasks-and-workflows?u=76281980&t=210)** Hit enter, and this should sync my sync directory, which is on my local machine, to my S3 bucket. While the S3 sync command is powerful on its own, you can enhance your automation by incorporating AWS CLI commands into scripts. By writing scripts. You can automate complex workflows, schedule tasks, and combine S3 operations with other AWS services or custom logic. To execute scripts containing AWS CLI commands you can run them directly from your command line interface or integrate them into your automation workflows. AWS CLI provides the flexibility to incorporate scripting into your S3 automation tasks seamlessly. Congratulations, you now have the skills to automate common S3 tasks and workflows using AWS CLI. By leveraging the power of automation, you can save time, ensure consistency, and enhance your overall productivity when working with S3 storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (12)
> **Env Vars:** aws (11), cli (9), txt (1)
> **CLI Commands:** aws (17), ls (1)
> **Definitions:** is a  (3), is called (1)
> **Tools:** command line (2), terminal (1)
> **File Paths:** sync.txt (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Permissions with IAM and AWS CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to IAM users, groups, and policies](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=0)** - [Instructor] Let's dive into managing permissions with AWS Identity and Access Management, also known as IAM and AWS command line interface. Specifically, we'll focus on understanding IAM users and groups and how they can help you control access to your AWS resources. By the end of this video, you'll have a solid understanding of IAM users and groups, policies, and permissions, Let's get started. IAM users represent individual or services that interact with your AWS account. They are associated with security credentials and permissions that determine what actions they can perform within your AWS resources. Each user has a unique username and can have a specific access key for programmatic access. IAM groups are a collection of IAM users. By organizing users into groups, you can manage permissions collectively and simplify Access Management. Instead of individually assigning permissions to each user, you can assign permissions to groups, making it easier to manage permissions as your team or organization grows. In the beginning of this course, we did work with IAM when we created a IAM user specifically for our [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) use. And we also generated an access key and secret access key for the CLI access. Now let's look at permissions and policies.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-cli-tips/introduction-to-iam-users-groups-and-policies?u=76281980&t=97)** Permissions in IAM are defined through policies. IAM policies are adjacent documents that specify the actions allowed or denied on a specific resource. Policies can be attached to IAM users or groups, granting or restricting access based on the defined permissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2)
> **Env Vars:** iam (11), aws (5), cli (2)
> **CLI Commands:** aws (5)
> **Tools:** command line (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Creating and managing IAM users and groups](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=0)** - [Instructor] IAM users and groups play a crucial role in managing access to your AWS resources. In this video, we'll explore how to create and manage IAM users and groups using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), providing you with the flexibility and automation you need. To create an IAM user using the AWS CLI, we'll use the create-user command. The command follows the following syntax, aws iam create-user --user-name.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=34)** Let's break down each element. The --user-name option specifies the username for the IAM user you want to create. Now, let's put it into practice and run the command to create an IAM user. Head over to your Terminal. I'm going to clear my screen here. Now, let's create an IAM user. aws iam create-user
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=63)** and then, the option --user-name. I'm going to name my user myawsdemouser. Hit Enter and there we go. We got the output of the new user that we just created using the AWS CLI. IAM groups allow you to manage permissions collectively. To create an IAM group using AWS CLI, we'll use the create-group command. The syntax is aws iam create-group --group-name.
>
> **[1:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=102)** The --group-name option specifies the name of the group you want to create. Now, let's create a new IAM group using AWS CLI. Head over to your Terminal. To create a group, type aws iam create-group with the option --group-name, and I'm going to name my group myawsdemogroup. Hit Enter and we got the output saying that the group myawsdemogroup was created using the AWS CLI. Now that we have created the user and the group, let's add our IAM user to our IAM group. To do this using the AWS CLI, we'll use the add-user-to-group command. The syntax is aws iam add-user-to-group with the --user-name option and the --group-name option. Let's break down each element. The --user-name option specifies the username of the IAM user you want to add to the group. In the --group-name option, you provide the name of the group to which you want to add the user. Let's put it into practice and run the command to add our user to the IAM group we just created. Head over to your Terminal and type aws iam add-user-to-group
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-cli-tips/creating-and-managing-iam-users-and-groups?u=76281980&t=201)** with the option --user-name. In my case, my username was myawsdemouser. And the second option is --group-name. The group name I created was myawsdemogroup. Hit Enter. Now, this command will add the user to the specified group and you can double check by visiting the AWS management console. Click on the IAM service. As you can see, we had zero user groups before. Click on the one user group and now, we can see that our group, myawsdemo group, was created and also, it has one user. If you hover over the one user, you'll see myawsdemouser was added to this group which means our command executed successfully. Great work. You now know how to create IAM user, create IAM groups, and add users to groups using AWS CLI. With these commands, you can efficiently manage access and permissions across your AWS environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (8)
> **Env Vars:** iam (16), aws (11), cli (8)
> **CLI Commands:** aws (17)
> **Tools:** terminal (3)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)

#### [Using AWS CLI to manage IAM roles and policies](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=0)** - [Instructor] IAM roles and policies provide a powerful mechanism for granting temporary access to AWS resources and defining permissions. Using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), we can create, manage and attach these roles and policies seamlessly. To create an IAM role using AWS CLI will use the create-role command. The command follows the following syntax: aws iam create-role with the option --role-name and the second option --assume-role-policy-document. Let's break down each element. The first one is --role-name. This option specifies the name you want to assign to the IAM role. The second option is --assume-role-policy-document. Here you provide the policy document that defines who can assume the role and what actions they can perform. Now let's put it into practice and run the command to create an IAM role. Head over to your terminal. So I have a policy document in my aws-cli directory called assume-role-policy.[JSON](../../Skills/Web%20Development/JSON.md). This trust policy allows users and roles of my account to assume this role if they allow the sts:AssumeRole action in their permission policy.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=94)** Remember to replace the principle of AWS account number with your own AWS account number. Now let's create a new role and attach this assume role policy. Type in aws iam create-role with the option --role-name. I'm going to name this my demo role. And the second option is --assume-role-policy-document
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=138)** and your policy document .json file.
>
> **[2:32](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=152)** Hit Enter. And now we just created my demo role with attaching the assume-role-policy.json document. I am policies define permissions and access control for IAM roles, users and groups. To create an IAM policy using AWS CLI we'll use the create-policy command. The syntax is AWS IAM create-policy. The first option is --policy-name and the second option is --policy-document. Let's break down each element. The --policy-name option specifies the name you want to assign to the IAM policy. And with the --policy-document option, you provide the policy document that defines the permission and actions allowed or denied. Now let's head over to our terminal and run the command to create an IAM policy in my aws-cli directory, I have another policy document. And it's the s3-access-policy.json. This policy document gives a user or a role access to the S3 bucket, and you can look at the actions that user or role can perform, but remember to change the bucket name
>
> **[4:07](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=247)** with the appropriate bucket name. So let's update those bucket names to our own buckets. If you don't remember your bucket name, you can do aws s3 ls. I'm going to use my demo bucket. And to edit the document, I'm going to use the nano editor. To save the file hit Control + X and hit Y for yes, and then hit Enter. Now let's create the policy. Type in aws iam create-policy. And then the first option which is the policy name. And let's name this policy as mys3accesspolicy.
>
> **[5:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=312)** And the second option is the policy document. And here you specify the S3 access policy document. Again, these resources will be available on the [GitHub](../../Skills/Software%20Development/GitHub.md) repo.
>
> **[5:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=335)** Hit Enter. And there we go. We just created a policy called mys3accesspolicy with the specified JSON document. To attach an IAM policy to an existing IAM role using AWS CLI will use the attach-role-policy command. The syntax is aws iam attach-role-policy with the first option --role-name, and the second option --policy-arn. Let's break down each element. The role name option specifies the name of the IAM role to which you want to attach the policy. And the second option --policy-arn. Here you provide the Amazon resource name also known as the ARN of the IAM policy. Let's put it into practice and run the command to attach an IAM policy to our IAM role. Head over to your terminal. Now I'll attach my S3 access policy to my demo role. In order to do that, type in aws iam attach-role-policy with the first option --role-name. In my case it's my demo role and the --policy-arn as second option. And you can find the --policy-arn
>
> **[7:12](https://www.linkedin.com/learning/aws-for-developers-cli-tips/using-aws-cli-to-manage-iam-roles-and-policies?u=76281980&t=432)** in the output of the last command, which we use to create the policy. Or you can head to your AWS management console to get this ARN. Hit Enter. There we go. We just attached the S3 access policy to my demo role. Fantastic. You now know how to use AWS CLI to manage I am roles and policies effectively. Creating roles, defining policies and attaching policies to roles provide a robust foundation for controlling access to your AWS resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** iam (15), aws (11), cli (5), arn (2), json (1)
> **CLI Commands:** aws (19), ls (1), find (1)
> **Tools:** terminal (3), github (1)
> **File Paths:** assume-role-policy.json (2), s3-access-policy.json (1)
> **Best Practices:** remember to (2)
> **Exercise Files:** github repo (1)
> **Definitions:** known as (1)


### 5. Managing Other AWS Services with AWS CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing RDS databases with AWS CLI](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=0)** - [Instructor] Now we'll explore managing other AWS services with the AWS Command Line Interface. Specifically, we'll focus on managing Amazon RDS [Databases](../../Skills/Software%20Development/Databases.md) using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). By the end of this video, you'll be equipped with the skills to manage your RDS databases efficiently using AWS CLI. Let's get started. Amazon RDS is a managed relational database service offered by AWS. With AWS CLI, you can interact with RDS databases and perform a variety of management tasks from creating and modifying databases to managing snapshots and monitoring. To get an overview of your RDS instances, you can use the describe-db-instances command. It allows you to retrieve information about your RDS instances such as their names, statuses, and configurations. Here's how the command looks like, aws rds and then you have your first option called region and describe-db-instances. Replace the region with the AWS region where your RDS instances are located. Let's give this a try. Head over to your terminal and type in aws rds --region. In my case, the region is us-west-1. Again, you can find your region in the AWS Management Console.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=93)** And the command is describe-db-instances. Hit Enter. In my case, I have one RDS database that's running. So I'm seeing the information about that DB instance. In your case, the output might be empty. Creating an RDS database using AWS CLI involves using the create-db-instance command. This commands allows you to specify various parameters such as the database engine instance type, storage and more. Here's how the command looks like. And as you can see, there are various parameters and options to define your DB instance. Let's go through the each element. The first option is --region. And again here you define the AWS region where you want to create the database. The second option is --db-instance-identifier which is a unique identifier for your RDS instance. The third option is the --engine. Here you select the desired database engine. Popular ones are [MySQL](../../Skills/Software%20Development/MySQL.md) and [Postgres](../../Skills/Software%20Development/PostgreSQL.md). The next one is the --db-instance-class. This is the instance type for your RDS database. The next one is --allocated-storage. Here you define the allocated storage size in gigabytes. Next we have the --master-username. This is whatever you want to name the master user for your database.
>
> **[3:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=186)** The last one is --master-password. Here you define the password for your master user. So now that we know the command structure, let's create our first RDS database. Head over to your terminal. I'm going to clear my screen here and start by typing in aws rds --region. Again, I'm going to use the us-west-1 region. You might use whatever is the nearest AWS region to you. And the command to create a DB instance is create-db-instance. And as we saw, there were many options for this command. So it's a little big. I'm going to copy and paste it into my terminal but you can find the exact command in the [GitHub](../../Skills/Software%20Development/GitHub.md) repo. So for the DB instance identifier I'm using mydemordsdatabase as the name. For the engine, I'm using Postgres. For the DB instance class, I'm using db.t4g.micro. And the allocated storage, I'm going with 20 gigabytes. I'm using main as the master username and I'm using a really strong password here for my master user password. Hit Enter. And now as you can see in the output our DB instance creation process has started. You can look at the status as creating in the output.
>
> **[4:44](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=284)** And this should take some time for your RDS database to be created. And one tip that I want to give to select your instance class, which you might be wondering how I got this, is a really good website that I recommend. So if you head over to your browser and type instances.vantage.sh, and you can filter the instance types by RDS which stands for relational database service, you'll find all the instance classes that you can deploy to your AWS account. I went with the t4g.micro but depending on the power that you need, you can pick a bigger instance class. So for me, it took about five minutes to launch my RDSS database and you can confirm that by going to your AWS Management Console. Click on the RDS service. If you don't have it in recently visited, you can also search RDS. And here you'll see DB Instances. You should see one or a higher number depending on how many database instances you have. Also, make sure you are in the right region. And you can choose the right region by going on the top right-hand corner and select the appropriate region. Click on DB instances. And as we can see, my demo RDS database is available.
>
> **[6:22](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=382)** Once you have an existing RDS database, you may need to modify its configuration. AWS CLI provides the modified DB instance command, which allows you to modify parameters such as allocated storage, instance class and other database settings. Here's an example of the command: aws rds --region and then modify-db-instance. And then you provide it with the DB instance identifier, the new allocated storage and the new database instance class. So let's try to modify our newly created RDS database. Head over to your terminal. I'm quickly going to clear my screen. And in order to modify our database, type in aws rds --region. Enter your appropriate region, for me, it's us-west-1. And the command modify-db-instance. Again, it's a bit long command so I'm just going to copy and paste it in my terminal. This will be available in the GitHub repo as well. So for the DB instance identifier, I chose the name of my demo RDS database. The allocated storage, I want to change it to 30 gigabytes from 20, which was originally allocated. And I've also changed the DB instance class to t4g.medium.
>
> **[7:59](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-databases-with-aws-cli?u=76281980&t=479)** And you're also seeing another flag at the end which is --apply-immediately. The --apply-immediately flag is to instantly modify our DB instance, otherwise the modification happens during the set maintenance window. And to see what your set maintenance window is you can navigate to AWS Management Console. So let's go ahead and apply these changes to our RDS instance. Hit Enter. And you can see that it'll start applying the new allocated storage and the DB instance class change to our RDS database. Here's the pending modified values. The new DB instance class, and the new allocated storage. This should take few minutes to apply. If we head over to our AWS Management Console, so as we can see, my demo RDS database is under the status available again. It might take 15 to 20 minutes for the modifications that we just did to apply. So we just created our first RDS database instance using the AWS CLI and also modify the configuration using the CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (7), [Databases](../../Skills/Software%20Development/Databases.md) (4), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** rds (24), aws (17), cli (7), rdss (1)
> **CLI Commands:** aws (22), find (3), mysql (1), make (1)
> **Tools:** terminal (5), github (2), command line (1)
> **UI Navigation:** select the (2), click on (2), navigate to (1)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** such as (3)
> **Exercise Files:** github repo (2)

#### [Managing RDS Snapshots and monitoring with CloudWatch](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=0)** - [Instructor] Now let's explore managing RDS snapshots With the AWS Command line interface. We'll also focus on monitoring RDS [Databases](../../Skills/Software%20Development/Databases.md) using CloudWatch with AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). By the end of this video, you'll be equipped with scales to manage your RDS databases efficiently using AWS CLI. Let's get started. RDS snapshots are point in time backups of your databases. Amazon RDS creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just the individual databases. AWS CLI enables you to manage snapshots effectively. You can create snapshots, copy them across regions and restore databases from snapshots using the following commands. To create a snapshot, the syntaxes AWS space RDS with the option of region and the command create-db-snapshot along with the options of db-snapshot-identifier and db-instance-identifier. The option db-snapshot-identifier is a unique identifier for your snapshot and the option db-instance-identifier is the identifier of the target RDS instance you want snapshot of. To copy a snapshot across regions, the command is AWS space RDS with the option of region and copy-db-snapshot with the option of source-db-snapshot-identifier and target-db-snapshot-identifier.
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=95)** Let's break down each element. The first option region here is the target AWS region where you want the snapshot. The second option, source-db-snapshot-identifier is the ARN identifier of the source snapshot you want to copy. The last option, target-db-snapshot-identifier is the unique identifier for the target snapshot. And now to restore a snapshot, the command is AWS space RDS with the region option and restore-db-instance-from-db-snapshot with the option db-instance-identifier and db-snapshot-identifier. Now let's put this into action and create a snapshot for the RDS database that we created. Head over to your terminal. I'm going to clear my screen here. Start by typing the command AWS space RDS dash dash region. My case is us-west-1 and the command create-db-snapshot followed with the option db-snapshot-identifier.
>
> **[2:55](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=175)** I'm going to name my snapshot mydemoinstance-snapshot
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=185)** followed with the db-instance-identifier option
>
> **[3:15](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=195)** and the name of our RDS database. In my case, it's mydemordsdatabase.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=206)** Hit enter and there we go. We got the output of the DB snapshot that is being created for us. You can double check by going to AWS Management Console. Click on your database. Click on Maintenance and backups tab. Scroll down to snapshots and you'll see the mydemoinstance-snapshot being created. Okay. As you can see, the snapshot is available. Now let's copy this snapshot to another region. Head over to your terminal and start by typing in the command AWS space RDS space copy-db-snapshot.
>
> **[4:25](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=265)** The first option is source-db-snapshot-identifier.
>
> **[4:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=278)** And here we'll need the ARN of our snapshot that we just created. Head over to your management console. Under the snapshots, click on the mydemoinstance-snapshot. Under details you'll find the ARN, copy that, head back to your terminal. Paste the ARN. The next option is the target-db-snapshot-identifier.
>
> **[5:16](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=316)** Here you'll add the name that your target DB snapshot should be.
>
> **[5:26](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=326)** In my case, I just added useast at the end since the source snapshot is in US West. And the last option is to add the region. And I want to copy this snapshot over to us-east-1, hit enter. So the command we just executed is copying over our mydemoinstance-snapshot to us-east-1 region. In order to confirm, head over to your AWS Management console and now change the region to whatever you selected as the target region. In my case, it was us-east-1 and make sure you're under Amazon RDS and under snapshots. And as you can see, mydemoinstance-snapshot-useast was just copied which means our command executed successfully. Monitoring the performance of your RDS databases is essential for optimal operation. AWS CLI offers the monitoring command which allows you to retrieve metrics and insights about your RDS instances such as CPU utilization, storage usage and database connections. Here's an example command, aws space cloudwatch. The first option is region and the command is get-metric-[Statistics](../../Skills/Data%20Science/Statistics.md). And then we have the namespace option
>
> **[7:03](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=423)** followed by metric name, start time, end time, period, statistics and dimensions. Replace the region with the appropriate AWS region, metric name with the specific metric you want to monitor. Instance identifier with the identifier of your RDS instance, statistics with the desired statistical values, start time and end time with the time range for the monitoring data and period with the interval for these statistics. Now let's figure out how to get the CPU utilization for our RDS database instance. Head over to your terminal. I'm going to clear my screen here. To obtain the metric information by using AWS CLI, use the CloudWatch command list-metrics. Type in aws space cloudwatch space list-metrics and the namespace AWS/RDS. Hit enter and here you'll get the list of metrics that are available for your RDS instance. I'm going to clear my screen again. Now I'm going to use the command get-metric-statistics. The following command will get us the CPU utilization statistics for the instance that I just created over the specific 24 hour period. Type in the command AWS CloudWatch
>
> **[8:41](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=521)** and we'll use the get metric statistics. We'll be using the AWS/RDS namespace.
>
> **[8:57](https://www.linkedin.com/learning/aws-for-developers-cli-tips/managing-rds-snapshots-and-monitoring-with-cloudwatch?u=76281980&t=537)** And since this command is bit lengthy, I'm going to copy and paste it in my terminal. So for the metric name we have CPU utilization. I've given it a start and end time. The period is 360 seconds, which translates to five minutes. And the statistics that I'm looking for is the minimum CPU utilization. For the dimensions, I have set the value to mydemordsdatabase, let's hit enter, there we go. We have the output of CPU utilization with minimum as the statistics over the course of 360 seconds as interval. Fantastic, you now have the skills to manage your RDS database efficiently using AWS CLI, from creating databases and listing instances to modifying configurations, managing snapshots, and monitoring performance, AWS CLI empowers you to take control of your RDS environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (9), [Databases](../../Skills/Software%20Development/Databases.md) (7), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (7)
> **Env Vars:** rds (23), aws (20), cli (7), cpu (6), arn (4)
> **CLI Commands:** aws (22), find (1), make (1)
> **Tools:** terminal (5), command line (1)
> **UI Navigation:** click on (3), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with CloudWatch using AWS CLI](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=0)** - [Instructor] We saw how we can monitor our AWS RDS instance using AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). In this video, let's learn more on how to effectively use and manage AWS CloudWatch using AWS command line interface. CloudWatch is a powerful monitoring and observability service provided by AWS and with AWS CLI, we can easily access and analyze important metrics and logs. By the end of this video, you'll have the knowledge to leverage AWS CLI to interact with CloudWatch and gain valuable insights into your AWS resources. AWS CloudWatch offers a comprehensive set of monitoring tools that allow you to collect and track metrics, collect and monitor log files, set alarms, and [react](../../Skills/Web%20Development/React.js.md) to changes in your AWS resources and applications. To get started, let's take a look at how to list CloudWatch metrics using AWS CLI. By using the list-metrics command, you can view a list of available metrics, such as CPU utilization, network traffic, and more. Here's the command. Aws cloudwatch list-metrics. This will return a list of metrics across all AWS services. Once you have identified the metrics of interest, you can retrieve their data using get-metric-[Statistics](../../Skills/Data%20Science/Statistics.md) command. This command enables you to curate and analyze metric data over a specified time period, just like we did with RDS metrics in last video.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=94)** Here's an example command. This command fetches the average CPU utilization for an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance with the ID i-12345678 over the specified time range. Now let's try this on one of our instances. For this command, we'll need the instance ID of our EC2 instance. Head over to your AWS management console. If you don't have EC2 under recently visited, you can type it in the search bar. Make sure you're under the right region, click on instances
>
> **[2:19](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=139)** and then copy the instance ID, head back to your terminal. The command for get-metric-statistics is a bit lengthy, so I'm going to copy and paste it into my terminal, but again, this will be available in the [GitHub](../../Skills/Software%20Development/GitHub.md) repo. So we'll be using the CloudWatch service. So the command is aws cloudwatch and then the get-metric-statistics. And then I'm using the AWS/EC2 namespace with the metric name CPUUtilization. The dimensions I'm using is InstanceId and the value that we retrieved from the AWS management console. For the statistics, I'm going with average and then start-time and end-time with a period of 300 seconds, hit enter. And as you can see, it gave us an output of average CPU utilization over the period of 300 seconds, which translates to five minutes. CloudWatch alarms enable you to monitor metrics and take automated actions based on predefined thresholds. Using AWS CLI, you can create alarms using the put-metric-alarm command. Here's an example command. This command sets up an alarm named HighCPUAlarm that triggers if the CPU utilization of the EC2 instance with ID i-12345678 exceeds 80% of three consecutive evaluation periods. The alarm action is configured to notify an SNS topic
>
> **[3:56](https://www.linkedin.com/learning/aws-for-developers-cli-tips/working-with-cloudwatch-using-aws-cli?u=76281980&t=236)** with the ARN. Great, you have now learned the basics of using AWS CLI to interact with Amazon CloudWatch. From listing metrics and retrieving data to creating alarms, AWS CLI empowers you to efficiently monitor your AWS resources and applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (7), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (5), [Statistics](../../Skills/Data%20Science/Statistics.md) (4), [React](../../Skills/Web%20Development/React.js.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** aws (19), cli (7), ec2 (5), cpu (4), rds (2)
> **CLI Commands:** aws (21), make (1)
> **Tools:** terminal (2), command line (1), github (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), just like (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** github repo (1)


### 6. Advanced AWS CLI Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Integrating AWS CLI with AWS CloudTrail](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=0)** - [Instructor] Let's dive into the powerful world of AWS CloudTrail and learn how to integrate it with AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). AWS CloudTrail is a service that enables you to monitor AWS API calls and track changes to your AWS resources in real time. By integrating AWS CLI with CloudTrail, you gain valuable insights into the activities occurring within your AWS environment. By the end of this video you'll have the knowledge to set up CloudTrail with CLI and enhance your [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md) and governance. Let's get started. AWS CloudTrail provides detailed event logs that capture API activities and resource changes made within your AWS account. With AWS CLI, you can access these logs and take advantage of the comprehensive information they offer. To get started, we need to create a CloudTrail trail using AWS CLI. The trail defines where the logs will be stored, and which AWS resources are monitored. Here's an example command. In this command, we create a trail named MyCloudTrail and specify the S3 three bucket, my-cloudtrail-bucket to store the logs. The is-multi-region flag enables the trail to receive logs from all regions and the is-organization-trail allows the trail to capture events from all accounts in the organization if applicable. In my case I don't have multiple accounts within the organization. Also, remember how we set up an S3 bucket using the CLI,
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=95)** and applied a specific policy to it, same is needed here. I have set up a S3 bucket with a policy for CloudTrail, and this link is also available in the [GitHub](../../Skills/Software%20Development/GitHub.md) repo. And now let me show the S3 bucket that I have configured. I'm in my AWS management console, and heading over to S3. Under buckets you can see I have my CloudTrail bucket with a random number at the end. And if I go into the permissions tab, scroll down to the policy, you can see that I have applied the bucket policy that we just saw on the AWS documentation. Now let's create a trail. Head over to your terminal. I'm going to quickly clear my screen here. Type in the command aws space cloudtrail since we'll be working with the CloudTrail service. And in order to create a trail, you type in create-trail. I'm going to name my trail as MyDemoCloudTrail and then the s3-bucket-name.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=180)** Hit enter, and we just created MyDemoCloudTrail. Once the trail is created, we need to start it to begin capturing AWS API calls and resource changes. The command to start the trail is simple. AWS space cloudtrail space start-logging and then the name of our CloudTrail. Head over to your terminal and type in AWS space cloudtrail space start-logging
>
> **[3:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=213)** and then the name of our CloudTrail which is MyDemoCloudTrail. Hit enter. This command starts logging events for the trail, MyDemoCloudTrail. And from this point forward CloudTrail will record all relevant activities within your AWS account. AWS CloudTrail generates vast amounts of log data, but with AWS CLI, you can efficiently filter and query the logs to find specific information. The lookup-events command allow you to search for events that match certain criteria. This is how the command looks like, AWS space cloudtrail space lookup-events. The first option lookup attributes, and then you define the event name and the attribute value which in this example is creating bucket. This command retrieves CloudTrail events related to the create bucket API Action. Let's try it out. Head over to your terminal and I'm going to paste the exact command. Again, it will be available in the GitHub repo. Hit enter. And as you can see, we are getting the logs for every time there was a create bucket event. CloudTrail Insights is a feature that helps you detect unusual activity in your AWS account. With AWS CLI, you can enable or disable CloudTrail Insights for your trail using the put insight selectors command. And here's how you can do it.
>
> **[5:06](https://www.linkedin.com/learning/aws-for-developers-cli-tips/integrating-aws-cli-with-aws-cloudtrail?u=76281980&t=306)** AWS space cloudtrail space put-insight-selectors with the first option of trail name and second option of insight selectors. This command enables CloudTrail insights for the trail, my CloudTrail, and configures it to detect read-only and management events activities. Fantastic, you have learned how to integrate AWS CLI with AWS CloudTrail, enabling you to monitor AWS API calls and track changes to your AWS resources. The combination of AWS CLI and CloudTrail empowers you with an additional layer of security and visibility into your AWS environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md) (1)
> **Env Vars:** aws (31), cli (10), api (5)
> **CLI Commands:** aws (32), find (1)
> **Tools:** terminal (3), github (2)
> **Prerequisites:** set up (3)
> **Exercise Files:** github repo (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)

#### [Troubleshooting AWS CLI issues](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=0)** - [Presenter] So now that we understand how AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) works let's talk about some of the common issues and how you can troubleshoot them. The first one is config and credentials. So remember when we first started with AWS CLI, the first command that we ran was AWS configure and we set some default properties. And you might be asking, how do I change that? Because we had a default value for region and in my case it was US West one. So let's go over the files where these configurations and credentials are stored. Head over to your terminal. So in order to list the configurations you can use the command AWS space, configure space list and this will give you your profile access key, secret key and the region that you have set. But you can also see it tells you where the config file is stored. Let's see what is in that config file. So do cat dot aws slash config. And you can see the default value for region is set to US West one. So you can edit this file to reflect the changes you need. So let's say I want the default region to change to US East one. In order to do that, I'll open this file in any text editor and change the region value to us dash E dash one. And the second file that I want to talk about is the credentials. As we can see, we have access key
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=95)** and secret key but there is a file where this information is stored and that is the credentials file. It is located in the same directory which is period AWS or dot AWS. And the file is called credentials. And you can see that these access key and secret key are my default credentials. You might be wondering how I can work with different profiles. I want to have one profile for my dev account and one for my prod account which might be the case in many of your situations. You can do that by creating different profiles in the credentials file and the structure of the file is same. So you'll create a new profile called dev in square brackets and have your access key ID and secret key ID. And similarly, you can have multiple profiles. Once you have created multiple profiles, maybe you want to get a list of those profiles. There's a command for that too. You can do AWS space configure space list dash profiles. In my case I only have my default profile, but in your case if you have set up multiple AWS CLI profiles, you'll see an output off the list here. After you have set those profiles, you have the ability to use these profiles with individual commands. So let's say I want to list iam groups. The command for that is AWS space, iam space list groups
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=189)** but I want to do it for my dev profile. I can add the flag dash dash profile space whatever the profile name is and you can add the dash dash profile flag to any of the commands we have gone through. One of the other common issues you might face is AWS CLI not having the run permission. On [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or Mac OS, make sure that the AWS program has run permissions for the calling user. Typically the permissions are set to 755 to add run permissions for your user, run the following command, chmod space plus X space dot local slash bin slash AWS but you might have to substitute this with a pad to program on your computer based on the installation process you followed. Also, one of the other access denied errors is the I am identity not having the right permissions. Let's say you run the AWS3 space LS command and you get an error saying access denied when calling the list buckets operation. This means the iam account that you created, for the CLI use doesn't have permissions. In my case, remember I added the administrator access in the beginning of the course when I created my im user. But again, the best practice is to have granular access. So only add permissions to im users that are needed. In our case here we only need the s three list bucket permission so I'll be adding that specific permission
>
> **[4:43](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=283)** to my im identity. So these are all the common errors that you might get or might run into as issues but AWS has a dedicated document for any of the common errors or issues that you might run into with AWS CLI. The link to that documentation page will be shared in the [GitHub](../../Skills/Software%20Development/GitHub.md) repo. So this is the page provided by AWS dedicated to AWS CLI errors. And as you can see, there is list of commonly caused issues or errors that users see. So if you're having any problems with your AWS CLI make sure to use this page as reference if needed. Now you know how to work with AWS CLI but there is this one last step and that is cleaning up our environment. So let's go through all the resources that were deployed especially the expensive ones like RDS and [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances and let's delete them. Also, you can find a cool dashboard on your console home in AWS management console for any cost that you might have had. If you scroll down, you'll see cost and usage. And as you can see for the resources that I have deployed the current month costs are already at $8 and 45 cents. And you can also see the forecasted month-end cost. I want to make sure that I don't receive a huge bill from AWS. So I'm going to go ahead and delete my RDS instance for first go into your DB instances and make sure you're under the right region on the top right-hand corner.
>
> **[6:17](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=377)** And I'm going to delete my demo RDS database. Since this was a test database in my case I don't need to take a final snapshot. And also I don't want to restore any automated backups.
>
> **[6:38](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=398)** And while that's happening, let's go and delete our EC2 instance. If there were any running. In my case I had one and we'll do the same thing. Go into the instant state dropdown and click terminate instance.
>
> **[7:05](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=425)** And as you can see, it'll take a few minutes to shut down the instance and then terminate it. While this is happening let's go check back on our RDS instance. As we can see, my demo RDS database has been deleted. And now let's go ahead and delete the S3 buckets since I don't need them anymore. In my case, I don't need my cloud trail bucket and also the my demo bucket, so I'll be deleting those. So let's go ahead with the CloudTrail bucket first. And as you can see these buckets need to be empty before they can be deleted. So if you have CloudTrail logs in your bucket or any of the sample files that we uploaded make sure you clear them up. Let's go back to my CloudTrail bucket here. I have a directory called AWS Logs. Let's click on delete. Type in permanently delete. Click delete objects, and now our bucket should be empty. So click on the source, my CloudTrail bucket 0798. You'll see that it has no objects. Now if we go to the S3 dashboard again, click on buckets,
>
> **[8:42](https://www.linkedin.com/learning/aws-for-developers-cli-tips/troubleshooting-aws-cli-issues?u=76281980&t=522)** we should be able to delete the CloudTrail bucket since it's empty. Click on delete, type in the bucket name. I'm just going to copy this. Hit delete bucket and make sure you delete all of the other S3 buckets that you created during this course. Let's head back to the EC2 instance dashboard and see if our instance has been terminated. As you can see, we had zero running instances but if I click on the little X bar, we can see that we have one instance but it's in terminated state, which is what we wanted. After a few minutes you'll not see this instance in terminated state. It'll be deleted from the dashboard. So that should clean up all the resources that we spun up during this course. Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (9), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** aws (21), cli (9), rds (5), ec2 (3), aws3 (1)
> **CLI Commands:** aws (22), make (6), cat (1), chmod (1), ls (1)
> **UI Navigation:** click on (5), scroll down (1), dropdown (1), go to (1)
> **Prerequisites:** configure (3)
> **Tools:** terminal (1), github (1)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** best practice (1), make sure to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=0)** - Congratulations on completing the AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) course. You have taken an incredible journey through the world of AWS command line interface, exploring how to manage various AWS services efficiently and effectively. As you venture further into AWS there are several exciting avenues you can explore to deepen your expertise and stay ahead in the fast paced [Cloud Computing](../../Topics/Cloud%20Computing.md) world. Here are some recommended next steps for you to consider. First, explore advanced AWS CLI features. AWS CLI is a powerful tool with many advanced features. Consider diving deeper into the AWS CLI documentation and explore less commonly used commands and options. You can practice managing more complex AWS resources and leveraging AWS CLI to automate advanced workflows. Next, check out the AWS Cloud Formation and [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). Exploring infrastructure as code or IaC with AWS cloud formation is highly valuable. Cloud formation allows you to define and provision AWS infrastructure in a declarative way, making it easier to manage complex infrastructures and ensure consistency. Also, consider AWS certifications. Earning AWS certifications is an excellent way to validate your expertise and stand out in the job market. Consider pursuing certifications like AWS Certified Solutions Architect, AWS Certified Developer,
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-cli-tips/next-steps?u=76281980&t=93)** or AWS Certified SysOps Administrator. These certifications are well respected in the industry and can boost your career opportunities. Finally, stay up to date with latest AWS announcements, trends and practices by regularly reading AWS blogs, attending webinars and participating in AWS community events. Networking with other professionals and sharing knowledge is an enriching experience. Remember, learning is a continuous journey. Embrace curiosity and practice hands-on with AWS CLI. Seek opportunities to apply your skills in real world projects. AWS is constantly evolving and staying curious and engaged will keep you at the forefront of cloud technology. Keep exploring, keep growing, and enjoy your journey in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (6), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Env Vars:** aws (22), cli (6)
> **CLI Commands:** aws (22)
> **Definitions:** is a  (2), is an  (2)
> **Tools:** command line (1)
> **Best Practices:** recommended (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Rishab Kumar](../../Instructors/Artificial%20Intelligence%20(AI)/Rishab%20Kumar.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/aws-for-developers-cli-tips-4469953)

## Skills Covered

- AWS Command Line Interface (CLI)

## Path Context

### In [Advance Your AWS Development Skills- Exploring Complex Application Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20AWS%20Development%20Skills-%20Exploring%20Complex%20Application%20Development.md)
← [Introduction to AWS AI Services for Developers](Introduction%20to%20AWS%20AI%20Services%20for%20Developers.md) | **3 of 6** | [AWS Security Best Practices for Developers](AWS%20Security%20Best%20Practices%20for%20Developers.md) →

## Appears In

- [Advance Your AWS Development Skills- Exploring Complex Application Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20AWS%20Development%20Skills-%20Exploring%20Complex%20Application%20Development.md)

---

[↑ Back to top](#)