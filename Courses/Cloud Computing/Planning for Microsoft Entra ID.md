---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: planning-for-microsoft-entra-id
url: "https://www.linkedin.com/learning/planning-for-microsoft-entra-id"
duration_minutes: 95
duration: 1h 35m
level: Intermediate
updated: 7/22/2022
learners: 4424
skills:
  - Microsoft Entra ID
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEPd6fKLA-kVQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1581532448211?e=2147483647&amp;v=beta&amp;t=L68qVegIVaPGevsoSZR0jQSJk7cJcb4g-AQxCSB4OWA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]'
  - '[[Advance Your Skills with Microsoft Entra ID]]'
prev_courses:
  - '[[Microsoft Azure- Security Concepts]]'
  - '[[Microsoft Entra ID Fundamentals]]'
next_courses:
  - '[[Deploying Microsoft Entra ID]]'
  - '[[Deploying Microsoft Entra ID]]'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":4,"total":8,"prev":"Microsoft Azure- Security Concepts","next":"Deploying Microsoft Entra ID"},{"path":"Advance Your Skills with Microsoft Entra ID","position":2,"total":3,"prev":"Microsoft Entra ID Fundamentals","next":"Deploying Microsoft Entra ID"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/microsoft-entra-id
  - skill/microsoft-azure
status: not-started
created: 2026-04-21
---

![Planning for Microsoft Entra ID](https://media.licdn.com/dms/image/v2/C4E0DAQEPd6fKLA-kVQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1581532448211?e=2147483647&amp;v=beta&amp;t=L68qVegIVaPGevsoSZR0jQSJk7cJcb4g-AQxCSB4OWA)

# Planning for Microsoft Entra ID

> By establishing a hybrid identity infrastructure, you can support your on-premises infrastructure while also leveraging the latest features the cloud has to offer. In this course, join Kunal D Mehta as he steps through how to seamlessly integrate your on-premises infrastructure with Microsoft Entra ID (formerly Azure Active Directory) using Entra ID Connect. Kunal dives into the topic of hybrid id

> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id) | 1h 35m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kunal D Mehta]]

## Skills Covered

- Microsoft Entra ID
- Microsoft Azure

## Table of Contents

### Introduction

#### Hybrid identity
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=0)** - Welcome to my LinkedIn Learning course on Azure Active Directory Planning.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=4)** As you know, Azure Active Directory is an identity as a service built into Microsoft Azure.
>
> **[0:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=10)** Azure AD is modern, has tons of really cool features, and is the perfect solution for handling all of your identity needs.
>
> **[0:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=17)** But, most organization study have heavy investments in their on-premises based identity solutions.
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=23)** So throwing all that out and completely jumping onto Azure AD is not always possible.
>
> **[0:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=28)** That's why hybrid identity makes complete sense.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=31)** Let's understand that in a little more detail.
>
> **[0:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=34)** We know that Azure Active Directory is capable of handling the identities of all types of components.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=40)** You can create new cloud users, do Azure AD join for devices, and deploy a wide variety of applications, ranging from Legacy to Modern to Full Spectrum.
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=51)** So in a sense, what I'm trying to tell you, is that Azure AD is fully capable of handling users, groups, devices, and applications all on its own without any external support.
>
> **[1:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=63)** It can function as a completely independent unit.
>
> **[1:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=66)** But like I said, more often than not, there is an entire infrastructure already in place on-premises, tied to a local identity solution.
>
> **[1:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=76)** In Microsoft networks, it's most commonly Active Directory.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=80)** So we need to integrate Azure AD and the new server active directory in a way that allows them to work together and can unleash the raw power of both solutions.
>
> **[1:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=89)** In addition to that, the integration should be as seamless as possible for the existing users, groups, devices, and applications.
>
> **[1:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=98)** How do we do that?
>
> **[1:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=99)** We use the Azure AD Connect tool to establish seamless integration between the cloud and on-premises environments.
>
> **[1:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=106)** And this mixed environment is called a hybrid identity infrastructure, very good to support your critical Legacy stuff on-premises and at the same time, also leverages the latest, cutting edge cloud features to your advantage.
>
> **[1:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=119)** The goal of this course is to guide you to the planning needed for deploying a hybrid identity infrastructure introduction.
>
> **[2:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=126)** The majority of our focus is going to be on the AD Connect tool required to set this up.
>
> **[2:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=132)** My name is Kunal D Mehta.
>
> **[2:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=133)** I'm an independent IT consultant, specializing in Microsoft Data Center and cloud technologies.
>
> **[2:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=139)** It's an absolute honor to be your instructor today for this course on LinkedIn Learning.
>
> **[2:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=143)** I hope you enjoy watching this course as much as I've enjoyed making it for you.
>
> **[2:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=147)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1)
> **Definitions:** is an  (2), is called (1)
> **Prerequisites:** required to (1)
> **Speakers:** - welcome (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=0)** - [Narrator] Here are the prerequisites you'll need to derive the maximum benefit from this course.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=5)** First and foremost, I strongly recommend that you watch my previous course, I showed Active Directory:Basics, before beginning this course.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=13)** I've covered all the fundamentals of Azure AD over there, including the concept of Standalone and Hybrid Environments.
>
> **[0:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=19)** I then demonstrated how to create an Azure AD Tenant for a fictitious organization named world traveler TV, and also showcase how to add the custom domain world traveler.tv to that domain.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=31)** If you already know how to perform these tasks, then you may skip the previous course and directly begin with this one, or else I would insist that you watch the basics course first, and then come back to this planning course.
>
> **[0:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=43)** Great, now that we are clear with that, here's what you will need to make the best use of this course.
>
> **[0:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=49)** The intended target audience for this course is Windows Server Administrators, Azure Administrators and Identity Professionals who are looking for a deeper understanding of hybrid identity in the Microsoft world.
>
> **[1:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=61)** The prior knowledge required is like I said, it will be great if you have watched my previous course Azure Active Directory:Basics.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=69)** In addition prior knowledge of the AD Connect Tool Azure Administration and Windows Server Active Directory Administration is a plus.
>
> **[1:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=78)** And finally, if you want to perform the demonstrations you see in this course in your own lab environment, you will require the following resources: an Azure AD tenant with a custom domain added to it an Active Directory Domain Services server and a member server joined to the domain.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=94)** And please remember to do all practice in a test environment only.
>
> **[1:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=98)** Do not perform any task that you see here directly in a production environment.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), require (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Roadmap
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=0)** - Here's a road map of the topics we'll be covering in this course.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=4)** Ideally, onboarding onto Azure AD is a very straightforward and simple process if you're deploying a stand alone environment.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=11)** But when it comes to a hybrid environment, there are a few extra things you need to take care of before rolling out Azure AD in your organization.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=20)** There are a total of six chapters in this course, out of which, I've dedicated four chapters explaining precisely everything you need to know about AD Connect.
>
> **[0:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=29)** The chapter that you're currently watching is the "Introduction".
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=32)** Next is "AD Connect Fundamentals".
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=35)** This chapter should give you a comprehensive knowledge of the AD Connect tool, it's internal functioning, and its supporting components.
>
> **[0:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=44)** Then, we have the "Planning for Users and Devices" chapter.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=47)** This should help you build a strategy for synchronizing users and groups that complies with and suits your organization policies.
>
> **[0:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=55)** Once the concept and strategy are clear, we'll then start "Preparing the Environment" needed for AD Connect, focusing on each component and how to configure it.
>
> **[1:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=64)** Finally, deploying the AD Connect tool.
>
> **[1:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=67)** In this chapter, we'll install the AD Connect tool based on the strategy design in the previous chapters.
>
> **[1:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=73)** We'll then wrap up this course in the "Conclusion" chapter by doing a quick review of all the key take aways you've learned so far and explore steps for further learning.
>
> **[1:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=83)** That's the end of this chapter.
>
> **[1:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=85)** Let's move onto the next.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Prerequisites:** configure (1), install (1)
> **Definitions:** is a  (1)
> **Speakers:** - here (1)


### 1. Entra ID Connect Fundamentals

