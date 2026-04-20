---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: kubernetes-essential-tools
url: "https://www.linkedin.com/learning/kubernetes-essential-tools"
duration_minutes: 43
duration: 43m
level: Intermediate
updated: 8/11/2023
learners: 18758
skills:
  - Kubernetes
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHXiJGfHXz6tA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691433502919?e=2147483647&amp;v=beta&amp;t=9XMOArS_-YBHaPkWfM2SYqX7DDAXwaJ-k5t_Yuz78zw"
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

![Kubernetes: Essential Tools](https://media.licdn.com/dms/image/v2/D560DAQHXiJGfHXz6tA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691433502919?e=2147483647&amp;v=beta&amp;t=9XMOArS_-YBHaPkWfM2SYqX7DDAXwaJ-k5t_Yuz78zw)

# Kubernetes: Essential Tools

> Are you experienced with Kubernetes, and looking for the right tools to improve your development workflow? This course with Edidiong Asikpo details the essential tools for running, developing, deploying, and monitoring applications running on Kubernetes. Learn about command line tools; tools for running Kubernetes like minikube, kubectl, and kubie; and development tools such as Telepresence, Tilt,

> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools) | 43m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Edidiong Asikpo]]

## Skills Covered

- Kubernetes

## Table of Contents

### Introduction

#### Unlocking Kubernetes: Your essential tools guide
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=0)** - [Edidiong] Have you been trying to find the right Kubernetes tool that would enable you to improve your development workflow?
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=5)** Then you're in luck.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=7)** This course highlights the essential Kubernetes tools for running, developing, deploying and monitoring applications running on Kubernetes.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=14)** We'll also go about the benefits, use cases and demos of these tools.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=19)** I'm Edidiong Asikpo, a CNCF ambassador, certified Kubernetes application developer and senior developer advocate.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=26)** I'm excited to share my learnings about these Kubernetes tools with you.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** cncf (1)
> **Speakers:** - [edidiong] (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/prerequisites?u=76281980&t=0)** - [Instructor] So understand what's being discussed in this course, you need to have a basic knowledge of microservices, containerization, and Kubernetes.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-essential-tools/prerequisites?u=76281980&t=8)** Thankfully, there is an amazing Kubernetes course on LinkedIn Learning by Kim that will get you up to speed if you're not familiar with these technologies.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-essential-tools/prerequisites?u=76281980&t=15)** Do check it out.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### An overview of essential Kubernetes tools
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=0)** - [Narrator] This course is divided into five chapters, each focused on a specific area of Kubernetes tools.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=6)** The first, Kubernetes command line tools, tools surrounding Kubernetes, Kubernetes development tools, Kubernetes deployment tools, and finally, Kubernetes monitoring tools.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=17)** Chapter one is focused on covering Kubernetes tools that can be used directly on your terminal.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=22)** These tools make you work faster, enable you to use fewer commands, and so much more.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=28)** You need to run Kubernetes somewhere.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=30)** This chapter highlights tools that can be used to run Kubernetes, their benefits and use cases.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=35)** Developing applications on Kubernetes can be quite challenging.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=38)** The tools that will be discussed in this chapter will show you how to accelerate your inner development loop, speed up Kubernetes development, and more.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=46)** Chapter four showcases the tools that can be used to deploy applications, services, and other Kubernetes resources.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=53)** And finally, in chapter five, we'll learn about the different essential tools from monitoring everything going on in an application running on Kubernetes, and the Kubernetes application itself.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=63)** Now that you're fully aware of what to expect in this course, let's dive right into it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **Tools:** command line (1), terminal (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 1. Kubernetes Command-Line Tools

#### kubectl
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=0)** - In today's world, almost everyone knows about social media and uses it.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=5)** Kube CTL is similar to social media in the world of Kubernetes.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=9)** It is one of those command line tools almost every Kubernetes developer and administrator knows about and actually uses.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=16)** And this is because Kube CTL allows you to perform every possible Kubernetes operation thanks its ability to communicate with the Kubernetes Clusters control plane.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=26)** This allows you to run commands against Kubernetes clusters, inspect and manage cluster resources, deploy applications and even view logs as well.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=35)** Kube CTL's installable on macOS, Windows, and various Linux platforms.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=40)** The fact that it can be installed seamlessly on all three operating systems is one of the many reasons for its widespread usage.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=47)** This tool has been pronounced differently by many people over the years.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=51)** Some people call it Koob control.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=53)** Others call it Koob cuddle.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=55)** And if you're like me probably call it KubeCTL, and that's not even all.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=59)** There are still people who call it Koob cuddle, Koo-bay cuddle and Koo-bae cuddle.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=65)** Even though there is no universal way to pronounce this tool, two of the most common ways of seeing it being pronounced it's either as Koob cuddle or Kube XRL.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=74)** But for the purpose of this video I'll be pronouncing it as Kube CTL.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=78)** But if you've bumped into it being pronounced differently just remember that it's the same Kubernetes command line tool we're all referring to.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=86)** This is the standard format of a Kube CTL command.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=88)** It has Kube CTL, the command, the type, name, and flag.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=94)** For context, the 'command' is used to specify the action to perform like creating, deleting, getting, or applying the Kubernetes resource.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=102)** "Type" on the other hand is used to specify the Kubernetes resource.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=106)** This can be a resource provided by Kubernetes like a pod or a service or a custom resource definition you've created yourself.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=113)** The name option is used to specify the name you had given the resource, and if you omit the name Kube CTL will return every single resource specified by the type.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=122)** Finally, we have the flag, which is used to specify any global or command specific option like a file name or an output type.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=131)** The Kube CTL command has compulsory and optional parts.
>
> **[2:14](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=134)** The Kube CTL and command options are compulsory but the type, name and flags are optional.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=140)** Here's an example of what Using the full Kube CTL command would look like.
>
> **[2:24](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=144)** Kube CTL gets pods, helloWorld, -oh yaml..
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=149)** This will make a call to the Kubernetes API and I'll put the configuration of a pod helloWorld in yaml format.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=155)** Assuming you wanted to omit the name and flag options, the command would look like this.
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=160)** Kubectl gets pods.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=162)** Running this Kube CTL command will return all the pods in the Kubernetes cluster.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=167)** Sometimes you want to be more specific about the resource you want to be returned and this is where the name option comes in.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=174)** As you can see. the Kubernetes API returns only the port named helloWorld.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=179)** There are two configuration styles in Kubernetes, the Imperative and the Declarative configuration styles.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=185)** Kube CTL allows you to use both.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=188)** For instance, the Kube CTL creates deployments "earning-it-is-fun--image mongo" command will Imperatively tell Kubernetes to deploy a container with the Mongo image.
>
> **[3:19](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=199)** While kubectl apply-f learning-is-fun.yaml will provide a declarative manifest to Kubernetes which will then be in charge of creating the deployment as you define in the manifest.
>
> **[3:30](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=210)** Use of imperative command is typically faster, but can oftentimes include errors.
>
> **[3:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=215)** The declarative style on the other hand, is less error prone and it's easier to update.
>
> **[3:40](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=220)** For more information about Kube CTL and its list of operation, check out the official Kubernetes documentation.

