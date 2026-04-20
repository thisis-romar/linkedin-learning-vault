---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: kubernetes-your-first-project-2021
url: "https://www.linkedin.com/learning/kubernetes-your-first-project-2021"
duration_minutes: 164
duration: 2h 44m
level: Intermediate
updated: 11/4/2021
learners: 34209
skills:
  - Kubernetes
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHMTGjVlXuQmA/learning-public-crop_675_1200/B4EZeEFPhJH0Ac-/0/1750267656589?e=2147483647&amp;v=beta&amp;t=0BcznFJ6yJkpiZWXMeV3wrlaSmujdatBy0We1E5Euok"
linkedin_topic: DevOps
learning_paths:
  - Getting Started with Kubernetes
path_count: 1
tags:
  - course
  - topic/devops
  - skill/kubernetes
status: not-started
created: 2026-04-20
---

![Kubernetes: Your First Project (2021)](https://media.licdn.com/dms/image/v2/D4E0DAQHMTGjVlXuQmA/learning-public-crop_675_1200/B4EZeEFPhJH0Ac-/0/1750267656589?e=2147483647&amp;v=beta&amp;t=0BcznFJ6yJkpiZWXMeV3wrlaSmujdatBy0We1E5Euok)

# Kubernetes: Your First Project (2021)

> This course walks you through your first Kubernetes project, in which you help a fictional company, Explore California, move their static website, currently running in AWS on virtual machines, into containers through Kubernetes. Instructor Carlos Nunez explores the core concepts of what makes Kubernetes tick: containers, the scheduler, the API server, the controller manager, and kube-proxy. Next, 

> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021) | 2h 44m | Intermediate | 34K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Carlos Nunez]]

## Resources

- Exercise files available

## Skills Covered

- Kubernetes

## Table of Contents

### Introduction

#### Your first project on Kubernetes
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=0)** - [Carlos] Kubernetes is everywhere.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=3)** Containers are revolutionizing how developers create and ship their software to the world.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=9)** Teams that used to require a data center full of VMs and hardware to run their most important business applications can now do so on any Kubernetes cluster on any cloud.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=22)** You might've heard your friends or colleagues tell you that Kubernetes is hard or complicated.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=28)** I'm excited to show you otherwise.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=30)** I'm Carlos Nunez.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=32)** I've helped them engineering teams at some of the world's largest companies embraced Docker and Kubernetes for several years.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=39)** In this course, you'll go on a journey with me to take Explore California, California's hottest travel agency, through their transition from VMs and fragile dev environments to a fully fledged and production ready Kubernetes platform.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=54)** You'll learn how to package their website into a Docker image, use Kind to host it on a Kubernetes cluster that fits inside of your laptop, and if you dare, deploy and run [ExplorerCalifornia.com](https://ExplorerCalifornia.com) inside of a real Kubernetes cluster on AWS Elastic Kubernetes service.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=73)** Are you ready to up your Docker and Kubernetes game?
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/your-first-project-on-kubernetes?u=76281980&t=75)** If so, let's go.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), aws (1)
> **Code Keywords:** require (1), let (1)
> **URLs:** [explorercalifornia.com](https://explorercalifornia.com) (1)
> **Env Vars:** aws (1)
> **Speakers:** - [carlos] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=0)** - [Instructor] There are a few skills that you should have to make the most of this course.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=4)** You should be comfortable with moving around in a terminal.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=6)** We'll be using the shell for a large part of this journey, so having some familiarity with how it works and what to expect will be useful.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=13)** If the terminal is new to you, check out the Bash Academy Guide at the bottom of this page to learn more.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=18)** You will also need to have an Amazon Web Services account if you wish to deploy Explore California into production.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=25)** AWS is a popular provider of managed services that run in their vast and widely distributed data center network across the world.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=31)** We will be using their Elastic Kubernetes Service, or EKS, to deploy our website into a real Kubernetes cluster.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=38)** If this sounds interesting to you, you'll need to create an AWS account.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=42)** You can learn how to do that by going to the link below and clicking on Get Started for Free in the middle of the page.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=48)** Please note that this will cost money.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=50)** At this time of recording, an EKS cluster costs around 10 cents an hour to operate.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=55)** The EC2 instances that are created with the scripts provided by this course should cost about 2 cents an hour on top of that in order to operate it.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=63)** If you have access to another Kubernetes cluster, such as a Raspberry Pi cluster or a Bare-Metal cluster in your own lab, or even one provided by your company, you can use that as well.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-you-should-know?u=76281980&t=73)** However, some of the instructions might differ.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), eks (2), ec2 (1)
> **CLI Commands:** aws (2), make (1)
> **Tools:** terminal (2), bash (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Configuring AWS access
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=0)** - [Instructor] In this course, we will deploy Explore California into a real Kubernetes cluster inside of Elastic Kubernetes Service.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=8)** If you would like to do this, you'll need to create a programmatic access key and secret key within AWS.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=17)** This video will show you how to do that.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=19)** To get started, navigate to [HTTPS://console.aws.amazon.com](https://HTTPS://console.aws.amazon.com).
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=26)** From here, you'll be prompted to log in.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=28)** If you haven't created an AWS account yet, click on this button right here to get started.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=34)** If you've already logged in, you won't see this prompt.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=37)** I've already logged in, so I'm going to go ahead and go to my management console.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=42)** From here, I'm going to click on the text box in the center of the screen, and I'm going to go ahead and search for IAM, which is identity access management, the service that creates access key, secrets keys, users, and roles amongst other things.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=58)** So I'm going to click on IAM and it's going to bring you to your dashboard.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=61)** The first thing that we're going to do is create a user.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=65)** So I'm going to click on the Users tab over here on the left.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=68)** And then I'm going to click on Add users up here.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=72)** From here, you're going to be asked to provide a username.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=74)** It can be anything you want.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=75)** I'm going to name it carlos.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=77)** Next, you'll be asked to provide the access type.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=80)** Since we want an access key and a secret key that we'll use with our AWS CLI tool.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=86)** We're going to click on programmatic access right here, we're going to check that off.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=91)** Once we've done that, I'm going to click on Next Permissions on the bottom side of the screen.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=96)** And then once I'm here, I'm going to click on Attach existing policies directly.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=100)** And then I'm going to search for the AssumeRolePolicy.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=104)** We're going to need this policy because this user isn't actually going to have any rights by itself.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=110)** Instead, we're going to assume a role that we will create that will allow us to do anything we want inside AWS, but with a temporary set of credentials.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=120)** Now I'm going to click on Next Tags, which is, again, towards the bottom of the screen.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=125)** And then here you can add tags, I'm not going to add any, but they're key-values.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=129)** You can add whatever tags you'd like.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=132)** Next I'm going to click on Next Review, it's going to show me the user that I created, it's going to show me that I want programmatic access.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=139)** And then it's going to show me that I have a policy attached to a called the AssumeRolePolicy right there.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=144)** I like the way this looks.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=146)** If you like it, you can click on Create user and then the user will be created.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=150)** From here, it gives you an access key ID and a secret access key.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=155)** Now, an important thing to note is that you do not want to leave this page.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=162)** The reason why you do not want to leave this page is because you will only see the secret access key once.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=168)** If you forget it, you'll have to create a new access key.
>
> **[2:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=171)** So now that we've done this, I'm going to go ahead and open a terminal.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=174)** If you're on a Mac, you can press the Command + Space button and then type terminal.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=180)** If you're on windows, you should install a program called Git Bash, which comes with the bash shell, which is the same shell that I'll be using for this course.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=188)** Once you have that installed, you can click on Start, then Run, then type in Git Bash in the text box and click on the first result..
>
> **[3:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=196)** From here, let's go ahead and install the AWS CLI.
>
> **[3:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=201)** Since the instructions differ depending on the operating system that you're using, just follow the instructions at the link below to guide you through it.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=209)** Once you've installed the AWS CLI, you can type aws configure to configure your AWS CLI tool.
>
> **[3:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=216)** So the first thing that's going to ask you is for an access key ID.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=220)** To enter it, I'm going to go back to my Add user screen right here.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=224)** I'm going to copy the access key ID, I'm going to copy the access key ID, The next thing it's going to ask for is a secret access key.
>
> **[3:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=231)** Once again, I'm going to go back to my page.
>
> **[3:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=233)** I'm going to highlight this mysterious secret access key, and then I'm going to paste it into this prompt right here.
>
> **[4:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=241)** The third thing it's going to ask you is for the region name.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=244)** Now, how do you actually get this?
>
> **[4:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=246)** Well, it's actually pretty easy.
>
> **[4:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=248)** In order to get it, I'm going to click on the AWS logo here and I'm going to click on it because I've already copied the secret access key.
>
> **[4:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=256)** And then you're going to click on the region next to your name.
>
> **[4:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=259)** My name is right here.
>
> **[4:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=261)** I'm going to click on Ohio.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=262)** Now this might be a state like Ohio, it might be a town like Cape Town, or it might even be a country like Ireland.
>
> **[4:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=272)** Regardless, you're want to look for the entry that's highlighted in orange.
>
> **[4:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=276)** So right now, in my case, I am using the Ohio region, which is called us-east-2.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=282)** So what I'm going to do is I'm going to remember that it is us-east-2 'cause I'm having hard time copying it right now, and then I'm going to type it in here and then press Enter, and then you're going to be asked for the output format, just leave it as JSON, it's pretty readable.
>
> **[4:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=297)** So once you hit Enter, you are done configuring the tool.
>
> **[5:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=300)** Now the user that we created doesn't have any permissions to do anything by design, we didn't give it any.
>
> **[5:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=305)** So in order to demonstrate that I'm going to try and list the set of instances that I've spun up on EC2, which I haven't done any.
>
> **[5:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=314)** But as you can see, when I run that command, it tells me that I'm not authorized to perform that operation because I'm not, I don't have any permissions to do that.
>
> **[5:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=321)** So, how do we fix that?
>
> **[5:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=323)** Well, we need to assume a role, right?
>
> **[5:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=325)** That's what the AssumeRolePolicy be attach to does.
>
> **[5:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=328)** So let's create an admin role that we can assume.
>
> **[5:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=332)** So I'm going to go back to my user screen and then I'm going to click on roles over here and now I'm going to create a new role.
>
> **[5:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=340)** Now, the first thing I need to do is I need to click on this button right here, Another AWS account.
>
> **[5:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=346)** This is a little counterintuitive because we're actually going to provide our own account.
>
> **[5:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=351)** But in order for assume role to work, we need to provide the account ID that the account is assuming from.
>
> **[5:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=358)** In order to get that account ID, you're going to click on your name and then you're going to highlight the number next to My Account over here.
>
> **[6:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=366)** So I'm going to highlight this number here and I'm going to paste it into this field.
>
> **[6:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=370)** Next, I'm going to click on require external ID.
>
> **[6:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=373)** This is like a password sense without this assuming anyone knows what this role is called and what accountants in, they can assume this role and still become an admin of your account, which you do not want to have happen.
>
> **[6:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=385)** So this is like a password that prevents that from happening.
>
> **[6:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=388)** For our example, I'm going to make that explorecalifornia.
>
> **[6:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=390)** Then I'm going to click on Next Review Permissions.
>
> **[6:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=392)** And this is where I give this role administrator access.
>
> **[6:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=396)** So this role has the ability to be a super user inside of AWS, but your account doesn't directly.
>
> **[6:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=405)** Now, I'm going to click on Tags.
>
> **[6:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=406)** Don't need any tags here, so I'm going to click on Next Review.
>
> **[6:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=410)** From here, I'm going to give this role a name.
>
> **[6:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=411)** I'm going to call it admin-access-explore-california.
>
> **[6:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=415)** You can give it a description if you like, I'm not going to give it one.
>
> **[6:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=418)** And then I'm going to click on Create Role right here.
>
> **[7:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=421)** And the role got created, which is awesome.
>
> **[7:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=423)** So now what I'm going to do is click on this role and I'm going to copy what's called its Amazon Resource Number or ARN or A-R-N.
>
> **[7:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=431)** This is an identifier that tells AWS where your role is, which is going to be important when we assume it.
>
> **[7:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=437)** So I'm going to copy that, and then I'm going to go back into my terminal and I am going to use the sts assume role command.
>
> **[7:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=448)** This is the command is going to allow us to get a set of temporary credentials.
>
> **[7:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=452)** So the first thing I'm going to enter is the role ARN, that's what we just copied earlier, so I'm going to go ahead and paste it in there, and I'm going to put quotes inside of it, just for safety.
>
> **[7:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=460)** Next, I'm going to provide a role session name, this can be anything you want, it's really just a way of identifying your session locally, so I'm going to call it MySession.
>
> **[7:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=470)** And then finally, I need to give it the password, which in this case is done through the external ID command line flag.
>
> **[7:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=476)** And from here, I'm going to go ahead and enter explore-california.
>
> **[8:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=480)** Now that I have all that I'm going to hit enter, and once I do that, you'll get this big old thing of JSON back, which tells you that AWS accepted all your terms and gave you admin access for an hour because by default, the access key ID and secret access key are only good for an hour.
>
> **[8:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=498)** So the last thing we need to do is configure our shell to use the data in here.
>
> **[8:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=503)** So we're going to do that through environment variables.
>
> **[8:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=506)** The first environment variable that I'm going to create is called the AWS_ACCESS_KEY_ID environment variable.
>
> **[8:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=512)** And we're going to go ahead and set that to the access key ID inside of this JSON right here of the same name, as you can see up here.
>
> **[8:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=519)** So I'm going to copy this string right here, which starts with ASI.
>
> **[8:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=523)** I'm going to paste it down here.
>
> **[8:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=525)** Next, I'm going to set in AWS_SECRET_ACCESS_KEY, which is like the password for this access key.
>
> **[8:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=532)** So I'm going to go ahead and copy the secret access key, and I'm going to paste it down here.
>
> **[8:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=537)** Finally, I'm going to set another environment variable called AWS_SESSION_TOKEN because this access key right here, the only way that AWS knows how to use it is with the session token, because it was provided by STS.
>
> **[9:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=551)** So I'm going to say equals here and now I'm going to copy this long string with the quotes, because it has special characters in here.
>
> **[9:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=559)** And now I'm going to paste that and now it's set.
>
> **[9:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=562)** And with that, I'm now an admin.
>
> **[9:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=565)** Let's run the command that we ran earlier, the EC2 command to prove it.
>
> **[9:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=568)** So I'm going to go ahead and hit Enter.
>
> **[9:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=569)** And as you can see, now I'm actually authorized to see the list of instances inside of the service, because I am using my user assume as this role right here with a temporary set of credentials.
>
> **[9:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=584)** With that, that's how you create secure temporary credentials for a user inside of AWS.
>
> **[9:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-aws-access?u=76281980&t=588)** When you run the scripts that come with the scores, you'll need to do this in order for them to work.

> [!info]- Semantic Content
>
> **Env Vars:** aws (14), cli (4), json (3), iam (2), ec2 (2)
> **UI Navigation:** click on (26), navigate to (1), go to (1)
> **CLI Commands:** aws (16), git (2), make (1)
> **Code Keywords:** let (3), this, (2), finally, (2), type. (1), case, (1)
> **Tools:** terminal (3), bash (3), command line (1)
> **Prerequisites:** configure (3), you'll need (2), install (2)
> **Definitions:** is called (3), is a  (2), is an  (1)
> **Cross-References:** go back to (2)


### 1. The Project/The Mission

#### Our application: Pre-Kubernetes
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=0)** - [Instructor] In 2018, "Explore California", California's premiere website for touring and traveling, embarked on a mission to modernize their online platform and the methods through which they wrote and delivered software.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=12)** In doing so, they realized several benefits.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=15)** First, their website [explorecalifornia.com](https://explorecalifornia.com) and friends are now entirely on AWS.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=22)** This infrastructure is deployed entirely through code with Terraform and Jenkins.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=26)** Moreover, development teams migrated away from their manual suite of unit and integration tests in favor of executing Capybara and Selenium tests against local copies of their website running inside of Docker containers.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=39)** Life is pretty good at "Explore California", except for one thing, environments.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=44)** Environments have been a problem for developers for three reasons, resource scarcity, time-consuming maintenance, and faulty tests.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=52)** Even though developers are using Docker containers for local testing, what customers actually use is running on AWS EC2 virtual machines or stored inside of S3 buckets.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=62)** Consequently, developers still have to deploy code into virtual machines before their code can get into production.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=67)** This has led to a few problems.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=70)** First, developers need to fight for space on so-called, quote-unquote, pre-prod virtual machines.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=77)** Virtual machines and their storage are the single biggest costs that "Explore California" engineering pays for.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=82)** Since there aren't many of them, developers often find themselves waiting or bargaining for time on these instances.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=88)** This has caused changes to ship more slowly than leadership would like.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=91)** Additionally, maintaining these virtual machines has become a headache.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=95)** Developers are given the right to change these machines as they see fit.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=99)** However, this has caused issues where code relying on changes made in these virtual machines failed when they weren't present in production.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=105)** This downtime is also the leading cause of "Explore California's" third problem.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=110)** Local tasks failing because of all the software in, quote-unquote, DEV being down.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=115)** Some tasks that developers execute locally make use of other software in so-called DEV, like databases and message queues.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=123)** When these services go down, tasks fail unexpectedly.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=126)** More waiting occurs as a result.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=129)** The CTO of "Explore California" recently learned that other teams at other travel companies are using this thing called, quote-unquote, Kubernetes to run Docker containers in production, like VMs in a data center.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=140)** Engineering leadership has also received a tip a few days ago that "Explore Texas", their biggest competitor, has been using Kubernetes for years.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=148)** They've been using Kubernetes to easily deploy and roll back production releases, address site-wide issues before customers even see that anything's wrong, and most importantly, allow development teams to get their own environments without having to fight for them.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=162)** Given this new found knowledge, the CTO gave her teams a challenge.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=167)** "Hey teams, let's try getting .com onto Kubernetes, AWS as EKS, or Elastic Kubernetes Service, so we won't have to make too many changes to the rest of our front.
>
> **[2:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=178)** If it's as hard as our friends lead on, we'll double down on our VM automation.
>
> **[3:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=182)** Otherwise, we'll move everything into Kubernetes.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=185)** How does that sound?"
>
> **[3:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=186)** Her engineering leaders nodded in excitement and fear.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=189)** Kubernetes is new.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=191)** Kubernetes is hard.
>
> **[3:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-pre-kubernetes?u=76281980&t=193)** Can "Explore California" do it?

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3), docker (3), make (2), terraform (1), find (1)
> **Env Vars:** aws (3), dev (2), cto (2), ec2 (1), eks (1)
> **Code Keywords:** for. (1), let (1), new. (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)
> **Speakers:** - [instructor] (1)

#### Our application: Post-Kubernetes
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=0)** - [Narrator] The CTO, of Explore California challenge our engineering teams to attempt to migration into Cuban Eddie's for [explorecalifornia.com](https://explorecalifornia.com).
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=10)** She was hoping that development teams can use the same Docker containers they use to test their website locally and production.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=16)** She was also excited for developers to more easily obtain, production like test environments.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=21)** The Kubernetes experiment was a raging success for Explore California.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=25)** Not only were they able to move [explorecalifornia.com](https://explorecalifornia.com) and to Kubernetes with all but a few minor bombs, they were also able to migrate over half of their online services along with it, [explorecalifornia.com](https://explorecalifornia.com), the company's flagship website now runs as a Kubernetes deployment.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=42)** Instead of having to use complicated, EC2 auto scaling rules for its dynamic back-end services, the website's deployment creates more replicas of itself, based on the average number of hits to the website.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=54)** Additionally, thanks to the flexibility provided through the websites ingress resource, Explore California can run experiments on a website that weren't easily possible previously like; AB tests and rolling updates.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=66)** Deploying applications through continuous deliveries is easier too.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=70)** Previously Explore California development teams used well-written but increasingly complex Ansible playbooks to deploy their applications from environment to environment.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=79)** While some of these developers were able to grok Ansible fairly easily, many enlisted the help of explore California's operations team, whenever the playbooks needed to be changed.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=89)** After migrating to Kubernetes Explore California developers used Helm charts and Docker files to describe it installed their applications in T chaos.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=98)** Deployment teams are also able to control almost everything their application needs with Helm, from the number of instances in their application and their environments to their underlying network configurations.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=108)** Finally testing locally with Kubernetes was an easier switch than some teams were expecting.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=114)** The SVP of engineering was excited to lead off their weekly leaders call as their six month of Kubernetes neared.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=121)** You know, he relaxidly began, Local testing was the thing about Kubernetes I feared the most.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=127)** Most friends started with Kubernetes years before us.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=130)** They wouldn't stop telling me about the headaches and horrors or trying to get Kids working locally for their devs.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=135)** (mumbling) who Batman cops, the list of tools never ends.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=140)** And why do they all start with a K?
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=142)** An engineer on one of my teams told me about Kind.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=144)** He even showed me how easy it was to set it up and he wasn't kidding.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=147)** It was easy.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=148)** Even with ingress and local storage.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=150)** It's not Docker compose easy, but it's nowhere near what I thought it was going to be.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=155)** "I'm glad that we did this challenge. He concluded.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=158)** Our desert testing their stuff easier, more frequently than ever.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=161)** But relation to and experimenting with prod is crazy easy.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=164)** And I thought it was easy before.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=166)** On top of that, the engineers are hiring.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=168)** They have Kubernetes shops are on point.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/our-application-post-kubernetes?u=76281980&t=170)** I can't wait to get a hundred percent of our stuff onto Kubernetes.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), ansible (2)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (3)
> **Env Vars:** cto (1), ec2 (1), svp (1)
> **Code Keywords:** switch (1)
> **Speakers:** - [narrator] (1)