#### Entra ID Connect overview
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=0)** - [Instructor] Let's start with our first core chapter, AD Connect Fundamentals.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=5)** Here we shall get a deeper understanding of what AD Connect does, features it supports, how it works under the hood and get to know additional tools included with the AD Connect installation.
>
> **[0:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=16)** As you know by now, the AD Connect tool serves as the foundation for hybrid identity infrastructure in a Microsoft network.
>
> **[0:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=24)** Its primary job is to integrate, or in other words, to create a bridge between on-premises Windows Server Active Directory and Azure Active Directory.
>
> **[0:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=33)** This bridge facilitates the synchronization of active directory objects from the on-premises environment to Azure.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=40)** Including users, groups and computers.
>
> **[0:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=44)** One specialty of an overloop, is the bidirectional flow of configuration changes.
>
> **[0:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=49)** By that, I mean AD Connect not only synchronizes from on-premises to Azure, but also the other way round.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=56)** But not objects, configuration changes.
>
> **[1:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=60)** Such as configuration changes made in Azure AD can propagate back to on-premises Windows Server Active Directory.
>
> **[1:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=67)** We'll talk more about this soon.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=70)** And then AD Connect uses a SQL Server database to store all its metadata.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=75)** This database is probably the most crucial part of this entire setup.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=80)** And finally, the AD Connect tool is built up of three internal components.
>
> **[1:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=84)** Each of which has a dedicated function to perform.
>
> **[1:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=87)** To add to that, you also get supporting tools installed with the AD Connect tool to optimize your setup further.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=94)** We'll talk more about this as well in the upcoming videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), function (1)
> **Prerequisites:** setup (2)
> **Env Vars:** sql (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Deployment configurations
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=0)** - [Instructor] Deployment configurations are those that determine how to deploy AD connect depending on your Active Directory forest Topology.
>
> **[0:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=8)** The deployment strategy changes based on different topologies.
>
> **[0:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=12)** Let's understand how?
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=13)** So here's your Active Directory forest Topology, the AD Connect Server and the Azure AD Tenant.
>
> **[0:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=19)** Ideally for one forest, you'd have one AD Connect Server and one corresponding Azure AD Tenant.
>
> **[0:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=26)** The ratio is usually one is to one is to one.
>
> **[0:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=30)** So if you had multiple forests, you would need an equivalent number of AD Connect Servers and Azure AD Tenants.
>
> **[0:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=37)** This is called, "A simple Deployment Configuration."
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=40)** Now, just like everything else, there are exceptions here as well.
>
> **[0:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=44)** The second type of Deployment Configuration you can have is, "Converging."
>
> **[0:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=48)** Here you take multiple smaller forests and consolidate their objects into a single or fewer number of Azure AD Tenants.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=56)** This is helpful when you want to streamline management by aggregating the objects spread across multiple forests by bringing them together in one place.
>
> **[1:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=65)** The third type of Deployment Configuration is, "Diverging."
>
> **[1:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=68)** Here you take one huge forest and break it down into multiple-smaller, more manageable Azure AD Tenants.
>
> **[1:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=76)** This is helpful when you want to streamline management by segregating the objects of one forest into multiple smaller units.
>
> **[1:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=83)** There is no right or wrong answer here.
>
> **[1:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=86)** Choosing any one of these configurations is entirely subjective and depends on what suits you.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=92)** Quite commonly, a Simple Configuration works for pretty much most organizations.
>
> **[1:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=97)** But if Converging or Diverging configuration make sense to you, by all means, feel free to implement it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), else, (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Rules for integration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=0)** - [Instructor] In the last video, you saw three different types of deployment configurations, simple, converging, and diverging.
>
> **[0:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=7)** Depending on your active directory topology, you should design and finalize a deployment configuration that is custom-made for your organization.
>
> **[0:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=16)** But in the process of doing that, you need to keep two rules in mind.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=20)** You must comply with these or your setup can fail.
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=23)** The first rule states that the ratio of AD Connect servers to Azure AD tenants should be one is to one.
>
> **[0:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=30)** Let's see some examples to understand this better.
>
> **[0:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=33)** I want you to focus only on the AD Connect server and the Azure AD tenant for now.
>
> **[0:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=39)** Forget the forest topology.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=40)** Example number one, this is not allowed, because the ratio is one is to three, one AD Connect server trying to synchronize to three Azure AD tenants.
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=51)** This will not work.
>
> **[0:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=53)** Next, example two.
>
> **[0:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=55)** This is also not allowed, because the ratio is three is to one, three AD Connect servers all trying to synchronize into one Azure AD tenant.
>
> **[1:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=65)** This will also not work.
>
> **[1:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=67)** Then comes example number three.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=69)** This is allowed, because the ratio is one is to one.
>
> **[1:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=73)** There is one AD Connect server for each instance of an Azure AD tenant.
>
> **[1:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=78)** It doesn't matter how many of them are present as long as the ratio of one is to one is maintained.
>
> **[1:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=83)** So that was rule number one.
>
> **[1:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=86)** Now let's look at the second rule.
>
> **[1:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=89)** This states that each unique object in a forest should only synchronize to one Azure AD tenant.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=95)** It basically means that one object can only exist in one Azure AD tenant and not multiple Azure AD tenants.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=102)** Let's see some examples again to understand this better.
>
> **[1:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=106)** I want you to focus on the forest topology and the AD Connect server only.
>
> **[1:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=110)** Forget the Azure AD tenant for now.
>
> **[1:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=113)** Example number one, this is not allowed, and that's not because of the ratio.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=118)** The rule of one is to one ratio does not apply to this side of the equation.
>
> **[2:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=123)** The reason why this will not work is because a single object is going to three AD Connect servers for synchronization.
>
> **[2:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=130)** Each unique object should only go to one destination, and there cannot be copies of the same object.
>
> **[2:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=136)** So that's a no.
>
> **[2:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=138)** Let's look at another example.
>
> **[2:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=140)** This is allowed, because each unique object is only going to one AD Connect server for synchronization, so this is perfectly fine.
>
> **[2:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=150)** Let's see another example.
>
> **[2:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=152)** This is also allowed, because objects from multiple forests consolidate into one AD Connect server for synchronization, so there's no chance of having multiple copies of an object or a possible conflict.
>
> **[2:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=165)** I hope you will remember both the rules for integration.
>
> **[2:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=169)** But just so that you do, I'm reiterating them for you.
>
> **[2:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=173)** Rule number one suggests this ratio should be one is to one.
>
> **[2:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=177)** And rule number two suggests each unique object should only synchronize to one Azure AD tenant.
>
> **[3:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=184)** Keep these in mind while designing a deployment configuration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** basically means (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Component architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=0)** - [Instructor] Here is the component architecture of the AD Connect tool.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=4)** My intention here is to give you an understanding of how the synchronization process happens internally in AD Connect.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=11)** Although having this knowledge is not immediately necessary for deployment, it is extremely helpful in troubleshooting and designing a complex deployment configuration consisting of multiple forests and tenants.
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=23)** As I've mentioned before, AD Connect, consists of three components.
>
> **[0:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=28)** The Health component, the Synchronization Engine, or in short, the Sync Engine, and the ADFS component.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=35)** The Health component reports the health status of the AD Connect deployment to Azure.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=40)** We talk more about this in a later chapter.
>
> **[0:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=43)** The ADFS component talks to the ADFS server for implementing identify federation across on-premises and cloud environments.
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=51)** Keeping both of those aside, I will focus in this video is going to be on the Sync Engine.
>
> **[0:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=57)** The Sync Engine further consists of three parts.
>
> **[1:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=60)** I understand if that's a bit confusing but bear with me.
>
> **[1:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=63)** The three parts are, the Metaverse, a left Connector Space, and a right Connector Space.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=69)** The left Connector Space connects to Windows Server Active Directory through a connector.
>
> **[1:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=74)** The right Connector Space connects to Azure AD through another connector.
>
> **[1:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=78)** The connector on the left is responsible for implementing filtering, basically performing a check of which objects should synchronize and which objects shouldn't.
>
> **[1:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=88)** We learn more about filtering in the later part of this chapter.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=92)** Now let's assume that this object qualifies for synchronization based on the applied filtering.
>
> **[1:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=98)** AD Connect marks such an object with a Source Anchor attribute.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=102)** It does that for all objects that qualify for synchronization, but for this explanation, I'm assuming there's only one such object and making it more straightforward and easy for understanding.
>
> **[1:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=113)** The Source Anchor is used by AD Connect to identify identical objects across on-premises and the cloud.
>
> **[1:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=119)** The next step, after adding the Source Anchor attribute, is to import the object into the left Connector Space.
>
> **[2:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=126)** There is one Connector Space per forest.
>
> **[2:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=128)** So if were to now converting deployment configuration, there would be more than one left Connector Space.
>
> **[2:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=134)** This imported object is then subjected to incoming synchronization rules, or ISR.
>
> **[2:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=141)** These rules determine which attributes of the object are carried forward to the Metaverse and which attributes are stripped down.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=149)** Once that's done, the object reaches the Metaverse.
>
> **[2:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=152)** The Metaverse is the brain of the Sync Engine.
>
> **[2:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=155)** If there are multiple forests, object from all Connector Spacess are consolidated here, deduplicated, if there are duplicate accounts for a user, organized, and then committed to the SQL Server Database.
>
> **[2:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=167)** These objects are then further subjected to outgoing synchronization rules, or OSR.
>
> **[2:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=173)** These rules determine which attributes of the object are carried forward further to the right Connector Space.
>
> **[2:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=179)** The attributes that you strip down are maybe those that were required in the Metaverse, but are not required in Azure AD.
>
> **[3:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=186)** Once that's done, the object reaches the right Connector Space.
>
> **[3:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=190)** This is where all the objects scheduled for synchronization in the next cycle are stored on a temporary basis, and when the time comes, they're all exported to Azure AD.
>
> **[3:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=202)** This is called a full synchronization, where for the first time, the entire object synchronizes to Azure AD.
>
> **[3:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=208)** It's an incredibly sophisticated mechanism.
>
> **[3:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=211)** It drastically reduces the possibility of conflicts, or errors.
>
> **[3:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=215)** This procedure is followed for all qualifying objects that undergo synchronization.
>
> **[3:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=221)** At the end of that, the connector and the Connector Spaces are flushed out for the next batch of synchronization.
>
> **[3:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=227)** If you modify any object on-premises, there's a link established between these objects so that only the changes are propagated to Azure AD and not the full object again.
>
> **[3:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=237)** This is called a data synchronization.
>
> **[4:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=240)** If we assume that this entire AD Connect server blows up, and you have to setup a new one from scratch, that's not going to be a big problem, because we already have the Source Anchors in place.
>
> **[4:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=251)** So a new AD Connect server can quickly map objects on-premises with the corresponding copies in the cloud using this Source Anchor attribute.
>
> **[4:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=259)** It will then rebuild its database and take over the operations.
>
> **[4:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=263)** This is how AD Connect works under the hood.

> [!info]- Semantic Content
>
> **Env Vars:** adfs (3), isr (1), sql (1), osr (1)
> **Definitions:** is called (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Supporting tools
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=0)** - [Narrator] When you install AD Connect, you also get a bunch of tools along with it to modify the default synchronization behavior.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=6)** I like to call them supporting tools, there are mainly four tools you need to know.
>
> **[0:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=12)** First is the AD Connect wizard.
>
> **[0:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=14)** This is a nifty little utility that lets you modify basic AD Connect settings after the installation, things like changing the sign and method or enabling a feature that wasn't enabled during the initial installation.
>
> **[0:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=27)** So any piece of setting that you saw during the first installation and want to change it to something else later, this wizard can do that.
>
> **[0:36](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=36)** This tool is one of those that is probably used the most frequently after implementing AD Connect.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=42)** The next three tools are only needed for configuring advanced functionalities of AD Connect, majority of customers will probably not need them, but being aware of the fact that they exist and what they do is something everyone should know.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=56)** So the next tool is the Synchronization Service Manager.
>
> **[1:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=60)** This is one of those tools that you can survive not knowing that it exists.
>
> **[1:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=64)** But once you do know, things would just feel incomplete without it.
>
> **[1:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=68)** Using the Synchronization Service Manager you can manually add more left connectors, view data stored in them and flush them out.
>
> **[1:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=77)** You can also search the Metaverse by querying objects from its database, manually starting a full or a delta synchronization, creating your own custom objects for synchronization to Azure AD and getting verbose statistics into the synchronization cycles.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=93)** You can do a lot of stuff here.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=95)** This is a weapon of mass synchronization.
>
> **[1:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=98)** Then comes the next tool Synchronization Rules Editor.
>
> **[1:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=103)** Now, if you remember, in the previous video on Component Architecture, you understood that Incoming Synchronization Rules or ISR apply to objects passing from the left connector space to the Metaverse and Outgoing Synchronization Rules or OSR.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=118)** Apply to objects passing from the Metaverse to the right connector space.
>
> **[2:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=123)** These default rules for both import and export are automatically generated during the installation.
>
> **[2:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=129)** And Microsoft recommends that you do not change them.
>
> **[2:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=132)** So if you want to add your own custom incoming or outgoing synchronization rules, this tool will be the place to go to.
>
> **[2:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=140)** And then the last tool Web Service Configuration Tool.
>
> **[2:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=144)** This is primarily a developer tool.
>
> **[2:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=147)** It is used to build your own custom connectors for synchronization objects between supported data sources and data sources that are not supported by AD Connect.
>
> **[2:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=157)** If you're an IT Ops professional, then chances are that you will never need it.
>
> **[2:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=162)** So don't worry too much about this one.
>
> **[2:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=164)** These were the four supporting tools arranged in the order of how frequently you may require them.
>
> **[2:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=169)** And with that, we've come to the end of this chapter.
>
> **[2:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=172)** Take a quick quiz.
>
> **[2:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=174)** I'll see you in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** isr (1), osr (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (2)
> **Code Keywords:** require (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 2. Planning for Users and Devices

#### Password hash synchronization
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=0)** - [Instructor] Welcome to Planning for Users and Devices.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=4)** In this chapter, we'll understand how synchronizing to Azure AD can impact the behavior of objects or the nature of administration for users and devices.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=13)** So, in order to make sure that there are no surprises, you need to plan for them and have a well-defined strategy.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=20)** So, let's see what that encompasses.
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=23)** There are three types of sign-in methods that you can configure for users in your organization during the AD Connect installation.
>
> **[0:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=30)** Those are Password Hash Synchronization, Pass-Through Authentication, and the Active Directory Federation Services Authentication.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=40)** Which one to choose largely depends on what your organization's policy is when it comes to handling passwords.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=47)** Let's take a look at each one of them starting with Password Hash Synchronization.
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=51)** On the left, we have the Active Directory Domain Controller, in the middle an AD Connect Server, and on the right Azure AD.
>
> **[0:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=59)** The synchronization here works in a way that along with the user objects being sent their corresponding password hashes are also sent to the cloud and stored there.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=70)** In fact, not the password hash technically speaking.
>
> **[1:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=74)** The password hash in Windows server is rehashed, sent over an HTTPS connection.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=80)** Once it reaches Azure AD, it is unhashed so the password hash hash just becomes hash now, and then this password hash is again rehashed with a different algorithm and stored in the cloud, which is much more secure.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=94)** I know, probably a little confusing, but you don't have to worry about the underlying details.
>
> **[1:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=99)** Now, imagine a user who is trying to access a resource on-prem.
>
> **[1:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=103)** You know how it works, it's simple.
>
> **[1:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=105)** Their password is verified against the password hash stored in the domain controller on premises.
>
> **[1:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=110)** If they tried to access a resource on the cloud, the process is again similar.
>
> **[1:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=115)** They enter their passwords on the Azure log-in screen, which is then verified against the password hash stored in Azure AD.
>
> **[2:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=122)** If the authentication is successful and the user is found to be authorized, they get access to the resource they need.
>
> **[2:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=129)** Here are the pros and cons of using this method: since Azure AD has its own copy of password hashes, it can allow access to cloud resources without being dependent on the on-premises infrastructure.
>
> **[2:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=142)** It only needs the connection in between for incoming synchronization of new objects or updates to existing objects.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=149)** So, what I'm trying to say is that dependency of the business availability is very low on the on-premises infrastructure.
>
> **[2:36](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=156)** A failure of the on-premises identity servers or the connection in between does not impact accessibility in Azure AD.
>
> **[2:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=164)** In terms of additional infrastructure required to implement Password Hash Synchronization is also not a lot.
>
> **[2:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=170)** The resources needed to set up AD Connect are sufficient for this as well, so it has low infrastructure requirements.
>
> **[2:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=178)** Another advantage is that it supports Seamless Single Sign-On, and this really adds so much convenience and value to the whole sign-in experience of end users.
>
> **[3:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=187)** Using this, users only need to sign into their domain join devices.
>
> **[3:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=192)** After that, they are automatically signed in to the resources they need irrespective of if it's on the cloud or on-premises.
>
> **[3:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=199)** The experience is seamless.
>
> **[3:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=202)** Now, the only con here is that the password hashes are stored in the cloud.
>
> **[3:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=207)** This is not exactly a con, but not everyone is comfortable with their passwords stored in the cloud, given the security pattern where that unfortunately still exists around the concept of cloud.
>
> **[3:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=218)** Another problem could be that maybe your policies strictly require passwords to be stored in the country or your own data centers.
>
> **[3:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=226)** In that case, this sign-in method is probably unsuitable.
>
> **[3:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=230)** But otherwise, this is the best and the cloud-first-oriented method out there.
>
> **[3:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=235)** You get all the modern cloud features powered by artificial intelligence and machine learning.
>
> **[4:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=240)** This would be my number one choice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1), this, (1), require (1), case, (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Env Vars:** https (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Entra ID FS Authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=0)** - [Instructor] Let's move on to the second sign in method, the Active Directory Federation Services Authentication.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=6)** Here, in addition to the domain controller, you will also need an ADFS server and a WAP application proxy.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=13)** All of them present On Premises.
>
> **[0:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=15)** The synchronization here works in such a way that only user objects are synchronized to the Cloud but their password hashes are not.
>
> **[0:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=24)** Password hashes are stored only On Premises, not in the Cloud.
>
> **[0:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=28)** This is an important differentiating factor, remember that.
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=32)** The way for a user to authenticate locally is pretty much the same as before but if a user tries to authenticate to Azure AD, the whole logging session is redirected to the On Premises servers.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=45)** They enter the password, which is validated against Windows Server Active Directory present On Premises.
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=51)** At no point during this process does the password even touch Azure AD.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=56)** If the authentication is successful, a token is passed on to Azure AD and if the user is found to be authorized, they get access to the resource they wanted.
>
> **[1:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=66)** Here are the pros and cons of this method.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=69)** The only borderline advantage here is that the password hashes are stored On Premises.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=75)** Organizations that are either paranoid about Cloud security or have a policy requirement to store passwords On Premises can leverage this method.
>
> **[1:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=84)** The cons outweigh the pros.
>
> **[1:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=87)** One, it only comes with federated single sign on which is messy and not as efficient as seamless single sign on.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=95)** Then, a lot of additional On Premises infrastructure is need to set this up.
>
> **[1:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=100)** As you can see in the diagram, you need an ADFS server and also a WAP application proxy server in addition to the AD connect server.
>
> **[1:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=108)** And the last con is that since all sign in requests have to be validated by On Premises servers, it has a high dependency on the On Premises servers.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=118)** If the identity servers On Prem Go down, all the connection in between fails, it can disrupt user sign ins and affect business continuity.
>
> **[2:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=126)** You should only choose this method if you see a real need for it.
>
> **[2:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=130)** As opposed to the password hash synchronization method, this is predominantly an On Premises first oriented method and as a result, you cannot leverage most of the modern features offered by Azure AD here.