> [!info]- Semantic Content
>
> **Env Vars:** ctl (15), api (2), xrl (1)
> **CLI Commands:** kubectl (3), mongo (2), make (1)
> **Code Keywords:** type, (2), type. (2), finally, (1), this. (1)
> **Code Identifiers:** helloworld (3), macos (1)
> **Analogies:** similar to (1), for instance (1)
> **File Paths:** learning-is-fun.yaml (1)
> **Tools:** command line (1)
> **Speakers:** - in (1)

#### kubie
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=0)** - [Instructor] We'll often have to work with multiple clusters when using Kubernetes, and switching from one cluster to another can be challenging and even lead to mistakes like running a command on the wrong cluster or repeatedly running the long kubectl config command every time we want to make a switch.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=16)** And since the goal of every development team is to build and ship features faster, we must adopt tools that make software developments fast and improves our developer experience.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=26)** Kubie is one of those tools.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=28)** This tool offers context switching, namespace switching, and prompt modification in a way that makes each shell independent from each other.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=37)** Just like kubectl, Kubie can be installed on all operating systems.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=42)** If you head over to the official GitHub page, you'll find the installation process for each operating system.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=50)** Go ahead and install it on your computer.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=53)** With Kubie now installed on your local machine, you can use it to switch between Kubernetes clusters easily and faster.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=61)** For instance, instead of running kubectl config get-contexts to see the list of clusters available on your computer and then running kubectl config use context the context name to switch to the cluster of choice, you can run Kubie CTX to display a selectable menu of clusters in a matter of seconds and then use your arrow button to navigate and select your cluster of choice.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=95)** Amazing, right? I know!
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=97)** Another cool thing about Kubie is its ability to spawn a new shell and status form so that we can see the context and the namespace we're working on.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=106)** For instance, after running kubectl config, use context docker-desktop command, we'll need to rerun kubectl config get-contexts to see where the asterisk sign is showing to be sure that the switch initiated was successful.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=119)** But when we run a Kubie CTX command and select the cluster of choice, the namespace and context of the cluster will automatically be displayed, allowing us to identify which cluster we're on quickly.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=138)** This feature addresses mistakes like deploying an update to the production environment instead of the testing environment, because you can clearly see which environment you're currently working on.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=147)** Kubernetes has so many components and things to learn about, so removing one less command from your mind and being faster when iterating with multiple clusters can be very beneficial.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=158)** Visit Kubie's official GitHub page to learn more and discover other commands not discussed in this video.

> [!info]- Semantic Content
>
> **CLI Commands:** kubectl (6), make (2), find (1), docker (1)
> **Code Keywords:** switch (4)
> **Analogies:** for instance (2), just like (1)
> **Env Vars:** ctx (2)
> **Tools:** github (2)
> **UI Navigation:** switch to (1), select the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### K9s
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=0)** - [Instructor] Remembering the correct kubectl commands for performing several operations in your Kubernetes cluster can be quite challenging, especially for people that are new to Kubernetes.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=10)** K9s, sometimes called K9s, is a Kubernetes command line tool that addresses this challenge.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=16)** "What is K9s?" you may ask.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=18)** Don't worry. I'll tell you.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=20)** K9s is a terminal UI for Kubernetes that enables you to easily navigate, observe and manage your applications in the Kubernetes cluster in a visually pleasing manner without writing tons of kubectl commands.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=33)** K9s can be installed on Linux, macOS and a Windows machine.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=37)** Their are official documentation includes several ways to install it on your preferred operating system.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=42)** I'm using a macOS for this video, so I'm going to install it using Homebrew by running the brew install k9s command in my terminal.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=55)** After installing K9s into your computer, you have to run the k9s command on your CLI to initialize the tool.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=62)** On doing this, a terminal UI showing you the context you're currently running on and the Kubernetes resources inside that context will be displayed on your screen.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=77)** If you're familiar with Vim commands, you'll be right at home with K9s as it's inspired by some Vim commands.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=83)** For instance, if you wanted to view any Kubernetes resource in your cluster, you'd do that by perfecting the resource type with a colon.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=101)** You can also search for a specific resource type by using the slash command.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=108)** Switching from one Kubernetes context to another is also possible with K9s.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=112)** To do this, type the colon with ctx.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=140)** And if you need to see other operations that you can perform using K9s, click on the question mark and it will display you with a list of hotkeys available in the active window.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=164)** To leave the terminal UI, press Control + C.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=169)** While you can achieve all the functions that K9s gives you through kubectl commands, most people find the visual layout presented by K9s easier to utilize.
>
> **[2:58](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=178)** If you want to find more details about this tool and other operations that can be performed using it, visit the official documentation.

