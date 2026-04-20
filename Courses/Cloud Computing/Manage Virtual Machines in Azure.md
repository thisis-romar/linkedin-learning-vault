---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: manage-virtual-machines-in-azure
url: "https://www.linkedin.com/learning/manage-virtual-machines-in-azure"
duration_minutes: 146
duration: 2h 26m
level: Intermediate
updated: 7/18/2023
learners: 4424
skills:
  - Virtual Machines
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHJBAcloDFwGQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689359465292?e=2147483647&amp;v=beta&amp;t=h7r5Tg9LOE2IJyBYS8doBYcUkcXV40H2LJ91DjVjeLU"
linkedin_topic: Cloud Computing
learning_paths:
  - Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/virtual-machines
  - skill/microsoft-azure
status: not-started
created: 2026-04-19
---

![Manage Virtual Machines in Azure](https://media.licdn.com/dms/image/v2/D560DAQHJBAcloDFwGQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689359465292?e=2147483647&amp;v=beta&amp;t=h7r5Tg9LOE2IJyBYS8doBYcUkcXV40H2LJ91DjVjeLU)

# Manage Virtual Machines in Azure

> If you’re currently working or looking to land a new role as an Azure administrator, you need to know the ins and outs of virtual machine configuration and management. This hands-on, demo-focused course provides a deep dive into the key concepts, core skills, and functionalities of virtual machine management in Azure. Join instructor Brien Posey as he shows you the basics of creating an Azure VM a

> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure) | 2h 26m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Brien Posey]]

## Skills Covered

- Virtual Machines
- Microsoft Azure

## Table of Contents

### Introduction

#### Azure VM management
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/azure-vm-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/azure-vm-management?u=76281980&t=0)** - [Instructor] Microsoft Azure is a great platform for hosting virtual machines.
>
> **[0:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/azure-vm-management?u=76281980&t=4)** Even so, there are a dizzying array of options associated with Azure virtual machines.
>
> **[0:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/azure-vm-management?u=76281980&t=9)** In this LinkedIn learning course, I'll cut through the complexity that is so often associated with Azure virtual machines and show you what you really need to know in order to use Azure VMs effectively.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/azure-vm-management?u=76281980&t=19)** I'm Brien Posey, a 21 time Microsoft MVP and I'll be your instructor for this course.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/azure-vm-management?u=76281980&t=25)** So if you're ready to learn all about Azure virtual machines, then I'll welcome you to join me in this LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Env Vars:** mvp (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, it will be helpful for you to have a basic understanding of fundamental IT concepts, such as networking, cloud computing, and virtual machines.
>
> **[0:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980&t=8)** But if you don't, that's okay.
>
> **[0:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980&t=10)** The first four videos in this course are designed to get you started quickly.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980&t=14)** In those videos, I explain how to create Azure virtual machines in the quickest and easiest way possible.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980&t=19)** I'll also be showing you how to log into those virtual machines.
>
> **[0:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/what-you-should-know?u=76281980&t=23)** After the first four videos, the remainder of the course focuses on various configuration options, such as attaching virtual hard disks, or setting up a firewall.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Azure VM Basics

#### Create an Azure VM
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=0)** - [Instructor] If you're brand new to Microsoft Azure virtual machines and you just want to get a virtual machine up and running in the easiest way possible without worrying about all of the underlying technical details then this video is for you.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=11)** In this video, I'm going to show you the easiest way to create a virtual machine, and then I'll come back in some of the later videos and talk about some of the technical details.
>
> **[0:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=20)** So to get started, what you would need to do is click on create a resource.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=24)** Now you'll notice that we have a shortcut to virtual machines.
>
> **[0:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=26)** This shortcut only exists because I've already created some virtual machines in the past.
>
> **[0:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=32)** Typically, if you're just getting started, what you would need to do is click on create a resource, because the virtual machine shortcut probably isn't going to be there.
>
> **[0:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=39)** So I'm going to click create a resource, and then I'm going to click on virtual machine, and I'll click create.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=51)** And this is going to take me to the create a virtual machine screen.
>
> **[0:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=54)** So the first thing that we have to do is to select our subscription, which is selected by default.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=59)** Next, we have to choose a resource group.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=61)** If you've already got a resource group you're free to use it, otherwise, Azure will create a resource group for you.
>
> **[1:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=66)** You can see that right now this is set to new resource group, so that's taken care of.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=72)** The next thing that you have to do is to provide a name for the virtual machine that you're creating.
>
> **[1:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=76)** You can call the virtual machine anything that you want, for the purposes of demonstration.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=80)** I'm just going to call this virtual machine Windows.
>
> **[1:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=83)** (keyboard clacking) Next, you'll want to select a region, or you can simply go with the defaults as I'm going to do here.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=89)** And then scroll down a little bit and you'll need to select your virtual machine image.
>
> **[1:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=94)** The image pertains to the operating system that's going to be installed on the virtual machine.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=98)** As you can see, Azure defaults to using Linux, but we could make this a Windows virtual machine instead.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=104)** So I'm going to click on the down arrow, and you can see the various operating systems that are available to us.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=109)** I'm going to choose Windows Server 2022 Data Center and then I'm going to scroll down a little bit more.
>
> **[1:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=116)** And we have to provide an administrator, a username and password.
>
> **[1:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=119)** We can't just use administrator as the admin username.
>
> **[2:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=122)** We have to give Azure something else.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=125)** So I'm going to use Azure Admin for the username, (keyboard clacking) and then I'll supply a password, (keyboard clacking) and then I'll confirm that password, (keyboard clacking) now, we could click review plus create, but if I do that there's a validation process that has to occur, and the validation is going to fail because we haven't provided any networking details.
>
> **[2:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=150)** So rather than going ahead and clicking review plus create, what I'm going to do is skip ahead and I'm just going to select the networking tab.
>
> **[2:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=159)** So we have to provide a virtual network.
>
> **[2:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=161)** We can click the down arrow to select an existing virtual network, or we could simply create a new virtual network which is the default behavior.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=168)** We're also going to need a subnet and a public IP.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=172)** And you can see the new ones are created by default if you don't select an existing one.
>
> **[2:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=178)** So with that said, I'm going to go ahead and click review plus create, and our validation check passed, and you can see what the estimated price is for running this virtual machine instance.
>
> **[3:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=191)** I'm going to go ahead and click on create, and now the virtual machine is going to be created.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=200)** So we receive a message saying that the deployment is in progress, and the deployment process takes just a few minutes to complete.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=210)** And so now we receive a message saying that the deployment was successful.
>
> **[3:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=213)** So I'm going to click home, and then I'm going to click on virtual machines, and this is going to take me to the virtual machines console, and you can see the newly created virtual machine.
>
> **[3:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm?u=76281980&t=225)** So that's how you create an Azure virtual machine in the easiest way possible.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (2), select the (1)
> **Code Keywords:** default. (1), else. (1), public (1)
> **Prerequisites:** getting started (1), you'll need (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Create an Azure VM with a preset configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to create a virtual machine in the quickest and easiest way possible.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=6)** But how do we know if the virtual machine that we created is well suited to our workloads?
>
> **[0:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=10)** Well, the answer is that we really don't, because you see every workload has different needs.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=15)** Some workloads require a lot of virtual machine resources, others maybe not so much.
>
> **[0:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=20)** So, in order to accommodate the needs of various types of workloads, Microsoft Azure allows you to create virtual machines of different sizes.
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=28)** A size refers to the hardware resources that are made available to the virtual machine.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=33)** And I'm going to be talking all about sizes in one of the later videos.
>
> **[0:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=37)** But the thing that I want to point out for right now is that it's important to match the size of the virtual machine to the workload that the virtual machine is going to be running.
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=46)** And if you want to align the size of the virtual machine to your workload but you still want to make the creation process as easy as possible, there's a shortcut that you can use, and I want to show you what that shortcut looks like right now.
>
> **[0:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=58)** So right now I'm in the virtual machines console and I'm going to go to Create, and rather than choosing the Azure virtual machine option, I'm going to skip down to the next option, Azure virtual machine with preset configuration.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=70)** I'll click on that now.
>
> **[1:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=73)** So this takes me to a screen where I can basically tell Azure how I'm going to be using the virtual machine.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=79)** So as you can see, we can choose between a Dev/Test environment and a Production environment.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=84)** So I'm going to choose Dev/Test, and then we can choose how we want this virtual machine to be optimized.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=90)** There are general purpose virtual machines, Memory optimized virtual machines, and Compute optimized virtual machines.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=96)** So I'm going to choose the General purpose option.
>
> **[1:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=100)** From there, I'm going to click Continue to create a VM, and this is going to take me to the screen that you saw on the previous video where we can create a virtual machine.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=109)** Now, there are a few things that we have to do here of course, the first thing being entering a name for the virtual machine that we're creating.
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=115)** In the previous video, I created a Windows virtual machine.
>
> **[1:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=118)** So this time let's create a Linux virtual machine instead.
>
> **[2:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=121)** I'm just going to call this Linux.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=125)** So now I'm going to scroll down, and we need to make sure that a Linux image has been selected, which it is selected by default.
>
> **[2:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=133)** And then if you look right here, just above my mouse pointer, you can see the virtual machine size option.
>
> **[2:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=138)** Now, the size pertains to the hardware resources that are going to be allocated to the virtual machine.
>
> **[2:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=144)** Now, the size was populated automatically based on the choices that I made on the previous screen, but you can choose a different size if you want.
>
> **[2:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=151)** All you have to do is click on the down arrow, and then just choose a different size.
>
> **[2:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=157)** Now, one way that creating a Linux virtual machine differs from creating a Windows virtual machine is that Linux gives you two different authentication options.
>
> **[2:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=165)** You can authenticate based on an SSH public key, which is the default behavior, or you can authenticate based on a password.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=172)** So let's take a look at the SSH public key option.
>
> **[2:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=175)** So if I scroll down a little bit more, you can see that we're prompted to provide a username and that username is populated automatically based on the username that I chose when I created the previous virtual machine.
>
> **[3:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=188)** Then just below the Username option, we have the SSH public key source option, and this is set by default to generate a new key.
>
> **[3:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=195)** I'll leave the default set.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=196)** Then we have to provide a name for the key pair.
>
> **[3:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=199)** I'll continue to use the default option, and then I'm going to click Review + Create.
>
> **[3:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=204)** Now, sometimes when you click Review + Create, you'll receive a validation error simply because you didn't visit the networking screen.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=212)** Sometimes the validation fails, sometimes it doesn't.
>
> **[3:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=215)** In this case, the validation passed.
>
> **[3:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=216)** But if it hadn't, then all you would have to do is go to the Networking tab, and then click Review + Create, and that seems to fix the problem.
>
> **[3:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=224)** So here we are on the Review + Create screen and you can see that the validation passed.
>
> **[3:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=229)** So all we have to do at this point is click on Create and then the virtual machine will be created.
>
> **[3:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=235)** Now, one thing that's going to be a little bit different than what you saw in the previous video is that because we are using an SSH key pair, we're going to be prompted to download that SSH key.
>
> **[4:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=245)** So I'm going to click Download private key and create resource.
>
> **[4:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=250)** And then I'm going to click Open file to open the key that we're creating.
>
> **[4:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=255)** And as you can see, this is just an RSA private key, and we need to save this.
>
> **[4:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=260)** In a production environment, you would want to put this somewhere secure.
>
> **[4:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=263)** Being that this is just a dev test virtual machine, I'm going to save it to my local hard drive, but you don't want to lose this private key because you won't be able to log in without it.
>
> **[4:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=271)** So I'm going to go to File, Save As, and I'm just going to put this in my Documents folder, and I'll call this Linux_key.pem.
>
> **[4:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=284)** I'll click Save.
>
> **[4:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=287)** And so now the key has been saved out to my hard disk, and we can see that the deployment process has succeeded.
>
> **[4:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-an-azure-vm-with-a-preset-configuration?u=76281980&t=294)** So, that's how you go about creating a new virtual machine using a preset configuration.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), private (3), continue (2), let (2), require (1)
> **UI Navigation:** go to (3), click on (3), scroll down (2), open the (1)
> **CLI Commands:** ssh (5), make (2)
> **Env Vars:** ssh (5), rsa (1)
> **Cross-References:** previous video (4)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Connect to a Windows virtual machine
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=0)** - [Instructor] In one of the earlier videos, I showed you how to create a Windows virtual machine in Azure.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=5)** So let's take a look at how to connect to that virtual machine.
>
> **[0:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=8)** So right now, I'm signed into Azure in the Virtual Machines portal.
>
> **[0:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=12)** And you can see that I have a Linux virtual machine and a Windows virtual machine.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=16)** I'm going to go ahead and click on the Windows virtual machine.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=21)** Next, I'm going to click on Connect.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=25)** Now, connection to a Windows virtual machine is generally done by way of the RDP protocol, that's the remote desktop protocol that's used by the remote desktop connection utility that comes with Windows.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=36)** So as you can see, there's a quick validation check that occurs, and then Microsoft displays the port number and the IP address for this particular virtual machine.
>
> **[0:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=45)** Now, we could open up the Windows RDP client and manually connect to this virtual machine, that's certainly an option, but the easier option is to simply download an RDP file, and that's going to automate the connectivity process, so let's do that.
>
> **[0:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=58)** I'm going to click on the Download RDP File button, and when I do that, I receive a warning message from my browser saying Windows.RDP could harm your device.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=69)** Do you want to keep it anyway?
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=71)** And the reason why this happens is because there are attackers out there that provide malicious RDP files as a way of trying to get people to connect to a malicious server.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=80)** In this case, we're not connecting to anything malicious, we're connecting to a cloud-based virtual machine that we created ourselves.
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=86)** So I'm going to click on Keep.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=90)** Next, I'm going to click Open File, and I receive a prompt asking me if I want to connect to this virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=97)** I'll click Connect.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=101)** And you can see that Azure Admin has been entered as the username, that is the username that's associated with this virtual machine.
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=107)** So, Microsoft will pre-populate the RDP connection file with the username that is required.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=114)** Now, if for whatever reason the username was wrong, then all you would have to do is click on More Choices and then click on Use A Different Account.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=123)** In this case, Azure Admin is correct, so I'm going to go with that, and I'll enter my password for the virtual machine, and I'll click OK.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=134)** Now, I'm asked if I want to connect to the virtual machine in spite of any certificate errors, this is totally normal, so just click Yes.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=143)** And now, the remote desktop console opens, so we're connected to the remote virtual machine.
>
> **[2:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=148)** So you can see the virtual machine's IP address right here.
>
> **[2:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=152)** And as a matter of fact, if I click Restore, you can see the virtual machine in a window versus the local computer desktop and the Azure window in the background.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=163)** I'll go ahead and maximize this.
>
> **[2:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=165)** Now, when you're done, you could shut down the virtual machine in the usual way, or if you simply want to close out of the window, then just click on the close icon.
>
> **[2:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=175)** And you'll see a message indicating that your remote session will be disconnected.
>
> **[2:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=178)** Click OK.
>
> **[3:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=180)** And now, you've severed that connection.
>
> **[3:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-windows-virtual-machine?u=76281980&t=182)** So that's how you connect to a Windows virtual machine.

> [!info]- Semantic Content
>
> **Env Vars:** rdp (7)
> **UI Navigation:** click on (7)
> **Code Keywords:** let (2), case, (2), this. (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Connect to a Linux virtual machine
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=0)** - [Instructor] In one of the earlier videos I showed you how to create a Linux virtual machine.
>
> **[0:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=4)** Now I want to take a look at how to connect to that virtual machine.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=7)** Now, as you may recall, we chose SSH based authentication for that Linux virtual machine.
>
> **[0:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=13)** And what that means is that you're going to have to have an SSH client in order to be able to connect to the virtual machine.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=18)** Now, there are any number of third party clients that you can use, including some really good free ones such as PuTTY, but there's also an SSH client that's built into Windows.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=27)** Let's take a look at what that looks like.
>
> **[0:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=29)** So what I'm going to do is open up settings.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=33)** Next I'm going to click on Apps, and then I'm going to click on Optional features.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=41)** And you can see right here that we have the OpenSSH Client installed.
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=46)** And if for whatever reason that client isn't installed on your system, then all you have to do is go to Add a feature and then install it.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=53)** So I'm going to go ahead and close this out.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=56)** Now, the OpenSSH client that I'm going to be using is accessible through PowerShell.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=61)** So let me go ahead and open up PowerShell.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=64)** And all you have to do to find out if the client is installed and working properly is just type SSH and press Enter.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=70)** And when you do you should see the syntax for the SSH client.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=74)** (keyboard clicks) So in this case, SSH is working.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=79)** Let me go ahead and minimize this.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=84)** And so now let's move forward with connecting to our Linux machine.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=87)** I'm going to go ahead and click on the Linux virtual machine and then I'm going to click Connect.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=95)** So Azure does a quick status check and the next thing that we have to do is to provide the path and file name for our key file that we created when we created the virtual machine.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=105)** So I saved the key file in the Documents folder on my machine.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=109)** So let's go ahead and open that up.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=114)** And so the file is called Linux_key.pem and if I right-click and go to Properties and then choose the Location tab you can see the full path to this file.
>
> **[2:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=126)** So I'm going to right-click on the path and choose Copy and then I'll cancel out of this.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=134)** And then I'm just going to paste that in here by pressing Control + V.
>
> **[2:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=138)** (keyboard clicks) So the path has been pasted.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=141)** I'll add a backslash and then we need the file name.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=145)** So if I go back to File Explorer you can see that the file name is Linux_key.pem.
>
> **[2:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=152)** So I'll enter that.
>
> **[2:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=155)** (keyboard clicks) And so then you can see that as I enter the private key path, the command in the box below is updated to reflect that path.
>
> **[2:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=165)** So here we have ssh -i followed by the path C:\Users\Brien\Documents\Linux_Key.pem.
>
> **[2:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=173)** So then we have the username which is azureuser@ and then the IP address associated with the virtual machine.
>
> **[3:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=180)** So I'm going to click copy and that's going to copy that entire command to the clipboard.
>
> **[3:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=186)** And so now let's switch back over to PowerShell.
>
> **[3:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=189)** I'm going to enter the CLS command to clear the screen, just to get rid of some of the clutter.
>
> **[3:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=193)** (keyboard clicks) And then I'm going to press Control + V.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=196)** And that's going to paste that command that you saw on the previous screen into PowerShell.
>
> **[3:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=201)** (keyboard clicks) Now when I do that, I'm going to get a message indicating that the authenticity of the host can't be established.
>
> **[3:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=209)** This happens because this is the very first time that I've ever connected to this particular virtual machine.
>
> **[3:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=213)** In the future this message won't be shown.
>
> **[3:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=216)** So the message goes on to ask, "Are you sure you want to continue connecting?"
>
> **[3:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=220)** And all you have to do is type yes.
>
> **[3:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=222)** (keyboard clicks) I'll press Enter.
>
> **[3:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=226)** And so now that virtual machine name is being added to my list of known hosts, so that that way I won't get that message in the future.
>
> **[3:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=233)** And if you look at the prompt in green at the very bottom of the screen, you can see that we are indeed connected to our Linux virtual machine.
>
> **[4:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-to-a-linux-virtual-machine?u=76281980&t=240)** So that's how you use the SSH client to connect to a Linux virtual machine running on Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), case, (1), private (1), switch (1)
> **CLI Commands:** ssh (8), find (1)
> **Env Vars:** ssh (7), cls (1)
> **UI Navigation:** click on (3), go to (2), right-click (2)
> **Tools:** powershell (4)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)