> [!info]- Semantic Content
>
> **Env Vars:** adfs (2), wap (2)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Pass-through Authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=0)** [Narrator] The third sign in method is Pass-Through Authentication.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=4)** This is kind of a blend of the previous two methods, if I may dare say that.
>
> **[0:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=9)** Similar to the ADFS method, the passwords are not syncronised to the cloud, when a used attempts to sign in on premises, the process is pretty much the same, but if they try to authenticate in The Cloud Azure AD facilitates the log-in process It accepts the password, hashes it, and adds it to a temporary queue to be processed for authentication.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=31)** At the same time, there's a Pass-Through Authentication agent installed on premises, on the AD connect server, listening for queued authentication requests, in Azure AD.
>
> **[0:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=41)** If it finds that there is a request to be processed, it fetches it, and validates it against on premises Active Directory.
>
> **[0:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=48)** The whole process happens so fast, that it's almost as if the password just passes through Azure, on its way to on premises.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=56)** The important point to note here is that Azure AD does not store this password hash, it only holds onto it momentarily, until the on premises agent fetches it from there; hence the name: Pass-Through.
>
> **[1:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=68)** If the authentication is successful, and the user is found to be authorized, they get access to the required resource.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=75)** The password at this stage does not exist in the Azure AD queue anymore. It's gone from there.
>
> **[1:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=81)** Now, the pros and cons.
>
> **[1:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=83)** The pro is, as you may have observed, that the password hashes are stored on premises, just like the last ADFS method.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=91)** They are not synchronized to Azure AD.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=94)** Then infrastructure requirements are also low, unlike the last method where you needed an extra ADFS server and WAP.
>
> **[1:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=101)** Third, it supports Seamless Single Sign-On.
>
> **[1:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=104)** Just like the password hash synchronization method does.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=107)** Even though passwords are stored on prem and not in Azure AD, it still supports Seamless, Single Sign-On.
>
> **[1:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=114)** Just like password hash synchronization method does.
>
> **[1:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=117)** Which is great.
>
> **[1:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=119)** And the one and only con is that it is again highly dependent on the on premises infrastructure.
>
> **[2:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=125)** Any failure in the on prem servers or the connection in between them, sign ins will start to fail.
>
> **[2:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=131)** So what Microsoft also allows you to do is set Pass-Through Authentication as the primary sign in method, but also enable password hash synchronization as a back up method.
>
> **[2:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=141)** In such cases, if the primary method fails you can quickly switch to the password hash sync method, and ensure business continuity.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=149)** So to sum up, this method is for those customers who want to embrace The Cloud but are partly skeptical about it as well.
>
> **[2:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=157)** Like I said, this is a blend of the previous two methods, and offers the balance of control between going full-blown cloud, or full-blown on premises.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), switch (1)
> **Env Vars:** adfs (3), wap (1)
> **Analogies:** just like (3), similar to (1)
> **Definitions:** is a  (2)
> **UI Navigation:** switch to (1)