### 2. A Brief Overview of Kubernetes

#### How Docker containers work
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=0)** - [Instructor] Before we delve into getting explorecalifornia onto Kubernetes, let's briefly recap containers and how they work.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=7)** Since we'll be using some of these concepts throughout our mission, it's a good idea to review them upfront.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=11)** Containers are virtualized instances of operating system kernels.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=15)** Unlike virtual machines, while containers look like separate smaller instances of Linux or Windows, they consume resources like processor time, memory, and disk space directly from their parent host as you can see in the diagram on the right.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=29)** From your computer's perspective, containers look like separate apps running along same Word, Outlook, and the instance of Chrome that you're watching this course from.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=37)** Well, what does that all even mean?
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=38)** Well, let's create a hypothetical file as an example.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=41)** Let's say that we had a file called food dot TXT, and we put it in the directory slash TMP as you can see on the upper right-hand corner.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=50)** When I create slash temp slash food dot TXT inside of a Linux container, the container will use your computer's Linux installation to write that file.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=58)** And that file will live inside of your computer's hard disk, as you can see on the bottom right-hand corner of the screen.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=64)** So while the file from inside of the container will look like slash TMP slash food dot TXT, inside of your actual computer it looks like something completely different, usually a much longer path here.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=76)** And you can see an example of that path if you squint and look real close at this slide, but that's just an example of how Docker or another container runtime might store that file.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=89)** However, if I were to do the same exercise inside of a Linux virtual machine, the virtual machine would write that file on its own virtualized hard disk.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=96)** So while your computer will store a file that represents that virtual machine's hard disk, your computer actually knows nothing about that file.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=105)** So how does this all even work?
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=108)** Why does the container see slash TMP slash food dot TXT but my actual computer see some crazy long path?
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=115)** Well, this bit of magic is achieved through something called a union file system.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=120)** Union file systems work by combining multiple different layers of file systems, such as files, directories, and otherwise into a single file system.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=127)** I like using sandwiches or burgers to explain how this works.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=130)** When you build a delicious burger like this one on your screen, you start with a layer of bread.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=135)** You then put stuff on top of that layer of bread, like cheese, tomato, lettuce, extremely secret sauce.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=143)** You can put whatever you want in there.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=144)** You can put as many layers of things as you like, but the entire sandwich is just a combination of all these layers of bread and stuff.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=152)** In your container's case, it looks like this, where you start from an existing layer, say the bread or even a command, as you can see here and then you can add as many different layers on top of it.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=166)** And even though they're separate layers that all do separate things, at the end of the day when you squash all of them down, you get a Docker image or a container image.
>
> **[2:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=177)** So in your containers case, to go back to our previous example, the final sandwich is mounted at the root directory of your container's file system at slash.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=187)** Virtual machines are literally virtual instances of machines.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=191)** They come with their own virtualized processors, virtualized memory, virtualized hard disks, Necker cards, graphics cards sometimes, et cetera.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=198)** As you can imagine, creating virtual machines to run applications like explorecalifornia can be quite heavy.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=204)** Basic website like the one that we're going to work with and a Linux distribution to run it on would need something like 128 megabytes of memory at the very least, say a gigahertz of processor resources and five gigs of hard space, just to be conservative.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=220)** That's a lot for a website, especially if you're just testing it on your computer.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=224)** Containers allow you to put the files of your website and the web server like Nginx into a few layers of directories and run your web server in a website as if it were another application on your machine.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=235)** This way, instead of needing all of the resources that you'd need to run an entire virtual machine, you can run your website with 50 megs of memory and maybe a few megahertz of processor time.
>
> **[4:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=247)** Containers are created and run by things called container runtimes.
>
> **[4:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=250)** There are many different runtimes out there.
>
> **[4:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=252)** I referenced Docker earlier, that's one of the most popular ones, but Docker actually runs on a container runtime called container D, and Kubernetes also uses container D.
>
> **[4:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=263)** However, there's other runtimes like Podman, Rocket, et cetera that all accomplish the same thing which is to allow your application to run inside of a container just like the sandwich we saw earlier.
>
> **[4:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=275)** The magic that Docker brings to containers comes in two parts, the first is a Docker file, and the second is a Docker API.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=282)** Docker files, like the example that we see here, allow you to write instructions for creating those layers that we spoke about earlier.
>
> **[4:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=288)** With a quick invocation of Docker build and a command line terminal, Docker takes most of the lines in those Docker files and compresses them into something called a Docker image.
>
> **[4:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=296)** Docker then uses container D to create containers mounted from the images by running Docker run in that same terminal window.
>
> **[5:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=304)** The beauty behind Docker is that these images can be used on any computer that can run Docker and container D.
>
> **[5:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=311)** It doesn't matter how fast, slow, big or small that computer is, as long as it has Docker and container D.
>
> **[5:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=317)** And as long as the operating system used to create those layers is the same as a computer's operating system, Docker can create containers from those images.
>
> **[5:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=327)** As you might expect, this is huge for developing software.
>
> **[5:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=330)** Instead of having to worry about crafting local VMs that are just like the machines, running your software in production, or having the laptop big enough to run those VMs in the first place, you can store your application and everything that it needs into a Docker image and run that wherever Docker is installed.
>
> **[5:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/how-docker-containers-work?u=76281980&t=346)** The same Docker image that you can run on your machine can also run on production hardware, which has massive.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (21), nginx (1)
> **Env Vars:** txt (4), tmp (3), api (1)
> **Code Keywords:** let (3), case, (2), from. (1), this, (1)
> **Analogies:** just like (2), such as (1), imagine (1)
> **Tools:** terminal (2), command line (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### What is Kubernetes?
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=0)** - [Instructor] Docker is awesome.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=2)** However, as teams create more and more Docker containers to run their apps, it becomes increasingly challenging to manage them all.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=10)** Things like controlling storage for them, ensuring that they get created on the right set of machines and discovering them inside of a network can be real challenging examples of what happens when you run quote unquote raw Docker in production.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=24)** Container orchestrators were created to solve this problem.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=27)** Orchestrators can manage machines that create and run containers and may containerized applications in those machines easy to find and manage.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=35)** There are many examples of container orchestrators out there today.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=38)** However, Kubernetes is by far the most popular option.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=41)** Kubernetes is a planet scale container orchestration system.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=45)** Originally inspired by Google's in-house container orchestration platform called Borg, Kubernetes aims to make creating and managing containers for any workload as easy as managing virtual or physical machines in a data center.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=59)** Unlike similar platforms, Kubernetes can manage clusters of up to 5,000 nodes and up to 150,000 pods.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=66)** It also provides convenient attractions for handling persistent and ephemeral storage, container networking, load balancing, sensitive data, and even application deployments.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=75)** Let's talk about some of the fundamental objects that Kubernetes uses to achieve this.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=80)** The smallest unit of compute and Kubernetes is called the pod.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=84)** Kubernetes pods group similar containers into a logical unit.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=88)** Containers inside of Kubernetes pods have the same IP address and move quote unquote together from host to host.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=95)** Pods get scheduled onto Kubernetes Cubelets or nodes, which you can see an example of in the center of your screen in the dashed box.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=105)** Cubelets like these are machines that host pods in their containers and configure an aggregate between them.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=110)** While you can create pods directly, you won't want to do this most of the time.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=114)** Instead, you'll want to create them through resources called deployments.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=118)** Kubernetes deployments provide a desired state for pods in an application.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=122)** With deployments, you can easily scale the number of pods as needed by your application either manually or automatically.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=129)** You can also control how new pods join your deployment, which is really helpful while releasing new versions of applications.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=135)** Pods within deployments otherwise are discovered inside of Kubernetes networks through the resources called services.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=143)** Services provide a single IP address and a DNS record for a group of related pods.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=148)** Like pods, IP addresses for services can be reached by any container in a Kubernetes cluster.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=153)** However, unlike pods, services give developers more control over when and how those IP addresses become available.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=161)** Kubernetes can even attach load balancers provided by cloud providers to these services, which makes it even easier for application pods to be reached throughout your cluster and from the outside world.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=170)** Speaking of routine applications on Kubernetes from the outside world, Kubernetes provides really convenient objects called ingresses for explicitly this.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=180)** Ingresses are HTTP reversed proxies that allow the outside world to reach Kubernetes pods through one or more routing rules.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=187)** These rules are created and managed through things called ingress controllers.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=191)** Here's an example of how powerful Kubernetes can be in this regard.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=195)** Let's say we wanted to create a forum for Explore California at [explorecalifornia.com/forum](https://explorecalifornia.com/forum) so that customers can discuss cool things that they've experienced thanks to using Explorer California.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=207)** The software we use to power the forums will probably be completely different from our main website.
>
> **[3:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=213)** Pre-Kubernetes, you'd have to configure a web server to create two V hosts or virtual hosts and use service IDRL we write rules to handle this.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=220)** It's possible, but it's a pain.
>
> **[3:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=222)** With Kubernetes, our ingress can use those same rewrite rules to point to two completely separate pods like you can see here above the ingress box.
>
> **[3:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=231)** This is really nice when you actually use it and we will.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=235)** There are many more objects that Kubernetes uses to achieve planetary scale container orchestration, but to save time, we won't cover them all.
>
> **[4:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kubernetes?u=76281980&t=243)** You can learn about the wide world of the Kubernetes objects by reading the Kubernetes documentation at [https://Kubernetes.io](https://Kubernetes.io).

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), find (1), make (1)
> **Code Keywords:** this. (3), let (2)
> **Env Vars:** dns (1), http (1), idrl (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1), [https://kubernetes.io](https://kubernetes.io) (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)


### 3. Testing Locally with Docker

#### Installing Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=0)** - [Instructor] To get started on our journey, we're going to install Docker.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=3)** Because we're using a Mac for this journey, I'm going to install Docker for Mac.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=7)** Docker for Mac installs two things, a really small Linux virtual machine for hosting and running Docker containers and a command line client that interacts with it.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=16)** It also installs Docker Compose, a tool for linking multiple containers together as if it were a single application stack.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=22)** Are you running this on a Windows machine?
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=24)** If your machine is running Windows 10 or later, you can install Docker for Windows, which is more or less the same thing as Docker for Mac.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=30)** If you're running Windows 7 or Windows 8, you'll need to install Docker Machine instead which is slightly more involved but behaves more or less the same once everything's up and running.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=39)** I like to use a tool called Homebrew for installing applications on my Mac.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=44)** It's a handy tool that makes it easy to download and install almost any application I can think of.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=50)** If you use or have used Linux and have installed software from package managers like YUM, YaST or aptitude, then Homebrew will feel right at home for you.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=58)** Side note, if you're a Windows user, then you should give Chocolatey a try.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=63)** It's the same concept except more .net-y, if that's a word.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=66)** Now let's get to the fun stuff.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=67)** I always forget the command I need to install Homebrew, fortunately on brew.sh, which is a site that I'm on.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=74)** You can copy it straight from the website.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=76)** So I'm going to go ahead and do that right here from the middle of the page.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=79)** And then I'm going to go into my terminal and I'm going to paste it.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=82)** Now I already installed Homebrew.
>
> **[1:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=85)** I'm not actually going to run this, but when you do run it, it's going to ask you for your administrator password, which you'll need to have administrator access in order to install this.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=94)** And it takes about a few minutes to install.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=96)** So just be patient.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=98)** So after Homebrew's installed, you can install Docker easily by running brew install Docker --cask, not brew install Docker.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=111)** This command will install just the command line client, but not Docker for Mac.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=116)** And when you try to use it, you'll get an error about it not being able to communicate with Docker.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=121)** So remember to add --cask to the end of the command.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=124)** So I'm going to go ahead and hit space.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=126)** Like I said, I've already installed Homebrew and I've also reinstalled Docker, but when you do this, it should download the Docker for Mac installer and install it for you automatically.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=135)** So I'll know that once Docker's installed, you can hit command space and then just type Docker.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=141)** And once you do that, you'll see Docker for desktop spin up.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=146)** I'll know that Docker's running by looking at my menu bar here and seeing a little whale up here, as you can see here.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=153)** If you see this whale and you see a stack of containers on top of it and they're not moving, then that means that Docker is installed and it's ready for you to use.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=162)** If you like me, you have a small exclamation mark there, it just means that it needs to be updated.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-docker?u=76281980&t=167)** I wouldn't worry about it.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (20), brew (3), yum (1)
> **Prerequisites:** install (13), you'll need (2)
> **Code Keywords:** this, (2), try. (1), let (1), this. (1)
> **Tools:** command line (2), terminal (1)
> **Definitions:** means that (2), is a  (1)
> **File Paths:** brew.sh (1)
> **Env Vars:** yum (1)
> **Exercise Files:** download the (1)

#### Writing our project's Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=0)** - [Instructor] The life of a Docker container image starts with a single file.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=4)** The Docker file.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=5)** Docker files are manifests that describe the image that your container will use and what will run within it.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=11)** When we create the container that will run our website, Docker will do the following.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=15)** First it will read and parse this docker file.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=18)** Second, it will fetch the parent image that the Docker file requested, which in this example is, in the nginx:alpine image, or the image named scratch, if you're starting from a blank slate.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=30)** Third it'll run any commands within the Docker file on top of that image, such as the copy commands demonstrated here on lines four and five.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=39)** And finally if defined, it will set a process that will run whenever this container runs along with any arguments provided to it.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=46)** Unlike traditional configuration management tools like Chef, Puppet or Ansible, all configuration dependencies, and other environment settings that your application needs to run itself can be defined within the Docker file.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=59)** Additionally, while you can write scripts that will perform the installation steps within the Docker file.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=64)** These are not required.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=65)** With that let's open up an editor and write our applications first Docker file.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=70)** Now I want to reiterate that I'm going to use vim here, to edit my Docker file and all the files going forward, but you can use any editor that you'd like.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=79)** This is completely optional, it's just my favorite editor.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=83)** All Docker files started with a FROM command FROM tells Docker which image to use as a base for the commands we're about to run.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=90)** Remember how we talked about Docker images being like a sandwich or a burger?
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=94)** Well, you can think of the FROM line as the bread to that burger.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=98)** You can't make a burger without a bun.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=101)** So the FROM line is very much like that bun.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=104)** Since [explorecalifornia.com](https://explorecalifornia.com) is hosted by nginx.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=107)** We are going to use the ngnix Docker image from a public registry called the Docker hub.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=113)** So let's go there now and explore it.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=115)** So the Docker hub is located at hub.[docker.com](https://docker.com).
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=119)** Docker imageries are by default retrieved from this repository.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=123)** Anyone can upload images into the Docker hub, but some of these images are maintained directly by Docker.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=128)** These are called quote unquote "official images".
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=132)** The inginx image is an example of an official image.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=137)** Docker can also retrieve Docker images from private repositories.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=141)** We'll actually use this feature later in our course to run, explorecalifornia inside of a local Kubernetes cluster, which is really exciting.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=148)** You don't always need to start from another image.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=150)** If you'd like to start from blank slate, you can just say FROM scratch.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=154)** However, this means you'd have to configure everything about your container, like the operating system internals, which is complicated, and you probably don't want to do that.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=164)** I certainly don't want to do that.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=165)** We're going to make it start from our nginx image.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=168)** The next line that I like to add is a label that documents the maintainer of this Docker file.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=174)** That's done by adding the label annotation here.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=176)** Labels can be any key value pair, but in this case, we're going to call this the maintainer line.
>
> **[3:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=181)** And the way that looks here is going to be maintainer="Carlos Nunez", And then it's a nice thing to do is to put your email address inside of carets like this.
>
> **[3:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=192)** So I'm going to put a dev@carlosnunez.me, which is a real email address.
>
> **[3:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=196)** If you have any issues, you can always email me there.
>
> **[3:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=199)** In some older Docker files.
>
> **[3:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=200)** This line actually looks like, this.
>
> **[3:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=205)** However, the reason why lying three is preferred is because it's not a dedicated maintainer line, it's a label.
>
> **[3:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=213)** And that is used by Docker internally to make it easier to see what your image is composed of, whereas this maintainer line is technically deprecated and it's not really used for anything.
>
> **[3:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=223)** So if you want to add a maintainer line, I would recommend adding it as a label like we're doing here on line three, instead of what I did on line two.
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=232)** Next we're going to add the contents of our website.
>
> **[3:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=234)** So to do that, we're going to use the copy command, which we saw an example of earlier.
>
> **[3:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=238)** The copy command takes two arguments, the source file, or the directory we're copying from and the destination inside of the container that we are copying to.
>
> **[4:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=247)** Since the website is located at the website folder in our working directory, we're going to copy ./website into a directory inside of the container called a website, underneath the root directory.
>
> **[4:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=258)** So that's going to be /website instead.
>
> **[4:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=261)** Next we're going to copy our website's inginx configuration into the container.
>
> **[4:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=265)** Since nginx expects this configuration to be called nginx.conf, and expects it to be living inside of etsy nginx directory.
>
> **[4:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=274)** We're going to make that our destination.
>
> **[4:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=275)** So I'm going to say, copy website.conf into Etsy nginx, nginx.conf.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=282)** If you've seen other images before embarking on this mission, you might've seen images with entry points and commands, and they might look like this.
>
> **[4:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=292)** Let's talk about that.
>
> **[4:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=293)** Docker images are layers of images stacked on top of each other.
>
> **[4:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=297)** Let's go back to our slide here.
>
> **[4:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=299)** So this stack not only provides files and directories provided by each image, but the instructions written in our Docker files.
>
> **[5:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=305)** Like our burger example has here.
>
> **[5:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=308)** If we were writing this from scratch, or if we want it to start another application inside of our website, we'd have to add an entry point command here.
>
> **[5:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-dockerfile?u=76281980&t=315)** The nice thing about the nginx base image however, is that it provides an entry point for us that starts our website as long as we provide an nginx configuration, which we're doing on line five, therefore we don't need to put an entry point here.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (28), nginx (10), make (4), ansible (1)
> **Code Keywords:** let (4), this. (3), public (1), private (1), case, (1)
> **Cross-References:** we talked about (1), later in (1), go back to (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1), [docker.com](https://docker.com) (1)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** vim (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)

#### Building the Docker image from the Dockerfile
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=0)** - [Instructor] Now that we have our Docker file ready to go, let's create a Docker image with it.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=4)** So I'm going to exit my editor and go back to my terminal.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=7)** First, we're going to use the docker command line client to do this.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=10)** The command line client comes with many different options.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=13)** You can see a glimpse of them by running docker --help here.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=18)** And as you can see, there's a lot of different commands that you can run.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=21)** Since we want to build a new Docker image from a Docker file, we're going to want the build option, which you can see right here.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=27)** Just like we did for docker --help, we can see the options that we can use with docker build by doing docker build --help.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=35)** And as you can see, this is slightly smaller, but it provides a series of command line flags that we can provide to this sub commands.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=43)** Now, the first thing we're going to want to do is give the local copy of our image that we're going to build a tag or a name, then we're going to want to tell Docker to use our current working directory as it's working directory in which our website and its configuration are contained.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=63)** So based on this usage text, what I'm going to want to do is I'm just going to highlight that again, I'm going to want to use this -t or --tag command to tell Docker what to name it.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=75)** And I'm also going to want to set our path, which we'll go after that to just our current working directory.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=81)** What does that look like?
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=82)** Well, that will look like this.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=83)** It will look like docker build -t.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=87)** Let's go ahead and name our image [explorercalifornia.com](https://explorercalifornia.com), and because we're going to use our current path, I'm just going to put a dot here.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=95)** You can also put dash PWD or you can put the full path, like explorecalifornia.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=101)** It's completely up to you or you can do like, src/explore-california, but it's completely up to you.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=107)** I'm going to go ahead and use the dot here.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=110)** Now let's go ahead and create a new container image by running this.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=114)** And as you can see, there's going to be a bunch of output.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=116)** These are all the layers being fetched.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=118)** Some of them are from Docker Hub.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=120)** Some of them I've already had on my machine and so it didn't need to fetch it again.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=124)** But once it's done, you'll see that the last step is naming the image to [explorecalifornia.com](https://explorecalifornia.com).
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=131)** Once that happens, assuming you don't see any red or anything like that, you are good.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=135)** The image is built.
>
> **[2:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=136)** Now, let's go ahead and create a container from this image.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=139)** And I'm going to go ahead and use the docker run command.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=142)** Now, do you want to know more about what the docker run command does, you can always do --help to do that.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=147)** Just like we did before.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=149)** So the first option I'm going to use as the rm option, which tells docker to remove the container once a container stops running.
>
> **[2:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=157)** By default, Docker will keep the container around in case you want to look at its logs, or do you want to inspect what the container looked like while it was running.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=165)** We don't want that.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=165)** So I'm going to use the --rm option here.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=168)** Then I'm going to use --name, which is the name of the container.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=172)** In this case, it's going to be [explorecalifornia.com](https://explorecalifornia.com).
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=175)** Note that this is not the image name, the image name comes at the end of this command.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=180)** This is just the name of the container.
>
> **[3:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=182)** Then I'm going to want to make some ports available since this is a website after all.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=187)** So you can do that with either --publish option or as it's more commonly known the -p option.
>
> **[3:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=193)** And the way that this argument works is that you provide the port inside of your machine that you want the port inside of the container to be made available to.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=204)** The way I like to shorten this is that the outside port, RIE outside of the container goes on the left then you separated by a colon and any specify the port inside of the container that's actually being served.
>
> **[3:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=217)** So in this case, we're a website so we're going to be serving port 80 from inside of this container and on my machine, let's go ahead and make it port 5000.
>
> **[3:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=227)** Now, if you try to make it port 80 depending on how the Docker is set up on your machine, you might not be able to, because it's a low numbered port and only super users and admins can assign those ports or in some instances, just the operating system.
>
> **[4:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=240)** So I'm going to go ahead and use port 5000 to be safe.
>
> **[4:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=243)** And then lastly, I provide the name of the image, which is going to be [explorercalifornia.com](https://explorercalifornia.com).
>
> **[4:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=249)** So now I went ahead and ran that and is our website running?
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=255)** Let's find out.
>
> **[4:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=256)** So I'm going to go ahead and go back to my browser, and then I'm just going to go to local host at port 5000.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/building-the-docker-image-from-the-dockerfile?u=76281980&t=262)** As you can see, Explore California is up and Docker is working beautifully.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (19), make (3), rm (2), find (1)
> **Code Keywords:** let (6), this. (3), case, (2), default, (1), super (1)
> **Ports:** port 5000 (3), port 80 (2)
> **URLs:** [explorercalifornia.com](https://explorercalifornia.com) (2), [explorecalifornia.com](https://explorecalifornia.com) (2)
> **Tools:** command line (3), terminal (1)
> **Env Vars:** pwd (1), rie (1)
> **Cross-References:** go back to (2)
> **Analogies:** just like (2)

#### Writing our project's makefile
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=0)** - [Instructor] Make is a popular build tool.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=2)** It is used to compile and package source code into applications.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=5)** Many popular projects use Make to create software you know and love.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=9)** Mozilla Firefox, Haskell, and even Kubernetes are some examples of software compiled with Make.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=14)** In fact, this image right here is directly from the Kubernetes project.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=19)** Go into GitHub/Kubernetes/Kubernetes, and you can see this and much more.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=25)** Make can also be used to perform one-off actions, such as creating files and running scripts.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=30)** We will use this feature to test our website in Docker and get it running inside of Kubernete.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=35)** Like Docker, Make receives its instructions from a file called a Makefile, an example of which is shown right here.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=41)** Makefiles contain a series of rules to tell Make what to do.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=44)** Let's create one now.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=45)** So going back into my terminal, I'm going to open an editor and open and create a new file called a Makefile.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=52)** Make rules are instructions that tell Make to do something.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=56)** The instructions provided to a Make rule are usually written in shell scripts.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=59)** So let's say we wanted to build and run the Docker container for Explore California.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=64)** This will be a perfect example of something that can turn into a Make rule.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=68)** That rule would look something like this.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=70)** So the rule name would be run_website.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=72)** I separate it by a colon to tell Make that that is a rule.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=75)** And the next lines succeeding it are going to be a script.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=78)** Then I'm going to build my Docker image, just like we did before.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=82)** And then I am going to run the container.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=90)** Let's explain what we just wrote here.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=92)** So the word behind the colon and my first line here, that's called a target.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=97)** By default, this is the file that Make expects to exist after this role is executed.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=101)** So in our Makefile, our target is called, "run_website."
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=105)** You can also tell Make that this target depends on other targets by specifying them to the right of the colon.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=110)** These are called prerequisites.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=112)** For example, target_a, target_b, and target_c.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=116)** These fictional targets would be prerequisites for run_website.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=120)** They would run before this target executes.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=123)** If any of them fail, then run_website will not run successfully.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=127)** The set of instructions that tell Make to do stuff is called a recipe.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=130)** You can see an example of that on line two and line three, where we build the Docker file and then run a container from that Docker image.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=138)** Recipes start below the target and prerequisites, if any.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=142)** Every line in a recipe must be indented and lines that are continuations from previous lines must end in a backslash like this.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=149)** In our case, the recipe for run_website will build our Docker image and then run a new container from that image.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=158)** That covers everything that we'll use for our Makefiles, but this scratches the surface of what Make is actually capable of doing.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/writing-our-project-s-makefile?u=76281980&t=165)** If you're interested in learning everything that Make can do, you can check out the official documentation in the link below.

