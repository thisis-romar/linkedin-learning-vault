---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-terraform-15575129
url: "https://www.linkedin.com/learning/learning-terraform-15575129"
duration_minutes: 148
duration: 2h 28m
level: Beginner
updated: 1/16/2026
learners: 29136
skills:
  - Terraform
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-terraform-3087701"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHxgeea4RepGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666200700025?e=2147483647&amp;v=beta&amp;t=OrjMwXJjQOkfLe2WqCtJ1qfKPLib5_U1ws5FPeCgpYg"
linkedin_topic: Database Management
learning_paths:
  - '[[Infrastructure as Code with Terraform]]'
prev_courses:
  - '[[DevOps Foundations- Infrastructure as Code]]'
next_courses:
  - '[[Advanced Terraform]]'
path_nav: '[{"path":"Infrastructure as Code with Terraform","position":2,"total":3,"prev":"DevOps Foundations- Infrastructure as Code","next":"Advanced Terraform"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - skill/terraform
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Learning%20Terraform.md)

![Learning Terraform](https://media.licdn.com/dms/image/v2/C560DAQHxgeea4RepGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666200700025?e=2147483647&amp;v=beta&amp;t=OrjMwXJjQOkfLe2WqCtJ1qfKPLib5_U1ws5FPeCgpYg)

# Learning Terraform

> Terraform is a DevOps tool for declarative infrastructure—infrastructure as code. It simplifies and accelerates the configuration of cloud-based environments. In this course, instructor Josh Samuelson shows how to use Terraform to configure infrastructure and manage resources with Amazon Web Services (AWS). After demonstrating how to set up AWS for Terraform, Josh covers how Terraform manages your

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129) | 2h 28m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn Terraform for your cloud infrastructure](#learn-terraform-for-your-cloud-infrastructure)
  - [What you need](#what-you-need)
- [**1. First Steps with Terraform**](#1-first-steps-with-terraform) (4 videos)
  - [What is Terraform?](#what-is-terraform)
  - [Your Terraform code repo](#your-terraform-code-repo)
  - [Setting up AWS for Terraform](#setting-up-aws-for-terraform)
  - [Terraform Cloud](#terraform-cloud)
- [**2. Terraform in Action**](#2-terraform-in-action) (6 videos)
  - [Terraform plan](#terraform-plan)
  - [First Terraform run](#first-terraform-run)
  - [How Terraform works](#how-terraform-works)
  - [Terraform states](#terraform-states)
  - [Editing your code](#editing-your-code)
  - [Understanding Terraform errors](#understanding-terraform-errors)
- [**3. Infrastructure as Code**](#3-infrastructure-as-code) (7 videos)
  - [Resources](#resources)
  - [Basic resource types](#basic-resource-types)
  - [Terraform style](#terraform-style)
  - [Security group](#security-group)
  - [Using modules](#using-modules)
  - [Terraform registry: Providers](#terraform-registry-providers)
  - [Terraform registry: Modules](#terraform-registry-modules)
- [**4. Advanced Topics**](#4-advanced-topics) (8 videos)
  - [Get ready to scale](#get-ready-to-scale)
  - [Expanding your installation](#expanding-your-installation)
  - [Variables](#variables)
  - [Split out your data](#split-out-your-data)
  - [Modularize](#modularize)
  - [Deploying environments](#deploying-environments)
  - [Cleaning up: Terraform destroy](#cleaning-up-terraform-destroy)
  - [Terraform CLI](#terraform-cli)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn Terraform for your cloud infrastructure](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=0)** - [Josh] [[Terraform]] is a powerful tool for defining, deploying, and managing [[Cloud Infrastructure]]. In this course, we'll focus on hands-on work, spinning up resources in Amazon AWS, and iterating on our code as we go. By the end, we'll have built a fully-functional Terraform module without glossing over any steps in the process, and we'll use it to deploy multiple infrastructure environments. My name is Josh Samuelson. I'm a lead software engineer at Dropbox. Terraform is a big part of my work, and it has transformed my approach to working with the cloud. I'm excited for you to experience that same transformation, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (3), [[Cloud Infrastructure]] (1)
> **CLI Commands:** terraform (3), aws (1)
> **Definitions:** is a  (2)
> **Env Vars:** aws (1)
> **Speakers:** - [josh] (1)

#### [What you need](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=0)** - [Instructor] Before we get started, let's cover what you'll need and what you'll need to know before starting this course. To keep things focused on [[Terraform]] itself, all of the exercises for this course will take place in a web browser using cloud-based services, so there's no need for a powerful workstation. Although we'll be using [[GitHub]] in this course for editing and managing Terraform code, we'll be sticking to the most basic features, so you don't really need to know [[Git]] to follow along. Terraform works on many different cloud platforms. For the exercises in this course, we'll just use Amazon AWS, so you'll need an AWS account. And we may incur some charges beyond the free tier. It's unlikely that it will be more than a few dollars worth, and that's only if you let things run for a long time. You certainly don't need to be an AWS expert to be successful in this course, but ideally, you'll have some familiarity with different types of AWS resources and how to work with it. If you're very experienced with another platform, like [[Google Cloud Platform (GCP)|Google Cloud]] or [[Microsoft Azure|Azure]], you'll probably be fine, as well, if you're willing to do a little mental translation between different resources. Since this course is about Terraform itself, we're not actually going to be doing much with the systems and infrastructure that we set up. That means you don't really need to be an expert in managing servers for this course. You should know the basics of how to work in [[Windows]] or [[Linux]]. And we'll get into some basic networking concepts,
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=94)** so you'll need familiarity there as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (4), [[GitHub]] (1), [[Git]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** terraform (4), aws (4), git (1)
> **Prerequisites:** you'll need (4), set up (1)
> **Env Vars:** aws (4)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 1. First Steps with Terraform

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Terraform?](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=0)** - [Instructor] I'm guessing you already have some idea what [[Terraform]] is, but let's review. Terraform is an infrastructure management tool made by HashiCorp, that lets you provision, manage, and maintain cloud resources, servers, networking, storage, etcetera, all in one centralized set of code. So Terraform is a tool, a command line program, and a cloud-based application you run to define and make changes to your infrastructure, but Terraform is also a language that defines those changes. Terraform is for managing the base infrastructure itself. For example, creating a server instance, and placing it behind a load balancer. Terraform can't really change what's running on that server once it's deployed, for that, you'll need a config management tool. So Terraform will create the server, and then you might use something like Puppet to turn that server into a web server with your specific application code running on it. You might think of Terraform as setting up a blank canvas, but you still need other tools to paint the picture. It's possible to run a tool like Puppet on a system using a Terraform feature called provisioners, but we are intentionally not covering them in this course. The official Terraform docs describe provisioners as a last resort, and I agree, although I can see how they could be amazingly powerful if you're already using config management.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=95)** So if we won't use config management, what's our other option? Terraform is really well suited to deploy pre-made server images, where all the configuration is already set. You'll still need to create your base image, and there's another great HashiCorp tool for that called Packer. If you've set things up correctly with a load balancer, and an application that can tolerate cycling server instances, you can use Terraform to maintain and update systems by destroying and replacing them with new instances. The purest form of this is called immutable infrastructure, where system discs are actually read only, config and software can only be updated by replacing the instance. Even if you don't go to that extreme, being able to freely throw away and replace any instance is a total game changer. For me, that leap has drastically reduced my background anxiety around site stability and on call shifts. Finally, we get to containers. Terraform is able to manage these, but it's beyond the scope of what we'll cover in this course. Terraform is able to work directly with Docker and [[Kubernetes]] offering a couple of approaches for container based workloads. That support for Kubernetes could even be paired with Amazon's Kubernetes Service, or another cloud provider. You could even use Terraform to provision a Kubernetes cluster on a cloud provider, and then use the Terraform Kubernetes provider
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=189)** to provision resources in that cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (16), [[Kubernetes]] (5)
> **CLI Commands:** terraform (16), make (1), docker (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** for example (1), picture (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Your Terraform code repo](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=0)** - [Instructor] In this lesson, we'll be setting up a [[GitHub]] Repo that will hold our [[Terraform]] code. There's a great introductory course on [[LinkedIn]] Learning for how to use GitHub for exercise files. We won't be using advanced GitHub features, so even if you've never used it, you should still be able to follow along. To get started, there should be a link under the video you're watching now that says Get Files. It'll look like this. And I'll illustrate using this exercise files course. So you click on the link, then you go up here to Fork, and you set yourself as the owner, set the repository name. And for this course, you actually want to uncheck that box, 'cause we want to copy all the branches for our course. I'm not going to create this fork 'cause I've already created one. This is about what our repository will look like for this course. There's a main branch here, and there's a branch for each of the different lessons, and each of these will contain the solutions for that particular lesson. If you find yourself stuck at any point or running into a bug, you can take a look at the branch for that particular lesson. So let's take a look a little later in the course. You can see, there's a lot in this file. If we switch back to Main, which is where we're going to start, there's not much in here. There's also a branch for the start and end of the course.
>
> **[1:39](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=99)** And as we go through the lessons, we'll be updating the Main branch, because that's what Terraform is going to look at. If there are any discrepancies between what I show on screen and what's in the repository, you should trust the repository, because there may have been some fixes or changes that haven't yet made it into the videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Terraform]] (2), [[LinkedIn]] (1)
> **CLI Commands:** terraform (2), find (1)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), github repo (1)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Setting up AWS for Terraform](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=0)** - [Instructor] We'll need to set up an AWS account for use with [[Terraform]]. I'm going to move quickly through this since this course is primarily focused on Terraform and not on AWS. If you'd like more depth on AWS itself, there is a lot of good content in the [[LinkedIn]] Learning Library. I'm going to assume you've already got an AWS account. If you don't, just pause the video and go to aws.[amazon.com](https://amazon.com) and go through the sign-up steps. It's fairly straightforward. Then log into your AWS account and go to the search bar at the top and type IAM.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=40)** And then click on IAM that comes up here under Services. We're going to be creating a user with credentials that Terraform can use. So click on Users and then Add users. So we can name our user terraform, and make sure you leave this box unchecked. We won't need access to the AWS Console. This will just be a programmatic user. So we'll click Next. Now, we'll need to grant permissions to our users so that they're able to do things. To keep us from getting too bogged down in AWS, we're going to just give this user full administrator access. Obviously, this isn't a great security practice, so make sure to delete this user when you're done with this course. If you're very familiar with AWS, you can look into the proper permissions to set up for this user, but Terraform really needs pretty close to full admin access. We'll click on Attach policies directly and scroll down and say AdministratorAccess. Right now, it's the second choice here. And scroll to the bottom and click Next. And on this page for Review and create, just double check everything you've set. Go down to the bottom and click Create user. So at the top, you should see this banner that says, "User created successfully." And you can go to View user here, this button on the right, or you can open your user just by selecting them
>
> **[2:13](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=133)** from the list. The last thing we'll need to do is generate credentials for Terraform to use. So we'll scroll down to Security credentials. It's this tab here. And we want to add access keys. So you'll need to scroll down a little bit for that. Click Create access key, and this page is just Amazon's way of suggesting some alternatives based on your use case. So we can take a look at this. If we click Third-party service, which is the closest choice that matches what we're doing, and then scroll down to the bottom, they have a link and a recommendation for an alternative method. We're not going to do this in this course, but if you're going to use Terraform in production, I would recommend exploring this. There are ways you can use some temporary credentials and generate them dynamically. That's much more secure than what we're going to do for learning purposes. So if you're interested in that, follow this link. There are also some tutorials and documentation on the Terraform side about how to set that up. But for us, we're just going to click this confirmation that say we understand the risk and click Next. We don't need a tag, so we can Click create access key. As you see, there is a banner at the top of the screen here, and one thing that it says is that this is the only time that this secret access key can be viewed or downloaded. You can't recover it. So if you don't save it from this page, you'll have to delete it and regenerate it. What I like to do instead of trying to copy and paste this
>
> **[3:47](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=227)** is to just say, "Download .csv file," and then I'll save that CSV file to my hard drive. And then once I have it in the place I need I'll delete the original CSV. It's important to realize that these are full administrator credentials to your AWS account, so you should treat them like you would the username and password to your bank. Even if you don't have sensitive data in this account, a malicious person could rack up a huge bill mining [[Cryptocurrency]] or do other malicious things with your account that you might be held responsible for. So just be very careful with these credentials. And that's about it for now. When we get into our initial Terraform Code setup, we'll get a chance to test out these credentials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9), [[LinkedIn]] (1), [[Cryptocurrency]] (1)
> **CLI Commands:** aws (10), terraform (9), make (2)
> **Env Vars:** aws (9), iam (2), csv (2)
> **UI Navigation:** scroll down (4), go to (3), click on (3)
> **Prerequisites:** set up (2), you'll need (1), setup (1)
> **Definitions:** is a  (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Tools:** aws console (1)

#### [Terraform Cloud](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=0)** - [Instructor] The command line [[Terraform]] is very powerful, open source and available for free. For this course, we'll be using the cloud-based version of Terraform instead. It's a bit more user-friendly and has a few features that will make it helpful as a learning tool. I'd highly recommend starting with Terraform Cloud while you're learning Terraform, even if you ultimately plan on using the open source command line version. To get started, we'll need to set up a free Terraform Cloud account. Just go to [terraform.io](https://terraform.io) and click Try Terraform Cloud. The website may change, so be sure you're not signing up for a free trial of a paid version. You can double check that by looking at the pricing page. Now I've already logged in, but you can set up this account using your [[GitHub]] credentials or there are a few other options. The first thing we'll do is set up an organization. And in this page there's a little wizard for setting up a workflow. We're actually going to just scroll down to create new organization and we want the one that says, start with a blank slate. I'm going to give my organization a name. This is just whatever you'd like. And I have my correct email in here. So I'll just click create organization. Now we're ready to set up our workspace and the first thing we need to pick is our workflow. In our case, we'll be using the [[Version Control]] workflow. So I'll click this at the top of the list and we need to connect to GitHub which is our version control provider.
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=93)** There are a few other options here and if you're interested, I'd recommend checking them out after you're done with the course. They won't be supported for this course. So click the dropdown next to GitHub and choose [github.com](https://github.com). If you have a popup blocker installed, you might get some notifications about popups being blocked. I've got a popup window that popped up on my other screen and so I need to authorize Terraform Cloud to access my GitHub account. And then I've got another popup here, which is asking me where I want to install the Terraform Cloud application. If you have a work organization associated with your GitHub account, you might see this too. So I'll select my personal account and I'm only going to install this on the repository for this course. It'll just make it a little easier to see. So I'll just search for Terraform and select the repo for this course and click install.
>
> **[2:40](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=160)** So the next tab here, we choose a repository. And since we limited our account to only allow access to our one repository, that's the only one that'll show up in this list. So we'll select that. And for the workspace name, I'm just going to clean it up and only use Learning Terraform. And then I'll click Create Workspace.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=192)** And once that workspace is created, we'll need to set up some variables so that Terraform will be able to connect to AWS. So on the main page here, it actually says no variables found. So let's click on this link, continue to workspace overview, and we'll say configure variables. And in this case, let's set them up using sensitive variables. If you read the description here, sensitive variables are secure in that they won't be printed into the console, so we'll say add variable. And we want to choose environment variables. The key is AWS_ACCESS_KEY_ID
>
> **[4:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=245)** and these should be in all caps. And then for this one, you can paste in the value of your AWS access key. This isn't actually something that's sensitive, so you can choose if you want to use the sensitive checkbox here or not. In my case, I will check it and I'll just copy from off screen and paste this in and say add variable.
>
> **[4:39](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=279)** And then we'll add another variable. In this case, the name is AWS_SECRET_ACCESS_KEY.
>
> **[4:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=292)** And I'll copy that, mark this sensitive and paste it in. And I need to make sure this is an environment variable. Editors, please blur this as well. So then I can just say add variable for that. Just to reiterate, marking it as sensitive will make it so that it doesn't get printed in logs and things like that. It keeps it a little bit more secure in the UI. If you run into errors later about not having access or AWS provider errors, it's probably 'cause of a problem with this step. So you might want to go back and double check this. That's all we need to do to be set up for Terraform to manage our AWS [[Cloud Infrastructure]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (13), [[GitHub]] (6), [[Version Control]] (2), [[Cloud Infrastructure]] (1)
> **CLI Commands:** terraform (13), make (4), aws (4)
> **Prerequisites:** set up (5), install (3), configure (1)
> **Tools:** github (6), command line (2)
> **Env Vars:** aws (4), aws_access_key_id (1), aws_secret_access_key (1)
> **UI Navigation:** go to (1), scroll down (1), dropdown (1), select the (1), click on (1)
> **URLs:** [terraform.io](https://terraform.io) (1), [github.com](https://github.com) (1)
> **Definitions:** is an  (1)


### 2. Terraform in Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Terraform plan](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=0)** - [Instructor] Before we talk about theory, we're going to jump right in and see [[Terraform]] in action by doing a Terraform run. To get started with our first Terraform run, we'll need to trigger a Terraform plan. So from your workspace, click on overview and scroll down here to start a new plan. This will take us to the runs tab, and you can see here it says plan queued. Usually pretty quickly, it'll initiate the run. And once that's complete, we can see what is represented by our starter code. We can see it says it's going to create something here. Going to open up this upper tab and get a little more detail. And if you want to look at the code, you can click the link and that'll take you to the code. At the top of our plan tab, there's a note here. It says resources, one to add, zero to change, zero to destroy. And we can go down here to see what it's actually creating. There's two items. The first one is, it says aws_instance.web. So if we open up the dropdown, this is an AWS virtual server or an [[Amazon EC2|EC2]] instance, as it's called. There are some details spelled out here, like AMI and get_password_data false, but most of them just say known after apply. Here's a few more. And then there's another one here, which is a data object, and we can't open that. Now we have the option to confirm and apply,
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=93)** discard, or add a comment. But before we do any of those, let's go to our code repository and take a look. We can scroll down here, we want to be on the main branch, and let's look at main.tf. This is mostly adapted from an example in the Terraform documentation. This actually deploys a Tomcat server. And the way this works is pretty clever. It uses this filter to find the latest version of this bitami Tomcat server, and we'll explain some of these other settings a little later on. So it takes that image, and then down here, it provisions an AWS instance. And this one's just named web. Don't worry if this code is looking confusing, we're going to cover all of this in depth later. But you can see some of the information we saw. There's an AMI setting, and here it's actually pulling that from this data block up here. There's an instance type specified and tags. Let's look back at our plan and see if we can find those. So there's the AMI, but you can see it's actually filled in the value. We've got our instance type, and there's our hello world tag. And that's our Terraform plan. In the next lesson, we'll actually apply this and watch as the infrastructure is deployed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (6), [[Amazon EC2|Ec2]] (1)
> **CLI Commands:** terraform (6), aws (2), find (2)
> **Env Vars:** ami (3), aws (2), ec2 (1)
> **UI Navigation:** scroll down (2), click on (1), dropdown (1), go to (1)
> **Code Identifiers:** aws_instance (1), get_password_data (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** starter code (1)

#### [First Terraform run](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=0)** - [Instructor] In the last video, we ran [[Terraform]] plan but didn't apply the changes. Applying changes will accrue some costs in your AWS account. For this particular code, the cost would be around $5 a month. So we'll go ahead and scroll down and click Confirm and Apply. This shows us one of the very helpful features of Terraform Cloud compared to the command line tool. It's a place to record who applied changes and why. Feel free to add comments as you go to remind yourself, but I'll be skipping it for the sake of time, so I'll just click Confirm Plan. At this point, we still have a moment to cancel the run. Personally, I love features like this because for some reason the moment after I click the button is when I'm most likely to realize I made a mistake. Terraform should complete fairly quickly, but it may take a bit longer for the instance to boot in AWS. I'll open up the AWS web interface and see what we've got. To view the instance, we click on [[Amazon EC2|EC2]] or go up to the menu here and type EC2. Click the link there and click Instances and here's our instance that we just provisioned. Now, if you're not seeing it, you might want to double check up here. On mine it says Oregon. That's where I live. The code is set to default to us-west-2 which is this Oregon-based co-lo, but you might have a different region selected by default. Let's take a look at that instance for a second
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=94)** and you see it's got some things set up. So you can see there is a public IP address and public DNS available and we could open those up, but we don't actually have the ports open to the web browser that's running on our instance. We'll set that up a little later on. Let's go back to our list of instances and click here checkbox next to our running instance and we'll go ahead and say Terminate Instance. That's going to give you a warning and say that it's going to delete the EBS volume. That just means it's going to delete the disc image that's associated with this instance, which is what we want. We'll click Terminate, so this will destroy our server and delete its disc. If we go back to Terraform Cloud and go to Runs, we can click Actions and start a new run. And we want to wait a minute here and be sure our instance has fully shut down, so we'll just give it a second. You can click Refresh. Okay, looks like it's finished now. So I'll click Start run. Now, it's going to run through the plan. And while it's doing it, it's checking what the current state of our instances is. You can see it's detected that that instance was destroyed, so it'll recreate it, and it'll be another minute here before this applies, ready to go. Now that's ready. So you can click Confirm and Apply and it'll recreate the instance, or you can leave it for now
>
> **[3:06](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=186)** since we don't need that instance to be running. Another option is to select Discard Run and then it'll throw this run away and be ready for the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (4), [[Amazon EC2|Ec2]] (2)
> **CLI Commands:** terraform (4), aws (3)
> **Env Vars:** aws (3), ec2 (2), dns (1), ebs (1)
> **UI Navigation:** go to (2), scroll down (1), click on (1), checkbox (1)
> **Cross-References:** go back to (2), in the last (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)

#### [How Terraform works](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=0)** - [Instructor] At first glance what [[Terraform]] does might not seem that complex. You're able to write some code to define some cloud resources, run a program, and it goes out and makes those things happen. So what makes Terraform different from a simple script that calls out to the AWS API? Terraform lets you define your [[Infrastructure as code (IaC)|infrastructure as code]] and gives you a lot of flexibility in how you do that because you can freely use data from one resource to define another. In a non Terraform script, you might deploy a couple of [[Web Servers]] and a load balancer. If you want to add those to a new security group to function as a firewall, your script would need to call out to AWS, retrieve and process information describing those resources, and then take action to define your security group. With Terraform, that kind of sharing of data is trivial. Your code can define resources based on the definitions of other resources even if they don't exist yet. That last point is critical. Terraform figures out the hard part of resource ordering and lets you just treat that infrastructure as static code. One thing I found a bit intimidating about Terraform at first was the idea that it can go and make huge changes to my production infrastructure, potentially deleting critical components and causing a serious outage. When I got more comfortable with the tool, I realized just how powerful the execution plan is.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=95)** There's no need to worry about Terraform making a change that you don't expect. When it compiles the plan, you'll see exactly what Terraform will attempt and have a chance to decide if it's what you want to actually have happen. So Terraform is taking the infrastructure described in your code and comparing it to the state of what actually exists, and then essentially writing a step-by-step script that will make the changes. The plan step is critical because it's the bit that figures out what needs to be done and in what order. Then Terraform uses the provider to actually apply the plan and make whatever changes are needed. Terraform is able to figure out how to do things by using a data structure known as a graph. More specifically, it uses a type of graph called a directed acyclic graph. That sounds really technical and complicated but it's actually a simple concept if you unpack the name a bit. First of all, a graph is made up of a series of connected dots, like these three circles connected by lines. In the case of Terraform, each node is a resource like an S3 bucket, a domain name, and an [[Amazon EC2|EC2]] instance, plus some others that Terraform uses internally to keep track of things. The graph is directed. That means that there is an order. So in our image we'll replace the lines with arrows to show a direction. If we added an arrow back from node three to node two, we could say that we've created a cycle
>
> **[3:10](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=190)** and you can loop back between two and three by following the arrows. For a graph to be acyclic it means that you can't have any cycles like that. And if you think about it in terms of how Terraform uses the graph, this makes perfect sense. You don't want to create a resource, move on to another one, and then come right back and recreate the first one. It means that you'll sometimes need to change the logic of your code to make sure that you don't have two interdependent resources that form a cycle. This connection, on the other hand, is totally okay because it gives Terraform more information about the order things can happen. A real world Terraform run will generate much more complex graph with a lot of interconnections. That data structure is how it sorts it all out under the hood.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (17), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Web Servers]] (1), [[Amazon EC2|Ec2]] (1)
> **CLI Commands:** terraform (17), make (4), node (3), aws (2)
> **Definitions:** means that (3), known as (1), is a  (1), is an  (1)
> **Env Vars:** aws (2), api (1), ec2 (1)
> **Speakers:** - [instructor] (1)

#### [Terraform states](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=0)** - [Instructor] When we ran [[Terraform]], it figured out what it needed to provision based on our code. When we ran it a second time, it knew that the infrastructure had changed. So how did it keep track of what was going on in our infrastructure? In simple English, you might say that Terraform is aware of the state of our AWS infrastructure. That's also the [[Microsoft Word|word]] that Terraform uses. It keeps what's called a state file to track that. We can see that in the cloud UI by clicking on states. And click into our state here. The state file is literally just a [[JSON]]-formatted text file. For the command line tool, you can find it in your local directory. Terraform Cloud gives some more user-friendly UI for looking at it. The data file isn't particularly meant to be human-readable, but if you read carefully, you can find some useful information. So, for example, there's some details about the provider that's configured. This is the AWS provider. We can see here there's our AMI that we used for our AWS instance. And you can dig through and find some other information. If you scroll down, if we run Terraform again, it will display a diff below this that we can use to see the difference between the previous state and the current state. This is also where you can go to see the state files from previous Terraform runs, so you can see what changed with an individual run. This can be really helpful
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=94)** when troubleshooting if something breaks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (6), [[Microsoft Word|Word]] (1), [[JSON]] (1)
> **CLI Commands:** terraform (6), aws (3), find (3)
> **Env Vars:** aws (3), json (1), ami (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Editing your code](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=0)** - [Instructor] In this lesson, we'll be making some changes to our repo and then running [[Terraform]] again to see how it responds. We'll be covering the language in depth later. So the code that we're using will just be to uncomment some things in the starter code. First, we'll go to the [[GitHub]] repo and scroll down to variables.tf and click on it. We have a couple choices for editors here. You can just click the pencil and say Edit this file, but that creates a commit for every single file and that triggers Terraform to run on every single commit. It just gets a little bit noisy. So instead we're going to use this dropdown and say Open in [github.dev](https://github.dev). And this just gives us a more full-featured editor. We can use this to combine all of our changes into a single commit. So I'm going to just uncomment this variable block. And I think this is pretty straightforward. It says variable instance type and it has a default value here set T3 nano. So we made that change, let's also change outputs.tf and we'll uncomment this. We'll look at these when we get to the Terraform Cloud UI. Now go to main.tf. Since we've created a variable, let's see if we can find a place to use it. So in our instance, there's the [[Microsoft Word|word]] instance type again. And the syntax for using a variable is just var dot,
>
> **[1:39](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=99)** and I'll start typing. You can see the editor actually prompts to auto complete some of the options here and instance type is one of them, so I'll click that. And that's all we need to change for now. We'll go down to Source Control. It's got our three changes highlighted here. Click on that. And we just need to commit these changes to the repository. And it requires you to add a message, so I'll just say initial commit and click the check mark. Okay, so those changes are committed now. From this hamburger menu, you can go to Go To Repository, and that brings us back to the more familiar GitHub view. Now, there's something interesting here that happens with Terraform Cloud, which is this little brown orange dot. I'm just going to click on that. It says Some checks haven't completed yet and it shows Terraform Cloud. It says one pending check. So we can actually click details and it'll bring us straight to the run for this commit that we just made. If I open up the top menu here, it says the branch, we can see the initial commit, that was our commit message, and here we can see the plan that it created. So because we just destroyed our instance, it would recreate it. And then there's the two outputs we added, which reveals the ami and also an instance arn, which is a unique identifier that AWS uses.
>
> **[3:16](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=196)** If we open up the instance, we could see it got the instance type correct. It got that from our variable instead of from the hard coded value we had. One other note, if you go to Runs, if you're not seeing the results of this run, it might be because it's queued behind another run. So you might need to open up one of your previous runs and choose to discard it. Let's go back to our initial commit run here and we'll click Confirm & Apply. And this should recreate our instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[GitHub]] (3), [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (5), click on (3), scroll down (1), dropdown (1)
> **CLI Commands:** terraform (5), find (1), aws (1)
> **Tools:** github (3)
> **Exercise Files:** starter code (1), github repo (1)
> **URLs:** [github.dev](https://github.dev) (1)
> **Env Vars:** aws (1)
> **Cross-References:** go back to (1)

#### [Understanding Terraform errors](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=0)** - [Instructor] Since we've been working with Starter Code, we haven't yet had a chance to see how [[Terraform]] responds to errors. So let's make some changes to our code to generate some errors. From the code repository, open up main.tf. And for this one, we can just use the Simple Editor. Right now our AWS instance is named web. Well, let's say that this web server is actually hosting a blog. So we'll go in and change its name here to blog. Then let's scroll down to the bottom and click Commit Changes. And you want it to say Commit directly to the main branch. Just a note, this is only changing the name used to reference the instance in Terraform and AWS. The instance name won't affect the actual host name of the machine. Now if we go back to Terraform Cloud, we can see that our latest run has happened already and there's a big red box that says Error. So let's click on that. Now at the top here, it says Plan errored, and there's two big errors, Error: Reference to undeclared resource. And then it actually gives us a specific file and line. It says outputs.tf line two in output instance_ami. So it's still looking for the instance named web but we changed that to blog. And in our other output variable, it also has web referenced.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=94)** These errors are pretty much the same as what you would see if you were running this from the command line. It's just an easier interface, I think, to look at the web page. So let's go in and fix this error. Go back to our code, go to the root of the repository. Now all we need to do is edit our outputs. So this we can do in the Simple Editor again. And we'll just change these from web to blog. And we can scroll down to the bottom and commit those right to the main branch. Now if we go back to Terraform and go to our runs, you see the plan has already finished. It says it's going to recreate our instance and name it blog and it's going to delete the old instance that was named web. I'll actually just discard this one 'cause I want to test one other change. Go back to our outputs file and we'll edit it again. And this time, let's just leave off one of these curly braces. We'll scroll down and commit that change. So we'll go back and look at our Terraform Runs, and we can open up this one. And the error message is there by now. You see this is a slightly different format and that's because this is a syntax error, and it showed up a little earlier when Terraform was doing its tests. So let's take a look at what the message actually is.
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=189)** It says, "There are some problems with the configuration described below. The Terraform configuration must be valid before initialization so that Terraform can determine which modules and providers need to be installed." And then our actual error, "Unclosed configuration block" "On outputs.tf line five, there's no closing brace for this block before the end of the file. This may be caused by incorrect brace nesting somewhere else in the file." This kind of error message is one of the things I absolutely love about Terraform. It gives a lot of detail about the error and even offers a suggestion for how to troubleshoot, since this kind of mistake is easy to make when you have a lot of nested braces. So before moving on, let's go ahead and fix that error. Just add it back in and commit again. And we'll go ahead and do our run. Open up that recent plan and we'll give it a minute to run here. And it's going to delete and recreate our instance. We'll let the plan finish, which takes another minute after it shows some output, and then I can go ahead and confirm and apply.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9)
> **CLI Commands:** terraform (9), make (2), aws (2)
> **UI Navigation:** scroll down (3), go to (2), click on (1)
> **Cross-References:** go back to (4)
> **Env Vars:** aws (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** instance_ami (1)
> **Tools:** command line (1)


### 3. Infrastructure as Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Resources](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=0)** - [Instructor] In this lesson, we're going to look a bit deeper at [[Terraform]] code. Resources are the building blocks of Terraform code, they define the what of our infrastructure and Terraform figures out the how. Although all resources share the same syntax, every provider has different resource types and slightly different options. We're going to focus just on AWS so that we can go a bit deeper. It should be similar on other platforms like [[Microsoft Azure|Azure]] but you'll need to review the documentation if that's the platform you plan to use. Let's look at a simple example, at the top here we've got our provider definition. A provider isn't a resource, it's what gives you access to resources. So the AWS provider, provides a set of possible resources to define. You need to have a provider defined in your code so that Terraform knows where the resources should go. The resource we've defined is an S3 bucket which I chose because it's pretty simple. The resource syntax is pretty self-explanatory but let's walk through it. First, we have the [[Microsoft Word|word]] resource, that's the key word to tell Terraform that we're defining a resource and not a provider for example. Next is the resource type, in this case, it's AWS S3 bucket. Those keywords are defined by the provider and correlate to actual infrastructure elements that can be created on AWS. Finally, we have the name Terraform
>
> **[1:32](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=92)** we'll use for this resource. After the resource name, we can give Terraform some details about what we want to create by passing in parameters between two curly braces. In this example, we're giving a name for our S3 bucket, notice that this doesn't match the resource name. The bucket name is what AWS will call our bucket, but in our Terraform code, we can use another name. And S3 bucket is actually a great example of why this is handy because every S3 bucket needs to have a unique name. This means that we can refer to our bucket inside Terraform code using a friendly and easy to remember name like tf-course. But inside AWS, the bucket might need to include something like a date string to make sure it's unique. And finally, in this example, we have a second parameter that defines this is a private bucket. That's it for our simple example. But there are a lot more options for this resource type like setting up static website hosting or simple things like adding tags to the resource.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9), [[Microsoft Word|Word]] (2), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** terraform (9), aws (6), make (1)
> **Env Vars:** aws (6)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Prerequisites:** you'll need (1), you need to have (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Basic resource types](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=0)** - [Instructor] Now that we've looked at the components and how to declare resources in [[Terraform]], let's look at some of the basic resource types we'll be using in this course. I'll move quickly through these examples and some of the new syntax that we're going to see. We'll go much deeper in later lessons and hands-on exercises so don't feel like you need to remember all the details. S3 buckets are a simple file storage solution in AWS. Here's an example adapted from the Terraform documentation. This one is a public-facing website so the ACL is set to public-read. There's also a security policy defined, and in this case, that's coming from an external file in the Terraform directory. Finally, this website configuration resource is where some of those specific parameters are defined, so S3 will know, for example, which file to use as the index and error pages. In previous versions of Terraform, this config would be defined within the bucket resource. Now it's defined separately and the bucket the config applies to is defined here. The benefit of this configuration being a separate resource is that it can be freely changed or deleted without worrying about losing the data stored in the bucket itself. VPC stands for Virtual Private Cloud. Think of it as the network infrastructure that wires your servers together. We haven't needed to define one because AWS sets up a default VPC for every account. One way to use VPCs is to keep them separate from each other for each deployment environment.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=95)** Here we've got QA, Staging, and Prod. Each has a separate network with their own IP range. [[AWS Security]] Groups can function like firewalls, which is what this example shows. In this case, there's an ingress block which defines what port and protocol to allow in. There's also a CIDR block parameter, which lets you define the IP address ranges to allow in. The egress block is to define what outbound traffic is allowed. In this case, the ports are set to zero and the protocol is set to negative one, which signifies to allow any protocol on any port. Similarly to how the S3 bucket website config is defined separately, security groups and rules can be separated. This can sometimes help simplify your code when working with iteration features where you need to define several similar resources. For [[Amazon EC2|EC2]] server instances, the resource name is aws_instance. And in this case, we're deploying a server called blog. The AMI parameter defines the base image to use to create this server, and this is an example of using a dynamic variable rather than hard coding a specific AMI. That variable can be defined in a few ways, but in this case, you might define it in a static file alongside your code or use some Terraform code to dynamically look up the latest official [[Ubuntu]] AMI. We'll look at variables deeper in a later lesson. The last parameter in this example is the instance type so that AWS knows how big of a server you'd like.
>
> **[3:11](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=191)** In AWS, a static IP address is called an elastic IP since it can be easily reassigned. In Terraform, that resource is abbreviated aws_eip. In this example, we're naming the IP address blog so that we can remember it's associated with the server instance we just defined. There's no name collision, by the way, because they're different resource types. Notice the dynamic syntax used here for the instance parameter rather than a hard coded ID. This is how Terraform resources are able to refer to other resources, and it means you can terminate and redeploy that blog instance and Terraform will know to reassign the IP address as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (8), [[AWS Security]] (1), [[Amazon EC2|Ec2]] (1), [[Ubuntu]] (1)
> **CLI Commands:** terraform (8), aws (5)
> **Env Vars:** aws (5), ami (3), vpc (2), acl (1), cidr (1)
> **Definitions:** is a  (1), stands for (1), is an  (1), is called (1)
> **Code Identifiers:** aws_instance (1), aws_eip (1)
> **Analogies:** for example (1), think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Terraform style](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=0)** - [Instructor] Let's take a minute to review some of the [[Terraform]] coding style conventions. There are just a few rules and they're also well documented on the Terraform website. Here's an example from the Terraform docs. We'll walk through it to illustrate some of the style suggestions. The proper indentation in a Terraform file is two spaces rather than a tab. Some editors will let you set that as a default for Terraform files. This first line of the resource also has what's called a meta argument, which we haven't talked about yet. A standard argument defines something that Terraform will ultimately pass along to AWS or whatever provider you're using. A meta argument defines how you want Terraform to interpret your code. In this case, Terraform will deploy two instances based on this meta argument. Another common use of meta arguments is to explicitly define a dependency relationship between two resources so that Terraform knows to provision one before the other. Speaking of meta arguments, some are in block format like this one, which tells Terraform how to deal with replacing these instances, that is to create new ones before destroying the old ones. Block meta arguments should go at the end of a resource definition. Use blank lines to make logical separations in your code and to keep it more readable, like separating meta arguments from standard arguments, or meta argument blocks from other code blocks.
>
> **[1:36](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=96)** All single arguments should be together in a group followed by an empty line, and then any code blocks. The style guide lists all the rules and exceptions about blank lines, but it boils down to thinking about readability as you write and refactor your code. Pay attention to what makes sense as a logical grouping. Rearrange arguments within a block if you feel like they should go together and then use blank lines to set sections apart. Finally, take the time to line up the equal signs as shown here. It's a small thing but it makes a huge difference in readability. Just line them up per section or block. No need to have every equal sign in the file aligned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (10)
> **CLI Commands:** terraform (10), aws (1), make (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Security group](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=0)** - [Instructor] In this lesson, we'll be setting up a security group and for our purposes, you could think of this a bit like a firewall that we can just configure for our single instance. One thing we do before we set up our security group we'll need to define a VPC. That's the network infrastructure that Amazon provides, and every account by default has a default VPC, which is why we were able to define an AWS instance without actually specifying a VPC. It just put it into the default. For our security group, we'll need to get more explicit and to do that, there's a handy feature of [[Terraform]] that lets us just pull in the default values. So, the way to do it is to define another data block and the syntax is data aws_vpc, and we'll give it the name default. And all you have to say is default equals true. And now, we'll get the correct values. Now, for our security group, let's go to the bottom of the file. Let's scroll up just a little bit and our syntax here is resource aws_security_group,
>
> **[1:15](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=75)** and then, for the name, we'll just call it blog. And then, there's a name parameter within the resource. And this is actually the name that will show up in that AWS console. For that, let's also call it blog. If you leave this off, it will still work, but it will define a randomly generated name, which can be a little bit hard to find. I like to be in the habit of adding a description to every security group because then you can see what it's intended for. So, we'll just describe what we want this to do. Since this is for a web server that our blog will be on, we'll want to allow web traffic in and we don't want to limit what outbound is for this one. So, we'll say allow HTTP and HTTPS in, allow everything out. And the last thing we need to set on this is the VPC ID, vpc_id = data.aws_vpc.default.id.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=140)** And that's the VPC data block that we just defined. Let's aline these equal signs. Now, to add rules to our security group, we'll do those as separate resources. There is a syntax for adding rules within the security group resource itself, but I think it's cleaner to use this other format. Resource, aws_security_group_rule. And then, for name, I like to use a format something like blog_http_in. That way, you can tell what the group is and is for just by looking at the name. Since this is an inbound rule, we'll say type equals ingress. And since it's HTTP, we'll want port 80. So, we'll say from_port = 80, to_port = 80.
>
> **[3:20](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=200)** For protocol, we'll set it to TCP, and then, there's a parameter of C-I-D-R, CIDR blocks, cidr_blocks, and that lets us define which networks we want to allow access on. In our case, we want this to be wide open, since it's going to be a public website. So, we'll just say zero.zero.zero.zero/zero. If you like you can limit this just to your own IP for security, but I don't think it's a huge risk in this case. And then, the last parameter here, which I'll set off by blank line, is security_group_id. And this is the security group we just defined. So, we're telling this rule which group it belongs to and for that the syntax is aws_security_group.blog.id.
>
> **[4:22](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=262)** And let me fix the formatting here before we move on. Now, we can use this as a template for our other two rules. So, we'll just copy that with control C and paste twice.
>
> **[4:42](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=282)** And then, let's change a couple of things on here. So, HTTP will be HTTPS, and the port will be 443. And for the outbound rule, for the name on this one, we'll say blog_everything_out. We want to change it from ingress to egress, since it's an outbound rule. And since we want to allow everything, the syntax is just setting zero for the ports and negative one for the protocol will allow all protocols. We can keep our CIDR blocks the same. Now, there's one final thing we need to do here, which is add this security group to our instance. So, we'll go up to our instance declaration here. The syntax here is vpc_security_group_ids =,
>
> **[5:41](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=341)** and then we can give it a list of multiple security groups that we want to apply, but in this case, we're just going to use the one we set up. So, that's aws_security_group.blog.id. The reason the parameter's VPC security group is because this is to differentiate it from an [[Amazon EC2|EC2]] classic security group, which you probably won't be using. It's kind of being phased out, and this should be everything we need. So, let's go over and apply these changes. We'll commit by saying create security group.
>
> **[6:23](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=383)** We can go to our Terraform Cloud console and see the result of that plan that's running right now. All right, our plan is completed and it says it's going to make some changes to the blog instance. That's to apply our security group and it's going to create the security group. So, let's apply that, and that's done. Let's take a look up here and we'll look at our instance.
>
> **[6:59](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=419)** Now, let's see if we can find the IP address of our instance. Here we go. We want to use the public DNS. If we copy that string, so when you look at this it might be hidden, you might need to click into it. I'll open up a new tab and here's the webpage that's running by default on our instance. We're not actually going to configure anything on these instances, but this lets you see that this is actually working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (2), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** vpc (6), http (3), aws (2), https (2), cidr (2)
> **Code Identifiers:** aws_security_group (3), aws_vpc (2), vpc_id (1), aws_security_group_rule (1), blog_http_in (1)
> **CLI Commands:** aws (2), terraform (2), find (2), make (1)
> **Prerequisites:** configure (2), set up (2)
> **UI Navigation:** go to (2), scroll up (1)
> **Definitions:** is a  (1), is an  (1)
> **Ports:** port 80 (1)

#### [Using modules](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=0)** - [Instructor] Modules are a [[Terraform]] feature that lets you combine some of your code into a logical group that can be managed together. You can bundle together some logical block of code and pass in arguments that apply for that block. In that sense, you might think of modules as working like custom resources. All Terraform code actually has at least one module. That's the default module known as root. This is where we've been working and writing our code. Let's start by looking at the code for using a module. Imagine we've got a web app that needs a few things, maybe a DNS entry, an [[Amazon EC2|EC2]] instance and an S3 bucket. It doesn't really matter for us what's inside the module right now. We just need to know how to talk to it. First, we'll need to tell Terraform where to find the module. In this case, it's a local directory. Then we're passing in two arguments, so there's a server name and a web AMI in our example. Pretty simple, right? Inside the module, it's also pretty simple to configure those arguments. The term in this case is input variables, which are sometimes just called variables. On the other side, modules can also output values. So in this example, our module is managing an EC2 instance and an S3 bucket, so it's making available the public IP and the bucket name. One important note is that you can't directly access data from a module unless it's set up as an output value.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=95)** The content of a module is encapsulated and works like a black box. So if you need to use data elsewhere in your code, be sure it's set as an output value. The same goes for inputs. If you need a piece of data in the module, make sure you pass in a variable. To use the output from the last example, you might have a DNS record that you want to assign to a public IP address. You can reference the output of that module much like you would another resource. For creating a module, the minimal files you need are a main.tf file containing the main code for the module, a complex module might call out to other nested modules from here, a variables.tf file with the input variables, an outputs.tf file with the output values, finally, define a readme describing the module but you don't need to document the inputs and outputs because that documentation can be auto-generated. This was intended as a very high level view, just enough to get you started creating your own simple modules. There's a lot we're not really covering, so I just want to hit some highlights. It's possible to use remote sources like S3 buckets or [[Git]] repos for module. There's detailed guidance in the docs for how to use versioning to ensure modules are what you'd expect. A module can include a provider block and even set a specific version for that provider. Unless you know you need this,
>
> **[3:07](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=187)** I'd recommend only setting the provider in your root module. And finally, there's the Terraform Registry where you can find pre-made modules for managing all sorts of infrastructure and providers for different hosting platforms. We'll look at the registry in the next couple of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (4), [[Amazon EC2|Ec2]] (2), [[Git]] (1)
> **CLI Commands:** terraform (4), find (2), make (1), git (1)
> **Env Vars:** dns (2), ec2 (2), ami (1)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** in the next (1)
> **Documentation:** the docs (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)

#### [Terraform registry: Providers](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=0)** - [Instructor] In this lesson and the next one, we are going to look at the [[Terraform]] registry. So to start, go to registry.[terraform.io](https://terraform.io). Now this site provides some modules, which we'll look at in the next lesson, but we're going to start with providers. We've been using the AWS provider throughout this course, but there are other providers available for all the major cloud platforms. So let's click into providers, and you'll see the major ones are highlighted here. So let's click into AWS. The main reason I want to look at this is to highlight the documentation that's available here. So let's click into the documentation. This is where you can find very detailed documentation and examples of how to work with AWS using Terraform. Some of our starter code was more or less pulled directly from the examples here. Now, one confusing thing about these docs is that they're organized by AWS service, which don't always have intuitive names or organization. If you look through this list on the left, there are a lot of things. I find it simplest to just use the search bar here. It's says filter. For example, if I search AWS_instance, we can pretty quickly find what we're looking for. There it is. You see this is under [[Amazon EC2|EC2]], which is only intuitive if you know AWS pretty well. One other thing to note about how these docs work is that there's a separate page for the AWS instance resource,
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=94)** but there's also an AWS instance data type, and you can see that has some different parameters here. This is a bit like the code that we use to look up our AMI. You can see that you can apply filters to find an existing instance. Data sources are how to get information about your deployed infrastructure. So let's head back to the main registry page, and click on browse providers again, and we'll look at another type of provider. This one is [[Kubernetes]]. One thing to note while you're looking at providers is that some of them are marked official, and until you're a little more comfortable, and can look at the code, I would just stick to the official ones unless you really need a community created one. I wanted to highlight Kubernetes because it's a little different than some of the other options. Kubernetes isn't a cloud, it isn't a public service, but it is something you can install, and manage yourself. You can also host your Kubernetes cluster on Amazon or [[Microsoft Azure|Azure]] or [[Google Cloud Platform (GCP)|Google Cloud]], and you could even use the AWS provider to create a Kubernetes cluster, and then use the Kubernetes provider to manage that cluster. We've only been using AWS in this course just to keep things simple but I wanted to highlight the providers here to illustrate that Terraform can manage just about anything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Terraform]] (4), [[Amazon EC2|Ec2]] (1), [[Microsoft Azure|Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** aws (9), terraform (4), find (4)
> **Env Vars:** aws (9), ec2 (1), ami (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [terraform.io](https://terraform.io) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** starter code (1)

#### [Terraform registry: Modules](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=0)** - [Instructor] The [[Terraform]] Registry is also where you can find official modules. So in this lesson, we're going to find a module to simplify our code. We'll click on browse modules, and on the left-hand side we can filter down to the AWS provider. So let's scroll down a little bit and find security-group. On the module page, there's a lot of information here. You can see the different submodules it depends on and you can also see a link to some examples. The first thing we want to look at is the provision instructions that are over on the right here. So we'll highlight that block and click copy. Before we paste that into our code, let's look at the documentation. You could see some information here. On this module at the top, there are some links here. You can see the inputs, which are the different parameters this module will take, the outputs which are the values that allow output, and then some other things. If we scroll down to this features list, this is actually really helpful and we'll use some of this. The one thing we're going to do is look at these named rules, but there are a few different ways you can use the module. We'll get to that a little later. And keep scrolling down and there are a few basic examples that we could copy and paste. And one way you can use this is actually by defining a pre-configured rule. So in this case, if it's just port 80 http,
>
> **[1:37](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=97)** you can use this syntax to reference that file within the module to just do port 80. We're going to do a little bit more than that. So we'll just set that up in a second. Let's go over to our code. And in the editor, you want to open up main.tf. Let's give a little more room. So we can define this right here above our security group. This will eventually replace the security group we just defined. So let's paste that code we copied. And just like our security group, we'll also need to set a VPC. So we'll copy that, paste that in. And we'll want to give this a name. So let's call this blog_new. That will help differentiate it from the existing security group we've just defined. And then we can also change the name of the module itself. Since the module code is defined by this source parameter, we can give the module a different name and then use that to reference it. So we'll call this blog_sg. And then to define our security group, we'll need to give it some rules. And those are the rules that were referenced in those named rules. So let's go back to the documentation and scroll up to that feature list. It says named rules, see the rules here. If we click into that,
>
> **[3:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=190)** it actually opens up some source code inside the module, and this is just a variable definition with a lot of different values. But we can just scroll down until we find the ones we're looking for for HTTP and HTTPS. So http-80-tcp is one, https-443-tcp. And then down at the bottom. For our outbound rule, we'll use all-all. So let's put those into our code. The way this works is you say ingress_rules equals. So we'll take the names from that list that we just looked at. So that's http-80-tcp and then a comma and in quotes htpps-443-tcp.
>
> **[4:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=254)** And we'll also want to define the CIDR blocks. So ingress_cidr_blocks equals. And for this, we can use the same as what we used before. 0.0.0.0/0. Let's just align our equal signs. Actually, let's put these in a separate block for clarity. And then we'll need to do our egress rule the same way. I'll just copy and paste and we'll change ingress to egress and we'll change our rule name to all-all.
>
> **[5:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=305)** Now the explanation for the syntax from the module page is all defined in this inputs section. So if we look through until we find ingress rules, well, here egress is first, let's look at egress. Egress CIDR blocks and there's the syntax. And then egress rules. It's a little cryptic but it says list of egress rules by name. These aren't always intuitive or as easy to read as the main Terraform documentation. So it can really help to look for some example code, either the example provided in the module or just search the web for some other examples. Let's go back to our code. Now the one last thing we need to do is add this security group to our instance and replace the one we manually defined. So the way we'll do that is using module.blog_sg.,
>
> **[6:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=365)** and then we need to get the security group ID that this module outputs. So to find the name of that, we'll look back in our module documentation and scroll up, click on outputs. The output name that gives us just the security group ID is security_group_id. So let's copy that and we'll paste that here. We'll go ahead and commit this. So use module for security group.
>
> **[6:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=406)** And then we'll go through our Terraform run. And it looks like it's defining some new security groups. One thing to note is that the module will create names that are sometimes a little hard to understand. It uses this this_name_prefix for the resource name. But we don't need to reference that directly since we can reference it by the module name. So let's apply that change. Now that that's complete, we can look in the AWS console and compare the security groups. You can also open up our instance and make sure it's still working. So we need to open up one of these hidden blocks here and find our DNS entry. And I'll just say open link in new tab. And here you see we can still access our instance. So if that looks correct to you, go ahead and go in here and clear out the old code for the security group and then commit and apply those changes too. And if you like, you can also change the name just to blog. Security groups are a great example of how modules can help make things simpler. Rather than having to spell out every detail, the module can take care of some of that for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (3)
> **CLI Commands:** find (7), terraform (3), aws (2), make (2)
> **Env Vars:** aws (2), cidr (2), vpc (1), http (1), https (1)
> **Code Identifiers:** blog_sg (2), blog_new (1), ingress_rules (1), ingress_cidr_blocks (1), security_group_id (1)
> **UI Navigation:** scroll down (3), click on (2), scroll up (2)
> **Ports:** port 80 (2)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)


### 4. Advanced Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Get ready to scale](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=0)** Now that we've covered the basics of working with [[Terraform]], we can get our code ready to scale. We'll want our blog server to have multiple instances and to scale those instances in response to load. But we should also set up multiple environments so that changes can be tested before they reach customers. First, we'll start by setting up our environment in a new VPC. So we'll go to the Terraform registry. That's just registry.[terraform.io](https://terraform.io). And we'll search for VPC. And we want this module down here, Terraform AWS modules slash VPC. If we scroll down a little bit, there's an example right here that we can actually just copy and paste. So I'll just click the copy button. And then we can go over to our repository on [[GitHub]], and we'll go down to main, and then click the little pencil icon here. Click the drop down and go to [github.dev](https://github.dev). Now let me rearrange things a little bit to make this easier to see. I want to scroll down and find a good place to paste this. I think right below the default VPC is probably a good place. So we'll just paste that in. Let's start by giving this a custom name. So, to follow the pattern we've been using, we'll just call this blog underscore VPC.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=95)** We can keep the source the same. For the name field, since this is the name that will show up in AWS, let's actually call this dev. We can keep this site or range the same. The AZs here are the availability zones. and you'll wanna change this to match whatever region you're using. In my case, this was US West 2. So I'll just say US West 2 A, B, and C.
>
> **[2:15](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=135)** We can keep these private and public subnets the same. We'll leave enable NAT gateway set to true, but we don't need the VPN gateway, so let's just delete that line. For tags, let's keep Terraform equals true, but it makes it easy to spot that this was created by Terraform. And we can just keep environment equals dev. So now that we have all of that in there, let's go up and just delete this default VPC. That won't actually delete the VPC, it just means Terraform won't know about it anymore. Now, let's scroll down and make a couple of changes to start using this new VPC in our existing code. Now, we'll need to tell our blog instance how to use this VPC, and so the way we'll do that is actually by adding a subnet ID. We'll just say subnet ID equals, and then module.BlogVPC.PublicSubnets.
>
> **[3:27](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=207)** Here you can see auto-complete has come up with that, so I can just hit tab. Then we'll actually need to specify which of the public subnets we want, and so we'll just use brackets and say zero for the first one. Then we'll also need to update our security group at the bottom here. We just need to change vpcid equals module.blogVPC,
>
> **[3:57](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=237)** and here I can just hit tab, and then we'll say .vpcid. That should be all the changes we need here. That should be all the changes we need to make. Let me just close this file and click on the source control button on the left menu here. And we'll need to give a name for this set of changes. Let me close this. So for this, we will just say, create a new dev VPC. And you can see there's an alert here that these changes will be committed directly to the main branch. I'm just gonna say, don't show again. Now, normally you would wanna commit these to another branch and merge in, depending on your workflow, but we're just working directly in main here just to keep things simple. So we can see we've got those changes that we just added, and we can say commit and push. Now that those changes are committed and pushed, we can go over to Terraform Cloud, and I'll just click to overview. Let me just reload the page. So now we can see our commit has made its way into Terraform Cloud. Let's just click in and watch that plan run. And this change will actually recreate almost everything we already have deployed. So let's look at the plan that it's created. And we can see it's recreating almost everything
>
> **[5:30](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=330)** that we already have deployed. That's because it's creating a totally new VPC. And so it has to create new instances in order to use that new VPC. So when you're ready, feel free to review this, but it should be fairly straightforward. It looks like a lot, but actually it's just because it's needing to recreate everything. When you're ready to go, just click confirm and apply, and you can leave a comment here or not. And now that should trigger another apply run, which we can watch happen right here. If you run into any errors, double check your code against the solution branch and rerun Terraform. Even if you didn't have any bugs in your code, Terraform can sometimes have an error on the first run when you make big changes like this, because the resources can be created out of order. This can be avoided by careful use of resource ordering meta parameters, which can be worth it in a customer facing production environment, but often it's cleaner to just run Terraform twice rather than cluttering up the code for a one-time change. So if your first run fails, try running Terraform again before checking the code too thoroughly. And it looks like we're just waiting on the original blog instance to be deleted. Let's see what else is going on. It looks like everything else worked successfully. This may take several minutes, so don't assume that it's failed if it just takes a little while. You can see in my case,
>
> **[7:02](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=422)** this took about four minutes to complete. So once this is complete and you've confirmed that everything is looking green here, or if you've had to rerun it and then confirm that it's working, you can move on to the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (13), [[GitHub]] (2)
> **CLI Commands:** terraform (13), make (4), aws (2), find (1)
> **Env Vars:** vpc (12), aws (2), nat (1), vpn (1)
> **UI Navigation:** scroll down (3), go to (2)
> **URLs:** [terraform.io](https://terraform.io) (1), [github.dev](https://github.dev) (1)
> **Tools:** github (2)
> **Code Identifiers:** blogvpc (1)
> **Prerequisites:** set up (1)

#### [Expanding your installation](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=0)** In this lesson, we'll be setting up a load balancer and an auto-scaling group for our application. First, we'll set up the load balancer and just point it to our single instance. We'll go to the [[Terraform]] registry and search for ALB. We're looking for this module here, terraform-aws-modules-slash-ALB. If you scroll down, there's an example here. This is a little bit more complex than what we need, but we can adapt it to our use. It's just the HTTP to HTTPS redirect. Just click copy and go back to your code and open up main.tf. Let's put this right below our rephrase. Let's put this just at the end of our code after our security group. So, we'll scroll up to the top, and the first thing we'll do is we'll rename this to blog underscore ALB, just to match the pattern we've been using. And we can do the same thing for the name parameter. This is the one that will actually show up in AWS, so choose something that is easy to spot. vpcid we can use our vpc module so just say module dot blog underscore vpc dot vpcid and we can do the same thing for our subnets
>
> **[1:36](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=96)** just use module dot blog dot vpc and then public subnets. The example code here is actually defining security group rules inline. And this can work if we're just setting up a very simple ALB, but actually this won't work with the way we're setting up this module. So we'll just use the security group we already have defined. So we'll delete this. There's just a simple parameter here of security groups. security underscore groups equals. And this is a plural. So that's a hint that we want to use a list or array here. So we'll use square brackets and we'll just put our one security group in there. So that's module dot blog underscore SG dot security group ID. That's all we need for that. To keep things simple, we won't be looking at logs in this course. So we can remove this access logs parameter. For the listeners block here, we can rename from this long example. This is somewhat free-form, so we'll just say blog-http, and we'll keep the port and protocol. Instead of redirects, we'll actually be forwarding traffic, and we can get rid of these lines here from the example. So we're going to forward this to a target
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=189)** group, but we actually haven't set that up yet. So we'll have to put in the name and then make sure our resource matches it. So the parameter we'll use here is target underscore group underscore ARN equals AWS underscore LB underscore target underscore group. And then we'll just name this blog and use the ARN parameter. ARN here means Amazon Resource Number. It's just a unique ID that Amazon uses, and it gives us a simple way to reference the target group that we're gonna set up. So we're gonna keep things simple and not use HTTPS, so we can delete that whole section. Now, there is an option again in this module to set up target groups, how the module set them up for us, but again, that actually won't work with what we're gonna set up for the autoscaling group later. So instead of that, we'll just delete this. And let's fix our tags. We'll just say dev, and we can just delete this project tag. So now we can set up our target groups. And to find the syntax for that, we'll go back to the registry. We'll scroll up to the top and search for AWS. We want to look at the documentation for the AWS provider. So we'll click that first link and then click on documentation.
>
> **[4:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=285)** Then on the left hand side, we'll just search for target underscore group. And these first two are actually the two that we'll need. So first, we'll set up a target group. So just click on that. And we're actually doing the exact same thing as this example, but we've already set up our VPC. So we don't need this section. we can just use the first one. So we'll just copy that, go back to our code. We'll paste that in at the end. And we want to change the name to match the one we used up above, which is just blog. And we can also change the name parameter too. We'll just name that blog as well. And then for the VPC ID, we want to use the one from our module. So we'll say module.blog underscore VPC, and then VPC ID. So now we can go back to our documentation, and we'll go to the target group attachment. And we'll scroll down here. Again, this is exactly what we're doing. There's an AWS instance, a target group, that's what we just set up. And now we just need to set up a resource to define the attachment between the two. So we'll copy that and go back to our code. We just paste this in at the end. We'll change some of the names to blog, and we want to make sure we reference the blog target group, and of course the instance in our code is blog.
>
> **[6:17](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=377)** So that keeps it pretty simple. That should be all we need now to get this single instance setup. So let's go to source control, and we'll just type in load balancer for our commit message, and we'll click Commit and Push. Once that's pushed, we can go over to Terraform Cloud. Let me just refresh the page. Here we can see that commit is getting planned, so let's click into that. Here we can see our plan. It's creating the attachment and the target group, setting up the ALB. Now, it's asking us to confirm our changes, so let's do that. That's finally complete. Let's look at those resources in the AWS console. So we'll go to [[Amazon EC2|EC2]], and we'll scroll down and find our load balancers. Here's that load balancer. I'll just close this alert. Here we have a DNS name, which is what matches our load balancer. So let's see if we can see our web page. There it is. That takes us to the default web page
>
> **[7:49](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=469)** for the AMI that we're using. In this case, it's just Apache Tomcat. Now that we've got our load balancer working with a single instance, let's set up an auto-scaling group so that we can easily scale up new instances. So let's go back to the Terraform registry. And this time we'll search for auto scaling. And we'll use this module Terraform AWS module slash auto scaling. Now, in this case, the documentation and configuration examples are a bit more complex, and we can't really just copy paste like we've been doing. So I'm just going to set up a minimal config and explain it as I go. The one thing we'll need from this page is this provision instructions in the lower right, so we'll just copy that. And feel free to look through the examples here, they're actually very detailed. This is a pretty powerful module and autoscaling groups are pretty powerful in their own right. We're not really going to be using the advanced use cases of these, like autoscaling based on load. We're just going to set ours up to manually autoscale. But you can see there's quite a few options available. So let's go back to our code. And we'll just paste in at the end here, the provisioning instructions that we just copied. Now the first thing we wanna do is change our module name.
>
> **[9:21](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=561)** We'll just follow our naming pattern. So we'll call this blog underscore autoscaling. And we can keep the source. You can keep the version or you can delete it. If you delete it, things might not work exactly the same. So you might need to adapt later on. I usually like to actually leave the version off while I'm working on these courses because it kind of helps me see when there's a change. So let's delete this comment and we'll just put in name equals blog just to follow our same pattern. So we'll need to set a couple of other parameters for auto scaling group, we'll use min size. So that's the smallest our scaling can go. We'll set that to one. We'll say max size equals two. You could also just leave this as one if you wanna have the experience of setting this up but don't actually wanna pay the cost of provisioning another instance. We can also set a preferred size here but that's an optional argument. So let's just leave it off to keep things simple. The next parameter we need to add is VPC zone identifier. And despite the name, this is actually expects a list of subnets, so we'll use our module.blogVPC.publicSubnets.
>
> **[10:43](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=643)** The next thing we'll need is a launch template. So we'll say launch underscore template underscore name. And we'll just say blog. In this case, we'll just let the module take care of setting up the launch template for us since we don't really need to worry about those details in this case and the default will work just fine. Next we'll need to give some details about how we want our instance to be provisioned and actually we can copy that from our instance. So let's go up and just cut the instance and paste it down below because in the end we'll be getting rid of this instance definition altogether. So we'll cut that out, go down to the bottom here, we'll paste it in for reference. So we'll need to set security groups, but the argument is slightly different. In this case, it's just security groups.
>
> **[11:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=704)** We'll do the same thing we did before where we'll set our single security group in brackets. So module.blogsg.securitygroupid. underscore SG, dot security group ID. So let's delete that from our instance example. We'll need an instance type, so we can just copy this exact line. Actually, we'll just cut and paste. Then to set our AMI, the parameter is slightly different, but we can just cut this and paste it in. It's actually image ID. Let's align our equal signs just to make things a little more readable. Now, the last thing we'll need for our autoscaling group is to tell it about our load balancer. We'll do that with a configuration block here. That is traffic underscore source, underscore attachments, and we'll set that as blog ALB. So that's our ALB equals, and then another block here, traffic source identifier equals, and then AWSLBTargetGroup.Blog.ARN.
>
> **[13:19](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=799)** Now, we don't need any of this from our instance so we can delete that. There's one other thing we need to do before we commit this change, which is to look at our outputs. Now, since we got rid of our instance, we can't actually use this output anymore. So let's delete both of these for now.
>
> **[13:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=825)** And we'll create new ones a bit later on. So let's commit those two changes. We'll just call this one auto scaling. And we'll say commit and push. Now, let's go back to Terraform Cloud and we'll go to overview. We can see that commit has already triggered a plan, so let's open that.
>
> **[14:21](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=861)** It looks like I have a typo here. We need to update our target group. Let's go back. I mean, because we're using an autoscaling group, we don't need this target group attachment anymore. Let's delete that whole thing. That's actually what we were setting up here in the traffic source attachments. Let's go ahead and commit that. We'll say, move attachment as our commit message, and we'll commit and push that. We'll go back to Terraform Cloud, look at our overview again.
>
> **[15:13](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=913)** Here we can see our plan. It's actually going to delete our instance, and then the autoscaling group will recreate it. We can confirm and apply that change and confirm the plan. We'll just give that a minute to apply, and now our apply has finished, so let's go back to our AWS console, and we'll just reload this page. So we can take our DNS again, we'll go here, actually we just refresh this. And not very exciting, but there we go, it's the same page, now running from our auto-scaling group instead of directly to the instance. If we go back to the console, we can see that auto-scaling group. If we go to auto-scaling groups, and here it is. Here's that group, and AWS adds this code on here after the name that we had given the auto-scaling group. We can see our launch template, the AMI, all the details of how this is set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (7), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (9), alb (7), vpc (5), arn (4), ami (3)
> **CLI Commands:** aws (10), terraform (7), make (3), find (2), apache (1)
> **Prerequisites:** set up (12), setup (1)
> **UI Navigation:** go to (6), scroll down (3), scroll up (2), click on (1)
> **Cross-References:** go back to (11)
> **Definitions:** is a  (4), is an  (1)
> **Exercise Files:** template (4)

#### [Variables](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=0)** - [Instructor] I've been a bit hand wavy about variables in [[Terraform]] so far, hoping that we could cover a good foundation of resources before we talk about them. Here's some code for how you might define a variable for the AMI of an instance or ASG resource. This example also defines a default so you'll always have a base. We can use a variable like this in the instance config. Using variables like this can be a handy way of organizing your code by keeping together anything you might change often, like the AMI ID, or say, the allow list of IP addresses for your security group. It's possible to override that default value in Terraform Cloud or with the command line by passing in the -var parameter, which looks something like this. Although that can be handy for learning and QA uses, it feels like a fairly manual process not in the spirit of Terraform. Let's take a look at data sources, which are like variables, but allow data to be retrieved from elsewhere. For example, pulled from AWS or from another Terraform configuration. For something similar to the variable example, we might have code that looks like this. And our instance config would have this line. This code will query AWS for AMIs owned by self. That is the current user with the name tag of web server and the deploy tag set to true and then it'll return the most recent.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=94)** This example introduces the filter block as a way of narrowing down what's returned in a data source. It's really pretty simple, but it's a very powerful bit of code allowing you to always get the latest official [[Ubuntu]] AMI. This is an introductory course so that's about as deep as we'll go with the code. That said, I'd also recommend you avoid being too clever with your code until you really need it. A big part of the point of a tool like Terraform is to provide documentation of your infrastructure in the form of code. The more complex the logic in your code, the less it functions as a simple one-to-one representation of your infrastructure. That said, there is a balance to be struck. Hard coding everything might work for 10 resources, but it'll be a hassle at 100 and a nightmare at 1,000. I think the best approach is to think about what you need in the next order of magnitude. If you've got a couple instances for a hobby project, set it up as though you were the Ops team at a small startup with say 30 instances by abstracting some things away in variables and data sources. The same is true for a small startup. Look into scaling into the next horizon maybe by using modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[Ubuntu]] (1)
> **CLI Commands:** terraform (5), aws (2)
> **Env Vars:** ami (3), aws (2), asg (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Split out your data](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=0)** We're about ready to convert our code into a module, but first we'll need to do some work to pull out the configuration values. The way I like to do this kind of thing is to start by duplicating my entire code file into the variables file. That saves a lot of back and forth with copy and paste. To get started, just open main.tf in your [[Git]] repo, and select everything in here, and say copy, then go over to variables, and right below here we'll just paste. If this doesn't quite make sense, just follow along. I think you'll get the hang of what I'm doing as we do it. Let's go up to the top of our file and start up here. We've already got our instance type. Let's see if we can find some things we want to make into variables in this data block. So it looks like the main things we'd probably want to change here are the name of the actual AMI image itself, and maybe the owner name down here. So if we wanted to select a different AMI, we'd need to change both of those. I think the [[Representational State Transfer (REST)|rest]] of these are fairly static, so let's leave those alone. So let's just delete some of this, and we'll convert this into a variable block. So instead of saying values here, let's just say name. Instead of owners, let's say owner, and we'll make this just a single value, and we can also make this one a single value.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=94)** So what we're doing here is actually defining the default. So we'll say default and space these out a little better. and let's put a close brand here, and we need an equal sign. Let's just line everything up there. All right, let's make this a variable. Instead of data here, we'll just say variable, and what should we call this? Let's call this AMI underscore filter. This is what defines our filter. So in order to set this up with this default the way we have, we actually need to define a custom type here. So we'll say type equals object, and then we want parentheses and curly braces, and this is where we can define the parameters of our object here. So we'll just say name equals string, and owner equals string. Let's line those up too. So that's the basic idea of what we're doing here. We could also add, let's add a description. Description, and let's say name filter and owner for AMI. So now we'll be able to just use this in our code instead of having the values hard-coded. Let's keep scrolling down and see if there's
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=189)** anything else that we want to use. Down here in our blog VPC, I think that we might want to, well, first of all, we definitely want to have the environment name be something that we can turn into a variable. Let's say variable environment, and we'll default that to dev. Oops, there we go So we'll say default this one we don't need to create an object for and then we can just say description We'll say deployment environment All right now I think we might want to do something for our network addresses here you can see we're using 10.0 as the first set for all our addresses in this dev environment. Let's call that one network prefix. We'll say variable network underscore prefix. Actually, now that I'm looking at that, I think that we should make this a complex variable too. Let's make this an object as well. We'll say type equals object. That way we can correlate the environment to the network that that environment uses. Staging and prod might use 10.1 and
>
> **[4:41](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=281)** 10.2 as their network prefix and dev will use 10.0. We'll define our object and we'll say name equals string, and then network prefix also equals string. Let's just align those equal signs. So it's a little more readable Okay, and then for our default instead of just a single string here let's say name equals dev and we'll say Network prefix equals 10.0 All right So now when we override this we'll be able to specify both the name and network prefix as part of the environment Okay, let's keep going here If you wanted to you could do something with these AZs maybe break out the region, but I think it's fine to just leave that And I think that's all we'll need from that particular section Now, let's see. Is there anything in the blog security group? I don't think there's anything here We will probably end up changing the name, but we will use the environment name for that So we don't need to actually pull anything out of this
>
> **[6:16](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=376)** And I think the same for the ALB all this is kind of already already parameterized pretty much or we're just going to leave hard-coded values And we don't need the LB target group In our auto scaling group, I think it might help to have them in and max size be variables that we set So, let's do that now and I think these ones can be independent you could combine them into sort of like a ASG settings object, but sometimes it's simpler to just use a single variable. So we'll just say variable And I can just hit backspace and grab that one in size and we'll say default equals 1 and Description Let's say minimum Number of instances in the ASG Pretty straightforward and let's just copy that and we'll use the same Code there as kind of a template for our max size So we'll just say max And Maximum That should be two All right And I think that should be everything we need. Let's see if there's anything else.
>
> **[7:49](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=469)** No, I think that looks good So we can just delete the rest of this code So I hope that makes sense because the idea of kind of copying it in place just so you can kind of edit it in place I think it can make things a little bit smoother You just have to make sure that you don't accidentally leave the code in there So now that we have all these variables defined And let's just do a quick scan to make sure we didn't have any typos or anything AMI filter name owner Yep, I think that's all correct so we can start using these in our main.tf So go ahead and open main.tf, and we'll go back up to the top And now we can just plug those in So here where we use the name for the AMI filter now we can say var dot Am I underscore filter dot name and then we can do for the owner we can put in VAR dot a my filter dot owner And we should probably delete that comment since this is just a variable now And the same goes here. We can do the same thing for our blog. So we'll say VAR dot environment oops Environment dot name Then for our network prefix, we'll need to use the string interpolation syntax. So that's dollar sign and then curly braces, and then we can just say var.Environment.NetworkPrefix.
>
> **[9:28](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=568)** We'll just go through and make that change. I'll just do that manually, but if you're good with search and replace, now's the time to use it. And maybe I'll just copy and paste a little bit.
>
> **[10:05](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=605)** And we'll make the same change to our public subnets. because the way that works is they're in the one or 101 for the third set of numbers there. So we'll paste that in, and here, and one more after this.
>
> **[10:33](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=633)** Okay, and then we can also change our environment down here in the tags. So we'll say var dot environment.name. And since we didn't pull anything out of the SG, we probably don't need to change that. And we'll keep going down here to our ALB. We didn't pull anything out of here, so we probably don't need to change anything. Oh, we can change our environment tags. So that should be var.environment.name. And the autoscaling group was the last place we made variables. So we'll say var.min underscore size and var.max size. And that should be all we need. Let's just do one quick check to make sure there aren't any typos.
>
> **[11:41](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=701)** Okay, that looks correct to me. So let's close these now. And we'll go over to our source control. And let's just put in a commit message here. We'll just say refactor to use variables.
>
> **[12:06](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=726)** we'll commit and push. Okay, so let's go over to [[Terraform]] here, Terraform Cloud, and let's click on runs. Actually, just click back to overview, you might be in a different place here. And so here's our commit that just went out, and it's doing a plan for us. If we did this correctly, there should be no changes, because all we did is just put existing values into variables. We didn't actually change any of the values. So let's look. And here we go, it says no changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Terraform]] (2), [[Git]] (1)
> **CLI Commands:** make (13), terraform (2), git (1), find (1)
> **Env Vars:** ami (6), alb (2), asg (2), var (2), vpc (1)
> **Versions:** 10.0 (3), 10.1 (1), 10.2 (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Definitions:** we call this (1)

#### [Modularize](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=0)** Now that we have variables pulled out of our code, we just about have a module, but there are a couple of things left that we should add. First, it would be nice to have some output. Let's look in main.tf and see if there's anything obvious there. There's not a lot that we'd want to output since most of this is things that we're specifying. But one thing that I think would be useful to add is outputting the DNS name that's generated for the ALB so that we can easily just go to that web page. In order to find out how to do that, go over the [[Terraform]] registry and search for ALB. And it should come up with this module. So that's this one, Terraform AWS modules ALB. and just scroll down and click on Outputs. And this is actually the parameter we're looking for, DNS name. So that's the DNS name that gets generated and attached to our load balancer. So that's pretty easy to remember. Let's go over to Main and open Outputs. So we can just say Output, and let's just name this Environment underscore URL. and we just say value equals module dot blog underscore ALB dot DNS underscore name.
>
> **[1:38](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=98)** So it's just pulling that output value from the module that we pulled from the Terraform registry. Let me just fix the spacing here. That should be all the changes we need to make to the outputs. So now we're ready to create our module. So the first thing you need to do is just create a new directory, and let's call this modules, say module slash blog because we're going to name our module blog. So we're going to move most of our.tf files into this directory. So just start dragging them up, we'll do main.tf, and you'll get prompted with this. You can say don't ask me again if you want, or just click Move every time. We're going to move outputs. Oops, make sure you go into the blog directory. We'll leave providers. We're going to put that somewhere else in just a second. And we'll move variables over. Now, the other thing we want to do here is create a directory for our environments. So we'll make another directory. Oops, not there. We'll make it in the root of repo. And we'll just call this one environments. And slash dev is going to be our first environment. So we're doing the same thing, we're making two directories. And I think this is kind of a standard practice. I've seen this pattern a lot, where you have an environments directory, and then a modules directory kind of side
>
> **[3:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=190)** by side. They might be named slightly different. This is a useful way of doing it to keep them in the same repo, but have the module split out. That way, you're not having to make changes, code changes with two PRs across two different repos and complicated things like that. So we'll take our providers and just drag that into our dev environment there. So our module is all set up now. And one thing we need to do is make sure that we actually use the module. So we'll click on our dev environment here and click New File. And we'll just call this main.tf. And all we need to do here is just wrap our modules. So we'll just say module dev. And then for source, we can just say source equals dot dot slash dot dot slash module modules slash blog. And that needs to be in quotes here. So let's just put quotes around it. Now, since our defaults are the correct ones for the dev environment, we don't need to change anything else. Now, there are a couple of other things we need to do before we actually commit this change. So first, we'll go over to Terraform and click on Settings, and we'll change the name here to blog-dev. So what we're going to do is take our existing environment and convert it into our new dev environment, and then we'll set up some new workspaces for staging a prod later on,
>
> **[4:42](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=282)** and we'll do the same sort of thing here. So the first change we need is just to change the name. And then if you scroll down to Terraform working directory, this is where we specify the environment directory within our repo. So in our case, that's environments-dev. See, I've already got it in my autocomplete here. And that just matches your Terraform repo. So once you've made those two changes, click save settings. Then we'll go back to our code. Now, if we pushed and applied these changes right now, Terraform would get very confused because it doesn't quite understand that we are keeping existing resources. It will think that we want to delete everything we've created and create a whole new set of the exact same things. Unfortunately, that's going to fail in this case because the load balancer has deletion protection enabled by default, and so we'd have to manually go and disable that or change our original code. It's kind of a mess. Thankfully, there's a pretty easy solution. We can just tell Terraform that we've moved the resources to the new module, and then it will update its state file without making any changes in AWS. So the way we can do that is in our environments, create a new file called moved. You can actually name this whatever you want, but I kind of like to use this standard way of doing it. So I'll name this moved. And then within here, we're just going to use a bunch of moved blocks. and those are based on the code from our module. So let's actually just grab the code.
>
> **[6:18](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=378)** And this will kind of give us a starter, sort of like we did with the variables. So we'll just highlight all of this and copy that, and then go over to moved, and we can just paste that in. Now, all we need are the names. So we can just delete all of this code for each of these. Again, if this isn't making sense, I think it will as you go through it. It's actually very straightforward. We have the names of the things that we want to move, and the syntax for the move block is just moved, and then curly braces. First, we say from. This is what we're moving from, what the current name is. So in this case, it would be module.blog underscore VPC. So that's what Terraform calls that resource. So we're moving it from there to somewhere, and the two is just going to be [module.dev](https://module.dev), because now we're splitting it out into the dev module, dot module.blog underscore VPC. And we just need to repeat that process for all of these. So let me just copy this block and we'll use it as a template. So let's see, we've got five, so 1, 2, 3, 4. And we'll delete that first line since we're
>
> **[7:51](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=471)** done with that one. So now we just need to change some of the values here. So we'll change this to SG, SG, and the third one will be ALB. And for the fourth one, let's get down to it. You can see it's slightly different because it's not a module, so let's just copy that we'll paste it in here and I'll just use that directly. That needs to be AWS underscore LB underscore target underscore group dot blog. We can just use the exact same thing here. So let me just paste it in again. This time it's just scoped to our module. So I hope that's making sense. We're really just telling Terraform where to find the things. And I just noticed I have more than I need. I think I might have skipped something. It looks like I don't have the ALB. So let's just put that in here. ALB, ALB. And the last one here is going to be our autoscaling group. Autoscaling. Okay, so we should have five. VPC, SG, the LB target group, blog ALB, and autoscaling. Okay, now that that change is done,
>
> **[9:26](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=566)** everything should be ready for us to actually run Terraform. So let's just close these files. We'll go over to our source control. And let's just say deploy dev environment. And you can see it's deleting the original files. It's creating these new files, so there's quite a few changes here. We'll commit and push. Now let's go over to Terraform. We'll go back to our workspace. And let's click into the run that just started. Now, if we've done everything right, it should say no changes. So let's just give it a second. And it looks like it worked. It says no changes. Your infrastructure matches the configuration. So Terraform was able to actually understand those moved blocks and use them to just update the state file. Once that finishes, make sure you don't forget to scroll down here and click Confirm and Apply. We still need to apply these changes in order for Terraform to update the state file. And while that's running, I'm just going to do one little cleanup task, go back to the files, click on Moved, and now we can just delete this. This is technically sort of optional Terraform will let you just leave this file in place, but I think it's a good habit to clean these up as soon as you've applied the changes. So we'll just call this cleanup.
>
> **[11:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=665)** And back in our Terraform run, we can see our apply finished. We should see another commit here for our cleanup. And again, this one should also say no changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (16)
> **CLI Commands:** terraform (16), make (7), aws (3), find (2)
> **Env Vars:** alb (9), dns (4), aws (3), vpc (3), url (1)
> **UI Navigation:** click on (4), scroll down (3), go to (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (2)
> **URLs:** [module.dev](https://module.dev) (1)
> **Exercise Files:** template (1)

#### [Deploying environments](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=0)** Now that our code is modular, it's trivially easy to deploy another environment. In [[Terraform]] Cloud, we can go back to our workspaces page. HashiCorp recommends creating additional workspaces for each environment of a given configuration. Let's set up a QA environment. In workspaces, go up to New and select Workspace. We'll select the default project, Click Create. We're going to use [[Version Control]] Workflow just like we did before, and we'll say [[GitHub]] App, and then we'll select our repository. You can add a description and some other things if you like. Let's go down to Advanced Options. Just like we did with the dev environment, we need to say where our QA environment will live, and that's going to be environments slash QA. This is just the directory within our repo. We'll scroll down to the bottom. Let's look at the top here. We're going to change the name, of course, to blog-qa, and the [[Representational State Transfer (REST)|rest]] of the defaults should be okay for what we're doing. So we'll click Create. Terraform Cloud has a helpful reminder here, which is that the variables we set up for our other environment actually aren't available in this one.
>
> **[1:32](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=92)** In order to get this to work with Terraform and actually provision things in AWS, we'll need to set up some environment variables. Let's click here, continue to Workspace Overview and then configure variables. We'll scroll down a little bit. We want to go down here and just say, add variable, and we want to use environment variable and you'll need the credentials for AWS. So the first thing we'll do is put in our name of this environment variable, the key for it, which is AWS underscore access key ID. And this one is not sensitive, so we can just paste that in the clear and say add variable. and then we'll also need one for the secret access key. Click Environment Variable, and the key here is actually the name of the variable, and this one is sensitive, so I'm going to click Sensitive. That'll hide it, and also means it won't show up on the screen right now, but it'll hide it in logs and things like that. There's a little tool tip here to explain that. So we'll say add variable. And that should be all we need to push changes out to AWS. There's also an option here to create variable sets that can be used across multiple workspaces. That's kind of out of the scope of this course.
>
> **[3:04](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=184)** But if you want to learn more about that, there's a link right here. So with those changes made, we're ready to make the changes we need to our code. So let's click on overview so that we're sitting at the right place here. We'll go to our code on [github.dev](https://github.dev). Now, the first thing we'll want to do is actually make a couple of changes to our module. Click into main. Now, one thing about our module is it can only work actually right now to have a single environment deployed because a lot of the names will conflict with each other if we deploy two of the same thing. So, for example, with the VPC, we're using the environment name so there's no conflict there. So one will be called dev and one will be called QA. But if we look at the names of some of the other resources, we just called them something like blog. So we just need to add in here a dollar sign, curly brace, and then var.environment.name and then closing curly brace and a dash. I'm just going to copy that and paste it down on some of these other ones. So here under the ALB we can do the same thing. So we could just copy this and I'll paste it in down here. And then we'll just go through all the modules
>
> **[4:38](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=278)** and all the resources and add those names that way. So, we need to add it to our target group and our auto scaling.
>
> **[4:52](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=292)** We should also add it to the launch template, just to keep things clear here. And we'll want to put it here in our traffic source attachments. And that should be all we need to do. So let's save that. So now our module is ready to actually deploy more than one environment. To set up our second environment, we just go up to our environments directory, create a new sub-directory, and we'll call this one QA. And we'll just copy the contents of these to start with. So copy the text, create a new file in QA, call this one main.tf. And we'll paste our code in there. Okay, and let's make sure we change the name here to be QA. And we'll change some of the settings in a second, but let's just get the code copied over. So create another new file here, and that one's called providers.tf. And we'll just, again, copy the code and paste that in for this environment. Okay. Now, under main, for our QA environment, we want to set some of the variables here. So let's look at our available variables. Instance type, AMI filter, those should be the same.
>
> **[6:24](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=384)** We want to set the environment, which has a name parameter and a network prefix parameter. And then we could probably set min-size and max-size, too. So let's set environment equals, and we'll say name equals QA, and network underscore prefix equals. The other one was 10.0, so let's call this 10.1. So those will be on totally separate subnets then. And let's just set a min size and max size. We'll set them both to one. You can also set these to zero if you'd just like to set this up without actually provisioning any instances. I'm gonna set it to one just so we can see that full process. But if you wanna save a little money on your testing here and not pay AWS for these, just set it to zero. All right, let's save that change. And let's add one more file here. Let's actually add an outputs.tf, and this will be how we can see the URL. We'll say output, and we'll just name this one environment underscore URL, and we'll say value equals, we just get this from the module, so it's module.qa.environmenturl,
>
> **[7:59](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=479)** so we can just pass through the value that we set up for the module. And we could do the same thing in dev, but let's just do this here for now. So we'll save that. And that should be all we need to change. So let's go over to our source control and we'll say, deploy QA and say, commit and push. And then we can go over to Terraform Cloud. and it might take a minute for this to show up. On the first run, sometimes you have to do this manually. Let's click over to runs and see if it picks it up. I've noticed that sometimes you have to trigger the first plan manually, so we'll just give it a second. Okay, let's just click new run and start. So what's our error here? Oh, it looks like we just have a typo. Okay, it's a little confused about the way we're doing the auto scaling group, so let's just fix that small issue. I think in this case we can just use quotes here. Let's see if that works. Now let's look at that error again. Am I doing that in the right place? Line 95. Yeah. All right, let's save that, see if that fixes it. ALB name, and we'll commit and push that change.
>
> **[9:38](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=578)** Let's go back to Terraform Cloud. This time it looks like it did pick up the plan. Let's look in there. It looks like that worked this time. You can see we got 42 resources, which is what we were creating in the dev environment. If you like, you can apply this, but we're actually not going to really do anything with this after this, but I'll go ahead and run it and then we can see the result. I'll say confirm and apply, confirm plan. This should take a little while because there's quite a bit that it's creating. Once your apply has finished, you can go ahead and scroll down to outputs. I just scrolled down to the bottom of our page here. see everything deployed successfully in QA. Let's go ahead and open up this URL and see if we can see that default page. So I'll just say open link in a new tab. Here's that default Apache Tomcat page, it's running on our second environment. If you like, you can go through and do the same thing, set up say a prod environment. You might also want to go in and add the outputs here in your code, so that Dev also outputs its URL. We're at the end of the course here, so I'm not going to walk through that, but I'd encourage you to try it, just play around a little bit with the way to work with environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[GitHub]] (2), [[Version Control]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** terraform (5), aws (5), make (3), apache (1)
> **Env Vars:** aws (5), url (4), alb (2), vpc (1), ami (1)
> **Prerequisites:** set up (6), configure (1), you'll need (1)
> **UI Navigation:** scroll down (3), select the (1), click on (1), go to (1)
> **Analogies:** just like (3), for example (1)
> **Versions:** 10.0 (1), 10.1 (1)
> **Cross-References:** go back to (2)

#### [Cleaning up: Terraform destroy](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=0)** Since we're working with real Cloud resources, we should be sure to clean up to avoid paying for AWS resources that aren't being used. The great thing about [[Terraform]] is that we can freely delete all of the infrastructure we've defined and still deploy it later from the same code. You'll be able to come back to this code if you like and start again. To delete our Dev environment, let's click on ''Blog Dev'' and go to ''Settings''. and scroll down here to Destruction and Deletion. You want to make sure Allow Destroy Plans is checked, and we'll go ahead and click Queue Destroy Plan. It says enter the workspace name to confirm. We just type in blog-dev Queue Destroy Plan. That'll start a Destroy Plan going, but in this case, we've actually got another plan queued up. That's just from the last time we pushed a Terraform. Let's go ahead and discard that one and just say, discard that and run this now. It's saying the workspace is locked. That's because we are currently in the middle of a Terraform run. It tried to run Terraform and it's waiting for us to confirm. So we can go ahead and say unlock because we're not going to do anything else in this environment. So while this is running, there's one little thing we'll need to take care of in our particular case. we'll go over to our console and click on [[Amazon EC2|EC2]]. Now, the way the module is set up for setting
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=93)** up the ALB, it actually puts deletion protection on the ALB. We could change the parameter for that and then push again, but it's easy enough to just go in and manually remove deletion protection. We can go to load balancers here under resources or on the left-hand side, You can also find load balancers, and let's go ahead and change it for both of them. So click on both of these, which I think we need to do this one at a time. So let's do start with blog ALB, and we will say edit load balancer attributes, scroll down, and here it's deletion protection. We'll just uncheck that. If you leave that checked, Terraform is going to have a hard time deleting it. It's not going to be able to do it, and it will fail in a kind of confusing and difficult way. So we'll say save changes. Go back to load balancers and we'll do the same thing for our other ALB.
>
> **[2:39](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=159)** Okay that's all we should need to do in order to actually apply Terraform to delete. So let's So let's go back to our run. We see the plan is finished now. And it just says 42 to destroy. It's just going to delete everything. So let's go ahead and go to the bottom here. And we'll say confirm and apply, confirm plan. And we'll go ahead and let that run. And while that's running, let's get a deletion queued up for our other environment as well. So we'll hop over to blog QA. And here is where we just pushed it out. We'll go to settings, destruction and deletion, and we'll do the same thing, Q destroy plan. And in this case, we'll type blog-QA. Okay, and we'll get that plan going. Let's go back to our other environment. So workspaces, blog dev, and we click on this latest run, and it should be going through. This can kind of take a while, especially when it's deleting a VPC. So, it can be a little bit slow. And sometimes, for whatever reason, maybe something won't quite delete or Terraform will timeout. And in those cases, you can rerun this. Or actually, sometimes the simpler way, especially in a small stack like this, is to just go into the EC2 AWS console and manually delete the things. Sometimes there will be things deleted out of order
>
> **[4:11](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=251)** and Terraform will get a little bit confused. But let's go ahead and see if it manages to do this on its own. Okay, and it looks like our run has completed. And because we went ahead and removed that deletion protection, Terraform didn't have any trouble. So that's our blog environment gone, our dev environment gone. Let's go back to workspaces. And QA should be ready to apply at this point. So we'll click into that. Click into our run. And again, it's finished its plan. It's just waiting on us to confirm and apply. So we'll do that. And while we're waiting for that, let's go back to EC2. And we could actually watch some of these things being deleted. So we'll click into our load balancer. See there, our QA, our dev environment is gone. By the way, if you're not seeing your resources here, Make sure up in the upper right hand corner here to click down and choose the right region. So if you're in US East 1, whatever you chose when you configured your environment. I'm in US West 2, so everything's showing up where it should. All right, let's refresh. That looks like maybe our ALB has been deleted. Let's give that a second. Taking a little bit of time. Let's see if our instance is still up. We can see our instances are listed here, but one is listed as terminated and one is still shutting down. And if we refresh, that might take a couple of minutes, let's go back to Terraform.
>
> **[5:47](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=347)** So it's a little more than halfway through, almost done, about 12 things left. And that's our other environment done. So it looks like everything should be cleaned up now, I'm just going to look in AWS. It can be especially expensive if you leave instances running. just double check this. You wouldn't want to get a bill for something that you're not using. So instances, make sure those are cleaned up. Load balancers, this should come up empty. The page is being a little slow for me right now. But I think we're good. If you'd like, you could also go in here to your workspaces and delete the individual workspaces. So for that, let's click on QA and go to Settings, and then Destruction and Deletion, and here you can actually delete the workspace itself, but that's optional. As long as there's nothing provisioned, this shouldn't cost you anything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (10), [[Amazon EC2|Ec2]] (3)
> **CLI Commands:** terraform (10), aws (3), make (3), find (1)
> **Env Vars:** alb (5), aws (3), ec2 (3), vpc (1)
> **UI Navigation:** click on (5), go to (5), scroll down (2)
> **Cross-References:** go back to (6)
> **Tools:** aws console (1)
> **Prerequisites:** set up (1)

#### [Terraform CLI](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=0)** - [Instructor] We've used [[Terraform]] Cloud in this course so that we could get up and running quickly. However, nearly all the functionality that we've used could be duplicated using the open-source command line tool instead. We're going to take a quick look in this video at some of the features on how to duplicate some of that functionality. One thing we need to be aware of is that Terraform Cloud has managed collaboration for us and managed the backend for us. So in order to use Terraform in the command line, we need to set something up as a backend. Otherwise we won't be able to collaborate without undoing each other's changes, if you're working on a team. So let's take a look at the documentation just to see what the options are for this. One of them, if you read here, is actually, to integrate with Terraform Cloud. Which I could see some uses for, but it's not really what I'm trying to highlight in this video. There's always a local backend available by default which won't handle any resource contention but it will work if you're working individually. And then there are a lot of available backends, if you look on the left hand menu here. The two I want to highlight are Consul which is another HashiCorp product that's open-source. And if you have Consul set up, I think it's pretty straightforward to set up your backend using Consul. The other pretty simple one is S3 which is Amazon's simple storage option. And here you can see it's pretty straightforward configuration as well.
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=93)** You also need to set up permissions. So if you're familiar with Amazon, this isn't too tricky. Let's look at the command line tool a little bit and just see what some of the differences and options are. And one thing I want to highlight is terraform -help. And then using a pipe and then the less command, just to make this a little easier to read. The help features of the command line Terraform tool are really good. And there's a lot of detail that you can get into by digging into sub-commands. So this is the high-level of what commands are available. And some of these are pretty familiar like plan and apply. And then some other ones, we should be using like destroy, if you cleaned up your infrastructure after finishing the exercises, make sure to destroy everything. Init is just what runs at the beginning to start your Terraform which Terraform Cloud did for us. Validate has been running on a Terraform code but it just doesn't show up in the Cloud UI. Let's look at how the deeper level of help works. So if we run terraform plan -help. You can see there's a very detailed explanation. There's also a short usage definition up here. And then detailed documentation about what the options are. Terraform has great online documentation but the built-in documentation is extremely handy, especially if you're right in the middle of something and don't want to switch tasks.
>
> **[3:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=188)** Let's run Terraform plan and see how that looks on the command line. I'm working a local copy of the repository. It's the same code we've been working with, just kind of set at the middle of the course. It actually runs pretty quickly. And here you can see, it's very similar but I find it a little bit harder to read than the web interface. So at this point, it's just adding a security group. This is when we're working with the module. There's a note here also that you can output this to a text file, if you like. I won't run apply because it's essentially the same output. Let me clear this screen here. There's another command, Terraform graph that I want to highlight. (keys clacking) Terraform graph will actually let you see a visual representation of your Terraform code. And it won't show it to you in the terminal, you'll need to load it into a program like graph is or there's a web-based solution you can use. So, let's look at an example from the documentation. This is the kind of output that graph is will show from the file generator from Terraform graph. It's a little bit confusing but the thing to pay attention to is that we have our different resources connected together, all pointing toward our provider. But that there's also some intelligence in the way that the things are ordered. And that's to make sure that we have our dependencies right. So for example, you wouldn't want to create your instance
>
> **[4:44](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=284)** before the VPC was defined. Terraform would have an error then because it wouldn't be able to use that VPC. So it needs to do a little bit of work to figure out what order things happening. And looking at the graph, can help you figure out problems with that. Sometimes there are issues that Terraform just can't figure out and you need to actually, manually specify some ordering. I also just find it somewhat insightful to kind of get a view into Terraform's brain, so to speak. It shows you what's going on inside the application, in a way that just, is not obvious when it's presented in a linear format. There are some features of the command line tool that aren't really directly replicated in the cloud tool, at least not yet. And one I want to highlight is Terraform state. So, if we look in our repo again and run terraform state, gives us the help output by default because it requires the sub-command. So one of them is list and this is for investigating our state file. So, we'll run terraform state list. And the output to this is the actual state of our infrastructure at this point, at least as far as Terraform is concerned. So, this is what it thinks we have. If we wanted to, we could investigate these further. So let's do terraform state show and then we'll use our aws instance. So here, we can dig into the very detailed output. This is everything Terraform knows about this instance.
>
> **[6:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=379)** So things like subnet, its IP address. There are some pretty powerful things you can do here. For example, if we had another instance running and we wanted to import it into our state, even if it wasn't created by Terraform, we could do that here. But then, as soon as you run Terraform, it will say it's going to delete that instance because there's no code associated with it. That can be used as a little bit of a trick for quickly developing code for existing resources. So you manually provision something in AWS and then import it and run Terraform to find out what it'll delete and that's your starting place for your code. Let's look at the help one more time. Because there are a couple of commands that we haven't really talked about. There is a command here, taint, which is to mark a resource instance as not fully functional. Tainting is a way of telling Terraform that it needs to recreate an instance. Let's look at the help page for the taint command. So, there's some more detailed explanation here. But taint is a command you can use to tell Terraform to reprovision a resource that isn't working quite right. And it might be that the state seems to be correct. So from Terraform's point of view, everything's working but maybe something internally has failed on the resource. So, we can try it on our instance that we just provisioned. So we'll say terraform taint aws instance.blog
>
> **[7:59](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=479)** and it says it's been marked as tainted. And then if we run terraform apply, we should see it saying, it's going to delete and reprovision. So we see here, it says one to destroy and one to add. And we can scroll up. There's a lot of changes that show up in this view. But what it boils down to is that it's replacing that one instance. Yeah, here we go. It's tainted and must be replaced. So, let's say yes to this. And there, it's recreated our instance. There's also the option to untaint something if it's been marked as tainted and actually doesn't need to be reprovision. So those are some of the basic commands and a little bit of a view into some of the more advanced functions of Terraform. As I said, the command line tool is fully functional and really can duplicate pretty much everything we did in the Cloud Consul. It's just that the interface is a little bit different and maybe a little bit more difficult to get started with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (34)
> **CLI Commands:** terraform (34), make (3), find (3), aws (3)
> **Tools:** command line (7), terminal (1)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (3), you'll need (1)
> **Env Vars:** vpc (2), aws (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=0)** - [Instructor] This course is meant as a very basic introduction. Let's look at some of the next steps on your journey learning [[Terraform]]. When I first started working with Terraform, there weren't really many good modules available. But in the last few years, the Terraform Registry has become an incredible resource. Before you start any Terraform-related project, I'd recommend looking at the registry to see if someone else has already solved the problem. Even if you don't use the module, you can often get a good starting place for how you want to create your own. Unlike your application code, your infrastructure is probably substantially similar to a lot of others. If you can't find what you need in the registry, you can often find a great starting point by searching the web and looking at examples from blogs or Stack Exchange. As Picasso said, "Good artists copy. Great artists steal." Terraform has some of the best documentation I've ever encountered so even though this is an obvious suggestion, I'd highly recommend you look at the official documentation. The other piece of that is just to realize that Terraform is very domain specific, so at least for me it isn't worth trying to memorize every parameter or every nuance of syntax. As you work, just keep the documentation open and use a lot of copy and paste. The docs also include some very detailed examples, which can often be used with pretty minimal adjustment. I was once complaining to a friend about a tricky project I was working on. He was a former camp counselor and he gave me the advice
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=93)** he used to give to his campers who didn't want to do something. He said, "If you can't get out of it, get into it." When you first start learning Terraform, you might think you'll be able to get out of having to learn the nuances of AWS or whatever cloud provider you're using. Terraform does smooth over some of the rough edges of AWS but ultimately there's no replacement for learning how the stack itself works. I find this is especially true for some of the more confusing and quirky aspects like the way load balancers and auto-scaling work together. So my advice is that you get into the details of your cloud provider by checking out the courses in the [[LinkedIn]] Library. Since you've got a solid base in Terraform, you could even work your way through the exercises of an AWS or [[Microsoft Azure|Azure]] course just by writing the Terraform code. I think I say this in all my courses but the best way to learn is to explore, try things out, and just have fun. I still find it a bit thrilling to be able to instantly deploy a complex infrastructure in just a few keystrokes. I hope this course has given you a little taste of just how powerful Terraform can be and inspired you to start exploring more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (11), [[LinkedIn]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** terraform (11), find (4), aws (3)
> **Env Vars:** aws (3)
> **Documentation:** the documentation (1), the docs (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Josh Samuelson]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-terraform-3087701)

## Skills Covered

- Terraform

## Path Context

### In [[Infrastructure as Code with Terraform]]
← [[DevOps Foundations- Infrastructure as Code]] | **2 of 3** | [[Advanced Terraform]] →

## Appears In

- [[Infrastructure as Code with Terraform]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Terraform]] — Terraform
- [[Terraform- Managing Network Infrastructure]] — Terraform

---

[↑ Back to top](#)