#### Defining user strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=0)** - [Instructor] Those of us who manage users in a traditional Windows Server-based on-premises environment are used to a certain way in which Active Directory objects behave and operate.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=11)** But when you synchronize to Azure AD, some things change.
>
> **[0:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=15)** My goal in this video is to make you aware of what behavior or administration techniques defer when managing users in the cloud so that you can map those changes and know when to take what action.
>
> **[0:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=27)** We just learned that there are three types of sign-in methods: password hash synchronization, pass-through authentication, and ADFS authentication.
>
> **[0:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=37)** You also know that there are three types of users in Azure AD: federated, synchronized, and cloud only.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=45)** If you don't know what these three are, I've covered that in my previous course, Azure Active Directory Basics.
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=51)** Please go watch that.
>
> **[0:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=53)** But coming back, the question arises, how are the users categorized into these three types?
>
> **[0:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=59)** Here's how.
>
> **[1:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=60)** If you're using PHS or PTA, which is password hash synchronization or pass-through authentication, as the sign-in method, what you get in Azure AD are basically called synchronized users.
>
> **[1:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=72)** If the sign-in method is ADFS, then what you get are federated users.
>
> **[1:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=77)** Technically, federated users also populate into Azure AD only after being synchronized through Azure AD.
>
> **[1:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=84)** But since they are way too on-premises-oriented, they lack several functionalities that synchronized users possess.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=91)** That's why we count them as separate types.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=93)** Then the third type of users are cloud users that you can see on the right.
>
> **[1:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=99)** These are natively created in Azure AD and are not synchronized from anywhere.
>
> **[1:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=104)** The previous two types of users originate on premises.
>
> **[1:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=108)** Great, so those are the type of users.
>
> **[1:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=110)** Now, what about groups?
>
> **[1:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=112)** You will primarily see two main types of groups.
>
> **[1:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=115)** There will be others as well, but these are the main ones: security groups and Office 365 groups.
>
> **[2:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=122)** I've covered them as well in the previous course.
>
> **[2:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=125)** Synchronized or federated users both preserve their group memberships on synchronization because the security groups those users belong to on premises also synchronize.
>
> **[2:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=136)** So what you get is the same set of users in the same set of security groups in Azure AD, as they were on premises.
>
> **[2:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=144)** The structure of users and groups is maintained in the cloud.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=149)** And both the security groups and Azure AD for synchronized users are static in nature as opposed to dynamic because the concept of dynamic groups is non-existent on Windows Server, so you cannot have synchronized groups that are dynamic in nature.
>
> **[2:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=165)** Now, synchronized users and their groups or federated users and their groups co-exist along with the cloud users and Office 365 groups that were natively created in the cloud.
>
> **[2:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=177)** Of course, you can also have security groups that were natively created in the cloud and they can be dynamic in nature because they are native to the cloud and are not synchronized.
>
> **[3:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=188)** Knowing where an object originates is vital for its management.
>
> **[3:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=192)** For all synchronized objects, the source of authority or, in other words, the place where you modify them is Windows Server Active Directory On-Premises.
>
> **[3:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=202)** Any changes you make to those objects propagate through AD Connect onto Azure AD and automatically reflect in their cloud counterparts.
>
> **[3:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=211)** On the other hand, all objects native to the cloud are modified in the cloud.
>
> **[3:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=215)** But because our focus in this course is on hybrid, let's talk a little bit more about these hybrid objects.
>
> **[3:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=223)** As I said, the primary place to modify hybrid objects is Active Directory On-Premises.
>
> **[3:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=229)** Next, hybrid objects are not exactly identical to their on-premises counterparts.
>
> **[3:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=234)** They have mixed attributes, which means attributes that were picked up from Windows Server as well as attributes that were patched onto it by AD Connect for making it compatible with Azure AD.
>
> **[4:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=246)** And AD Connect is quite intelligent that way.
>
> **[4:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=249)** It automatically excludes default built-in accounts that serve no purpose in the cloud, like built-in administrators and built-in groups.
>
> **[4:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=258)** So only necessary objects and attributes are synchronized to Azure AD.
>
> **[4:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=263)** Next, as mentioned, all users retain their group memberships because their parent groups are also synchronized.
>
> **[4:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=271)** So users and the groups they belong to, or groups and their members, will look the same in both cloud and on premises.
>
> **[4:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=278)** One thing that's different, and this is important, is that hierarchy of organizational units, or OUs, is lost in synchronization.
>
> **[4:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=287)** Because Azure AD is a flat hierarchy, the concept of OUs does not exist here.
>
> **[4:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=293)** There is something called an administrative unit, but that serves a slightly different purpose.
>
> **[4:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=298)** And yes, another crucial point.
>
> **[5:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=301)** Administrators on premises do not automatically detain their administrative privileges in the cloud after synchronization.
>
> **[5:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=309)** This is by design, keeping security in mind.
>
> **[5:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=312)** Just because a user is an administrator on prem does not necessarily mean that they need administrative rights also in the cloud.
>
> **[5:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=321)** But if they actually do, not a problem.
>
> **[5:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=323)** A global administrator account can manually assign the appropriate administrative rights to the relevant users.
>
> **[5:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=330)** Finally, once synchronization completes, I encourage you to go to the User Management page in Azure AD and explore the user profile of all synchronized users.
>
> **[5:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=340)** Compare it with those of cloud users.
>
> **[5:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=343)** See what you can do and cannot do for different types of users.
>
> **[5:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=347)** Play around a little bit because all these little things are not something that can be planned entirely in advance.
>
> **[5:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=354)** Sometimes you slowly observe, learn, and fine-tune the process according to your needs.
>
> **[6:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=360)** And I completely understand if this was too much information, but don't be too overwhelmed by it.
>
> **[6:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=365)** Once you actually get your hands on it, it becomes easier.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), static (1), let (1), finally, (1)
> **Env Vars:** adfs (2), phs (1), pta (1)
> **Definitions:** in other words (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Defining device strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=0)** - [Instructor] Just like you planned for users and groups in the last video, you also need to plan for their devices.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=6)** You know there are three types of users, Federated, Synchronized and Cloud only.
>
> **[0:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=12)** For managing devices, you have three options.
>
> **[0:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=15)** Now, let's split them into Cloud native and non-Cloud native users.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=20)** Then, for managing devices, you have three options, Hybrid Azure AD join, Azure AD join, and Device Registration.
>
> **[0:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=29)** If you do not know these terms, please watch my previous course.
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=32)** There's a lot of good stuff that I've covered there.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=35)** Coming back, the method of choice for managing devices of Federated and Synchronized users is Hybrid Azure AD Join.
>
> **[0:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=44)** For Cloud users, Azure AD Join and Device Registration is the way to go.
>
> **[0:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=49)** The question is, why?
>
> **[0:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=51)** Now, if you give this a thought, you will probably figure out why.
>
> **[0:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=55)** It's so that they have a common source of authority for management.
>
> **[0:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=59)** You can have Federated users or Synchronized users and their devices managed on premises.
>
> **[1:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=65)** Cloud users and their devices can be managed in the cloud.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=69)** What you see here is not a hard and fast rule, it's just a matter of convenience and efficiency.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=75)** And again, because our focus in this course is on hybrid, let's learn more about Hybrid Azure AD Join.
>
> **[1:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=82)** This is a device which is joined to the domain on premises, which you're all familiar with, but also auto-joined to Azure AD.
>
> **[1:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=90)** This brings you the best of both worlds for managing such devices.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=93)** You can either manage them with the traditional group policy methods, System Center Configuration Manager, or a combination of configuration manager and Intune.
>
> **[1:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=104)** So, interim or cloud solutions.
>
> **[1:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=106)** The sign-in can be through traditional passwords, or through the modern Windows Hello feature.
>
> **[1:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=112)** With this, you also get single sign-in to both cloud and on-premises resources which is really convenient for the end-users.
>
> **[2:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=120)** If you are using Password Hash Synchronization or Pass Through Authentication for synchronized users, you can also get Seamless Single Sign-on.
>
> **[2:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=129)** With Federated users, you just get Federated Single Sign-on.
>
> **[2:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=134)** And, brace yourselves, this is my favorite part, Hybrid Azure AD Join supports the enforcement of Conditional Access policies on devices.
>
> **[2:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=142)** If you don't know what Conditional Access is, it is by far one of the coolest features of Azure AD, which also has been explained in my previous course.
>
> **[2:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=151)** Finally, the time to implement Hybrid Azure AD Join.
>
> **[2:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=155)** Like I said in my last video, don't try to plan and implement too much together.
>
> **[2:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=160)** Start with user synchronization first, get familiar with it, and once you're comfortable with it, then implement this for devices.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), pass (1), finally, (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Filtering objects
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=0)** - [Narrator] Once we've figured out the plan for user and device strategy the next item on our to do list should be filtering.
>
> **[0:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=7)** So what is filtering?
>
> **[0:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=10)** It is the process of choosing which objects are allowed to synchronize to Azure AD and which objects are not.
>
> **[0:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=16)** A typical active directory forest consists of at least a few thousand objects.
>
> **[0:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=21)** And it's not necessary that all of them must go up in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=26)** For example, service accounts, temporary local accounts, vendor accounts, and so on.
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=32)** It just doesn't make sense for them to be in Azure AD.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=35)** And if we do end up synchronizing them, let's say by accident, there will be an overhead on our AD connect server, it's database, and probably it may end up costing us additional licensing fees.
>
> **[0:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=48)** And that's why filtering is important.
>
> **[0:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=50)** Now let's take a look at the four matters of filtering that are available in AD Connect.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=56)** The first is domain based filtering.
>
> **[0:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=59)** Second, OU based filtering.
>
> **[1:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=61)** Third, group based filtering.
>
> **[1:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=63)** And the fourth, attribute based filtering.
>
> **[1:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=66)** The ideally configured domain based filtering in multi-domain environments.
>
> **[1:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=71)** A diverging configuration is a very good scenario for it.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=75)** A big forest with multiple domains split across multiple Azure AD tenants.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=80)** In a way that objects in domain one go to tenant one, objects in domain two go to tenant two and so on.
>
> **[1:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=87)** This is done through filtering at the domain level.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=91)** You can exactly pick the domains you want to include in the synchronization and ones that you want to exclude.
>
> **[1:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=97)** You can configure this either during the initial installation or after by using the AD Connect Wizard or the Synchronization Service Manger.
>
> **[1:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=106)** Next, since a significant number of environments today are single forest and single domain, that makes OU based filtering the most popular and preferred method of filtering.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=118)** This means you can implement it in a single domain or a multiple domain environment, all types of environments.
>
> **[2:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=124)** - You can include OU's which should be synchronized and excluded OU's which should not be synchronized.
>
> **[2:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=130)** Similar to the domain based filtering, you can configure this during the initial installation, or after by using the AD Connect Wizard or the Synchronization Service Manger.
>
> **[2:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=141)** Moving on the group based filtering.
>
> **[2:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=143)** This is only supposed to be used for test environments.
>
> **[2:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=147)** Please keep that in mind.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=149)** This is so that you can select a small group of people, synchronize them to Azure AD and see if everything works according to the plan.
>
> **[2:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=157)** Because it is intended for test deployments only, you can only choose one group to synchronize and only when running the AD Connect Installation for the very first time.
>
> **[2:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=167)** This group that you choose is also called a pilot group.
>
> **[2:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=171)** After you finish all the testing you need to switch to one of the other methods for filtering.
>
> **[2:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=177)** One more important point to remember, is that Microsoft does not support this filtering method in production.
>
> **[3:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=183)** So you won't be able to call them and ask for help if this is what you're using.
>
> **[3:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=187)** And then lastly, comes the attribute based filtering.
>
> **[3:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=191)** This is more suitable for advanced environments.
>
> **[3:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=194)** It gives you a very granular control over what goes into Azure AD.
>
> **[3:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=198)** You can filter objects by creating rules or conditions that scrutinize objects down to ever single attribute.
>
> **[3:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=205)** It's more complicated but it also gives you a lot more control into the synchronization process.
>
> **[3:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=211)** This is typically configured after the AD Connect Installation from the Synchronization Rules Editor.
>
> **[3:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=218)** So these are the four types of filtering methods, along with scenarios on when to use them.
>
> **[3:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=223)** Apart from this what you need to know is that you can use more than one method at a time.
>
> **[3:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=228)** And when you do there is an implicit And condition applied between them.
>
> **[3:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=233)** So only those objects, which fulfill all conditions will go through.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), similar to (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [narrator] (1), - you (1)
> **CLI Commands:** make (1)

#### Understanding writeback
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=0)** - [Instructor] We know that synchronization happens from Windows server Active Directory to Azure AD, but I also mentioned in the overview video that there's a bidirectional flow of data in AD Connect.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=11)** I hope you remember that.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=13)** This is called a writeback, when configuration from Azure AD is sent back to active directory on premises.
>
> **[0:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=21)** Now, how does this make sense?
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=23)** Mainly, there are three things that can be configured to be written back, and those are passwords, devices, and groups.
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=32)** Password writeback is necessary to implement self-service password reset for users, also commonly known as SSPR.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=40)** On-premises users did not have any out-of-the-box solution for password resets.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=45)** They always had to involve the help desk for it, but Azure AD has a self-service password reset capability, so users can reset their passwords in Azure AD, and the new password can then be written back on premises through writeback for consistency.
>
> **[1:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=60)** Or else, you'd end up with two different passwords in two different environments, but that doesn't happen here, and it's a synchronous operation.
>
> **[1:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=68)** That means the writeback happens instantaneously.
>
> **[1:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=71)** It does not wait for a scheduled time.
>
> **[1:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=73)** And because it is synchronous, Azure AD can validate the new password on the spot against on-premises password policies to enforce compliance.
>
> **[1:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=82)** So you can be confident that Azure AD is not accepting any passwords that go against your on-premises policies.
>
> **[1:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=90)** Next is device writeback.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=92)** This is mainly for Azure AD joined devices.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=95)** Mind you, not hybrid, but only Azure AD joined devices.
>
> **[1:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=99)** This is useful in situations where users with Azure AD joined devices need to access ADFS-protected applications on premises, because, by default, the scope of operation of an Azure AD joined device wouldn't extend back on premises.
>
> **[1:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=115)** So if you need to extend its scope to on premises, the device would need to be written back.
>
> **[2:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=121)** And only when the on-premises infrastructure recognizes this device, then it will allow access to the ADFS-protected applications.
>
> **[2:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=128)** As of today, there is a technical limitation with device writeback.
>
> **[2:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=132)** It is only supported in a single-forest environment.
>
> **[2:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=136)** If you have multiple forests, you cannot use this feature.
>
> **[2:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=140)** But I'm hoping that this may change in the future.
>
> **[2:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=142)** I'm not sure, but right now, single forest only.
>
> **[2:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=146)** And finally comes the group writeback feature.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=149)** This is mainly for environments where exchange server is deployed in a hybrid architecture.
>
> **[2:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=155)** It is used to bring the collaboration that's available in Azure AD with Office 365 Groups into the on-premises environment.
>
> **[2:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=163)** So the same level of collaboration that is in the cloud is now brought to on premises.
>
> **[2:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=168)** The catch here is that it only works for Office 365 Groups.
>
> **[2:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=172)** You cannot write back a security group in Azure AD to on premises.
>
> **[2:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=177)** That does not happen.
>
> **[2:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=178)** So I hope you've understood the purpose of writeback and how this helps make your infrastructure more efficient.
>
> **[3:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=184)** This brings us to the end of this chapter and halfway through the course.
>
> **[3:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=189)** Congratulations on making it this far.
>
> **[3:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=191)** Go get some coffee, take a little quiz, and then let's roll into the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** self (2), protected (2), else, (1), default, (1), let (1)
> **Env Vars:** adfs (2), sspr (1)
> **Definitions:** is called (1), known as (1), is a  (1)
> **CLI Commands:** make (2)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)


### 3. Preparing the Environment