> [!info]- Semantic Content
>
> **CLI Commands:** make (16), docker (7)
> **Code Keywords:** let (3), this. (2), default, (1), case, (1)
> **Code Identifiers:** run_website (5)
> **Definitions:** is a  (2), is called (2)
> **Tools:** firefox (1), github (1), terminal (1)
> **Analogies:** such as (1), just like (1), for example (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Testing the website with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=0)** - [Instructor] Let's run this target.
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=1)** First, we'll save the file and then close it.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=4)** Next, we'll go into our terminal and ensure that we're in the right working directory, which we are.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=10)** Finally, we'll run our make target by running make run_website.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=15)** Now I forgot to remove my prerequisites, they don't exist.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=17)** So let me go ahead and do that now.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=20)** All right, they're gone.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=21)** So let's go ahead and try that again.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=23)** That's a weird error message.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=24)** Why are we getting this?
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=26)** Well, if going back to our make file here, if you remember, I mentioned earlier that this target is a name of a file that make expects to exist after it runs.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=37)** Now, if we look inside of our directory, we can see that we have a file called run website already there.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=43)** So what make did, is it ran the target as we expected it but because the file was already created, there was nothing to do, right?
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=52)** Because it's already there, right?
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=54)** So, in order to fix this, we need to use something called a phony target.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=59)** So let's go back to our make file here.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=61)** A phony target is just a target that won't have a file created when it's done.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=66)** The way you create phony targets, as you specify a rule at the top of your make file, normally called .PHONY, that's all upper case.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=75)** And then after that, you're going to provide the targets that are phony targets.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=78)** So for example, run_website is a phony target.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=81)** So we're going to go ahead and put that on the right.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=83)** So I'm going to save this and I'm going to quit and try running this again.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=86)** So like do make run_website.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=88)** We can see this time it actually worked.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/testing-the-website-with-make?u=76281980&t=91)** And when our container starts up, if I try and open locals 5,000 we can see that it loads up just fine.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8)
> **Code Keywords:** let (4), finally, (1), this, (1), case. (1)
> **Code Identifiers:** run_website (3)
> **Definitions:** is a  (2)
> **Env Vars:** phony (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)

#### Challenge: Write a teardown make target
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980&t=0)** - [Instructor] All right, it's time for our first challenge.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980&t=8)** In this challenge, you're going to create a Make rule that stops the running [explorecalifornia.com](https://explorecalifornia.com) Docker container that we created earlier.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980&t=15)** The rule should work even if a file of the same name as this target exists in the same directory.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980&t=22)** And remember, if you're having any trouble, don't be afraid to use Docker --help!
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980&t=27)** or consult the Make file documentation that we referenced earlier.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-write-a-teardown-make-target?u=76281980&t=31)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (2)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Write a teardown make target
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=5)** - Let's solve this challenge.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=7)** First, we'll need to know how to stop running docker containers.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=10)** Now, if I look at docker dash dash help, you'll see that there is a stop command right here that will stop one or more running containers.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=18)** That seems like an appropriate command to use.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=20)** So we'll probably need to use this.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=23)** Let's take a look at our make file here.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=25)** In our make file we named the container [explorecalifornia.com](https://explorecalifornia.com) since it came after the dash dash name command light option here.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=34)** However, because this container has the dash dash RM option set, once we stop the container it will automatically be removed.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=43)** So with those three facts intel, let's go ahead and create a new target called stop underscore website.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=50)** Now you may have called this something different in your challenge, and that's totally fine.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=53)** Now, if you recall, if we tried to run this and we created a file called stop website, this target wouldn't actually run because of the way that make works.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=64)** When it tries to run this target it's going to look for a file of that same name, and if it exists, then the targe, the make won't run it.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=71)** So in order for us to prevent that from happening, we need to make it a phony target.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=74)** So let's add it to the phony target line here, and then go ahead and put docker stop [explorecalifornia.com](https://explorecalifornia.com) And then we're going to exit, and save before exiting, and then we're going to go ahead and rerun our make run website target.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=89)** Now, before I do that, I'll point out that if you try to run this, you might see that it has a lot of text after you run it.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=96)** And the only way to get out of it is to press control C or something.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=100)** That's because by default docker brings your containers logs into the foreground, which means that it'll take over whatever process that it ran from.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=109)** In order to prevent that from happening, I put in the dash D option here, which is short for demonize.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=114)** And what that does is it moves the logs and the container itself into the background so that you could continue working inside of the same terminal.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=123)** So with that, let's go ahead and rerun make one website, and it's going to do the same thing as before.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=128)** It's going to build our image, and it's going to start a container from it.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=131)** That's what this long string is here.
>
> **[2:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=133)** Now let's run make stop website and see what happens.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=137)** Or actually before we do that, let's just confirm that the website actually works.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=140)** So I'm going to go ahead and go to our local host 5,000.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=144)** As you can see it is working.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=146)** So now let's run make stop website.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=148)** So it was stopped. And if I try to run this again, you can see that we're unable to connect because the container was stopped and it's no longer reachable.
>
> **[2:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-write-a-teardown-make-target?u=76281980&t=157)** That concludes the challenge. I hope you had fun.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9), docker (4), rm (1)
> **Code Keywords:** let (8), this. (1), this, (1), from. (1), continue (1)
> **Definitions:** is a  (1), means that (1), short for (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)


### 4. Running Kubernetes Locally with kind

#### What is kind?
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=0)** - [Instructor] Now that our website successfully runs in Docker, we are ready to run it inside of Kubernetes.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=5)** Creating a Kubernetes cluster in AWS is currently around 10 cents an hour.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=9)** That's around $2 a day.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=12)** While the seems cheap on its face, those $2 can add up.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=16)** It can add up to about $60 a month, in fact.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=19)** Before opening up our wallet and creating ourselves a cluster, we're going to get Explore California working locally with a tool called kind.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=26)** kind is short for Kubernetes in Docker.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=29)** kind aims to create small, simple clusters that are suitable for testing applications that will run inside of Kubernetes.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=36)** Unlike similar tools like K3S and K0S, since kind clusters run entirely in Docker, Docker is the only application you need to run it.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=45)** That's pretty cool, if you ask me.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=47)** There are other tools like kind that aim to create simple Kubernetes clusters on your machine.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=52)** K3S, Minikube and MicroK8s are some examples of these.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=56)** Docker for Mac even comes with the distribution of Kubernetes, though Docker might start and stop more slowly than before with this feature enabled.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=64)** K3S, on the upper side of this quadrant, is the most popular alternative.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=69)** Unlike kind, K3S packages all of the backend Kubernetes components into a single binary.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=75)** This has made it a great alternative for running Kubernetes, especially in lightweight production scenarios.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=80)** K3S is also a very light version of Kubernetes, though it achieves this by removing certain low usage feature.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=87)** Kind comes with the command line client.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=89)** It's fairly simple.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=90)** All it allows you to do is create, list and delete clusters.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=94)** That's it.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=95)** Fortunately, most of the work that we'll be doing with our client cluster will be done with the kubectl tool, as well as with helm, both of which we'll talk about later.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-kind?u=76281980&t=104)** Now that we know more about kind and how it works, let's use it to run Explore California.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), aws (1), kubectl (1)
> **Env Vars:** k3s (5), aws (1), k0s (1)
> **Code Keywords:** delete (1), let (1)
> **Tools:** command line (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### Installing kind
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=0)** - [Instructor] First, we will need to install the latest version of kind from their website.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=4)** Let's open a browser and visit kind.sigs.k8s, that's short for Kubernetes, .io.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=11)** Next we're going to click on Quick Start over here on the left.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=14)** Once we're there, we're going to click on installation underneath contents.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=18)** We're going to skip the instructions for installing kind with Golang as we might not have Go on the system and it can take a while to install.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=24)** Instead, we are going to scroll down a bit for a link to the releases page, which is right here.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=28)** That's going to bring us to kind's GitHub page.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=31)** The latest version right now is version 0.11.1.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=35)** Since we are going to automate the creation of these kind clusters, we're going to get the URL for the release we need and install it through the terminal.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=42)** So let's scroll down to the list of variants for this release.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=45)** Since I'm recording this on a MacBook that is using Apple's custom M1 chip, I'm going to right click on the 'darwin-arm64' variant and click on Copy Link.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=55)** Now, if you're running this on a regular Mac, right click on the 'darwin-amd64' variant instead.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=62)** If you arr running this on Windows, right click on the windows-amd64 variant below.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=68)** And of course if you're running this on Linux, you have several options, so make sure that you pack the version that's right for your CPU.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=74)** Now let's head to our terminal.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=75)** We are going to use a tool called curl to download kind.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=78)** But, before we paste the link that we copied, we need to provide a few command line options.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=82)** The first option is '-L' or '--location'.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=87)** And what this does, is it follows any redirect that we get while trying to download kind.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=92)** Since get hub links are redirected elsewhere, we'll need this dash dash location option to successfully download kind, otherwise we'll get back a webpage.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=101)** Which quick tip, if you run this and get either a permission denied error or a weird syntax error, you probably forgot to put this option before your link.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=111)** The second option we'll use here is '-O' or dash '--output'.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=115)** This tells curl that we want to rename the file we're downloading once it's finished downloading.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=119)** We'll want to do this here because kind is named after the operating system and processor architecture it was compiled for.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=125)** And this produces a really long name.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=127)** I think 'kind' will be easier to type than 'kind-darwin-arm64.'
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=132)** So I'm going to put a './kind' here so that I don't have to type that long name.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=137)** Now that we provided our options, let's paste the link that we copied and hit Enter.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=142)** So let me paste it here and hit Enter.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=144)** This might take a couple of minutes to download depending on your internet connection.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=149)** Once curl's downloading, we'll verify that kind was downloaded and is the application we're expecting it to be by running, './kind --version.'
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=158)** you might see this error after downloading kind, that means that your shell thought that your application was a shell script instead of an application and it didn't know how to run it.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=168)** So in order to fix that, we're going to use the chmod or Change Mode or chmod command to fix this.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=176)** So we're going to do 'chmod +X,' for execute, and then './kind'.
>
> **[3:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=182)** What this does, is it tells our operating system that we want this kind binary to be executable on its own right.
>
> **[3:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=190)** So now that we did that, I'm going to rerun the '--version' command from earlier, and as expected, I got a version string after running that, which tells me that I downloaded the right file and it's the version that I expected it to be.
>
> **[3:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=203)** Now that we verify the kind has been downloaded, let's copy the curl command that we ran earlier, then open our Makefile and add a new target called 'install_kind'.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=215)** First, we want to make sure that 'install_kind' is a phony target so that it doesn't fail unexpectedly.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=224)** Next we're going to paste the curl command that we copied earlier.
>
> **[3:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=227)** When you do this, make sure that the beginning of the line has two spaces before curl.
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=232)** That way Make knows that it's a shell command that you're running.
>
> **[3:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=236)** Now that I've pasted this, I'm going to add two ampersands to the end of this line, and then a slash to tell Make that there are more commands that we want to execute.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=244)** Then I'm going to add a new line and I'm going to put in the '--version' command that I executed earlier so that we can automate this version check.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=255)** Now that we have this, I'm going to save our Makefile and exit my editor.
>
> **[4:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=259)** And then I'm going to run 'make install_kind' to test it out.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/installing-kind?u=76281980&t=264)** As you can see a re-downloaded kind and it showed us the version string that we saw earlier.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), curl (6), chmod (3)
> **Code Keywords:** let (6), this, (3), for. (1), this. (1)
> **UI Navigation:** click on (6), scroll down (2)
> **Tools:** terminal (2), github (1), command line (1)
> **Code Identifiers:** install_kind (3)
> **Definitions:** short for (1), means that (1), is a  (1)
> **Prerequisites:** install (3)
> **Env Vars:** url (1), cpu (1)

#### Creating the kind cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=0)** - (narrator) Now we are going to create our kind cluster and verify that it works.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=4)** First, we are going to run kind, dash, dash, help to see what options we have available to us.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=10)** Since we're creating a cluster, we can see though, we'll need the create option here.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=14)** So let's check out that command's help page by typing kind, create, dash, dash, help.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=20)** This command is very easy because there's only one command underneath it, and that's the cluster command.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=25)** So let's rerun this one more time, but with "cluster" added, as you can see, we have several options here, a lot of which don't apply for what we're trying to do, which is to create a cluster.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=35)** The only option that we need is dash, dash, name, which is right here.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=39)** So let's go ahead and run that command now.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=42)** So the command that we're going to run is kind, create, cluster, and then we're going to add dash, dash, name, and then we're going to add the name of the cluster, which in our case can be [ExploreCalifornia.com](https://ExploreCalifornia.com), but it can be anything you want.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=57)** Let's get that running now.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=58)** This might take a minute to get going.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=60)** If you encounter any issues while you run this, make sure that Docker's running.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=64)** The easiest way to check if Docker's running is by going to your menu bar and looking for that Docker whale up here.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=72)** If this Docker whale is not present, or if it has boxes on top of it, but they're moving, then that means that Docker either isn't running or it's not ready yet.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=82)** If it isn't running, you can press command, space and then type "Docker" to start it.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=87)** If you have an exclamation mark next to your Docker whale, then that's okay.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=91)** It just means that Docker needs to be updated.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=93)** While we did all that, our cluster got created. That was really fast.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=97)** So let's confirm that our cluster is working.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=100)** We will need a tool called kubectl to do this.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=102)** kubectl is a canonical command line client for interacting with Kubernetes clusters.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=107)** We will also use kubectl when we run explore California on the internet.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=111)** So first let's download kubectl with homebrew by typing brew, install, kubectl.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=117)** I've already installed it, So I got this, but you'll see a lot of progress when you run this.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=124)** If you're on Windows, you can also use choco install, kubectl to perform the same action.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=130)** Once homebrew is done, confirm that kubectl was installed by running kubectl, version, dash, dash, client.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=137)** You'll get a long JSON-like blob like this. If you do, then that means it kubectl was installed successfully.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=145)** Now let's use it to confirm that our kind cluster's running.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=147)** So the command I'm going to type to do that is called kubectl, get nodes.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=154)** Kubectl get is how you obtain a list of various resources in a Kubernetes cluster.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=159)** We'll use different variants of this command as we get explore California on to Kubernetes and AWS.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=165)** So let's run this command and let's explore it a little more.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=168)** So, resources and Kubernetes can be separated into things called namespaces.
>
> **[2:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=173)** Namespaces allow you to organize, categorize, and secure Kubernetes resources between each other.
>
> **[2:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=178)** This is useful if you have many different suites of applications running inside of a single cluster.
>
> **[3:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=183)** Let's see if the pods running inside a Kubernetes "system," quote, unquote, namespace are healthy.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=189)** To do this we can run kubectl, get pods, and then we can append dash N, which is short for namespace, and then we can type kube system.
>
> **[3:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=200)** So this gives us a list of pods that are running inside of the kube system namespace.
>
> **[3:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster?u=76281980&t=205)** As we can see, since they're all in the running state, then that means that all of the pods that we need to run kind are happy and healthy.

> [!info]- Semantic Content
>
> **CLI Commands:** kubectl (12), docker (8), make (1), brew (1), aws (1)
> **Code Keywords:** let (10), this. (3), this, (2)
> **Definitions:** means that (3), is a  (1), is called (1), short for (1)
> **Env Vars:** json (1), aws (1)
> **Prerequisites:** install (2)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)
> **Tools:** command line (1)

