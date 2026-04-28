---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: jenkins-essential-training-17420152
url: "https://www.linkedin.com/learning/jenkins-essential-training-17420152"
duration_minutes: 155
duration: 2h 35m
level: Intermediate
updated: 1/13/2025
learners: 3300
skills:
  - Jenkins
exercise_files: true
github: "https://github.com/LinkedInLearning/essential-jenkins-2468076"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEDVgLCVeGAvQ/learning-public-crop_675_1200/B4DZvz7mc8JwAY-/0/1769324046816?e=2147483647&amp;v=beta&amp;t=XEGcqxHZ_4MT2HQkWzM-YVJoaNoZg5f9sG0OGYvlE_Y"
linkedin_topic: DevOps
learning_paths:
  - '[[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]'
prev_courses:
  - '[[Learning Jenkins Automating Software Development And System Administration]]'
next_courses:
  - '[[Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure]]'
path_nav: '[{"path":"Continuous Integration-Continuous Delivery (CI-CD) with Jenkins","position":2,"total":3,"prev":"Learning Jenkins Automating Software Development And System Administration","next":"Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jenkins
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jenkins%20Essential%20Training.md)

![Jenkins Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQEDVgLCVeGAvQ/learning-public-crop_675_1200/B4DZvz7mc8JwAY-/0/1769324046816?e=2147483647&amp;v=beta&amp;t=XEGcqxHZ_4MT2HQkWzM-YVJoaNoZg5f9sG0OGYvlE_Y)

# Jenkins Essential Training

> If you want to build, deploy, and implement continuous delivery as code, you’ve likely heard about Jenkins, the popular DevOps suite known for its open-source extensibility and ease of use. Jenkins also lets you automate your entire enterprise as a software delivery pipeline. In this course, instructor Michael Jenkins shows you the fundamentals of navigating the platform so you can start automatin

> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152) | 2h 35m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Jenkins and DevOps** (3 videos)
- **3. 2. The Jenkins Pipeline** (8 videos)
- **4. 3. Integrate Jenkins with Version Control Systems** (6 videos)
- **5. 4. Agents and Distributed Builds** (5 videos)
- **6. 5. Artifacts and Testing** (5 videos)
- **7. 6. Securing Jenkins** (5 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### From code to production with Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=0)** - The Jenkins continuous integration platform is one of the most capable and widely used automation frameworks in the world.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=7)** Hi, I'm Michael Jenkins, a computer engineer with a background in process automation.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=14)** I'm a DevOps practitioner and a site reliability engineer.
>
> **[0:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=19)** In this course we'll look at advanced ways to use Jenkins, an application that's been in my toolbox for years.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=27)** We'll start by discussing why Jenkins is an excellent tool for enabling a DevOps approach to software development.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=35)** Then we'll see how Jenkins allows engineers and developers to create pipelines using configuration as code stored in GitHub repositories.
>
> **[0:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=45)** We'll go even further as we explore distributed builds, managing artifacts, and the steps needed to keep Jenkins secure.
>
> **[0:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=55)** I hope you're as excited as I am to get started with Jenkins Essential Training.

> [!info]- Semantic Content
>
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, there are a few things you'll need to be familiar with.
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=5)** This is an intermediate level course.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=7)** So I will expect that you already have some experience using Jenkins.
>
> **[0:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=13)** You should know how to install plugins and configure global tools.
>
> **[0:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=18)** You should also be comfortable with creating and running freestyle jobs.
>
> **[0:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=22)** This includes configuring and running jobs that use parameters.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=27)** If you find yourself still needing a refresher, I encourage you to take my course Learning Jenkins.
>
> **[0:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=34)** It covers everything you need to know to get up and running with Jenkins and will position you nicely to get the most out of this course.
>
> **[0:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=43)** You should also be comfortable working with the Git version control system and a Git service like GitHub, GitLab, or Bitbucket.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=53)** We'll be using GitHub, so if you're already up to speed on that platform, you'll be all set.
>
> **[1:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=62)** If you need resources for Git or GitHub there are courses here in the LinkedIn Learning Library that you can refer to.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=70)** And lastly, it will help if you have experience working with the Linux operating system and Command-line interfaces.
>
> **[1:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=79)** You don't need to be a complete system administrator but having some experience with Linux and Command-line interfaces will help with commands on the server where Jenkins is running.
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=91)** One more thing I wanted to mention, exercise files are available for you to use along with this course.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=99)** The files are located in a GitHub repo that has code, commands, troubleshooting tips, and links to additional resources to help you as you follow along or practice on your own.
>
> **[1:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=111)** I highly recommend you visit the exercise files repo and create your own fork to use with this course.

> [!info]- Semantic Content
>
> **Tools:** github (4), gitlab (1), bitbucket (1)
> **CLI Commands:** git (3), find (1)
> **Exercise Files:** exercise files (2), github repo (1)
> **Prerequisites:** you'll need (1), install (1), configure (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Jenkins and DevOps

#### Jenkins and the DevOps lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=0)** - [Instructor] The DevOps Life Cycle consists of eight stages in the planning, development, and operation of a system, or software application.
>
> **[0:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=8)** Let's take a look at how Jenkins fits into the DevOps Life Cycle and how using Jenkins ties into continuous integration and continuous deployment.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=21)** The DevOps Life Cycle is presented as an infinity symbol because the cycle is continuous.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=27)** Each step is repeated in order until the system or application is decommissioned.
>
> **[0:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=33)** The loop is divided into two groups with the first group representing the development stages of the cycle, and the second group representing the operational stages.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=44)** In the development group we start with the stage labeled plan and then move on to code, build and test.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=53)** In the operations group we continue the cycle with release, deploy, operate and monitor.
>
> **[1:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=61)** Jenkins is the perfect tool for automating processes, tied to the build, test, release and deploy stages.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=70)** When tools like Jenkins are used to automate the build and test stages, the process is known as continuous integration.
>
> **[1:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=78)** Using automation in the release and deploy stages is called continuous delivery.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=84)** And if the process is completely automated, it can be referred to as continuous deployment.
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=91)** Continuous integration often abbreviated as CI is tied to the build and test phases of the DevOps Life Cycle.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=100)** The main goal of continuous integration is to find and resolve problems early in the development cycle.
>
> **[1:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=106)** These steps also produce an artifact that can be deployed.
>
> **[1:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=110)** Jenkins automates building and testing by running commands that create the software artifact and run it through a series of tests.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=118)** This artifact could be a container image, Java archive, a windows executable, or any other sort of software package.
>
> **[2:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=128)** Once the tests have passed, the artifact can be moved on to the next stage in the process.
>
> **[2:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=135)** Continuous delivery and deployment are often referred to as CD.
>
> **[2:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=140)** CD is tied to the release and deploy stages of the DevOps Life Cycle.
>
> **[2:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=145)** These stages take an artifact and make it available for use, or actually put it to work.
>
> **[2:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=151)** The release stage is where the delivery happens.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=155)** Jenkins may upload a container image to a repository, or make a jar file available for downloading.
>
> **[2:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=163)** Ultimately, delivering the artifact means that a version of the application is available and ready to be used.
>
> **[2:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=170)** The next step is to deploy.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=174)** In some cases the deployment is manual.
>
> **[2:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=177)** For a continuous deployment, all steps are automated and completed with no, or very little human interaction.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=185)** In our case, we would give Jenkins the instructions needed to deploy automatically.
>
> **[3:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=192)** Now that we've discussed how Jenkins fits into the DevOps Life Cycle, and how Jenkins can be used for CI/CD, let's set up a Jenkins server that we can use to explore the topics in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3), make (2), find (1)
> **Code Keywords:** let (2), continue (1), case, (1)
> **Definitions:** known as (1), is called (1), means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Deploy a Jenkins server
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=5)** - [Instructor] It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=7)** In this challenge, you'll be deploying a Jenkins server to use for this course.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=14)** There are three basic requirements for this challenge.
>
> **[0:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=18)** Use the latest version of Ubuntu Server.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=21)** Install NGINX as a proxy to Jenkins.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=25)** And finally, install and configure Jenkins.
>
> **[0:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=29)** If at all possible, I highly recommend you use a public cloud service for this challenge.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=36)** You can use Amazon web services, Google cloud platform, Microsoft Azure, or any other public cloud service that you have access to.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=49)** The main reason I am suggesting you use a cloud service is so your Jenkins is accessible from a public URL.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=58)** In later lessons, we'll be implementing continuous integration from a code repo, and your Jenkins server needs to be publicly accessible to allow a web hook to trigger jobs.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=70)** If you aren't able to deploy Jenkins on a public cloud platform, please use the local system that you have available to you.
>
> **[1:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=79)** Jenkins runs on Windows macOS and Linux.
>
> **[1:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=83)** So you can install Jenkins just about anywhere.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=88)** As I mentioned, we'll be using Jenkins for continuous integration with a code repo, namely GitHub.
>
> **[1:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=94)** And local installations will not be able to receive web hooks to trigger jobs.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=100)** However, you can still follow along with Jenkins installed on your local system.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=107)** I'll be using Amazon Web Services.
>
> **[1:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=109)** So in my solution to this challenge, I'll also be creating a key pair for SSH connections, creating an EC2 instance using a Ubuntu AMI, and creating an elastic IP for persistent DNS assignment.
>
> **[2:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=127)** I'll also be using a user data script to install NGINX and Jenkins.
>
> **[2:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=133)** Exercise files are available for this challenge.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=136)** As I mentioned, there's a script that will update the Ubuntu OS.
>
> **[2:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=141)** Install NGINX and install Jenkins.
>
> **[2:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=145)** So you won't have to do an installation from scratch.
>
> **[2:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=149)** The script also installs the suggested plugins, and skips the installation wizard.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=155)** So even if you're following along, and you're using a different cloud platform please use Ubuntu for your operating system so you can use the script and the exercise files.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=167)** If you're following along and installing on a different operating system, particularly windows or macOS, review the course Learning Jenkins for detailed instructions on installing Jenkins on those platforms.
>
> **[3:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=181)** This challenge should take about 15 minutes to complete.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=185)** After you've completed the challenge, join me in the next video to discuss the solution.

> [!info]- Semantic Content
>
> **Env Vars:** nginx (3), url (1), ssh (1), ec2 (1), ami (1)
> **Prerequisites:** install (6), configure (1)
> **Code Keywords:** public (4), finally, (1)
> **CLI Commands:** nginx (3), ssh (1)
> **Code Identifiers:** macos (2)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **Tools:** github (1)

#### Solution: Deploy a Jenkins server
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=5)** - In this challenge, we need to deploy a Jenkins server.
>
> **[0:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=9)** I'm using AWS.
>
> **[0:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=10)** You may be using a different cloud provider, which is fine, as long as we get to the same result of having a Jenkins server that can be accessed using a public URL.
>
> **[0:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=20)** I'll jump right into the server creation process by clicking launch instances.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=25)** First, I need to pick the operating system that I want to use for this server, and I'm going to pick Ubuntu so I'll search for that.
>
> **[0:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=33)** And I'll select this first one that pops up, Ubuntu server 20.04 LTS.
>
> **[0:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=40)** For the instance type, I'm going to keep the default selection of T2 micro because it'll give us enough CPU and RAM to get through the course while also staying within the free tier.
>
> **[0:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=52)** So I'll click next, configure instance details.
>
> **[0:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=55)** I'm going to leave all of this as the default and I will click next, add storage.
>
> **[1:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=62)** On the storage screen, I'm going to increase the root volume size from 8 to 30 just to give us enough space to install Nginx, enough space for Jenkins, and for any plugins or Docker images that we install throughout the course.
>
> **[1:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=78)** So I will click next, add tags, and I do want to add a tag.
>
> **[1:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=83)** I will use the name tag and I will, for the value, enter Jenkins server.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=90)** Then let's go to next, configure security group.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=93)** I'm going to create a new security group and I'm also going to name this one Jenkins server.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=98)** And I'm going to add a role that allows HTTP traffic or web traffic on port 80 from any IP.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=107)** That will open up our security group to allow GitHub and ourselves to connect to the server via the web interface.
>
> **[1:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=116)** Now I'll click review and launch.
>
> **[1:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=119)** All of our selections are good on this page, so I will click launch.
>
> **[2:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=125)** And I don't have any key pairs in this region so I need to create a key pair and I will use the default RSA type and also call this one Jenkins server.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=136)** And I will download that key pair.
>
> **[2:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=139)** And now I will click launch instances.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=144)** Our server is launching, and if we go to the page here, we can see it's in pending state and it's coming up.
>
> **[2:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=150)** While that is launching, I also want to create an elastic IP address so that we can have a dedicated IP address for the server throughout the course.
>
> **[2:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=159)** That way, if I stop the instance or have to reboot it, I won't risk losing the IP address that I currently have.
>
> **[2:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=166)** So I'll go here to elastic IPs and click allocate elastic IP address and then I'll click allocate.
>
> **[2:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=175)** So we have our IP and now I need to associate it with the instance that I want to give it to.
>
> **[3:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=180)** So I'll click this button here, associate this elastic IP address.
>
> **[3:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=184)** And I do want to associate it with an instance.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=187)** There should be only one server running in this region.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=190)** And of course it's the Jenkins server that I just created.
>
> **[3:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=193)** So I'll select that guy and then I will click associate.
>
> **[3:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=198)** So now the IP address has been associated to the instance and it is fixed to that IP.
>
> **[3:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=206)** Let's go over and take a look at the instance and see if it's in a running state.
>
> **[3:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=212)** It is.
>
> **[3:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=213)** The instance state is pending.
>
> **[3:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=215)** I'm going to wait until this instance state is running just to make sure that the IP address is associated, that is, the elastic IP that I assigned.
>
> **[3:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=223)** I just want to make sure that it's associated and the instance reaches a running state.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=227)** So I'm going to wait here for a minute and maybe refresh this screen a couple times until the instance state is running.
>
> **[3:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=235)** The instance is in a running state and I want to connect to it over SSH so I can complete the install of Nginx and Jenkins.
>
> **[4:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=244)** And to do that, I will select the public IPv4 DNS.
>
> **[4:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=249)** You could also use the IPv4, just the numbered address, but I prefer to use the DNS.
>
> **[4:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=255)** It makes it feel more like a URL to me.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=257)** So I will select the stacked squares here to copy that to my keyboard.
>
> **[4:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=261)** And now I'm going to go to my terminal and connect to this server over SSH.
>
> **[4:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=270)** I'm in my terminal now.
>
> **[4:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=271)** And I'm in the same location where I downloaded the key that I'll be using to connect over SSH.
>
> **[4:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=279)** And the first thing that I need to do is set the permissions on this so that they are private to me.
>
> **[4:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=284)** Right now, if someone came along on the same computer that I'm using and saw this file, they would be able to read it.
>
> **[4:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=290)** So I need to issue a change mode command or chmod command, pass it 600, which will set it to be readable and writeable to me, and then the name of the file.
>
> **[5:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=300)** And now let's take a look at the permissions.
>
> **[5:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=304)** That's much better, only I can read and write this file.
>
> **[5:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=307)** So the SSH program will be totally happy with the permissions on this.
>
> **[5:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=312)** So I will type SSH -i and then the key name and the user that I want to connect with is Ubuntu.
>
> **[5:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=320)** Then I'll put the @ symbol and then the DNS name for our server.
>
> **[5:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=324)** So let's hit return and we are connected.
>
> **[5:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=328)** I'm going to clear the screen.
>
> **[5:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=329)** And first, because I'm going to be doing an install, I'll be running some commands that need elevated permissions.
>
> **[5:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=336)** I will run sudo su -.
>
> **[5:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=339)** That will let me enter a session as the root user.
>
> **[5:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=343)** I'll clear the screen there.
>
> **[5:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=344)** And there is an installation script in the exercise files but to get started with that, before I even pull that content in, I will start editing a file.
>
> **[5:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=355)** I'll be using vim.
>
> **[5:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=356)** And then the file name I'll use is install.sh.
>
> **[5:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=359)** Now let me go to the GitHub repo for the exercise files and copy the install script.
>
> **[6:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=367)** So here in the GitHub repo, there is the script that we can use to automate the installation and to get the content of this script, I just need to click these stacked squares here to copy that to my clipboard.
>
> **[6:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=379)** And now I'm going to go back to my terminal and paste this in.
>
> **[6:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=383)** Back in the terminal, I'm using vim, So I'll type I to get into insert mode and then I'll just paste it in and press escape once and then type :w to write the file to disk and then :q to quit them.
>
> **[6:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=401)** So I have my script here.
>
> **[6:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=403)** If I cat this out, I can see the contents are there.
>
> **[6:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=406)** All I need to do now is source this file.
>
> **[6:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=409)** And so I will type source install.sh.
>
> **[6:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=414)** This is going to take a minute to run.
>
> **[6:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=416)** So I'm going to pause here and just wait for this installation to complete.
>
> **[7:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=425)** The installation has completed.
>
> **[7:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=426)** That took a second, but here we are.
>
> **[7:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=428)** So as part of the automation in the script, it gives us this nice report that says the installation is complete with an invitation to open the URL for the server in a browser and log in as the admin user.
>
> **[7:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=442)** And it gives us the admin name and the default admin password.
>
> **[7:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=447)** If you're familiar with Jenkins, you may know that when you install Jenkins for the first time, you have to use the admin user and a default password that you have to dig out of the Jenkins installation.
>
> **[7:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=458)** Well, this script was nice enough to provide this information for us.
>
> **[7:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=461)** So I really appreciate that.
>
> **[7:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=463)** Thank you, script, for doing that.
>
> **[7:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=465)** So I'm going to leave this here for now because I need to get Jenkins open in a browser first.
>
> **[7:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=471)** So let me go back to a browser and open up the DNS name for the server.
>
> **[7:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=477)** Now that I have my Jenkins server open in a browser, I can paste in the admin password and click continue.
>
> **[8:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=487)** This is the screen where we can customize Jenkins.
>
> **[8:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=489)** The script is supposed to already install the suggested plugins, but I'll go through the process just in case anything was missed.
>
> **[8:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=498)** Everything was already there, so it just kind of breezed through that process.
>
> **[8:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=502)** I am going to create an admin user.
>
> **[8:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=504)** This wasn't requested in the challenge as part of the challenge but I just want to have a user that I can use to connect with a password that's a little bit easier to remember than the administrator password.
>
> **[8:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=516)** So I will create my own user there, full name.
>
> **[8:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=518)** I do have to give it a real email address or at least an email address that's in the form of a user at domain dot something.
>
> **[8:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=527)** So I'll just use this fake email address here.
>
> **[8:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=530)** And then I will click save and continue.
>
> **[8:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=533)** On this one, I can accept the default Jenkins URL and just click save and finish.
>
> **[8:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=539)** Jenkins is ready.
>
> **[9:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=540)** Let's start using Jenkins.
>
> **[9:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=542)** And here we are, ready to use Jenkins.
>
> **[9:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=545)** Everything is already in place.
>
> **[9:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=547)** So with that, I think we have solved this challenge.
>
> **[9:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=550)** I am able to access the server over a public URL.
>
> **[9:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=555)** The installation script really took care of everything as far as installing Nginx, setting up that as a proxy to Jenkins, installing Jenkins, and then even giving me the administrator password so I can log in.
>
> **[9:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=568)** Outside of the challenge, I created an account that I can use for the rest of the course with a password that's a little bit easier to remember.
>
> **[9:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=574)** But with that, I believe this challenge has been solved.

