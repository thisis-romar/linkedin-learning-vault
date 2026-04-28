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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Learning%20Terraform.md)

![Learning Terraform](https://media.licdn.com/dms/image/v2/C560DAQHxgeea4RepGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666200700025?e=2147483647&amp;v=beta&amp;t=OrjMwXJjQOkfLe2WqCtJ1qfKPLib5_U1ws5FPeCgpYg)

# Learning Terraform

> Terraform is a DevOps tool for declarative infrastructure—infrastructure as code. It simplifies and accelerates the configuration of cloud-based environments. In this course, instructor Josh Samuelson shows how to use Terraform to configure infrastructure and manage resources with Amazon Web Services (AWS). After demonstrating how to set up AWS for Terraform, Josh covers how Terraform manages your

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129) | 2h 28m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. First Steps with Terraform** (4 videos)
- **3. 2. Terraform in Action** (6 videos)
- **4. 3. Infrastructure as Code** (7 videos)
- **5. 4. Advanced Topics** (8 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Learn Terraform for your cloud infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=0)** - [Josh] Terraform is a powerful tool for defining, deploying, and managing cloud infrastructure.
>
> **[0:06](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=6)** In this course, we'll focus on hands-on work, spinning up resources in Amazon AWS, and iterating on our code as we go.
>
> **[0:14](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=14)** By the end, we'll have built a fully-functional Terraform module without glossing over any steps in the process, and we'll use it to deploy multiple infrastructure environments.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=26)** My name is Josh Samuelson.
>
> **[0:27](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=27)** I'm a lead software engineer at Dropbox.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=30)** Terraform is a big part of my work, and it has transformed my approach to working with the cloud.
>
> **[0:36](https://www.linkedin.com/learning/learning-terraform-15575129/learn-terraform-for-your-cloud-infrastructure?u=76281980&t=36)** I'm excited for you to experience that same transformation, so let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (3), aws (1)
> **Code Keywords:** module (1), let (1)
> **Definitions:** is a  (2)
> **Env Vars:** aws (1)
> **Speakers:** - [josh] (1)

#### What you need
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=0)** - [Instructor] Before we get started, let's cover what you'll need and what you'll need to know before starting this course.
>
> **[0:07](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=7)** To keep things focused on Terraform itself, all of the exercises for this course will take place in a web browser using cloud-based services, so there's no need for a powerful workstation.
>
> **[0:20](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=20)** Although we'll be using GitHub in this course for editing and managing Terraform code, we'll be sticking to the most basic features, so you don't really need to know Git to follow along.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=30)** Terraform works on many different cloud platforms.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=34)** For the exercises in this course, we'll just use Amazon AWS, so you'll need an AWS account.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=40)** And we may incur some charges beyond the free tier.
>
> **[0:45](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=45)** It's unlikely that it will be more than a few dollars worth, and that's only if you let things run for a long time.
>
> **[0:51](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=51)** You certainly don't need to be an AWS expert to be successful in this course, but ideally, you'll have some familiarity with different types of AWS resources and how to work with it.
>
> **[1:03](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=63)** If you're very experienced with another platform, like Google Cloud or Azure, you'll probably be fine, as well, if you're willing to do a little mental translation between different resources.
>
> **[1:15](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=75)** Since this course is about Terraform itself, we're not actually going to be doing much with the systems and infrastructure that we set up.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=82)** That means you don't really need to be an expert in managing servers for this course.
>
> **[1:27](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=87)** You should know the basics of how to work in Windows or Linux.
>
> **[1:31](https://www.linkedin.com/learning/learning-terraform-15575129/what-you-need?u=76281980&t=91)** And we'll get into some basic networking concepts, so you'll need familiarity there as well.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (4), aws (4), git (1)
> **Prerequisites:** you'll need (4), set up (1)
> **Env Vars:** aws (4)
> **Code Keywords:** let (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 2. 1. First Steps with Terraform

#### What is Terraform?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=0)** - [Instructor] I'm guessing you already have some idea what Terraform is, but let's review.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=5)** Terraform is an infrastructure management tool made by HashiCorp, that lets you provision, manage, and maintain cloud resources, servers, networking, storage, etcetera, all in one centralized set of code.
>
> **[0:22](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=22)** So Terraform is a tool, a command line program, and a cloud-based application you run to define and make changes to your infrastructure, but Terraform is also a language that defines those changes.
>
> **[0:37](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=37)** Terraform is for managing the base infrastructure itself.
>
> **[0:41](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=41)** For example, creating a server instance, and placing it behind a load balancer.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=47)** Terraform can't really change what's running on that server once it's deployed, for that, you'll need a config management tool.
>
> **[0:56](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=56)** So Terraform will create the server, and then you might use something like Puppet to turn that server into a web server with your specific application code running on it.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=66)** You might think of Terraform as setting up a blank canvas, but you still need other tools to paint the picture.
>
> **[1:14](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=74)** It's possible to run a tool like Puppet on a system using a Terraform feature called provisioners, but we are intentionally not covering them in this course.
>
> **[1:23](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=83)** The official Terraform docs describe provisioners as a last resort, and I agree, although I can see how they could be amazingly powerful if you're already using config management.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=95)** So if we won't use config management, what's our other option?
>
> **[1:40](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=100)** Terraform is really well suited to deploy pre-made server images, where all the configuration is already set.
>
> **[1:49](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=109)** You'll still need to create your base image, and there's another great HashiCorp tool for that called Packer.
>
> **[1:56](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=116)** If you've set things up correctly with a load balancer, and an application that can tolerate cycling server instances, you can use Terraform to maintain and update systems by destroying and replacing them with new instances.
>
> **[2:11](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=131)** The purest form of this is called immutable infrastructure, where system discs are actually read only, config and software can only be updated by replacing the instance.
>
> **[2:22](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=142)** Even if you don't go to that extreme, being able to freely throw away and replace any instance is a total game changer.
>
> **[2:30](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=150)** For me, that leap has drastically reduced my background anxiety around site stability and on call shifts.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=158)** Finally, we get to containers.
>
> **[2:40](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=160)** Terraform is able to manage these, but it's beyond the scope of what we'll cover in this course.
>
> **[2:46](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=166)** Terraform is able to work directly with Docker and Kubernetes offering a couple of approaches for container based workloads.
>
> **[2:54](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=174)** That support for Kubernetes could even be paired with Amazon's Kubernetes Service, or another cloud provider.
>
> **[3:01](https://www.linkedin.com/learning/learning-terraform-15575129/what-is-terraform?u=76281980&t=181)** You could even use Terraform to provision a Kubernetes cluster on a cloud provider, and then use the Terraform Kubernetes provider to provision resources in that cluster.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (16), make (1), docker (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Code Keywords:** let (1), throw (1), finally, (1)
> **Analogies:** for example (1), picture (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Your Terraform code repo
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=0)** - [Instructor] In this lesson, we'll be setting up a GitHub Repo that will hold our Terraform code.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=5)** There's a great introductory course on LinkedIn Learning for how to use GitHub for exercise files.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=10)** We won't be using advanced GitHub features, so even if you've never used it, you should still be able to follow along.
>
> **[0:17](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=17)** To get started, there should be a link under the video you're watching now that says Get Files.
>
> **[0:22](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=22)** It'll look like this.
>
> **[0:23](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=23)** And I'll illustrate using this exercise files course.
>
> **[0:27](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=27)** So you click on the link, then you go up here to Fork, and you set yourself as the owner, set the repository name.
>
> **[0:41](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=41)** And for this course, you actually want to uncheck that box, 'cause we want to copy all the branches for our course.
>
> **[0:48](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=48)** I'm not going to create this fork 'cause I've already created one.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=53)** This is about what our repository will look like for this course.
>
> **[0:57](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=57)** There's a main branch here, and there's a branch for each of the different lessons, and each of these will contain the solutions for that particular lesson.
>
> **[1:07](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=67)** If you find yourself stuck at any point or running into a bug, you can take a look at the branch for that particular lesson.
>
> **[1:15](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=75)** So let's take a look a little later in the course.
>
> **[1:21](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=81)** You can see, there's a lot in this file.
>
> **[1:26](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=86)** If we switch back to Main, which is where we're going to start, there's not much in here.
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=93)** There's also a branch for the start and end of the course.
>
> **[1:39](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=99)** And as we go through the lessons, we'll be updating the Main branch, because that's what Terraform is going to look at.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/your-terraform-code-repo?u=76281980&t=105)** If there are any discrepancies between what I show on screen and what's in the repository, you should trust the repository, because there may have been some fixes or changes that haven't yet made it into the videos.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (2), find (1)
> **Code Keywords:** this. (1), let (1), switch (1)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), github repo (1)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Setting up AWS for Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=0)** - [Instructor] We'll need to set up an AWS account for use with Terraform.
>
> **[0:03](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=3)** I'm going to move quickly through this since this course is primarily focused on Terraform and not on AWS.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=10)** If you'd like more depth on AWS itself, there is a lot of good content in the LinkedIn Learning Library.
>
> **[0:17](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=17)** I'm going to assume you've already got an AWS account.
>
> **[0:20](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=20)** If you don't, just pause the video and go to aws.[amazon.com](https://amazon.com) and go through the sign-up steps.
>
> **[0:27](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=27)** It's fairly straightforward.
>
> **[0:29](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=29)** Then log into your AWS account and go to the search bar at the top and type IAM.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=40)** And then click on IAM that comes up here under Services.
>
> **[0:45](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=45)** We're going to be creating a user with credentials that Terraform can use.
>
> **[0:50](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=50)** So click on Users and then Add users.
>
> **[0:58](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=58)** So we can name our user terraform, and make sure you leave this box unchecked.
>
> **[1:05](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=65)** We won't need access to the AWS Console.
>
> **[1:08](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=68)** This will just be a programmatic user.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=72)** So we'll click Next.
>
> **[1:14](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=74)** Now, we'll need to grant permissions to our users so that they're able to do things.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=79)** To keep us from getting too bogged down in AWS, we're going to just give this user full administrator access.
>
> **[1:24](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=84)** Obviously, this isn't a great security practice, so make sure to delete this user when you're done with this course.
>
> **[1:31](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=91)** If you're very familiar with AWS, you can look into the proper permissions to set up for this user, but Terraform really needs pretty close to full admin access.
>
> **[1:41](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=101)** We'll click on Attach policies directly and scroll down and say AdministratorAccess.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=108)** Right now, it's the second choice here.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=111)** And scroll to the bottom and click Next.
>
> **[1:55](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=115)** And on this page for Review and create, just double check everything you've set.
>
> **[2:00](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=120)** Go down to the bottom and click Create user.
>
> **[2:03](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=123)** So at the top, you should see this banner that says, "User created successfully."
>
> **[2:07](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=127)** And you can go to View user here, this button on the right, or you can open your user just by selecting them from the list.
>
> **[2:15](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=135)** The last thing we'll need to do is generate credentials for Terraform to use.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=140)** So we'll scroll down to Security credentials.
>
> **[2:23](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=143)** It's this tab here.
>
> **[2:26](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=146)** And we want to add access keys.
>
> **[2:29](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=149)** So you'll need to scroll down a little bit for that.
>
> **[2:31](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=151)** Click Create access key, and this page is just Amazon's way of suggesting some alternatives based on your use case.
>
> **[2:41](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=161)** So we can take a look at this.
>
> **[2:43](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=163)** If we click Third-party service, which is the closest choice that matches what we're doing, and then scroll down to the bottom, they have a link and a recommendation for an alternative method.
>
> **[2:53](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=173)** We're not going to do this in this course, but if you're going to use Terraform in production, I would recommend exploring this.
>
> **[2:59](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=179)** There are ways you can use some temporary credentials and generate them dynamically.
>
> **[3:04](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=184)** That's much more secure than what we're going to do for learning purposes.
>
> **[3:08](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=188)** So if you're interested in that, follow this link.
>
> **[3:11](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=191)** There are also some tutorials and documentation on the Terraform side about how to set that up.
>
> **[3:16](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=196)** But for us, we're just going to click this confirmation that say we understand the risk and click Next.
>
> **[3:24](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=204)** We don't need a tag, so we can Click create access key.
>
> **[3:29](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=209)** As you see, there is a banner at the top of the screen here, and one thing that it says is that this is the only time that this secret access key can be viewed or downloaded.
>
> **[3:38](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=218)** You can't recover it.
>
> **[3:39](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=219)** So if you don't save it from this page, you'll have to delete it and regenerate it.
>
> **[3:44](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=224)** What I like to do instead of trying to copy and paste this is to just say, "Download .csv file," and then I'll save that CSV file to my hard drive.
>
> **[3:52](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=232)** And then once I have it in the place I need I'll delete the original CSV.
>
> **[3:57](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=237)** It's important to realize that these are full administrator credentials to your AWS account, so you should treat them like you would the username and password to your bank.
>
> **[4:07](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=247)** Even if you don't have sensitive data in this account, a malicious person could rack up a huge bill mining cryptocurrency or do other malicious things with your account that you might be held responsible for.
>
> **[4:19](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=259)** So just be very careful with these credentials.
>
> **[4:22](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=262)** And that's about it for now.
>
> **[4:24](https://www.linkedin.com/learning/learning-terraform-15575129/setting-up-aws-for-terraform-19299605?u=76281980&t=264)** When we get into our initial Terraform Code setup, we'll get a chance to test out these credentials.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (10), terraform (9), make (2)
> **Env Vars:** aws (9), iam (2), csv (2)
> **UI Navigation:** scroll down (4), go to (3), click on (3)
> **Code Keywords:** delete (3), this. (2), case. (1), for. (1)
> **Prerequisites:** set up (2), you'll need (1), setup (1)
> **Definitions:** is a  (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Tools:** aws console (1)

#### Terraform Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=0)** - [Instructor] The command line Terraform is very powerful, open source and available for free.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=5)** For this course, we'll be using the cloud-based version of Terraform instead.
>
> **[0:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=9)** It's a bit more user-friendly and has a few features that will make it helpful as a learning tool.
>
> **[0:15](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=15)** I'd highly recommend starting with Terraform Cloud while you're learning Terraform, even if you ultimately plan on using the open source command line version.
>
> **[0:25](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=25)** To get started, we'll need to set up a free Terraform Cloud account.
>
> **[0:29](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=29)** Just go to [terraform.io](https://terraform.io) and click Try Terraform Cloud.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=34)** The website may change, so be sure you're not signing up for a free trial of a paid version.
>
> **[0:39](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=39)** You can double check that by looking at the pricing page.
>
> **[0:44](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=44)** Now I've already logged in, but you can set up this account using your GitHub credentials or there are a few other options.
>
> **[0:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=52)** The first thing we'll do is set up an organization.
>
> **[0:55](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=55)** And in this page there's a little wizard for setting up a workflow.
>
> **[1:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=60)** We're actually going to just scroll down to create new organization and we want the one that says, start with a blank slate.
>
> **[1:07](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=67)** I'm going to give my organization a name.
>
> **[1:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=69)** This is just whatever you'd like.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=72)** And I have my correct email in here.
>
> **[1:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=73)** So I'll just click create organization.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=76)** Now we're ready to set up our workspace and the first thing we need to pick is our workflow.
>
> **[1:21](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=81)** In our case, we'll be using the version control workflow.
>
> **[1:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=84)** So I'll click this at the top of the list and we need to connect to GitHub which is our version control provider.
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=93)** There are a few other options here and if you're interested, I'd recommend checking them out after you're done with the course.
>
> **[1:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=98)** They won't be supported for this course.
>
> **[1:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=101)** So click the dropdown next to GitHub and choose [github.com](https://github.com).
>
> **[1:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=106)** If you have a popup blocker installed, you might get some notifications about popups being blocked.
>
> **[1:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=113)** I've got a popup window that popped up on my other screen and so I need to authorize Terraform Cloud to access my GitHub account.
>
> **[2:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=126)** And then I've got another popup here, which is asking me where I want to install the Terraform Cloud application.
>
> **[2:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=134)** If you have a work organization associated with your GitHub account, you might see this too.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=140)** So I'll select my personal account and I'm only going to install this on the repository for this course.
>
> **[2:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=146)** It'll just make it a little easier to see.
>
> **[2:28](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=148)** So I'll just search for Terraform and select the repo for this course and click install.
>
> **[2:40](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=160)** So the next tab here, we choose a repository.
>
> **[2:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=163)** And since we limited our account to only allow access to our one repository, that's the only one that'll show up in this list.
>
> **[2:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=171)** So we'll select that.
>
> **[2:54](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=174)** And for the workspace name, I'm just going to clean it up and only use Learning Terraform.
>
> **[3:03](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=183)** And then I'll click Create Workspace.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=192)** And once that workspace is created, we'll need to set up some variables so that Terraform will be able to connect to AWS.
>
> **[3:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=202)** So on the main page here, it actually says no variables found.
>
> **[3:25](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=205)** So let's click on this link, continue to workspace overview, and we'll say configure variables.
>
> **[3:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=218)** And in this case, let's set them up using sensitive variables.
>
> **[3:42](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=222)** If you read the description here, sensitive variables are secure in that they won't be printed into the console, so we'll say add variable.
>
> **[3:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=232)** And we want to choose environment variables.
>
> **[3:57](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=237)** The key is AWS_ACCESS_KEY_ID
>
> **[4:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=245)** and these should be in all caps.
>
> **[4:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=248)** And then for this one, you can paste in the value of your AWS access key.
>
> **[4:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=253)** This isn't actually something that's sensitive, so you can choose if you want to use the sensitive checkbox here or not.
>
> **[4:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=262)** In my case, I will check it and I'll just copy from off screen and paste this in and say add variable.
>
> **[4:39](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=279)** And then we'll add another variable.
>
> **[4:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=281)** In this case, the name is AWS_SECRET_ACCESS_KEY.
>
> **[4:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=292)** And I'll copy that, mark this sensitive and paste it in.
>
> **[5:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=300)** And I need to make sure this is an environment variable.
>
> **[5:04](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=304)** Editors, please blur this as well.
>
> **[5:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=308)** So then I can just say add variable for that.
>
> **[5:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=312)** Just to reiterate, marking it as sensitive will make it so that it doesn't get printed in logs and things like that.
>
> **[5:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=317)** It keeps it a little bit more secure in the UI.
>
> **[5:21](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=321)** If you run into errors later about not having access or AWS provider errors, it's probably 'cause of a problem with this step.
>
> **[5:29](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=329)** So you might want to go back and double check this.
>
> **[5:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cloud-19802056?u=76281980&t=332)** That's all we need to do to be set up for Terraform to manage our AWS Cloud infrastructure.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (13), make (4), aws (4)
> **Prerequisites:** set up (5), install (3), configure (1)
> **Code Keywords:** case, (4), let (2), continue (1), this. (1)
> **Tools:** github (6), command line (2)
> **Env Vars:** aws (4), aws_access_key_id (1), aws_secret_access_key (1)
> **UI Navigation:** go to (1), scroll down (1), dropdown (1), select the (1), click on (1)
> **URLs:** [terraform.io](https://terraform.io) (1), [github.com](https://github.com) (1)
> **Definitions:** is an  (1)


### 3. 2. Terraform in Action

#### Terraform plan
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=0)** - [Instructor] Before we talk about theory, we're going to jump right in and see Terraform in action by doing a Terraform run.
>
> **[0:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=6)** To get started with our first Terraform run, we'll need to trigger a Terraform plan.
>
> **[0:11](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=11)** So from your workspace, click on overview and scroll down here to start a new plan.
>
> **[0:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=19)** This will take us to the runs tab, and you can see here it says plan queued.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=24)** Usually pretty quickly, it'll initiate the run.
>
> **[0:28](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=28)** And once that's complete, we can see what is represented by our starter code.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=34)** We can see it says it's going to create something here.
>
> **[0:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=38)** Going to open up this upper tab and get a little more detail.
>
> **[0:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=41)** And if you want to look at the code, you can click the link and that'll take you to the code.
>
> **[0:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=46)** At the top of our plan tab, there's a note here.
>
> **[0:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=48)** It says resources, one to add, zero to change, zero to destroy.
>
> **[0:54](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=54)** And we can go down here to see what it's actually creating.
>
> **[0:57](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=57)** There's two items.
>
> **[0:59](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=59)** The first one is, it says aws_instance.web.
>
> **[1:03](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=63)** So if we open up the dropdown, this is an AWS virtual server or an EC2 instance, as it's called.
>
> **[1:11](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=71)** There are some details spelled out here, like AMI and get_password_data false, but most of them just say known after apply.
>
> **[1:23](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=83)** Here's a few more.
>
> **[1:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=84)** And then there's another one here, which is a data object, and we can't open that.
>
> **[1:31](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=91)** Now we have the option to confirm and apply, discard, or add a comment.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=94)** But before we do any of those, let's go to our code repository and take a look.
>
> **[1:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=101)** We can scroll down here, we want to be on the main branch, and let's look at main.tf.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=108)** This is mostly adapted from an example in the Terraform documentation.
>
> **[1:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=113)** This actually deploys a Tomcat server.
>
> **[1:57](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=117)** And the way this works is pretty clever.
>
> **[1:59](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=119)** It uses this filter to find the latest version of this bitami Tomcat server, and we'll explain some of these other settings a little later on.
>
> **[2:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=129)** So it takes that image, and then down here, it provisions an AWS instance.
>
> **[2:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=137)** And this one's just named web.
>
> **[2:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=139)** Don't worry if this code is looking confusing, we're going to cover all of this in depth later.
>
> **[2:25](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=145)** But you can see some of the information we saw.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=147)** There's an AMI setting, and here it's actually pulling that from this data block up here.
>
> **[2:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=153)** There's an instance type specified and tags.
>
> **[2:36](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=156)** Let's look back at our plan and see if we can find those.
>
> **[2:42](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=162)** So there's the AMI, but you can see it's actually filled in the value.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=167)** We've got our instance type, and there's our hello world tag.
>
> **[2:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=173)** And that's our Terraform plan.
>
> **[2:54](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-plan?u=76281980&t=174)** In the next lesson, we'll actually apply this and watch as the infrastructure is deployed.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (6), aws (2), find (2)
> **Env Vars:** ami (3), aws (2), ec2 (1)
> **UI Navigation:** scroll down (2), click on (1), dropdown (1), go to (1)
> **Code Keywords:** let (3), type, (1)
> **Code Identifiers:** aws_instance (1), get_password_data (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** starter code (1)

#### First Terraform run
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=0)** - [Instructor] In the last video, we ran Terraform plan but didn't apply the changes.
>
> **[0:04](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=4)** Applying changes will accrue some costs in your AWS account.
>
> **[0:08](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=8)** For this particular code, the cost would be around $5 a month.
>
> **[0:12](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=12)** So we'll go ahead and scroll down and click Confirm and Apply.
>
> **[0:18](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=18)** This shows us one of the very helpful features of Terraform Cloud compared to the command line tool.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=24)** It's a place to record who applied changes and why.
>
> **[0:27](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=27)** Feel free to add comments as you go to remind yourself, but I'll be skipping it for the sake of time, so I'll just click Confirm Plan.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=34)** At this point, we still have a moment to cancel the run.
>
> **[0:39](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=39)** Personally, I love features like this because for some reason the moment after I click the button is when I'm most likely to realize I made a mistake.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=47)** Terraform should complete fairly quickly, but it may take a bit longer for the instance to boot in AWS.
>
> **[0:54](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=54)** I'll open up the AWS web interface and see what we've got.
>
> **[0:59](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=59)** To view the instance, we click on EC2 or go up to the menu here and type EC2.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=66)** Click the link there and click Instances and here's our instance that we just provisioned.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=76)** Now, if you're not seeing it, you might want to double check up here.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=79)** On mine it says Oregon. That's where I live.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=82)** The code is set to default to us-west-2 which is this Oregon-based co-lo, but you might have a different region selected by default.
>
> **[1:30](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=90)** Let's take a look at that instance for a second and you see it's got some things set up.
>
> **[1:37](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=97)** So you can see there is a public IP address and public DNS available and we could open those up, but we don't actually have the ports open to the web browser that's running on our instance.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=108)** We'll set that up a little later on.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=111)** Let's go back to our list of instances and click here checkbox next to our running instance and we'll go ahead and say Terminate Instance.
>
> **[2:02](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=122)** That's going to give you a warning and say that it's going to delete the EBS volume.
>
> **[2:06](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=126)** That just means it's going to delete the disc image that's associated with this instance, which is what we want.
>
> **[2:12](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=132)** We'll click Terminate, so this will destroy our server and delete its disc.
>
> **[2:18](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=138)** If we go back to Terraform Cloud and go to Runs, we can click Actions and start a new run.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=147)** And we want to wait a minute here and be sure our instance has fully shut down, so we'll just give it a second.
>
> **[2:33](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=153)** You can click Refresh.
>
> **[2:35](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=155)** Okay, looks like it's finished now.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=158)** So I'll click Start run.
>
> **[2:41](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=161)** Now, it's going to run through the plan.
>
> **[2:43](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=163)** And while it's doing it, it's checking what the current state of our instances is.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=168)** You can see it's detected that that instance was destroyed, so it'll recreate it, and it'll be another minute here before this applies, ready to go.
>
> **[3:00](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=180)** Now that's ready.
>
> **[3:01](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=181)** So you can click Confirm and Apply and it'll recreate the instance, or you can leave it for now since we don't need that instance to be running.
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/first-terraform-run?u=76281980&t=189)** Another option is to select Discard Run and then it'll throw this run away and be ready for the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2), public (2), interface (1), default. (1)
> **CLI Commands:** terraform (4), aws (3)
> **Env Vars:** aws (3), ec2 (2), dns (1), ebs (1)
> **UI Navigation:** go to (2), scroll down (1), click on (1), checkbox (1)
> **Cross-References:** go back to (2), in the last (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)