#### Creating the kind cluster with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=0)** - Let's create a make recipe to install this cluster.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=3)** So let's start by opening, make file in your editor.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=6)** Next we're going to create a new make file rule.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=8)** Let's call it target, create kind cluster with underscores.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=13)** We're going to put our cluster creation command underneath it kind Create cluster dash dash name explore [california.com](https://california.com).
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=20)** Also remember since we don't want this to fail unexpectedly, let's make it a phony command up here.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=26)** After we put the name of the command here, I'm going to put two ampersands and then a slash to denote that we have another command on another line incoming, and then I'm going to put kubectl, get nodes to check that our nodes are healthy.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=43)** You might be thinking Carlos, wouldn't it be cool if we can ensure that kind and kubectl are installed before running this, if you thought this that's an awesome idea.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=53)** And it's also a great example of target dependencies.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=56)** So first let's make, create kind cluster dependent on the install kind rule that we created earlier by adding it to the right of the target on line 14.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=68)** Next we're going to create another make rule with a target name called install kubectl.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=73)** We'll also make this a phony target.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=77)** Notice how I put a slash at the end of this line to tell me that another line is incoming and it should be a part of that same line. This applies everywhere.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=86)** Whenever you need to create multiple lines underneath kubectl, we'll go ahead and put brew install kubectl, which is the command that we executed earlier.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=96)** And finally we'll make create kind cluster dependent on that as well.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=102)** So now that we have our rule, let's go ahead and save our make file and return to our terminal and let's run make create kind cluster to see it at work.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=112)** So this fail because we already have a cluster called explore [california.com](https://california.com) we created it earlier.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-kind-cluster-with-make?u=76281980&t=119)** As you can see, it'll download kind first and install kubectl before creating our kind cluster kind will create the cluster this time though, as we created it ourselves earlier,

> [!info]- Semantic Content
>
> **CLI Commands:** make (10), kubectl (6), brew (1)
> **Code Keywords:** let (7), this, (1)
> **Prerequisites:** install (5)
> **URLs:** [california.com](https://california.com) (2)
> **Tools:** terminal (1)
> **Speakers:** - let (1)

#### Creating a local Docker Registry
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=0)** - [Narrator] Earlier we mentioned that the From image used by our Dockerfile is sourced from a registry of images called the Docker hub.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=7)** I also mentioned that Docker images can be stored in private registries.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=11)** When we run our app inside of Kubernetes, Kubernetes is going to expect that our application comes with a pre-built docker image.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=18)** While we were building our docker image locally to test our website inside a Docker, Kubernetes doesn't know about the existence of local images.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=25)** Additionally, Kubernetes doesn't have a built-in way of taking Dockerfiles and turning them into docker images for you.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=32)** One way of working around this is by pushing our local image into the Docker hub.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=36)** Anyone can do it as long as they have a Docker hub account, which is free.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=40)** However, there are two problems with this.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=42)** First, the Docker hub isn't always the best place to put images.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=46)** Some companies like Explore California, want to keep their images private.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=50)** The last thing we want is for explore (indistinct), to learn even more about our cool tracks.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=55)** Secondly, Docker has restrictions in place that cap the number of docker images pull from Docker hub per hour.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=61)** This would hinder our testing significantly.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=63)** An easier way of working around this is by creating our own Docker registry locally.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=68)** Since Docker makes the docker image for running Docker registries publicly available, we can easily use that to create one locally that we can push our image into.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=76)** Moreover, we can configure kind to use this registry so that Kubernetes does become aware of our local Docker images.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=84)** Enough talking, let's do it.
>
> **[1:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=85)** Let's keep our make file open in a separate window so that we can update it as we run these commands.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=90)** Starting the registry is actually really easy.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=92)** All you have to do is run this command - Docker run -- name local registry - D -- restart set to always -P5000:5000 and then registry:2.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=109)** So what does this command actually doing?
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=110)** Well, let's take a closer look.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=113)** The first thing we do is we create a container whose name is called local registry.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=118)** Then we send that container to the background with -D so that we're not blocked by any logs.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=123)** Additionally, we set the restart property for this container to always, so that in case the registry breaks for any reason, Docker will just restart the container.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=132)** Then, we map the containers, port 5000 to our hosts on port 5000 as well.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=138)** And finally, we use the registry Docker image on the Docker hub, and we're using version 2 of the Docker registry as there are two versions.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=146)** In order to specify that, we separate the name of the container image with the name of the tag by colon.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=154)** So now that we know what this command is doing, let's test that the Docker registry is actually working.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=159)** To do that, I am going to use the curl command once again, and I'm going to type [http://localhost:5000/v2](http://localhost:5000/v2).
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=170)** So it looks like we got (indistinct) permanently message when we did that.
>
> **[2:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=173)** This is actually a perfect example of how --location helps here.
>
> **[2:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=178)** So let's try re-running this command, but let's put --location right before the URL.
>
> **[3:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-local-docker-registry?u=76281980&t=184)** As you can see, and it might be a little bit hard to see, we got a blank JSON object here, which means that we don't have any images in our registry just yet, but it does mean that it's working.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (23), make (1), curl (1)
> **Code Keywords:** let (6), private (2), this. (1), finally, (1)
> **Ports:** :5000 (2), port 5000 (2)
> **Env Vars:** p5000 (1), url (1), json (1)
> **Definitions:** is called (1), means that (1)
> **URLs:** [http://localhost:5000/v2](http://localhost:5000/v2) (1)
> **Versions:** version 2 (1)
> **Cross-References:** we mentioned (1)

#### Creating the local Docker Registry with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=0)** - [Instructor] Let's update our make file while we're here, I'm going to create a new role called create docker registry, and just like we did for the other rules, I'm going to make sure that this target is marked as a phony target.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=15)** Underneath it I'm going to re type the commands that I entered below.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=19)** I'm actually just going to go ahead and copy it and paste it just to save time.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=23)** I'm also going to need to make, create kind cluster dependent on this since we'll need the registry to start whenever we create our kind cluster.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=33)** If I try to run create docker registry right now, it'll fail because we already have a local registry container running.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=41)** So we'll need to check for any containers that have the same name before we run this so that we don't run into that problem.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=49)** Going back to our terminal, I can use docker PS to do this.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=52)** Docker PS lists running containers.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=54)** It can also list stopped containers by appending dash A to it, but we don't need that much information.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=59)** So we won't be using that flag.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=61)** I can then feed the output of that command into a tool called grep.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=65)** Grep is a search and replace tool.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=67)** By default, it searches for texts and files or output and returns matching lines.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=72)** That's what we'll use grep for here.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=73)** However, grep is much more powerful than that.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=75)** So if you're curious about what all grep can do, I would run man grep, which will show you the manual and all the options you have therein.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=84)** We want to find local registry inside of docker PS.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=87)** If it's not in the output provided by docker PS, then we should have create docker registry, create the registry.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=93)** But if it is, then this rule should do nothing.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=96)** Since this is a conditional statement, we'll use an if/else block to execute this logic.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=99)** So I'm going to go back to my make file up here.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=102)** And I'm going to go ahead and type it out and then explain it afterwards.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=108)** Let's explain what's going on here.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=110)** This is a little bit more code than our usual one-liners.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=113)** So just like we saw earlier, I've ended every line with a backslash.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=117)** I did this so that make knows that our command is split across multiple lines.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=122)** Otherwise, if we try, if I did not put those slashes there, then make would complain that this command as is can't run or you'll get some unexpected output.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=132)** So whenever you need to split up a command amongst multiple lines, make sure that you add a backslash to the end of the line.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=140)** The next thing you'll notice on line 26 is that I have an FI statement.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=145)** That looks really weird, but that's actually intentional too.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=148)** In Bash, when you're creating an if/else block, you end the if/else block with an FI.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=154)** Those of you that are Java developers, you might be accustomed to doing something like if thing, and then a curly bracket there, and then the rest of your logic.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=165)** It's kind of like that.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=166)** But instead of a beginning curly bracket, it's a then.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=170)** And instead of an end curly bracket, it's a FI.
>
> **[2:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=173)** And that's how you write if/else blocks in Bash.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=175)** The next thing you will notice is on line 23, I have this dash Q option provided to grep.
>
> **[3:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=181)** This tells grep to not print the results of whatever finds that matches local registry from the output provided by docker PS.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=191)** By default, it'll print it out on the screen, which we don't want to see.
>
> **[3:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=194)** Instead, we just want to know whether local registry is inside of the output provided by docker PS.
>
> **[3:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=200)** If it is, then we know that the registry has been created and we don't need to do anything, which is expressed on line 24.
>
> **[3:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=208)** Otherwise we want to create the registry like we did in our example, on line 25.
>
> **[3:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=214)** So now that we typed it out.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=215)** Let's see what happens if I run this make rule.
>
> **[3:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=217)** So in my terminal down here, I'm going to clear the screen.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=220)** And then I'm going to run, make create docker registry.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=224)** I can see that the registry has already been created and that nothing was done.
>
> **[3:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=229)** What happens if I stopped that registry and rerun this?
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=232)** Let's find out.
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=232)** So first I'm going to actually use the docker PS command like we did earlier to see the output here.
>
> **[3:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=238)** What I'm interested in is the ID of this container.
>
> **[4:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=243)** So that is 9-F-5-4-F-F-2-0-9-6-9-1.
>
> **[4:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=248)** I don't actually need to copy all that.
>
> **[4:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=249)** I can just copy the first three or four characters from this ID, and then I can run docker RM and then paste those four characters to stop the container.
>
> **[4:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=259)** So it looks like it's telling me that I can't remove it.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=262)** Docker RM is short for removing a container.
>
> **[4:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=265)** I can't remove it because I have to stop it first.
>
> **[4:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=267)** So I'm going to run docker stop and then paste the four characters that we copied earlier there.
>
> **[4:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=273)** And then I'm going to run docker RM to remove it.
>
> **[4:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=275)** So now let's see what happens when we run make create docker registry.
>
> **[4:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=280)** Let's see what happens if we rerun it, as you can see, it gave me a new ID and it created a new instance of the registry because no registries were found earlier.
>
> **[4:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-local-docker-registry-with-make?u=76281980&t=290)** That's exactly what we wanted.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (16), make (10), grep (8), rm (3), find (2)
> **Code Keywords:** let (6), default, (2), this. (1), try, (1)
> **Tools:** terminal (2), bash (2)
> **Definitions:** is a  (3), short for (1)
> **Analogies:** just like (2), kind of like (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Linking the local Docker Registry to the kind cluster
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=0)** - Lastly, we're going to connect our Docker registry to our kind cluster.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=4)** Let's keep our editor and terminal next to each other so that we can keep our make file up-to-date.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=8)** First, we're going to create a Kind cluster configuration file Kind Configuration files are used to configure the various sub-components inside of our kind clusters.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=17)** The configuration file that we're going to write is going to tell the container run time inside of our kind cluster about the new registry that we just created.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=25)** I've already typed out the file you'll need to run for this exercise.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=28)** So let's go ahead and open kind config dot yaml into your editor. There's a lot going on here.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=35)** So let's briefly dig into it. First, I should note that this is a good example of a file, that uses the Kubernetes manifest format.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=43)** Kubernetes manifests are files that are used to install and configure objects within a Kubernetes cluster.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=48)** Like our little kind cluster here.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=50)** Every Kubernetes manifests starts by describing the kind of object we're trying to install or configure.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=56)** This is described by the kind line online one.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=58)** Here, we were trying to configure a cluster object since Kubernetes affords so many objects and so many versions of objects, you can also tell Kubernetes which API and API version describes the object you were trying to configure.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=71)** This is provided by the API version property online too.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=75)** In our file, our cluster object that's described by the V one alpha four version of the kind dot X hyphen Kate's dot IO API.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=84)** Every line after these two lines can change depending on the object that we're creating or configuring.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=90)** So I can't emphasize this enough, there are a lot of objects that Kubernetes can create and configure.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=96)** All of them can have very different manifest schema or definition. For this reason, I like to use the Kubernetes API reference when I'm working with Kubernetes manifests.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=105)** So let's go ahead and check that out now, by searching for Kubernetes API reference, that's going to bring up a couple of search results.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=111)** I want the reference docs, which are right here.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=114)** It might look different depending on where you are and where you're using Google.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=118)** So I'm going to click on that and it's going to bring me to this great tomb of information here.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=123)** This page describes all of the objects supported by Kubernetes and their manifest schemas.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=128)** We won't use this documentation in this section because the cluster object is a custom object created by the kind authors.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=135)** But I wanted to introduce it here since we'll be creating our own Kubernetes manifest.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=139)** Let's move on to lines three and six of our kind config dot yaml here, kind uses a tool called Kube ADM to create the cluster that we'll use here.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=150)** Kube ADM also configures the container runtime use within Kubernetes to create, manage and delete clusters.
>
> **[2:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=156)** Kine uses container D for its container run time.
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=160)** Container D config patches on line three, provides configuration changes for container D that Kube ADM will need to be aware of when we're creating our cluster.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=169)** In our case, we want to tell container D, "Hey container D we created a Docker registry called local registry.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=175)** You can also reach it at local host on port 5,000."
>
> **[2:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=177)** You should really know about it.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=179)** That's done on lines five and six right here.
>
> **[3:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=182)** Next we'll need to provide another configuration, the kind to tell it that we're using a local registry.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=187)** This is done through something called a config map, a native Kubernetes object.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=191)** I provided this file for you at kind underscore ConfigMap dot yaml. Let's go ahead and open it.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=198)** Config maps and Kubernetes are used to provide configuration data into pods running inside of Kubernetes.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-local-docker-registry-to-the-kind-cluster?u=76281980&t=204)** I won't delve into this file too much since we've already done a quick dive into the world of Kubernetes manifest, but go free to learn more about it in the Kubernetes API reference docs.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), adm (3)
> **Prerequisites:** configure (6), install (2), you'll need (1)
> **Code Keywords:** let (6), delete (1), case, (1)
> **CLI Commands:** docker (2), make (1)
> **Documentation:** api reference (2)
> **Warnings:** note that (1), be aware (1)
> **Ports:** port 5 (1)
> **Tools:** terminal (1)

#### Linking the kind registry with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=0)** - Okay, enough facts.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=2)** Let's get our registry connected to kind.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=5)** First, we're going to open up our make file in our top window here, and then we're going to expand it so that we can see it in full.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=12)** First, we're going to create a new make rule called connect registry to kind network.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=20)** And we're going to make that target a phony target.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=23)** Now, this is going to connect the Docker network that was created for the kind container to the Docker network that's created, or that's used by our registry.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=34)** A Docker network is basically just a network that's available for your container.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=39)** There are several different kinds of Docker networks.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=41)** If you're interested in learning more about them in a terminal, you can type Docker network -- help, and it gives you a list of sub commands for that particular command.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=51)** Or you can look at the Docker reference docs where it explains networks in more detail.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=56)** So to connect the Docker registry to our kind network, we're going to run Docker network connect, and then we're going to provide two arguments to it.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=65)** The first argument that we're going to provide is the network that we're connecting to and that network is the kind network.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=71)** The second argument that we're going to provide is the container that we're connecting to the snack work.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=76)** And the name of this container is the registry container, which is none other than local-registry.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=84)** So this command might fail if we've already connected local registry to this kind of network.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=88)** So in order to "short circuit," this logic, we're going to put an or statement, which is expressed with two pipes here, and then we're going to provide true on the right side of that.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=99)** True is a command that just prints true, but it can also allow commands like the one on the left that might fail to not fail and succeed anyway, by piping in into true, like this.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=111)** Next we're going to modify create kind cluster so that it takes our config file.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=115)** So let's go ahead and navigate to that rule here on line 15.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=120)** And as you can see, I've already made the change here.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=124)** The change that we're going to make here is just -- config, and then we're going to provide ./kind_config.yaml.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=132)** And this command might fail as well as we noted earlier because it won't create the cluster, or the cluster already exists.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=139)** So we're going to also short circuit this to our true command, just like we did before to prevent that from happening.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=146)** Next, we're going to create another make rule so that we can apply the ConfigMap that we saw earlier.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=151)** So let's create a new rule called "connect_registry_to_kind" and let's make it a phony target as well.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=163)** Now, applying Kubernetes manifests like the config map that we saw earlier is really, really, really, really easy.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=170)** With kubectl, all you have to do is kubectl apply -f, and then the path to the manifest, which in our case is going to be ./kind_configmap.yaml.
>
> **[3:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=182)** That's literally it, it's very, very simple.
>
> **[3:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=184)** Before we create our next make rule, we're going to make connect registry to kind dependent on connect registry to kind of network.
>
> **[3:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=193)** Reason being the ConfigMap won't make any sense until the registry is in the same network as a kind network.
>
> **[3:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=201)** So we want to make sure that that happens before we apply the config map down here.
>
> **[3:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=205)** Finally, let's create a new version of the Korean cayenne cluster make rule that we define on line 16, but here let's go ahead and create the cluster as well as the registry, and let's also link the two together.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=220)** So to do all of that, we're going to create a new rule called "Create kind cluster with registry."
>
> **[3:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=226)** And you know what time it is because we created a new rule it's phony time.
>
> **[3:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=230)** So let's add it as a phony target up here.
>
> **[3:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=234)** So the first thing we need to do is create kind cluster in this rule.
>
> **[3:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=238)** To do that, we're going to use the special dollar sign parentheses, make variable.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=244)** And what this variable does is it just launches another instance of make, but with the actual full path of make appended to it.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=255)** So we're going to say, make, create kind cluster so I could rerun our create kind cluster rule from above.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=262)** And then we're going to use our double ampersand here to execute another command if this one passes and we're going to do dollar $(MAKE), connect registry to kind.
>
> **[4:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=276)** So that way it links the registry up to kind, and it applies a ConfigMap so that everything wires up.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=282)** That was a lot of code that we just wrote.
>
> **[4:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=285)** Let's test this and make sure that it actually works.
>
> **[4:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=289)** So the first thing we're going to do, is we're going to actually delete our kind cluster so that we can apply the changes that we're about to make.
>
> **[4:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=295)** So let's run kind, delete cluster and let's provide the name of the cluster, which is explore California to it.
>
> **[5:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=302)** So that's going to delete our cluster.
>
> **[5:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=305)** And now we're going to do is we're going to go ahead and run make create kind cluster with registry.
>
> **[5:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=311)** And as you can see, it attempted to install kubectl, it attempted to download kind.
>
> **[5:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=316)** And now it's going ahead and creating the cluster.
>
> **[5:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=319)** It also saw that our registry was already created so that it didn't have to do anything there.
>
> **[5:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=324)** And now we're starting the control plane, which may take a little longer depending on the system that you're running this on.
>
> **[5:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=331)** Great, and we're done for now.
>
> **[5:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=333)** Now I just want to reiterate that you might see a couple of errors, in your logs, such as this one right here.
>
> **[5:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=339)** That's what the hyphen hyphen true statement does here.
>
> **[5:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=342)** This is that happening in effect.
>
> **[5:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=344)** It basically saw the error, but saw because we have true here that it's not really an error, so make, went ahead and kept going.
>
> **[5:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=352)** And because of that, it went ahead and applied the ConfigMap and it created a cluster with the registry attached to it.
>
> **[5:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/linking-the-kind-registry-with-make?u=76281980&t=359)** We're done for now.

> [!info]- Semantic Content
>
> **CLI Commands:** make (20), docker (8), kubectl (3)
> **Code Keywords:** let (11), delete (3), this. (1), finally, (1)
> **Code Identifiers:** kind_config (1), connect_registry_to_kind (1), kind_configmap (1)
> **File Paths:** kind_config.yaml (1), kind_configmap.yaml (1)
> **Analogies:** just like (1), such as (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)

#### Challenge: Deleting kind clusters with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980&t=5)** - All right, it's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980&t=8)** In this challenge, I'd like you to create a Make rule that deletes our Kind cluster with Make.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980&t=13)** This same rule should also delete the local Docker registry that we created.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980&t=17)** However, if you run into any challenges or any problems, don't be afraid to use kind --help or docker --help along the way.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-deleting-kind-clusters-with-make?u=76281980&t=25)** Good luck!

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (2)
> **Code Keywords:** delete (1)
> **Speakers:** - all (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Deleting kind clusters with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=0)** - All right.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=6)** Another day, another challenge.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=8)** Let's delete this kind cluster with me.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=10)** First, I'm going to run kind dash dash help to see what options I have available for deleting clusters.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=15)** As we can see, there's the delete option in plain sight.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=18)** So let's rerun that with kind delete dash dash help to see what options we have and just like kind create, we can delete a single cluster.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=28)** So with that information, I'm going to go into my make file and I'm going create a new rule called delete kind cluster.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=37)** Now make sure that that target is also a phony target that way, if you created a file called delete client cluster somehow, this rule would still work.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=50)** So now that we have our rule here, let's go ahead and put in kind delete cluster dash dash name, [explorecalifornia.com](https://explorecalifornia.com).
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=58)** Really simple.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=60)** Let's go ahead and save it.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=61)** But wait, we also created a docker registry for this cluster, right?
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=64)** So we want to delete that too.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=66)** So let's create another new rule called delete docker registry, and remember to make it a phony rule.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=75)** And now going back down here, we can easily remove that registry by running docker stop local registry.
>
> **[1:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=85)** Then once that runs, we'll run docker RM local registry, very simple.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=92)** And if you wanted to, you could also make delete docker registry, a dependency of the delete kind cluster rule.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=99)** That way, whenever you run delete kind cluster, it also deletes the docker registry along with it.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=105)** So let's go ahead and test it.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=107)** So let's go back here and run make delete kind cluster.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=113)** So first is going to stop my local registry and then it's going to remove it.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=117)** And then it's going to delete my [explorecalifornia.com](https://explorecalifornia.com) cluster as we see here.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=122)** And if we run kind dash dash help, we can see that we can get clusters.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=130)** So let's see if we can do kind get clusters and there is no kind cluster found.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=135)** Success.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=137)** Challenge complete, mission accomplished.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-deleting-kind-clusters-with-make?u=76281980&t=139)** Great job.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (14), let (8)
> **CLI Commands:** docker (6), make (5), rm (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (2)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Our First Kubernetes Manifests

#### Understanding Kubernetes manifests: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=0)** - We're now going to start deploying our website into Kubernetes. I'm super excited.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=4)** I hope you're just as excited as I am.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=7)** Our first step is to create the pods that will run the containers for our website's Docker image.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=12)** If you recall from our earlier overview of Kubernetes, we don't want to create pods directly.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=16)** Instead, we want to create deployments.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=19)** Deployments will make sure that the number of pods we want hosting our website, stay up and running at all times.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=24)** They also make it easier for pods to move from node to node, though that's unlikely given how small our cluster is.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=30)** Before we get our hands dirty though, it's important to understand how Kubernetes manifests work.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=35)** As we saw when we created our client cluster, Kubernetes creates resources through YAML files called Kubernetes manifests.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=42)** You can think of them as an application describing what you're looking to create and what the thing you're looking to create looks like.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=49)** Creating a blank manifest is easy.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=51)** Let's go into the terminal and show you how.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=53)** So, to create a blank manifest for deployment, we are going to use kubectl.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=58)** The command we're going to use within a kubectl is "kubectl create deployment", and then we're going to provide a few command line options to this.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=66)** The first command line option we're going to provide is the dry-run command line option. Now, with kubectl, there are two ways to run dry-runs.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=75)** The first way is through the kubectl client itself, since kubectl knows about all the resources that it can create, it can perform dry-runs for you.
>
> **[1:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=85)** But,sometimes that might not agree with the version of Kubernetes that you're running server-side.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=91)** So, the other way you can run dry-runs is via the server.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=95)** But in this case, we're just going to go ahead and use "client" since it's a deployment and kubectl knows about deployments pretty well.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=104)** The next option we're going to provide is the image name.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=106)** And since we are going to push our Docker image into our local registry, we're going to specify "localhost:5000" and then the name of the image, which is "[explorecalifornia.com](https://explorecalifornia.com)".
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=118)** Next, we're going to provide the name of the deployment, which is also going to be "[explorecalifornia.com](https://explorecalifornia.com)".
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=123)** Finally, we are going to provide the output format with "--output".
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=128)** Now, there's multiple ways that kubectl can generate output from commands like these, but since our manifests are going to be in YAML format, we are also going to output them in YAML format.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=137)** So, let's go ahead and run this.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=139)** We got some YAML back. That's pretty cool.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=141)** So, let's go ahead and rerun this command, but save the output of this into a file called "deployment.yaml" As you can see, we didn't get any output this time because of this redirect operator here.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=153)** What this did is it took the output from kubectl, over here on the left, and it sent it into a new file called "deployment.yaml", which is what we want.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=163)** So, let's take a look at this file in our editor.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=166)** I'm going to go ahead and open it now.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=168)** So, as you can see, we got some output back.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=170)** It's very similar to the output that we got earlier.
>
> **[2:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-1?u=76281980&t=173)** This is also a really good example of a more complete Kubernetes manifest which, if you're interested in the director's cut of what these Kubernetes resources look like, you can check them out in the Kubernetes API reference docs.

