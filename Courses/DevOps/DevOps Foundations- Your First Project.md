---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: devops-foundations-your-first-project-24355651
url: "https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651"
duration_minutes: 237
duration: 3h 57m
level: Beginner
updated: 7/29/2024
learners: 79197
skills:
  - DevOps
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEpgiTxu5Hhzg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1718999721632?e=2147483647&amp;v=beta&amp;t=AXa-UVZXmn6BchOxkEdy32o4JsYaeLwHjHmRShYWw3I"
linkedin_topic: DevOps
learning_paths:
  - '[[Getting Started with DevOps]]'
prev_courses:
  - '[[DevOps Foundations- Monitoring and Observability]]'
path_nav: '[{"path":"Getting Started with DevOps","position":5,"total":5,"prev":"DevOps Foundations- Monitoring and Observability","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/devops
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/DevOps%20Foundations-%20Your%20First%20Project.md)

![DevOps Foundations: Your First Project](https://media.licdn.com/dms/image/v2/D560DAQEpgiTxu5Hhzg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1718999721632?e=2147483647&amp;v=beta&amp;t=AXa-UVZXmn6BchOxkEdy32o4JsYaeLwHjHmRShYWw3I)

# DevOps Foundations: Your First Project

> Curious about how to put DevOps principles into practice? This course can help. Join instructor and DevOps expert Carlos Nunez as he demonstrates how to apply DevOps principles to a sample app for a fictitious travel booking company. Throughout the course, Carlos shows you how to leverage popular tools and methodologies to make updating, testing, and releasing the app a breeze. After explaining ho

> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651) | 3h 57m | Beginner | 79K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Your first project, DevOps-ified!](#your-first-project-devops-ified)
  - [What you should know](#what-you-should-know)
  - [Configuring AWS](#configuring-aws)
- [**1. The Project/The Mission**](#1-the-projectthe-mission) (3 videos)
  - [So what is this DevOps thing anyway?](#so-what-is-this-devops-thing-anyway)
  - [Your application, pre-DevOps](#your-application-pre-devops)
  - [Your application, post-DevOps](#your-application-post-devops)
- [**2. Testing Locally with Docker**](#2-testing-locally-with-docker) (4 videos)
  - [Bring production to your laptop with Docker](#bring-production-to-your-laptop-with-docker)
  - [Installing Docker](#installing-docker)
  - [Writing your first Dockerfile](#writing-your-first-dockerfile)
  - [Writing your first Docker Compose manifest](#writing-your-first-docker-compose-manifest)
- [**3. Getting Started with Git**](#3-getting-started-with-git) (4 videos)
  - [Version control: The secret weapon of DevOps](#version-control-the-secret-weapon-of-devops)
  - [Installing Git](#installing-git)
  - [Initializing your first Git repository](#initializing-your-first-git-repository)
  - [Getting familiar with the Git workflow](#getting-familiar-with-the-git-workflow)
- [**4. Collaborative Version Control**](#4-collaborative-version-control) (6 videos)
  - [Beyond local repositories](#beyond-local-repositories)
  - [Introducing GitLab](#introducing-gitlab)
  - [Creating the GitLab Docker Compose service](#creating-the-gitlab-docker-compose-service)
  - [Starting the GitLab Compose service](#starting-the-gitlab-compose-service)
  - [Creating our first GitLab project](#creating-our-first-gitlab-project)
  - [Connecting Git to GitLab](#connecting-git-to-gitlab)
- [**5.  Testing Your App with RSpec, Capybara, and Selenium**](#5-testing-your-app-with-rspec-capybara-and-selenium) (9 videos)
  - [Test often, ship often](#test-often-ship-often)
  - [Setting up your test](#setting-up-your-test)
  - [Viewing our test harness in Docker Compose](#viewing-our-test-harness-in-docker-compose)
  - [Updating the Dockerfile](#updating-the-dockerfile)
  - [Running the test](#running-the-test)
  - [Finding criteria for a unit test](#finding-criteria-for-a-unit-test)
  - [Writing the unit test](#writing-the-unit-test)
  - [Setting up Selenium](#setting-up-selenium)
  - [Running your test with Selenium](#running-your-test-with-selenium)
- [**6. Infrastructure as Code with OpenTofu**](#6-infrastructure-as-code-with-opentofu) (10 videos)
  - [Deploy with confidence with infrastructure as code](#deploy-with-confidence-with-infrastructure-as-code)
  - [Finding the version of OpenTofu to use](#finding-the-version-of-opentofu-to-use)
  - [Adding OpenTofu to Docker Compose](#adding-opentofu-to-docker-compose)
  - [AWS deployment explained](#aws-deployment-explained)
  - [Writing your integration test](#writing-your-integration-test)
  - [Writing OpenTofu code](#writing-opentofu-code)
  - [Reviewing the OpenTofu plan](#reviewing-the-opentofu-plan)
  - [Applying the OpenTofu plan](#applying-the-opentofu-plan)
  - [Running your integration test](#running-your-integration-test)
  - [Destroying the website from AWS S3](#destroying-the-website-from-aws-s3)
- [**7. CI/CD as Code**](#7-cicd-as-code) (8 videos)
  - [Shipping fast with CI/CD](#shipping-fast-with-cicd)
  - [Introducing GitLab CI](#introducing-gitlab-ci)
  - [Writing our first Gitlab CI workflow](#writing-our-first-gitlab-ci-workflow)
  - [Configuring sensitive variables](#configuring-sensitive-variables)
  - [Creating our first Gitlab CI runner](#creating-our-first-gitlab-ci-runner)
  - [Putting it all together](#putting-it-all-together)
  - [Challenge: Change the website title](#challenge-change-the-website-title)
  - [Solution: Change the website title](#solution-change-the-website-title)
- [**8. Conclusion**](#8-conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Your first project, DevOps-ified!
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=0)** Hard silos, configuration differences and engineers just not talking to each other are some of the biggest reasons for slow and error-prone software deployments.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=9)** This can cause massive problems.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=12)** Downtime in production can cost companies over $5,000 per minute.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=16)** That's a lot.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=17)** Applying a little bit of DevOps to any project goes a long way towards solving these problems.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=23)** My name is Carlos Nuñez.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=24)** I've been a systems administrator and software engineer for over 15 years.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=29)** I love DevOps.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=30)** In this course, I'll teach you how to apply technical DevOps principles to a website.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=35)** Together we'll use Docker, Git, automated tests, CI, CD and Infrastructure as Code to take this website all the way into the cloud.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=45)** Ready to go on your first DevOps journey?
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-first-project-devopsified-24080523?u=76281980&t=47)** Let's do it!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (4), [[Git]] (1), ci (1), cd (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **CLI Commands:** docker (1), git (1), cd (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=0)** Here's what you should know to be successful in this course.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=3)** Being comfortable with the Linux shell, such as Bash, Ash or Zsh, will help you get the most out of this course.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=10)** Having basic programming experience will help as well, but it is not required.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=15)** While we'll be using Vim as our editor of choice, experience with any other IDE or editor will do.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=22)** I've included all of the demo files that I'll be using throughout the course for you, which you can download under the exercise tab to follow along.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=29)** For each demo, there's a beginning and an end state.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=33)** We're also going to host Explore California in AWS or Amazon Web Services, so you'll need an AWS account if you would like to do this with us.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=42)** Note that this will cost some money.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=45)** To create an account, simply open your browser, visit console.aws.[amazon.com](https://amazon.com), click "Create a new AWS account" and follow the instructions provided.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/what-you-should-know-24079507?u=76281980&t=57)** If your company has a corporate AWS account, ask your administrator for help on getting started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (5), [[Linux]] (1), [[Programming]] (1), web (1)
> **CLI Commands:** aws (5)
> **Env Vars:** aws (4), ide (1)
> **Tools:** bash (1), zsh (1), vim (1)
> **Prerequisites:** you'll need (1), getting started (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)

#### Configuring AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=0)** We're going to be doing some things with Amazon Web Services in this course.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=4)** But before we do that, let's learn how to create temporary administrator AWS credentials both in the browser and in our terminal.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=12)** The first thing we're going to do is open a browser and visit console.aws.[amazon.com](https://amazon.com).
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=18)** If you're prompted to log in, go ahead and log in.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=21)** If you haven't created an account, go back to what you should know and visit the documentation there to get started with that.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=29)** Once you're logged in, take note of the region that's to the right of the gear icon over here.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=34)** If you click on it, you'll see in orange the region that was selected for you.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=38)** You can think of a region within AWS as a collection of data centers that provide AWS services.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=44)** The region in orange is the region closest to you.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=47)** So in my example, the closest region to me is the Ohio region and its code is US East 2.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=54)** Save this code somewhere, as we're going to be using it later.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=58)** The next thing we're going to do is create a user that we can log in with in the AWS CLI, which we'll download and install later.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=66)** So let's go ahead and click on the search text box up here and type in "IAM."
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=70)** In the results, click on IAM to continue.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=75)** Next we're going to click on Users.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=77)** Then we're going to click on Create User. In the next page, you'll be asked to give your user a name.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=82)** This can be anything.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=84)** You can just use your own name or you can use "Carlos" here.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=88)** You can leave the checkbox underneath it unchecked.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=91)** Click Next and then click Next again, since we're not going to be adding this user to any groups.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=99)** In the review screen, make sure that your username is the username you typed in earlier and then click Create User.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=107)** The next thing that we're going to do is create a role that allows us to become an administrator.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=113)** To do that I'm going to click on Roles.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=115)** Then I'm going to click on Create Role.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=117)** Then I'm going to click on AWS Account.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=121)** Then I'm going to click on Require External ID.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=124)** This is a password that will allow our user to use this role.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=128)** This can be anything.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=130)** I'm going to go ahead and type in "supersecret" for example.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=137)** Then we're going to click on Next.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=140)** And then we're going to check Administrator Access up here.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=144)** Then we're going to click on Next and give our role a name.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=148)** Let's call this role "Example Admin Role."
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=153)** You can enter a description if you like, but it's optional.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=156)** Once you enter the role name, scroll down and click on Create Role.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=161)** Once that role is created, click on View Role.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=165)** Then click on Trust Relationships.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=169)** Then click on Edit Trust Policy.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=172)** And then, where it says root over here, go ahead and type in "user".
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=176)** Then your username, like Carlos for example.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=181)** Once you're done with that, click on Update Policy to apply the changes.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=186)** The next thing that we're going to do is generate credentials for our user, so that we can assume the role that we just created.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=192)** So to do that let's click on Users.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=194)** Click on the user that you just created.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=196)** Then click on Create Access Key.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=198)** Scroll down and click on Other.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=201)** Then click on Next.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=203)** You can give the set of keys that will be created a description.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=206)** It's completely optional.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=209)** Afterwards, click on Create Access Key to create the access key.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=214)** We're going to leave this page up because we're going to be using it very soon.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=219)** The next thing we're going to do is link our user with the role that we created.
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=223)** Before I do that I'm going to open a new tab.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=226)** Go back to console.aws.[amazon.com](https://amazon.com).
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=231)** Go back to the IAM service by typing "IAM" in the search box, then clicking IAM in the results.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=238)** Then I'm going to click on Roles.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=240)** Search for the Example Admin Role that we created.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=244)** And then we're going to leave this page up for a second.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=247)** The next thing that we're going to do after we open this tab is open a terminal.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=251)** Since I'm on a Mac, what I'm going to do is I'm going to type Command + Space, type in "Terminal" and hit Enter.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=257)** If you're on Windows, you can just click the Start button, type in "Terminal" and then click on the result.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=265)** Before beginning, make sure that you have the AWS CLI installed.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=269)** You can follow the instructions on the link below to do that.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=273)** Once the AWS CLI is installed, the first thing we're going to do is configure the AWS CLI to use the user that we created.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=281)** So to do that I'm going to type "aws configure" and then I'm going to hit Enter.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=288)** Here I'm going to be asked to provide an access key.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=291)** So to do that I'm going to go back into my browser, click on the Create Access Key tab that I opened earlier, then I'm going to copy the access key over here, go back to my terminal, paste it in and hit Enter.
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=305)** Now I'm going to be asked for the secret access key.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=308)** So to get that I'm going to go back into my browser.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=311)** Click on the Copy button next to the secret access key stars.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=315)** Go back to my terminal.
>
> **[5:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=317)** Paste it in and hit Enter.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=320)** Next I'm going to enter the region name that we saved earlier.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=323)** So in my case it's US East 2.
>
> **[5:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=326)** And then I'm going to hit Enter.
>
> **[5:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=328)** Finally I'm going to provide JSON for the output format.
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=331)** And then I'm going to hit Enter.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=334)** Now I'm going to use the "aws sts assume-role" command to get a set of temporary credentials that I can use later in the course.
>
> **[5:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=345)** The first argument that I'm going to provide to this is the "role-arn" argument.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=350)** To get this role-arn, I'm going to go back into my browser and click on the Copy button next to my ARN here.
>
> **[5:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=357)** Once I do that, I'm going to go back into my terminal and paste it in.
>
> **[6:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=361)** Next I'm going to provide that password that I created earlier.
>
> **[6:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=365)** To do that I'm going to type "--external-id" and then I'm going to provide the password that I created earlier, which is "supersecret" in this case.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=373)** Finally I'm going to provide "--role-session-name" to give the STS session for the temporary set of credentials that we're about to create a name.
>
> **[6:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=385)** This can be anything. You can call it "MySession," for example.
>
> **[6:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=389)** Before continuing, let's make sure that your command looks something like this.
>
> **[6:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=396)** And if it does, you can hit Enter.
>
> **[6:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=401)** Once you do that, you'll see this huge JSON blob over here.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=405)** These are your temporary credentials.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=408)** Now that we've created a set of temporary credentials, let's see how we can use them to do privileged actions within AWS.
>
> **[6:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=417)** So as a test, let's run an AWS command with our own user to confirm that we don't have permissions to do something.
>
> **[7:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=424)** So let's for example, use the AWS IAM list users command to list the users that are available in our account.
>
> **[7:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=433)** As you can see, I don't have the permissions to do that with the user that I created, the Carlos user.
>
> **[7:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=440)** So now what we're going to do is we're going to use this JSON object up here to become the temporary user that STS created for us.
>
> **[7:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=449)** That should be an admin user, because we created credentials using the example admin role that we created in the console.
>
> **[7:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=458)** So we're going to do this in three steps.
>
> **[7:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=460)** The first thing we're going to do is we're going to type in "export AWS_ACCESS_KEY_ID" followed by an equal sign.
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=470)** And then we're going to copy this access key ID up here and paste it in.
>
> **[7:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=475)** Next, we're going to provide the environment variable "AWS_SECRET_ACCESS_KEY", put an equal sign and then we're going to copy the secret key up here and paste it in.
>
> **[8:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=490)** And I'd recommend using single quotes around it just to avoid any weirdness with your shell.
>
> **[8:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=496)** Finally we're going to create another environment variable called "AWS_SESSION_TOKEN".
>
> **[8:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=503)** Then we'll put an equal sign and then we're going to copy this really long string over here.
>
> **[8:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=509)** And then, in single quotes, paste it in.
>
> **[8:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=513)** And then finally we're going to create another environment variable called "AWS_REGION".
>
> **[8:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=518)** And this is going to be set to the region that we saw earlier, which in our case is US East 2.
>
> **[8:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=524)** And then after we do all of that we're going to run that "aws iam list-users" command again to see what changes.
>
> **[8:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=533)** Now, as you can see, we're able to get a list of users from the IAM service because we ourselves are an admin with these temporary credentials.
>
> **[9:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=543)** So you might need to run this assume-role command several times throughout this course as these credentials expire within about an hour or so.
>
> **[9:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=552)** So if you're going through the course and you get an error similar to what we saw when we ran iam list-users the first time, simply rerun that assumed-role command.
>
> **[9:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=563)** It'll generate a new JSON object with new credentials, and then you could run the export commands that we just saw to link our shell with the new set of credentials.
>
> **[9:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-aws-24080513?u=76281980&t=575)** And then once you do that, everything should just work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (17), aws (16), hit (7), [[CLI]] (4), [[JSON]] (4)
> **Env Vars:** aws (11), iam (7), cli (4), json (4), sts (2)
> **UI Navigation:** click on (26), scroll down (2), checkbox (1)
> **CLI Commands:** aws (16), make (3)
> **Cross-References:** go back to (5), in the next (1), later in (1)
> **Tools:** terminal (7)
> **Analogies:** for example (4), similar to (1)
> **Prerequisites:** configure (2), install (1)


### 1. The Project/The Mission

[↑ Back to Table of Contents](#table-of-contents)

#### So what is this DevOps thing anyway?
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=0)** Here's a typical conversation between a systems engineer and a software engineer that has happened at least once on every company on this planet.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=9)** Our software engineer goes to our systems engineer and says, "Hey, my app is running really slowly in production.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=15)** I'm not sure why.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=16)** Can you see if something's up with the platform?"
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=19)** Our systems engineer says, "Sure, yeah, I'll have a look."
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=23)** Two weeks later, our systems engineer comes back with, "Hey, um, the platform is looking fine, I can't find anything wrong with it.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=32)** Maybe it's something in your code?"
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=34)** The software engineer replies, say, "okay, yeah, we'll have a look.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=37)** Thanks."
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=39)** Now this conversation seems innocent enough, but there's actually a lot going on here.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=45)** The devil's in the details. So this conversation usually doesn't happen between two engineers sitting next to each other.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=52)** Usually this conversation happens in the form of helpdesk tickets.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=57)** This can add lots of waiting.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=59)** Both engineers have a lot going on, both engineers have to be able to find tickets and respond to them, it can just add a lot of slowness.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=68)** Furthermore, our software engineer knew a lot about their app, enough to know that something was wrong that wasn't coming from their app, but the problem here is that that engineer didn't know anything about the platform that that software is running on.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=82)** Conversely, our systems engineer knew everything about the infrastructure that's powering their platform, and they knew enough to know that the platform is fine, but they know nothing about the software that's running on it.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=96)** So, because neither side knows a lot about the other side, usually there's a lot of undocumented work happening behind the scenes to fix things and this usually manifests with some scripts or documentation, or just some commands and knowledge, and some senior engineers head that get run when things go wrong.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=118)** But the biggest problem here is that neither engineer knew that stuff was going wrong until it was way too late.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=126)** Unfortunately, this happens all of the time.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=130)** This happens when existing software just doesn't work as well, or when new software is getting released.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=138)** So what does this actually mean in real life?
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=140)** What happens after this conversation's over?
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=143)** Well, work that should have taken minutes to do can often take months or even years to accomplish in the most extreme cases.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=153)** A byproduct of this is that any downtime that happens can grind operations to a halt, because a lot of the tribal knowledge that people rely on to fix things is hard to find.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=166)** People just don't know about it.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=168)** And worse, if our senior engineer decides to leave the company or just go on vacation, then everyone is scrambling to figure out what to do next.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=177)** The net result of this is that production becomes a scary place.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=182)** No one wants to make changes because no one wants to rock the boat.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=185)** No one wants to break anything because no one wants to have to scramble and run around trying to figure out how to fix things.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=194)** What if things were different?
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=196)** Could there be a better way of operating here?
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=199)** What if our engineers shared knowledge that they knew about each other so that they could know about each other's domains?
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=206)** What if they work together when things go wrong instead of communicating with each other through helpdesk tickets?
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=212)** What if they could feed off of each other through this increased knowledge and increase collaboration to do their jobs better?
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=221)** That's what the DevOps ethos is all about.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=225)** DevOps is all about bringing engineers together by removing silos, improving communication, and documenting everything as code.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=234)** Even though the name DevOps implies that this culture is just for developers and operators, DevOps can actually be for everyone.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=243)** It's important to know that DevOps isn't just a job, it's a culture.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=248)** It's a way of working.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=249)** It's a way of being.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=251)** So you can remove silos, improve communication, and document everything in every part of the engineering process and in every part of the business.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=259)** Here are some common examples of implementations of this.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=263)** There's been lots of talk over the years about bringing DevOps to security in the form of DevSecOps.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=269)** There's also been lots of talk about bringing DevOps to product management through ProdOps or finance through FinOps.
>
> **[4:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=277)** We've even seen the DevOps culture be embraced by business development in the form of BizOps.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=284)** Everyone can benefit from working together.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=288)** There are three big tenets that comprise the DevOps way of being.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=293)** The first big tenet is having better documentation.
>
> **[4:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=297)** DevOps believes that having better documentation leads to better communication.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=301)** Since you're not relying on tribal knowledge, you're relying on shared knowledge that everybody knows. Better communication can lead to better automation by taking that documentation that we have, taking the more manual grunt work that's a part of it, and automating that stuff away so that people can focus on being the best engineers that they can be.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=321)** Finally, DevOps believes that all of this can be accomplished through code, because if we can express everything as code, then we have a way of expressing everything in a common language that all engineers and all people within the business can communicate with.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=338)** In the next video, we're going to learn about Explore California.
>
> **[5:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=342)** Explore California is California's premier travel agency, and they're having lots of issues that DevOps can help fix.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/so-what-is-this-devops-thing-anyway-24082449?u=76281980&t=350)** We're going to take them on a journey to help them embrace all of these things that make companies like Explore California be able to ship better, faster, and more securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (12), next (3), business (3), [[Engineering]] (1), [[Security]] (1)
> **CLI Commands:** find (3), make (2)
> **Cross-References:** in the next (1)

#### Your application, pre-DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=0)** Let's set the scene.
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=1)** Explore California, a fictitious travel planning company, is located in the heart of San Jose, California.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=8)** Explore California's website, primarily used to connect curious explorers with California's beautiful landscape and scenery, has over 100,000 unique visitors per month, and orders placed through their website account for over 70% of their $5 billion a year revenue.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=27)** That is no easy feat.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=28)** Before Explore California, embraced DevOps, changes to the website were very painful. In 2021 alone, all of the downtime experienced by the website was enough to send 40% of their users flocking to explore Texas.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=42)** Consequently, any changes made to production required lots of coordination, largely through lots of paperwork and process.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=50)** This was horrible for engineering.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=53)** No one except production engineers were allowed to deploy changes into the production infrastructure, and because production releases only happened once per month, teams spent a lot of time working on merge conflicts across hundreds of branches across many Git repositories.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=69)** Explore California had environmental differences as well.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=72)** Changes to production needed to pass through the Development, QA, and UAT environments before they are considered ready for production.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=80)** All of these servers were configured very differently.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=83)** Dev was created entirely by hand, and the two engineers that set it up left a long time ago.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=88)** Many teams spent a lot of time waiting on other teams to fix their stuff as a result of this.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=93)** It's no surprise that someone says some variant of "It worked in Dev, not sure why it doesn't work in Production" every day in slack.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=101)** Unfortunately, testing Explore California locally isn't any better.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=106)** Laptops issued to productions here run Windows 10, which is very different from the versions of Ubuntu they run in production.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=112)** Furthermore, every developer set up their machine differently, so Explore California looked very different from machine to machine.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=119)** Running tests was hard and took a long time, so most developers didn't do it, much to the annoyance of QA.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=125)** Explore California realized that this is very painful.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=129)** They wanted to ship features faster and more reliably.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=132)** How do DevOps fix this for them?
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-pre-devops-24080516?u=76281980&t=134)** Let's take a look at the next video and find out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (3), [[DevOps]] (2), [[Engineering]] (1), [[Git]] (1), [[Slack]] (1)
> **CLI Commands:** git (1), find (1)
> **Env Vars:** uat (1)
> **Cross-References:** next video (1)
> **Tools:** slack (1)
> **Prerequisites:** set up (1)

#### Your application, post-DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=0)** After losing another 7% of their traffic to Explore Texas during the last high season, the CTO of Explore California and her team decided that something had to change.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=9)** After spending two weeks building a value stream map outlining how new features reach customers, she learned that it takes six months for customers to see changes to Explore California.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=19)** Explore Texas, on the other hand, adds new things to their website every week.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=24)** She knew they could do better.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=26)** She created a challenge for engineering, product and operations in hope of fixing this problem: "Build and deploy the smallest change you can to production in two days."
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=36)** Though extremely challenging, Explore California engineering rose to the challenge.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=41)** Devs learned about how Docker containers make it easy to test Prod-like instances of Explore on their own machines.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=47)** After seeing how much faster containers made things, every dev team tripled down on it. By moving Explore California to Docker container images and using Docker Compose to create entire test environments of the website, the engineering team was able to shave off weeks of time from their release cycles.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=65)** Engineering also realized that talking through tickets and waiting around for people to help wasn't working.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=71)** After going all in on Git for version control, they thought, "We already have GitLab.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=77)** Why not use issues to track changes to the site and use merge requests to coordinate releases?"
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=82)** Engineering leadership spent two months getting every team trained up on GitLab.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=88)** This was time well spent.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=90)** Engineers were happy that they could communicate in the same place they could see changes to the code.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=95)** Some teams even added automation to get notifications and updates on slack automatically.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=100)** The first release coordinated through merge requests was 20 times faster than before, and they only got faster after that.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=108)** Finally, engineering leadership realized that the only way they'd be able to fix their downtime was to invest in tests.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=115)** They paused new features for a month and had teams focus hard on building and automating their tests.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=121)** Engineering teams also embraced continuous integration to add automated testing to their release process.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=127)** This paid off in a big way.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=130)** Not only was Explore California able to enjoy their first downtime-free month after their month-long freeze, but their automated tests sped up their release process by weeks.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=141)** Three months after accepting the CTO's challenge, Explore California engineering was able to deploy a simple feature into production in two days.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=151)** Two months after that, engineering was able to release complex features every week.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=156)** These days they release several times per day.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=159)** They even have an award-winning mobile app on iOS and Android.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=162)** They've gotten so good at building and releasing software several travelers have left reviews saying something like, "I thought of something that Explore California could have done better, and their website was updated the next day.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=174)** That was wild."
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/your-application-post-devops-24081429?u=76281980&t=175)** Doubling down on DevOps pays off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Engineering]] (9), teams (3), leadership (2), traffic (1), product (1)
> **CLI Commands:** docker (3), make (1), git (1)
> **Tools:** gitlab (2), slack (1)
> **Env Vars:** cto (2)
> **Code Identifiers:** ios (1)


### 2. Testing Locally with Docker