> [!info]- Semantic Content
>
> **Tools:** terminal (4), vim (2), command line (1)
> **CLI Commands:** kubectl (3), find (2), brew (1)
> **Prerequisites:** install (3)
> **Code Keywords:** this, (2)
> **Code Identifiers:** macos (2)
> **Definitions:** is a  (2)
> **Env Vars:** cli (1)
> **UI Navigation:** click on (1)


### 2. Tools for Running Kubernetes

#### minikube
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=0)** - [Instructor] When you begin your Kubernetes learning journey, you typically start by reading some articles or watching videos to get a sense of what it entails before getting hands-on with Kubernetes.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=11)** Minikube is a tool to use when you start this hands-on phase, and this is because it eases up the process of running Kubernetes locally and makes it easier for beginners to learn and develop on Kubernetes.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=23)** Before installing minikube, you need to have a continual virtual machine manager like Podman, Docker, or Hyper-V or even any other tool that you currently use.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=34)** Minikube is installable on Linux, macOS, and Windows.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=38)** The installation processing guide is available under official documentation.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=43)** Like the folks at minikube like to say, Kubernetes is just a single command away when using minikube.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=49)** For instance, running the minikube start command will automatically create and initialize a Kubernetes cluster for you.
>
> **[0:58](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=58)** With the cluster now running, we can run kubectl commands like kubectl get pod-A to see the list of all the pods in the cluster or kubectl creates mongoly--name mongo to create a deployment named mongoly.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=77)** Minikube also offers several options to enable you to manage your Kubernetes cluster effectively.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=83)** For instance, you can use Kubernetes without impacting deployed applications using the minikube post command and even unpause a paused instance with the minikube unpause command.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=97)** You can also go as far as halting the cluster with the minikube stop command.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=105)** Minikube has a number of great features, but here are the two that I think you should definitely know about.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=111)** The first one is the minikube add-ons feature which helps to add extra components and features to minikube.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=117)** To see the list of add-ons available at minikube, run the minikube add-ons list command on your CLI.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=123)** And if you want to enable an add-on run the minikube add-ons enable command on your CLI.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=129)** The second one is the Kubernetes versions feature.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=132)** This feature is particularly useful for people who work with different versions of Kubernetes, and this is because it actually allows you to pause the version of Kubernetes that you want to run by adding the Kubernetes version flag to the minikube start command.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=146)** This feature is also very useful for debugging application issues that rely on Kubernetes features that may have been updated from one release to another.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=155)** Learn more about minikube by visiting the official website.

> [!info]- Semantic Content
>
> **CLI Commands:** kubectl (3), docker (1), mongo (1)
> **Env Vars:** cli (2)
> **Analogies:** for instance (2)
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### kubeadm
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=0)** - [Instructor] Kubeadm, also known as kube admin, is an excellent tool for creating Kubernetes clusters quickly.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=6)** By running a series of free checks kubeadm ensures that your server has all the components and configurations needed to run Kubernetes.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=15)** Kubeadm's flexibility makes it an ideal choice for many use cases, like the automation of creating clusters, using script or tools like Ansible, its ability to be used as a testing and production environment, since it can be used on both local and remote clusters.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=32)** And finally, being able to customize and configure cluster components.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=37)** There are a couple of things you need to have to be able to install and use kubeadm effectively.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=42)** They include a compatible Linux host, two gigabytes or more RAM per machine, two or more CPUs, a full network connectivity between all machines in the cluster, a unique hostname, MAC address, and product_uuid for every node, specific ports open on your machine, and finally, disabling swap to enable kubectl and kubelet to work as expected.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=67)** Setting up a Kubernetes cluster with kubeadm is a multi-step process.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=72)** First, you'd need to download and install a container runtime, kudeadm, kubelet, and kubectl on all nodes if you don't already have them.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=82)** Kubelets and container runtime have a property called cgroup driver, which is essential for the management of cgroups on Linux machines.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=90)** So the second step would be to actually configure a cgroup driver.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=94)** The test step is initializing kubeadm on the master node to set up the control plane.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=100)** On a successful kubeadm initialization you should get the output with the kubeconfig file location and the join command with the token.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=108)** Copy and save this join command with that token.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=111)** Since kubeadm does not configure any network plugin, you'd need to install a network plugin of your choice, and then you'll join the worker nodes to the master node using the kubeadm join command you saved earlier while setting up the master node.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=125)** To confirm if the Kubernetes cluster is working as expected deploy and validate the sample app on the cluster.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=132)** Knowing how to use kubeadm is required for the Certified Kubernetes Administrator exams and also the Certified Kubernetes Security Specialist examinations.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=141)** So if you plan to take any of these certification exams, I'd recommend that you visit kubeadm's official documentation to learn more.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (3), install (3), you need to have (1), set up (1), initialization (1)
> **CLI Commands:** node (4), kubectl (2), ansible (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Code Keywords:** finally, (2)
> **Env Vars:** ram (1), mac (1)
> **Code Identifiers:** product_uuid (1)
> **Speakers:** - [instructor] (1)

#### kOps
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=0)** - [Instructor] kOps is a Kubernetes tool that enables us to create, destroy, upgrade, and maintain production grade Kubernetes clusters.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=8)** Many people in the Kubernetes community think of it as the easiest way to get a production-grade Kubernetes cluster up and running.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=17)** Some fantastic features of kOps include its ability to automate the provisioning of highly available Kubernetes clusters, auto-complete commands written in the command line, and enable templating and dry run modes for creating manifests.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=31)** To install kOps, you need to have kubectl installed on your computer.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=36)** Other than that, kOps can be installed on all operating systems, including macOS, Linux, and Windows.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=43)** kOps can be deployed to AWS, GCE, Azure, DigitalOcean, and so much more.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=49)** The official documentation explains the entire process.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=53)** There are a ton of kOps commands that exist, but here are the most common ones.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=57)** The first one on the list is the kOps create cluster command, which is used to register a cluster.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=63)** This command can either be utilized using the imperative or declarative configuration styles.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=68)** We also have the kOps updates cluster command, which creates or updates the cloud resources to match the cluster specification.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=76)** The kOps get cluster command leads all the clusters in the registry.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=80)** As the name implies, the kOps delete cluster command deletes a particular cluster's cloud resources and removes the cluster from the registry.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=88)** Finally, we have the kOps toolbox template command, which enables you to generate a kOps specification using go templates.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=97)** Do you want to learn more about kOps and utilize it yourself?
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=101)** Then visit the official website.

