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
  - Network Automation Professional Certificate by Arista Networks
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - topic/network-and-system-administration
  - skill/terraform
  - skill/infrastructure-as-code-iac
status: not-started
created: 2026-04-19
---

![Terraform: Managing Network Infrastructure](https://media.licdn.com/dms/image/v2/D560DAQFNSWOD_FUtrg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684432483878?e=2147483647&amp;v=beta&amp;t=OxVRq2kJ7lmhC_xFklVhGpTq_Pc-20bPvkmBoSgPFv0)

# Terraform: Managing Network Infrastructure

> Suggested prerequisites

An AWS account and a GitHub account
Terraform installed locally on your machine
A code editor (this course uses Visual Studio Code)
Git installed locally

Terraform has become one of the most popular infrastructure-as-code tools in the world. For engineers and admins, learning to use Terraform in tandem with particular architectural disciplines, like cloud networking, is c

> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure) | 1h 11m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[William Collins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/terraform-managing-network-infrastructure-4373320)

## Skills Covered

- Terraform
- Infrastructure as code (IaC)

## Table of Contents

### Introduction

#### Network management in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=0)** - Network management changes as you begin that transition to the cloud.
>
> **[0:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=6)** Infrastructure as code and tools like HashiCorp Terraform, they take the place of CLIs and web interfaces.
>
> **[0:13](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=13)** Cloud practitioners have been using Terraform for years, but network engineers, they've been a little slower to adopt it and risk losing control of networking in the cloud without a practical understanding.
>
> **[0:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=26)** If you're a network engineer trying to make this transition, or even a cloud practitioner that wants to learn more about networking, this course is for you.
>
> **[0:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=36)** My name is William Collins and if this seems a little bit daunting, do not fear.
>
> **[0:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=41)** The hardest part is getting started.
>
> **[0:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/network-management-in-the-cloud?u=76281980&t=44)** Let's go.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (2), make (1)
> **Code Keywords:** let (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - network (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=0)** - [Presenter] In this video, we're going to make sure the goal is aligned and that you have everything you need to get started with the course.
>
> **[0:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=7)** You don't have to be good to start, you just have to start to be good.
>
> **[0:13](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=13)** What are we trying to achieve?
>
> **[0:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=15)** The primary goal is to arm network practitioners with the skills needed to operate networking and the cloud using industry standard automation practices and tools like HashiCorp Terraform.
>
> **[0:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=30)** Also, this course would be valuable to existing cloud practitioners who are already writing infrastructure as code but want to enhance their expertise around the best practices of networking.
>
> **[0:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=42)** There are a few things we want to have installed and set up before we continue.
>
> **[0:47](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=47)** All the links you see here will be included in the exercise files.
>
> **[0:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=52)** So since we're going to be working with AWS in the course we're going to need an AWS account and also a GitHub account.
>
> **[1:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=61)** You're also going to need some software installed locally on your machine, so of course we're going to need Terraform.
>
> **[1:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=67)** And for this course, we're just going to be running Terraform by calling the open source binary on our machine.
>
> **[1:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=74)** Next, you'll need a code editor.
>
> **[1:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=76)** I like using VS code because it's free and it's pretty extensible.
>
> **[1:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=81)** And last, you need Git running on your machine.
>
> **[1:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-you-need-to-know?u=76281980&t=85)** Now that we have a clear vision of our goal for the course and we have the necessary accounts and software set up, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (3), aws (2), make (1), git (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Code Keywords:** continue (1), let (1)
> **Env Vars:** aws (2)
> **Tools:** github (1), vs code (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [presenter] (1)


### 1. Terraform Basics

#### Terraform's composition
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=0)** - [Instructor] Before you drive a car, you need to understand a few fundamental mechanics of its operation.
>
> **[0:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=7)** How do you start the vehicle and how do you turn it off?
>
> **[0:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=10)** Which pedal does the acceleration and which pedal does the braking?
>
> **[0:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=15)** How about putting it in park or reverse?
>
> **[0:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=18)** Without knowing these things, you can imagine how much trouble you could get yourself into.
>
> **[0:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=24)** In this video, we're going to examine some of the basic mechanics of Terraform.
>
> **[0:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=30)** The road to success is always under construction.
>
> **[0:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=34)** So what is Terraform?
>
> **[0:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=37)** It's an open source tool used to build, modify, and version control infrastructure.
>
> **[0:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=44)** Now, this infrastructure is defined using declarative human-readable configuration files, and Terraform interfaces with other platforms and services through application programming interfaces.
>
> **[0:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=58)** Terraform has two main components, the first of which is Terraform Core, and this operates as an entry point for using Terraform.
>
> **[1:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=70)** And then you have providers, which are essentially a logical abstraction of an upstream API.
>
> **[1:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=77)** Providers are developed using plug-ins, and these plug-ins are executed as a separate process and interact with the main Terraform binary using RPC, which is a method of building client server-based applications in distributed fashion.
>
> **[1:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=93)** You can go and check out the source code for both Terraform Core, and in this example, the AWS Terraform provider, at their respective GitHub repositories.
>
> **[1:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=104)** Now, these providers are published on Terraform Registry, and I want to dig in a little bit with Terraform Registry here.
>
> **[1:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=113)** So how is Terraform different?
>
> **[1:56](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=116)** To really understand this, we need to examine how network infrastructure typically gets configured today, and that is in a mutable and imperative fashion, which means infrastructure gets deployed and then while it's already running, it gets configured and modified over its lifecycle.
>
> **[2:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=136)** Think of it like this.
>
> **[2:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=137)** I'm a network engineer and I deploy several virtual routers.
>
> **[2:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=141)** Once they're up, I connect to them and bang away at that CLI, getting things the way that I want it, or or maybe I even run a script or some tool that connects to them after the fact and modifies the configuration as needed.
>
> **[2:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=155)** Now, Terraform, on the other hand, takes a different approach, a declarative approach.
>
> **[2:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=160)** This means that all the configuration is defined prior to deployment, at build time, and that resource is delivered intact.
>
> **[2:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=170)** In this video, we learned some of the basic mechanics of what makes Terraform tick.
>
> **[2:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=175)** You should also have a basic understanding of what Terraform Core is and how it interacts with providers, and what makes Terraform different.
>
> **[3:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-s-composition?u=76281980&t=184)** If you have those boxes checked, then let's hop over to the next lesson.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (16), aws (1)
> **Env Vars:** api (1), rpc (1), aws (1), cli (1)
> **Code Keywords:** this, (1), this. (1), let (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), think of it like (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Understanding Terraform state
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=0)** - [Instructor] When you think through all the infrastructure required to run a global application in the cloud, it might make your head spin.
>
> **[0:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=8)** It is far too much to commit in your own memory.
>
> **[0:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=12)** Not only that, but what about the relationships that exist between all of these resources?
>
> **[0:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=18)** Lucky for us, Terraform does a swell job at handling this so we don't have to.
>
> **[0:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=25)** "Once the business data has been centralized and integrated, the value of the database is greater than the sum of the preexisting parts."
>
> **[0:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=36)** When you provision infrastructure with Terraform, it keeps track of all the changes you make in a JSON file.
>
> **[0:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=45)** By default, this will get saved in your working directory as terraform.tfstate.
>
> **[0:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=52)** This state file is very important.
>
> **[0:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=55)** Every time you run Terraform, it gets used to compare desired and operational state, and then adjusts things accordingly.
>
> **[1:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=65)** So where should you store Terraform state files?
>
> **[1:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=70)** For most of this course, we aren't really going to think too much about this.
>
> **[1:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=76)** They're going to live in the directory we are running Terraform from on our local machine.
>
> **[1:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=81)** This is great for learning and testing, but definitely not production.
>
> **[1:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=88)** As things get more serious in the real world and testing and prototyping becomes production, you need to store state files remotely.
>
> **[1:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=98)** Shared storage like Amazon S3 or Azure storage accounts are great for this.
>
> **[1:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=104)** And lastly, you may not want to think about managing state at all.
>
> **[1:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=109)** You can use a variety of products out there like Terraform Cloud, which can be used as a service to store and manage state files at scale.
>
> **[1:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=119)** How might we organize state files?
>
> **[2:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=122)** This becomes very important as you begin to scale.
>
> **[2:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=126)** State files are like failure domains in network engineering.
>
> **[2:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=131)** Thinking through these failure domains is important in ensuring reliability of individual functions.
>
> **[2:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=139)** To limit blast radius, you can use additional state files as you plan and build your infrastructure.
>
> **[2:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=146)** The goal here is, if a misconfiguration does happen to one category of a resource, it shouldn't impact others.
>
> **[2:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=155)** Like, if a bad change gets made on the compute side, we don't want it affecting the state of the network.
>
> **[2:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=162)** HashiCorp provides direction on best practices here, and recommends one state file for each environment of a given infrastructure component.
>
> **[2:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=174)** So, we know that we want to limit blast radius, and we have HashiCorp's recommended pattern for organizing state files.
>
> **[3:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=182)** So, how does that look for the network?
>
> **[3:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=186)** So say your organization is building out a new product.
>
> **[3:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=190)** That product is probably going to have a few different application environments.
>
> **[3:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=195)** For this example, let's say Dev, UAT, and PROD.
>
> **[3:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=200)** Keeping in mind HashiCorp's recommended patterns, we should consider the following.
>
> **[3:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=207)** As an example, for Dev here, it would get a separate state file for a network, a separate state file for compute, and a separate state file for database.
>
> **[3:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=220)** This may seem like a lot, but it makes perfect sense.
>
> **[3:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=224)** If I make changes to the network in Dev and I mess something up, then of course I don't want that mistake propagated to higher environments, especially PROD, nor do I want it impacting compute or database infrastructure components.
>
> **[4:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=241)** Understanding how Terraform state works is critical to its operation.
>
> **[4:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/understanding-terraform-state?u=76281980&t=246)** Not only that, but it goes hand in hand with building a scalable and reliable infrastructure for your applications to run on.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (8), make (3)
> **Code Keywords:** this. (2), default, (1), let (1)
> **Env Vars:** prod (2), json (1), uat (1)
> **Best Practices:** recommended (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Manual exploration leads to good Terraform code
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=0)** - [Instructor] Jumping straight into automation with no thought or planning is a quick road to frustration.
>
> **[0:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=7)** The areas I'm going to cover in this particular video are exercises that I still do today even after using Terraform for many, many years.
>
> **[0:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=17)** What we're going to do is we're going to explore, we're going to create a few resources manually, and learn the ins and outs of how they work.
>
> **[0:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=24)** And then we're going to explore those same resources on the provider's documentation, so we can understand how things are interconnected.
>
> **[0:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=33)** And that's going to help us in the future as we start building some workflows.
>
> **[0:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=38)** Let's get going.
>
> **[0:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=40)** Let's go ahead and create a VPC now.
>
> **[0:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=43)** So one thing you'll notice as you start going through the provider documentation, is some attributes are required and some attributes are optional, and this is important to take note of.
>
> **[0:56](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=56)** So let's just say that I try and create this VPC without putting in any values.
>
> **[1:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=62)** Nope, it fired back at me.
>
> **[1:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=64)** It requires a CIDR block.
>
> **[1:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=66)** So let's give this one a quick name and a CIDR block and create VPC.
>
> **[1:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=79)** We did it. We have ourselves a VPC.
>
> **[1:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=82)** Now I wonder what would happen if I created another VPC with the same name and the same CIDR range?
>
> **[1:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=89)** Would it let us? Let's find out.
>
> **[1:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=100)** Create VPC. It did.
>
> **[1:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=103)** It did let us.
>
> **[1:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=104)** Now, if you are a network engineer, you may have some alarms going off right now.
>
> **[1:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=110)** Usually in our world, this is not a good thing.
>
> **[1:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=113)** So what if we wanted to create a new subnet resource?
>
> **[1:56](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=116)** How would we know which VPC to reference for that new subnet, since they have the same name?
>
> **[2:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=123)** So in Cloud, whenever a resource is created it returns a completely unique ID.
>
> **[2:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=132)** So let's build a subnet and tie it to the VPC with the ID suffixed with 4641 here.
>
> **[2:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=145)** 4641. Let's give it a name.
>
> **[2:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=152)** So just like we did with the VPC, a CIDR range is required for subnets of course, as well.
>
> **[2:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=159)** So this CIDR range must come from the overarching CIDR range that we used for the VPC.
>
> **[2:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=166)** So let's carve out a slash 24.
>
> **[2:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=174)** We've got ourselves a subnet and it's attached to the VPC that we wanted to attach it to.
>
> **[3:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=180)** Great.
>
> **[3:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=181)** So now as we explore the provider documentation, we can begin using what we learned in AWS Console to pick out important things that we can use when we build our infrastructure as code.
>
> **[3:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=196)** Like VPC, we got to give it a CIDR range just like we did in the console.
>
> **[3:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=202)** And if we wanted to create a subnet and attach it to that particular VPC, we have to supply it with that VPC ID.
>
> **[3:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=212)** And we know that this is a required attribute.
>
> **[3:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=217)** We have to provide it.
>
> **[3:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=218)** One useful thing you can do when you're checking out a provider's page and trying to learn more is just doing a search for required attributes.
>
> **[3:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=229)** And we can see that the first thing that comes up is that VPC ID.
>
> **[3:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=233)** That's an important one here.
>
> **[3:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=235)** So what are our takeaways from this video?
>
> **[3:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=238)** Explore the infrastructure you plan to automate.
>
> **[4:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=243)** Going through the UI and doing it manually is a great way to learn how a resource behaves for when you do automate it.
>
> **[4:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=251)** Next, we took a look at resource associations.
>
> **[4:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=255)** We created two VPCs with the same name, but knew which one to use for our subnet because each of those VPCs has a unique ID associated with it.
>
> **[4:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=267)** And last, we now know to identify key arguments and have a good understanding of which arguments are required and which are optional.
>
> **[4:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/manual-exploration-leads-to-good-terraform-code?u=76281980&t=278)** And we can find this on the provider documentation page.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (15), cidr (7), aws (1)
> **Code Keywords:** let (10)
> **CLI Commands:** find (2), terraform (1), aws (1)
> **Definitions:** is a  (3)
> **Analogies:** just like (2)
> **Tools:** aws console (1)
> **Speakers:** - [instructor] (1)

#### Terraform configuration language basics
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=0)** - [Instructor] Before we get to writing infrastructure as code, I want to go over a few things about the configuration language used to drive Terraform.
>
> **[0:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=10)** This can be a deep topic, so I've selected some core areas that will give us a grounded baseline to build on through the duration of the course.
>
> **[0:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=19)** "Whatever good things we build end up building us."
>
> **[0:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=24)** Terraform's configuration language is based on a general language called HCL or HashiCorp Configuration Language, and this was created with the goal of being both human and machine friendly.
>
> **[0:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=38)** HCL intends to be a structured configuration language, which means it gets decoded using an application defined schema.
>
> **[0:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=46)** The Terraform language is built around two syntax constructs.
>
> **[0:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=51)** The first of which is arguments, which simply assign of value to a name, and blocks, which operate as containers for other content.
>
> **[1:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=60)** Let's dig into the different block types.
>
> **[1:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=63)** The first of which is the Terraform block.
>
> **[1:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=66)** The best way to think about this block is new versions of Terraform are going to be released pretty rapidly, and the providers on Terraform Registry are going to have new releases at different cadences as well.
>
> **[1:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=79)** So as the end user, you will want to pin specific versions and do proper testing before upgrading to new versions, especially when dealing with production.
>
> **[1:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=89)** Terraform handles this with the Terraform block.
>
> **[1:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=91)** You can see in this example the versions pinned for both Terraform and the required providers.
>
> **[1:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=98)** Next on the list is the variable or input variable to be more precise.
>
> **[1:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=103)** You can think of Terraform input variables just like variables in other general purpose programming languages.
>
> **[1:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=111)** You set the variable block and then you can pass in different values based on different scenarios.
>
> **[1:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=117)** Next up, we have to define a provider block and set up authentication to the providers we wish to interact with.
>
> **[2:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=124)** In this course, I'm using AWS security credentials which are easy and good for basic testing, but in production scenarios, you would use identity and access management roles.
>
> **[2:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=135)** Now let's take a look at locals.
>
> **[2:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=137)** So locals are like variables, but just exclusive to your configuration, meaning you can't provide user input as part of your workflow to a local variable.
>
> **[2:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=151)** Locals are really good for filtering or transforming values that come in through regular input variables.
>
> **[2:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=158)** Next is the bread and butter of Terraform, and that is resource blocks.
>
> **[2:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=163)** This is how we build our actual infrastructure.
>
> **[2:47](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=167)** Just like in the previous video where we created that VPC manually, this would be that same configuration built out via Terraform.
>
> **[2:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=177)** So what happens if you need details like IDs, CIDR ranges, or other attributes from a resource that doesn't exist in your Terraform state file?
>
> **[3:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=189)** This is where data sources come in.
>
> **[3:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=191)** So with this data source here, we can provide the ID, and then we can get all the data outputs possible from this VPC that exists outside of our Terraform state.
>
> **[3:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=203)** And then we can use these details in other resources like this subnet.
>
> **[3:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=208)** Last on the list are outputs.
>
> **[3:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=211)** When you define an output, you return something specific about the infrastructure that you've built, like a VPC ID, a CIDR range, or maybe a DNS record, and really any other attribute available from a given resource.
>
> **[3:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=226)** Now for some tips on organizing.
>
> **[3:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=230)** Keeping your version constraints in a separate file can be very helpful.
>
> **[3:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=235)** Also, keeping your input variables separate in your configuration is really a common practice these days.
>
> **[4:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=243)** I generally like to keep my provider configuration in a separate file as well, and this leaves us with the ability to keep the primary logic of our project located in a main.tf file.
>
> **[4:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=255)** Now, we could just store everything in one giant monolithic file, but this really hurts readability.
>
> **[4:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=264)** Last, it's a good idea to keep your outputs in a separate file as well.
>
> **[4:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/terraform-configuration-language-basics?u=76281980&t=269)** In this video, we learned about Terraform's configuration language, we dug in on some of the common Terraform block types, what they're used for, and some tips for keeping things organized in our project.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (16), aws (1)
> **Env Vars:** vpc (3), hcl (2), cidr (2), aws (1), dns (1)
> **Code Keywords:** let (2), pass (1), for, (1)
> **Analogies:** just like (2)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Setting up your Terraform Repo
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=0)** - [Instructor] In this video, we're going to make sure you have the code repository cloned and that you know how to work with the exercise files.
>
> **[0:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=9)** On the course page, you'll see a little blue box that says Get Files.
>
> **[0:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=16)** When you click on this box, it'll take you to the Git repository that holds the code.
>
> **[0:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=22)** Now, we're going to go ahead and fork this repo.
>
> **[0:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=27)** And this basically means we're just going to make a copy of it with you as the owner, and this disconnects it from the codebase and the previous maintainers.
>
> **[0:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=39)** And for the owner, you're just going to reference your GitHub account.
>
> **[0:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=43)** And then you're going to want to uncheck copy the main branch only because we want to get all the branches in the course.
>
> **[0:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=52)** So click on Create Fork, and this will fork that repository into your account.
>
> **[1:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=60)** Now, the main branch is where this journey begins.
>
> **[1:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=64)** So this is the starting code for the course.
>
> **[1:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=67)** So you're going to see that we have a versions file, a variables file, a provider file, and that's about it.
>
> **[1:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=74)** But each branch, as you move along through the course, is going to add a little more.
>
> **[1:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=79)** So if you look at the... Let's expand branches here.
>
> **[1:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=82)** If you look at the branches here, the first part of that name is going to be the chapter, and the second part is going to be the video number.
>
> **[1:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=91)** So say that I'm on the video, let's say chapter two in the course and video number four, so 02_04, and I want to see the code that corresponds with it.
>
> **[1:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=103)** I can just click that.
>
> **[1:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=106)** It'll bring me right here.
>
> **[1:47](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=107)** And okay, I see a lot more files here.
>
> **[1:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=109)** We've made a lot more progress.
>
> **[1:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=111)** So in addition to the files, we also have documentation, specific links, and different commands that I use throughout the video.
>
> **[2:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=125)** So you may be asking, how do I run or edit this code?
>
> **[2:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=131)** So let's go ahead and clone the repository.
>
> **[2:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=135)** We can simply copy the link for the fork, switch over to VS Code, and clone it.
>
> **[2:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=145)** So I'll just paste the link here, use the default location, open, and, yes, I do trust myself.
>
> **[2:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=158)** So we've cloned the repository.
>
> **[2:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=161)** Now, this is going to land us in the main branch.
>
> **[2:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=165)** So say that I'm, again, let's go back to that chapter two, video four.
>
> **[2:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=171)** So say that I want to switch to chapter two, video four.
>
> **[2:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=177)** Get checkout 02_04.
>
> **[3:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=180)** So I'll see I have a lot more files here to work with.
>
> **[3:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=183)** So this'll take me to the final code that I run in that particular video.
>
> **[3:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=190)** Now, remember, you have to authenticate to the AWS provider.
>
> **[3:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=196)** You need an AWS account.
>
> **[3:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=197)** And I'm using security credentials here.
>
> **[3:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=201)** So there are a few ways to provide these values, and I'll add these options to the course notes.
>
> **[3:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=209)** And last thing, before we move on, for each video we run, just to show the power of Terraform and how it can handle the provisioning and destroying of infrastructure, I'll be building the infrastructure new for each video and tearing it down at the end of each video.
>
> **[3:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=228)** This is a really good habit to get into, especially when you're experimenting and learning, because it can save you money later on down the road.
>
> **[3:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=237)** Now, to save time, I won't be running the destroy command as part of the video, but I'll have the commands available in the notes for you to run.
>
> **[4:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=247)** Now that we have our repository set up and we know how to interact with the exercise files and branches, it is time to move on to the first real coding exercise.
>
> **[4:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/setting-up-your-terraform-repo?u=76281980&t=258)** So switch your branches over to 02_01, and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (3)
> **CLI Commands:** make (2), aws (2), git (1), terraform (1)
> **UI Navigation:** click on (2), switch to (1)
> **Env Vars:** aws (2)
> **Tools:** github (1), vs code (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** basically means (1), is a  (1)
> **Prerequisites:** make sure you have (1), set up (1)


### 2. Foundational Networking in AWS with Terraform

#### Creating a bare minimum VPC with Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=0)** - [Instructor] We made it through the basics, and now it's time to get hands-on.
>
> **[0:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=5)** In this lesson, we're going to go ahead and provision a basic VPC and subnet, and use some of that knowledge we gathered from the first section to optimize that configuration.
>
> **[0:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=17)** Okay, so what I want to do here is I want to build the infrastructure that we built by hand in that manual exploration video.
>
> **[0:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=26)** So first we're just going to do a Terraform init, which is going to go out and find, download, and install the AWS provider that we marked as required.
>
> **[0:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=36)** And now I want to run a Terraform plan.
>
> **[0:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=40)** And this is just going to create an execution plan for us.
>
> **[0:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=43)** And that way we can look at it, and just make sure that the changes that are happening are the ones that we want to happen.
>
> **[0:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=50)** So you could, on your own plan, go through and review all the different details here.
>
> **[0:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=55)** And now we want to apply this infrastructure.
>
> **[0:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=57)** (keyboard clacking) And while that's running, it shouldn't take more than a second, I'm just going to switch over to the AWS console.
>
> **[1:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=66)** We can see our infrastructure, yep, popped right up.
>
> **[1:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=70)** Okay, so we could stop here, or we could maybe optimize this a little bit.
>
> **[1:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=77)** And when I say optimize, see these statically coded values in our file here?
>
> **[1:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=85)** Let's go ahead and take some input variables and make 'em a little, you know, more modular.
>
> **[1:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=93)** So let's go to our variables file.
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=95)** And I pre-staged these ahead of time, so I'm just going to go ahead and uncomment them.
>
> **[1:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=102)** And basically, I've defined a VPC name, VPC CIDR, subnet name, and subnet CIDR for those four values.
>
> **[1:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=111)** And what this is going to do is it's going to say, hey, this Terraform configuration expects me to pass these values in now.
>
> **[2:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=120)** So usually this would be in some sort of workflow, a pipeline of some sort, or some other logic that's going to insert these values in and run Terraform.
>
> **[2:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=129)** But for the sake of just doing this by testing an example, I created this tfvars file with these same values here.
>
> **[2:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=139)** So let's save that now that those are uncommented.
>
> **[2:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=146)** And now we just need to go to our main file, and actually replace these.
>
> **[2:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=150)** (keyboard clacking) VPC CIDR, VPC name, subnet CIDR, and subnet name, let's save that, done.
>
> **[2:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=173)** Now, what do you think would happen if I tried to do another Terraform plan?
>
> **[3:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=180)** Let's see.
>
> **[3:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=182)** Well, it's going to tell me nothing's changed.
>
> **[3:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=185)** And the reason for that is nothing, as far as my intent is concerned, has changed.
>
> **[3:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=190)** I've updated the way that I'm, you know, taking these values and providing them, but my operational infrastructure, what's running out there, has not changed.
>
> **[3:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=200)** I haven't changed anything as far as Terraform's concerned.
>
> **[3:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=204)** So why don't we change something, and update something in place.
>
> **[3:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=209)** So let's go to our terraform.tfvars file, and let's change the subnet name.
>
> **[3:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=216)** So let's just call it app-subnet.
>
> **[3:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=219)** (keyboard clacking) Let's save that, and then we can do a Terraform plan again.
>
> **[3:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=232)** Aha, so we got some changes now.
>
> **[3:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=234)** So it recognizes that something with the way that I'm declaring my infrastructure has changed.
>
> **[3:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=239)** We've updated some value.
>
> **[4:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=242)** So it's going to reconcile this declarative state that I've defined, and operationally what I have running in AWS right now.
>
> **[4:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=250)** And it's going to tell me, it's going to do a diff and show me that, hey, subnet-01 is changed to app-subnet.
>
> **[4:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=259)** Do you want to roll out the changes?
>
> **[4:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=261)** And yes, we do.
>
> **[4:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=262)** (keyboard clacking) So let's go ahead and apply these.
>
> **[4:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=269)** Now it can come over here and go to subnet, oh, already changed.
>
> **[4:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=275)** App-subnet is our new desired intent with the subnet name.
>
> **[4:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=281)** In this video, we built some network infrastructure.
>
> **[4:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=285)** We provisioned a bare minimum VPC in a single subnet.
>
> **[4:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=290)** We then optimized our code by removing some of those hard-coded values.
>
> **[4:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=295)** And we used input variables in a tfvars file to populate them in a more dynamic fashion.
>
> **[5:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/creating-a-bare-minimum-vpc-with-terraform?u=76281980&t=302)** And last, we changed a few values, and got to see how Terraform updates resources in place.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (9), aws (3), make (2), find (1)
> **Env Vars:** vpc (6), cidr (4), aws (3)
> **Code Keywords:** let (10), switch (1), pass (1)
> **UI Navigation:** go to (4)
> **Tools:** aws console (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Looping over subnets with Terraform count
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=0)** - [Instructor] Every design out there is probably going to have more than one subnet.
>
> **[0:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=5)** Now I could just duplicate this block here, but instead of adding more unnecessary lines to our configuration files, in this video what we're going to look at is one of Terraform's meta-arguments called count and also a handy function in Terraform called cidrsubnet.
>
> **[0:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=26)** So let's start out with the flow of information in.
>
> **[0:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=28)** I have these two subnet variables here and I'm going to go ahead and rename this one to subnets and I'm going to change the type to a list of strings.
>
> **[0:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=39)** And what this is going to do is Terraform is going to expect a list of strings for subnets and we're just going to provide it basically a list of names.
>
> **[0:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=48)** So I'm going to go ahead and remove this other variable here.
>
> **[0:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=51)** Save this.
>
> **[0:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=53)** Now I'm going to hop over to the terraform.tfvars file and I'm just going to remove both of these and create a subnets value.
>
> **[1:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=64)** So this is going to be the list.
>
> **[1:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=66)** So let's keep it simple.
>
> **[1:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=69)** Subnet for public and a subnet for private.
>
> **[1:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=74)** Save this.
>
> **[1:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=76)** Now we can move on to the logic into the main.tf file.
>
> **[1:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=81)** So let's reference count here.
>
> **[1:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=86)** And we're also going to reference a handy collection function called lengths.
>
> **[1:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=91)** And this is great 'cause it'll tell us how many values that we're passing in.
>
> **[1:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=96)** So however many name values we have coming in, it's going to count 'em.
>
> **[1:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=100)** And with this we can come down to the names tag and say, okay, var.subnets count.index and it'll iterate over these for us.
>
> **[1:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=111)** So now onto the cidr_block.
>
> **[1:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=119)** So this cidrsubnet function, it's going to take three things that we need to give it.
>
> **[2:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=125)** So the first is a prefix that we want to carve out.
>
> **[2:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=128)** And what we're going to do is we're going to reference the cidr_block that we assigned to the vpc.
>
> **[2:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=134)** So [aws_vpc.dev](https://aws_vpc.dev).cidr_block.
>
> **[2:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=139)** So that's the first thing.
>
> **[2:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=140)** And next it's going to ask for what the function refers to as new bits, which just is an extension of the prefix.
>
> **[2:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=149)** So basically for the AWS VPC, we're using a .0/20.
>
> **[2:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=155)** And for our subnets, let's say that we want /24s.
>
> **[2:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=159)** It's really common.
>
> **[2:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=160)** So then we can just calculate the diff, which is four.
>
> **[2:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=165)** And then last, we need a net sum for the additional bits added to the prefix.
>
> **[2:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=170)** So for this, I'm just going to go ahead and do count.index and then add one per iteration.
>
> **[2:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=178)** Let's save this.
>
> **[3:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=181)** Now let's hop over to outputs.
>
> **[3:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=185)** Now since we're going from a single value, single ID, to multiple values, and we don't know how many values that we're going to get, 'cause we're going to add subnets progressively.
>
> **[3:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=195)** So let's go ahead and add a asterisk here so we can iterate over each of these.
>
> **[3:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=202)** Let's save this.
>
> **[3:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=204)** And now we can go ahead and run this Terraform.
>
> **[3:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=210)** Do our init.
>
> **[3:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=212)** Pull everything down.
>
> **[3:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=213)** And now we can do our plan.
>
> **[3:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=219)** And actually let's just grep cidr_block with the plan as well.
>
> **[3:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=224)** So now we can see the cidr_blocks that it gave each of these subnets.
>
> **[3:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=228)** It's doing what we wanted it to do.
>
> **[3:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=230)** So 10.5.1 0/24, and then 2.0/24.
>
> **[3:56](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=236)** So now we can go ahead and apply this.
>
> **[4:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=241)** And I'm going to go ahead and hop over to AWS Console.
>
> **[4:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=246)** We can do a refresh.
>
> **[4:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=248)** There's our subnets.
>
> **[4:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=250)** So now that we have some subnets to work with, let's do something with them.
>
> **[4:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/looping-over-subnets-with-terraform-count?u=76281980&t=255)** In the next video, let's create some resources for testing things out, which will come in handy for the rest of the videos in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (5), function (4), public (1), private (1)
> **CLI Commands:** terraform (5), aws (2), grep (1)
> **Code Identifiers:** cidr_block (4), aws_vpc (1), cidr_blocks (1)
> **Env Vars:** aws (2), vpc (1)
> **Definitions:** is a  (1), refers to (1), is an  (1)
> **Versions:** 10.5.1 (1), 2.0 (1)
> **URLs:** [aws_vpc.dev](https://aws_vpc.dev) (1)
> **Cross-References:** in the next (1)

#### Using Terraform to provision EC2 instances
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=0)** - [Instructor] As we start tweaking the network in later videos we're going to need a way to do reachability testing.
>
> **[0:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=6)** In this video, we're going to spin up two EC2 instances with Terraform, and the first step is generating some SSH keys.
>
> **[0:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=15)** I'm going to create a folder called Keys in my current working directory and generate the keys there.
>
> **[0:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=25)** There we go.
>
> **[0:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=26)** Now we're going to look at the flow of information coming in.
>
> **[0:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=29)** So you're going to notice that we have some new input variables.
>
> **[0:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=33)** The first one is going to be for our instance names.
>
> **[0:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=36)** It's going to be a list of strings, similar to how we did subnets in the previous video.
>
> **[0:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=41)** And then we have instance type AMI, ID and public key.
>
> **[0:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=46)** Now let's look at the corresponding values.
>
> **[0:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=50)** So for the instance type, we're going to use T3 Nano.
>
> **[0:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=53)** This is a great instance type for free tier usage.
>
> **[0:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=57)** You're going to get a lot of hours out of it.
>
> **[0:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=59)** And then we have the AMI ID for canonicals of Ubuntu.
>
> **[1:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=63)** And then for the instance names I followed the theme that we did for subnets, EC2 public, EC2 private.
>
> **[1:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=71)** And this is going to serve us well later on 'cause we're going to look at some scenarios around public subnets and private subnets.
>
> **[1:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=78)** And then for public key we just have the path to that ec2.pub.
>
> **[1:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=84)** Now for the actual instance configuration, I created a separate file called ec2.tf.
>
> **[1:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=92)** This just keeps things cleaner and easier to read.
>
> **[1:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=96)** And at the top here we're going to be generating a random ID to use in the AWS key pair.
>
> **[1:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=103)** And we're also providing the variable holding the path to our public key.
>
> **[1:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=109)** And for the instance configuration, I'm going to use count in the same way that we did for the subnets in the last video.
>
> **[1:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=117)** And for the rest of these values I'm simply populating the AMI and instance type variables.
>
> **[2:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=123)** And then I'm referencing the key name from the resource above.
>
> **[2:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=126)** This means that when the instances get instantiated, they're going to get the public key I generated earlier.
>
> **[2:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=135)** So let's go ahead and run this.
>
> **[2:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=141)** Let's do a terraform init, pull everything down, now Terraform plan, get our execution plan and then we will apply it.
>
> **[2:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=160)** Now while that's applying, I'm going to hop over to outputs and I went ahead and set up a new output for public IPs.
>
> **[2:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=168)** That way if we don't want to login to the console and find those EC2 instances and grab their public IPs we can just grab it directly from the command line here.
>
> **[3:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=181)** There we go.
>
> **[3:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=182)** Now let's try and SSH into one of these VMs.
>
> **[3:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=191)** So I'm just basically saying with the -i flag I'm going to reference the private key that we generated, and then Ubuntu, the default username is always going to be Ubuntu here for the canonical Ubuntu AMI.
>
> **[3:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=207)** So I'm going to go ahead and put in my public IP here and try to connect.
>
> **[3:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=218)** Uh-oh, it looks like we can't log in.
>
> **[3:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=222)** I'm not able to connect.
>
> **[3:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=224)** Some of you watching may be hollering at me right now because you know why.
>
> **[3:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-provision-ec2-instances?u=76281980&t=228)** For those that don't, hop over to the next lesson and we're going to get this sorted.

> [!info]- Semantic Content
>
> **Code Keywords:** public (9), let (4), private (3), type, (1), pub (1)
> **Env Vars:** ec2 (4), ami (4), ssh (2), aws (1)
> **CLI Commands:** terraform (3), ssh (2), aws (1), find (1)
> **Cross-References:** previous video (1), in the last (1)
> **Definitions:** is a  (1), means that (1)
> **Tools:** command line (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### Building public subnets in AWS with Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=0)** - [Instructor] In the last video, we deployed a few EC2 instances and then tried to connect to the first one called EC2 Public with no success.
>
> **[0:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=10)** In this video, we're going to take a look at the concept of public subnets in AWS and make a few adjustments to our Terraform so that we can reach our EC2 instance.
>
> **[0:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=22)** Now in AWS, a subnet that has a direct route to an internet gateway is known as a public subnet.
>
> **[0:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=31)** Let's refer to internet gateway as IGW for short.
>
> **[0:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=37)** So not only do we get internet egress with an IGW, but resources on the outside are able to initiate connections back to resources on the inside.
>
> **[0:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=48)** So in short, we need this IGW in our little scenario to allow my home machine the ability to initiate connections to our public instance.
>
> **[0:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=58)** So for this configuration, I set up a new public subnet TF file here in which we have three different resources.
>
> **[1:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=67)** We have our IGW, our AWS route table with our quad zero and then the target is that internet gateway id.
>
> **[1:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=79)** And then we have a route table association.
>
> **[1:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=81)** Now, since we created our instances with the count meta argument, and this means each instance is identified by an index number, starting with zero.
>
> **[1:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=91)** Since our first instance was the EC2 public that's the one we want to reference.
>
> **[1:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=97)** So we do that here after the resource name here with that zero in square brackets.
>
> **[1:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=106)** And in our instance file here, we have a security group.
>
> **[1:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=112)** And again, we have an attachment.
>
> **[1:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=115)** So just like we had to attach that route table to the subnet security groups are in scope at an instance level.
>
> **[2:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=124)** So this gets attached to our instance directly.
>
> **[2:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=127)** And just to add some measure of security, I went ahead and created this public IP variable and this means that only traffic originating from my public IP is going to be allowed to talk to this instance just so the whole world doesn't get to see my public IP on screen here.
>
> **[2:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=147)** Instead of putting the public IP with the rest of our values here in terraform.tfvars I went ahead and already ran it as an environment variable and I will put the command syntax to do that in the readme with the branch corresponding to this video.
>
> **[2:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=169)** So let's go ahead and run our terraform here.
>
> **[2:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=177)** Terraform init.
>
> **[3:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=184)** Let's make our execution plan, terraform apply.
>
> **[3:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=194)** Considering everything that's actually happening on the backend here.
>
> **[3:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=197)** It's pretty amazing how fast all this runs just considering the scope of everything.
>
> **[3:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=206)** There we go, we're already done.
>
> **[3:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=208)** You know, that's pretty quick.
>
> **[3:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=210)** So let's try to connect to our instance now.
>
> **[3:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=216)** Swap out the public IP from my cache.
>
> **[3:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=225)** Wow, I literally just finished running that terraform and we're already able to SSH to this instance.
>
> **[3:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=233)** Like really, if you think about it instantaneously, you know, that's pretty outstanding.
>
> **[3:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=237)** So great.
>
> **[3:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=239)** We're able to connect to the instance in that public subnet.
>
> **[4:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=242)** And for many use cases, this is prevalent, but a lot of times it is not desirable to allow internet egress and ingress directly from the instance.
>
> **[4:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=255)** Many times you need to access the internet but you don't want things initiating connections from the outside back in.
>
> **[4:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=264)** This is where private subnets come in.
>
> **[4:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-public-subnets-in-aws-with-terraform?u=76281980&t=267)** In the next video, we're going to explore private subnet design with our second instance.

> [!info]- Semantic Content
>
> **Code Keywords:** public (12), let (4), private (2)
> **CLI Commands:** terraform (6), aws (3), make (2), ssh (1)
> **Env Vars:** ec2 (4), igw (4), aws (3), ssh (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** known as (1), means that (1)
> **Documentation:** the readme (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)

#### Building private subnets in AWS with Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=0)** - [Instructor] We now have an EC2 instance in a public subnet that has the ability to egress to the internet but also allows incoming connections from the internet.
>
> **[0:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=12)** With our second instance, we're going to take a different approach by running it in a private subnet where it can egress to the internet only.
>
> **[0:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=21)** To do this, we're going to provision a NAT gateway, or NGW for short, to facilitate connectivity to the internet for instances in a private subnet.
>
> **[0:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=35)** I already applied the Terraform configuration, but before we do a little testing, let's go over some of the changes.
>
> **[0:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=43)** So for this configuration, I created a separate file, private_subnettf, and we're going to notice a few new resources in here.
>
> **[0:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=52)** The first of which is we need an elastic IP address, or EIP.
>
> **[0:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=58)** And this gets attached to the NGW.
>
> **[1:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=62)** This is just essentially a static public IP address.
>
> **[1:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=65)** And in the real world, this is something you really want to stay static.
>
> **[1:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=71)** And then we have our NAT gateway.
>
> **[1:13](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=73)** So the first thing you'll notice is instead of referencing our VPC ID, this is getting attached at the subnet level, and then we're going to also reference this EIP above.
>
> **[1:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=85)** And then you'll notice a new meta argument, depends_on.
>
> **[1:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=89)** Now, this is going to essentially complete all the actions on the dependency object before performing actions on the object declaring the dependency.
>
> **[1:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=101)** So this has been inserted here per the provider documentation.
>
> **[1:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=106)** Now I'm going to hop over to our security group.
>
> **[1:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=109)** And just a small change here, so instead of just having this attached to our public subnet, I have it attached to the public and private subnet.
>
> **[2:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=120)** So let's hop on over to our command line.
>
> **[2:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=123)** So here's our outputs right here.
>
> **[2:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=126)** Now, the first thing we want to do is we want to check reachability from the public internet.
>
> **[2:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=131)** And what I'm going to do here is I'm going to use a tool called Nmap.
>
> **[2:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=135)** (keyboard clicks) So that's basically just going to say, "Hey, are you listening on this port over the public internet?"
>
> **[2:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=147)** And we can see, as expected, the instance in the public subnet is.
>
> **[2:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=153)** Now let's try the private subnet.
>
> **[2:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=155)** (keyboard clicks) And as you can see, this is actually why, even though I didn't have an expectation that we were going to try to connect from the internet to an instance in a private subnet, I attached the public IP, you know, just so we could test and we could demonstrate this.
>
> **[2:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=178)** And we can see it's not reachable.
>
> **[3:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=181)** So let's go ahead and connect to the instance in the public subnet.
>
> **[3:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=185)** (keyboard clicks) And here we are.
>
> **[3:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=194)** And since the private subnet instance is not reachable over the public internet, I'm going to connect to it from this instance.
>
> **[3:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=202)** But first, let's just make sure we can reach it.
>
> **[3:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=205)** (keyboard clicks) So we are able to ping it.
>
> **[3:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=212)** Now, the first thing I'm going to need to do before I can try and reach out to it is this private key that I'm using from my workstation, I'm going to need to put that on the first instance.
>
> **[3:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=232)** So to do that, I'm just going to create a file called ec2.
>
> **[3:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=237)** (keyboard clicks) Copy that in there.
>
> **[4:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=244)** And then I need to set some permissions.
>
> **[4:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=249)** All right, now we should be able to reach that instance over its private IP over SSH.
>
> **[4:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=254)** (keyboard clicks)
>
> **[4:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=262)** There we are.
>
> **[4:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=263)** We made it.
>
> **[4:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=265)** Now let's just make sure that we can reach the internet.
>
> **[4:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=269)** (keyboard clicks) I can reach [linkedin.com](https://linkedin.com), and we're all good.
>
> **[4:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=276)** In this video, we set up a private subnet and used a NAT gateway to facilitate internet egress from our private EC2 instance.
>
> **[4:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=285)** Now, in this whole chapter, we've barely hit the tip of the iceberg.
>
> **[4:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=291)** And you may have noticed my security groups are pretty much wide open.
>
> **[4:56](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=296)** And also, how do we do things like route between VPCs?
>
> **[5:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/building-private-subnets-in-aws-with-terraform?u=76281980&t=301)** So in the next chapter, we're going to turn things up a notch and explore additional configuration and use cases.

> [!info]- Semantic Content
>
> **Code Keywords:** public (10), private (10), let (6), static (2), this, (1)
> **Env Vars:** nat (3), ec2 (2), ngw (2), eip (2), vpc (1)
> **CLI Commands:** make (2), terraform (1), ssh (1)
> **Code Identifiers:** private_subnettf (1), depends_on (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)


### 3. Advanced Networking in AWS with Terraform

#### Using Terraform to expand our infrastructure footprint
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=0)** - To begin chapter three we're going to provision an additional VPC, subnet and instance with Terraform.
>
> **[0:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=9)** This is going to set us up for the next few videos where we're going to look at some common options for routing between VPCs.
>
> **[0:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=17)** In this video also I wanted to incorporate some different string functions.
>
> **[0:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=23)** These can come in handy and help solve a variety of different problems.
>
> **[0:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=28)** And I'll have the links to each one of these in the video notes.
>
> **[0:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=33)** I also wanted to throw in a curve ball to keep you on your toes.
>
> **[0:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=38)** So I copied all of our existing Terraform configuration into a folder called VPC-A and for the new VPC we're going to create I put the configuration into a folder called VPC-B.
>
> **[0:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=53)** Now, when you run Terraform in each of these respective directories it's going to generate two separate state files.
>
> **[1:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=61)** I'm doing this for a good reason that we will find out about in the next video.
>
> **[1:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=66)** So, if you remember back to our original configuration we defined our input variables, all of them.
>
> **[1:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=75)** And then for the values we use Terraform.tfr for everything.
>
> **[1:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=81)** For VPC-B, we're going to do things a little bit different.
>
> **[1:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=86)** So, one scenario you will run into a lot in the real world is not having all the exact details you need coming in as inputs.
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=95)** So, you'll have to get creative with what you do have and then filter or transform them via local variables.
>
> **[1:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=103)** So, say for instance that we only have this VPC cidr to work with, so let's check out what we can do with that.
>
> **[1:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=115)** So I'm going to switch over to a new file that I created called locals.tf.
>
> **[2:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=121)** And first thing you're going to see here is a new resource called random string.
>
> **[2:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=127)** This is a really useful resource because you can define all the criteria that you want that string to have.
>
> **[2:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=134)** So, how long do you want it to be?
>
> **[2:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=137)** Do you want lowercase?
>
> **[2:19](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=139)** Do you want numeric?
>
> **[2:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=140)** Do you want uppercase?
>
> **[2:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=142)** Nope, we don't want uppercase.
>
> **[2:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=143)** Do you want special characters?
>
> **[2:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=145)** Negative.
>
> **[2:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=146)** Turns out those do not bode well for naming conventions.
>
> **[2:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=150)** And then we can work our way down and we can see these string functions in action.
>
> **[2:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=157)** So with trim suffix here, line 16, I can see that okay, I'm stripping that /20 off the end of that cidr.
>
> **[2:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=165)** Turns out slashes are not good for naming conventions either.
>
> **[2:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=169)** And then I'm going to replace the period with hyphens.
>
> **[2:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=175)** And then I'm going to do some formatting.
>
> **[2:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=177)** So, I'm going to prefix this naming convention with VPC test.
>
> **[3:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=182)** And then I'm going to add that last string here, the replace period onto that.
>
> **[3:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=188)** So I'm going to format that as my final name for VPC name.
>
> **[3:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=191)** And then I'm going to go down to the subnet values and I'm going to use format again.
>
> **[3:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=196)** But instead of having that string that I've manipulated I'm going to use the random string on the end of that.
>
> **[3:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=203)** So I'm going to reference that random string.test and then the result.
>
> **[3:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=207)** And then for the cidr I'm just going to use that cidr subnet magic.
>
> **[3:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=212)** And then as we go down also, you'll see this a lot with a lot of Terraform written out there today.
>
> **[3:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=217)** This is another way that you can format strings as well.
>
> **[3:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=221)** So now that I have all these defined here we can kind of jump over and with all the other Terraform that I've written here I'm just referencing those local variables.
>
> **[3:52](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=232)** So local.ec2 instance name, local. dot key pair name up here, local.security group name.
>
> **[4:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=240)** So all these are referenced a little more cleanly here.
>
> **[4:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=244)** So I'm going to go ahead and run this, generate our execution plan, and then run our apply.
>
> **[4:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=257)** And while it's running, consider the following.
>
> **[4:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=261)** These two VPCs exist in the same AWS account.
>
> **[4:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=266)** However, they have no reach ability.
>
> **[4:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=269)** So how do we go about setting up routing between them?
>
> **[4:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-terraform-to-expand-our-infrastructure-footprint?u=76281980&t=274)** And that is exactly what we're going to look at in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (8), aws (1)
> **CLI Commands:** terraform (6), find (1), aws (1)
> **Code Keywords:** throw (1), let (1), switch (1), this, (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - to (1)

#### Routing traffic between VPCs using Terraform and VPC peering
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=0)** - [Instructor] We have a few VPCs now, and we want to route traffic between them.
>
> **[0:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=6)** The first option we're going to look at is VPC peering, which is simply a connection between two VPCs.
>
> **[0:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=15)** Now, in the real world, you often have to interface with resources in other state files.
>
> **[0:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=21)** We know we can reference existing infrastructure by using individual data sources, but sometimes that can be a bit tedious.
>
> **[0:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=30)** One really cool data source in Terraform that I personally think is underused and underappreciated is the remote_state data source.
>
> **[0:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=41)** This allows me to reference resources in other state files and return their IDs, names, CIDR blocks, or whatever else that I can think of.
>
> **[0:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=53)** And we're going to use this in our VPCA configuration to reference the state file in our VPCB configuration.
>
> **[1:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=64)** Let's take a look.
>
> **[1:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=66)** Now this may seem like overkill for this small use case, but as you scale over time features like this become golden because it reduces the amount of touchpoints in your configuration, and as you scale.
>
> **[1:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=83)** Now for the VPC peering configuration I'm simply providing the account number right here that the VPC I want to connect with exists in, along with the ID of the VPC.
>
> **[1:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=99)** And instead of having to look up that VPC ID, I'm referencing the Terraform remote_state data source output for the VPC ID.
>
> **[1:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=108)** Then I need to provide some details about the VPC I'm peering from.
>
> **[1:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=115)** So I'm just going to reference the ID since it was created in this configuration.
>
> **[2:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=120)** And since both of these VPCs exist in the same account, I can go ahead and auto-accept the peering.
>
> **[2:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=128)** I already went ahead and ran the terraform, and this new VPC peering connection already exists.
>
> **[2:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=136)** So if I come over here into AWS Console, I already have it pulled up.
>
> **[2:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=140)** We have the peering connection up, so let's test it.
>
> **[2:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=145)** I'm logged in.
>
> **[2:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=146)** So remember, each of these VPCs has instances that have been provisioned.
>
> **[2:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=152)** So on the left down here, this is the instance in VPCA 10.5.
>
> **[2:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=157)** And on the right is the instance from VPCB 10.6.
>
> **[2:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=162)** So let's try and ping back and forth.
>
> **[2:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=164)** (keyboard clacking) Okay, so I can't ping from VPCA to VPCB.
>
> **[2:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=173)** Let's try reverse.
>
> **[2:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=175)** (keyboard clacking) Likewise, I can't ping from VPCB to VPCA.
>
> **[3:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=184)** Houston, we have a problem. (laughs) Why don't we have reachability?
>
> **[3:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=189)** And you may have already picked out the issue.
>
> **[3:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=192)** So not only do we need the VPC peering connection, but we also need a route.
>
> **[3:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=200)** Just like we did in the last chapter, we're going to do the following.
>
> **[3:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=204)** And I actually have it commented out here so we can rerun the Terraform.
>
> **[3:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=210)** So let's remove the commenting.
>
> **[3:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=212)** So we need to define our source route table that we want to route from.
>
> **[3:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=217)** Right here.
>
> **[3:38](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=218)** Then we have to define our destination CIDR block, which we're going to use that data source again and just grab the output.
>
> **[3:47](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=227)** And then what essentially amounts to our next top, right here.
>
> **[3:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=234)** Like, "Okay, what is going to get us to our destination?"
>
> **[3:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=238)** And this is, in this case, it is the peering connection we just created.
>
> **[4:03](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=243)** So I have this all uncommented, and then I have an output for the peering connection ID.
>
> **[4:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=249)** Let's uncomment that.
>
> **[4:13](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=253)** And then, likewise, we're going to go to VPCB.
>
> **[4:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=258)** Let's go ahead and save these first, and then VPCB.
>
> **[4:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=263)** And we're going to do the same thing.
>
> **[4:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=267)** Except the peering connection only has to be configured from one side.
>
> **[4:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=271)** But on both sides I do have to configure a route so the traffic knows how to get back.
>
> **[4:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=279)** So here with the VPC connection ID I'm referencing that data source.
>
> **[4:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=285)** So basically the state file from VPCA, and I'm grabbing that peering connection ID.
>
> **[4:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=291)** So let's go ahead and save these.
>
> **[4:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=294)** And then I'm going to go ahead and run Terraform in a different window so we can see when these pings start picking up again.
>
> **[5:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=304)** So VPCA, let's do another plan
>
> **[5:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=312)** (keyboard clacking) and then apply.
>
> **[5:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=317)** and then we'll do the same for VPCB.
>
> **[5:20](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=320)** Plan, (keyboard clacking) apply.
>
> **[5:32](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=332)** There we go.
>
> **[5:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=333)** Our pings were successful, we have routing.
>
> **[5:36](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=336)** And one last thing that I want to point out is remember with our security group for these EC2 instances, when we initially set up this security group for ingress we were only allowing access from my public IP address, and then in your case, your public IP address.
>
> **[5:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=358)** And that was set as an environment variable.
>
> **[6:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=362)** So what I went ahead and did is in the locals here, just so I don't have to show my public IP address on screen here, I used concat, a string function with Terraform, to take my public IP and then combine it with our private address ranges there.
>
> **[6:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=381)** So I did this for each one of these VPCs, because if you don't add that private IP address here then you won't have access.
>
> **[6:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=390)** VPC peering is great for simple use cases and a limited number of VPCs.
>
> **[6:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=397)** One challenge with VPC peering is scale.
>
> **[6:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=401)** It doesn't support transitive routing.
>
> **[6:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=404)** For example, say I have three VPCs, A, B, and C.
>
> **[6:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=409)** I can't route from VPC A to VPC C through VPC B in the middle.
>
> **[6:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/routing-traffic-between-vpcs-using-terraform-and-vpc-peering?u=76281980&t=417)** So in the next video we're going to kick things up a notch by looking at how we can use transit gateway to support VPC management at scale.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (16), vpcb (7), vpca (6), cidr (2), aws (1)
> **Code Keywords:** let (9), public (4), case, (3), from. (2), private (2)
> **CLI Commands:** terraform (6), aws (1)
> **Code Identifiers:** remote_state (2)
> **Versions:** 10.5 (1), 10.6 (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** configure (1), set up (1)

#### Scaling the network with Terraform and Transit Gateway
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=0)** - [Instructor] Transit gateway, or TGW for short, enables you to interconnect VPCs and on-premises networks using attachments.
>
> **[0:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=12)** When it comes to scale, especially for the enterprise, transit gateway really shines.
>
> **[0:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=18)** I removed our configuration for VPC peering, and in this video, we're going to connect our VPCs with transit gateway using Terraform.
>
> **[0:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=29)** And with our configuration, we're going to run with some of the defaults and propagate routes to the route table of the TGW.
>
> **[0:37](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=37)** This will let all of our VPCs talk in a full mesh type of scenario, and we're going to look at two different resources in particular.
>
> **[0:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=46)** First, we need to create the transit gateway itself, and then we're going to use a VPC attachment to connect both of our VPCs to the transit gateway.
>
> **[0:57](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=57)** The TGW configuration is pretty simple here.
>
> **[1:02](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=62)** Since we're rolling with the defaults, I'm just providing a description and a tag for the name.
>
> **[1:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=69)** For the VPC attachment, though, we have a few more things in motion.
>
> **[1:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=75)** So first of all, we need to provide that VPC ID, like we do with most of the other resources we've created.
>
> **[1:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=82)** Next, it's asking for a list of subnet IDs.
>
> **[1:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=87)** Now, why do we need these?
>
> **[1:29](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=89)** So VPC attachments must have at least one subnet associated with them.
>
> **[1:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=95)** The reason this is asking for a list is if you have subnets created in multiple availability zones, you would want to provide one of those subnets from each availability zone.
>
> **[1:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=108)** And last, we're just going to reference that ID that's generated once the TGW's created.
>
> **[1:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=115)** And what about routing?
>
> **[1:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=118)** So let's hop over to our public subnet configuration file, and for this configuration, I want to be able to reach my RFC 19.18.10. range, and I'm using the TGW ID to get there, and then I have this Quad Zero still installed for the internet egress and ingress as well.
>
> **[2:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=143)** And if I hop over to the private subnet, we're kind of doing the same thing here.
>
> **[2:27](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=147)** It's just we're swapping out the IGW ID for the NAT gateway ID.
>
> **[2:34](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=154)** So in order for our VPCs to talk, I need to attach VPC B also.
>
> **[2:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=161)** So I'm going to hop over to the main file for VPC B, and again, since these are separate folders and separate state files, I'm referencing the state file in our other VPC A directory so I can return the ID of the TGW, and if I hop over, I can see in the outputs, let's hop over to VP CA again and look at the outputs.
>
> **[3:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=186)** See, I have this TGW ID output here, so we're going to need that.
>
> **[3:13](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=193)** So hopping back over.
>
> **[3:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=198)** Since we already created the transit gateway, all we need to do in this scenario, we just need to attach it.
>
> **[3:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=206)** So this configuration is relatively similar to our VPC A configuration.
>
> **[3:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=213)** So I already ran Terraform right before the course started, since the transit gateway, it's one of those resources, it takes a few minutes to stand up.
>
> **[3:43](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=223)** It's a little slower than some of the other things we've been working with.
>
> **[3:47](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=227)** So let's do a quick test.
>
> **[3:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=229)** I'm logged into an EC2 instance in VPC A and VPC B.
>
> **[3:54](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=234)** So let's just ping and make sure that we have reachability.
>
> **[3:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=239)** So VPC A can reach VPC B, and VPC B can reach VPC A.
>
> **[4:07](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=247)** Success.
>
> **[4:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=249)** So what if we don't like the idea of all VPCs being able to talk in this full mesh scenario?
>
> **[4:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/scaling-the-network-with-terraform-and-transit-gateway?u=76281980&t=257)** In the next video, we're going to take a look at disabling propagation and using TGW route tables and route table associations to bring some control to our routing.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (15), tgw (8), rfc (1), igw (1), nat (1)
> **Code Keywords:** let (5), public (1), private (1)
> **CLI Commands:** terraform (2), make (1)
> **Versions:** 19.18.10 (1)
> **Cross-References:** in the next (1)
> **Documentation:** rfc (1)
> **Speakers:** - [instructor] (1)

#### Using segmentation with Transit Gateway and Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=0)** - [Instructor] Consider this, so far we have a VPC-A and a VPC-B, which are representative of a dev in a test environment.
>
> **[0:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=11)** If we think about network level segmentation let's just call these non-prod.
>
> **[0:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=17)** And as your organization continues to adopt cloud and you experience some level of growth, eventually you'll have production workloads out there as well.
>
> **[0:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=28)** And as you start to deploy more infrastructure and you begin to optimize for efficiency, many times you'll see a shared services space that's etched out for specific resources that are consumed by all the other VPCs.
>
> **[0:45](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=45)** So let's say that dev and test here are allowed to communicate with each other but we don't want them to communicate with prod.
>
> **[0:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=55)** And let's say that non-prod and prod both need reachability to our shared services space.
>
> **[1:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=64)** Let's work through this design with Terraform and Transit Gateway.
>
> **[1:09](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=69)** For this scenario, I have added two additional VPCs.
>
> **[1:14](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=74)** One to represent prod called VPC-C and one to represent our shared resources called VPC-shared.
>
> **[1:23](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=83)** I've updated the configuration of each of these VPCs, specifically the Transit Gateway VPC attachment, and what we're going to do here is we're going to disable route propagation and association on our attachments.
>
> **[1:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=99)** I've done this for all the VPCs.
>
> **[1:41](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=101)** And we're also going to, if we go to locals and we look at the ingress cidr list, we want to add the appropriate subnet cidr block that we want to allow in to communicate with our instances.
>
> **[1:55](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=115)** So in this case, I'm in VPC-C. This is prod.
>
> **[1:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=118)** So I only want to allow the shared resource subnet block.
>
> **[2:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=124)** Now if I went to VPC-A for instance and went to locals, I would be allowing the shared resource cidr block and the test cidr block.
>
> **[2:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=137)** Let's hop over to the VPC-shared.
>
> **[2:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=141)** Now, in the last video, we used the default route table created with TGW.
>
> **[2:28](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=148)** For this video, to meet these segmentation requirements we outlined earlier, we're going to provision additional route tables.
>
> **[2:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=155)** Each attachment to our VPC can be associated to only one route table.
>
> **[2:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=162)** It is worth noting that these route tables can actually hold multiple attachments even beyond VPC attachments.
>
> **[2:49](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=169)** So for the routes, I have a TF file created for non-prod, prod, and shared.
>
> **[2:56](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=176)** And if I zoom in on one of these, let's take a look.
>
> **[2:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=179)** We have the same theme going on in each one.
>
> **[3:01](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=181)** So first we're going to create the actual route table and then we are mapping the TGW attachment to the route table.
>
> **[3:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=192)** And then last, we're propagating our desired routes.
>
> **[3:16](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=196)** So I already ran Terraform to encompass all of these changes.
>
> **[3:21](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=201)** So let's go ahead and test.
>
> **[3:25](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=205)** I have a list of the private IPs here and I'm going to do a little split screen action.
>
> **[3:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=211)** So I'm logged into an EC2 instance and each one of these VPCs, so the one that you see right here is dev 10.5.
>
> **[3:40](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=220)** So with dev, we were supposed to be able to reach VPC-B test and VPC shared.
>
> **[3:51](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=231)** Okay, so we can reach test
>
> **[4:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=240)** and we can reach shared, but we shouldn't be able to reach prod.
>
> **[4:06](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=246)** Okay, and that's good.
>
> **[4:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=248)** So let's hop over to test.
>
> **[4:10](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=250)** And with test, we're supposed to be able to reach dev and VPC shared.
>
> **[4:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=258)** So we can reach dev and we can reach shared, but we shouldn't be able to reach prod.
>
> **[4:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=273)** And we can't reach prod. Great.
>
> **[4:35](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=275)** So going to prod, with prod we shouldn't be able to reach dev or test but we should be able to reach shared.
>
> **[4:50](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=290)** Okay, so I can't reach dev. Good.
>
> **[4:58](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=298)** I can't reach test. Good.
>
> **[5:05](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=305)** And I can reach shared. Great.
>
> **[5:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=308)** Now last is our VPC shared and I should be able to reach all of 'em.
>
> **[5:15](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=315)** Let's see, I can reach dev, I can reach test, I can reach prod.
>
> **[5:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=330)** All right, so all of our segmentation seems to be in order and we have route level isolation between non-prod, prod, and shared.
>
> **[5:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=339)** Transit Gateway is a powerful resource to have in the toolbox.
>
> **[5:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/using-segmentation-with-transit-gateway-and-terraform?u=76281980&t=344)** Since transitive routing isn't available with native VPC configuration, this combination of resources can help control routing and segmentation for inter region and intra region routing.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (15), tgw (2), ec2 (1)
> **Code Keywords:** let (9), this, (1), case, (1), private (1)
> **CLI Commands:** terraform (2)
> **Versions:** 10.5 (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)


### Conclusion

#### What comes next?
> [LinkedIn Learning](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=0)** - [Lecturer] This course represents the tip of the iceberg.
>
> **[0:04](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=4)** Yes, there is a lot more to explore and learn.
>
> **[0:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=8)** So what areas should you focus on next?
>
> **[0:12](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=12)** Network design and network automation are two very distinct disciplines.
>
> **[0:17](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=17)** I've brought together different aspects of each of these disciplines in this course with the goal of making the content practical for the real world.
>
> **[0:26](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=26)** Efficient automation is predicated on good network design.
>
> **[0:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=31)** Understand the platform you're automating and think through the design to ensure that it meets best practices and it provides the right set of capabilities.
>
> **[0:42](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=42)** Automation just isn't about making things go fast.
>
> **[0:46](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=46)** It's a valuable asset in maintaining the well thought out network design that meets the demands of the business.
>
> **[0:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=53)** All that I go over here that you're going to see will be linked in the course notes.
>
> **[0:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=59)** If you want a solid understanding of cloud networking, check out my course [[Hybrid Multicloud Networking- Practical Concepts]].
>
> **[1:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=68)** The cloud provider documentation is extremely detailed and is the first place I always look when I need to understand the behavior of a specific resource or design for any one of the cloud providers.
>
> **[1:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=82)** And explore.
>
> **[1:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=84)** Getting out there and just doing things is a fantastic way to learn.
>
> **[1:30](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=90)** Break things on purpose and see what it takes to fix them.
>
> **[1:33](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=93)** Most of the public cloud providers have a great free tier to experiment with.
>
> **[1:39](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=99)** On the automation side of things, the Terraform documentation is great.
>
> **[1:44](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=104)** The more you use Terraform, the more time you're going to spend here.
>
> **[1:48](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=108)** And seeing how others solve problems is also a great way to learn.
>
> **[1:53](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=113)** Check out the Terraform Registry specifically modules from top contributors.
>
> **[1:59](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=119)** Lastly, there is a plethora of LinkedIn learning courses around tooling and management that are great entry points.
>
> **[2:08](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=128)** I'll have all of these linked in the course notes.
>
> **[2:11](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=131)** So much is available for learning right at your fingertips and most of it is open source and free.
>
> **[2:18](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=138)** In this course, we focused on AWS, but what about Azure?
>
> **[2:22](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=142)** I have a challenge for you.
>
> **[2:24](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=144)** Take the things that you learned in this course and try and replicate in other cloud providers.
>
> **[2:31](https://www.linkedin.com/learning/terraform-managing-network-infrastructure/what-comes-next?u=76281980&t=151)** It won't be easy, but I believe you can do it.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (3), aws (1)
> **Definitions:** is a  (3)
> **Code Keywords:** public (1)
> **Env Vars:** aws (1)
> **Speakers:** - [lecturer] (1)


## Path Context

### In [[Network Automation Professional Certificate by Arista Networks]]
← [[Hybrid Multicloud Networking- Practical Concepts]] | **6 of 6**

## Part of

- [[Network Automation Professional Certificate by Arista Networks]]

## Appears In

- [[Network Automation Professional Certificate by Arista Networks]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Terraform]] — Terraform
- [[Learning Terraform]] — Terraform
- [[GitHub Copilot for System-Level Development]] — Infrastructure as code (IaC)

---

[↑ Back to top](#)