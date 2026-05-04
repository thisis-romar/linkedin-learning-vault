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
  - '[Getting Started with Kubernetes](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Kubernetes.md)'
prev_courses:
  - '[Kubernetes- Your First Project (2021)](Kubernetes-%20Your%20First%20Project%20(2021).md)'
next_courses:
  - '[Kubernetes- Microservices](Kubernetes-%20Microservices.md)'
path_nav: '[{"path":"Getting Started with Kubernetes","position":3,"total":6,"prev":"Kubernetes- Your First Project (2021)","next":"Kubernetes- Microservices"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/kubernetes
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Kubernetes-%20Essential%20Tools.md)

![Kubernetes: Essential Tools](https://media.licdn.com/dms/image/v2/D560DAQHXiJGfHXz6tA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691433502919?e=2147483647&amp;v=beta&amp;t=9XMOArS_-YBHaPkWfM2SYqX7DDAXwaJ-k5t_Yuz78zw)

# Kubernetes: Essential Tools

> Are you experienced with Kubernetes, and looking for the right tools to improve your development workflow? This course with Edidiong Asikpo details the essential tools for running, developing, deploying, and monitoring applications running on Kubernetes. Learn about command line tools; tools for running Kubernetes like minikube, kubectl, and kubie; and development tools such as Telepresence, Tilt,

> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-essential-tools) | 43m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Unlocking Kubernetes: Your essential tools guide](#unlocking-kubernetes-your-essential-tools-guide)
  - [Prerequisites](#prerequisites)
  - [An overview of essential Kubernetes tools](#an-overview-of-essential-kubernetes-tools)
- [**1. Kubernetes Command-Line Tools**](#1-kubernetes-command-line-tools) (3 videos)
  - [kubectl](#kubectl)
  - [kubie](#kubie)
  - [K9s](#k9s)
- [**2. Tools for Running Kubernetes**](#2-tools-for-running-kubernetes) (4 videos)
  - [minikube](#minikube)
  - [kubeadm](#kubeadm)
  - [kOps](#kops)
  - [Managed Kubernetes platforms](#managed-kubernetes-platforms)
- [**3. Kubernetes Development Tools**](#3-kubernetes-development-tools) (3 videos)
  - [Telepresence](#telepresence)
  - [Tilt](#tilt)
  - [Lens IDE](#lens-ide)
- [**4. Kubernetes Deployment Tools**](#4-kubernetes-deployment-tools) (2 videos)
  - [Helm](#helm)
  - [Kubespray](#kubespray)
- [**5. Kubernetes Monitoring Tools**](#5-kubernetes-monitoring-tools) (3 videos)
  - [Kubernetes Dashboard](#kubernetes-dashboard)
  - [Prometheus](#prometheus)
  - [Jaeger](#jaeger)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Unlocking Kubernetes: Your essential tools guide](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/unlocking-kubernetes-your-essential-tools-guide?u=76281980&t=0)** - [Edidiong] Have you been trying to find the right [Kubernetes](../../Skills/DevOps/Kubernetes.md) tool that would enable you to improve your development workflow? Then you're in luck. This course highlights the essential Kubernetes tools for running, developing, deploying and monitoring applications running on Kubernetes. We'll also go about the benefits, use cases and demos of these tools. I'm Edidiong Asikpo, a CNCF ambassador, certified Kubernetes application developer and senior developer advocate. I'm excited to share my learnings about these Kubernetes tools with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5)
> **CLI Commands:** find (1)
> **Env Vars:** cncf (1)
> **Speakers:** - [edidiong] (1)

#### [Prerequisites](https://www.linkedin.com/learning/kubernetes-essential-tools/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/prerequisites?u=76281980&t=0)** - [Instructor] So understand what's being discussed in this course, you need to have a basic knowledge of [Microservices](../../Skills/Software%20Development/Microservices.md), containerization, and [Kubernetes](../../Skills/DevOps/Kubernetes.md). Thankfully, there is an amazing Kubernetes course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning by Kim that will get you up to speed if you're not familiar with these technologies. Do check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [An overview of essential Kubernetes tools](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/an-overview-of-essential-kubernetes-tools?u=76281980&t=0)** - [Narrator] This course is divided into five chapters, each focused on a specific area of [Kubernetes](../../Skills/DevOps/Kubernetes.md) tools. The first, Kubernetes command line tools, tools surrounding Kubernetes, Kubernetes development tools, Kubernetes deployment tools, and finally, Kubernetes monitoring tools. Chapter one is focused on covering Kubernetes tools that can be used directly on your terminal. These tools make you work faster, enable you to use fewer commands, and so much more. You need to run Kubernetes somewhere. This chapter highlights tools that can be used to run Kubernetes, their benefits and use cases. Developing applications on Kubernetes can be quite challenging. The tools that will be discussed in this chapter will show you how to accelerate your inner development loop, speed up Kubernetes development, and more. Chapter four showcases the tools that can be used to deploy applications, services, and other Kubernetes resources. And finally, in chapter five, we'll learn about the different essential tools from monitoring everything going on in an application running on Kubernetes, and the Kubernetes application itself. Now that you're fully aware of what to expect in this course, let's dive right into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (14)
> **Tools:** command line (1), terminal (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 1. Kubernetes Command-Line Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [kubectl](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=0)** - In today's world, almost everyone knows about social media and uses it. Kube CTL is similar to social media in the world of [Kubernetes](../../Skills/DevOps/Kubernetes.md). It is one of those command line tools almost every Kubernetes developer and administrator knows about and actually uses. And this is because Kube CTL allows you to perform every possible Kubernetes operation thanks its ability to communicate with the Kubernetes Clusters control plane. This allows you to run commands against Kubernetes clusters, inspect and manage cluster resources, deploy applications and even view logs as well. Kube CTL's installable on macOS, [Windows](../../Glossary/Service/Windows.md), and various [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) platforms. The fact that it can be installed seamlessly on all three operating systems is one of the many reasons for its widespread usage. This tool has been pronounced differently by many people over the years. Some people call it Koob control. Others call it Koob cuddle. And if you're like me probably call it KubeCTL, and that's not even all. There are still people who call it Koob cuddle, Koo-bay cuddle and Koo-bae cuddle. Even though there is no universal way to pronounce this tool, two of the most common ways of seeing it being pronounced it's either as Koob cuddle or Kube XRL. But for the purpose of this video I'll be pronouncing it as Kube CTL. But if you've bumped into it being pronounced differently just remember that it's the same Kubernetes command line tool we're all referring to. This is the standard format of a Kube CTL command. It has Kube CTL, the command, the type, name, and flag. For context, the 'command' is used to specify
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=96)** the action to perform like creating, deleting, getting, or applying the Kubernetes resource. "Type" on the other hand is used to specify the Kubernetes resource. This can be a resource provided by Kubernetes like a pod or a service or a custom resource definition you've created yourself. The name option is used to specify the name you had given the resource, and if you omit the name Kube CTL will return every single resource specified by the type. Finally, we have the flag, which is used to specify any global or command specific option like a file name or an output type. The Kube CTL command has compulsory and optional parts. The Kube CTL and command options are compulsory but the type, name and flags are optional. Here's an example of what Using the full Kube CTL command would look like. Kube CTL gets pods, helloWorld, -oh yaml.. This will make a call to the Kubernetes API and I'll put the configuration of a pod helloWorld in yaml format. Assuming you wanted to omit the name and flag options, the command would look like this. Kubectl gets pods. Running this Kube CTL command will return all the pods in the Kubernetes cluster. Sometimes you want to be more specific about the resource you want to be returned and this is where the name option comes in. As you can see. the Kubernetes API returns only the port named helloWorld. There are two configuration styles in Kubernetes, the Imperative and the Declarative configuration styles. Kube CTL allows you to use both. For instance, the Kube CTL creates deployments
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-essential-tools/kubectl?u=76281980&t=191)** "earning-it-is-fun--image mongo" command will Imperatively tell Kubernetes to deploy a container with the Mongo image. While kubectl apply-f learning-is-fun.yaml will provide a declarative manifest to Kubernetes which will then be in charge of creating the deployment as you define in the manifest. Use of imperative command is typically faster, but can oftentimes include errors. The declarative style on the other hand, is less error prone and it's easier to update. For more information about Kube CTL and its list of operation, check out the official Kubernetes documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (16), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** ctl (15), api (2), xrl (1)
> **CLI Commands:** kubectl (3), mongo (2), make (1)
> **Code Identifiers:** helloworld (3), macos (1)
> **Analogies:** similar to (1), for instance (1)
> **File Paths:** learning-is-fun.yaml (1)
> **Tools:** command line (1)
> **Speakers:** - in (1)

#### [kubie](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=0)** - [Instructor] We'll often have to work with multiple clusters when using [Kubernetes](../../Skills/DevOps/Kubernetes.md), and switching from one cluster to another can be challenging and even lead to mistakes like running a command on the wrong cluster or repeatedly running the long kubectl config command every time we want to make a switch. And since the goal of every development team is to build and ship features faster, we must adopt tools that make software developments fast and improves our developer experience. Kubie is one of those tools. This tool offers context switching, namespace switching, and prompt modification in a way that makes each shell independent from each other. Just like kubectl, Kubie can be installed on all operating systems. If you head over to the official [GitHub](../../Skills/Software%20Development/GitHub.md) page, you'll find the installation process for each operating system. Go ahead and install it on your computer. With Kubie now installed on your local machine, you can use it to switch between Kubernetes clusters easily and faster. For instance, instead of running kubectl config get-contexts to see the list of clusters available on your computer and then running kubectl config use context the context name to switch to the cluster of choice, you can run Kubie CTX to display a selectable menu of clusters in a matter of seconds and then use your arrow button to navigate and select your cluster of choice.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=95)** Amazing, right? I know! Another cool thing about Kubie is its ability to spawn a new shell and status form so that we can see the context and the namespace we're working on. For instance, after running kubectl config, use context docker-desktop command, we'll need to rerun kubectl config get-contexts to see where the asterisk sign is showing to be sure that the switch initiated was successful. But when we run a Kubie CTX command and select the cluster of choice, the namespace and context of the cluster will automatically be displayed, allowing us to identify which cluster we're on quickly.
>
> **[2:18](https://www.linkedin.com/learning/kubernetes-essential-tools/kubie?u=76281980&t=138)** This feature addresses mistakes like deploying an update to the production environment instead of the testing environment, because you can clearly see which environment you're currently working on. Kubernetes has so many components and things to learn about, so removing one less command from your mind and being faster when iterating with multiple clusters can be very beneficial. Visit Kubie's official GitHub page to learn more and discover other commands not discussed in this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **CLI Commands:** kubectl (6), make (2), find (1), docker (1)
> **Analogies:** for instance (2), just like (1)
> **Env Vars:** ctx (2)
> **Tools:** github (2)
> **UI Navigation:** switch to (1), select the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [K9s](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=0)** - [Instructor] Remembering the correct kubectl commands for performing several operations in your [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster can be quite challenging, especially for people that are new to Kubernetes. K9s, sometimes called K9s, is a Kubernetes command line tool that addresses this challenge. "What is K9s?" you may ask. Don't worry. I'll tell you. K9s is a terminal UI for Kubernetes that enables you to easily navigate, observe and manage your applications in the Kubernetes cluster in a visually pleasing manner without writing tons of kubectl commands. K9s can be installed on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), macOS and a [Windows](../../Glossary/Service/Windows.md) machine. Their are official documentation includes several ways to install it on your preferred operating system. I'm using a macOS for this video, so I'm going to install it using Homebrew by running the brew install k9s command in my terminal.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=55)** After installing K9s into your computer, you have to run the k9s command on your [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) to initialize the tool. On doing this, a terminal UI showing you the context you're currently running on and the Kubernetes resources inside that context will be displayed on your screen.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=77)** If you're familiar with Vim commands, you'll be right at home with K9s as it's inspired by some Vim commands. For instance, if you wanted to view any Kubernetes resource in your cluster, you'd do that by perfecting the resource type with a colon.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=101)** You can also search for a specific resource type by using the slash command. Switching from one Kubernetes context to another is also possible with K9s. To do this, type the colon with ctx.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=140)** And if you need to see other operations that you can perform using K9s, click on the question mark and it will display you with a list of hotkeys available in the active window.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-essential-tools/k9s?u=76281980&t=164)** To leave the terminal UI, press Control + C. While you can achieve all the functions that K9s gives you through kubectl commands, most people find the visual layout presented by K9s easier to utilize. If you want to find more details about this tool and other operations that can be performed using it, visit the official documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (8), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Tools:** terminal (4), vim (2), command line (1)
> **CLI Commands:** kubectl (3), find (2), brew (1)
> **Prerequisites:** install (3)
> **Code Identifiers:** macos (2)
> **Definitions:** is a  (2)
> **Env Vars:** cli (1)
> **UI Navigation:** click on (1)


### 2. Tools for Running Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [minikube](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=0)** - [Instructor] When you begin your [Kubernetes](../../Skills/DevOps/Kubernetes.md) learning journey, you typically start by reading some articles or watching videos to get a sense of what it entails before getting hands-on with Kubernetes. Minikube is a tool to use when you start this hands-on phase, and this is because it eases up the process of running Kubernetes locally and makes it easier for beginners to learn and develop on Kubernetes. Before installing minikube, you need to have a continual virtual machine manager like Podman, Docker, or Hyper-V or even any other tool that you currently use. Minikube is installable on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), macOS, and [Windows](../../Glossary/Service/Windows.md). The installation processing guide is available under official documentation. Like the folks at minikube like to say, Kubernetes is just a single command away when using minikube. For instance, running the minikube start command will automatically create and initialize a Kubernetes cluster for you. With the cluster now running, we can run kubectl commands like kubectl get pod-A to see the list of all the pods in the cluster or kubectl creates mongoly--name mongo to create a deployment named mongoly. Minikube also offers several options to enable you to manage your Kubernetes cluster effectively. For instance, you can use Kubernetes without impacting deployed applications using the minikube post command and even unpause a paused instance
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-essential-tools/minikube?u=76281980&t=93)** with the minikube unpause command. You can also go as far as halting the cluster with the minikube stop command. Minikube has a number of great features, but here are the two that I think you should definitely know about. The first one is the minikube add-ons feature which helps to add extra components and features to minikube. To see the list of add-ons available at minikube, run the minikube add-ons list command on your [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). And if you want to enable an add-on run the minikube add-ons enable command on your CLI. The second one is the Kubernetes versions feature. This feature is particularly useful for people who work with different versions of Kubernetes, and this is because it actually allows you to pause the version of Kubernetes that you want to run by adding the Kubernetes version flag to the minikube start command. This feature is also very useful for debugging application issues that rely on Kubernetes features that may have been updated from one release to another. Learn more about minikube by visiting the official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (13), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** kubectl (3), docker (1), mongo (1)
> **Env Vars:** cli (2)
> **Analogies:** for instance (2)
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [kubeadm](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=0)** - [Instructor] Kubeadm, also known as kube admin, is an excellent tool for creating [Kubernetes](../../Skills/DevOps/Kubernetes.md) clusters quickly. By running a series of free checks kubeadm ensures that your server has all the components and configurations needed to run Kubernetes. Kubeadm's flexibility makes it an ideal choice for many use cases, like the automation of creating clusters, using script or tools like [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), its ability to be used as a testing and production environment, since it can be used on both local and remote clusters. And finally, being able to customize and configure cluster components. There are a couple of things you need to have to be able to install and use kubeadm effectively. They include a compatible [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) host, two gigabytes or more RAM per machine, two or more CPUs, a full network connectivity between all machines in the cluster, a unique hostname, MAC address, and product_uuid for every node, specific ports open on your machine, and finally, disabling swap to enable kubectl and kubelet to work as expected. Setting up a Kubernetes cluster with kubeadm is a multi-step process. First, you'd need to download and install a container runtime, kudeadm, kubelet, and kubectl on all nodes if you don't already have them. Kubelets and container runtime have a property called cgroup driver, which is essential for the management of cgroups on Linux machines. So the second step would be to actually configure a cgroup driver.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/kubeadm?u=76281980&t=94)** The test step is initializing kubeadm on the master node to set up the control plane. On a successful kubeadm initialization you should get the output with the kubeconfig file location and the join command with the token. Copy and save this join command with that token. Since kubeadm does not configure any network plugin, you'd need to install a network plugin of your choice, and then you'll join the worker nodes to the master node using the kubeadm join command you saved earlier while setting up the master node. To confirm if the Kubernetes cluster is working as expected deploy and validate the sample app on the cluster. Knowing how to use kubeadm is required for the Certified Kubernetes Administrator exams and also the Certified Kubernetes Security Specialist examinations. So if you plan to take any of these certification exams, I'd recommend that you visit kubeadm's official documentation to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (6), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (1)
> **Prerequisites:** configure (3), install (3), you need to have (1), set up (1), initialization (1)
> **CLI Commands:** node (4), kubectl (2), ansible (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Env Vars:** ram (1), mac (1)
> **Code Identifiers:** product_uuid (1)
> **Speakers:** - [instructor] (1)

#### [kOps](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=0)** - [Instructor] kOps is a [Kubernetes](../../Skills/DevOps/Kubernetes.md) tool that enables us to create, destroy, upgrade, and maintain production grade Kubernetes clusters. Many people in the Kubernetes community think of it as the easiest way to get a production-grade Kubernetes cluster up and running. Some fantastic features of kOps include its ability to automate the provisioning of highly available Kubernetes clusters, auto-complete commands written in the command line, and enable templating and dry run modes for creating manifests. To install kOps, you need to have kubectl installed on your computer. Other than that, kOps can be installed on all operating systems, including macOS, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and [Windows](../../Glossary/Service/Windows.md). kOps can be deployed to AWS, GCE, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), DigitalOcean, and so much more. The official documentation explains the entire process. There are a ton of kOps commands that exist, but here are the most common ones. The first one on the list is the kOps create cluster command, which is used to register a cluster. This command can either be utilized using the imperative or declarative configuration styles. We also have the kOps updates cluster command, which creates or updates the cloud resources to match the cluster specification. The kOps get cluster command leads all the clusters in the registry. As the name implies, the kOps delete cluster command deletes a particular cluster's cloud resources and removes the cluster from the registry. Finally, we have the kOps toolbox template command, which enables you to generate a kOps specification
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-essential-tools/kops?u=76281980&t=95)** using go templates. Do you want to learn more about kOps and utilize it yourself? Then visit the official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Code Identifiers:** kops (13), macos (1)
> **CLI Commands:** kubectl (1), aws (1)
> **Env Vars:** aws (1), gce (1)
> **Documentation:** specification (2)
> **Prerequisites:** install (1), you need to have (1)
> **Tools:** command line (1)
> **Exercise Files:** template (1)

#### [Managed Kubernetes platforms](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=0)** - [Instructor] Even though [Kubernetes](../../Skills/DevOps/Kubernetes.md) includes many built-in features and is designed to simplify container orchestration, it can oftentimes be challenging to configure, deploy, and manage. Oftentimes, organizations who do not have in-house expertise, time, or resources needed to do this will adopt Managed Kubernetes platforms to counter the complexity and stress of running, deploying, and managing Kubernetes. Managed Kubernetes clusters are third-party providers responsible for some or all of the work necessary to successfully set up and operate Kubernetes. Depending on the provider, "manage" can refer to anything from complete hosting and operation to hosting the preconfigured environment, and even dedicated support as well. Using a Managed Kubernetes platform saves costs, makes cluster scaling easier, and provides multicloud portability. It also makes the management and support of containers and cluster application services, such as monitoring, login, and security, easier. There are a ton of Managed Kubernetes platforms out there, but here are 10 of the most popular and used ones. None of the existing Managed Kubernetes platforms are created the same way. Some have more features than others while some are created to target specific issues that others are not targeting. And that's why it's always important to consider some factors like pricing, security compliance, ease of use, independence, authentication and access control, high availability, monitoring,
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/managed-kubernetes-platforms?u=76281980&t=94)** logging and self-healing options before choosing a Managed Kubernetes platform of choice. Starting with local Kubernetes tools, like minikube or kind, is great. But when your company is ready to scale up to many missions and have higher availability, using Managed Kubernetes platforms are the best bet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (11)
> **Prerequisites:** configure (1), set up (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Kubernetes Development Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Telepresence](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=0)** - [Instructor] Adopting [Kubernetes](../../Skills/DevOps/Kubernetes.md) was supposed to enable you to code, test, and deploy features faster. So why is it slowing you down? Don't you just miss the time when delivering new features used to be fun and quick? You could make a code change and click reload to see the impact of your code changes immediately. But with containerized environments like Kubernetes, you now have to wait for the updated application to be containerized, pushed to a registry, and deployed before seeing the impact of your code changes. These extra steps make the inner development loop of containerized environment slower than it was with monolithic environment. So in order for you to truly enjoy the benefits of Kubernetes, you need to use a tool that accelerates your inner development loop. And this is where Telepresence comes in. Telepresence is an open-source tool that lets you see the impact of your code changes interacting with other remote services and dependencies without waiting for the slow build/push/test cycle. Let me show you how Telepresence works using a cloud-native application called Emoji Vote. Emoji Vote comprises of three [Microservices](../../Skills/Software%20Development/Microservices.md), the web, emoji, and voting service. The web service is a frontend service that serves this UI, while the emoji and voting service are backend services that handle the display and voting of these emojis. As an application developer, I've made some updates to the web service and confirmed that it's working locally, but before pushing it to production, I must also confirm that it will work effectively with its dependent services, which are the emoji and voting service. To use Telepresence, you first need to install it into your local machine
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=94)** and then use it to connect your local machine to the remote cluster. To do this, go to app.[getambassador.io](https://getambassador.io), create an account, and log in using your preferred authentication methods. I already have an account, so I'm just going to log in using [GitHub](../../Skills/Software%20Development/GitHub.md) and select an organization and team. Click on the Get Started tab for a visual onboarding flow for application developers and platform engineers. In the Application Developer section, click on Connect and follow the instructions displayed to install Telepresence into your local machine. I already had Telepresence installed, so I'll just proceed to run the Telepresence login and connect command on my [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), which will log me into Ambassador Cloud and connect my local machine to the remote Kubernetes cluster, which contains the services and dependencies of the Emoji Vote application I want to test. As you can see, my local machine is now connected to the cluster. This means I can now assess all the services in the remote cluster and see that they're running locally. With this, we can now proceed to create what we call an intercept. The Telepresence intercepts your route of traffic intended for a remote service to a local service. In my case, I want to reroute the traffic intended for the web service in the remote cluster to the web service running on my local machine. To do this, I'll click on Connect. Select the Emoji Vote namespace. Click on web service and add 8080 since that's the port the local service is running on. Finally, I'll click on the Intercept button. Telepresence will generate a secured preview URL showing the results of the local web service
>
> **[3:09](https://www.linkedin.com/learning/kubernetes-essential-tools/telepresence?u=76281980&t=189)** running on my machine interacting with the emoji and voting backend services in the remote Kubernetes cluster. And any updates I make locally will instantly show up. I can then share the secured URL with my teammates for collaborative development and debugging. Telepresence cuts down the unnecessary parts of the containers in our dev loop and mitigates integration issues since your development environment now mirrors the life production environment. Do you want to learn more about Telepresence? Then visit the official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **UI Navigation:** click on (5), go to (1), select the (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (2), cli (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **URLs:** [getambassador.io](https://getambassador.io) (1)
> **Tools:** github (1)

#### [Tilt](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=0)** - [Instructor] Whether you're a developer or operator, you need a developer environment to complete some of your day-to-day tasks. So you typically want a dev environment that allows you to move as quickly as possible and focus on only the things that actually matter. Tilt is one of those tools that can save you a lot of time in the development process. This is due to the ability to enable local continuous development and deployment of microservice-based applications. There are several benefits of using Tilt. The first one is that it enables you to understand and orchestrate your services. You can also get smart rebuilds and live updates wherever you are. Also, Tilt supports automatic deployment of your microservice-based applications during development because it monitors application files and then automatically builds, pushes, and deploys any changes to bring your environment up to date in real time. Finally, it has a command-line and web user interface for monitoring the deployment of an application and showing logs, including other useful information about the current deployment. This means you no longer need to have multiple terminals open in order to understand what your [Microservices](../../Skills/Software%20Development/Microservices.md) are actually doing. Tilt can be installed on macOS, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and various [Windows](../../Glossary/Service/Windows.md) machines. Their official documentation has instructions on how to install it in any operating system of your choice. Tilt works in two phases: the application configuration phase and the application deployment phase. The application configuration phase is where you'd set up all the necessary requirements to make the application get successfully deployed to Tilt.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/tilt?u=76281980&t=94)** This oftentimes requires the creation of a Dockerfile, [Kubernetes](../../Skills/DevOps/Kubernetes.md) manifest file, and a Tiltfile. Once all of these files have been set up in the directory of the application, then we can proceed to build and deploy the application in the application deployment phase. This is done by running the tilt up command inside the product directory of your terminal. Once the console has started, a console UI and a web UI will start automatically to provide you with information about the build and deployment process. While the tilt up command is running, the build, push, and deployment cycle of your application will occur every single time a change is made to your code. Finally, to remove the application, you'd have to exit it from either the console UI or via your terminal by typing the tilt down command. You can learn more about Tilt by visiting their official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Prerequisites:** set up (2), install (1)
> **Tools:** terminal (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### [Lens IDE](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=0)** - [Instructor] Even though [Kubernetes](../../Skills/DevOps/Kubernetes.md) is one of the most popular container orchestrators available today, one thing it is not known for is its simplicity. For users, navigating through the Kubernetes text-based interface without the aid of a visual environment leads to limited visibility and even high [Probability](../../Skills/Data%20Science/Probability.md) of errors. Lens, oftentimes called the Kubernetes IDE, simplifies working with Kubernetes by providing a graphical interface that allows users to deploy and manage Kubernetes clusters directly from the console. It also provides built-in [Dashboards](../../Skills/Data%20Science/Dashboards.md) with key metrics and insights into resources running on the cluster, including access control, networking, storage, and even configurations. In addition to its graphical interface, Lens has so many other great features. Some of this includes a multi-cluster management on any cloud. Lens gives users access to work with multiple Kubernetes clusters on the cloud. This include clusters like GKE, minikube, Docker Desktop, EKAS, Rancher, and so much more. Lens is designed to simplify the experience of working with multiple clusters. It does this by enabling users to reorganize clusters into logical groups. For users who prefer using the command line interface, Lens has a built-in terminal that uses a version of QCTL that is always API compatible with the chosen cluster. This terminal automatically downloads and assigns the correct QCTL version in the background and maintains the correct version and context while switching between clusters. Finally, Lens also comes with a built-in [Helm](../../Glossary/Tool/Helm.md) integration,
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-essential-tools/lens-ide?u=76281980&t=96)** which enables users to quickly browse, modify configuration settings, deploy, and manage thousands of publicly available Helm charts with single-click upgrades. Lens is a standalone application and can be installed and utilized on macOS, [Windows](../../Glossary/Service/Windows.md), and some [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) flavors. Visit Lens' official website to download and install it into your computer. After installing Lens, the next thing you need to do is to connect it to your cluster. Lens searches common directories on your machine for kubeconfig files and adds them to the catalog. If you want to add additional clusters manually, you can do this by navigating to the catalog category clusters and clicking on the add cluster button in the bottom right corner. Once your cluster is up and running, you can then view cluster details. In this case, you can use the cluster navigation panel to switch between functional parts of your cluster. Lens lets you view all objects and abstractions in your Kubernetes cluster. To see the types of resources available, select workloads, and you'll see a summary of the types and number of resources running in your cluster. You can also add Helm repositories and enable Lens metrics as well. Visit the official website to learn more about what makes Lens the software of choice for both developers and operators working with Kubernetes and [Cloud-Native Applications](../../Skills/Software%20Development/Cloud-Native%20Applications.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (8), [Helm](../../Glossary/Tool/Helm.md) (3), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** qctl (2), ide (1), gke (1), ekas (1), api (1)
> **Tools:** terminal (2), docker desktop (1), command line (1)
> **CLI Commands:** docker (1)
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 4. Kubernetes Deployment Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Helm](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=0)** - [Instructor] Deploying your applications manually can be quite complex. You typically have to define every single YAML configuration and then eventually remove and redeploy all created resources when the application needs to be updated. [Helm](../../Glossary/Tool/Helm.md) makes this process easier and more straightforward. Oftentimes called the [Kubernetes](../../Skills/DevOps/Kubernetes.md) app store, Helm is a package manager for Kubernetes. You can think of it as apt, Yum, or Homebrew for Kubernetes. Helm enables you to streamline the process of deploying and managing applications on Kubernetes clusters. Helm has a client only architecture where the client interacts directly with the Kubernetes API server to install, upgrade, query, and remove Kubernetes resources. There are three core Helm architecture components you should be aware of. The charts, repositories, and releases. Charts enable you to package and manage your Kubernetes application as reusable version artifact. Repositories, on the other hand, allow the collecting and sharing of charts while releases are instances of charts running within a Kubernetes cluster. To utilize Helm, the first thing you need to do is install it. Helm is available at Mac OS, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and [Windows](../../Glossary/Service/Windows.md) in various installation formats. The official documentation shares the details on how to install Helm. After installing Helm, you can start utilizing its command. For instance, if I wanted to see all the Helm repositories available on my cluster, I would run the Helm search repo command.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=93)** We can also add a charts repository by running the Helm repo at command. Once this is installed, we'll be able to list the clusters we can install from this repository by running the Helm search repo repo name command.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-essential-tools/helm?u=76281980&t=113)** Now we can proceed to install a specific charts by running the Helm install, release name, charts name command. This will install the entire application into the Kubernetes cluster and we'll now be able to utilize it in the cloud native application we are building. To create a Helm chart, you'd need to run the Helm create command on your terminal. This will create a directory field with files and other directories. Let's take a closer look at what this file tree looks like and the content of this file. The templates directory is a place where you'll put all your manifest files. Everything here will be passed on and created in Kubernetes. On the other hand, the chart, the YAML file, is where you put the information related to your charts. This include things like the charts version, name or description. Adding these details is very essential as it would help you find the charts quickly if you publish them in an open repository. Finally, we have the values of the YAML file. This file contains defaults for variables. You learned about Helm and how it makes Kubernetes deployment easier. To learn more and continue practicing, visit Helm's official website. There's also an amazing Helm tutorial on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning that you should check out as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Helm](../../Glossary/Tool/Helm.md) (19), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (11), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Prerequisites:** install (7)
> **Env Vars:** yaml (3), api (1)
> **CLI Commands:** apt (1), yum (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), for instance (1)
> **Tools:** terminal (1)
> **Warnings:** be aware (1)

#### [Kubespray](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=0)** - [Narrator] Manually deploying [Kubernetes](../../Skills/DevOps/Kubernetes.md) clusters can be challenging for administrators. Luckily, there are automation tools that exist to make this easier, and Kubespray is one of them. Kubespray is an open source tool for deploying and managing Kubernetes clusters. It works with public cloud, on premises, bare metal and even test environment solutions, making it ideal for managing highly available clusters across multiple different platforms. Kubespray should be used when you want to set up a production Kubernetes cluster in on-prem or bare metal environments that lack sophisticated managed solutions, such as GKE/EKS or AKS, or it can also be used when you want to set up a production grade Kubernetes cluster in cloud environments without losing control over the control plane components to the managed cloud provider. Kubespray offers several compelling features, such as [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md)-powered deployment, which enables you to leverage the power of Ansible for managing automating Kubernetes cluster deployment. Kubespray enables you to deploy Kubernetes clusters on various platforms, like AWS, GCP or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). You can also easily scale up your cluster up and down to meet your changing needs using Kubespray. Kubespray customization feature is one of my favorite features. It enables you to tailor your cluster's deployments by modifying Ansible variables and inventory files. To deploy Kubernetes cluster using Kubespray, you need to clone Kubespray's [GitHub](../../Skills/Software%20Development/GitHub.md) repository to your local machine and then install the required dependencies,
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-essential-tools/kubespray?u=76281980&t=93)** such as Ansible, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), or Jija2 You'll then need to create an inventory file to define your desired cluster configuration. And finally, run the Kubespray Ansible Playbook command to deploy the Kubernetes cluster. By harnessing the power of Kubespray, you can now deploy a managed Kubernetes clusters with ease and confidence. To learn more about Kubespray, visit our official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (9), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (5), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** ansible (5), make (1), aws (1), python (1)
> **Env Vars:** gke (1), eks (1), aks (1), aws (1), gcp (1)
> **Analogies:** such as (3)
> **Prerequisites:** set up (2), install (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 5. Kubernetes Monitoring Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Kubernetes Dashboard](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=0)** - [Tutor] Having one place to monitor everything that's happening in your [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster can be very beneficial. The Kubernetes dashboard is a web-based user interface for Kubernetes clusters. It enables you to manage Kubernetes clusters and the applications running inside of them. There are several use cases for the Kubernetes dashboard. You can use it to scale pods and nodes, view error reports, see logs and metrics, initiate rolling updates and even create, edit and restart Kubernetes resources. The Kubernetes dashboard isn't available by default. Rather, it is available as a container and has to be manually deployed into the Kubernetes cluster. It was set up this way by the Kubernetes team to ensure that it doesn't consume resources in your Kubernetes cluster if you decided to use a different tool for managing, monitoring and troubleshooting applications or the cluster itself. To deploy the Kubernetes cluster into your dashboard, the first thing you need to do is set up access control. This is because the Kubernetes dashboard deploys with a minimal role-based access control configuration by default, so it would only support users logging in with the (indistinct) token. The next thing you need to do is run this command to deploy the dashboard UI into your cluster. On applying the dashboard application to your cluster, you need to create a secure channel to your Kubernetes cluster. To do this, you need to run the QCTL proxy command. If everything goes well, you should now be able to access the Kubernetes dashboard at the URL displayed on your terminal. There are too many elements in the Kubernetes dashboard interface, the cluster view and the workload view.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=94)** The cluster view lets you view data and perform operations at the Kubernetes cluster level. It includes the namespaces and node sub view. The namespace sub view is an overview of cluster namespaces. Here you can drill down into the namespace, save recent events related to the resources within that namespace. On the other hand, the node sub view contains a list of all Kubernetes nodes registered with the Kubernetes cluster. You can see labels, node status and even summary resource utilization data. The workload view shows details of applications running in the Kubernetes cluster. It provides summary information about the pods, including status, number of restarts, containers running in the pod, and even the controller that created the pod. You can also view detailed information about other Kubernetes resources, like deployment, replica set and other Kubernetes controllers in the workload view. This is what the Kubernetes dashboard looks like. You can see the workflow view here and the cluster view. There are other views as well, like the service and the config and storage. Let's take a look at the workload view. If you wanted to look at the pods, let's change the name space for instance. For instance, it's currently in the default name space but I want to move it to the emojivoto name space. On doing that, I can see the different services. I can see the node that is running on the status, number of restarts, CPU usage and so much more. And if we go into the cluster view, for instance, we could see things like the event if we had one running, cluster role bindings, persistence volumes,
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-essential-tools/kubernetes-dashboard?u=76281980&t=187)** role bindings, rolls, service accounts and so much more. These applications allows you to get full details into your Kubernetes cluster or the application running on it. Even though you won't be able to do everything you typically do in your command line via the Kubernetes dashboard UI, it can be very beneficial for beginners or for teams who want to see a holistic view of the applications and the Kubernetes cluster. To learn more about this tool, visit the official [GitHub](../../Skills/Software%20Development/GitHub.md) repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (25), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** kubernetes dashboard (8), terminal (1), command line (1), github (1)
> **CLI Commands:** node (4)
> **Env Vars:** qctl (1), url (1), cpu (1)
> **Analogies:** for instance (3)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [tutor] (1)

#### [Prometheus](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=0)** - [Instructor] Prometheus is one of the most popular monitoring and alerting tools in the [Kubernetes](../../Skills/DevOps/Kubernetes.md) ecosystem. It provides out-of-the-box monitoring capabilities for Kubernetes. It is powerful, free and has an active community that can help you get up to speed. Prometheus provides four types of metrics. The first one is the counter metric which is ideal for measurements when an event starts or for counting the total number of events. This metric can be resetted or incremented. It also has the gauge metric which is ideal for points in time values like memory usage, in-progress requests, and temperature. This metric can measure changes in either positive or negative directions. The historic metric is ideal for data aggregation. It can sample and categorize events with a total sum of all observed values. Finally, we have the summary metric. This metric is ideal for generating an accurate quantile range. It can support histogram metrics and also calculates quantiles over a sliding time window according to the total event sums and counts of observed values. There are two ways to install Prometheus in your Kubernetes cluster. You can either install it as a single binary running on your host, which is fine for learning, testing and developing purposes, but it is not very appropriate for containerized deployment. The second option is to install it as a Docker container which has several orchestration options like raw docker containers, Kubernetes deployment or even [Helm](../../Glossary/Tool/Helm.md). Here are some best practices to keep in mind when using Prometheus.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-essential-tools/prometheus?u=76281980&t=92)** Even though data is important, it isn't always necessary for every scenario. So instead of attempting to display all data within a single operation console, you should strive to display the most relevant information on your consoles and dashboard. When tracking event timing, consider using timestamps that indicates when each event occurred, rather than the time that past since the event occurred. This will help to eliminate the need for updating logic, and can also reduce errors as well. Even though labels help you refine and customize the data for your metrics, creating labels on a high scale can consume a large number of resources. That's why it's recommended to limit adding labels on metrics to 10 or fewer resources and only use them for metrics that actually require labels. And when you include metrics in a code base that is called more than a hundred times per second, or is performance-critical, it is recommended that you'd limit the operations you perform in the inner loop. As mentioned earlier, Prometheus is one of the most used monitoring tools in the Kubernetes space. It has a lot more features and components that have not been covered in this video. To learn about Prometheus, visit the official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Helm](../../Glossary/Tool/Helm.md) (1)
> **Prerequisites:** install (3)
> **CLI Commands:** docker (2)
> **Best Practices:** recommended (2)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Jaeger](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=0)** - [Instructor] Jaeger is an open-source end-to-end tool that is used for monitoring and troubleshooting transactions in complex distributor systems like [Kubernetes](../../Skills/DevOps/Kubernetes.md). It is easy to set up as it comes with an all-in-one image that includes the Jaeger UI where you can see all of these different traces. Jaeger can be used for performance and latency optimization, root cause analysis, service dependency analysis, and even distributed context propagation. Setting up Jaeger in your local environment requires you to follow these steps. First, your application must be instrumented to enable you to send tracing data to Jaeger. The Jaeger team recommends using the OpenTelemetry instrumentation and SDKs for this. On completing the instrumentation, you can go ahead and install the all-in-one image. This image is an executable design for quick local testing and launching the Jaeger UI. The next thing you need to do is start the all-in-one image. The simplest way to do this is to use the previous image published on Docker Hub or to run the Jaeger all-in-one executable from the binary distributed archives. Then you would proceed to install Jaeger, and after doing this, you can go to localhost:16686 to access the Jaeger UI. This is what the Jaeger UI typically looks like. You can choose a list of services, select certain operations that get at a certain API endpoint, add tags, set a time duration, add maximum and minimum duration, and even limit results as well. Once you've added the required data,
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-essential-tools/jaeger?u=76281980&t=92)** you can go ahead and click on find traces. This is going to generate traces and monitoring of your application, or the service in this case, which is Jaeger-Query. You can scroll through if it has like a lot more traces defined, or just select a different API path. You can also compare several UIs or see a [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) of your application. This is a simple example of how to use Jaeger using a simple service, but you can use this for a lot more complex stuff and use it to define and see several things happening in your Kubernetes application. To learn more about Jaeger, its architecture, and its login capabilities, visit your official website. You can also check out this amazing tutorial by Yuri to get a hands-on experience on how to use Jaeger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** api (2)
> **URLs:** [localhost:16686](https://localhost:16686) (1)
> **Ports:** :16686 (1)
> **UI Navigation:** click on (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-essential-tools/next-steps?u=76281980&t=0)** - [Speaker] According to the Stack Overflow developer survey, [Kubernetes](../../Skills/DevOps/Kubernetes.md) is the second most loved and most wanted platform. Due to its popularity and usage, there's a plethora of Kubernetes tools out there. As I record this course, I bet there's another company or developer out there creating another Kubernetes tool. To ensure you don't feel overwhelmed while trying to find the right Kubernetes tool, you need to understand the problem you're trying to solve and go for tools that do not make your development workflow more complicated than it is already. To discover and learn more about other Kubernetes tools not covered in this course, visit the CNCF landscape, find a tool of choice and search for a tutorial for that tool on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. Thank you for sticking with me till the end of this course and see you on the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** cncf (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [speaker] (1)


## Instructor

- [Edidiong Asikpo](../../Instructors/DevOps/Edidiong%20Asikpo.md)

## Skills Covered

- Kubernetes

## Path Context

### In [Getting Started with Kubernetes](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Kubernetes.md)
← [Kubernetes- Your First Project (2021)](Kubernetes-%20Your%20First%20Project%20(2021).md) | **3 of 6** | [Kubernetes- Microservices](Kubernetes-%20Microservices.md) →

## Appears In

- [Getting Started with Kubernetes](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Kubernetes.md)

## Related Courses

_Courses sharing skills:_

- [Spring On Kubernetes Deploying And Managing Cloud Native Applications](../Cloud%20Computing/Spring%20On%20Kubernetes%20Deploying%20And%20Managing%20Cloud%20Native%20Applications.md) — Kubernetes
- [Securing Containers and Kubernetes Ecosystem](Securing%20Containers%20and%20Kubernetes%20Ecosystem.md) — Kubernetes
- [Kubernetes- Cloud Native Ecosystem](Kubernetes-%20Cloud%20Native%20Ecosystem.md) — Kubernetes
- [Kubernetes- Microservices](Kubernetes-%20Microservices.md) — Kubernetes
- [Kubernetes- Your First Project (2021)](Kubernetes-%20Your%20First%20Project%20(2021).md) — Kubernetes

---

[↑ Back to top](#)