[↑ Back to Table of Contents](#table-of-contents)

#### Bring production to your laptop with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=0)** We learned earlier that engineering at Explore California struggles with their website behaving differently depending on the environment that it's in.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=7)** This is a common problem in the world of software development.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=11)** So common, in fact, that it's often called the "it works on my machine" problem in books, conference talks, and one particularly famous meme.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=20)** There are many reasons why this happens.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=23)** Sometimes your computer has a lot of tools and software the app depends on that aren't on other machines.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=28)** Other times, configuration for your app might come from different places depending on where it is.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=33)** Maybe a block of source code in your app depends on files or hardware on your computer that other computers don't have.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=40)** Configuration management tools like Chef, Ansible and Puppet solve it by allowing you to write code in markup languages to describe what machines need to have in order to run your app.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=50)** Other tools like HashiCorp's Vagrant let you write code to create entire virtual machines to run your app in.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=56)** However, these tools can be cumbersome for developers who just want to run their code in other places safely.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=62)** With configuration management tools, you often need to know details about the underlying operating system your markup will run in.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=69)** With Vagrant, you need to know what "hardware" your virtual machine needs to have, and often need to configure the operating system before installing or building your app inside of it.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=80)** Docker aims to take a simpler approach.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=83)** Docker is software that allows developers to package their apps into images that run on containers.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=90)** Images are created from lightweight configuration files that describe everything your app needs to run.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=96)** Unlike virtual machines, containers are virtualized operating systems that are configured with just enough to run your app and nothing else.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=104)** Because containers are created from images, as long as a machine can run Docker, your app will run and behave the same regardless of where it is.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=113)** As a result, you can build and run your app quickly, safely, and even cost-effectively.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=119)** In this chapter, we'll install Docker and see how easy Explore California can move their website into a container.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=125)** In later chapters, we'll take that a step further by using Docker Compose to automate tests and deploy our site to the greater internet.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=134)** I'm super excited!
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/bring-production-to-your-laptop-with-docker-24078552?u=76281980&t=135)** I hope you are too!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Configuration Management]] (2), [[Virtual Machines]] (2), [[Engineering]] (1), [[Software Development]] (1)
> **CLI Commands:** docker (5), ansible (1)
> **Prerequisites:** configure (1), install (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### Installing Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=0)** Installing Docker is easy.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=2)** Let's learn how to do that on Windows and the Mac.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=6)** We will be installing Docker Desktop.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=9)** Docker Desktop provides a really convenient front end for interacting with containers.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=14)** Since Docker technically only works on Linux machines, Docker Desktop also handles creating a high performance Linux VM behind the scenes and makes using it easy and seamless.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=24)** Let's go over a few requirements that you'll need to have in order to install Docker Desktop. On the Mac, you'll need to be running at least macOS 10.15 or newer.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=35)** On Windows, you need to be running Windows 10 or above.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=38)** Regardless of whether you'll be using Mac or Windows, you'll need to have at least 4 gigabytes of free RAM on both.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=45)** Let's start with the Mac.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=47)** What I'm going to do is open a browser.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=50)** I'm using Safari in this case, however Google Chrome, Brave, Edge, Firefox, whatever you like to use is totally fine.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=58)** What I'm going to do from here is click on the address bar and visit [docker.com](https://docker.com).
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=63)** On this page I'm going to hover over Products, then click on Docker Desktop.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=68)** Once I'm here, you'll see a big blue button that says "Download for your operating system".
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=75)** So in my case I'm using a Mac on an Apple Silicon chip.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=79)** However, if you don't see the right operating system or processor that you're using listed here, you can just hover over the button and click on the version that you need.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=88)** I'm going to click on this button, and then once the download finishes I'm going to double click on Docker.dmg.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=96)** That's going to bring me to the desktop.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=99)** What I'm going to do from here is take this Docker icon on the left and drag it over to applications on the right.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=107)** The applications window might pop up.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=110)** If it does, that's totally fine.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=112)** What's important is that you see this copying window over here that's telling you that Docker is being moved into the applications directory and is in the process of being installed.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=124)** Great!
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=125)** We are installed.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=126)** So what I'm going to do is click on Docker, or double click on it.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=131)** Mac will ask you if you are sure you want to open this file.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=134)** Since we definitely do want to use Docker, I'm going to click Open.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=140)** Now you'll be asked to accept this subscription service agreement.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=145)** This doesn't apply for us because we are using it as individuals.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=148)** If you are a company using this, you might want to read this, but since we're just individuals here, I'm going to click Accept to move on, and now it's going to ask me whether I want to use recommended settings, or if I want to use advanced settings.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=162)** That allows you to configure things about the virtual machine.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=166)** We don't need to configure any of those right now.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=169)** So I'm just going to leave the default option checked.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=172)** And then I'm going to click Finish.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=174)** You'll be asked to put in your password.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=176)** So go ahead and put that in when you're prompted.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=178)** If you have a watch or something I'll ask you to double tap on your watch or use Touch ID.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=183)** After I click okay, the installation will continue and then you'll be presented with this window right here.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=190)** You do not have to sign up to use Docker Desktop, so go ahead and click Continue Without Signing In.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=196)** Then it's going to ask you to fill out a survey.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=198)** You can put anything you want here.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=200)** Let's say we're platform engineers, because we are.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=204)** And then you can select what you're going to be using Docker for.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=207)** You can fill this out if you want.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=209)** I'm going to just check I Don't Know.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=210)** There's a lot of stuff we're going to be doing with it.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=212)** And I'll press Continue.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=214)** And now that we're here, Docker Desktop is ready.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=218)** One other way of knowing whether Docker Desktop is ready is by paying attention to the whale icon on the taskbar, on the upper right-hand corner.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=226)** This icon should have a set of boxes here not moving.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=231)** So let me restart the Docker Desktop engine to show you what I mean.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=237)** So as you can see, the boxes on the Docker whale will move while Docker Desktop is starting.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=243)** Once Docker Desktop is ready, those boxes will no longer be moving.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=248)** If you see an exclamation next to the whale, that is fine.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=251)** For now, you can safely ignore that.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=254)** Another way of knowing whether Docker Desktop is running is by opening Docker Desktop, like we have here, and paying attention to the lower left-hand corner.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=263)** If you see an "engine running" banner over here on the bottom left, then you know that the engine is running.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=271)** Now there's one final test that you can run to check that Docker is successfully installed, and that's while using Docker itself.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=279)** Let me show you what I mean.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=281)** To do that, I'm going to open a terminal... ...by typing "terminal" into Spotlight, and then hitting Enter.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=289)** And that's going to bring me to our terminal over here.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=292)** Now to check that Docker is installed you can simply type "Docker" and then hit Enter.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=296)** You'll get a long help menu over here that tells you that Docker is successfully installed.
>
> **[5:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=302)** The next test that you can do to verify that the Docker engine is running is by typing "docker run --rm hello-world".
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=312)** This will retrieve a Docker image called "hello-world" and create a container from it.
>
> **[5:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=316)** Because we specified the "--rm" option over here, Docker will delete this container after it's done running this app, which is a simple app that prints a nice "Hello World" style message like the one that you can see on your screen.
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=331)** Installing Desktop on Windows is just as easy.
>
> **[5:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=335)** First, I'm going to open a browser.
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=337)** I'm going to use Microsoft Edge in this case, but again, Chrome, Brave, Firefox, whatever you use is totally fine.
>
> **[5:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=345)** From here I'm going to click on the address bar and then visit [docker.com](https://docker.com).
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=352)** Just like we did on Mac I'm going to hover over Products, then click on Docker Desktop.
>
> **[5:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=359)** And then from here I'm going to click on the big blue button over here.
>
> **[6:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=364)** Like I said earlier, it might not pick the correct operating system and processor type.
>
> **[6:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=369)** So all you need to do is just hover over the button and then click on the one that you need.
>
> **[6:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=375)** That's going to download our installer, as you can see on the upper right-hand corner.
>
> **[6:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=382)** Once that's done I'm going to click on this .exe folder up here to begin the installation process.
>
> **[6:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=389)** First, it's going to verify your package.
>
> **[6:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=391)** That might take a few minutes depending on the speed of your machine.
>
> **[6:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=394)** Once that's done, it's going to ask you whether you want to use Windows Subsystem for Linux version 2, or Wsl2 for short, instead of Hyper-V, which I recommend.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=405)** It is much more performant, so we're going to leave that checked.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=408)** And whether you want to have a shortcut added to your desktop, which you can check or uncheck depending on your preferences.
>
> **[6:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=414)** I'm going to leave it checked, and then I'm going to click Okay to continue the installation process.
>
> **[6:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=419)** Again, this will take a few minutes depending on the speed of your machine, but it should not take very long.
>
> **[7:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=426)** Once the installation completes, you'll be asked to restart.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=431)** Go ahead and click this big button to go ahead and do that.
>
> **[7:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=434)** Once your machine restarts, Docker Desktop will start automatically.
>
> **[7:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=439)** If it doesn't start automatically, you can start it by either clicking on the Docker Desktop icon on your desktop, if you added it to your desktop, or by clicking the Start Menu and then selecting Docker Desktop.
>
> **[7:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=450)** Either way will get you to the same place.
>
> **[7:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=453)** Now, just like on the Mac, you'll be asked to accept the subscription service agreement.
>
> **[7:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=460)** I'm going to go ahead and accept it.
>
> **[7:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=462)** And also, just like the Mac, you'll be asked whether you want to use recommended settings, which will configure your VM automatically, or advanced settings, which lets you tweak various things.
>
> **[7:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=473)** I'm going to leave Use Recommended Settings checked and then click Finish.
>
> **[7:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=478)** Again, you do not have to sign up to use Docker Desktop, so just click Continue Without Signing In and then you'll get the same survey as before.
>
> **[8:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=486)** So I'll select the same answers as before.
>
> **[8:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=488)** And then the darker engine will start.
>
> **[8:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=491)** Just like on the Mac you can click on the taskbar on the bottom right-hand corner and look for the whale over here, with the boxes moving up and down it back.
>
> **[8:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=500)** If the boxes are moving, that means that Docker Desktop is starting.
>
> **[8:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=504)** Docker Desktop is ready when those boxes stop moving.
>
> **[8:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=510)** Once again, if you see an exclamation mark next to the Docker whale, do not worry, everything is fine.
>
> **[8:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=517)** You can also check that Docker Desktop is running by looking for the "engine running" banner on the bottom left-hand corner of Docker Desktop.
>
> **[8:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=524)** Just like on the Mac, you can also check that Docker is running in the terminal like I'm about to do now.
>
> **[8:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=530)** And then... There we have it.
>
> **[8:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=536)** Now we've installed Docker on Mac and Windows.
>
> **[8:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=539)** So let's go ahead and use it and get Explore California on containers.
>
> **[9:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=544)** I'm excited.
>
> **[9:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-docker-24077621?u=76281980&t=545)** Let's go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Linux]] (3), next (3), [[Microsoft Products|Products]] (2), [[Windows 10]] (1)
> **CLI Commands:** docker (45), rm (2)
> **Tools:** docker desktop (21), terminal (4), firefox (2), safari (1)
> **UI Navigation:** click on (13), select the (1)
> **Prerequisites:** you'll need (3), configure (3), install (1)
> **Analogies:** just like (5)
> **Best Practices:** recommended (3)
> **URLs:** [docker.com](https://docker.com) (2)

#### Writing your first Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=0)** The life of a Docker container image starts with a single file: the Dockerfile.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=5)** Dockerfiles are manifests that describe the image that your container will use and what will run within it.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=12)** When we create the container that will run our website, Docker will do four things with it.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=18)** First, it will read and parse the Dockerfile.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=21)** Second, it will fetch the parent image that the Dockerfile requested or the scratch base image if you're starting from a blank slate.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=28)** Third, it will run any commands that are defined within the Dockerfile on top of that base image or parent image.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=35)** And finally, if defined, Docker will set the image's entry point or the process that will run when this container runs, along with any arguments provided to it.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=45)** Now, unlike traditional configuration management tools like Chef, Puppet or Ansible, all of the configuration, dependencies and other environment settings that your application needs to run itself can be defined within the Dockerfile.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=59)** Additionally, while you can write scripts that perform the installation steps that are going to be noted within the Dockerfile, those are not required.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=69)** So, with that, let's open up our editor and write a really simple Dockerfile for our app.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=75)** Now, before we dive in, let's take a look at the exercise files bundle that you downloaded for the course.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=82)** Your exercise file should look something like this.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=85)** You'll see two folders for each chapter that come with an exercise file: a "Before" folder, and an "After" folder.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=93)** Our website is going to be in the "02_03_before" folder, as you can see here.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=100)** We're going to use the terminal to copy this directory into a working directory.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=105)** That working directory will contain our Dockerfile that we're going to create, along with everything else that we will be creating throughout this journey.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=113)** Afterwards, we'll write our Dockerfile and build an image from it.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=118)** Let's open the terminal by typing Command + Space, then typing "terminal" and hitting Enter.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=124)** Now, let's first make sure that we're in the right place.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=128)** Your terminal should automatically put you in your home directory, which looks like this tilde over here.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=135)** If you're not in that directory or if you can't see that tilde, just type "cd ~" to take you right there.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=143)** Cool.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=143)** Now that we're all in our home directory, let's create our working directory by typing "mkdir explore- california-website".
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=154)** Finally, let's copy that website folder into it.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=158)** We can do that by typing "cp -r", then the folder that you downloaded your exercise files into or, in my case, "~/Downloads/ exercise_files... ...then /02_03_before/website". Afterwards, put a space.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=181)** Then "./ explore-california-website".
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=187)** "." is short for our current directory, which is our home directory right now. We need to specify "-r" over here to cp to tell it that we're copying a directory and want to copy recursively.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=202)** So once you typed out the command, which should look like this, hit Enter.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=209)** Once that's done, run "ls ./explore- california-website" to confirm that your website directory was copied over.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=218)** You should see website like shown here.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=221)** If you do then you're ready to move on.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=224)** All right, let's clear the screen by typing Ctrl + L, then let's type "cd ./explore" + Tab to move into our working directory.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=237)** The Tab autocompletes links, that saves us time so that we don't have to type the entire Explore California website into our terminal.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=246)** From here, let's type "touch Dockerfile" to create a blank Dockerfile.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=252)** Then, finally, open Dockerfile in your preferred editor.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=257)** While I'm using Vim here, any editor like Visual Studio Code, IntelliJ or Eclipse will also work.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=264)** All Dockerfiles start with a "FROM" command. "FROM" tells Docker which image to use as a base for the commands that we're about to run.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=273)** While most Dockerfiles will probably use a pre-existing image, like Ubuntu or Debian, you don't always have to.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=282)** If you want to start from a completely blank slate, you'll want to use from scratch here.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=286)** Note that blank slate means blank slate.
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=290)** The scratch image is completely empty.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=292)** You'll need to configure everything yourself, so I don't recommend doing this, but if your situation requires it, then knock yourself out.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=300)** Let's remove scratch here and make this image "FROM hello-world".
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=305)** That's the same image that we used earlier to confirm that Docker is working.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=311)** Next we can also add a label underneath FROM. Labels help describe your image to other users.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=318)** A popular label that gets added is the "maintainer" label.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=321)** This tells people who to contact if they have any questions or run into trouble.
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=325)** Finishing this line, I'm going to add an equal sign, then a double quote.
>
> **[5:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=330)** Then you can add your name here like Carlos Nuñez.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=334)** Then an ankle bracket and then your email address.
>
> **[5:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=339)** Then a closing angle bracket and then a closing double quote.
>
> **[5:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=343)** Putting that all together, you should have "LABEL maintainer = your name".
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=348)** And then, in angle brackets, your email address.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=352)** The next thing that we're going to do is copy that website directory that we created earlier into our Docker image.
>
> **[5:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=358)** We can do that by typing "COPY website /". COPY, as the name implies, copies stuff into your image.
>
> **[6:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=366)** Very handy for us since we want our image to have a website in it.
>
> **[6:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=370)** And there you have it.
>
> **[6:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=372)** You wrote your first Dockerfile.
>
> **[6:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=374)** As you can see, it doesn't do very much.
>
> **[6:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=376)** But don't worry, our Dockerfile will become much more useful as our journey with Explore California continues.
>
> **[6:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=383)** Now what I'm going to do is I'm going to save this file and quit my editor.
>
> **[6:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=388)** So for those following along with what I'm doing in Vim, what I'm going to do is type Escape or Control + [.
>
> **[6:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=396)** Then I'm going to type ":w" to save my file.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=400)** And then I'm going to type ":q" to exit my editor.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=405)** Right, now that we're back in our terminal let's clear our screen and type "docker build --tag explore- california-website", and then a dot.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=415)** Let's break this command down "Docker build" tells Docker that we are going to build a new Docker image.
>
> **[7:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=422)** The "tag" option tells Docker that we want to give this image a name, or "explore-california-website", in our case,. The dot at the end is not a typo.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=431)** This tells Docker where to find its context, or the files it needs to locate everything needed by the Dockerfile.
>
> **[7:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=437)** Like we learned earlier, the dot is short for our current working directory, so that will just tell Docker to use explore-california-website, since that's the directory that we are currently in.
>
> **[7:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=449)** Now let's run this and watch Docker do its thing.
>
> **[7:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=455)** Cool.
>
> **[7:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=456)** It looks like this image was successfully built and tagged.
>
> **[7:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=459)** Let's verify that by running Docker images to make sure that it exists in the list of images on my computer.
>
> **[7:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=468)** As you can see, explore-california-website is in the output that Docker image is generated.
>
> **[7:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=474)** There it is, we successfully built our app's first container image.
>
> **[7:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=479)** Now, if you ever want to find out more about what any particular command does, you can always run "docker", then the command like "build --help".
>
> **[8:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=491)** That will give you a help menu like we saw earlier when we tested Docker.
>
> **[8:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=495)** Finally, let's run it.
>
> **[8:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=497)** This part's really easy.
>
> **[8:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=499)** Let's clear our screen to organize, and then all we have to do here is run "docker run explore-california-website".
>
> **[8:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=507)** This will create a container from our explore-california-website Docker image.
>
> **[8:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=511)** Since Docker does not delete containers by default after they're done doing their thing, I like to add "--rm" before the image name, or "explore-california-website" in this case, to have Docker do that.
>
> **[8:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=524)** Let's hit Enter and see what happens.
>
> **[8:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=528)** As you can see, we see a "Hello from Docker!"
>
> **[8:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=530)** message over here.
>
> **[8:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=532)** That confirms that our image was successfully built.
>
> **[8:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=536)** So there you have it.
>
> **[8:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=537)** We did it.
>
> **[8:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-dockerfile-24080512?u=76281980&t=538)** We built a Docker container image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cd (2), hit (2), next (2), [[Fetch]] (1), [[Configuration Management]] (1)
> **CLI Commands:** docker (24), make (3), cd (2), cp (2), find (2)
> **Tools:** terminal (6), vim (2), visual studio (1), intellij (1)
> **Env Vars:** copy (2), label (1)
> **Exercise Files:** exercise file (2), exercise files (1)
> **Definitions:** short for (2)
> **Prerequisites:** you'll need (1), configure (1)
> **Code Identifiers:** exercise_files (1)

#### Writing your first Docker Compose manifest
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=0)** We recently wrote a Dockerfile to build a Docker image that will run a local copy of Explore California, similar to what we would have in production.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=8)** We used Docker commands to get a container of that image running, and we confirmed that our container works from using "docker build" and "docker run" to build and run our image, respectively.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=20)** However, what if we want to run a website along our website or test some persistence code?
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=25)** What if we want to run a separate site to test that Explore California can talk to it?
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=31)** Now we could use Docker commands to create that infrastructure pretty easily.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=36)** But how do we link all of that together?
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=39)** We could run a Docker command for every piece of infrastructure we want to stand up, and then use container networks to connect them all.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=46)** We could even write scripts to help us automate this.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=50)** You definitely don't want to do this.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=53)** Keeping track of the containers you're starting and stopping with Docker commands will get really tiring once you're dealing with tens, hundreds, thousands, or tens of thousands of containers.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=66)** And that's before spending the effort maintaining all of those scripts.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=69)** Container networks also work really well.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=72)** But what happens when you want to run multiple instances of Explore California on the same machine?
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=79)** It gets tricky.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=81)** Enter Docker Compose.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=83)** Docker Compose is a simple and lightweight platform for running and linking multiple containerized apps together.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=90)** Docker Compose uses two things to accomplish this.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=94)** First, it uses Compose manifests written in YAML to define the containerized apps that will run within the Compose network and the Docker Compose command-line tool to parse and create containers from that manifest.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=107)** Best of all, the containers that run within Compose use pure Docker under the hood to run and manage everything.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=115)** So let's write a Compose manifest to run our Explore California website within Docker Compose.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=121)** We will then use the Docker Compose CLI tool to run that manifest and, like we did for docker run, we'll confirm that the container image for our website starts and that everything works as expected.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=135)** Cool.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=136)** So let's go ahead and open our terminal to get started.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=139)** Before we begin, let's make sure that you're in the Explore California website directory that we created earlier.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=146)** If you're not, you can always run "cd ~/explore-california-website" to bring you right back in.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=155)** Once we've done that, we'll use the "touch" tool like we did earlier to create a new file called "docker-compose.yaml".
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=164)** We could name this whatever we want, but the Docker Compose command-line tool looks for files with this name by default.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=171)** So we'll just use that to keep things easy.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=174)** Now that we've created this file, let's open it and do some stuff.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=179)** Every docker compose file starts with the line services.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=184)** You'll see many Compose manifest files start with "version", like this, but that line is now optional in recent versions of Docker Compose. "Version", well... describes the version of the Compose manifest schema that you're going to be using.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=203)** This is often used to enable older Compose features that work better with certain kinds of services or situations.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=209)** But to keep things simple, we're going to go ahead and leave that out for now.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=212)** Okay, back to services.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=214)** The simplest way to create a service looks like this.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=218)** This will create a service called "service_name" that will build an image from the Docker Hub called "image_name".
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=225)** While we know that this won't work because we don't have this or this, let's dissect what's going on here to figure out what Compose will see.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=235)** "Service_name" is the name of the service.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=237)** This can be anything.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=239)** Notice how it's indented two spaces to the right of services.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=243)** This is intentional, as YAML expects an object of services underneath it.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=248)** Why an object?
>
> **[4:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=250)** Well, I could probably spend three courses explaining the fine nuances of YAML and JSON, but no one wants to see those, and LinkedIn won't hire me to record them, so just trust me on this one.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=260)** Image tells Docker the name of the image to use for the service.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=265)** By default, Compose will expect this image to come from Docker Hub or a private Docker registry.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=271)** "Hold up, Carlos.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=272)** Our image isn't in the Docker Hub.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=274)** How will Compose know what to do with it?," you're probably asking.
>
> **[4:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=277)** Fortunately, Compose understands how to build local Dockerfiles, so let's rewrite our service name example to fix that.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=284)** So I'm going to delete this by typing D twice.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=288)** Then I'm going to press A to go back up to service name, then an Enter.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=293)** And then I'm going to type "build:".
>
> **[4:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=295)** And then on the line I'm going to type four... six spaces.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=300)** And then I'm going to type "context:", space and then a dot.
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=305)** So all we needed to do is simply replace "image" with "build" and then provide the arguments that we would feed to "docker build" right underneath it, which is indented two spaces to the right of build, or six spaces from services.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=320)** So there we have it, our first Docker Compose manifest.
>
> **[5:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=324)** Just like our Dockerfile, this does not do very much, but that will change before you know it, so don't worry.
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=331)** So let's go ahead and save this and then go back into our terminal to start the service that we just created.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=338)** Starting services with Docker Compose is very easy.
>
> **[5:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=341)** Let's clear our screen to organize ourselves and then run "docker-compose up".
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=347)** This will start all of the services that we created in our Compose manifest.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=352)** Very easy.
>
> **[5:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=354)** So as you can see, we see the Hello World message that we saw earlier, along with some additional information about which service this message came from, or in our case, the service_name service.
>
> **[6:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=366)** When we're done with the services in our Compose manifest, all we have to do is run "docker-compose down".
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=373)** This will delete any containers, networks and temporary volumes that compose created while your services were running.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=380)** Now, in newer versions of Docker Desktop you can also type "docker compose up", notice that there's no hyphen here, to do the exact same thing that we did before.
>
> **[6:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=392)** And you can also run "docker compose down". Again, it's the exact same.
>
> **[6:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=398)** Your preference.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=400)** While this Compose manifest doesn't do very much right now, it will become super important when we help move Explore California into the cloud.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-first-docker-compose-manifest-24075618?u=76281980&t=408)** However, if you're itching to learn more about Compose, check out Nicole Rifkin's excellent course "[[Learning Docker Compose]]", right here on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (33), [[LinkedIn]] (2), [[CLI]] (1), cd (1), [[JSON]] (1)
> **CLI Commands:** docker (33), make (1), cd (1)
> **Env Vars:** yaml (3), cli (1), json (1)
> **Code Identifiers:** service_name (2), image_name (1)
> **Tools:** terminal (2), docker desktop (1)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** docker-compose.yaml (1)
> **Definitions:** is a  (1)


### 3. Getting Started with Git

[↑ Back to Table of Contents](#table-of-contents)

#### Version control: The secret weapon of DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=0)** Writing code is easy.
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=1)** Explore California is really good at this, otherwise they wouldn't be California's premier travel agency.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=8)** Storing source code, however, is a little trickier.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=12)** What happens when an engineer accidentally writes a bug and needs to roll things back?
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=16)** What if some engineers want to work together on a feature but they live three hours apart?
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=21)** How can Explore California easily maintain different versions of their recommendation service, for example, that helps travelers choose awesome activities based on their preferences.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=31)** Version control systems were built to solve these exact problems and more.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=37)** VCSs, for short, are tools that make it easy for teams to write software together safely.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=43)** VCSs track every change made to code.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=46)** This enables teams to do things with their projects that used to be really difficult in the past, like rolling back buggy changes or maintaining multiple versions of code at the same time.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=57)** While there are many VCSs out there, almost all of them fall into two categories: centralized VCSs and distributed VCSs, or DVCSs for short.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=68)** Centralized VCSs require developers to "check in" their changes to one or more servers whenever they make changes.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=77)** While these systems ensure that there's only one "true representation" of source code out there, developers working on software tracked by these systems need to have a connection to those servers at all times.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=89)** This can be challenging for developers with slow network connections, for example. SVN, CVS, and Perforce are some common examples of centralized VCSs that are still in use today and are quite popular, actually.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=103)** Decentralized VCSs take a different approach.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=106)** These systems allow developers to store source code projects and their histories on their machine, and track changes completely locally.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=114)** While developers can push changes up to a centralized server, it is not required.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=120)** While this works really well for ensuring that developers everywhere can contribute to projects, you never really know which version of a repository is the "true version" in a decentralized model. Ensuring that source code history is correct becomes challenging as well, since there can be many different versions of a codebase that have different sets of changes applied onto them.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=141)** Mercurial, Fossil, and Explore California's favorite, Git, are some examples of these version control systems.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=149)** Explore tried many of these systems, they really favored Git, though.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=153)** They liked how easy it was to create and unify different representations of their software.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=159)** While Git's command-line tool was a little challenging to learn at first, they really appreciated how flexible it can be.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=166)** Now, we're going to do some cool things with Git in this course.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=170)** But before we do, let's learn some common words and phrases that we'll use during our journey.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=176)** A repository is a place where source code and its history lives.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=180)** The history part is important since that's a big part of what Git tracks when changes are made.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=186)** Copies of a repository that live in centralized infrastructure are considered remote repositories, or remotes for short. Changes made to local copies of these repositories are pushed up to remotes.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=199)** Speaking of local copies, let's talk about clones.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=203)** A clone is a decentralised copy of a repository that you can pull into your machine.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=209)** Every change you make to the clone is stored locally.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=213)** Now you can push those changes back up to the remote at any time, but you also don't have to.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=218)** It is your preference.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=220)** Branches are different representations of code in a repository.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=225)** Since Git tracks the history of how source code changed, it uses branches to track multiple histories simultaneously.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=232)** You can think of branches like versions of a repository.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=237)** The "official state" of the code is stored in a trunk branch.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=241)** This is usually called "main," but it goes by many different names.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=246)** Bringing code changes from two branches together is called a "merge."
>
> **[4:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=250)** As you can imagine, this can be really simple or really complicated depending on the changes being unified.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=257)** We're going to learn how to install Git in the next video.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=260)** After we install Git, we're going to use it to create or initialize Explore California's repository.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=267)** Once that's done, we'll start learning a really simple workflow that we'll be using to track, log and push changes.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=274)** However, I want to get something controversial out of the way now.
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=278)** We are going to use Git's command-line client, or the Git CLI for short, in this course.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=284)** Now, I'm not going to lie, there are definitely thorny areas within the Git command-line client.
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=290)** However, there are three big advantages that you will gain from getting comfortable with using Git in the terminal.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=296)** First, if you work with multiple systems per machine, the Git client is much more likely to be installed on those systems than, say, Tortoise.
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=305)** That only makes you infinitely more productive in my opinion.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=309)** Second, most of the graphical clients that exist use the Git CLI under the hood.
>
> **[5:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=313)** That's not an accident.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=315)** The maintainers of Git and every feature that Git is capable of is available in the CLI client first and foremost.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=322)** You might learn how to do something with Git and VS Code, for example, but if you know how to do it with the Git CLI, you can do that thing everywhere and anywhere at any time.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=332)** Finally, and most importantly, knowing how to use the Git CLI makes you super valuable in the job market.
>
> **[5:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=340)** All right folks, let's strap ourselves in and get going with Git.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/version-control-the-secret-weapon-of-devops-24078553?u=76281980&t=344)** Yeehaw!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (20), [[CLI]] (5), feature (2), [[Version Control]] (2), teams (2)
> **CLI Commands:** git (20), make (3)
> **Env Vars:** cli (5), svn (1), cvs (1)
> **Exercise Files:** source code (6)
> **Analogies:** for example (3), imagine (1)
> **Definitions:** is a  (3)
> **Tools:** terminal (1), vs code (1)
> **Prerequisites:** install (2)