#### Preparing Windows Server AD
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=0)** - [Narrator] Now, let's talk about preparing the environment needed for successfully installing AD Connect on Premises.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=6)** If you have ever deployed products like exchange, share point, or system center, you are going to find this to be quite simple.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=13)** That's because AD Connect isn't very demanding when it comes to installation prerequisites or resources.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=20)** A few simple tweaks here and there, and you should be ready.
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=23)** So, let's see what those are.
>
> **[0:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=25)** First, let us very specially define the components that need repairing.
>
> **[0:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=30)** Basically, everything that AD Connect depends on, or interacts with.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=35)** The list includes the domain controller running the ADDS role, the server on which we will be installing the AD Connect tool, it's sequence sever database, firewall rules for allowing communication and synchronization among the components, and the Azure AD Tenant.
>
> **[0:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=52)** So, these are essentially the four or five components that need repairing.
>
> **[0:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=57)** In this video, let's focus on the first component, the Active Directly Domain Services Sever.
>
> **[1:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=63)** I would recommend having at least Windows server 2012 R2 or above on all your domain controllers across the forest.
>
> **[1:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=71)** Microsoft's official documentation suggest that you can also use all the versions, but then the features that you can enable in AD Connect become limited.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=80)** So, it's good to have at least Windows server 2012 R2 or above, and even better, if it has the latest updates installed, because depending on which version of AD Connect you're deploying, it may have a dependency on a patch or a hot fix.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=95)** So, a fully updated server would be ideal.
>
> **[1:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=98)** Then, the AD Connect server needs to have access to a right able domain controller on site.
>
> **[1:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=104)** A read only domain controller will not work.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=107)** It's because, if you remember, the AD Connect server needs to add the source and code to object before synchronization.
>
> **[1:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=114)** It won't be able to do that if the DC is read only.
>
> **[1:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=117)** The next step here is not required, but I strongly recommend that you do it.
>
> **[2:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=122)** Download and run the ID fix tool.
>
> **[2:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=125)** This Microsoft utility helps you clean up your list of active directory users.
>
> **[2:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=130)** You can sanitize and remove unused, disabled, or unnecessary accounts before synchronization, so that those don't end up in Azure AD.
>
> **[2:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=140)** Next, enable active directly, the recycle bin.
>
> **[2:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=144)** This is a precautionary step, so that in case an account is accidentally deleted, you can still recover it.
>
> **[2:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=150)** After these come the critical steps.
>
> **[2:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=153)** First, you need to add an UPN suffix to active directly domains and trusts that corresponds to the domain verified in Azure AD, because typically, on Premises domains are local and not publicly routable.
>
> **[2:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=167)** Synchronizing using this domain can lead to problems.
>
> **[2:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=171)** So, to avoid that, we add the verified domain as the UPN suffix on Premises, and then begin the synchronization, and when the domains match, things work as expected, and remember, just adding the UPN suffix is not enough.
>
> **[3:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=187)** You need to also change it for all the users that are to be synchronized.
>
> **[3:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=191)** For a small number of users, you can do it manually from the users and computer's MMC.
>
> **[3:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=196)** For bulk, you can use power share, and finally, what we need is a service account for synchronization.
>
> **[3:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=203)** This is the account that will have access to the list of users in Windows server active directory, and will synchronize them to Azure AD through AD Connect.
>
> **[3:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=213)** The AD Connect installation wizard makes it easier for us to create and configure this account during the install automatically.
>
> **[3:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=220)** So, we don't need to worry about this in advance, but if you want, you can create it beforehand, and that's pretty much it when it comes to preparing Windows Server Active Directory.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), match, (1), finally, (1)
> **Env Vars:** upn (3), adds (1), mmc (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1), install (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Demo: Preparing Windows Server AD
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=0)** - [Instructor] Now, let's see a demo on preparing Windows Server Active Directory.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=5)** Here I am on my domain controller.
>
> **[0:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=8)** The Computer Name is wttvdc01.
>
> **[0:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=12)** Under Domain is wttv.local.
>
> **[0:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=16)** Now, one of the first things that you will have to do is download and run the IdFix tool, but since I'm running a test environment, I do not have the need to run the IdFix tool because my list of users is already sanitized, but let me show you how to do it.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=31)** Open your browser, search for download IdFix, and one of the first links should be the one we are looking for.
>
> **[0:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=39)** Click on that.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=40)** It gets you to a nice, little documentation, but the link that we are looking for is for the download.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=47)** As you can see, here is the download link.
>
> **[0:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=48)** I'm going to click on it, and the download should instantaneously finish.
>
> **[0:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=53)** Your next step will be to run this tool.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=56)** I'm going to skip past it, and move onto the next step, and that is enabling Active Directory Recycle Bin.
>
> **[1:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=64)** For that, I'll have to go to the Active Directory Administrative Center, click on the domain that we have, which is wttv and on the right side, you should see an option, which says Enable Recycle Bin.
>
> **[1:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=76)** I'm going to click on that.
>
> **[1:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=77)** It'll give me a warning.
>
> **[1:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=78)** It says if you enable Active Directory once, you cannot disable it.
>
> **[1:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=83)** I'll be fine with that, so I'm going to click on the OK button.
>
> **[1:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=86)** Now it takes a couple of seconds for it to enable this in the background.
>
> **[1:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=90)** I'm just going to click on the OK button while that happens in the background.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=93)** Now our next step will be to add the UPN suffix corresponding to the Azure AD domain.
>
> **[1:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=99)** For that, I will have to go to the Active Directory Domains and Trusts, right-click on this, and go to its Properties.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=107)** Here you get the option to add an alternative UPN suffix.
>
> **[1:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=110)** Now my Azure AD domain is worldtraveler.tv.
>
> **[1:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=117)** I'll add that as a UPN suffix, click on the apply button, and then OK.
>
> **[2:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=122)** Now remember, just adding the UPN suffix is not sufficient.
>
> **[2:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=126)** You will also have to go to the Active Directory Users and Computers, and make sure you change them on all the users that you have.
>
> **[2:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=133)** I'll show you one example.
>
> **[2:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=134)** I'll click on my account, go to its Properties, go to the Account tab, and from the User logon name, change the UPN suffix to worldtraveler.tv, click on the Apply button, and OK.
>
> **[2:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=149)** Now this was for one user.
>
> **[2:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=151)** You will have to repeat this step for all users.
>
> **[2:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=154)** If you have a small number of users, then you can do it manually, using the user interface or if you have a bulk of users, you can also do this through PowerShell.
>
> **[2:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=163)** Now as far as provisioning a service account for Azure AD Connect is concerned because the installation wizard allows us to create that one of the fly during the installation, we'll not do that right now.
>
> **[2:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=174)** Let's move onto the next component, which needs to be prepared.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), go to (4), right-click (1)
> **Code Keywords:** let (3), for. (1), this, (1), interface (1)
> **Env Vars:** upn (5)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Preparing the Entra ID Connect server
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=0)** - [Instructor] All right, now let's talk about the second component, the AD Connect Server.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=5)** Like I previously mentioned, the AD Connect tool is not very demanding in terms of prerequisites and has a very moderate resource footprint.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=13)** To deploy it you will need Windows Server 2012 R2 or above with the latest updates installed for the same reason we discussed in the previous slide.
>
> **[0:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=23)** This server should preferably be a domain-joined member.
>
> **[0:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=27)** It can be a stand alone server but then there will be additional configurations.
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=32)** So this is simpler.
>
> **[0:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=34)** Next it needs to have a full GUI installation of Windows Server.
>
> **[0:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=38)** You cannot use NANO Server or Server Core.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=42)** As far as security is concerned, you should protect the AD Connect Server equivalent to how you'd protect a domain controller, because the AD Connect's database also has critical identity information just like your domain controller.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=56)** So secure it properly.
>
> **[0:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=58)** And having a rough estimate of the number of objects to be synchronized will be helpful in determining how powerful the hardware specifications of the server need to be.
>
> **[1:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=68)** For example, if you have about 100k objects, then a 1.6 gigahertz processor with 16GB RAM and 100GB free hard disk space would be sufficient.
>
> **[1:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=79)** Next comes the AD Connect database.
>
> **[1:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=82)** You can use the free SQL Server Express Edition as the database, but only if the number of objects is less than 100k, or the database size does not exceed 10 gigabytes.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=94)** If you go beyond either one of these limits, then you'll need to purchase a license for SQL Server Standard or Enterprise Edition.
>
> **[1:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=101)** The Express Edition comes built in to the AD Connect installation wizard, so we don't have to prepare that in advance.
>
> **[1:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=109)** You just need to make sure that the hardware and software requirements for SQL Server Express are met.
>
> **[1:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=114)** But in case you're using Standard or Enterprise Edition of SQL Server, you will need to have it installed and ready before installing AD Connect.
>
> **[2:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=122)** I recommend using at least SQL Server 2012 R2 or above with the latest updates.
>
> **[2:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=129)** If you are installing SQL Server manually, make sure that the collation is case-insensitive, denoted by CI in its name.
>
> **[2:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=137)** You can install SQL Server on the same server along with AD Connect, or deploy it separately on another server, depending on whatever suits your requirements.
>
> **[2:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=148)** But for low latency in the synchronization process, installing them together on one server is recommended.
>
> **[2:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=155)** And lastly, use one database for each instance of the sync server.
>
> **[2:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=159)** Do not try to share the database among multiple sync servers, or try to have more than one database for a single sync server.
>
> **[2:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=167)** That's all you need to know for the AD Connect Server and its database.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), gui (1), nano (1), ram (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** you'll need (1), install (1)
> **Code Keywords:** let (1)
> **Versions:** 1.6 (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** recommended (1)

#### Demo: Preparing the Entra ID Connect server
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=0)** - [Instructor] Now, let's see a demo on Preparing the AD Connect Server.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=5)** So here I am on the member server on which we will install the AD Connect tool.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=11)** As you can see the computer name is AAD connect.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=13)** And it is already joined to the domain WDTV.local.
>
> **[0:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=18)** Now there is not a law that we have to do here.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=20)** But we'll just make sure that all the requirements are fulfilled.
>
> **[0:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=24)** One: It's is domain joined, and it is a full URL installation, and server cord or a nano server.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=31)** And the number of objects that we have for synchronization is about 10.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=35)** So which means, I will be able use the default SQL Server express installation that comes along with AD Connect installation.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=42)** But in case you had more than 100K object what you will have to do is, you'll have to pre-install the SQL Server by searching for SQL Server 2019.
>
> **[0:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=52)** And then installing the edition which makes sense to you.
>
> **[0:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=55)** Either Data Center or Standard.
>
> **[0:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=58)** But we'll not be doing that because we will be using the SQL Server express.
>
> **[1:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=62)** So these are the basic checks that you have to perform on the server that will be hosting the AD Connect tool.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), aad (1), wdtv (1), url (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Preparing the firewalls and ports
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=0)** - [Instructor] The third component is the firewalls.
>
> **[0:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=3)** Yes, not one, but a few.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=5)** The exact number will depend on if you have a twofold or a threefold configuration.
>
> **[0:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=10)** If you install AD Connect and the database on the same server, then you will have a twofold configuration of the firewalls: one between the AD Connect server and the domain controller, the other between the AD Connect server and Azure AD.
>
> **[0:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=25)** But if you install the database on a separate server, then you will have a threefold configuration.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=31)** You'll also have to take care of the communication between the AD Connect server and its database.
>
> **[0:36](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=36)** For this, the ports that need to be open are the standard SQL port of 1433 or whatever custom port you're using between AD Connect and its database.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=47)** For communication between the AD Connect server and Azure AD, all you need are the standard HTTP and HTTPS ports open, 80 and 443, which are mostly open anyway.
>
> **[1:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=60)** So, you don't have to do anything extra for this.
>
> **[1:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=63)** And lastly, between the AD Connect server and the domain controller, you need ports for DNS, Kerberos, LDAP, LDAP/SSL, and SMB, basically 53, 88, 389, 636, and 445.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=80)** Part form these, there are two more ports which are the RPC and the Microsoft RPC ports, but they are dynamic and automatically taken care of.
>
> **[1:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=88)** Now, an important note to make here is that most of these rules can be configured by the AD Connect installation automatically if you're using the Windows firewall.
>
> **[1:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=97)** The only reason why I'm listing all the port numbers here are so that in case you are using a third-party firewall, you will have to take care of these ports manually.
>
> **[1:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=106)** But if it is the Windows firewall, then you don't have to do a lot.
>
> **[1:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=110)** We'll see that in the demo.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (2), rpc (2), sql (1), http (1), https (1)
> **Code Keywords:** this, (1), this. (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Warnings:** important note (1)
> **Speakers:** - [instructor] (1)

#### Demo: Preparing the firewalls and ports
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=0)** - [Narrator] Now let's see a demo on preparing the firewalls and ports.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=6)** Now I'm back on the domain controller, to make sure the ports required for the AD connect installation are open.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=13)** Ideally you wouldn't have to worry about this if you're using the Windows firewall, but you still need to know what ports to open in case you're using a third party firewall software.
>
> **[0:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=24)** To ensure that the ports we require are open let's go to windows firewall with advanced security, go to inbound rules, search for the appropriate ports.
>
> **[0:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=34)** Now one of the first ports required was the DNS, let's search for DNS.
>
> **[0:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=39)** So DNS on port 53, TCP, and UDP are both enabled.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=45)** That's great.
>
> **[0:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=46)** The next port was Kerberos let's search for that.
>
> **[0:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=50)** So here you can see Kerberos on port 88, TCP and UDP are again both enabled.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=56)** That's great as well.
>
> **[0:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=57)** Next we have to make sure that LDAP is open, so you can see here LDAP on port 389, TCP, and UDP are again both enabled.
>
> **[1:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=67)** Along with LDAP, secure LDAP also needs to be open on port 636.
>
> **[1:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=74)** Which is again enabled, that's great.
>
> **[1:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=76)** And finally we needed the SMB port, let's search for that.
>
> **[1:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=81)** As you can see here SMB port 445 for file and printer sharing is also open and enabled.
>
> **[1:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=88)** Apart from these essential ports, there are two other ports.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=91)** The RPC and the Microsoft RPC ports which are basically random, so as far as the inbound rules for the domain controller are concerned, they appear to be all taken care of.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=102)** But if you're using a third party firewall make sure these ports are open.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=107)** Now let me switch to the AD connect server.
>
> **[1:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=110)** So here I am on my AD connect server, let me open the Windows firewall with advanced security here and go to outbound rules.
>
> **[1:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=119)** We just need to make sure outbound rules for port 80 and for 43 are open, so that the AD connect server can talk to Azure AD.
>
> **[2:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=127)** Now you don't have to really worry about these ports because again we're using the Windows Firewall, and AD connect installation can take care of most of the rules which are required for its successful deployment.
>
> **[2:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=138)** You'll only have to pay attention to these particularly if you're using a third party firewall.
>
> **[2:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=143)** In addition to that if your SQL server is on a remote server then you also need to make sure that the port 1433, or any other custom port that you're using is also open.
>
> **[2:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=154)** With these three ports your AD connect server is taken care of.
>
> **[2:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=158)** Now let's move on to the next component.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (4), dns (3), tcp (3), udp (3), smb (2)
> **Code Keywords:** let (8), require (1), switch (1)
> **Ports:** port 53 (1), port 88 (1), port 389 (1), port 636 (1), port 445 (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3), switch to (1), open the (1)
> **Speakers:** - [narrator] (1)