### 2. Architecture

#### Understand VM availability options
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=0)** - [Instructor] In the previous section of this course, I spent quite a bit of time showing you the quickest and easiest way to create an Azure virtual machine instance.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=7)** Now I want to take a step back and talk about some of the more commonly used configuration options that you're likely to see when you create a new virtual machine instance.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=16)** And I want to start by talking about some of the availability options.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=19)** So here we are on the virtual machine screen and as you can see, we don't have any virtual machines right now.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=24)** So I'm going to go ahead and click the Create button and I'll choose the Azure virtual machine option.
>
> **[0:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=32)** And this takes me to the create a virtual machine screen.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=36)** Now, the option that I want to talk about is this one right here, Availability options.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=40)** And you can see that right now this is set to No infrastructure redundancy required.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=44)** So the default behavior is not to use any sort of redundancy for newly created virtual machines but you can implement some high availability options if you choose to.
>
> **[0:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=55)** Typically, there is going to be an extra cost associated with that but oftentimes, business needs will drive redundancy within virtual machine instances.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=63)** So let's take a look at the options that are available.
>
> **[1:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=66)** I'll go ahead and click on the down arrow and you can see that we have three options.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=70)** The first option is Availability zone.
>
> **[1:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=73)** So the availability zone is a physically separate zone within an Azure region and there are three availability zones per supported Azure region.
>
> **[1:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=82)** And these truly are separate zones.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=84)** Each availability zone has its own power source, its own network, its own cooling.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=89)** The idea is that if a problem were to affect one zone, then the other zone shouldn't be impacted by that problem.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=95)** So if a zone is compromised, then any applications that have been replicated over to another zone should continue to be available.
>
> **[1:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=103)** And that doesn't just hold true for applications, it also holds true for any data that you may have replicated over to another zone.
>
> **[1:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=110)** So the next option is the Virtual machine scale scale set option.
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=115)** So an Azure virtual machine skillset lets you create and manage a group of load balanced virtual machines.
>
> **[2:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=122)** The skill set can automatically increase or decrease the number of VM instances in response to demand or you can do that on a scheduled basis.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=130)** So if you know that there's a particular time of day that's going to be especially busy, you can automatically scale up so that there are a sufficient number of virtual machine instances available to meet that demand.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=141)** Skillsets can be used to make an application highly available but they also give you a way to centrally manage, configure and update your virtual machine instances.
>
> **[2:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=152)** Now the last option is an Availability set.
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=156)** An availability set is a logical grouping of virtual machines that make up an application.
>
> **[2:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=161)** And the structure can provide both redundancy and high availability for the virtual machines that make up an application.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=169)** In fact, an availability set can give you up to 99.95% guaranteed uptime.
>
> **[2:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=175)** So if you have an application that is under a very stringent availability SLA, then an availability set might be the way to go.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=183)** But keep in mind that in order for an availability set to do its job, you're going to need at least two, preferably more copies, of the virtual machines within that availability set.
>
> **[3:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/understand-vm-availability-options?u=76281980&t=193)** So those are the availability options that exist for Azure virtual machines.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** let (1), continue (1)
> **Env Vars:** sla (1)
> **Versions:** 99.95 (1)
> **UI Navigation:** click on (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)

#### Choose a VM's architecture and size
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=0)** - [Narrator] When you create a new Azure virtual machine, you're going to need to consider the architecture that you want to use and the virtual machine size.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=7)** So let's take a look at the options that exist.
>
> **[0:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=10)** Right now, I'm on the virtual machine screen and I'm going to click the create button.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=16)** From there, I'm going to click on Azure Virtual Machine.
>
> **[0:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=20)** And this brings me to the create a virtual machine screen.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=24)** So I'm going to scroll down just a little bit and here you can see that we have an option called VM Architecture.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=31)** So this essentially determines what hardware platform the virtual machine is going to run on.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=36)** So as you can see, we have an option for ARM 64 and an option for X 64.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=43)** Now, the options that appear here can vary depending on the virtual machine image that you choose.
>
> **[0:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=48)** The image controls the operating system that is going to be installed on the virtual machine.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=53)** By default, Azure Virtual machines defaults to a particular Linux server build but we do have other choices.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=60)** So for example, I might select Windows Server 2022 Data Center edition.
>
> **[1:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=66)** Now, occasionally you may find that when you choose a new operating system, you'll initially get some errors under VM architecture telling you that the image isn't available.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=75)** Typically, that error message will go away after a few seconds if you do happen to receive that error.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=80)** Now, if you look down here you can see that we have a size option.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=84)** And the size option allows you to control what type of hardware is going to be allocated to that virtual machine instance.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=90)** So as you can see, the default option right here is a standard D2S V3 virtual machine instance.
>
> **[1:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=97)** This particular virtual machine instance has two virtual jeep.
>
> **[1:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=100)** Rephrase.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=102)** This particular virtual machine instance has two virtual CPUs and eight gigabytes of memory and it's going to cost approximately $70.08 a month to run.
>
> **[1:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=113)** Keep in mind that the cost that's presented here is just an estimate.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=117)** But this isn't the only virtual machine size that's available.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=120)** If I click the down arrow, you can see that we have recently used sizes.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=125)** So if you've created a lot of virtual machine instances lately, you'll see the sizes that you've used recently appear right here.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=132)** You can also see the sizes that are recommended by the image publisher.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=136)** So in this case, I chose a Windows virtual machine instance, the publisher being Microsoft, because it is Windows.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=143)** And so Microsoft is recommending these three instance sizes.
>
> **[2:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=147)** Now, depending on what it is that you're doing you may need a bigger or potentially even a smaller virtual machine size.
>
> **[2:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=154)** So if that's the case, you're not limited to the sizes that you see on the screen.
>
> **[2:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=157)** You can click on see all sizes, and that's going to take you to the select a VM size option.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=164)** And you get this really nice detailed chart that shows you all of the different sizes of virtual machines that exist.
>
> **[2:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=171)** So for each one of these VM sizes that's listed, you can see what that instance size is typically used for.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=177)** In this case, these are all general purpose sizes.
>
> **[3:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=180)** You can see the number of virtual CPUs associated with each size.
>
> **[3:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=184)** You can see how much RAM is allocated to each size, the number of data discs that are created by default, the maximum number of storage IOPS that that particular size can handle, the amount of temporary storage that you get, whether or not premium discs are supported, and the approximate cost per month.
>
> **[3:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=202)** So you would simply select the size that you want to use and then click select, and then that size will be loaded and you can see that the price automatically changes to reflect your selection.
>
> **[3:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-architecture-and-size?u=76281980&t=214)** So that's just a quick rundown of the virtual machine architecture and size options that exist in Azure virtual machines.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), default, (2), let (1), for. (1)
> **Env Vars:** arm (1), d2s (1), ram (1), iops (1)
> **UI Navigation:** click on (2), scroll down (1), select the (1)
> **CLI Commands:** find (1)
> **Versions:** 70.08 (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Warnings:** keep in mind (1)

#### Work with spot instances
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=0)** - [Instructor] Anytime that you create a virtual machine instance within Azure, there's going to be a cost that's associated with running that virtual machine instance.
>
> **[0:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=8)** Now, one way that you can bring that cost down is by creating a spot instance.
>
> **[0:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=12)** Having said that though, a spot instance is not appropriate for every workload.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=16)** So let's take a look at how to create a spot instance and when you should and should not use a spot instance.
>
> **[0:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=22)** So right now I'm on the virtual machine screen and I'm going to click the Create button and I'm going to choose Azure virtual machine.
>
> **[0:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=32)** And that's going to take me to the Create a virtual machine screen.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=35)** I'm going to scroll down just a little bit.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=40)** And if you look right here, you can see that there's an option called Run with Azure Spot discount.
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=46)** So the idea behind this option is really simple.
>
> **[0:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=48)** The Microsoft Azure data center contains numerous physical servers, and those servers aren't being constantly used.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=56)** Workloads tend to fluctuate on those servers as people create and delete Azure virtual machines.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=62)** So at any given time, Microsoft has most likely got some compute resources that are setting idle, and they would rather not have those servers idle.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=70)** They would rather allow you to use that unused capacity at a deep discount than to simply have those machines setting idle.
>
> **[1:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=76)** So that's where spot instances come into play.
>
> **[1:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=78)** A spot instance is an instance that's designed to run on use capacity within the Azure data center.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=84)** Now, the flip side of that is that anytime that that capacity becomes needed once again, then Azure performs what's known as an eviction of spot instances.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=95)** What that means is that your instance is deprovisioned.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=98)** So you don't want to use a spot instance for any type of virtual machine that has an SLA associated with it.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=104)** You should typically use spot instances for things like DevTest environments where it doesn't matter if the workload is interrupted.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=111)** So let's take a look at how to go about creating a spot instance.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=114)** What I'm going to do is I'm going to select this checkbox right here next to Run with Azure Spot discount.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=120)** And when I do that, that's going to tell Azure that we want to create a spot instance.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=125)** Now, just underneath of the Run with Azure Spot discount option, you can see that we have an option for eviction type, which you can see right here.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=132)** And we have two options for eviction.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=134)** Remember, eviction is the process of deprovisioning a virtual machine instance once that capacity is no longer available.
>
> **[2:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=142)** So the first of the two options that we have is Capacity only, which you can see right here, and that is the default option.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=149)** The idea being that the spot instance will be evicted once capacity is no longer available in the Azure data center.
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=156)** Now, the other option which exists right here is Price or capacity.
>
> **[2:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=161)** So this particular option does two things.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=163)** First, if the capacity within the Azure data center becomes unavailable, then the spot instance will be evicted, just as it would've been had you chosen the Capacity only option.
>
> **[2:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=174)** The other thing is that the eviction can occur once it no longer becomes profitable for Microsoft to run that particular virtual machine instance.
>
> **[3:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=182)** So how do you know when a virtual machine is no longer profitable for Microsoft to run?
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=187)** Well, as I mentioned at the very beginning of this video, there's a certain cost associated with every virtual machine instance that you run.
>
> **[3:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=193)** So what you can do if you choose the Price or capacity option is you can set the maximum price that you want to pay per hour to run this particular virtual machine instance.
>
> **[3:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=203)** And you would enter that price right here where my mouse pointer is.
>
> **[3:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=206)** And so once the actual cost of the hardware exceeds the price that you put in, then the virtual machine instance would be evicted.
>
> **[3:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=215)** So what happens when a virtual machine instance is evicted?
>
> **[3:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=218)** Well, that's controlled by the eviction policy, and you can set the eviction policy right here.
>
> **[3:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=223)** So there are two different options.
>
> **[3:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=225)** The first option is Stop / Deallocate.
>
> **[3:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=228)** In other words, the virtual machine is evicted.
>
> **[3:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=231)** And so at that point, that evicted virtual machine is powered down.
>
> **[3:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=235)** And typically you will receive a 30 second notification when a virtual machine is about to be evicted.
>
> **[4:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=241)** Now, the other option is Delete.
>
> **[4:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=243)** So you can make it so that once this virtual machine instance is evicted, then it completely goes away.
>
> **[4:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=249)** Microsoft will just go ahead and delete that virtual machine instance and it will be as though it had never existed in the first place.
>
> **[4:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/work-with-spot-instances?u=76281980&t=256)** So that's how you go about creating a spot instance in Azure virtual machines.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2), type, (1)
> **UI Navigation:** scroll down (1), checkbox (1)
> **Definitions:** is an  (1), in other words (1)
> **CLI Commands:** make (1)
> **Env Vars:** sla (1)
> **Speakers:** - [instructor] (1)