#### Installing Git
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=0)** Before we get going with Git, let's learn how to install it on Windows and the Mac.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=5)** Let's start with the Mac.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=7)** To install Git, all you have to do is type "git".
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=12)** That's it.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=14)** On some installations of macOS, a pop up will appear asking you to install the macOS command-line tools.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=21)** If you see this, just click Okay to begin the installation and it will only take a few minutes to complete.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=27)** Once that's done, type "git --version" like you see on the bottom of the screen to confirm that git was installed correctly.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=34)** This should print a version string similar to this.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=39)** Now let's take a look at how to install it on Windows.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=42)** To begin, click on the Start button.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=45)** Search for your preferred browser, or Edge in this case, and open it.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=49)** After the browser opens, click on your address bar and visit [gitforwindows.org](https://gitforwindows.org).
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=54)** This will bring you to the official Git project for Windows.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=58)** Once you're here, click on the big Download button to download Git.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=62)** Git should automatically download.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=66)** There it is.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=67)** Once it's done, just double-click it to begin the installation.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=73)** Once the wizard pops up, go ahead and click Next.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=77)** The installer will ask you where to install Git.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=79)** You can leave the default folder there.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=81)** Click Next.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=82)** Again over here it will ask you to select components that you'd like to install.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=86)** You can just leave all of these as is and then click Next to continue.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=92)** This is telling you what Git will look like in the Start Menu.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=96)** Go ahead and click Next to continue.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=98)** Then this allows you to select the default editor you'd like to use.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=102)** You can select your preferred editor over here, or you can leave the default, which is Vim, and then click Next to continue.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=110)** Over here you can select the default branch name for new repositories like we learned earlier.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=116)** Every Git repository has a trunk repository that the "official version" of the repository lives in.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=123)** A lot of projects use "main" for this.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=126)** If you let Git decide, it will use "master" as the default name.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=130)** I prefer "main", so I'm going to click Override the Default Branch Name and then click Next.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=136)** This allows you to use Git from either Git Bash, which is the terminal that Git comes with, or any other third-party software like the terminal application that we were using earlier.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=149)** I'm going to leave this option checked and then click Next to continue. This window allows you to select the SSH client that Git uses to fetch remote repositories.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=161)** I recommend using the Bundled OpenSSH option, as the other option will require you to install SSH yourself, which you don't want to do and neither do I.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=171)** So I'm just going to select this one and click Next.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=174)** Just like the screen before this, this allows you to select the OpenSSL library, which is what's used for presenting certificates when you clone repositories from their website variants, which we'll see an example of later.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=191)** Go ahead and use the default option, then click Next.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=194)** This determines the line endings that Git uses.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=197)** I highly prefer using Unix-style line endings, as Windows style line endings tend to cause problems in a lot of Git projects.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=205)** So let's go ahead and check Commit Unix-Style Line Endings and then click Next.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=210)** Here we get to select the terminal emulator that Git Bash uses.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=215)** It can either be cmd or mintty, which I prefer, so we'll go ahead and leave that checked and then hit Enter.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=222)** This screen allows you to select the default behavior that the Git "pull" command, which we'll learn more about later in this course, uses.
>
> **[3:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=230)** I recommend leaving the default here and then clicking Next.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=234)** This allows you to select where secrets, like username and passwords when you're cloning Git repositories, lives.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=242)** We can leave this as is and then click Next.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=245)** These options over here allow you to tweak the performance of Git.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=248)** You can leave these as is and then click Next.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=251)** And you can leave this as is and click Install since we won't be using any experimental options.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=258)** That was a lot, but we're finally there.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=261)** We're installing Git.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=262)** Once this finishes, we should be able to use it.
>
> **[4:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=266)** Great.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=268)** So now the installation is finished let's uncheck View Release Notes, since we don't need to see that right now, and then click Finish.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=275)** Alright.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=276)** Now that we've installed Git, let's go ahead and use it.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=279)** To do that I'm going to click on the Start Menu.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=281)** I'm going to type "terminal".
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=283)** And then I'm going to hit Enter.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=285)** Once here, all we need to do is the same things we did on the Mac.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=289)** First we'll type "git" to make sure that it's installed.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/installing-git-24078551?u=76281980&t=292)** And then we'll type "git --version" to verify the version of Git that we have. In this case, here it is, that confirms that Git is installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (28), next (13), [[Windows]] (4), hit (2), [[Search]] (1)
> **CLI Commands:** git (28), ssh (2), make (1)
> **UI Navigation:** select the (6), click on (4), double-click (1)
> **Prerequisites:** install (8)
> **Tools:** terminal (4), bash (2), vim (1)
> **Code Identifiers:** macos (2)
> **Env Vars:** ssh (2)
> **Analogies:** similar to (1), just like (1)

#### Initializing your first Git repository
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=0)** Now that we've installed Git, let's initialize our first Git repository.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=4)** To begin, let's make sure that we're in the Explore California website directory.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=8)** If you're not, you can just type "cd ~/explore-california- website" to take you right there.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=14)** Initializing a Git repository is very easy.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=19)** All you need to do to do that is type "git" in it.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=22)** That's it.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=23)** This folder is now a Git repository.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=27)** Wild stuff.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=28)** This command adds a hidden folder called ".git".
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=32)** We can see it by running "ls -a".
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=35)** Here it is.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=37)** This folder, amongst other things, adds a few small files that will track the changes to your code.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=44)** In the next video, we'll save our changes by committing our exercise files to our local Git repository.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/initializing-your-first-git-repository-24080518?u=76281980&t=50)** Progress!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (7), cd (1), next (1)
> **CLI Commands:** git (7), make (1), cd (1), ls (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### Getting familiar with the Git workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=0)** Just because you initialized this directory as a Git repository doesn't mean that Git is automatically tracking your work.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=6)** We'll need to run a few more commands to tell Git about the files that we want to version with it.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=11)** But, before we run those commands, let's take a look at the workflow that we're going to be using.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=16)** We'll be adding more stuff to this workflow as we go on throughout this course.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=20)** The first thing we'll do is add files into our staging area. That's represented up here on the top.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=26)** The staging area is the place where Git actually tracks files.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=30)** We'll use the "git add" command to do that.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=34)** Afterwards we'll move down clockwise to the second box over here, where we'll record or "commit" our changes to our repository.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=45)** Committing tells Git about the changes that you want to save into your repository.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=50)** We can do that with the "git commit" command.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=53)** We'll be able to add a message to the commit describing what we changed and why.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=57)** Once we're ready to commit all of our changes, we move over to the left where we push them into a remote repository using "git push".
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=67)** We'll do that once we set up our remote repository later in the course.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=72)** So, with that out of the way, let's head back into our terminal and give this workflow a test drive.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=78)** So I've run "ls -a" over here to show us all of the files that are in our Git repository.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=85)** I want to track all of these files.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=88)** So to do that I'm going to run "git add .".
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=92)** Remember, "." is our current working directory.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=97)** So this will tell Git to stage all of the files in our working directory into the repository that we created.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=105)** As you can see, "git add" returns nothing after doing this.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=108)** This means that our staging was successful.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=112)** Now if I wanted to track a single file, like let's say I've made changes to just the Dockerfile, I could run "git add Dockerfile" over here instead, but we don't need to do that because we ran this command already.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=126)** Now that we've staged our code, it's time to tell Git we mean business.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=130)** And we do that by committing our changes.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=133)** So let's first run "git status" to see what Git is tracking.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=138)** As we can see, there is a lot that gate is tracking.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=141)** It's tracking our entire website and it's tracking our Dockerfile and our docker-compose.yaml manifest. What it isn't tracking is this ".git" directory. That is a private directory that is just for your local Git client.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=157)** This will never get tracked.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=161)** So, now let's go ahead and create a commit to save these changes.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=166)** So I'm going to type "git commit" and hit Enter.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=169)** Git will open your default code editor upon doing this. In most terminals this is going to be VI.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=175)** Not Vim, VI, there is a difference. However, if you want to change that, you can simply do ":q" like I did earlier, and then just type "EDITOR" in caps, equals, and then the editor of your choice.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=190)** Let's say it's Vim, or Visual Studio Code, and then type "git commit" right after that.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=196)** There are a lot of opinions about what your "git commit" message should look like, so I'll just show you my favorite.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=204)** I'm going to type "I" to enter insert mode and begin typing.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=207)** The first lines of my commit messages are really short summaries of the change that I'm going to make.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=212)** These are usually less than 50 characters in length.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=215)** We call this the summary of the commit.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=217)** Since we've begun tracking all of Explore California's site to our repository for the first time, I'll type "initialized git repository" here.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=227)** Now this command is really simple, so I could just end the message here.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=231)** However, some commits require slightly more explanation.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=235)** If I wanted to add more information about this commit, I would add two new lines, or hit Enter two times, and then I'd write whatever I wanted to write here.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=243)** This area is called the "description."
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=246)** You can add as much stuff as you'd like to add here.
>
> **[4:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=250)** I've seen commit messages that had enough paragraphs to create a short novel.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=254)** The nice thing about the setup is that the only message fellow Explore California engineers will see when they're working in GitHub or GitLab or something like that, is the summary, which is our first line at the top.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=265)** It's quick and easy.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=267)** So I could add a description here like "added the website, our Dockerfile and our docker-compose.yaml manifest."
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=280)** We could add that, but this commit is really simple.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=284)** So I'm just going to go ahead and remove this.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=285)** However, sometimes it's easier if you can't come up with a summary for your commit to type the description first and then once you type the description, then you think about how you want to summarize that description and then make that the summary of your commit.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=298)** So let's go ahead and get rid of that.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=300)** Just to review the commands that I used in Vim, I typed capital V to highlight my line, then I typed J to move down the line, Then I typed X to get rid of all that junk, and then I'm going to save this command by typing ":wq".
>
> **[5:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=316)** That's W to write our changes and Q to quit.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=322)** Upon doing that, Git tells us that our changes are tracked by saying absolutely nothing.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=327)** But you can confirm that by typing "git status" and then seeing that Git tells us that our working tree is clean, that just means that our commit is tracked and ready to be pushed up.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/getting-familiar-with-the-git-workflow-24079509?u=76281980&t=338)** We'll push it up later in the course when we set up GitLab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (26), [[Jetpack Compose|Compose]] (2), hit (2), business (1), [[GitHub]] (1)
> **CLI Commands:** git (26), docker (2), make (2), ls (1)
> **Tools:** vim (3), gitlab (2), terminal (1), visual studio (1), github (1)
> **Definitions:** means that (2), is a  (2), we call this (1), is called (1)
> **Prerequisites:** set up (2), setup (1)
> **File Paths:** docker-compose.yaml (2)
> **Env Vars:** editor (1)
> **Cross-References:** later in (1)


### 4. Collaborative Version Control

[↑ Back to Table of Contents](#table-of-contents)

#### Beyond local repositories
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=0)** Earlier, we learned that Git is a decentralized version control system, or a DVCS.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=5)** This allows you to develop your code locally without having to push your changes to a centralized server.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=12)** Developing locally is nice, but eventually you're going to want to collaborate with other people.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=17)** This means that eventually you're going to have to merge code together.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=22)** So what do you do when it's time to merge?
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=24)** In the past, this was usually done over email with patch files.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=29)** This was slow and very cumbersome. However, and surprisingly, Git actually still supports merging changes this way.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=37)** This is because Git was actually built by Linus Torvalds, who was the founder of Linux, and emailing or posting diffs was a big part of how Linux was built.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=48)** You could also email an entire repository to other people in compressed format, but this is also very slow.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=55)** Finally, you could use the Git CLI to push changes to a remote repository and then use commands like "git merge" or "git rebase" to merge in all of these changes.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=67)** But just saying all of that is crazy complex, and it does require a lot of commands, and it does get complicated very quickly.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=75)** This is why over time, development platforms were built.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=78)** Development platforms are systems that make it easy for developers to work on source code together, while retaining all of the benefits of distributed version control.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=87)** This is accomplished in three big ways.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=91)** First, development platforms provide code search.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=95)** Code search makes it easy to find what you're looking for, no matter how large or small the codebase is.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=100)** Development platforms also provide visual histories that make it easy to see how your code has changed over time.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=107)** However, and in my opinion, by far the biggest benefit that development platforms provide is the idea of a "pull" or a "merge request."
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=117)** Pull or merge requests allow developers to perform just-in-time code review.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=121)** This is really nice because developers could gather together and review a change together before they push those changes into a trunk branch like main.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=130)** This is an alternative to doing a code review like some of the ones that I've been part of, and some of the ones that I've caused, where you create a single commit that has thousands of lines of changes that are spread across hundreds of files.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=144)** No one wants to see that.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=145)** And merge requests make this much easier to go through.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=148)** Pull or merge requests also provide an audit trail of decisions that were made during a merge.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=153)** This can be really helpful for keeping track of changes that occurred during software releases.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=160)** Many of these tools also come with a ton of additional features like project tracking, static webpage hosting, and my favorite, built-in CI/CD, or continuous integration and continuous delivery.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=172)** We'll learn about both of those things later in this course.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=176)** I'm very excited!
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=177)** There are many development platforms available on the market today.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=181)** These are just an example of a few of them.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/beyond-local-repositories-24079510?u=76281980&t=185)** In the next video, we'll talk about the development platform that Explore California decided to go with and how we're going to use it throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), [[Version Control]] (2), [[Linux]] (2), [[Search]] (2), [[Code Review]] (2)
> **CLI Commands:** git (6), make (3), find (1), cd (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Env Vars:** dvcs (1), cli (1)
> **Cross-References:** later in (1), in the next (1)
> **Exercise Files:** source code (1)

#### Introducing GitLab
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=0)** In the last course, we learned about development platforms that make version control and team-wide collaboration easy.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=6)** GitHub, Bitbucket, and GitLab were some of the examples provided.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=10)** In this course, we're going to be using the open-source version of GitLab.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=14)** GitLab was created by Dmytro Zaporozhets and Sid Sijbrandij in 2011.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=20)** GitLab was created as an open-source alternative to platforms like GitHub that you can install on your own systems.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=26)** Like the development platforms that we saw in the last video, GitLab provides Git for version control, of course, but it also provides a lot of other neat tools, like its own build system called GitLab CI, project management tools, webpage hosting, and more.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=41)** You can install GitLab on just about anything, from Raspberry Pis to extremely large Kubernetes clusters on your cloud provider of choice.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=50)** GitLab is also very popular.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=52)** It's used by some of the largest open-source projects on the internet, and some of the largest corporations in the world.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=59)** It's even used by governments and banks in completely offline environments.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=64)** In this course, we're going to help Explore California move into GitLab.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-24080514?u=76281980&t=68)** We're going to use Git to version control our software with it, and later in this course use GitLab CI to build and deploy our websites into the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (3), open-source (3), [[GitHub]] (2), [[Git]] (2), ci (2)
> **Tools:** gitlab (10), github (2), bitbucket (1)
> **CLI Commands:** git (2), make (1)
> **Cross-References:** in the last (2), later in (1)
> **Prerequisites:** install (2)