> [!info]- Semantic Content
>
> **Env Vars:** url (5), ssh (5), dns (4), aws (1), lts (1)
> **Code Keywords:** let (8), public (3), continue (2), type, (1), interface (1)
> **CLI Commands:** ssh (5), nginx (3), make (2), aws (1), docker (1)
> **Prerequisites:** install (9), configure (2)
> **Tools:** terminal (4), github (3), vim (2)
> **UI Navigation:** go to (4), select the (2), open the (1)
> **Exercise Files:** exercise files (2), github repo (2)
> **Cross-References:** go back to (2), coming up (1)


### 3. 2. The Jenkins Pipeline

#### Create a pipeline project
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=0)** - [Instructor] I'm logged into my Jenkins server, and I trust that you have a server that you can use to follow along.
>
> **[0:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=6)** Let's create our first pipeline job.
>
> **[0:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=9)** I'll start by clicking new item, and then I'll give it a name.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=12)** I'll just call it first pipeline.
>
> **[0:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=16)** And then I'll select pipeline for the project type, and then I'll click okay.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=25)** I'm not going to add a description or mess with any of the options here.
>
> **[0:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=29)** I'm just going to go straight to the pipeline section and click try sample pipeline.
>
> **[0:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=34)** And I'm going to select hello world.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=36)** And that will enter a pipeline script that prints the message "hello world" in one stage called hello.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=44)** So I will save that and then click build now.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=49)** And I'll give it a second for this job to complete.
>
> **[0:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=52)** Okay, the job is done, and I'm just going to pause here.
>
> **[0:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=56)** I want you to take a moment to explore the interface a bit.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=60)** And if you've used Jenkins before, it should be pretty familiar, perhaps with a few new additions.
>
> **[1:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=66)** This pipeline was fairly simple.
>
> **[1:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=68)** So before we turn up the complexity, let's discuss all the parts that make up a pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1), interface (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Create a declarative pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=0)** - [Instructor] Now that you've seen a Jenkins pipeline, let's go over the pipeline syntax and the parts of a pipeline, specifically stages and steps.
>
> **[0:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=9)** Jenkins supports two pipeline formats, scripted and declarative.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=14)** Scripted pipelines start with the word node.
>
> **[0:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=18)** Declarative pipelines start with the word pipeline.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=21)** Both are followed by curly braces that contain instructions for Jenkins to run.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=27)** Scripted pipelines use a domain-specific language or DSL based on Groovy, which is a scripting language for the Java virtual machine.
>
> **[0:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=37)** Declarative pipelines are an evolution of DSL pipelines.
>
> **[0:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=41)** The declarative syntax was developed to more easily capture the complete configuration of a project as code.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=49)** For the rest of this course, we'll be using the declarative format.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=53)** A declarative pipeline configuration has three required sections, an agent section, a stages section.
>
> **[1:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=62)** And inside the stages section, we're required to have at least one stage with at least one step.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=70)** Let's discuss each of these in a little more detail.
>
> **[1:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=74)** The agent section specifies where the commands in a pipeline will be run.
>
> **[1:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=80)** We can use several parameters to specify an agent.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=84)** Some of the parameters we can use are any, label, docker, and none.
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=91)** If we use the any agent, we're letting Jenkins know that it can run the pipeline using the first available executer.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=99)** In systems where Jenkins is running jobs on the controller, this is likely the agent you would use the most.
>
> **[1:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=106)** When we need to be specific about the agent that runs the pipeline, we can use the label parameter.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=113)** This is helpful when we need to run a pipeline on a specific operating system or on a server where a specific tool or a resource is installed.
>
> **[2:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=123)** The docker agent lets us run pipelines inside a container, either on the Jenkins server or another server where docker is running.
>
> **[2:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=133)** This is useful for projects that need to build environments that are fresh and consistently provisioned on each build.
>
> **[2:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=141)** The none agent is a special case.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=144)** Since the agent selection at the top of a pipeline is applied to all commands, the none agent allows us to defer agent selection to stages.
>
> **[2:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=156)** So using none allows you to use a different agent for each stage in the pipeline.
>
> **[2:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=163)** In the stages section of a pipeline, we identify specific parts of the process being automated.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=169)** If we were developing a CICD pipeline, for example, we could use stages named build, test, and deploy to represent the actions needed for an application deployment.
>
> **[3:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=182)** Each stage must contain at least one steps section.
>
> **[3:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=186)** In the steps section, we list the commands that actually do something.
>
> **[3:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=191)** This is where we run programs, scripts and commands that interact with the compute platform that the pipeline is running.
>
> **[3:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=199)** We can have multiple commands in each step.
>
> **[3:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=203)** Let's create a new pipeline that has multiple stages and steps.
>
> **[3:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=209)** For this demonstration, I'll be using the exercise files for this lesson.
>
> **[3:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=213)** The README has a sample pipeline that we can use.
>
> **[3:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=217)** It has four stages, and the testing stage has three steps.
>
> **[3:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=222)** I can just click this stacked squares icon here to copy the file.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=227)** And now I'll go to my Jenkins server.
>
> **[3:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=231)** I've already got a pipeline job started, and I just need to paste in the pipeline from the exercise files.
>
> **[3:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=237)** And I'll save this and click build now.
>
> **[4:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=242)** This pipeline will run pretty quickly, since it isn't doing too much.
>
> **[4:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=246)** And we get this graphic that shows each stage of our pipeline.
>
> **[4:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=251)** To view the steps and logs for a stage, just hover over the stage and click logs.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=257)** And clicking the steps shows the log.
>
> **[4:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=260)** So far, we've only used the echo step in a pipeline.
>
> **[4:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=263)** But we won't get anything built if Jenkins is just printing words on the screen.
>
> **[4:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=269)** Fortunately, there are plenty more steps that we can use as we create pipelines.
>
> **[4:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=274)** Let's look at some of these steps in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case. (1)
> **CLI Commands:** docker (3), node (1)
> **Env Vars:** dsl (2), cicd (1), readme (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Documentation:** the readme (1)
> **UI Navigation:** go to (1)

#### Use the pipeline Snippet Generator
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=0)** - [Instructor] Jenkins provides basic pipeline steps that we can use without having to do any additional setup.
>
> **[0:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=6)** Here are a few of the most common steps that you'll see as you're working with pipelines.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=12)** We've already seen the echo step, which just prints a message.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=17)** We can use the git step to check out code from a git repo.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=21)** The sh or shell step, lets us run scripts or commands on the local system and the archiveArtifact step lets us store any artifacts created by a job.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=35)** For the complete list of basic steps, please take a look at the basic steps reference in the Jenkins documentation.
>
> **[0:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=42)** In this list, you'll find dozens of the steps available for use in a pipeline.
>
> **[0:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=47)** As you install plugins or extend the functionality of your Jenkins server, you'll find that many plugins expose their own pipeline steps.
>
> **[0:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=57)** For more information on these additional steps, you'll want to take a look at the pipeline steps reference in the Jenkins documentation.
>
> **[1:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=65)** There are literally hundreds of steps to choose from, so I encourage you to take a look at this list to see if there are any tools that you're already using that can be called from a pipeline step.
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=77)** With all these steps, it can be difficult to know how to write the code that calls a specific step along with any parameters or arguments that we need to pass to the step.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=88)** Fortunately, Jenkins provides a pipeline syntax generator that we can use to create snippets of code that we can copy into a pipeline.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=97)** Let's take a look at an example.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=100)** I'm editing a new job and I've added the pipeline definition from the exercise files for this lesson.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=107)** The pipeline uses a shell step to run a local command that creates a file named report.TXT.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=115)** Just below the pipeline field, there's this link to pipeline syntax.
>
> **[2:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=120)** Clicking the link opens the pipeline syntax page in a new tab where we can access the snippet generator.
>
> **[2:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=127)** There's also a directive generator and some additional documentation that you may want to review.
>
> **[2:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=133)** For now, let's focus on the snippet generator.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=136)** If we click the selector under sample step, we can see that the basic steps are provided here for us to choose from and I'll just stick with the archive artifacts, which is the first step in the list.
>
> **[2:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=149)** In this dialogue, we would enter all the parameters that we will want to pass to the step.
>
> **[2:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=154)** For example, if I wanted to archive all of the TXT files that were generated by a step in my pipeline, then I would enter star.TXT in the files to archive field.
>
> **[2:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=168)** Many steps also have an advanced configuration.
>
> **[2:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=171)** I'll click advanced here.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=174)** In the advanced configuration, I can provide more options such as not failing the build if archiving doesn't return anything.
>
> **[3:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=182)** Archiving artifacts only if the build is successful and fingerprinting all archived artifacts.
>
> **[3:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=188)** I'll select all of these.
>
> **[3:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=194)** Now that I have the form filled out, all I need to do is click generate pipeline script.
>
> **[3:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=201)** This creates a snippet that I can use in my pipeline.
>
> **[3:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=205)** So I'll select all of the text here and copy it.
>
> **[3:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=209)** Now, back in my pipeline tab, all I need to do is select where I want to place the snippet in my pipeline and then paste it in.
>
> **[3:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=216)** So I'll put it just after this shell step.
>
> **[3:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=220)** One more thing we can do before we save the pipeline is click the apply button.
>
> **[3:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=225)** This checks the syntax in our pipeline to make sure we haven't added any errors while we were adding the snippet.
>
> **[3:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=231)** No errors here, so I will click save.
>
> **[3:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=235)** And now I'll build the pipeline by clicking build now.
>
> **[3:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=239)** We can tell right away that the archive step was successful thanks to this little blue icon here next to the build and if I reload the page, I can get the last successful artifact right here which is report.TXT.
>
> **[4:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=255)** So with this short pipeline, I really wanted to demonstrate how we can use the snippets generator to quickly draft steps that we can use in a pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** git (2), find (2), make (1)
> **Code Keywords:** pass (2), let (2), from, (1)
> **Env Vars:** txt (4)
> **File Paths:** report.txt (2), star.txt (1)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** setup (1), install (1)
> **Code Identifiers:** archiveartifact (1)
> **Exercise Files:** exercise files (1)

#### Use variables in a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=0)** - [Instructor] Variables let us use dynamic values in our pipelines.
>
> **[0:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=4)** Jenkins exposes three different types of variables that we can use: environment variables, current build variables, and parameters.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=14)** This lesson will focus on environment variables, and current build variables.
>
> **[0:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=19)** We'll use another lesson to discuss parameters.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=24)** The usual practice is to use all capitals for environment variable names, so anyone reading the code can tell the variables apart from the keywords, which are usually lowercase.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=36)** Environment variables can be scoped globally for an entire pipeline, or they can be scoped locally in a stage.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=44)** Using an environment block at the beginning of a pipeline exposes the variables to all pipeline steps.
>
> **[0:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=51)** Using an environment block at the beginning of a stage only exposes variables to steps within that stage.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=58)** Environment variables can be referenced in a few different ways in a pipeline, depending on how they're being used.
>
> **[1:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=66)** They can be proceeded with the keyword env in lowercase letters followed by a dot and then the name of the variable.
>
> **[1:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=74)** Or they can be referenced by their name.
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=77)** If an environment variable is being used in a string the value must be prefixed with a dollar sign and, optionally, the dollar sign can be followed by curly braces that wrap the entire variable name.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=90)** The style you choose is up to you, but the best practice is to stay consistent throughout a pipeline script.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=98)** currentBuild variables allow pipeline steps to reference the state of a build while it's running.
>
> **[1:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=104)** This can be useful for dynamic operations that need to do something specific based on a previous step or a certain status in the build.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=115)** All of the currentBuild variables are actually properties of one variable named currentBuild.
>
> **[2:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=121)** Please note that this variable is case sensitive.
>
> **[2:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=124)** It starts with a lowercase c and the B in build is capitalized.
>
> **[2:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=130)** To access the currentBuild properties the values are proceeded by currentBuild, a dot and then the name of the property.
>
> **[2:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=139)** The properties are also case sensitive and follow the CamelCase format with a lower case letter to start, and capital letters for each additional word in the variable name.
>
> **[2:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=150)** A few examples of currentBuild variables are the start time, the duration of the build and the current status of the build.
>
> **[2:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=159)** Just like environment variables, these values need to be proceeded by a dollar sign if they are used in strings.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=167)** Now that we've discussed environment and currentBuild variables, let's take a look at the default variables that get exposed to every pipeline.
>
> **[2:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=175)** Then, we'll take a look at an example using environment variables.
>
> **[3:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=182)** I'm on the homepage of a new pipeline job.
>
> **[3:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=184)** And I wanted to show how you can get to the reference for the global variables.
>
> **[3:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=189)** From here, I can click Pipeline Syntax, which we saw in a previous lesson.
>
> **[3:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=195)** In the menu under the snippet generators is a link to the Global Variables Reference.
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=202)** This page gives more details on all of the environment variables and currentBuild variables that Jenkins makes available globally.
>
> **[3:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=211)** I encourage you to take a moment and review the variables and the information provided.
>
> **[3:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=217)** For now, let's get back to the example.
>
> **[3:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=220)** Near the top of the pipeline script, I have an environment block with two variables MAX_SIZE and MIN_SIZE.
>
> **[3:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=228)** MAX_SIZE is set to 10 and MIN_SIZE is set to 1.
>
> **[3:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=233)** Following that I have two stages one called Default Scale and another called Scale by 10X.
>
> **[4:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=242)** Inside the Scale by 10X stage I have another environment block that redefines MAX_SIZE and MIN_SIZE.
>
> **[4:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=250)** This time, MAX_SIZE is 100 and MIN_SIZE is 10.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=257)** Let's run this pipeline and see how the output is affected by the location of these environment variable assignments.
>
> **[4:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=265)** I'll click Save, and then Build Now.
>
> **[4:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=269)** T\he best way to look at the output from this particular project is to click into the latest run and then click Pipeline Steps.
>
> **[4:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=280)** We could view the console output, but the Pipeline Steps view gives us a cleaner view of exactly what happened in each pipeline step.
>
> **[4:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=290)** And if I scroll down to the bottom of this output the last two lines show that, sure enough, our Scale by 10X stage used the local values for MIN_SIZE and MAX_SIZE instead of the global values.
>
> **[5:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=305)** that were defined at the start of the pipeline.

> [!info]- Semantic Content
>
> **Env Vars:** max_size (5), min_size (5)
> **Code Identifiers:** currentbuild (8)
> **Code Keywords:** let (4)
> **UI Navigation:** in the menu (1), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)