#### Reserve VM capacity
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=0)** - [Instructor] Anytime that you create a virtual machine instance in Azure, there's going to be certain costs that are associated with that virtual machine instance.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=7)** In most cases, these costs are based on what's known as a pay-as-you-go plan.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=11)** In other words, you're not locked into any sort of long-term commitment.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=14)** If you decide to delete a virtual machine instance then once that instance has been deleted there aren't going to be any further charges associated with that instance.
>
> **[0:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=23)** Now that isn't the only option because sometimes you may find that you need to create a virtual machine instance that's going to be used for an extended period of time.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=31)** And when you do that, you can save a lot of money by creating a reservation for that instance.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=36)** A reservation is essentially a long-term commitment to run that instance for a specified period of time, usually one year or three years.
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=46)** And by making that commitment, you can save a lot of money.
>
> **[0:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=49)** At a maximum, you may get a discount of up to 72% off the instance cost.
>
> **[0:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=55)** Now, the actual discount that you get is going to vary depending on any number of factors such as the type of instance and the length of time that you've committed to.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=63)** Now, before I show you how to create a reservation, I need to point out that not every subscription type is eligible to create a reservation.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=70)** So you'll see what that looks like in just a few minutes.
>
> **[1:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=73)** Now, as you can see, I'm on the virtual machine screen and what I'm going to do is I'm going to click on reservations.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=79)** You can see it up at the top of the screen.
>
> **[1:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=82)** Next, I'm going to click on purchase and this is going to take me to the purchase reservation screen.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=89)** And you can see all of the various services that you can purchase a reservation for.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=95)** Now, right away, you'll probably notice that we have an error message saying no eligible subscriptions and then that error message goes on to say that you do not have sufficient permission on the subscription and that you need to have owner or reservation purchaser permissions on the subscription before you can purchase a reservation.
>
> **[1:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=112)** Now, the reason why I got this particular error message had nothing to do with my subscription.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=117)** Yes, my subscription isn't eligible for a reservation but that's not the reason why I got this particular message.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=123)** The reason why I received this message is simply because I haven't selected a subscription.
>
> **[2:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=129)** So if you look at the top of this window, you can see that there are two fields.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=132)** The first one is scope.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=134)** So I'm going to click on the down arrow, and then I'm going to choose single subscription because that's what I have.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=140)** Next, I'm going to go over to scope and billing subscription and there's a dropdown that I can use to select my subscription.
>
> **[2:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=147)** So I'm going to go ahead and do that.
>
> **[2:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=152)** And when I do that, you'll notice that the error message changes.
>
> **[2:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=155)** It still says subscription not eligible for purchase but the reason changes.
>
> **[2:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=160)** The error message says that the subscription is not eligible for reservation benefit and cannot be used to purchase a reservation.
>
> **[2:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=167)** And then it goes on to tell me that if I do want to purchase a reservation, then I would need one of these subscription types, those types being an enterprise agreement, a pay-as-you-go subscription, a CSP subscription, a Microsoft Customer Agreement subscription.
>
> **[3:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=182)** So those are the types of subscriptions that are eligible for purchasing reservations.
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=187)** In my case, I'm using a complimentary subscription provided by Microsoft.
>
> **[3:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=191)** So that's why I'm not able to purchase a reservation.
>
> **[3:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=194)** But if I were, then I would see an option right here where I would be able to select the type of resource and the commitment that I want to make.
>
> **[3:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=203)** So you'll notice up here that we have a few different filters.
>
> **[3:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=205)** We have a region option, we have the term, we have the billing frequency.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=210)** So we can use these various filters to select the type of reservation that we want to purchase.
>
> **[3:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=215)** And then once we've made that selection we would simply click add to cart and then proceed with the purchase.
>
> **[3:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/reserve-vm-capacity?u=76281980&t=221)** So that's how you would go about purchasing a reservation for an Azure virtual machine.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), select the (2), dropdown (1)
> **Code Keywords:** delete (1), for. (1), case, (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** known as (1), in other words (1)
> **Env Vars:** csp (1)
> **Analogies:** such as (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Create proximity placement groups
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=0)** - [Presenter] When you deploy a multi-tier application in Azure, it usually means that that application is going to span multiple virtual machine instances.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=7)** And in those types of situations, it's important to minimize latency between the virtual machine instances that make up the application.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=15)** One way that you can accomplish this is by creating a proximity placement group, so let's take a look at how that's done.
>
> **[0:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=22)** So here I am on the main Azure screen, and what I'm going to do is go up to the search box, and I'm going to type proximity, and then I'll choose proximity placement groups.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=36)** So now I'm taken into the proximity placement groups, and what I'm going to do is click on Create.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=43)** And as you can see, the process of creating a proximity placement group is really simple.
>
> **[0:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=48)** The first thing that we have to do is select the subscription that we want to use.
>
> **[0:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=52)** I'm going to go with my Visual Studio Premium with MSDN subscription.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=56)** Next, we have to select the resource group that we want to associate the proximity placement group with.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=62)** We can create a new resource group if we so desire, but I've got several pre-existing resource groups, so I'm just going to click the down arrow, and then I'm going to choose one of my existing resource groups.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=75)** Next, I need to provide a name for the proximity placement group that I'm creating.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=80)** You can call this anything that you want, for the sake of simplicity, I'm just going to call this Proximity.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=87)** Next, you would verify the region that the proximity placement group is going to be created in, and then finally, we come down to the intent details section.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=96)** This section needs a little bit of explaining.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=101)** Now, you'll notice that there's no red asterisk next to the VM sizes option, indicating that this is not a required field.
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=107)** However, your proximity placement group is more likely to succeed if you do go ahead and make a selection here.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=114)** The basic idea behind the VM sizes option is that you can select the virtual machine sizes that are going to be used in conjunction with the placement group that you're creating.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=123)** Now, again, you don't have to do this, but if you do happen to know what sizes of virtual machines are going to be used in that proximity placement group, then you can greatly increase your chances of having the proximity placement group succeed.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=136)** So I'm going to go ahead and click the down arrow.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=140)** And you can see that you can select multiple virtual machine instance sizes here, so I'm just going to select a few at random.
>
> **[2:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=148)** And you can also select your zone preference if you like.
>
> **[2:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=151)** You can choose zone one, zone two, or zone three, I'm going to leave this set at no zone preference, and then I'll click Review plus Create, and then I'll click Create.
>
> **[2:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=162)** And so it takes just a second to create the proximity placement group.
>
> **[2:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=166)** And you can see that the deployment process is complete.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=169)** I'll go ahead and clear this out.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=172)** And then I'm going to go back to the main Azure screen.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=177)** So the next thing that I want to do is create an Azure Virtual Machine, so I'm going to click on Virtual Machines, and then I'll click on Create, and then I'll click Azure Virtual Machine.
>
> **[3:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=190)** And rather than go through the entire process, I'm just going to skip ahead to the advanced tab, so I'll click on Advanced.
>
> **[3:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=197)** And what I wanted to show you on the advanced tab is that if you scroll down, at the very bottom there is a proximity placement group option, so what you would do is click on the down arrow, and then choose the proximity placement group that you just created.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=212)** And then this is going to cause the new virtual machine instance that you're creating to be placed into that proximity placement group.
>
> **[3:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=220)** So from there, you would click on Review plus Create and move forward with creating the virtual machine instance.
>
> **[3:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=225)** And incidentally, it is possible to add an existing virtual machine instance to a proximity placement group as well.
>
> **[3:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-proximity-placement-groups?u=76281980&t=232)** So that's how you create a proximity placement group in Microsoft Azure.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), select the (2), scroll down (1)
> **Code Keywords:** let (1), finally, (1), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** msdn (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [presenter] (1)


### 3. Security and Identity

#### Choose a VM's security type
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=0)** - [Instructor] Anytime that you create a new Azure virtual machine, it's important to think about that virtual machine's security needs.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=6)** When you create a new virtual machine, Microsoft allows you to choose from three different types of security.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=11)** So let's take a look at those security types.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=14)** Right now, I've got the Virtual Machine's console open, and I'm going to click on Create.
>
> **[0:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=20)** Next, I'm going to click on Azure Virtual Machine.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=24)** And this is going to take me to the create a virtual machine screen.
>
> **[0:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=29)** And if you look right here, just above my mouse pointer, you can see that there's an option for security type.
>
> **[0:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=34)** The security type option allows you to choose which type of security you want to apply to the virtual machine, and there are three different options.
>
> **[0:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=42)** The first option is the Standard security type.
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=46)** Now, when I choose the Standard security type, you'll notice that I get a message right away asking me if I want to revert to the Standard security type.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=53)** The reason why that happens is because the Standard security type is not the default security type.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=59)** The Standard security type provides you with the most basic security.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=63)** It's by no means the most advanced security.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=65)** So Microsoft doesn't make it a default option.
>
> **[1:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=68)** The Standard security type should really only be used in situations where your virtual machine isn't going to be compatible with the higher levels of security.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=77)** So if you do want to use Standard security, you would simply click Revert to Standard.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=81)** And that will set the security type to Standard.
>
> **[1:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=85)** Now, the default option is what's known as Trusted launch virtual machines.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=90)** Trusted launch virtual machines gives you everything that you get with the Standard security type, but you get a few extra things.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=96)** Incidentally though, the Trusted launch virtual machines security type can only be used with gen two virtual machines.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=104)** So what does the security type give you?
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=107)** Well, for starters, it gives you access to Secure Boot.
>
> **[1:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=110)** If you're not familiar with Secure Boot, it's a Hyper-V feature that prevents unauthorized code from running at the time that you boot up the system.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=117)** The other thing that it gives you is access to virtual TPM.
>
> **[2:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=121)** TPM stands for a Trusted Platform Module.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=123)** It refers to a hardware component called a TPM chip.
>
> **[2:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=127)** You may recall that when Microsoft released Windows 11, one of the requirements was a TPM 2.0 chip.
>
> **[2:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=133)** So having access to a virtual TPM allows you to run those newer operating systems.
>
> **[2:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=139)** Now, one thing that I do want to point out about the Trusted Launch Virtual Machine security type is that not all of the capabilities are enabled by default.
>
> **[2:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=147)** You'll notice that right here, there's a link for configure security features, and if I click on that link, you can see that Secure Boot and virtual TPM are enabled by default.
>
> **[2:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=157)** But there's something called Integrity Monitoring that's not enabled.
>
> **[2:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=159)** So if you want to turn that on, you can simply select the checkbox and click OK.
>
> **[2:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=165)** Now, the third type of security that is available to you is Confidential virtual machines.
>
> **[2:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=171)** So Confidential virtual machines gives you everything that the Trusted launch virtual machines security type gives you, except it gives you just a little bit more confidentiality and a better guarantee of integrity.
>
> **[3:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=182)** It works a lot like the Hyper-V Shielded virtual machine feature.
>
> **[3:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/choose-a-vm-s-security-type?u=76281980&t=186)** So those are the three types of security that you can apply to an Azure virtual machine.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (4), type, (2), default. (2), let (1), module (1)
> **Env Vars:** tpm (6)
> **UI Navigation:** click on (3), select the (1), checkbox (1)
> **Definitions:** stands for (1), refers to (1)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Assign port rules to a VM
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=0)** - When you create a virtual machine in Azure, you need to think about the types of traffic that are going to come into and out of that virtual machine so that you can create the appropriate firewall rules or port rules as a Microsoft likes to call them.
>
> **[0:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=12)** So in this video I want to show you how to create some port rules for an Azure virtual machine.
>
> **[0:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=17)** Now, before I get started you'll notice that I've got one virtual machine and right now this virtual machine is stopped as indicated by the status column where you can see that the VM is indeed stopped and has been de-allocated.
>
> **[0:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=29)** And the reason for that has to do with the fact that you can't add a network adapter to a virtual machine that's running.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=36)** And I'm going to show you why that matters in just a minute.
>
> **[0:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=39)** For right now, I'm going to click on the virtual machine and then I'm going to click on the networking tab.
>
> **[0:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=48)** The networking tab is where you find the port rules for this particular virtual machine.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=53)** So we have inbound port rules, which is selected by default, and then we also have a tab for outbound port rules.
>
> **[0:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=58)** You can see those here.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=60)** Now, a moment ago I alluded to the idea of adding a network interface.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=64)** The reason why I'm mentioning this is because it is possible for a virtual machine to have multiple network interfaces.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=71)** And if you do have multiple network interfaces then you're going to have separate port rule list for each network interface.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=77)** So I want to show you how that works.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=79)** I'll go back to the inbound port rules, and then I'm going to click on the attached network interface link.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=84)** Now, if the virtual machine is running, this link will be grayed out.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=87)** You can't attach a network interface to a running virtual machine.
>
> **[1:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=91)** But since the virtual machine has stopped I'm able to do this.
>
> **[1:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=94)** So I'm going to click attach network interface and then I have a couple of options.
>
> **[1:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=99)** I could choose an interface that I created earlier or I could create and attach a network interface.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=104)** So if I click create and attach a network interface then I'm taken to a screen that asks me to provide a name for the interface and then choose what virtual network and subnet that interface will participate on.
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=115)** So I'm going to cancel out of this and I'm going to click attach network interface, and I'm just going to choose the interface that I created earlier and click okay.
>
> **[2:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=126)** And now that network interface has been attached to my virtual machine.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=130)** So right here you see example485.
>
> **[2:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=133)** This is the name that was assigned by Azure to the default network interface that was attached when I created this virtual machine.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=140)** Interface two is the network interface that I just created and attached.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=145)** So if I click on interface two, you can see the port rules that are associated with interface two.
>
> **[2:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=150)** If I go back to example485, you see the port rules that are associated with that interface.
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=156)** So let's get back to the topic at hand and add an inbound port rule.
>
> **[2:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=160)** So I'm going to click add inbound port rule.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=164)** And so when I do, I'm taken to a very simple screen that allows me to configure the port rule.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=168)** So I can specify a source, a port range, a destination, a service, a destination port range, a protocol, and an action, which is either allow or deny, and a rule priority.
>
> **[3:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=181)** So let's suppose for a moment that this particular virtual machine was acting as a web server and that we needed to allow inbound traffic on TCP port 80.
>
> **[3:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=189)** What I would do is set the destination port range to 80 and then I would set the protocol to TCP and I would make sure that the action was set to allow.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=200)** And then click add.
>
> **[3:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=203)** And typically you'll find that you have to refresh your browser before the new rule will show up.
>
> **[3:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=208)** So I'm going to go ahead and click refresh.
>
> **[3:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=213)** And here's my newly created rule.
>
> **[3:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=215)** Now, you might have noticed that we had to set a priority and that was filled in by default.
>
> **[3:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=219)** Port rules with lower priority numbers have a higher priority in the hierarchy.
>
> **[3:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=223)** So what that means is that if you have two rules that conflict with one another then the higher priority rules will take precedence.
>
> **[3:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=230)** So here we have a rule that allows traffic on TCP port 80 from any source going to any destination.
>
> **[3:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=239)** Now, I mentioned a moment ago that Azure maintains separate port rules for each network interface.
>
> **[4:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=243)** So if I were to click on interface two, you'll notice that that rule doesn't exist.
>
> **[4:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=250)** So I'm going to go back to the interface known as example485 and now you can see that rule once again.
>
> **[4:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=257)** So what happens if you need to get rid of one of these port rules?
>
> **[4:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=260)** Well, if I wanted to get rid of the rule that I just created then all I would do is click on the more icon for that rule and then just choose delete.
>
> **[4:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=268)** And then I'm asked if I want to delete the security rule.
>
> **[4:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=271)** I'll click yes, and then it takes just a moment but you should see that rule disappear.
>
> **[4:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/assign-port-rules-to-a-vm?u=76281980&t=277)** So that's how you add and delete port rules for an Azure virtual machine.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (22), delete (3), let (2), default, (1), this. (1)
> **UI Navigation:** click on (6)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** tcp (3)
> **Cross-References:** go back to (3)
> **Ports:** port 80 (2)
> **Definitions:** known as (1)
> **Prerequisites:** configure (1)

#### Create managed identities
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=0)** - [Instructor] One of the big challenges that organizations often deal with is the management of credentials, and that includes things like certificates and keys, and other mechanisms that are used to secure communications between services.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=11)** But when you use managed identities, you don't have to worry about any of that.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=15)** In fact, there are several benefits to using managed identities.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=18)** For example, you don't have to worry about managing credentials, because the credentials aren't even accessible to you.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=24)** Another benefit is that you can use managed identities to authenticate any resource that supports Azure Active Directory authentication, and that includes your own applications.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=33)** Another benefit is that there aren't any extra costs associated with using managed identities.
>
> **[0:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=38)** So in this video, I want to show you managed identities as they relate to Azure virtual machines.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=43)** Now the first thing that you need to know is that there are two different types of managed identities.
>
> **[0:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=47)** There are user assigned managed identities, and system assigned managed identities.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=51)** Now, when it comes to Azure virtual machines, you're not going to be able to use the Azure portal to assign a user assigned managed identity to a virtual machine that you're in the process of creating.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=63)** That functionality just doesn't exist within the portal.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=65)** You can, however, go into a virtual machine that you've already created, and assign a user assigned managed identity.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=72)** If you're going to do that, you need to make sure that the account that you're using has been assigned to the virtual machine contributor, and the managed identity operator role assignments.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=81)** Now, when it comes to system assigned managed identities you can do that during the virtual machine creation process or after the virtual machine is already created.
>
> **[1:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=91)** When you create a system managed identity, Azure creates a service principle in Azure Active Directory.
>
> **[1:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=97)** And the service principle is the only one that the Azure resource can use to identify request tokens from Azure Active Directory.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=104)** And the service principle is tied directly to the lifecycle of that Azure resource.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=108)** So what that means is that when you delete the virtual machine, Azure automatically deletes the service principle for you.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=114)** Now, the good news is that working with managed identities is actually really easy to do.
>
> **[1:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=119)** So I want to show you a couple of examples.
>
> **[2:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=121)** So as you can see, I've got an existing virtual machine.
>
> **[2:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=124)** I'm going to go ahead and click on that virtual machine, and then I'm going to click on the identity tab.
>
> **[2:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=133)** So here you can see that we have a tab for system assigned and user assigned.
>
> **[2:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=137)** And you can turn on system assigned managed identities simply by clicking this on.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=141)** I'll turn that back off.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=143)** And let's take a look at user assigned.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=145)** I'll click on user assigned.
>
> **[2:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=147)** And then if we wanted to add a user assigned managed identity, we would simply click on add, choose our subscription, and then pick the identity that we want to assign.
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=156)** This is an Azure active directory account so we would pick that identity and click add and then add it to this virtual machine instance.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=164)** So I'm going to click out of this, and let's take a look at the process of creating a brand new virtual machine.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=172)** So I'm going to click on Create and then Azure Virtual Machine.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=177)** And I'm not going to go through the whole setup process.
>
> **[2:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=179)** What I am going to do is click on the management tab.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=183)** And if you look at the management tab, you can see that there is an identity section right here.
>
> **[3:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=188)** And there's a simple checkbox that you can select to enable system assigned managed identities for the virtual machine.
>
> **[3:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=194)** So there is no setting for user assigned managed identities but we do have a checkbox that you can select to enable system assigned managed identities.
>
> **[3:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=202)** So you would simply select this checkbox, and then move forward with the virtual machine creation process in the usual manner.
>
> **[3:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-managed-identities?u=76281980&t=208)** So that's how managed identities work for Azure Virtual Machines.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), checkbox (3)
> **Code Keywords:** let (2), delete (1), this, (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Connect a VM to the AD
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=0)** - [Instructor] When you're working in an on-premises environment, it's very common for Windows machines to be domain-joined.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=6)** Well, you can do the same thing in an Azure Cloud.
>
> **[0:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=8)** You can deploy a virtual machine and promote that machine to a domain controller, and then domain-join other machines to the Active Directory by way of that virtualized domain controller.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=19)** But as you can imagine, that involves a lot of work.
>
> **[0:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=22)** And if your only goal is to allow Active Directory users to log into a particular virtual machine, then you don't have to go through all of that.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=30)** What you can do instead is to simply enable an Azure virtual machine for Azure AD authentication.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=35)** So in this video, I'll show you how to do that.
>
> **[0:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=37)** And to do that, we're going to create a brand new virtual machine.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=40)** So as you can see, I've got the virtual machines console open and I'm going to click on create, and then I'll click Azure virtual machine.
>
> **[0:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=49)** And this is going to open up the same, create a virtual machine screen that we've seen several times throughout this course.
>
> **[0:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=54)** Now one of the things that you're going to want to do is to pay special attention to the resource group because you're going to need this again later.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=62)** So, rather than just choosing the new resource group option as I've done in so many other videos, I'm going to click the down arrow and I'm going to choose a specific resource group.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=72)** And it doesn't really matter which resource group you use, but you're going to need it later on.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=77)** The next video discusses the concept of giving users permission to log on to this virtual machine using an Active Directory account and we'll need to know that resource group when we do that.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=87)** So make note of which resource group you use.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=90)** So then the next thing that we have to do is to provide a name for the virtual machine.
>
> **[1:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=94)** So I'm just going to call this virtual machine Windows.
>
> **[1:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=99)** Next, we have to choose the image that we want to use.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=102)** I'm going to go with Windows Server 2022 Data Center, and then we have to provide an admin username and password.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=109)** So I'm going to set the username to AzureAdmin, and I'll enter my password.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=117)** (keyboard clicking) And so then I'll scroll up and I'm going to click on the networking tab.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=125)** And I'm not going to worry about actually doing anything on the networking tab, but when you're creating a Windows virtual machine instance, if you don't at least visit the networking tab then the validation test is going to fail when you create the virtual machine.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=136)** So I'm not going to actually do anything here.
>
> **[2:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=138)** Instead, I'm going to skip ahead to the management tab.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=141)** And the management tab is where you go to tell Azure that you want to log in using Azure AD.
>
> **[2:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=146)** And you'll notice a checkbox right here that says log on with Azure AD.
>
> **[2:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=151)** I'm going to select that checkbox now.
>
> **[2:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=153)** Now in an on-premises environment, when you want to use Active Directory authentication, what you typically have to do is enter the name of the domain that you want to join the virtual machine to, and then you have to provide a set of credentials that will allow you to join that domain.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=168)** Well, you don't have to do any of that here.
>
> **[2:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=170)** All you have to do is select this checkbox and Azure already knows the domain name because Azure AD is a part of the Azure Cloud.
>
> **[2:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=178)** So all we have to do now is click on review plus create, and then Azure is going to perform a validation process to make sure that everything's ready to go.
>
> **[3:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=189)** And it looks like the validation check passed.
>
> **[3:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=192)** So I'm going to go ahead and click create.
>
> **[3:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/connect-a-vm-to-the-ad?u=76281980&t=197)** And after a few minutes, the virtual machine has been created and is enabled for Azure AD authentication.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), checkbox (3), scroll up (1), go to (1)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### Grant an Azure AD user logon permission
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to create a virtual machine that is enabled for use by Azure AD users.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=7)** Now, before any Azure Active Directory user is going to be able to log into this virtual machine, you have to give them permission to do so.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=14)** So in this video, I want to show you how to assign the necessary permission.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=18)** So to get started, what I'm going to do is click on the Microsoft Azure logo in the upper left corner of the screen, and then I'm going to click on Resource Groups.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=27)** And if you don't have the Resource Groups shortcut, you can always go to More Services and then click it there.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=33)** So click on Resource Groups.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=35)** Now, if you watched the previous video, you'll recall that I said that it was really important to pay attention to which resource group the virtual machine exists in.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=44)** The virtual machine that I created in that video existed in the Default-Storage-EastUS resource group, so that's the resource group that I'm going to click on.
>
> **[0:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=55)** Next, I'm going to click on Access Control IAM.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=60)** Now, I'm going to click on Add, and then I'm going to choose Add Role Assignment.
>
> **[1:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=67)** Now, there are a huge number of roles that you can assign to this particular resource group, so to narrow things down a little bit, I'm going to click on the search box and I'm going to type Virtual Machine.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=81)** Now, depending on what it is that you're trying to accomplish, you're going to want to use one of two role assignments.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=87)** The first one is Virtual Machine User Login, which you can see right here.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=90)** This is the role assignment that you would use if you were trying to give permission to an Azure AD user to log on to the virtual machine that you just created.
>
> **[1:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=99)** The other role assignment that you might possibly use is Virtual Machine Administrator Login, which you can see right here.
>
> **[1:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=106)** This would be the role assignment that you would use if an administrator needs to be able to log into that virtual machine.
>
> **[1:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=112)** So for the purposes of this video, I'm going to choose Virtual Machine User Login.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=117)** I'll click on it, and then I'll click Next.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=120)** So now I'm asked who I want to assign access to.
>
> **[2:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=124)** So I could assign access to users, groups, or service principals from the Azure Active Directory, or I could use a managed identity, instead.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=132)** I'm going to go with the user, group, or service principal option, but now I have to choose which members I want to grant access to.
>
> **[2:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=139)** So I'm going to click on Select Members.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=141)** And when I do, the portal is going to query my Azure AD environment, and it's going to show me all of the different users that I've set up.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=149)** So I'm just going to pick a group.
>
> **[2:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=151)** I could pick an individual user, but it's generally better to pick a group.
>
> **[2:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=155)** And then I'll click Select.
>
> **[2:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=158)** And now you can see that that particular group is being added to the role assignment.
>
> **[2:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=162)** So now I'm going to click Review + Assign.
>
> **[2:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=166)** And then you would typically want to take a few minutes, read over the screen, just make sure everything looks good, which, in this case, it does.
>
> **[2:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=173)** So I'll click Review + Assign, and now the role assignment has been added.
>
> **[3:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/grant-an-azure-ad-user-logon-permission?u=76281980&t=180)** So that's how you grant a user or a group permission to sign into an Azure virtual machine using an Azure AD account.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), go to (1)
> **Cross-References:** previous video (2)
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Env Vars:** iam (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Storage

#### Create and attach a new disk
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=0)** - [Instructor] When you create an Azure virtual machine, that virtual machine is automatically allocated a virtual hard disk.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=5)** And that virtual hard disk accommodates the virtual machine's operating system.
>
> **[0:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=9)** Depending on how the virtual machine is being used however, you may occasionally find that you need some additional virtual hard disks.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=16)** So I want to show you how to create a new virtual hard disk and attach it to a virtual machine.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=21)** So to get started I'm going to go ahead and create a new virtual machine.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=25)** So here I am in the virtual machines console.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=27)** I'm going to click on create and then I'll click on Azure Virtual Machine.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=35)** I'm going to give my virtual machine a name and then I'll scroll down and I'll enter a username and a password.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=53)** Now I'll click next and that will take me to the disc screen.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=59)** So the disc screen is where you go to configure storage for your virtual machine.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=63)** Typically, if all you're doing is installing an operating system or maybe an application, you can just go with the defaults.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=69)** However, the screen does allow you to make various customizations to the virtual machine storage.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=74)** Now, before I show you how to attach a new disc, one thing that I want to point out is this checkbox right here, delete with VM.
>
> **[1:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=82)** So normally this checkbox is selected by default and what happens is that when you delete a virtual machine any virtual hard discs that are associated with that virtual machine are also deleted.
>
> **[1:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=93)** And typically that's a good thing because you don't want to end up with a collection of orphaned virtual hard discs that you're paying for.
>
> **[1:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=99)** So I'm going to leave the delete with VM checkbox selected and I'm going to scroll down.
>
> **[1:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=106)** Now, you'll notice that we have a link, create and attach a new disc.
>
> **[1:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=110)** So this virtual machine, if I did nothing else, and I just went to the review plus create screen, it would be created with a single virtual hard disc on which the operating system would reside.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=120)** But if I want an additional virtual hard disc, I would click create and attach a new disc and then I'm taken to a screen that allows me to create a new disc for this virtual machine.
>
> **[2:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=131)** So the first thing that we have to do is to provide a name for the disc that we're creating.
>
> **[2:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=135)** And you can see that an name is populated automatically right here.
>
> **[2:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=138)** We could go with the name that is automatically generated or we could enter a new name.
>
> **[2:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=142)** I'm just going to go with the default name.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=145)** Next, we have to choose the source type.
>
> **[2:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=148)** By default, the source is set to none, so an empty disc is what is created.
>
> **[2:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=152)** Typically, that's what you're going to want to use but there are some other options.
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=156)** For example, you could use storage blob or you could use a snapshot.
>
> **[2:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=160)** So if you want to generate a virtual disc based on an existing snapshot, you can do so using that option.
>
> **[2:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=166)** I'm just going to choose the empty disc option.
>
> **[2:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=170)** Next, you can choose the size of the virtual hard disc.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=172)** This is set to one gigabyte by default but you can change the size by clicking on change size and then you simply select the size and type of virtual disc that you want to use.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=183)** I'm going to go ahead and click OK.
>
> **[3:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=186)** Next, you have to choose what type of key management you want to use.
>
> **[3:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=190)** Typically, you're going to want to use platform managed keys but you can opt to manage the key yourself if you want.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=196)** I'm going to stick with the platform managed key option.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=200)** And so the very last thing on the screen is another checkbox delete disc with VM.
>
> **[3:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=205)** So whether or not this disc gets deleted when the virtual machine gets deleted, is handled separately from the checkbox that I showed you earlier.
>
> **[3:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=213)** So if you want this new virtual hard disc to automatically be deleted whenever the virtual machine is deleted, then you would select this checkbox.
>
> **[3:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=220)** For right now, I'm going to leave this checkbox deselected and I'm going to click OK.
>
> **[3:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=226)** And now click next to go to the networking screen.
>
> **[3:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=230)** And then I'll click Review + create.
>
> **[3:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=234)** And a validation check is being run for the virtual machine.
>
> **[3:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=237)** The validation has passed so I'm going to click create to create the virtual machine.
>
> **[4:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=245)** And it looks like the deployment is complete.
>
> **[4:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=247)** So we have created a brand new virtual machine with an extra virtual hard disc.
>
> **[4:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=251)** And so if I go to home and I click on virtual machines, and then I click on the new virtual machine, and then I go to discs, I can see that this virtual machine does indeed have two separate virtual hard discs.
>
> **[4:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=267)** So we have the operating system disc right here and then we have a data disc right here.
>
> **[4:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=273)** And we're not limited to creating one data disc.
>
> **[4:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=276)** We could create multiple data discs if need be.
>
> **[4:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-and-attach-a-new-disk?u=76281980&t=278)** But that's how you create additional discs for a virtual machine.