#### Creating the GitLab Docker Compose service
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=0)** In this video, we're going to learn how to run GitLab on our computer locally with Docker Compose.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=6)** This will help Explore California host GitLab on their own servers.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=10)** To save time, the exercise files for this chapter contains the Docker Compose manifest you'll need to start GitLab. That manifests is located in the 04_ 03_before directory.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=23)** So let's go ahead and grab it.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=26)** The first thing that we're going to make sure of is that we're in the Explore California website directory.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=31)** If you're not there, just run the "cd" command that we learned about earlier to take us right back in there.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=38)** From here, let's run "cp -r" and then the folder that you stored your exercise files in.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=45)** So in my case that's going to be home directory slash downloads slash exercise files, followed by 04_03_before, followed by docker-compose.yaml.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=58)** And then we're going to go ahead and store that in our directory here called docker-compose.yaml, like this.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=65)** Now, note that this will overwrite the Docker Compose manifest that we created earlier.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=72)** However, the one that we're about to copy into our working directory is the one that we're going to be using for the rest of the course, so you're not missing anything by doing this.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=81)** Alright, once you're done with that, go ahead and open docker-compose.yaml in your editor.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=87)** Now, there's a lot of stuff going on here.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=89)** Fortunately, we're not going to look at all of this stuff right now.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=92)** We'll break it up piece by piece throughout the course.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=95)** However, the service that I want you to pay attention to right now is the GitLab service down here.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=101)** Let's go ahead and take a closer look at the service to see what's going on.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=105)** Now, to make it easier for me to refer to stuff that I'm looking at, I'm going to go ahead and type in ":set number", Enter, to enable line numbers like you see over here on the left.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=117)** So let's start with line number 102 which I can get to easily by typing ":102".
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=124)** This is the container image that we're going to use to start up GitLab.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=129)** So like we learned about earlier when we were experimenting with the build keyword, this allows us to select an image that is in the Docker Hub or in a private repository instead of building our own.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=141)** If you are doing this on an Intel-based machine, you're going to want to uncomment line 99.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=147)** Like this, I pressed X two times, and then delete line 102 by going to 102, and then pressing D twice.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=157)** That will select the Intel version of GitLab.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=162)** If you're using an Apple-Silicon-based Mac or you're using an Arm-based Windows machine, you can leave the Docker Compose file as is.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=171)** The next property to look at is the host name.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=175)** Eventually we're going to use GitLab in a browser.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=178)** So this is the address that we're going to need to reach GitLab.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=182)** Now you've probably noticed that gitlab.[example.com](https://example.com) is probably not a real fully-qualified domain name, or a real FQDN.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=191)** That is okay.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=192)** We're going to perform a little bit of a sleight of hand to work around this. That, we'll do in a bit.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=199)** Next up are the list of ports down here on lines 127 through 130.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=205)** This property tells Compose to map or expose network ports within the container to ports on your machine.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=212)** The number to the right of the colon, like we can see here on line 128, is the port within the container to be exposed.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=218)** The number on the left is the port within your host that this port will be mapped to.
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=223)** We're mapping three ports to make GitLab work within Docker compose: 80, 443 and 22. 80 and 443 use the same ports on your host as a container, No surprises there. However, port 22 is a little interesting.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=241)** This is the default port for SSH.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=243)** Many machines might already be running an SSH server in the background, so if we try to use port 22 on our machine as well, Docker Compose will likely complain that this port is already in use.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=254)** To avoid that, this example maps port 22 on the container to port 2222 on our machine.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=261)** While GitLab can still fail to start if something is using port 2222 on our machine, this is much more unlikely to happen.
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=270)** Now, as you can see, there are a lot of properties that I am not covering here just to save time.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=275)** If you're interested in learning more about what each of those properties do, I would encourage you to check out the Docker Compose documentation.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=282)** Getting there is really easy.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=283)** All you have to do is open a browser and visit docs.[docker.com/compose](https://docker.com/compose).
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=293)** You can also view one of the many courses on LinkedIn learning that go super in-depth into Docker Compose.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=300)** Alright, now that our Compose service for GitLab is ready to go, it's time to start it.
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=305)** We'll do that in the next video.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-the-gitlab-docker-compose-service-24077626?u=76281980&t=308)** So before we do that, let's go ahead and close this file and prepare our terminal to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (14), next (3), cd (1), [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1)
> **CLI Commands:** docker (13), make (3), ssh (2), cd (1), cp (1)
> **Tools:** gitlab (12), terminal (1)
> **Ports:** port 22 (3), port 2222 (2), :102 (1)
> **File Paths:** docker-compose.yaml (3)
> **Env Vars:** ssh (2), fqdn (1)
> **Exercise Files:** exercise files (3)
> **URLs:** [example.com](https://example.com) (1), [docker.com](https://docker.com) (1)

#### Starting the GitLab Compose service
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=0)** Let's continue on and start up GitLab.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=2)** Starting GitLab is straightforward.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=5)** We can do it in three steps.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=7)** First, we're going to create a virtual network for our GitLab containers to talk to each other, called "gitlab".
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=12)** For my networking folks watching this, you can think of container networks like private VLANs that are entirely operated by Docker's container runtime.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=21)** We'll do this by typing "docker network create gitlab".
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=25)** Done.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=26)** This long IDE over here is Docker's way of telling us that the network was created.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=31)** Next, we need to make gitlab.[example.com](https://example.com) reality.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=35)** We can trick our system into doing that by adding a line into a special file called /etc/hosts, or as it's lovingly called, our /etc/hosts file.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=46)** Every application that is internet or network-facing checks this file for DNS records first before asking name servers on the network or the internet for clues.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=57)** By doing this, we're basically telling our browser that gitlab.[example.com](https://example.com) is and always will be whatever IP address that you decide to give it.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=68)** In this case, since we want this address to point to our machine, we're going to use the special loopback address 127.0.0.1 to accomplish that.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=79)** This is a really neat trick.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=81)** So let's go ahead and do that now.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=82)** I'm going to delete all of that stuff.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=85)** And instead I'm going to write "sudo sh -c" and then, in double quotes, I'm going to type "echo", then a semicolon, then "echo", and then a single quote, 127.0.0.1, then a space, then "gitlab.[example.com](https://example.com)".
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=102)** Then a closed single quote followed by two right brackets, or right angle brackets rather, and then, following that, our /etc/hosts file.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=113)** And then finally we're going to close this with a double quote.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=116)** So a couple of things to note.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=118)** We're going to make sure we have two single quotes.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=120)** We're also going to make sure that our two right angle brackets are inside of the double quotes over here.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=126)** And you're also going to make sure that you have "echo" spelled out twice like we have here.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=132)** So what this command is going to do is it's going to use echo to write an entry into our /etc/hosts file that basically tells our system, "Look, I don't care what Google says, I don't care what my ISP says.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=145)** Gitlab.[example.com](https://example.com) is and always will be on our own machine no matter what."
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=153)** Now, we're providing echo twice here because on some systems, running this without echo twice will just add this line to the end of /etc/hosts, which can cause problems.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=164)** So this echo over here guarantees that this line that we're adding in single quotes will be on its own line.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=172)** Now, before we hit Enter, let's make sure of one really important thing.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=177)** You want to make sure that you have two right angle brackets here, not one.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=182)** The reasoning for that, and the reason why I'm emphasizing this is because if you only use one /etc/hosts will be overridden entirely by this statement over here.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=194)** There are some applications that depend on /etc/hosts being properly maintained so that can mess stuff up.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=202)** So we want to make sure that we have two right angle brackets to prevent that.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=205)** Since we have two over here, we are safe to run this command.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=209)** So I'm going to go ahead and hit Enter.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=212)** If you're asked for your password go ahead and enter it.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=215)** And then what I'm going to do is I'm going to cat /etc/hosts to make sure that it looks okay.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=222)** And there we go.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=224)** What we want to see here when we run this command, is that "127.0.0.1 gitlab.[example.com](https://example.com)" is on its own line at the bottom of the file.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=233)** Now that we ran this command, let's open a browser and visit gitlab.[example.com](https://example.com).
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=240)** Now if you have Safari it might try to auto resolve this to [gitlab.com](https://gitlab.com).
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=245)** That's not what we want.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=246)** So let's go ahead and type [https://gitlab](https://gitlab) .[example.com](https://example.com).
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=252)** As you can see, we get an error message when we try to go there.
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=255)** And while DNS is usually the root of all problems, in this case this one is pretty easy.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=260)** GitLab just isn't ready yet.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=262)** We haven't started it yet, so let's go back into our terminal to fix that.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=267)** To start GitLab, all we need to do is —let's clear our screen to organize— "docker compose up gitlab".
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=276)** We can see that a lot of stuff is happening here.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=279)** So let's just take a few minutes to leave it be and let GitLab start.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=283)** There's a lot of moving parts that help make GitLab as awesome as it is.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=288)** So while all of those parts are starting, go ahead and take a long walk, make some coffee, or just simply step away while GitLab initializes.
>
> **[4:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=297)** Have fun and I'll be here when you get back.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=300)** Alright, welcome back.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=303)** Let's go back to our browser and see whether GitLab is ready yet.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=307)** Now, if I go to my address bar and type in gitlab.[example.com](https://example.com).
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=312)** As we can see we get a "connection is not private" error message.
>
> **[5:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=316)** This is a little different than what we saw before, but it's actually great progress.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=320)** This means that our GitLab instance is working.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=323)** However, our browser doesn't know about the self-signed certificate that GitLab created for itself.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=329)** This is completely safe in this case.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=332)** So let's click Show Details and then click Visit This Website.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=338)** So cool, we have a login page.
>
> **[5:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=340)** But what's the password?
>
> **[5:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=343)** Well, to answer that, we need to go back to our terminal.
>
> **[5:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=345)** So let's head back there.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=348)** Now since we can't use this terminal because it's doing "GitLabby" things, let's open another terminal over here.
>
> **[5:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=355)** We'll learn how to hide all of that noise later.
>
> **[5:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=359)** So let's make sure that we're in the Explore California website, which it seems like we are.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=363)** That's good.
>
> **[6:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=364)** We can confirm that by typing "ls" and we can see that we have the files that we expect to be there.
>
> **[6:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=370)** So we are in a good spot here.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=373)** So before we can log in to GitLab, we need to set a password for the root user that GitLab creates.
>
> **[6:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=379)** There are two ways of doing this.
>
> **[6:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=381)** The first way is easy.
>
> **[6:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=383)** We can get the password that GitLab creates for us by running "docker compose exec gitlab grep 'Password:'", in single quotes with a colon at the end, "/etc/gitlab/initial_root_password".
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=400)** There it is.
>
> **[6:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=402)** Just like that, we got a password.
>
> **[6:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=404)** However, GitLab deletes this file after you shut it down for the first time.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=408)** While this won't be a problem if you save this password somewhere convenient, if you're like me, you'll forget and then you'll lose the ability to log in.
>
> **[6:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=417)** Fortunately, there is another way.
>
> **[6:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=419)** Let's clear our screen to organize.
>
> **[7:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=422)** This works every time, no matter how many times you bounce GitLab.
>
> **[7:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=425)** So to do that we're going to type "docker compose exec gitlab gitlab-rake", and then in double quotes "gitlab:password:reset" and then in square brackets "[root]".
>
> **[7:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=441)** This command allows us to set a password for the root user.
>
> **[7:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=446)** You'll be asked to enter the new password twice.
>
> **[7:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=450)** You can make it anything you want.
>
> **[7:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=453)** And then once that's done, it tells you that the password has been successfully updated.
>
> **[7:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=458)** Now that we've done that, let's go back to our GitLab login page.
>
> **[7:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=462)** Type that password in again in the password field, and finally either hit Enter or click Sign In.
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=470)** If you get this prompt, you can either save the password or click Not Now.
>
> **[7:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=475)** It's completely up to you.
>
> **[7:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=477)** Boom, we're in. Nice!
>
> **[8:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/starting-the-gitlab-compose-service-24080519?u=76281980&t=480)** In the next video, we'll create our first project and repository in GitLab, and then we'll make sure that our local Git repository can talk to GitLab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (3), [[Jetpack Compose|Compose]] (3), next (2), dns (2), application (1)
> **Tools:** gitlab (36), terminal (4), safari (1)
> **CLI Commands:** make (13), docker (6), sudo (1), cat (1), ls (1)
> **URLs:** [example.com](https://example.com) (8), [gitlab.com](https://gitlab.com) (1), [https://gitlab](https://gitlab) (1)
> **Env Vars:** dns (2), ide (1), isp (1)
> **Versions:** 127.0.0 (3)
> **Cross-References:** go back to (2), in the next (1)
> **Definitions:** is a  (2), means that (1)

#### Creating our first GitLab project
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=0)** Now that we got GitLab running, let's create a project.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=3)** If you see this, Check Your Signup Restrictions window up here, we can safely ignore it by clicking acknowledge.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=10)** It's just telling us that anyone can access our GitLab instance, which isn't a concern for us because we're running GitLab locally.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=16)** First, let's create a group to put our new project into.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=19)** Click on Groups over here on the left.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=22)** Then on New Group over here on the right.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=26)** Then click Create Group again when prompted.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=30)** Let's first get this group a name.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=32)** "Explore California" sounds good I think.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=35)** Next, scroll down a little bit and find this Public button over here.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=40)** We're going to make this a public group.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=43)** We could use the next few options down here to customize what our group looks like and who can access projects within it, but since this is just going to be used by us, we'll leave everything from here on down as is.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=55)** So finally, click Create Group and there's the group.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=59)** We're now ready to create a project.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=62)** To begin, click on Create New Project over here.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=65)** Then click on Create Blank Project.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=67)** Give your project a name like, I don't know, "Website," since we're working with Explore California's website.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=74)** And just like our group, we're going to go ahead and make this a public project.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=80)** Next I'm going to uncheck Initialize Repository with a Readme.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=83)** Since we created a Git repository locally already, we'll get an error when we push our changes if we were to leave this checked due to a merge conflict.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=93)** So let's go ahead and make sure that that's unchecked.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=95)** Then finally we can click Create Project.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=98)** And, there it is, our first project.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=101)** Okay.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=102)** Check out this message here on the top.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=104)** GitLab is recommending that we create an SSH key. Since we can use SSH to clone Git repositories, uploading an SSH key will allow us to essentially log in to GitLab whenever we push our changes.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=117)** So let's go ahead and go into our terminal to create one. We'll need to create our SSH key locally.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=124)** So the way to do that is by typing "ssh-keygen".
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=128)** You'll be asked a few questions after you do this.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=132)** First it'll ask you where you want to save the private key that it creates.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=136)** Let's save it to a file called "/tmp/gitlab".
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=141)** Next, we can optionally enter a passphrase if we were concerned about this key being left out and about.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=147)** Since we're doing this all locally, let's just hit Enter to leave it blank.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=152)** Hit Enter again when prompted and done.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=155)** If you see some cool art down here, then your SSH key is ready to go.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=160)** So we actually created a little more than a single key.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=163)** In fact, we created two keys here.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=165)** We created a public key and a private key.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=169)** The public key is your name and address.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=172)** You can give this to anyone.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=173)** It's your name and address.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=174)** Who cares?
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=175)** The private key is the key to your house.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=178)** In most cases, you don't want anyone to have this.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=180)** Otherwise you'll have surprising people entering your place.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=184)** And that would be very bad.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=186)** You can think of SSH as the lock to your house that protects the things you love.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=191)** SSH can accept any public key you throw at it, but the only way it will unlock the lock is if the right private key associated with that public key is also presented somehow.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=202)** Now that we know this, we know what to give GitLab here.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=206)** When GitLab or other Git-based dev platforms ask for your SSH key like it's asking up here, they're really asking you for your public key.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=215)** This way, it can save that public key to your account so that when you locally present your private key upon trying to push your changes, GitLab knows that it's you trying to do stuff.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=226)** All right, let's head back into our terminal and finish this off.
>
> **[3:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=230)** So to get our private key I'm going to run "cat /tmp/ gitlab.pub".
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=237)** This file is automatically created by SSH keygen, so all we're doing is just using cat to print it.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=243)** Now we're going to copy all of this over here.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=247)** And then we're going to head back into GitLab.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=251)** Finally, click on Add SSH Key.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=254)** Click on Add New Key.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=256)** Then paste the key that you just copied.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=259)** Underneath it you can give this key a title, like let's say you name it "yourself", like "Carlos", or you can just name it "My Awesome Key."
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=269)** And then we can click Add Key.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=272)** Nice.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=273)** The key is added and we can now use it to log in to GitLab when we clone and push repositories.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=280)** In the next video, we'll configure Git so that we can pull this repo down to our computer and test that we can push changes.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-project-24080517?u=76281980&t=286)** Exciting!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), [[Git]] (4), hit (2)
> **CLI Commands:** ssh (11), git (4), make (3), cat (2), find (1)
> **Tools:** gitlab (12), terminal (2)
> **Env Vars:** ssh (10)
> **UI Navigation:** click on (5), scroll down (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Best Practices:** the key is (1)

#### Connecting Git to GitLab
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=0)** Now that we've created our project and added our SSH key to our GitLab account, it's time to get Git and GitLab talking to each other.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=7)** Click on the GitLab logo on the upper left-hand corner to go back to your home dashboard.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=12)** Then click on "Explore California / website" to go to the repo we created earlier.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=18)** We're going to retrieve or "clone" this repository into our machine.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=24)** To begin, click on the blue Code button.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=28)** Then click on the clipboard underneath SSH.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=31)** Let's hold on to that for now.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=34)** Before we move on, let's have a look at our workflow again.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=38)** As you can see here, we've added a few more steps to it.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=42)** When working with remote repositories like ones from GitLab, the first thing that you're going to do is you're going to clone the repository onto your machine, like shown over here on the left.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=53)** Fortunately, you'll only need to do this once.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=56)** Since we've already initialized the repository locally, we'll connect our repository with GitLab by adding our GitLab repository as an origin.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=65)** We'll see how soon.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=67)** Eventually, you'll want to keep changes made into that repo up to date with your local copy.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=72)** We can use Git pull to do this.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=75)** To preserve the order or history of our changes, we can rebase changes, push up the GitLab with our changes by adding the "--rebase" option to the end of "git pull".
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=86)** We'll be doing this frequently, so you'll see an example of that in action soon. After you pull in your remote changes, you'll "git add", "git commit" and "git push" like we saw before.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=97)** Cool.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=97)** Let's head back into the terminal and connect our local repository to GitLab.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=102)** Before we continue, let's run "git status" to make sure that we've committed all of the changes that we've made thus far.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=109)** As you can see, it looks like we forgot to commit the docker-compose.yaml file that we created earlier.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=115)** So let's go ahead and fix that.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=116)** First we'll run "git add docker-compose.yaml".
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=120)** I press the Tab key to autocomplete that.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=124)** Next we'll run "git commit" to commit our changes.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=127)** However, before we run this command, we need to add a little bit of information to Git so that it knows who we are, basically, when we create these commits.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=138)** What do I mean by this?
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=140)** If I type "git log" over here, we can see that our author is a default author that Git created on the spot based on my username and any emails that I had associated with the system.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=152)** However, if you don't have this information on your computer, Git might throw an error message saying that you don't have an author name or author email specified.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=163)** So to work around this, what I'm going to do is basically set that information now.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=168)** So to do that I'm going to first clear my screen, just to organize things.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=172)** Then I'm going to type "git config --global author.name".
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=179)** And then after you type this you can just put your name. "Carlos Nuñez", for example.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=185)** Now we're going to do the same thing but for our email address.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=189)** Like I said earlier, Git was used by Linux contributors to contribute patches and changes to Linux.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=195)** So because all of this was done super distributed all over the world, having emails attached to those commits was really important, and it's still important today.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=205)** This is how people know how to contact the person that made the change.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=210)** So what I'm going to do is I replaced "name" with "email", like you can see here.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=215)** So now what I'm going to do is replace my name with my email address.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=220)** There we go.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=221)** Next I'm going to repeat these changes, but instead of "author" I'm going to go ahead and put "user" here.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=229)** So I'm just going back to the author name and email commands and replacing "author" with "user".
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=237)** Now that I've done all that, I am finally ready to make a commit message with my information on the commit.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=244)** So let's go ahead and do that by typing "git commit".
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=247)** Just like before, it's going to ask for a summary and a description.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=252)** So let's make our summary something simple, like "Added Docker Compose services."
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=258)** And again you can be as creative as you want with the description.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=261)** However I'm going to keep it simple and just write something like this, "Includes things like GitLab". Done.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=271)** So I'm going to exit Vim by pressing Ctrl + [ and then typing ":w" to write my changes and "q" to quit Vim.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=280)** And there we go.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=282)** Now let's see what our git log, which shows us all of our commits, looks like now that I've added these configurations.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=291)** As you can see, the difference is pretty obvious.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=294)** Our first commit just had this generic LinkedIn user information that was on the system.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=301)** But after making those configurations, it now has my name and my email on it, which looks a little bit more professional.
>
> **[5:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=310)** So now that I've made that commit, if I run "git status" again, we can see that our working tree is clean, which means that we're ready to test whether we can connect to GitLab.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=320)** So the way that we're going to do that is —clearing our screen— by running "git clone".
>
> **[5:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=326)** Then we'll paste the command fragment that we copied from GitLab earlier in here.
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=331)** We'll be given this scary looking message here.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=334)** This is just SSH telling us that it hasn't connected to gitlab.[example.com](https://example.com) before, and it's simply asking us whether we want to trust it based on the fingerprint shown here.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=344)** Since we do trust the server, I'm going to go ahead and type in "yes" to continue.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=349)** Now that we did that, we get another error message that's telling us that we don't have permissions.
>
> **[5:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=355)** But this error message actually makes sense, though.
>
> **[5:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=357)** A few minutes ago, we created an SSH key to identify ourselves on GitLab.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=362)** However, just because we created this key doesn't mean that SSH now knows about it.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=367)** Because Git uses SSH behind the scenes to fetch this repo, what we basically did by doing this was, to go back to our house analogy from earlier, trying to unlock a house without any keys.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=380)** That would be one really unsafe house.
>
> **[6:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=383)** So to fix this, we're going to create an SSH config file that maps our GitLab instance to our private key.
>
> **[6:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=390)** So to begin.
>
> **[6:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=391)** I'm going to clear my screen, then type in "touch ~ /.ssh/config".
>
> **[6:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=398)** That creates our config file.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=400)** So once we're done with that we're going to open it in our editor.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=405)** We're going to add two lines here.
>
> **[6:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=407)** The first line that we're going to add is "host gitlab.[example.com](https://example.com)".
>
> **[6:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=412)** Underneath that we're going to add two spaces.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=415)** And then we're going to add "IdentityFile /tmp /gitlab".
>
> **[7:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=421)** That's it.
>
> **[7:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=423)** That's all we need to do to tell SSH about our private key for our GitLab instance.
>
> **[7:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=427)** So we're going to go ahead and save this file and exit.
>
> **[7:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=430)** And then we're going to retry our clone command from earlier.
>
> **[7:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=437)** So we get a warning here telling us that we've cloned an empty repository.
>
> **[7:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=440)** But that's actually good.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=442)** That's what we want because our project is new and has nothing in it.
>
> **[7:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=445)** So we were able to successfully clone, which means we're able to successfully talk to GitLab.
>
> **[7:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=451)** I mentioned earlier that we're already working in the Git repository.
>
> **[7:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=455)** So what we actually want to do here is link our existing repository with this GitLab project.
>
> **[7:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=461)** So we don't need that repo that we cloned earlier, so let's go ahead and delete it.
>
> **[7:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=465)** Now that we've done that let's clear our screen and type in "git remote add origin".
>
> **[7:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=474)** And then we're going to go ahead and once again paste in the command fragment that we copied from GitLab earlier.
>
> **[8:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=480)** This will tell our Git repository about a remote repository or a remote that we're referring to as origin here.
>
> **[8:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=489)** So let's go ahead and hit Enter here.
>
> **[8:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=491)** And there it is.
>
> **[8:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=493)** Finally, let's confirm that we can push our changes up to GitLab.
>
> **[8:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=498)** To do that all we need to do is type "git push".
>
> **[8:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=501)** However, we get this error here.
>
> **[8:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=503)** This one's expected.
>
> **[8:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=506)** Git is telling us that this branch that we created doesn't have an upstream branch.
>
> **[8:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=511)** Let's break that sentence down.
>
> **[8:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=514)** When we committed the files we added earlier, Git automatically created a branch called "main".
>
> **[8:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=520)** Every local branch that Git creates needs to have a reference in its remote so that it knows where to pull changes from and push changes to.
>
> **[8:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=530)** So in our case, our remote is GitLab.
>
> **[8:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=533)** And so we call that remote branch and upstream branch.
>
> **[8:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=538)** So Git was really nice here and gave us the command that we need to run to fix this.
>
> **[9:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=543)** So I'm just copying this and pasting it down here.
>
> **[9:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=548)** And there it goes.
>
> **[9:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=550)** Our changes have been made.
>
> **[9:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=551)** So finally, let's log in to GitLab and confirm that it got our changes.
>
> **[9:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=554)** So I'm going back into the browser and simply refreshing the page.
>
> **[9:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=560)** And would you look at that? If you see the message right above the main branch reference right here, we can see that the commit message that we made just now is here.
>
> **[9:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=572)** We can also see that the repo here has the same files that we've been working on since we started our journey.
>
> **[9:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=578)** So GitLab is up and running, y'all.
>
> **[9:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=580)** So in the next few videos we're going to be doing some really exciting stuff.
>
> **[9:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=585)** We're going to be adding some tests to our website so that we can actually flex our DevOps muscles a little bit, and then we're going to start exploring the worlds of Infrastructure as Code and CI/CD.
>
> **[9:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=598)** Very exciting!
>
> **[9:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/connecting-git-to-gitlab-24081431?u=76281980&t=599)** Stick around, you're going to have a lot of fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (28), [[Jetpack Compose|Compose]] (3), next (3), [[Linux]] (2), generic (1)
> **CLI Commands:** git (28), ssh (9), make (3), docker (3), cd (1)
> **Tools:** gitlab (24), vim (2), terminal (1)
> **Env Vars:** ssh (8)
> **UI Navigation:** click on (4), go to (1)
> **Cross-References:** earlier in (1), go back to (1), in the next (1)
> **File Paths:** docker-compose.yaml (2)
> **URLs:** [example.com](https://example.com) (2)


### 5.  Testing Your App with RSpec, Capybara, and Selenium

[↑ Back to Table of Contents](#table-of-contents)

#### Test often, ship often
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=0)** Let's review what we've accomplished so far.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=2)** We've installed Docker and Docker Compose onto our machine.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=6)** We've also confirmed that we can build container images from Dockerfiles and create containers from them.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=11)** We also learned about version control systems and how they make developing software as a team awesome.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=17)** From there, we've created a Git repository, used Docker Compose to stand up an instance of GitLab, and pushed our repository along with the Explore California website into it.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=27)** This is some serious progress.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=29)** Let's crank this up a notch by changing our website.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=32)** Let's get right into it.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=33)** Let's make sure we're in the Explore California website directory, which we are.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=38)** From there we're going to CD into the website directory.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=41)** Then we're going to go ahead and open index.htm in our favorite editor.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=46)** And then once here we're going to change text and r... Hang on a second.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=51)** Let's get DevOps here for a little bit.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=53)** How do we know that the change we're about to make actually works?
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=57)** We could load the website in a browser locally and see our changes.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=61)** That totally works.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=62)** Web developers all over the world test like this.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=65)** But what happens when we want to automate this testing?
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=68)** What if we were debugging some new backend code for our website that only shows up once rare specific conditions are met?
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=75)** What if this codebase was much larger and much older than the one we're using, and making even the smallest change within it can cause absolute chaos.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=84)** We can solve all of these problems and more by writing tests.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=88)** Software testing is exactly what the name implies: using software to test our software.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=96)** We use changes to verify that our software works in all sorts of conditions.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=101)** This way, when we add that small change to the spaghetti of old code that a coworker handed to us before retiring and spending their days on the beach with cocktails, we know that it won't break things, or if it does, why and how those breaks occur.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=116)** There is no such thing as too many tests.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=121)** I'll say that again for my folks in the back.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=123)** There is no such thing as too many tests.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=128)** The more tests your software has, the better guarantees you can make about how the software will behave in the real world.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=136)** SQLite, one of the most popular databases in the world, has over 92 million lines of test code, despite the code itself only being roughly 156,000 lines large. SQLite, being as well tested as it is, is one of the biggest reasons why it is so popular. Their maintainers test SQLite in just about every condition it finds itself in, and any new bugs that people submit against the project turns into, you guessed it, more tests.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=167)** Now we're definitely going to update Explore California in this course, but before we do that, we're going to add two different kinds of tests to verify that our change will work as expected. A unit test that tests the single change we're going to add, and an integration test that verifies that the entire website works after making that change.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=186)** Since we need a test framework to run these tests with, we'll also add three popular testing tools to our Compose manifest: RSpec, a very popular Ruby-based test framework; Capybara, a Ruby library that makes it easier to connect RSpec with Selenium; and finally, Selenium, a tool that automates testing websites in real browsers.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=208)** This course only scratches the surface of testing software.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=211)** There are lots of great courses right here on LinkedIn learning that I would recommend checking out if you want to go deeper into this topic.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=219)** Richard Wells's "Unit Testing and Test Driven Development in Python" or Meaghan Lewis's "[[Test Automation Foundations]]" are some pretty good courses to get started with.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/test-often-ship-often-24081427?u=76281980&t=229)** So let's grab ourselves a coffee, tea, or whatever your favorite drink is, fire up that terminal and get into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (3), [[Selenium]] (2), [[Version Control]] (1), [[Git]] (1), cd (1)
> **CLI Commands:** make (4), docker (3), ruby (2), git (1), cd (1)
> **Tools:** gitlab (1), terminal (1)

#### Setting up your test
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=0)** In this video, we will write a few simple unit tests for our web app with Rspec, Capybara and Selenium.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=6)** After that, we'll use our newfound Docker Compose knowledge to run those tests within Docker Compose.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=12)** Let's get started.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=14)** Let's talk about what unit tests are.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=16)** First, unit tests test a single component within your software.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=20)** These are the smallest and simplest tests in your collection of tests, or what we call a test suite.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=26)** Since unit tests only test singular components, they should be small, plentiful, and very fast.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=32)** They should be very easy to write.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=34)** So easy, in fact, that you can write them before you write any actual code.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=38)** If you are writing a test and are thinking, "How do I configure my test to access this database or disk?", then that is probably not a unit test.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=46)** Those kinds of tests are more appropriate for integration tests, which we'll talk about later.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=50)** Let's first talk about Rspec.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=53)** Rspec is a Ruby-based testing framework.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=56)** I like using it because its domain-specific language, or DSL, makes writing readable tests really easy to do.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=63)** Since we're testing a mostly static website, we'll need something that works well with HTML and maybe some computed CSS.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=70)** We could use something that requests raw HTML and parses the response, but that will quickly grow cumbersome.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=77)** Instead, we can use a testing framework for websites and web apps that does this work for us.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=81)** Capybara is a good example of this.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=84)** Like Spec, Capybara provides a domain-specific language for interacting with websites and testing output.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=90)** It interacts with websites called drivers.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=93)** Speaking of drivers, while Capybara comes with a super simple Ruby-based web driver called rack test that fetches and parses HTML output, it does not support computing JavaScript or CSS at all.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=105)** This makes testing things like, "Do we have the right background on this page?" impossible to do.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=111)** This is where Selenium comes in.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=113)** Selenium is a platform for automating web browsers through code.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=117)** You can pronounce it Selenium or Selenium.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=120)** It's completely your preference.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=122)** Code communicates with Selenium through web drivers.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=124)** Selenium supports Chrome, Firefox, and Internet Explorer by default.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=129)** While we will use Chrome for this course, in real life I would probably test against Firefox, Internet Explorer, and Edge as well as some other browsers so that we can make sure that most of the people using Explore California can actually use it.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=142)** Now that we know the basics, let's get into our terminal and set up some tests.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=147)** First, make sure that you're in the Explore California website directory that we've been using so far in this course.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=153)** You'll be able to see it here.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=155)** If not, you can just type "cd ~/explore-california-website" to bring you right back to it.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=161)** Okay, next let's make sure that GitLab is up and running.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=164)** Since we're going to be committing our changes frequently.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=167)** We can do that by running "docker compose ps" and hitting Enter.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=172)** If you see GitLab in the output, which you can see over here, then you're good to continue.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=178)** If not, simply run "docker compose up -d gitlab" to start GitLab in the background like we did before.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=187)** After you do that, open up a browser and visit gitlab.[example.com](https://example.com).
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=192)** You should see a login page or a page like this.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=195)** Remember this can take a few minutes to get going, so don't fret if GitLab isn't working right away.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=201)** Now that we've confirmed that GitLab is up, let's go back into our terminal and get started.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=207)** The first thing I'm going to do is create a folder called "spec".
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=210)** So let's use "mkdir spec" to do that.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=214)** I like to organize my tests by the kinds of tests that I'm writing.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=217)** Since we're writing unit tests.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=219)** Let's create a folder called "unit" underneath "spec", like this.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=225)** Now let's start writing our test file.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=228)** By default, Rspec looks for files that end with "_spec .rb".
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=234)** Since we're going to be writing tests against the home page, let's create a file within spec/unit using the touch tool called "spec/unit/page_spec.rb".
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=246)** Now that we've created it, let's go ahead and open it up in our preferred editor.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=252)** Most Rspec tests start with a describe block.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=256)** Describe blocks organize tests within a test suite into different scenarios.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=260)** So let's go ahead and create one below that looks something like this.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=265)** Since we're testing that we can render the homepage, I decided to call this test "Example page render unit tests", but you can call it anything you want.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=275)** All Rspec tests go inside of describe blocks. You can think of describe blocks as a collection of tests that are related to each other.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=283)** Every single test inside of the describe block gets described with an "it" block like this.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=289)** Now let's use a really simple test, like checking that the logo of Explore California is visible.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=296)** So what I'm going to do is replace "test name" with "Should show the Explore California logo", like this.
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=306)** And there we have it.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=308)** We have a really simple test case inside of a describe block.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=311)** Like I said, you can have multiple tests within the describe block.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=315)** Ideally they should be related to each other.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=318)** So since we're testing an example page render and we're testing that the home page renders, we could have other tests like "It should show the example California summary" or "It should show the example California navigation bar", or nav bar.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=334)** But for now, we're only going to have one test case, just to keep things simple.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=338)** We'll add the actual code that executes this test later.
>
> **[5:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=341)** But for now let's go ahead and save our changes and exit our editor.
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=347)** Now we're ready to create our test harness within Docker Compose.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=350)** But before we do that, let's go ahead and commit our changes.
>
> **[5:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=354)** So, remember, our workflow is going to be "git add", "git commit" and "git push".
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=360)** We're going to be doing this more rapidly than we've done it before.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=363)** So if you forget the workflow or if you just want a refresher of how everything works, go ahead and visit our Git and GitLab chapter where we go really in-depth into that.
>
> **[6:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=374)** So first I'm going to run "git add spec" to add the folder that we just created.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=380)** Afterwards I'm going to run "git commit" to open up our commit in our editor.
>
> **[6:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=387)** Let's go ahead and add a really simple commit for this one.
>
> **[6:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=390)** Let's say "Added simple tests".
>
> **[6:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=392)** Again you're free to create whatever description you'd like.
>
> **[6:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=395)** I'm going to use a description like "We're making this change to verify that our spec is working."
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=405)** So after I write that, I'm going to write and quit.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=408)** And now we're ready to push.
>
> **[6:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=410)** But before I do, I want to make sure that I have the latest changes from GitLab by running "git pull rebase".
>
> **[6:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=417)** Now, this is a really good practice to get into the habit of doing, because if we were working with multiple developers, there might be lots of changes in our upstream branch that we want to pull down to make sure that our history aligns with what GitLab is seeing.
>
> **[7:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=433)** So "git pull rebase" allows us to do this while making sure that our history is in sync with what GitLab has.
>
> **[7:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=439)** Great, so now that we've done all of that, we are finally ready to push.
>
> **[7:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=444)** Done.
>
> **[7:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=445)** Once again, we're going to be doing this much more quickly in future videos.
>
> **[7:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-your-test-24076580?u=76281980&t=449)** So if you get lost, go back to our Git chapter where we talk about this in much more depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (9), [[Selenium]] (7), web (5), [[Jetpack Compose|Compose]] (5), [[HTML]] (3)
> **CLI Commands:** git (9), docker (5), make (5), ruby (2), cd (1)
> **Tools:** gitlab (11), firefox (2), terminal (2)
> **Documentation:** spec (8)
> **Env Vars:** html (3), css (2), dsl (1)
> **Definitions:** is a  (4)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** spec/unit/page_spec.rb (1)

#### Viewing our test harness in Docker Compose
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=0)** Now that we have a skeleton for our tests, we're ready to run our tests within Docker Compose.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=5)** As always, before going any further, make sure that you're in the Explore California website working directory that we've been using or run "cd ~/explore- california-website" to go back into it.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=17)** I've created the Compose service and an updated version of the Dockerfile we created earlier to save us some time.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=23)** While we already have the updated Compose service in our docker-compose.yaml, we'll need to obtain the updated Dockerfile that goes along with it.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=31)** This file is in the "05_03_before" folder within your exercise file bundle. Like we did before, let's run "cp", then the path to your exercise files bundle, or "~/Downloads/exercise_files/" in my case. Then, "05_03_before/Dockerfile" and then copy it right into our Explore California website directory.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=61)** Now, let's make sure that we have it.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=63)** You should see Dockerfile in the list over here.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=66)** And then when you open Dockerfile with Vim, you should see that it looks a little bit different.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=71)** However, we're going to take a much closer look at this Dockerfile in the next video.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=76)** Cool!
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=76)** Let's check out our docker-compose.yaml and explore how we've defined our unit test service.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=83)** You're going to see references to actual PWD in some of the stuff you'll be looking at here.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=88)** Don't worry about that for now.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=90)** We're going to talk about that in a later video.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=94)** Let's scroll down to the unit test service below and have a look at three important properties that are associated with it.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=100)** First, we can see that unit test creates a custom Docker image using the "build" keyword down here.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=107)** We're doing this because in this case, it's easier to create a custom image that has Rspec, Selenium and Capybara baked into it than to find one on the Docker Hub.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=115)** Second, we can see that our unit test service has two "depend on" clauses, one on the website service and another on the Selenium service.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=124)** This is a cool feature within Docker Compose that prevents your services from starting unless conditions within under services have been met.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=131)** In our case, our unit test service won't start until the website and Selenium services start and are healthy.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=138)** What do we mean by healthy?
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=139)** Well, let's scroll up to the website service and find out.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=144)** As you've probably guessed, the website service starts a local copy of Explore California.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=149)** We're using the super popular Nginx image from the Docker Hub to do this. Instead of copying our website into a Docker image with a custom Dockerfile, we're using a volume mount, which you can see here to bind our website folder to a special directory that this Nginx uses to serve our web page.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=167)** We're also using port binding, like we did with our GitLab service, to make this website, which is served on port 80 within the container, available locally on our host on port 8080.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=178)** Check out the "Installing GitLab" video from earlier if you'd like to learn more about how port mapping works.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=184)** Finally, take a look at this health check property over here.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=188)** This is what I meant by "healthy" earlier.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=192)** Health check allows you to define a test that Docker will run against the container to determine whether the service is working or not.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=198)** The test is usually a simple-cell command like the one that you see here.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=202)** Here we're using "curl" to load the website locally within the container.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=208)** If curl successfully retrieves the website, then our service is healthy and our unit tests will start.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=214)** The timeout property down here tells curl that it has 10 seconds to do this before Docker respectfully, but brutally, terminates this process.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=222)** Additionally, the "start _period" property down here tells Docker to wait 60 seconds before starting our tests.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=228)** This property is useful for giving services time to start up before Docker becomes annoying by constantly asking it "Are we ready?"
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=235)** "Are we ready yet?"
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=236)** "Are we ready yet?"
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=237)** "Are we ready yet?"
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=238)** What happens if this fails?
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=240)** That's where "interval" and "retries" come into play.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=243)** Retries tells Docker how many times to retry the test command, while interval specifies how long to wait before each attempt.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=251)** Given all of this, if our curl command fails, Docker will try the command again four more times while waiting 10 seconds between each attempt.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=259)** That was a lot.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=260)** While we didn't cover everything about how health checks work, you can always visit docs.[docker.com/compose](https://docker.com/compose) to learn more.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=268)** Let's head back to our unit tests to learn more about that final property.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=273)** The command property down here.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=275)** This command property feeds arguments into the entrypoint that we saw earlier within the Dockerfile to change how Rspec works.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=284)** In this case, what we're doing is we're giving it the "pattern" argument over here, and then we're giving it the second argument which specifies what tests to run.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=293)** The way this works is it will look in our unit directory for any test that has "_spec.rb", like we talked about in the last video.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=304)** We'll learn why we're using "/tests" down here instead of "/spec" in the next video, when we go deeper into the Dockerfile.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=314)** Cool.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=315)** Now that we know what our unit test service is doing, let's exit our editor and run some tests.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=321)** However, don't forget to commit your changes to GitLab.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=323)** Let's go ahead and do that now.
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=325)** We'll use "git status" to see what's changed.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=327)** As you can see, we introduced a new Dockerfile.
>
> **[5:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=330)** So let's go ahead and add that into our staging area.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=334)** Let's go ahead and commit those changes.
>
> **[5:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=339)** I'm not going to include a description in this commit, but you're more than welcome to.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/viewing-our-test-harness-in-docker-compose-24080522?u=76281980&t=344)** And then let's push our changes up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (7), [[Selenium]] (3), next (2), cd (1), feature (1)
> **CLI Commands:** docker (15), curl (4), make (3), find (2), nginx (2)
> **Cross-References:** in the next (2), we talked about (1), in the last (1)
> **Tools:** gitlab (3), vim (1)
> **File Paths:** docker-compose.yaml (2), _spec.rb (1)
> **Ports:** port 80 (1), port 8080 (1)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Exercise Files:** exercise file (1), exercise files (1)