#### Preparing the Entra ID tenant
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=0)** - [Instructor] The final component that needs prepping is the Azure AD tenant.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=5)** Nothing complicated just a few simple points to keep in mind and implement accordingly.
>
> **[0:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=10)** First, you should know that if you do not have a custom domain added and are using the temporary on [microsoft.com](https://microsoft.com) domain, then the limit for synchronization is set to 50 k objects, I would suggest using this option only for test environments, if you add a custom domain and verified, then the limit is bumped up to 300 k objects.
>
> **[0:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=32)** That's a significant upgrade.
>
> **[0:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=34)** If your organization is even bigger than that, under limit of 300 K is not sufficient, then you can contact Microsoft support and bump this number up to 500 K.
>
> **[0:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=44)** But let's imagine even that number isn't enough, then you will have to purchase Azure AD licenses and get rid of the upper limit.
>
> **[0:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=52)** So depending on how many objects will be synchronized, you need to ensure your Azure AD tenant is ready to accept that incoming synchronization successfully.
>
> **[1:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=61)** Apart from this, you'll also need a global administrator account, created in the cloud for enabling AD Connect to communicate with Azure AD for initial synchronization.
>
> **[1:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=72)** This does not have to be a service account, it can be a regular account that we use for administration.
>
> **[1:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=78)** The only important point to note here, is that this global administrator account should have the verified domain and it's UPN.
>
> **[1:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=86)** And that's it.
>
> **[1:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=87)** These are the components you need to prepare for at Connect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Env Vars:** upn (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Demo: Preparing the Entra ID tenant
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=0)** - [Instructor] Now, let's see a demo on preparing the Azure AD Tenant.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=5)** Here I am in the Azure AD portal.
>
> **[0:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=8)** For those of you that have not watched my previous course, let me quickly catch you up to speed on what we did back there.
>
> **[0:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=15)** First I created a new Azure AD tenant and named it WorldTravellerTV.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=20)** After that, we went to the Domain section and added a new domain, worldtraveller.tv, verified it, and also set it as primary.
>
> **[0:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=30)** The third step that we performed was add a whole bunch of users there.
>
> **[0:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=34)** Because the assumption there was that we were building a standalone Azure AD deployment.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=40)** But because in this course we are doing a hybrid deployment, what I did before this demo was delete all the users and cleared them in Windows Server Active Directory.
>
> **[0:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=50)** And in the next demo we will be synchronizing those users from Windows Server into Azure AD.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=56)** And since we have a verified domain our object limit currently stands at about 300K which is more than sufficient as of now.
>
> **[1:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=65)** Now in order to successfully deploy AD connect, I will need a global administrator account created in the domain that we just verified.
>
> **[1:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=73)** As you can see this is the account we used to sign up for Azure and create this Azure AD tenant.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=80)** But the problem with this account is that it ends with @[outlook.com](https://outlook.com).
>
> **[1:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=84)** We need a global administrator account that ends with @worldtraveller.tv because this account will not work for the Ad Connect installation.
>
> **[1:36](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=96)** Let me click on New User to create a new user which has @worldtraveller.tv in its username.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=102)** So let me click here.
>
> **[1:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=104)** I want to create a new user, not invite.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=107)** So this selection is fine.
>
> **[1:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=109)** Type my name, kunalaadcazureadconnect@worldtraveller.tv.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=118)** Name, then fill in the other required information which is the full name, kunal d mahalda and AADC.
>
> **[2:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=129)** Just to mark this account as one which is required to set up AD Connect.
>
> **[2:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=134)** First name Kunal, last name D Mehita, AADC.
>
> **[2:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=142)** And then scroll down.
>
> **[2:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=144)** Let me create the password.
>
> **[2:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=146)** I give it a password of my choice then scroll down further.
>
> **[2:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=151)** I don't have to worry about the groups right now, but instead of a user, this account has to be assigned with the global administrator privileges, so I'm going to click on user, scroll down a little bit, select the global administrator role, and click on the select button.
>
> **[2:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=169)** So you see the role assigned to this account is currently the global administrator role.
>
> **[2:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=173)** Now everything else can be filled at a later stage.
>
> **[2:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=176)** For now let's click on the create button at the bottom.
>
> **[3:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=180)** So Chrome asks me do I want to save this?
>
> **[3:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=182)** No, I don't want to save these credentials.
>
> **[3:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=185)** So global administrator account created with the worldtraveller.tv domain has now been created.
>
> **[3:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=191)** This account will be used for the AD connect installation in the next demo.
>
> **[3:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=196)** All right, with that, we've reached the end of this chapter.
>
> **[3:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=200)** Let's take a quick quiz and then proceed to the chapter we've all been waiting for, deploying AD Connect.
>
> **[3:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=206)** I'll see you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (1), for, (1)
> **UI Navigation:** click on (4), scroll down (3), select the (1)
> **Env Vars:** aadc (2)
> **Cross-References:** in the next (2)
> **Prerequisites:** required to (1), set up (1)
> **URLs:** [outlook.com](https://outlook.com) (1)
> **Speakers:** - [instructor] (1)


### 4. Deploying Entra ID Connect

#### Deployment methods
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=0)** - [Narrator] The chapter we've all been waiting for, Deploying AD Connect.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=5)** You already know what going to happen here.
>
> **[0:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=7)** So, without any further ado, let's jump right in.
>
> **[0:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=10)** When you start installing AD Connect, the wizard gives you two deployment methods to choose from.
>
> **[0:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=16)** The Express Mode or the Custom Mode.
>
> **[0:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=19)** You need to pick one and begin the installation process.
>
> **[0:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=22)** Now, which one should we choose?
>
> **[0:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=24)** The answer to that question lies in the differences between the two modes.
>
> **[0:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=28)** Here's how they are different from one another.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=31)** Express Mode is essentially running through the installation with all the Microsoft default settings.
>
> **[0:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=37)** So, it's quicker.
>
> **[0:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=38)** On the other hand, the Custom Mode is highly customizable.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=42)** You can choose exactly what you need for each setting, and so it's a bit more time consuming.
>
> **[0:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=48)** Express Mode is ideal for single forest environments.
>
> **[0:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=52)** Whereas the Custom Mode can be used for either single or multi-forest environments.
>
> **[0:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=58)** Express Mode is suitable when the number of objects for synchronization is less than 100k.
>
> **[1:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=64)** On the other hand, Custom Mode can be used when the number of objects is less or greater than 100k.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=70)** That's because Express Mode uses the default SQL Express instance for its database.
>
> **[1:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=76)** But in Custom Mode, you can pick your own SQL Server instance, that could either be a SQL Express edition, Standard or even an Enterprise edition.
>
> **[1:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=85)** The Express Mode, by default, enables Password Hash Synchronization for the sign-in method.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=91)** But, with the Custom Mode you can select any one, either Password Hash Synchronization, Pass-through Authentication or ADFS Authentication for sign-in.
>
> **[1:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=101)** And finally, Express Mode works when you are installing AD Connect on a domain-joined member server.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=107)** But, the Custom Mode works when the server is either domain-joined or even a standalone server.
>
> **[1:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=113)** So these are the key differences between the Express Mode and the Custom Mode in AD Connect.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=118)** You need to pick whichever mode is more compatible with your existing environment.

> [!info]- Semantic Content
>
> **Code Keywords:** for, (1), let (1), from. (1), default, (1), pass (1)
> **Env Vars:** sql (3), adfs (1)
> **Speakers:** - [narrator] (1)

#### Demo: Installing Entra ID Connect
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=0)** - [Instructor] Okay, so let's see a demo on installing AD Connect.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=4)** I'll use the Custom Mode to show you precisely what you need to configure.
>
> **[0:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=8)** But if you wish, you can try the Express Mode in your own test environment.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=13)** It should be more straightforward than the Custom Mode.
>
> **[0:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=17)** So here I am on the AD Connect server.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=20)** And without wasting any more time, let's quickly jump into the AD Connect installation.
>
> **[0:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=25)** To do that, I'll have to open the Azure AD portal, scroll down a little bit, and click on Azure AD Connect.
>
> **[0:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=33)** On this page, you should see a download link for downloading Azure AD Connect tool.
>
> **[0:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=39)** So I'm going to click on this link which will take me to the download section for downloading the Azure AD Connect tool.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=45)** I'm going to click on this Download button.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=47)** It should take a few seconds for the download to complete.
>
> **[0:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=50)** And once complete, I'm going to run this.
>
> **[0:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=53)** Let me just minimize all other windows in the meantime, take this to the center.
>
> **[0:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=58)** So here's the AD Connect installation wizard.
>
> **[1:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=61)** On this page, I will mark this checkbox which says I agree to the license terms and privacy notice.
>
> **[1:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=67)** Click on the Continue button.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=69)** Here is the second page.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=70)** You have two options here, either use the Express Settings, which is basically the Express Mode, or use the Customize button, which is the Custom Mode.
>
> **[1:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=80)** You can also see a description of what will be configured if you choose the Express Setting.
>
> **[1:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=85)** We won't be using that in this course.
>
> **[1:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=87)** We'll be using the Custom Mode.
>
> **[1:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=89)** Clicking on that takes me to the next page.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=92)** As you can see, there are a lot of configuration options.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=95)** I can either choose a custom location for the AD Connect installation or let it be the default.
>
> **[1:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=101)** I can also choose an existing SQL Server installation on the local server or a remote server.
>
> **[1:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=107)** I also have an option to use an existing service account instead of creating a new one during the installation.
>
> **[1:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=113)** You can choose and configure whichever setting is appropriate for your deployment and then click on the Install button.
>
> **[2:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=120)** Here, it installs all the prerequisites that it needs to support its function.
>
> **[2:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=125)** Now, because we didn't choose an existing SQL Server installation, what it does right now is install SQL Server Express as its database.
>
> **[2:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=134)** Once that is complete, it brings us to the User sign-in page.
>
> **[2:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=138)** On this page, you can see the three primary sign-in methods that we discussed in the previous videos.
>
> **[2:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=145)** There's the Password Hash Synchronization, there's the Pass-through authentication, and there's AD FS authentication.
>
> **[2:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=152)** Now, these last two options are only useful if you're using a third-party solution for user sign-in.
>
> **[2:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=158)** With Password Hash Synchronization and Pass-through authentication, you also have the option to enable single sign-on, which is Seamless Single Sign-On.
>
> **[2:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=167)** If I select the Federation with AD FS, you can see that the Enable single sign-on button grays out.
>
> **[2:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=173)** For my deployment, I'm going to select the Password Hash Synchronization method, enable single sign-on, and click on Next.
>
> **[3:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=181)** On this page, I have to enter my global administrative credentials that we just created in Azure AD.
>
> **[3:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=188)** Let me type that in, kunalaadc @worldtraveller .tv, and put in my password, and click on Next.
>
> **[3:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=201)** It will connect to Microsoft Azure to validate my credentials and if successful, it will move on to the next step.
>
> **[3:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=207)** It should take about a few seconds for this to complete.
>
> **[3:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=210)** You can see the stages of all the checks it's performing down.
>
> **[3:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=214)** Great, so if you get to the next step, that means the authentication of that account was successful.
>
> **[3:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=219)** Now, I will have to establish a connection of AD Connect with my on-premises directory.
>
> **[3:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=225)** For that, I'll click on the Add Directory button here.
>
> **[3:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=228)** This is the page that asks you if you want to use an existing account on premises to be used as a service account or do you want the wizard to create a new service account for you?
>
> **[3:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=238)** Now, because in my previous demos, I did not create a service account, I'm going to select the Create new AD account option and provide my enterprise admin credentials so that the installation wizard is able to create that account.
>
> **[4:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=251)** Now, that is WTTV/administrator, and here's the password.
>
> **[4:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=259)** Click on OK.
>
> **[4:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=260)** Now, if the credentials are successful, you will see that this directory gets added here, under the CONFIGURED DIRECTORIES section.
>
> **[4:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=268)** If you want to add more forests, you can do that from this dropdown if you have that option, or else, click on Next.
>
> **[4:36](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=276)** On this page, you can see a list of all the domains that were successfully mapped between the on-premises Active Directory and Azure AD.
>
> **[4:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=284)** You can see here worldtraveller.tv.
>
> **[4:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=286)** The upn suffix that we added is also verified and available in Azure AD.
>
> **[4:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=292)** And the userPrincipalName on premises will also be used as the user principal name in Azure AD.
>
> **[4:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=298)** Now, as long as one domain is matching, you can proceed with the installation.
>
> **[5:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=303)** You just have to click this checkbox and click on the Next button.
>
> **[5:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=306)** Here is the Domain and OU Filtering page.
>
> **[5:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=310)** So you can either select all domains and OUs for synchronization or custom-select the specific ones that you want to be synchronized.
>
> **[5:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=318)** I'm just going to select all and click on the Next button.
>
> **[5:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=322)** Now, if you had duplicate identities existing across multiple forests, then you can use an attribute to consolidate such accounts and create a single unique account for all search users.
>
> **[5:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=334)** But because I don't have duplicate accounts, I should be perfectly fine using this first option which is Users are represented only once across all directories.
>
> **[5:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=343)** The second part of this page deals with the source anchor.
>
> **[5:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=347)** I will just let Azure manage the source anchor.
>
> **[5:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=350)** You already know what a source anchor does.
>
> **[5:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=352)** Leave all the defaults on this page and click on the Next button.
>
> **[5:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=356)** This is the page where you can configure group-based filtering for your pilot deployments.
>
> **[6:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=361)** So if you don't want to synchronize all users and devices, you can select the second option here and enter a group name, which should be synchronized to Azure AD.
>
> **[6:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=370)** Remember, this can only be used in a pilot deployment or a test deployment, and not in a production environment.
>
> **[6:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=377)** I'm just going to select all users and devices and click the Next button.
>
> **[6:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=381)** Here are the list of optional features that you can enable in addition to what's already been configured.
>
> **[6:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=388)** I'm not going to make any changes on this page as of now.
>
> **[6:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=390)** I'm simply going to click on the Next button.
>
> **[6:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=393)** In order to enable single sign-on, I will have to supply a domain administrator account in order to configure this.
>
> **[6:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=400)** Now, because I'm in a test environment, I'll just enter my credentials and click on the OK button.
>
> **[6:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=407)** You can see there's a green arrow here, which is a good sign, so I'll click on the Next button again.
>
> **[6:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=412)** So we are almost ready to go.
>
> **[6:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=415)** The moment I click on the Install button, the synchronization process will kick off.
>
> **[6:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=419)** But instead of doing that, what I can also do is uncheck the checkbox here, which says Start the synchronization, and then click on Enable staging mode.
>
> **[7:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=429)** Just remember this option for now, the staging mode.
>
> **[7:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=432)** In the upcoming clips, I'll explain to you what exactly it does.
>
> **[7:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=435)** But for now, I'll just kick off the synchronization process.
>
> **[7:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=438)** To do that, I'll click on the Install button.
>
> **[7:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=441)** So this is the part that will take a few minutes, depending on how many user accounts you have in your on-premises directory.
>
> **[7:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=448)** It will take care of all the background processes and services required to configure a successful synchronization.
>
> **[7:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=454)** So instead of keeping you waiting, what I will do is I will pause here and then bring you back once this installation is successfully complete.
>
> **[7:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=462)** After the installation completes, this is the screen you should see.
>
> **[7:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=466)** If you read, it says Configuration complete.
>
> **[7:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=469)** Azure AD Connect configuration succeeded.
>
> **[7:51](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=471)** The synchronization process has been initiated.
>
> **[7:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=475)** Now, in case you don't see this screen and you face some errors, then go back to the prerequisites and make sure all the prerequisites needed are met because most of the times, that is where the fault lies.
>
> **[8:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=487)** But if you didn't get any errors and you completed everything successfully like the demo over here, then absolutely great.
>
> **[8:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=493)** You're ready to move on.
>
> **[8:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=495)** To complete this, I'll just click on the Exit button and exit the wizard.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (20), select the (4), checkbox (3), open the (1), scroll down (1)
> **Code Keywords:** let (6), this. (2), pass (2), continue (1), default. (1)
> **Prerequisites:** configure (5), install (4), required to (1)
> **Env Vars:** sql (3), wttv (1), configured (1), directories (1)
> **CLI Commands:** make (2)
> **Cross-References:** we discussed (1), go back to (1)
> **Code Identifiers:** userprincipalname (1)
> **Definitions:** is a  (1)