> [!info]- Semantic Content
>
> **UI Navigation:** checkbox (7), click on (4), go to (3), scroll down (2), select the (1)
> **Code Keywords:** delete (4), for. (1), else, (1), type. (1), default, (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Attach an existing disk
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=0)** - [Instructor] In the previous video, I created a virtual machine that has an additional virtual hard disk.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=5)** I'll go ahead and click on the virtual machine, and then I'll click on disks, and you can see that this virtual machine has an OS disc and a data disc.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=15)** Now, if you watched that previous video, one of the things that you might recall is that I configured this virtual machine so that the data disc would not automatically be deleted when the virtual machine was deleted.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=25)** So what I'm going to do is, I'm going to go ahead and delete the virtual machine.
>
> **[0:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=39)** And now, even though I'm deleting the virtual machine, the data disk should remain.
>
> **[0:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=45)** Okay, so the virtual machine has been deleted.
>
> **[0:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=47)** So now I want to create a new virtual machine, and I'm going to configure this virtual machine to use that virtual disk that was previously associated with the other virtual machine.
>
> **[0:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=57)** So what I'm going to do is I'm going to click create.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=61)** I'll choose Azure Virtual Machine, and then the next thing that I want to do is choose the same resource group as what that other virtual machine had been using.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=75)** Now I'll provide a name for the virtual machine that I'm creating.
>
> **[1:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=78)** I'll just call this one Windows.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=81)** I'll choose an image, and I need to enter a username and a password for the virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=97)** I'll click next to go to the disk screen, and then I'll scroll down to the bottom of the screen and choose the option to attach an existing disk.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=109)** So now I'm prompted to select the disk that I want to attach, so I'll click the down arrow and I'll select the disk that had belonged to the virtual machine that I just deleted.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=120)** I'll click next to go to the network screen, and then I'll click review + create, and the validation check has passed, so I'll click on the create button and the virtual machine is being created.
>
> **[2:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=135)** So what I've actually done is I've created a brand-new virtual machine, but I've configured this virtual machine to use a preexisting virtual hard disk as its data disk.
>
> **[2:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=144)** And as you saw, that preexisting virtual hard disk was a virtual hard disk that had belonged to a virtual machine that I deleted.
>
> **[2:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=154)** And it looks like the deployment is complete, so let's take a look at the virtual machine.
>
> **[2:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=158)** I'll click go to resource.
>
> **[2:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=161)** So here's my virtual machine. I'll click on disks.
>
> **[2:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=165)** And we can see that this virtual machine does indeed have 2 different virtual hard disks.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=168)** We have the operating system disk and we have the data disk, and this is the same data disk that was previously used by a different virtual machine.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/attach-an-existing-disk?u=76281980&t=177)** So that's how you attach an existing virtual hard disk to an Azure virtual machine.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (3), select the (2), scroll down (1)
> **Cross-References:** previous video (2), as you saw (1)
> **Code Keywords:** delete (1), let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 5. Virtual Machine Management, Maintenance, and Protection

#### Enable disaster recovery
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=0)** - [Instructor] Microsoft Azure will allow you to replicate a virtual machine to another region for the purposes of disaster recovery.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=6)** Now in the past, setting up disaster recovery for an Azure virtual machine was somewhat of a tedious process because you had to configure a vault.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=14)** But Microsoft has made some changes and the process now couldn't be easier.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=19)** Now before I show you how to go about setting up disaster recovery, there is one very important thing that I need to show you.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=24)** To do that, I'm going to click on Create and I'm going to choose the Azure virtual machine option.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=33)** This takes me to the create a virtual machine screen.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=35)** This is the same screen that we've used the throughout this course anytime we're creating a new virtual machine.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=40)** Now one of the configuration options that is displayed when creating a new virtual machine is the security type option.
>
> **[0:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=47)** I did a video on security types earlier in this course.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=51)** The reason why I want to mention the security type is because when it comes to Azure, security is something of a trade-off, particularly when it comes to disaster recovery.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=60)** Because the default security type is trusted launch virtual machines.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=65)** However, trusted launch virtual machines are incompatible with disaster recovery.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=69)** If you want to use disaster recovery, you'll have to set the security type to Standard.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=74)** So when you do that, you'll receive this message just click Revert to Standard and then move forward with configuring your virtual machine.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=81)** So I'm going to go ahead and get out of this.
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=86)** And then I'm going to click on this virtual machine that I've already got in place.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=90)** And this virtual machine has been configured with the necessary security type.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=95)** And if you're not sure what type of security your virtual machine has been provisioned with, all you have to do is scroll down a little bit and you can find the security type right here.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=105)** You can see that this virtual machine has the standard security type.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=109)** So let's go ahead and set this particular virtual machine up for a disaster recovery.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=114)** What I'm going to do is scroll down to the Operations section and then click on Disaster recovery.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=120)** So this brings up the disaster recovery screen.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=123)** So at the most basic, all we have to do is select a target region which right now West US is selected.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=130)** And then we click Review + Start replication.
>
> **[2:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=133)** And then that takes us to a summary screen where we have the opportunity to review all of the various configuration options.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=141)** And incidentally, when I mentioned earlier that the replication process required the use of a vault, it still does, but you no longer have to configure that manually.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=149)** You'll notice right here, recovery services vault is set to New Site-recovery-vault-westus.
>
> **[2:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=155)** So in other words, Azure is going to create the necessary vault for us because the vault doesn't already exist.
>
> **[2:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=162)** Now I want to take a step back for just a moment.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=164)** I'm going to click Previous and I'll click Previous again.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=168)** And rather than clicking Review + Start replication, what I'm going to do is click Next: Advance settings.
>
> **[2:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=175)** Now on the advanced setting screen, you don't necessarily have to configure any of these settings, but I want to at least give you a brief overview of some of the settings that are available.
>
> **[3:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=184)** So I'm going to scroll to the top of the screen.
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=187)** So as you can see, you have the ability to choose your subscription and your virtual machine resource group, your virtual network, your availability.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=196)** Now interestingly, right now we're only replicating a single instance.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=200)** And instance being another word for a virtual machine.
>
> **[3:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=202)** But we do have other options.
>
> **[3:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=204)** For example, we could replicate an entire availability set.
>
> **[3:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=207)** And if I were to choose that, then we would simply select the availability set from the dropdown.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=212)** We can also replicate an availability zone and then we would choose the availability zone that we want to replicate.
>
> **[3:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=218)** I'm going to set this back to single instance.
>
> **[3:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=221)** We also have the option of choosing a proximity placement group, which I've gotten one that I did create at another time.
>
> **[3:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=228)** But for right now, I'm not going to worry about this.
>
> **[3:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=231)** Another thing that you can do is set a capacity reservation.
>
> **[3:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=235)** And you might set a capacity reservation in the destination so that resources are going to be available in the event that you have to fail over to that region.
>
> **[4:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=244)** So with that said, I'm going to click next Review + Start replication and then I'm going to click StartrReplication.
>
> **[4:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=253)** And you can see that Azure sets about creating the target resources that are going to be needed in order to replicate this particular virtual machine instance over to our destination.
>
> **[4:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=265)** Okay, so the setup process has finally completed.
>
> **[4:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=267)** So let's take a look at what this looks like.
>
> **[4:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=269)** I'm going to go ahead and click on my virtual machine and then I'm going to scroll down and click on Disaster recovery.
>
> **[4:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=278)** So here we are in the disaster recovery console and we can see right here that the replication health is currently healthy.
>
> **[4:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=285)** So that's good.
>
> **[4:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=286)** And just beneath that, we can see that the virtual machine is indeed protected.
>
> **[4:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=291)** Then over here we have the failover readiness section and one of the things that Azure allows you to do is to perform a test failover.
>
> **[4:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=298)** So you'll notice that we have a warning message indicating that we've never actually performed a test failover.
>
> **[5:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=303)** But if we wanted to perform a test failover, then we would simply click on the Test Failover button right here.
>
> **[5:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=309)** Incidentally, if we had a problem with our primary copy of the virtual machine and needed to perform a real failover, then we could simply click on the failover button.
>
> **[5:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=318)** Going on down the list, we see that there are no configuration issues.
>
> **[5:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=321)** We can see the agent version and we can see that the agent status is healthy.
>
> **[5:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=327)** So then just beneath that, we have a list of errors.
>
> **[5:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=330)** Currently there aren't errors.
>
> **[5:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=331)** But if there were, they would appear here.
>
> **[5:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=333)** There aren't any events that have happened in the last 72 hours.
>
> **[5:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=338)** And then if I scroll down to the bottom, we can see a view of the replication infrastructure.
>
> **[5:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=342)** So we can see which resources exist in the East US region versus the resources that exist in the West US region.
>
> **[5:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/enable-disaster-recovery?u=76281980&t=349)** So that's just a quick overview of how the replication process works for Azure Disaster Recovery.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (4), select the (1), dropdown (1)
> **Code Keywords:** this. (2), type. (2), let (2), protected (1)
> **Prerequisites:** configure (3), setup (1)
> **Cross-References:** earlier in (1), in the last (1)
> **CLI Commands:** find (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)