#### Updating the Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=0)** In the last video, we copied an updated version of the Dockerfile into our working directory so that we can start RSpec and run our unit tests.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=9)** Let's take a closer look at it now.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=12)** Go ahead and open our Dockerfile in your preferred editor.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=16)** So as you can see, the Dockerfile doesn't look that much different than the Dockerfile that we created at the beginning of this course.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=24)** For example, we have a "FROM" line that tells the Dockerfile what are our parent or base images.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=30)** In our case, we're using version 3.0 of Ruby from the Docker Hub.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=35)** Right underneath that, we have a "LABEL" specifying who's maintaining this image and where to contact them. Looks exactly the same as before.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=43)** And we also have a "COPY" line that copies the spec directory into a folder within the Docker image, called "/tests".
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=50)** This is why in Docker Compose we're starting our unit tests from "/tests" instead of "/spec" or something similar.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=59)** However, we have two new things inside of this Dockerfile that we haven't seen before.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=64)** We have a "RUN"command and we also have an "ENTRYPOINT"command.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=68)** Let's take a closer look at these. RUN commands in Dockerfiles like this... Well, run commands.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=76)** These commands are executed in what are called intermediate containers, and any files or other data generated by the command gets stored in an intermediate image layer.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=86)** In fact, every single line in this Dockerfile after the LABEL line is in a separate image layer.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=92)** You can think of Docker images as basically a set of layers squished together, kind of like a stack of pancakes.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=99)** Pretty cool.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=100)** Now this "gem install" command is a Ruby adjacent command that installs various libraries or executables into your environment.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=109)** So in this case, we're using gem install to install RSpec, Capybara and Selenium WebDriver.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=116)** This one requires some explaining.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=119)** Selenium WebDriver does not install Selenium.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=123)** This only installs libraries that allow our test code to talk to a web browser driven by Selenium.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=129)** In our docker-compose.yaml, we saw that our unit test service is dependent on a Selenium service in order to start. That Selenium service is what actually runs Selenium.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=141)** So if you're interested in learning how that's configured, go back into the docker-compose.yaml and take a look at the Selenium service.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=149)** Finally, we have an ENTRYPOINT down here.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=152)** This entrypoint gives any containers created by this image a default command to execute.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=157)** In our case, our default command is going to be Rspec.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=161)** This entrypoint, i.e.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=163)** the one that is not commented out like the one below, is written in what's called a "command form."
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=171)** If we wanted to, we could do what we're doing down here and write the entrypoint in something called "shell form."
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=178)** There are a few differences between the two, but the biggest difference between them that we'll focus on for now is that it affects how Rspec starts up. In command form, Docker will configure Rspec containers to start Rspec, the actual binary Rspec, when they launch. In shell form.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=197)** Docker will configure these containers to run "/bin/ sh -c rspec" instead.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=206)** This makes a big difference when providing arguments to the container using "docker compose run" or "docker run". In command form, those arguments will go directly to the Rspec binary, so the "--pattern" argument and that last argument that specified where our tests are go directly to Rspec in command form.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=227)** In shell form, those arguments will go to sh instead.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=231)** The consequence of that is that there isn't any guarantee that Rspec, the binary Rspec, will receive those arguments.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=239)** This can cause a lot of problems with certain tools, so I typically prefer to write my entrypoints in command form like this.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=247)** If you're interested in learning more about the differences between command form and shell form, I highly recommend checking out my course "Learning Docker", where I go into it in much more detail.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=257)** You can also check out my follow-up course, "Docker Essentials Training", which really drills into the differences between these forms and also gives you some examples of how you can write your entrypoint in other ways.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=269)** Alright, we're done here.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/updating-the-dockerfile-24082448?u=76281980&t=271)** So let's go ahead and exit our editor and continue on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (8), [[Jetpack Compose|Compose]] (4), data (1), web (1), [[Forms]] (1)
> **CLI Commands:** docker (12), ruby (2)
> **Env Vars:** label (2), run (2), entrypoint (2), copy (1)
> **Prerequisites:** install (4), configure (2)
> **File Paths:** docker-compose.yaml (2)
> **Documentation:** spec (2)
> **Analogies:** for example (1), kind of like (1)
> **Versions:** version 3 (1)

#### Running the test
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=0)** It's time.
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=1)** Time to run our tests, that is.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=4)** To begin, we're going to use "docker compose run --rm unit-tests".
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=11)** Now, if we use "docker compose up" here, it would run our tests along with all of the other services in our Compose file, like GitLab, the website, etc.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=22)** So using "docker compose run" ensures that the only thing that runs are our tests.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=30)** So let's run it.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=32)** You'll see our image building here, as expected. This might take a few minutes depending on your internet connection, so stretch your legs or hang tight and we will be back in a moment.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=45)** Alright, welcome back.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=46)** We can see here that we have this little green dot over here to the left of our screen.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=53)** That green dot means a lot.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=55)** The dot means that Rspec found one test, i.e.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=58)** the test that we wrote earlier.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=60)** It being green means that the test passed, which is expected because our test doesn't do anything yet.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=66)** Success!
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=67)** Rspec is working and can run tests.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=69)** Let's make this test actually do something.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-the-test-24081428?u=76281980&t=72)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4), next (1)
> **CLI Commands:** docker (3), rm (1), make (1)
> **Definitions:** means that (2)
> **Cross-References:** in the next (1)
> **Tools:** gitlab (1)

#### Finding criteria for a unit test
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=0)** So far we were able to get Rspec working in Docker Compose.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=3)** However, it's not testing very much like we saw before, so let's fix that by writing an actual test against our actual Explore California website.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=11)** Let's get right into it by opening "spec/unit/page_spec.rb" in our editor.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=17)** Just like we saw before, it doesn't do a whole lot, so we should make it do something like, for example, test that the Explore California logo is there.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=25)** Now, if we were developing Explore California from scratch, I would have probably started with the test verifying that the site had a logo and that the logo was in the right place.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=34)** However, since we're DevOps to find an existing website that doesn't have very much in the way of tests, we're going to write a simpler test that just checks that the logo exists.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=46)** So let's begin by using our browser to see what the existing source code for the page looks like.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=51)** Let's quit our editor for now and run "docker compose up -d website".
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=59)** Now, if you ran the unit test that we did in the last video, there isn't going to be much that happens here because your website should already be running.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=67)** Like we saw earlier when we started GitLab, the -d argument tells Docker to take the logs that are coming from this website container and shove them into the background so that we don't have to see them while it's running.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=79)** Now that we did that, let's go back into our browser, open a new tab, and visit our local instance of Explore California by going to localhost:8080.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=89)** Cool.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=90)** Explore California is up and running, so feel free to spend a few minutes looking around and getting comfortable if you'd like before moving on. So we can see that the Explore California logo is right here.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=102)** We'll need some properties about this logo to test that it's actually there.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=107)** So we can do that by looking at the source code for it and seeing if we can find something unique about it.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=112)** If you're using Safari like I am, you'll need to enable developer mode by hitting the Command + Comma keys on your keyboard, clicking on the Advanced tab and then clicking on Show Develop Menu in the menu bar.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=126)** Now that you've done this, you should be able to right-click the logo and click on Inspect Element.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=131)** Once you do that, it'll take you right there.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=134)** So as you can see, there are several interesting properties about this logo's HTML object here.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=139)** First, this "a" element tells us that the logo is also a logo that you can click on.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=146)** The "href=index.htm" property tells us that clicking on this link will take us to the index of this web page.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=154)** We can test that by clicking on All Tours and then clicking on the logo.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=160)** And we're right back there.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=162)** Secondly, we can also see that this "a" tag has two more properties: "title" and "class".
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=170)** Specifically, we can see that this logo has a "class" set to logo.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=175)** Aha!
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=176)** That's our unique thing that we can test against.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-criteria-for-our-unit-test-24076579?u=76281980&t=179)** So with that in tow, let's go back to our test file and link the two together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (2), [[DevOps]] (1), [[HTML]] (1), web (1)
> **CLI Commands:** docker (3), find (2), make (1)
> **UI Navigation:** click on (2), in the menu (1), right-click (1)
> **Cross-References:** in the last (1), go back to (1)
> **Tools:** gitlab (1), safari (1)
> **Exercise Files:** source code (2)
> **Analogies:** just like (1), for example (1)
> **File Paths:** spec/unit/page_spec.rb (1)

#### Writing the unit test
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=0)** Now that we know how to find our "logo" with code, let's outline what we want to do as pseudocode here.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=8)** I like to use pseudocode as a placeholder that helps me translate my thoughts to code.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=12)** So inside of the "it" block let me describe what I want to do.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=16)** First, I want to visit localhost:8080.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=21)** Then, I want to get the page's source code.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=25)** Then, I want to find an "a" element whose "class" is set to "logo".
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=34)** And that's it.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=35)** Let's make this code a little more code-like. So when I say I want to visit 8080, a more code-like representation of this could be something like 'visit ("[http://localhost:8080](http://localhost:8080)")'.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=49)** Then, to get the page's source code, a more code-like representation of this could be something like "get(page_html)".
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=59)** And then finally, when I want to find that element, which of course I misspelled, and then I misspelled it again... That looks better.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=67)** This could be represented with something like 'verify_exists (a.class == "logo")'.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=75)** Again, pseudocode is a nice tool to help you visualize what you want to do.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=80)** There is no right way to write pseudocode.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=83)** So if your pseudocode doesn't look like this, that's totally fine.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=86)** It's not real!
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=87)** It's just meant to help you visualize what you want to do.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=90)** We know that Capybara links Rspec to web pages, but how do we do this with Capybara?
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=95)** Let's take a look at its documentation to see.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=98)** To do that, I'm going to go to my browser and visit [https://github.com](https://github.com)/ teamcapybara/capybara.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=109)** That will take us right to Capybara's source code on GitHub, which also happens to be its documentation.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=116)** Now that we're looking at Capybara's source code and documentation, let's go line by line in our pseudocode to see if we can find equivalents in Capybara to what we want to do.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=125)** So going back to our code, the first thing that we want to do is visit localhost 8080.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=131)** Let's see what happens when we go back to our documentation and search for "visit."
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=136)** And maybe a parenthesis, since we're looking for a function.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=140)** Well, wouldn't you know it? It looks like we have a visit property over here, and all we need to do is, inside of these parentheses, provide the URL that we want to visit.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=149)** So I'm going to go back to my source code and replace this line over here with two spaces.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=158)** And I can just leave it exactly as it is. Really, really convenient.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=162)** I'm going to go ahead and get rid of the comment also.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=165)** Now let's go back and see if we can find that "a" element that we were looking for earlier. In HTML land, we could use something called a "selector" to find a specific element on a page.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=175)** So let's see what happens when we search for "selector."
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=179)** That's not useful.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=180)** Let's keep trying.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=181)** There we go!
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=182)** How about that?
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=183)** It looks like we have a page object that has a method called "has_selector?" where in the parentheses you can provide the properties that you're looking for on the page.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=194)** Really, really convenient.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=196)** So now that we found this all we have to do is copy that line, go back to our source code, remove this "get" stuff over here, align our cursor with "visit" and then paste that right in. Next, we're not interested in "table tr", since we're not looking for a table, we're looking for an "a" element with a class set to "logo."
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=218)** So to do that I'm going to go ahead and change "table tr"to "a.logo".
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=223)** This dot right here tells Capybara that I'm interested in a property within the "a" element, specifically I'm interested in the "logo" property.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=232)** Okay, now that we have some code that looks like it can get our logo, what I'm going to do is I'm actually going to get rid of this "verify_exists" pseudocode here, since our code up here pretty much does exactly what we were looking for there. Then I'm going to go ahead and save this.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=247)** And then I'm going to use Command + T to open a new tab, Ctrl + L to clear the screen.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=254)** Then I'm going to make sure that I'm in the Explore California website directory.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=258)** If you're not you can just type "cd ~/explore-california-website" to go right back in there.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=264)** And then I'm going to type "docker compose run --rm unit-tests".
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=269)** But I'm not going to hit Enter just yet. If you recall from a previous video, our Dockerfile copies our tests into the container image.
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=278)** However, because we changed our test, this means that we also need to update that container image.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=284)** We can easily do that by configuring our run command to rebuild our container image before running our tests.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=291)** So to do that, I'm going to use Ctrl + A to go to the beginning of the line.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=294)** Then I'm going to use Ctrl + F to move one character to the right a few times, and then right behind "--rm" I'm going to add a "--build".
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=303)** That's what tells Docker Compose to rebuild our container image.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=307)** Now we're going to go ahead and hit Enter to run our tests.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=311)** This isn't quite what we expected.
>
> **[5:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=313)** We got a little bit of an error here.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=315)** It looks like we need to add a few more bits to our test before it can fly.
>
> **[5:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=319)** "Visit" is a method that's provided by Capybara.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=323)** The "undefined method visit" error that we see right below it is telling us that Rspec wasn't able to find that method, but that's hardly surprising because if we go back to our test, we can see that there's nothing in our test that tells Rspec to actually use Capybara.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=338)** We can easily fix that by going to the top of the page and adding a few lines of code.
>
> **[5:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=342)** For those of you all that are following along with me in Vim, I'm going to go ahead and do this by typing lowercase "g", lowercase "g", twice.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=350)** Then I'm going to press lowercase "i" to enter insert mode.
>
> **[5:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=354)** And then I'm going to add three lines.
>
> **[5:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=357)** I'm going to add 'require "capybara"', 'Require "capybara/dsl"', and then I'm going to add "include Capybara::DSL".
>
> **[6:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=374)** And then I'm going to add two lines to separate those from our test.
>
> **[6:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=378)** Let's explain what's going on here.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=380)** The first two lines up here tell Ruby, which is what runs Rspec, to include the Capybara libraries into our test.
>
> **[6:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=387)** This last line imports the methods that are provided by the DSL module within the Capybara library into our test.
>
> **[6:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=395)** That's what enables us to use "visit" down here.
>
> **[6:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=398)** Let's go ahead and save this with ":w", and then use Ctrl + Tab to go back to our other tab.
>
> **[6:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=406)** Clear our screen and run "docker compose run --build --rm unit-tests" again.
>
> **[6:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=414)** Now we get another error.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=415)** This time we're seeing an error that says that "rack test requires a rack application, but none was given."
>
> **[7:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=421)** This error is interesting and requires a teeny bit of explanation.
>
> **[7:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=425)** Just like we explained in the last video, rack test is the driver that Capybara uses by default to load websites with.
>
> **[7:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=432)** It's also written in Ruby and it is very fast, we just haven't configured it yet.
>
> **[7:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=436)** So let's go back to Capybara's documentation and search for "racktest," one word, to figure out how to configure it.
>
> **[7:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=445)** We get a link there, I just clicked it and there it is.
>
> **[7:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=448)** So it seems like all we need to do is copy this code right here into our test.
>
> **[7:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=453)** This code registers a new instance of the rack test driver called "RackTest" up here, which also happens to be the same name of the default driver that Capybara uses.
>
> **[7:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=463)** But wait, there is a catch.
>
> **[7:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=467)** If you scroll up just a little bit, you can see this sentence: "Furthermore, you cannot use the RackTest driver to test a remote application or to access remote URLs e.g.
>
> **[7:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=477)** redirects to external sites, external APIs, or OAuth services that your application might interact with."
>
> **[8:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=483)** Even though our website is running within a Docker container from the perspective of the unit test service, it is an external website.
>
> **[8:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=491)** So what do we do?
>
> **[8:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=492)** This is where Selenium comes in.
>
> **[8:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=494)** Here's how we're going to fix this... ...in the next video. We're going to stand up a Selenium server, in Docker of course, that spins up instances of Chrome on demand.
>
> **[8:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=504)** Afterwards, we're going to use the Selenium WebDriver that we installed earlier to have our tests tell Selenium to visit our web page and test the selector that we provided in our test over here.
>
> **[8:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-the-unit-test-24080515?u=76281980&t=516)** Let's do it!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (4), [[Search]] (3), [[Jetpack Compose|Compose]] (3), application (3), web (2)
> **CLI Commands:** find (7), docker (5), rm (3), make (2), ruby (2)
> **Cross-References:** go back to (6), previous video (1), in the last (1), in the next (1)
> **Exercise Files:** source code (6)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Code Identifiers:** verify_exists (2), page_html (1), has_selector (1)
> **Env Vars:** dsl (2), url (1), html (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1), [http://localhost:8080](http://localhost:8080) (1), [https://github.com](https://github.com) (1)

#### Setting up Selenium
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=0)** Alright, let's jump right into setting up Selenium.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=3)** We need to set this up in two places, our test and our Compose file.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=7)** Let's start with our test.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=9)** We can go there by just using Ctrl + R and typing in Vim and finding the command that ends in "spec.rb".
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=16)** Unfortunately, the Capybara documentation doesn't have an example of setting up Selenium in a way that works with Docker easily.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=24)** So to simplify things, the exercise files for this chapter have a version of this test that has all the code you need to enable that configuration.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=33)** So what we're going to do is we're going to go to the second tab that we opened earlier, clear all this out with Control + L, and then we're going to copy the updated version of page_spec from our exercise files bundle.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=48)** We can find it in the "05_08_before" folder.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=55)** So what we're going to do here is we're going to type in "cp" and then you're going to provide the path to your exercise files.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=62)** So in my case it's going to be "~/Downloads /exercise_files".
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=66)** Then we're going to type in "05_08 _before".
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=71)** And then we're going to copy "page_spec.rb" into "./spec/unit-test", or just "unit".
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=82)** And that's it.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=83)** When you're done, go to the first tab and if you're using Vim you'll see that it warns you that this file has changed.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=91)** So let's go ahead and press capital L to load the change file.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=95)** If you're using Visual Studio Code or something like that, you might get a similar pop up.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=99)** It'll just look different.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=100)** Okay, let's go through the changes that I've made here.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=103)** The first change that I made is adding 'require "selenium- webdriver"' right underneath 'require "capybara/dsl"'.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=111)** No surprises there.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=112)** We need Selenium WebDriver to use Selenium.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=116)** Next I registered a new driver down here called "selenium".
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=121)** There's a lot of properties going on down here, so let's turn on line numbers by typing in ":set number" and going through some of these changes.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=132)** So on line 10 I have this URL property here.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=135)** The URL property tells the web driver where a Selenium server is.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=139)** Notice that we're talking to a host called "selenium" here.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=143)** That's going to be the address of the Docker Compose service that we created called "selenium", which we'll take a look at in a few minutes.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=150)** The "options" property from lines 11 through line 17 configures Chrome in a way that works more efficiently within Docker.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=159)** Finally, on line 22, this "default_driver" property tells Capybara to use Selenium instead of rack test.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=169)** Now that we looked at our modified test, let's take a look at the Docker Compose file to see how the Selenium service is configured.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=176)** So for those following along with me in Vim, I'm going to type ":e", and then I'm going to type "docker-compose.yaml".
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=183)** I used the Tab key to autocomplete that.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=186)** Now that we're here, I'm going to scroll down a little bit just so that I can put this closer to the center of the page.
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=193)** Now we can see here that we're doing a lot of the same tricks that we did for the website service earlier.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=199)** We're using this image over here to stand up an instance of Selenium.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=204)** Notice on line 31 that I have another copy of this image if you're using the Intel chip.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=209)** So if you're running all of this on an Intel Mac, go ahead and uncomment line 31 and comment line 33.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=217)** However, if you're using a Mac with the Apple Silicon chip, or if you're using an Arm-based machine, you can just simply leave it as it is.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=226)** We also have a few port mappings down here.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=229)** Again, if you ran into the issue that I talked about earlier with 5900 being occupied or in use, you can change it to something else.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=238)** In my case, I changed it to 5959.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=240)** And then we also have a health check here that uses pretty much the same health check as our website, except this time it's using curl to test whether port 4444 is up.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=252)** That's where the Selenium Hub or a component within Selenium is running.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=258)** Now that we've taken a look at our Selenium service within Docker Compose as well as our modified tests, let's go ahead and quit this and move on.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=268)** However, this is a good time to commit and push our changes, so let's go ahead and do that before moving on.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=273)** Again, I'm going to use "git status" to see what's changed.
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=278)** I'm using "git add" to add my changes and then I'm using "git commit" to add my changes.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=284)** I'm going to say "Add unit test and updated Compose services".
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=291)** I'm not going to add a description here, you can if you like.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=294)** And then I'm going to write and quit those changes.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=296)** And then I'm going to push those changes up to GitLab.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=298)** There we go.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/setting-up-selenium-24075622?u=76281980&t=300)** We're ready to move on!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (15), [[Jetpack Compose|Compose]] (6), [[Git]] (3), next (1), web (1)
> **CLI Commands:** docker (6), git (3), find (1), cp (1), curl (1)
> **Tools:** vim (3), visual studio (1), gitlab (1)
> **Code Identifiers:** page_spec (2), exercise_files (1), default_driver (1)
> **File Paths:** spec.rb (1), page_spec.rb (1), docker-compose.yaml (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Exercise Files:** exercise files (3)
> **Env Vars:** url (2)

#### Running your test with Selenium
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=0)** Right on!
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=1)** Let's use our "docker compose run" command from earlier to see what's changed.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=5)** Remember, if you get this error, that means that you need to rebuild your container image before running our unit test.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=12)** So to fix that, all we need to do is just add "--build" before or after the "--rm".
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=20)** And boom! Our tests are passing again.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=25)** Here's a sweet trick. The Selenium service we created exposes something called a VNC server.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=31)** You can think of VNC as a way of being able to drive or use a computer remotely, very similar to Remote Desktop, if you've used that before.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=42)** If you have VNC installed on your system, you can see Selenium drive the browser while the test is running.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=48)** Let me show you how.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=49)** Now, since I'm on a Mac, I can use the screen sharing application which supports VNC.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=55)** If you're on Windows, there are two VNC clients that I recommend in particular. Let's take a look at them.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=61)** The first client that I'd recommend is called RealVNC, and you can get to it by typing "[realvnc.com](https://realvnc.com)" in the address bar.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=69)** While this looks like a much more "enterprisey" VNC client, it's actually free to use.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=75)** So what you can do is you can click on Products and then click on Download Now.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=79)** Then you can look for RealVNC Connect for Windows and then just click on Download for Windows.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=85)** Another option is TightVNC.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=87)** To use that you can go to [tightvnc.com](https://tightvnc.com).
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=92)** This is an open-source VNC client, very easy to use and has great features.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=99)** So to download it all you have to do is click on Get your Free Copy of TightVNC or click on Download Now over here, and then click on the installer for Windows 64 or 32 bit, depending on your processor architecture, to download the installer and then follow the instructions that appear. Right, let's go back into the Mac.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=120)** I'm going to type Command + Space, "screen sharing".
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=124)** You should see this little screen sharing window over here.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=127)** All you have to do is type in "vnc://localhost5900" or the port that you changed in the Docker Compose file to work around 5900.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=139)** So in my case it's going to be 5959.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=142)** After that I'm going to click Connect or hit Enter.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=146)** And then you'll be asked for a password.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=148)** The password is very secure, I always forget, it's just "secret".
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=152)** This brings us to the desktop for our Selenium Docker Compose service.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=156)** I want to reiterate this: We are looking at a desktop that is running inside of a container.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=162)** How cool is that?
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=163)** Anyway, going back to our terminal, what we're going to do here is simply rerun the test.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=169)** So I'm just going to hit the Up key and run that test again.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=172)** And then after I hit Enter I'm going to go back to my VNC client.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=176)** Let's go ahead and do that.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=178)** That was crazy fast right?
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=181)** I hope you caught that.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=182)** So what happened in that super quick blip of a browser that you saw?
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=186)** Our Selenium service received a command from Capybara to start Chrome with the options in our Selenium WebDriver configuration.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=195)** Then use that URL property to render the Explore California page that served in another container called "website".
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=202)** And then it sent the results that it got back to Capybara for further processing.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=206)** Since it was so fast, let's just go ahead and do that again.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=209)** I love doing this.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=210)** Look at that.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=211)** Amazing.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=212)** So fast.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=213)** And just like we saw before, we get a green dot indicating that our test passed.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=218)** There we have it.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=219)** We used Rspec and Selenium to write a really simple test against Explore California entirely within Docker.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=225)** We're now ready to take this to the cloud.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=229)** In the next set of videos, we'll upload our website into AWS and then use Rspec again to test against that with integration tests to test our site on the actual internet.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-test-with-selenium-24079511?u=76281980&t=242)** Prepare yourself for more DevOps!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (6), [[Windows]] (4), [[Jetpack Compose|Compose]] (3), hit (3), application (1)
> **Env Vars:** vnc (8), url (1), aws (1)
> **UI Navigation:** click on (6), go to (1)
> **CLI Commands:** docker (4), rm (1), aws (1)
> **Definitions:** means that (1), is called (1), is an  (1)
> **URLs:** [realvnc.com](https://realvnc.com) (1), [tightvnc.com](https://tightvnc.com) (1)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** similar to (1), just like (1)


### 6. Infrastructure as Code with OpenTofu

[↑ Back to Table of Contents](#table-of-contents)

#### Deploy with confidence with infrastructure as code
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=0)** Thanks to you, Explore California now has a simple test suite that they can use to confidently change the website with ease.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=7)** Because our tests run in Docker, we can rest assured that the site and its tests will behave the same no matter where they are.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=14)** However, we have one big task left. We need to put our site somewhere.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=19)** Explore California has chosen to use Amazon Web Services, or AWS, as its platform of choice.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=25)** There are lots of ways that we can do this.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=27)** Let's take a look at them now. We could use the web GUIs for each AWS service we choose to use.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=33)** They are well designed and make doing complex things easy, like uploading websites, creating virtual machines, and even running built applications without managing any infrastructure at all.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=44)** However, this will introduce serious scaling challenges for Explore California.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=49)** Clicking through GUIs takes time.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=52)** It also requires people to physically click things, sometimes lots of things.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=57)** Adding files to AWS Object Storage Service, S3, takes over 20 clicks.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=63)** This is fine if you're testing something or doing a task that you won't do very often, but that's not the case for us.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=70)** Remember, the CTO wants changes to get shipped in two days or faster.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=75)** Explore California is only going to get bigger too, so doing things this way will slow us down a lot.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=82)** This is where Infrastructure as Code steps in. Infrastructure as Code, or IaC for short, is a technique that uses command-line tools and/or application programming interfaces or APIs to automate the creation and configuration of infrastructure like virtual machines, networking equipment, storage devices, and security systems.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=104)** CLIs and APIs are often much faster than using GUIs.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=108)** They change less frequently and can be incorporated into other tooling, like shell scripts to automate many tasks.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=115)** Let's take a look at what our scenario above looks like with a dash of IaC applied onto it.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=121)** All of the services available on AWS can be configured through a command-line client called AWS CLI.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=128)** With this tool, the 20 clicks we needed to interact with S3 became just two commands.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=133)** That's quite the improvement, but we can do better than that.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=137)** As you can see here on this slide, AWS CLI is just a front end to the vast network of APIs available within AWS.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=145)** If we wanted to, we could use any programming language, like the TypeScript shown here, to write code that does the same thing into API calls.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=153)** This would allow Explore California to have the code they used to create infrastructure be the same as the code they use to maintain the websites.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=161)** That's powerful stuff.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=163)** In this chapter, we're going to use a tool called OpenTofu.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=167)** OpenTofu is an open-source version of Terraform, a tool from HashiCorp.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=172)** We're going to use OpenTofu to write and deploy Explore California's website into AWS S3.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=178)** OpenTofu uses the API technique we saw earlier to deploy infrastructure across multiple platforms, with a single language and a single code base.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=188)** OpenTofu also compares changes to your infrastructure code against the state of your actual infrastructure.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=195)** It does this every time you need to deploy, so that you get exactly the infrastructure you need when you need it.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=201)** We're going to start by getting OpenTofu running within Docker, since we're all about containers in this shop.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=207)** After that, we're going to write an end-to-end test that will verify that our site is live on the internet.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=212)** From there, we'll write the OpenTofu configuration code needed to make that test pass, and then do an OpenTofu run to apply it.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=220)** Finally, we'll run our end-to-end test and see how we did.
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/deploy-with-confidence-with-infrastructure-as-code-24075620?u=76281980&t=223)** Let's do it!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (8), [[Virtual Machines]] (2), [[Programming]] (2), [[CLI]] (2), api (2)
> **CLI Commands:** aws (8), docker (2), make (2), terraform (1)
> **Env Vars:** aws (8), cli (2), api (2), cto (1)
> **Definitions:** is a  (1), is an  (1)