#### Demo: Running the Entra ID Connect wizard
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=0)** - [Instructor] Now that you know how to install AD Connect, here's a demo on Running the AD Connect Wizard.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=6)** This is the tool that we discussed in the supporting tools video.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=11)** Now that the installation is complete, if you want to go back and make any changes that you configured during the installation, you can use the AD Connect Wizard to do that.
>
> **[0:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=21)** It's pretty simple, you just have to double-click on the Azure AD Connect icon on your desktop, which should open up the AD Connect Wizard.
>
> **[0:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=29)** Let me just center this.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=31)** Now keep in mind, as long as this wizard is running, the background synchronization processes will be suspended.
>
> **[0:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=37)** So make sure that you don't keep this window open for long, quickly make the changes that you want and exit.
>
> **[0:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=43)** In this demo, I will be enabling the password writeback option.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=47)** In order to do that, I click on the configure button, select the customize synchronization options, click on next, validate my credentials again, so this is verifying my Azure AD global administrator credentials, and my on-premises directory is already connected, so I'll click on next.
>
> **[1:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=66)** Leave the domain and OU filtering as it is, click on next.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=70)** And on this page, I'll check the password writeback option.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=75)** Click on next to complete this process.
>
> **[1:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=77)** The single sign-on which is required for password writeback is already configured, so I'll simply click on next again.
>
> **[1:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=84)** So what this wizard will now do is go ahead and enable password writeback.
>
> **[1:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=89)** To finish this, I click on configure, and let the wizard complete its thing.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=95)** Now this may again take a few minutes, so what I'll do is I'll pause here and come back when this is completed.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=102)** Once password writeback is successfully enabled, you should again see this configuration complete with the succeeded message.
>
> **[1:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=109)** If you don't see this screen, again go through the requisites for enabling password writeback.
>
> **[1:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=114)** Click on exit to end this.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), double-click (1), select the (1)
> **Code Keywords:** let (2), this. (2), this, (1)
> **CLI Commands:** make (3)
> **Prerequisites:** configure (2), install (1)
> **Cross-References:** we discussed (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Monitoring using Entra ID Connect Health
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=0)** - You know, that AD Connect consists of three internal components.
>
> **[0:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=4)** The Health, Sync Engine and the ADFS component.
>
> **[0:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=8)** The Health component of AD Connect is responsible for collecting and sending the health information of AD Connect servers, to Microsoft Azure.
>
> **[0:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=17)** You can then view this collected data, in the AD Connect health portal in Azure.
>
> **[0:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=22)** It's a dedicated page that displays the detailed operational status, of your organization's identity infrastructure.
>
> **[0:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=29)** This includes things like AD Connect server status, uptime, and synchronization errors, if any, among other things.
>
> **[0:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=38)** By default, the health component only reports the status of the AD Connect server.
>
> **[0:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=43)** This is the default scope of data collection.
>
> **[0:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=46)** But if you wish, you can expand this code to your other identity servers like, domain controllers.
>
> **[0:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=53)** You just have to download and install an agent on them, for inclusion in the data collection scope.
>
> **[0:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=59)** Once installed and configured, the DCs also start sending their health data, through the health component up to Azure.
>
> **[1:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=67)** Which is then also available for you to view in the health portal.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=70)** The metrics included in this data are, things like distribution of the FSMO roles, the respective sites of the domain controllers, their status, alerts, type of the domain controller and replication events.
>
> **[1:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=85)** So as you can see, this is not a namesake feature.
>
> **[1:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=88)** The data is extremely detailed, granular and comprehensive.

> [!info]- Semantic Content
>
> **Env Vars:** adfs (1), fsmo (1)
> **Code Keywords:** default, (1)
> **Prerequisites:** install (1)
> **Speakers:** - you (1)