#### Parameterize a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=0)** - [Instructor] We've seen how Jenkins lets us use variables in a pipeline.
>
> **[0:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=4)** Parameters are another type of variable that get their values at the time the job is triggered.
>
> **[0:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=10)** Parameters are defined in a parameters block, which is placed at the beginning of the pipeline code.
>
> **[0:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=16)** Much like we've seen with environment variables, parameters are accessed by their name proceeded by the params prefix.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=24)** And if they're used in a string, they need to have a dollar sign at the beginning and can also be wrapped in curly braces.
>
> **[0:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=32)** Each parameter definition must include a name, a default value, and a description that explains the type of value that should be entered.
>
> **[0:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=42)** Typically parameter names are assigned using all capital letters, so they can be easily identified in the code.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=50)** For pipelines, there are five different types of parameters we can use.
>
> **[0:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=54)** Strings, blocks of text, booleans, choices, and passwords.
>
> **[1:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=63)** String and text parameters are represented by a text field in the Jenkins interface, where a user can enter freeform text.
>
> **[1:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=72)** String parameters are best used for single word values.
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=77)** Text parameters are useful if you need to pass in a long block of text that contains multiple lines.
>
> **[1:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=85)** Boolean parameters let us pass in true or false values and are represented by a check mark in the Jenkins interface.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=93)** Choice parameters present the user with a list of options to choose from.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=98)** When we create a choice parameter, the options are entered as a list.
>
> **[1:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=104)** We don't have to specify a default though because the first value in this list will be used as the default value in the Jenkins interface.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=113)** Password parameters can be used to enter sensitive values like passwords and API keys.
>
> **[2:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=120)** Password values are entered in the same way that string parameters are entered.
>
> **[2:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=125)** However, password values are masked to keep them from being exposed.
>
> **[2:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=131)** Because pipeline parameters can change the Jenkins interface, it causes a sort of chicken and egg scenario.
>
> **[2:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=139)** We can create a pipeline that defines parameters, but those parameters are not immediately available to the Jenkins job.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=147)** So after you create a pipeline with parameters, you'll need to run the pipeline, which will actually encounter an error, especially if the default values are blank or aren't available for the job to process.
>
> **[2:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=160)** But once the job is run a second time, the parameters will be available to be used.
>
> **[2:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=166)** This is also the case if parameters are added or changed.
>
> **[2:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=171)** If you modify or add a parameter, the pipeline will need to be run once before the change is applied.
>
> **[2:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=178)** Let's see how all of this comes together in the Jenkins interface.
>
> **[3:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=183)** I've started a new pipeline project and I've added the pipeline from the exercise files for this lesson.
>
> **[3:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=189)** This pipeline has five parameters, one for each of the different types of parameters that we can use.
>
> **[3:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=196)** The pipeline has one stage where the parameter values are echoed so we can see the value that was assigned.
>
> **[3:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=203)** So let me save this project and build it.
>
> **[3:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=208)** Because this is the first time this project was run, the trigger to start the build only says build, it doesn't say build with parameters, which is what we would expect after adding parameters to a pipeline.
>
> **[3:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=221)** But as we discussed earlier, we need to build a project once and then the parameters will be exposed.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=227)** It's already been built, so let me refresh the screen.
>
> **[3:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=233)** Okay, now we get the option to build with parameters.
>
> **[3:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=236)** So let's click that.
>
> **[3:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=239)** Now we get an interface to fill in the parameters.
>
> **[4:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=242)** And you can see how the defaults have already been filled in.
>
> **[4:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=246)** So if I wanted to accept these values I could just click build, or I could fill in new values.
>
> **[4:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=253)** One parameter I wanted to look at a little bit closer is the password parameter.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=257)** So let me scroll down and find that one.
>
> **[4:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=260)** You can see here in the user interface that the default is concealed, so the value isn't exposed.
>
> **[4:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=266)** And if I click change password, then I can enter a new value for the password.
>
> **[4:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=272)** And the text is hidden with dots.
>
> **[4:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=275)** If you're following along, I encourage you to run this pipeline several times.
>
> **[4:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=279)** Experiment with adding new parameters or changing existing parameters to see how that affects the Jenkins interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), let (6), pass (2), from. (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Use conditional expressions and manual approvals
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=0)** - [Instructor] When we're developing pipelines we might need to use logic to determine if a stage should be run or not.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=7)** We might also need to add some sort of manual interaction to an automated process.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=14)** Let's discuss how Jenkins exposes these two capabilities in a pipeline configuration.
>
> **[0:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=20)** To set up a pipeline condition, we use the when keyword inside a stage block.
>
> **[0:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=28)** The when block uses three built in conditions to determine if the steps in a stage should be run.
>
> **[0:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=34)** The conditions are branch, environment, and expression.
>
> **[0:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=40)** If the specified condition evaluates to true, then the stage will be allowed to run, otherwise the stage will be skipped.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=49)** Branch conditions are useful when the pipeline is interacting with a version control system like GitHub.
>
> **[0:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=56)** This allows us to only run stages for specific branches in a repo.
>
> **[1:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=61)** Environment conditions evaluate to true, if the specified environment variable is present and it contains the specified value.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=70)** This can be useful for building projects that interact with different environments.
>
> **[1:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=76)** Expression conditions provide the most flexibility for conditional statements.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=82)** We can use groovy expressions along with parameters and other variables to build a statement that returns true or false.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=90)** To learn the extent of what you can do with expressions, I encourage you to review the documentation on Apache Groovy operators.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=100)** Along with conditionals, we can use the input step to control the flow of a pipeline.
>
> **[1:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=105)** The input step pauses a triggered pipeline and waits for manual interaction to determine if the pipeline should proceed, or abort.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=115)** We can also configure an input step with a custom message to give more information on what will happen if the job were to proceed.
>
> **[2:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=122)** Let's use an example to demonstrate how conditional expressions and manual approvals are used in a pipeline.
>
> **[2:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=132)** I've created a new pipeline job using the exercise files for this lesson.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=136)** This job starts with a choice parameter for selecting an environment.
>
> **[2:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=141)** I've already run this job once, so when I go back to the job interface, I'll be able to use this parameter on the next run.
>
> **[2:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=148)** There are three stages in this pipeline.
>
> **[2:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=151)** The first stage will run the build steps for the project.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=155)** The second stage will deploy to non-production environments.
>
> **[2:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=159)** In this stage, we're using a conditional expression that will only run the stage if the environment is not equal to production.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=167)** So our development and staging environments will be automatically deployed in this stage.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=174)** In the third stage, we're deploying to the production environment.
>
> **[2:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=178)** The conditional for this stage checks the environment parameter to see if it's equal to production.
>
> **[3:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=184)** If it is the stage will proceed.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=187)** The production deployment also uses an input step to confirm that we really want to deploy to production.
>
> **[3:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=195)** So if the environment is production, the stage will start and then pause until we confirm the deployment.
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=202)** Let's run this pipeline I'll click Save, and then Build with Parameters.
>
> **[3:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=208)** Let's just use the default development environment first to observe what will happen for a non-production environment.
>
> **[3:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=216)** So I'll just click Build.
>
> **[3:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=218)** The pipeline runs as expected and it completes with no problem.
>
> **[3:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=223)** Let's run it again and choose the production environment.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=227)** So I'll click Build with Parameters again, and this time I'll select Production, and then click Build.
>
> **[3:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=234)** The project starts, but since we selected production the non-production stage is skipped.
>
> **[4:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=241)** We also see that the pipeline has stopped in the Deploy to Production stage.
>
> **[4:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=246)** This is because the input step is waiting for us to confirm the deployment.
>
> **[4:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=251)** If I hover my mouse over that stage, I get a dialogue box with buttons to proceed with the deployment, or to abort.
>
> **[4:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=261)** I'll confirm by clicking Deploy.
>
> **[4:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=266)** And after I click deploy the pipeline is able to complete successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** apache (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Develop a parameterized pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=0)** - [Instructor] It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=7)** You're on a development team using Jenkins to test and deploy a new application.
>
> **[0:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=13)** Your team has already developed the outline for a pipeline.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=17)** Now they need to update the pipeline so that it accepts parameters for multiple environments.
>
> **[0:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=23)** You've been given several requirements for the updates.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=27)** You'll need to add three parameters to the existing pipeline.
>
> **[0:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=31)** The first parameter should be named environment and allow the person triggering the pipeline to select the target environment.
>
> **[0:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=39)** The choices for the environment should be limited to, development, staging, and production.
>
> **[0:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=46)** The default environment should be development.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=50)** The second parameter should be named API key and allow a secret value to be passed into the pipeline.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=58)** Make sure that the API key is not exposed when the value is entered in the Jenkins interface.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=64)** Use the value 123ABC as the default.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=70)** And the last parameter should be named changelog and accept freeform text that can be added to a report.
>
> **[1:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=79)** There are three stages in the pipeline.
>
> **[1:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=81)** Test, deploy and report.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=84)** Update the deploy stage to only deploy to the production environment.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=90)** In the production stage, update the report so that it uses the changelog for the content of the report.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=97)** Also, it also change the name of the report so that it matches the name of the environment.
>
> **[1:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=104)** A pipeline template is available in the exercise files.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=107)** So I encourage you to use that to get started on this challenge.
>
> **[1:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=112)** Also, if you run into any problems getting the pipeline configured properly, use the pipeline syntax tool to generate snippets for your pipeline.
>
> **[2:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=121)** Specifically, take a look at the Declarative Directive Generator.
>
> **[2:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=127)** This challenge should take about 15 to 20 minutes to complete.
>
> **[2:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=131)** Give it a shot and meet me in the next video to go over the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), default. (1)
> **Env Vars:** api (2)
> **Exercise Files:** template (1), exercise files (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Develop a parameterized pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=0)** - [Instructor] In this challenge, we're being asked to create a parameterized pipeline.
>
> **[0:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=10)** I'm starting here in the exercise files for this challenge where there's a sample template that we can use to get started with the pipeline.
>
> **[0:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=18)** So I'll click this icon here to copy the contents of the pipeline script to my clipboard.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=24)** And then I'll go to my Jenkins server which I have opened in another tab here.
>
> **[0:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=29)** I'll start by clicking New Item and I'll call this one parameterized-pipeline and then select Pipeline type.
>
> **[0:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=40)** Click OK, and I'll go straight to the pipeline section and paste this in.
>
> **[0:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=46)** And we've copied this in.
>
> **[0:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=48)** I just want to make sure that everything is good here.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=50)** I'm going to click Save and then Build Now, just to make sure that there's no problems with the template or anything like that.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=58)** Okay, the build has completed, we have three stages.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=60)** Looks great. Test, Deploy, and Report.
>
> **[1:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=63)** So if I recall the challenge, we needed to add parameters that allowed someone to enter the environment, an API key, and a change log.
>
> **[1:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=72)** So let's configure this, and then instead of editing the pipeline directly, which is perfectly fine, I'm going to use the Pipeline Syntax link here to get me to the Snippet Generator.
>
> **[1:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=87)** It's under the Declarative Directive Generator.
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=91)** I'm going to use the Parameters directive.
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=95)** And I'm going to add all the parameters that I need right up front.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=99)** I'm going to add a Choice Parameter.
>
> **[1:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=103)** I'm going to add Password Parameter for the API key.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=107)** And then I will also add a, let's see, Multi-line String Parameter for the change log.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=113)** Okay, that kind of gives us an outline for all our parameters.
>
> **[1:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=116)** Now I want to go back and fill these in.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=118)** The first one was ENVIRONMENT.
>
> **[2:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=122)** And the choices for that were going to be DEVELOPMENT, STAGING and PRODUCTION.
>
> **[2:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=132)** Okay.
>
> **[2:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=132)** And DEVELOPMENT'S going to be our default because it is the first one.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=136)** And for the description I'll just say, select an environment for deployment.
>
> **[2:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=142)** Okay, let's go on to the Password Parameter.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=144)** The name for this one we're supposed to use is API_KEY.
>
> **[2:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=149)** And the default value, super secret value, is 123ABC.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=155)** And for this one, I will say, enter the API key.
>
> **[2:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=160)** Now let's move on to the Multi-line String Parameter, which is... I believe the name for this one was CHANGELOG.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=167)** And I will enter... The default value was supposed to be, this is the change log.
>
> **[2:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=175)** And for the description, I'll just say, enter the change log.
>
> **[3:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=180)** Okay, so all of the configuration is done for our parameters.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=185)** We just need to generate the snippet.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=187)** So I will click Generate Declarative Directive.
>
> **[3:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=191)** And that gives us all of this for free, we didn't have to code anything.
>
> **[3:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=195)** And I will just select this, copy it.
>
> **[3:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=198)** And now let's go back to the pipeline, which is open in another tab.
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=202)** And right here under agent, I will add the parameters configuration.
>
> **[3:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=208)** I'll clean this up a little bit.
>
> **[3:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=210)** And just to make sure that this is work that I haven't introduced any errors in the syntax, I will save this and build it.
>
> **[3:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=218)** We also have to build it, since these are parameters, we have to build it once successfully so that we can even access these parameters.
>
> **[3:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=225)** So I've built it, that finished successfully, let's reload.
>
> **[3:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=230)** Okay, so now we get the option to build with parameters, and let's check this out.
>
> **[3:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=234)** That's not exactly correct.
>
> **[3:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=236)** This is all on one line, so I'm going to need to fix that one.
>
> **[4:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=240)** And I think I know what happened there.
>
> **[4:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=242)** We did get the API_KEY correct.
>
> **[4:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=245)** This value is concealed, and if we change it, the value is hidden in here.
>
> **[4:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=249)** And the CHANGELOG is correct.
>
> **[4:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=251)** Let's fix this ENVIRONMENT thing 'cause that is not correct.
>
> **[4:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=256)** Okay, let's go down to here.
>
> **[4:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=261)** And for the choices, I know what it is.
>
> **[4:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=264)** These are all entered as one long string instead of three separate strings.
>
> **[4:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=271)** So by placing my single quotes on either side of the commas, I can fix that problem.
>
> **[4:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=278)** So let's save this.
>
> **[4:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=279)** I'm going to have to build it again though now just to make sure that that gets picked up.
>
> **[4:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=283)** 'Cause when I click build for parameters now we're not going to see that change that I just made, but I'm going to click Build anyway just to build it and I'll wait for this to finish.
>
> **[4:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=293)** Okay, it's finished now.
>
> **[4:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=294)** I'll click Build with Parameters, and yes, this looks much better.
>
> **[4:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=298)** I've got choices now for DEVELOPMENT, STAGING and PRODUCTION.
>
> **[5:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=302)** Okay, the next thing that we needed to do was configure the deploy stage so that it only deploys to the production environment.
>
> **[5:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=311)** And then we also need to update the report to use the change log and the environment name for the file.
>
> **[5:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=318)** So let's go into Configure. Scroll down.
>
> **[5:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=321)** I'll just click this to get down to the pipeline section.
>
> **[5:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=324)** And let's go to the deploy stage.
>
> **[5:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=326)** So for this one, we need to add a condition.
>
> **[5:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=331)** And I will use the when to start this.
>
> **[5:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=334)** And we are going to use an expression.
>
> **[5:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=338)** We need to access the ENVIRONMENT parameter, and I know that starts with the keyword parans, followed by a dot, and then the parameter is ENVIRONMENT.
>
> **[5:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=349)** And that has to be equal to PRODUCTION.
>
> **[5:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=354)** And let's close out all of these curly braces, there are two of them.
>
> **[5:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=358)** So that should be all we need to do for this stage to be deployed only for the production environment.
>
> **[6:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=365)** Okay, so now let's fix the REPORT stage to report... Let's see.
>
> **[6:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=372)** So for this, where this says, this is the change log, we need to change this so that it uses the CHANGELOG parameter.
>
> **[6:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=382)** Now, since this is inside a string, we need to start the value with a dollar sign.
>
> **[6:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=387)** And I like to wrap it in curly braces.
>
> **[6:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=390)** And inside here, I'm going to write the params keyword, followed by a dot, and then CHANGELOG.
>
> **[6:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=397)** Okay, that should get it.
>
> **[6:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=399)** I'm pretty confident there.
>
> **[6:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=401)** And for the report name we need to use the name of the environment.
>
> **[6:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=407)** So I will change REPORT to... This is also in a string, so it's going to be dollar sign inside curly braces, params.ENVIRONMENT.
>
> **[6:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=419)** Okay, I'm pretty confident that this looks good.
>
> **[7:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=422)** So let's save this and build with parameters.
>
> **[7:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=428)** Let's pick DEVELOPMENT first to see if the report name changes.
>
> **[7:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=436)** So I'll keep the default, I'll click Build, and we'll wait for the build to complete.
>
> **[7:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=443)** Okay, let me reload the page to see if... Yes, we did get a report for the DEVELOPMENT environment.
>
> **[7:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=450)** That's good.
>
> **[7:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=451)** Also, for this last run, it skipped the deployment because the environment was not PRODUCTION.
>
> **[7:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=459)** Let's run it one more time and select PRODUCTION this time.
>
> **[7:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=464)** If we do that and it's correct, then we should get a deployment and we should also get an artifact for the PRODUCTION environment.
>
> **[7:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=472)** So let's build with parameters.
>
> **[7:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=474)** I'm going to select the PRODUCTION environment.
>
> **[7:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=477)** And in the change log, I will write, I hope this works.
>
> **[8:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=481)** Okay, and now I will click Build.
>
> **[8:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=484)** And let this finish. Should finish pretty quickly.
>
> **[8:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=489)** Okay, so it's looking pretty good.
>
> **[8:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=490)** We got a deployment.
>
> **[8:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=493)** So that means it did deploy for the PRODUCTION environment.
>
> **[8:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=496)** We got an artifact and there is our PRODUCTION artifact.
>
> **[8:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=499)** I want to reload it so I can see it up here at the top.
>
> **[8:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=503)** And let's view the inside of this artifact to see if it actually has the value that I passed in as a parameter.
>
> **[8:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=511)** And yes, it does. Awesome.
>
> **[8:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=514)** So let's go back to the job page here.
>
> **[8:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=517)** So let's just kind of review what we did.
>
> **[8:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=520)** We created a pipeline job and added parameters.
>
> **[8:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=524)** Those parameters were for an environment that exposed three options, DEVELOPMENT, STAGING and PRODUCTION.
>
> **[8:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=531)** We added an API key, which used the password type for a parameter, which protects the value that's being passed into the job.
>
> **[8:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=539)** And then we added a change log parameter which used the Multi-line String type so that we could enter multiple lines here in this large text field.
>
> **[9:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=550)** Then we... Let me go back to the top of this.
>
> **[9:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=555)** Let's see, I'll go back to this run.
>
> **[9:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=558)** And go back to project. Yes, that's what I wanted to do.
>
> **[9:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=560)** So then, we added some conditions that only allowed deployments to happen for the PRODUCTION environment.
>
> **[9:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=567)** So we did two tests there.
>
> **[9:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=568)** We deployed once with the DEVELOPMENT environment and this deployment was skipped.
>
> **[9:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=574)** And then we deployed again with the PRODUCTION environment and we did get a deployment.
>
> **[9:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=578)** So that worked perfectly.
>
> **[9:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=580)** The last change we did is we modified the report name from report.txt to use the name of the environment that was selected as a parameter.
>
> **[9:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=591)** And in our test for the DEVELOPMENT environment, indeed we got the development.txt artifact.
>
> **[9:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=597)** And when we tested with the PRODUCTION environment, we got production.txt.
>
> **[10:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=602)** After all of that, I think that this challenge has been solved.