> [!info]- Semantic Content
>
> **CLI Commands:** kubectl (9), docker (2), make (2), node (2)
> **Code Keywords:** let (4), this. (2), super (1), case, (1), finally, (1)
> **Env Vars:** yaml (4), api (1)
> **Tools:** command line (3), terminal (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (2), [localhost:5000](https://localhost:5000) (1)
> **File Paths:** deployment.yaml (2)
> **Ports:** :5000 (1)
> **Cross-References:** as we saw (1)

#### Understanding Kubernetes manifests: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=0)** - So let's begin our deep dive by looking for the deployment v1 object here in the api overview on the left.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=6)** So I'm going to go ahead and click on that.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=7)** And that brings us to the documentation for the deployment object inside of the apps v1 api, that's documented here.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=15)** So as you can see, the first line in our deployment.yaml is the api version.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=20)** This specifies the api that actually defines what this deployment object is.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=26)** The api that defined it happens to be in the apps/v1 api.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=31)** As we can see here on the left, that's the document that we have opened here.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=37)** The next object that we have is the kind which determines the object that we're creating, which happens to be deployment, which is what we're looking at here on the left.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=47)** Now, most objects in Kubernetes have metadata associated with them.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=52)** Deployments are no exception to this.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=54)** So let's take a look at this object, meta object that is being linked to here.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=59)** So as we can see, there are a lot of fields that are associated with metadata.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=64)** We only have four fields defined here and remember, these are the fields that got created when we ran the cube CTL command, there are many more fields that we can add, but we'll only talk about the four that we have here.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=74)** So the first field that we have is a creation Timestamp, which is null in this case because we didn't actually create it.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=81)** It was a dry run.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=82)** But the creation Timestamp specifies the time that the resource was created.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=87)** we're not actually going to need that in our actual deployment so we're going to go ahead and delete that.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=92)** And that's because when we actually create a deployment inside of the Kubernetes cluster, that creation Timestamp will get generated once a resource is created.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=100)** The next piece of metadata that we have here are labels.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=104)** Labels are really important because labels are how you find things inside of a Kubernetes cluster.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=110)** So inside of this deployment, we only have one label attached to this deployment.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=115)** And that's the name of the app.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=117)** And the name of the app is set to [explorecalifornia.com](https://explorecalifornia.com).
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=120)** It's a little difficult to see this because we're looking at the yaml and we haven't actually interacted with this deployment yet, but this label on line five can actually be used as something called a selector.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=131)** And what selectors do is they allow you to select resources that also have these labels attached to them.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=137)** So for instance, if I wanted to find pods associated with this deployment, instead of having to know the exact name of the deployment that gets created inside of Kubernetes or the names of the pods that gets created inside of Kubernetes, I can just find them by their app label and set the label, the app label that I'm looking forward to explore [california.com](https://california.com).
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=158)** This is a really powerful concept that I use all the time.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=161)** And you probably will too as you get more familiar with using Kubernetes.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=165)** The next object here is the name of the deployment, which in this case is [explorecalifornia.com](https://explorecalifornia.com), it's the name of the deployment.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=172)** It's pretty straightforward.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=174)** Now the next bit of information that we provide here is the specification or the spec as it's known.
>
> **[2:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=178)** So let go back a page to go back to that.
>
> **[3:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=181)** So as you can see here on the api reference docs on the left, the spec object here is DeploymentSpec type.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=188)** So let me click on that so we can see all the fields that are available to us here.
>
> **[3:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=192)** So once again, we're not using all of the fields that are available inside of this object, but we'll only describe the ones that got created when we ran the cube CTL command.
>
> **[3:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=202)** The first important one to talk about is the number of replicas inside of the specification.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=207)** So as we mentioned, deployments can scale up or down depending on how many of them you want.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=215)** So by default, when you create a deployment it only creates one replica of itself.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=220)** However, you can change this with coop CTL commands.
>
> **[3:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=223)** You can also change it inside of the yaml itself.
>
> **[3:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=228)** The next object here is the selector.
>
> **[3:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=229)** This is what selects the pods that belong to this deployment.
>
> **[3:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=233)** Now, since our metadata up here on lines four and five specify that we have an app that's called [explorecalifornia.com](https://explorecalifornia.com).
>
> **[4:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=243)** The pods that get generated inside of this deployment will also share the same labels.
>
> **[4:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=247)** Therefore, what line eleven is telling us is it's telling Kubernetes, Hey, when you create these pods that have this app equals [explorecalifornia.com](https://explorecalifornia.com) label attached to them, go ahead and associate them with my deployment because they belong to me.
>
> **[4:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=261)** That's essentially what lines nine through eleven are saying.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=264)** Now the next interesting field inside of the spec is strategy.
>
> **[4:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=268)** Strategy is really interesting, but we won't be playing around with it too much because strategy allows you to determine how your deployment is actually deployed onto a cluster.
>
> **[4:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=278)** So let's go ahead and click on deployment strategy to learn more.
>
> **[4:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=282)** There's two types of strategies that you can apply.
>
> **[4:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=285)** Again, we won't be experimenting with them too much, but the default is the rolling update strategy, which means that any pods that are associated with the deployment, will update themselves as you update the deployment but they'll update one at a time.
>
> **[4:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=299)** Kind of in a rolling fashion.
>
> **[5:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=300)** If you can imagine a snowball rolling down a hill, rolling update is kind of like that.
>
> **[5:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=305)** You can also recreate the entire deployment.
>
> **[5:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=308)** Or you can terminate all the pods and just recreate them.
>
> **[5:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=311)** That's the recreate strategy right here.
>
> **[5:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=313)** There's a couple of additional fields you can determine based on the type of strategy you want to use, but we won't go into them here.
>
> **[5:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=319)** Since we're not going to use deployment strategies for this.
>
> **[5:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=324)** Now line thirteen begins the template for the pods that we're going to create inside of this deployment.
>
> **[5:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=329)** So let's take a look at the pod templates back here on the left.
>
> **[5:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=333)** So like we mentioned, deployments create pods that are associated to them and it allows you to determine how many pods to create depending on various factors.
>
> **[5:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=342)** Line thirteen dictates what the template for those pods are going to look like.
>
> **[5:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=347)** So this field only takes two sub fields.
>
> **[5:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=349)** The first field that it takes is metadata, which we explained earlier.
>
> **[5:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=353)** So I won't explain it here.
>
> **[5:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=355)** And then the second field that it takes is another specification or a spec.
>
> **[5:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=359)** But this time, instead of using a DeploymentSpec like we saw earlier, it's using a PodSpec because we're actually creating pods for this appointment.
>
> **[6:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=367)** So let's check that out.
>
> **[6:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=370)** And let me scroll down here on the left.
>
> **[6:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=372)** So there's a lot that you can define here.
>
> **[6:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=375)** As you can see, there's a lot of options.
>
> **[6:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=377)** So I encourage you to look at this and play around with it for your own personal deployments.
>
> **[6:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=382)** But when we ran dry run, the only thing that it did is it created the single container that we needed to run our app.
>
> **[6:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=389)** So that's defined here in the containers field, which is an array of containers.
>
> **[6:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=396)** So let's go ahead and click on that.
>
> **[6:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=398)** So if you've written any Docker compose, you might be familiar with a lot of the fields that are in here because they're very very very similar.
>
> **[6:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=407)** So just like in Docker compose, it allows you to specify the image that you want to use, which in this case is going to be our [explorecalifornia.com](https://explorecalifornia.com) image on local host 5000.
>
> **[6:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=418)** And it also allows you to specify the name of the container.
>
> **[7:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=421)** Now, this part is interesting because container names need to be unique instead of a Kubernetes cluster.
>
> **[7:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=427)** So when we ran this command, it auto-generated a five digit identifier here so that we can ensure uniqueness, but we'll experiment with this later to see how we can guarantee this uniqueness when we create our own containers.
>
> **[7:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=441)** You can also define environment variables.
>
> **[7:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=444)** There are other resources within Kubernetes that allow you to create environment variables securely.
>
> **[7:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=449)** We won't be experimenting with them here, but it is a thing that you can do.
>
> **[7:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=454)** And I encourage you to look into it.
>
> **[7:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=456)** And it allows you to specify resources such as the maximum CPU that you can use, the maximum memory that you can use, etcetera.
>
> **[7:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-kubernetes-manifests-part-2?u=76281980&t=463)** But we won't be defining those here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (2), delete (1), type. (1), default, (1)
> **Documentation:** spec (4), specification (3), the documentation (1), api reference (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (5), [california.com](https://california.com) (1)
> **CLI Commands:** find (3), docker (2)
> **UI Navigation:** click on (4), scroll down (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Analogies:** for instance (1), imagine (1), kind of like (1), just like (1), such as (1)
> **Env Vars:** ctl (3), cpu (1)

#### Creating a Deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=0)** - [Instructor] All right, let's give it a shot.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=2)** First, ensure that your kind cluster exists by running make create kind cluster with registry.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=9)** As we saw earlier, this is going to create our kind cluster and it's also going to create our Docker registry and link them together through Docker network connect.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=20)** Since we didn't see any errors, we know that our cluster has been created.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=24)** Now that our cluster is ready, let's go ahead and push our Docker image into the registry that we've created.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=29)** Now, you may have already done this if your cluster was already running before you got here, but just in case you haven't, or just in case you made any changes, this will make sure that the image is definitely inside of your registry and that Kubernetes can pick up from it.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=43)** So to do that, we're going to first tag our image.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=46)** And to do that, we're going to do Docker tag, [explorecalifornia.com](https://explorecalifornia.com) and then our new tag, which is going to be local host that colon 5,000 slash [explorercalifornia.com](https://explorercalifornia.com).
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=56)** Next I'm going to push the tag that I just created.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=58)** So to do that, I'm going to do Docker push, local host 5,000 slash [explorecalifornia.com](https://explorecalifornia.com).
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=64)** And that's going to go ahead and push that image into your local registry.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=68)** Now that our image is in our local registry, let's go ahead and create our deployment by running kubectl, apply dash F deployment dot yaml.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=77)** We know that this works because this line tells us that our deployment was created.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=83)** To verify that our deployment was created and is running successfully, I'm going to go ahead and run cubectl get pods, and I'm going to use a selector to see all the pods that are associated with my deployment.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=94)** To do that, I'm going to type app equals [explorecalifornia.com](https://explorecalifornia.com).
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=98)** As we can see here, we have a running pod inside of our deployment, which means that our deployment is ready.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=104)** So to finally test it, we're going to run cubectl port forward, which is essentially like Docker run with the dash P or the dash dash publish option.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=113)** This mounts ports inside of your machine, into ports, inside of the pods inside of your deployment.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=119)** So it's very similar to mounting a port from your container to your local machine.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=124)** So the syntax is almost equivalent.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=127)** So the first thing you specify is a deployment that you are going to be port forwarding.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=131)** You can also provide a service or a pod, but in this case, we're going to provide a deployment.
>
> **[2:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=136)** Our deployment is [explorecalifornia.com](https://explorecalifornia.com) and then we're going to provide the outside and inside ports.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=141)** As we know, from earlier, the outside port on our machine is the port that is going to connect to the port that we want to connect to inside of the container.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=150)** On our machine, I like to use port 8080.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=153)** So I'm going to use that here.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=155)** And then the port that we want to connect to inside of the container, since it's running a website, it's just going to be port 80.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=161)** We know that this is working because of these two lines.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=163)** These lines are cubectl telling us that forwarding has begun.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=168)** Finally, let's go ahead and spin up a new website.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=170)** So I'm going to go ahead and spin up a new website, and then I'm going to go to local host app port 8080.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-deployment?u=76281980&t=176)** And as we can see, explorecalifornia is working locally.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), make (2), kubectl (1)
> **Code Keywords:** let (4), case, (1), finally, (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (4), [explorercalifornia.com](https://explorercalifornia.com) (1)
> **Ports:** port 8080 (2), port 80 (1)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)

#### Creating a Service
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=0)** - Let's go back to a recrimination graphic from earlier.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=3)** In our example here, our app is running through two pods.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=6)** Those pods will be deployed through a deployment.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=8)** We've proven that our website is up and running inside of our pods through the deployment.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=12)** However, we don't want users to have to port forward into our cluster every time they want to book a trip, we want them to go through good old [exploreCalifornia.com](https://exploreCalifornia.com).
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=20)** To do that, we'll need to map, [exploreCalifornia.com](https://exploreCalifornia.com) into a single point of entry.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=24)** That's going to live inside of Kubernetes.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=26)** And we'll have Kubernetes, handling distributing requests between our pods.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=30)** That single point of entry, is going to be called the service.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=33)** Now the single point of entry that people will actually use, it's going to be called an ingress.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=38)** And we'll define that later.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=39)** So, let's go ahead and create the service.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=42)** So, how do we do that?
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=43)** Well, we're going to go to our terminal.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=47)** And we're going to use the same kubectl create, command that we executed earlier, but instead of deployment, we're going to use service.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=55)** Now, there's four different kinds of services that you can create and set of Kubernetes.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=59)** And the type of service that we're going to create is called the cluster IP.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=63)** Cluster IP creates a virtual IP address that maps to all the pods that are running inside of our exploreCalifornia deployment.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=70)** It also creates a DNS record inside of the Kubernetes cluster, so that other pods inside of the cluster can discover our website, which is really convenient.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=78)** If we wanted to create something like a forum service, the first argument we're going to provide.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=82)** Is a dry-run argument, and just like we did last time, we're going to go ahead and set that to client.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=87)** The next argument that we're going to provide are the ports that we want to expose from the service.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=91)** So, we want to make them TCP ports, and we want the port that is going to serve traffic through the service to be on port 80.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=100)** And since our containers are running the website on port 80, we're going to provide port 80 as well.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=106)** The next thing we're going to provide is the name of the service.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=110)** We're going to call, [exploreCalifornia.com](https://exploreCalifornia.com).
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=112)** And finally, we're going to provide the output format, which in our case is going to be yaml, just like it was before.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=118)** Let's run this and see it that works.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=121)** Since we got a yaml file back.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=123)** We know that this works.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=124)** So, let's go ahead, and save the output of that into service.yaml.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=129)** And let's go ahead and open in our editor.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=132)** Now I'd like to place additional emphasis on line 14 here, just like we saw before this property is really important because as we saw earlier, when we went to grab, the pods were associated with our deployment, we can grab all the objects, that are associated with this selector here.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=148)** And that's really nice if you want to see all the resources that get created for a particular application.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=153)** So that dash L command that we ran when we did kubectl to get pods, we could do something like kubectl, get all provide dash L and then specify app equals [exploreCalifornia.com](https://exploreCalifornia.com).
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=165)** And it will find our pods, the service, and anything else that has a selector associated with it, which is really neat, so, this is pretty straight forward.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=174)** We're creating our ports up here.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=176)** And we've defined our selector as mentioned earlier, and we're specifying, that we want a cluster IP type of service, and we have our metadata, and we're going to remove this creation timestamp since that's going to get created automatically.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=191)** So, I'm going to save it.
>
> **[3:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=192)** And I'm going to apply as let's do, kubectl apply dash F service.yaml.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=198)** So, it looks like we fail, why did we fail?
>
> **[3:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=201)** Well, let's take a look at the error message.
>
> **[3:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=203)** The error message is saying that the service [exploreCalifornia.com](https://exploreCalifornia.com) is invalid because of the metadata.name property.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=209)** It has an invalid value [exploreCalifornia.com](https://exploreCalifornia.com) and quotes, and it wants a DNS-1035 label.
>
> **[3:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=217)** And it must consist of lowercase alphanumeric characters, or a dash, and it must start with alphabet a character, and then with an alphanumeric.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=224)** And it provides a regex expression here.
>
> **[3:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=226)** Now, all of this very cryptic error message is saying.
>
> **[3:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=231)** Is that we can't provide a DNS record in our service.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=235)** And we can provide it as a name.
>
> **[3:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=237)** So, what we have to do instead is we have to just [remove.com](https://remove.com) and replace it with something else.
>
> **[4:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=243)** So let's go into service.yaml and make that change.
>
> **[4:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=246)** So that's going to be online six and instead [of.com](https://of.com), I'm just going to make it dash SVC, which should make our kubectl apply command happy.
>
> **[4:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=257)** So, let's go ahead and write this file and then quit our editor.
>
> **[4:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=260)** And then let's go ahead and try applying it again.
>
> **[4:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=264)** We did not error this time, because it liked our name and the service got created.
>
> **[4:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=268)** And just to demonstrate the power of the selector again, I'm going to ahead and do kubectl get all dash L, and now I'm going to to search for everything that's associated with our [exploreCalifornia.com](https://exploreCalifornia.com) label.
>
> **[4:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=280)** And as you can see, it gave me the pod that was associated with our deployment, which is down here.
>
> **[4:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=287)** And also gave me the service that we just created.
>
> **[4:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=289)** As you can see, a cluster IP was created.
>
> **[4:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=292)** And the port was mapped to it, which is really nice.
>
> **[4:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=297)** Let's test that our website is working again.
>
> **[4:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=299)** So again, I'm going to do the port forward command, that I ran earlier, but this time, instead of providing deployment, [exploreCalifornia.com](https://exploreCalifornia.com), I'm going to replace that with service, exploreCalifornia-SVC, and I'm going to leave the ports alone.
>
> **[5:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=316)** So, just like we saw earlier, the forwarding began.
>
> **[5:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=320)** And we know that because it told us that the forwarding is happening up here.
>
> **[5:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=325)** So, let's go back to our website, and see if that actually works.
>
> **[5:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-a-service?u=76281980&t=328)** And sure enough, our website is operational again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), finally, (1), else. (1)
> **CLI Commands:** kubectl (6), make (4), find (1)
> **Code Identifiers:** explorecalifornia (10)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (8), [remove.com](https://remove.com) (1), [of.com](https://of.com) (1)
> **Env Vars:** dns (3), svc (2), tcp (1)
> **Analogies:** just like (4)
> **File Paths:** service.yaml (3)
> **Ports:** port 80 (3)

#### Understanding Ingress and Ingress controllers
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=0)** - [Instructor] It's time to create the Ingress.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=3)** Before we do so, let's explain how they work.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=6)** In Kubernetes, an Ingress is a reverse proxy that enables external access into other Kubernetes resources.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=12)** If you've ever used an application load balancer like AWS Application Load Balancer, very appropriately named, Azure API Gateway or Google's Cloud Load Balancer, or if you've ever used a quote unquote, "Bare Metal Load Balancer" like F5's BIG-IP, then the Kubernetes Ingress will probably be familiar to you.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=32)** But if you haven't, do not panic.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=34)** What we're doing with Explore California and NginX is actually very, very similar to how Ingresses work here.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=41)** Here's a great diagram from the Kubernetes documentation that explains how Ingresses work.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=46)** First, you provide your Ingress with a series of routing rules which are summarized here in the middle.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=52)** Like all make rules earlier, routing rules perform an action when given a name in the case of our Ingress, instead of using a make target, we provide the HTTP path like slash or slash shopping.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=63)** Also in the case of our Ingress, the quote unquote action is to send quote unquote traffic to to a port for a specified Kubernetes service writing rules allow us to send requests to multiple different pods without having to create separate DNS records for them, which is really nice.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=79)** Let's use a slightly tweaked version of this image to explain what I mean.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=83)** So let's say that Explore California wanted to move both our website and our booking service, a separate application into Kubernetes.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=90)** Instead of having to maintain a separate complicated nginx configuration to send requests between the two services, we can create an Ingress with two routing rules That looks something like what you see here on the right.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=102)** This isn't the exact syntax we'll use in our Ingress, but I hope the concept and the simplicity is clear.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=106)** The rules in our Ingress are processed by another Kubernetes object called an Ingress controller.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=111)** The Ingress controller is essentially an instance of nginX doing the complicated routing for us.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=117)** A Kubernetes cluster can have many and multiple different kinds of Ingress controllers.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=121)** Each have their advantages and disadvantages paths, and Ingress rules don't have to be exact either.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=128)** You can specify roles with many different kinds of patterns, even regexes or regular expressions work.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=132)** We'll use the quote unquote prefix matching rules for our Ingress to keep things simple though, since we're already using nginx, we're going to go ahead and use the nginx Ingress controller for explore California.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=144)** That's a really brief overview of how Ingresses work.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/understanding-ingress-and-ingress-controllers?u=76281980&t=146)** So now that we know a little bit more about them, let's go ahead and create one.