> [!info]- Semantic Content
>
> **Code Identifiers:** kops (13), macos (1)
> **CLI Commands:** kubectl (1), aws (1)
> **Code Keywords:** delete (1), finally, (1)
> **Env Vars:** aws (1), gce (1)
> **Documentation:** specification (2)
> **Prerequisites:** install (1), you need to have (1)
> **Tools:** command line (1)
> **Exercise Files:** template (1)

#### Managed Kubernetes platforms
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=0)** - [Instructor] Even though Kubernetes includes many built-in features and is designed to simplify container orchestration, it can oftentimes be challenging to configure, deploy, and manage.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=11)** Oftentimes, organizations who do not have in-house expertise, time, or resources needed to do this will adopt Managed Kubernetes platforms to counter the complexity and stress of running, deploying, and managing Kubernetes.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=25)** Managed Kubernetes clusters are third-party providers responsible for some or all of the work necessary to successfully set up and operate Kubernetes.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=35)** Depending on the provider, "manage" can refer to anything from complete hosting and operation to hosting the preconfigured environment, and even dedicated support as well.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=46)** Using a Managed Kubernetes platform saves costs, makes cluster scaling easier, and provides multicloud portability.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=54)** It also makes the management and support of containers and cluster application services, such as monitoring, login, and security, easier.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=63)** There are a ton of Managed Kubernetes platforms out there, but here are 10 of the most popular and used ones.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=70)** None of the existing Managed Kubernetes platforms are created the same way.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=74)** Some have more features than others while some are created to target specific issues that others are not targeting.
>
> **[1:21](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=81)** And that's why it's always important to consider some factors like pricing, security compliance, ease of use, independence, authentication and access control, high availability, monitoring, logging and self-healing options before choosing a Managed Kubernetes platform of choice.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=100)** Starting with local Kubernetes tools, like minikube or kind, is great.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=104)** But when your company is ready to scale up to many missions and have higher availability, using Managed Kubernetes platforms are the best bet.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (1), set up (1)
> **Code Keywords:** self (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Kubernetes Development Tools

#### Telepresence
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=0)** - [Instructor] Adopting Kubernetes was supposed to enable you to code, test, and deploy features faster.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=5)** So why is it slowing you down?
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=7)** Don't you just miss the time when delivering new features used to be fun and quick?
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=11)** You could make a code change and click reload to see the impact of your code changes immediately.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=16)** But with containerized environments like Kubernetes, you now have to wait for the updated application to be containerized, pushed to a registry, and deployed before seeing the impact of your code changes.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=27)** These extra steps make the inner development loop of containerized environment slower than it was with monolithic environment.
>
> **[0:34](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=34)** So in order for you to truly enjoy the benefits of Kubernetes, you need to use a tool that accelerates your inner development loop.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=41)** And this is where Telepresence comes in.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=43)** Telepresence is an open-source tool that lets you see the impact of your code changes interacting with other remote services and dependencies without waiting for the slow build/push/test cycle.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=54)** Let me show you how Telepresence works using a cloud-native application called Emoji Vote.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=59)** Emoji Vote comprises of three microservices, the web, emoji, and voting service.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=65)** The web service is a frontend service that serves this UI, while the emoji and voting service are backend services that handle the display and voting of these emojis.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=75)** As an application developer, I've made some updates to the web service and confirmed that it's working locally, but before pushing it to production, I must also confirm that it will work effectively with its dependent services, which are the emoji and voting service.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=90)** To use Telepresence, you first need to install it into your local machine and then use it to connect your local machine to the remote cluster.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=98)** To do this, go to app.[getambassador.io](https://getambassador.io), create an account, and log in using your preferred authentication methods.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=105)** I already have an account, so I'm just going to log in using GitHub and select an organization and team.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=112)** Click on the Get Started tab for a visual onboarding flow for application developers and platform engineers.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=117)** In the Application Developer section, click on Connect and follow the instructions displayed to install Telepresence into your local machine.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=125)** I already had Telepresence installed, so I'll just proceed to run the Telepresence login and connect command on my CLI, which will log me into Ambassador Cloud and connect my local machine to the remote Kubernetes cluster, which contains the services and dependencies of the Emoji Vote application I want to test.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=143)** As you can see, my local machine is now connected to the cluster.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=146)** This means I can now assess all the services in the remote cluster and see that they're running locally.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=151)** With this, we can now proceed to create what we call an intercept.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=154)** The Telepresence intercepts your route of traffic intended for a remote service to a local service.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=159)** In my case, I want to reroute the traffic intended for the web service in the remote cluster to the web service running on my local machine.
>
> **[2:46](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=166)** To do this, I'll click on Connect.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=169)** Select the Emoji Vote namespace.
>
> **[2:51](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=171)** Click on web service and add 8080 since that's the port the local service is running on.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=176)** Finally, I'll click on the Intercept button.
>
> **[3:04](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=184)** Telepresence will generate a secured preview URL showing the results of the local web service running on my machine interacting with the emoji and voting backend services in the remote Kubernetes cluster.
>
> **[3:15](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=195)** And any updates I make locally will instantly show up.
>
> **[3:18](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=198)** I can then share the secured URL with my teammates for collaborative development and debugging.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=204)** Telepresence cuts down the unnecessary parts of the containers in our dev loop and mitigates integration issues since your development environment now mirrors the life production environment.
>
> **[3:34](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=214)** Do you want to learn more about Telepresence?
>
> **[3:36](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=216)** Then visit the official website.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1), select the (1)
> **Code Keywords:** this, (3), let (1), case, (1), finally, (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (2), cli (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **URLs:** [getambassador.io](https://getambassador.io) (1)
> **Tools:** github (1)

#### Tilt
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=0)** - [Instructor] Whether you're a developer or operator, you need a developer environment to complete some of your day-to-day tasks.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=6)** So you typically want a dev environment that allows you to move as quickly as possible and focus on only the things that actually matter.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=14)** Tilt is one of those tools that can save you a lot of time in the development process.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=18)** This is due to the ability to enable local continuous development and deployment of microservice-based applications.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=25)** There are several benefits of using Tilt.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=27)** The first one is that it enables you to understand and orchestrate your services.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=32)** You can also get smart rebuilds and live updates wherever you are.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=36)** Also, Tilt supports automatic deployment of your microservice-based applications during development because it monitors application files and then automatically builds, pushes, and deploys any changes to bring your environment up to date in real time.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=51)** Finally, it has a command-line and web user interface for monitoring the deployment of an application and showing logs, including other useful information about the current deployment.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=62)** This means you no longer need to have multiple terminals open in order to understand what your microservices are actually doing.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=69)** Tilt can be installed on macOS, Linux, and various Windows machines.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=73)** Their official documentation has instructions on how to install it in any operating system of your choice.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=80)** Tilt works in two phases: the application configuration phase and the application deployment phase.
>
> **[1:26](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=86)** The application configuration phase is where you'd set up all the necessary requirements to make the application get successfully deployed to Tilt.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=94)** This oftentimes requires the creation of a Dockerfile, Kubernetes manifest file, and a Tiltfile.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=100)** Once all of these files have been set up in the directory of the application, then we can proceed to build and deploy the application in the application deployment phase.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=109)** This is done by running the tilt up command inside the product directory of your terminal.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=114)** Once the console has started, a console UI and a web UI will start automatically to provide you with information about the build and deployment process.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=123)** While the tilt up command is running, the build, push, and deployment cycle of your application will occur every single time a change is made to your code.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=131)** Finally, to remove the application, you'd have to exit it from either the console UI or via your terminal by typing the tilt down command.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=140)** You can learn more about Tilt by visiting their official website.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), interface (1)
> **Prerequisites:** set up (2), install (1)
> **Tools:** terminal (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### Lens IDE
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=0)** - [Instructor] Even though Kubernetes is one of the most popular container orchestrators available today, one thing it is not known for is its simplicity.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=7)** For users, navigating through the Kubernetes text-based interface without the aid of a visual environment leads to limited visibility and even high probability of errors.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=18)** Lens, oftentimes called the Kubernetes IDE, simplifies working with Kubernetes by providing a graphical interface that allows users to deploy and manage Kubernetes clusters directly from the console.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=31)** It also provides built-in dashboards with key metrics and insights into resources running on the cluster, including access control, networking, storage, and even configurations.
>
> **[0:43](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=43)** In addition to its graphical interface, Lens has so many other great features.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=48)** Some of this includes a multi-cluster management on any cloud.
>
> **[0:51](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=51)** Lens gives users access to work with multiple Kubernetes clusters on the cloud.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=56)** This include clusters like GKE, minikube, Docker Desktop, EKAS, Rancher, and so much more.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=63)** Lens is designed to simplify the experience of working with multiple clusters.
>
> **[1:07](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=67)** It does this by enabling users to reorganize clusters into logical groups.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=72)** For users who prefer using the command line interface, Lens has a built-in terminal that uses a version of QCTL that is always API compatible with the chosen cluster.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=82)** This terminal automatically downloads and assigns the correct QCTL version in the background and maintains the correct version and context while switching between clusters.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=92)** Finally, Lens also comes with a built-in Helm integration, which enables users to quickly browse, modify configuration settings, deploy, and manage thousands of publicly available Helm charts with single-click upgrades.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=106)** Lens is a standalone application and can be installed and utilized on macOS, Windows, and some Linux flavors.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=113)** Visit Lens' official website to download and install it into your computer.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=117)** After installing Lens, the next thing you need to do is to connect it to your cluster.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=122)** Lens searches common directories on your machine for kubeconfig files and adds them to the catalog.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=127)** If you want to add additional clusters manually, you can do this by navigating to the catalog category clusters and clicking on the add cluster button in the bottom right corner.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=137)** Once your cluster is up and running, you can then view cluster details.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=140)** In this case, you can use the cluster navigation panel to switch between functional parts of your cluster.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=147)** Lens lets you view all objects and abstractions in your Kubernetes cluster.
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=151)** To see the types of resources available, select workloads, and you'll see a summary of the types and number of resources running in your cluster.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=159)** You can also add Helm repositories and enable Lens metrics as well.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=163)** Visit the official website to learn more about what makes Lens the software of choice for both developers and operators working with Kubernetes and cloud-native applications.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), finally, (1), case, (1), switch (1)
> **Env Vars:** qctl (2), ide (1), gke (1), ekas (1), api (1)
> **Tools:** terminal (2), docker desktop (1), command line (1)
> **CLI Commands:** docker (1)
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 4. Kubernetes Deployment Tools