> [!info]- Semantic Content
>
> **Env Vars:** production (13), development (8), environment (5), api (4), changelog (4)
> **Code Keywords:** let (26), this, (3), this. (3), type. (1), super (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (2), scroll down (1), select the (1)
> **File Paths:** report.txt (1), development.txt (1), production.txt (1)
> **Exercise Files:** template (2), exercise files (1)
> **Prerequisites:** configure (3)


### 4. 3. Integrate Jenkins with Version Control Systems

#### Pipeline as code with Jenkinsfile
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=0)** - [Instructor] In the previous chapters of this course, we used declarative pipelines to create projects in Jenkins.
>
> **[0:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=6)** However, we still used a manual approach to create the jobs.
>
> **[0:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=10)** We entered the pipeline definition directly into the Jenkins user interface.
>
> **[0:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=15)** This approach works perfectly fine but it doesn't lend itself to automation and tracking changes.
>
> **[0:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=22)** To increase automation and track changes to pipelines we can use the option to get pipelines from source control management.
>
> **[0:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=29)** By clicking here and selecting pipeline script from SCM.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=35)** With this option selected, we're presented with a dialogue to select the source control management system and a path to a script called Jenkins file.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=44)** Let's stop here for a moment to define what a Jenkins file is and how we can use a Jenkins file in our projects.
>
> **[0:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=52)** We can use the Jenkins file format to capture our pipeline definition as code.
>
> **[0:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=57)** And since this definition is a text based file, we can store it along with any other project files in a repository, like code used to build an application.
>
> **[1:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=67)** And just like any other file in a repository we can track changes made to the pipeline definition, but the Jenkins file lets us go beyond just capturing a pipeline.
>
> **[1:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=78)** It also lets us define the project configuration itself.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=82)** We can use a Jenkins file to capture definitions for tools, options for our project, and triggers to run a project, and much more.
>
> **[1:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=92)** Essentially any configuration that we could make in the Jenkins graphical user interface we can capture as code in the Jenkins file and store it along with any other files in the repo.
>
> **[1:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=104)** You'll see some of these pipeline sections used in upcoming lessons.
>
> **[1:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=111)** Storing the Jenkins file in a repo also allows development teams to use a GitOps approach.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=118)** This means the repository becomes the single source of truth for everything associated with the project, from the application code to configuration for tools that support the application, including continuous integration tools like Jenkins.
>
> **[2:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=135)** With GitOps, any changes made to the pipeline can be reviewed and discussed with the team before being merged and applied using an automated process.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=147)** Now that we know how we can use and benefit from a Jenkins file, let's use a pipeline stored in a source control management system with a job we were looking at earlier.
>
> **[2:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=157)** Jenkins can interact with many different types of version control systems, like (indistinct) or Subversion, but the Git system is probably the most popular.
>
> **[2:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=168)** In this case, the system I'm using has the Git plugin installed so I'll select that option under SCM.
>
> **[2:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=176)** Now I'm prompted to enter the repository URL and any credentials I might need to access the repo.
>
> **[3:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=183)** For this demo, I'll enter the repo for the exercise files.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=187)** I've cloned them into my own repository.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=190)** But before I do that, I'll select my credentials.
>
> **[3:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=194)** At the time that I'm recording this, the exercise files repo is private.
>
> **[3:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=199)** So I need to add my credentials to access it.
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=202)** By the time you access this lesson, the exercise files repo will be open and available for you to access without credentials.
>
> **[3:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=209)** So now I will paste in the URL for my clone of the exercise files repository.
>
> **[3:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=217)** And let me scroll down just a little bit here so we can see the rest of this dialogue.
>
> **[3:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=222)** Under branches to build, I need to change the branch specifier from master to main.
>
> **[3:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=229)** Most modern repos use main as the default branch but the default for the Git plugin at the time that I'm recording this still uses master for this option.
>
> **[4:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=241)** After that, we need to configure the script path.
>
> **[4:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=244)** So let me scroll down a little bit so we can see that.
>
> **[4:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=247)** This is the location that Jenkins will use to find the Jenkins file in the repository.
>
> **[4:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=252)** In most cases, the Jenkins file is placed in the root of their repository.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=257)** However, you may also find repos where the Jenkins file is located in a sub folder.
>
> **[4:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=263)** If that's the case, then you would put the path to the Jenkins file in this location.
>
> **[4:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=268)** And with all of this configuration in place, we can click save and then build a project.
>
> **[4:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=274)** I'll click save and build now.
>
> **[4:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=278)** So now Jenkins has checked out our repository locally and used the project configuration from the Jenkins file located in the repo.
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=287)** We see two stages in this pipeline, the first one where Jenkins checked out the code and the second one that's instructing us to read the logs.
>
> **[4:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=298)** I'll leave it as a challenge for you to create a project pipeline using the exercise files repo so you can see the content of the logs.
>
> **[5:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=306)** I'm sure you'll find some very helpful information there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), case, (2), this, (1), private (1)
> **CLI Commands:** git (3), find (3), make (1)
> **Exercise Files:** exercise files (5)
> **Env Vars:** scm (2), url (2)
> **UI Navigation:** scroll down (2), select the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)

#### Connect Jenkins to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=0)** - [Instructor] Now that we've seen the benefit of using a Jenkins file from a source control system, let's go over the steps needed to connect Jenkins to a GitHub repository, and then we'll use a change in the repo to trigger a build in Jenkins.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=14)** If you're following along with this demonstration, you'll need to have a Jenkins server that is publicly accessible and a GitHub account.
>
> **[0:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=23)** I'm starting here in the exercise files so I can grab a copy of the Jenkins file for this lesson.
>
> **[0:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=29)** All I need to do is click this icon to copy the Jenkins file to my clipboard.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=35)** Now, I can go to a new repository that I'll be using to integrate with Jenkins.
>
> **[0:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=42)** In the new repository, I'll add the Jenkins file by clicking Add file, Create new file, and then naming the file Jenkinsfile.
>
> **[0:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=52)** And then I'll paste in the contents from the exercise file.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=58)** And if I scroll down to the bottom of this screen, I want to commit this directly to the main branch so I'll leave that set and click Commit new file.
>
> **[1:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=68)** When I configure the job that'll be using this repo in Jenkins, I know that I'll need this repo's URL, and I can get that by clicking this green button labeled Code, making sure I'm on the HTTPS tab, and then clicking this icon to copy the URL to my clipboard.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=88)** Now I'll set up my job in Jenkins.
>
> **[1:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=92)** On my Jenkins server, I'll start by clicking New item and then entering a name.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=98)** I like to use the same name as the repo that the job is connected to.
>
> **[1:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=102)** So I'll enter connect-jenkins-to-github.
>
> **[1:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=106)** And then I'll select Pipeline and click OK.
>
> **[1:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=111)** The first thing that I'll do is select this option here for a GitHub project and then paste in the repo URL.
>
> **[2:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=120)** This step is optional.
>
> **[2:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=121)** It doesn't really do anything for our job, but on the Jenkins interface for this job, it will create a link to the repo.
>
> **[2:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=128)** And so that'll just be an easy way for us to go back and forth between Jenkins and the GitHub repo.
>
> **[2:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=134)** Next, I'll go to the Build Triggers section.
>
> **[2:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=139)** Here I need to select this option for GitHub hook trigger for GTScm polling.
>
> **[2:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=145)** This is what enables the trigger that will allow Jenkins to respond to a webhook from GitHub so this is key to having this set up in place.
>
> **[2:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=156)** Next, I'll go to the Pipeline section and I'll select Pipeline script from SCM.
>
> **[2:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=163)** Under SCM, I'll select Git.
>
> **[2:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=166)** And then for the repository URL, I'll paste in the URL.
>
> **[2:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=173)** Now, if I scroll down just a little bit more under Branch Specifier, I need to change this to main.
>
> **[3:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=182)** For the Script Path, I can leave this as the default.
>
> **[3:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=186)** And now I'll click Save and Build Now.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=190)** I should add that the project must run at least one successful build before it connects to GitHub.
>
> **[3:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=196)** This allows Jenkins to read the configuration from the repository.
>
> **[3:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=201)** And it looks like this build has been successful.
>
> **[3:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=204)** We see the checkout in the first stage and then the remaining stages of the pipeline.
>
> **[3:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=210)** Now that Jenkins is set up, we can create the webhook in GitHub so that our job gets triggered on each push to the repo.
>
> **[3:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=218)** When we configure the webhook in GitHub, we'll need the URL for our Jenkins server.
>
> **[3:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=223)** And the way that I like to get that is to right click the icon here in the upper left hand corner and select Copy Link Address.
>
> **[3:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=232)** That will copy the URL for the Jenkins server to the clipboard.
>
> **[3:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=237)** Okay, now let's go to the GitHub repo.
>
> **[4:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=241)** In the GitHub repo I'll select Settings and then Webhooks, and then Add webhook.
>
> **[4:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=248)** Under Payload URL, I'll paste in the URL for the Jenkins server.
>
> **[4:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=254)** At the end, I need to add some additional information.
>
> **[4:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=258)** I need to add github-webhook and then a trailing slash.
>
> **[4:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=265)** This is very key to having this integration in place.
>
> **[4:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=268)** It has to be exactly like this.
>
> **[4:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=270)** It has to have github-webhook and then a trailing slash.
>
> **[4:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=275)** Under Content Type, I'll select Application JSON.
>
> **[4:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=280)** And then I'll scroll down and I just want the push event, so this is fine and I'll select Add webhook.
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=287)** After adding a webhook, GitHub will ping the Jenkins server and indicate a successful connection with a green checkmark next to the webhook name.
>
> **[4:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=296)** If your webhook doesn't indicate that it connected successfully, select Edit and check your settings again.
>
> **[5:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=302)** If needed, delete the webhook and start over.
>
> **[5:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=305)** And I'm just going to refresh the screen here.
>
> **[5:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=308)** And yes, I get the green checkmark.
>
> **[5:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=310)** So my webhook has been successfully connected to my Jenkins server.
>
> **[5:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=315)** Now I want to see if I can trigger a build in Jenkins by pushing a change to this repo.
>
> **[5:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=322)** So I'll go to Code and then I'm just going to edit the README file.
>
> **[5:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=326)** I'll click the pencil here and I'll add a change.
>
> **[5:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=333)** And after adding that change, I'll scroll to the bottom and commit directly to the main branch.
>
> **[5:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=337)** I'll click Commit changes.
>
> **[5:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=340)** Okay, now, if I go back to my Jenkins server, I should see a new build.
>
> **[5:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=347)** And sure enough, a build was triggered and I can see that there was a commit indicated that the README file was updated.
>
> **[5:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=356)** So this is just a demonstration of how we can set up a GitHub repo, get the information there, and go over to Jenkins, connect the Jenkins job to GitHub, and then we have to do that extra step where we go back to GitHub and create the webhook and then any changes that we make to that repo are going to be pushed to the Jenkins server and trigger a new build.

> [!info]- Semantic Content
>
> **Tools:** github (18)
> **Env Vars:** url (9), scm (2), readme (2), https (1), json (1)
> **UI Navigation:** go to (5), scroll down (3)
> **Code Keywords:** let (2), interface (1), default. (1), this. (1), type, (1)
> **Prerequisites:** set up (4), configure (2), you'll need (1)
> **Exercise Files:** github repo (4), exercise files (1), exercise file (1)
> **CLI Commands:** git (1), make (1)
> **Documentation:** the readme (2)

#### Run scripts from the pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=0)** - [Instructor] In the previous lesson we saw how we can benefit by storing pipeline definitions as code in a version control system like GitHub.
>
> **[0:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=8)** We can also store any supporting files in scripts needed to build a project.
>
> **[0:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=15)** This can enable a pipeline to run build commands and scripts that might be far too complex to run directly in the pipeline.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=24)** Combining multiple steps into a single script also keeps the pipeline definition clear and easy to debug.
>
> **[0:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=32)** There are two build steps that Jenkins uses to run external commands.
>
> **[0:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=38)** We've already seen the sh build step, which runs commands on the build agent using the default shell.
>
> **[0:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=45)** This step is useful on agents running Linux, Unix or macOS.
>
> **[0:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=51)** The bat build step has a similar function on Windows systems.
>
> **[0:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=57)** In either case the sh or bat step would contain the command to run, or the path to a script, or a program.
>
> **[1:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=66)** Note that for scripts that are located in a repo, a relative path can be used and must match the format expected by the system running the command.
>
> **[1:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=78)** If the script or command is located outside of the workspace, where the repo was checked out, an absolute path must be used.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=88)** One other build step you might need to use with external commands is the dir, or directory build step.
>
> **[1:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=96)** The dir step takes a path as an argument.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=100)** For paths relative to the workspace where a repo was checked out, the workspace environment variable can be used to describe the path.
>
> **[1:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=109)** This tells Jenkins to change to the directory before running any steps that are contained inside the dir step.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=118)** This is useful if your pipeline needs to run commands in a specific directory.
>
> **[2:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=123)** Let's look at an example pipeline that runs a script located in the same repo as the Jenkins file.
>
> **[2:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=130)** The exercise files for this lesson include a Jenkins file and a script that calculates a Fibonacci sequence.
>
> **[2:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=139)** I've created a new repo in my personal GitHub account and added these files.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=147)** In the new repo I've placed the Jenkins file at the root of the repository.
>
> **[2:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=152)** That's the default location that Jenkins will use to look for the Jenkins file, when we check out this repo into a workspace.
>
> **[2:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=160)** I've placed the file here so we can see how the pipeline can reference scripts in different locations inside a repo.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=167)** Let's take a look at the Jenkins file.
>
> **[2:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=172)** The pipeline has four stages.
>
> **[2:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=175)** In the first stage, I'm using a chmod command to make the script executable.
>
> **[3:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=181)** This is needed for Jenkins to be able to run the script on the system where the job is running.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=187)** In the next three stages I'm using different methods to call the same script.
>
> **[3:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=193)** First using a relative path, then using the full path to the script, and finally changing into the directory where the script is located.
>
> **[3:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=205)** Let's look at the Jenkins job that uses this pipeline.
>
> **[3:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=209)** On my Jenkins server I've configured a new job to run the pipeline from the Fibonacci repo.
>
> **[3:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=219)** I've added the repository URL, and I've updated the branch specifier to use the main branch, and I've left the script path as the default, so that Jenkins will find the Jenkins file in the root of the repo.
>
> **[3:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=235)** This pipeline is parameterized, but I need to run it at least once to configure the job, so that it recognizes the parameters.
>
> **[4:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=244)** I'll click Save, and then Build Now.
>
> **[4:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=249)** Now that the job has run once, I can refresh the screen to get the option to Build with Parameters.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=257)** Let's give that a shot.
>
> **[4:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=259)** Prompt it to select the number for the Fibonacci sequence.
>
> **[4:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=263)** Let's pick a big one, I'll select 60, and then I'll click Build.
>
> **[4:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=271)** Okay, the job is finished and we can see each of the stages in the pipeline.
>
> **[4:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=276)** If we look at the output from one of the stages, we can see that indeed our script ran and the Fibonacci sequence was generated.
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=287)** I'll leave it as an exercise for you to run this job and check the output from each stage to make sure that the output is the same.
>
> **[4:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=296)** What I'd like to show you now though, is the way that Jenkins interpreted the path to the script in each of these different scenarios.
>
> **[5:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=304)** Let's close this and then click into the most recent run and then click pipeline steps.
>
> **[5:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=313)** In this view, we can see the path to these shell script for each call that was made.
>
> **[5:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=320)** And I'll scroll down a little bit here, so we can see each of these paths.
>
> **[5:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=326)** Here we can see the relative path, and a little bit further down the full path.
>
> **[5:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=332)** And if I scroll down to the very bottom here, we can see where Jenkins changed into the directory and ran the script from that location.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (1), default, (1)
> **CLI Commands:** make (2), chmod (1), find (1)
> **UI Navigation:** scroll down (2), select the (1)
> **Tools:** github (2)
> **Code Identifiers:** macos (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### Add a status badge to Markdown files
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=0)** - [Instructor] Displaying a status badge is another way to connect Jenkins with a version control system.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=7)** Status badges are dynamically generated images that communicate whether a build is passing or failing.
>
> **[0:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=15)** Typically, status badges are a place in the README file for a GitHub repository.
>
> **[0:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=22)** However, they can also be embedded in webpages or other online documents.
>
> **[0:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=28)** To enable status badges, we need to install the Embeddable Build Status plugin.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=35)** Let's install this plugin and add a status badge to the README file in the GitHub repo.
>
> **[0:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=41)** I'm logged into my Jenkins server, and I'm going to add the embeddable build status plugin, so that we can add a badge to a GitHub repo for the fibonacci job from the previous lesson.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=53)** I'll start by selecting Manage Jenkins, and then Manage Plugins.
>
> **[0:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=59)** On this screen, I'll select the Available tab, and then filter on the keyword, embed.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=70)** Okay, there's the Embeddable Build Status plugin, which is exactly what I'm looking for.
>
> **[1:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=76)** So I'll select that, and then click download now and install after restart.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=84)** On this screen, I'll click restart Jenkins when installation is complete and no jobs are running.
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=91)** This will allow Jenkins to restart, and when it comes back, we'll be ready to use the plugin.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=98)** Now that Jenkins is ready for us, I'll log in and go to the fibonacci job.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=107)** With the in Embeddable Build Status plugin installed, we get a new option on the jobs homepage, right here, so I'll select that.
>
> **[1:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=116)** This gives us a screen with different options for embedding build status icons.
>
> **[2:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=121)** If I scroll down a little bit, you can see that there are plenty of options to choose from.
>
> **[2:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=127)** We want to embed a status badge in a README file, which is a markdown document, so that's going to be the best option for us.
>
> **[2:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=138)** And for the most flexibility for viewing the icon, we want the unprotected option.
>
> **[2:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=143)** So I'm going to copy this line here, and then I'll go to my repository and paste it in my README file.
>
> **[2:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=156)** Okay, I'm in my GitHub repo now, and I want to edit the README file, So I'll click this little pencil icon here to start editing.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=167)** And I'm just going to paste the snippet just below the header here, so it's easy to see.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=174)** And now I'll commit these changes directly to the main branch.
>
> **[2:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=179)** All right, now we have this beautiful badge in our README file, showing the build status.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=185)** Fortunately, it's passing right now, so our work here is done.