#### Finding the version of OpenTofu to use
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=0)** Before we dive into OpenTofu, let's find the latest version of OpenTofu that's available for us to use.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=6)** To do that, I'm going to open a web browser like you see here, and then visit [github.com/opentofu/opentofu](https://github.com/opentofu/opentofu).
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=15)** That's going to bring us to OpenTofu's source code on GitHub.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=20)** From here, what I'm going to do is I'm going to click on Main, and then I'm going to click on Tags.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=26)** And that will give us all of the versions that are available for us to use.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=30)** We're going to use the highest-number version on this list that does not have an alpha, a beta or an rc reference in the name.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=39)** In our case, that's going to be version 1.71.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/finding-the-version-of-opentofu-to-use-24082450?u=76281980&t=42)** Now that we have our version number in tow, let's head on over to docker-compose.yaml so that we can use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), web (1), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** find (1), docker (1)
> **Tools:** github (2)
> **UI Navigation:** click on (2)
> **File Paths:** docker-compose.yaml (1)
> **URLs:** [github.com](https://github.com) (1)
> **Versions:** version 1 (1)
> **Exercise Files:** source code (1)

#### Adding OpenTofu to Docker Compose
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=0)** Now that we got the version of OpenTofu to use, let's go ahead and add it to our docker-compose.yaml.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=6)** To do that, I'm going to type "vim", then "docker-compose.yaml" to open it in my editor.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=11)** Next I'm going to look for the OpenTofu service.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=14)** It should be pretty early in the manifest file.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=16)** However, if you cannot find it, all you have to do is search for it, like I did here.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=23)** So let's move to the image line down here.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=26)** To save time, I went ahead and created the OpenTofu service for you However, you might be using an older version of OpenTofu in your copy of the exercise files.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=36)** If that's the case, simply remove the version that's there and replace it with the version that we found on GitHub.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=43)** Next, let's pay attention to the volumes that we're mounting down here.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=47)** The first volume that we're mounting is this "website" folder.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=51)** That's where our website is.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=52)** The second folder is the folder that we're going to use to store our configuration code that's going to get Explore California into the cloud.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=61)** That folder is going to live in our current working directory, or PWD, like you can see here in a folder called "infra".
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=70)** Now, you might see actual "PWD" over here to the left of that.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=74)** We can ignore that for now, but we'll explain why that's there later on.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=78)** So that's it.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=79)** That's all we need to get OpenTofu to work.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=81)** So let's go ahead and take it for a spin.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=83)** I'm going to save my changes here and quit my editor.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=87)** And then I'm going to run "docker compose run --rm opentofu version".
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=93)** This will send the version command to the OpenTofu application within our OpenTofu service.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=99)** If we're successful, we should get a version number back like 1.7.1 in our case.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=105)** So here we're pulling the image.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=106)** This should be pretty quick, but it will vary depending on the speed of your network connection.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=112)** So here we go.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=113)** Cool.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=113)** We got our version number back right here.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=115)** And it matches the version that we copied from GitHub.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=118)** Great.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=119)** Now, you might be thinking, "Don't we need to create that 'infra' folder that we mounted before?"
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=125)** As it happens, we actually don't.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=128)** If you type "ls" over here you can see that Docker created it for us right here.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=134)** This is a convenient side effect of using bind mounted volumes.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=138)** If the directory we're asking to mount doesn't exist, Docker will create it for us automatically.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=144)** However, big note here.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=146)** Note that Docker will always create directories when this happens.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=151)** So what does that mean?
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=152)** Let's go back to the docker-compose.yaml to illustrate what I mean here.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=157)** Let's say we created a new volume mount underneath this called "some_file.txt", and we mounted it into the container at "/file".
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=169)** Well, some_file.txt doesn't actually exist in our working directory.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=175)** So what's going to happen when I run this?
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=177)** Well, let's find out.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=179)** I'm going to write and quit my change.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=181)** And then I'm going to rerun that OpenTofu version command from earlier.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=185)** As you can see, it still works, no problem.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=188)** However, if I do an "ls" over here, we can see that there's a file called "some_file.txt".
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=193)** This is very deceiving.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=196)** Let me show you why.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=198)** So it looks like a file, right?
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=199)** So I should be able to do "cat some_file.txt".
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=203)** But it's a directory.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=205)** What happened there?
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=207)** Well that's the side effect of using bind mounted volumes that don't exist.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=213)** If that file doesn't exist, Docker will always create it as a directory.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=219)** So you'll get errors like the one that we saw before if this happens.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=224)** So for now let's go ahead and remove that.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=225)** So you don't actually need that.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=227)** Save our changes.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=228)** And then let's go ahead and remove that pesky fake file from our working directory.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=234)** And now that we did all of that let's go ahead and move on.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=237)** However, before we continue, let's go ahead and make sure that we push any changes that we've made to our Git repository up to GitLab.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=245)** So as you can see we have a single file that was changed.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=248)** Let's go ahead and add it.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=249)** Let's commit that change.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=252)** I'm going to use the "-m" flag that's associated with commit so that I can create a single-line commit.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=257)** This is really handy if you have a change that's really small, you don't want to add a description, you just want to add a single line.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=265)** So in my case I'm going to say "Update OpenTofu version to 1.7.1", "docker-compose.yaml", and then before I post my changes, I'm going to use "git pull rebase" to make sure that I'm receiving whatever changes were made on GitLab into my clone, and then I'm going to push my changes.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/adding-opentofu-to-docker-compose-24082452?u=76281980&t=287)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (5), next (2), [[GitHub]] (2), [[Git]] (2), [[Search]] (1)
> **CLI Commands:** docker (9), find (2), ls (2), make (2), git (2)
> **File Paths:** docker-compose.yaml (4), some_file.txt (4)
> **Tools:** github (2), gitlab (2), vim (1)
> **Code Identifiers:** some_file (4)
> **Env Vars:** pwd (2)
> **Versions:** 1.7.1 (2)
> **Cross-References:** go back to (1)

#### AWS deployment explained
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=0)** In our last video, we went over how to get OpenTofu up and running in Docker through Docker Compose.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=5)** In this video, we're going to use that knowledge to create our first OpenTofu deployment in AWS.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=11)** Very exciting stuff!
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=12)** But before we begin, let's briefly talk about what Explore California will look like within AWS.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=18)** Amazon Web Services, or AWS, is a cloud provider that enables users to create all sorts of computing resources throughout the world.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=26)** AWS offers many services to meet many different needs from simple virtual machines with Elastic Cloud Compute, or EC2, to entire pipelines for processing massive amounts of data very, very quickly, like AWS Kinesis Firehose.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=41)** Like we learned when we started this chapter, one of the big advantages AWS provides is that nearly every interaction with it is done through API calls.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=50)** This is nice because this gives people many ways of interacting with AWS. From the web console at console.aws.[amazon.com](https://amazon.com), to several programming languages through the AWS SDKs.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=64)** A very popular AWS service that we've been referring to in the last few videos is the Simple Storage Service, or S3 for short.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=73)** S3 is a service where anyone can store nearly anything into buckets.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=77)** Yes, objects are stored in things called S3 buckets.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=82)** Access to those objects can be finely controlled.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=85)** You can have things available to the entire internet or have them restricted to just a few users.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=90)** Many websites and companies around the world store petabytes of data into AWS daily.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=96)** S3 comes with a really handy web-hosting feature, where it can basically host static websites based on files within the bucket.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=104)** Explore California is a static site.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=106)** This seems like a match made in heaven.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=108)** Thus, our OpenTofu deployment will basically look something like this.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=112)** First we're going to create an S3 bucket.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=116)** Then we're going to configure that S3 bucket as a website.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=119)** Then we're going to copy the Explore California website into that bucket.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=123)** And then we're going to use Rspec to test that our website is accessible from the wider internet.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=128)** Are you as excited as I am?
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=130)** You should be!
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/aws-deployment-explained-24082453?u=76281980&t=131)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (11), cloud (2), data (2), web (2), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** aws (11), docker (2)
> **Env Vars:** aws (10), ec2 (1), api (1)
> **Definitions:** is a  (3)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Prerequisites:** configure (1)

#### Writing your integration test
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=0)** Just like our website, we don't want to begin by blindly writing and deploying things.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=4)** We want to begin with a test that we can run that will automatically verify that everything is working.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=9)** That's from the knowledge that we learned from the video to do exactly that.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=13)** We're going to write a simple test that validates that the website loads when we hit the URL within AWS S3.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=19)** Since we're testing an instance of this website on real infrastructure, we can call this an "integration test."
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=27)** In some videos, you'll hear me call this an "end-to-end test."
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=31)** In some contexts, integration tests and end-to-end tests are different things, but in this context we can use them interchangeably.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=39)** So if you hear me say end-to-end test or integration test, they're the same things in this journey.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=45)** So let's start by creating a folder within "spec" called "integration".
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=49)** After that, we're going to create a new "spec" file inside of "integration" called "website_spec.rb".
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=56)** Now that we created the website_spec.rb file, let's go ahead and open it in our editor.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=64)** So just like we saw in our unit test, our test suite is going to be wrapped around a describe block.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=71)** So let's go ahead and write that now.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=73)** Let's call this test suite "real website", something simple.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=77)** After we recreate our test suite, let's go ahead and create a single test case in here with an "it" block, just like we did with our unit tests.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=85)** So let's call it "It should be Explore California."
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=91)** Again, this can be called anything you'd like.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=93)** I'm just calling it this in this example.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=96)** Now in a new tab or a split pane like I'm about to do, or in a new window, let's go ahead and open that unit test so that we can use it as a handy reference for what we're about to do next.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=107)** So just so that we orient ourselves, our unit test is over here on the left side, and our integration test is over here on the right side.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=115)** If you're using them like I am to switch between panes, all you have to do is hit the Ctrl key and hold it, then press W twice like this.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=123)** You'll see the cursor over here move into the pain that you're currently in.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=127)** So right now this gray cursor is over here on the right side.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=130)** The color might be different depending on the terminal that you're using.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=133)** Just look for a block like this or a small underline.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=137)** And then if I want to move back to the left side I'm just going to hit Ctrl.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=141)** I'm going to hold it.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=142)** Then I'm going to press W, then W and there we go.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=145)** Our cursor moved over to the left side.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=148)** So that's how you switch between two panes in Vim.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=151)** So now what we want to do is copy a couple of things from our unit test over here on the left to our integration test on the right.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=158)** So I'm going to use capital V to highlight this line, then J twice to copy our "requires".
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=166)** And I'm going to press J again to copy our "include".
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=169)** I'm going to press Y to copy all of that.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=173)** Then I'm going to press Ctrl + W + W to go to the right side.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=178)** I'm going to press lowercase G twice to go to the top.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=181)** Then I'm going to press I to enter insert mode, Enter to add a new line, the Up key to go back up, and then I'm going to press Ctrl + O to temporarily go out of insert mode into edit mode or normal mode.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=195)** And then I'm going to press P to paste in what I just copied.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=200)** Then I'm going to go Up, Ctrl + O once again to get out of insert mode, press D + D, or lowercase D twice, to get rid of that empty line.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=210)** And then I'm going to press either Ctrl + [ or Escape to go back into normal mode.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=216)** And you can see that by the "INSERT" banner on the bottom left having gone away.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=221)** Great!
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=222)** So now we have all the libraries we need to run a Capybara test in Selenium.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=227)** So what I'm going to do next is I'm going to go copy this Capybara register driver block over here so that we can configure Capybara to talk to our Selenium instance.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=237)** So I'm going to go ahead and highlight this, copy it, Ctrl + W + W to go to the right side.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=243)** And then I'm just going to press the P key to paste it right underneath "include".
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=248)** But you can also see that it pasted it right above "describe", which is really nice.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=252)** So let's make sure that we have everything we need. Ah, right, we need this copy bar of default driver lines.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=258)** Let's go ahead and copy that. W + W to go to the right side. P underneath N to paste it in.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=265)** And there we go.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=267)** Done.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=268)** Now we definitely have everything we need.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=272)** So let's go back to our unit test.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=276)** And let's just go ahead and press Ctrl + W + C to get rid of it.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=280)** Now it doesn't delete the file.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=282)** The file is still there.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=283)** Please don't worry.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=284)** We still have everything that we worked on before.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=287)** So what do we want to do instead of this "it" block over here?
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=290)** That's where our test actually is.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=292)** We want to do two things.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=294)** We want to confirm that the website is reachable, and we also want to confirm that it's the Explore California site that we know and love.
>
> **[5:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=302)** We can do that in one test.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=304)** So let's go ahead and write an example of that.
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=306)** So first we can have a "visit" here.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=309)** And let's use the same "visit" that we used before.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=314)** And then right underneath that, just like we did for our unit test, we can have an "expect" statement here that confirms that some property on the page equals something that we want.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=323)** We could use 'a.class == "logo"' like we did in the last test.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=327)** But we should have something higher fidelity than that, right?
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=331)** Because we want to make sure that when we go to that page on the internet, we're actually talking to Explore California.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=338)** So we could use the page title.
>
> **[5:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=342)** What do I mean by this?
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=344)** Let's go into our browser and go back to Explore California briefly.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=348)** So I'm going to go to the address bar and type "localhost:8080".
>
> **[5:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=351)** There is our website.
>
> **[5:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=353)** And then I'm going to just right-click on the logo and click on Inspect Element.
>
> **[5:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=359)** So there's a lot of other stuff that we can use to verify that this is actually indeed Explore California.
>
> **[6:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=365)** One thing that I like to do is just make sure that the title of the page matches what I expect.
>
> **[6:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=371)** So we can see here that the title of our page is "Welcome to Explore California."
>
> **[6:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=376)** This is a pretty good sign that tells me that I am actually looking at Explore California for real.
>
> **[6:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=382)** So I'm going to go ahead and use the page title in my "expect" statement.
>
> **[6:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=385)** So let's go back.
>
> **[6:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=387)** Let's go ahead and change this by removing all of this stuff and then using "page.title".
>
> **[6:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=392)** And then after that we'll put a '.to eq "Welcome to Explore California"'.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=400)** A couple of notes about what we're looking at.
>
> **[6:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=402)** ".title" is a special property of the "page" object.
>
> **[6:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=406)** Remember "page" is an object that Capybara provides for us when we're running tests.
>
> **[6:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=411)** That represents the page that we got from Selenium.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=415)** The ".to" property over here is the operator within RSpec that allows us to make an assertion.
>
> **[7:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=422)** An assertion is basically the test.
>
> **[7:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=424)** It's a condition that we can specify that makes our test true, that we expect to have happen.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=431)** There are many different kinds of assertions we can make, but the one that we're using over here is "eq", which is short for "equals".
>
> **[7:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=439)** So what we're writing here is we're expecting the title of the page, page.title, to equal "Welcome to Explore California."
>
> **[7:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=447)** There are many different types of assertions that you can make with RSpec.
>
> **[7:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=451)** Our RSpec calls these assertion types "matchers".
>
> **[7:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=454)** So if you're interested in learning more about that, just check out the URL that's on the bottom of this video to go to the documentation from RSpec, where they list out all of the matchers that you can use.
>
> **[7:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=464)** Perfect.
>
> **[7:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=466)** Let's save this and turn our attention to the Docker Compose file.
>
> **[7:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=472)** So, just like Selenium, website and OpenTofu, I wrote the Compose service that we're going to be using to run our end-to-end test or integration test.
>
> **[8:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=482)** I handily called them "integration test."
>
> **[8:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=484)** So we can see that down here. All you have to do is search for integration tests.
>
> **[8:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=490)** Or if you're in Vim, just press the Forward Slash key and then type "integration tests".
>
> **[8:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=495)** So as you can see it looks exactly the same as our unit test up here.
>
> **[8:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=501)** The only difference, if I turn on line numbers, is lines 55 and 68.
>
> **[8:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=508)** As you can see there is a single difference between them, and that is the folder that I'm expecting my test to be in.
>
> **[8:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=514)** On line 68, for my integration test, I'm expecting to use the "integration" folder, so it's only going to load integration or end-to-end tests, like the one that we just wrote.
>
> **[8:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=524)** Whereas on line 55 when we wrote our unit tests, it's only going to load the unit tests that we wrote for Explore California, which are in the "unit" folder.
>
> **[8:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=534)** This way we're not running integration tests, which can take a lot longer to execute, alongside of our really fast, really numerous unit tests. And vice versa, of course.
>
> **[9:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=546)** So before we commit our changes and push them up to GitLab, let's take a look at that integration test one more time.
>
> **[9:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=553)** Specifically, let's look at the "visit" property down here.
>
> **[9:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=557)** Now, as you probably noticed, this is going to run our test against localhost.
>
> **[9:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=564)** However, we want to write an end-to-end test that tests against the version of Explore California that is on the internet.
>
> **[9:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=571)** Right?
>
> **[9:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=572)** So this isn't going to work, but we also don't know what that URL is going to be in advance, especially since it's going to be in some random bucket or some bucket with a random name with a random URL that AWS S3 is going to assign to it.
>
> **[9:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=585)** So how do we account for that unknown property?
>
> **[9:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=590)** Well, one way we can do this is with environment variables.
>
> **[9:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=594)** Environment variables are a lightweight way of providing configuration to running applications.
>
> **[10:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=600)** When you're in a shell like Bash, when you define or export environment variables into your shell, your operating system will automatically provide those environment variables to every application that is created within that shell session.
>
> **[10:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=616)** While applications still need to add some code to read those environment variables and do stuff with them, applications always get their parent's shell environment variables.
>
> **[10:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=626)** No ifs, ands or buts.
>
> **[10:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=628)** So how do we use that property here?
>
> **[10:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=630)** Well, like I said, we need to change our code to use environment variables. With Ruby, we can do that with the built-in object "ENV" in all caps.
>
> **[10:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=640)** ENV is what's called a "hash map" in Ruby that has all the environment variables that our Ruby script knows about.
>
> **[10:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=649)** So let's go ahead and assume that we're going to create one called "website_url".
>
> **[10:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=656)** Now environment variables can be blank.
>
> **[10:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=658)** They could just not be defined.
>
> **[10:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=659)** So how do we fail this test if that isn't defined yet?
>
> **[11:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=663)** Well, one way we can do that is above the describe block.
>
> **[11:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=666)** We can say something like "raise", which is the way to create errors in Ruby, '"Please set the website URL" if ENV ['WEBSITE_URL']' is not defined or if it's nil.
>
> **[11:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=680)** This will make our test fail if we forget to define this environment variable in our shell.
>
> **[11:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=686)** With all of that, let's go ahead and save our changes and push our work up to GitLab.
>
> **[11:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=691)** So "git status" to check what's changed.
>
> **[11:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=694)** "Git add" to add the changes into our staging area.
>
> **[11:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=697)** "Git commit".
>
> **[11:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=699)** Commit those changes.
>
> **[11:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=700)** Let's say "We're adding integration tests" and I'll add a description here saying "This also introduces a new environment variable... a dependency on a new environment variable called WEBSITE_URL".
>
> **[11:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=717)** Awesome.
>
> **[11:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=718)** I'm going to save that commit and now I'm going to "git pull rebase".
>
> **[12:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=723)** You almost saw me type "git push" there.
>
> **[12:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=725)** I want to "git pull rebase" to make sure that I get the changes from other developers.
>
> **[12:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=730)** Up -to-date, we have no other changes.
>
> **[12:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=732)** Now I'm ready to "git push". And there we go.
>
> **[12:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-your-integration-test-24079508?u=76281980&t=735)** So let's go ahead and write some infrastructure code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (7), [[Selenium]] (4), hit (3), aws (2), next (2)
> **CLI Commands:** make (8), git (7), ruby (4), aws (2), docker (1)
> **Env Vars:** url (5), env (3), aws (2), website_url (2), insert (1)
> **UI Navigation:** go to (7), right-click (1)
> **Tools:** vim (2), gitlab (2), terminal (1), bash (1)
> **Definitions:** is a  (3), is an  (1), short for (1)
> **Analogies:** just like (5)
> **Code Identifiers:** website_spec (2), website_url (1)

#### Writing OpenTofu code
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=0)** We're ready to create OpenTofu configuration that allows us to do this deployment.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=4)** Since our OpenTofu file will have a number of moving parts, I've written it for you in advance.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=9)** The configuration that we'll be using is called "website.tf", and you can find it within your exercise files bundle in the "06_05_before" folder.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=22)** So just like we've done for the other exercise files, let's go ahead and copy this into our "infra" directory.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=28)** So what we're going to do is "cp", then add the path to your exercise files, again in our case it's going to be "Downloads/exercise_files", then "06_05_before".
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=39)** And then after that we'll type in "website.tf".
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=44)** And then we're going to put it in the "infra" folder.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=48)** Great.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=49)** Now that we have it let's dive in.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=51)** So let's go into "infra", "website.tf" to open it in your editor.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=56)** The first thing we'll focus on is the differences between OpenTofu and Terraform.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=62)** As of this writing, there are none.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=64)** OpenTofu is a fork of Terraform.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=67)** So if you were using Terraform in the past, or if you're using Terraform for this course, everything that you're looking at is interchangeable.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=76)** So what you're looking at here, the Terraform code can also be run in Terraform in exactly the same way.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=82)** The next thing we'll focus on is the name of the file.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=85)** OpenTofu configuration files always end in ".tf".
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=89)** When OpenTofu applies your configuration to your target folder, it uses resources defined in every .tf file it can find in OpenTofu's working directory.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=101)** Now with that out of the way, let's focus on the code in front of us.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=105)** As you can see, there is a lot happening.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=107)** We won't go through everything, but there is enough here to familiarize ourselves with the basics of Tofu.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=114)** First, let's look at the structure of this code.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=116)** Let's talk about that a little bit.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=118)** OpenTofu configuration files are written in a domain-specific language, or a DSL, called the HashiCorp Configuration Language, or HCL. HCL claims to be simple enough for programmers and non-programmers alike to define the resources that they want to create.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=136)** Now, it's important to note that DSLs like HCL are not programming languages, while HCL does allow you to do some simple things like if/else conditional statements and for loops, it is very limited in what it can do compared to a full-blown programming language like Python, Ruby or Golang.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=157)** If doing that style of Infrastructure as Code interests you, there's a great project called Pulumi.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=164)** Pulumi by Pulumi Labs is a great alternative for software developers that want to define infrastructure with a real-deal programming language.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=175)** You can check it out at [pulumi.com](https://pulumi.com).
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=178)** Alright, moving on, we're going to search for the keyword "resource".
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=182)** And then let's scroll down a little bit so that we can see it more clearly.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=186)** We're going to focus on three key primitives that open top supports.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=191)** First, there are resources, which you can see examples of over here.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=196)** Resources are representations of actual infrastructure that you can create.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=201)** So for example, if I scroll up a little bit, this AWS S3 bucket resource, for example, will create an actual bucket within AWS S3.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=210)** There are way too many types of resources that you can create with OpenTofu.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=216)** You can even create resources that do literally nothing.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=220)** Even though we're using OpenTofu to describe our infrastructure, you can actually learn about these resources in Terraform's documentation.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=228)** Click on the link on the bottom of your screen to learn more.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=231)** The next primitive that we're going to look at are variables, which you can find by scrolling up and searching for "variable".
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=238)** Variables allow you to define your resources from outside of your configuration code.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=244)** There are several ways of defining variables, but we're only going to look at two of them.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=249)** The first way is with this "variable" keyword.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=251)** The "variable" keyword has a name.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=253)** So like website domain name over here.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=256)** And inside of it you can define several things.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=259)** For example, you can define a description which provides a description of the variable.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=264)** And you can provide a default value in case you don't want your configuration code to fail if you forget to define your variable.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=272)** So for example, our default over here is "[explorecalifornia.org](https://explorecalifornia.org)".
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=276)** Another way of defining variables is with local variables, which you can see examples of by searching up and scrolling for "locals".
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=283)** Local variables, which are shown here, are similar to variables in that they allow you to change the configuration of your resources throughout your configuration code.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=292)** However, the difference between these and the variable that we saw earlier is that you cannot set these local variables from outside of your configuration.
>
> **[5:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=302)** So for example, this mine types local over here can only be set within this configuration code.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=308)** So I can't change this when I go to apply my infrastructure with the OpenTofu CLI.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=315)** The next primitive that we have are outputs.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=318)** So you can search for them by scrolling down and looking for "output".
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=323)** Outputs allow you to export various information about resources that you've created in your configuration code.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=329)** This is useful for a number of things. If you're writing scripts to interact with OpenTofu, you can take this output and do further things with it, or you can just have it available so that when people want to inquire about what's been deployed into AWS with OpenTofu, you can have these outputs describe exactly that.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=348)** This website URL output is a good example of this.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=352)** You might recall in the last video that we created a reference to an environment variable in our integration test called "WEBSITE_URL".
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=360)** Can you guess where that environment variable is going to come from?
>
> **[6:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=364)** That's right.
>
> **[6:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=365)** It's going to come from this output right here.
>
> **[6:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=368)** We'll see how we can get the value of this output when we apply this configuration in a later video.
>
> **[6:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=374)** Now while I only went deep into three OpenTofu primitives, there are many others that you can create.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=380)** For example, you can create data sources that obtain information from your provider to reuse later, and modules to, say, take all of this configuration and create hundreds of websites, for example, with it repeatedly.
>
> **[6:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=394)** We won't go deep into these concepts to save time, but fortunately, LinkedIn Learning has tons of content on Terraform that can help you learn more.
>
> **[6:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=404)** For example, again, since OpenTofu and Terraform are interchangeable, you can check out Josh Samuelson's "Learning Terraform" course if you're interested in everything that Terraform or OpenTofu have to offer.
>
> **[6:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=416)** If you absolutely must go deeper, David Swersky's "Advanced Terraform" has you covered.
>
> **[7:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=421)** Okay, before we go, why don't we talk about the thing that you were thinking of when you were looking at this?
>
> **[7:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=426)** What the heck is this code actually doing?
>
> **[7:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=429)** I'm glad you asked.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=431)** Like I said earlier, let's go resource by resource and see exactly what's going on.
>
> **[7:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=436)** I went to the top with G + G and now I'm going to search for "resource".
>
> **[7:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=441)** So the first thing that we're doing is we're creating an AWS S3 bucket called "website".
>
> **[7:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=447)** The type of thing that we're creating is always going to be the first thing that you provide after the word "resource".
>
> **[7:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=453)** And then the name of that resource is always going to be the second thing.
>
> **[7:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=456)** So we're creating an AWS S3 bucket type of resource called "website".
>
> **[7:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=461)** That's going to create as a bucket that's going to be the permutation of these two properties or these two resources, a random string called "bucket_name_prefix", and our "website_domain_name" variable.
>
> **[7:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=477)** So our random string "resource" is up here, that just creates a random string, eight characters long, all lowercase with no special characters.
>
> **[8:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=485)** Nothing exciting going on over there.
>
> **[8:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=488)** There are several other properties that we need to define in order to configure our S3 bucket, to make it available for public use.
>
> **[8:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=496)** That's what this AWS S3 Bucket Ownership Controls and AWS S3 Public Access Block objects are doing.
>
> **[8:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=505)** What makes this a website though, is this AWS S3 Bucket Website Configuration resource.
>
> **[8:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=512)** That was a mouthful.
>
> **[8:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=513)** There are two things that we can configure here.
>
> **[8:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=516)** We can configure the index document, which is the thing that you see when you go to that bucket's website, and the error document, which is what you see when a page that we try to load does not exist.
>
> **[8:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=527)** Finally, what actually copies our stuff into the website is this S3 object "website resource".
>
> **[8:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=535)** Now this is actually pretty cool.
>
> **[8:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=537)** Remember how I said earlier that HCL is not a programming language, but has some things that you can do that you would see in a programming language?
>
> **[9:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=545)** This is a great example of that.
>
> **[9:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=547)** So this "for_each" line over here is basically taking every file that's underneath "website" and adding it to our bucket with these properties down here.
>
> **[9:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=557)** This is pretty cool because by doing this, we don't have to write a script that uses the AWS CLI to copy all of those files into our bucket.
>
> **[9:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-opentofu-code-24077627?u=76281980&t=567)** So now that we've seen the configuration code for our infrastructure, as well as explain what's going on in the next video, we're going to take this configuration and turn it into real things that we can touch and test. Onward!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (12), aws (9), [[Programming]] (5), next (4), [[Search]] (3)
> **CLI Commands:** terraform (12), aws (9), find (3), cp (1), python (1)
> **Env Vars:** aws (9), hcl (5), cli (2), dsl (1), url (1)
> **Analogies:** for example (8), just like (1), similar to (1)
> **Definitions:** is a  (5), is called (1)
> **UI Navigation:** go to (2), scroll down (1), scroll up (1), click on (1)
> **Code Identifiers:** exercise_files (1), bucket_name_prefix (1), website_domain_name (1), for_each (1)
> **Exercise Files:** exercise files (3)

