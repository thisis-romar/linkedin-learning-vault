---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: terraform-managing-network-infrastructure
url: "https://www.linkedin.com/learning/terraform-managing-network-infrastructure"
duration_minutes: 71
duration: 1h 11m
level: Intermediate
updated: 5/22/2023
learners: 24639
skills:
  - Terraform
  - Infrastructure as code (IaC)
exercise_files: true
github: "https://github.com/LinkedInLearning/terraform-managing-network-infrastructure-4373320"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFNSWOD_FUtrg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684432483878?e=2147483647&amp;v=beta&amp;t=OxVRq2kJ7lmhC_xFklVhGpTq_Pc-20bPvkmBoSgPFv0"
linkedin_topic: Database Management
learning_paths:
  - '[Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)'
prev_courses:
  - '[Hybrid Multicloud Networking- Practical Concepts](Hybrid%20Multicloud%20Networking-%20Practical%20Concepts.md)'
path_nav: '[{"path":"Network Automation Professional Certificate by Arista Networks","position":6,"total":6,"prev":"Hybrid Multicloud Networking- Practical Concepts","next":null}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - topic/network-and-system-administration
  - skill/terraform
  - skill/infrastructure-as-code-iac
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Terraform-%20Managing%20Network%20Infrastructure.md)

![Terraform: Managing Network Infrastructure](https://media.licdn.com/dms/image/v2/D560DAQFNSWOD_FUtrg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684432483878?e=2147483647&amp;v=beta&amp;t=OxVRq2kJ7lmhC_xFklVhGpTq_Pc-20bPvkmBoSgPFv0)

# Terraform: Managing Network Infrastructure

> Suggested prerequisites An AWS account and a GitHub account Terraform installed locally on your machine A code editor (this course uses Visual Studio Code) Git installed locally Terraform has become one of the most popular infrastructure-as-code tools in the world. For engineers and admins, learning to use Terraform in tandem with particular architectural disciplines, like cloud networking, is cri

> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure) | 1h 11m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Network management in the cloud](#network-management-in-the-cloud)
  - [What you need to know](#what-you-need-to-know)
- [**1. Terraform Basics**](#1-terraform-basics) (5 videos)
  - [Terraform's composition](#terraforms-composition)
  - [Understanding Terraform state](#understanding-terraform-state)
  - [Manual exploration leads to good Terraform code](#manual-exploration-leads-to-good-terraform-code)
  - [Terraform configuration language basics](#terraform-configuration-language-basics)
  - [Setting up your Terraform Repo](#setting-up-your-terraform-repo)
- [**2. Foundational Networking in AWS with Terraform**](#2-foundational-networking-in-aws-with-terraform) (5 videos)
  - [Creating a bare minimum VPC with Terraform](#creating-a-bare-minimum-vpc-with-terraform)
  - [Looping over subnets with Terraform count](#looping-over-subnets-with-terraform-count)
  - [Using Terraform to provision EC2 instances](#using-terraform-to-provision-ec2-instances)
  - [Building public subnets in AWS with Terraform](#building-public-subnets-in-aws-with-terraform)
  - [Building private subnets in AWS with Terraform](#building-private-subnets-in-aws-with-terraform)
- [**3. Advanced Networking in AWS with Terraform**](#3-advanced-networking-in-aws-with-terraform) (4 videos)
  - [Using Terraform to expand our infrastructure footprint](#using-terraform-to-expand-our-infrastructure-footprint)
  - [Routing traffic between VPCs using Terraform and VPC peering](#routing-traffic-between-vpcs-using-terraform-and-vpc-peering)
  - [Scaling the network with Terraform and Transit Gateway](#scaling-the-network-with-terraform-and-transit-gateway)
  - [Using segmentation with Transit Gateway and Terraform](#using-segmentation-with-transit-gateway-and-terraform)
- [**Conclusion**](#conclusion) (1 videos)
  - [What comes next?](#what-comes-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Network management in the cloud](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=0)** - Network management changes as you begin that transition to the cloud. [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) and tools like HashiCorp [Terraform](../../Skills/DevOps/Terraform.md), they take the place of CLIs and web interfaces. Cloud practitioners have been using Terraform for years, but network engineers, they've been a little slower to adopt it and risk losing control of networking in the cloud without a practical understanding. If you're a network engineer trying to make this transition, or even a cloud practitioner that wants to learn more about networking, this course is for you. My name is William Collins and if this seems a little bit daunting, do not fear. The hardest part is getting started. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (2), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1)
> **CLI Commands:** terraform (2), make (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - network (1)

#### [What you need to know](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=0)** - [Presenter] In this video, we're going to make sure the goal is aligned and that you have everything you need to get started with the course. You don't have to be good to start, you just have to start to be good. What are we trying to achieve? The primary goal is to arm network practitioners with the skills needed to operate networking and the cloud using industry standard automation practices and tools like HashiCorp [Terraform](../../Skills/DevOps/Terraform.md). Also, this course would be valuable to existing cloud practitioners who are already writing [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) but want to enhance their expertise around the best practices of networking. There are a few things we want to have installed and set up before we continue. All the links you see here will be included in the exercise files. So since we're going to be working with AWS in the course we're going to need an AWS account and also a [GitHub](../../Skills/Software%20Development/GitHub.md) account. You're also going to need some software installed locally on your machine, so of course we're going to need Terraform. And for this course, we're just going to be running Terraform by calling the open source binary on our machine. Next, you'll need a code editor. I like using VS code because it's free and it's pretty extensible. And last, you need [Git](../../Skills/Software%20Development/Git.md) running on your machine. Now that we have a clear vision of our goal for the course and we have the necessary accounts and software set up, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (3), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** terraform (3), aws (2), make (1), git (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Env Vars:** aws (2)
> **Tools:** github (1), vs code (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [presenter] (1)


### 1. Terraform Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Terraform's composition](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=0)** - [Instructor] Before you drive a car, you need to understand a few fundamental mechanics of its operation. How do you start the vehicle and how do you turn it off? Which pedal does the acceleration and which pedal does the braking? How about putting it in park or reverse? Without knowing these things, you can imagine how much trouble you could get yourself into. In this video, we're going to examine some of the basic mechanics of [Terraform](../../Skills/DevOps/Terraform.md). The road to success is always under construction. So what is Terraform? It's an open source tool used to build, modify, and [Version Control](../../Skills/Web%20Development/Version%20Control.md) infrastructure. Now, this infrastructure is defined using declarative human-readable configuration files, and Terraform interfaces with other platforms and services through [application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md). Terraform has two main components, the first of which is Terraform Core, and this operates as an entry point for using Terraform. And then you have providers, which are essentially a logical abstraction of an upstream API. Providers are developed using plug-ins, and these plug-ins are executed as a separate process and interact with the main Terraform binary using RPC, which is a method of building client server-based applications in distributed fashion. You can go and check out the source code
>
> **[1:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=96)** for both Terraform Core, and in this example, the AWS Terraform provider, at their respective [GitHub](../../Skills/Software%20Development/GitHub.md) repositories. Now, these providers are published on Terraform Registry, and I want to dig in a little bit with Terraform Registry here. So how is Terraform different? To really understand this, we need to examine how network infrastructure typically gets configured today, and that is in a mutable and imperative fashion, which means infrastructure gets deployed and then while it's already running, it gets configured and modified over its lifecycle. Think of it like this. I'm a network engineer and I deploy several virtual routers. Once they're up, I connect to them and bang away at that [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), getting things the way that I want it, or or maybe I even run a script or some tool that connects to them after the fact and modifies the configuration as needed. Now, Terraform, on the other hand, takes a different approach, a declarative approach. This means that all the configuration is defined prior to deployment, at build time, and that resource is delivered intact. In this video, we learned some of the basic mechanics of what makes Terraform tick. You should also have a basic understanding of what Terraform Core is and how it interacts with providers, and what makes Terraform different. If you have those boxes checked, then let's hop over to the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (16), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** terraform (16), aws (1)
> **Env Vars:** api (1), rpc (1), aws (1), cli (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), think of it like (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Terraform state](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=0)** - [Instructor] When you think through all the infrastructure required to run a global application in the cloud, it might make your head spin. It is far too much to commit in your own memory. Not only that, but what about the relationships that exist between all of these resources? Lucky for us, [Terraform](../../Skills/DevOps/Terraform.md) does a swell job at handling this so we don't have to. "Once the business data has been centralized and integrated, the value of the database is greater than the sum of the preexisting parts." When you provision infrastructure with Terraform, it keeps track of all the changes you make in a [JSON](../../Skills/Web%20Development/JSON.md) file. By default, this will get saved in your working directory as terraform.tfstate. This state file is very important. Every time you run Terraform, it gets used to compare desired and operational state, and then adjusts things accordingly. So where should you store Terraform state files? For most of this course, we aren't really going to think too much about this. They're going to live in the directory we are running Terraform from on our local machine. This is great for learning and testing, but definitely not production. As things get more serious in the real world and testing and [Prototyping](../../Skills/Software%20Development/Prototyping.md) becomes production,
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=95)** you need to store state files remotely. Shared storage like Amazon S3 or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) storage accounts are great for this. And lastly, you may not want to think about managing state at all. You can use a variety of [products](../../Skills/Software%20Development/Microsoft%20Products.md) out there like Terraform Cloud, which can be used as a service to store and manage state files at scale. How might we organize state files? This becomes very important as you begin to scale. State files are like failure domains in network engineering. Thinking through these failure domains is important in ensuring reliability of individual functions. To limit blast radius, you can use additional state files as you plan and build your infrastructure. The goal here is, if a misconfiguration does happen to one category of a resource, it shouldn't impact others. Like, if a bad change gets made on the compute side, we don't want it affecting the state of the network. HashiCorp provides direction on best practices here, and recommends one state file for each environment of a given infrastructure component. So, we know that we want to limit blast radius, and we have HashiCorp's recommended pattern for organizing state files. So, how does that look for the network? So say your organization
>
> **[3:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=188)** is building out a new product. That product is probably going to have a few different application environments. For this example, let's say Dev, UAT, and PROD. Keeping in mind HashiCorp's recommended patterns, we should consider the following. As an example, for Dev here, it would get a separate state file for a network, a separate state file for compute, and a separate state file for database. This may seem like a lot, but it makes perfect sense. If I make changes to the network in Dev and I mess something up, then of course I don't want that mistake propagated to higher environments, especially PROD, nor do I want it impacting compute or database infrastructure components. Understanding how Terraform state works is critical to its operation. Not only that, but it goes hand in hand with building a scalable and reliable infrastructure for your applications to run on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** terraform (8), make (3)
> **Env Vars:** prod (2), json (1), uat (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Manual exploration leads to good Terraform code](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=0)** - [Instructor] Jumping straight into automation with no thought or planning is a quick road to frustration. The areas I'm going to cover in this particular video are exercises that I still do today even after using [Terraform](../../Skills/DevOps/Terraform.md) for many, many years. What we're going to do is we're going to explore, we're going to create a few resources manually, and learn the ins and outs of how they work. And then we're going to explore those same resources on the provider's documentation, so we can understand how things are interconnected. And that's going to help us in the future as we start building some workflows. Let's get going. Let's go ahead and create a VPC now. So one thing you'll notice as you start going through the provider documentation, is some attributes are required and some attributes are optional, and this is important to take note of. So let's just say that I try and create this VPC without putting in any values. Nope, it fired back at me. It requires a CIDR block. So let's give this one a quick name and a CIDR block and create VPC. We did it. We have ourselves a VPC. Now I wonder what would happen if I created another VPC with the same name and the same CIDR range? Would it let us? Let's find out.
>
> **[1:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=100)** Create VPC. It did. It did let us. Now, if you are a network engineer, you may have some alarms going off right now. Usually in our world, this is not a good thing. So what if we wanted to create a new subnet resource? How would we know which VPC to reference for that new subnet, since they have the same name? So in Cloud, whenever a resource is created it returns a completely unique ID. So let's build a subnet and tie it to the VPC with the ID suffixed with 4641 here.
>
> **[2:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=145)** 4641. Let's give it a name. So just like we did with the VPC, a CIDR range is required for subnets of course, as well. So this CIDR range must come from the overarching CIDR range that we used for the VPC. So let's carve out a slash 24.
>
> **[2:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=174)** We've got ourselves a subnet and it's attached to the VPC that we wanted to attach it to. Great. So now as we explore the provider documentation, we can begin using what we learned in AWS Console to pick out important things that we can use when we build our [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). Like VPC, we got to give it a CIDR range just like we did in the console. And if we wanted to create a subnet and attach it to that particular VPC, we have to supply it with that VPC ID. And we know that this is a required attribute. We have to provide it. One useful thing you can do when you're checking out a provider's page and trying to learn more is just doing a search for required attributes. And we can see that the first thing that comes up is that VPC ID. That's an important one here. So what are our takeaways from this video? Explore the infrastructure you plan to automate. Going through the UI and doing it manually is a great way to learn how a resource behaves for when you do automate it. Next, we took a look at resource associations. We created two VPCs with the same name, but knew which one to use for our subnet because each of those VPCs has a unique ID associated with it.
>
> **[4:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=267)** And last, we now know to identify key arguments and have a good understanding of which arguments are required and which are optional. And we can find this on the provider documentation page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (1), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1)
> **Env Vars:** vpc (15), cidr (7), aws (1)
> **CLI Commands:** find (2), terraform (1), aws (1)
> **Definitions:** is a  (3)
> **Analogies:** just like (2)
> **Tools:** aws console (1)
> **Speakers:** - [instructor] (1)

#### [Terraform configuration language basics](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=0)** - [Instructor] Before we get to writing [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), I want to go over a few things about the configuration language used to drive [Terraform](../../Skills/DevOps/Terraform.md). This can be a deep topic, so I've selected some core areas that will give us a grounded baseline to build on through the duration of the course. "Whatever good things we build end up building us." Terraform's configuration language is based on a general language called HCL or HashiCorp Configuration Language, and this was created with the goal of being both human and machine friendly. HCL intends to be a structured configuration language, which means it gets decoded using an application defined schema. The Terraform language is built around two syntax constructs. The first of which is arguments, which simply assign of value to a name, and blocks, which operate as containers for other content. Let's dig into the different block types. The first of which is the Terraform block. The best way to think about this block is new versions of Terraform are going to be released pretty rapidly, and the providers on Terraform Registry are going to have new releases at different cadences as well. So as the end user, you will want to pin specific versions and do proper testing before upgrading to new versions, especially when dealing with production. Terraform handles this with the Terraform block. You can see in this example the versions pinned
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=95)** for both Terraform and the required providers. Next on the list is the variable or input variable to be more precise. You can think of Terraform input variables just like variables in other general purpose programming languages. You set the variable block and then you can pass in different values based on different scenarios. Next up, we have to define a provider block and set up authentication to the providers we wish to interact with. In this course, I'm using [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md) credentials which are easy and good for basic testing, but in production scenarios, you would use identity and access management roles. Now let's take a look at locals. So locals are like variables, but just exclusive to your configuration, meaning you can't provide user input as part of your workflow to a local variable. Locals are really good for filtering or transforming values that come in through regular input variables. Next is the bread and butter of Terraform, and that is resource blocks. This is how we build our actual infrastructure. Just like in the previous video where we created that VPC manually, this would be that same configuration built out via Terraform. So what happens if you need details like IDs, CIDR ranges, or other attributes from a resource that doesn't exist in your Terraform state file?
>
> **[3:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=189)** This is where data sources come in. So with this data source here, we can provide the ID, and then we can get all the data outputs possible from this VPC that exists outside of our Terraform state. And then we can use these details in other resources like this subnet. Last on the list are outputs. When you define an output, you return something specific about the infrastructure that you've built, like a VPC ID, a CIDR range, or maybe a DNS record, and really any other attribute available from a given resource. Now for some tips on organizing. Keeping your version constraints in a separate file can be very helpful. Also, keeping your input variables separate in your configuration is really a common practice these days. I generally like to keep my provider configuration in a separate file as well, and this leaves us with the ability to keep the primary logic of our project located in a main.tf file. Now, we could just store everything in one giant monolithic file, but this really hurts readability. Last, it's a good idea to keep your outputs in a separate file as well. In this video, we learned about Terraform's configuration language, we dug in on some of the common Terraform block types, what they're used for, and some tips for keeping things organized in our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (16), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1), [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md) (1)
> **CLI Commands:** terraform (16), aws (1)
> **Env Vars:** vpc (3), hcl (2), cidr (2), aws (1), dns (1)
> **Analogies:** just like (2)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your Terraform Repo](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=0)** - [Instructor] In this video, we're going to make sure you have the code repository cloned and that you know how to work with the exercise files. On the course page, you'll see a little blue box that says Get Files. When you click on this box, it'll take you to the [Git](../../Skills/Software%20Development/Git.md) repository that holds the code. Now, we're going to go ahead and fork this repo. And this basically means we're just going to make a copy of it with you as the owner, and this disconnects it from the codebase and the previous maintainers. And for the owner, you're just going to reference your [GitHub](../../Skills/Software%20Development/GitHub.md) account. And then you're going to want to uncheck copy the main branch only because we want to get all the branches in the course. So click on Create Fork, and this will fork that repository into your account. Now, the main branch is where this journey begins. So this is the starting code for the course. So you're going to see that we have a versions file, a variables file, a provider file, and that's about it. But each branch, as you move along through the course, is going to add a little more. So if you look at the... Let's expand branches here. If you look at the branches here, the first part of that name is going to be the chapter, and the second part is going to be the video number. So say that I'm on the video,
>
> **[1:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=94)** let's say chapter two in the course and video number four, so 02_04, and I want to see the code that corresponds with it. I can just click that. It'll bring me right here. And okay, I see a lot more files here. We've made a lot more progress. So in addition to the files, we also have documentation, specific links, and different commands that I use throughout the video. So you may be asking, how do I run or edit this code? So let's go ahead and clone the repository. We can simply copy the link for the fork, switch over to VS Code, and clone it. So I'll just paste the link here, use the default location, open, and, yes, I do trust myself. So we've cloned the repository. Now, this is going to land us in the main branch. So say that I'm, again, let's go back to that chapter two, video four. So say that I want to switch to chapter two, video four. Get checkout 02_04. So I'll see I have a lot more files here to work with. So this'll take me to the final code that I run in that particular video.
>
> **[3:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=190)** Now, remember, you have to authenticate to the AWS provider. You need an AWS account. And I'm using security credentials here. So there are a few ways to provide these values, and I'll add these options to the course notes. And last thing, before we move on, for each video we run, just to show the power of [Terraform](../../Skills/DevOps/Terraform.md) and how it can handle the provisioning and destroying of infrastructure, I'll be building the infrastructure new for each video and tearing it down at the end of each video. This is a really good habit to get into, especially when you're experimenting and learning, because it can save you money later on down the road. Now, to save time, I won't be running the destroy command as part of the video, but I'll have the commands available in the notes for you to run. Now that we have our repository set up and we know how to interact with the exercise files and branches, it is time to move on to the first real coding exercise. So switch your branches over to 02_01, and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Terraform](../../Skills/DevOps/Terraform.md) (1)
> **CLI Commands:** make (2), aws (2), git (1), terraform (1)
> **UI Navigation:** click on (2), switch to (1)
> **Env Vars:** aws (2)
> **Tools:** github (1), vs code (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** basically means (1), is a  (1)
> **Prerequisites:** make sure you have (1), set up (1)


### 2. Foundational Networking in AWS with Terraform

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a bare minimum VPC with Terraform](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=0)** - [Instructor] We made it through the basics, and now it's time to get hands-on. In this lesson, we're going to go ahead and provision a basic VPC and subnet, and use some of that knowledge we gathered from the first section to optimize that configuration. Okay, so what I want to do here is I want to build the infrastructure that we built by hand in that manual exploration video. So first we're just going to do a [Terraform](../../Skills/DevOps/Terraform.md) init, which is going to go out and find, download, and install the AWS provider that we marked as required. And now I want to run a Terraform plan. And this is just going to create an execution plan for us. And that way we can look at it, and just make sure that the changes that are happening are the ones that we want to happen. So you could, on your own plan, go through and review all the different details here. And now we want to apply this infrastructure. (keyboard clacking) And while that's running, it shouldn't take more than a second, I'm just going to switch over to the AWS console. We can see our infrastructure, yep, popped right up. Okay, so we could stop here, or we could maybe optimize this a little bit. And when I say optimize, see these statically coded values in our file here? Let's go ahead and take some input variables and make 'em a little, you know, more modular. So let's go to our variables file.
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=95)** And I pre-staged these ahead of time, so I'm just going to go ahead and uncomment them. And basically, I've defined a VPC name, VPC CIDR, subnet name, and subnet CIDR for those four values. And what this is going to do is it's going to say, hey, this Terraform configuration expects me to pass these values in now. So usually this would be in some sort of workflow, a pipeline of some sort, or some other logic that's going to insert these values in and run Terraform. But for the sake of just doing this by testing an example, I created this tfvars file with these same values here. So let's save that now that those are uncommented. And now we just need to go to our main file, and actually replace these. (keyboard clacking) VPC CIDR, VPC name, subnet CIDR, and subnet name, let's save that, done. Now, what do you think would happen if I tried to do another Terraform plan? Let's see. Well, it's going to tell me nothing's changed. And the reason for that is nothing, as far as my intent is concerned, has changed.
>
> **[3:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=190)** I've updated the way that I'm, you know, taking these values and providing them, but my operational infrastructure, what's running out there, has not changed. I haven't changed anything as far as Terraform's concerned. So why don't we change something, and update something in place. So let's go to our terraform.tfvars file, and let's change the subnet name. So let's just call it app-subnet. (keyboard clacking) Let's save that, and then we can do a Terraform plan again. Aha, so we got some changes now. So it recognizes that something with the way that I'm declaring my infrastructure has changed. We've updated some value. So it's going to reconcile this declarative state that I've defined, and operationally what I have running in AWS right now. And it's going to tell me, it's going to do a diff and show me that, hey, subnet-01 is changed to app-subnet. Do you want to roll out the changes? And yes, we do. (keyboard clacking) So let's go ahead and apply these. Now it can come over here and go to subnet, oh, already changed. App-subnet is our new desired intent with the subnet name. In this video, we built some network infrastructure.
>
> **[4:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=285)** We provisioned a bare minimum VPC in a single subnet. We then optimized our code by removing some of those hard-coded values. And we used input variables in a tfvars file to populate them in a more dynamic fashion. And last, we changed a few values, and got to see how Terraform updates resources in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (9)
> **CLI Commands:** terraform (9), aws (3), make (2), find (1)
> **Env Vars:** vpc (6), cidr (4), aws (3)
> **UI Navigation:** go to (4)
> **Tools:** aws console (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Looping over subnets with Terraform count](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=0)** - [Instructor] Every design out there is probably going to have more than one subnet. Now I could just duplicate this block here, but instead of adding more unnecessary lines to our configuration files, in this video what we're going to look at is one of [Terraform](../../Skills/DevOps/Terraform.md)'s meta-arguments called count and also a handy function in Terraform called cidrsubnet. So let's start out with the flow of information in. I have these two subnet variables here and I'm going to go ahead and rename this one to subnets and I'm going to change the type to a list of strings. And what this is going to do is Terraform is going to expect a list of strings for subnets and we're just going to provide it basically a list of names. So I'm going to go ahead and remove this other variable here. Save this. Now I'm going to hop over to the terraform.tfvars file and I'm just going to remove both of these and create a subnets value. So this is going to be the list. So let's keep it simple. Subnet for public and a subnet for private. Save this. Now we can move on to the logic into the main.tf file. So let's reference count here. And we're also going to reference a handy collection function called lengths. And this is great 'cause it'll tell us
>
> **[1:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=93)** how many values that we're passing in. So however many name values we have coming in, it's going to count 'em. And with this we can come down to the names tag and say, okay, var.subnets count.index and it'll iterate over these for us. So now onto the cidr_block. So this cidrsubnet function, it's going to take three things that we need to give it. So the first is a prefix that we want to carve out. And what we're going to do is we're going to reference the cidr_block that we assigned to the vpc. So [aws_vpc.dev](https://aws_vpc.dev).cidr_block. So that's the first thing. And next it's going to ask for what the function refers to as new bits, which just is an extension of the prefix. So basically for the AWS VPC, we're using a .0/20. And for our subnets, let's say that we want /24s. It's really common. So then we can just calculate the diff, which is four. And then last, we need a net sum for the additional bits added to the prefix. So for this, I'm just going to go ahead and do count.index and then add one per iteration. Let's save this. Now let's hop over to outputs. Now since we're going from a single value, single ID,
>
> **[3:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=189)** to multiple values, and we don't know how many values that we're going to get, 'cause we're going to add subnets progressively. So let's go ahead and add a asterisk here so we can iterate over each of these. Let's save this. And now we can go ahead and run this Terraform. Do our init. Pull everything down. And now we can do our plan. And actually let's just grep cidr_block with the plan as well. So now we can see the cidr_blocks that it gave each of these subnets. It's doing what we wanted it to do. So 10.5.1 0/24, and then 2.0/24. So now we can go ahead and apply this. And I'm going to go ahead and hop over to AWS Console. We can do a refresh. There's our subnets. So now that we have some subnets to work with, let's do something with them. In the next video, let's create some resources for testing things out, which will come in handy for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the videos in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** terraform (5), aws (2), grep (1)
> **Code Identifiers:** cidr_block (4), aws_vpc (1), cidr_blocks (1)
> **Env Vars:** aws (2), vpc (1)
> **Definitions:** is a  (1), refers to (1), is an  (1)
> **Versions:** 10.5.1 (1), 2.0 (1)
> **URLs:** [aws_vpc.dev](https://aws_vpc.dev) (1)
> **Cross-References:** in the next (1)

#### [Using Terraform to provision EC2 instances](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=0)** - [Instructor] As we start tweaking the network in later videos we're going to need a way to do reachability testing. In this video, we're going to spin up two [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances with [Terraform](../../Skills/DevOps/Terraform.md), and the first step is generating some SSH keys. I'm going to create a folder called Keys in my current working directory and generate the keys there. There we go. Now we're going to look at the flow of information coming in. So you're going to notice that we have some new input variables. The first one is going to be for our instance names. It's going to be a list of strings, similar to how we did subnets in the previous video. And then we have instance type AMI, ID and public key. Now let's look at the corresponding values. So for the instance type, we're going to use T3 Nano. This is a great instance type for free tier usage. You're going to get a lot of hours out of it. And then we have the AMI ID for canonicals of [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). And then for the instance names I followed the theme that we did for subnets, EC2 public, EC2 private. And this is going to serve us well later on 'cause we're going to look at some scenarios around public subnets and private subnets. And then for public key we just have the path to that ec2.pub. Now for the actual instance configuration, I created a separate file called ec2.tf. This just keeps things cleaner and easier to read.
>
> **[1:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=96)** And at the top here we're going to be generating a random ID to use in the AWS key pair. And we're also providing the variable holding the path to our public key. And for the instance configuration, I'm going to use count in the same way that we did for the subnets in the last video. And for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of these values I'm simply populating the AMI and instance type variables. And then I'm referencing the key name from the resource above. This means that when the instances get instantiated, they're going to get the public key I generated earlier. So let's go ahead and run this. Let's do a terraform init, pull everything down, now Terraform plan, get our execution plan and then we will apply it. Now while that's applying, I'm going to hop over to outputs and I went ahead and set up a new output for public IPs. That way if we don't want to login to the console and find those EC2 instances and grab their public IPs we can just grab it directly from the command line here. There we go. Now let's try and SSH into one of these VMs.
>
> **[3:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=191)** So I'm just basically saying with the -i flag I'm going to reference the private key that we generated, and then Ubuntu, the default username is always going to be Ubuntu here for the canonical Ubuntu AMI. So I'm going to go ahead and put in my public IP here and try to connect. Uh-oh, it looks like we can't log in. I'm not able to connect. Some of you watching may be hollering at me right now because you know why. For those that don't, hop over to the next lesson and we're going to get this sorted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (4), [Terraform](../../Skills/DevOps/Terraform.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** ec2 (4), ami (4), ssh (2), aws (1)
> **CLI Commands:** terraform (3), ssh (2), aws (1), find (1)
> **Cross-References:** previous video (1), in the last (1)
> **Definitions:** is a  (1), means that (1)
> **Tools:** command line (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### [Building public subnets in AWS with Terraform](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=0)** - [Instructor] In the last video, we deployed a few [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances and then tried to connect to the first one called EC2 Public with no success. In this video, we're going to take a look at the concept of public subnets in AWS and make a few adjustments to our [Terraform](../../Skills/DevOps/Terraform.md) so that we can reach our EC2 instance. Now in AWS, a subnet that has a direct route to an internet gateway is known as a public subnet. Let's refer to internet gateway as IGW for short. So not only do we get internet egress with an IGW, but resources on the outside are able to initiate connections back to resources on the inside. So in short, we need this IGW in our little scenario to allow my home machine the ability to initiate connections to our public instance. So for this configuration, I set up a new public subnet TF file here in which we have three different resources. We have our IGW, our AWS route table with our quad zero and then the target is that internet gateway id. And then we have a route table association. Now, since we created our instances with the count meta argument, and this means each instance is identified by an index number, starting with zero. Since our first instance was the EC2 public
>
> **[1:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=94)** that's the one we want to reference. So we do that here after the resource name here with that zero in square brackets. And in our instance file here, we have a security group. And again, we have an attachment. So just like we had to attach that route table to the subnet security groups are in scope at an instance level. So this gets attached to our instance directly. And just to add some measure of security, I went ahead and created this public IP variable and this means that only traffic originating from my public IP is going to be allowed to talk to this instance just so the whole world doesn't get to see my public IP on screen here. Instead of putting the public IP with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of our values here in terraform.tfvars I went ahead and already ran it as an environment variable and I will put the command syntax to do that in the readme with the branch corresponding to this video. So let's go ahead and run our terraform here.
>
> **[2:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=177)** Terraform init. Let's make our execution plan, terraform apply.
>
> **[3:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=194)** Considering everything that's actually happening on the backend here. It's pretty amazing how fast all this runs just considering the scope of everything. There we go, we're already done. You know, that's pretty quick. So let's try to connect to our instance now. Swap out the public IP from my cache.
>
> **[3:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=225)** Wow, I literally just finished running that terraform and we're already able to SSH to this instance. Like really, if you think about it instantaneously, you know, that's pretty outstanding. So great. We're able to connect to the instance in that public subnet. And for many use cases, this is prevalent, but a lot of times it is not desirable to allow internet egress and ingress directly from the instance. Many times you need to access the internet but you don't want things initiating connections from the outside back in. This is where private subnets come in. In the next video, we're going to explore private subnet design with our second instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (6), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** terraform (6), aws (3), make (2), ssh (1)
> **Env Vars:** ec2 (4), igw (4), aws (3), ssh (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** known as (1), means that (1)
> **Documentation:** the readme (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)

#### [Building private subnets in AWS with Terraform](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=0)** - [Instructor] We now have an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance in a public subnet that has the ability to egress to the internet but also allows incoming connections from the internet. With our second instance, we're going to take a different approach by running it in a private subnet where it can egress to the internet only. To do this, we're going to provision a NAT gateway, or NGW for short, to facilitate connectivity to the internet for instances in a private subnet. I already applied the [Terraform](../../Skills/DevOps/Terraform.md) configuration, but before we do a little testing, let's go over some of the changes. So for this configuration, I created a separate file, private_subnettf, and we're going to notice a few new resources in here. The first of which is we need an elastic IP address, or EIP. And this gets attached to the NGW. This is just essentially a static public IP address. And in the real world, this is something you really want to stay static. And then we have our NAT gateway. So the first thing you'll notice is instead of referencing our VPC ID, this is getting attached at the subnet level, and then we're going to also reference this EIP above. And then you'll notice a new meta argument, depends_on. Now, this is going to essentially complete all the actions on the dependency object before performing actions
>
> **[1:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=98)** on the object declaring the dependency. So this has been inserted here per the provider documentation. Now I'm going to hop over to our security group. And just a small change here, so instead of just having this attached to our public subnet, I have it attached to the public and private subnet. So let's hop on over to our command line. So here's our outputs right here. Now, the first thing we want to do is we want to check reachability from the public internet. And what I'm going to do here is I'm going to use a tool called [Nmap](../../Glossary/Tool/Nmap.md). (keyboard clicks) So that's basically just going to say, "Hey, are you listening on this port over the public internet?" And we can see, as expected, the instance in the public subnet is. Now let's try the private subnet. (keyboard clicks) And as you can see, this is actually why, even though I didn't have an expectation that we were going to try to connect from the internet to an instance in a private subnet, I attached the public IP, you know, just so we could test and we could demonstrate this. And we can see it's not reachable. So let's go ahead and connect to the instance in the public subnet. (keyboard clicks) And here we are.
>
> **[3:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=194)** And since the private subnet instance is not reachable over the public internet, I'm going to connect to it from this instance. But first, let's just make sure we can reach it. (keyboard clicks) So we are able to ping it. Now, the first thing I'm going to need to do before I can try and reach out to it is this private key that I'm using from my workstation, I'm going to need to put that on the first instance.
>
> **[3:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=232)** So to do that, I'm just going to create a file called ec2. (keyboard clicks) Copy that in there. And then I need to set some permissions. All right, now we should be able to reach that instance over its private IP over SSH. (keyboard clicks)
>
> **[4:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=262)** There we are. We made it. Now let's just make sure that we can reach the internet. (keyboard clicks) I can reach [linkedin.com](https://linkedin.com), and we're all good. In this video, we set up a private subnet and used a NAT gateway to facilitate internet egress from our private EC2 instance. Now, in this whole chapter, we've barely hit the tip of the iceberg. And you may have noticed my security groups are pretty much wide open. And also, how do we do things like route between VPCs? So in the next chapter, we're going to turn things up a notch and explore additional configuration and use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Terraform](../../Skills/DevOps/Terraform.md) (1), [Nmap](../../Glossary/Tool/Nmap.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** nat (3), ec2 (2), ngw (2), eip (2), vpc (1)
> **CLI Commands:** make (2), terraform (1), ssh (1)
> **Code Identifiers:** private_subnettf (1), depends_on (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)


### 3. Advanced Networking in AWS with Terraform

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Terraform to expand our infrastructure footprint](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=0)** - To begin chapter three we're going to provision an additional VPC, subnet and instance with [Terraform](../../Skills/DevOps/Terraform.md). This is going to set us up for the next few videos where we're going to look at some common options for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) between VPCs. In this video also I wanted to incorporate some different string functions. These can come in handy and help solve a variety of different problems. And I'll have the links to each one of these in the video notes. I also wanted to throw in a curve ball to keep you on your toes. So I copied all of our existing Terraform configuration into a folder called VPC-A and for the new VPC we're going to create I put the configuration into a folder called VPC-B. Now, when you run Terraform in each of these respective directories it's going to generate two separate state files. I'm doing this for a good reason that we will find out about in the next video. So, if you remember back to our original configuration we defined our input variables, all of them. And then for the values we use Terraform.tfr for everything. For VPC-B, we're going to do things a little bit different. So, one scenario you will run into a lot in the real world is not having all the exact details you need
>
> **[1:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=94)** coming in as inputs. So, you'll have to get creative with what you do have and then filter or transform them via local variables. So, say for instance that we only have this VPC cidr to work with, so let's check out what we can do with that. So I'm going to switch over to a new file that I created called locals.tf. And first thing you're going to see here is a new resource called random string. This is a really useful resource because you can define all the criteria that you want that string to have. So, how long do you want it to be? Do you want lowercase? Do you want numeric? Do you want uppercase? Nope, we don't want uppercase. Do you want special characters? Negative. Turns out those do not bode well for naming conventions. And then we can work our way down and we can see these string functions in action. So with trim suffix here, line 16, I can see that okay, I'm stripping that /20 off the end of that cidr. Turns out slashes are not good for naming conventions either. And then I'm going to replace the period with hyphens. And then I'm going to do some formatting. So, I'm going to prefix this naming convention with VPC test. And then I'm going to add that last string here, the replace period onto that.
>
> **[3:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=188)** So I'm going to format that as my final name for VPC name. And then I'm going to go down to the subnet values and I'm going to use format again. But instead of having that string that I've manipulated I'm going to use the random string on the end of that. So I'm going to reference that random string.test and then the result. And then for the cidr I'm just going to use that cidr subnet magic. And then as we go down also, you'll see this a lot with a lot of Terraform written out there today. This is another way that you can format strings as well. So now that I have all these defined here we can kind of jump over and with all the other Terraform that I've written here I'm just referencing those local variables. So local.[ec2](../../Skills/DevOps/Amazon%20EC2.md) instance name, local. dot key pair name up here, local.security group name. So all these are referenced a little more cleanly here. So I'm going to go ahead and run this, generate our execution plan, and then run our apply.
>
> **[4:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=257)** And while it's running, consider the following. These two VPCs exist in the same AWS account. However, they have no reach ability. So how do we go about setting up routing between them? And that is exactly what we're going to look at in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** vpc (8), aws (1)
> **CLI Commands:** terraform (6), find (1), aws (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - to (1)

#### [Routing traffic between VPCs using Terraform and VPC peering](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=0)** - [Instructor] We have a few VPCs now, and we want to route traffic between them. The first option we're going to look at is VPC peering, which is simply a connection between two VPCs. Now, in the real world, you often have to interface with resources in other state files. We know we can reference existing infrastructure by using individual data sources, but sometimes that can be a bit tedious. One really cool data source in [Terraform](../../Skills/DevOps/Terraform.md) that I personally think is underused and underappreciated is the remote_state data source. This allows me to reference resources in other state files and return their IDs, names, CIDR blocks, or whatever else that I can think of. And we're going to use this in our VPCA configuration to reference the state file in our VPCB configuration. Let's take a look. Now this may seem like overkill for this small use case, but as you scale over time features like this become golden because it reduces the amount of touchpoints in your configuration, and as you scale. Now for the VPC peering configuration I'm simply providing the account number right here that the VPC I want to connect with exists in,
>
> **[1:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=94)** along with the ID of the VPC. And instead of having to look up that VPC ID, I'm referencing the Terraform remote_state data source output for the VPC ID. Then I need to provide some details about the VPC I'm peering from. So I'm just going to reference the ID since it was created in this configuration. And since both of these VPCs exist in the same account, I can go ahead and auto-accept the peering. I already went ahead and ran the terraform, and this new VPC peering connection already exists. So if I come over here into AWS Console, I already have it pulled up. We have the peering connection up, so let's test it. I'm logged in. So remember, each of these VPCs has instances that have been provisioned. So on the left down here, this is the instance in VPCA 10.5. And on the right is the instance from VPCB 10.6. So let's try and ping back and forth. (keyboard clacking) Okay, so I can't ping from VPCA to VPCB. Let's try reverse. (keyboard clacking) Likewise, I can't ping from VPCB to VPCA. Houston, we have a problem. (laughs) Why don't we have reachability?
>
> **[3:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=189)** And you may have already picked out the issue. So not only do we need the VPC peering connection, but we also need a route. Just like we did in the last chapter, we're going to do the following. And I actually have it commented out here so we can rerun the Terraform. So let's remove the commenting. So we need to define our source route table that we want to route from. Right here. Then we have to define our destination CIDR block, which we're going to use that data source again and just grab the output. And then what essentially amounts to our next top, right here. Like, "Okay, what is going to get us to our destination?" And this is, in this case, it is the peering connection we just created. So I have this all uncommented, and then I have an output for the peering connection ID. Let's uncomment that. And then, likewise, we're going to go to VPCB. Let's go ahead and save these first, and then VPCB. And we're going to do the same thing. Except the peering connection only has to be configured from one side. But on both sides I do have to configure a route so the traffic knows how to get back. So here with the VPC connection ID
>
> **[4:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=282)** I'm referencing that data source. So basically the state file from VPCA, and I'm grabbing that peering connection ID. So let's go ahead and save these. And then I'm going to go ahead and run Terraform in a different window so we can see when these pings start picking up again. So VPCA, let's do another plan
>
> **[5:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=312)** (keyboard clacking) and then apply. and then we'll do the same for VPCB. Plan, (keyboard clacking) apply. There we go. Our pings were successful, we have [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). And one last thing that I want to point out is remember with our security group for these [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, when we initially set up this security group for ingress we were only allowing access from my public IP address, and then in your case, your public IP address. And that was set as an environment variable. So what I went ahead and did is in the locals here, just so I don't have to show my public IP address on screen here, I used concat, a string function with Terraform, to take my public IP and then combine it with our private address ranges there. So I did this for each one of these VPCs, because if you don't add that private IP address here then you won't have access. VPC peering is great for simple use cases and a limited number of VPCs. One challenge with VPC peering is scale. It doesn't support transitive routing. For example, say I have three VPCs, A, B, and C.
>
> **[6:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=409)** I can't route from VPC A to VPC C through VPC B in the middle. So in the next video we're going to kick things up a notch by looking at how we can use transit gateway to support VPC management at scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** vpc (16), vpcb (7), vpca (6), cidr (2), aws (1)
> **CLI Commands:** terraform (6), aws (1)
> **Code Identifiers:** remote_state (2)
> **Versions:** 10.5 (1), 10.6 (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** configure (1), set up (1)

#### [Scaling the network with Terraform and Transit Gateway](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=0)** - [Instructor] Transit gateway, or TGW for short, enables you to interconnect VPCs and on-premises networks using attachments. When it comes to scale, especially for the enterprise, transit gateway really shines. I removed our configuration for VPC peering, and in this video, we're going to connect our VPCs with transit gateway using [Terraform](../../Skills/DevOps/Terraform.md). And with our configuration, we're going to run with some of the defaults and propagate routes to the route table of the TGW. This will let all of our VPCs talk in a full [Mesh](../../Skills/Software%20Development/Mesh.md) type of scenario, and we're going to look at two different resources in particular. First, we need to create the transit gateway itself, and then we're going to use a VPC attachment to connect both of our VPCs to the transit gateway. The TGW configuration is pretty simple here. Since we're rolling with the defaults, I'm just providing a description and a tag for the name. For the VPC attachment, though, we have a few more things in motion. So first of all, we need to provide that VPC ID, like we do with most of the other resources we've created. Next, it's asking for a list of subnet IDs. Now, why do we need these? So VPC attachments must have at least one subnet associated with them.
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=95)** The reason this is asking for a list is if you have subnets created in multiple availability zones, you would want to provide one of those subnets from each availability zone. And last, we're just going to reference that ID that's generated once the TGW's created. And what about [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md)? So let's hop over to our public subnet configuration file, and for this configuration, I want to be able to reach my RFC 19.18.10. range, and I'm using the TGW ID to get there, and then I have this Quad Zero still installed for the internet egress and ingress as well. And if I hop over to the private subnet, we're kind of doing the same thing here. It's just we're swapping out the IGW ID for the NAT gateway ID. So in order for our VPCs to talk, I need to attach VPC B also. So I'm going to hop over to the main file for VPC B, and again, since these are separate folders and separate state files, I'm referencing the state file in our other VPC A directory so I can return the ID of the TGW, and if I hop over, I can see in the outputs, let's hop over to VP CA again and look at the outputs. See, I have this TGW ID output here,
>
> **[3:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=191)** so we're going to need that. So hopping back over. Since we already created the transit gateway, all we need to do in this scenario, we just need to attach it. So this configuration is relatively similar to our VPC A configuration. So I already ran Terraform right before the course started, since the transit gateway, it's one of those resources, it takes a few minutes to stand up. It's a little slower than some of the other things we've been working with. So let's do a quick test. I'm logged into an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance in VPC A and VPC B. So let's just ping and make sure that we have reachability. So VPC A can reach VPC B, and VPC B can reach VPC A. Success. So what if we don't like the idea of all VPCs being able to talk in this full mesh scenario? In the next video, we're going to take a look at disabling propagation and using TGW route tables and route table associations to bring some control to our routing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (2), [Mesh](../../Skills/Software%20Development/Mesh.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** vpc (15), tgw (8), rfc (1), igw (1), nat (1)
> **CLI Commands:** terraform (2), make (1)
> **Versions:** 19.18.10 (1)
> **Cross-References:** in the next (1)
> **Documentation:** rfc (1)
> **Speakers:** - [instructor] (1)

#### [Using segmentation with Transit Gateway and Terraform](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=0)** - [Instructor] Consider this, so far we have a VPC-A and a VPC-B, which are representative of a dev in a test environment. If we think about network level segmentation let's just call these non-prod. And as your organization continues to adopt cloud and you experience some level of growth, eventually you'll have production workloads out there as well. And as you start to deploy more infrastructure and you begin to optimize for efficiency, many times you'll see a shared services space that's etched out for specific resources that are consumed by all the other VPCs. So let's say that dev and test here are allowed to communicate with each other but we don't want them to communicate with prod. And let's say that non-prod and prod both need reachability to our shared services space. Let's work through this design with [Terraform](../../Skills/DevOps/Terraform.md) and Transit Gateway. For this scenario, I have added two additional VPCs. One to represent prod called VPC-C and one to represent our shared resources called VPC-shared. I've updated the configuration of each of these VPCs, specifically the Transit Gateway VPC attachment, and what we're going to do here
>
> **[1:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=94)** is we're going to disable route propagation and association on our attachments. I've done this for all the VPCs. And we're also going to, if we go to locals and we look at the ingress cidr list, we want to add the appropriate subnet cidr block that we want to allow in to communicate with our instances. So in this case, I'm in VPC-C. This is prod. So I only want to allow the shared resource subnet block. Now if I went to VPC-A for instance and went to locals, I would be allowing the shared resource cidr block and the test cidr block. Let's hop over to the VPC-shared. Now, in the last video, we used the default route table created with TGW. For this video, to meet these segmentation requirements we outlined earlier, we're going to provision additional route tables. Each attachment to our VPC can be associated to only one route table. It is worth noting that these route tables can actually hold multiple attachments even beyond VPC attachments. So for the routes, I have a TF file created for non-prod, prod, and shared. And if I [Zoom](../../Skills/Software%20Development/Zoom.md) in on one of these, let's take a look. We have the same theme going on in each one. So first we're going to create the actual route table and then we are mapping the TGW attachment
>
> **[3:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=190)** to the route table. And then last, we're propagating our desired routes. So I already ran Terraform to encompass all of these changes. So let's go ahead and test. I have a list of the private IPs here and I'm going to do a little split screen action. So I'm logged into an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance and each one of these VPCs, so the one that you see right here is dev 10.5. So with dev, we were supposed to be able to reach VPC-B test and VPC shared. Okay, so we can reach test
>
> **[4:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=240)** and we can reach shared, but we shouldn't be able to reach prod. Okay, and that's good. So let's hop over to test. And with test, we're supposed to be able to reach dev and VPC shared. So we can reach dev and we can reach shared, but we shouldn't be able to reach prod. And we can't reach prod. Great. So going to prod, with prod we shouldn't be able to reach dev or test but we should be able to reach shared.
>
> **[4:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=290)** Okay, so I can't reach dev. Good. I can't reach test. Good. And I can reach shared. Great. Now last is our VPC shared and I should be able to reach all of 'em. Let's see, I can reach dev, I can reach test, I can reach prod. All right, so all of our segmentation seems to be in order and we have route level isolation between non-prod, prod, and shared. Transit Gateway is a powerful resource to have in the toolbox. Since transitive [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) isn't available with native VPC configuration, this combination of resources can help control routing and segmentation for inter region and intra region routing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Terraform](../../Skills/DevOps/Terraform.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** vpc (15), tgw (2), ec2 (1)
> **CLI Commands:** terraform (2)
> **Versions:** 10.5 (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What comes next?](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=0)** - [Lecturer] This course represents the tip of the iceberg. Yes, there is a lot more to explore and learn. So what areas should you focus on next? Network design and network automation are two very distinct disciplines. I've brought together different aspects of each of these disciplines in this course with the goal of making the content practical for the real world. Efficient automation is predicated on good network design. Understand the platform you're automating and think through the design to ensure that it meets best practices and it provides the right set of capabilities. Automation just isn't about making things go fast. It's a valuable asset in maintaining the well thought out network design that meets the demands of the business. All that I go over here that you're going to see will be linked in the course notes. If you want a solid understanding of cloud networking, check out my course [Hybrid Multicloud Networking- Practical Concepts](Hybrid%20Multicloud%20Networking-%20Practical%20Concepts.md). The cloud provider documentation is extremely detailed and is the first place I always look when I need to understand the behavior of a specific resource or design for any one of the cloud providers. And explore. Getting out there and just doing things is a fantastic way to learn. Break things on purpose and see what it takes to fix them. Most of the public cloud providers
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=95)** have a great free tier to experiment with. On the automation side of things, the [Terraform](../../Skills/DevOps/Terraform.md) documentation is great. The more you use Terraform, the more time you're going to spend here. And seeing how others solve problems is also a great way to learn. Check out the Terraform Registry specifically modules from top contributors. Lastly, there is a plethora of [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning courses around tooling and management that are great entry points. I'll have all of these linked in the course notes. So much is available for learning right at your fingertips and most of it is open source and free. In this course, we focused on AWS, but what about [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md)? I have a challenge for you. Take the things that you learned in this course and try and replicate in other cloud providers. It won't be easy, but I believe you can do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **CLI Commands:** terraform (3), aws (1)
> **Definitions:** is a  (3)
> **Env Vars:** aws (1)
> **Speakers:** - [lecturer] (1)


## Instructor

- [William Collins](../../Instructors/Database%20Management/William%20Collins.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/terraform-managing-network-infrastructure-4373320)

## Skills Covered

- Terraform
- Infrastructure as code (IaC)

## Path Context

### In [Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)
← [Hybrid Multicloud Networking- Practical Concepts](Hybrid%20Multicloud%20Networking-%20Practical%20Concepts.md) | **6 of 6**

## Part of

- [Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)

## Appears In

- [Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Terraform](Advanced%20Terraform.md) — Terraform
- [Learning Terraform](Learning%20Terraform.md) — Terraform
- [GitHub Copilot for System-Level Development](../Artificial%20Intelligence%20(AI)/GitHub%20Copilot%20for%20System-Level%20Development.md) — Infrastructure as code (IaC)

---

[↑ Back to top](#)