#### Demo: Monitoring using Entra ID Connect Health
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=0)** - [Instructor] Now let's watch a demo on monitoring using AD Connect Health.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=6)** Let's see how the AD Connect Health portal works.
>
> **[0:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=10)** You should know that this is a paid feature which means you will have to purchase an Azure AD license to be able to use the AD Connect Health portal.
>
> **[0:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=19)** Now, as you can see here, I've already purchased the Azure AD Premium P2 subscription before beginning this demo and before I actually go into demonstrating how AD Connect Health works, let me also show you that the synchronization we configured in the last demo was successful.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=35)** In order to do that, I'll have to click on Users and then you'll be able to see that all the users from the on-premises directory are now populated in Azure AD.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=45)** You can verify that by checking the Source column for all the users.
>
> **[0:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=50)** So any user that has been synchronized will show a Windows Server AD in the Source column so you can see there are 10 such users and apart from those 10 users which were synchronized, there's one account that was used to sign up for Azure and another account with global administrative privilege that was used to configure AD Connect.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=70)** All right, so now let's go to the AD Connect Health protal.
>
> **[1:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=74)** In order to do that, I click on Home, and it should be right here or in case it isn't then you can also use the search box on the top to search for Azure AD Connect Health.
>
> **[1:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=85)** I'm just going to click on this.
>
> **[1:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=87)** Now on the left side, I can see there's a tab for Sync errors.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=91)** Let me click on that.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=92)** So any errors that are experienced during the synchronization process will show up here.
>
> **[1:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=97)** Now, because I'm in a very small test environment, luckily there aren't any errors so far.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=102)** Next, if you click on Sync services, it will list the health of the AD Connect server.
>
> **[1:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=108)** Let me click on this.
>
> **[1:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=109)** Now, you can see there is one AD Connect server connected to Azure AD with the name AADCONNECT.
>
> **[1:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=115)** And the status is Healthy which is great but if I want to see more details, I can click on this to go further into it.
>
> **[2:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=122)** I can see any active alerts, alerts that have been resolved in the past 24 hours and the last time that Azure Ad had an incoming synchronization from on premises.
>
> **[2:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=133)** On the right side, you can also see a graph denoting the latency.
>
> **[2:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=137)** So if you have a slower network, the latency will probably be higher indicating that you need to up the network speed in order for the synchronization process to happen more efficiently.
>
> **[2:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=147)** Let me scroll back up and this is not it.
>
> **[2:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=150)** We can dig down even more further.
>
> **[2:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=152)** Now, let me click on Properties to do that.
>
> **[2:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=154)** On the right side, you should see Synchronization and System.
>
> **[2:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=157)** Let's see what this shows.
>
> **[2:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=159)** If I click on Synchronization, here it gives me details about the AD Connect server.
>
> **[2:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=164)** The Engine Type of the synchronization product that I'm using is of course Azure AD Connect, the version, it's using a local SQL Server database, the SQL Server instance name, the database name and the service account it is using on the AD Connect server.
>
> **[3:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=180)** If I click on the System button here, I can also see the operation system that the AD Connect server is running, the domain, the time zone, the last time it was rebooted and what is the machine type.
>
> **[3:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=191)** Is it a physical box or a virtual machine?
>
> **[3:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=193)** How many processes does it have?
>
> **[3:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=195)** What's the physical memory assigned to it and all the other relevant details.
>
> **[3:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=199)** This information will be helpful in case you're experiencing a degraded performance in synchronization.
>
> **[3:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=205)** Let me close out of this.
>
> **[3:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=207)** Now, all this is great because it collects the health status of your AD Connect servers.
>
> **[3:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=212)** But what about your domain controller?
>
> **[3:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=214)** Like I said, in order to include your domain controllers for monitoring, you will have to download and install the AD Connect Health agent.
>
> **[3:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=222)** To do that, I click on the left where it says AD DS services.
>
> **[3:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=226)** Now, here it says no results as of now because there are no connected domain controllers which are sending their health data to Azure AD but if I go to quick start, there should be a link to download the health agent on the domain controller.
>
> **[4:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=240)** I'm just going to click on this link.
>
> **[4:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=242)** It'll take a few seconds for the download to complete and once the download is complete, I will run this.
>
> **[4:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=248)** Just that you know, I'm currently on my domain controller.
>
> **[4:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=251)** If I minimize this, and open back the installation agent.
>
> **[4:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=258)** Now, before I proceed with installation, here is the server.
>
> **[4:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=261)** This is wttvdc01 which means it is the domain controller.
>
> **[4:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=266)** Now, in addition to the prerequisites needed for the AD Connect installation, this Health agent also requires a few other additional prerequisites to be met.
>
> **[4:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=275)** You'll have to worry about them, especially if you're using an older version of the operating system or a third-party firewall but because I'm on Windows Server 2019, with Windows Firewall, I can simply click on the Install button.
>
> **[4:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=287)** So the installation has started and within a few seconds, the installation should be complete.
>
> **[4:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=293)** Next, you need to configure this agent.
>
> **[4:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=296)** It will ask us to sign into Microsoft Azure from the global administrative account.
>
> **[5:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=300)** I'm going to use that account here.
>
> **[5:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=302)** Kanalaadc@worldtraveler.tv.
>
> **[5:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=308)** Enter the password.
>
> **[5:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=311)** I'm going to center this window here so you can see what is exactly happening.
>
> **[5:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=315)** So it's now installing the agent services.
>
> **[5:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=318)** Great, you can see that here it says agent registration completed successfully.
>
> **[5:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=322)** And if you want more details, there is a log file that has been generated for your reference.
>
> **[5:28](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=328)** So it looks like the agent was successfully installed on the domain controller.
>
> **[5:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=332)** Now what should happen is that this agent should forward the health data of the domain controller to the health component of Azure AD Connect and that in turn will send it to Azure AD.
>
> **[5:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=342)** So it may take a few minutes to a few hours for the data to show up in Azure AD.
>
> **[5:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=348)** I'm going to close out of this and then resume the video once the data has been populated in Azure AD.
>
> **[5:55](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=355)** So it's been about half an hour since the agent was installed on the domain controller.
>
> **[5:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=359)** And here I am in the Azure AD Connect Health portal.
>
> **[6:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=363)** To see the data that was collected, I'll have to click on AD DS services on the left and see what shows up.
>
> **[6:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=370)** You can see that there is a result that has come here, wttv.local which is our local domain and the status it says is Healthy.
>
> **[6:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=378)** Ideally, this is what you should be seeing.
>
> **[6:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=380)** If I want to drill down into further details, I can click on this item.
>
> **[6:24](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=384)** That will bring me to this page.
>
> **[6:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=386)** It has the forest name, domain controller's fully qualified domain name, its forest functional level and the server hosting this schema master FSMO role.
>
> **[6:36](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=396)** These are the basic details.
>
> **[6:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=398)** If I want to know more, I can click on this which says one out of one domain controller's monitored.
>
> **[6:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=404)** Now, if you had multiple DCs, that number would be greater but because I just have one domain controller, it says one.
>
> **[6:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=410)** I'm going to click on this.
>
> **[6:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=412)** That should list all the domain controllers that you have in the organization with the AD Connect Health agent installed.
>
> **[6:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=419)** Currently I have only one which is wttvdc01 and as you can see, it has all the FSMO roles installed.
>
> **[7:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=426)** The schema master, the domain naming master, the PDC emulator, the RID master and the infrastructure master.
>
> **[7:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=434)** It also has the global catalog role and the status here is a green check box which essentially means it's healthy.
>
> **[7:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=441)** This was the status of the domain controllers in your organization.
>
> **[7:25](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=445)** Then you can also monitor the replication status after at least one successful replication cycle has been completed.
>
> **[7:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=452)** Now, since zero replication cycles have been completed after the agent was installed, there's no data as of now over here.
>
> **[7:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=459)** But once that synchronization cycle happens, you should see more data here.
>
> **[7:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=463)** I'm going to close out of this and if I scroll down, you'll also be able to see alerts, if any, that have been raised.
>
> **[7:50](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=470)** The successful LDAP binds that happened in the last 24 hours and the Kerberos Authentications that took place in the last 24 hours as well.
>
> **[7:59](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=479)** Let me scroll back up.
>
> **[8:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=481)** If I click on Settings over here on the top, you can see I can modify the properties.
>
> **[8:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=486)** Let's see what this shows as.
>
> **[8:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=488)** Let me click on Property.
>
> **[8:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=490)** It says the forest name and the forest functional level.
>
> **[8:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=493)** If I click on FSMO Roles, this again lists the same thing that we previously saw.
>
> **[8:18](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=498)** So this is the server hosting the domain naming master FSMO role and this is the server hosting the schema master FSMO role.
>
> **[8:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=506)** Because we have only one domain controller, all the FSMO roles are collated on a single server but if you had multiple servers with roles distributed across them, you would see it in the original server listed here.
>
> **[8:37](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=517)** So let me close out of this and close out of this as well.
>
> **[8:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=520)** So this is how the Azure AD Connect Health portal works.
>
> **[8:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=525)** It gives you consolidated insight into the health status of your AD Connect server as well as your domain controllers.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (19), go to (2), scroll down (1)
> **Code Keywords:** let (14), this. (5), type. (1), this, (1)
> **Env Vars:** fsmo (6), sql (2), aadconnect (1), pdc (1), rid (1)
> **Definitions:** is a  (4)
> **Prerequisites:** configure (2), install (2)
> **Cross-References:** in the last (3)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Understanding Entra ID Connect staging mode
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=0)** - One of the most common questions I get from customers is.
>
> **[0:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=3)** "How do I ensure business continuity if my AD connect "server fails?
>
> **[0:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=8)** "Do we load balance multiples servers or do we cluster them?"
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=11)** Well, the answer is none of them.
>
> **[0:14](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=14)** Due to the way an AD connect server consolidates and synchronizes active directory data none of those conventional methods would work.
>
> **[0:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=22)** That's why AD Connect comes built in with something called the Staging Mode.
>
> **[0:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=27)** Let me explain how that works.
>
> **[0:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=29)** The first thing we need to do is deploy an additional AD Connect server in Staging Mode.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=35)** I highlighted this option in one of the previous demos.
>
> **[0:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=38)** This additional server should also have it's own database.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=42)** Next you need to ensure that the configuration of this staging mode server is identical to the primary server.
>
> **[0:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=49)** Any synchronization rules, writeback features, or any other setting should be exactly the same on both servers.
>
> **[0:57](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=57)** Once all of that is taken care of, the server starts doing it's job.
>
> **[1:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=62)** It imports objects from Windows Server active directory, commits them to the database, but, does not export them.
>
> **[1:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=70)** Similarly, it also performs a writeback.
>
> **[1:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=73)** Well, that is if you have enabled writeback.
>
> **[1:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=76)** It commits those objects to the database.
>
> **[1:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=79)** What it does not actually do is write them back on the domain controller.
>
> **[1:23](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=83)** So, this way, both the server are exactly identical in the configuration as well as the synchronization data.
>
> **[1:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=91)** This means if the primary server goes down temporarily, or, entirely fails, the server in staging mode can quickly be configured to take over and keep the business going.
>
> **[1:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=102)** This is how the AD Connect Staging Mode works.
>
> **[1:46](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=106)** It's also the end of this chapter.
>
> **[1:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=108)** Let's take a short quiz and move on to the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Speakers:** - one (1)


### Conclusion

#### Key takeaways
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=0)** - [Instructor] We're almost towards the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=3)** But before we say have a goodbyes, let's do a quick review of what we learned in this course.
>
> **[0:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=9)** This course had six chapters.
>
> **[0:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=12)** The first one was Introduction and the one that you're currently watching is the Conclusion.
>
> **[0:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=17)** In between, there were four core chapters.
>
> **[0:20](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=20)** AD Connect Fundamentals, Planning for Users and Devices, Preparing the Environment and Deploying AD Connect.
>
> **[0:29](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=29)** In the fundamentals chapter, we got an overview of the AD Connect tool and its capabilities.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=35)** We understood deployment configurations supported by AD Connect in single forest and multi forest environments.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=42)** That included converging and diverging configurations.
>
> **[0:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=45)** We then learned about two rules for integration.
>
> **[0:49](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=49)** We also saw AD Connect component architecture.
>
> **[0:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=52)** This clip covered how synchronization works under the hood.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=56)** And finally, we got a high level overview of four supporting tools that come with AD Connect.
>
> **[1:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=62)** In the planning chapter, we learned about the three sign in methods.
>
> **[1:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=66)** The Password Hash Synchronization, ADFS Authentication and Pass-Through Authentication.
>
> **[1:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=73)** We then defined the user and device strategy and how to go about configuring them in a hybrid environment.
>
> **[1:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=79)** We then talked about four filtering methods that you can implement to control which objects synchronized to Azure AD and which don't.
>
> **[1:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=86)** And then we understood three types of ride backs that AD Connect is capable of performing.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=92)** In the preparing the environment chapter, we listed the components that need to be prepared and did so through demonstrations.
>
> **[1:39](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=99)** These were preparing the windows server active directory, AD Connect server, firewall and ports and preparing the Azure AD tenant.
>
> **[1:48](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=108)** Then we moved on to the chapter, deploying AD Connect.
>
> **[1:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=112)** We saw the two deployment methods and got to know the differences between them.
>
> **[1:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=116)** So how to use AD connect health and understood staging mode.
>
> **[2:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=121)** All of these are crucial aspects of planning when deploying a hybrid identity infrastructure.
>
> **[2:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=127)** If you're not clear with any of these concepts, please re-watch the clips.
>
> **[2:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=131)** If the doubt persists, use the Q and A section of the course to ask them to me and I will answer as soon as I can.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), pass (1)
> **Env Vars:** adfs (1)
> **Speakers:** - [instructor] (1)

#### Your personal checklist
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=0)** - Here's your personal checklist that I recommend you follow when deploying Azure AD in hybrid fashion.
>
> **[0:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=6)** First, identify your deployment configuration, see how many forests you have.
>
> **[0:11](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=11)** Ideally, one Azure AD tenant per forest is what you need, unless you're either converging or diverging.
>
> **[0:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=19)** Then totally understand the AD connect tool, it's features, functionalities, underpinnings, and supporting tools that come with it because this is the foundation of Hybrid Identity Infrastructure.
>
> **[0:30](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=30)** If you get this wrong, then things can become messy.
>
> **[0:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=34)** Next, choose a sign-in method that suits and complies with your organizations policies.
>
> **[0:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=40)** I recommend Password Hash Synchronization, but if that doesn't work for you, then you can look at Pass Through Authentication, if that doesn't work either then probably ADFS authentication is the way to go.
>
> **[0:52](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=52)** Four, make a list of users that you plan to synchronize to Azure AD and the role they'll be assigned.
>
> **[0:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=58)** Basically, will there be a standard user, an administrator, or something else?
>
> **[1:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=64)** Five, fully understand the user integration and device integration strategy.
>
> **[1:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=69)** Know what things will change from an administrative perspective once objects are synchronized.
>
> **[1:15](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=75)** Six, decide which Write-back you want to enable.
>
> **[1:19](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=79)** I personally think enabling Password Write-back is an excellent choice to implement self-service password reset among users.
>
> **[1:26](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=86)** You can think of enabling device and group Write-back as well, if it makes sense in your infrastructure.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=92)** Seven, prepare all components before starting AD Connect Deployment, that includes the Domain Controller, AD Connect Server, database, firewalls, bolts and the Azure AD tenant itself.
>
> **[1:45](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=105)** After all of that is ready, the eighth step will be, to choose a deployment method for AD Connect - Express or Custom.
>
> **[1:54](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=114)** Once the full deployment plan is ready, go ahead and perform the same steps in a proof-of-concept environment and do all the tests you want to.
>
> **[2:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=123)** If the results turn out as expected, then great.
>
> **[2:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=127)** Finally, fully and properly terminate the proof-of-concept tenant.
>
> **[2:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=132)** This is an important step that people often overlook.
>
> **[2:16](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=136)** Only after this is complete, then move on to rolling it out on the actual production environment.
>
> **[2:21](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=141)** To learn more about this product, please watch my other courses on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), self (1), finally, (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Env Vars:** adfs (1)
> **Speakers:** - here (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=1)** - [Kunal] And that's it!
>
> **[0:02](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=2)** We've reached the end of this course.
>
> **[0:05](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=5)** Here are the next steps you can take to extend your learning further.
>
> **[0:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=9)** There is nothing that can replace actual hands-on experience.
>
> **[0:13](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=13)** So spin up an Azure AD tenant and start synchronizing.
>
> **[0:17](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=17)** Follow the key takeaways and the personal checklist in designing your deployment strategy.
>
> **[0:22](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=22)** Then, make sure to try the express mode in AD Connect.
>
> **[0:27](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=27)** We didn't cover that in this course, because we covered the custom mode.
>
> **[0:31](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=31)** Express is much simpler compared to the custom mode.
>
> **[0:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=35)** And finally, if you have any doubts, rewatch the course or specific clips and participate in the Q and A section.
>
> **[0:42](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=42)** Thank you so much for watching, planning for Azure Active Directory on LinkedIn learning.
>
> **[0:47](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=47)** Keep in touch, add me on LinkedIn, the profile link should flash on your screen below.
>
> **[0:53](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=53)** That brings us to the end of this course.
>
> **[0:56](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=56)** But wait, I have some great news.
>
> **[0:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=58)** My next course deploying Azure Active Directory is out now.
>
> **[1:03](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=63)** So go watch it, or at least bookmark it for later.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** we covered (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [kunal] (1)


## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Microsoft Azure- Security Concepts]] | **4 of 8** | [[Deploying Microsoft Entra ID]] →

### In [[Advance Your Skills with Microsoft Entra ID]]
← [[Microsoft Entra ID Fundamentals]] | **2 of 3** | [[Deploying Microsoft Entra ID]] →

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
- [[Advance Your Skills with Microsoft Entra ID]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure

---

[↑ Back to top](#)