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
  - '[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)'
prev_courses:
  - '[Learning Jenkins Automating Software Development And System Administration](Learning%20Jenkins%20Automating%20Software%20Development%20And%20System%20Administration.md)'
next_courses:
  - '[Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure](Running%20Jenkins%20on%20AWS-%20Deploying%20and%20Managing%20Jenkins%20on%20Cloud%20Infrastructure.md)'
path_nav: '[{"path":"Continuous Integration-Continuous Delivery (CI-CD) with Jenkins","position":2,"total":3,"prev":"Learning Jenkins Automating Software Development And System Administration","next":"Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jenkins
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jenkins%20Essential%20Training.md)

![Jenkins Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQEDVgLCVeGAvQ/learning-public-crop_675_1200/B4DZvz7mc8JwAY-/0/1769324046816?e=2147483647&amp;v=beta&amp;t=XEGcqxHZ_4MT2HQkWzM-YVJoaNoZg5f9sG0OGYvlE_Y)

# Jenkins Essential Training

> If you want to build, deploy, and implement continuous delivery as code, you’ve likely heard about Jenkins, the popular DevOps suite known for its open-source extensibility and ease of use. Jenkins also lets you automate your entire enterprise as a software delivery pipeline. In this course, instructor Michael Jenkins shows you the fundamentals of navigating the platform so you can start automatin