#### Virtual machine patching and hot patching
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=0)** - [Instructor] Modern operating systems require periodic patching in order to remain healthy and secure.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=5)** And the operating systems that run on Azure virtual machines are no exception.
>
> **[0:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=9)** They need to be periodically patched in order to stay up-to-date.
>
> **[0:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=13)** So, let's take a look at the patch management options that exist for Azure virtual machines.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=18)** As you can see, I've got the create a virtual machine screen up and I've already gone in and populated the basics.
>
> **[0:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=23)** So with that said, I'm going to skip ahead and select the management tab.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=27)** The management tab is where you find the patching options.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=30)** I'll just scroll down a little bit.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=33)** And near the bottom of the screen, you can see a section called guest OS updates right here.
>
> **[0:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=38)** So there are two options under guest OS updates, enable hotpatch and patch orchestration options.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=44)** Now, the patch orchestration options are your primary option for updating your Azure virtual machines.
>
> **[0:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=50)** Now, in most cases, when you choose a patch orchestration option, what's going to happen is that any patches that are marked as critical or as security patches are going to be automatically downloaded and applied to the virtual machine.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=62)** Incidentally, this patch management process is designed to happen during off-peak hours, so that it doesn't interrupt your virtual machine during peak business periods.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=72)** So with that said, let's take a look at the patch orchestration options.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=75)** I'll click the down arrow and there are four of them.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=79)** The first option is automatic by OS.
>
> **[1:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=82)** So, the automatic by OS option is the default option for Windows virtual machines and you can only use this option on Windows virtual machines.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=90)** And it's worth noting that this particular mode doesn't support availability first patching.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=95)** It's roughly equivalent to just installing Windows and allowing it to use Windows update to install patches on an as-needed basis.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=105)** So, the next option is Azure orchestrated.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=108)** Now, Azure orchestrated patches are supported for use with both Linux and Windows virtual machines.
>
> **[1:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=113)** And this is the type of patching that is going to be required if you're going to do availability first patching.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=120)** The next option is manual updates.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=123)** So, manual updates only apply to Windows virtual machines, and what it does is it essentially disables the entire patch management process.
>
> **[2:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=131)** Now, this isn't to say that it's okay to have a Windows virtual machine with no patch management because, remember, you need to have patches periodically applied in order to keep the virtual machine secure and healthy.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=143)** The reason why you would use manual updates is if you have a third party patch management system that you would rather use, as opposed to the native Windows update feature, then you would use manual updates to disable the Windows update mechanism so that you can use your own third party patch management solution.
>
> **[2:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=159)** And then the final option, which you can see grayed out at the bottom of the list, is image defaults.
>
> **[2:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=165)** Now, image default, the reason why it's grayed out, is because it's only for Linux virtual machines.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=169)** And this is the default option if you are creating a Linux virtual machine.
>
> **[2:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=174)** And it's worth noting that image default does not support availability first patching.
>
> **[3:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=180)** Remember, if your goal is to perform availability first patching, then you're going to want to use Azure orchestrator regardless of whether you've got a Windows virtual machine or a Linux virtual machine.
>
> **[3:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=190)** So let me click away from this.
>
> **[3:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=193)** And then the other option, which you can see that's grayed out, is enable hotpatch.
>
> **[3:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=197)** Enable hotpatch is an option for Windows-only virtual machines and what it does is it allows patches to be applied without the need for rebooting the machine.
>
> **[3:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=207)** The downside to enabling hotpatch is that it's not supported for every operating system.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=212)** There are a very limited number of operating systems that actually support hotpatching.
>
> **[3:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=217)** So, how do you know if an operating system supports hotpatching or not?
>
> **[3:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=221)** Well, one option is to simply select an operating system image and see if the enable hotpatch checkbox becomes available.
>
> **[3:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=228)** The other option is to click right here where it says learn more, and when you do, your browser will take you to an article on hotpatch for new virtual machines, and if you scroll down a little bit, you can find these supported platforms and right now there are only two supported platforms.
>
> **[4:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=242)** This list is likely to grow over time, but this is what's available right now.
>
> **[4:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/virtual-machine-patching-and-hot-patching?u=76281980&t=249)** So that's just a quick rundown of the patch management options that are available for Azure virtual machines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1), default, (1), this. (1)
> **UI Navigation:** scroll down (2), select the (1), checkbox (1)
> **CLI Commands:** find (2)
> **Prerequisites:** install (1), you need to have (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Shut down virtual machines automatically
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=0)** - [Instructor] Whenever you create an Azure virtual machine, that virtual machine is configured by default to automatically shut down at night.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=7)** Now, in a way, this automatic shutdown is a good thing because remember, every virtual machine consumes certain resources, whether that's storage IOPS or compute resources or memory or what have you, and you're billed for the resources that your virtual machines consume, so shutting those virtual machines down at night stops the virtual machine from actively consuming resources, thereby saving you money.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=30)** On the other hand, though, there are certain workloads that need to remain running 24/7, so you don't want those virtual machines to be automatically shut down just because it's the end of the business day, so with that said, I want to show you how automatic shutdown works.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=44)** As you can see, I'm in the Azure portal, and I'm going to click on Virtual machines.
>
> **[0:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=50)** From there, I'm going to click on Create, and then I'll click on Azure virtual machine, and this is going to take me to the Create a virtual machine screen.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=59)** Now, I'm not going to go through the full process of creating a new virtual machine, and instead, what I'm going to do is move forward and click on the Management tab, and when I do, you can see that there's a section called Auto-shutdown.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=72)** You can see that section right here, so the Auto-shutdown section contains a check box which is selected by default to enable auto-shutdown, and then, just beneath that, we have a shutdown time, so this virtual machine, if I were to create it, would be automatically shut down at 7:00 p.m.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=90)** Now, the important thing to pay attention to here is the time zone because the time zone, by default, is set to UTC, or coordinated universal time.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=98)** It's not necessarily going to match your local time zone, so if you do want to shut down your virtual machines at night, you'll need to either pick a time in UTC format, or you'll want to select your own local time zone from the list.
>
> **[1:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=112)** There's also a notification option, which is enabled by default, so that when a virtual machine is about to shut down, you'll receive an e-mail at the e-mail address that you provide letting you know that that virtual machine is about to shut down.
>
> **[2:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=126)** Now, certainly, you don't have to allow your virtual machines to automatically be shut down.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=130)** If you want your virtual machine to remain running, then all you have to do is clear the Enable auto-shutdown checkbox, so let's suppose that you've already got some virtual machines that you've created, and you want to know if those virtual machines are configured for automatic shutdown.
>
> **[2:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=144)** What you can do is go to the Virtual machines console, and then click on a virtual machine.
>
> **[2:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=155)** Make sure that the Overview tab is selected, and then scroll down, and here, you can see we have an Auto-shutdown section, and so we can see that Auto-shutdown is indeed enabled for this particular virtual machine, and you can see when the automatic shutdown is scheduled to occur, so what if I didn't want this virtual machine to be shut down automatically?
>
> **[2:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/shut-down-virtual-machines-automatically?u=76281980&t=175)** Well, you can disable automatic shutdown for an existing virtual machine, and the way that you would do that is by clicking on Auto-shutdown, setting the Enabled option to Off, and then clicking Save, and then, I'll close this out, and I'll click on the virtual machine once again and scroll down, and now you can see that Auto-shutdown is not enabled, so that's how you control automatic shutdown for an Azure virtual machine.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (2), checkbox (1), go to (1)
> **Code Keywords:** default, (2), let (1)
> **Env Vars:** utc (2), iops (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### Boot diagnostics and alerting
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=0)** - [Instructor] When you create an Azure virtual machine, you need a way of keeping tabs on that virtual machine to make sure that it's working properly.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=7)** Fortunately, Microsoft provides numerous monitoring and alerting mechanisms that you can use to monitor your virtual machine.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=14)** So let's take a look at what's available.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=16)** As you can see, I'm on the create a virtual machine screen, and I've already filled out all of the fields on the basics tab, so I'm going to skip ahead to the monitoring tab.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=27)** Now, there are three different options on the monitoring tab.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=31)** Starting at the bottom, we have an option to enable Guest OS diagnostics.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=35)** When enabled, this option helps you to make sure that the operating system on the virtual machine is working properly.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=41)** And if you want to enable guest OS diagnostics, then all you have to do is select the checkbox, and then choose your storage account.
>
> **[0:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=49)** You have the option of creating a new storage account, or you can select an existing storage account.
>
> **[0:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=55)** The next option is boot diagnostics.
>
> **[0:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=58)** And boot diagnostics are enabled by default using a managed storage account, and that is the recommended action.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=65)** However, you can also enable boot diagnostics with a custom storage account, or you can disable boot diagnostics.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=71)** Now, the reason why Microsoft recommends enabling boot diagnostics with a managed storage account is, because doing so gives you just a little bit better performance than using a custom storage account.
>
> **[1:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=82)** And then the next option is the alerting option.
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=86)** So as you can see, we have a checkbox to enable recommended alert rules.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=89)** I'm going to go ahead and select that checkbox.
>
> **[1:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=92)** And when I do, a pop-up appears on the right side of the screen.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=96)** That allows me to configure various alert rules, and the alert rules are populated by default.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=102)** For example, you can see we're going to be alerted if the CPU usage is greater than 80%.
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=107)** We're also going to be alerted if available memory bytes is less than one gigabyte, and there are several other rules.
>
> **[1:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=113)** Incidentally, you don't necessarily have to enable all of these rules.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=117)** You can pick and choose, if there's a rule that you're not interested in, just de-select the checkbox.
>
> **[2:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=122)** For example, if I wasn't interested in VM availability, then I could de-select the VM availability checkbox.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=130)** You'll also notice that there's an estimated monthly total associated with these rules, and enabling or disabling a rule will affect that total.
>
> **[2:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=138)** So right now, the estimated monthly total is 60 cents.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=141)** If I were to re-enable the VM availability rule, then that estimated total goes to 70 cents.
>
> **[2:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=148)** There's also a bit of customization that can be done with these rules.
>
> **[2:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=152)** So if for example, I wasn't interested in CPU usage greater than 80%, but I was interested in CPU usage greater than 90%, then I could just change 80 to 90.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=164)** Also, each one of these rules has a dropdown arrow, and if I click the dropdown arrow, you can see that we can configure the rule name, we can configure the severity level.
>
> **[2:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=174)** In other words, how serious is it if these thresholds are exceeded?
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=177)** And then we can configure the threshold type, making it either static or dynamic.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=183)** If I scroll down a little bit, we have a section where you can configure notifications.
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=187)** So in other words, if one of these threshold values are exceeded, how do you want to be made aware of it?
>
> **[3:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=193)** The default option is to be made aware by email, and so the email address that's associated with your Azure account will receive a notification when these threshold values are exceeded.
>
> **[3:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=203)** Other options include sending an email to the holder of the Azure resource manager role, or sending a notification to the Azure mobile app.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=212)** So I'm going to go ahead and click save, and you can see that the alert rules have been updated.
>
> **[3:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=222)** And so then I'm going to click review plus create, and validation failed, because I didn't visit the networking tab, so I'll click on networking.
>
> **[3:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=232)** We don't actually have to do anything there, but I'll click on it for a second and go back to review plus create.
>
> **[3:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=238)** And so now the validation has passed.
>
> **[4:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=240)** I'll click the create button, and our virtual machine is being created, and the deployment process has completed.
>
> **[4:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/boot-diagnostics-and-alerting?u=76281980&t=254)** So that's how you create an Azure virtual machine while enabling boot diagnostics and alerting.

> [!info]- Semantic Content
>
> **UI Navigation:** checkbox (5), select the (3), dropdown (2), click on (2), scroll down (1)
> **Prerequisites:** configure (5)
> **Code Keywords:** let (1), default. (1), type, (1), static (1)
> **Env Vars:** cpu (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** in other words (2)
> **Best Practices:** recommended (2)

#### VM tagging
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=0)** - [Instructor] As you work in the Azure Cloud, you're bound to accumulate a large number of resources.
>
> **[0:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=4)** As you look at this screen, for example, you can see that there are quite a few resources that are associated with my Azure account even though this is just a lab account and this isn't even the full list of resources.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=15)** The point is that you'll need some sort of way to keep track of all of these resources and categorize them so that you can determine what each resource is being used for.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=25)** That way you can purge unused resources and you can better protect those resources that are really sensitive.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=31)** That's where tagging comes into play.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=33)** Tagging is a mechanism that exists in Azure as a way of classifying resources and you can apply tags to just about any Azure resource, and this includes virtual machines.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=43)** So let's take a look at how to apply some tags to a virtual machine.
>
> **[0:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=47)** I'm going to go ahead and click on Virtual Machines and as you can see, I've currently got one virtual machine.
>
> **[0:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=55)** I'm going to go ahead and click on that virtual machine and then I'm going to click on Tags.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=62)** Now right now there aren't any tags that correspond to this particular virtual machine, but we can create some.
>
> **[1:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=68)** The important thing that you need to know is that the name field is not case sensitive, but the value field is.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=74)** So as you come up with tags, it's important to think about how those tags are going to be used across all of your virtual machines.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=81)** It's also important to consider whether or not a tag that you create could cause a security issue.
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=86)** You don't want to disclose anything super sensitive in a tag because it's possible that others might be able to see that.
>
> **[1:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=93)** So what types of tags might we create?
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=95)** Well, the tags that you create are going to differ widely from one organization to the next, but I'll show you a couple of examples.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=102)** Since we're talking about virtual machines, maybe one of the first tags that I want to create is a tag called Owner.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=109)** And I could use the Owner tag to keep track of who a virtual machine belongs to, so that way maybe I could do a search and see all of the virtual machines that belong to a particular person.
>
> **[1:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=119)** Or if I was going to delete an unknown virtual machine, the owner tag might help me to figure out who that virtual machine belongs to so I can talk to them and figure out if the virtual machine is still being used or not.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=130)** So in this case, I'll just set the owner to my name, and I'll click Apply.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=140)** Now let's create another tag.
>
> **[2:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=142)** Another tag that we might create is UseCase.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=149)** So the use case tag might be used to tell how a virtual machine is being used.
>
> **[2:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=154)** In this case, this is a lab virtual machine, so we might set the use case to Dev Test or to Lab.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=163)** Once again, I'll click Apply and so now we've created a couple of different tags.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=169)** If I click Overview and then go back into Tags, we can see that those tags have indeed been applied and we have a couple of icons here.
>
> **[2:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=179)** The icon on the far right is designed to show us resources to which that particular tag applies.
>
> **[3:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=184)** So if we wanted to see every resource with the owner set to Brian Posy, I could click this icon and it would give me a list.
>
> **[3:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=192)** Right now this particular virtual machine is the only resource that fits that criteria, but you can imagine how useful this would be in a production environment.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=200)** So let me go back to my list of tags and we also have a delete icon next to each tag, so that we can remove a tag when it's no longer needed.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=210)** It's also possible to modify a tag simply by typing over the value.
>
> **[3:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=214)** So for example, right now we've got the use case set to Lab, but let's pretend for a moment that we decided to promote this particular virtual machine and bring it into our production environment.
>
> **[3:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=224)** We might change the value of the UseCase tag from Lab to Production.
>
> **[3:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=233)** Then I would simply click Apply and we can see that the UseCase tag now has a value of production.
>
> **[3:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/vm-tagging?u=76281980&t=239)** So those are just a couple of quick examples of how you might use tagging with Azure virtual machines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (2), case, (2), for. (1), super (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 6. Networking

#### Create a virtual network
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=0)** - [Narrator] In larger or more complex environments it's often necessary to create multiple virtual networks.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=5)** That way, you can provide a degree of isolation between some of your virtual machines that you create in the Azure Cloud.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=11)** So let's take a look at how to create a virtual network.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=15)** As you can see, I'm on the main Microsoft Azure portal screen, and even though I've got a shortcut for virtual networks, I'm just going to go ahead and go up to the search box and type virtual networks, and then I'll click on virtual networks.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=30)** and that's going to take me to the virtual network screen.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=33)** Now, as you can see I've got a couple of preexisting virtual networks that I've used for other purposes, but let's go ahead and create a brand new virtual network.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=41)** To do that, I'm going to click on Create, and this is going to take me to the Create Virtual Network screen.
>
> **[0:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=49)** Now, at its simplest, all you have to do is select your subscription, choose a resource group, and then provide a name for the virtual network that you're creating and then click review and create, it's that simple.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=61)** Now, having said that, you can exercise a higher degree of control over the process.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=65)** So let's go ahead and work through the simple part and then I'll show you some of the other options that are available.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=71)** So my subscription has already been selected.
>
> **[1:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=73)** Next, I'm going to choose a resource group.
>
> **[1:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=78)** Next, I'll enter a name.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=80)** I'll just call this MyNetwork and then I'll make sure that my region is selected.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=87)** And as I said before, I could click Review plus create.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=90)** But instead, I'm just going to click next IP addresses, just so you can see what the IP address screen looks like.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=96)** So as you can see, there is an IP address space that's automatically being assigned to this virtual network.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=101)** We could add an additional subnet, but I'll show you how to do that in the next video.
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=107)** So instead, I'm just going to click Next Security.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=111)** And you can see the security options that are available.
>
> **[1:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=113)** Of the security options are disabled by default.
>
> **[1:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=116)** But if you wanted to enable security, you could enable distributed denial of service network protection, or you could enable a firewall.
>
> **[2:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=124)** I'm just going to click Next to go to the tag screen.
>
> **[2:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=128)** And here you have the standard Microsoft Azure tagging interface.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=132)** I'll click Next Review plus Create.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=136)** And so now we're taken to a review screen that shows all of the configuration options that we've chosen.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=140)** I'll click Create, and you can see that the deployment process has succeeded.
>
> **[2:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=148)** So if I were to click Home, and then go back to Virtual Networks, you would see my newly created virtual network which I called MyNetwork.
>
> **[2:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=159)** So now let's take a look at how to connect a virtual machine instance to that virtual network.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=164)** So what I'm going to do is go back to the main Microsoft Azure portal screen, and I'll go into virtual machines.
>
> **[2:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=173)** And from there I'll click Create, and I'll choose the Azure Virtual Machine option.
>
> **[2:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=179)** And rather than go through the entire creation process which you've seen throughout this course, I'm just going to go to the networking tab.
>
> **[3:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=188)** And you can see that there's a dropdown where you can choose a virtual network.
>
> **[3:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=192)** There's also a link right here that you can use to create a brand new virtual network.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=196)** So what I'm going to do is click on the down arrow, and then here's the virtual network that we just created.
>
> **[3:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=202)** And you'll notice the subnet is automatically populated to reflect the subnet range that's associated with the recently created virtual network.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network?u=76281980&t=210)** So that's how you go about creating a new virtual network in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default. (1), interface (1)
> **UI Navigation:** click on (3), go to (2), dropdown (1)
> **Cross-References:** in the next (1), go back to (1)
> **Tools:** azure portal (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Create a subnet
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=0)** - [Instructor] You may occasionally find it necessary to create additional subnets within a virtual network.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=5)** So let's take a look at how to do that.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=7)** Here we have the virtual network that I created in the previous video.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=11)** And I'm going to go ahead and click on the virtual network.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=15)** When I do, you'll notice several tabs appear, and one of those tabs is called Subnets.
>
> **[0:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=20)** I'll go ahead and click on the Subnets tab now.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=24)** And here's the default subnet that was created along with the virtual network.
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=28)** So let's go ahead and create an additional subnet.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=30)** I'll go ahead and click on Subnet.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=35)** And this is going to open up the Add Subnet pane.
>
> **[0:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=38)** Now we have to provide a name for our subnet.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=40)** I'm just going to call this Example.
>
> **[0:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=42)** (keyboard clicking) The next thing that we have to do is to provide an address space for the subnet that we're creating.
>
> **[0:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=49)** And you'll notice that the address space has been populated automatically.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=53)** This address space doesn't conflict with the existing subnet in this virtual network.
>
> **[0:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=58)** So I'm going to go ahead and use this subnet.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=61)** We also have the option of adding an IPv6 address space.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=65)** And we can add a NAT gateway, a network security group or even a routing table if we want to.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=71)** Of course, none of that is necessary.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=72)** Those only exist as options.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=74)** For the purposes of this video, I'm just going to click Save.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=80)** And as you can see, the subnet has been added.
>
> **[1:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=83)** So now let's take a look at how to put a new virtual machine onto this newly created subnet.
>
> **[1:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=88)** So to do that, I'm going to go back to the Microsoft Azure portal Home.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=95)** I'll click on Virtual Machines.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=98)** And now I'm going to click on Create followed by Azure Virtual Machine.
>
> **[1:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=106)** And then I'm just going to select the Networking tab.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=111)** Now I'm going to go to the Virtual Network field.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=114)** And I'm going to click the down arrow and choose my newly created virtual network, which I called My Network.
>
> **[2:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=121)** And you'll notice that we have the option to choose a subnet.
>
> **[2:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=124)** So the default subnet is selected by default, but if I click on the down arrow, I can choose the subnet that I just created.
>
> **[2:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=131)** And so then what I do, that virtual machine would be created, and it would be placed onto the subnet that I just created.
>
> **[2:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-subnet?u=76281980&t=138)** So that's how you create a brand new subnet, and how you configure a virtual machine instance to use that subnet.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), select the (1), go to (1)
> **Code Keywords:** let (3), default, (1)
> **Cross-References:** previous video (1), go back to (1)
> **CLI Commands:** find (1)
> **Env Vars:** nat (1)
> **Tools:** azure portal (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)

#### Create a public IP address
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=0)** - [Instructor] When you create a new virtual machine in Azure, that virtual machine will typically receive a public IP address.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=5)** If you take a look at the screen you can see that I've got one virtual machine, and that virtual machine has indeed been assigned to public IP which you can see right here.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=14)** The reason why this happens is because of the way that the virtual machine configuration process works at the time of virtual machine creation.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=21)** Let me show you what I mean.
>
> **[0:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=22)** I'm going to click the create button and then I'll choose Azure Virtual Machine.
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=28)** And then I'm just going to go with the basics here.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=30)** I'm going to choose a resource group, I'll enter a virtual machine name, I'll select an image and provide a username and password.
>
> **[0:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=54)** From there, I'm going to click on the networking tab and if you take a look at the public IP field, you can see that it says, "New Windows IP."
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=64)** So in other words, Azure is going to create a new public IP address specifically for this virtual machine.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=69)** And you'll notice that there's also a create new link underneath the public IP option.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=74)** You can use this to go manually create a public IP address.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=77)** Now, why might you want to do that?
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=80)** Well, manually creating a public IP address can help you with IP portability.
>
> **[1:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=85)** Suppose, for example, that you create a virtual machine and you know that virtual machine needs a public IP but eventually it's going to be replaced by a different virtual machine.
>
> **[1:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=94)** Well, if you create a named public IP address, you can transfer that IP to your new virtual machine.
>
> **[1:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=100)** So let me show you how this works.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=102)** I'm going to go out to the main Microsoft Azure portal screen and then I'm just going to type IP in the search box.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=111)** And then I'm going to click on public IP addresses.
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=115)** Right now we have one public IP address and this is the IP that was assigned to the virtual machine that you saw a moment ago.
>
> **[2:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=121)** But I can create a new public IP address simply by clicking on create and then answering a few prompts.
>
> **[2:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=130)** So I need to choose a resource group and I need to make sure that my region is set correctly and then provide a name for the IP that I'm creating.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=141)** I'm just going to call this "My IP."
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=145)** Next, I'll click review plus create, the validation passed, so I'll click create and the deployment succeeded.
>
> **[2:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=158)** If I go ahead and close this out and I go back to the list of IPs, you can see my newly created IP added to the list.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=169)** So what does this do for me with regard to virtual machines?
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=172)** Well, let me click on Microsoft Azure to go back to the main portal screen and then I'll go into Azure Virtual Machines.
>
> **[3:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=181)** And let's go back to the virtual machine creation process.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=183)** I'll click create and then Azure Virtual Machine.
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=187)** And then I'm just going to skip ahead to the networking tab.
>
> **[3:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=192)** Right now, public IP is set to none, simply because I didn't complete the fields on the basics tab.
>
> **[3:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=197)** But if I were to click the down arrow, I have the option of selecting the named IP that I created a moment ago.
>
> **[3:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=203)** And this IP can be disassociated from a virtual machine and added to a new virtual machine.
>
> **[3:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-public-ip-address?u=76281980&t=208)** So that's how you create and manage IP addresses for Azure Virtual Machines.