> [!info]- Semantic Content
>
> **Env Vars:** readme (6)
> **Tools:** github (4)
> **UI Navigation:** go to (2), select the (1), scroll down (1)
> **Code Keywords:** let (1), for. (1), from. (1)
> **Documentation:** the readme (3)
> **Exercise Files:** github repo (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (1)

#### Challenge: Connect Jenkins to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=0)** - [Instructor] It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=7)** You're on a team developing an algorithm that calculates the value of pie.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=12)** The code for the project is being stored in a GitHub repository.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=17)** The team wants to test the latest changes to the algorithm with every push to the repo.
>
> **[0:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=23)** They also want to display the status of the most recent test directly in the repo's ReadMe file.
>
> **[0:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=30)** To solve this challenge, create a new GitHub repo and add the exercise files for this lesson.
>
> **[0:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=37)** Then, create a new pipeline project that pulls the code from the repo and uses the Jenkins file.
>
> **[0:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=46)** Finally, install the Embeddable Status plugin and update the GitHub repo to show the status of the project.
>
> **[0:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=55)** This challenge should take about 15 to 20 minutes to complete.
>
> **[0:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=59)** Once you have your solution in place, meet me in the next lesson to discuss the results.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Exercise Files:** github repo (2), exercise files (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Connect Jenkins to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=0)** - [Instructor] We've got quite a few tasks to take care of in this challenge.
>
> **[0:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=9)** And I'm starting here in GitHub where I've created a new repo and added the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=16)** I have a Jenkins file and the script which runs the algorithm to compute the value of Pi.
>
> **[0:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=23)** I'm going to start here by getting the URL for this repo so when I create a job in Jenkins I can connect it back to this repo.
>
> **[0:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=33)** So I'll click the code button here.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=36)** And on the HTTPS tab, I will click these stacked squares to copy the URL.
>
> **[0:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=41)** And now I'll go over to my Jenkins server.
>
> **[0:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=46)** In the Jenkins server, I'll click new item and I'm going to use the same name as the repo that I created.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=53)** I called it pi-challenge and then I'll click pipeline and then, okay.
>
> **[0:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=59)** All right.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=60)** This is a GitHub project.
>
> **[1:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=61)** So I'll go ahead and add the URL here in case I need to get back to the repo and then I'll scroll down to build triggers.
>
> **[1:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=68)** I need to enable GitHub hook trigger for GITScm polling.
>
> **[1:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=73)** That's going to be key to get GitHub to send a webhook to Jenkins so that it triggers a job when changes are pushed to the repo.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=82)** Then under pipeline, I'm going to select pipeline script from SCM.
>
> **[1:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=87)** This is a GitHub repo so I need to select Git.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=90)** I'll get to that in a second but for the repository URL, I copied it.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=93)** So I'll paste that in.
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=95)** This is a public repo, so I don't need any credentials.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=99)** I'm going to change the branch specifier though.
>
> **[1:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=102)** I need to change this to main to match the new branch specifier that GitHub is using for new repos.
>
> **[1:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=110)** And then for the script path, I'll leave this as the default, because my Jenkins file is indeed at the root of the repository.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=118)** Okay, I'll click save here and then build now.
>
> **[2:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=124)** I do have to build the job once before I put the next part together, because Jenkins needs to get the hook, or rather it needs to start the hook to GitHub on this side before we go back to GitHub and actually add the webhook that will trigger Jenkins.
>
> **[2:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=140)** Okay, everything looks pretty good here.
>
> **[2:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=142)** So I'm going to copy the URL for the Jenkins server.
>
> **[2:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=146)** I just like to go here and then copy link address.
>
> **[2:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=150)** And now I'm going to go back to GitHub and create the webhook.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=155)** Okay, back in my GitHub repo, I'm going to click settings and then go to webhooks and then add webhook.
>
> **[2:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=166)** You may need to confirm your access so I'm going to use my password to log in.
>
> **[2:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=172)** Yes, that is it.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=174)** So now I'll paste in the repo for my Jenkins server.
>
> **[2:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=179)** And at the end of this, I need to add github-webhook and then a trailing slash, this is key to make sure that GitHub has the correct payload URL to trigger the job in Jenkins.
>
> **[3:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=196)** If this isn't correct, if github or webhook is misspelled or if that trailing slash is missing, then this configuration will throw everything off.
>
> **[3:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=206)** So I really want to make sure that this is squared away.
>
> **[3:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=209)** And then under content type, I need to select application/json.
>
> **[3:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=214)** Scroll down here and I just want the push event.
>
> **[3:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=217)** I will keep this active and let's add this webhook.
>
> **[3:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=222)** And if everything goes well, GitHub sends a ping payload to test it out.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=227)** I've found that I have to reload this page just to make sure.
>
> **[3:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=230)** And yes, I do get the ping letting me know that the last delivery was successful.
>
> **[3:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=236)** So what I want to test now is triggering a build in Jenkins from here in GitHub.
>
> **[4:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=246)** So I'll go to code and I know there was something because I looked at the exercise files before I added them here.
>
> **[4:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=255)** Under algorithm there is a little instruction that says uncomment the following line to get a more precise calculation of pi and remove the previous echo statements.
>
> **[4:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=266)** So I'm going to do that to test my bill trigger.
>
> **[4:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=270)** I'm going to delete these first couple lines and I'll go ahead and delete this one too.
>
> **[4:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=276)** And then just uncomment this last echo.
>
> **[4:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=279)** And then for my change, I'll say improve calculation of pi.
>
> **[4:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=286)** Alrighty.
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=287)** And then I'm going to commit directly to the main branch and I'll just click commit changes.
>
> **[4:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=292)** Okay, let's go over to the Jenkins server now to see if we triggered a build.
>
> **[4:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=298)** Okay, it does indeed look like we triggered a build.
>
> **[5:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=301)** We have build number two, which when I set up the job, I triggered a build manually.
>
> **[5:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=306)** We got build number one.
>
> **[5:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=307)** I made a change in GitHub and that triggered build number two.
>
> **[5:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=311)** And then we also see that there is a commit here and this is the same message that I typed over in GitHub, "Improved calculation of pie."
>
> **[5:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=320)** So that part of the challenge is set.
>
> **[5:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=323)** We can make changes in GitHub and we'll trigger the jobs here in Jenkins.
>
> **[5:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=328)** The next part that we need to do is add a status badge to the GitHub repo's readme file.
>
> **[5:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=334)** And to do that we need to have the embeddable build status plugin in place.
>
> **[5:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=339)** So let me check that first.
>
> **[5:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=341)** I'll go to dashboard, manage Jenkins, manage plugins, and I already have this plugin installed.
>
> **[5:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=350)** I'm just going to confirm that it's there for the sake of demonstrating this.
>
> **[5:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=354)** I'm going to filter on embed, and there is the build status plugin.
>
> **[6:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=360)** It's enabled so I'm good to go to be able to get a status badge for my job.
>
> **[6:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=368)** So let's go back to the dashboard and I'm going to go to the pi-challenge job and then click embeddable build status here.
>
> **[6:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=376)** And I will scroll down to the markdown section.
>
> **[6:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=379)** I want the unprotected version of the image.
>
> **[6:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=383)** So I'll copy that and now I'm going to go back to GitHub and update my readme file with this particular snippet of code.
>
> **[6:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=394)** Okay, over in GitHub, I'm going to go to code and then readme and I will edit this file by clicking this pencil here.
>
> **[6:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=404)** And then at the top of the file, I'm going to put that snippet in there and put a carriage return after it, just so it's pretty, let's look at the preview.
>
> **[6:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=412)** That's looking wonderful.
>
> **[6:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=414)** So I'll go ahead and commit this to the main branch, which also by the way, should trigger another build on the Jenkins job.
>
> **[7:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=422)** Okay so just in review, we created a new repo.
>
> **[7:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=427)** I added the exercise files and then went over to Jenkins and created a job that connected to the new repo.
>
> **[7:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=436)** I went back to the repo and created the webhook that will trigger the Jenkins job on every push.
>
> **[7:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=443)** We confirmed that that worked.
>
> **[7:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=444)** And then the last thing that we needed to do was add this build status badge, by making sure that the embeddable build status plugin was installed.
>
> **[7:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=454)** And then going back to the job and getting the snippet that the plugin generates, so that we can update the readme file here in GitHub and everything worked all together.
>
> **[7:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=465)** Amazing.
>
> **[7:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=466)** So I believe that this challenge has been solved.

> [!info]- Semantic Content
>
> **Tools:** github (22)
> **Code Keywords:** let (5), delete (2), public (1), default, (1), this, (1)
> **Env Vars:** url (6), https (1), scm (1)
> **UI Navigation:** go to (5), scroll down (3)
> **Exercise Files:** exercise files (3), github repo (3)
> **CLI Commands:** make (4), git (1)
> **Definitions:** is a  (5)
> **Cross-References:** go back to (4)


### 5. 4. Agents and Distributed Builds

#### Distribute builds with agents
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=0)** - [Instructor] The Jenkins server, which is also referred to as the Jenkins controller provides a web interface that we can use to manage the overall configuration of our Jenkins server.
>
> **[0:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=11)** Up to this point in the course, we've been running jobs directly on the controller.
>
> **[0:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=16)** A best practice though, is to limit the jobs that are run on the controller, and only run jobs on other servers, which are referred to as nodes or agents.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=27)** This approach frees up CPU, memory, and hard drive space on the Jenkins controller so it can use those resources for management tasks like scheduling jobs.
>
> **[0:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=38)** A node is another server or system that is connected to Jenkins over a network.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=44)** Nodes provide the Jenkins controller with a compute resource for running jobs.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=50)** When Jenkins starts a job on a node, the job is managed by a process called an agent.
>
> **[0:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=57)** The agent runs the commands in the job definition, and reports the status back to the Jenkins controller.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=64)** In reality, nodes and agents are different parts of a Jenkins system but you will often hear either term used to refer to an external system where Jenkins runs jobs.
>
> **[1:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=78)** There are many types of nodes and agents that Jenkins can use as compute resources.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=84)** One of the most common node types is a secure shell or SSH node.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=90)** In this case, Jenkins connects to a server as a specific user with an SSH key.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=97)** This secure method is particularly useful if the node is not on the same network as the Jenkins controller.
>
> **[1:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=105)** A server running any operating system can be configured as an SSH node as long as it accepts SSH connections has a user and a key that Jenkins can use, and also has a recent version of Java installed.
>
> **[2:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=120)** Having Java installed on the node is essential because the agent process is a Java-based application.
>
> **[2:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=129)** Jenkins can also use nodes and agents that run as containers also known as Docker agents.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=136)** With Docker agents, the Jenkins controller runs jobs in a newly created container on each build.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=144)** This has the benefit of the job running in a fresh and isolated environment every time.
>
> **[2:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=150)** For Docker agents to work, a Docker process must be running on the node.
>
> **[2:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=157)** When we start using nodes, and agents in pipeline jobs, there are some things we have to keep in mind.
>
> **[2:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=163)** First, we have to pay more attention to the agent configuration.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=167)** So far we've been using agent any, which allows Jenkins to run the job on the first available agent.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=174)** But as we start adding nodes, and agents with different capabilities, we can use labels or keywords that identify a specific agent.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=185)** We may also need to configure a pipeline to install any tools that it needs to run.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=190)** This will give a pipeline more control over the version of a specific tool while also making sure the tool is available to use.
>
> **[3:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=200)** Another thing we need to pay attention to is checking out code when a job is associated with a repository.
>
> **[3:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=208)** When Jenkins uses a pipeline from a repository, the first checkout is on the Jenkins controller.
>
> **[3:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=214)** This allows Jenkins to read and process the Jenkins file to get the project configuration.
>
> **[3:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=221)** When Jenkins starts running the job on an agent, the code that was initially checked out won't be available.
>
> **[3:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=228)** In this case, the pipeline needs to be updated with a step to check out the code so that it can be used on the agent.
>
> **[3:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=235)** Before we get into examples of using nodes and agents, let's take a look at a tool configuration we need to have in place first.
>
> **[4:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=244)** I'm logged into my Jenkins server, and I've opened up the Manage Jenkins page.
>
> **[4:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=249)** In upcoming lessons, I'll be demonstrating how a tool can be installed on a node, and I want to show you a configuration that I have in place for Maven.
>
> **[4:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=258)** From here, I'll select Global Tool Configuration.
>
> **[4:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=262)** And if I scroll to the Maven section all the way down at the bottom, I can view the Maven installations.
>
> **[4:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=270)** You can see I've already set up an installation called Maven-3.8.4.
>
> **[4:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=277)** And it's set up to install automatically.
>
> **[4:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=281)** With this configuration in place, I'll be able to reference this tool by name and the pipelines I'll be using.
>
> **[4:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=288)** If you're following along, and using the exercise files, please set up a Maven installation using the same configuration.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), ssh (4), docker (4)
> **Prerequisites:** set up (3), install (2), configure (1)
> **Env Vars:** ssh (4), cpu (1)
> **Code Keywords:** case, (2), interface (1), let (1)
> **Definitions:** is a  (2), known as (1)
> **Versions:** 3.8.4 (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** best practice (1)

#### Add an SSH agent to Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=0)** - [Instructor] In this lesson, I'll be demonstrating how to connect to a node using SSH.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=7)** If you're following along, you'll need to have a server that can be reached from your Jenkins server via SSH, along with a user and SSH key for opening the SSH connection.
>
> **[0:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=20)** I'll be using an EC2 instance running in AWS.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=25)** For complete details on setting up a build server in AWS, please review my course, Running Jenkins on AWS.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=35)** I'm starting here on the Manage Jenkins screen.
>
> **[0:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=38)** From here I'll select Manage Nodes and Clouds.
>
> **[0:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=43)** And on this screen, I'll select New Node.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=49)** I'll name the node Linux to match the key name and then select a Permanent Agent, which is really the only option at the moment.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=60)** Selecting Create opens a dialogue where I can enter all the details that Jenkins needs to connect to this node.
>
> **[1:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=67)** For the Remote root directory I'll enter /home/ec2-user.
>
> **[1:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=76)** Jenkins will use this directory to create workspaces when jobs are run on this node.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=82)** For the Label I'll add linux.
>
> **[1:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=86)** For usage, I want to limit the jobs that get run on this node to jobs that explicitly use the Linux label, so I'll select that option.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=99)** For the Launch method I'll select Launch agents via SSH.
>
> **[1:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=104)** For the Host I need to enter the DNS name or IP address that Jenkins will use to look up my server.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=115)** For the credentials I'll select Add, and then Jenkins.
>
> **[2:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=120)** And now I can enter the details for the username and key that Jenkins will use to connect.
>
> **[2:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=127)** The kind of credential I need to add is an SSH username with a private key, so I'll select that.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=136)** For the ID and Description I'll enter linux.
>
> **[2:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=143)** And for the Username I'll enter ec2-user.
>
> **[2:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=148)** For the SSH key I have to click this button here or select this radio button here to enter the key directly, which opens up a dialogue.
>
> **[2:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=158)** Clicking Add here opens up a field where I can paste in the key.
>
> **[2:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=165)** I have the key open in an editor, so I'll go there.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=169)** In the editor I'm going to select all and then copy the entire contents of this file.
>
> **[2:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=176)** And then I'll go back to Jenkins and paste in the material.
>
> **[3:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=183)** This key doesn't have a Passphrase, so I'll just click Add.
>
> **[3:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=188)** Now I can select the key that I just added.
>
> **[3:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=193)** For the Host Key Verification Strategy I want to use the Non verifying Verification Strategy.
>
> **[3:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=199)** If we wanted, we could have Jenkins connect to this node on a schedule, but for now I want to keep this agent online as much as possible, so I'll select that.
>
> **[3:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=210)** Now I'll click Save to connect and launch the agent.
>
> **[3:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=214)** From here, I can select the agent icon and then go to Log.
>
> **[3:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=220)** This shows the output of Jenkins connecting to the server where the agent is being launched.
>
> **[3:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=226)** If there were any problems with the connection this would be the perfect place to look for error messages.
>
> **[3:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=233)** Okay, but it looks like Jenkins has connected successfully, and our agent is online.
>
> **[3:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=238)** Now that we have an agent, let's run a pipeline job that uses it.
>
> **[4:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=245)** I've created a new pipeline job that uses the Linux agent I just added.
>
> **[4:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=251)** At the top of the pipeline configuration, I've added the label keyword to identify the agent I want this job to run on.
>
> **[4:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=259)** In the source stage, I'm using a git step to check out the code for a Java application.
>
> **[4:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=265)** I fork the exercise files into my own GitHub account and I'm using credentials to access the repo.
>
> **[4:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=272)** At the time that I'm recording this, the exercise files aren't publicly available.
>
> **[4:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=277)** By the time you view this course and access these exercise files, you won't have to worry about entering credentials.
>
> **[4:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=284)** After checking out the code, the pipeline cleans things up a bit, runs some tests, and then packages the code.
>
> **[4:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=291)** Let's take this pipeline for a spin.
>
> **[4:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=293)** I'll click Save and then Build Now.
>
> **[5:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=303)** Now that the pipeline has finished, let's confirm the SSH agent was used by checking the console log.
>
> **[5:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=310)** I'll click into the latest build and then click Console Output.
>
> **[5:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=315)** At the very beginning of this output Jenkins gives us a message showing where the job was run along with the location of the workspace.
>
> **[5:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=324)** This is a great indication that our job successfully ran on the Linux agent.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (8), node (7), aws (3), git (1)
> **Env Vars:** ssh (8), aws (3), ec2 (1), dns (1)
> **Code Keywords:** let (3), private (1), this, (1)
> **UI Navigation:** select the (2), go to (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)