> [!info]- Semantic Content
>
> **CLI Commands:** nginx (5), make (2), aws (1)
> **Env Vars:** aws (1), api (1), big (1), http (1), dns (1)
> **Code Keywords:** let (4)
> **Code Identifiers:** nginx (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Creating the Ingress
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=0)** - [Instructor] All right, creating our ingress.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=3)** First I'm going to pull up the help page for kubectl create ingress.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=8)** There's a lot of stuff here, but let's scroll up to the top to see the meat of it.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=12)** So we can see that we have a few options since we're creating a single ingress with a simple writing rule and a simple rule that sends all traffic for the root of explorecalifornia into the explorecalifornia-SVC service that we created earlier.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=25)** We're going to want something like what we see here on line four.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=29)** So notice that we didn't actually have to specify an ingress controller name here.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=34)** That's actually what we want.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=35)** If we don't provide an ingress controller, Kubernetes will use the default one set up for the cluster.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=41)** The NGINX ingress controller that we're going to create is configured to be the default for this cluster.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=45)** So we don't actually have to create one or provide one here.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=48)** So let's go ahead and paste that command and let's make a couple of changes.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=53)** So first I'm going to to change the name of the ingress from simple to [explorecalifornia.com](https://explorecalifornia.com).
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=60)** Next I'm going to change the rule so that instead of trying to point SVC1 to [foo.com/bar](https://foo.com/bar), I'm going to have a point to [explorecalifornia.com](https://explorecalifornia.com)/ which is the root of the website.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=74)** And then I'm going to have it send traffic to explorecalifornia-SVC:80.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=80)** Finally, we're not going to use HTTPS here.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=83)** Therefore, I don't need to provide a cert.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=86)** Now since we're not creating this right now, what I'm going to do is I'm going to dry run it.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=90)** So I'm going to do --dry-run set to client, and I'm going to set the output=yaml.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=96)** Let's see if we get output back.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=98)** So we did, which is great, and it looks pretty good here.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=101)** So let's go ahead and save that into ingress.yaml.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=106)** Now that we have that there let's open that file and explore.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=109)** So first let's delete the creation timestamp here Since we don't need that, we can see that our rule has been created.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=116)** So when we hit the [explorecalifornia.com](https://explorecalifornia.com) host on line seven and we request the root path here on line 15, it's going to send that traffic to explorecalifornia-SVC at port 80 As we can see on line 16, it specifies an exact path type, but we don't actually want that because we actually have images and CSS style sheets and things like that underneath [explorecalifornia.com](https://explorecalifornia.com).
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=143)** We do want to send the traffic from [explorecalifornia.com](https://explorecalifornia.com) to our service, but we don't want just the traffic to the website to go there.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=152)** We want everything underneath it to go to the service.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=154)** So we're going to change exact to prefix here, and we're going to get rid of the status object here, since that will get automatically created when we create this ingress.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=165)** So I just wrote in, saved it and I exited my editor.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=169)** Now, if I were to run kubectl apply-f ingress.yaml.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=175)** This would actually fail and it would fail because we haven't installed an ingress controller yet.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-the-ingress?u=76281980&t=180)** So let's go ahead and do that now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), finally, (1), delete (1), type, (1)
> **Env Vars:** svc (3), nginx (1), svc1 (1), https (1), css (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (5), [foo.com](https://foo.com) (1)
> **CLI Commands:** kubectl (2), nginx (1), make (1)
> **File Paths:** ingress.yaml (2)
> **Ports:** :80 (1), port 80 (1)
> **UI Navigation:** scroll up (1), go to (1)
> **Prerequisites:** set up (1)

#### Configuring kind to use Ingress controllers
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=0)** - [Narrator] So fortunately for us Kind provides documentation on installing the NGINX Ingress controller.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=6)** So let's take a look at that now.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=7)** What I'm going to do is I'm going to minimize my terminal and I'm going to move it over to the right here.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=12)** And on the left, I'm going to go to kind.sigs.[k8s.io](https://k8s.io) and I'm going to click on this Ingress link over here on the left.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=21)** So the first thing we need to do per this documentation, if we scroll down a little bit, is we need to mark our cluster as being ready for Ingress.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=29)** Now we've already done this inside of our kind_config.yaml So let's go ahead and open it up and explore how to do that.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=38)** So as we can see from lines 8 through 14, we can see that we've provided an InitConfiguration Kind on line 11 to this kubeadmConfigPatches object here.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=48)** And underneath it we're providing extra arguments to what's called the kubelet, which is another name for a Kubernetes node.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=54)** It's the actual application that runs the node, or what makes a node, a node.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=59)** And expanding this, we can see that we have our ingress-ready=true label here.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=65)** This label is what the NGINX Ingress control is going to use to find nodes that can actually serve our Ingress controller app.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=74)** So we already have that so we're not going to go ahead and modify this.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=77)** But if we were to do that, which I'll demonstrate here, I'm going to go ahead and get rid of the lines 8 through 14.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=83)** I'm going to go ahead and get rid of line 7 as well.
>
> **[1:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=85)** So if I were to create this from scratch, what I would do is I would copy everything from nodes to extraPortMappings as you can see here.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=94)** I'm going to go ahead and copy that.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=96)** Then underneath the end point that we defined earlier, I'm going to paste that right underneath it, right there.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=102)** And then I'm going to align it by making sure that each line has two spaces appended to it, in the beginning of the line.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=110)** And then what I would do is I would write and save this file.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=113)** And then I would delete the cluster by running kind delete cluster --name=[explorecalifornia.com](https://explorecalifornia.com) And I would do this because I would need to apply the changes to the kubelet.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=125)** And in order to do that, I would have to delete the cluster and recreate it.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=128)** So I would delete the cluster and then I would run either kind create cluster --name=[explorecalifornia.com](https://explorecalifornia.com) or preferably, since we've already created a make rule for this, I would just run, make create_kind_cluster_with_registry.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=145)** Just to make sure that everything is linked up and our Docker registry is working and is connected to our kind cluster.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=150)** So now that we have that, let's go ahead and actually install the Ingress controller.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=154)** So what I'm going to do is I'm going to click on Ingress NGINX, which is up here, and then I'm going to copy this long kubectl apply command.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=162)** And this kubectl apply command is taking a Kubernetes manifest from GitHub and running kubectl apply against it.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=170)** So let's copy it and see that in action.
>
> **[2:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=173)** So as you can see, a lot of stuff was created.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=176)** First it created a namespace for the NGINX Ingress controller objects, and then it created a whole bunch of objects along with it.
>
> **[3:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=184)** So to verify that that's all working, let's take a look at what is all in that namespace.
>
> **[3:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=190)** So I'm going to expand this window and I'm going to run kubectl get all inside of the namespace Ingress NGINX, which you can see on the fourth line here.
>
> **[3:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=201)** So I'm going to do a -n and then ingress-nginx And as we can see, we have a lot of stuff working here.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=207)** Namely, we have the Ingress NGINX controller pod running because it's one 1/1 and in a running state.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=215)** And we have two services here.
>
> **[3:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=217)** One of them, the admission controller is what actually is able to find Ingresses and map them to this controller.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=224)** And then the service for the Ingress controller itself.
>
> **[3:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=227)** And then we have a couple of other objects here that aren't really relevant, but we know that they are also working.
>
> **[3:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=233)** So now that we've installed the Ingress controller, let's actually deploy our Ingress.
>
> **[3:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=239)** But before we do that, let's take another look at our Ingress here.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=244)** So earlier we mentioned that in order for our rule to work, we need to match on the host, which is here on line seven.
>
> **[4:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=251)** We need to specify that when we go to [explorecalifornia.com](https://explorecalifornia.com) at forward slash, that all that traffic goes into explorecalifornia-svc.
>
> **[4:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=262)** However, we actually haven't created this DNS record yet.
>
> **[4:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=265)** So if we tried to go to [explorecalifornia.com](https://explorecalifornia.com), it has trouble finding that site because it's not a valid domain. So what do we do?
>
> **[4:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=272)** We can use a very old methodology for fixing this called the /etc/hosts file.
>
> **[4:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=278)** So /etc/hosts, which typed out is slash etc slash hosts is a file that contains a mapping of names to IP addresses.
>
> **[4:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=287)** And this is really nice because if you create a name inside of this file, then your computer won't actually try to use DNS to find it, it will just know that it exists and it will know its IP and it will send you straight there.
>
> **[5:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=301)** So what we're going to do is we're going to go ahead and add explore-california to this /etc/hosts file.
>
> **[5:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=306)** And we're going to do this just to demonstrate what would happen if [explorecalifornia.com](https://explorecalifornia.com) actually existed in DNS.
>
> **[5:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=314)** To do this you'll need to have administrator permissions or super user on your machine. So just a heads up there.
>
> **[5:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=320)** So let's go ahead and open this file with Sudo.
>
> **[5:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=322)** So sudo vim /etc/hosts It's going to ask me to verify that I want to do that.
>
> **[5:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=330)** And now I'm inside of this file.
>
> **[5:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=331)** So I'm going to go to the bottom of this file.
>
> **[5:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=333)** And the way this file works is you provide an IP address such as 127.0.0.1 and then a space and then the name that you want to attach to that IP address.
>
> **[5:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=343)** So in our case, it's going to be [explorecalifornia.com](https://explorecalifornia.com) Just to bring the point home a little bit more, if I wanted to create another IP address name mapping like this, like say I wanted to create a mapping for carlosnunez.me which is a real DNS name, but for here, if I wanted to do that, I would say make 1.2.3.4 map to carlosnunez.me and the computer will just know to go to that IP address when I request to go to carlosnunez.me But we don't actually care about that one, we care about [explorecalifornia.com](https://explorecalifornia.com) up here.
>
> **[6:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=378)** So let's go ahead and write this file and then save it.
>
> **[6:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=381)** And now we're going to go ahead and apply our Ingress.
>
> **[6:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=384)** So we're going to do kubectl apply -f ingress.yaml That's going to create our Ingress and finally let's test it.
>
> **[6:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=393)** So I'm going to refresh the page.
>
> **[6:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=394)** I'm going to go to [explorecalifornia.com](https://explorecalifornia.com) and boom it works!
>
> **[6:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=397)** What would you know?
>
> **[6:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/configuring-kind-to-use-ingress-controllers?u=76281980&t=399)** Our Ingress is operational.

> [!info]- Semantic Content
>
> **CLI Commands:** nginx (7), kubectl (5), node (4), make (4), find (3)
> **Code Keywords:** let (10), delete (4), this, (3), this. (1), super (1)
> **Env Vars:** nginx (6), dns (4)
> **UI Navigation:** go to (7), click on (2), scroll down (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (8), [k8s.io](https://k8s.io) (1)
> **Code Identifiers:** kind_config (1), kubeadmconfigpatches (1), extraportmappings (1), create_kind_cluster_with_registry (1)
> **Tools:** terminal (1), github (1), vim (1)
> **File Paths:** kind_config.yaml (1), ingress.yaml (1)


### 6. Our First Helm Chart

#### What is Helm?
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=0)** - [Instructor] Previously, we used Kubernetes Manifests to deploy our website into our local KIND Kubernetes cluster.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=6)** These manifests written in YAML, describe the Kubernetes resources that we wanted to install and configure inside of the cluster.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=13)** What Kubernetes Manifests are powerful and very descriptive, they do have drawbacks.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=18)** So let's go back to Explore California's booking service as an example.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=22)** If we wanted to install this into Kubernetes, we would have to do something like kubectl apply-F deployment.yaml.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=29)** And then we would have to run kubectl edit deployment, if we wanted to make any changes to the deployment afterwards.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=36)** And for some changes, you can't actually edit them out because they're immutable.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=40)** So you'd have to do kubectl delete deployment, and then you have to reapply it with kubectl apply-F.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=47)** I hope you're getting the point that this can be very frustrating and tedious.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=51)** Now while this wasn't too painful for our three resource Kubernetes app, many applications like Explore California's website or the hypothetical booking service that we were talking about, can consist of tens to hundreds of resources like this.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=65)** So keeping track of these moving parts can become extremely challenging.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=69)** Moreover, as an application inside of Kubernetes grows the chances of deleting something really important or modifying the wrong thing increases, which introduces risks that we don't want.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=80)** It'd be nice to have a Doc compose-like way of keeping track of how everything relates to each other.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=86)** And fortunately for us, this exists.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=89)** And this exist to a tool called Helm.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=92)** Helm is a package manager for applications in Kubernetes.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=96)** It packages all the Manifests that your application needs into a single artifact called a Helm Chart.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=101)** Instead of using many kubectl commands, like we were describing earlier, installing apps inside of a Kubernetes cluster becomes as easy as running Helm + install and then the name of the app.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=111)** If you need to change the number of Replicas in your deployment for example, all you have to do is modify the template inside of your Chart and then run Helm + re-install or Helm + upgrade.
>
> **[2:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=121)** And then when you're done with your app, you can just run Helm + delete.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=124)** It's really really powerful stuff.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=125)** Helm consists of three key parts: the Chart's metadata, the Chart values and the Chart templates.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=132)** So like the metadata section that we modified earlier, the Helm Charts metadata inside of Chart.yaml simply describes the Chart's properties.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=140)** The Chart's name, description, and version, are examples of properties defined inside of this file.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=144)** One powerful feature of Helm is its ability to accept variables, or what Helm calls values, and values are used inside of Helm templates to describe what you're actually deploying into Kubernetes.
>
> **[2:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=157)** Templates are just Kubernetes Manifests that can accept Helm values, like the ones I described earlier, and other convenient Helm functions.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=164)** Helm values are valuables that can be used to fill in Helm templates basically.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=168)** Here's an example of why Helm templates are so powerful.
>
> **[2:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=171)** Let's go back to my Terminal to look into that.
>
> **[2:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=173)** So this is the deployment that we created earlier.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=176)** And as you can see, there's a lot of stuff in here that we would need to modify if we needed to change this deployment after deploying it, such as the labels that are associated with it on line five, the name of the deployment on line six, which would actually necessitate deleting the deployment and recreating it.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=195)** The image that gets created for the Pods inside of our deployment, et cetera.
>
> **[3:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=200)** Now let's take a look at what this looks like if we were to use a Helm template.
>
> **[3:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=203)** So I'm going to go ahead and zoom in on that.
>
> **[3:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=206)** As you can see everything, and I mean almost everything inside of this deployment was turned into a value.
>
> **[3:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=213)** So for example, the application name that we created for our label.
>
> **[3:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=218)** Instead of having an app label that is statically tied to [explorecalifornia.com](https://explorecalifornia.com), we can create a value that we can change with our Chart and change as we install different versions of our Chart.
>
> **[3:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=230)** Same deal with the number of Replicas.
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=232)** If we want more than one Replica, all we need to do is change the Replicas value to two or more, and then just run Helm + upgrade or Helm + reinstall.
>
> **[4:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=240)** This is extremely powerful stuff, and hopefully we'll get to see why as we play along with Helm some more.
>
> **[4:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=247)** This is Helm's website @helm.sh.
>
> **[4:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=251)** They have lots of documentation that nicely describes the benefits of using Helm and how its internals work.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/what-is-helm?u=76281980&t=255)** So now that we've seen an example of what Helm looks like and know a little bit more about how Helm works, let's actually use it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (2), this. (1)
> **CLI Commands:** kubectl (5), make (1)
> **Prerequisites:** install (5), configure (1)
> **File Paths:** deployment.yaml (1), chart.yaml (1), helm.sh (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** kind (1), yaml (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)

#### Creating our Chart metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=0)** - [Instructor] So the first thing that we need to do is to install Helm.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=3)** Fortunately, that's really easy.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=5)** If you're on a Mac, like I am, you can just run brew install Helm, and now install Helm.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=10)** Now I already have it installed on my machine, but you'll see more output when you run this command, if you haven't installed it before.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=17)** if you're on a Windows machine, you can run choco install helm instead.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=21)** Next we'll create a new directory to store the contents of our Helm chart.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=26)** By default, this directory is called chart.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=28)** So we're going to stick to that convention and create a directory called chart with the mkdir statement up here.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=34)** Next we're going to create a file called Chart.yaml inside of the chart director.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=40)** Chart.yaml provides metadata that describes our chart.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=43)** Important to note here, is that the C in chart is capitalized.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=47)** So make sure that when you create this file, the C is capitalized in your instance.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=52)** Inside of Helm, I'm going to click on get started.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=54)** Then I'm going to click on the three-line menu here, and then I'm going to search for Chart.yaml.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=59)** This will give me a couple of results.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=61)** I'm going to click on the Chart.yaml file on the second line.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=65)** So this gives us the scheme of what we're expecting Chart.yaml to look like.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=68)** You have to use it now.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=69)** The first property that we're going to define is the API version.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=73)** As the Helm documentation states on the left here, API version just defines the version of the chart schema.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=78)** So if you work with Docker Compose, this is similar to the version line at the top of Docker Compose at YAML.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=83)** Helen supports two different schema versions, version one, and version two, we're going to use version two and most charts that you work with will use this version.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=92)** However, some of the older charts that you might run into are still on version one.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=95)** So just keep that in mind.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=97)** Next, we're going to give this chart a name and we're going to call the explore-california-website.
>
> **[1:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=103)** When we install the resources in this chart with the Helm command line tool, we'll provide it with this name along with the path to the chart or ./chart in our case.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=112)** Next, we're going to define the version of the Helm chart with the version property.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=115)** This is not to be confused with the version of the app that the chart is installing or Explore California website in our case.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=122)** A nice thing I like about Helm, is that it can keep track of different versions of your chart.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=126)** This way you can upgrade or roll back the resources in your chart in case of any upgrades or fixes.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=131)** So in my example, I'm going to use, let's just make it version 1.0.0, and important to note, Helm expects that the version is a SemVer version, or it uses semantic versioning.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=143)** If you've never seen this before, I like using [semver.org](https://semver.org) as a primer to how semantic versioning works.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=151)** But the idea is basically that you have a major version, a minor version and a patch version.
>
> **[2:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=156)** And in our example, our major version is one, our minor version is zero and our patch version is also zero.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=162)** Check this documentation out if you want to learn more about semantic versioning.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=167)** Next, we're going to provide a key called deprecated, which just tells Helm whether our chart's been deprecated or not, which in our case it hasn't.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=174)** So I'm just going to mark it as false.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=176)** But if you're working on a chart and you don't want work on that chart anymore, or that chart is using a newer chart, then you would mark this property to true, just so that Helm can show the user that the chart has been deprecated when they install it.
>
> **[3:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=190)** Next, we're going to define the version of our app with app version.
>
> **[3:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=194)** Since we're not versioning our Explore California website, we'll just stick to 1.0.0 here.
>
> **[3:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=199)** And this also uses semantic versioning, just like on line three.
>
> **[3:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=203)** So just keep that in mind.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=204)** Now you notice, looking at the documentation on the left, there are a lot of properties that we haven't defined.
>
> **[3:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=209)** These properties are all optional and Helm will allow our chart to get installed without defining them, Like Docker, Helm allows you to install charts from a centralized repository, Artifact Hub is a popular example of such a repository.
>
> **[3:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=221)** These fields will become much more valuable if we were to publish Explore California into Artifact Hub.
>
> **[3:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=226)** However, since we're only using Helm for our internal deployment, I've chosen to leave them out.
>
> **[3:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=230)** So we're done with our chart metadata.
>
> **[3:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-metadata?u=76281980&t=232)** So let's go ahead and save this file and exit our editor.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), make (2), brew (1), mkdir (1)
> **Prerequisites:** install (7)
> **File Paths:** chart.yaml (5)
> **Code Keywords:** case. (2), let (2), default, (1)
> **Env Vars:** api (2), yaml (1)
> **Versions:** version 1 (1), 0.0 (1), 1.0.0 (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), is called (1)