> [LinkedIn Learning](https://www.linkedin.com/learning/jenkins-essential-training-17420152) | 2h 35m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [From code to production with Jenkins](#from-code-to-production-with-jenkins)
  - [What you should know](#what-you-should-know)
- [**1. Jenkins and DevOps**](#1-jenkins-and-devops) (3 videos)
  - [Jenkins and the DevOps lifecycle](#jenkins-and-the-devops-lifecycle)
  - [Challenge: Deploy a Jenkins server](#challenge-deploy-a-jenkins-server)
  - [Solution: Deploy a Jenkins server](#solution-deploy-a-jenkins-server)
- [**2. The Jenkins Pipeline**](#2-the-jenkins-pipeline) (8 videos)
  - [Create a pipeline project](#create-a-pipeline-project)
  - [Create a declarative pipeline](#create-a-declarative-pipeline)
  - [Use the pipeline Snippet Generator](#use-the-pipeline-snippet-generator)
  - [Use variables in a pipeline](#use-variables-in-a-pipeline)
  - [Parameterize a pipeline](#parameterize-a-pipeline)
  - [Use conditional expressions and manual approvals](#use-conditional-expressions-and-manual-approvals)
  - [Challenge: Develop a parameterized pipeline](#challenge-develop-a-parameterized-pipeline)
  - [Solution: Develop a parameterized pipeline](#solution-develop-a-parameterized-pipeline)
- [**3. Integrate Jenkins with Version Control Systems**](#3-integrate-jenkins-with-version-control-systems) (6 videos)
  - [Pipeline as code with Jenkinsfile](#pipeline-as-code-with-jenkinsfile)
  - [Connect Jenkins to GitHub](#connect-jenkins-to-github)
  - [Run scripts from the pipeline](#run-scripts-from-the-pipeline)
  - [Add a status badge to Markdown files](#add-a-status-badge-to-markdown-files)
  - [Challenge: Connect Jenkins to GitHub](#challenge-connect-jenkins-to-github)
  - [Solution: Connect Jenkins to GitHub](#solution-connect-jenkins-to-github)
- [**4. Agents and Distributed Builds**](#4-agents-and-distributed-builds) (5 videos)
  - [Distribute builds with agents](#distribute-builds-with-agents)
  - [Add an SSH agent to Jenkins](#add-an-ssh-agent-to-jenkins)
  - [Add Docker agents to Jenkins](#add-docker-agents-to-jenkins)
  - [Challenge: Improve a Docker agent pipeline](#challenge-improve-a-docker-agent-pipeline)
  - [Solution: Improve a Docker agent pipeline](#solution-improve-a-docker-agent-pipeline)
- [**5. Artifacts and Testing**](#5-artifacts-and-testing) (5 videos)
  - [Artifacts and fingerprinting](#artifacts-and-fingerprinting)
  - [Publish test results and code coverage reports](#publish-test-results-and-code-coverage-reports)
  - [Use test results to stop a build](#use-test-results-to-stop-a-build)
  - [Challenge: Create artifacts and reports](#challenge-create-artifacts-and-reports)
  - [Solution: Create artifacts and reports](#solution-create-artifacts-and-reports)
- [**6. Securing Jenkins**](#6-securing-jenkins) (5 videos)
  - [Secure Jenkins with user accounts](#secure-jenkins-with-user-accounts)
  - [Configure project-based permissions](#configure-project-based-permissions)
  - [Use secrets and credentials](#use-secrets-and-credentials)
  - [Challenge: Configure users and permissions](#challenge-configure-users-and-permissions)
  - [Solution: Configure users and permissions](#solution-configure-users-and-permissions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [From code to production with Jenkins](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/from-code-to-production-with-jenkins?u=76281980&t=0)** - The [Jenkins](../../Skills/DevOps/Jenkins.md) [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) platform is one of the most capable and widely used automation frameworks in the world. Hi, I'm Michael Jenkins, a computer engineer with a background in process automation. I'm a [DevOps](../../Topics/DevOps.md) practitioner and a site reliability engineer. In this course we'll look at advanced ways to use Jenkins, an application that's been in my toolbox for years. We'll start by discussing why Jenkins is an excellent tool for enabling a DevOps approach to [Software Development](../../Topics/Software%20Development.md). Then we'll see how Jenkins allows engineers and developers to create pipelines using configuration as code stored in [GitHub](../../Skills/Software%20Development/GitHub.md) repositories. We'll go even further as we explore distributed builds, managing artifacts, and the steps needed to keep Jenkins secure. I hope you're as excited as I am to get started with Jenkins Essential Training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (7), [DevOps](../../Topics/DevOps.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, there are a few things you'll need to be familiar with. This is an intermediate level course. So I will expect that you already have some experience using [Jenkins](../../Skills/DevOps/Jenkins.md). You should know how to install plugins and configure global tools. You should also be comfortable with creating and running freestyle jobs. This includes configuring and running jobs that use parameters. If you find yourself still needing a refresher, I encourage you to take my course Learning Jenkins. It covers everything you need to know to get up and running with Jenkins and will position you nicely to get the most out of this course. You should also be comfortable working with the [Git](../../Skills/Software%20Development/Git.md) [Version Control](../../Skills/Web%20Development/Version%20Control.md) system and a Git service like [GitHub](../../Skills/Software%20Development/GitHub.md), GitLab, or [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). We'll be using GitHub, so if you're already up to speed on that platform, you'll be all set. If you need resources for Git or GitHub there are courses here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library that you can refer to. And lastly, it will help if you have experience working with the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system and Command-line interfaces. You don't need to be a complete system administrator but having some experience with Linux and Command-line interfaces will help with commands on the server where Jenkins is running. One more thing I wanted to mention,
>
> **[1:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/what-you-should-know?u=76281980&t=94)** exercise files are available for you to use along with this course. The files are located in a GitHub repo that has code, commands, troubleshooting tips, and links to additional resources to help you as you follow along or practice on your own. I highly recommend you visit the exercise files repo and create your own fork to use with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Git](../../Skills/Software%20Development/Git.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Tools:** github (4), gitlab (1), bitbucket (1)
> **CLI Commands:** git (3), find (1)
> **Exercise Files:** exercise files (2), github repo (1)
> **Prerequisites:** you'll need (1), install (1), configure (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Jenkins and DevOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Jenkins and the DevOps lifecycle](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=0)** - [Instructor] The [DevOps](../../Topics/DevOps.md) Life Cycle consists of eight stages in the planning, development, and operation of a system, or software application. Let's take a look at how [Jenkins](../../Skills/DevOps/Jenkins.md) fits into the DevOps Life Cycle and how using Jenkins ties into [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and continuous deployment. The DevOps Life Cycle is presented as an infinity symbol because the cycle is continuous. Each step is repeated in order until the system or application is decommissioned. The loop is divided into two groups with the first group representing the development stages of the cycle, and the second group representing the operational stages. In the development group we start with the stage labeled plan and then move on to code, build and test. In the operations group we continue the cycle with release, deploy, operate and monitor. Jenkins is the perfect tool for automating processes, tied to the build, test, release and deploy stages. When tools like Jenkins are used to automate the build and test stages, the process is known as continuous integration. Using automation in the release and deploy stages is called [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md). And if the process is completely automated, it can be referred to as continuous deployment. Continuous integration often abbreviated as CI
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=95)** is tied to the build and test phases of the DevOps Life Cycle. The main goal of continuous integration is to find and resolve problems early in the development cycle. These steps also produce an artifact that can be deployed. Jenkins automates building and testing by running commands that create the software artifact and run it through a series of tests. This artifact could be a container image, [Java](../../Skills/Software%20Development/Java.md) archive, a [Windows](../../Glossary/Service/Windows.md) executable, or any other sort of software package. Once the tests have passed, the artifact can be moved on to the next stage in the process. Continuous delivery and deployment are often referred to as CD. CD is tied to the release and deploy stages of the DevOps Life Cycle. These stages take an artifact and make it available for use, or actually put it to work. The release stage is where the delivery happens. Jenkins may upload a container image to a repository, or make a jar file available for downloading. Ultimately, delivering the artifact means that a version of the application is available and ready to be used. The next step is to deploy. In some cases the deployment is manual. For a continuous deployment, all steps are automated and completed with no, or very little human interaction. In our case, we would give Jenkins the instructions needed
>
> **[3:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/jenkins-and-the-devops-lifecycle?u=76281980&t=189)** to deploy automatically. Now that we've discussed how Jenkins fits into the DevOps Life Cycle, and how Jenkins can be used for CI/CD, let's set up a Jenkins server that we can use to explore the topics in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (10), [DevOps](../../Topics/DevOps.md) (6), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (4), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** cd (3), make (2), find (1)
> **Definitions:** known as (1), is called (1), means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Deploy a Jenkins server](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=5)** - [Instructor] It's time for a challenge. In this challenge, you'll be deploying a [Jenkins](../../Skills/DevOps/Jenkins.md) server to use for this course. There are three basic requirements for this challenge. Use the latest version of [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) Server. Install NGINX as a proxy to Jenkins. And finally, install and configure Jenkins. If at all possible, I highly recommend you use a public cloud service for this challenge. You can use [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or any other public cloud service that you have access to. The main reason I am suggesting you use a cloud service is so your Jenkins is accessible from a public URL. In later lessons, we'll be implementing [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) from a code repo, and your Jenkins server needs to be publicly accessible to allow a web hook to trigger jobs. If you aren't able to deploy Jenkins on a public cloud platform, please use the local system that you have available to you. Jenkins runs on [Windows](../../Glossary/Service/Windows.md) macOS and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). So you can install Jenkins just about anywhere. As I mentioned, we'll be using Jenkins for continuous integration with a code repo, namely [GitHub](../../Skills/Software%20Development/GitHub.md). And local installations will not be able to receive web hooks to trigger jobs.
>
> **[1:40](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-deploy-a-jenkins-server?u=76281980&t=100)** However, you can still follow along with Jenkins installed on your local system. I'll be using Amazon Web Services. So in my solution to this challenge, I'll also be creating a key pair for SSH connections, creating an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance using a Ubuntu AMI, and creating an elastic IP for persistent DNS assignment. I'll also be using a user data script to install NGINX and Jenkins. Exercise files are available for this challenge. As I mentioned, there's a script that will update the Ubuntu OS. Install NGINX and install Jenkins. So you won't have to do an installation from scratch. The script also installs the suggested plugins, and skips the installation wizard. So even if you're following along, and you're using a different cloud platform please use Ubuntu for your operating system so you can use the script and the exercise files. If you're following along and installing on a different operating system, particularly windows or macOS, review the course Learning Jenkins for detailed instructions on installing Jenkins on those platforms. This challenge should take about 15 minutes to complete. After you've completed the challenge, join me in the next video to discuss the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (14), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (4), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** nginx (3), url (1), ssh (1), ec2 (1), ami (1)
> **Prerequisites:** install (6), configure (1)
> **CLI Commands:** nginx (3), ssh (1)
> **Code Identifiers:** macos (2)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **Tools:** github (1)

#### [Solution: Deploy a Jenkins server](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=5)** - In this challenge, we need to deploy a [Jenkins](../../Skills/DevOps/Jenkins.md) server. I'm using AWS. You may be using a different cloud provider, which is fine, as long as we get to the same result of having a Jenkins server that can be accessed using a public URL. I'll jump right into the server creation process by clicking launch instances. First, I need to pick the operating system that I want to use for this server, and I'm going to pick [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) so I'll search for that. And I'll select this first one that pops up, Ubuntu server 20.04 LTS. For the instance type, I'm going to keep the default selection of T2 micro because it'll give us enough CPU and RAM to get through the course while also staying within the free tier. So I'll click next, configure instance details. I'm going to leave all of this as the default and I will click next, add storage. On the storage screen, I'm going to increase the root volume size from 8 to 30 just to give us enough space to install Nginx, enough space for Jenkins, and for any plugins or Docker images that we install throughout the course. So I will click next, add tags, and I do want to add a tag. I will use the name tag and I will, for the value, enter Jenkins server. Then let's go to next, configure security group. I'm going to create a new security group and I'm also going to name this one Jenkins server. And I'm going to add a role that allows HTTP traffic
>
> **[1:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=103)** or web traffic on port 80 from any IP. That will open up our security group to allow [GitHub](../../Skills/Software%20Development/GitHub.md) and ourselves to connect to the server via the web interface. Now I'll click review and launch. All of our selections are good on this page, so I will click launch. And I don't have any key pairs in this region so I need to create a key pair and I will use the default RSA type and also call this one Jenkins server. And I will download that key pair. And now I will click launch instances. Our server is launching, and if we go to the page here, we can see it's in pending state and it's coming up. While that is launching, I also want to create an elastic IP address so that we can have a dedicated IP address for the server throughout the course. That way, if I stop the instance or have to reboot it, I won't risk losing the IP address that I currently have. So I'll go here to elastic IPs and click allocate elastic IP address and then I'll click allocate. So we have our IP and now I need to associate it with the instance that I want to give it to. So I'll click this button here, associate this elastic IP address. And I do want to associate it with an instance. There should be only one server running in this region. And of course it's the Jenkins server that I just created. So I'll select that guy and then I will click associate. So now the IP address has been associated
>
> **[3:22](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=202)** to the instance and it is fixed to that IP. Let's go over and take a look at the instance and see if it's in a running state. It is. The instance state is pending. I'm going to wait until this instance state is running just to make sure that the IP address is associated, that is, the elastic IP that I assigned. I just want to make sure that it's associated and the instance reaches a running state. So I'm going to wait here for a minute and maybe refresh this screen a couple times until the instance state is running. The instance is in a running state and I want to connect to it over SSH so I can complete the install of Nginx and Jenkins. And to do that, I will select the public IPv4 DNS. You could also use the IPv4, just the numbered address, but I prefer to use the DNS. It makes it feel more like a URL to me. So I will select the stacked squares here to copy that to my keyboard. And now I'm going to go to my terminal and connect to this server over SSH. I'm in my terminal now. And I'm in the same location where I downloaded the key that I'll be using to connect over SSH. And the first thing that I need to do is set the permissions on this so that they are private to me. Right now, if someone came along on the same computer that I'm using and saw this file, they would be able to read it. So I need to issue a change mode command or chmod command, pass it 600,
>
> **[4:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=295)** which will set it to be readable and writeable to me, and then the name of the file. And now let's take a look at the permissions. That's much better, only I can read and write this file. So the SSH program will be totally happy with the permissions on this. So I will type SSH -i and then the key name and the user that I want to connect with is Ubuntu. Then I'll put the @ symbol and then the DNS name for our server. So let's hit return and we are connected. I'm going to clear the screen. And first, because I'm going to be doing an install, I'll be running some commands that need elevated permissions. I will run sudo su -. That will let me enter a session as the root user. I'll clear the screen there. And there is an installation script in the exercise files but to get started with that, before I even pull that content in, I will start editing a file. I'll be using vim. And then the file name I'll use is install.sh. Now let me go to the GitHub repo for the exercise files and copy the install script. So here in the GitHub repo, there is the script that we can use to automate the installation and to get the content of this script, I just need to click these stacked squares here to copy that to my clipboard. And now I'm going to go back to my terminal and paste this in. Back in the terminal, I'm using vim, So I'll type I to get into insert mode
>
> **[6:28](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=388)** and then I'll just paste it in and press escape once and then type :w to write the file to disk and then :q to quit them. So I have my script here. If I cat this out, I can see the contents are there. All I need to do now is source this file. And so I will type source install.sh. This is going to take a minute to run. So I'm going to pause here and just wait for this installation to complete. The installation has completed. That took a second, but here we are. So as part of the automation in the script, it gives us this nice report that says the installation is complete with an invitation to open the URL for the server in a browser and log in as the admin user. And it gives us the admin name and the default admin password. If you're familiar with Jenkins, you may know that when you install Jenkins for the first time, you have to use the admin user and a default password that you have to dig out of the Jenkins installation. Well, this script was nice enough to provide this information for us. So I really appreciate that. Thank you, script, for doing that. So I'm going to leave this here for now because I need to get Jenkins open in a browser first. So let me go back to a browser and open up the DNS name for the server. Now that I have my Jenkins server open in a browser, I can paste in the admin password and click continue.
>
> **[8:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-deploy-a-jenkins-server?u=76281980&t=487)** This is the screen where we can customize Jenkins. The script is supposed to already install the suggested plugins, but I'll go through the process just in case anything was missed. Everything was already there, so it just kind of breezed through that process. I am going to create an admin user. This wasn't requested in the challenge as part of the challenge but I just want to have a user that I can use to connect with a password that's a little bit easier to remember than the administrator password. So I will create my own user there, full name. I do have to give it a real email address or at least an email address that's in the form of a user at domain dot something. So I'll just use this fake email address here. And then I will click save and continue. On this one, I can accept the default Jenkins URL and just click save and finish. Jenkins is ready. Let's start using Jenkins. And here we are, ready to use Jenkins. Everything is already in place. So with that, I think we have solved this challenge. I am able to access the server over a public URL. The installation script really took care of everything as far as installing Nginx, setting up that as a proxy to Jenkins, installing Jenkins, and then even giving me the administrator password so I can log in. Outside of the challenge, I created an account that I can use for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course with a password that's a little bit easier to remember. But with that, I believe this challenge has been solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (20), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** url (5), ssh (5), dns (4), aws (1), lts (1)
> **CLI Commands:** ssh (5), nginx (3), make (2), aws (1), docker (1)
> **Prerequisites:** install (9), configure (2)
> **Tools:** terminal (4), github (3), vim (2)
> **UI Navigation:** go to (4), select the (2), open the (1)
> **Exercise Files:** exercise files (2), github repo (2)
> **Cross-References:** go back to (2), coming up (1)


### 2. The Jenkins Pipeline

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a pipeline project](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-pipeline-project?u=76281980&t=0)** - [Instructor] I'm logged into my [Jenkins](../../Skills/DevOps/Jenkins.md) server, and I trust that you have a server that you can use to follow along. Let's create our first pipeline job. I'll start by clicking new item, and then I'll give it a name. I'll just call it first pipeline. And then I'll select pipeline for the project type, and then I'll click okay. I'm not going to add a description or mess with any of the options here. I'm just going to go straight to the pipeline section and click try sample pipeline. And I'm going to select hello world. And that will enter a pipeline script that prints the message "hello world" in one stage called hello. So I will save that and then click build now. And I'll give it a second for this job to complete. Okay, the job is done, and I'm just going to pause here. I want you to take a moment to explore the interface a bit. And if you've used Jenkins before, it should be pretty familiar, perhaps with a few new additions. This pipeline was fairly simple. So before we turn up the complexity, let's discuss all the parts that make up a pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Create a declarative pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=0)** - [Instructor] Now that you've seen a [Jenkins](../../Skills/DevOps/Jenkins.md) pipeline, let's go over the pipeline syntax and the parts of a pipeline, specifically stages and steps. Jenkins supports two pipeline formats, scripted and declarative. Scripted pipelines start with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) node. Declarative pipelines start with the word pipeline. Both are followed by curly braces that contain instructions for Jenkins to run. Scripted pipelines use a domain-specific language or DSL based on Groovy, which is a scripting language for the [Java](../../Skills/Software%20Development/Java.md) virtual machine. Declarative pipelines are an evolution of DSL pipelines. The declarative syntax was developed to more easily capture the complete configuration of a project as code. For the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, we'll be using the declarative format. A declarative pipeline configuration has three required sections, an agent section, a stages section. And inside the stages section, we're required to have at least one stage with at least one step. Let's discuss each of these in a little more detail. The agent section specifies where the commands in a pipeline will be run. We can use several parameters to specify an agent. Some of the parameters we can use are any, label, docker, and none. If we use the any agent,
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=93)** we're letting Jenkins know that it can run the pipeline using the first available executer. In systems where Jenkins is running jobs on the controller, this is likely the agent you would use the most. When we need to be specific about the agent that runs the pipeline, we can use the label parameter. This is helpful when we need to run a pipeline on a specific operating system or on a server where a specific tool or a resource is installed. The docker agent lets us run pipelines inside a container, either on the Jenkins server or another server where docker is running. This is useful for projects that need to build environments that are fresh and consistently provisioned on each build. The none agent is a special case. Since the agent selection at the top of a pipeline is applied to all commands, the none agent allows us to defer agent selection to stages. So using none allows you to use a different agent for each stage in the pipeline. In the stages section of a pipeline, we identify specific parts of the process being automated. If we were developing a CICD pipeline, for example, we could use stages named build, test, and deploy to represent the actions needed for an application deployment. Each stage must contain at least one steps section. In the steps section,
>
> **[3:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/create-a-declarative-pipeline?u=76281980&t=188)** we list the commands that actually do something. This is where we run programs, scripts and commands that interact with the compute platform that the pipeline is running. We can have multiple commands in each step. Let's create a new pipeline that has multiple stages and steps. For this demonstration, I'll be using the exercise files for this lesson. The README has a sample pipeline that we can use. It has four stages, and the testing stage has three steps. I can just click this stacked squares icon here to copy the file. And now I'll go to my Jenkins server. I've already got a pipeline job started, and I just need to paste in the pipeline from the exercise files. And I'll save this and click build now. This pipeline will run pretty quickly, since it isn't doing too much. And we get this graphic that shows each stage of our pipeline. To view the steps and logs for a stage, just hover over the stage and click logs. And clicking the steps shows the log. So far, we've only used the echo step in a pipeline. But we won't get anything built if Jenkins is just printing words on the screen. Fortunately, there are plenty more steps that we can use as we create pipelines. Let's look at some of these steps in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (8), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** docker (3), node (1)
> **Env Vars:** dsl (2), cicd (1), readme (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Documentation:** the readme (1)
> **UI Navigation:** go to (1)

#### [Use the pipeline Snippet Generator](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=0)** - [Instructor] [Jenkins](../../Skills/DevOps/Jenkins.md) provides basic pipeline steps that we can use without having to do any additional setup. Here are a few of the most common steps that you'll see as you're working with pipelines. We've already seen the echo step, which just prints a message. We can use the [Git](../../Skills/Software%20Development/Git.md) step to check out code from a git repo. The sh or shell step, lets us run scripts or commands on the local system and the archiveArtifact step lets us store any artifacts created by a job. For the complete list of basic steps, please take a look at the basic steps reference in the Jenkins documentation. In this list, you'll find dozens of the steps available for use in a pipeline. As you install plugins or extend the functionality of your Jenkins server, you'll find that many plugins expose their own pipeline steps. For more information on these additional steps, you'll want to take a look at the pipeline steps reference in the Jenkins documentation. There are literally hundreds of steps to choose from, so I encourage you to take a look at this list to see if there are any tools that you're already using that can be called from a pipeline step. With all these steps, it can be difficult to know how to write the code that calls a specific step along with any parameters or arguments that we need to pass to the step. Fortunately, Jenkins provides a pipeline syntax generator that we can use to create snippets of code
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=95)** that we can copy into a pipeline. Let's take a look at an example. I'm editing a new job and I've added the pipeline definition from the exercise files for this lesson. The pipeline uses a shell step to run a local command that creates a file named report.TXT. Just below the pipeline field, there's this link to pipeline syntax. Clicking the link opens the pipeline syntax page in a new tab where we can access the snippet generator. There's also a directive generator and some additional documentation that you may want to review. For now, let's focus on the snippet generator. If we click the selector under sample step, we can see that the basic steps are provided here for us to choose from and I'll just stick with the archive artifacts, which is the first step in the list. In this dialogue, we would enter all the parameters that we will want to pass to the step. For example, if I wanted to archive all of the TXT files that were generated by a step in my pipeline, then I would enter star.TXT in the files to archive field. Many steps also have an advanced configuration. I'll click advanced here. In the advanced configuration, I can provide more options such as not failing the build if archiving doesn't return anything. Archiving artifacts only if the build is successful and fingerprinting all archived artifacts.
>
> **[3:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-the-pipeline-snippet-generator?u=76281980&t=188)** I'll select all of these. Now that I have the form filled out, all I need to do is click generate pipeline script. This creates a snippet that I can use in my pipeline. So I'll select all of the text here and copy it. Now, back in my pipeline tab, all I need to do is select where I want to place the snippet in my pipeline and then paste it in. So I'll put it just after this shell step. One more thing we can do before we save the pipeline is click the apply button. This checks the syntax in our pipeline to make sure we haven't added any errors while we were adding the snippet. No errors here, so I will click save. And now I'll build the pipeline by clicking build now. We can tell right away that the archive step was successful thanks to this little blue icon here next to the build and if I reload the page, I can get the last successful artifact right here which is report.TXT. So with this short pipeline, I really wanted to demonstrate how we can use the snippets generator to quickly draft steps that we can use in a pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Git](../../Skills/Software%20Development/Git.md) (2)
> **CLI Commands:** git (2), find (2), make (1)
> **Env Vars:** txt (4)
> **File Paths:** report.txt (2), star.txt (1)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** setup (1), install (1)
> **Code Identifiers:** archiveartifact (1)
> **Exercise Files:** exercise files (1)

#### [Use variables in a pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=0)** - [Instructor] Variables let us use dynamic values in our pipelines. [Jenkins](../../Skills/DevOps/Jenkins.md) exposes three different types of variables that we can use: environment variables, current build variables, and parameters. This lesson will focus on environment variables, and current build variables. We'll use another lesson to discuss parameters. The usual practice is to use all capitals for environment variable names, so anyone reading the code can tell the variables apart from the keywords, which are usually lowercase. Environment variables can be scoped globally for an entire pipeline, or they can be scoped locally in a stage. Using an environment block at the beginning of a pipeline exposes the variables to all pipeline steps. Using an environment block at the beginning of a stage only exposes variables to steps within that stage. Environment variables can be referenced in a few different ways in a pipeline, depending on how they're being used. They can be proceeded with the keyword env in lowercase letters followed by a dot and then the name of the variable. Or they can be referenced by their name. If an environment variable is being used in a string the value must be prefixed with a dollar sign and, optionally, the dollar sign can be followed by curly braces that wrap the entire variable name. The style you choose is up to you, but the best practice is to stay consistent
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=95)** throughout a pipeline script. currentBuild variables allow pipeline steps to reference the state of a build while it's running. This can be useful for dynamic operations that need to do something specific based on a previous step or a certain status in the build. All of the currentBuild variables are actually properties of one variable named currentBuild. Please note that this variable is case sensitive. It starts with a lowercase c and the B in build is capitalized. To access the currentBuild properties the values are proceeded by currentBuild, a dot and then the name of the property. The properties are also case sensitive and follow the CamelCase format with a lower case letter to start, and capital letters for each additional [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in the variable name. A few examples of currentBuild variables are the start time, the duration of the build and the current status of the build. Just like environment variables, these values need to be proceeded by a dollar sign if they are used in strings. Now that we've discussed environment and currentBuild variables, let's take a look at the default variables that get exposed to every pipeline. Then, we'll take a look at an example using environment variables. I'm on the homepage of a new pipeline job. And I wanted to show how you can get to the reference for the global variables.
>
> **[3:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=189)** From here, I can click Pipeline Syntax, which we saw in a previous lesson. In the menu under the snippet generators is a link to the Global Variables Reference. This page gives more details on all of the environment variables and currentBuild variables that Jenkins makes available globally. I encourage you to take a moment and review the variables and the information provided. For now, let's get back to the example. Near the top of the pipeline script, I have an environment block with two variables MAX_SIZE and MIN_SIZE. MAX_SIZE is set to 10 and MIN_SIZE is set to 1. Following that I have two stages one called Default Scale and another called Scale by 10X. Inside the Scale by 10X stage I have another environment block that redefines MAX_SIZE and MIN_SIZE. This time, MAX_SIZE is 100 and MIN_SIZE is 10. Let's run this pipeline and see how the output is affected by the location of these environment variable assignments. I'll click Save, and then Build Now. T\he best way to look at the output from this particular project is to click into the latest run and then click Pipeline Steps. We could view the console output,
>
> **[4:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-variables-in-a-pipeline?u=76281980&t=282)** but the Pipeline Steps view gives us a cleaner view of exactly what happened in each pipeline step. And if I scroll down to the bottom of this output the last two lines show that, sure enough, our Scale by 10X stage used the local values for MIN_SIZE and MAX_SIZE instead of the global values. that were defined at the start of the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** max_size (5), min_size (5)
> **Code Identifiers:** currentbuild (8)
> **UI Navigation:** in the menu (1), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)

#### [Parameterize a pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=0)** - [Instructor] We've seen how [Jenkins](../../Skills/DevOps/Jenkins.md) lets us use variables in a pipeline. Parameters are another type of variable that get their values at the time the job is triggered. Parameters are defined in a parameters block, which is placed at the beginning of the pipeline code. Much like we've seen with environment variables, parameters are accessed by their name proceeded by the params prefix. And if they're used in a string, they need to have a dollar sign at the beginning and can also be wrapped in curly braces. Each parameter definition must include a name, a default value, and a description that explains the type of value that should be entered. Typically parameter names are assigned using all capital letters, so they can be easily identified in the code. For pipelines, there are five different types of parameters we can use. Strings, blocks of text, booleans, choices, and passwords. String and text parameters are represented by a text field in the Jenkins interface, where a user can enter freeform text. String parameters are best used for single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) values. Text parameters are useful if you need to pass in a long block of text that contains multiple lines. Boolean parameters let us pass in true or false values and are represented by a check mark in the Jenkins interface.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=93)** Choice parameters present the user with a list of options to choose from. When we create a choice parameter, the options are entered as a list. We don't have to specify a default though because the first value in this list will be used as the default value in the Jenkins interface. Password parameters can be used to enter sensitive values like passwords and API keys. Password values are entered in the same way that string parameters are entered. However, password values are masked to keep them from being exposed. Because pipeline parameters can change the Jenkins interface, it causes a sort of chicken and egg scenario. We can create a pipeline that defines parameters, but those parameters are not immediately available to the Jenkins job. So after you create a pipeline with parameters, you'll need to run the pipeline, which will actually encounter an error, especially if the default values are blank or aren't available for the job to process. But once the job is run a second time, the parameters will be available to be used. This is also the case if parameters are added or changed. If you modify or add a parameter, the pipeline will need to be run once before the change is applied. Let's see how all of this comes together in the Jenkins interface. I've started a new pipeline project and I've added the pipeline
>
> **[3:06](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=186)** from the exercise files for this lesson. This pipeline has five parameters, one for each of the different types of parameters that we can use. The pipeline has one stage where the parameter values are echoed so we can see the value that was assigned. So let me save this project and build it. Because this is the first time this project was run, the trigger to start the build only says build, it doesn't say build with parameters, which is what we would expect after adding parameters to a pipeline. But as we discussed earlier, we need to build a project once and then the parameters will be exposed. It's already been built, so let me refresh the screen. Okay, now we get the option to build with parameters. So let's click that. Now we get an interface to fill in the parameters. And you can see how the defaults have already been filled in. So if I wanted to accept these values I could just click build, or I could fill in new values. One parameter I wanted to look at a little bit closer is the password parameter. So let me scroll down and find that one. You can see here in the user interface that the default is concealed, so the value isn't exposed. And if I click change password, then I can enter a new value for the password. And the text is hidden with dots. If you're following along, I encourage you to run this pipeline several times.
>
> **[4:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/parameterize-a-pipeline?u=76281980&t=279)** Experiment with adding new parameters or changing existing parameters to see how that affects the Jenkins interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (8), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Use conditional expressions and manual approvals](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=0)** - [Instructor] When we're developing pipelines we might need to use logic to determine if a stage should be run or not. We might also need to add some sort of manual interaction to an automated process. Let's discuss how [Jenkins](../../Skills/DevOps/Jenkins.md) exposes these two capabilities in a pipeline configuration. To set up a pipeline condition, we use the when keyword inside a stage block. The when block uses three built in conditions to determine if the steps in a stage should be run. The conditions are branch, environment, and expression. If the specified condition evaluates to true, then the stage will be allowed to run, otherwise the stage will be skipped. Branch conditions are useful when the pipeline is interacting with a [Version Control](../../Skills/Web%20Development/Version%20Control.md) system like [GitHub](../../Skills/Software%20Development/GitHub.md). This allows us to only run stages for specific branches in a repo. Environment conditions evaluate to true, if the specified environment variable is present and it contains the specified value. This can be useful for building projects that interact with different environments. Expression conditions provide the most flexibility for conditional statements. We can use groovy expressions along with parameters and other variables to build a statement that returns true or false. To learn the extent of what you can do with expressions,
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=93)** I encourage you to review the documentation on Apache Groovy operators. Along with conditionals, we can use the input step to control the flow of a pipeline. The input step pauses a triggered pipeline and waits for manual interaction to determine if the pipeline should proceed, or abort. We can also configure an input step with a custom message to give more information on what will happen if the job were to proceed. Let's use an example to demonstrate how conditional expressions and manual approvals are used in a pipeline. I've created a new pipeline job using the exercise files for this lesson. This job starts with a choice parameter for selecting an environment. I've already run this job once, so when I go back to the job interface, I'll be able to use this parameter on the next run. There are three stages in this pipeline. The first stage will run the build steps for the project. The second stage will deploy to non-production environments. In this stage, we're using a conditional expression that will only run the stage if the environment is not equal to production. So our development and staging environments will be automatically deployed in this stage. In the third stage, we're deploying to the production environment. The conditional for this stage checks the environment parameter to see if it's equal to production. If it is the stage will proceed.
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-conditional-expressions-and-manual-approvals?u=76281980&t=187)** The production deployment also uses an input step to confirm that we really want to deploy to production. So if the environment is production, the stage will start and then pause until we confirm the deployment. Let's run this pipeline I'll click Save, and then Build with Parameters. Let's just use the default development environment first to observe what will happen for a non-production environment. So I'll just click Build. The pipeline runs as expected and it completes with no problem. Let's run it again and choose the production environment. So I'll click Build with Parameters again, and this time I'll select Production, and then click Build. The project starts, but since we selected production the non-production stage is skipped. We also see that the pipeline has stopped in the Deploy to Production stage. This is because the input step is waiting for us to confirm the deployment. If I hover my mouse over that stage, I get a dialogue box with buttons to proceed with the deployment, or to abort. I'll confirm by clicking Deploy. And after I click deploy the pipeline is able to complete successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** apache (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Develop a parameterized pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=0)** - [Instructor] It's time for a challenge. You're on a development team using [Jenkins](../../Skills/DevOps/Jenkins.md) to test and deploy a new application. Your team has already developed the outline for a pipeline. Now they need to update the pipeline so that it accepts parameters for multiple environments. You've been given several requirements for the updates. You'll need to add three parameters to the existing pipeline. The first parameter should be named environment and allow the person triggering the pipeline to select the target environment. The choices for the environment should be limited to, development, staging, and production. The default environment should be development. The second parameter should be named API key and allow a secret value to be passed into the pipeline. Make sure that the API key is not exposed when the value is entered in the Jenkins interface. Use the value 123ABC as the default. And the last parameter should be named changelog and accept freeform text that can be added to a report. There are three stages in the pipeline. Test, deploy and report. Update the deploy stage to only deploy to the production environment. In the production stage, update the report
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-develop-a-parameterized-pipeline?u=76281980&t=93)** so that it uses the changelog for the content of the report. Also, it also change the name of the report so that it matches the name of the environment. A pipeline template is available in the exercise files. So I encourage you to use that to get started on this challenge. Also, if you run into any problems getting the pipeline configured properly, use the pipeline syntax tool to generate snippets for your pipeline. Specifically, take a look at the Declarative Directive Generator. This challenge should take about 15 to 20 minutes to complete. Give it a shot and meet me in the next video to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2)
> **Env Vars:** api (2)
> **Exercise Files:** template (1), exercise files (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Develop a parameterized pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=0)** - [Instructor] In this challenge, we're being asked to create a parameterized pipeline. I'm starting here in the exercise files for this challenge where there's a sample template that we can use to get started with the pipeline. So I'll click this icon here to copy the contents of the pipeline script to my clipboard. And then I'll go to my [Jenkins](../../Skills/DevOps/Jenkins.md) server which I have opened in another tab here. I'll start by clicking New Item and I'll call this one parameterized-pipeline and then select Pipeline type. Click OK, and I'll go straight to the pipeline section and paste this in. And we've copied this in. I just want to make sure that everything is good here. I'm going to click Save and then Build Now, just to make sure that there's no problems with the template or anything like that. Okay, the build has completed, we have three stages. Looks great. Test, Deploy, and Report. So if I recall the challenge, we needed to add parameters that allowed someone to enter the environment, an API key, and a change log. So let's configure this, and then instead of editing the pipeline directly, which is perfectly fine, I'm going to use the Pipeline Syntax link here to get me to the Snippet Generator. It's under the Declarative Directive Generator. I'm going to use the Parameters directive.
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=95)** And I'm going to add all the parameters that I need right up front. I'm going to add a Choice Parameter. I'm going to add Password Parameter for the API key. And then I will also add a, let's see, Multi-line String Parameter for the change log. Okay, that kind of gives us an outline for all our parameters. Now I want to go back and fill these in. The first one was ENVIRONMENT. And the choices for that were going to be DEVELOPMENT, STAGING and PRODUCTION. Okay. And DEVELOPMENT'S going to be our default because it is the first one. And for the description I'll just say, select an environment for deployment. Okay, let's go on to the Password Parameter. The name for this one we're supposed to use is API_KEY. And the default value, super secret value, is 123ABC. And for this one, I will say, enter the API key. Now let's move on to the Multi-line String Parameter, which is... I believe the name for this one was CHANGELOG. And I will enter... The default value was supposed to be, this is the change log. And for the description, I'll just say, enter the change log. Okay, so all of the configuration is done for our parameters. We just need to generate the snippet. So I will click Generate Declarative Directive.
>
> **[3:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=191)** And that gives us all of this for free, we didn't have to code anything. And I will just select this, copy it. And now let's go back to the pipeline, which is open in another tab. And right here under agent, I will add the parameters configuration. I'll clean this up a little bit. And just to make sure that this is work that I haven't introduced any errors in the syntax, I will save this and build it. We also have to build it, since these are parameters, we have to build it once successfully so that we can even access these parameters. So I've built it, that finished successfully, let's reload. Okay, so now we get the option to build with parameters, and let's check this out. That's not exactly correct. This is all on one line, so I'm going to need to fix that one. And I think I know what happened there. We did get the API_KEY correct. This value is concealed, and if we change it, the value is hidden in here. And the CHANGELOG is correct. Let's fix this ENVIRONMENT thing 'cause that is not correct. Okay, let's go down to here. And for the choices, I know what it is. These are all entered as one long string instead of three separate strings. So by placing my single quotes on either side of the commas, I can fix that problem. So let's save this. I'm going to have to build it again though now just to make sure that that gets picked up.
>
> **[4:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=283)** 'Cause when I click build for parameters now we're not going to see that change that I just made, but I'm going to click Build anyway just to build it and I'll wait for this to finish. Okay, it's finished now. I'll click Build with Parameters, and yes, this looks much better. I've got choices now for DEVELOPMENT, STAGING and PRODUCTION. Okay, the next thing that we needed to do was configure the deploy stage so that it only deploys to the production environment. And then we also need to update the report to use the change log and the environment name for the file. So let's go into Configure. Scroll down. I'll just click this to get down to the pipeline section. And let's go to the deploy stage. So for this one, we need to add a condition. And I will use the when to start this. And we are going to use an expression. We need to access the ENVIRONMENT parameter, and I know that starts with the keyword parans, followed by a dot, and then the parameter is ENVIRONMENT. And that has to be equal to PRODUCTION. And let's close out all of these curly braces, there are two of them. So that should be all we need to do for this stage to be deployed only for the production environment. Okay, so now let's fix the REPORT stage to report... Let's see. So for this, where this says, this is the change log, we need to change this
>
> **[6:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=378)** so that it uses the CHANGELOG parameter. Now, since this is inside a string, we need to start the value with a dollar sign. And I like to wrap it in curly braces. And inside here, I'm going to write the params keyword, followed by a dot, and then CHANGELOG. Okay, that should get it. I'm pretty confident there. And for the report name we need to use the name of the environment. So I will change REPORT to... This is also in a string, so it's going to be dollar sign inside curly braces, params.ENVIRONMENT. Okay, I'm pretty confident that this looks good. So let's save this and build with parameters. Let's pick DEVELOPMENT first to see if the report name changes. So I'll keep the default, I'll click Build, and we'll wait for the build to complete. Okay, let me reload the page to see if... Yes, we did get a report for the DEVELOPMENT environment. That's good. Also, for this last run, it skipped the deployment because the environment was not PRODUCTION. Let's run it one more time and select PRODUCTION this time. If we do that and it's correct, then we should get a deployment and we should also get an artifact for the PRODUCTION environment.
>
> **[7:52](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=472)** So let's build with parameters. I'm going to select the PRODUCTION environment. And in the change log, I will write, I hope this works. Okay, and now I will click Build. And let this finish. Should finish pretty quickly. Okay, so it's looking pretty good. We got a deployment. So that means it did deploy for the PRODUCTION environment. We got an artifact and there is our PRODUCTION artifact. I want to reload it so I can see it up here at the top. And let's view the inside of this artifact to see if it actually has the value that I passed in as a parameter. And yes, it does. Awesome. So let's go back to the job page here. So let's just kind of review what we did. We created a pipeline job and added parameters. Those parameters were for an environment that exposed three options, DEVELOPMENT, STAGING and PRODUCTION. We added an API key, which used the password type for a parameter, which protects the value that's being passed into the job. And then we added a change log parameter which used the Multi-line String type so that we could enter multiple lines here in this large text field. Then we... Let me go back to the top of this. Let's see, I'll go back to this run. And go back to project. Yes, that's what I wanted to do. So then, we added some conditions that only allowed deployments to happen
>
> **[9:26](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-develop-a-parameterized-pipeline?u=76281980&t=566)** for the PRODUCTION environment. So we did two tests there. We deployed once with the DEVELOPMENT environment and this deployment was skipped. And then we deployed again with the PRODUCTION environment and we did get a deployment. So that worked perfectly. The last change we did is we modified the report name from report.txt to use the name of the environment that was selected as a parameter. And in our test for the DEVELOPMENT environment, indeed we got the development.txt artifact. And when we tested with the PRODUCTION environment, we got production.txt. After all of that, I think that this challenge has been solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Env Vars:** production (13), development (8), environment (5), api (4), changelog (4)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (2), scroll down (1), select the (1)
> **File Paths:** report.txt (1), development.txt (1), production.txt (1)
> **Exercise Files:** template (2), exercise files (1)
> **Prerequisites:** configure (3)


### 3. Integrate Jenkins with Version Control Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Pipeline as code with Jenkinsfile](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=0)** - [Instructor] In the previous chapters of this course, we used declarative pipelines to create projects in [Jenkins](../../Skills/DevOps/Jenkins.md). However, we still used a manual approach to create the jobs. We entered the pipeline definition directly into the Jenkins user interface. This approach works perfectly fine but it doesn't lend itself to automation and tracking changes. To increase automation and track changes to pipelines we can use the option to get pipelines from source control management. By clicking here and selecting pipeline script from SCM. With this option selected, we're presented with a dialogue to select the source control management system and a path to a script called Jenkins file. Let's stop here for a moment to define what a Jenkins file is and how we can use a Jenkins file in our projects. We can use the Jenkins file format to capture our pipeline definition as code. And since this definition is a text based file, we can store it along with any other project files in a repository, like code used to build an application. And just like any other file in a repository we can track changes made to the pipeline definition, but the Jenkins file lets us go beyond just capturing a pipeline. It also lets us define the project configuration itself. We can use a Jenkins file to capture definitions for tools, options for our project, and triggers to run a project, and much more. Essentially any configuration that we could make
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=95)** in the Jenkins graphical user interface we can capture as code in the Jenkins file and store it along with any other files in the repo. You'll see some of these pipeline sections used in upcoming lessons. Storing the Jenkins file in a repo also allows development teams to use a GitOps approach. This means the repository becomes the single source of truth for everything associated with the project, from the application code to configuration for tools that support the application, including [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) tools like Jenkins. With GitOps, any changes made to the pipeline can be reviewed and discussed with the team before being merged and applied using an automated process. Now that we know how we can use and benefit from a Jenkins file, let's use a pipeline stored in a source control management system with a job we were looking at earlier. Jenkins can interact with many different types of [Version Control](../../Skills/Web%20Development/Version%20Control.md) systems, like (indistinct) or Subversion, but the [Git](../../Skills/Software%20Development/Git.md) system is probably the most popular. In this case, the system I'm using has the Git plugin installed so I'll select that option under SCM. Now I'm prompted to enter the repository URL and any credentials I might need to access the repo. For this demo, I'll enter the repo for the exercise files. I've cloned them into my own repository.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=190)** But before I do that, I'll select my credentials. At the time that I'm recording this, the exercise files repo is private. So I need to add my credentials to access it. By the time you access this lesson, the exercise files repo will be open and available for you to access without credentials. So now I will paste in the URL for my clone of the exercise files repository. And let me scroll down just a little bit here so we can see the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this dialogue. Under branches to build, I need to change the branch specifier from master to main. Most modern repos use main as the default branch but the default for the Git plugin at the time that I'm recording this still uses master for this option. After that, we need to configure the script path. So let me scroll down a little bit so we can see that. This is the location that Jenkins will use to find the Jenkins file in the repository. In most cases, the Jenkins file is placed in the root of their repository. However, you may also find repos where the Jenkins file is located in a sub folder. If that's the case, then you would put the path to the Jenkins file in this location. And with all of this configuration in place, we can click save and then build a project. I'll click save and build now. So now Jenkins has checked out our repository locally and used the project configuration
>
> **[4:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/pipeline-as-code-with-jenkinsfile?u=76281980&t=284)** from the Jenkins file located in the repo. We see two stages in this pipeline, the first one where Jenkins checked out the code and the second one that's instructing us to read the logs. I'll leave it as a challenge for you to create a project pipeline using the exercise files repo so you can see the content of the logs. I'm sure you'll find some very helpful information there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (22), [Git](../../Skills/Software%20Development/Git.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** git (3), find (3), make (1)
> **Exercise Files:** exercise files (5)
> **Env Vars:** scm (2), url (2)
> **UI Navigation:** scroll down (2), select the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)

#### [Connect Jenkins to GitHub](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=0)** - [Instructor] Now that we've seen the benefit of using a [Jenkins](../../Skills/DevOps/Jenkins.md) file from a source control system, let's go over the steps needed to connect Jenkins to a [GitHub](../../Skills/Software%20Development/GitHub.md) repository, and then we'll use a change in the repo to trigger a build in Jenkins. If you're following along with this demonstration, you'll need to have a Jenkins server that is publicly accessible and a GitHub account. I'm starting here in the exercise files so I can grab a copy of the Jenkins file for this lesson. All I need to do is click this icon to copy the Jenkins file to my clipboard. Now, I can go to a new repository that I'll be using to integrate with Jenkins. In the new repository, I'll add the Jenkins file by clicking Add file, Create new file, and then naming the file Jenkinsfile. And then I'll paste in the contents from the exercise file. And if I scroll down to the bottom of this screen, I want to commit this directly to the main branch so I'll leave that set and click Commit new file. When I configure the job that'll be using this repo in Jenkins, I know that I'll need this repo's URL, and I can get that by clicking this green button labeled Code, making sure I'm on the HTTPS tab, and then clicking this icon to copy the URL to my clipboard. Now I'll set up my job in Jenkins. On my Jenkins server, I'll start by clicking New item
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=95)** and then entering a name. I like to use the same name as the repo that the job is connected to. So I'll enter connect-jenkins-to-github. And then I'll select Pipeline and click OK. The first thing that I'll do is select this option here for a GitHub project and then paste in the repo URL. This step is optional. It doesn't really do anything for our job, but on the Jenkins interface for this job, it will create a link to the repo. And so that'll just be an easy way for us to go back and forth between Jenkins and the GitHub repo. Next, I'll go to the Build Triggers section. Here I need to select this option for GitHub hook trigger for GTScm polling. This is what enables the trigger that will allow Jenkins to respond to a webhook from GitHub so this is key to having this set up in place. Next, I'll go to the Pipeline section and I'll select Pipeline script from SCM. Under SCM, I'll select [Git](../../Skills/Software%20Development/Git.md). And then for the repository URL, I'll paste in the URL. Now, if I scroll down just a little bit more under Branch Specifier, I need to change this to main. For the Script Path, I can leave this as the default. And now I'll click Save and Build Now.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=190)** I should add that the project must run at least one successful build before it connects to GitHub. This allows Jenkins to read the configuration from the repository. And it looks like this build has been successful. We see the checkout in the first stage and then the remaining stages of the pipeline. Now that Jenkins is set up, we can create the webhook in GitHub so that our job gets triggered on each push to the repo. When we configure the webhook in GitHub, we'll need the URL for our Jenkins server. And the way that I like to get that is to right click the icon here in the upper left hand corner and select Copy Link Address. That will copy the URL for the Jenkins server to the clipboard. Okay, now let's go to the GitHub repo. In the GitHub repo I'll select Settings and then Webhooks, and then Add webhook. Under Payload URL, I'll paste in the URL for the Jenkins server. At the end, I need to add some additional information. I need to add github-webhook and then a trailing slash. This is very key to having this integration in place. It has to be exactly like this. It has to have github-webhook and then a trailing slash. Under Content Type, I'll select Application [JSON](../../Skills/Web%20Development/JSON.md). And then I'll scroll down and I just want the push event, so this is fine and I'll select Add webhook.
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/connect-jenkins-to-github?u=76281980&t=287)** After adding a webhook, GitHub will ping the Jenkins server and indicate a successful connection with a green checkmark next to the webhook name. If your webhook doesn't indicate that it connected successfully, select Edit and check your settings again. If needed, delete the webhook and start over. And I'm just going to refresh the screen here. And yes, I get the green checkmark. So my webhook has been successfully connected to my Jenkins server. Now I want to see if I can trigger a build in Jenkins by pushing a change to this repo. So I'll go to Code and then I'm just going to edit the README file. I'll click the pencil here and I'll add a change. And after adding that change, I'll scroll to the bottom and commit directly to the main branch. I'll click Commit changes. Okay, now, if I go back to my Jenkins server, I should see a new build. And sure enough, a build was triggered and I can see that there was a commit indicated that the README file was updated. So this is just a demonstration of how we can set up a GitHub repo, get the information there, and go over to Jenkins, connect the Jenkins job to GitHub, and then we have to do that extra step where we go back to GitHub and create the webhook and then any changes that we make to that repo are going to be pushed to the Jenkins server and trigger a new build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (27), [GitHub](../../Skills/Software%20Development/GitHub.md) (18), [Git](../../Skills/Software%20Development/Git.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Tools:** github (18)
> **Env Vars:** url (9), scm (2), readme (2), https (1), json (1)
> **UI Navigation:** go to (5), scroll down (3)
> **Prerequisites:** set up (4), configure (2), you'll need (1)
> **Exercise Files:** github repo (4), exercise files (1), exercise file (1)
> **CLI Commands:** git (1), make (1)
> **Documentation:** the readme (2)

#### [Run scripts from the pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=0)** - [Instructor] In the previous lesson we saw how we can benefit by storing pipeline definitions as code in a [Version Control](../../Skills/Web%20Development/Version%20Control.md) system like [GitHub](../../Skills/Software%20Development/GitHub.md). We can also store any supporting files in scripts needed to build a project. This can enable a pipeline to run build commands and scripts that might be far too complex to run directly in the pipeline. Combining multiple steps into a single script also keeps the pipeline definition clear and easy to debug. There are two build steps that [Jenkins](../../Skills/DevOps/Jenkins.md) uses to run external commands. We've already seen the sh build step, which runs commands on the build agent using the default shell. This step is useful on agents running [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), Unix or macOS. The bat build step has a similar function on [Windows](../../Glossary/Service/Windows.md) systems. In either case the sh or bat step would contain the command to run, or the path to a script, or a program. Note that for scripts that are located in a repo, a relative path can be used and must match the format expected by the system running the command. If the script or command is located outside of the workspace, where the repo was checked out, an absolute path must be used. One other build step you might need to use with external commands is the dir, or directory build step.
>
> **[1:36](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=96)** The dir step takes a path as an argument. For paths relative to the workspace where a repo was checked out, the workspace environment variable can be used to describe the path. This tells Jenkins to change to the directory before running any steps that are contained inside the dir step. This is useful if your pipeline needs to run commands in a specific directory. Let's look at an example pipeline that runs a script located in the same repo as the Jenkins file. The exercise files for this lesson include a Jenkins file and a script that calculates a Fibonacci sequence. I've created a new repo in my personal GitHub account and added these files. In the new repo I've placed the Jenkins file at the root of the repository. That's the default location that Jenkins will use to look for the Jenkins file, when we check out this repo into a workspace. I've placed the file here so we can see how the pipeline can reference scripts in different locations inside a repo. Let's take a look at the Jenkins file. The pipeline has four stages. In the first stage, I'm using a chmod command to make the script executable. This is needed for Jenkins to be able to run the script on the system where the job is running. In the next three stages I'm using different methods
>
> **[3:11](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=191)** to call the same script. First using a relative path, then using the full path to the script, and finally changing into the directory where the script is located. Let's look at the Jenkins job that uses this pipeline. On my Jenkins server I've configured a new job to run the pipeline from the Fibonacci repo. I've added the repository URL, and I've updated the branch specifier to use the main branch, and I've left the script path as the default, so that Jenkins will find the Jenkins file in the root of the repo. This pipeline is parameterized, but I need to run it at least once to configure the job, so that it recognizes the parameters. I'll click Save, and then Build Now. Now that the job has run once, I can refresh the screen to get the option to Build with Parameters. Let's give that a shot. Prompt it to select the number for the Fibonacci sequence. Let's pick a big one, I'll select 60, and then I'll click Build. Okay, the job is finished and we can see each of the stages in the pipeline. If we look at the output from one of the stages, we can see that indeed our script ran
>
> **[4:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/run-scripts-from-the-pipeline?u=76281980&t=283)** and the Fibonacci sequence was generated. I'll leave it as an exercise for you to run this job and check the output from each stage to make sure that the output is the same. What I'd like to show you now though, is the way that Jenkins interpreted the path to the script in each of these different scenarios. Let's close this and then click into the most recent run and then click pipeline steps. In this view, we can see the path to these shell script for each call that was made. And I'll scroll down a little bit here, so we can see each of these paths. Here we can see the relative path, and a little bit further down the full path. And if I scroll down to the very bottom here, we can see where Jenkins changed into the directory and ran the script from that location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (15), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (2), chmod (1), find (1)
> **UI Navigation:** scroll down (2), select the (1)
> **Tools:** github (2)
> **Code Identifiers:** macos (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### [Add a status badge to Markdown files](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=0)** - [Instructor] Displaying a status badge is another way to connect [Jenkins](../../Skills/DevOps/Jenkins.md) with a [Version Control](../../Skills/Web%20Development/Version%20Control.md) system. Status badges are dynamically generated images that communicate whether a build is passing or failing. Typically, status badges are a place in the README file for a [GitHub](../../Skills/Software%20Development/GitHub.md) repository. However, they can also be embedded in webpages or other online documents. To enable status badges, we need to install the Embeddable Build Status plugin. Let's install this plugin and add a status badge to the README file in the GitHub repo. I'm logged into my Jenkins server, and I'm going to add the embeddable build status plugin, so that we can add a badge to a GitHub repo for the fibonacci job from the previous lesson. I'll start by selecting Manage Jenkins, and then Manage Plugins. On this screen, I'll select the Available tab, and then filter on the keyword, embed. Okay, there's the Embeddable Build Status plugin, which is exactly what I'm looking for. So I'll select that, and then click download now and install after restart. On this screen, I'll click restart Jenkins when installation is complete and no jobs are running. This will allow Jenkins to restart,
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=93)** and when it comes back, we'll be ready to use the plugin. Now that Jenkins is ready for us, I'll log in and go to the fibonacci job. With the in Embeddable Build Status plugin installed, we get a new option on the jobs homepage, right here, so I'll select that. This gives us a screen with different options for embedding build status icons. If I scroll down a little bit, you can see that there are plenty of options to choose from. We want to embed a status badge in a README file, which is a markdown document, so that's going to be the best option for us. And for the most flexibility for viewing the icon, we want the unprotected option. So I'm going to copy this line here, and then I'll go to my repository and paste it in my README file. Okay, I'm in my GitHub repo now, and I want to edit the README file, So I'll click this little pencil icon here to start editing. And I'm just going to paste the snippet just below the header here, so it's easy to see. And now I'll commit these changes directly to the main branch. All right, now we have this beautiful badge in our README file, showing the build status. Fortunately, it's passing right now,
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-a-status-badge-to-markdown-files?u=76281980&t=187)** so our work here is done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Env Vars:** readme (6)
> **Tools:** github (4)
> **UI Navigation:** go to (2), select the (1), scroll down (1)
> **Documentation:** the readme (3)
> **Exercise Files:** github repo (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (1)

#### [Challenge: Connect Jenkins to GitHub](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-connect-jenkins-to-github?u=76281980&t=0)** - [Instructor] It's time for a challenge. You're on a team developing an algorithm that calculates the value of pie. The code for the project is being stored in a [GitHub](../../Skills/Software%20Development/GitHub.md) repository. The team wants to test the latest changes to the algorithm with every push to the repo. They also want to display the status of the most recent test directly in the repo's ReadMe file. To solve this challenge, create a new GitHub repo and add the exercise files for this lesson. Then, create a new pipeline project that pulls the code from the repo and uses the [Jenkins](../../Skills/DevOps/Jenkins.md) file. Finally, install the Embeddable Status plugin and update the GitHub repo to show the status of the project. This challenge should take about 15 to 20 minutes to complete. Once you have your solution in place, meet me in the next lesson to discuss the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Tools:** github (3)
> **Exercise Files:** github repo (2), exercise files (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Connect Jenkins to GitHub](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=0)** - [Instructor] We've got quite a few tasks to take care of in this challenge. And I'm starting here in [GitHub](../../Skills/Software%20Development/GitHub.md) where I've created a new repo and added the exercise files. I have a [Jenkins](../../Skills/DevOps/Jenkins.md) file and the script which runs the algorithm to compute the value of Pi. I'm going to start here by getting the URL for this repo so when I create a job in Jenkins I can connect it back to this repo. So I'll click the code button here. And on the HTTPS tab, I will click these stacked squares to copy the URL. And now I'll go over to my Jenkins server. In the Jenkins server, I'll click new item and I'm going to use the same name as the repo that I created. I called it pi-challenge and then I'll click pipeline and then, okay. All right. This is a GitHub project. So I'll go ahead and add the URL here in case I need to get back to the repo and then I'll scroll down to build triggers. I need to enable GitHub hook trigger for GITScm polling. That's going to be key to get GitHub to send a webhook to Jenkins so that it triggers a job when changes are pushed to the repo. Then under pipeline, I'm going to select pipeline script from SCM. This is a GitHub repo so I need to select [Git](../../Skills/Software%20Development/Git.md). I'll get to that in a second
>
> **[1:31](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=91)** but for the repository URL, I copied it. So I'll paste that in. This is a public repo, so I don't need any credentials. I'm going to change the branch specifier though. I need to change this to main to match the new branch specifier that GitHub is using for new repos. And then for the script path, I'll leave this as the default, because my Jenkins file is indeed at the root of the repository. Okay, I'll click save here and then build now. I do have to build the job once before I put the next part together, because Jenkins needs to get the hook, or rather it needs to start the hook to GitHub on this side before we go back to GitHub and actually add the webhook that will trigger Jenkins. Okay, everything looks pretty good here. So I'm going to copy the URL for the Jenkins server. I just like to go here and then copy link address. And now I'm going to go back to GitHub and create the webhook. Okay, back in my GitHub repo, I'm going to click settings and then go to webhooks and then add webhook. You may need to confirm your access so I'm going to use my password to log in. Yes, that is it. So now I'll paste in the repo for my Jenkins server. And at the end of this, I need to add github-webhook and then a trailing slash, this is key to make sure
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=190)** that GitHub has the correct payload URL to trigger the job in Jenkins. If this isn't correct, if github or webhook is misspelled or if that trailing slash is missing, then this configuration will throw everything off. So I really want to make sure that this is squared away. And then under content type, I need to select application/[JSON](../../Skills/Web%20Development/JSON.md). Scroll down here and I just want the push event. I will keep this active and let's add this webhook. And if everything goes well, GitHub sends a ping payload to test it out. I've found that I have to reload this page just to make sure. And yes, I do get the ping letting me know that the last delivery was successful. So what I want to test now is triggering a build in Jenkins from here in GitHub. So I'll go to code and I know there was something because I looked at the exercise files before I added them here. Under algorithm there is a little instruction that says uncomment the following line to get a more precise calculation of pi and remove the previous echo statements. So I'm going to do that to test my bill trigger. I'm going to delete these first couple lines and I'll go ahead and delete this one too. And then just uncomment this last echo. And then for my change, I'll say improve calculation of pi. Alrighty.
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=287)** And then I'm going to commit directly to the main branch and I'll just click commit changes. Okay, let's go over to the Jenkins server now to see if we triggered a build. Okay, it does indeed look like we triggered a build. We have build number two, which when I set up the job, I triggered a build manually. We got build number one. I made a change in GitHub and that triggered build number two. And then we also see that there is a commit here and this is the same message that I typed over in GitHub, "Improved calculation of pie." So that part of the challenge is set. We can make changes in GitHub and we'll trigger the jobs here in Jenkins. The next part that we need to do is add a status badge to the GitHub repo's readme file. And to do that we need to have the embeddable build status plugin in place. So let me check that first. I'll go to dashboard, manage Jenkins, manage plugins, and I already have this plugin installed. I'm just going to confirm that it's there for the sake of demonstrating this. I'm going to filter on embed, and there is the build status plugin. It's enabled so I'm good to go to be able to get a status badge for my job. So let's go back to the dashboard and I'm going to go to the pi-challenge job and then click embeddable build status here. And I will scroll down to the markdown section. I want the unprotected version of the image.
>
> **[6:23](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-connect-jenkins-to-github?u=76281980&t=383)** So I'll copy that and now I'm going to go back to GitHub and update my readme file with this particular snippet of code. Okay, over in GitHub, I'm going to go to code and then readme and I will edit this file by clicking this pencil here. And then at the top of the file, I'm going to put that snippet in there and put a carriage return after it, just so it's pretty, let's look at the preview. That's looking wonderful. So I'll go ahead and commit this to the main branch, which also by the way, should trigger another build on the Jenkins job. Okay so just in review, we created a new repo. I added the exercise files and then went over to Jenkins and created a job that connected to the new repo. I went back to the repo and created the webhook that will trigger the Jenkins job on every push. We confirmed that that worked. And then the last thing that we needed to do was add this build status badge, by making sure that the embeddable build status plugin was installed. And then going back to the job and getting the snippet that the plugin generates, so that we can update the readme file here in GitHub and everything worked all together. Amazing. So I believe that this challenge has been solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (22), [Jenkins](../../Skills/DevOps/Jenkins.md) (18), [Git](../../Skills/Software%20Development/Git.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Tools:** github (22)
> **Env Vars:** url (6), https (1), scm (1)
> **UI Navigation:** go to (5), scroll down (3)
> **Exercise Files:** exercise files (3), github repo (3)
> **CLI Commands:** make (4), git (1)
> **Definitions:** is a  (5)
> **Cross-References:** go back to (4)


### 4. Agents and Distributed Builds

[↑ Back to Table of Contents](#table-of-contents)

#### [Distribute builds with agents](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=0)** - [Instructor] The [Jenkins](../../Skills/DevOps/Jenkins.md) server, which is also referred to as the Jenkins controller provides a web interface that we can use to manage the overall configuration of our Jenkins server. Up to this point in the course, we've been running jobs directly on the controller. A best practice though, is to limit the jobs that are run on the controller, and only run jobs on other servers, which are referred to as nodes or agents. This approach frees up CPU, memory, and hard drive space on the Jenkins controller so it can use those resources for management tasks like scheduling jobs. A node is another server or system that is connected to Jenkins over a network. Nodes provide the Jenkins controller with a compute resource for running jobs. When Jenkins starts a job on a node, the job is managed by a process called an agent. The agent runs the commands in the job definition, and reports the status back to the Jenkins controller. In reality, nodes and agents are different parts of a Jenkins system but you will often hear either term used to refer to an external system where Jenkins runs jobs. There are many types of nodes and agents that Jenkins can use as compute resources. One of the most common node types is a secure shell or SSH node. In this case, Jenkins connects to a server as a specific user with an SSH key.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=97)** This secure method is particularly useful if the node is not on the same network as the Jenkins controller. A server running any operating system can be configured as an SSH node as long as it accepts SSH connections has a user and a key that Jenkins can use, and also has a recent version of [Java](../../Skills/Software%20Development/Java.md) installed. Having Java installed on the node is essential because the agent process is a Java-based application. Jenkins can also use nodes and agents that run as containers also known as Docker agents. With Docker agents, the Jenkins controller runs jobs in a newly created container on each build. This has the benefit of the job running in a fresh and isolated environment every time. For Docker agents to work, a Docker process must be running on the node. When we start using nodes, and agents in pipeline jobs, there are some things we have to keep in mind. First, we have to pay more attention to the agent configuration. So far we've been using agent any, which allows Jenkins to run the job on the first available agent. But as we start adding nodes, and agents with different capabilities, we can use labels or keywords that identify a specific agent. We may also need to configure a pipeline to install any tools that it needs to run.
>
> **[3:10](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=190)** This will give a pipeline more control over the version of a specific tool while also making sure the tool is available to use. Another thing we need to pay attention to is checking out code when a job is associated with a repository. When Jenkins uses a pipeline from a repository, the first checkout is on the Jenkins controller. This allows Jenkins to read and process the Jenkins file to get the project configuration. When Jenkins starts running the job on an agent, the code that was initially checked out won't be available. In this case, the pipeline needs to be updated with a step to check out the code so that it can be used on the agent. Before we get into examples of using nodes and agents, let's take a look at a tool configuration we need to have in place first. I'm logged into my Jenkins server, and I've opened up the Manage Jenkins page. In upcoming lessons, I'll be demonstrating how a tool can be installed on a node, and I want to show you a configuration that I have in place for Maven. From here, I'll select Global Tool Configuration. And if I scroll to the Maven section all the way down at the bottom, I can view the Maven installations. You can see I've already set up an installation called Maven-3.8.4. And it's set up to install automatically. With this configuration in place,
>
> **[4:43](https://www.linkedin.com/learning/jenkins-essential-training-17420152/distribute-builds-with-agents?u=76281980&t=283)** I'll be able to reference this tool by name and the pipelines I'll be using. If you're following along, and using the exercise files, please set up a Maven installation using the same configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (24), [Java](../../Skills/Software%20Development/Java.md) (3)
> **CLI Commands:** node (9), ssh (4), docker (4)
> **Prerequisites:** set up (3), install (2), configure (1)
> **Env Vars:** ssh (4), cpu (1)
> **Definitions:** is a  (2), known as (1)
> **Versions:** 3.8.4 (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** best practice (1)

#### [Add an SSH agent to Jenkins](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=0)** - [Instructor] In this lesson, I'll be demonstrating how to connect to a node using SSH. If you're following along, you'll need to have a server that can be reached from your [Jenkins](../../Skills/DevOps/Jenkins.md) server via SSH, along with a user and SSH key for opening the SSH connection. I'll be using an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance running in AWS. For complete details on setting up a build server in AWS, please review my course, Running Jenkins on AWS. I'm starting here on the Manage Jenkins screen. From here I'll select Manage Nodes and Clouds. And on this screen, I'll select New Node. I'll name the node [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) to match the key name and then select a Permanent Agent, which is really the only option at the moment. Selecting Create opens a dialogue where I can enter all the details that Jenkins needs to connect to this node. For the Remote root directory I'll enter /home/ec2-user. Jenkins will use this directory to create workspaces when jobs are run on this node. For the Label I'll add linux. For usage, I want to limit the jobs that get run on this node to jobs that explicitly use the Linux label, so I'll select that option.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=99)** For the Launch method I'll select Launch agents via SSH. For the Host I need to enter the DNS name or IP address that Jenkins will use to look up my server. For the credentials I'll select Add, and then Jenkins. And now I can enter the details for the username and key that Jenkins will use to connect. The kind of credential I need to add is an SSH username with a private key, so I'll select that. For the ID and Description I'll enter linux. And for the Username I'll enter ec2-user. For the SSH key I have to click this button here or select this radio button here to enter the key directly, which opens up a dialogue. Clicking Add here opens up a field where I can paste in the key. I have the key open in an editor, so I'll go there. In the editor I'm going to select all and then copy the entire contents of this file. And then I'll go back to Jenkins and paste in the material. This key doesn't have a Passphrase, so I'll just click Add. Now I can select the key that I just added. For the Host Key Verification Strategy
>
> **[3:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=195)** I want to use the Non verifying Verification Strategy. If we wanted, we could have Jenkins connect to this node on a schedule, but for now I want to keep this agent online as much as possible, so I'll select that. Now I'll click Save to connect and launch the agent. From here, I can select the agent icon and then go to Log. This shows the output of Jenkins connecting to the server where the agent is being launched. If there were any problems with the connection this would be the perfect place to look for error messages. Okay, but it looks like Jenkins has connected successfully, and our agent is online. Now that we have an agent, let's run a pipeline job that uses it. I've created a new pipeline job that uses the Linux agent I just added. At the top of the pipeline configuration, I've added the label keyword to identify the agent I want this job to run on. In the source stage, I'm using a [Git](../../Skills/Software%20Development/Git.md) step to check out the code for a [Java](../../Skills/Software%20Development/Java.md) application. I fork the exercise files into my own [GitHub](../../Skills/Software%20Development/GitHub.md) account and I'm using credentials to access the repo. At the time that I'm recording this, the exercise files aren't publicly available. By the time you view this course and access these exercise files, you won't have to worry about entering credentials. After checking out the code, the pipeline cleans things up a bit,
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=287)** runs some tests, and then packages the code. Let's take this pipeline for a spin. I'll click Save and then Build Now.
>
> **[5:03](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-an-ssh-agent-to-jenkins?u=76281980&t=303)** Now that the pipeline has finished, let's confirm the SSH agent was used by checking the console log. I'll click into the latest build and then click Console Output. At the very beginning of this output Jenkins gives us a message showing where the job was run along with the location of the workspace. This is a great indication that our job successfully ran on the Linux agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (13), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (6), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Git](../../Skills/Software%20Development/Git.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** ssh (8), node (7), aws (3), git (1)
> **Env Vars:** ssh (8), aws (3), ec2 (1), dns (1)
> **UI Navigation:** select the (2), go to (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)

#### [Add Docker agents to Jenkins](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=0)** - [Instructor] In this lesson, I'll be demonstrating how to run a Pipeline project using a Docker agent. If you're following along, you'll need to have a few things set up on your [Jenkins](../../Skills/DevOps/Jenkins.md) server. First, your server may need additional storage and memory resources. As your server downloads images, it will need space to store them. And running builds using a Docker process will require more RAM as well. So if your Jenkins server is running out of space or seems to be running slowly, you might consider increasing the resources just a bit. Your Jenkins server will also need to have Docker installed as a service. For this demo, I'll be running Docker directly on the Jenkins server. So I'll be making sure the service is available for Jenkins to use. And finally, your Jenkins server will need to have the Docker Pipeline plugin installed. This will allow Jenkins to use the Docker agent keyword in a pipeline definition. I'm connected to my Jenkins server via SSH. And I wanted to start here to confirm that Docker is installed and available for Jenkins to use. To check that, I'll run docker --version and docker ps.
>
> **[1:20](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=80)** This shows me the Docker [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) is on my path and also that the Docker service is running and ready to process commands. Now let's go to the Jenkins console. I'm in the Jenkins console now, and I'm starting on the Manage Jenkins page. From here, I'll go to Manage Plugins. And then to the Installed tab. I want to confirm that the Docker pipeline plugin is installed. So I'll filter for the plugin name. There's the Docker pipeline plugin. It's already installed so my pipeline scripts will be able to use the Docker keyword for the agent configuration. Okay, let's run a job that does exactly that. I've used the exercise files for this lesson to create a pipeline job that runs all of its steps inside a Docker agent. At the top of the pipeline, I'm specifying that I want to use the latest image for Maven from a publicly accessible image registry. In previous lessons, we used a tool configuration to install a tool automatically. But using a Docker image, my pipelines can get the latest version of the tool every time the pipeline is run. If I wanted to keep the image version constant, I could replace the tag latest with a specific version. At the start of the pipeline, I have a stage that checks out application code from my fork of the exercise files. I'm using credentials
>
> **[2:51](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=171)** because at the time I'm recording this, the exercise files are stored in a private repo. By the time you access the exercise files. you won't have to enter credentials. In the stages following the checkout, I'm running stages that call Maven to clean, test, and package the application. Let's run this pipeline, I'll click Save and then Build Now.
>
> **[3:18](https://www.linkedin.com/learning/jenkins-essential-training-17420152/add-docker-agents-to-jenkins?u=76281980&t=198)** now that the build has completed, let's look at the output. I'll click into the latest build and then click Console output. The log shows that indeed we are running on the Jenkins server. But further down, we can see the Docker commands that Jenkins is using to start a process with the container image. After that, the following commands are run inside the container. And if we go to the end of the log, there are two more Docker commands where Jenkins is stopping and removing the container. So even though Jenkins may reuse the image for future runs of this pipeline, each session will start with a new container which will be removed when the job completes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (16), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** docker (18), ssh (1)
> **Exercise Files:** exercise files (4)
> **Env Vars:** ram (1), ssh (1), cli (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** you'll need (1), set up (1), install (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Improve a Docker agent pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-improve-a-docker-agent-pipeline?u=76281980&t=0)** - [Instructor] It's time for a challenge. You're an open source developer contributing to the Hugo Project. A static site generator developed in Golang. You're using a [Jenkins](../../Skills/DevOps/Jenkins.md) pipeline with a Docker agent to validate your changes. However, you're finding that your pipeline is taking a long time in the build stage. You do some research and find that your build is downloading dependencies on each run of the pipeline. After discussing the issue with a team member, you find that you can speed up your builds by moving the dependency cache into the project workspace. To solve this challenge, set up a Jenkins server that can use Docker agents in a pipeline. You'll need to have Docker installed on the Jenkins server. You'll also need to install the Docker Pipeline plugin. Use the exercise files for this lesson to create the pipeline job that builds and tests the Hugo application. Run the pipeline once to see how long a build takes without using a persistent cache. Then update the pipeline to use a cache located in the project workspace. Run the pipeline again as needed and compare the build times. This challenge should take about 15 to 20 minutes to complete. After you improve the pipeline, join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3)
> **CLI Commands:** docker (4), find (2)
> **Prerequisites:** set up (1), you'll need (1), install (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Improve a Docker agent pipeline](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=5)** - [Instructor] In this challenge, we're trying to speed up a pipeline that uses a Docker agent. I'm starting out by connecting to my [Jenkins](../../Skills/DevOps/Jenkins.md) server via SSH to confirm that Docker is installed. I'll check that by running Docker -- version and then Docker PS. These two commands run fine which lets me know that the Docker service is running and ready to process commands. Next, I need to make sure my Jenkins server has the Docker pipeline plugin installed. I'm in the Jenkins web console now on the plugin management page. I filtered for the Docker pipeline plugin on the installed tab and, sure enough, I have the plugin installed and ready to go. Now let's go to the pipeline job that uses a go lang Docker agent in a pipeline. I've used the exercise files to create a pipeline that builds the hugo static site generator. The pipeline uses a golang image from a public repo for the Docker agent. Under that, the pipeline sets up an environment variable telling the go compiler what directory to use for the cache. And the stages in the pipeline download the code, build the application, and then run a simple test with the compiled application. Let's see the results of running this pipeline out of the box. I've run the job once.
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=99)** And the pipeline is clearly spending the most time in the build stage. On my system, it takes almost four minutes in the build stage. This might be even longer on systems with a slower CPU, less RAM, or a slower network connection. Let's take a look at the logs in the stage. Basically, the go compiler is having to download the dependencies to compile the application on each run. This is because the current cache uses the /temp directory located inside the container. That means it'll get created and then destroyed on each run, but Jenkins mounts the workspace as a volume in the container, so we can speed up the build step by moving the cache into the workspace. That way, we can reuse the cache after it gets created. That should speed things up quite a bit. Let's make that change. I'll hit escape to close the logs here and then click configure. Then I'll go to the pipeline stage and I will use the suggestion here in the tip to copy this path. And I've copied it to my clipboard. And now I'm just going to replace /temp with that value. With this in place, the cache will be located in the workspace and it should get reused. However, before we see any speed up, we have to build the cash. So I'll have to run the build at least once before we see any speed up.
>
> **[3:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-improve-a-docker-agent-pipeline?u=76281980&t=192)** So let's do that now. I'll click save and then build now. Let's wait for this build to complete before running the pipeline again and comparing the build times. That build finished successfully. It took about the same amount of time as the last run, but this time it should have created a cache that the next build can use. I'll run it one more time. I think we can see the benefit now. On the last pipeline run, the build stage only took 17 seconds. That's a tremendous speed up. Let's review the steps needed to solve this challenge. First, we made sure the Jenkins server had access to the Docker service. Then we made sure that the Docker pipeline plugin was installed and ready to use. After that, we set up the pipeline job to build the hugo application. We confirmed the initial build time and then updated the pipeline to use a cache located in the workspace. Next, we ran another build to create the cache. Finally, we were able to see the benefit of caching by running one last build that ran much faster than the previous pipelines. With that, I think this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5)
> **CLI Commands:** docker (11), make (2), ssh (1)
> **Env Vars:** ssh (1), cpu (1), ram (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Prerequisites:** configure (1), set up (1)
> **Speakers:** - [instructor] (1)


### 5. Artifacts and Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Artifacts and fingerprinting](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=0)** - [Narrator] When a [Jenkins](../../Skills/DevOps/Jenkins.md) job creates an object that needs to be saved, we refer to that object as an artifact. Artifacts can be compiled binaries like Docker images or ZIP files. Or an artifact might be a text file like a report or some sort of document. Jenkins provides several ways to manage artifacts. The core function archiveArtifacts, gives us a built step for identifying the files we want to save during or after a build. archiveArtifacts is often placed in the post section of a pipeline. The post block runs after all sections of a pipeline, so any steps inside the block are run after other operations have finished. If we're developing a job that needs to access an artifact created in another job, we can use build steps provided by the Copy Artifact plugin. This plugin provides a build step for pulling artifacts from one job into another. When we use the Copy Artifact's build step, security comes into play. The job that creates the artifact must include an option that gives another job explicit permission to copy the artifact. But this leads to another problem. How can we know what artifacts have been created? And what jobs have accessed the artifact? We can solve this problem with fingerprinting.
>
> **[1:37](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=97)** When an artifact is created or used, Jenkins generates an MD5 checksum using the artifact. This checksum and the job where it was created are tracked in an internal database. This becomes the file's fingerprint. Jenkins can then use the fingerprint to determine what jobs either created or accessed a file. Let's see how we can create an artifact in one job, read it from another job and track it using its fingerprint. I'm logged into my Jenkins server and I'm starting here on the installed plugins page. I wanted to show you that I have the Copy Artifacts plugin installed. So I can use it with any jobs that need to access the Copy Artifacts build step. If you're following along with this demonstration, just be sure that you have the Copy Artifacts plugin installed or the pipelines from the exercise files won't be able to finish successfully. I've also created two jobs using the exercise files. One job creates an artifact and the other job copies the artifact in. Let's look at the artifact creation first. In the options section of the pipeline, we're giving explicit permission to the read-artifact job so that it can copy any artifacts created by this job. On line nine, we have a build step
>
> **[3:12](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=192)** that creates a simple text report. And at the end of the pipeline, we have a post section. This section will run after all other steps and stages in the pipeline have finished. This is the perfect place to put our archive-artifact's build step. In this case, we're archiving the file named report.txt. And we're also creating a fingerprint for the file. Now let's look at the job that reads this artifact. In the read-artifact's job, we're using the CopyArtifacts build step to copy in the file named report.txt from the create-artifact job. And even though we're not creating an artifact here, we're still going to fingerprint the file, so Jenkins can track where the artifact is being used. I've already run both of these jobs a few times, so let's take a look at the output. On the copy page for the create-artifact job, we can tell that an artifact was created by this little icon here. And if I hover my mouse next to this icon, we get an interface where we can download the file or view the contents. To see the fingerprints for the archive file, we would click into this build. And then click See Fingerprints. If there were multiple artifacts created in this build, then we would see all of them listed here. To see the fingerprints,
>
> **[4:47](https://www.linkedin.com/learning/jenkins-essential-training-17420152/artifacts-and-fingerprinting?u=76281980&t=287)** we would just click the file that we want to check. So I'll click report.txt. And on the fingerprints screen, we can see the MD5 value for the file and we get a list of all the places where this artifact has been used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6)
> **File Paths:** report.txt (3)
> **Env Vars:** md5 (2), zip (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Code Identifiers:** archiveartifacts (2)
> **CLI Commands:** docker (1)
> **Speakers:** - [narrator] (1)

#### [Publish test results and code coverage reports](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=0)** - [Instructor] Testing is one of the most important parts of the [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) pipeline. During the test phase, development teams can find bugs in their code and fix them well before they reach a production environment. There are hundreds of tools that developers can use to test their code, but fortunately, many of these tools share common formats for generating reports. [JUnit](../../Skills/Software%20Development/JUnit.md) reports are XML documents that describe the results of a test. The JUnit format was originally developed for [Java](../../Skills/Software%20Development/Java.md) programs but many other languages have adopted this reporting format. This makes JUnit the standard for creating test reports. The JUnit plugin gives [Jenkins](../../Skills/DevOps/Jenkins.md) capabilities to collect test reports, publish reports as graphs and track trends in test results. To determine the effectiveness of a test, developers often use a technique called code coverage. Code coverage tracks the lines of code that are accessed during a test. If more code is exercised during testing, bugs are more likely to be discovered. Two popular code coverage formats are JaCoCo and Cobertura. These code coverage libraries have roots in the Java community and are very popular for testing Java applications. However, due to their popularity, tools supporting other programming languages
>
> **[1:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=94)** also generate code coverage reports using JaCoCo and Cobertura formats. Jenkins uses the code coverage API plugin to collect and publish multiple code coverage report formats including JaCoCo and Cobertura. Let's use Jenkins to publish test results and code coverage reports for a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project. The project uses a pipeline with five stages. The first two stages set up the project by installing the dependencies and linting the code for syntax errors. The next stage runs tests and generates a report in JUnit format. The stage also produces a code coverage report in Cobertura format. The last two stages in the pipeline build and deploy the application. If you're following along with the exercise files for this lesson, there are a few things that you'll need to know in advance. I'll be demonstrating this project with Jenkins on a [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) server. If you're using a Ubuntu server, it will need to have Python3 installed, as well as the virtual environment library for Python3. The project will work with Jenkins on a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md), but you'll need to make sure you have Python installed and update the Jenkins file to use Paths to Python and PIP so they work with your installation. On either operating system, you also need to have [Git](../../Skills/Software%20Development/Git.md) installed
>
> **[3:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=187)** for accessing the code from [GitHub](../../Skills/Software%20Development/GitHub.md). Ubuntu systems should already have Git installed but for [Windows](../../Glossary/Service/Windows.md), you'll need to install it manually. Your Jenkins server will also need to have the JUnit and code coverage plugins installed. Okay, let's get on with this demonstration. I'm connected to my Jenkins server via SSH and I'm currently in the home directory for my account. Since the exercise files for this lesson require Python3, I want to make sure that my system has everything in place. I can check for Python3 by running Python3 --version. This returns the version of Python3 that's presently available on my path. The project also creates a virtual environment, so I want to make sure my system can do that as well. To test that, I'll run Python3 -M VENV test.
>
> **[4:07](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=247)** That creates a virtual environment here in the directory that I'm currently in and I can test the virtual environment by typing .test/bin/activate. That changes my prompt to the name of the virtual environment, which lets me know that the virtual environment was successfully created and is ready to go. Now let's go to the Jenkins web interface and use the project from the exercise files. I'm back in the Jenkins web interface now, and I want to make sure that the plugins needed for test reporting and code coverage reporting are installed and available for my project. To do that, I'm here on the manage Jenkins managed plugin menu on the installed plugins tab and first let's look for JUnit and in the search bar I'll type JUnit and that's the first one that pops up here. So the JUnit plugin is available. Let's also check for the code coverage plugin. So I'll clear that out and type in code cov and there is the Code Coverage API plugin. So both of the plugin that I need for this project are installed and ready to go. Let's go to the published report job, which I already have set up. I'll go to dashboard and then publish reports and I'll click configure on this screen so we can see the project's configuration and I'll go directly to the pipeline section. In the pipeline section, I'm pulling the pipeline from my fork of the exercise files repository,
>
> **[5:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=342)** along with my credentials. At the time that I'm recording this, the repository is not publicly available. By the time you view this course and access the exercise files, you won't have to worry about entering credentials. Under the branches to build section, I changed the branch specifier to main. The exercise files use the main branch, so this needs to be changed to match that configuration and then under the script path, I've updated the location to match the location of the Jenkins file for this project. These settings need to be in place for Jenkins to connect to the Git repository for this demonstration. If you're following along and run into any errors, be sure to check the settings in this section. Okay, let's go back to the project page. The job hasn't been run yet, so this page is pretty blank. Let me run the job a few times to generate some reports.
>
> **[6:46](https://www.linkedin.com/learning/jenkins-essential-training-17420152/publish-test-results-and-code-coverage-reports?u=76281980&t=406)** I've run the job a couple times now and refreshed the page. On the right of the screen, there are two graphs, one showing the test results trend and another showing the code coverage trend. We can get more information on these reports by clicking the coverage report on the left. This screen gives us much more detail on the code coverage generated by the tests in this project. At the top of the screen, we get an overview of the coverage and on the bottom of the screen, we get a little more detail on each package. If we click the file coverage tab, we can see detailed coverage for each file in the project. Clicking a file under this section shows a report specifically for this file with an overview of the coverage, along with a source code view that shows every line that was accessed during the tests, and in the left menu here, there's also a link to see test results. This report shows us all the tests that were run and any failures, skips or passes that the tests encountered and in a similar fashion to the code coverage reports, if we click into a specific package and then keep clicking down, we can see the tests that were run and the results of the test. In the next lesson, let's discuss how we can use test results to control the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (13), [JUnit](../../Skills/Software%20Development/JUnit.md) (9), [Java](../../Skills/Software%20Development/Java.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3)
> **CLI Commands:** python3 (7), make (4), python (3), git (3), find (1)
> **Prerequisites:** you'll need (3), set up (2), make sure you have (1), install (1), configure (1)
> **Exercise Files:** exercise files (6), source code (1)
> **Env Vars:** api (2), xml (1), pip (1), ssh (1), venv (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** github (1)

#### [Use test results to stop a build](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=0)** - [Instructor] In the previous lesson, we saw how [Jenkins](../../Skills/DevOps/Jenkins.md) can publish test reports. I also wanted to give a demonstration on how a test failure affects the pipeline stages that follow it. I'm logged into my Jenkins server, and I've set up a project that will build a pipeline similar to the one that we saw in the previous lesson. But this time the code has been modified to include a test that will always fail. We'll use that test to see how Jenkins reacts to a failure in the pipeline. Let's take a look at this configuration. I'm using the exercise files for this lesson, at least I'm using my fork of the exercise files for this lesson. At the time that I'm recording this, credentials are required to access the exercise files. By the time that you use this exercise file, you won't need to even worry about credentials. Under the branch specifier, I've changed the default from master to main, which is the branch that the exercise files use. And under script path, I've updated the path to the Jenkins file to match the path in the exercise files. Okay, let's run this pipeline. I'll click save and then build. Now that the pipeline has run, we can see the test stage has failed, which is exactly what we expected. We can also see that the build,
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-test-results-to-stop-a-build?u=76281980&t=95)** and deploy stages indicate the failure as well. Because the test stage failed, the build and deploy stages were skipped. In addition, the post action stage shows this yellow color, which indicates that the build is unstable. An unstable build means that somewhere along the way there was a failure or some other condition that prevented the build from finishing successfully. Let's look at the test reports for this build. I'll click into the build, and then click test results. The test results clearly show that we have a test that failed. And if we follow the link for that test, we can see more details including the error message, and a stack trace with a specific test that failed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4)
> **Exercise Files:** exercise files (5), exercise file (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create artifacts and reports](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=0)** - [Instructor] It's time for a challenge. You're on a development team, working on a new [Java](../../Skills/Software%20Development/Java.md) application. You've been assigned to develop a [Jenkins](../../Skills/DevOps/Jenkins.md) pipeline that tests the application code and creates a report using the [JUnit](../../Skills/Software%20Development/JUnit.md) format. If the tests pass, the pipeline should compile the code into a Java archive and store the jar file as an artifact. The project needs to have Maven installed to run commands in each stage of the pipeline. Start this challenge by setting up a global tool configuration for Maven. The project also needs to use the JUnit plugin so make sure your Jenkins server has that installed as well. Once you have Maven configured, update the pipeline template to use the Maven configuration then update the pipeline stages to run shell scripts that call Maven to test and package the application. And finally, you'll need to add steps at the end of the pipeline to collect test results and store the jar file as an artifact. The steps should always run and should not fail to build if artifacts or test results are not found. The details for this challenge are available in the exercise files along with a template for the pipeline and all supporting code. Also, please use the pipeline syntax tool to generate snippets for your pipeline.
>
> **[1:34](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-create-artifacts-and-reports?u=76281980&t=94)** In particular, you'll want to use the syntax tool to generate snippets for the Maven tool configuration, collecting the test results, and archiving the artifacts. This challenge should take about 15 to 20 minutes to complete. Work through the challenge, and then meet me in the next video to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [JUnit](../../Skills/Software%20Development/JUnit.md) (2)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create artifacts and reports](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=5)** - We've got a lot to cover in this challenge, so I'm just going to jump right in. I'm starting here on the Manage [Jenkins](../../Skills/DevOps/Jenkins.md) homepage because there are two things that we need to have in place before we get started. First, I need a global tool configuration for Maven, and second, I need to make sure the [JUnit](../../Skills/Software%20Development/JUnit.md) plugin is installed. Starting with Maven, I'll click global tool configuration and then scroll down to the bottom of this page and click manage installations. I already have a Maven installation in place named Maven 384. So this is the one that I'll be referring to in my pipeline. I'll click save to get back to manage Jenkins and then go to manage plugins. Here I want to look on the installed tab and I'm going to filter for JUnit. And there's the plugin I'm looking for, the JUnit plugin. With this in place, I'll be able to use a JUnit step to collect any test reports generated by the pipeline. Okay, let's look at this pipeline. I'm going to teleport there by typing in [Java](../../Skills/Software%20Development/Java.md) pipeline in the search bar and going straight to the job that I already have in place. And here on the homepage, I'll click configure and then go straight to the pipeline section. I forked the exercise files into my own [GitHub](../../Skills/Software%20Development/GitHub.md) account and I'm referencing that URL here. I also need to add credentials because at the time that I'm recording this, the exercise files are private. When you access the exercise files for this lesson,
>
> **[1:39](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=99)** you won't have to worry about entering credentials. I want to run this pipeline before I make any other changes. So I'll save and build the pipeline, clicking save, and then build now. The first build was successful. So now I'll modify the pipeline template to start solving the challenge. And I'll start by adding a global tool configuration for Maven. So let's go to configure and then I'll go to the pipeline section. But to add this tool configuration I want to use the pipeline syntax generator. So I'll click pipeline syntax. And here I want to go to the declarative directive generator. I'm going to select tools. I'm going to add a tool and I'm going to add Maven. I only have one Maven installation in place so that one's already there selected for me. And all I need to do is click generate declarative directive. And there's my tool configuration. I'm going to copy this and then go back to my pipeline. And there's a handy tip here that says, add a tool configuration here. That's exactly where I'm going to place this and I'm going to clean it up so it's a little bit tidy. And now that I've added a tool configuration, there were some other tips in the template that said to uncomment the shell steps that call Maven. So I'll uncomment that one in the clean stage. Here is Maven test and the test stage. And then here is Maven package and the package stage.
>
> **[3:14](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=194)** And I think that's the last one. That's the last one. So I will save and then click build now. Everything's looking pretty good so far. I will say that if you build this and it takes a long time the first time that you run this, it's probably because the pipeline is installing Maven. So if it's running for a long time and you haven't done anything with Maven yet, just give it a second for the pipeline to finish, because like I said, it's probably taking a minute to do that Maven installation. That went well. Let's go on to the next step which is collecting the reports and the artifacts. So I'll go into configure the job, go back to the pipeline configuration, and I'm going to use the pipeline syntax generator again. I already have that open in another tab. So I'm just going to go to this tab. This time, I want the snippet generator and I want to select there is a JUnit step. Yes, there it is. And here I need to specify where the XML files are located. Referencing the exercise files, the test report should be located here with **/TEST-com.learningjenkins.apptest.XML.
>
> **[4:44](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=284)** That's a lot of typing, I probably could have cut and paste that into this field but I just typed it in for the sake of getting it done. We also need to select do not fail to build on empty test results. So that looks good. And let's see, I'll just leave that. I think I'll just leave everything else as is and generate this pipeline script. And then I will copy this and go back to the job. Let's find, I think there's a tip that also says where we should put that reporting. Yes, right here where it says add JUnit collection here. I'll just replace that comment with that one and then clean it up a little bit. We also need to archive the artifact. So let's go back to the pipeline syntax generator and under build steps, we'll pick the very first one. This one's all too familiar, or at least close to the top, archive artifacts. Again, referencing the exercise files, the files to archive are **/hello-1.0-SNAPSHOT.jar.
>
> **[5:55](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=355)** That looks good. And on this one to get these other specifications that we need, as far as not failing the build, we have to click advanced. We don't want to fail the build if archiving returns nothing. And I'll go ahead and say archive artifacts only if the build is successful. And I'll even add a fingerprint since we get that option here. And let's generate that pipeline script. I will copy this and then go back to the job. And we have another pointer here that says add artifact archiving. So I'll highlight that and paste that in. And again, just clean this up a little bit so we can see everything. Let's see, follow some links false, only if successful, true. That looks good. Let me save this and build now. The build has finished and I can tell right away that archiving probably worked because we have this little icon here and the build produced the following one artifact. So that part worked. Let's see if our test reporting worked. I'm going to reload the page and there are our test reports. So I only have one bullet here because I've only ran the build once. But if I ran it a couple more times then I would see more test results in the trend here. No, I think that is it. So let's review the solution to this challenge. We started by adding a global tool configuration for Maven and we needed that so we could run the Maven build steps in the pipeline.
>
> **[7:29](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-create-artifacts-and-reports?u=76281980&t=449)** So we uncommented those calls, those shell steps that were already part of the pipeline. Then we added to the pipeline using the pipeline syntax generator. We added test result collection and we added artifact archiving. So with all of that in place, I believe this challenge has been successfully solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JUnit](../../Skills/Software%20Development/JUnit.md) (6), [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Exercise Files:** exercise files (5), template (2)
> **UI Navigation:** go to (5), scroll down (1)
> **Env Vars:** xml (2), url (1), test (1), snapshot (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** configure (3)
> **File Paths:** test-com.learningjenkins.apptest.xml (1)


### 6. Securing Jenkins

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure Jenkins with user accounts](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=0)** - [Instructor] [Jenkins](../../Skills/DevOps/Jenkins.md) does a pretty good job of providing security out of the box. When a Jenkins server is first launched, it's locked by default, and you need to have the initial admin password to log in. This is useful to prevent anyone from just coming across a newly installed Jenkins and taking control of it. Jenkins also allows you to create user accounts with usernames and passwords. This is a common approach for setting up boundaries for who can log in. But even with these controls in place, there's still a bit of configuration that can be done to make sure that Jenkins is set up for your specific use case. Jenkins can be configured to use different security realms. Using a very brief explanation, a security realm controls how a person is authenticated to access a resource. The default realm is a user database included in the Jenkins server. This is where Jenkins creates the first users with permission to access the system when the service is installed. Jenkins can also delegate authorization to other realms, including Lightweight Directory Access Protocol services, also known as LDAP, or systems that use Unix-style users and groups. For this discussion, we'll be focusing on the built-in authentication provided by the Jenkins server. Along with managing user authentication, we still need to manage the permissions users have
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=95)** when they interact with the Jenkins service. In other words, we need to configure authorization. When Jenkins first starts, any authenticated user can do anything. This essentially means that any user that can log in is an administrator. This might be okay for one or two users on a personal Jenkins system, but if multiple users or teams are working with a shared system, it's a best practice to have one or two administrative users and then delegate permissions to all other users based on how they need to interact with the Jenkins server. Jenkins allows this to be configured fairly easily with matrix-based security. To configure user permissions, most Jenkins installations will use the Matrix Authorization Strategy plugin. This is one of the suggested plugins that gets installed in most Jenkins installations. Using a matrix strategy, permissions are assigned to each user individually. In addition, each user is given specific permission to perform certain actions. In a moment, we'll go over an example showing how the matrix is used to assign permissions. Before we get into an example, I wanted to offer a few words of caution. When setting up matrix-based security, please be sure to assign administrative permissions to your own account.
>
> **[3:09](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=189)** Also, if you created an admin user, assign admin permissions to that user as well. If you miss assigning your user admin permissions, you run the risk of locking yourself out of your Jenkins server. It's nothing to be ashamed of. It's happened to plenty of people, myself included. Fortunately, there are instructions for disabling access control if you find yourself locked out. I just wanted to offer this [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of caution to be sure to have your permissions in place when implementing matrix-based security. With that public service announcement, let's go through an example. I'm logged into my Jenkins server, and I'm going to add matrix-based security, but first, I'll start by adding another user. From the Manage Jenkins screen, I'll start by selecting Manage Users. From here, I can add a new user by clicking Create User. On this screen, I can enter a username, password, and any other details associated with this user, like name and email address. Once I have a user in place, I can go back to Manage Jenkins. And then I'll click Configure Global Security. On this screen, we can see the default security realm and authorization. Under Authorization, the default is still selected, which allows logged in users to do anything.
>
> **[4:45](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=285)** I'll scroll down a little bit, so we can see the option to select matrix-based security. Selecting that exposes this interface which allows me to add users and then select exact permissions for that user. But before I do anything else, I need to give my account administrative permissions. I'll select Add user, and then enter my username, click OK. And I'll scroll all the way over here to the right and select this button here, which gives all permissions to my user. Now let's add permissions for Nicole's account. I'll click Add user and Nicole's name and click OK. Now I can select the specific permissions that I want Nicole to have. I'll start by giving them overall read permission. This will allow them to at least interact with the Jenkins interface. Without this permission, they won't be able to do anything, even if they got logged in. Now I can start giving them additional permissions. I won't add any permissions for credentials or agents, but I do want them to be able to build, cancel, and read jobs along with their workspaces, so I'll select those check boxes under Job.
>
> **[6:13](https://www.linkedin.com/learning/jenkins-essential-training-17420152/secure-jenkins-with-user-accounts?u=76281980&t=373)** Once I have all of these permissions in place, I'll click Save to apply the changes. Okay, now let me log out and log in as Nicole. I'll click log out, and on the screen here, instead of picking my account, I'll enter Nicole and her password and click Sign in. You can see that the interface has changed a little bit from when I was logged in as an administrative user. The links to the Jenkins management menu on the left aren't visible. Okay, let's open a job. On this screen, I can trigger a job and interact with it, but I can't create it or delete it. So this is just an example of how we can switch from the default of allowing all users to essentially have administrator permissions to granting users very specific permissions in the Jenkins interface. For more information on securing Jenkins, please review the exercise files for this lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (25), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (2), known as (1), in other words (1), means that (1), is an  (1)
> **Prerequisites:** configure (3), you need to have (1), set up (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Warnings:** caution (2)
> **Env Vars:** ldap (1)
> **Cross-References:** go back to (1)

#### [Configure project-based permissions](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=0)** - [Instructor] In the previous lesson, we discussed how to set up a matrix-based authorization strategy. With this approach, permissions are applied globally. So the permissions given to a user in a matrix will apply to all jobs. But there may be a case where we want to limit the jobs in folders a user has access to. We can accomplish that with a project-based authorization strategy. Configuring project-based authorization is done the same way as configuring matrix-based authorization but once project-based permissions are enabled, each project and even folders can be configured with their own permissions. Let's see how this works in an example. I'm logged into my [Jenkins](../../Skills/DevOps/Jenkins.md) server and I've already opened the Configure Global Security menu. I want to switch from matrix-based security to project-based security. And the easy part is just clicking this radio button here next to Project-based Matrix Authorization Strategy. Unfortunately, I also need to recreate the matrix that I had before. So the first thing that I'm going to do is add my user account and give myself overall administration permissions. Once I have that in place, I also want to add the Nicole user account and given them overall reader permissions.
>
> **[1:41](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=101)** Now with these permissions, Nicole will be able to log in but they won't have any permissions to do anything else. Let's see how that looks before I enable any other permissions. I'll click Save, and then log out and log in as Nicole. I'm logged in as Nicole now and as you can see, I don't have any access to any of the jobs that were already configured in this system. So I'll go back to an administrative account and give Nicole permission to access just one specific job. Okay, I'm logged in as my admin account and I'm going to configure a job that Nicole can access. I'll just select this job complex-pipeline and then click Configure. There's a new control here to enable project-based security. So I'll click that. This gives me an interface that's very similar to the matrix that we see in the global security interface. Here I can add Nicole and give her specific permissions for this job and this job only. Okay, now I'll save this and once again, I'll log out of my account and log in as Nicole. Okay, now we can see that Nicole's view has changed quite a bit. She can see the job that we gave her permission to view and if I click into this job,
>
> **[3:15](https://www.linkedin.com/learning/jenkins-essential-training-17420152/configure-project-based-permissions?u=76281980&t=195)** we can see that she has permission to build and delete. So essentially, Nicole's account is an admin for this job and this job only.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Prerequisites:** configure (3), set up (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Use secrets and credentials](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=0)** - [Instructor] Sensitive information can be stored and managed directly in the [Jenkins](../../Skills/DevOps/Jenkins.md) application. Jenkins uses the term credential to refer to sensitive information. A credential can be any data that we want to protect. So, you might hear the term secret or credential, but just know that they both refer to the same thing. Jenkins supports several types of credentials, including usernames and passwords, SSH keys, files, and text strings. Text strings are particularly useful for values like API keys or security [Tokens](../../Skills/Web%20Development/Tokens.md). Once we have credentials stored in Jenkins, we can use them in job configurations, including pipeline projects. Credentials can be accessed in several ways in a pipeline, but the two most common ways are the credentials function and the withCredentials build step. The credentials function is used to assign sensitive values to one or more environment variables. It takes the ID of a secret stored in Jenkins as its argument. For most credential types, the function will return one value containing the sensitive information. However, when the credentials function is used with a username and password type credential, three variables are returned.
>
> **[1:33](https://www.linkedin.com/learning/jenkins-essential-training-17420152/use-secrets-and-credentials?u=76281980&t=93)** The variables specified in the function call will contain both the username and password separated by a colon. Two additional variables will be created using the variable name followed by an underscore and either USR or PSW. These variables will contain the username and password respectively. This method keeps pipeline developers from having to create their own functions for parsing usernames and passwords over and over again. We can also access secrets using the build step named withCredentials. This step retrieves a secret value and assigns it to a variable. Any steps that are placed inside the withCredential step will have access to the secret. You should note that the withCredential step can only be used with credentials that are stored as secret strings. Let's create a few secrets in the Jenkins interface and see how we can use them in a pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Code Identifiers:** withcredentials (2), withcredential (2)
> **Env Vars:** ssh (1), api (1), usr (1), psw (1)
> **CLI Commands:** ssh (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Configure users and permissions](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/jenkins-essential-training-17420152/challenge-configure-users-and-permissions?u=76281980&t=5)** - [Instructor] It's time for a challenge. You manage a [Jenkins](../../Skills/DevOps/Jenkins.md) server that's being used by two development teams. One team develops engineering applications, and the other team develops finance applications. The finance team is developing a new application that will process sensitive information. They've asked you to demonstrate how they can secure their pipeline jobs by limiting access to one specific user. To solve this challenge, complete the following steps. Create two users, one named engineering and another named finance. Change the security setting on your Jenkins server to use a project-based authorization strategy. Then assign the overall read permission to both users. Next, demonstrate limited access by creating two folders, one named engineering jobs, and another named finance jobs. Assign admin permissions to both users in the folder that corresponds to the user name. And finally, demonstrate how the engineering user can't access or manage items inside the finance jobs folder. This challenge should take 10 to 15 minutes to complete. Solve this challenge by applying what you've learned about securing Jenkins, and then join me in the next video to discuss the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### [Solution: Configure users and permissions](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=0)** - In this challenge, we're being asked to create users and set up some boundaries by configuring security. I'm logged into a brand new [Jenkins](../../Skills/DevOps/Jenkins.md) installation as the admin user. And I'm going to jump right in to solve this challenge by creating these users first. I'll start by clicking "Manage Jenkins" and then "Manage Users". And then I'll click "Create User". Let's do the engineering user first and I will give them a password as well. And then their full name, I will capitalize the E in engineering and give them an email address as well. Okay, let's do the finance user now. I'll go through the same process, "Create User". Finance and then give the finance user a password as well and their full name, and then give them an email address as well. Okay, "Create user". Okay, we have our users. The next thing we need to do is set up our authorization strategy. To do that, I'll click "Manage Jenkins" and then "Configure Global Security". And then I'll scroll down a little bit here until I can see "Project-based Matrix Authorization Strategy". That's a mouthful, but that's the one that we want. So I will click the radio button next to that. The first thing that I want to do is add my admin account
>
> **[1:35](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=95)** so that I don't get locked out of my Jenkins server. So I'll click "Add user" and then put in the admin name. "OK". And all the way over here on the right, I want to select this button so it just checks all of these permissions for me. So indeed that user will have all admin permissions. Now I can add the engineering and finance users. So I will click "Add user" and type in "engineering". "OK". Then I'll add user finance. Click "OK". For these users, I need to select under "Overall" the read permission. That way when they log in, they could at least see something. If they didn't have that permission, then they wouldn't be able to do pretty much anything even if they were able to log in. So with this in place, I think we're good with our authorization strategy and the permissions that these users need so I will click "Save". Now, if you're prompted with this message, this essentially means that even though we've limited permission by user account, some users may still be able to run commands using the permissions held by the system user account. That is, the permissions given to Jenkins to run the actual Jenkins application. Remediating this warning is beyond the scope of the challenge, but I encourage you to read the document on access control for builds, and if you're interested, explore the solution. But for now, I'm going to click "Dismiss"
>
> **[3:08](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=188)** so we can proceed with the challenge. Okay, now we need to create folders and start limiting access to those folders. So to do that, I will click "New Item" and let's do the engineering jobs folder first. "Engineering Jobs" for the name, and then we want to select the folder type and then I will click "OK". All right, this configuration, we're configuring the folder and very similar to how we saw in the lessons where we enabled project-based security, I'm going to select that same option for this folder. And now I will add the engineering user. I'll click "Add user" here, and then add in the engineering user. And for this one, I want to give the engineering user all permissions on this folder. So I will select this option here to fill in all of these check marks and then click "Save". So now I'm going to do the same thing for the finance user, but to do that, I need to go back up a level to the very top. If I click "New Item" here to create a folder here, I would be creating a folder within the engineering jobs folder. So let's go up to the dashboard and then I will click "New Item" and then we'll name this item, "Finance Jobs". And then again, we want the folder type. I will select, "OK". I will enable project-based security and then let's add the finance user. Select "OK". And again, we'll give the finance user all permissions in this folder.
>
> **[4:42](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=282)** And now I will click "Save". All right, let's go back up to the top. As the admin user, I've done all of this configuration. I can see both folders. Now we need to demonstrate that we have indeed limited access to these folders. So I'm going to log out of my admin account and I'll log in as the engineering user, just to prove that the engineering user can't see the finance jobs folder. Okay, I'll click "Log out" so I'm no longer the admin. Let's log in as engineering and with that password. "Sign in". Okay, this is looking pretty good. I'm logged in as the engineering user. I can only see the engineering jobs folder. I'm also not an admin at this system level because I don't have any options over here to manage Jenkins or anything like that. So let's click into the "Engineering Jobs" folder. And here I do have an option to configure this folder. I can add new items and so on, but just in this particular folder itself, not anywhere else on the system. So let's go back up to the dashboard again. So let's review the solution that we have in place for this challenge. We created two users, one for engineering, one for finance. And then we enabled project-based authorization. We assigned the admin user admin permissions. That was important so we didn't lose access to the Jenkins server. And then we assigned overall read to the engineering user and the finance user. After that, we created folders for each of these users,
>
> **[6:16](https://www.linkedin.com/learning/jenkins-essential-training-17420152/solution-configure-users-and-permissions?u=76281980&t=376)** engineering jobs and then finance jobs. And then we assigned admin permissions to those users respectively inside the folders, but just for those folders. And then we were able to prove that their access was limited by logging in as the engineering user and proving that the engineering user only has access to the engineering jobs folder. With all that in place, I would say this challenge has been solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (8)
> **Prerequisites:** set up (2), configure (2)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)
> **Warnings:** warning (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jenkins-essential-training-17420152/next-steps?u=76281980&t=0)** - [Michael] I'm so glad you joined me for [Jenkins](../../Skills/DevOps/Jenkins.md) Essential Training. As you continue exploring Jenkins, you're not alone. Use the Q&A feature here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning to connect with me or other developers taking this course. As you continue learning how Jenkins fits into your workflows, I suggest you take my course, Running Jenkins on AWS. You'll learn the details of running Jenkins on a public cloud platform, how to securely connect to build servers and how to automate deployment to AWS. It's been my pleasure to be your instructor for this course, and I wish you all the best on your learning journey. See you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [michael] (1)


## Instructor

- [Michael Jenkins](../../Instructors/DevOps/Michael%20Jenkins.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/essential-jenkins-2468076)

## Skills Covered

- Jenkins

## Path Context

### In [Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)
← [Learning Jenkins Automating Software Development And System Administration](Learning%20Jenkins%20Automating%20Software%20Development%20And%20System%20Administration.md) | **2 of 3** | [Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure](Running%20Jenkins%20on%20AWS-%20Deploying%20and%20Managing%20Jenkins%20on%20Cloud%20Infrastructure.md) →

## Appears In

- [Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)

## Related Courses

_Courses sharing skills:_

- [Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure](Running%20Jenkins%20on%20AWS-%20Deploying%20and%20Managing%20Jenkins%20on%20Cloud%20Infrastructure.md) — Jenkins
- [Learning Jenkins Automating Software Development And System Administration](Learning%20Jenkins%20Automating%20Software%20Development%20And%20System%20Administration.md) — Jenkins

---

[↑ Back to top](#)