#### Add Docker agents to Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=0)** - [Instructor] In this lesson, I'll be demonstrating how to run a Pipeline project using a Docker agent.
>
> **[0:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=6)** If you're following along, you'll need to have a few things set up on your Jenkins server.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=12)** First, your server may need additional storage and memory resources.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=17)** As your server downloads images, it will need space to store them.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=21)** And running builds using a Docker process will require more RAM as well.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=27)** So if your Jenkins server is running out of space or seems to be running slowly, you might consider increasing the resources just a bit.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=36)** Your Jenkins server will also need to have Docker installed as a service.
>
> **[0:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=40)** For this demo, I'll be running Docker directly on the Jenkins server.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=44)** So I'll be making sure the service is available for Jenkins to use.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=49)** And finally, your Jenkins server will need to have the Docker Pipeline plugin installed.
>
> **[0:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=56)** This will allow Jenkins to use the Docker agent keyword in a pipeline definition.
>
> **[1:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=61)** I'm connected to my Jenkins server via SSH.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=64)** And I wanted to start here to confirm that Docker is installed and available for Jenkins to use.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=70)** To check that, I'll run docker --version and docker ps.
>
> **[1:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=80)** This shows me the Docker CLI is on my path and also that the Docker service is running and ready to process commands.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=88)** Now let's go to the Jenkins console.
>
> **[1:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=92)** I'm in the Jenkins console now, and I'm starting on the Manage Jenkins page.
>
> **[1:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=96)** From here, I'll go to Manage Plugins.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=99)** And then to the Installed tab.
>
> **[1:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=102)** I want to confirm that the Docker pipeline plugin is installed.
>
> **[1:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=105)** So I'll filter for the plugin name.
>
> **[1:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=109)** There's the Docker pipeline plugin.
>
> **[1:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=111)** It's already installed so my pipeline scripts will be able to use the Docker keyword for the agent configuration.
>
> **[1:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=119)** Okay, let's run a job that does exactly that.
>
> **[2:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=123)** I've used the exercise files for this lesson to create a pipeline job that runs all of its steps inside a Docker agent.
>
> **[2:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=131)** At the top of the pipeline, I'm specifying that I want to use the latest image for Maven from a publicly accessible image registry.
>
> **[2:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=141)** In previous lessons, we used a tool configuration to install a tool automatically.
>
> **[2:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=148)** But using a Docker image, my pipelines can get the latest version of the tool every time the pipeline is run.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=155)** If I wanted to keep the image version constant, I could replace the tag latest with a specific version.
>
> **[2:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=162)** At the start of the pipeline, I have a stage that checks out application code from my fork of the exercise files.
>
> **[2:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=170)** I'm using credentials because at the time I'm recording this, the exercise files are stored in a private repo.
>
> **[2:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=177)** By the time you access the exercise files.
>
> **[3:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=180)** you won't have to enter credentials.
>
> **[3:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=182)** In the stages following the checkout, I'm running stages that call Maven to clean, test, and package the application.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=190)** Let's run this pipeline, I'll click Save and then Build Now.
>
> **[3:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=198)** now that the build has completed, let's look at the output.
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=202)** I'll click into the latest build and then click Console output.
>
> **[3:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=207)** The log shows that indeed we are running on the Jenkins server.
>
> **[3:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=211)** But further down, we can see the Docker commands that Jenkins is using to start a process with the container image.
>
> **[3:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=219)** After that, the following commands are run inside the container.
>
> **[3:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=223)** And if we go to the end of the log, there are two more Docker commands where Jenkins is stopping and removing the container.
>
> **[3:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=234)** So even though Jenkins may reuse the image for future runs of this pipeline, each session will start with a new container which will be removed when the job completes.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (18), ssh (1)
> **Code Keywords:** let (4), require (1), finally, (1), this, (1), private (1)
> **Exercise Files:** exercise files (4)
> **Env Vars:** ram (1), ssh (1), cli (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** you'll need (1), set up (1), install (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Improve a Docker agent pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=0)** - [Instructor] It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=7)** You're an open source developer contributing to the Hugo Project.
>
> **[0:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=11)** A static site generator developed in Golang.
>
> **[0:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=15)** You're using a Jenkins pipeline with a Docker agent to validate your changes.
>
> **[0:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=20)** However, you're finding that your pipeline is taking a long time in the build stage.
>
> **[0:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=26)** You do some research and find that your build is downloading dependencies on each run of the pipeline.
>
> **[0:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=33)** After discussing the issue with a team member, you find that you can speed up your builds by moving the dependency cache into the project workspace.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=44)** To solve this challenge, set up a Jenkins server that can use Docker agents in a pipeline.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=50)** You'll need to have Docker installed on the Jenkins server.
>
> **[0:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=55)** You'll also need to install the Docker Pipeline plugin.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=60)** Use the exercise files for this lesson to create the pipeline job that builds and tests the Hugo application.
>
> **[1:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=67)** Run the pipeline once to see how long a build takes without using a persistent cache.
>
> **[1:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=74)** Then update the pipeline to use a cache located in the project workspace.
>
> **[1:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=80)** Run the pipeline again as needed and compare the build times.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=84)** This challenge should take about 15 to 20 minutes to complete.
>
> **[1:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=89)** After you improve the pipeline, join me in the next video for the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (4), find (2)
> **Prerequisites:** set up (1), you'll need (1), install (1)
> **Code Keywords:** static (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Improve a Docker agent pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=5)** - [Instructor] In this challenge, we're trying to speed up a pipeline that uses a Docker agent.
>
> **[0:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=10)** I'm starting out by connecting to my Jenkins server via SSH to confirm that Docker is installed.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=17)** I'll check that by running Docker -- version and then Docker PS.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=25)** These two commands run fine which lets me know that the Docker service is running and ready to process commands.
>
> **[0:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=32)** Next, I need to make sure my Jenkins server has the Docker pipeline plugin installed.
>
> **[0:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=40)** I'm in the Jenkins web console now on the plugin management page.
>
> **[0:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=45)** I filtered for the Docker pipeline plugin on the installed tab and, sure enough, I have the plugin installed and ready to go.
>
> **[0:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=54)** Now let's go to the pipeline job that uses a go lang Docker agent in a pipeline.
>
> **[1:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=61)** I've used the exercise files to create a pipeline that builds the hugo static site generator.
>
> **[1:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=67)** The pipeline uses a golang image from a public repo for the Docker agent.
>
> **[1:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=73)** Under that, the pipeline sets up an environment variable telling the go compiler what directory to use for the cache.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=82)** And the stages in the pipeline download the code, build the application, and then run a simple test with the compiled application.
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=91)** Let's see the results of running this pipeline out of the box.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=97)** I've run the job once.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=99)** And the pipeline is clearly spending the most time in the build stage.
>
> **[1:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=103)** On my system, it takes almost four minutes in the build stage.
>
> **[1:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=108)** This might be even longer on systems with a slower CPU, less RAM, or a slower network connection.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=115)** Let's take a look at the logs in the stage.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=118)** Basically, the go compiler is having to download the dependencies to compile the application on each run.
>
> **[2:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=126)** This is because the current cache uses the /temp directory located inside the container.
>
> **[2:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=134)** That means it'll get created and then destroyed on each run, but Jenkins mounts the workspace as a volume in the container, so we can speed up the build step by moving the cache into the workspace.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=147)** That way, we can reuse the cache after it gets created.
>
> **[2:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=151)** That should speed things up quite a bit.
>
> **[2:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=153)** Let's make that change.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=155)** I'll hit escape to close the logs here and then click configure.
>
> **[2:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=160)** Then I'll go to the pipeline stage and I will use the suggestion here in the tip to copy this path.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=169)** And I've copied it to my clipboard.
>
> **[2:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=170)** And now I'm just going to replace /temp with that value.
>
> **[2:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=176)** With this in place, the cache will be located in the workspace and it should get reused.
>
> **[3:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=182)** However, before we see any speed up, we have to build the cash.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=187)** So I'll have to run the build at least once before we see any speed up.
>
> **[3:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=192)** So let's do that now.
>
> **[3:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=193)** I'll click save and then build now.
>
> **[3:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=198)** Let's wait for this build to complete before running the pipeline again and comparing the build times.
>
> **[3:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=209)** That build finished successfully.
>
> **[3:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=211)** It took about the same amount of time as the last run, but this time it should have created a cache that the next build can use.
>
> **[3:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=219)** I'll run it one more time.
>
> **[3:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=226)** I think we can see the benefit now.
>
> **[3:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=229)** On the last pipeline run, the build stage only took 17 seconds.
>
> **[3:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=234)** That's a tremendous speed up.
>
> **[3:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=237)** Let's review the steps needed to solve this challenge.
>
> **[4:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=240)** First, we made sure the Jenkins server had access to the Docker service.
>
> **[4:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=246)** Then we made sure that the Docker pipeline plugin was installed and ready to use.
>
> **[4:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=252)** After that, we set up the pipeline job to build the hugo application.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=257)** We confirmed the initial build time and then updated the pipeline to use a cache located in the workspace.
>
> **[4:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=264)** Next, we ran another build to create the cache.
>
> **[4:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=268)** Finally, we were able to see the benefit of caching by running one last build that ran much faster than the previous pipelines.
>
> **[4:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=277)** With that, I think this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (11), make (2), ssh (1)
> **Code Keywords:** let (7), static (1), public (1), finally, (1)
> **Env Vars:** ssh (1), cpu (1), ram (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Prerequisites:** configure (1), set up (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Artifacts and Testing

#### Artifacts and fingerprinting
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=0)** - [Narrator] When a Jenkins job creates an object that needs to be saved, we refer to that object as an artifact.
>
> **[0:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=8)** Artifacts can be compiled binaries like Docker images or ZIP files.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=14)** Or an artifact might be a text file like a report or some sort of document.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=21)** Jenkins provides several ways to manage artifacts.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=25)** The core function archiveArtifacts, gives us a built step for identifying the files we want to save during or after a build.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=36)** archiveArtifacts is often placed in the post section of a pipeline.
>
> **[0:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=42)** The post block runs after all sections of a pipeline, so any steps inside the block are run after other operations have finished.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=53)** If we're developing a job that needs to access an artifact created in another job, we can use build steps provided by the Copy Artifact plugin.
>
> **[1:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=63)** This plugin provides a build step for pulling artifacts from one job into another.
>
> **[1:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=70)** When we use the Copy Artifact's build step, security comes into play.
>
> **[1:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=75)** The job that creates the artifact must include an option that gives another job explicit permission to copy the artifact.
>
> **[1:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=83)** But this leads to another problem.
>
> **[1:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=86)** How can we know what artifacts have been created?
>
> **[1:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=89)** And what jobs have accessed the artifact?
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=93)** We can solve this problem with fingerprinting.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=97)** When an artifact is created or used, Jenkins generates an MD5 checksum using the artifact.
>
> **[1:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=105)** This checksum and the job where it was created are tracked in an internal database.
>
> **[1:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=112)** This becomes the file's fingerprint.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=115)** Jenkins can then use the fingerprint to determine what jobs either created or accessed a file.
>
> **[2:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=124)** Let's see how we can create an artifact in one job, read it from another job and track it using its fingerprint.
>
> **[2:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=134)** I'm logged into my Jenkins server and I'm starting here on the installed plugins page.
>
> **[2:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=139)** I wanted to show you that I have the Copy Artifacts plugin installed.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=144)** So I can use it with any jobs that need to access the Copy Artifacts build step.
>
> **[2:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=151)** If you're following along with this demonstration, just be sure that you have the Copy Artifacts plugin installed or the pipelines from the exercise files won't be able to finish successfully.
>
> **[2:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=164)** I've also created two jobs using the exercise files.
>
> **[2:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=168)** One job creates an artifact and the other job copies the artifact in.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=174)** Let's look at the artifact creation first.
>
> **[2:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=178)** In the options section of the pipeline, we're giving explicit permission to the read-artifact job so that it can copy any artifacts created by this job.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=190)** On line nine, we have a build step that creates a simple text report.
>
> **[3:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=195)** And at the end of the pipeline, we have a post section.
>
> **[3:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=199)** This section will run after all other steps and stages in the pipeline have finished.
>
> **[3:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=205)** This is the perfect place to put our archive-artifact's build step.
>
> **[3:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=211)** In this case, we're archiving the file named report.txt.
>
> **[3:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=216)** And we're also creating a fingerprint for the file.
>
> **[3:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=220)** Now let's look at the job that reads this artifact.
>
> **[3:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=224)** In the read-artifact's job, we're using the CopyArtifacts build step to copy in the file named report.txt from the create-artifact job.
>
> **[3:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=235)** And even though we're not creating an artifact here, we're still going to fingerprint the file, so Jenkins can track where the artifact is being used.
>
> **[4:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=247)** I've already run both of these jobs a few times, so let's take a look at the output.
>
> **[4:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=253)** On the copy page for the create-artifact job, we can tell that an artifact was created by this little icon here.
>
> **[4:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=261)** And if I hover my mouse next to this icon, we get an interface where we can download the file or view the contents.
>
> **[4:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=269)** To see the fingerprints for the archive file, we would click into this build.
>
> **[4:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=275)** And then click See Fingerprints.
>
> **[4:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=279)** If there were multiple artifacts created in this build, then we would see all of them listed here.
>
> **[4:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=286)** To see the fingerprints, we would just click the file that we want to check.
>
> **[4:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=289)** So I'll click report.txt.
>
> **[4:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=292)** And on the fingerprints screen, we can see the MD5 value for the file and we get a list of all the places where this artifact has been used.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1), case, (1), interface (1)
> **File Paths:** report.txt (3)
> **Env Vars:** md5 (2), zip (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Code Identifiers:** archiveartifacts (2)
> **CLI Commands:** docker (1)
> **Speakers:** - [narrator] (1)

#### Publish test results and code coverage reports
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=0)** - [Instructor] Testing is one of the most important parts of the continuous integration pipeline.
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=5)** During the test phase, development teams can find bugs in their code and fix them well before they reach a production environment.
>
> **[0:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=14)** There are hundreds of tools that developers can use to test their code, but fortunately, many of these tools share common formats for generating reports.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=24)** JUnit reports are XML documents that describe the results of a test.
>
> **[0:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=30)** The JUnit format was originally developed for Java programs but many other languages have adopted this reporting format.
>
> **[0:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=39)** This makes JUnit the standard for creating test reports.
>
> **[0:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=45)** The JUnit plugin gives Jenkins capabilities to collect test reports, publish reports as graphs and track trends in test results.
>
> **[0:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=57)** To determine the effectiveness of a test, developers often use a technique called code coverage.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=64)** Code coverage tracks the lines of code that are accessed during a test.
>
> **[1:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=69)** If more code is exercised during testing, bugs are more likely to be discovered.
>
> **[1:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=76)** Two popular code coverage formats are JaCoCo and Cobertura.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=82)** These code coverage libraries have roots in the Java community and are very popular for testing Java applications.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=90)** However, due to their popularity, tools supporting other programming languages also generate code coverage reports using JaCoCo and Cobertura formats.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=100)** Jenkins uses the code coverage API plugin to collect and publish multiple code coverage report formats including JaCoCo and Cobertura.
>
> **[1:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=112)** Let's use Jenkins to publish test results and code coverage reports for a Python project.
>
> **[1:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=119)** The project uses a pipeline with five stages.
>
> **[2:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=123)** The first two stages set up the project by installing the dependencies and linting the code for syntax errors.
>
> **[2:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=130)** The next stage runs tests and generates a report in JUnit format.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=136)** The stage also produces a code coverage report in Cobertura format.
>
> **[2:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=142)** The last two stages in the pipeline build and deploy the application.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=147)** If you're following along with the exercise files for this lesson, there are a few things that you'll need to know in advance.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=155)** I'll be demonstrating this project with Jenkins on a Ubuntu server.
>
> **[2:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=160)** If you're using a Ubuntu server, it will need to have Python3 installed, as well as the virtual environment library for Python3.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=169)** The project will work with Jenkins on a Windows server, but you'll need to make sure you have Python installed and update the Jenkins file to use Paths to Python and PIP so they work with your installation.
>
> **[3:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=183)** On either operating system, you also need to have Git installed for accessing the code from GitHub.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=190)** Ubuntu systems should already have Git installed but for Windows, you'll need to install it manually.
>
> **[3:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=197)** Your Jenkins server will also need to have the JUnit and code coverage plugins installed.
>
> **[3:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=203)** Okay, let's get on with this demonstration.
>
> **[3:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=208)** I'm connected to my Jenkins server via SSH and I'm currently in the home directory for my account.
>
> **[3:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=214)** Since the exercise files for this lesson require Python3, I want to make sure that my system has everything in place.
>
> **[3:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=221)** I can check for Python3 by running Python3 --version.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=227)** This returns the version of Python3 that's presently available on my path.
>
> **[3:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=232)** The project also creates a virtual environment, so I want to make sure my system can do that as well.
>
> **[3:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=239)** To test that, I'll run Python3 -M VENV test.
>
> **[4:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=247)** That creates a virtual environment here in the directory that I'm currently in and I can test the virtual environment by typing .test/bin/activate.
>
> **[4:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=260)** That changes my prompt to the name of the virtual environment, which lets me know that the virtual environment was successfully created and is ready to go.
>
> **[4:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=269)** Now let's go to the Jenkins web interface and use the project from the exercise files.
>
> **[4:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=274)** I'm back in the Jenkins web interface now, and I want to make sure that the plugins needed for test reporting and code coverage reporting are installed and available for my project.
>
> **[4:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=286)** To do that, I'm here on the manage Jenkins managed plugin menu on the installed plugins tab and first let's look for JUnit and in the search bar I'll type JUnit and that's the first one that pops up here.
>
> **[5:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=300)** So the JUnit plugin is available.
>
> **[5:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=302)** Let's also check for the code coverage plugin.
>
> **[5:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=305)** So I'll clear that out and type in code cov and there is the Code Coverage API plugin.
>
> **[5:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=313)** So both of the plugin that I need for this project are installed and ready to go.
>
> **[5:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=318)** Let's go to the published report job, which I already have set up.
>
> **[5:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=323)** I'll go to dashboard and then publish reports and I'll click configure on this screen so we can see the project's configuration and I'll go directly to the pipeline section.
>
> **[5:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=336)** In the pipeline section, I'm pulling the pipeline from my fork of the exercise files repository, along with my credentials.
>
> **[5:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=345)** At the time that I'm recording this, the repository is not publicly available.
>
> **[5:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=349)** By the time you view this course and access the exercise files, you won't have to worry about entering credentials.
>
> **[5:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=357)** Under the branches to build section, I changed the branch specifier to main.
>
> **[6:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=363)** The exercise files use the main branch, so this needs to be changed to match that configuration and then under the script path, I've updated the location to match the location of the Jenkins file for this project.
>
> **[6:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=378)** These settings need to be in place for Jenkins to connect to the Git repository for this demonstration.
>
> **[6:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=384)** If you're following along and run into any errors, be sure to check the settings in this section.
>
> **[6:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=390)** Okay, let's go back to the project page.
>
> **[6:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=394)** The job hasn't been run yet, so this page is pretty blank.
>
> **[6:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=398)** Let me run the job a few times to generate some reports.
>
> **[6:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=406)** I've run the job a couple times now and refreshed the page.
>
> **[6:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=410)** On the right of the screen, there are two graphs, one showing the test results trend and another showing the code coverage trend.
>
> **[6:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=419)** We can get more information on these reports by clicking the coverage report on the left.
>
> **[7:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=427)** This screen gives us much more detail on the code coverage generated by the tests in this project.
>
> **[7:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=434)** At the top of the screen, we get an overview of the coverage and on the bottom of the screen, we get a little more detail on each package.
>
> **[7:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=443)** If we click the file coverage tab, we can see detailed coverage for each file in the project.
>
> **[7:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=452)** Clicking a file under this section shows a report specifically for this file with an overview of the coverage, along with a source code view that shows every line that was accessed during the tests, and in the left menu here, there's also a link to see test results.
>
> **[7:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=473)** This report shows us all the tests that were run and any failures, skips or passes that the tests encountered and in a similar fashion to the code coverage reports, if we click into a specific package and then keep clicking down, we can see the tests that were run and the results of the test.
>
> **[8:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=495)** In the next lesson, let's discuss how we can use test results to control the pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** python3 (7), make (4), python (3), git (3), find (1)
> **Code Keywords:** let (9), interface (2), require (1), this, (1)
> **Prerequisites:** you'll need (3), set up (2), make sure you have (1), install (1), configure (1)
> **Exercise Files:** exercise files (6), source code (1)
> **Env Vars:** api (2), xml (1), pip (1), ssh (1), venv (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** github (1)

#### Use test results to stop a build
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=0)** - [Instructor] In the previous lesson, we saw how Jenkins can publish test reports.
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=5)** I also wanted to give a demonstration on how a test failure affects the pipeline stages that follow it.
>
> **[0:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=11)** I'm logged into my Jenkins server, and I've set up a project that will build a pipeline similar to the one that we saw in the previous lesson.
>
> **[0:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=20)** But this time the code has been modified to include a test that will always fail.
>
> **[0:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=26)** We'll use that test to see how Jenkins reacts to a failure in the pipeline.
>
> **[0:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=32)** Let's take a look at this configuration.
>
> **[0:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=37)** I'm using the exercise files for this lesson, at least I'm using my fork of the exercise files for this lesson.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=44)** At the time that I'm recording this, credentials are required to access the exercise files.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=50)** By the time that you use this exercise file, you won't need to even worry about credentials.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=58)** Under the branch specifier, I've changed the default from master to main, which is the branch that the exercise files use.
>
> **[1:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=67)** And under script path, I've updated the path to the Jenkins file to match the path in the exercise files.
>
> **[1:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=75)** Okay, let's run this pipeline.
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=77)** I'll click save and then build.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=84)** Now that the pipeline has run, we can see the test stage has failed, which is exactly what we expected.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=93)** We can also see that the build, and deploy stages indicate the failure as well.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=99)** Because the test stage failed, the build and deploy stages were skipped.
>
> **[1:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=105)** In addition, the post action stage shows this yellow color, which indicates that the build is unstable.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=113)** An unstable build means that somewhere along the way there was a failure or some other condition that prevented the build from finishing successfully.
>
> **[2:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=122)** Let's look at the test reports for this build.
>
> **[2:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=125)** I'll click into the build, and then click test results.
>
> **[2:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=131)** The test results clearly show that we have a test that failed.
>
> **[2:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=137)** And if we follow the link for that test, we can see more details including the error message, and a stack trace with a specific test that failed.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (5), exercise file (1)
> **Code Keywords:** let (3), this, (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create artifacts and reports
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=0)** - [Instructor] It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=7)** You're on a development team, working on a new Java application.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=12)** You've been assigned to develop a Jenkins pipeline that tests the application code and creates a report using the JUnit format.
>
> **[0:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=21)** If the tests pass, the pipeline should compile the code into a Java archive and store the jar file as an artifact.
>
> **[0:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=30)** The project needs to have Maven installed to run commands in each stage of the pipeline.
>
> **[0:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=36)** Start this challenge by setting up a global tool configuration for Maven.
>
> **[0:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=42)** The project also needs to use the JUnit plugin so make sure your Jenkins server has that installed as well.
>
> **[0:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=50)** Once you have Maven configured, update the pipeline template to use the Maven configuration then update the pipeline stages to run shell scripts that call Maven to test and package the application.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=64)** And finally, you'll need to add steps at the end of the pipeline to collect test results and store the jar file as an artifact.
>
> **[1:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=72)** The steps should always run and should not fail to build if artifacts or test results are not found.
>
> **[1:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=80)** The details for this challenge are available in the exercise files along with a template for the pipeline and all supporting code.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=88)** Also, please use the pipeline syntax tool to generate snippets for your pipeline.
>
> **[1:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=94)** In particular, you'll want to use the syntax tool to generate snippets for the Maven tool configuration, collecting the test results, and archiving the artifacts.
>
> **[1:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=105)** This challenge should take about 15 to 20 minutes to complete.
>
> **[1:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=110)** Work through the challenge, and then meet me in the next video to go over the solution.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2), exercise files (1)
> **Code Keywords:** pass (1), finally, (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create artifacts and reports
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=5)** - We've got a lot to cover in this challenge, so I'm just going to jump right in.
>
> **[0:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=10)** I'm starting here on the Manage Jenkins homepage because there are two things that we need to have in place before we get started.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=17)** First, I need a global tool configuration for Maven, and second, I need to make sure the JUnit plugin is installed.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=25)** Starting with Maven, I'll click global tool configuration and then scroll down to the bottom of this page and click manage installations.
>
> **[0:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=34)** I already have a Maven installation in place named Maven 384.
>
> **[0:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=39)** So this is the one that I'll be referring to in my pipeline.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=44)** I'll click save to get back to manage Jenkins and then go to manage plugins.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=49)** Here I want to look on the installed tab and I'm going to filter for JUnit.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=53)** And there's the plugin I'm looking for, the JUnit plugin.
>
> **[0:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=59)** With this in place, I'll be able to use a JUnit step to collect any test reports generated by the pipeline.
>
> **[1:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=66)** Okay, let's look at this pipeline.
>
> **[1:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=69)** I'm going to teleport there by typing in Java pipeline in the search bar and going straight to the job that I already have in place.
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=77)** And here on the homepage, I'll click configure and then go straight to the pipeline section.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=84)** I forked the exercise files into my own GitHub account and I'm referencing that URL here.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=90)** I also need to add credentials because at the time that I'm recording this, the exercise files are private.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=97)** When you access the exercise files for this lesson, you won't have to worry about entering credentials.
>
> **[1:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=103)** I want to run this pipeline before I make any other changes.
>
> **[1:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=107)** So I'll save and build the pipeline, clicking save, and then build now.
>
> **[1:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=115)** The first build was successful.
>
> **[1:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=117)** So now I'll modify the pipeline template to start solving the challenge.
>
> **[2:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=121)** And I'll start by adding a global tool configuration for Maven.
>
> **[2:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=125)** So let's go to configure and then I'll go to the pipeline section.
>
> **[2:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=129)** But to add this tool configuration I want to use the pipeline syntax generator.
>
> **[2:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=134)** So I'll click pipeline syntax.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=136)** And here I want to go to the declarative directive generator.
>
> **[2:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=141)** I'm going to select tools.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=144)** I'm going to add a tool and I'm going to add Maven.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=147)** I only have one Maven installation in place so that one's already there selected for me.
>
> **[2:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=152)** And all I need to do is click generate declarative directive.
>
> **[2:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=157)** And there's my tool configuration.
>
> **[2:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=158)** I'm going to copy this and then go back to my pipeline.
>
> **[2:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=163)** And there's a handy tip here that says, add a tool configuration here.
>
> **[2:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=167)** That's exactly where I'm going to place this and I'm going to clean it up so it's a little bit tidy.
>
> **[2:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=174)** And now that I've added a tool configuration, there were some other tips in the template that said to uncomment the shell steps that call Maven.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=185)** So I'll uncomment that one in the clean stage.
>
> **[3:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=188)** Here is Maven test and the test stage.
>
> **[3:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=191)** And then here is Maven package and the package stage.
>
> **[3:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=194)** And I think that's the last one.
>
> **[3:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=197)** That's the last one.
>
> **[3:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=198)** So I will save and then click build now.
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=202)** Everything's looking pretty good so far.
>
> **[3:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=204)** I will say that if you build this and it takes a long time the first time that you run this, it's probably because the pipeline is installing Maven.
>
> **[3:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=214)** So if it's running for a long time and you haven't done anything with Maven yet, just give it a second for the pipeline to finish, because like I said, it's probably taking a minute to do that Maven installation.
>
> **[3:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=226)** That went well.
>
> **[3:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=227)** Let's go on to the next step which is collecting the reports and the artifacts.
>
> **[3:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=234)** So I'll go into configure the job, go back to the pipeline configuration, and I'm going to use the pipeline syntax generator again.
>
> **[4:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=242)** I already have that open in another tab.
>
> **[4:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=244)** So I'm just going to go to this tab.
>
> **[4:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=247)** This time, I want the snippet generator and I want to select there is a JUnit step.
>
> **[4:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=255)** Yes, there it is.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=257)** And here I need to specify where the XML files are located.
>
> **[4:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=265)** Referencing the exercise files, the test report should be located here with **/TEST-com.learningjenkins.apptest.XML.
>
> **[4:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=284)** That's a lot of typing, I probably could have cut and paste that into this field but I just typed it in for the sake of getting it done.
>
> **[4:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=291)** We also need to select do not fail to build on empty test results.
>
> **[4:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=297)** So that looks good.
>
> **[4:59](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=299)** And let's see, I'll just leave that.
>
> **[5:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=302)** I think I'll just leave everything else as is and generate this pipeline script.
>
> **[5:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=307)** And then I will copy this and go back to the job.
>
> **[5:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=311)** Let's find, I think there's a tip that also says where we should put that reporting.
>
> **[5:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=317)** Yes, right here where it says add JUnit collection here.
>
> **[5:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=320)** I'll just replace that comment with that one and then clean it up a little bit.
>
> **[5:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=326)** We also need to archive the artifact.
>
> **[5:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=328)** So let's go back to the pipeline syntax generator and under build steps, we'll pick the very first one.
>
> **[5:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=335)** This one's all too familiar, or at least close to the top, archive artifacts.
>
> **[5:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=341)** Again, referencing the exercise files, the files to archive are **/hello-1.0-SNAPSHOT.jar.
>
> **[5:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=355)** That looks good.
>
> **[5:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=356)** And on this one to get these other specifications that we need, as far as not failing the build, we have to click advanced.
>
> **[6:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=364)** We don't want to fail the build if archiving returns nothing.
>
> **[6:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=367)** And I'll go ahead and say archive artifacts only if the build is successful.
>
> **[6:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=370)** And I'll even add a fingerprint since we get that option here.
>
> **[6:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=373)** And let's generate that pipeline script.
>
> **[6:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=377)** I will copy this and then go back to the job.
>
> **[6:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=380)** And we have another pointer here that says add artifact archiving.
>
> **[6:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=384)** So I'll highlight that and paste that in.
>
> **[6:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=389)** And again, just clean this up a little bit so we can see everything.
>
> **[6:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=392)** Let's see, follow some links false, only if successful, true.
>
> **[6:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=398)** That looks good.
>
> **[6:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=400)** Let me save this and build now.
>
> **[6:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=406)** The build has finished and I can tell right away that archiving probably worked because we have this little icon here and the build produced the following one artifact.
>
> **[6:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=416)** So that part worked.
>
> **[6:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=418)** Let's see if our test reporting worked.
>
> **[7:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=420)** I'm going to reload the page and there are our test reports.
>
> **[7:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=425)** So I only have one bullet here because I've only ran the build once.
>
> **[7:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=429)** But if I ran it a couple more times then I would see more test results in the trend here.
>
> **[7:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=436)** No, I think that is it.
>
> **[7:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=439)** So let's review the solution to this challenge.
>
> **[7:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=442)** We started by adding a global tool configuration for Maven and we needed that so we could run the Maven build steps in the pipeline.
>
> **[7:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=449)** So we uncommented those calls, those shell steps that were already part of the pipeline.
>
> **[7:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=455)** Then we added to the pipeline using the pipeline syntax generator.
>
> **[7:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=460)** We added test result collection and we added artifact archiving.
>
> **[7:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=465)** So with all of that in place, I believe this challenge has been successfully solved.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), for, (1), private (1)
> **Exercise Files:** exercise files (5), template (2)
> **UI Navigation:** go to (5), scroll down (1)
> **Env Vars:** xml (2), url (1), test (1), snapshot (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** configure (3)
> **File Paths:** test-com.learningjenkins.apptest.xml (1)


### 7. 6. Securing Jenkins

#### Secure Jenkins with user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=0)** - [Instructor] Jenkins does a pretty good job of providing security out of the box.
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=5)** When a Jenkins server is first launched, it's locked by default, and you need to have the initial admin password to log in.
>
> **[0:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=13)** This is useful to prevent anyone from just coming across a newly installed Jenkins and taking control of it.
>
> **[0:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=20)** Jenkins also allows you to create user accounts with usernames and passwords.
>
> **[0:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=26)** This is a common approach for setting up boundaries for who can log in.
>
> **[0:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=31)** But even with these controls in place, there's still a bit of configuration that can be done to make sure that Jenkins is set up for your specific use case.
>
> **[0:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=41)** Jenkins can be configured to use different security realms.
>
> **[0:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=45)** Using a very brief explanation, a security realm controls how a person is authenticated to access a resource.
>
> **[0:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=54)** The default realm is a user database included in the Jenkins server.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=60)** This is where Jenkins creates the first users with permission to access the system when the service is installed.
>
> **[1:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=67)** Jenkins can also delegate authorization to other realms, including Lightweight Directory Access Protocol services, also known as LDAP, or systems that use Unix-style users and groups.
>
> **[1:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=82)** For this discussion, we'll be focusing on the built-in authentication provided by the Jenkins server.
>
> **[1:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=89)** Along with managing user authentication, we still need to manage the permissions users have when they interact with the Jenkins service.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=98)** In other words, we need to configure authorization.
>
> **[1:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=101)** When Jenkins first starts, any authenticated user can do anything.
>
> **[1:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=106)** This essentially means that any user that can log in is an administrator.
>
> **[1:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=112)** This might be okay for one or two users on a personal Jenkins system, but if multiple users or teams are working with a shared system, it's a best practice to have one or two administrative users and then delegate permissions to all other users based on how they need to interact with the Jenkins server.
>
> **[2:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=135)** Jenkins allows this to be configured fairly easily with matrix-based security.
>
> **[2:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=143)** To configure user permissions, most Jenkins installations will use the Matrix Authorization Strategy plugin.
>
> **[2:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=151)** This is one of the suggested plugins that gets installed in most Jenkins installations.
>
> **[2:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=157)** Using a matrix strategy, permissions are assigned to each user individually.
>
> **[2:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=164)** In addition, each user is given specific permission to perform certain actions.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=169)** In a moment, we'll go over an example showing how the matrix is used to assign permissions.
>
> **[2:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=176)** Before we get into an example, I wanted to offer a few words of caution.
>
> **[3:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=181)** When setting up matrix-based security, please be sure to assign administrative permissions to your own account.
>
> **[3:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=189)** Also, if you created an admin user, assign admin permissions to that user as well.
>
> **[3:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=197)** If you miss assigning your user admin permissions, you run the risk of locking yourself out of your Jenkins server.
>
> **[3:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=205)** It's nothing to be ashamed of.
>
> **[3:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=207)** It's happened to plenty of people, myself included.
>
> **[3:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=211)** Fortunately, there are instructions for disabling access control if you find yourself locked out.
>
> **[3:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=219)** I just wanted to offer this word of caution to be sure to have your permissions in place when implementing matrix-based security.
>
> **[3:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=228)** With that public service announcement, let's go through an example.
>
> **[3:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=232)** I'm logged into my Jenkins server, and I'm going to add matrix-based security, but first, I'll start by adding another user.
>
> **[4:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=240)** From the Manage Jenkins screen, I'll start by selecting Manage Users.
>
> **[4:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=246)** From here, I can add a new user by clicking Create User.
>
> **[4:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=252)** On this screen, I can enter a username, password, and any other details associated with this user, like name and email address.
>
> **[4:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=262)** Once I have a user in place, I can go back to Manage Jenkins.
>
> **[4:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=267)** And then I'll click Configure Global Security.
>
> **[4:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=273)** On this screen, we can see the default security realm and authorization.
>
> **[4:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=278)** Under Authorization, the default is still selected, which allows logged in users to do anything.
>
> **[4:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=285)** I'll scroll down a little bit, so we can see the option to select matrix-based security.
>
> **[4:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=292)** Selecting that exposes this interface which allows me to add users and then select exact permissions for that user.
>
> **[5:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=301)** But before I do anything else, I need to give my account administrative permissions.
>
> **[5:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=307)** I'll select Add user, and then enter my username, click OK.
>
> **[5:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=314)** And I'll scroll all the way over here to the right and select this button here, which gives all permissions to my user.
>
> **[5:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=323)** Now let's add permissions for Nicole's account.
>
> **[5:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=326)** I'll click Add user and Nicole's name and click OK.
>
> **[5:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=331)** Now I can select the specific permissions that I want Nicole to have.
>
> **[5:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=336)** I'll start by giving them overall read permission.
>
> **[5:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=340)** This will allow them to at least interact with the Jenkins interface.
>
> **[5:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=345)** Without this permission, they won't be able to do anything, even if they got logged in.
>
> **[5:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=350)** Now I can start giving them additional permissions.
>
> **[5:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=353)** I won't add any permissions for credentials or agents, but I do want them to be able to build, cancel, and read jobs along with their workspaces, so I'll select those check boxes under Job.
>
> **[6:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=373)** Once I have all of these permissions in place, I'll click Save to apply the changes.
>
> **[6:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=378)** Okay, now let me log out and log in as Nicole.
>
> **[6:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=383)** I'll click log out, and on the screen here, instead of picking my account, I'll enter Nicole and her password and click Sign in.
>
> **[6:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=393)** You can see that the interface has changed a little bit from when I was logged in as an administrative user.
>
> **[6:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=400)** The links to the Jenkins management menu on the left aren't visible.
>
> **[6:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=404)** Okay, let's open a job.
>
> **[6:48](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=408)** On this screen, I can trigger a job and interact with it, but I can't create it or delete it.
>
> **[6:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=415)** So this is just an example of how we can switch from the default of allowing all users to essentially have administrator permissions to granting users very specific permissions in the Jenkins interface.
>
> **[7:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=428)** For more information on securing Jenkins, please review the exercise files for this lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (4), default, (1), case. (1), public (1)
> **Definitions:** is a  (2), known as (1), in other words (1), means that (1), is an  (1)
> **Prerequisites:** configure (3), you need to have (1), set up (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Warnings:** caution (2)
> **Env Vars:** ldap (1)
> **Cross-References:** go back to (1)

#### Configure project-based permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=0)** - [Instructor] In the previous lesson, we discussed how to set up a matrix-based authorization strategy.
>
> **[0:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=6)** With this approach, permissions are applied globally.
>
> **[0:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=9)** So the permissions given to a user in a matrix will apply to all jobs.
>
> **[0:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=15)** But there may be a case where we want to limit the jobs in folders a user has access to.
>
> **[0:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=22)** We can accomplish that with a project-based authorization strategy.
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=27)** Configuring project-based authorization is done the same way as configuring matrix-based authorization but once project-based permissions are enabled, each project and even folders can be configured with their own permissions.
>
> **[0:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=44)** Let's see how this works in an example.
>
> **[0:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=47)** I'm logged into my Jenkins server and I've already opened the Configure Global Security menu.
>
> **[0:54](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=54)** I want to switch from matrix-based security to project-based security.
>
> **[1:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=60)** And the easy part is just clicking this radio button here next to Project-based Matrix Authorization Strategy.
>
> **[1:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=69)** Unfortunately, I also need to recreate the matrix that I had before.
>
> **[1:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=75)** So the first thing that I'm going to do is add my user account and give myself overall administration permissions.
>
> **[1:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=86)** Once I have that in place, I also want to add the Nicole user account and given them overall reader permissions.
>
> **[1:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=101)** Now with these permissions, Nicole will be able to log in but they won't have any permissions to do anything else.
>
> **[1:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=109)** Let's see how that looks before I enable any other permissions.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=113)** I'll click Save, and then log out and log in as Nicole.
>
> **[2:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=121)** I'm logged in as Nicole now and as you can see, I don't have any access to any of the jobs that were already configured in this system.
>
> **[2:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=130)** So I'll go back to an administrative account and give Nicole permission to access just one specific job.
>
> **[2:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=140)** Okay, I'm logged in as my admin account and I'm going to configure a job that Nicole can access.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=147)** I'll just select this job complex-pipeline and then click Configure.
>
> **[2:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=151)** There's a new control here to enable project-based security.
>
> **[2:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=155)** So I'll click that.
>
> **[2:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=162)** This gives me an interface that's very similar to the matrix that we see in the global security interface.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=169)** Here I can add Nicole and give her specific permissions for this job and this job only.
>
> **[2:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=177)** Okay, now I'll save this and once again, I'll log out of my account and log in as Nicole.
>
> **[3:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=185)** Okay, now we can see that Nicole's view has changed quite a bit.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=190)** She can see the job that we gave her permission to view and if I click into this job, we can see that she has permission to build and delete.
>
> **[3:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=200)** So essentially, Nicole's account is an admin for this job and this job only.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2), switch (1), else. (1), delete (1)
> **Prerequisites:** configure (3), set up (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Use secrets and credentials
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=0)** - [Instructor] Sensitive information can be stored and managed directly in the Jenkins application.
>
> **[0:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=6)** Jenkins uses the term credential to refer to sensitive information.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=12)** A credential can be any data that we want to protect.
>
> **[0:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=16)** So, you might hear the term secret or credential, but just know that they both refer to the same thing.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=24)** Jenkins supports several types of credentials, including usernames and passwords, SSH keys, files, and text strings.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=35)** Text strings are particularly useful for values like API keys or security tokens.
>
> **[0:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=43)** Once we have credentials stored in Jenkins, we can use them in job configurations, including pipeline projects.
>
> **[0:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=52)** Credentials can be accessed in several ways in a pipeline, but the two most common ways are the credentials function and the withCredentials build step.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=64)** The credentials function is used to assign sensitive values to one or more environment variables.
>
> **[1:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=71)** It takes the ID of a secret stored in Jenkins as its argument.
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=77)** For most credential types, the function will return one value containing the sensitive information.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=84)** However, when the credentials function is used with a username and password type credential, three variables are returned.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=93)** The variables specified in the function call will contain both the username and password separated by a colon.
>
> **[1:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=102)** Two additional variables will be created using the variable name followed by an underscore and either USR or PSW.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=113)** These variables will contain the username and password respectively.
>
> **[1:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=118)** This method keeps pipeline developers from having to create their own functions for parsing usernames and passwords over and over again.
>
> **[2:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=129)** We can also access secrets using the build step named withCredentials.
>
> **[2:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=136)** This step retrieves a secret value and assigns it to a variable.
>
> **[2:21](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=141)** Any steps that are placed inside the withCredential step will have access to the secret.
>
> **[2:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=147)** You should note that the withCredential step can only be used with credentials that are stored as secret strings.
>
> **[2:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=156)** Let's create a few secrets in the Jenkins interface and see how we can use them in a pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), interface (1)
> **Code Identifiers:** withcredentials (2), withcredential (2)
> **Env Vars:** ssh (1), api (1), usr (1), psw (1)
> **CLI Commands:** ssh (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Configure users and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=5)** - [Instructor] It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=7)** You manage a Jenkins server that's being used by two development teams.
>
> **[0:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=12)** One team develops engineering applications, and the other team develops finance applications.
>
> **[0:19](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=19)** The finance team is developing a new application that will process sensitive information.
>
> **[0:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=25)** They've asked you to demonstrate how they can secure their pipeline jobs by limiting access to one specific user.
>
> **[0:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=33)** To solve this challenge, complete the following steps.
>
> **[0:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=38)** Create two users, one named engineering and another named finance.
>
> **[0:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=45)** Change the security setting on your Jenkins server to use a project-based authorization strategy.
>
> **[0:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=53)** Then assign the overall read permission to both users.
>
> **[0:58](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=58)** Next, demonstrate limited access by creating two folders, one named engineering jobs, and another named finance jobs.
>
> **[1:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=68)** Assign admin permissions to both users in the folder that corresponds to the user name.
>
> **[1:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=75)** And finally, demonstrate how the engineering user can't access or manage items inside the finance jobs folder.
>
> **[1:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=84)** This challenge should take 10 to 15 minutes to complete.
>
> **[1:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=88)** Solve this challenge by applying what you've learned about securing Jenkins, and then join me in the next video to discuss the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### Solution: Configure users and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=0)** - In this challenge, we're being asked to create users and set up some boundaries by configuring security.
>
> **[0:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=13)** I'm logged into a brand new Jenkins installation as the admin user.
>
> **[0:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=17)** And I'm going to jump right in to solve this challenge by creating these users first.
>
> **[0:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=22)** I'll start by clicking "Manage Jenkins" and then "Manage Users".
>
> **[0:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=27)** And then I'll click "Create User".
>
> **[0:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=29)** Let's do the engineering user first and I will give them a password as well.
>
> **[0:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=37)** And then their full name, I will capitalize the E in engineering and give them an email address as well.
>
> **[0:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=47)** Okay, let's do the finance user now.
>
> **[0:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=49)** I'll go through the same process, "Create User".
>
> **[0:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=52)** Finance and then give the finance user a password as well and their full name, and then give them an email address as well.
>
> **[1:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=64)** Okay, "Create user".
>
> **[1:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=66)** Okay, we have our users.
>
> **[1:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=68)** The next thing we need to do is set up our authorization strategy.
>
> **[1:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=72)** To do that, I'll click "Manage Jenkins" and then "Configure Global Security".
>
> **[1:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=77)** And then I'll scroll down a little bit here until I can see "Project-based Matrix Authorization Strategy".
>
> **[1:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=85)** That's a mouthful, but that's the one that we want.
>
> **[1:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=87)** So I will click the radio button next to that.
>
> **[1:30](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=90)** The first thing that I want to do is add my admin account so that I don't get locked out of my Jenkins server.
>
> **[1:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=98)** So I'll click "Add user" and then put in the admin name.
>
> **[1:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=102)** "OK".
>
> **[1:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=103)** And all the way over here on the right, I want to select this button so it just checks all of these permissions for me.
>
> **[1:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=110)** So indeed that user will have all admin permissions.
>
> **[1:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=113)** Now I can add the engineering and finance users.
>
> **[1:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=117)** So I will click "Add user" and type in "engineering".
>
> **[2:02](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=122)** "OK".
>
> **[2:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=124)** Then I'll add user finance.
>
> **[2:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=127)** Click "OK".
>
> **[2:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=128)** For these users, I need to select under "Overall" the read permission.
>
> **[2:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=134)** That way when they log in, they could at least see something.
>
> **[2:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=137)** If they didn't have that permission, then they wouldn't be able to do pretty much anything even if they were able to log in.
>
> **[2:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=144)** So with this in place, I think we're good with our authorization strategy and the permissions that these users need so I will click "Save".
>
> **[2:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=153)** Now, if you're prompted with this message, this essentially means that even though we've limited permission by user account, some users may still be able to run commands using the permissions held by the system user account.
>
> **[2:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=169)** That is, the permissions given to Jenkins to run the actual Jenkins application.
>
> **[2:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=173)** Remediating this warning is beyond the scope of the challenge, but I encourage you to read the document on access control for builds, and if you're interested, explore the solution.
>
> **[3:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=186)** But for now, I'm going to click "Dismiss" so we can proceed with the challenge.
>
> **[3:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=191)** Okay, now we need to create folders and start limiting access to those folders.
>
> **[3:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=197)** So to do that, I will click "New Item" and let's do the engineering jobs folder first.
>
> **[3:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=203)** "Engineering Jobs" for the name, and then we want to select the folder type and then I will click "OK".
>
> **[3:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=211)** All right, this configuration, we're configuring the folder and very similar to how we saw in the lessons where we enabled project-based security, I'm going to select that same option for this folder.
>
> **[3:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=223)** And now I will add the engineering user.
>
> **[3:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=226)** I'll click "Add user" here, and then add in the engineering user.
>
> **[3:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=231)** And for this one, I want to give the engineering user all permissions on this folder.
>
> **[3:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=237)** So I will select this option here to fill in all of these check marks and then click "Save".
>
> **[4:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=243)** So now I'm going to do the same thing for the finance user, but to do that, I need to go back up a level to the very top.
>
> **[4:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=250)** If I click "New Item" here to create a folder here, I would be creating a folder within the engineering jobs folder.
>
> **[4:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=257)** So let's go up to the dashboard and then I will click "New Item" and then we'll name this item, "Finance Jobs".
>
> **[4:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=265)** And then again, we want the folder type.
>
> **[4:27](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=267)** I will select, "OK".
>
> **[4:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=269)** I will enable project-based security and then let's add the finance user.
>
> **[4:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=276)** Select "OK".
>
> **[4:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=277)** And again, we'll give the finance user all permissions in this folder.
>
> **[4:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=282)** And now I will click "Save".
>
> **[4:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=284)** All right, let's go back up to the top.
>
> **[4:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=286)** As the admin user, I've done all of this configuration.
>
> **[4:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=289)** I can see both folders.
>
> **[4:50](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=290)** Now we need to demonstrate that we have indeed limited access to these folders.
>
> **[4:56](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=296)** So I'm going to log out of my admin account and I'll log in as the engineering user, just to prove that the engineering user can't see the finance jobs folder.
>
> **[5:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=308)** Okay, I'll click "Log out" so I'm no longer the admin.
>
> **[5:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=312)** Let's log in as engineering and with that password.
>
> **[5:17](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=317)** "Sign in".
>
> **[5:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=318)** Okay, this is looking pretty good.
>
> **[5:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=320)** I'm logged in as the engineering user.
>
> **[5:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=322)** I can only see the engineering jobs folder.
>
> **[5:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=326)** I'm also not an admin at this system level because I don't have any options over here to manage Jenkins or anything like that.
>
> **[5:32](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=332)** So let's click into the "Engineering Jobs" folder.
>
> **[5:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=336)** And here I do have an option to configure this folder.
>
> **[5:38](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=338)** I can add new items and so on, but just in this particular folder itself, not anywhere else on the system.
>
> **[5:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=346)** So let's go back up to the dashboard again.
>
> **[5:49](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=349)** So let's review the solution that we have in place for this challenge.
>
> **[5:53](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=353)** We created two users, one for engineering, one for finance.
>
> **[5:57](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=357)** And then we enabled project-based authorization.
>
> **[6:01](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=361)** We assigned the admin user admin permissions.
>
> **[6:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=364)** That was important so we didn't lose access to the Jenkins server.
>
> **[6:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=367)** And then we assigned overall read to the engineering user and the finance user.
>
> **[6:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=372)** After that, we created folders for each of these users, engineering jobs and then finance jobs.
>
> **[6:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=378)** And then we assigned admin permissions to those users respectively inside the folders, but just for those folders.
>
> **[6:25](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=385)** And then we were able to prove that their access was limited by logging in as the engineering user and proving that the engineering user only has access to the engineering jobs folder.
>
> **[6:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=397)** With all that in place, I would say this challenge has been solved.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), type. (1)
> **Prerequisites:** set up (2), configure (2)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)
> **Warnings:** warning (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=0)** - [Michael] I'm so glad you joined me for Jenkins Essential Training.
>
> **[0:04](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=4)** As you continue exploring Jenkins, you're not alone.
>
> **[0:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=8)** Use the Q&A feature here on LinkedIn Learning to connect with me or other developers taking this course.
>
> **[0:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=15)** As you continue learning how Jenkins fits into your workflows, I suggest you take my course, Running Jenkins on AWS.
>
> **[0:24](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=24)** You'll learn the details of running Jenkins on a public cloud platform, how to securely connect to build servers and how to automate deployment to AWS.
>
> **[0:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=35)** It's been my pleasure to be your instructor for this course, and I wish you all the best on your learning journey.
>
> **[0:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=41)** See you soon.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), public (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [michael] (1)


## Instructor

- [[Michael Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/essential-jenkins-2468076)

## Skills Covered

- Jenkins

## Path Context

### In [[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]
← [[Learning Jenkins Automating Software Development And System Administration]] | **2 of 3** | [[Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure]] →

## Appears In

- [[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]

## Related Courses

_Courses sharing skills:_

- [[Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure]] — Jenkins
- [[Learning Jenkins Automating Software Development And System Administration]] — Jenkins

---

[↑ Back to top](#)