#### Helm
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=0)** - [Instructor] Deploying your applications manually can be quite complex.
>
> **[0:03](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=3)** You typically have to define every single YAML configuration and then eventually remove and redeploy all created resources when the application needs to be updated.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=12)** Helm makes this process easier and more straightforward.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=16)** Oftentimes called the Kubernetes app store, Helm is a package manager for Kubernetes.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=21)** You can think of it as apt, Yum, or Homebrew for Kubernetes.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=25)** Helm enables you to streamline the process of deploying and managing applications on Kubernetes clusters.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=31)** Helm has a client only architecture where the client interacts directly with the Kubernetes API server to install, upgrade, query, and remove Kubernetes resources.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=41)** There are three core Helm architecture components you should be aware of.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=45)** The charts, repositories, and releases.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=48)** Charts enable you to package and manage your Kubernetes application as reusable version artifact.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=54)** Repositories, on the other hand, allow the collecting and sharing of charts while releases are instances of charts running within a Kubernetes cluster.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=62)** To utilize Helm, the first thing you need to do is install it.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=66)** Helm is available at Mac OS, Linux, and Windows in various installation formats.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=71)** The official documentation shares the details on how to install Helm.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=76)** After installing Helm, you can start utilizing its command.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=79)** For instance, if I wanted to see all the Helm repositories available on my cluster, I would run the Helm search repo command.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=93)** We can also add a charts repository by running the Helm repo at command.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=97)** Once this is installed, we'll be able to list the clusters we can install from this repository by running the Helm search repo repo name command.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=113)** Now we can proceed to install a specific charts by running the Helm install, release name, charts name command.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=119)** This will install the entire application into the Kubernetes cluster and we'll now be able to utilize it in the cloud native application we are building.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=129)** To create a Helm chart, you'd need to run the Helm create command on your terminal.
>
> **[2:13](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=133)** This will create a directory field with files and other directories.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=141)** Let's take a closer look at what this file tree looks like and the content of this file.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=146)** The templates directory is a place where you'll put all your manifest files.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=149)** Everything here will be passed on and created in Kubernetes.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=153)** On the other hand, the chart, the YAML file, is where you put the information related to your charts.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=158)** This include things like the charts version, name or description.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=162)** Adding these details is very essential as it would help you find the charts quickly if you publish them in an open repository.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=169)** Finally, we have the values of the YAML file.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=172)** This file contains defaults for variables.
>
> **[2:55](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=175)** You learned about Helm and how it makes Kubernetes deployment easier.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=179)** To learn more and continue practicing, visit Helm's official website.
>
> **[3:03](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=183)** There's also an amazing Helm tutorial on LinkedIn Learning that you should check out as well.