#### Creating our Chart values
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=0)** - [Instructor] Now, we're going to define some Helm values.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=4)** These values will be used to render our Kubernetes manifest, when we install our app with Helm install.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=8)** So to start, I'm going to zoom in on my terminal, and then, I'm going to create a new file, called values.yaml inside a chart.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=16)** And in this example, the V in values is lowercase, so keep that in mind when you create it.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=22)** Values.yaml is really simple.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=23)** It's just a yaml file.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=25)** The keys to the left of the colons are value names.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=28)** These are what we're going to reference when we templatize our Kubernetes manifests.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=31)** The values to the right of the colons are the data for those values.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=34)** So, let's say I want to create a value called appName, like this.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=39)** To give it a value, I'd put some data to the right of the colon.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=42)** In our case, I want to name this something descriptive, like explore-california-website.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=47)** Let's do the same thing for imageName.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=50)** When we deploy explore-california into a real Kubernetes cluster, we're going to be thankful that this is a value.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=55)** So let's go ahead and give this the value of our image, which in our case, was localhost:5000/[explorecalifornia.com](https://explorecalifornia.com).
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=66)** These are all the values that we're going to create for now.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=68)** So let's go ahead and write this file and then quit our editor.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=72)** Finally, let's do a quick validation test to make sure that our chart is valid.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=76)** So to do that, we're going to do, helm show all ./chart.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=83)** If our chart is valid, which it is in our case, Helm will show us everything it can process about the chart, including its metadata, which we saw here, values, which we see down here, and rendered manifests, which we're going to create soon.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/creating-our-chart-values?u=76281980&t=97)** As you can see, Helm was okay with our changes, since it gave us the metadata we created along with the chart's values.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (3), this. (1), finally, (1)
> **File Paths:** values.yaml (2)
> **Code Identifiers:** appname (1), imagename (1)
> **URLs:** [localhost:5000](https://localhost:5000) (1), [explorecalifornia.com](https://explorecalifornia.com) (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Ports:** :5000 (1)
> **Tools:** terminal (1)

#### Templatizing a Deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=0)** - Now that we know more about helm chart, metadata and creating helm values.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=4)** Let's turn our Kubernetes manifests into helm chart templates.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=7)** First, we're going to create a new directory inside a chart card template.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=11)** So I'm going to use MKDIR to do this, and we're going to create it inside of charts and templates.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=17)** Next I'm going to open my deployment.yaml file from earlier.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=20)** I'm also going to keep my values file on the side, just so that I can reference them more easily.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=26)** So chart values, there we go.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=30)** Since helm inserts, helm values into template areas directly.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=34)** First, I'm going to replace all instances of explore [california.com](https://california.com) with the following open brace, open brace values, dot app name, close brace, close brace.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=45)** So that's two curly braces in the beginning and two curly braces at the end, and just like that, all of them were replaced.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=51)** Very, very simple.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=53)** Next, I'm going to replace the image on line 19.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=55)** So instead of having local host 5,000 and the rest of the line, I'm going to get rid of that.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=61)** And I'm going to put in brace brace dot values dot image, brace brace.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=67)** Next, I'm going to change the number of replicas I have here on line eight to also be a values.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=72)** So instead of just having it be one, I'm going to do brace brace dot values dot replicas, close braces.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=78)** And then finally we know that the containers IDs need to be random.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=83)** So in order to do that, I'm going to use a special helm function called randAlphaNum.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=90)** And then I'm going to tell it that I want five letters after that.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=93)** So I'm going to go ahead and specify that.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=95)** And if you want to know more about helms custom functions, you can browse the documentation and search for the template function list underneath the chart template guide, which is right here.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=107)** Now that I've gone ahead and templatize the deployment.yaml file I'm going to do the same for service.yaml, and with service.yaml.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=114)** First, I'm going to replace all instances of explore California, just like we did before.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=119)** The next thing I'm going to do is change the service name.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=123)** And to do that I'm going to create a new value over here on the left called service name because the service name has special characters in it.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=129)** And I'm going to set that equal to explore California SVC.
>
> **[2:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=133)** So I'm going to delete that and I'm going to do values dot service name here.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=138)** And then finally, I'm going to change the source port here on line ten to also be a new value.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=143)** So I'm going to do dot values dot source port, and then I'm going to create the new value over here.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=150)** Finally, I'm going to make the same changes to ingress.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=152)** So let me go ahead and open that up.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=154)** Once again, I'm going to change all references to explore [california.com](https://california.com) to our app name.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=159)** And that's literally all we needed to do.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=161)** Well, actually on line 15, we need to change this port number to be the source port.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=165)** So let's go ahead and change that to be source port, and that should do it.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=172)** Let's also get rid of creation timestamp up here.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=175)** So now that we have all of these files, let's go ahead and move them into the templates folder that we've created.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=179)** So I'm going to go ahead and save my changes and then close my editor.
>
> **[3:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=183)** And then I'm going to move with the MV command deployment service and ingress.
>
> **[3:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=190)** And all of them are dot yaml files into chart slash templates.
>
> **[3:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=194)** Now a cool feature of bash, and I think also shell is that you can specify multiple files inside of braces like this, and your shell will move them all instead of moving them all individually with separate commands, which is really cool.
>
> **[3:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=208)** So finally, I'm going to confirm that those files got moved.
>
> **[3:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=211)** So let's look at chart dot templates with the LS command.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=215)** We can see that they're all in there.
>
> **[3:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=218)** And if I run LS on my current directory, I could see that none are in here, which is really good.
>
> **[3:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=224)** So let's render our template just to make sure that it looks good.
>
> **[3:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=229)** And so to do that, I'm going to run helm template and I'm going to put dot slash chart at the end.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=235)** And that's going to give us a rendered copy of our Kubernetes manifest with the values applied.
>
> **[4:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=241)** So for example, if we look at the service here, we can see that instead of it being values dot service name, like it was inside of our file, we have the actual name of the service, just like we did before.
>
> **[4:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=255)** Same deal with our target port, same deal with our selectors up here, same deal with everything.
>
> **[4:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=261)** So now that we've confirmed that all of this was rendered successfully, I'm going to go ahead and delete all of the existing resources inside of my Kubernetes cluster, because we're going to re-install them with helm install.
>
> **[4:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=273)** So let me run kubeCTL, delete all.
>
> **[4:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=277)** And we're going to use selectors here again to show you how powerful it can be.
>
> **[4:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=281)** So I'm going to provide dash L and now I'm going to say app equals explore [california.com](https://california.com) and that deleted all of the resources associated with that selector, which is really, really cool.
>
> **[4:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=295)** Now I'm going to go ahead and run helm install, and I'm going to provide the name of the chart like that.
>
> **[5:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=301)** And I'm going to provide the path to the chart, which is dot slash chart.
>
> **[5:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=305)** And it looks like it didn't like the name of our container here, because it looks like the container needs to be lowercase.
>
> **[5:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=311)** So let's make that change now.
>
> **[5:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=313)** So I'm going to go into our deployment, yaml templates.
>
> **[5:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=318)** So let's go into chart templates, deployment.yaml, and going on to line 20.
>
> **[5:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=323)** It looks like we need to make that random alphanumeric character lowercase.
>
> **[5:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=328)** So how do we find out how to do that?
>
> **[5:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=330)** The helm documentation.
>
> **[5:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=332)** So let's take a look at the string functions we have available.
>
> **[5:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=335)** So helm includes the string functions.
>
> **[5:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=338)** One of them is lower, which is really convenient.
>
> **[5:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=340)** So it looks like all I need to do is pipe the results of randalphanum into lower.
>
> **[5:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=348)** Let's give that a shot like this.
>
> **[5:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=351)** So if we try to install this chart again, we'll see that since it was partially installed, we can't reuse that name.
>
> **[5:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=358)** So we have to uninstall it first with helm uninstalled, and then we can install it again.
>
> **[6:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=366)** And now that it's been installed, let's see if explore [california.com](https://california.com) is still working.
>
> **[6:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=371)** So I'm going to go to explore [california.com](https://california.com) and we are still good.
>
> **[6:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=376)** So now I'm going to uninstall the application.
>
> **[6:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=377)** Now that we've confirmed that it's all good and our applications uninstalled.
>
> **[6:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/templatizing-a-deployment?u=76281980&t=382)** So just a quick reminder that for any of these commands, you can just add dash dash help to the end, and it'll give you more information about how they work and what aliases you have and what options you can provide.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), delete (3), finally, (3), this, (2), function (2)
> **CLI Commands:** make (4), ls (2), mkdir (1), mv (1), kubectl (1)
> **Exercise Files:** template (6)
> **File Paths:** deployment.yaml (3), service.yaml (2)
> **URLs:** [california.com](https://california.com) (5)
> **Prerequisites:** install (5)
> **Analogies:** just like (3), for example (1)
> **Code Identifiers:** randalphanum (1), kubectl (1)

#### Deploying our Helm Chart with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=0)** - [Instructor] Let's automate what we just did by putting all of it into our handy-dandy Makefile.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=4)** So let's open Makefile.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=6)** And let's go ahead and add it.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=8)** So the first thing I'm going to do is create a new make rule called install_app.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=13)** And we're going to make that target a phony target up here, going back to it, instead of using helm install like we've been doing, as you probably noticed, it's really inconvenient to install something and then have to uninstall it if something goes wrong.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=27)** So instead of doing that, we're going to use the helm upgrade command.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=32)** And what helm upgrade does, is it effectively versions all of your installs on top of each other.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=37)** So it knows when stuff has changed, to install the changes.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=41)** If you've modified things, to modify in place, that sort of business.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=46)** Helm upgrade is a command that does that.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=47)** It's much more convenient than installing and uninstalling.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=51)** So the first command we're going to provide is --atomic, which ensures that all of the resources that you're deploying inside of your chart get deployed as a single unit.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=62)** And if any of them don't get installed, helm will automatically roll it all back and uninstall it all, which is really nice.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=69)** That way you don't have partial installs like we experienced before.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=73)** And then we're going to do --install so that if the chart that we're installing hasn't been installed yet, helm upgrade will automatically install it.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=81)** And then afterwards, we're going to put the name of the chart and then the path to the chart, super duper easy.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=87)** So let's save our file, quit and let's try it.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=91)** So I'm going to do make install_app, and as you can see, the release didn't exist.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=96)** So helm went ahead and installed it and let's do another smoke test.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=99)** So let's just click on this link.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=102)** And as you can see, we were able to fetch the link and we were able to go back to the webpage, which everything is working.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=108)** So like I said earlier, we can install our app as many times as we want now.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=112)** So let's try running this again.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=115)** Just to demonstrate this.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=117)** And as you can see, we were able to not only install it, but the revision of the installation changed.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=122)** So now instead of it being revision one, it is now revision two, which is really cool.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=128)** And just to demonstrate that we can make changes in place.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=131)** Let's go ahead and modify one of our templates.
>
> **[2:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=134)** So let's go into chart/templates and let's modify say the deployment.yaml.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=142)** And let's try changing the name of the container from five to 10, for example.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=147)** So I'm going to do that and I'm going to run make install_app again.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=152)** And as you can see, it went ahead and deployed it again.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=155)** If we describe the pod that has our container in it.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=158)** So I'm going to do kubectl describe pod -l, app is [explorecalifornia.com](https://explorecalifornia.com).
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=165)** Oh, I forgot that change to explore-california-website.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=169)** We can see, if we look at the list of containers that are running, that we have an ID that is 10 characters long instead of five characters long, which is really nice.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=180)** So finally, let's go ahead and uninstall it by running helm uninstall, explore-california-website and we successfully uninstalled it.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=189)** So you all, this is a milestone, you want to know why?
>
> **[3:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=193)** Because it's time to get this thing on the internet.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-with-make?u=76281980&t=195)** Let's do it live.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), super (1), this. (1), finally, (1)
> **Prerequisites:** install (7)
> **CLI Commands:** make (5), kubectl (1)
> **Code Identifiers:** install_app (3)
> **Definitions:** is a  (2)
> **File Paths:** deployment.yaml (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)
> **Cross-References:** go back to (1)

#### Challenge: Change the port number
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=5)** - [Instructor] Alright, everyone.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=6)** It's our final challenge.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=8)** In this challenge, I'd like you to change the port number of the Explore California website service.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=13)** You should not need to change any other ports associated with the Explorer California app.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=19)** If you need any help with this, don't be afraid to consult the Kubernetes API reference docs for more help, or you can just attach dash dash help to any of the Kube CTL Create Commands to learn more.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/challenge-change-the-port-number?u=76281980&t=30)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), ctl (1)
> **Code Keywords:** this, (1)
> **Documentation:** api reference (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Change the port number
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=5)** - [Instructor] All right everyone, this is our last challenge.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=7)** I hope you enjoyed this challenges as much as I enjoyed writing them.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=11)** So we´re changing the port number, that is associated with explore-california.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=15)** Without changing the port number attached to the pods.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=18)** Instead of explore-california, or the port attached to the Ingress, for explore-california.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=24)** So what this means, that you try to modify the Nginx configuration website.conf.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=29)** Then unfortunately you went a little too far.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=32)** Now I recommend you for learning Nginx configuration parameters, as Nginx can be quite tricky to learn.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=38)** But we want our changes to be entirely inside of Kubernetes.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=43)** So, let's take a look into that, so we're going to go into chart/templates/service.yaml.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=50)** Now if you try to change the port of the Ingress, you might have found that it is a little bit difficult to do that, and that's actually by design.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=58)** Since engross it's our meant to be http reverse proxy, they generally assume that the ports that you're serving out of are going to be on port 80, if it's insecure, or port 443 if you're doing http (indistinct).
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=73)** So I recommend you for learning more about ingresses, and learning more about the depths, and details of ingresses.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=80)** But unfortunately you went a little too far there, as well.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=83)** So, looking at our service we can see that on line 10 we have a source.Port value, over here.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=90)** So let's take a look at our values inside.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=92)** So I'm going to go ahead and split, and I'm going to open the values.yaml.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=97)** We can see here in values.yaml that we specified it to be Port 80, so all we need to do is just change that to be Port 8080, or any other non-standard high number Port.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=107)** So I'm going to go ahead and save that, and I am going to run make install_app, once again.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=113)** Next, let's use kubectl port-forward to verify that our services actually listening to the port, Port 8080.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=122)** So we're going to do svc/explorecalifornia-svc.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=127)** And I forgot to specify the ports, so let's do 8080:8080.
>
> **[2:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=133)** As we can see for the lots here, even though we changed the port that we're listening from in the service.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=138)** Our service is still targeting port 80 on the pod itself.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=141)** So, even though we changed that it doesn't affect the rowdy inside the Kubernetes network between our service and the pod.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=150)** So let's check it out, let's go to local host at Port 8080.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=155)** And as we could see, se can still (indistinct) Explore California, and we can still browse the website just fine.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=162)** So now let's kill our park forward and let's update our Ingress.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=165)** So we actually need to update our Ingress so that it knows about the new port that our service is listening of.
>
> **[2:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=171)** So let's go ahead and open that template, and actually since that's a value we don't have to update it.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=180)** So since we updated the sourcePort here in values we don't actually need to make an update here, in our Ingress.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=187)** Our Ingress already got that information which is a nice example of the power of, not only Helm, but of Helm values.
>
> **[3:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=196)** So let's double check that that's actually truth, so let's quit, and let's go to [explorecalifornia.com](https://explorecalifornia.com) instead.
>
> **[3:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=202)** And as you can see, it renders, we're able to browse the site, and everything is great.
>
> **[3:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/solution-change-the-port-number?u=76281980&t=210)** Great job going through this, I you got a good time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this, (1)
> **Ports:** port 80 (3), port 8080 (3), port 443 (1), :8080 (1)
> **CLI Commands:** nginx (3), make (2), kubectl (1)
> **File Paths:** values.yaml (2), chart/templates/service.yaml (1)
> **Code Identifiers:** install_app (1), sourceport (1)
> **UI Navigation:** open the (1), go to (1)
> **Definitions:** is a  (2)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)


### 7. We'll Do It Live

#### From local testing to EKS: What's changing?
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=0)** - [Instructor] Now that Explore California is running smoothly in our own computer, it's time to graduate to the big leagues.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=7)** We're finally ready to ship, [explorecalifornia.com](https://explorecalifornia.com) into a real Kubernetes cluster.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=12)** We're going to use AWS's Elastic Kubernetes Service or EKS for short, as our real Kubernetes cluster.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=18)** However, almost everything about what we were about to do will work on any kind of Kubernetes cluster, even your own Kubernetes cluster at home.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=27)** To save time I've created an EKS cluster before embarking on our journey.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=32)** If you'd like to use AWS EKS for this exercise, I've included a script in your exercise files that will create a cluster for you.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=40)** Please note that an EKS cluster is not free.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=43)** See the link below for more details on EKS pricing.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=46)** Before we ship this into production, let's review what's changing with the ingress slide that we saw earlier.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=51)** Like I mentioned earlier, Kubernetes behaves and runs the same, regardless of where it's running.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=56)** The deployment and service that we created earlier won't change at all, which is pretty cool.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=61)** What we do need to change though, is the ingress, but we just need to change it a little bit.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=67)** Earlier, we were using the NginX ingress controller in our kind cluster to handle our ingress and make it available to our computer from [explorecalifornia.com](https://explorecalifornia.com).
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=75)** However, AWS and other managed Kubernetes providers have ingress controllers, they make it even easier to get your website up and running.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=84)** We're going to use the AWS application load balancer, ingress controller that's circled in green here.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=90)** This ingress controller creates application load balancers or ALBs inside of your AWS account for each ingress that you create.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=98)** ALBs are nice in that they provide more features than the default NginX ingress controllers do, and they integrate more tightly into other AWS services.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=108)** The ALB ingress controller will be installed on the cluster that we'll be using here.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/from-local-testing-to-eks-what-s-changing?u=76281980&t=113)** However, you can also see how I did that by looking at the code that I provided in the exercise files.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), eks (5), alb (1)
> **CLI Commands:** aws (6), nginx (2), make (2)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (2)
> **Exercise Files:** exercise files (2)
> **Code Keywords:** let (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Explaining the kubeconfig
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=0)** - Now that we know what explore-california will look like in a real Kubernetes cluster, Let's log into it.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=6)** When we installed Kind earlier in our journey, Kind took care of the backstage details that allowed us to use CUBE CTL without worrying about logging in.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=14)** Since we're using a real Kubernetes cluster this time, we don't have the same amount of convenience.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=19)** However, logging into other clusters is really easy.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=22)** Kubernetes uses a file called a CUBE config to know about the clusters that it can access.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=27)** By default, CUBE configs are located in a file called config, which is located inside of the .CUBE directory, inside of your home directory.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=37)** Let's take a look at that file now.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=39)** This is what a CUBE config looks like.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=42)** There are a few bits of key information here.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=44)** Let's go to them.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=45)** The first important key is the clusters key, which you can see on line 2.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=49)** This is information about our Kubernetes clusters, as you would imagine.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=54)** Since we've only been using the local cluster that Kind creative for us, we only have one cluster in here.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=60)** However, we can have as many clusters as you'd like to access in here.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=64)** The next thing to note are contexts, which start on line seven.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=68)** CUBE config contexts allow you to run commands against different clusters, and as different users, using a quote-unquote alias.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=76)** You can do this by providing the dash-dash context switch for just about any CUBE CTL command.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=82)** This is a lot easier than having to switch between clusters to run simple commands.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=86)** We'll see an example of this when we deploy things into our EKS cluster.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=89)** You can also see a key here called "current contexts" on line 12.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=94)** That's the default context that all of your commands will run in, and you can change this with the "CUBE CTL config set dash context" command.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=104)** Finally, CUBE config stores users, which you can see on line 15 and down.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=110)** Users define the list of usernames, and their authentication data.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=115)** Kubernetes supports multiple different ways of logging into clusters.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=119)** You can log in with passwords, OAuth, JSON, web tokens, or JOTS or JWTs, certificates, and more.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=127)** Most clusters are set up so that users can log in with certificates.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=131)** Here, client certificate data, on line 18, provides a base 64 encoded version of the certificate to use for HTTPS connections made with the cluster, and client key data on line 19, provides a base 64 encoded version of a private key to present to the Kubernetes server.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=149)** An important thing to note is that these aren't quote-unquote, users inside of Kubernetes itself, you can think of quote-unquote users in a CUBE configs as shortcuts for tokens, private keys, et cetera.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=162)** Kubernetes actually doesn't store regular users.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/explaining-the-kubeconfig?u=76281980&t=164)** It assumes that your users are stored somewhere else, and that you'll be using a third party service to authenticate into Kubernetes.