#### How Terraform works
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=0)** - [Instructor] At first glance what Terraform does might not seem that complex.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=5)** You're able to write some code to define some cloud resources, run a program, and it goes out and makes those things happen.
>
> **[0:12](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=12)** So what makes Terraform different from a simple script that calls out to the AWS API?
>
> **[0:19](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=19)** Terraform lets you define your infrastructure as code and gives you a lot of flexibility in how you do that because you can freely use data from one resource to define another.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=30)** In a non Terraform script, you might deploy a couple of web servers and a load balancer.
>
> **[0:37](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=37)** If you want to add those to a new security group to function as a firewall, your script would need to call out to AWS, retrieve and process information describing those resources, and then take action to define your security group.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=53)** With Terraform, that kind of sharing of data is trivial.
>
> **[0:57](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=57)** Your code can define resources based on the definitions of other resources even if they don't exist yet.
>
> **[1:04](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=64)** That last point is critical.
>
> **[1:05](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=65)** Terraform figures out the hard part of resource ordering and lets you just treat that infrastructure as static code.
>
> **[1:13](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=73)** One thing I found a bit intimidating about Terraform at first was the idea that it can go and make huge changes to my production infrastructure, potentially deleting critical components and causing a serious outage.
>
> **[1:29](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=89)** When I got more comfortable with the tool, I realized just how powerful the execution plan is.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=95)** There's no need to worry about Terraform making a change that you don't expect.
>
> **[1:40](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=100)** When it compiles the plan, you'll see exactly what Terraform will attempt and have a chance to decide if it's what you want to actually have happen.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=108)** So Terraform is taking the infrastructure described in your code and comparing it to the state of what actually exists, and then essentially writing a step-by-step script that will make the changes.
>
> **[2:03](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=123)** The plan step is critical because it's the bit that figures out what needs to be done and in what order.
>
> **[2:09](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=129)** Then Terraform uses the provider to actually apply the plan and make whatever changes are needed.
>
> **[2:16](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=136)** Terraform is able to figure out how to do things by using a data structure known as a graph.
>
> **[2:22](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=142)** More specifically, it uses a type of graph called a directed acyclic graph.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=147)** That sounds really technical and complicated but it's actually a simple concept if you unpack the name a bit.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=154)** First of all, a graph is made up of a series of connected dots, like these three circles connected by lines.
>
> **[2:41](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=161)** In the case of Terraform, each node is a resource like an S3 bucket, a domain name, and an EC2 instance, plus some others that Terraform uses internally to keep track of things.
>
> **[2:54](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=174)** The graph is directed.
>
> **[2:57](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=177)** That means that there is an order.
>
> **[2:58](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=178)** So in our image we'll replace the lines with arrows to show a direction.
>
> **[3:04](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=184)** If we added an arrow back from node three to node two, we could say that we've created a cycle and you can loop back between two and three by following the arrows.
>
> **[3:15](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=195)** For a graph to be acyclic it means that you can't have any cycles like that.
>
> **[3:20](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=200)** And if you think about it in terms of how Terraform uses the graph, this makes perfect sense.
>
> **[3:26](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=206)** You don't want to create a resource, move on to another one, and then come right back and recreate the first one.
>
> **[3:32](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=212)** It means that you'll sometimes need to change the logic of your code to make sure that you don't have two interdependent resources that form a cycle.
>
> **[3:42](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=222)** This connection, on the other hand, is totally okay because it gives Terraform more information about the order things can happen.
>
> **[3:51](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=231)** A real world Terraform run will generate much more complex graph with a lot of interconnections.
>
> **[3:57](https://www.linkedin.com/learning/learning-terraform-15575129/how-terraform-works?u=76281980&t=237)** That data structure is how it sorts it all out under the hood.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (17), make (4), node (3), aws (2)
> **Definitions:** means that (3), known as (1), is a  (1), is an  (1)
> **Env Vars:** aws (2), api (1), ec2 (1)
> **Code Keywords:** function (1), static (1)
> **Speakers:** - [instructor] (1)

#### Terraform states
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=0)** - [Instructor] When we ran Terraform, it figured out what it needed to provision based on our code.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=5)** When we ran it a second time, it knew that the infrastructure had changed.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=10)** So how did it keep track of what was going on in our infrastructure?
>
> **[0:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=14)** In simple English, you might say that Terraform is aware of the state of our AWS infrastructure.
>
> **[0:20](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=20)** That's also the word that Terraform uses.
>
> **[0:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=22)** It keeps what's called a state file to track that.
>
> **[0:27](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=27)** We can see that in the cloud UI by clicking on states.
>
> **[0:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=32)** And click into our state here.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=34)** The state file is literally just a JSON-formatted text file.
>
> **[0:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=38)** For the command line tool, you can find it in your local directory.
>
> **[0:42](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=42)** Terraform Cloud gives some more user-friendly UI for looking at it.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=47)** The data file isn't particularly meant to be human-readable, but if you read carefully, you can find some useful information.
>
> **[0:56](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=56)** So, for example, there's some details about the provider that's configured.
>
> **[1:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=60)** This is the AWS provider.
>
> **[1:02](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=62)** We can see here there's our AMI that we used for our AWS instance.
>
> **[1:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=69)** And you can dig through and find some other information.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=72)** If you scroll down, if we run Terraform again, it will display a diff below this that we can use to see the difference between the previous state and the current state.
>
> **[1:23](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=83)** This is also where you can go to see the state files from previous Terraform runs, so you can see what changed with an individual run.
>
> **[1:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-states?u=76281980&t=92)** This can be really helpful when troubleshooting if something breaks.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (6), aws (3), find (3)
> **Env Vars:** aws (3), json (1), ami (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Editing your code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=0)** - [Instructor] In this lesson, we'll be making some changes to our repo and then running Terraform again to see how it responds.
>
> **[0:06](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=6)** We'll be covering the language in depth later.
>
> **[0:09](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=9)** So the code that we're using will just be to uncomment some things in the starter code.
>
> **[0:15](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=15)** First, we'll go to the GitHub repo and scroll down to variables.tf and click on it.
>
> **[0:22](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=22)** We have a couple choices for editors here.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=24)** You can just click the pencil and say Edit this file, but that creates a commit for every single file and that triggers Terraform to run on every single commit.
>
> **[0:35](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=35)** It just gets a little bit noisy.
>
> **[0:37](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=37)** So instead we're going to use this dropdown and say Open in [github.dev](https://github.dev).
>
> **[0:43](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=43)** And this just gives us a more full-featured editor.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=47)** We can use this to combine all of our changes into a single commit.
>
> **[0:52](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=52)** So I'm going to just uncomment this variable block.
>
> **[0:58](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=58)** And I think this is pretty straightforward.
>
> **[1:00](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=60)** It says variable instance type and it has a default value here set T3 nano.
>
> **[1:08](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=68)** So we made that change, let's also change outputs.tf and we'll uncomment this.
>
> **[1:14](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=74)** We'll look at these when we get to the Terraform Cloud UI.
>
> **[1:21](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=81)** Now go to main.tf.
>
> **[1:23](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=83)** Since we've created a variable, let's see if we can find a place to use it.
>
> **[1:29](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=89)** So in our instance, there's the word instance type again.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=94)** And the syntax for using a variable is just var dot, and I'll start typing.
>
> **[1:40](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=100)** You can see the editor actually prompts to auto complete some of the options here and instance type is one of them, so I'll click that.
>
> **[1:49](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=109)** And that's all we need to change for now.
>
> **[1:52](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=112)** We'll go down to Source Control.
>
> **[1:53](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=113)** It's got our three changes highlighted here.
>
> **[1:57](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=117)** Click on that.
>
> **[1:58](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=118)** And we just need to commit these changes to the repository.
>
> **[2:01](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=121)** And it requires you to add a message, so I'll just say initial commit and click the check mark.
>
> **[2:10](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=130)** Okay, so those changes are committed now.
>
> **[2:13](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=133)** From this hamburger menu, you can go to Go To Repository, and that brings us back to the more familiar GitHub view.
>
> **[2:23](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=143)** Now, there's something interesting here that happens with Terraform Cloud, which is this little brown orange dot.
>
> **[2:31](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=151)** I'm just going to click on that.
>
> **[2:33](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=153)** It says Some checks haven't completed yet and it shows Terraform Cloud.
>
> **[2:39](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=159)** It says one pending check.
>
> **[2:40](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=160)** So we can actually click details and it'll bring us straight to the run for this commit that we just made.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=168)** If I open up the top menu here, it says the branch, we can see the initial commit, that was our commit message, and here we can see the plan that it created.
>
> **[3:00](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=180)** So because we just destroyed our instance, it would recreate it.
>
> **[3:03](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=183)** And then there's the two outputs we added, which reveals the ami and also an instance arn, which is a unique identifier that AWS uses.
>
> **[3:16](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=196)** If we open up the instance, we could see it got the instance type correct.
>
> **[3:20](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=200)** It got that from our variable instead of from the hard coded value we had.
>
> **[3:25](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=205)** One other note, if you go to Runs, if you're not seeing the results of this run, it might be because it's queued behind another run.
>
> **[3:35](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=215)** So you might need to open up one of your previous runs and choose to discard it.
>
> **[3:42](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=222)** Let's go back to our initial commit run here and we'll click Confirm & Apply.
>
> **[3:50](https://www.linkedin.com/learning/learning-terraform-15575129/editing-your-code?u=76281980&t=230)** And this should recreate our instance.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), click on (3), scroll down (1), dropdown (1)
> **CLI Commands:** terraform (5), find (1), aws (1)
> **Code Keywords:** let (3), this. (1), var (1)
> **Tools:** github (3)
> **Exercise Files:** starter code (1), github repo (1)
> **URLs:** [github.dev](https://github.dev) (1)
> **Env Vars:** aws (1)
> **Cross-References:** go back to (1)

#### Understanding Terraform errors
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=0)** - [Instructor] Since we've been working with Starter Code, we haven't yet had a chance to see how Terraform responds to errors.
>
> **[0:06](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=6)** So let's make some changes to our code to generate some errors.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=10)** From the code repository, open up main.tf.
>
> **[0:13](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=13)** And for this one, we can just use the Simple Editor.
>
> **[0:18](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=18)** Right now our AWS instance is named web.
>
> **[0:22](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=22)** Well, let's say that this web server is actually hosting a blog.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=26)** So we'll go in and change its name here to blog.
>
> **[0:31](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=31)** Then let's scroll down to the bottom and click Commit Changes.
>
> **[0:35](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=35)** And you want it to say Commit directly to the main branch.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=40)** Just a note, this is only changing the name used to reference the instance in Terraform and AWS.
>
> **[0:46](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=46)** The instance name won't affect the actual host name of the machine.
>
> **[0:50](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=50)** Now if we go back to Terraform Cloud, we can see that our latest run has happened already and there's a big red box that says Error.
>
> **[1:01](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=61)** So let's click on that.
>
> **[1:03](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=63)** Now at the top here, it says Plan errored, and there's two big errors, Error: Reference to undeclared resource.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=72)** And then it actually gives us a specific file and line.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=76)** It says outputs.tf line two in output instance_ami.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=82)** So it's still looking for the instance named web but we changed that to blog.
>
> **[1:28](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=88)** And in our other output variable, it also has web referenced.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=94)** These errors are pretty much the same as what you would see if you were running this from the command line.
>
> **[1:39](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=99)** It's just an easier interface, I think, to look at the web page.
>
> **[1:43](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=103)** So let's go in and fix this error.
>
> **[1:46](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=106)** Go back to our code, go to the root of the repository.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=111)** Now all we need to do is edit our outputs.
>
> **[1:54](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=114)** So this we can do in the Simple Editor again.
>
> **[1:58](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=118)** And we'll just change these from web to blog.
>
> **[2:05](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=125)** And we can scroll down to the bottom and commit those right to the main branch.
>
> **[2:09](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=129)** Now if we go back to Terraform and go to our runs, you see the plan has already finished.
>
> **[2:17](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=137)** It says it's going to recreate our instance and name it blog and it's going to delete the old instance that was named web.
>
> **[2:25](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=145)** I'll actually just discard this one 'cause I want to test one other change.
>
> **[2:30](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=150)** Go back to our outputs file and we'll edit it again.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=154)** And this time, let's just leave off one of these curly braces.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=158)** We'll scroll down and commit that change.
>
> **[2:44](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=164)** So we'll go back and look at our Terraform Runs, and we can open up this one.
>
> **[2:53](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=173)** And the error message is there by now.
>
> **[2:55](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=175)** You see this is a slightly different format and that's because this is a syntax error, and it showed up a little earlier when Terraform was doing its tests.
>
> **[3:04](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=184)** So let's take a look at what the message actually is.
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=189)** It says, "There are some problems with the configuration described below.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=192)** The Terraform configuration must be valid before initialization so that Terraform can determine which modules and providers need to be installed."
>
> **[3:19](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=199)** And then our actual error, "Unclosed configuration block" "On outputs.tf line five, there's no closing brace for this block before the end of the file.
>
> **[3:29](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=209)** This may be caused by incorrect brace nesting somewhere else in the file."
>
> **[3:33](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=213)** This kind of error message is one of the things I absolutely love about Terraform.
>
> **[3:38](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=218)** It gives a lot of detail about the error and even offers a suggestion for how to troubleshoot, since this kind of mistake is easy to make when you have a lot of nested braces.
>
> **[3:48](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=228)** So before moving on, let's go ahead and fix that error.
>
> **[3:53](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=233)** Just add it back in and commit again.
>
> **[4:00](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=240)** And we'll go ahead and do our run.
>
> **[4:04](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=244)** Open up that recent plan and we'll give it a minute to run here.
>
> **[4:08](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=248)** And it's going to delete and recreate our instance.
>
> **[4:13](https://www.linkedin.com/learning/learning-terraform-15575129/understanding-terraform-errors?u=76281980&t=253)** We'll let the plan finish, which takes another minute after it shows some output, and then I can go ahead and confirm and apply.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (9), make (2), aws (2)
> **Code Keywords:** let (9), delete (2), interface (1)
> **UI Navigation:** scroll down (3), go to (2), click on (1)
> **Cross-References:** go back to (4)
> **Env Vars:** aws (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** instance_ami (1)
> **Tools:** command line (1)


### 4. 3. Infrastructure as Code

#### Resources
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=0)** - [Instructor] In this lesson, we're going to look a bit deeper at Terraform code.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=5)** Resources are the building blocks of Terraform code, they define the what of our infrastructure and Terraform figures out the how.
>
> **[0:13](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=13)** Although all resources share the same syntax, every provider has different resource types and slightly different options.
>
> **[0:21](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=21)** We're going to focus just on AWS so that we can go a bit deeper.
>
> **[0:25](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=25)** It should be similar on other platforms like Azure but you'll need to review the documentation if that's the platform you plan to use.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=34)** Let's look at a simple example, at the top here we've got our provider definition.
>
> **[0:39](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=39)** A provider isn't a resource, it's what gives you access to resources.
>
> **[0:44](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=44)** So the AWS provider, provides a set of possible resources to define.
>
> **[0:50](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=50)** You need to have a provider defined in your code so that Terraform knows where the resources should go.
>
> **[0:56](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=56)** The resource we've defined is an S3 bucket which I chose because it's pretty simple.
>
> **[1:03](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=63)** The resource syntax is pretty self-explanatory but let's walk through it.
>
> **[1:08](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=68)** First, we have the word resource, that's the key word to tell Terraform that we're defining a resource and not a provider for example.
>
> **[1:17](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=77)** Next is the resource type, in this case, it's AWS S3 bucket.
>
> **[1:23](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=83)** Those keywords are defined by the provider and correlate to actual infrastructure elements that can be created on AWS.
>
> **[1:30](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=90)** Finally, we have the name Terraform we'll use for this resource.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=95)** After the resource name, we can give Terraform some details about what we want to create by passing in parameters between two curly braces.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=105)** In this example, we're giving a name for our S3 bucket, notice that this doesn't match the resource name.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=111)** The bucket name is what AWS will call our bucket, but in our Terraform code, we can use another name.
>
> **[1:58](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=118)** And S3 bucket is actually a great example of why this is handy because every S3 bucket needs to have a unique name.
>
> **[2:06](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=126)** This means that we can refer to our bucket inside Terraform code using a friendly and easy to remember name like tf-course.
>
> **[2:14](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=134)** But inside AWS, the bucket might need to include something like a date string to make sure it's unique.
>
> **[2:22](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=142)** And finally, in this example, we have a second parameter that defines this is a private bucket.
>
> **[2:28](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=148)** That's it for our simple example.
>
> **[2:30](https://www.linkedin.com/learning/learning-terraform-15575129/resources?u=76281980&t=150)** But there are a lot more options for this resource type like setting up static website hosting or simple things like adding tags to the resource.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (9), aws (6), make (1)
> **Code Keywords:** let (2), finally, (2), self (1), type, (1), case, (1)
> **Env Vars:** aws (6)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Prerequisites:** you'll need (1), you need to have (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Basic resource types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=0)** - [Instructor] Now that we've looked at the components and how to declare resources in Terraform, let's look at some of the basic resource types we'll be using in this course.
>
> **[0:08](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=8)** I'll move quickly through these examples and some of the new syntax that we're going to see.
>
> **[0:13](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=13)** We'll go much deeper in later lessons and hands-on exercises so don't feel like you need to remember all the details.
>
> **[0:21](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=21)** S3 buckets are a simple file storage solution in AWS.
>
> **[0:25](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=25)** Here's an example adapted from the Terraform documentation.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=30)** This one is a public-facing website so the ACL is set to public-read.
>
> **[0:36](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=36)** There's also a security policy defined, and in this case, that's coming from an external file in the Terraform directory.
>
> **[0:44](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=44)** Finally, this website configuration resource is where some of those specific parameters are defined, so S3 will know, for example, which file to use as the index and error pages.
>
> **[0:55](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=55)** In previous versions of Terraform, this config would be defined within the bucket resource.
>
> **[1:00](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=60)** Now it's defined separately and the bucket the config applies to is defined here.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=66)** The benefit of this configuration being a separate resource is that it can be freely changed or deleted without worrying about losing the data stored in the bucket itself.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=76)** VPC stands for Virtual Private Cloud.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=79)** Think of it as the network infrastructure that wires your servers together.
>
> **[1:23](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=83)** We haven't needed to define one because AWS sets up a default VPC for every account.
>
> **[1:30](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=90)** One way to use VPCs is to keep them separate from each other for each deployment environment.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=95)** Here we've got QA, Staging, and Prod.
>
> **[1:38](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=98)** Each has a separate network with their own IP range.
>
> **[1:42](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=102)** AWS Security Groups can function like firewalls, which is what this example shows.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=108)** In this case, there's an ingress block which defines what port and protocol to allow in.
>
> **[1:53](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=113)** There's also a CIDR block parameter, which lets you define the IP address ranges to allow in.
>
> **[1:59](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=119)** The egress block is to define what outbound traffic is allowed.
>
> **[2:03](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=123)** In this case, the ports are set to zero and the protocol is set to negative one, which signifies to allow any protocol on any port.
>
> **[2:12](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=132)** Similarly to how the S3 bucket website config is defined separately, security groups and rules can be separated.
>
> **[2:19](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=139)** This can sometimes help simplify your code when working with iteration features where you need to define several similar resources.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=147)** For EC2 server instances, the resource name is aws_instance.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=154)** And in this case, we're deploying a server called blog.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=158)** The AMI parameter defines the base image to use to create this server, and this is an example of using a dynamic variable rather than hard coding a specific AMI.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=168)** That variable can be defined in a few ways, but in this case, you might define it in a static file alongside your code or use some Terraform code to dynamically look up the latest official Ubuntu AMI.
>
> **[3:01](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=181)** We'll look at variables deeper in a later lesson.
>
> **[3:04](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=184)** The last parameter in this example is the instance type so that AWS knows how big of a server you'd like.
>
> **[3:11](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=191)** In AWS, a static IP address is called an elastic IP since it can be easily reassigned.
>
> **[3:18](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=198)** In Terraform, that resource is abbreviated aws_eip.
>
> **[3:24](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=204)** In this example, we're naming the IP address blog so that we can remember it's associated with the server instance we just defined.
>
> **[3:31](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=211)** There's no name collision, by the way, because they're different resource types.
>
> **[3:36](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=216)** Notice the dynamic syntax used here for the instance parameter rather than a hard coded ID.
>
> **[3:42](https://www.linkedin.com/learning/learning-terraform-15575129/basic-resource-types?u=76281980&t=222)** This is how Terraform resources are able to refer to other resources, and it means you can terminate and redeploy that blog instance and Terraform will know to reassign the IP address as well.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (8), aws (5)
> **Code Keywords:** case, (5), public (2), static (2), let (1), finally, (1)
> **Env Vars:** aws (5), ami (3), vpc (2), acl (1), cidr (1)
> **Definitions:** is a  (1), stands for (1), is an  (1), is called (1)
> **Code Identifiers:** aws_instance (1), aws_eip (1)
> **Analogies:** for example (1), think of it as (1)
> **Speakers:** - [instructor] (1)

#### Terraform style
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=0)** - [Instructor] Let's take a minute to review some of the Terraform coding style conventions.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=5)** There are just a few rules and they're also well documented on the Terraform website.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=10)** Here's an example from the Terraform docs.
>
> **[0:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=13)** We'll walk through it to illustrate some of the style suggestions.
>
> **[0:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=17)** The proper indentation in a Terraform file is two spaces rather than a tab.
>
> **[0:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=22)** Some editors will let you set that as a default for Terraform files.
>
> **[0:28](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=28)** This first line of the resource also has what's called a meta argument, which we haven't talked about yet.
>
> **[0:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=34)** A standard argument defines something that Terraform will ultimately pass along to AWS or whatever provider you're using.
>
> **[0:42](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=42)** A meta argument defines how you want Terraform to interpret your code.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=47)** In this case, Terraform will deploy two instances based on this meta argument.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=53)** Another common use of meta arguments is to explicitly define a dependency relationship between two resources so that Terraform knows to provision one before the other.
>
> **[1:04](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=64)** Speaking of meta arguments, some are in block format like this one, which tells Terraform how to deal with replacing these instances, that is to create new ones before destroying the old ones.
>
> **[1:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=77)** Block meta arguments should go at the end of a resource definition.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=82)** Use blank lines to make logical separations in your code and to keep it more readable, like separating meta arguments from standard arguments, or meta argument blocks from other code blocks.
>
> **[1:36](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=96)** All single arguments should be together in a group followed by an empty line, and then any code blocks.
>
> **[1:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=103)** The style guide lists all the rules and exceptions about blank lines, but it boils down to thinking about readability as you write and refactor your code.
>
> **[1:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=112)** Pay attention to what makes sense as a logical grouping.
>
> **[1:55](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=115)** Rearrange arguments within a block if you feel like they should go together and then use blank lines to set sections apart.
>
> **[2:03](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=123)** Finally, take the time to line up the equal signs as shown here.
>
> **[2:07](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=127)** It's a small thing but it makes a huge difference in readability.
>
> **[2:11](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=131)** Just line them up per section or block.
>
> **[2:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-style?u=76281980&t=134)** No need to have every equal sign in the file aligned.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (10), aws (1), make (1)
> **Code Keywords:** let (2), pass (1), case, (1), finally, (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### Security group
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=0)** - [Instructor] In this lesson, we'll be setting up a security group and for our purposes, you could think of this a bit like a firewall that we can just configure for our single instance.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=10)** One thing we do before we set up our security group we'll need to define a VPC.
>
> **[0:14](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=14)** That's the network infrastructure that Amazon provides, and every account by default has a default VPC, which is why we were able to define an AWS instance without actually specifying a VPC.
>
> **[0:28](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=28)** It just put it into the default.
>
> **[0:31](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=31)** For our security group, we'll need to get more explicit and to do that, there's a handy feature of Terraform that lets us just pull in the default values.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=40)** So, the way to do it is to define another data block and the syntax is data aws_vpc, and we'll give it the name default.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=53)** And all you have to say is default equals true.
>
> **[0:57](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=57)** And now, we'll get the correct values.
>
> **[1:00](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=60)** Now, for our security group, let's go to the bottom of the file.
>
> **[1:04](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=64)** Let's scroll up just a little bit and our syntax here is resource aws_security_group,
>
> **[1:15](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=75)** and then, for the name, we'll just call it blog.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=79)** And then, there's a name parameter within the resource.
>
> **[1:21](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=81)** And this is actually the name that will show up in that AWS console.
>
> **[1:26](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=86)** For that, let's also call it blog.
>
> **[1:28](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=88)** If you leave this off, it will still work, but it will define a randomly generated name, which can be a little bit hard to find.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=95)** I like to be in the habit of adding a description to every security group because then you can see what it's intended for.
>
> **[1:43](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=103)** So, we'll just describe what we want this to do.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=105)** Since this is for a web server that our blog will be on, we'll want to allow web traffic in and we don't want to limit what outbound is for this one.
>
> **[1:54](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=114)** So, we'll say allow HTTP and HTTPS in, allow everything out.
>
> **[2:05](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=125)** And the last thing we need to set on this is the VPC ID, vpc_id = data.aws_vpc.default.id.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=140)** And that's the VPC data block that we just defined.
>
> **[2:25](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=145)** Let's aline these equal signs.
>
> **[2:29](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=149)** Now, to add rules to our security group, we'll do those as separate resources.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=154)** There is a syntax for adding rules within the security group resource itself, but I think it's cleaner to use this other format.
>
> **[2:42](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=162)** Resource, aws_security_group_rule.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=168)** And then, for name, I like to use a format something like blog_http_in.
>
> **[2:57](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=177)** That way, you can tell what the group is and is for just by looking at the name.
>
> **[3:02](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=182)** Since this is an inbound rule, we'll say type equals ingress.
>
> **[3:08](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=188)** And since it's HTTP, we'll want port 80.
>
> **[3:11](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=191)** So, we'll say from_port = 80, to_port = 80.
>
> **[3:20](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=200)** For protocol, we'll set it to TCP, and then, there's a parameter of C-I-D-R, CIDR blocks, cidr_blocks, and that lets us define which networks we want to allow access on.
>
> **[3:38](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=218)** In our case, we want this to be wide open, since it's going to be a public website.
>
> **[3:42](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=222)** So, we'll just say zero.zero.zero.zero/zero.
>
> **[3:47](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=227)** If you like you can limit this just to your own IP for security, but I don't think it's a huge risk in this case.
>
> **[3:55](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=235)** And then, the last parameter here, which I'll set off by blank line, is security_group_id.
>
> **[4:06](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=246)** And this is the security group we just defined.
>
> **[4:08](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=248)** So, we're telling this rule which group it belongs to and for that the syntax is aws_security_group.blog.id.
>
> **[4:22](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=262)** And let me fix the formatting here before we move on.
>
> **[4:30](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=270)** Now, we can use this as a template for our other two rules.
>
> **[4:33](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=273)** So, we'll just copy that with control C and paste twice.
>
> **[4:42](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=282)** And then, let's change a couple of things on here.
>
> **[4:44](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=284)** So, HTTP will be HTTPS, and the port will be 443.
>
> **[4:52](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=292)** And for the outbound rule, for the name on this one, we'll say blog_everything_out.
>
> **[5:03](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=303)** We want to change it from ingress to egress, since it's an outbound rule.
>
> **[5:08](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=308)** And since we want to allow everything, the syntax is just setting zero for the ports and negative one for the protocol will allow all protocols.
>
> **[5:18](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=318)** We can keep our CIDR blocks the same.
>
> **[5:21](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=321)** Now, there's one final thing we need to do here, which is add this security group to our instance.
>
> **[5:27](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=327)** So, we'll go up to our instance declaration here.
>
> **[5:32](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=332)** The syntax here is vpc_security_group_ids =,
>
> **[5:41](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=341)** and then we can give it a list of multiple security groups that we want to apply, but in this case, we're just going to use the one we set up.
>
> **[5:49](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=349)** So, that's aws_security_group.blog.id.
>
> **[5:57](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=357)** The reason the parameter's VPC security group is because this is to differentiate it from an EC2 classic security group, which you probably won't be using.
>
> **[6:07](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=367)** It's kind of being phased out, and this should be everything we need.
>
> **[6:12](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=372)** So, let's go over and apply these changes.
>
> **[6:15](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=375)** We'll commit by saying create security group.
>
> **[6:23](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=383)** We can go to our Terraform Cloud console and see the result of that plan that's running right now.
>
> **[6:31](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=391)** All right, our plan is completed and it says it's going to make some changes to the blog instance.
>
> **[6:36](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=396)** That's to apply our security group and it's going to create the security group.
>
> **[6:42](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=402)** So, let's apply that, and that's done.
>
> **[6:50](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=410)** Let's take a look up here and we'll look at our instance.
>
> **[6:59](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=419)** Now, let's see if we can find the IP address of our instance.
>
> **[7:02](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=422)** Here we go.
>
> **[7:03](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=423)** We want to use the public DNS.
>
> **[7:05](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=425)** If we copy that string, so when you look at this it might be hidden, you might need to click into it.
>
> **[7:12](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=432)** I'll open up a new tab and here's the webpage that's running by default on our instance.
>
> **[7:18](https://www.linkedin.com/learning/learning-terraform-15575129/security-group?u=76281980&t=438)** We're not actually going to configure anything on these instances, but this lets you see that this is actually working.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), default. (3), case, (2), public (2), for. (1)
> **Env Vars:** vpc (6), http (3), aws (2), https (2), cidr (2)
> **Code Identifiers:** aws_security_group (3), aws_vpc (2), vpc_id (1), aws_security_group_rule (1), blog_http_in (1)
> **CLI Commands:** aws (2), terraform (2), find (2), make (1)
> **Prerequisites:** configure (2), set up (2)
> **UI Navigation:** go to (2), scroll up (1)
> **Definitions:** is a  (1), is an  (1)
> **Ports:** port 80 (1)

#### Using modules
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=0)** - [Instructor] Modules are a Terraform feature that lets you combine some of your code into a logical group that can be managed together.
>
> **[0:08](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=8)** You can bundle together some logical block of code and pass in arguments that apply for that block.
>
> **[0:15](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=15)** In that sense, you might think of modules as working like custom resources.
>
> **[0:20](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=20)** All Terraform code actually has at least one module.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=24)** That's the default module known as root.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=26)** This is where we've been working and writing our code.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=30)** Let's start by looking at the code for using a module.
>
> **[0:33](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=33)** Imagine we've got a web app that needs a few things, maybe a DNS entry, an EC2 instance and an S3 bucket.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=40)** It doesn't really matter for us what's inside the module right now.
>
> **[0:44](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=44)** We just need to know how to talk to it.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=47)** First, we'll need to tell Terraform where to find the module.
>
> **[0:50](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=50)** In this case, it's a local directory.
>
> **[0:54](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=54)** Then we're passing in two arguments, so there's a server name and a web AMI in our example.
>
> **[1:01](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=61)** Pretty simple, right?
>
> **[1:03](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=63)** Inside the module, it's also pretty simple to configure those arguments.
>
> **[1:07](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=67)** The term in this case is input variables, which are sometimes just called variables.
>
> **[1:13](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=73)** On the other side, modules can also output values.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=76)** So in this example, our module is managing an EC2 instance and an S3 bucket, so it's making available the public IP and the bucket name.
>
> **[1:27](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=87)** One important note is that you can't directly access data from a module unless it's set up as an output value.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=95)** The content of a module is encapsulated and works like a black box.
>
> **[1:39](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=99)** So if you need to use data elsewhere in your code, be sure it's set as an output value.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=105)** The same goes for inputs.
>
> **[1:47](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=107)** If you need a piece of data in the module, make sure you pass in a variable.
>
> **[1:52](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=112)** To use the output from the last example, you might have a DNS record that you want to assign to a public IP address.
>
> **[2:00](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=120)** You can reference the output of that module much like you would another resource.
>
> **[2:05](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=125)** For creating a module, the minimal files you need are a main.tf file containing the main code for the module, a complex module might call out to other nested modules from here, a variables.tf file with the input variables, an outputs.tf file with the output values, finally, define a readme describing the module but you don't need to document the inputs and outputs because that documentation can be auto-generated.
>
> **[2:35](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=155)** This was intended as a very high level view, just enough to get you started creating your own simple modules.
>
> **[2:42](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=162)** There's a lot we're not really covering, so I just want to hit some highlights.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=167)** It's possible to use remote sources like S3 buckets or git repos for module.
>
> **[2:53](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=173)** There's detailed guidance in the docs for how to use versioning to ensure modules are what you'd expect.
>
> **[3:00](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=180)** A module can include a provider block and even set a specific version for that provider.
>
> **[3:06](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=186)** Unless you know you need this, I'd recommend only setting the provider in your root module.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=192)** And finally, there's the Terraform Registry where you can find pre-made modules for managing all sorts of infrastructure and providers for different hosting platforms.
>
> **[3:21](https://www.linkedin.com/learning/learning-terraform-15575129/using-modules?u=76281980&t=201)** We'll look at the registry in the next couple of videos.

> [!info]- Semantic Content
>
> **Code Keywords:** module (18), pass (2), public (2), finally, (2), let (1)
> **CLI Commands:** terraform (4), find (2), make (1), git (1)
> **Env Vars:** dns (2), ec2 (2), ami (1)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** in the next (1)
> **Documentation:** the docs (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)

#### Terraform registry: Providers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=0)** - [Instructor] In this lesson and the next one, we are going to look at the Terraform registry.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=5)** So to start, go to registry.[terraform.io](https://terraform.io).
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=10)** Now this site provides some modules, which we'll look at in the next lesson, but we're going to start with providers.
>
> **[0:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=17)** We've been using the AWS provider throughout this course, but there are other providers available for all the major cloud platforms.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=24)** So let's click into providers, and you'll see the major ones are highlighted here.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=30)** So let's click into AWS.
>
> **[0:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=33)** The main reason I want to look at this is to highlight the documentation that's available here.
>
> **[0:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=38)** So let's click into the documentation.
>
> **[0:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=41)** This is where you can find very detailed documentation and examples of how to work with AWS using Terraform.
>
> **[0:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=48)** Some of our starter code was more or less pulled directly from the examples here.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=53)** Now, one confusing thing about these docs is that they're organized by AWS service, which don't always have intuitive names or organization.
>
> **[1:01](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=61)** If you look through this list on the left, there are a lot of things.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=66)** I find it simplest to just use the search bar here.
>
> **[1:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=69)** It's says filter.
>
> **[1:11](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=71)** For example, if I search AWS_instance, we can pretty quickly find what we're looking for.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=79)** There it is.
>
> **[1:20](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=80)** You see this is under EC2, which is only intuitive if you know AWS pretty well.
>
> **[1:27](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=87)** One other thing to note about how these docs work is that there's a separate page for the AWS instance resource, but there's also an AWS instance data type, and you can see that has some different parameters here.
>
> **[1:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=101)** This is a bit like the code that we use to look up our AMI.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=105)** You can see that you can apply filters to find an existing instance.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=111)** Data sources are how to get information about your deployed infrastructure.
>
> **[1:56](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=116)** So let's head back to the main registry page, and click on browse providers again, and we'll look at another type of provider.
>
> **[2:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=126)** This one is Kubernetes.
>
> **[2:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=129)** One thing to note while you're looking at providers is that some of them are marked official, and until you're a little more comfortable, and can look at the code, I would just stick to the official ones unless you really need a community created one.
>
> **[2:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=142)** I wanted to highlight Kubernetes because it's a little different than some of the other options.
>
> **[2:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=146)** Kubernetes isn't a cloud, it isn't a public service, but it is something you can install, and manage yourself.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=154)** You can also host your Kubernetes cluster on Amazon or Azure or Google Cloud, and you could even use the AWS provider to create a Kubernetes cluster, and then use the Kubernetes provider to manage that cluster.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-providers?u=76281980&t=168)** We've only been using AWS in this course just to keep things simple but I wanted to highlight the providers here to illustrate that Terraform can manage just about anything.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9), terraform (4), find (4)
> **Env Vars:** aws (9), ec2 (1), ami (1)
> **Code Keywords:** let (4), for. (1), type, (1), public (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [terraform.io](https://terraform.io) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** starter code (1)

#### Terraform registry: Modules
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=0)** - [Instructor] The Terraform Registry is also where you can find official modules.
>
> **[0:04](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=4)** So in this lesson, we're going to find a module to simplify our code.
>
> **[0:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=9)** We'll click on browse modules, and on the left-hand side we can filter down to the AWS provider.
>
> **[0:16](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=16)** So let's scroll down a little bit and find security-group.
>
> **[0:21](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=21)** On the module page, there's a lot of information here.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=24)** You can see the different submodules it depends on and you can also see a link to some examples.
>
> **[0:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=32)** The first thing we want to look at is the provision instructions that are over on the right here.
>
> **[0:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=38)** So we'll highlight that block and click copy.
>
> **[0:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=43)** Before we paste that into our code, let's look at the documentation.
>
> **[0:49](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=49)** You could see some information here.
>
> **[0:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=51)** On this module at the top, there are some links here.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=53)** You can see the inputs, which are the different parameters this module will take, the outputs which are the values that allow output, and then some other things.
>
> **[1:04](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=64)** If we scroll down to this features list, this is actually really helpful and we'll use some of this.
>
> **[1:11](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=71)** The one thing we're going to do is look at these named rules, but there are a few different ways you can use the module.
>
> **[1:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=77)** We'll get to that a little later.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=79)** And keep scrolling down and there are a few basic examples that we could copy and paste.
>
> **[1:28](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=88)** And one way you can use this is actually by defining a pre-configured rule.
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=93)** So in this case, if it's just port 80 http, you can use this syntax to reference that file within the module to just do port 80.
>
> **[1:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=103)** We're going to do a little bit more than that.
>
> **[1:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=106)** So we'll just set that up in a second.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=108)** Let's go over to our code.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=111)** And in the editor, you want to open up main.tf.
>
> **[1:55](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=115)** Let's give a little more room.
>
> **[1:57](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=117)** So we can define this right here above our security group.
>
> **[2:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=120)** This will eventually replace the security group we just defined.
>
> **[2:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=125)** So let's paste that code we copied.
>
> **[2:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=129)** And just like our security group, we'll also need to set a VPC.
>
> **[2:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=133)** So we'll copy that, paste that in.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=140)** And we'll want to give this a name.
>
> **[2:23](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=143)** So let's call this blog_new.
>
> **[2:29](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=149)** That will help differentiate it from the existing security group we've just defined.
>
> **[2:35](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=155)** And then we can also change the name of the module itself.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=158)** Since the module code is defined by this source parameter, we can give the module a different name and then use that to reference it.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=167)** So we'll call this blog_sg.
>
> **[2:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=171)** And then to define our security group, we'll need to give it some rules.
>
> **[2:56](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=176)** And those are the rules that were referenced in those named rules.
>
> **[2:59](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=179)** So let's go back to the documentation and scroll up to that feature list.
>
> **[3:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=186)** It says named rules, see the rules here.
>
> **[3:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=188)** If we click into that, it actually opens up some source code inside the module, and this is just a variable definition with a lot of different values.
>
> **[3:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=199)** But we can just scroll down until we find the ones we're looking for for HTTP and HTTPS.
>
> **[3:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=204)** So http-80-tcp is one, https-443-tcp.
>
> **[3:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=214)** And then down at the bottom.
>
> **[3:39](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=219)** For our outbound rule, we'll use all-all.
>
> **[3:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=223)** So let's put those into our code.
>
> **[3:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=226)** The way this works is you say ingress_rules equals.
>
> **[3:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=233)** So we'll take the names from that list that we just looked at.
>
> **[3:56](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=236)** So that's http-80-tcp and then a comma and in quotes htpps-443-tcp.
>
> **[4:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=254)** And we'll also want to define the CIDR blocks.
>
> **[4:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=257)** So ingress_cidr_blocks equals.
>
> **[4:25](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=265)** And for this, we can use the same as what we used before.
>
> **[4:27](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=267)** 0.0.0.0/0.
>
> **[4:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=272)** Let's just align our equal signs.
>
> **[4:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=278)** Actually, let's put these in a separate block for clarity.
>
> **[4:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=283)** And then we'll need to do our egress rule the same way.
>
> **[4:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=286)** I'll just copy and paste and we'll change ingress to egress and we'll change our rule name to all-all.
>
> **[5:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=305)** Now the explanation for the syntax from the module page is all defined in this inputs section.
>
> **[5:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=313)** So if we look through until we find ingress rules, well, here egress is first, let's look at egress.
>
> **[5:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=322)** Egress CIDR blocks and there's the syntax.
>
> **[5:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=326)** And then egress rules.
>
> **[5:27](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=327)** It's a little cryptic but it says list of egress rules by name.
>
> **[5:31](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=331)** These aren't always intuitive or as easy to read as the main Terraform documentation.
>
> **[5:36](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=336)** So it can really help to look for some example code, either the example provided in the module or just search the web for some other examples.
>
> **[5:44](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=344)** Let's go back to our code.
>
> **[5:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=346)** Now the one last thing we need to do is add this security group to our instance and replace the one we manually defined.
>
> **[5:55](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=355)** So the way we'll do that is using module.blog_sg.,
>
> **[6:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=365)** and then we need to get the security group ID that this module outputs.
>
> **[6:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=370)** So to find the name of that, we'll look back in our module documentation and scroll up, click on outputs.
>
> **[6:20](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=380)** The output name that gives us just the security group ID is security_group_id.
>
> **[6:27](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=387)** So let's copy that and we'll paste that here.
>
> **[6:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=393)** We'll go ahead and commit this.
>
> **[6:36](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=396)** So use module for security group.
>
> **[6:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=406)** And then we'll go through our Terraform run.
>
> **[6:50](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=410)** And it looks like it's defining some new security groups.
>
> **[6:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=412)** One thing to note is that the module will create names that are sometimes a little hard to understand.
>
> **[6:58](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=418)** It uses this this_name_prefix for the resource name.
>
> **[7:04](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=424)** But we don't need to reference that directly since we can reference it by the module name.
>
> **[7:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=428)** So let's apply that change.
>
> **[7:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=432)** Now that that's complete, we can look in the AWS console and compare the security groups.
>
> **[7:18](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=438)** You can also open up our instance and make sure it's still working.
>
> **[7:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=442)** So we need to open up one of these hidden blocks here and find our DNS entry.
>
> **[7:30](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=450)** And I'll just say open link in new tab.
>
> **[7:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=452)** And here you see we can still access our instance.
>
> **[7:37](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=457)** So if that looks correct to you, go ahead and go in here and clear out the old code for the security group and then commit and apply those changes too.
>
> **[7:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=468)** And if you like, you can also change the name just to blog.
>
> **[7:54](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=474)** Security groups are a great example of how modules can help make things simpler.
>
> **[7:59](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-registry-modules?u=76281980&t=479)** Rather than having to spell out every detail, the module can take care of some of that for us.