> [!info]- Semantic Content
>
> **Prerequisites:** install (7)
> **Env Vars:** yaml (3), api (1)
> **CLI Commands:** apt (1), yum (1), find (1)
> **Code Keywords:** let (1), finally, (1), continue (1)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), for instance (1)
> **Tools:** terminal (1)
> **Warnings:** be aware (1)

#### Kubespray
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=0)** - [Narrator] Manually deploying Kubernetes clusters can be challenging for administrators.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=4)** Luckily, there are automation tools that exist to make this easier, and Kubespray is one of them.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=10)** Kubespray is an open source tool for deploying and managing Kubernetes clusters.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=14)** It works with public cloud, on premises, bare metal and even test environment solutions, making it ideal for managing highly available clusters across multiple different platforms.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=26)** Kubespray should be used when you want to set up a production Kubernetes cluster in on-prem or bare metal environments that lack sophisticated managed solutions, such as GKE/EKS or AKS, or it can also be used when you want to set up a production grade Kubernetes cluster in cloud environments without losing control over the control plane components to the managed cloud provider.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=50)** Kubespray offers several compelling features, such as Ansible-powered deployment, which enables you to leverage the power of Ansible for managing automating Kubernetes cluster deployment.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=61)** Kubespray enables you to deploy Kubernetes clusters on various platforms, like AWS, GCP or Azure.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=69)** You can also easily scale up your cluster up and down to meet your changing needs using Kubespray.
>
> **[1:14](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=74)** Kubespray customization feature is one of my favorite features.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=78)** It enables you to tailor your cluster's deployments by modifying Ansible variables and inventory files.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=84)** To deploy Kubernetes cluster using Kubespray, you need to clone Kubespray's GitHub repository to your local machine and then install the required dependencies, such as Ansible, Python, or Jija2 You'll then need to create an inventory file to define your desired cluster configuration.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=102)** And finally, run the Kubespray Ansible Playbook command to deploy the Kubernetes cluster.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=107)** By harnessing the power of Kubespray, you can now deploy a managed Kubernetes clusters with ease and confidence.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=114)** To learn more about Kubespray, visit our official website.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (5), make (1), aws (1), python (1)
> **Env Vars:** gke (1), eks (1), aks (1), aws (1), gcp (1)
> **Analogies:** such as (3)
> **Prerequisites:** set up (2), install (1)
> **Code Keywords:** public (1), finally, (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 5. Kubernetes Monitoring Tools

#### Kubernetes Dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=0)** - [Tutor] Having one place to monitor everything that's happening in your Kubernetes cluster can be very beneficial.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=5)** The Kubernetes dashboard is a web-based user interface for Kubernetes clusters.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=10)** It enables you to manage Kubernetes clusters and the applications running inside of them.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=14)** There are several use cases for the Kubernetes dashboard.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=17)** You can use it to scale pods and nodes, view error reports, see logs and metrics, initiate rolling updates and even create, edit and restart Kubernetes resources.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=28)** The Kubernetes dashboard isn't available by default.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=31)** Rather, it is available as a container and has to be manually deployed into the Kubernetes cluster.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=37)** It was set up this way by the Kubernetes team to ensure that it doesn't consume resources in your Kubernetes cluster if you decided to use a different tool for managing, monitoring and troubleshooting applications or the cluster itself.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=50)** To deploy the Kubernetes cluster into your dashboard, the first thing you need to do is set up access control.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=56)** This is because the Kubernetes dashboard deploys with a minimal role-based access control configuration by default, so it would only support users logging in with the (indistinct) token.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=66)** The next thing you need to do is run this command to deploy the dashboard UI into your cluster.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=72)** On applying the dashboard application to your cluster, you need to create a secure channel to your Kubernetes cluster.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=78)** To do this, you need to run the QCTL proxy command.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=82)** If everything goes well, you should now be able to access the Kubernetes dashboard at the URL displayed on your terminal.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=88)** There are too many elements in the Kubernetes dashboard interface, the cluster view and the workload view.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=94)** The cluster view lets you view data and perform operations at the Kubernetes cluster level.
>
> **[1:39](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=99)** It includes the namespaces and node sub view.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=102)** The namespace sub view is an overview of cluster namespaces.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=105)** Here you can drill down into the namespace, save recent events related to the resources within that namespace.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=112)** On the other hand, the node sub view contains a list of all Kubernetes nodes registered with the Kubernetes cluster.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=119)** You can see labels, node status and even summary resource utilization data.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=125)** The workload view shows details of applications running in the Kubernetes cluster.
>
> **[2:10](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=130)** It provides summary information about the pods, including status, number of restarts, containers running in the pod, and even the controller that created the pod.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=139)** You can also view detailed information about other Kubernetes resources, like deployment, replica set and other Kubernetes controllers in the workload view.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=149)** This is what the Kubernetes dashboard looks like.
>
> **[2:32](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=152)** You can see the workflow view here and the cluster view.
>
> **[2:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=155)** There are other views as well, like the service and the config and storage.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=158)** Let's take a look at the workload view.
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=160)** If you wanted to look at the pods, let's change the name space for instance.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=164)** For instance, it's currently in the default name space but I want to move it to the emojivoto name space.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=169)** On doing that, I can see the different services.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=172)** I can see the node that is running on the status, number of restarts, CPU usage and so much more.
>
> **[2:58](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=178)** And if we go into the cluster view, for instance, we could see things like the event if we had one running, cluster role bindings, persistence volumes, role bindings, rolls, service accounts and so much more.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=191)** These applications allows you to get full details into your Kubernetes cluster or the application running on it.
>
> **[3:17](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=197)** Even though you won't be able to do everything you typically do in your command line via the Kubernetes dashboard UI, it can be very beneficial for beginners or for teams who want to see a holistic view of the applications and the Kubernetes cluster.
>
> **[3:32](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=212)** To learn more about this tool, visit the official GitHub repository.