#### Reviewing the OpenTofu plan
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=0)** Infrastructure provision with OpenTofu is done in two steps. The plan step and the apply step.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=6)** The plan step shows you what OpenTofu is going to create, change or delete.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=12)** This way you can spot-check your work and make sure that OpenTofu will create what you're expecting to have created. The apply step, well, applies those changes.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=22)** Let's take the HCL that we saw earlier and turn it into a plan.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=26)** First, we'll need to initialize OpenTofu with "open tofu init".
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=30)** The way we do that is by running "docker compose run --rm open tofu init".
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=37)** This will fetch code for the provider that we need and perform other configurations.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=43)** What OpenTofu is doing here is fetching the AWS provider that makes all of those resources work, as well as the random provider, which was used for the random string resource that we saw before.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=54)** You'll know that OpenTofu has finished initializing when you see this green message over here saying that OpenTofu has been successfully initialized.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=64)** So now that OpenTofu is initialized, we can generate the deployment plan with "open tofu plan".
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=72)** So let's clear our screen and go ahead and run that.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=75)** So this error is basically telling us that we don't have any ways to authenticate with AWS.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=84)** So we can fix that by looking at our Docker Compose file.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=88)** So let's take a look.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=89)** We can see in this environment property that there are four environment variables that OpenTofu will be using to connect it with AWS.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=101)** That will be the access AWS Access Key ID, the AWS Secret Access Key, the AWS Session Token and the AWS Region.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=112)** We configured these environment variables earlier when we configured AWS.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=116)** So if you haven't seen the "Configuring AWS" video from earlier, go ahead and check out that video to configure these environment variables and then come right back.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=126)** Before we continue, let's get out of our Docker Compose file and make sure that we've exported our environment variables for AWS.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=133)** We can check that by running "export grep -i aws".
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=140)** You can also run "ENV grep -i aws" to get the same set of information.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=146)** So as you can see in both snapshots, we have AWS Access ID to find, AWS Region, AWS Secret Access Key, and AWS Session Token.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=156)** These four variables need to be defined before moving on.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=160)** Now that we define those environment variables, let's give our OpenTofu plan command another shot.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=168)** Super!
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=169)** We have a plan.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=171)** Let's go through it real quick.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=173)** OpenTofu will create everything with a plus sign preceding it.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=176)** Because this is the first time that we're generating a plan, everything has a plus sign before it and everything will be created as a result.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=183)** Anything with a minus sign before it will be destroyed or removed by OpenTofu.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=188)** Anything with a plus/minus sign like you see below is considered a tainted resource, and OpenTofu will destroy and recreate that object to "untaint it".
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=198)** Now that our plan looks good, it's time to apply it.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/reviewing-the-opentofu-plan-24077624?u=76281980&t=201)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (16), [[Jetpack Compose|Compose]] (3), [[Fetch]] (1), next (1)
> **CLI Commands:** aws (16), docker (3), make (2), grep (2), rm (1)
> **Env Vars:** aws (14), hcl (1), env (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)

#### Applying the OpenTofu plan
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=0)** In the last video, we learned how to use the OpenTofu plan command to see a preview of the resources that OpenTofu will create from our OpenTofu configuration.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=10)** In our case, we saw how OpenTofu will create an AWS S3 bucket for Explore California and upload all of the website's assets into it.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=19)** Let's learn how to make our plan a reality.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=22)** This step is really easy.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=24)** All we need to do here is clear our screen and run "docker compose run --rm opentofu apply".
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=33)** That's it.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=35)** After doing this, you'll see the plan that we created before once again.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=39)** This time, however, you'll be asked whether you want to confirm your changes.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=44)** Since we already know that everything looks good here, I'm going to go ahead and type in "yes" to confirm them.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=49)** Once I hit Enter, we are off to the races.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=53)** We'll see a lot of stuff happening here and it won't take very long.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=57)** That was blazing fast.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=59)** Just for curiosity, let's run "opentofu plan" again to see what differences we get this time.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=67)** We can see here that we're getting a lot more output than we did before.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=71)** We can also see that towards the bottom, that surely enough nothing has changed.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=75)** How does OpenTofu know this?
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=77)** This brings us to one of OpenTofu's best features.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=81)** OpenTofu doesn't just create infrastructure for you.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=84)** It also tracks changes to that infrastructure.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=87)** It uses something called a state file to do this.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=90)** Let me show you what I mean.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=92)** Our OpenTofu configuration lives in this "Infra" folder, right?
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=96)** Well, if we use "ls" to list the contents of that folder, we can see that there's a little bit more stuff in here.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=101)** Specifically, we can see a Terraform .tf state file listed.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=106)** This is OpenTofu's database of our infrastructure.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=110)** Everything that we created when we ran "opentofu apply" gets persisted into here.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=115)** It's just a plain text file.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=116)** So we could even run "cat" against it to see what all's in it.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=122)** I hope that while I'm scrolling upwards, you see the problem with this.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=127)** This is OpenTofu's plain text database of all of your infrastructure.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=134)** There's probably stuff in your infrastructure that you rather not have laying around like this.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=139)** We're also working within a Git repository, so someone could easily commit and push this file into GitLab, which we can confirm by running "git status" and then running "git add -infra" and then running "git status" once again.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=155)** If we were to push this on to GitLab, even though our GitLab instance is private, all of the Git commands that we were using before would work on a public developer platform as well.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=165)** So if we were to push this up to something like the internet version of GitLab, we could leak all of our infrastructure to the entire world.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=174)** There are bots on the internet that are constantly scanning Git repos like this to find AWS credentials, IP addresses, and other valuable information to gain access into all sorts of stuff.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=186)** This attack happens all of the time.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=189)** Another problem that might happen is contention.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=192)** So what if we are applying this plan and some other colleague decides to change our Terraform infrastructure?
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=200)** If they apply those changes, then we're going to have a conflict.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=204)** One of us isn't going to be able to apply infrastructure anymore.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=207)** Fortunately, OpenTofu has a feature to solve this exact problem: remote state.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=213)** Remote state configures OpenTofu to store the state file elsewhere.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=218)** OpenTofu does this through backends.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=221)** You can think of backends as secure places to store your state files.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=225)** Some remote state backends also supports something called "locking", which prevents the collision problem that I was talking about before.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=232)** It uses a technique also called "locking" to prevent the "multiple rider problem" that I mentioned before.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=239)** Now, we won't cover remote states in this course, but check out the Terraform courses on LinkedIn Learning to learn more about that.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=245)** Alright, back to hacking.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=247)** So once again we don't want to commit any of these super secret things.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=253)** So what we're going to do is we're going to use this command up here called "git restore --staged" to stage these changes.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=262)** So let's go ahead and run that now, "git restore --staged infra", to remove that directory from our staging area.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=271)** Confirm that it's removed with "git status".
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=274)** And then we're going to create a new file called "gitignore" which gets users to ignore these changes.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=281)** Any files or directories that get added to the ".gitignore" file will not be tracked by Git.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=286)** This is useful for sensitive data like our state file, since we can have them live inside of our codebase, but not live inside of GitLab or something like this.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=296)** So to add those files to the getignore, what we're going to do is we're going to type "echo" and then we're going to type "infra terraform.tfstate".
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=306)** And then we're going to use two right angle brackets like this.
>
> **[5:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=310)** And then we're going to type "gitignore" at the end of that.
>
> **[5:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=313)** You also saw that there's a bunch of that Terraform stuff in here that we don't want to apply.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=318)** So let's go ahead and run "echo infra /.terraform" and add that to the gitignore as well.
>
> **[5:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=326)** So after I do that when I run "git status" you should see that there's two entries now.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=332)** We should see that there's a ".gitignore" and an "infra" directory.
>
> **[5:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=336)** So if I add both using "git add .gitignore" and "infra" and I run "git status", you can see that there is now just one file remaining that we would probably not want to commit, this terraform.lock file. We can do the exact same thing that we did before.
>
> **[5:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=353)** We can use "git restore --staged infra/.terraform .lock.hcl" to remove it.
>
> **[6:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=361)** Then we can just add that to our gitignore by typing in "echo infra/.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=367)** terraform.
>
> **[6:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=368)** lock.hcl >> .gitignore".
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=373)** And then if I run "git status" one more time, we can see that our Git ignores both staged, as well as not staged.
>
> **[6:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=381)** The reason for this is because even though we've staged the gitignore file earlier, there were some changes made to it that haven't been staged yet.
>
> **[6:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=389)** Remember, Git tracks individual changes, not entire files.
>
> **[6:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=394)** So it's very possible that you can have files that are both staged to be committed as well as in a not-staged state.
>
> **[6:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=402)** So let's go ahead and stage those changes.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=405)** And then we can also see that the terraform.locl.hcl file is also gone.
>
> **[6:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=411)** If I run "git status" again we can confirm that once again.
>
> **[6:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=414)** Earlier we talked about using outputs to get information from our resources.
>
> **[6:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=419)** Specifically, we talked about a output called WEBSITE _URL.
>
> **[7:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=424)** How do we actually get that output?
>
> **[7:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=427)** Well that's very easy.
>
> **[7:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=428)** All we have to do is type "docker compose run --rm opentofu output".
>
> **[7:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=436)** This will show us all of the outputs that OpenTofu knows about from the resources that we've created.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=442)** So we only want this website URL output, and we don't need all this other junk like website URL equals and these double quotes.
>
> **[7:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=451)** So to remove that what I'm going to do is I'm going to rerun this command.
>
> **[7:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=455)** I'm going to add "-raw" to the end of it.
>
> **[7:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=457)** And then I'm going to add "website_url".
>
> **[7:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=462)** And there we go.
>
> **[7:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=463)** We just got back the URL of the bucket.
>
> **[7:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=467)** So what happens if I actually go to this URL in a browser?
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=470)** So let me actually copy this.
>
> **[7:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=473)** Open a web browser, paste it into the address bar and hit Enter.
>
> **[7:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=478)** If I do that we have Explore California on the internet!
>
> **[8:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=483)** So it's time for the final boss.
>
> **[8:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=485)** Does this work with the end-to-end test that we wrote before?
>
> **[8:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/applying-the-opentofu-plan-24077623?u=76281980&t=488)** Let's find out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (18), [[Terraform]] (10), aws (2), [[Jetpack Compose|Compose]] (2), hit (2)
> **CLI Commands:** git (18), terraform (10), aws (2), docker (2), rm (2)
> **Env Vars:** url (4), aws (2), website (1)
> **Tools:** gitlab (5)
> **Cross-References:** we talked about (2), in the last (1), in the next (1)
> **File Paths:** terraform.lock (1)
> **Code Identifiers:** website_url (1)
> **UI Navigation:** go to (1)

#### Running your integration test
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=0)** Now that Explore California is in AWS and we have a website URL to test against, and now that we confirmed that that URL works, let's run our integration test.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=10)** First, let's run that output command again just in case you don't have it.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=15)** Since this doesn't export any new lines and the result looks a little bit hard to read, let's go ahead and clear our screen.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=23)** Run that command again, but add an echo to the end of it by adding ":echo", like this.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=30)** This will make the result a lot cleaner.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=33)** Now let's run our integration test from earlier to see what happens.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=40)** As you can see, we get an error.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=44)** Specifically, we get the error that we configured earlier telling us to set the website URL.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=50)** So let's use the export command to do that.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=53)** So I'm going to go ahead and type this command again.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=57)** And then I'm going to copy this result.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=60)** Then in this new line here I'm going to add "export website _url" equals that.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=67)** But before I hit Enter I want to make sure that I have http:// in the beginning of that address.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=75)** Let's hit enter and let's rerun our tests.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=79)** Passing test!
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=82)** Our website is alive! And our tests are passing!
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=86)** So there it is!
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=87)** Explore California is up!
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=88)** You did it!
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=89)** Congratulations.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=91)** You did a great job.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=92)** So now that everything's working, let's burn it all down!
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=96)** In the next video, we'll learn how to delete resources managed by Terraform.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/running-your-integration-test-24082451?u=76281980&t=100)** Onward!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (2), aws (1), next (1), [[Terraform]] (1)
> **CLI Commands:** make (2), aws (1), terraform (1)
> **Env Vars:** url (3), aws (1)
> **Cross-References:** in the next (1)

#### Destroying the website from AWS S3
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=0)** We confirmed that our website is up and that our integration tests are passing against it.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=4)** With that knowledge, let's save some money and resources and remove everything from S3.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=9)** Just like every other OpenTofu command that we've used so far, deleting resources is straightforward.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=16)** All we have to do is run "docker compose run --rm opentofu destroy".
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=23)** This is literally the opposite of apply.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=27)** It queries everything in your state file, compares that against what's in your infrastructure, and deletes what hasn't already been deleted.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=33)** Just like plan, we're going to be asked if you want to confirm this action.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=37)** Let's type yes to continue and hit enter.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=40)** And just like plan, Terraform will go through all of the resources and delete everything at lightning speed.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=47)** If we run our output command from earlier, we can see that OpenTofu has no idea about it.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=53)** If we ran our integration tests afterwards, they would fail due to website URL not being configured.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=60)** So there we have it.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=61)** We took Explore California's website, learn how to run it within a Docker container, wrote unit and integration tests to prove that the website works like it should, and wrote OpenTofu configuration to upload the website into AWS.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=73)** You should be really proud of yourself.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=76)** You learned a lot of concepts to get this far, but we're not quite done yet.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=80)** We're going to learn one more concept that will take what we've learned to the next level.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=85)** In the next chapter, we're going to learn about the practice of continuous delivery.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=90)** We'll learn about continuous integration, CI, and continuous deployment, CD, and how they differ.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=97)** We'll then use GitLab CI to create a workflow that bundles everything we've learned from this course together into one cohesive pipeline.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=104)** Finally, we'll create a GitLab CI runner, in Docker of course, and use it to run our pipeline automatically.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/destroying-the-website-from-aws-s3-24081430?u=76281980&t=111)** See you there!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (3), next (2), [[Jetpack Compose|Compose]] (1), hit (1), [[Terraform]] (1)
> **CLI Commands:** docker (3), rm (1), terraform (1), aws (1), cd (1)
> **Analogies:** just like (3)
> **Env Vars:** url (1), aws (1)
> **Tools:** gitlab (2)
> **Cross-References:** in the next (1)


### 7. CI/CD as Code

[↑ Back to Table of Contents](#table-of-contents)

#### Shipping fast with CI/CD
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=0)** Congratulations on getting this far.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=2)** You're doing great.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=3)** Explore California is looking really good.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=6)** We have unit tests that automatically validate, explore California's functionality, OpenTofu configuration that deploys it into AWS S3, and integration tests that wrap everything together by checking that Explore's reachable from the wild, wild internet.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=21)** However, we've had to run lots of commands to get to this point.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=25)** It would be a real pain if our fellow engineers had to do this by hand every time they wanted to release new stuff.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=31)** It would also be a pain for our test engineers, QA, designers and other colleagues to validate that Explore California works as it should, for the major changes to the website, since day two, we need to check these things by hand.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=44)** This is where CI/CD helps us in a big way.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=48)** Let's learn more about it.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=49)** You'll often hear CI and CD discussed in the same sentence.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=54)** Many times you'll even hear it said as one word.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=57)** Just don't say "CIS-D".
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=59)** I don't think that's cool yet.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=60)** And that also means something completely different.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=63)** Jokes aside, it is important to know that CI and CD are actually two separate concepts that are very closely related to each other.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=71)** CI stands for continuous integration.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=74)** This concept focuses on the practice of constantly bringing changes to our source code together, safely and securely.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=81)** The words safely and securely are really important here.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=85)** When you're working with source code that many people are contributing changes to, it's really easy for someone to introduce changes that break everything, or worse, allow people to break into everything.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=96)** This is why us DevOps fanatics love talking about testing, testing, and more testing.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=101)** Testing goes a long way towards preventing broken builds or insecure software from getting into your projects.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=109)** CD stands for continuous deployment, not continuous delivery as you might sometimes hear out in the wild, though we will talk about that soon.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=117)** Continuous deployment is all about shipping software somewhere where people can use it as automatically as possible. For us, we're doing that by using Terraform to ship Explore into AWS S3.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=129)** For some teams, like those deploying software into industrial equipment or IoT devices, this can get really, really complicated.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=138)** Difficulty aside, the biggest benefit that CD brings to bear is the comfort in knowing that teams can update their software whenever they want.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=146)** So if CI/CD isn't one thing, then why are they always discussed together?
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=152)** Well, if you think about it, being able to build, test and validate the security of changes to your software and deploy those changes out to customers is a really awesome way to react to your users' needs really quickly.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=165)** However, you can't deploy changes quickly without knowing that your software is functional and secure, and being able to vet and secure your software continuously doesn't do you any good if you have to deploy those changes manually.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=177)** This is why CI and CD are often discussed together.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=180)** In fact, these concepts, when put together, can also be expressed as continuous delivery.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=186)** The name makes a lot of sense here.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=188)** Being able to continuously vet, secure, and deploy changes to your software means that you can also continuously deliver new software to users, ideally as quickly as you'd like.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=200)** As you can probably imagine, automation is a big, big part of what makes CI/CD work.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=206)** While you can do CI/CD with a few well-designed shell scripts and duct tape, there's lots of great tools that make it really easy to get started with this concept.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=216)** As we discussed earlier, GitLab has a great tool built in called GitLab CI.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=221)** In this chapter, we're going to use it to put everything we've done together into a chain of commands or a pipeline that will automatically test and deploy Explore California into S3.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/shipping-fast-with-ci-cd?u=76281980&t=232)** Let's get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (9), cd (9), aws (2), [[Continuous Delivery (CD)|Continuous delivery]] (2), teams (2)
> **CLI Commands:** cd (9), aws (2), terraform (1), make (1)
> **Definitions:** stands for (2), is a  (2), means that (1)
> **Env Vars:** aws (2), cis (1)
> **Tools:** gitlab (2)
> **Exercise Files:** source code (2)
> **Cross-References:** we discussed (1)
> **Analogies:** imagine (1)

#### Introducing GitLab CI
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=0)** As we mentioned earlier, we'll be using GitLab CI as our continuous delivery automation platform.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=5)** Let's learn more about it.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=7)** GitLab CI is a tool that makes it easy to build CI/CD pipelines that take software like Explore California into production.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=15)** If you've ever used GitHub Actions, CircleCI or Jenkins, you'll feel right at home with GitLab CI.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=20)** There are three components that make GitLab CI work: the GitLab CI YAML file, to describe this, your laptop over here; the GitLab server and GitLab CI runners.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=31)** You can see how they're related to each other with this image.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=34)** The GitLab CI .YAML file, represented by our laptop here, tells GitLab CI what jobs it needs to run in order to build, test, and deploy your application.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=45)** Like shown here, each job is expressed with the command or shell script, as we'll see soon.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=50)** Jobs are then organized into stages, and GitLab CI will execute each stage in the order that it's written within the file.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=56)** GitLab CI runners are machines that run jobs from GitLab CI YAML files and report the results back to GitLab.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=63)** What makes a runner a runner is having the GitLab CI runner agent installed.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=68)** As a result, runners can, well, run on just about anything: virtual machines, containers, Kubernetes pods, Raspberry Pis, smart toasters... Whatever you can think of, a GitLab CI runner can probably run in it.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=81)** Since we're running GitLab entirely in our own machine with containers, we'll be using another container to host our runner.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=88)** And then finally there's the GitLab server.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=90)** Well, it's a GitLab server.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=92)** I don't know what else to say about it.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=94)** So there you have it.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=95)** The fundamentals of GitLab CI.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=97)** Click on the link below to learn more about all of the things you can do with GitLab CI.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/introducing-gitlab-ci-24075621?u=76281980&t=101)** With that out of the way, let's create our first GitLab CI .YAML file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (17), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Automation]] (1), cd (1), [[GitHub]] (1)
> **Tools:** gitlab (21), github (1)
> **Env Vars:** yaml (4)
> **CLI Commands:** cd (1), make (1)
> **Cross-References:** we mentioned (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Writing our first Gitlab CI workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=0)** Now that we know more about GitLab CI and how it works, let's create a simple GitLab CI workflow for Explore California.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=8)** As always, before going any further, make sure that you're in our Explore California website working directory as shown here, or run "cd ~/explore- california-website" to pop right back into it.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=20)** The first thing that we're going to do is create a file called ".gitlab-ci.yml".
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=26)** We're going to use the touch tool to do that.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=29)** But you can create a new file in your editor if you'd like.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=31)** Now that it's created, let's go ahead and open it.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=34)** This is where we'll define a list of the activities that we want to do to get Explore California tested and deployed into S3.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=41)** This is going to be a list of stuff, we can call these activities anything we want.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=47)** I'm going to call them "test", "deploy" and "teardown".
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=52)** Next we're going to add a "variables" section like this.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=55)** Here we can define environment variables that every job in our CI/CD pipeline will use.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=60)** Now this gets a little interesting for us.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=63)** We've been using Docker compose throughout building, testing and deploying Explore California.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=68)** However, GitLab and the GitLab CI runner, which we'll cover shortly, also run in Docker.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=73)** How will our GitLab containers be able to recreate the containers within Compose that we've been using this whole time?
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=80)** Enter Docker in Docker.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=83)** Docker in Docker is, well, Docker in Docker.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=87)** This is a technique that will allow us to create Docker containers from within Docker containers.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=92)** There are two variants of this technique.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=95)** Docker through Docker allows a container to talk to Docker's container runtime on your real machine, and instruct it to create or delete containers.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=104)** If you've been using Windows or Mac throughout this course, because your instance of Docker runs in a tiny Linux VM, you've actually sort of been using this technique this whole tim. Through Docker in Docker, on the other hand, it creates a Docker container that can run its own container runtime.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=120)** This is an advanced technique that we won't cover here.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=123)** However, if you're interested in the ins and outs of that technique, check out my "[[Docker Essential Training]]" course where I go much deeper into this.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=131)** Back to our GitLab CI YAML.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=133)** All of that was a long way of saying that we are going to add a variable here that connects our containerized GitLab CI runner to our container runtime.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=141)** That variable is called "DOCKER_HOST" and it's going to look something like this.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=147)** Again, if you're interested in learning why we're using "var/ run/docker" as the value for Docker_Host, check out "Docker Essentials Training."
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=155)** We talk all about it there.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=157)** Now, you might be tempted to add your AWS credentials to this variable section.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=162)** I wouldn't do that.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=163)** This file gets added to your repo in plain text.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=165)** Doing this would basically give the world access to your AWS account.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=169)** And that, my friends, would be very, very bad.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=172)** Fortunately, we can add secret variables through the GitLab UI, and we'll learn how to do that in the next video.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=178)** Moving on.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=179)** Let's define our first job under this.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=182)** We'll call this "unit-test".
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=185)** Underneath this, we'll type in, with two spaces, "stage: test".
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=190)** This assigns this unit test job to this test stage that's up here.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=195)** Next we're going to add a script keyword that tells GitLab CI what the stage is going to do.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=201)** Since we're running unit tests we're going to add the command that we've been using thus far to do this, which is just "docker compose run --rm unit-tests".
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=212)** That's it.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=213)** After that we're going to add an "after_script" property.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=217)** This tells GitLab CI that we want to run a script after this job finishes, regardless of whether it succeeds or failed.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=224)** We're going to have this set to "docker compose stop selenium website".
>
> **[3:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=230)** This ensures that we have a clean instance of Selenium after every CI/CD run.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=235)** This command won't always work since Selenium and website might not be running.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=240)** But the nice thing about after_script is that this script failing won't cause our job to fail if our unit tests were successful.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=248)** Cool.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=249)** One down, two to go.
>
> **[4:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=250)** So next, we're going to create a stage called "deploy".
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=255)** And we're going to have it be part of the deploy stage.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=260)** And then we are going to run our OpenTofu command that applies our infrastructure.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=264)** So that's going to be "docker compose run --rm opentofu apply".
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=270)** And then we're going to add a flag called "auto-approve".
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=274)** This will configure OpenTofu to basically automatically say yes to the plan that gets generated.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=280)** And I feel comfortable doing this because we saw what the plan looks like from scratch, and we're destroying everything after our test run.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=288)** So it's always going to be a blank slate.
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=290)** After that, I'm going to add an after_script, and we're going to make sure that Selenium and the website services are stopped.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=301)** Excellent.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=303)** After our after_script, we're going to add a "before_script" because as you saw earlier, OpenTofu needs to initialize before we can do anything with it.
>
> **[5:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=313)** So in this before_script we're going to go ahead and run "docker compose run --rm opentofu init".
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=320)** Beautiful.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=322)** Let's go ahead and copy our deploy step here and paste it underneath.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=327)** And then let's go ahead and rename "deploy" to "destroy".
>
> **[5:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=330)** Let's set the stage for "destroy" and "teardown".
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=334)** And then let's replace "apply" with "destroy".
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=337)** And then after this we'll add one more stage for our integration test.
>
> **[5:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=342)** Let's go ahead and call it integration tests.
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=346)** And we want to make sure that our integration tests run after our infrastructure is deployed.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=352)** Because if they were to run at the same time, then there's a high chance that our integration tests will fail, waiting for our infrastructure to get built out.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=363)** So to avoid this, let's go ahead and add a "dependencies" key here.
>
> **[6:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=369)** And then let's add the deploy stage here as a dependency.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=373)** This way this will always run after the deploy stage.
>
> **[6:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=377)** Let's go ahead and put the stage in the test stage.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=380)** And then let's go ahead and add a slightly more complicated script here.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=386)** Because remember we need to export this website URL environment variable in order for our tests to work.
>
> **[6:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=393)** So what we're going to do is basically the same thing we did earlier.
>
> **[6:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=396)** We're going to have "export website_url", equals, and double quotes, "http://"... And then as you saw, we can get the value of the URL for our S3 bucket in one line by running "docker compose run --rm opentofu output -raw website_url", and then we close all of that to make it whole.
>
> **[7:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=423)** Then underneath that we're going to run our integration test by doing "docker compose run --rm integration tests".
>
> **[7:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=432)** And just like our unit tests, we are going to have an after_script here that will ensure that our Selenium and website services are stopped.
>
> **[7:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=444)** So let's go ahead and add those.
>
> **[7:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=446)** And then after our after_script, we're going to add a before_script that ensures that Selenium and website are started because our unit tests might tear down those services, which would cause our integration tests to fail.
>
> **[7:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=460)** So let's go ahead and add that by running "docker compose up -d selenium" and "website".
>
> **[7:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=466)** Beautiful.
>
> **[7:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=467)** Alright, let's go ahead and save that.
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=470)** Alright folks, we are done.
>
> **[7:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=472)** So let's go ahead and quit our editor and then commit our changes.
>
> **[7:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=476)** However, hold off on pushing it because there's some configurations we need to make to our GitLab runner before we can make this work.
>
> **[8:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=483)** So I'm going to go ahead and add a simple commit here.
>
> **[8:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=487)** Let's say "Added a GitLab CI pipeline", ".gitlab-ci.yml", and we're going to hold it here.
>
> **[8:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=497)** So in the next video we'll wire up our pipeline with our super secret AWS credentials.
>
> **[8:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/writing-our-first-gitlab-ci-workflow-24080521?u=76281980&t=503)** So stay tuned!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (12), [[Jetpack Compose|Compose]] (9), [[Selenium]] (7), next (5), cd (3)
> **CLI Commands:** docker (27), make (6), rm (5), cd (3), aws (3)
> **Tools:** gitlab (14)
> **Code Identifiers:** after_script (6), before_script (3), website_url (2)
> **Env Vars:** aws (3), url (2), yaml (1), docker_host (1)
> **Cross-References:** in the next (2), as you saw (2)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **File Paths:** gitlab-ci.yml (2)