> [!info]- Semantic Content
>
> **Code Keywords:** public (13), let (4)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Create a virtual network firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=0)** - [Instructor] Anytime that you create an Azure virtual machine, that virtual machine is connected to a virtual network.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=5)** Let me show you what I mean.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=7)** I'm going to click on Create, and then I'll click on Azure virtual machine.
>
> **[0:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=13)** This takes me to the create a virtual machine interface and I'm just going to select the Networking tab.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=21)** And right here you can see a place where I can select a virtual network.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=24)** I can choose from an existing virtual network or I can create a brand new one if I need to.
>
> **[0:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=30)** Now, when you create a virtual machine, you can create port rules to protect that virtual machine, but you can do a similar thing with a virtual network.
>
> **[0:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=38)** You can create a firewall that protects that virtual network.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=41)** So let's take a look at how to do that.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=43)** I'm going to go ahead and cancel out of this And then I'm going to click on the Microsoft Azure logo and then go to more services and then I'm going to click on Networking and then I'll click on virtual networks.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=61)** And this is going to bring up a list of all of my virtual networks.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=64)** I'm just going to click one at random and then I'm going to click on the firewall tab.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=70)** And when I do, Azure displays a message saying no firewall exists in this virtual network, click here to add a new firewall.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=77)** So I'm going to go ahead and click here.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=81)** So to create a firewall, the first thing that we have to do is select our subscription and then choose the resource group that we want to create the firewall within.
>
> **[1:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=92)** Next, we have to provide a name for the firewall that we're creating.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=98)** Then we choose a region and an availability zone.
>
> **[1:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=100)** I'm just going to go with the defaults and then I'll scroll down a bit.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=105)** Now, we have to choose the firewall skew that we want to use.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=108)** We can create a basic, a standard, or a premium firewall.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=111)** I'm going to go with the basic option.
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=115)** Then we have to choose a firewall policy.
>
> **[1:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=117)** So we can select an existing firewall policy, but being that this is the first firewall that I've created, no such policy exists.
>
> **[2:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=124)** So I'm just going to click add new, and I have to enter a name for the firewall policy that I'm creating.
>
> **[2:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=131)** I'm just going to call this firewall policy and the policy tier needs to be set to basic because I am creating a basic firewall.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=140)** I'll click OK.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=141)** Now, I have to provide a virtual network name.
>
> **[2:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=144)** This name has to be different than the name of the virtual network on which I'm placing the firewall.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=149)** For example, the virtual network that the firewall is being created in is example Vnet.
>
> **[2:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=154)** If I type example Vnet, then I get an error message saying there's already a resource with the same name.
>
> **[2:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=162)** So I'm going to clear that out and I'll just type a new name.
>
> **[2:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=170)** Now, I have to provide an address space and I'm just going to go with the default.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=177)** And then I have to provide a subnet address space, again, I'll go with the default.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=183)** Now, I have to choose a public IP address.
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=187)** So I'm going to select a public IP address that I created earlier and I have to enter a subnet address space.
>
> **[3:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=198)** Then I have to choose a management public IP address.
>
> **[3:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=201)** In other words, the IP address that will be used to manage this firewall.
>
> **[3:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=206)** And you'll notice that I've got a couple of IP addresses that already exist, but they're all already occupied.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=210)** So I'm going to need to create a new IP address.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=212)** So I'll click add new.
>
> **[3:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=216)** I'll enter a name for the IP address and click OK.
>
> **[3:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=222)** And so now we're going to create a new IP address for use for managing this firewall.
>
> **[3:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=226)** I'll click review plus create, the validation test passed, and I'll click Create and the new firewall has been created.
>
> **[3:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-a-virtual-network-firewall?u=76281980&t=239)** So that's how you create a firewall for an Azure virtual network.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (2), default. (2), interface (1), new, (1)
> **UI Navigation:** click on (5), select the (1), go to (1), scroll down (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Create firewall rules
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to create a virtual network firewall.
>
> **[0:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=4)** However, that firewall doesn't really do much at the moment.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=7)** If you take a look at the Rules section, you can see that there are zero rules.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=11)** We have known DNAT rules, network rules, or application rules.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=15)** So let's take a look at how to create some rules for this firewall.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=19)** So what I'm going to do is click on FirewallPolicy, and this is going to bring me to the FirewallPolicy page.
>
> **[0:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=26)** Here, we have the option of creating rule collections, DNAT rules, network rules, or application rules.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=33)** Now, you have to create a rule collection before you can begin creating rules.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=36)** But you can create that rule collection as a part of the process of creating rules.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=41)** So to show you what I mean, I'm going to click on Network rules, and as you can see, there's a message indicating that no rule collections are found.
>
> **[0:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=50)** So I'm going to click Add a rule collection, and we have to provide a name.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=56)** I'll call this NetworkRules.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=60)** The rule collection type is set to Network.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=63)** Now we have to provide a priority, and the priority just determines the order in which the various rule collections are going to be processed.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=71)** I'm going to enter 100 as the priority.
>
> **[1:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=78)** Now we have to set a rule collection action.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=80)** So in other words, the rules that we set up here, do we want those to be allow rules, or do we want those to be deny rules?
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=86)** I'll go ahead and create a collection of allow rules.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=90)** So now that we've got this filled in, the next thing that we have to do is to begin creating some rules.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=96)** So I'm going to enter Web as the name of a rule.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=101)** And I'm only using this as an example.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=102)** You can create any rules that fit your organization.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=105)** Source type is set as IP Address.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=108)** I want to leave it set that way.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=109)** You could do an IP Group instead.
>
> **[1:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=112)** Then we have to enter a source address.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=114)** I'm just going to enter an asterisk, and an asterisk means that we're applying this rule to all inbound traffic.
>
> **[2:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=122)** Then we have to choose what protocols this rule is going to apply to.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=125)** I'm going to set the protocol to TCP.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=132)** Then we have to provide a destination port.
>
> **[2:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=135)** I'm going to set this rules for TCP port 80.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=141)** Next, we have to specify the destination type, which, once again, I'm going to use IP address, and then we have to enter a destination IP.
>
> **[2:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=150)** I could enter a specific IP address, and that's probably what I would want to do in a production environment.
>
> **[2:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-firewall-rules?u=76281980&t=155)** In this case though, I'm simply going to enter an asterisk indicating that we're going to allow web traffic on TCP port 80 from.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (3), dnat (2)
> **Code Keywords:** let (1), type, (1), from. (1)
> **Ports:** port 80 (2)
> **UI Navigation:** click on (2)
> **Definitions:** in other words (1), means that (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 7. Applications and Customization

#### Deploy VM extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=0)** - [Instructor] When you create a new virtual machine it can sometimes be convenient to install an extension to go along with it.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=6)** An extension is really just a software package that gets installed automatically and Microsoft bundles these software packages as extensions to make them easy to install.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=15)** So I want to show you how to go about installing an extension.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=19)** As you can see, I'm signed into the Azure portal and I'm on the virtual machine screen.
>
> **[0:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=23)** I'm going to go ahead and click Create and then I'll choose the Azure virtual machine option.
>
> **[0:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=29)** And this is going to take me to the Create a virtual machine screen.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=33)** So the first thing that I need to do is to choose a resource group and then I need to provide a name for my virtual machine.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=44)** Now, one of the really important things to know about extensions is that not every extension can work with every type of virtual machine.
>
> **[0:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=52)** So the particular extension that I'm planning on installing for this video requires an N-class virtual machine.
>
> **[0:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=58)** That means that we're going to have to select an N-class size.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=63)** Now, having said that, not every region offers N-class virtual machines.
>
> **[1:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=67)** So I need to pick a region where that particular virtual machine size is supported.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=71)** So I'm going to go to Region and I'm going to set this to US West US.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=81)** Next, I'm going to set the Image to a Windows image.
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=86)** And then I'll scroll down and choose a virtual machine size.
>
> **[1:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=91)** Remember, for the extension that I'm planning on installing, we need an N-class virtual machine size.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=95)** So I'll click the down arrow, I'll click See all sizes, and I'll scroll down.
>
> **[1:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=103)** And here's the N Series.
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=107)** And I'll select an N series size and click Select.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=111)** And once again, not every extension that you install requires an N-class size, but some do.
>
> **[1:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=116)** So you'll need to take a look at the list of extensions to see what size virtual machine you're going to need.
>
> **[2:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=122)** So I'll go ahead and enter a username and password.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=132)** And then I'll scroll up.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=134)** I'll click the Networking tab so we don't get a validation error later on.
>
> **[2:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=139)** And then I'm going to skip ahead to the Advanced tab.
>
> **[2:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=142)** And you'll notice that the Advanced tab contains an Extensions section right up at the top, and it gives us the option of selecting an extension to install.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=149)** So I'll click the Select an extension to install link.
>
> **[2:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=154)** And this is going to take us to a list of extensions.
>
> **[2:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=157)** Now, the extension that I'm going to install is the AMD GPU Driver Extension.
>
> **[2:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=161)** I'll click on that.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=163)** And when I do, you can see that the pane on the right displays the requirements for this particular extension.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=168)** And one of those requirements is a Windows NV version 4 series, so that's why we had to select a virtual machine size.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=177)** Now each extension has its own requirements.
>
> **[2:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=179)** For example, if I were to click on Agent for Windows Server Monitoring, we get an entirely different overview and list of requirements.
>
> **[3:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=187)** I'm going to go back to the AMD GPU Driver Extension.
>
> **[3:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=191)** I'll click Next.
>
> **[3:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=194)** I'll click Create.
>
> **[3:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=197)** And so now we can see our selected extension listed.
>
> **[3:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=199)** And if I happen to pick the wrong one I can always remove that, but everything looks good here.
>
> **[3:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=203)** So I'm going to click on Review + create and the validation has passed.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=210)** So I'll click Create to create this virtual machine.
>
> **[3:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=215)** And somewhat surprisingly the deployment process has failed.
>
> **[3:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=219)** So let's take a look at what happened.
>
> **[3:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=221)** If I go up to the error message there's a link where we can click for details.
>
> **[3:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=225)** So I'm going to click here for details and the error details say, "Allocation failed.
>
> **[3:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=231)** We do not have sufficient capacity for the requested VM size in this region.
>
> **[3:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=235)** Read more about improving the likelihood of allocation success..."
>
> **[3:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=239)** And then there's a URL.
>
> **[4:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=241)** So what this is essentially saying is that we set everything up correctly, but that right now the Microsoft Data Center is busy and they simply weren't able to provide us with the cloud resources that were necessary in order to create this particular virtual machine.
>
> **[4:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=255)** Because remember, we chose a specific virtual machine size that was somewhat out of the ordinary, and Microsoft has limited capacity for hosting those types of virtual machines.
>
> **[4:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=265)** Well, in this case, I'm not overly concerned because this was simply a demo video, but if this were a production environment and something like this happened, then maybe the best course of action would be to create a capacity reservation in the region where I want to create the virtual machine.
>
> **[4:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=280)** A capacity reservation allows you to have capacity on hand that's dedicated to you for your use on an as needed basis.
>
> **[4:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=287)** Now, there are costs and commitments that are associated with creating a capacity reservation.
>
> **[4:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=292)** In fact, I talked all about it in one of the videos earlier in this course, but that would be a way of ensuring that you don't get this type of error.
>
> **[5:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/deploy-vm-extensions?u=76281980&t=300)** At any rate, that's how you go about creating a virtual machine with an extension in Microsoft Azure.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), scroll down (2), go to (1), scroll up (1)
> **Prerequisites:** install (6), you'll need (1)
> **Env Vars:** amd (2), gpu (2), url (1)
> **Code Keywords:** let (1), case, (1)
> **Cross-References:** go back to (1), earlier in (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Versions:** version 4 (1)

#### Instal applications on Azure VMs
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=0)** - [Instructor] Microsoft allows you to install an application as a part of the Azure virtual machine deployment process.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=6)** Now, certainly you don't have to install an application in that way.
>
> **[0:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=10)** You can create a virtual machine, log into the virtual machine and then manually install the application.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=15)** There's absolutely nothing stopping you from doing that.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=18)** However, sometimes it's just a little bit more convenient to install applications automatically while the virtual machine is being created.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=25)** So that's what I want to show you how to do.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=27)** Now, before you can tell Azure to install an application as a part of the VM creation process you have to define that application within Azure and in order to do that you're going to need an Azure Compute Gallery.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=40)** So the way that you would do that is to log into Azure and then from the main portal screen click on the search box and type Azure Compute Gallery.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=51)** Next, you would click on Azure Compute Gallery and then you would create an Azure Compute Gallery from this screen right here.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=59)** Now, the creation process is really simple.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=61)** All you have to do is select a resource group and then provide a name and an optional description for the gallery that you're creating and then click Review + create.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=70)** I'm not going to create a gallery because I've already got one.
>
> **[1:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=73)** So with that said, I want to click on the Microsoft Azure link to go back to the main portal screen and then I'm going to come down here and click on Compute.
>
> **[1:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=81)** This is my Azure Compute Gallery.
>
> **[1:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=85)** And as you can see, when you go into the gallery that you've created you have two options.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=90)** You can create a VM image definition or you can create a VM application definition.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=96)** So if your goal is to automatically deploy applications then you're going to want to create a VM application definition.
>
> **[1:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=103)** So I'll go ahead and click on the Create a VM application definition button and this is going to take me to a screen where I'm able to set up a few things related to my application.
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=115)** So what you would do on this screen is enter a name for the application definition that you're creating.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=120)** You would choose the region and the region needs to match your virtual machine region.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=125)** Then you would choose the operating system.
>
> **[2:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=126)** You can choose from Windows or Linux and then you would make sure that the correct Azure Compute Gallery is selected.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=132)** You'll notice that this is grayed out because I've already gone in and created an Azure Compute Gallery.
>
> **[2:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=139)** So I'm going to back out of this.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=141)** I'm going to click on Compute.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=143)** And one thing that you'll notice is that right now the Get started tab is selected.
>
> **[2:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=147)** That's where we have the buttons to create a VM image definition or to create a VM application definition.
>
> **[2:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=153)** But we've also got a tab right here called Definitions and the Definition tab contains applications that are already defined.
>
> **[2:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=160)** So I went in earlier and defined an application.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=163)** So I'm going to click on that application and I just want to show you what this looks like.
>
> **[2:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=168)** So here we have our application definition and I've created an application inside of that application definition.
>
> **[2:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=173)** If you want to create an application then what you would do is click on the Add button and then there are a few pieces of information that you'll need to fill in.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=183)** For starters you'll need to select your subscription and your resource group.
>
> **[3:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=186)** Once again, this resource group needs to be consistent with the resource group that you've used when you created the application definition and the resource group that your virtual machine is using.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=196)** You're also going to need to provide a version number.
>
> **[3:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=199)** Now, this version number can be something that you make up off the top of your head but it has to be in the format that you see right here, three numbers separated by periods.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=210)** Next, you'll need to provide a source application package.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=212)** The source application package is the application that you're going to be installing.
>
> **[3:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=217)** So this is something that you're going to have to upload to Azure ahead of time.
>
> **[3:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=221)** So if, for example, I were to click Browse then this shows me all of my storage accounts.
>
> **[3:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=227)** I could click on a storage account and then I could create a container and then within a container I could click Upload and upload an application.
>
> **[3:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=238)** You can see an application that has already been uploaded.
>
> **[4:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=242)** So I'm going to back out of this.
>
> **[4:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=246)** Now, another thing that you're going to need is an install script and an uninstall script.
>
> **[4:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=251)** These are simply command lines that are going to be used to install and to remove the application.
>
> **[4:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=256)** So then when you're done you would simply click Review + create and that's going to create your application.
>
> **[4:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=262)** So with that said, I want to go ahead and back out of all of this and go to the virtual machine side of things.
>
> **[4:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=267)** So I'm going to click on the Microsoft Azure logo and then I'm going to click on Virtual machines.
>
> **[4:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=275)** Then from the Virtual machines screen I'm going to click Create and then I'm going to choose the Azure virtual machine option.
>
> **[4:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=284)** This is going to take me to the create a virtual machine screen.
>
> **[4:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=287)** So the very first thing that I need to do on this screen is to select a resource group because remember this virtual machine has to be a part of the same resource group as the application.
>
> **[4:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=296)** So I'll select my resource group, then I'll provide a name for the virtual machine that I'm creating.
>
> **[5:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=305)** I need to make sure that the correct operating system image is being used.
>
> **[5:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=309)** For example, since the application was a Windows application I need to make sure that I'm using a Windows image.
>
> **[5:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=314)** From there I'll scroll down and I'll provide a username and password and then I'll scroll up to the top, I'll click the Networking tab just to avoid a validation error later on, and then I'm going to go to the Advanced tab.
>
> **[5:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=334)** Now on the Advanced tab you'll notice that we have an option for VM applications.
>
> **[5:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=338)** So I'm going to click Select a VM application to install.
>
> **[5:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=342)** From there, I'll select the application that I defined and click Save.
>
> **[5:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=347)** And you can even configure the order in which the applications are installed.
>
> **[5:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=351)** In this case I've only got one application that I'm installing so I don't need to worry about the order.
>
> **[5:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=357)** You can also treat the entire installation as a failure if the application itself fails to install by selecting this checkbox.
>
> **[6:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=364)** So everything looks good here.
>
> **[6:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=366)** I'm going to click Review + create and this is going to take me to a screen where a validation check is performed and the validation has passed.
>
> **[6:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=375)** Everything looks good.
>
> **[6:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/instal-applications-on-azure-vms?u=76281980&t=377)** So if I wanted to move forward and install the virtual machine with the application I would simply click Create and that's how you deploy an application as a part of the virtual machine creation process.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (11), go to (2), scroll down (1), scroll up (1), select the (1)
> **Prerequisites:** install (10), you'll need (3), set up (1), configure (1)
> **CLI Commands:** make (4)
> **Code Keywords:** this. (2), if, (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 8. Working with VMs

#### Start, stop, and restart VMs
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=0)** - [Instructor] Microsoft Azure makes it easy to start, stop and restart virtual machine instances.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=5)** So let's take a look at how this works.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=7)** Right now I'm signed into Azure and I'm on the main portal screen.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=11)** So I'm just going to click on virtual machines.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=15)** And when I do, you can see that I have a virtual machine called Example.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=18)** You can see that virtual machine right here.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=21)** So let's suppose that for whatever reason we want to stop this virtual machine.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=25)** We don't actually have to log into the virtual machine to do that.
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=28)** Instead, I'm simply going to select the virtual machine by selecting the checkbox, and then I'll click on the stop icon.
>
> **[0:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=37)** When I do, I see a message asking me if I want to stop the selected virtual machines.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=41)** And then it says that "This operation will stop all the virtual machines selected below."
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=46)** I'll go ahead and click yes, and take a look at the status column.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=51)** Right now, the status column indicates a status of running, and then after a few moments there's a popup that appears that indicates that the status has successfully been changed to stopped.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=62)** Now you'll notice that the status column hasn't updated, but we can easily refresh the console simply by clicking the browser's refresh button.
>
> **[1:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=68)** I'll go ahead and do that.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=75)** And now we can see that the status has changed to stopped or deallocated.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=79)** If we want to start this virtual machine back up we would select it and then click on the start icon.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=87)** Once again, I get a message asking me if I want to start the selected virtual machine.
>
> **[1:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=91)** I'll click yes.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=95)** And again, we get a popup indicating that the operation was successful, but once again the status hasn't automatically refreshed.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=101)** So I'll go ahead and refresh the browser, and the status has changed to running.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=109)** Now, we can also use the method that I just showed you to reboot a virtual machine without having to explicitly command Microsoft Azure to stop and then start the virtual machine.
>
> **[1:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=119)** So what I'm going to do is select the virtual machine instance once again, and then rather than clicking on stop, I'm just going to click on restart, and I get a message asking me if I want to restart the selected virtual machine.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=132)** I'll click yes.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=134)** And so this allows me to reboot the virtual machine without having to click stop and then click start.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=141)** And then after a few minutes I receive a pop-up message indicating that the restart has succeeded.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/start-stop-and-restart-vms?u=76281980&t=145)** So that's how you stop, start and restart a virtual machine instance in Microsoft Azure.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (1), checkbox (1)
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)