> [!info]- Semantic Content
>
> **Tools:** kubernetes dashboard (8), terminal (1), command line (1), github (1)
> **Code Keywords:** interface (2), let (2), default. (1), default, (1), this, (1)
> **CLI Commands:** node (4)
> **Env Vars:** qctl (1), url (1), cpu (1)
> **Analogies:** for instance (3)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [tutor] (1)

#### Prometheus
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=0)** - [Instructor] Prometheus is one of the most popular monitoring and alerting tools in the Kubernetes ecosystem.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=5)** It provides out-of-the-box monitoring capabilities for Kubernetes.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=9)** It is powerful, free and has an active community that can help you get up to speed.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=14)** Prometheus provides four types of metrics.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=17)** The first one is the counter metric which is ideal for measurements when an event starts or for counting the total number of events.
>
> **[0:24](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=24)** This metric can be resetted or incremented.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=27)** It also has the gauge metric which is ideal for points in time values like memory usage, in-progress requests, and temperature.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=36)** This metric can measure changes in either positive or negative directions.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=41)** The historic metric is ideal for data aggregation.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=44)** It can sample and categorize events with a total sum of all observed values.
>
> **[0:48](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=48)** Finally, we have the summary metric.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=50)** This metric is ideal for generating an accurate quantile range.
>
> **[0:54](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=54)** It can support histogram metrics and also calculates quantiles over a sliding time window according to the total event sums and counts of observed values.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=65)** There are two ways to install Prometheus in your Kubernetes cluster.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=68)** You can either install it as a single binary running on your host, which is fine for learning, testing and developing purposes, but it is not very appropriate for containerized deployment.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=79)** The second option is to install it as a Docker container which has several orchestration options like raw docker containers, Kubernetes deployment or even Helm.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=89)** Here are some best practices to keep in mind when using Prometheus.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=92)** Even though data is important, it isn't always necessary for every scenario.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=97)** So instead of attempting to display all data within a single operation console, you should strive to display the most relevant information on your consoles and dashboard.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=106)** When tracking event timing, consider using timestamps that indicates when each event occurred, rather than the time that past since the event occurred.
>
> **[1:54](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=114)** This will help to eliminate the need for updating logic, and can also reduce errors as well.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=120)** Even though labels help you refine and customize the data for your metrics, creating labels on a high scale can consume a large number of resources.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=128)** That's why it's recommended to limit adding labels on metrics to 10 or fewer resources and only use them for metrics that actually require labels.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=137)** And when you include metrics in a code base that is called more than a hundred times per second, or is performance-critical, it is recommended that you'd limit the operations you perform in the inner loop.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=148)** As mentioned earlier, Prometheus is one of the most used monitoring tools in the Kubernetes space.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=153)** It has a lot more features and components that have not been covered in this video.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=158)** To learn about Prometheus, visit the official website.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3)
> **CLI Commands:** docker (2)
> **Code Keywords:** finally, (1), require (1)
> **Best Practices:** recommended (2)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Jaeger
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=0)** - [Instructor] Jaeger is an open-source end-to-end tool that is used for monitoring and troubleshooting transactions in complex distributor systems like Kubernetes.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=8)** It is easy to set up as it comes with an all-in-one image that includes the Jaeger UI where you can see all of these different traces.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=16)** Jaeger can be used for performance and latency optimization, root cause analysis, service dependency analysis, and even distributed context propagation.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=27)** Setting up Jaeger in your local environment requires you to follow these steps.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=31)** First, your application must be instrumented to enable you to send tracing data to Jaeger.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=36)** The Jaeger team recommends using the OpenTelemetry instrumentation and SDKs for this.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=41)** On completing the instrumentation, you can go ahead and install the all-in-one image.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=46)** This image is an executable design for quick local testing and launching the Jaeger UI.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=52)** The next thing you need to do is start the all-in-one image.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=55)** The simplest way to do this is to use the previous image published on Docker Hub or to run the Jaeger all-in-one executable from the binary distributed archives.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=64)** Then you would proceed to install Jaeger, and after doing this, you can go to localhost:16686 to access the Jaeger UI.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=73)** This is what the Jaeger UI typically looks like.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=76)** You can choose a list of services, select certain operations that get at a certain API endpoint, add tags, set a time duration, add maximum and minimum duration, and even limit results as well.
>
> **[1:30](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=90)** Once you've added the required data, you can go ahead and click on find traces.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=94)** This is going to generate traces and monitoring of your application, or the service in this case, which is Jaeger-Query.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=101)** You can scroll through if it has like a lot more traces defined, or just select a different API path.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=112)** You can also compare several UIs or see a system architecture of your application.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=117)** This is a simple example of how to use Jaeger using a simple service, but you can use this for a lot more complex stuff and use it to define and see several things happening in your Kubernetes application.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=129)** To learn more about Jaeger, its architecture, and its login capabilities, visit your official website.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=135)** You can also check out this amazing tutorial by Yuri to get a hands-on experience on how to use Jaeger.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), this, (1), case, (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** api (2)
> **URLs:** [localhost:16686](https://localhost:16686) (1)
> **Ports:** :16686 (1)
> **UI Navigation:** click on (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=0)** - [Speaker] According to the Stack Overflow developer survey, Kubernetes is the second most loved and most wanted platform.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=6)** Due to its popularity and usage, there's a plethora of Kubernetes tools out there.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=10)** As I record this course, I bet there's another company or developer out there creating another Kubernetes tool.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=16)** To ensure you don't feel overwhelmed while trying to find the right Kubernetes tool, you need to understand the problem you're trying to solve and go for tools that do not make your development workflow more complicated than it is already.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=27)** To discover and learn more about other Kubernetes tools not covered in this course, visit the CNCF landscape, find a tool of choice and search for a tutorial for that tool on LinkedIn Learning.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=38)** Thank you for sticking with me till the end of this course and see you on the next one.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Env Vars:** cncf (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [speaker] (1)


## Path Context

### In [[Getting Started with Kubernetes]]
← [[Kubernetes- Your First Project (2021)]] | **3 of 6** | [[Kubernetes- Microservices]] →

## Appears In

- [[Getting Started with Kubernetes]]

## Related Courses

_Courses sharing skills:_

- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Kubernetes
- [[Securing Containers and Kubernetes Ecosystem]] — Kubernetes
- [[Kubernetes- Cloud Native Ecosystem]] — Kubernetes
- [[Kubernetes- Microservices]] — Kubernetes
- [[Kubernetes- Your First Project (2021)]] — Kubernetes

---

[↑ Back to top](#)