> [!info]- Semantic Content
>
> **Code Keywords:** module (19), let (14), this. (2), case, (1), this, (1)
> **CLI Commands:** find (7), terraform (3), aws (2), make (2)
> **Env Vars:** aws (2), cidr (2), vpc (1), http (1), https (1)
> **Code Identifiers:** blog_sg (2), blog_new (1), ingress_rules (1), ingress_cidr_blocks (1), security_group_id (1)
> **UI Navigation:** scroll down (3), click on (2), scroll up (2)
> **Ports:** port 80 (2)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)


### 5. 4. Advanced Topics

#### Get ready to scale
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=0)** Now that we've covered the basics of working with Terraform, we can get our code ready to scale.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=5)** We'll want our blog server to have multiple instances and to scale those instances in response to load.
>
> **[0:12](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=12)** But we should also set up multiple environments so that changes can be tested before they reach customers.
>
> **[0:19](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=19)** First, we'll start by setting up our environment in a new VPC.
>
> **[0:23](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=23)** So we'll go to the Terraform registry.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=26)** That's just registry.[terraform.io](https://terraform.io).
>
> **[0:29](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=29)** And we'll search for VPC.
>
> **[0:33](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=33)** And we want this module down here, Terraform AWS modules slash VPC.
>
> **[0:41](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=41)** If we scroll down a little bit, there's an example right here that we can actually just copy and paste.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=47)** So I'll just click the copy button.
>
> **[0:51](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=51)** And then we can go over to our repository on GitHub, and we'll go down to main, and then click the little pencil icon here.
>
> **[1:02](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=62)** Click the drop down and go to [github.dev](https://github.dev).
>
> **[1:07](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=67)** Now let me rearrange things a little bit to make this easier to see.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=72)** I want to scroll down and find a good place to paste this.
>
> **[1:15](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=75)** I think right below the default VPC is probably a good place.
>
> **[1:21](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=81)** So we'll just paste that in.
>
> **[1:25](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=85)** Let's start by giving this a custom name.
>
> **[1:28](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=88)** So, to follow the pattern we've been using, we'll just call this blog underscore VPC.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=95)** We can keep the source the same.
>
> **[1:38](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=98)** For the name field, since this is the name that will show up in AWS, let's actually call this dev.
>
> **[1:47](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=107)** We can keep this site or range the same.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=111)** The AZs here are the availability zones.
>
> **[1:53](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=113)** and you'll wanna change this to match whatever region you're using.
>
> **[1:58](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=118)** In my case, this was US West 2.
>
> **[2:02](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=122)** So I'll just say US West 2 A, B, and C.
>
> **[2:15](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=135)** We can keep these private and public subnets the same.
>
> **[2:19](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=139)** We'll leave enable NAT gateway set to true, but we don't need the VPN gateway, so let's just delete that line.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=147)** For tags, let's keep Terraform equals true, but it makes it easy to spot that this was created by Terraform.
>
> **[2:33](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=153)** And we can just keep environment equals dev.
>
> **[2:39](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=159)** So now that we have all of that in there, let's go up and just delete this default VPC.
>
> **[2:45](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=165)** That won't actually delete the VPC, it just means Terraform won't know about it anymore.
>
> **[2:52](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=172)** Now, let's scroll down and make a couple of changes to start using this new VPC in our existing code.
>
> **[3:00](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=180)** Now, we'll need to tell our blog instance how to use this VPC, and so the way we'll do that is actually by adding a subnet ID.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=192)** We'll just say subnet ID equals, and then module.BlogVPC.PublicSubnets.
>
> **[3:27](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=207)** Here you can see auto-complete has come up with that, so I can just hit tab.
>
> **[3:34](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=214)** Then we'll actually need to specify which of the public subnets we want, and so we'll just use brackets and say zero for the first one.
>
> **[3:42](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=222)** Then we'll also need to update our security group at the bottom here.
>
> **[3:47](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=227)** We just need to change vpcid equals module.blogVPC,
>
> **[3:57](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=237)** and here I can just hit tab, and then we'll say .vpcid.
>
> **[4:07](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=247)** That should be all the changes we need here.
>
> **[4:10](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=250)** That should be all the changes we need to make.
>
> **[4:13](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=253)** Let me just close this file and click on the source control button on the left menu here.
>
> **[4:20](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=260)** And we'll need to give a name for this set of changes.
>
> **[4:23](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=263)** Let me close this.
>
> **[4:26](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=266)** So for this, we will just say, create a new dev VPC.
>
> **[4:34](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=274)** And you can see there's an alert here that these changes will be committed directly to the main branch.
>
> **[4:39](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=279)** I'm just gonna say, don't show again.
>
> **[4:41](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=281)** Now, normally you would wanna commit these to another branch and merge in, depending on your workflow, but we're just working directly in main here just to keep things simple.
>
> **[4:51](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=291)** So we can see we've got those changes that we just added, and we can say commit and push.
>
> **[4:58](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=298)** Now that those changes are committed and pushed, we can go over to Terraform Cloud, and I'll just click to overview.
>
> **[5:07](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=307)** Let me just reload the page.
>
> **[5:13](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=313)** So now we can see our commit has made its way into Terraform Cloud.
>
> **[5:17](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=317)** Let's just click in and watch that plan run.
>
> **[5:20](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=320)** And this change will actually recreate almost everything we already have deployed.
>
> **[5:24](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=324)** So let's look at the plan that it's created.
>
> **[5:27](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=327)** And we can see it's recreating almost everything that we already have deployed.
>
> **[5:32](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=332)** That's because it's creating a totally new VPC.
>
> **[5:35](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=335)** And so it has to create new instances in order to use that new VPC.
>
> **[5:41](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=341)** So when you're ready, feel free to review this, but it should be fairly straightforward.
>
> **[5:46](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=346)** It looks like a lot, but actually it's just because it's needing to recreate everything.
>
> **[5:50](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=350)** When you're ready to go, just click confirm and apply, and you can leave a comment here or not.
>
> **[5:59](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=359)** And now that should trigger another apply run, which we can watch happen right here.
>
> **[6:05](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=365)** If you run into any errors, double check your code against the solution branch and rerun Terraform.
>
> **[6:11](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=371)** Even if you didn't have any bugs in your code, Terraform can sometimes have an error on the first run when you make big changes like this, because the resources can be created out of order.
>
> **[6:22](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=382)** This can be avoided by careful use of resource ordering meta parameters, which can be worth it in a customer facing production environment, but often it's cleaner to just run Terraform twice rather than cluttering up the code for a one-time change.
>
> **[6:37](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=397)** So if your first run fails, try running Terraform again before checking the code too thoroughly.
>
> **[6:44](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=404)** And it looks like we're just waiting on the original blog instance to be deleted.
>
> **[6:49](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=409)** Let's see what else is going on.
>
> **[6:52](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=412)** It looks like everything else worked successfully.
>
> **[6:55](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=415)** This may take several minutes, so don't assume that it's failed if it just takes a little while.
>
> **[7:01](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=421)** You can see in my case, this took about four minutes to complete.
>
> **[7:04](https://www.linkedin.com/learning/learning-terraform-15575129/get-ready-to-scale-28200077?u=76281980&t=424)** So once this is complete and you've confirmed that everything is looking green here, or if you've had to rerun it and then confirm that it's working, you can move on to the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), module (3), delete (3), this, (3), this. (2)
> **CLI Commands:** terraform (13), make (4), aws (2), find (1)
> **Env Vars:** vpc (12), aws (2), nat (1), vpn (1)
> **UI Navigation:** scroll down (3), go to (2)
> **URLs:** [terraform.io](https://terraform.io) (1), [github.dev](https://github.dev) (1)
> **Tools:** github (2)
> **Code Identifiers:** blogvpc (1)
> **Prerequisites:** set up (1)

#### Expanding your installation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=0)** In this lesson, we'll be setting up a load balancer and an auto-scaling group for our application.
>
> **[0:05](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=5)** First, we'll set up the load balancer and just point it to our single instance.
>
> **[0:11](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=11)** We'll go to the Terraform registry and search for ALB.
>
> **[0:17](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=17)** We're looking for this module here, terraform-aws-modules-slash-ALB.
>
> **[0:24](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=24)** If you scroll down, there's an example here.
>
> **[0:27](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=27)** This is a little bit more complex than what we need, but we can adapt it to our use.
>
> **[0:31](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=31)** It's just the HTTP to HTTPS redirect.
>
> **[0:36](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=36)** Just click copy and go back to your code and open up main.tf.
>
> **[0:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=45)** Let's put this right below our rephrase.
>
> **[0:52](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=52)** Let's put this just at the end of our code after our security group.
>
> **[1:01](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=61)** So, we'll scroll up to the top, and the first thing we'll do is we'll rename this to blog underscore ALB, just to match the pattern we've been using.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=72)** And we can do the same thing for the name parameter.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=76)** This is the one that will actually show up in AWS, so choose something that is easy to spot.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=82)** vpcid we can use our vpc module so just say module dot blog underscore vpc dot vpcid and we can do the same thing for our subnets just use module dot blog dot vpc and then public subnets.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=105)** The example code here is actually defining security group rules inline.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=111)** And this can work if we're just setting up a very simple ALB, but actually this won't work with the way we're setting up this module.
>
> **[2:01](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=121)** So we'll just use the security group we already have defined.
>
> **[2:05](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=125)** So we'll delete this.
>
> **[2:07](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=127)** There's just a simple parameter here of security groups.
>
> **[2:11](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=131)** security underscore groups equals.
>
> **[2:15](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=135)** And this is a plural.
>
> **[2:16](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=136)** So that's a hint that we want to use a list or array here.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=140)** So we'll use square brackets and we'll just put our one security group in there.
>
> **[2:24](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=144)** So that's module dot blog underscore SG dot security group ID.
>
> **[2:31](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=151)** That's all we need for that.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=154)** To keep things simple, we won't be looking at logs in this course.
>
> **[2:36](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=156)** So we can remove this access logs parameter.
>
> **[2:41](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=161)** For the listeners block here, we can rename from this long example.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=167)** This is somewhat free-form, so we'll just say blog-http, and we'll keep the port and protocol.
>
> **[2:57](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=177)** Instead of redirects, we'll actually be forwarding traffic, and we can get rid of these lines here from the example.
>
> **[3:07](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=187)** So we're going to forward this to a target group, but we actually haven't set that up yet.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=192)** So we'll have to put in the name and then make sure our resource matches it.
>
> **[3:17](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=197)** So the parameter we'll use here is target underscore group underscore ARN equals AWS underscore LB underscore target underscore group.
>
> **[3:33](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=213)** And then we'll just name this blog and use the ARN parameter.
>
> **[3:39](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=219)** ARN here means Amazon Resource Number.
>
> **[3:41](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=221)** It's just a unique ID that Amazon uses, and it gives us a simple way to reference the target group that we're gonna set up.
>
> **[3:49](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=229)** So we're gonna keep things simple and not use HTTPS, so we can delete that whole section.
>
> **[3:56](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=236)** Now, there is an option again in this module to set up target groups, how the module set them up for us, but again, that actually won't work with what we're gonna set up for the autoscaling group later.
>
> **[4:08](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=248)** So instead of that, we'll just delete this.
>
> **[4:12](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=252)** And let's fix our tags.
>
> **[4:15](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=255)** We'll just say dev, and we can just delete this project tag.
>
> **[4:21](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=261)** So now we can set up our target groups.
>
> **[4:26](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=266)** And to find the syntax for that, we'll go back to the registry.
>
> **[4:31](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=271)** We'll scroll up to the top and search for AWS.
>
> **[4:36](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=276)** We want to look at the documentation for the AWS provider.
>
> **[4:39](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=279)** So we'll click that first link and then click on documentation.
>
> **[4:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=285)** Then on the left hand side, we'll just search for target underscore group.
>
> **[4:51](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=291)** And these first two are actually the two that we'll need.
>
> **[4:55](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=295)** So first, we'll set up a target group.
>
> **[4:57](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=297)** So just click on that.
>
> **[4:58](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=298)** And we're actually doing the exact same thing as this example, but we've already set up our VPC.
>
> **[5:03](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=303)** So we don't need this section.
>
> **[5:05](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=305)** we can just use the first one.
>
> **[5:08](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=308)** So we'll just copy that, go back to our code.
>
> **[5:12](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=312)** We'll paste that in at the end.
>
> **[5:14](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=314)** And we want to change the name to match the one we used up above, which is just blog.
>
> **[5:20](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=320)** And we can also change the name parameter too.
>
> **[5:23](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=323)** We'll just name that blog as well.
>
> **[5:26](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=326)** And then for the VPC ID, we want to use the one from our module.
>
> **[5:29](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=329)** So we'll say module.blog underscore VPC, and then VPC ID.
>
> **[5:37](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=337)** So now we can go back to our documentation, and we'll go to the target group attachment.
>
> **[5:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=344)** And we'll scroll down here.
>
> **[5:46](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=346)** Again, this is exactly what we're doing.
>
> **[5:48](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=348)** There's an AWS instance, a target group, that's what we just set up.
>
> **[5:53](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=353)** And now we just need to set up a resource to define the attachment between the two.
>
> **[5:58](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=358)** So we'll copy that and go back to our code.
>
> **[6:01](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=361)** We just paste this in at the end.
>
> **[6:04](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=364)** We'll change some of the names to blog, and we want to make sure we reference the blog target group, and of course the instance in our code is blog.
>
> **[6:17](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=377)** So that keeps it pretty simple.
>
> **[6:19](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=379)** That should be all we need now to get this single instance setup.
>
> **[6:23](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=383)** So let's go to source control, and we'll just type in load balancer for our commit message, and we'll click Commit and Push.
>
> **[6:38](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=398)** Once that's pushed, we can go over to Terraform Cloud.
>
> **[6:41](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=401)** Let me just refresh the page.
>
> **[6:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=405)** Here we can see that commit is getting planned, so let's click into that.
>
> **[6:53](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=413)** Here we can see our plan.
>
> **[6:55](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=415)** It's creating the attachment and the target group, setting up the ALB.
>
> **[7:02](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=422)** Now, it's asking us to confirm our changes, so let's do that.
>
> **[7:09](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=429)** That's finally complete.
>
> **[7:13](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=433)** Let's look at those resources in the AWS console.
>
> **[7:18](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=438)** So we'll go to EC2, and we'll scroll down and find our load balancers.
>
> **[7:29](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=449)** Here's that load balancer.
>
> **[7:33](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=453)** I'll just close this alert.
>
> **[7:38](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=458)** Here we have a DNS name, which is what matches our load balancer.
>
> **[7:42](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=462)** So let's see if we can see our web page.
>
> **[7:46](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=466)** There it is.
>
> **[7:47](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=467)** That takes us to the default web page for the AMI that we're using.
>
> **[7:51](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=471)** In this case, it's just Apache Tomcat.
>
> **[7:56](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=476)** Now that we've got our load balancer working with a single instance, let's set up an auto-scaling group so that we can easily scale up new instances.
>
> **[8:05](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=485)** So let's go back to the Terraform registry.
>
> **[8:08](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=488)** And this time we'll search for auto scaling.
>
> **[8:13](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=493)** And we'll use this module Terraform AWS module slash auto scaling.
>
> **[8:21](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=501)** Now, in this case, the documentation and configuration examples are a bit more complex, and we can't really just copy paste like we've been doing.
>
> **[8:30](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=510)** So I'm just going to set up a minimal config and explain it as I go.
>
> **[8:35](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=515)** The one thing we'll need from this page is this provision instructions in the lower right, so we'll just copy that.
>
> **[8:42](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=522)** And feel free to look through the examples here, they're actually very detailed.
>
> **[8:46](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=526)** This is a pretty powerful module and autoscaling groups are pretty powerful in their own right.
>
> **[8:52](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=532)** We're not really going to be using the advanced use cases of these, like autoscaling based on load.
>
> **[8:57](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=537)** We're just going to set ours up to manually autoscale.
>
> **[9:02](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=542)** But you can see there's quite a few options available.
>
> **[9:07](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=547)** So let's go back to our code.
>
> **[9:10](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=550)** And we'll just paste in at the end here, the provisioning instructions that we just copied.
>
> **[9:18](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=558)** Now the first thing we wanna do is change our module name.
>
> **[9:21](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=561)** We'll just follow our naming pattern.
>
> **[9:22](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=562)** So we'll call this blog underscore autoscaling.
>
> **[9:26](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=566)** And we can keep the source.
>
> **[9:28](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=568)** You can keep the version or you can delete it.
>
> **[9:30](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=570)** If you delete it, things might not work exactly the same.
>
> **[9:33](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=573)** So you might need to adapt later on.
>
> **[9:36](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=576)** I usually like to actually leave the version off while I'm working on these courses because it kind of helps me see when there's a change.
>
> **[9:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=584)** So let's delete this comment and we'll just put in name equals blog just to follow our same pattern.
>
> **[9:55](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=595)** So we'll need to set a couple of other parameters for auto scaling group, we'll use min size.
>
> **[10:00](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=600)** So that's the smallest our scaling can go.
>
> **[10:03](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=603)** We'll set that to one.
>
> **[10:05](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=605)** We'll say max size equals two.
>
> **[10:09](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=609)** You could also just leave this as one if you wanna have the experience of setting this up but don't actually wanna pay the cost of provisioning another instance.
>
> **[10:16](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=616)** We can also set a preferred size here but that's an optional argument.
>
> **[10:19](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=619)** So let's just leave it off to keep things simple.
>
> **[10:23](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=623)** The next parameter we need to add is VPC zone identifier.
>
> **[10:30](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=630)** And despite the name, this is actually expects a list of subnets, so we'll use our module.blogVPC.publicSubnets.
>
> **[10:43](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=643)** The next thing we'll need is a launch template.
>
> **[10:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=645)** So we'll say launch underscore template underscore name.
>
> **[10:50](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=650)** And we'll just say blog.
>
> **[10:53](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=653)** In this case, we'll just let the module take care of setting up the launch template for us since we don't really need to worry about those details in this case and the default will work just fine.
>
> **[11:03](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=663)** Next we'll need to give some details about how we want our instance to be provisioned and actually we can copy that from our instance.
>
> **[11:10](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=670)** So let's go up and just cut the instance and paste it down below because in the end we'll be getting rid of this instance definition altogether.
>
> **[11:20](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=680)** So we'll cut that out, go down to the bottom here, we'll paste it in for reference.
>
> **[11:30](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=690)** So we'll need to set security groups, but the argument is slightly different.
>
> **[11:35](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=695)** In this case, it's just security groups.
>
> **[11:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=704)** We'll do the same thing we did before where we'll set our single security group in brackets.
>
> **[11:50](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=710)** So module.blogsg.securitygroupid.
>
> **[11:51](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=711)** underscore SG, dot security group ID.
>
> **[11:57](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=717)** So let's delete that from our instance example.
>
> **[12:04](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=724)** We'll need an instance type, so we can just copy this exact line.
>
> **[12:09](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=729)** Actually, we'll just cut and paste.
>
> **[12:13](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=733)** Then to set our AMI, the parameter is slightly different, but we can just cut this and paste it in.
>
> **[12:22](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=742)** It's actually image ID.
>
> **[12:28](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=748)** Let's align our equal signs just to make things a little more readable.
>
> **[12:34](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=754)** Now, the last thing we'll need for our autoscaling group is to tell it about our load balancer.
>
> **[12:40](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=760)** We'll do that with a configuration block here.
>
> **[12:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=764)** That is traffic underscore source, underscore attachments, and we'll set that as blog ALB.
>
> **[12:56](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=776)** So that's our ALB equals, and then another block here, traffic source identifier equals, and then AWSLBTargetGroup.Blog.ARN.
>
> **[13:19](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=799)** Now, we don't need any of this from our instance so we can delete that.
>
> **[13:25](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=805)** There's one other thing we need to do before we commit this change, which is to look at our outputs.
>
> **[13:31](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=811)** Now, since we got rid of our instance, we can't actually use this output anymore.
>
> **[13:37](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=817)** So let's delete both of these for now.
>
> **[13:45](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=825)** And we'll create new ones a bit later on.
>
> **[13:51](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=831)** So let's commit those two changes.
>
> **[13:54](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=834)** We'll just call this one auto scaling.
>
> **[13:58](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=838)** And we'll say commit and push.
>
> **[14:05](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=845)** Now, let's go back to Terraform Cloud and we'll go to overview.
>
> **[14:09](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=849)** We can see that commit has already triggered a plan, so let's open that.
>
> **[14:21](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=861)** It looks like I have a typo here.
>
> **[14:25](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=865)** We need to update our target group.
>
> **[14:30](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=870)** Let's go back.
>
> **[14:34](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=874)** I mean, because we're using an autoscaling group, we don't need this target group attachment anymore.
>
> **[14:42](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=882)** Let's delete that whole thing.
>
> **[14:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=884)** That's actually what we were setting up here in the traffic source attachments.
>
> **[14:50](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=890)** Let's go ahead and commit that.
>
> **[14:52](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=892)** We'll say, move attachment as our commit message, and we'll commit and push that.
>
> **[15:02](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=902)** We'll go back to Terraform Cloud, look at our overview again.
>
> **[15:13](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=913)** Here we can see our plan.
>
> **[15:15](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=915)** It's actually going to delete our instance, and then the autoscaling group will recreate it.
>
> **[15:24](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=924)** We can confirm and apply that change and confirm the plan.
>
> **[15:31](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=931)** We'll just give that a minute to apply, and now our apply has finished, so let's go back to our AWS console, and we'll just reload this page.
>
> **[15:44](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=944)** So we can take our DNS again, we'll go here, actually we just refresh this.
>
> **[15:53](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=953)** And not very exciting, but there we go, it's the same page, now running from our auto-scaling group instead of directly to the instance.
>
> **[16:03](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=963)** If we go back to the console, we can see that auto-scaling group.
>
> **[16:06](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=966)** If we go to auto-scaling groups, and here it is.
>
> **[16:11](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=971)** Here's that group, and AWS adds this code on here after the name that we had given the auto-scaling group.
>
> **[16:17](https://www.linkedin.com/learning/learning-terraform-15575129/expanding-your-installation-28200078?u=76281980&t=977)** We can see our launch template, the AMI, all the details of how this is set up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), module (17), delete (12), case, (4), this. (3)
> **Env Vars:** aws (9), alb (7), vpc (5), arn (4), ami (3)
> **CLI Commands:** aws (10), terraform (7), make (3), find (2), apache (1)
> **Prerequisites:** set up (12), setup (1)
> **UI Navigation:** go to (6), scroll down (3), scroll up (2), click on (1)
> **Cross-References:** go back to (11)
> **Definitions:** is a  (4), is an  (1)
> **Exercise Files:** template (4)

#### Variables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=0)** - [Instructor] I've been a bit hand wavy about variables in Terraform so far, hoping that we could cover a good foundation of resources before we talk about them.
>
> **[0:09](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=9)** Here's some code for how you might define a variable for the AMI of an instance or ASG resource.
>
> **[0:16](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=16)** This example also defines a default so you'll always have a base.
>
> **[0:21](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=21)** We can use a variable like this in the instance config.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=26)** Using variables like this can be a handy way of organizing your code by keeping together anything you might change often, like the AMI ID, or say, the allow list of IP addresses for your security group.
>
> **[0:39](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=39)** It's possible to override that default value in Terraform Cloud or with the command line by passing in the -var parameter, which looks something like this.
>
> **[0:50](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=50)** Although that can be handy for learning and QA uses, it feels like a fairly manual process not in the spirit of Terraform.
>
> **[0:59](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=59)** Let's take a look at data sources, which are like variables, but allow data to be retrieved from elsewhere.
>
> **[1:05](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=65)** For example, pulled from AWS or from another Terraform configuration.
>
> **[1:11](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=71)** For something similar to the variable example, we might have code that looks like this.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=76)** And our instance config would have this line.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=79)** This code will query AWS for AMIs owned by self.
>
> **[1:24](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=84)** That is the current user with the name tag of web server and the deploy tag set to true and then it'll return the most recent.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=94)** This example introduces the filter block as a way of narrowing down what's returned in a data source.
>
> **[1:41](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=101)** It's really pretty simple, but it's a very powerful bit of code allowing you to always get the latest official Ubuntu AMI.
>
> **[1:49](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=109)** This is an introductory course so that's about as deep as we'll go with the code.
>
> **[1:53](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=113)** That said, I'd also recommend you avoid being too clever with your code until you really need it.
>
> **[2:00](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=120)** A big part of the point of a tool like Terraform is to provide documentation of your infrastructure in the form of code.
>
> **[2:08](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=128)** The more complex the logic in your code, the less it functions as a simple one-to-one representation of your infrastructure.
>
> **[2:15](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=135)** That said, there is a balance to be struck.
>
> **[2:18](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=138)** Hard coding everything might work for 10 resources, but it'll be a hassle at 100 and a nightmare at 1,000.
>
> **[2:26](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=146)** I think the best approach is to think about what you need in the next order of magnitude.
>
> **[2:32](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=152)** If you've got a couple instances for a hobby project, set it up as though you were the Ops team at a small startup with say 30 instances by abstracting some things away in variables and data sources.
>
> **[2:45](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=165)** The same is true for a small startup.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/variables?u=76281980&t=167)** Look into scaling into the next horizon maybe by using modules.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (5), aws (2)
> **Code Keywords:** this. (2), override (1), var (1), let (1), self (1)
> **Env Vars:** ami (3), aws (2), asg (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Split out your data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=0)** We're about ready to convert our code into a module, but first we'll need to do some work to pull out the configuration values.
>
> **[0:08](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=8)** The way I like to do this kind of thing is to start by duplicating my entire code file into the variables file.
>
> **[0:14](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=14)** That saves a lot of back and forth with copy and paste.
>
> **[0:18](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=18)** To get started, just open main.tf in your Git repo, and select everything in here, and say copy, then go over to variables, and right below here we'll just paste.
>
> **[0:37](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=37)** If this doesn't quite make sense, just follow along.
>
> **[0:40](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=40)** I think you'll get the hang of what I'm doing as we do it.
>
> **[0:44](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=44)** Let's go up to the top of our file and start up here.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=47)** We've already got our instance type.
>
> **[0:49](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=49)** Let's see if we can find some things we want to make into variables in this data block.
>
> **[0:55](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=55)** So it looks like the main things we'd probably want to change here are the name of the actual AMI image itself, and maybe the owner name down here.
>
> **[1:05](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=65)** So if we wanted to select a different AMI, we'd need to change both of those.
>
> **[1:09](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=69)** I think the rest of these are fairly static, so let's leave those alone.
>
> **[1:13](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=73)** So let's just delete some of this, and we'll convert this into a variable block.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=79)** So instead of saying values here, let's just say name.
>
> **[1:25](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=85)** Instead of owners, let's say owner, and we'll make this just a single value, and we can also make this one a single value.
>
> **[1:34](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=94)** So what we're doing here is actually defining the default.
>
> **[1:37](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=97)** So we'll say default and space these out a little better.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=105)** and let's put a close brand here, and we need an equal sign.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=111)** Let's just line everything up there.
>
> **[1:54](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=114)** All right, let's make this a variable.
>
> **[1:56](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=116)** Instead of data here, we'll just say variable, and what should we call this?
>
> **[2:02](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=122)** Let's call this AMI underscore filter.
>
> **[2:07](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=127)** This is what defines our filter.
>
> **[2:12](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=132)** So in order to set this up with this default the way we have, we actually need to define a custom type here.
>
> **[2:18](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=138)** So we'll say type equals object, and then we want parentheses and curly braces, and this is where we can define the parameters of our object here.
>
> **[2:31](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=151)** So we'll just say name equals string, and owner equals string.
>
> **[2:39](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=159)** Let's line those up too.
>
> **[2:44](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=164)** So that's the basic idea of what we're doing here.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=167)** We could also add, let's add a description.
>
> **[2:52](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=172)** Description, and let's say name filter and owner for AMI.
>
> **[3:02](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=182)** So now we'll be able to just use this in our code instead of having the values hard-coded.
>
> **[3:07](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=187)** Let's keep scrolling down and see if there's anything else that we want to use.
>
> **[3:12](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=192)** Down here in our blog VPC, I think that we might want to, well, first of all, we definitely want to have the environment name be something that we can turn into a variable.
>
> **[3:23](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=203)** Let's say variable environment, and we'll default that to dev.
>
> **[3:35](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=215)** Oops, there we go So we'll say default this one we don't need to create an object for and then we can just say description We'll say deployment environment All right now I think we might want to do something for our network addresses here you can see we're using 10.0 as the first set for all our addresses in this dev environment.
>
> **[4:11](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=251)** Let's call that one network prefix.
>
> **[4:14](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=254)** We'll say variable network underscore prefix.
>
> **[4:21](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=261)** Actually, now that I'm looking at that, I think that we should make this a complex variable too.
>
> **[4:26](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=266)** Let's make this an object as well.
>
> **[4:29](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=269)** We'll say type equals object.
>
> **[4:32](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=272)** That way we can correlate the environment to the network that that environment uses.
>
> **[4:38](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=278)** Staging and prod might use 10.1 and 10.2 as their network prefix and dev will use 10.0.
>
> **[4:47](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=287)** We'll define our object and we'll say name equals string, and then network prefix also equals string.
>
> **[4:58](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=298)** Let's just align those equal signs.
>
> **[5:01](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=301)** So it's a little more readable Okay, and then for our default instead of just a single string here let's say name equals dev and we'll say Network prefix equals 10.0 All right So now when we override this we'll be able to specify both the name and network prefix as part of the environment Okay, let's keep going here If you wanted to you could do something with these AZs maybe break out the region, but I think it's fine to just leave that And I think that's all we'll need from that
>
> **[5:52](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=352)** particular section Now, let's see.
>
> **[5:56](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=356)** Is there anything in the blog security group?
>
> **[5:59](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=359)** I don't think there's anything here We will probably end up changing the name, but we will use the environment name for that So we don't need to actually pull anything out of this And I think the same for the ALB all this is kind of already already parameterized pretty much or we're just going to leave hard-coded values And we don't need the LB target group In our auto scaling group, I think it might help to have them in and max size be variables that we set So, let's do that now and I think these ones can be independent you could combine them into sort of like a
>
> **[6:46](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=406)** ASG settings object, but sometimes it's simpler to just use a single variable.
>
> **[6:51](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=411)** So we'll just say variable And I can just hit backspace and grab that one in size and we'll say default equals 1 and Description Let's say minimum Number of instances in the ASG Pretty straightforward and let's just copy that and we'll use the same Code there as kind of a template for our max size So we'll just say max And Maximum
>
> **[7:39](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=459)** That should be two All right And I think that should be everything we need.
>
> **[7:48](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=468)** Let's see if there's anything else.
>
> **[7:49](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=469)** No, I think that looks good So we can just delete the rest of this code So I hope that makes sense because the idea of kind of copying it in place just so you can kind of edit it in place I think it can make things a little bit smoother You just have to make sure that you don't accidentally leave the code in there So now that we have all these variables defined And let's just do a quick scan to make sure we didn't have any typos or anything AMI filter name owner Yep, I think that's all correct so we can start using these in our main.tf So go ahead and open main.tf, and we'll go back up to the top And now we can just plug those in So here where we use the name for the AMI
>
> **[8:38](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=518)** filter now we can say var dot Am I underscore filter dot name and then we can do for the owner we can put in VAR dot a my filter dot owner And we should probably delete that comment since this is just a variable now And the same goes here.
>
> **[9:00](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=540)** We can do the same thing for our blog.
>
> **[9:02](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=542)** So we'll say VAR dot environment oops Environment dot name Then for our network prefix, we'll need to use the string interpolation syntax.
>
> **[9:17](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=557)** So that's dollar sign and then curly braces, and then we can just say var.Environment.NetworkPrefix.
>
> **[9:28](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=568)** We'll just go through and make that change.
>
> **[9:31](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=571)** I'll just do that manually, but if you're good with search and replace, now's the time to use it.
>
> **[9:41](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=581)** And maybe I'll just copy and paste a little bit.
>
> **[10:05](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=605)** And we'll make the same change to our public subnets.
>
> **[10:08](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=608)** because the way that works is they're in the one or 101 for the third set of numbers there.
>
> **[10:16](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=616)** So we'll paste that in, and here, and one more after this.
>
> **[10:33](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=633)** Okay, and then we can also change our environment down here in the tags.
>
> **[10:36](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=636)** So we'll say var dot environment.name.
>
> **[10:44](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=644)** And since we didn't pull anything out of the SG, we probably don't need to change that.
>
> **[10:51](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=651)** And we'll keep going down here to our ALB.
>
> **[10:55](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=655)** We didn't pull anything out of here, so we probably don't need to change anything.
>
> **[10:59](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=659)** Oh, we can change our environment tags.
>
> **[11:01](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=661)** So that should be var.environment.name.
>
> **[11:09](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=669)** And the autoscaling group was the last place we made variables.
>
> **[11:13](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=673)** So we'll say var.min underscore size and var.max size.
>
> **[11:22](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=682)** And that should be all we need.
>
> **[11:24](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=684)** Let's just do one quick check to make sure there aren't any typos.
>
> **[11:41](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=701)** Okay, that looks correct to me.
>
> **[11:45](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=705)** So let's close these now.
>
> **[11:49](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=709)** And we'll go over to our source control.
>
> **[11:52](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=712)** And let's just put in a commit message here.
>
> **[11:55](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=715)** We'll just say refactor to use variables.
>
> **[12:06](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=726)** we'll commit and push.
>
> **[12:09](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=729)** Okay, so let's go over to Terraform here, Terraform Cloud, and let's click on runs.
>
> **[12:16](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=736)** Actually, just click back to overview, you might be in a different place here.
>
> **[12:21](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=741)** And so here's our commit that just went out, and it's doing a plan for us.
>
> **[12:26](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=746)** If we did this correctly, there should be no changes, because all we did is just put existing values into variables.
>
> **[12:34](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=754)** We didn't actually change any of the values.
>
> **[12:36](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=756)** So let's look.
>
> **[12:38](https://www.linkedin.com/learning/learning-terraform-15575129/split-out-your-data-28406063?u=76281980&t=758)** And here we go, it says no changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (32), var (8), delete (3), module (1), type. (1)
> **CLI Commands:** make (13), terraform (2), git (1), find (1)
> **Env Vars:** ami (6), alb (2), asg (2), var (2), vpc (1)
> **Versions:** 10.0 (3), 10.1 (1), 10.2 (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Definitions:** we call this (1)

#### Modularize
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=0)** Now that we have variables pulled out of our code, we just about have a module, but there are a couple of things left that we should add.
>
> **[0:07](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=7)** First, it would be nice to have some output.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=10)** Let's look in main.tf and see if there's anything obvious there.
>
> **[0:19](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=19)** There's not a lot that we'd want to output since most of this is things that we're specifying.
>
> **[0:25](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=25)** But one thing that I think would be useful to add is outputting the DNS name that's generated for the ALB so that we can easily just go to that web page.
>
> **[0:35](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=35)** In order to find out how to do that, go over the Terraform registry and search for ALB.
>
> **[0:45](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=45)** And it should come up with this module.
>
> **[0:48](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=48)** So that's this one, Terraform AWS modules ALB.
>
> **[0:55](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=55)** and just scroll down and click on Outputs.
>
> **[1:02](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=62)** And this is actually the parameter we're looking for, DNS name.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=66)** So that's the DNS name that gets generated and attached to our load balancer.
>
> **[1:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=70)** So that's pretty easy to remember.
>
> **[1:12](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=72)** Let's go over to Main and open Outputs.
>
> **[1:17](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=77)** So we can just say Output, and let's just name this Environment underscore URL.
>
> **[1:25](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=85)** and we just say value equals module dot blog underscore ALB dot DNS underscore name.
>
> **[1:38](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=98)** So it's just pulling that output value from the module that we pulled from the Terraform registry.
>
> **[1:44](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=104)** Let me just fix the spacing here.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=108)** That should be all the changes we need to make to the outputs.
>
> **[1:54](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=114)** So now we're ready to create our module.
>
> **[1:58](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=118)** So the first thing you need to do is just create a new directory, and let's call this modules, say module slash blog because we're going to name our module blog.
>
> **[2:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=130)** So we're going to move most of our.tf files into this directory.
>
> **[2:15](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=135)** So just start dragging them up, we'll do main.tf, and you'll get prompted with this.
>
> **[2:19](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=139)** You can say don't ask me again if you want, or just click Move every time.
>
> **[2:24](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=144)** We're going to move outputs.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=147)** Oops, make sure you go into the blog directory.
>
> **[2:30](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=150)** We'll leave providers.
>
> **[2:32](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=152)** We're going to put that somewhere else in just a second.
>
> **[2:34](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=154)** And we'll move variables over.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=158)** Now, the other thing we want to do here is create a directory for our environments.
>
> **[2:43](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=163)** So we'll make another directory.
>
> **[2:45](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=165)** Oops, not there.
>
> **[2:46](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=166)** We'll make it in the root of repo.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=168)** And we'll just call this one environments.
>
> **[2:55](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=175)** And slash dev is going to be our first environment.
>
> **[2:58](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=178)** So we're doing the same thing, we're making two directories.
>
> **[3:02](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=182)** And I think this is kind of a standard practice.
>
> **[3:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=185)** I've seen this pattern a lot, where you have an environments directory, and then a modules directory kind of side by side.
>
> **[3:11](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=191)** They might be named slightly different.
>
> **[3:13](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=193)** This is a useful way of doing it to keep them in the same repo, but have the module split out.
>
> **[3:19](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=199)** That way, you're not having to make changes, code changes with two PRs across two different repos and complicated things like that.
>
> **[3:27](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=207)** So we'll take our providers and just drag that into our dev environment there.
>
> **[3:32](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=212)** So our module is all set up now.
>
> **[3:34](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=214)** And one thing we need to do is make sure that we actually use the module.
>
> **[3:38](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=218)** So we'll click on our dev environment here and click New File.
>
> **[3:43](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=223)** And we'll just call this main.tf.
>
> **[3:46](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=226)** And all we need to do here is just wrap our modules.
>
> **[3:49](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=229)** So we'll just say module dev.
>
> **[3:55](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=235)** And then for source, we can just say source equals dot dot slash dot dot slash module modules slash blog.
>
> **[4:06](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=246)** And that needs to be in quotes here.
>
> **[4:08](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=248)** So let's just put quotes around it.
>
> **[4:12](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=252)** Now, since our defaults are the correct ones for the dev environment, we don't need to change anything else.
>
> **[4:18](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=258)** Now, there are a couple of other things we need to do before we actually commit this change.
>
> **[4:23](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=263)** So first, we'll go over to Terraform and click on Settings, and we'll change the name here to blog-dev.
>
> **[4:33](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=273)** So what we're going to do is take our existing environment and convert it into our new dev environment, and then we'll set up some new workspaces for staging a prod later on, and we'll do the same sort of thing here.
>
> **[4:45](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=285)** So the first change we need is just to change the name.
>
> **[4:48](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=288)** And then if you scroll down to Terraform working directory, this is where we specify the environment directory within our repo.
>
> **[4:56](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=296)** So in our case, that's environments-dev.
>
> **[4:58](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=298)** See, I've already got it in my autocomplete here.
>
> **[5:02](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=302)** And that just matches your Terraform repo.
>
> **[5:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=305)** So once you've made those two changes, click save settings.
>
> **[5:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=310)** Then we'll go back to our code.
>
> **[5:13](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=313)** Now, if we pushed and applied these changes right now, Terraform would get very confused because it doesn't quite understand that we are keeping existing resources.
>
> **[5:23](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=323)** It will think that we want to delete everything we've created and create a whole new set of the exact same things.
>
> **[5:29](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=329)** Unfortunately, that's going to fail in this case because the load balancer has deletion protection enabled by default, and so we'd have to manually go and disable that or change our original code.
>
> **[5:40](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=340)** It's kind of a mess.
>
> **[5:42](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=342)** Thankfully, there's a pretty easy solution.
>
> **[5:44](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=344)** We can just tell Terraform that we've moved the resources to the new module, and then it will update its state file without making any changes in AWS.
>
> **[5:53](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=353)** So the way we can do that is in our environments, create a new file called moved.
>
> **[6:00](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=360)** You can actually name this whatever you want, but I kind of like to use this standard way of doing it.
>
> **[6:04](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=364)** So I'll name this moved.
>
> **[6:07](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=367)** And then within here, we're just going to use a bunch of moved blocks.
>
> **[6:12](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=372)** and those are based on the code from our module.
>
> **[6:15](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=375)** So let's actually just grab the code.
>
> **[6:18](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=378)** And this will kind of give us a starter, sort of like we did with the variables.
>
> **[6:22](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=382)** So we'll just highlight all of this and copy that, and then go over to moved, and we can just paste that in.
>
> **[6:33](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=393)** Now, all we need are the names.
>
> **[6:35](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=395)** So we can just delete all of this code for each of these.
>
> **[6:42](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=402)** Again, if this isn't making sense, I think it will as you go through it.
>
> **[6:46](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=406)** It's actually very straightforward.
>
> **[6:49](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=409)** We have the names of the things that we want to move, and the syntax for the move block is just moved, and then curly braces.
>
> **[6:59](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=419)** First, we say from.
>
> **[7:01](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=421)** This is what we're moving from, what the current name is.
>
> **[7:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=425)** So in this case, it would be module.blog underscore VPC.
>
> **[7:12](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=432)** So that's what Terraform calls that resource.
>
> **[7:16](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=436)** So we're moving it from there to somewhere, and the two is just going to be [module.dev](https://module.dev), because now we're splitting it out into the dev module, dot module.blog underscore VPC.
>
> **[7:34](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=454)** And we just need to repeat that process for all of these.
>
> **[7:37](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=457)** So let me just copy this block and we'll use it as a template.
>
> **[7:41](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=461)** So let's see, we've got five, so 1, 2, 3, 4.
>
> **[7:49](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=469)** And we'll delete that first line since we're done with that one.
>
> **[7:53](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=473)** So now we just need to change some of the values here.
>
> **[7:55](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=475)** So we'll change this to SG, SG, and the third one will be ALB.
>
> **[8:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=490)** And for the fourth one, let's get down to it.
>
> **[8:14](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=494)** You can see it's slightly different because it's not a module, so let's just copy that we'll paste it in here and I'll just use that directly.
>
> **[8:27](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=507)** That needs to be AWS underscore LB underscore target underscore group dot blog.
>
> **[8:37](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=517)** We can just use the exact same thing here.
>
> **[8:39](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=519)** So let me just paste it in again.
>
> **[8:42](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=522)** This time it's just scoped to our module.
>
> **[8:46](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=526)** So I hope that's making sense.
>
> **[8:47](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=527)** We're really just telling Terraform where to find the things.
>
> **[8:52](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=532)** And I just noticed I have more than I need.
>
> **[8:54](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=534)** I think I might have skipped something.
>
> **[8:56](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=536)** It looks like I don't have the ALB.
>
> **[8:57](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=537)** So let's just put that in here.
>
> **[9:00](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=540)** ALB, ALB.
>
> **[9:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=545)** And the last one here is going to be our autoscaling group.
>
> **[9:11](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=551)** Autoscaling.
>
> **[9:12](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=552)** Okay, so we should have five.
>
> **[9:15](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=555)** VPC, SG, the LB target group, blog ALB, and autoscaling.
>
> **[9:23](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=563)** Okay, now that that change is done, everything should be ready for us to actually run Terraform.
>
> **[9:28](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=568)** So let's just close these files.
>
> **[9:31](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=571)** We'll go over to our source control.
>
> **[9:34](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=574)** And let's just say deploy dev environment.
>
> **[9:42](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=582)** And you can see it's deleting the original files.
>
> **[9:45](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=585)** It's creating these new files, so there's quite a few changes here.
>
> **[9:49](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=589)** We'll commit and push.
>
> **[9:51](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=591)** Now let's go over to Terraform.
>
> **[9:53](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=593)** We'll go back to our workspace.
>
> **[9:56](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=596)** And let's click into the run that just started.
>
> **[10:00](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=600)** Now, if we've done everything right, it should say no changes.
>
> **[10:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=605)** So let's just give it a second.
>
> **[10:08](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=608)** And it looks like it worked.
>
> **[10:10](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=610)** It says no changes.
>
> **[10:11](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=611)** Your infrastructure matches the configuration.
>
> **[10:13](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=613)** So Terraform was able to actually understand those moved blocks and use them to just update the state file.
>
> **[10:22](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=622)** Once that finishes, make sure you don't forget to scroll down here and click Confirm and Apply.
>
> **[10:27](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=627)** We still need to apply these changes in order for Terraform to update the state file.
>
> **[10:34](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=634)** And while that's running, I'm just going to do one little cleanup task, go back to the files, click on Moved, and now we can just delete this.
>
> **[10:46](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=646)** This is technically sort of optional Terraform will let you just leave this file in place, but I think it's a good habit to clean these up as soon as you've applied the changes.
>
> **[10:55](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=655)** So we'll just call this cleanup.
>
> **[11:05](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=665)** And back in our Terraform run, we can see our apply finished.
>
> **[11:09](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=669)** We should see another commit here for our cleanup.
>
> **[11:14](https://www.linkedin.com/learning/learning-terraform-15575129/modularize-28411019?u=76281980&t=674)** And again, this one should also say no changes.

> [!info]- Semantic Content
>
> **Code Keywords:** module (20), let (19), delete (4), this. (2), case, (2)
> **CLI Commands:** terraform (16), make (7), aws (3), find (2)
> **Env Vars:** alb (9), dns (4), aws (3), vpc (3), url (1)
> **UI Navigation:** click on (4), scroll down (3), go to (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (2)
> **URLs:** [module.dev](https://module.dev) (1)
> **Exercise Files:** template (1)

#### Deploying environments
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=0)** Now that our code is modular, it's trivially easy to deploy another environment.
>
> **[0:06](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=6)** In Terraform Cloud, we can go back to our workspaces page.
>
> **[0:10](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=10)** HashiCorp recommends creating additional workspaces for each environment of a given configuration.
>
> **[0:15](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=15)** Let's set up a QA environment.
>
> **[0:18](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=18)** In workspaces, go up to New and select Workspace.
>
> **[0:25](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=25)** We'll select the default project, Click Create.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=30)** We're going to use Version Control Workflow just like we did before, and we'll say GitHub App, and then we'll select our repository.
>
> **[0:43](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=43)** You can add a description and some other things if you like.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=47)** Let's go down to Advanced Options.
>
> **[0:49](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=49)** Just like we did with the dev environment, we need to say where our QA environment will live, and that's going to be environments slash QA.
>
> **[0:58](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=58)** This is just the directory within our repo.
>
> **[1:05](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=65)** We'll scroll down to the bottom.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=66)** Let's look at the top here.
>
> **[1:08](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=68)** We're going to change the name, of course, to blog-qa, and the rest of the defaults should be okay for what we're doing.
>
> **[1:19](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=79)** So we'll click Create.
>
> **[1:24](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=84)** Terraform Cloud has a helpful reminder here, which is that the variables we set up for our other environment actually aren't available in this one.
>
> **[1:32](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=92)** In order to get this to work with Terraform and actually provision things in AWS, we'll need to set up some environment variables.
>
> **[1:39](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=99)** Let's click here, continue to Workspace Overview and then configure variables.
>
> **[1:46](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=106)** We'll scroll down a little bit.
>
> **[1:48](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=108)** We want to go down here and just say, add variable, and we want to use environment variable and you'll need the credentials for AWS.
>
> **[1:59](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=119)** So the first thing we'll do is put in our name of this environment variable, the key for it, which is AWS underscore access key ID.
>
> **[2:12](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=132)** And this one is not sensitive, so we can just paste that in the clear and say add variable.
>
> **[2:20](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=140)** and then we'll also need one for the secret access key.
>
> **[2:27](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=147)** Click Environment Variable, and the key here is actually the name of the variable, and this one is sensitive, so I'm going to click Sensitive.
>
> **[2:37](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=157)** That'll hide it, and also means it won't show up on the screen right now, but it'll hide it in logs and things like that.
>
> **[2:44](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=164)** There's a little tool tip here to explain that.
>
> **[2:48](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=168)** So we'll say add variable.
>
> **[2:53](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=173)** And that should be all we need to push changes out to AWS.
>
> **[2:57](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=177)** There's also an option here to create variable sets that can be used across multiple workspaces.
>
> **[3:03](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=183)** That's kind of out of the scope of this course.
>
> **[3:04](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=184)** But if you want to learn more about that, there's a link right here.
>
> **[3:10](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=190)** So with those changes made, we're ready to make the changes we need to our code.
>
> **[3:15](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=195)** So let's click on overview so that we're sitting at the right place here.
>
> **[3:20](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=200)** We'll go to our code on [github.dev](https://github.dev).
>
> **[3:25](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=205)** Now, the first thing we'll want to do is actually make a couple of changes to our module.
>
> **[3:30](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=210)** Click into main.
>
> **[3:33](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=213)** Now, one thing about our module is it can only work actually right now to have a single environment deployed because a lot of the names will conflict with each other if we deploy two of the same thing.
>
> **[3:45](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=225)** So, for example, with the VPC, we're using the environment name so there's no conflict there.
>
> **[3:51](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=231)** So one will be called dev and one will be called QA.
>
> **[3:54](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=234)** But if we look at the names of some of the other resources, we just called them something like blog.
>
> **[4:00](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=240)** So we just need to add in here a dollar sign, curly brace, and then var.environment.name and then closing curly brace and a dash.
>
> **[4:15](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=255)** I'm just going to copy that and paste it down on some of these other ones.
>
> **[4:22](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=262)** So here under the ALB we can do the same thing.
>
> **[4:25](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=265)** So we could just copy this and I'll paste it in down here.
>
> **[4:35](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=275)** And then we'll just go through all the modules and all the resources and add those names that way.
>
> **[4:41](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=281)** So, we need to add it to our target group and our auto scaling.
>
> **[4:52](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=292)** We should also add it to the launch template, just to keep things clear here.
>
> **[5:00](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=300)** And we'll want to put it here in our traffic source attachments.
>
> **[5:06](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=306)** And that should be all we need to do.
>
> **[5:08](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=308)** So let's save that.
>
> **[5:11](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=311)** So now our module is ready to actually deploy more than one environment.
>
> **[5:15](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=315)** To set up our second environment, we just go up to our environments directory, create a new sub-directory, and we'll call this one QA.
>
> **[5:23](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=323)** And we'll just copy the contents of these to start with.
>
> **[5:26](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=326)** So copy the text, create a new file in QA, call this one main.tf.
>
> **[5:35](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=335)** And we'll paste our code in there.
>
> **[5:38](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=338)** Okay, and let's make sure we change the name here to be QA.
>
> **[5:42](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=342)** And we'll change some of the settings in a second, but let's just get the code copied over.
>
> **[5:47](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=347)** So create another new file here, and that one's called providers.tf.
>
> **[5:55](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=355)** And we'll just, again, copy the code and paste that in for this environment.
>
> **[6:07](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=367)** Okay.
>
> **[6:10](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=370)** Now, under main, for our QA environment, we want to set some of the variables here.
>
> **[6:17](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=377)** So let's look at our available variables.
>
> **[6:20](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=380)** Instance type, AMI filter, those should be the same.
>
> **[6:24](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=384)** We want to set the environment, which has a name parameter and a network prefix parameter.
>
> **[6:33](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=393)** And then we could probably set min-size and max-size, too.
>
> **[6:39](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=399)** So let's set environment equals, and we'll say name equals QA, and network underscore prefix equals.
>
> **[6:54](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=414)** The other one was 10.0, so let's call this 10.1.
>
> **[6:58](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=418)** So those will be on totally separate subnets then.
>
> **[7:02](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=422)** And let's just set a min size and max size.
>
> **[7:05](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=425)** We'll set them both to one.
>
> **[7:07](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=427)** You can also set these to zero if you'd just like to set this up without actually provisioning any instances.
>
> **[7:12](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=432)** I'm gonna set it to one just so we can see that full process.
>
> **[7:15](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=435)** But if you wanna save a little money on your testing here and not pay AWS for these, just set it to zero.
>
> **[7:22](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=442)** All right, let's save that change.
>
> **[7:27](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=447)** And let's add one more file here.
>
> **[7:31](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=451)** Let's actually add an outputs.tf, and this will be how we can see the URL.
>
> **[7:40](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=460)** We'll say output, and we'll just name this one environment underscore URL, and we'll say value equals, we just get this from the module, so it's module.qa.environmenturl, so we can just pass through the value that we set up for the module.
>
> **[8:04](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=484)** And we could do the same thing in dev, but let's just do this here for now.
>
> **[8:09](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=489)** So we'll save that.
>
> **[8:11](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=491)** And that should be all we need to change.
>
> **[8:14](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=494)** So let's go over to our source control and we'll say, deploy QA and say, commit and push.
>
> **[8:26](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=506)** And then we can go over to Terraform Cloud.
>
> **[8:29](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=509)** and it might take a minute for this to show up.
>
> **[8:32](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=512)** On the first run, sometimes you have to do this manually.
>
> **[8:35](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=515)** Let's click over to runs and see if it picks it up.
>
> **[8:38](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=518)** I've noticed that sometimes you have to trigger the first plan manually, so we'll just give it a second.
>
> **[8:45](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=525)** Okay, let's just click new run and start.
>
> **[8:52](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=532)** So what's our error here?
>
> **[8:55](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=535)** Oh, it looks like we just have a typo.
>
> **[9:02](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=542)** Okay, it's a little confused about the way we're doing the auto scaling group, so let's just fix that small issue.
>
> **[9:10](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=550)** I think in this case we can just use quotes here.
>
> **[9:14](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=554)** Let's see if that works.
>
> **[9:15](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=555)** Now let's look at that error again.
>
> **[9:17](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=557)** Am I doing that in the right place?
>
> **[9:19](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=559)** Line 95.
>
> **[9:21](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=561)** Yeah.
>
> **[9:22](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=562)** All right, let's save that, see if that fixes it.
>
> **[9:30](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=570)** ALB name, and we'll commit and push that change.
>
> **[9:38](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=578)** Let's go back to Terraform Cloud.
>
> **[9:41](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=581)** This time it looks like it did pick up the plan.
>
> **[9:45](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=585)** Let's look in there.
>
> **[9:48](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=588)** It looks like that worked this time.
>
> **[9:54](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=594)** You can see we got 42 resources, which is what we were creating in the dev environment.
>
> **[10:00](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=600)** If you like, you can apply this, but we're actually not going to really do anything with this after this, but I'll go ahead and run it and then we can see the result.
>
> **[10:08](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=608)** I'll say confirm and apply, confirm plan.
>
> **[10:12](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=612)** This should take a little while because there's quite a bit that it's creating.
>
> **[10:16](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=616)** Once your apply has finished, you can go ahead and scroll down to outputs.
>
> **[10:22](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=622)** I just scrolled down to the bottom of our page here.
>
> **[10:24](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=624)** see everything deployed successfully in QA.
>
> **[10:28](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=628)** Let's go ahead and open up this URL and see if we can see that default page.
>
> **[10:33](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=633)** So I'll just say open link in a new tab.
>
> **[10:36](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=636)** Here's that default Apache Tomcat page, it's running on our second environment.
>
> **[10:42](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=642)** If you like, you can go through and do the same thing, set up say a prod environment.
>
> **[10:48](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=648)** You might also want to go in and add the outputs here in your code, so that Dev also outputs its URL.
>
> **[10:56](https://www.linkedin.com/learning/learning-terraform-15575129/deploying-environments-28401073?u=76281980&t=656)** We're at the end of the course here, so I'm not going to walk through that, but I'd encourage you to try it, just play around a little bit with the way to work with environments.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), module (6), this, (2), continue (1), var (1)
> **CLI Commands:** terraform (5), aws (5), make (3), apache (1)
> **Env Vars:** aws (5), url (4), alb (2), vpc (1), ami (1)
> **Prerequisites:** set up (6), configure (1), you'll need (1)
> **UI Navigation:** scroll down (3), select the (1), click on (1), go to (1)
> **Analogies:** just like (3), for example (1)
> **Versions:** 10.0 (1), 10.1 (1)
> **Cross-References:** go back to (2)

#### Cleaning up: Terraform destroy
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=0)** Since we're working with real Cloud resources, we should be sure to clean up to avoid paying for AWS resources that aren't being used.
>
> **[0:08](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=8)** The great thing about Terraform is that we can freely delete all of the infrastructure we've defined and still deploy it later from the same code.
>
> **[0:16](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=16)** You'll be able to come back to this code if you like and start again.
>
> **[0:21](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=21)** To delete our Dev environment, let's click on ''Blog Dev'' and go to ''Settings''.
>
> **[0:30](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=30)** and scroll down here to Destruction and Deletion.
>
> **[0:35](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=35)** You want to make sure Allow Destroy Plans is checked, and we'll go ahead and click Queue Destroy Plan.
>
> **[0:43](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=43)** It says enter the workspace name to confirm.
>
> **[0:46](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=46)** We just type in blog-dev Queue Destroy Plan.
>
> **[0:52](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=52)** That'll start a Destroy Plan going, but in this case, we've actually got another plan queued up.
>
> **[0:58](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=58)** That's just from the last time we pushed a Terraform.
>
> **[1:00](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=60)** Let's go ahead and discard that one and just say, discard that and run this now.
>
> **[1:05](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=65)** It's saying the workspace is locked.
>
> **[1:06](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=66)** That's because we are currently in the middle of a Terraform run.
>
> **[1:10](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=70)** It tried to run Terraform and it's waiting for us to confirm.
>
> **[1:13](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=73)** So we can go ahead and say unlock because we're not going to do anything else in this environment.
>
> **[1:17](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=77)** So while this is running, there's one little thing we'll need to take care of in our particular case.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=82)** we'll go over to our console and click on EC2.
>
> **[1:30](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=90)** Now, the way the module is set up for setting up the ALB, it actually puts deletion protection on the ALB.
>
> **[1:38](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=98)** We could change the parameter for that and then push again, but it's easy enough to just go in and manually remove deletion protection.
>
> **[1:45](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=105)** We can go to load balancers here under resources or on the left-hand side, You can also find load balancers, and let's go ahead and change it for both of them.
>
> **[1:57](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=117)** So click on both of these, which I think we need to do this one at a time.
>
> **[2:00](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=120)** So let's do start with blog ALB, and we will say edit load balancer attributes, scroll down, and here it's deletion protection.
>
> **[2:12](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=132)** We'll just uncheck that.
>
> **[2:13](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=133)** If you leave that checked, Terraform is going to have a hard time deleting it.
>
> **[2:17](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=137)** It's not going to be able to do it, and it will fail in a kind of confusing and difficult way.
>
> **[2:21](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=141)** So we'll say save changes.
>
> **[2:24](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=144)** Go back to load balancers and we'll do the same thing for our other ALB.
>
> **[2:39](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=159)** Okay that's all we should need to do in order to actually apply Terraform to delete.
>
> **[2:45](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=165)** So let's So let's go back to our run.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=167)** We see the plan is finished now.
>
> **[2:49](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=169)** And it just says 42 to destroy.
>
> **[2:51](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=171)** It's just going to delete everything.
>
> **[2:53](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=173)** So let's go ahead and go to the bottom here.
>
> **[2:56](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=176)** And we'll say confirm and apply, confirm plan.
>
> **[3:00](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=180)** And we'll go ahead and let that run.
>
> **[3:03](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=183)** And while that's running, let's get a deletion queued up for our other environment as well.
>
> **[3:09](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=189)** So we'll hop over to blog QA.
>
> **[3:13](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=193)** And here is where we just pushed it out.
>
> **[3:15](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=195)** We'll go to settings, destruction and deletion, and we'll do the same thing, Q destroy plan.
>
> **[3:22](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=202)** And in this case, we'll type blog-QA.
>
> **[3:27](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=207)** Okay, and we'll get that plan going.
>
> **[3:29](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=209)** Let's go back to our other environment.
>
> **[3:30](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=210)** So workspaces, blog dev, and we click on this latest run, and it should be going through.
>
> **[3:43](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=223)** This can kind of take a while, especially when it's deleting a VPC.
>
> **[3:47](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=227)** So, it can be a little bit slow.
>
> **[3:50](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=230)** And sometimes, for whatever reason, maybe something won't quite delete or Terraform will timeout.
>
> **[3:57](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=237)** And in those cases, you can rerun this.
>
> **[3:59](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=239)** Or actually, sometimes the simpler way, especially in a small stack like this, is to just go into the EC2 AWS console and manually delete the things.
>
> **[4:09](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=249)** Sometimes there will be things deleted out of order and Terraform will get a little bit confused.
>
> **[4:15](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=255)** But let's go ahead and see if it manages to do this on its own.
>
> **[4:19](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=259)** Okay, and it looks like our run has completed.
>
> **[4:24](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=264)** And because we went ahead and removed that deletion protection, Terraform didn't have any trouble.
>
> **[4:29](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=269)** So that's our blog environment gone, our dev environment gone.
>
> **[4:32](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=272)** Let's go back to workspaces.
>
> **[4:35](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=275)** And QA should be ready to apply at this point.
>
> **[4:37](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=277)** So we'll click into that.
>
> **[4:40](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=280)** Click into our run.
>
> **[4:43](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=283)** And again, it's finished its plan.
>
> **[4:45](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=285)** It's just waiting on us to confirm and apply.
>
> **[4:47](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=287)** So we'll do that.
>
> **[4:51](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=291)** And while we're waiting for that, let's go back to EC2.
>
> **[4:57](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=297)** And we could actually watch some of these things being deleted.
>
> **[4:59](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=299)** So we'll click into our load balancer.
>
> **[5:01](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=301)** See there, our QA, our dev environment is gone.
>
> **[5:05](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=305)** By the way, if you're not seeing your resources here, Make sure up in the upper right hand corner here to click down and choose the right region.
>
> **[5:14](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=314)** So if you're in US East 1, whatever you chose when you configured your environment.
>
> **[5:19](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=319)** I'm in US West 2, so everything's showing up where it should.
>
> **[5:23](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=323)** All right, let's refresh.
>
> **[5:25](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=325)** That looks like maybe our ALB has been deleted.
>
> **[5:28](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=328)** Let's give that a second.
>
> **[5:29](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=329)** Taking a little bit of time.
>
> **[5:30](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=330)** Let's see if our instance is still up.
>
> **[5:33](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=333)** We can see our instances are listed here, but one is listed as terminated and one is still shutting down.
>
> **[5:40](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=340)** And if we refresh, that might take a couple of minutes, let's go back to Terraform.
>
> **[5:47](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=347)** So it's a little more than halfway through, almost done, about 12 things left.
>
> **[5:53](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=353)** And that's our other environment done.
>
> **[5:57](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=357)** So it looks like everything should be cleaned up now, I'm just going to look in AWS.
>
> **[6:04](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=364)** It can be especially expensive if you leave instances running.
>
> **[6:09](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=369)** just double check this.
>
> **[6:10](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=370)** You wouldn't want to get a bill for something that you're not using.
>
> **[6:14](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=374)** So instances, make sure those are cleaned up.
>
> **[6:16](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=376)** Load balancers, this should come up empty.
>
> **[6:22](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=382)** The page is being a little slow for me right now.
>
> **[6:26](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=386)** But I think we're good.
>
> **[6:29](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=389)** If you'd like, you could also go in here to your workspaces and delete the individual workspaces.
>
> **[6:35](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=395)** So for that, let's click on QA and go to Settings, and then Destruction and Deletion, and here you can actually delete the workspace itself, but that's optional.
>
> **[6:45](https://www.linkedin.com/learning/learning-terraform-15575129/cleaning-up-terraform-destroy-28401072?u=76281980&t=405)** As long as there's nothing provisioned, this shouldn't cost you anything.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), delete (8), case, (2), this. (2), case. (1)
> **CLI Commands:** terraform (10), aws (3), make (3), find (1)
> **Env Vars:** alb (5), aws (3), ec2 (3), vpc (1)
> **UI Navigation:** click on (5), go to (5), scroll down (2)
> **Cross-References:** go back to (6)
> **Tools:** aws console (1)
> **Prerequisites:** set up (1)

#### Terraform CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=0)** - [Instructor] We've used Terraform Cloud in this course so that we could get up and running quickly.
>
> **[0:04](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=4)** However, nearly all the functionality that we've used could be duplicated using the open-source command line tool instead.
>
> **[0:11](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=11)** We're going to take a quick look in this video at some of the features on how to duplicate some of that functionality.
>
> **[0:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=17)** One thing we need to be aware of is that Terraform Cloud has managed collaboration for us and managed the backend for us.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=26)** So in order to use Terraform in the command line, we need to set something up as a backend.
>
> **[0:31](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=31)** Otherwise we won't be able to collaborate without undoing each other's changes, if you're working on a team.
>
> **[0:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=38)** So let's take a look at the documentation just to see what the options are for this.
>
> **[0:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=43)** One of them, if you read here, is actually, to integrate with Terraform Cloud.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=47)** Which I could see some uses for, but it's not really what I'm trying to highlight in this video.
>
> **[0:53](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=53)** There's always a local backend available by default which won't handle any resource contention but it will work if you're working individually.
>
> **[1:03](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=63)** And then there are a lot of available backends, if you look on the left hand menu here.
>
> **[1:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=68)** The two I want to highlight are Consul which is another HashiCorp product that's open-source.
>
> **[1:16](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=76)** And if you have Consul set up, I think it's pretty straightforward to set up your backend using Consul.
>
> **[1:22](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=82)** The other pretty simple one is S3 which is Amazon's simple storage option.
>
> **[1:29](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=89)** And here you can see it's pretty straightforward configuration as well.
>
> **[1:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=93)** You also need to set up permissions.
>
> **[1:35](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=95)** So if you're familiar with Amazon, this isn't too tricky.
>
> **[1:40](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=100)** Let's look at the command line tool a little bit and just see what some of the differences and options are.
>
> **[1:46](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=106)** And one thing I want to highlight is terraform -help.
>
> **[1:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=111)** And then using a pipe and then the less command, just to make this a little easier to read.
>
> **[1:57](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=117)** The help features of the command line Terraform tool are really good.
>
> **[2:01](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=121)** And there's a lot of detail that you can get into by digging into sub-commands.
>
> **[2:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=126)** So this is the high-level of what commands are available.
>
> **[2:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=130)** And some of these are pretty familiar like plan and apply.
>
> **[2:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=134)** And then some other ones, we should be using like destroy, if you cleaned up your infrastructure after finishing the exercises, make sure to destroy everything.
>
> **[2:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=144)** Init is just what runs at the beginning to start your Terraform which Terraform Cloud did for us.
>
> **[2:30](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=150)** Validate has been running on a Terraform code but it just doesn't show up in the Cloud UI.
>
> **[2:36](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=156)** Let's look at how the deeper level of help works.
>
> **[2:40](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=160)** So if we run terraform plan -help.
>
> **[2:44](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=164)** You can see there's a very detailed explanation.
>
> **[2:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=167)** There's also a short usage definition up here.
>
> **[2:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=172)** And then detailed documentation about what the options are.
>
> **[2:57](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=177)** Terraform has great online documentation but the built-in documentation is extremely handy, especially if you're right in the middle of something and don't want to switch tasks.
>
> **[3:08](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=188)** Let's run Terraform plan and see how that looks on the command line.
>
> **[3:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=193)** I'm working a local copy of the repository.
>
> **[3:15](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=195)** It's the same code we've been working with, just kind of set at the middle of the course.
>
> **[3:21](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=201)** It actually runs pretty quickly.
>
> **[3:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=204)** And here you can see, it's very similar but I find it a little bit harder to read than the web interface.
>
> **[3:30](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=210)** So at this point, it's just adding a security group.
>
> **[3:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=214)** This is when we're working with the module.
>
> **[3:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=218)** There's a note here also that you can output this to a text file, if you like.
>
> **[3:44](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=224)** I won't run apply because it's essentially the same output.
>
> **[3:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=228)** Let me clear this screen here.
>
> **[3:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=231)** There's another command, Terraform graph that I want to highlight.
>
> **[3:55](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=235)** (keys clacking) Terraform graph will actually let you see a visual representation of your Terraform code.
>
> **[4:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=245)** And it won't show it to you in the terminal, you'll need to load it into a program like graph is or there's a web-based solution you can use.
>
> **[4:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=254)** So, let's look at an example from the documentation.
>
> **[4:18](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=258)** This is the kind of output that graph is will show from the file generator from Terraform graph.
>
> **[4:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=264)** It's a little bit confusing but the thing to pay attention to is that we have our different resources connected together, all pointing toward our provider.
>
> **[4:34](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=274)** But that there's also some intelligence in the way that the things are ordered.
>
> **[4:38](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=278)** And that's to make sure that we have our dependencies right.
>
> **[4:41](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=281)** So for example, you wouldn't want to create your instance before the VPC was defined.
>
> **[4:47](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=287)** Terraform would have an error then because it wouldn't be able to use that VPC.
>
> **[4:51](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=291)** So it needs to do a little bit of work to figure out what order things happening.
>
> **[4:55](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=295)** And looking at the graph, can help you figure out problems with that.
>
> **[4:59](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=299)** Sometimes there are issues that Terraform just can't figure out and you need to actually, manually specify some ordering.
>
> **[5:06](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=306)** I also just find it somewhat insightful to kind of get a view into Terraform's brain, so to speak.
>
> **[5:12](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=312)** It shows you what's going on inside the application, in a way that just, is not obvious when it's presented in a linear format.
>
> **[5:20](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=320)** There are some features of the command line tool that aren't really directly replicated in the cloud tool, at least not yet.
>
> **[5:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=326)** And one I want to highlight is Terraform state.
>
> **[5:30](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=330)** So, if we look in our repo again and run terraform state, gives us the help output by default because it requires the sub-command.
>
> **[5:39](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=339)** So one of them is list and this is for investigating our state file.
>
> **[5:45](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=345)** So, we'll run terraform state list.
>
> **[5:49](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=349)** And the output to this is the actual state of our infrastructure at this point, at least as far as Terraform is concerned.
>
> **[5:56](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=356)** So, this is what it thinks we have.
>
> **[5:58](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=358)** If we wanted to, we could investigate these further.
>
> **[6:01](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=361)** So let's do terraform state show and then we'll use our aws instance.
>
> **[6:13](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=373)** So here, we can dig into the very detailed output.
>
> **[6:16](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=376)** This is everything Terraform knows about this instance.
>
> **[6:19](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=379)** So things like subnet, its IP address.
>
> **[6:24](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=384)** There are some pretty powerful things you can do here.
>
> **[6:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=386)** For example, if we had another instance running and we wanted to import it into our state, even if it wasn't created by Terraform, we could do that here.
>
> **[6:35](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=395)** But then, as soon as you run Terraform, it will say it's going to delete that instance because there's no code associated with it.
>
> **[6:42](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=402)** That can be used as a little bit of a trick for quickly developing code for existing resources.
>
> **[6:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=408)** So you manually provision something in AWS and then import it and run Terraform to find out what it'll delete and that's your starting place for your code.
>
> **[7:01](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=421)** Let's look at the help one more time.
>
> **[7:05](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=425)** Because there are a couple of commands that we haven't really talked about.
>
> **[7:09](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=429)** There is a command here, taint, which is to mark a resource instance as not fully functional.
>
> **[7:17](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=437)** Tainting is a way of telling Terraform that it needs to recreate an instance.
>
> **[7:23](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=443)** Let's look at the help page for the taint command.
>
> **[7:28](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=448)** So, there's some more detailed explanation here.
>
> **[7:32](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=452)** But taint is a command you can use to tell Terraform to reprovision a resource that isn't working quite right.
>
> **[7:39](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=459)** And it might be that the state seems to be correct.
>
> **[7:42](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=462)** So from Terraform's point of view, everything's working but maybe something internally has failed on the resource.
>
> **[7:48](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=468)** So, we can try it on our instance that we just provisioned.
>
> **[7:52](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=472)** So we'll say terraform taint aws instance.blog and it says it's been marked as tainted.
>
> **[8:01](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=481)** And then if we run terraform apply, we should see it saying, it's going to delete and reprovision.
>
> **[8:10](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=490)** So we see here, it says one to destroy and one to add.
>
> **[8:14](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=494)** And we can scroll up.
>
> **[8:15](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=495)** There's a lot of changes that show up in this view.
>
> **[8:18](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=498)** But what it boils down to is that it's replacing that one instance.
>
> **[8:26](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=506)** Yeah, here we go. It's tainted and must be replaced.
>
> **[8:29](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=509)** So, let's say yes to this.
>
> **[8:33](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=513)** And there, it's recreated our instance.
>
> **[8:37](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=517)** There's also the option to untaint something if it's been marked as tainted and actually doesn't need to be reprovision.
>
> **[8:43](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=523)** So those are some of the basic commands and a little bit of a view into some of the more advanced functions of Terraform.
>
> **[8:50](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=530)** As I said, the command line tool is fully functional and really can duplicate pretty much everything we did in the Cloud Consul.
>
> **[8:56](https://www.linkedin.com/learning/learning-terraform-15575129/terraform-cli?u=76281980&t=536)** It's just that the interface is a little bit different and maybe a little bit more difficult to get started with.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (34), make (3), find (3), aws (3)
> **Code Keywords:** let (11), delete (3), this. (2), interface (2), for, (1)
> **Tools:** command line (7), terminal (1)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (3), you'll need (1)
> **Env Vars:** vpc (2), aws (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=0)** - [Instructor] This course is meant as a very basic introduction.
>
> **[0:03](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=3)** Let's look at some of the next steps on your journey learning Terraform.
>
> **[0:08](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=8)** When I first started working with Terraform, there weren't really many good modules available.
>
> **[0:13](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=13)** But in the last few years, the Terraform Registry has become an incredible resource.
>
> **[0:18](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=18)** Before you start any Terraform-related project, I'd recommend looking at the registry to see if someone else has already solved the problem.
>
> **[0:26](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=26)** Even if you don't use the module, you can often get a good starting place for how you want to create your own.
>
> **[0:32](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=32)** Unlike your application code, your infrastructure is probably substantially similar to a lot of others.
>
> **[0:38](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=38)** If you can't find what you need in the registry, you can often find a great starting point by searching the web and looking at examples from blogs or Stack Exchange.
>
> **[0:47](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=47)** As Picasso said, "Good artists copy. Great artists steal."
>
> **[0:52](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=52)** Terraform has some of the best documentation I've ever encountered so even though this is an obvious suggestion, I'd highly recommend you look at the official documentation.
>
> **[1:02](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=62)** The other piece of that is just to realize that Terraform is very domain specific, so at least for me it isn't worth trying to memorize every parameter or every nuance of syntax.
>
> **[1:13](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=73)** As you work, just keep the documentation open and use a lot of copy and paste.
>
> **[1:18](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=78)** The docs also include some very detailed examples, which can often be used with pretty minimal adjustment.
>
> **[1:26](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=86)** I was once complaining to a friend about a tricky project I was working on.
>
> **[1:30](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=90)** He was a former camp counselor and he gave me the advice he used to give to his campers who didn't want to do something.
>
> **[1:37](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=97)** He said, "If you can't get out of it, get into it."
>
> **[1:41](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=101)** When you first start learning Terraform, you might think you'll be able to get out of having to learn the nuances of AWS or whatever cloud provider you're using.
>
> **[1:50](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=110)** Terraform does smooth over some of the rough edges of AWS but ultimately there's no replacement for learning how the stack itself works.
>
> **[1:59](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=119)** I find this is especially true for some of the more confusing and quirky aspects like the way load balancers and auto-scaling work together.
>
> **[2:07](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=127)** So my advice is that you get into the details of your cloud provider by checking out the courses in the LinkedIn Library.
>
> **[2:13](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=133)** Since you've got a solid base in Terraform, you could even work your way through the exercises of an AWS or Azure course just by writing the Terraform code.
>
> **[2:24](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=144)** I think I say this in all my courses but the best way to learn is to explore, try things out, and just have fun.
>
> **[2:31](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=151)** I still find it a bit thrilling to be able to instantly deploy a complex infrastructure in just a few keystrokes.
>
> **[2:38](https://www.linkedin.com/learning/learning-terraform-15575129/next-steps?u=76281980&t=158)** I hope this course has given you a little taste of just how powerful Terraform can be and inspired you to start exploring more.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (11), find (4), aws (3)
> **Env Vars:** aws (3)
> **Code Keywords:** let (1), module (1)
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