#### Configuring sensitive variables
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=0)** As we discussed in the last video, there are some variables that are too sensitive to add to our gitlab-ci.yml file that we can safely define through the UI.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=9)** Let's learn how to do that now.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=12)** To get started.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=13)** Open your web browser and visit our GitLab server at gitlab.[example.com](https://example.com).
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=18)** Click on Explore California website.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=21)** Then hover over to Settings and then click on CI/CD in the submenu.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=27)** Click on Expand next to variables, and then scroll down.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=33)** This is where we're going to define our AWS credentials.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=37)** Let's head back into the terminal to grab them.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=39)** Let's go ahead and run that "assume" role command from earlier to get a fresh set of credentials that we can use.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=47)** Nice.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=49)** So just like before this will give us our access key, secret key and session token in JSON form.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=54)** Let's define our access key.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=56)** First copy the access key shown here.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=59)** Then head back into the browser.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=61)** Click on Add Variable, next to CI/CD variables.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=65)** Scroll down to Key and then type in AWS.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=69)** And as you can see, GitLab was really nice to already give you a couple of defaults.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=74)** So we're going to select AWS Access Key ID here and then paste in the value.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=79)** You can also check Mask Variable so that it doesn't show up in job logs when you're looking at previous runs.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=86)** Let's click on Add Variable here.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=88)** We're going to do the same thing for the secret key and the session token.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=92)** And GitLab was also very nice by keeping this window open, or this tab open.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=97)** So all we need to do is go back to our JSON, copy our secret access key.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=102)** And then go back here, Add Secret Access Key, paste the access key, then Add Variable.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=111)** Finally, let's get our session token. Over here.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=115)** Go back into GitLab CI and Add AWS Session Token.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=122)** Paste it in.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=123)** Add Variable.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=125)** Done.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=126)** Finally we're going to add another variable here called "ACTUAL_PWD".
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=132)** So you've probably seen a couple of references to this environment variable every time we've gone through the docker compose manifest.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=140)** I can finally answer why that is.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=143)** This variable works around the limitation with the Docker in Docker approach, by forcing Docker Compose to use the directory that our Explore California source code is actually located in, instead of the directory that GitLab CI will create for us when it runs our jobs.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=160)** So what we're going to do here is we're going to go back into our terminal, type "PWD" to get the full path to our Explore California website.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=170)** Here.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=170)** We're going to copy this.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=172)** Then we're going to go back into the variable UI and then paste it in.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=177)** Then we're going to click on Add Variable so that we can persist the change.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=182)** Brilliant!
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=183)** Our next job —no pun intended— is to create a containerized GitLab CI runner that will run our jobs.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/configuring-sensitive-variables-24080520?u=76281980&t=189)** We will learn how to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (6), next (4), aws (4), cd (2), [[JSON]] (2)
> **CLI Commands:** aws (4), docker (4), cd (2)
> **Tools:** gitlab (8), terminal (2)
> **Env Vars:** aws (4), json (2), actual_pwd (1), pwd (1)
> **UI Navigation:** click on (6), scroll down (2)
> **Cross-References:** we discussed (1), in the last (1), go back to (1), in the next (1)
> **File Paths:** gitlab-ci.yml (1)
> **URLs:** [example.com](https://example.com) (1)

#### Creating our first Gitlab CI runner
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=0)** It's time to create a containerized GitLab CI runner to run our CI/CD jobs.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=5)** We will do this in two steps.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=7)** First, we'll use the GitLab UI to register a new runner that's assigned to our project.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=12)** Afterwards, we'll hop into our terminal to connect our GitLab runner within Compose to GitLab.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=17)** Let's get to it!
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=18)** First, make sure that you're within the Explore California website project by going to gitlab.[example.com](https://example.com)/ explorecalifornia/website.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=31)** From here hover over Settings, then click on CI/CD.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=36)** From here, click the Expand button next to Runners, then click on New Project Runner.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=44)** Let's configure our runner now.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=46)** First, leave Linux as the operating system selected.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=50)** In the Tags section here, you can add tags that allow you to exclude this runner to specific kinds of jobs.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=56)** This is useful in lots of situations, like having Linux runners that build no jobs, and Windows runners that build .Net or Windows-specific jobs.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=65)** Since this is the only runner that we'll create for Explore California, we can leave this blank and instead we'll check Run Untagged Jobs so that this runner will respond to any job that GitLab sends it.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=77)** Next, give your runner a description over here by typing something like "Explore California's default runner."
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=85)** This can be anything you want though.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=87)** Finally, scroll down and click Create Runner.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=92)** Now that our runner is registered, GitLab will give us a command to run to finish the registration.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=96)** The command contains a token that's essentially a password to authenticate the runner to GitLab.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=102)** So let's go ahead and click on this copy button to copy that, and then head on into our terminal.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=107)** Let's clear our screen if you have anything on there.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=110)** Before we paste that command in, let's open the Docker Compose manifest again and let's search for "gitlab-runner" down here.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=117)** So this is an example of running GitLab runner within Docker Compose.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=121)** So as you can see it's using GitLab's gitlab-runner image, it's using Alpine as its Linux operating system, and as you can see, this container is using several different volumes and has several different environment variables to configure it.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=137)** Fortunately, you don't really need to know any of this to continue with our journey here.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=143)** However, if you're interested in learning more, feel free to click on the link below to go to GitLabs's documentation where they explain how this all works within Docker.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=153)** Now that we've seen that, let's go ahead and exit.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=156)** And then let's type in "docker compose run --rm" and let's go ahead and paste in that command from GitLab.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=165)** Once you've pasted that in, go ahead and hit Enter.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=169)** You'll first be asked to confirm that the GitLab instance you want to connect to is indeed gitlab.[example.com](https://example.com).
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=175)** Since it is, hit Enter here.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=178)** Next, it's asking you if you want to name the runner.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=181)** By default, it uses the system's host name here, which is just the container's ID.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=186)** If you're okay with that, hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=189)** If you're like me and you want some flair, enter a name like "Explorer California Runner".
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=194)** Then hit Enter.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=195)** Next, you'll be asked about the kind of executor you want to use.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=199)** GitLab supports lots of different kinds of runners, as you can see in this list here.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=204)** Since we're going to be cool and do Docker in Docker, type "docker", then hit Enter to continue.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=210)** Next, you'll be asked to provide the default image to use for your containerized runner.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=214)** This is useful if you want a runner that has lots of tools pre-installed to maximize compatibility with lots of different CI/CD pipelines.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=222)** Since all of our steps run as Compose services, we're going to use a Docker image that will come with the Docker and Docker Compose programs built in.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=229)** Fortunately, Docker has an official image that provides just that.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=233)** So let's go ahead and put that in now.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=235)** I'm going to type "docker: 26.0.0-cli-alpine3.19".
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=244)** Now, my memory is horrible.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=248)** I only remembered this because I tested everything beforehand.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=251)** If you're curious about how I found this image, you can go into the Docker Hub at hub.[doc.com](https://doc.com) and then you can search for "Docker CLI".
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=260)** That'll bring you to the Docker image down here, which you can click on.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=265)** And then you can click on Tags here and then filter tags by ones that say "CLI" in it.
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=270)** Now similarly to the OpenTofu situation that we experienced earlier, you might want to increase the version that we're using of the CLI image.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=280)** You can find all of the list of versions here.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=283)** So for example, we could use 26.12 or 26.1 or 26.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=289)** Or we can use the latest by just typing in "CLI".
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=292)** If you don't particularly care, let's go back into our terminal and continue.
>
> **[4:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=297)** So that's it.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=298)** That's all we need to enter.
>
> **[4:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=299)** So let's go ahead and hit Enter.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=301)** And we can see that the runner has been registered.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=304)** So let's confirm that our runner and GitLab are talking to each other.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=307)** Head back into your browser.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=309)** Let's get rid of this, and then click on the Runners page down here. You should see the new runner that you created, and you should see that it has a green light next to it.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/creating-our-first-gitlab-ci-runner-24077622?u=76281980&t=320)** If it does, you're finally ready to run our CI/CD pipeline, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), [[Jetpack Compose|Compose]] (6), hit (6), ci (5), [[CLI]] (5)
> **CLI Commands:** docker (15), cd (4), make (1), rm (1), find (1)
> **Tools:** gitlab (17), terminal (3)
> **UI Navigation:** click on (7), scroll down (1), open the (1), go to (1)
> **Env Vars:** cli (4)
> **URLs:** [example.com](https://example.com) (2), [doc.com](https://doc.com) (1)
> **Versions:** 26.0.0 (1), 26.12 (1), 26.1 (1)
> **Prerequisites:** configure (2)

#### Putting it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=0)** We've finally arrived, everyone, it's time to see our CI/CD pipeline fly.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=5)** Now remember that commit we made earlier that I said to hold off on pushing?
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=10)** It's time.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=11)** Push it.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=13)** Once you're done, head back into the browser and visit gitlab.[example.com](https://example.com)/ explorecalifornia/website, if you're not already there. You should see a teeny tiny progress circle just above the code button.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=28)** If you do, then congratulations, your CI/CD pipeline is running.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=32)** Click on it to see it progress.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=33)** Here's our sample pipeline.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=35)** This is a really great way of seeing how everything fits together.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=38)** All of the steps you're seeing here will run sequentially.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=42)** So the pipeline will start with the unit test that we ran earlier.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=45)** Then it will deploy our website into AWS.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=47)** Then our integration tests will run after that.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=50)** And finally everything will get torn down at the end.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=53)** Now you might see errors happen in the pipeline the first time you try to run this.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=58)** Let's take a look at why this might happen.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=60)** So if I click on the deploy step, we can see that OpenTofu is failing for the same reason that we saw earlier.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=66)** It's failing because the AWS credentials that it has have expired.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=71)** To fix it, we're going to do the same thing we did when we added them into the pipeline the first time.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=76)** We're going to scroll down on the left, click on Settings, then click on CI/CD.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=80)** Then we're going to click on the Expand button next to Variables.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=85)** And then we're going to just simply refresh all of the AWS variables that are on our screen.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=91)** So if you recall from earlier, the way that we did that is by running this really long sts command.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=98)** If this is new to you, or if you haven't seen this before, check out my "Configuring AWS" video from earlier where we go into how to get here in more detail.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=107)** So I'm going to click Enter to refresh my credentials.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=110)** And you should get a JSON blob on your screen like this.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=112)** So now what I'm going to do is copy each credential, like our access key ID, and simply edit the variables that I'm looking to replace, paste in the replacement and then save our changes.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=129)** You can hit the Escape key to close out the pane.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=144)** Now that our AWS credentials have been updated,
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=153)** we can simply go back to the pipeline by clicking the Back button twice and then clicking the Retry button up here.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=159)** This will retry any of the stages that have failed.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=163)** As you'll see in a moment, the stages that have passed, like our test stage over here will remain green so they won't run again.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=170)** Now that we've updated our AWS credentials, we can see that the deploy stage has now passed and our integration tests should pass right after that.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=178)** Now there are two ways of getting logs from each stage.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=181)** The first way is by clicking on the job that you're interested in, like our unit test job over here.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=186)** By doing this, it will show you the logs from that stage on the next page, like we can see on the screen.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=191)** Another way that we can see the logs from these jobs is from within Docker itself.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=195)** Let's head over to our terminal to see what I mean.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=198)** Let's run "docker ps" here.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=201)** You'll notice that there are runner containers here alongside our GitLab containers.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=206)** This is Docker in Docker in action.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=209)** The Docker Compose program within our GitLab runner uses the Docker host environment variable to tell our instance of Docker to create the same containers that we created by hand earlier.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=219)** As a result, the containers that our runner created will live alongside our other containers like we're seeing here.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=224)** What that means for us is that we can simply copy the container ID of the stage that we're interested in, like this, type in "docker logs", paste in that ID and hit Enter.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=238)** As you can see, doing this now failed.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=241)** The reason for this is because you're only able to see logs from jobs this way while containers are running.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=246)** Since the stage finished before we could see its logs, the container we tried to get logs from no longer exists.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=253)** This technique is helpful if you happen to have access to a GitLab runner like we do now, and are dealing with a stage that stuck somewhere.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=259)** You can even use "docker exec" against these containers for some just-in-time troubleshooting.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=265)** So to see this actually in action, let's go back to our pipeline over here and let's rerun the unit test stage here, since this doesn't actually deploy anything.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=274)** So as we can see it's now queued up to run.
>
> **[4:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=277)** If I refresh my page it's running.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=279)** So now I'm going to quickly go to "docker ps", look for any runner containers over here, clear my screen, type "docker logs", paste in that ID and now we can see logs from that container.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=294)** So our pipeline is now done and everything is green.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=298)** We can confirm that everything worked as we expected by doing a quick once over at the logs from each stage.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=304)** So I'm clicking the deploy logs, we can see our deploy logs over here.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=307)** Clicking the Back button brings me back.
>
> **[5:10](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=310)** Same with integration tests, we can see that we have our solve period over here, which indicates that our test has passed.
>
> **[5:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=317)** And then if I click on the "destroy" step, we can see that everything has been removed.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=322)** We did it, y'all!
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=323)** Explore California has successfully been DevOps'd!
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/putting-it-all-together-24075619?u=76281980&t=327)** Great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (6), ci (3), cd (3), next (2), hit (2)
> **CLI Commands:** docker (11), aws (6), cd (3)
> **UI Navigation:** click on (6), scroll down (1), go to (1)
> **Env Vars:** aws (6), json (1)
> **Tools:** gitlab (4), terminal (1)
> **Cross-References:** go back to (2)
> **URLs:** [example.com](https://example.com) (1)
> **Definitions:** is a  (1)

#### Challenge: Change the website title
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=5)** Alright.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=6)** Here's a challenge that takes everything that we've learned in this course and applies it all together.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=11)** This challenge has two parts.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=13)** In the first part, I would like you to change the title of the website in the index.htm file within the website directory.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=21)** Your solution must have unit and integration tests accompany it, and both of those tests must pass.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=28)** In the second part of this challenge, I'd like you to add a test stage called "check" to GitLab CI that uses the "ls" command that we've been using throughout this course to display the contents of your Git repository before running unit tests.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=43)** I would also like you to change the unit test stage to depend on this "check" stage.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=48)** And finally, you should be able to see the stage when you click on the little progress circle within the GitLab CI project.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=56)** Good luck!
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/challenge-change-the-website-title-24077625?u=76281980&t=57)** I hope you enjoy this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (2), [[Git]] (1)
> **CLI Commands:** ls (1), git (1)
> **Tools:** gitlab (2)
> **UI Navigation:** click on (1)

#### Solution: Change the website title
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=5)** All right, folks, I hope you had a lot of fun doing that challenge.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=8)** I sure had a great time putting it together.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=11)** Let's learn how to solve this challenge.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=13)** The first part of this challenge, how do you update the title of the Explore California website?
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=18)** It also had you write tests to cover this change, both unit and integration or end-to-end tests.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=25)** Now we could go directly into the code and update the title of the page.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=30)** However, it's always great to add a test before you make that change.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=34)** We call this test-driven development and here's an example of how you do that.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=39)** So what we're going to do is we're going to start with the unit test.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=42)** So let's open up "spec/ unit/page_spec.rb".
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=47)** Once you're in here, scroll down to the bottom and add a new test within the describe block called "It should show the Explore California title".
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=59)** If you named it something different, that is totally fine.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=62)** The next challenge is how to actually change our test to check the title.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=67)** Fortunately, we already wrote an example of this in our integration test, so if we open it up, we can see down here that we have the perfect thing that we need to do this.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=76)** So let's go ahead and copy this and paste it into our unit test.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=82)** We'll save our changes and then I'll close this pane.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=86)** So now we need to test the change that we want to make.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=90)** So you can name your new page title anything you want.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=94)** I'm just going to go with "Hello, and welcome to Explore California."
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=99)** Save that change.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=101)** And then we're going to go ahead and exit our editor and then run "docker compose run --rm unit-tests".
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=110)** Now if you ran this command like this and you got a passing test, that should not have happened! Because remember, you need to build the container image before running these tests, since our Dockerfile is copying our tests into the container's image.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=125)** So we need to make sure that we run "--build" first.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=129)** And there we go.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=131)** The first thing you should have seen if you went this route is a failure saying that we expected to see "Hello, and welcome to Explore California," but we got "Welcome to Explore California" instead.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=142)** So let's go ahead and change this by going into the website /index.htm file.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=150)** So here's our title.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=151)** This is what we want to change.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=152)** So let's go ahead and change it to "Hello, and welcome to Explore California!"
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=157)** Saving our changes, quitting our editor and then let's go ahead and run our test again.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=162)** Remember, you need to add "--build" in order for your tests to be copied into the container image.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=170)** Now we got a separate failure.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=172)** Why?
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=173)** Because I added an exclamation mark when it shouldn't have been one.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=176)** So let's go ahead and remove that.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=180)** I'm going to write "quit", rebuild and rerun my test.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=186)** And there we go.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=187)** Now you can see that you have two dots instead of one, that dot's not lonely anymore.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=191)** That means that both of our tests have passed, and now we can move on to updating our integration test.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=196)** So let's go ahead and do that now.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=199)** So we're literally going to do the same thing here.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=204)** And replace this title with "Hello, and welcome to Explore California."
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=209)** Saving our changes here.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=211)** Now we need to run our integration test.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=213)** So the way we're going to do that is by first deploying our changes into S3.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=218)** Because remember the integration test is an end-to-end test.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=221)** So if I were to run this just now... Oops.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=226)** If I were to run this without doing anything, I would get this very sad failure or something like it.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=235)** So let's go ahead and apply our changes.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=238)** So I'm going to go ahead and use "opentofu apply".
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=245)** And it looks like I need to refresh my account.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=248)** Maybe you ran into this while you were solving this challenge.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=251)** So to fix this, all we need to do is run our "sts assume-role" command again.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=257)** Like this.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=259)** Once we have this, we can go ahead and export each of these fields to update our credentials.
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=270)** So let's go ahead and do that now.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=280)** Great.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=286)** Once you do that go ahead and run "opentofu apply" again.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=296)** And upon doing this, it should show you a plan.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=300)** If the plan looks good, go ahead and say yes.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=303)** And this is going to go ahead and deploy our website.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=307)** There we go.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=308)** And once we deploy our website, if we want our integration tests again, we'll still get this error.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=314)** Why?
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=315)** Because remember we need to update the "website_url" environment variable.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=320)** The "website_url" environment variable is probably still the one that we used during the course, so we need to update this.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=327)** So how are we going to update this?
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=329)** We're going to use "opentofu output", like this.
>
> **[5:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=335)** We can use the same trick that we used when we created the GitLab CI pipeline by just doing an "export website_url=S".
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=346)** And then once we do that, if we run our integration test yet one more time, we get this really gnarly-looking error.
>
> **[5:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=356)** Now this can happen if you forget to add the scheme or the https stuff before the website URL.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=363)** So what we're going to do is run that export command again, add "http" to the beginning of it, like this, and then run our test again.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=373)** Once we do that, we finally get a test that looks kind of like what we expect.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=380)** So it looks like we changed the title because that's what we got.
>
> **[6:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=383)** But our expected value did not change.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=386)** So we need to update our integration test.
>
> **[6:27](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=387)** So let's go ahead and copy this.
>
> **[6:29](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=389)** Remember, just like our unit tests we need to copy our tests into the container image.
>
> **[6:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=395)** So we need to run "build" for this also.
>
> **[6:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=398)** So let's go ahead and add that here.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=400)** And once we do that... Oops, looks like I need to put that in the right place.
>
> **[6:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=403)** Let's fix that.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=405)** There we go.
>
> **[6:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=407)** Once we do that, we get a passing integration test.
>
> **[6:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=411)** This brings us to the second part of this challenge: updating our GitLab CI pipeline.
>
> **[6:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=417)** So, in the challenge... Let's actually open that pipeline first.
>
> **[7:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=422)** So, in the challenge we were asked to provide a stage called "check" that the unit test stage depends on that simply lists the contents of our Git repository.
>
> **[7:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=434)** So there are a couple of things that we were testing here.
>
> **[7:16](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=436)** The first thing is creating that new job.
>
> **[7:18](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=438)** So let's go ahead and create the "check" job and then add it to the test stage.
>
> **[7:24](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=444)** We were also testing dependencies.
>
> **[7:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=446)** So if you see down here, in our integration test, we have an example of that.
>
> **[7:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=450)** So all we needed to do is copy that, paste it underneath "stage" and then set that to "unit test", because we want this to run before our unit test stage runs.
>
> **[7:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=460)** We also want to list the contents of our Git repository.
>
> **[7:43](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=463)** So we can do that pretty easily by running "ls ."
>
> **[7:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=467)** in our script command.
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=470)** And then that's it.
>
> **[7:51](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=471)** We don't need to include a before_script or after_script because this isn't really doing very much.
>
> **[7:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=475)** So now we're going to write our changes and quit our editor.
>
> **[8:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=480)** And then finally, in order to make our GitLab CI pipeline go, we need to commit all of these changes.
>
> **[8:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=486)** The last thing that we were testing is the Git workflow, the "git status" to check our changes, "git add" to add the new changes that we made, "git commit" to commit those changes, "git pull rebase" to make sure that we're getting all of the changes that our other developers may have made during this time, and "git push".
>
> **[8:26](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=506)** If you skipped "git pull rebase" during this challenge, that's fine too, because we're working by ourselves here.
>
> **[8:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=512)** But it's important to note that when you're working in a collaborative environment, running "git pull rebase" is going to become important.
>
> **[8:40](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=520)** So let's go ahead and run "git status" to see what's changed.
>
> **[8:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=522)** We have a lot of stuff here.
>
> **[8:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=524)** So let's go ahead and add our "spec" folder, our website and gitlab-ci.yml.
>
> **[8:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=530)** Then we're going to use "git commit".
>
> **[8:53](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=533)** And your commit message could look something like "Added code to solve this challenge!"
>
> **[9:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=540)** And maybe a description saying "We just changed the title," or something like that.
>
> **[9:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=546)** You could have also used the "-m" variant to add a single-line version of the commit, like "Added code to solve our challenge."
>
> **[9:15](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=555)** That is totally fine as well.
>
> **[9:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=557)** After you make the change, "git pull rebase" to capture changes from upstream, and then run "git push" to push our changes.
>
> **[9:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=565)** So once we do that, if we go into a browser and go to gitlab.[example.com](https://example.com), click on Website, we click on the progress circle over here which will bring us to our pipeline, and you can see the "check" stage over here.
>
> **[9:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=578)** Now to confirm that it's actually listing the contents of this repository, we need to click on it and look at the logs, which you can see here.
>
> **[9:47](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=587)** Now if you got an error message like this within your pipeline, where it's telling you that the provider credentials are incorrect, that just means that the credentials expired within our pipeline.
>
> **[9:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=597)** So what you could have done to solve this is simply go into Settings, CI/CD, Variables, Expand and, then, update the AWS Access Key, AWS Secret Access Key, and AWS Session Token.
>
> **[10:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=611)** So let's go ahead and do those now.
>
> **[10:17](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=617)** And then once you do that, click on Website to go back to your repository.
>
> **[10:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=623)** Click on the X and then Retry.
>
> **[10:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=628)** If you refresh the page you should see the failed stages retry.
>
> **[10:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=635)** And as you can see here, the logs suggest that we were able to run the "opentofu apply", which means that our credentials have been updated.
>
> **[10:44](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=644)** And so after a few minutes or even sooner, our integration tests should pass.
>
> **[10:50](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=650)** And then after a while, it should destroy all of the stuff that you uploaded to S3.
>
> **[10:56](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=656)** That's the challenge.
>
> **[10:57](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=657)** I hope you had a lot of fun solving it.
>
> **[10:59](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/solution-change-the-website-title-24081426?u=76281980&t=659)** I had a lot of fun creating it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (14), ci (5), aws (3), [[Test-Driven Development]] (1), next (1)
> **CLI Commands:** git (14), make (6), aws (3), docker (1), rm (1)
> **UI Navigation:** click on (5), scroll down (1), go to (1)
> **Code Identifiers:** website_url (3), page_spec (1), before_script (1), after_script (1)
> **Definitions:** means that (3), we call this (1), is a  (1), is an  (1)
> **Tools:** gitlab (5)
> **Env Vars:** aws (3), url (1)
> **File Paths:** unit/page_spec.rb (1), gitlab-ci.yml (1)


### 8. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=0)** So we've taken our awesome Explore California website and turbocharged it with DevOps principles and tooling.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=6)** We're now tracking changes to Explore California with Git so that we can always keep our work safe.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=11)** We can also now run our website locally with Docker, test it locally with RSpec, Capybara and Selenium, add automated CI/CD with code on GitLab CI and deploy it onto AWS with OpenTofu.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=25)** We've gone a long way, but what's next?
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=28)** As it happens, quite a lot.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=30)** While this course gave us the building blocks to maintain and deploy Explore California, there's a lot that we can do to go even further.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=38)** Here are some next steps that we can pursue in making Explore California the easiest and fastest website to deploy and maintain out there.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=46)** We saw how creating containers with Docker supercharged Explore California's ability to ship software fast.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=52)** However, when you have thousands of containers running in production, things can get complex fast.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=58)** That's where Kubernetes comes in.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=60)** Kubernetes is a container orchestrator that specializes in making it easy to run very short-lived containers at scale with minimal headaches.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=69)** Like Docker Compose, you create a manifest describing your application and what it needs to run, including other containers and other dependencies like load balancing and sensitive secrets.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=79)** However, unlike Compose, Kubernetes handles creating, maintaining, updating, scaling, and removing those containers for you no matter where in the world your app is running.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=90)** Next, you can learn more about container security.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=92)** The reason for this is because our containers run as the root user by default.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=97)** Additionally, the Docker container runtime runs as root as well.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=102)** This makes it very easy to start containers, but can become very dangerous if left unchecked.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=108)** If someone got into the container running Explore, it would be very easy for them to do real damage on the system it's running in.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=115)** Learning more about container security is a great next step in preventing this. From using the "user" keyword within Dockerfiles to exploring rootless container runtimes like Podman, there are lots of things we can do here to prevent container escapes and other common container-related security vulnerabilities.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=134)** Finally, when we started this course, we mentioned how many developers and systems administrators will not know that things are awry with their platforms until it's too late.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=143)** Fortunately, there is an entire practice that focuses on this specific problem.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=148)** Observability is the methodology of analyzing and studying the behaviors of your system to improve its reliability.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=155)** Like CI/CD, many people use monitoring and observability interchangeably.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=161)** However, observability goes beyond the logs and metrics that monitoring tools are great at collecting.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=168)** There are many observability tools available that can help you use this data to automatically respond to alerts and keep your infrastructure reliable, no matter what.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=178)** I hope you enjoyed our Explore California adventure as much as I did.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-your-first-project-24355651/next-steps-24082454?u=76281980&t=182)** Happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), ci (3), [[Kubernetes]] (3), [[Security]] (3), cd (2)
> **CLI Commands:** docker (4), cd (2), git (1), aws (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** aws (1)
> **Cross-References:** we mentioned (1)
> **Tools:** gitlab (1)


## Instructor

- [[Carlos Nunez]]

## Resources

- Exercise files available

## Skills Covered

- DevOps

## Path Context

### In [[Getting Started with DevOps]]
← [[DevOps Foundations- Monitoring and Observability]] | **5 of 5**

## Appears In

- [[Getting Started with DevOps]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging Google Cloud Developer and DevOps Tools]] — DevOps
- [[DevOps Foundations- Monitoring and Observability]] — DevOps
- [[Advanced Data Engineering with Snowflake]] — DevOps
- [[Automated Data Governance in Practice]] — DevOps
- [[Putting ITIL® into Practice- DevOps for ITIL® Practitioners]] — DevOps

---

[↑ Back to top](#)