#### Make a configuration change to a VM
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=0)** - [Instructor] You may occasionally discover that you need to change the configuration of an existing Azure virtual machine.
>
> **[0:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=6)** While Microsoft won't allow you to change every configuration option associated with the virtual machine in Azure, you can change a surprising number of options.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=14)** So, let's take a look at a few examples.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=16)** Right now I'm in the virtual machines console and I'm going to go ahead and click on the example virtual machine that I created earlier.
>
> **[0:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=26)** When I click on the virtual machine, the console displays a details view of the virtual machine where we can see an overview of the way that the virtual machine is configured.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=36)** If you look in the column in the middle, however, you'll notice that we have a section, right here, called Settings, and just beneath settings we have various settings that can be configured.
>
> **[0:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=46)** So for example, if I were to click on Networking, then I'm taken to the networking section.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=53)** And you can see that I can easily add inbound port rules or I could delete existing port rules.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=60)** Another thing that I might do is to work with the discs that are attached to this virtual machine instance.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=65)** To do that, I would click on Discs.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=70)** And here we can see the OS disc, but I also have the option of creating and attaching a new disc or attaching an existing disc.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=79)** Another possibility is that I may have outgrown this particular virtual machine instance and need to make it larger or perhaps I need to save a little bit of money and want to make the virtual machine instance smaller.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=90)** In situations like that, I could resize the virtual machine instance.
>
> **[1:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=94)** To do that, I would go to Size.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=98)** And here I can see the various sizes that are available for this instance.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=101)** So, I would simply select a new size and then click on the Resize button.
>
> **[1:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/make-a-configuration-change-to-a-vm?u=76281980&t=107)** So those are just a few of the ways that you can change the configuration options associated with an Azure virtual machine.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), delete (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Monitoring VM performance
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=0)** - [Instructor] If you've got a virtual machine that's running an important workload, then it's a good idea to periodically check and see how well that virtual machine is performing.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=7)** So Azure gives you a few different options for monitoring your virtual machine's performance.
>
> **[0:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=12)** So let's take a look at some of the things that you can do.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=15)** Right now, I'm on the virtual machine's console.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=18)** And you can see that I've got one virtual machine.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=19)** It's called Example.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=21)** I'm going to go ahead and click on the Example virtual machine.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=25)** When I do, I'm taken to the Overview screen.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=27)** Now, if you look about halfway down on the Overview screen, you can see that there are some sub tabs.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=31)** We have Properties, Monitoring, Capabilities, Recommendations, and Tutorials.
>
> **[0:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=37)** I'm going to click on Monitoring.
>
> **[0:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=40)** Now, the first thing that you'll probably notice is that we have 10 health events listed.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=44)** Now, health events aren't necessarily the same as performance events, but it can be helpful to take a look at the health events because it gives you an idea of what's going on with your virtual machine.
>
> **[0:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=54)** So I'm going to go ahead and click on 10 events so that we can see what types of things Microsoft Azure considers to be health events.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=64)** So right here, we have the health history.
>
> **[1:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=66)** And this is grouped by date.
>
> **[1:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=68)** So I'm going to click on Today.
>
> **[1:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=70)** And when I do, we can see the various events that have happened today.
>
> **[1:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=73)** I'll scroll down a little bit.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=75)** So here we can see hardware resources were allocated to the virtual machine instance.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=80)** Here we can see where the virtual machine was stopped and deallocated.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=84)** Here we can see where the virtual machine resources were allocated.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=89)** Here, the virtual machine instance was started by the user.
>
> **[1:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=93)** And here the virtual machine instance was rebooted by the user.
>
> **[1:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=96)** So these are the types of events that are logged as health events.
>
> **[1:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=100)** So I'm going to go back to the virtual machine.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=104)** And I'm going to scroll down a little bit.
>
> **[1:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=106)** And here we have a Performance and utilization section.
>
> **[1:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=110)** And there are various performance metrics that are listed for each virtual machine.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=114)** So, for example, here we can see the VM Availability.
>
> **[1:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=118)** So you can see what level of availability existed for the virtual machine.
>
> **[2:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=122)** So the virtual machine was 100% available all day long.
>
> **[2:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=126)** And then we have this spike right here where it drops down to zero.
>
> **[2:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=129)** That's where I rebooted the virtual machine instance.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=132)** You can also look at the CPU average, and you'll notice that as I move my mouse back and forth, you can take a look at various times of the day.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=141)** Then if I scroll down a little bit more, we see Disk bytes total.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=145)** And then there's a link right here, Show more metrics.
>
> **[2:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=148)** And there are four available metrics that we can take a look at.
>
> **[2:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=150)** I'll go ahead and click on Show more metrics.
>
> **[2:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=154)** And I'll scroll down.
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=156)** And as you can see, we can take a look at the network activity.
>
> **[2:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=159)** And we can take a look at the disk operations per second.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=163)** And if I scroll down some more, we have two more metrics.
>
> **[2:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=166)** We have available memory bites and max logical disk used.
>
> **[2:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=171)** Now if you take a look right here, you can see that these are guest OS metrics, meaning that Azure is trying to look at metrics that are recorded by the operating system on the virtual machine instance.
>
> **[3:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=183)** And right now, nothing is being displayed.
>
> **[3:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=184)** And the reason for that is that VM Insights have to be turned on for the virtual machine.
>
> **[3:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=190)** The reason why those insights aren't turned on by default is because there's an extra charge for them.
>
> **[3:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=194)** So if you wanted to enable VM Insights for this particular virtual machine, you would click on Configure VM Insights.
>
> **[3:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=202)** And that's going to bring up the screen right here.
>
> **[3:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=205)** And if you look right here, you can see that there's a warning message telling you that you will be billed based on the amount of data ingested and your data retention settings.
>
> **[3:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=215)** And then the message goes on to tell you that it can take 5 to 10 minutes to configure the virtual machine and for monitoring data to appear.
>
> **[3:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=223)** So if after reading that you decide you still want to configure Virtual Machine Insights, then all you have to do is click on Enable, and then Virtual Machine Insights will be enabled, and then you'll start to get that monitoring data.
>
> **[3:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitoring-vm-performance?u=76281980&t=236)** So that's how you monitor a virtual machines performance in Microsoft Azure.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), scroll down (5)
> **Prerequisites:** configure (3)
> **Code Keywords:** let (1)
> **Env Vars:** cpu (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Create alert rules
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=0)** - If you've got an Azure virtual machine that's running an important workload, you may find it necessary to be notified if there's a problem with that virtual machine.
>
> **[0:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=8)** So let's take a look at how to set up some alerts for an Azure virtual machine.
>
> **[0:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=13)** Right now I'm in the virtual machines console and I'm going to click on my example virtual machine.
>
> **[0:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=21)** This is going to bring up the virtual machine summary, and so the next thing that I'm going to do is I'm going to scroll down the column in the middle and locate the monitoring section.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=31)** And you'll notice within monitoring that we have a section called Alerts.
>
> **[0:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=34)** I'll click on Alerts and this is where we can set up alerts for the virtual machine.
>
> **[0:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=39)** So in other words, if anything goes wrong with that virtual machine, then we'll be alerted.
>
> **[0:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=45)** So we have two options here, we can enable recommended alert rules or we can create a custom alert rule.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=51)** For right now, I'm going to click on enable recommended alert rules.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=56)** So the resulting screen provides us with Microsoft's recommended alert and rules for this particular virtual machine instance.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=62)** So let's take a look at what we've got.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=65)** The first rule is Percentage CPU is greater than 80%.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=69)** Then we have Available Memory Bytes less than one gigabyte.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=74)** Data Disk IOPS Consumed Percentage is greater than 95%.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=79)** OS Disk IOPS Consumed Percentage is greater than 95%.
>
> **[1:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=83)** Network In Total is greater than 500 gigabytes.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=87)** Network Out Total is greater than 200 gigabytes.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=90)** VM Availability is less than one.
>
> **[1:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=94)** So these are all default values.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=95)** You have the ability to change any of these that you want.
>
> **[1:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=99)** For example, maybe I'm not worried about the average CPU use being greater than 80%, but maybe I want to know if the average CPU use is greater than 90%.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=109)** I could easily go up here and change this to 90.
>
> **[1:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=114)** Next, we have to choose how we want to be notified.
>
> **[1:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=116)** The default option is to be notified by email, but we could choose to be notified through email to the Azure Resource Manager role, or we could be notified through the Azure Mobile app notification, or we could use an existing action group.
>
> **[2:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=131)** Now you'll notice that there is a charge associated with this and the estimated monthly charge in this case is 70 cents.
>
> **[2:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=137)** I'm going to go ahead and click on Enable, and you can see that everything is being set up.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=145)** And so now alerting has been set up for this particular virtual machine instance.
>
> **[2:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=151)** So what if I need to make a change or if I want to set up some additional alerts?
>
> **[2:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=156)** Well, what I would do in a situation like that is go to our alert rules, and this is going to take me to a screen that displays the various rules that were set up by default.
>
> **[2:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=167)** And I could edit any one of these rules.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=169)** For example, I'll go ahead and click on the very first one, Available Memory Bytes, and then I'll click on Edit.
>
> **[2:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=179)** And so here we have the ability to edit the various conditions that are set forth by this rule and we can also change the actions that are associated with the rule.
>
> **[3:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=189)** You could even change the rule severity.
>
> **[3:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=191)** All of the rules that are created by default are informational in nature.
>
> **[3:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=194)** So they have a severity level of three, which is informational.
>
> **[3:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=198)** But let's pretend that this particular rule was a lot more important.
>
> **[3:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=201)** In a situation like that, we would click the down arrow, and maybe we want to change the severity level to critical.
>
> **[3:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=210)** So I'll go ahead and click Save.
>
> **[3:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=212)** And so now my change has been saved.
>
> **[3:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=214)** I'll go back to alert rules.
>
> **[3:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=219)** And you'll notice that we have a create button right here, so we could add additional alert rules if we wanted.
>
> **[3:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=223)** And incidentally, you'll notice that the change that I made a moment ago isn't showing up.
>
> **[3:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=228)** And all we have to do to make that change show up is just refresh the browser.
>
> **[3:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=234)** And so now we can see the change.
>
> **[3:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=236)** So this rule now has a severity level of critical.
>
> **[3:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=239)** And if I wanted to create an additional rule, I would simply click Create, and this brings up an interface that allows us to create a new rule.
>
> **[4:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=249)** And creating a new rule involves selecting a scope.
>
> **[4:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=253)** In this case, the scope is going to be the virtual machine.
>
> **[4:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=256)** Then we specify a condition, and the condition is based on a signal.
>
> **[4:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=261)** And that signal can be a percentage of the CPU, available memory bytes, and the same basic things that we saw a moment ago with the default rules.
>
> **[4:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=269)** I'll go ahead and click on percentage CPU.
>
> **[4:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=274)** And when I do that, we have the ability to fine tune this rule.
>
> **[4:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=277)** So, you can see that the aggregation type is set to average.
>
> **[4:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=281)** So if I were to create this rule right now, it would look at average CPU use, and the threshold value is 80.
>
> **[4:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=288)** So we're checking to see if the average CPU use is greater than 80.
>
> **[4:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=292)** You'll notice the greater than right here.
>
> **[4:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=294)** I could change this to greater than or equal to, or less than or equal to, or less than, but we'll go with greater than.
>
> **[5:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=301)** And it's set to 80.
>
> **[5:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=302)** Now here's the really important part right here, when to evaluate.
>
> **[5:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=305)** So right now we're checking this rule every minute.
>
> **[5:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=309)** You could change this to look at things a lot less frequently, but I'll go with every minute.
>
> **[5:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=315)** And then we have something called the look back period, and that's set to five minutes.
>
> **[5:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=319)** So what is that?
>
> **[5:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=320)** Well, we're checking every minute to find out if the average CPU usage is greater than 80%.
>
> **[5:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=326)** But when we look at that average, we're looking at a period of the last five minutes.
>
> **[5:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=331)** So what we're really looking at is if over the last five minutes the average CPU utilization was greater than 80%.
>
> **[5:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=340)** So from there we have actions.
>
> **[5:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=342)** In other words, what should happen if this rule exceeds the threshold value?
>
> **[5:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=347)** Then we have a details tab where we could associate a severity level with the rule.
>
> **[5:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=353)** We can apply tags, and then we have the review and create screen.
>
> **[5:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=357)** So we would go through here and just make sure everything's good.
>
> **[5:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=359)** And if it is good, then we would click the Create button.
>
> **[6:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=363)** And of course right now the create button is grayed out because I didn't go through and configure everything associated with this rule.
>
> **[6:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/create-alert-rules?u=76281980&t=369)** But that's how you go about creating an alert rule in Microsoft Azure.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (9), iops (2)
> **UI Navigation:** click on (7), scroll down (1), go to (1)
> **Prerequisites:** set up (6), configure (1)
> **Code Keywords:** let (3), default. (1), interface (1), case, (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** in other words (2), is a  (1)
> **Best Practices:** recommended (3)
> **Analogies:** for example (2)

#### Back up a virtual machine
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=0)** - [Instructor] While you can use a third party backup application to back up an Azure virtual machine, Microsoft also provides native backup capabilities.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=7)** So let's take a look at how to back up an Azure virtual machine using the native backup features.
>
> **[0:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=12)** As you can see, right now I'm in the virtual machines console and I'm going to click on my example virtual machine.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=19)** Next, I'm going to scroll down to the Operations section and then I'm going to click on Backup.
>
> **[0:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=27)** And the backup section provides a number of different options.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=31)** The first thing that we have to do is to choose a recovery services vault.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=35)** The recovery services vault is where the backup is going to be stored.
>
> **[0:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=38)** As you can see, we have the ability to create a new recovery services vault, or we can use an existing one.
>
> **[0:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=44)** I'm just going to use an existing recovery services vault.
>
> **[0:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=48)** Next, we have to choose the policy subtype that we want to use.
>
> **[0:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=52)** You can perform a standard backup, or you can perform an enhanced backup.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=56)** An enhanced backup backs up multiple times per day as opposed to once a day with a standard backup.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=61)** So I'm going to go with the enhanced option.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=64)** Next, we're asked to choose a backup policy and there's only one to choose from, it's the enhanced policy.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=72)** So just because you only have one policy to choose from in this case doesn't mean that you're locked in to backing up according to the defaults.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=79)** You'll notice that we have an option to edit this policy.
>
> **[1:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=82)** I'm going to go ahead and click this.
>
> **[1:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=84)** And when I do, I'm provided with various options for fine tuning the backup.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=89)** So as you can see right now, the frequency is set to hourly.
>
> **[1:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=92)** Now, this doesn't mean that backups are going to be made every hour.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=95)** It simply means that hours are going to be used as the time span for which backups will be scheduled as opposed to scheduling them based on days, or weeks, or something like that.
>
> **[1:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=104)** If I click the down arrow, you can see that we have hourly, daily, or weekly.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=108)** Next, we have the start time, when the backup will be initially created, and I'm going to go ahead and set this to 10:00 PM just because of the time that it is when I'm recording this video.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=120)** Then we have the schedule, how often do you want backups to be created?
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=123)** The default is every four hours, but you can choose every six hours, every eight hours, or every 12 hours.
>
> **[2:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=129)** Then we have the backup duration, which is set to 12 hours by default, but we could go higher or lower.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=136)** And then, we have the time zone.
>
> **[2:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=139)** I'm going to go ahead and set this to Eastern Time, where I'm at.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=143)** Then we have the retention period for the instant recovery snapshots.
>
> **[2:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=147)** So the snapshots that are created as a result of the backup process are going to be retained for seven days by default.
>
> **[2:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=153)** And, of course, we could change this to meet our needs.
>
> **[2:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=157)** Then, as I scroll down, there is a retention of daily backup points.
>
> **[2:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=161)** Those backup points are retained for 30 days by default.
>
> **[2:44](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=164)** Again, you can change that, and then you can also configure retention for weekly backup points, monthly backup points, and yearly backup points.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=172)** So I'm going to go ahead and click OK to accept the options that I've selected.
>
> **[2:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=178)** And then, I'll scroll down a little bit more.
>
> **[3:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=180)** And here, you can see a summary of the backup options that have been selected.
>
> **[3:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=184)** Everything looks good here, so I'm going to click Enable backup and the backup's being validated.
>
> **[3:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=192)** And you can see that the deployment is in progress.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=196)** And now, we get a message saying that the deployment has succeeded.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/back-up-a-virtual-machine?u=76281980&t=200)** So that's how you create your initial backup using Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (2), let (1), from, (1), this. (1), default, (1)
> **UI Navigation:** scroll down (3), click on (2)
> **Ports:** :00 (1)
> **Definitions:** means that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Restore a VM backup
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=0)** - [Instructor] Now that some time has passed, let's take a look at how you might recover a virtual machine that you've backed up.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=5)** So here I am in the virtual machines console.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=7)** I'm going to click on my example virtual machine, and then I'll scroll down to the operations section and click backup.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=16)** And when I do, you can see that we have one recovery point that's been created.
>
> **[0:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=20)** And if you look at the consistency column, you can see that this is an application consistent recovery point.
>
> **[0:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=26)** So how would we go about recovering this?
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=28)** Well, we've got a few different options.
>
> **[0:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=29)** I'm going to click the more icon, and you can see that we have an option for Restore VM or File Recovery.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=35)** Let's take a look at File Recovery.
>
> **[0:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=37)** File recovery is useful in situations where you want to recover one or more files from the backup, but you don't want to restore the entire virtual machine.
>
> **[0:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=45)** So I'll click File Recovery, and this takes me to the file recovery screen.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=51)** The first thing that we have to do is to select a restore point, but as you can see, the restore point has been populated automatically for us, so we don't have to do anything there.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=59)** Next we have to download an executable file.
>
> **[1:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=62)** So I'm going to click Download Executable.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=64)** And what this is going to do is download a PowerShell script that will allow us to mount the discs that are associated with the backup.
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=71)** And this process does take several minutes to complete.
>
> **[1:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=76)** Okay, so now we receive a popup saying that the script file is ready to be downloaded.
>
> **[1:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=80)** I'll click the download button, and then I'm going to click open file.
>
> **[1:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=86)** And when I do, I'm prompted to enter a password for the portal.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=89)** So I'm going to move this aside.
>
> **[1:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=92)** And you'll notice that we have a password right here.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=95)** I'm going to click copy to clipboard.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=98)** And so then I'm going to switch back over to my script, and I'm prompted to enter my password.
>
> **[1:42](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=102)** So I'll press Control V to paste it, and I'll press enter.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=108)** I'll click yes.
>
> **[1:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=111)** And now I'm prompted again to enter the password.
>
> **[1:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=112)** So I'm going to press Control V again and press enter.
>
> **[1:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=119)** And I'll close the legal notice.
>
> **[2:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=121)** I'll press Y to proceed.
>
> **[2:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=125)** And so now I receive a message saying that the connection was successful and that I need to open Explorer to browse for the files.
>
> **[2:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=132)** So let me go ahead and open up File Explorer.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=136)** I'll go to this PC, and you can see that now we have drives E, F, and G.
>
> **[2:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=141)** So this is where our files reside.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=143)** If I go into E, you can see the Windows folder, the user's folder, the temp folder.
>
> **[2:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=149)** So if I were performing an actual recovery, I could go into any of these folders and copy files out of them to my local machine.
>
> **[2:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=157)** Let me go ahead and close out Explorer.
>
> **[2:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=160)** And then I'm going to click unmount discs.
>
> **[2:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=163)** And like the mounting process, the unmounting process can also take several minutes to complete.
>
> **[2:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=169)** So now we receive a message saying unmount successful.
>
> **[2:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=172)** I'm going to switch back over to File Explorer and go to this PC.
>
> **[2:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=177)** And you'll notice that drives E, F, and G are gone now because those have been dismounted.
>
> **[3:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=182)** So let me go ahead and close this out, and I'll go back to Virtual Machines and back into my example virtual machine and click back up.
>
> **[3:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=193)** Now I mentioned that there were other recovery options.
>
> **[3:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=195)** So if I click more, you can see that we have a Restore VM option.
>
> **[3:21](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=201)** And the restore virtual machine screen gives me two options.
>
> **[3:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=204)** Those two options are Create new and Replace existing.
>
> **[3:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=208)** Create new creates a brand new virtual machine from the backup.
>
> **[3:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=211)** So you can see right now Create new is selected, and we have to enter a virtual machine name.
>
> **[3:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=217)** We have to choose our subscription.
>
> **[3:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=219)** We have to choose the resource group that we want the new virtual machine to be placed in.
>
> **[3:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=223)** We have to choose the virtual network and the subnet for that virtual machine.
>
> **[3:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=227)** And we have to choose the staging location.
>
> **[3:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=229)** So all of that is to generate a brand new virtual machine from the recovery point.
>
> **[3:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=234)** Now the other option is to replace the existing virtual machine.
>
> **[3:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=238)** And to do that, we would just click Replace Existing, and you can see all of those options go away.
>
> **[4:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=244)** Now all we have to do is choose a staging location.
>
> **[4:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=248)** And then we would click Restore.
>
> **[4:10](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=250)** And that would cause the virtual machine to be overwritten with the copy from the backup.
>
> **[4:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/restore-a-vm-backup?u=76281980&t=254)** So that's how you restore a backup in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (2)
> **UI Navigation:** go to (2), click on (1), scroll down (1)
> **Cross-References:** go back to (1)
> **Tools:** powershell (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Monitor VM patching
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=0)** - [Instructor] Microsoft Azure can be configured to automatically apply updates to Azure virtual machines.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=5)** But how do you know that those updates are actually being applied?
>
> **[0:08](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=8)** Well, if you're using a third party patch management system, there's typically going to be a reporting interface that you can use to find out which updates have been applied and which have not.
>
> **[0:18](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=18)** In the absence of such an interface, however, you can manually check an Azure virtual machine to see that updates are being applied.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=25)** Here I am in the virtual machines console and I've got one virtual machine.
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=28)** I'm going to go ahead and click on that virtual machine now.
>
> **[0:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=34)** Next I'm going to scroll down to the operations section and then I'm going to click on the updates tab.
>
> **[0:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=39)** So right now, there are no updates that are being recommended and there are no updates that are being found on the list of updates.
>
> **[0:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=47)** So we need to check and find out if updates are indeed being applied to this virtual machine or not.
>
> **[0:52](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=52)** So what I'm going to do is I'm going to click on the history tab.
>
> **[0:56](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=56)** And on the history tab you can see that there was an assessment done of the virtual machine.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=60)** An assessment is just to check to see if any updates are available and then we can also see that some updates were applied and we can see that this was done manually and we can even see the date and time when that occurred.
>
> **[1:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=74)** So updates are indeed being applied to this virtual machine.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=77)** So I'm going to go back to recommended updates and let's check and see if there are any other updates that are available.
>
> **[1:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=83)** The way that I would do that is by clicking check for updates.
>
> **[1:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=87)** And this asks me if I want to trigger an assessment.
>
> **[1:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=90)** I'll go ahead and click okay and the assessment process takes several minutes to complete.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=95)** Essentially what's happening is the virtual machine is checking Windows Update to find out if there are any updates available for the operating system that's running on that virtual machine.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=105)** And so the assessment process has completed and no updates were found.
>
> **[1:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=108)** So that means that this particular virtual machine is fully up to date, which is a good thing.
>
> **[1:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=113)** But what if updates had been found?
>
> **[1:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=115)** Well, in such a case, you could use the one-time update button to install those updates.
>
> **[2:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=120)** It's also possible to set up an update schedule.
>
> **[2:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=123)** I'm not actually going to create a schedule but I'll at least walk you through the process.
>
> **[2:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=127)** So what I'll do is I'll click on schedule updates.
>
> **[2:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=131)** And so the first thing that we have to do is to select our subscription and a resource group.
>
> **[2:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=136)** Then I'll scroll down a little bit and we need to enter a configuration name.
>
> **[2:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=140)** I'm just going to call this Windows Updates.
>
> **[2:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=145)** Next, we would verify our region, our maintenance scope and the reboot settings.
>
> **[2:30](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=150)** By default, whenever you create a maintenance configuration, it's set to reboot the virtual machine if required, but you don't have to allow these types of automatic reboots.
>
> **[2:40](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=160)** If you click on the down arrow, you can see that there's also an option to always reboot and to never reboot.
>
> **[2:46](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=166)** So choose whichever option is most appropriate for your workload.
>
> **[2:50](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=170)** The next thing that you'll have to do is to add a schedule.
>
> **[2:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=173)** And to do that, you would simply click on add a schedule.
>
> **[2:58](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=178)** And then specify when you want the update process to begin.
>
> **[3:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=181)** So you can click on the calendar and then pick a day and then just choose a start time and a maintenance window length and how often you want the schedule to repeat.
>
> **[3:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=192)** You can even assign an end date to the schedule if you have a need to do so.
>
> **[3:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=196)** I'm just going to go with the defaults here and click save.
>
> **[3:20](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=200)** And you can see that the schedule has been added to the wizard, so I'll click next.
>
> **[3:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=206)** And now I'm taken to the machine screen.
>
> **[3:27](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=207)** So we have one machine that's going to be part of the schedule, but we can add machines or we can remove machines.
>
> **[3:34](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=214)** I'm going to click next.
>
> **[3:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=217)** And so now we're taking to a screen that allows us to choose what types of update classifications we want to include in this maintenance configuration.
>
> **[3:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=225)** So we have the ability to choose what types of updates we want to install.
>
> **[3:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=229)** So for Windows right now, we have critical updates and security updates.
>
> **[3:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=233)** And then for Windows down here, we have no KB IDs are included.
>
> **[3:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=237)** We could click on the include KB ID package button if we wanted to include those KB IDs.
>
> **[4:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=244)** And then we also have an exclude list.
>
> **[4:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=246)** So you would want to go through this list and configure everything in a manner that's appropriate for your organization.
>
> **[4:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=253)** I'll click next.
>
> **[4:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=255)** And so now we're taken to the tag screen.
>
> **[4:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=257)** I'm not going to worry about tagging.
>
> **[4:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=259)** I'll just instead go to Review plus create.
>
> **[4:22](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=262)** And so now I'm taken to the Review Plus create screen.
>
> **[4:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=265)** There's a validation process that occurs and you can see that the validation passed.
>
> **[4:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=269)** And then if I were to click on create, then the maintenance configuration would be created and then all of those virtual machines would begin being updated according to the schedule that was set.
>
> **[4:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/monitor-vm-patching?u=76281980&t=279)** So that's how you go in and verify and schedule updates for Azure virtual machines.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), scroll down (2), go to (1)
> **Code Keywords:** interface (2), let (1), case, (1), default, (1)
> **Prerequisites:** install (2), set up (1), configure (1)
> **CLI Commands:** find (3)
> **Definitions:** means that (1), is a  (1)
> **Best Practices:** recommended (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Use Azure Advisor to check best practice compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=0)** - [Instructor] When you create a virtual machine in Microsoft Azure, it's important that the virtual machine be created based on Microsoft's recommendations.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=7)** So Microsoft provides a tool called the Azure Advisor that you can use to check the virtual machine to make sure that it complies with all of Microsoft's recommendations for that virtual machine.
>
> **[0:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=17)** So let's take a look at how this works.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=19)** As you can see, I've got a virtual machine and I'm just going to go ahead and click on it.
>
> **[0:24](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=24)** Next, I'm going to click on the advisor recommendations tab.
>
> **[0:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=29)** And when I do, you can see that there is a message just above my mouse pointer that says you're following all of our recommendations.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=36)** So this particular virtual machine is in good shape.
>
> **[0:39](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=39)** If there were issues with the virtual machine, those issues would be displayed.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=43)** But what are the recommendations for the virtual machine and for Azure as a whole?
>
> **[0:47](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=47)** Well, if you look at the very bottom of the screen, you can see some text that says recommendations are powered by Azure Advisor, view all recommendations in Advisor.
>
> **[0:55](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=55)** I'll go ahead and click that link now, and when I do, I'm taken to the Advisor score screen.
>
> **[1:01](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=61)** The Advisor score shows your score history.
>
> **[1:03](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=63)** In other words, how closely do your Azure resources match the Microsoft recommendation and how has that match changed over time?
>
> **[1:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=71)** So, right now, my score is 100% but it hasn't always been that way.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=75)** Over time, my score has gotten better, meaning that I've become more in compliance with Microsoft's recommendations.
>
> **[1:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=83)** And you can break down the score by category.
>
> **[1:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=85)** So you can see that I'm meeting 100% of the cost, reliability, operational excellence, and performance recommendations.
>
> **[1:32](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=92)** Right now, there's no data on security recommendations but that data will eventually be populated.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=98)** Now, if you're curious about the recommendations that Microsoft is making, you can click on all recommendations.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=105)** And when I do, those recommendations are displayed down at the bottom.
>
> **[1:49](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=109)** So for each recommendation, you can see a description, a category, the potential benefit of adhering to those recommendations, and which resources are going to be impacted.
>
> **[1:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=119)** So what I would recommend doing is looking at any recommendations that you're not in compliance with and assessing whether that recommendation will truly benefit your organization or not.
>
> **[2:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=129)** Most of the time it will but sometimes there can be a cost associated with complying with that recommendation.
>
> **[2:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=134)** So it's important to balance the benefit against the cost and then make a decision on whether or not you want to adopt that particular recommendation.
>
> **[2:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/use-azure-advisor-to-check-best-practice-compliance?u=76281980&t=143)** So that's how you can use Azure Advisor to find out if your virtual machines are adhering to Microsoft's recommendations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (1), in other words (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Examine the VM topology map
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=0)** - [Instructor] Microsoft provides a tool that allows you to see all of the various network resources that are connected to your virtual machine, and this information is displayed through a topology map.
>
> **[0:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=9)** So let's take a look at how this works.
>
> **[0:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=12)** Right now, I'm in the virtual machines console and I've got one virtual machine.
>
> **[0:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=16)** I'm going to go ahead and click on that virtual machine.
>
> **[0:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=19)** Next, I'm going to click on Networking, followed by Topology.
>
> **[0:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=26)** At this point, I see a message telling me to click on the message to navigate to the new topology experience.
>
> **[0:31](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=31)** So I'll do that now.
>
> **[0:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=35)** And then I'm taken into the topology experience.
>
> **[0:37](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=37)** Now, keep in mind, I'm working in a lab environment, so there really isn't a whole lot to see here, but let's go ahead and drill down into this and just see what this looks like.
>
> **[0:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=45)** I'm going to begin by clicking on the center of the topology map.
>
> **[0:51](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=51)** And when I do, I see various resources.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=53)** So I have a virtual network with 15 resources, and then over here, I have a list of the individual resources.
>
> **[0:59](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=59)** So I'm just going to click Expand next to one of these resources.
>
> **[1:04](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=64)** And you can see the chart update.
>
> **[1:06](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=66)** And right now this doesn't really look all that much different, but the object on the chart is labeled Default now.
>
> **[1:12](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=72)** And if I hover over it, I can see some information about the default subnet.
>
> **[1:16](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=76)** So let me go ahead and click on this.
>
> **[1:19](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=79)** And then, from there, I'm going to click on Expand.
>
> **[1:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=83)** And so now you see the chart expand to display all of the resources in this particular subnet.
>
> **[1:29](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=89)** And I could get additional information on any one of these resources simply by hovering over it.
>
> **[1:35](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=95)** And I could, of course, expand on any of these individual resources simply by clicking on Expand.
>
> **[1:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=101)** And then I get information on that resource and what it's connected to.
>
> **[1:45](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/examine-the-vm-topology-map?u=76281980&t=105)** So that's just a brief overview of how the topology map works in Microsoft Azure.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), navigate to (1)
> **Code Keywords:** let (3), this. (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Where to learn more
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=0)** - [Presenter] If you need a little bit of extra help learning about Azure Virtual Machines, then you might check out the Quickstart Center.
>
> **[0:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=5)** The Quickstart Center is a utility that's built into Microsoft Azure that provides basic information on how to use the various Azure services.
>
> **[0:13](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=13)** So let's go ahead and take a look.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=14)** What I'm going to do is type Quickstart into this search box, and you can see that one of the search suggestions is the Quickstart Center, I'll go ahead and click on that now.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=25)** So as you can see, when you open the Quickstart Center, you're greeted with a series of checklists that are designed to help get you started with Azure.
>
> **[0:33](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=33)** Now, these checklists aren't the only element of the Quickstart Center.
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=36)** If you're interested in learning about Azure Virtual Machines, then I would recommend going to Projects and Guides.
>
> **[0:43](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=43)** And then right here within projects and guides, we have a section on deploying a virtual machine.
>
> **[0:48](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=48)** So you can go here to learn a little bit more about the basics of Azure Virtual Machines.
>
> **[0:53](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=53)** Incidentally, there are a number of other projects and guides that are available in here as well.
>
> **[0:57](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=57)** You can learn how to do things such as, perform a migration, or set up a database, or deploy and run a container-based application.
>
> **[1:05](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=65)** There are also online courses that you can take through the Quickstart Center.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=69)** All you have to do is click on Take an online course, and then you're presented with various online courses.
>
> **[1:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=75)** These tend to be relatively short.
>
> **[1:17](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=77)** The longest one right now is only 52 minutes in length, but you can learn various fundamental concepts about the Azure Cloud.
>
> **[1:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=85)** So for example, we have Introduction to Azure Fundamentals, Introduction to Azure Solutions, Describe Core Azure Architectural Components, Explore Azure Compute Services, and Plan and Manage your Azure Costs.
>
> **[1:38](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more-22607314?u=76281980&t=98)** So these courses aren't directly related to Azure Virtual Machines, but they can give you some of the foundational knowledge that you're going to need in order to better interact with Azure Virtual Machines and the Azure Cloud as a whole.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), open the (1)
> **Analogies:** such as (1), for example (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### Delete a VM
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=0)** - [Instructor] When you finish using a virtual machine and that virtual machine is no longer needed, it's important to delete the virtual machine, because otherwise Microsoft will keep billing you for the resources that that virtual machine is consuming.
>
> **[0:11](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=11)** So let's take a look at how to delete a virtual machine.
>
> **[0:14](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=14)** To delete a virtual machine, all you have to do is select the checkbox associated with the virtual machine, then click on Delete.
>
> **[0:23](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=23)** At this point, you're going to see a popup asking you if you want to delete the virtual machine.
>
> **[0:28](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=28)** It's a good idea to go ahead and select the checkbox that says, "Apply force delete for selected virtual machines and virtual machine scale sets."
>
> **[0:36](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=36)** And then go ahead and enter a yes in the confirm delete box.
>
> **[0:41](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=41)** Now, before you click Delete, it's a good idea to look at the selected resources and just make sure that you really are deleting the virtual machine that you think you're about to delete, because sometimes it's easy to accidentally select the wrong virtual machine.
>
> **[0:54](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=54)** Once you're confident of your choice, click the Delete button, and the deletion process will begin.
>
> **[1:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=60)** And it takes a minute or two to delete the virtual machine in some cases.
>
> **[1:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=67)** And now the virtual machine has been deleted.
>
> **[1:09](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/delete-a-vm?u=76281980&t=69)** So that's how you delete a virtual machine in Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (12), let (1)
> **UI Navigation:** select the (3), checkbox (2), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Where to learn more
> [LinkedIn Learning](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980&t=0)** - Thank you for watching my course.
>
> **[0:02](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980&t=2)** I truly hope that you enjoyed learning about Azure virtual machines as much as I enjoyed creating this course for you.
>
> **[0:07](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980&t=7)** If you'd like to know more about Azure or about other Microsoft products, then I would encourage you to check out some of my other LinkedIn learning courses.
>
> **[0:15](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980&t=15)** I've created several other Windows courses, and I've also developed other courses on key topics such as cloud computing in Azure and AWS, and even Microsoft 365.
>
> **[0:25](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980&t=25)** I'm Brien Posey.
>
> **[0:26](https://www.linkedin.com/learning/manage-virtual-machines-in-azure/where-to-learn-more?u=76281980&t=26)** Thanks again for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - thank (1)


## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Azure Administration Essential Training]] | **2 of 8** | [[Microsoft Azure- Security Concepts]] →

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure

---

[↑ Back to top](#)