> [!info]- Semantic Content
>
> **Env Vars:** cube (10), ctl (3), eks (1), json (1), jots (1)
> **Code Keywords:** let (3), switch (2), private (2), default, (1), finally, (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### Logging into an AWS EKS cluster with kubectl
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=0)** - All right, so we've seen what a kube config looks like.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=3)** This is created for us by Kind as we know.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=5)** So now we have to first create a cluster quote-unquote inside of this kube config, pointing to our EKS cluster.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=12)** Then we need to create a context, so that we don't have to run kubeCTL config commands all the time, and then we need to add a user with a private key that will allow us to access our EKS cluster and do things with it.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=24)** That sounds like a lot of work, but fortunately, like Kind the AWSCLI makes this insanely easy to do.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=33)** Let's explore that now, first we're going to install the AWSCLI with Homebrew.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=38)** To do that, I'm going to type "brew, install AWSCLI."
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=42)** Now my installation went quickly because I've already downloaded and installed it before.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=47)** It may take longer if you haven't done this, note that if you're a windows user, you can just run "Choco, install AWSCLI" for the same effect.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=56)** Next I'm going to configure AWSCLI with access and secret keys that it can use to access the EKS service.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=63)** Before you run this command, you'll need to make sure that you've created AWS access secret keys.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=69)** If you haven't done that an earlier video in this course guides you on doing this, using the AWS secure token service, the secure token service will allow you to retrieve temporary access and secret keys so that you can access and do things as an administrator, but for a short amount of time.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=86)** Now that I've configured my AWSCLI, let's go ahead and update our kube config.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=91)** That's actually really easy to do.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=93)** All I'm going to do is run "AWS EKS update-kubeconfig," and then I'm going to provide the name of the cluster, which is going to be "Explore California cluster," in our example.
>
> **[1:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=103)** Now, in order to run this command, you'll need to have AWS access and secret keys configured in your shell.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=110)** If you haven't done this, or if you don't know how to do this, I created a video earlier in this course that guides you through setting all that up through a service called "AWS secure token service" or STS.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=123)** Now that I've run this command, let's open the kube config, again, to see what's changed.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=129)** As you can see, another cluster has been added underneath our Kind Explore California cluster.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=137)** Starting on line seven, you can see the changes here.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=140)** On line ten, you can see that this command added a cluster by its Amazon resource number or ARN.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=148)** You can also see that it's provided a certificate authority data, as well as the location of the server, that was provisioned for us.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=154)** We can also see that a context was created for us on line sixteen, which maps the cluster that we just reviewed with a user that was created on line twenty-eight.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=165)** Finally, you can see that the current context was set to the context of the AWS EKS cluster that was created before.
>
> **[2:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=171)** So if we wanted to reuse the Kind cluster for testing, we would have to run "kubeCTL config set context" and then we need to provide the name of the context for our kind cluster, which in this case is going to be "[Kind-explorecalifornia.com](https://Kind-explorecalifornia.com)" Now that we've seen what's changed, let's confirm that kubeCTL works.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=191)** So I'm going to exit my editor and I'm going to type in "kubectl get nodes -n kube system."
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=198)** As you can see, a few nodes were represented back to us in our EKS cluster, we have two nodes that are associated with this.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=207)** Now we use the Kube system namespace since Kubelets or Kubernetes nodes live inside of the system namespace by default.
>
> **[3:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/logging-into-an-aws-eks-cluster-with-kubectl?u=76281980&t=216)** Now that we've proven that EKS is set up, we're ready for our next step.

> [!info]- Semantic Content
>
> **Env Vars:** eks (7), awscli (6), aws (6), sts (1), arn (1)
> **CLI Commands:** aws (6), kubectl (4), brew (1), make (1)
> **Code Keywords:** let (4), this, (4), private (1), finally, (1), this. (1)
> **Prerequisites:** install (3), you'll need (2), configure (1), set up (1)
> **Code Identifiers:** kubectl (3)
> **URLs:** [kind-explorecalifornia.com](https://kind-explorecalifornia.com) (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** open the (1)

#### Deploy our Docker image into AWS ECR with the Docker CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=0)** - [Instructor] If you recall from earlier, we needed to push our image into a local Docker registry.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=5)** We needed to do this because Kubernetes is not come with a Docker registry by default.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=9)** While we could spin up our own Docker registry inside of this cluster, in a production scenario, this would create several additional maintenance headaches.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=18)** How do we update it?
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=19)** Who updates it?
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=21)** What storage should we use to back it?
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=22)** How do we handle security?
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=24)** The list goes on.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=25)** To avoid having to answer these questions, we'll use AWS's own Docker registry, the Elastic Container Registry or ECR.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=33)** ECR is pretty much just like a Docker registry, however, it provides nifty features that are helpful when running Docker registries in production, like integration with AWS Identity Access Management, or IAM for short, built in security scanning, and built in high availability.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=50)** First, let's see what ECR registries we have available.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=53)** To do that, I'm going to run AWS ECR describe repositories.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=59)** This is going to produce a Jason response that you can see below.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=63)** As you can see, I have a single repository here called explore-california.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=67)** However, what I'm really interested in are two things, the URL that I'm logging into when I run Docker login, which is provided here next to repository URI, and the password for that registry, which we'll need another command to get.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=82)** Before we run that command, let's copy that repository URI here and save it into a variable called registry, we're going to need this later.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=91)** So, now that we have this, let's go ahead and get our password.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=95)** To do that, I'm going to run AWS ECR get-login-password, and then I'm going to hit enter.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=102)** This gives us a lot of data, it's going to be really useful for us to save that as a variable, so let's create a variable called password and save that to the results of this command, which I'm going to provide by creating the sub shell inside of these parentheses here.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=119)** If I echo password, we can confirm that I got the same data as before.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=123)** All right, let's try logging in now that we have a registry and password variable set.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=127)** So, we can do that easily by running Docker login and then providing our registry variable from earlier, our username with --username will be AWS and our password will be the password variable that we created.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=144)** By the way, when you're working with ECR, the username will always be AWS.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=149)** As you can see by the login succeeded message, we were successfully able to log into this registry, which means we can continue pushing our image.
>
> **[2:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=157)** So to push our image up, we need to tag it.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=159)** We're going to use the Docker tag command to do that.
>
> **[2:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=161)** Our first argument is going to be our local image, whose name is going to be [explorecalifornia.com](https://explorecalifornia.com):latest.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=169)** Earlier when we did this, the second parameter to this command was localhost:5000/[explorecalifornia.com](https://explorecalifornia.com):latest.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=179)** However, since we're using ECR, this actually goes away and instead, all we need to do is just provide registry like this.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=187)** Now, because there's a colon in here, we need to isolate the variable that we're using from the colon otherwise the shell will think that colon latest is part of the variable.
>
> **[3:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=199)** To do that, we're going to use curly braces like this and provide our variable inside of the curly braces.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=204)** Let's verify that our Docker image got tagged appropriately.
>
> **[3:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=207)** To do that I'm going to use the Docker images command.
>
> **[3:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=210)** Now I don't care about all the images in my system, so I'm going to use grab to filter them out and I'm only going to find images that have California in their name.
>
> **[3:39](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=219)** As you can see, the first result here is the Docker image that was tagged with explore-california and the latest tag.
>
> **[3:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=228)** That means that our image was tagged appropriately.
>
> **[3:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=231)** With that, we're ready to push it up into ECR.
>
> **[3:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=234)** To do that, all we have to do is run Docker push and then registry in curly braces because of this colon here and then latest.
>
> **[4:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploy-our-docker-image-into-aws-ecr-with-the-docker-cli?u=76281980&t=244)** And as you can see, all the layers as part of this image are being pushed up to ECR, and once they all get pushed up, we get a digest and we have finally pushed our image into ECR.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (13), aws (6), find (1)
> **Env Vars:** ecr (10), aws (6), uri (2), iam (1), url (1)
> **Code Keywords:** let (6), this, (2), default. (1), continue (1), this. (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (2), [localhost:5000](https://localhost:5000) (1)
> **Ports:** :5000 (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Deploying our Helm Chart into AWS EKS with make
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=0)** - [Instructor] Now we are finally going to install our app into EKS.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=5)** We'll need to make a couple of changes to make this work.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=7)** First, since we're using a Docker registry that has a password.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=11)** We'll need to create a secret inside of Kubernetes that contains it.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=15)** This secret is called an image pull secret, and it's used by our app when it starts up and pulls our image.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=21)** The second change we'll need to make is we'll need to annotate our Ingress so that Kubernetes knows that we want to use the AWS Load Balancer Ingress Controller that we mentioned earlier.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=30)** The third change we'll need to make is to our service.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=33)** Our service is using a ClusterIP type, we'll need to make this a NodePort type so that it's compatible with the ingress controller.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=41)** Let's get to it.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=42)** First, let's create a new set of values for our AWS deployment.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=45)** This way helm knows what to use when we install our app.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=49)** Let's copy the values that yaml file and serve our chart and create a new file called values-aws.yaml.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=59)** Afterwards let's open that file in our editor.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=63)** First, let's change our image name to use the image that we created an ECR earlier.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=68)** In order to get that I'm going to use Docker images to find the image that I need, but I don't care about seeing all the images.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=75)** I just want to filter by the ones that have ECR in the name.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=78)** We have two results here but we want the first one, since that has a latest tag attached to it.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=83)** So I'm going to go ahead and copy that and then I'm going to go back into the terminal and replace local host here with what I just copied.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=91)** Also when you do this, don't forget to add the colon latest to the end of that line so that Kubernetes knows which version of the image to fetch.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=101)** Next I'm going to create a variable underneath this called imagePullSecretName.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=106)** This secret is going to specify the log-in credentials for the registry that we mentioned above.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=112)** Let's call the secret explore California.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=115)** Unfortunately, creating an image pull secret from a template is not straightforward and it isn't easily possible from helm The easiest way to create this is by using kubectl.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=126)** To do that let's even close this file and back in our terminal let's type kubectl create secret docker registry --help.
>
> **[2:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=136)** Now, there's a lot of options here but what we want is something similar to this example right here.
>
> **[2:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=142)** We want to create a secret which we'll call explore California.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=147)** And we want to specify the server that we're connecting to, the username that we're connecting as which is going to be AWS and the password that we will use for that user which we've saved earlier.
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=160)** Let's run this command now.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=162)** So we're going to run kubectl create secret Docker registry.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=165)** The first option that we need to provide, is the docker server.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=169)** This is going to be the registry that we copied earlier.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=172)** The second argument that we're going to provide is the user.
>
> **[2:57](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=177)** And we know that that's going to be AWS, so let's provide that here.
>
> **[3:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=180)** The next option that we're going to provide is the password which we already have because we saved a password variable earlier.
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=189)** And once again, we don't need the docker email that was in that example because our user doesn't have an email attached to it.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=195)** With all that, let's go ahead and run this command.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=198)** So we forgot to provide the name of the secret, which goes between the registry and docker server.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=204)** So let's call it explore California.
>
> **[3:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=206)** Our secret has been successfully created, so it's finally time to modify our helm chart.
>
> **[3:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=212)** So let's start by opening our deployment template.
>
> **[3:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=216)** So underneath line 17, we're going to add our image pulL secret.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=220)** We're going to do so by adding a new key called imagePullSecrets and underneath there creating an array with one element whose key is name and the value is going to be the image pull secret name that we created earlier.
>
> **[3:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=235)** Like this.
>
> **[3:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=236)** That's the only change we need to make here.
>
> **[3:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=238)** Next let's open up our service template.
>
> **[4:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=242)** As I mentioned earlier our service is using a ClusterIP type.
>
> **[4:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=246)** For the AWS Load Balancer Controller to work, it requires that this type be of NodePort type.
>
> **[4:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=252)** NodePort types are very similar to mounting a port with docker run with the dash dash publish option that we did earlier.
>
> **[4:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=260)** In effect what's happening here is the services creating a port inside of the node that's running your pod.
>
> **[4:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=267)** This way when it connects to the port, it's connecting literally on a port inside of the node that the pod is running on.
>
> **[4:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=276)** So we're going to go ahead and make that change.
>
> **[4:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=278)** Finally, we're going to open the ingress template.
>
> **[4:40](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=280)** The first change we need to make, is to add the annotations that I mentioned earlier.
>
> **[4:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=284)** So let's add those annotations here.
>
> **[4:47](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=287)** The first annotation that we're going to add is to tell Kubernetes that we want to use the AWS Load Balancer Ingress Controller.
>
> **[4:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=294)** To do that we're going to type [kubernetes.io/ingress.class](https://kubernetes.io/ingress.class).
>
> **[4:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=299)** And we're going to give this a value of alb.
>
> **[5:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=302)** Next, we're going to add an annotation that tells this Ingress Controller that we're using a NodePort in our service, and that it should route traffic directly into the nodes.
>
> **[5:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=312)** To do that we're going to add alb.ingress.[kubernetes.io/target-type](https://kubernetes.io/target-type) and we're going to specify ip here.
>
> **[5:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=321)** Finally, we need to tell this Ingress Controller that Load Balancer that we want to create, it's going to be facing the internet.
>
> **[5:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=327)** To do that, we're going to add another annotation called alb.ingress.[kubernetes.io/scheme](https://kubernetes.io/scheme).
>
> **[5:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=336)** and we're going to set this to internet facing.
>
> **[5:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=338)** Finally, the last change that we need to make is with our host.
>
> **[5:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=342)** Since we were using the NGINX Ingress Controller earlier, while testing, we had to specify the host that we wanted to connect to.
>
> **[5:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=349)** However, when we create this Load Balancer, AWS is going to create a DNS record for us.
>
> **[5:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=356)** Therefore, if we were to leave this host clause here, we would never actually route to it.
>
> **[6:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=363)** To solve that, all we need to do is just remove it.
>
> **[6:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=366)** Now that we've made these changes we're done.
>
> **[6:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=369)** So let's quit our editor and install this application.
>
> **[6:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=372)** To install it I'm going to use helm upgrade.
>
> **[6:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=374)** So I'm going to do helm upgrade --atomic --install.
>
> **[6:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=379)** And then I'm going to provide the name of the chart, which is explore California website, and then I'm going to provide the path to the chart, which has dot slash chart.
>
> **[6:26](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=386)** Before I run this I'm going to add another option, the values option.
>
> **[6:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=391)** This will tell it where our values file is.
>
> **[6:33](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=393)** In our case our values files located at ./chart/values-aws.yaml Let's run this.
>
> **[6:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/deploying-our-helm-chart-into-aws-eks-with-make?u=76281980&t=401)** And as you can see, our application was installed into our Kubernetes cluster, just like it was when we were locally testing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9), aws (9), docker (8), kubectl (3), node (2)
> **Code Keywords:** let (17), finally, (3), this. (2), type. (2), type, (1)
> **Env Vars:** aws (7), ecr (2), eks (1), nginx (1), dns (1)
> **Prerequisites:** install (5)
> **Exercise Files:** template (4)
> **Code Identifiers:** imagepullsecretname (1), pull (1), imagepullsecrets (1)
> **URLs:** [kubernetes.io](https://kubernetes.io) (3)
> **Analogies:** similar to (2), just like (1)

#### The smoke test: Does it work?
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=0)** - Alright, now comes the moment of truth.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=2)** Did we actually install the app?
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=5)** Is explore-California, actually available on the internet?
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=10)** Let's find out.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=11)** So to find out, we're going to need to look at the ingress.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=14)** So let's describe it with coop CTL, describe ingress and then explore California website.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=21)** As we can see here on the third line, a DNS record was created for us here on K type and default, et cetera.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=30)** .US-east-2.elb.[amazonaws.com](https://amazonaws.com) This was created by the ingress controller.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=36)** So we're going to do is we're going to copy this and we're going to open a web browser and see how we did.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=42)** So it can take a little while for this to start up because the way the ingress controller works is it creates a load balancer called an application load balancer on the backend.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=52)** When that application load balancer gets created, it can take some time for it to become ready.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=56)** That period of time is called the provisioning time.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=59)** And the length of time that takes can vary based on multiple factors.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=63)** A convenient way of waiting for this website to start up without having to look at our web browser for awhile is to use a do while loop inside of your terminal.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=73)** So the way to write that here is we're going to say while true, do, and then done.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=80)** So we're using while true here to specify an infinite loop.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=84)** We're just going to wait until this website becomes available.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=87)** Inside of this do we're going to run curl against that website to basically wait for that website to become available?
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=95)** And if it is available, we'll break out of the while loop.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=98)** If it's not available, we'll sleep for a second and then try again.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=102)** So let's write that logic here.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=104)** So I'm going to write curl, and then I'm going to add a new command line option here called connect hyphened timeout, which is just a way of telling curl to wait up to one second before failing, if it's not able to load the website.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=119)** And then I'm going to paste the URL that we saw earlier.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=123)** Now, if this succeeds I want to break, so I'm going to use the double ampersand that we've mentioned earlier to do that.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=130)** And I'm going to provide the break command here to break out of the wild loop.
>
> **[2:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=134)** If it doesn't succeed, I want to sleep for a second before trying again.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=138)** So on the right side of this, I'm going to provide sleep.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=140)** And then one second here.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=143)** So let's go ahead and run this and see what happens.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=145)** Now, this is a little anticlimactic because we didn't have to wait at all.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=150)** While we were writing that command, our website became available as you can see by the HTML here.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=155)** So we can see in our browser that we are live, Explore California is running.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=162)** Boom, we did this.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=164)** We are online. Congratulations.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/the-smoke-test-does-it-work?u=76281980&t=166)** You are now Kubernetes engineer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), break, (1), this, (1), this. (1)
> **CLI Commands:** curl (3), find (2)
> **Env Vars:** ctl (1), dns (1), url (1), html (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is called (1), is a  (1)
> **URLs:** [amazonaws.com](https://amazonaws.com) (1)
> **Prerequisites:** install (1)
> **Speakers:** - alright (1)

#### Cleaning up
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=0)** - [Instructor] Congratulations!
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=1)** You've shipped "Explore California" all the way to production and it's in Kubernetes.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=6)** You even tested it locally, with Kubernetes.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=9)** You did an amazing job. You should pat yourself on the back.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=12)** Let's clean up.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=13)** I'm going to go back to my terminal here, and first I'm going to uninstall the Helm chart for my EKS cluster, with helm uninstall explore california website.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=24)** Next, we're going to delete the client cluster that we created earlier.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=27)** We didn't need to uninstall anything here, because we're deleting the cluster into which our app was installed, so it's going to automatically go away when we do that.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=35)** Now, if you took the challenge earlier, you would have a make rule in here, called make delete kind cluster.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=43)** So I'm going to run that now, but if you didn't write this, what you want to do is, you'll want to first stop the Docker registry with this command, and then you're going to want to remove it, with docker rm.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=55)** Afterwards, you're going to want to run kind delete cluster, and then provide dash dash name [explorecalifornia.com](https://explorecalifornia.com).
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=63)** Finally, we're going to get rid of our local Docker images by searching for anything that has explorecalifornia in their name, capturing their image IDs, and then deleting them mercilessly.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=74)** We can do it like this.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=76)** First, we'll start by typing docker images, then we'll grep for anything that has explorecalifornia in the name.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=82)** We'll use a tool called awk, or A-W-K, to print the third field that appears in the output, which is our ID.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=92)** Let's test this before we delete anything.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=95)** As you can see, it returned the IDs of all the explorecalifornia images that we created.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=101)** To further verify this, I'm just going to run docker images and grep explorecalifornia afterwards, without the A-W-K.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=108)** And as you can see, the line count matches the line count that we got before.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=113)** So let's nuke these images from orbit, by using xargs, which will feed all of the output that we receive into the next command, and the next command we're going to run is docker rmi, that's for remove image, dash f, or forcefully remove.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=130)** Now our images have been deleted.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=131)** Some of these images are showing that they don't have an image, but that's okay.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=135)** It just means that it was associated with an image that no longer exists.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/cleaning-up?u=76281980&t=139)** That's it! We're done!

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), make (2), grep (2), rm (1), awk (1)
> **Code Keywords:** delete (4), let (3), this, (2), finally, (1), this. (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)
> **Env Vars:** eks (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=0)** - [Instructor] This course aim to show you how easy it can be to get started with Kubernetes.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=4)** We proved that we could deploy a simple website hosted by Explore California, a fictitious travel provider into a local Kubernetes cluster with kind, helm, and MEC.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=15)** We then use these same tools, and deployed our website into a real Kubernetes cluster hosted by AWS Elastic Kubernetes Service or EKS.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=25)** Learning the internals of Kubernetes is a great next step for increasing your fluency in the SICO system.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=31)** As we saw in this course, Kubernetes is made up of several different components, and supports a wide variety of resources.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=37)** It can even support custom resources that you create through custom resource definitions or CRDs.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=43)** The best way to learn it's nuts and bolts, is to install Kubernetes from scratch.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=49)** Kubernetes The Hard Way by Kelsey Hightower is an excellent resource in accomplishing this.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=54)** Hard Way guides you in installing Kubernetes from nothing.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=58)** In doing so, you'll learn about etcd, it's underlying distributed database, container network interfaces, or CNIs, much more about container runtimes and more.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=69)** Visit the link below to get started.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=71)** If you're up for an even bigger challenge, consider getting your certified Kubernetes administrator and certified Kubernetes application developer certifications.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=81)** Through practicing for these certifications, you'll learn a lot more about the machinery that makes core Kubernetes resources like deployments and pods function.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=90)** You'll also learn of other best practices for scaling production deployments like the one we did in this course.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=95)** Visit the link here to learn more.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=97)** Finally, the best way to learn any new platform is like learning anything else, practice, practice, practice.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=104)** Do you have a website or an application that you've been looking to make changes to?
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=108)** If so, then getting them running in Kubernetes is great practice.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=111)** You can even package them as helm charts and learn more about the fancy stuff that you can do with helm.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=116)** The sky is the limit.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=118)** I hope you enjoyed our Explore California adventure as I did in creating it.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-your-first-project-2021/next-steps?u=76281980&t=123)** Happy helming.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), function (1), finally, (1), else, (1)
> **Env Vars:** mec (1), aws (1), eks (1), sico (1)
> **CLI Commands:** aws (1), make (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** as we saw (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with Kubernetes]]
← [[Learning Kubernetes]] | **2 of 6** | [[Kubernetes- Essential Tools]] →

## Appears In

- [[Getting Started with Kubernetes]]

## Related Courses

_Courses sharing skills:_

- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Kubernetes
- [[Securing Containers and Kubernetes Ecosystem]] — Kubernetes
- [[Kubernetes- Cloud Native Ecosystem]] — Kubernetes
- [[Kubernetes- Microservices]] — Kubernetes
- [[Kubernetes- Essential Tools]] — Kubernetes

---

[↑ Back to top](#)