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
  - '[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals](../../Paths/Cloud%20Computing/Learning%20Paths/Infrastructure%20Management%20on%20Microsoft%20Azure-%20Top%20Skills%20for%20IT%20Professionals.md)'
  - '[Advance Your Skills with Microsoft Entra ID](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Skills%20with%20Microsoft%20Entra%20ID.md)'
prev_courses:
  - '[Microsoft Azure- Security Concepts](Microsoft%20Azure-%20Security%20Concepts.md)'
  - '[Microsoft Entra ID Fundamentals](../Network%20and%20System%20Administration/Microsoft%20Entra%20ID%20Fundamentals.md)'
next_courses:
  - '[Deploying Microsoft Entra ID](Deploying%20Microsoft%20Entra%20ID.md)'
  - '[Deploying Microsoft Entra ID](Deploying%20Microsoft%20Entra%20ID.md)'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":4,"total":8,"prev":"Microsoft Azure- Security Concepts","next":"Deploying Microsoft Entra ID"},{"path":"Advance Your Skills with Microsoft Entra ID","position":2,"total":3,"prev":"Microsoft Entra ID Fundamentals","next":"Deploying Microsoft Entra ID"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/microsoft-entra-id
  - skill/microsoft-azure
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Planning%20for%20Microsoft%20Entra%20ID.md)

![Planning for Microsoft Entra ID](https://media.licdn.com/dms/image/v2/C4E0DAQEPd6fKLA-kVQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1581532448211?e=2147483647&amp;v=beta&amp;t=L68qVegIVaPGevsoSZR0jQSJk7cJcb4g-AQxCSB4OWA)

# Planning for Microsoft Entra ID

> By establishing a hybrid identity infrastructure, you can support your on-premises infrastructure while also leveraging the latest features the cloud has to offer. In this course, join Kunal D Mehta as he steps through how to seamlessly integrate your on-premises infrastructure with Microsoft Entra ID (formerly Azure Active Directory) using Entra ID Connect. Kunal dives into the topic of hybrid id

> [LinkedIn Learning](https://www.linkedin.com/learning/planning-for-microsoft-entra-id) | 1h 35m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Hybrid identity](#hybrid-identity)
  - [Prerequisites](#prerequisites)
  - [Roadmap](#roadmap)
- [**1. Entra ID Connect Fundamentals**](#1-entra-id-connect-fundamentals) (5 videos)
  - [Entra ID Connect overview](#entra-id-connect-overview)
  - [Deployment configurations](#deployment-configurations)
  - [Rules for integration](#rules-for-integration)
  - [Component architecture](#component-architecture)
  - [Supporting tools](#supporting-tools)
- [**2. Planning for Users and Devices**](#2-planning-for-users-and-devices) (7 videos)
  - [Password hash synchronization](#password-hash-synchronization)
  - [Entra ID FS Authentication](#entra-id-fs-authentication)
  - [Pass-through Authentication](#pass-through-authentication)
  - [Defining user strategy](#defining-user-strategy)
  - [Defining device strategy](#defining-device-strategy)
  - [Filtering objects](#filtering-objects)
  - [Understanding writeback](#understanding-writeback)
- [**3. Preparing the Environment**](#3-preparing-the-environment) (8 videos)
  - [Preparing Windows Server AD](#preparing-windows-server-ad)
  - [Demo: Preparing Windows Server AD](#demo-preparing-windows-server-ad)
  - [Preparing the Entra ID Connect server](#preparing-the-entra-id-connect-server)
  - [Demo: Preparing the Entra ID Connect server](#demo-preparing-the-entra-id-connect-server)
  - [Preparing the firewalls and ports](#preparing-the-firewalls-and-ports)
  - [Demo: Preparing the firewalls and ports](#demo-preparing-the-firewalls-and-ports)
  - [Preparing the Entra ID tenant](#preparing-the-entra-id-tenant)
  - [Demo: Preparing the Entra ID tenant](#demo-preparing-the-entra-id-tenant)
- [**4. Deploying Entra ID Connect**](#4-deploying-entra-id-connect) (6 videos)
  - [Deployment methods](#deployment-methods)
  - [Demo: Installing Entra ID Connect](#demo-installing-entra-id-connect)
  - [Demo: Running the Entra ID Connect wizard](#demo-running-the-entra-id-connect-wizard)
  - [Monitoring using Entra ID Connect Health](#monitoring-using-entra-id-connect-health)
  - [Demo: Monitoring using Entra ID Connect Health](#demo-monitoring-using-entra-id-connect-health)
  - [Understanding Entra ID Connect staging mode](#understanding-entra-id-connect-staging-mode)
- [**Conclusion**](#conclusion) (3 videos)
  - [Key takeaways](#key-takeaways)
  - [Your personal checklist](#your-personal-checklist)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Hybrid identity](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=0)** - Welcome to my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course on [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Planning. As you know, Azure Active Directory is an identity as a service built into [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) is modern, has tons of really cool features, and is the perfect solution for handling all of your identity needs. But, most organization study have heavy investments in their on-premises based identity solutions. So throwing all that out and completely jumping onto Azure AD is not always possible. That's why hybrid identity makes complete sense. Let's understand that in a little more detail. We know that Azure Active Directory is capable of handling the identities of all types of components. You can create new cloud users, do Azure AD join for devices, and deploy a wide variety of applications, ranging from Legacy to Modern to Full Spectrum. So in a sense, what I'm trying to tell you, is that Azure AD is fully capable of handling users, groups, devices, and applications all on its own without any external support. It can function as a completely independent unit. But like I said, more often than not, there is an entire infrastructure already in place on-premises, tied to a local identity solution. In [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) networks, it's most commonly [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). So we need to integrate Azure AD and the new server active directory in a way that allows them to work together and can unleash the raw power of both solutions. In addition to that, the integration should be as seamless as possible
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/hybrid-identity?u=76281980&t=93)** for the existing users, groups, devices, and applications. How do we do that? We use the Azure AD Connect tool to establish seamless integration between the cloud and on-premises environments. And this mixed environment is called a hybrid identity infrastructure, very good to support your critical Legacy stuff on-premises and at the same time, also leverages the latest, cutting edge cloud features to your advantage. The goal of this course is to guide you to the planning needed for deploying a hybrid identity infrastructure introduction. The majority of our focus is going to be on the AD Connect tool required to set this up. My name is Kunal D Mehta. I'm an independent IT consultant, specializing in Microsoft Data Center and cloud technologies. It's an absolute honor to be your instructor today for this course on LinkedIn Learning. I hope you enjoy watching this course as much as I've enjoyed making it for you. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (6), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2)
> **Definitions:** is an  (2), is called (1)
> **Prerequisites:** required to (1)
> **Speakers:** - welcome (1)

#### [Prerequisites](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=0)** - [Narrator] Here are the prerequisites you'll need to derive the maximum benefit from this course. First and foremost, I strongly recommend that you watch my previous course, I showed [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md):Basics, before beginning this course. I've covered all the fundamentals of [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) over there, including the concept of Standalone and Hybrid Environments. I then demonstrated how to create an Azure AD Tenant for a fictitious organization named world traveler TV, and also showcase how to add the custom domain world traveler.tv to that domain. If you already know how to perform these tasks, then you may skip the previous course and directly begin with this one, or else I would insist that you watch the basics course first, and then come back to this planning course. Great, now that we are clear with that, here's what you will need to make the best use of this course. The intended target audience for this course is [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) Administrators, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Administrators and Identity Professionals who are looking for a deeper understanding of hybrid identity in the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) world. The prior knowledge required is like I said, it will be great if you have watched my previous course [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md):Basics. In addition prior knowledge of the AD Connect Tool Azure Administration and Windows Server Active Directory Administration is a plus. And finally, if you want to perform the demonstrations you see in this course in your own lab environment, you will require the following resources: an Azure AD tenant with a custom domain added to it an Active Directory Domain Services server and a member server joined to the domain.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/prerequisites?u=76281980&t=94)** And please remember to do all practice in a test environment only. Do not perform any task that you see here directly in a production environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (3), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (3), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Roadmap](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/roadmap?u=76281980&t=0)** - Here's a road map of the topics we'll be covering in this course. Ideally, onboarding onto [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) is a very straightforward and simple process if you're deploying a stand alone environment. But when it comes to a hybrid environment, there are a few extra things you need to take care of before rolling out Azure AD in your organization. There are a total of six chapters in this course, out of which, I've dedicated four chapters explaining precisely everything you need to know about AD Connect. The chapter that you're currently watching is the "Introduction". Next is "AD Connect Fundamentals". This chapter should give you a comprehensive knowledge of the AD Connect tool, it's internal functioning, and its supporting components. Then, we have the "Planning for Users and Devices" chapter. This should help you build a strategy for synchronizing users and groups that complies with and suits your organization policies. Once the concept and strategy are clear, we'll then start "Preparing the Environment" needed for AD Connect, focusing on each component and how to configure it. Finally, deploying the AD Connect tool. In this chapter, we'll install the AD Connect tool based on the strategy design in the previous chapters. We'll then wrap up this course in the "Conclusion" chapter by doing a quick review of all the key take aways you've learned so far and explore steps for further learning. That's the end of this chapter. Let's move onto the next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2)
> **Prerequisites:** configure (1), install (1)
> **Definitions:** is a  (1)
> **Speakers:** - here (1)


### 1. Entra ID Connect Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Entra ID Connect overview](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=0)** - [Instructor] Let's start with our first core chapter, AD Connect Fundamentals. Here we shall get a deeper understanding of what AD Connect does, features it supports, how it works under the hood and get to know additional tools included with the AD Connect installation. As you know by now, the AD Connect tool serves as the foundation for hybrid identity infrastructure in a [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) network. Its primary job is to integrate, or in other words, to create a bridge between on-premises [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) and [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md). This bridge facilitates the synchronization of active directory objects from the on-premises environment to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Including users, groups and computers. One specialty of an overloop, is the bidirectional flow of configuration changes. By that, I mean AD Connect not only synchronizes from on-premises to Azure, but also the other way round. But not objects, configuration changes. Such as configuration changes made in [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) can propagate back to on-premises Windows Server Active Directory. We'll talk more about this soon. And then AD Connect uses a [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database to store all its [Metadata](../../Skills/Web%20Development/Metadata.md). This database is probably the most crucial part of this entire setup. And finally, the AD Connect tool is built up of three internal components. Each of which has a dedicated function to perform. To add to that, you also get supporting tools installed with the AD Connect tool to optimize your setup further.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/azure-ad-connect-overview?u=76281980&t=94)** We'll talk more about this as well in the upcoming videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (3), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **Prerequisites:** setup (2)
> **Env Vars:** sql (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Deployment configurations](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=0)** - [Instructor] Deployment configurations are those that determine how to deploy AD connect depending on your [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) forest Topology. The deployment strategy changes based on different topologies. Let's understand how? So here's your Active Directory forest Topology, the AD Connect Server and the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Tenant. Ideally for one forest, you'd have one AD Connect Server and one corresponding Azure AD Tenant. The ratio is usually one is to one is to one. So if you had multiple forests, you would need an equivalent number of AD Connect Servers and Azure AD Tenants. This is called, "A simple Deployment Configuration." Now, just like everything else, there are exceptions here as well. The second type of Deployment Configuration you can have is, "Converging." Here you take multiple smaller forests and consolidate their objects into a single or fewer number of Azure AD Tenants. This is helpful when you want to streamline management by aggregating the objects spread across multiple forests by bringing them together in one place. The third type of Deployment Configuration is, "Diverging." Here you take one huge forest and break it down into multiple-smaller, more manageable Azure AD Tenants. This is helpful when you want to streamline management by segregating the objects of one forest into multiple smaller units. There is no right or wrong answer here. Choosing any one of these configurations is entirely subjective and depends on what suits you. Quite commonly, a Simple Configuration
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-configurations?u=76281980&t=94)** works for pretty much most organizations. But if Converging or Diverging configuration make sense to you, by all means, feel free to implement it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (5), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Rules for integration](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=0)** - [Instructor] In the last video, you saw three different types of deployment configurations, simple, converging, and diverging. Depending on your [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) topology, you should design and finalize a deployment configuration that is custom-made for your organization. But in the process of doing that, you need to keep two rules in mind. You must comply with these or your setup can fail. The first rule states that the ratio of AD Connect servers to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) tenants should be one is to one. Let's see some examples to understand this better. I want you to focus only on the AD Connect server and the Azure AD tenant for now. Forget the forest topology. Example number one, this is not allowed, because the ratio is one is to three, one AD Connect server trying to synchronize to three Azure AD tenants. This will not work. Next, example two. This is also not allowed, because the ratio is three is to one, three AD Connect servers all trying to synchronize into one Azure AD tenant. This will also not work. Then comes example number three. This is allowed, because the ratio is one is to one. There is one AD Connect server for each instance of an Azure AD tenant. It doesn't matter how many of them are present as long as the ratio of one is to one is maintained. So that was rule number one. Now let's look at the second rule. This states that each unique object in a forest should only synchronize to one Azure AD tenant.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/rules-for-integration?u=76281980&t=95)** It basically means that one object can only exist in one Azure AD tenant and not multiple Azure AD tenants. Let's see some examples again to understand this better. I want you to focus on the forest topology and the AD Connect server only. Forget the Azure AD tenant for now. Example number one, this is not allowed, and that's not because of the ratio. The rule of one is to one ratio does not apply to this side of the equation. The reason why this will not work is because a single object is going to three AD Connect servers for synchronization. Each unique object should only go to one destination, and there cannot be copies of the same object. So that's a no. Let's look at another example. This is allowed, because each unique object is only going to one AD Connect server for synchronization, so this is perfectly fine. Let's see another example. This is also allowed, because objects from multiple forests consolidate into one AD Connect server for synchronization, so there's no chance of having multiple copies of an object or a possible conflict. I hope you will remember both the rules for integration. But just so that you do, I'm reiterating them for you. Rule number one suggests this ratio should be one is to one. And rule number two suggests each unique object should only synchronize to one Azure AD tenant. Keep these in mind while designing a deployment configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (10), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** basically means (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Component architecture](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=0)** - [Instructor] Here is the component architecture of the AD Connect tool. My intention here is to give you an understanding of how the synchronization process happens internally in AD Connect. Although having this knowledge is not immediately necessary for deployment, it is extremely helpful in troubleshooting and designing a complex deployment configuration consisting of multiple forests and tenants. As I've mentioned before, AD Connect, consists of three components. The Health component, the Synchronization Engine, or in short, the Sync Engine, and the ADFS component. The Health component reports the health status of the AD Connect deployment to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). We talk more about this in a later chapter. The ADFS component talks to the ADFS server for implementing identify federation across on-premises and cloud environments. Keeping both of those aside, I will focus in this video is going to be on the Sync Engine. The Sync Engine further consists of three parts. I understand if that's a bit confusing but bear with me. The three parts are, the Metaverse, a left Connector Space, and a right Connector Space. The left Connector Space connects to [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) through a connector. The right Connector Space connects to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) through another connector. The connector on the left is responsible for implementing filtering, basically performing a check of which objects should synchronize and which objects shouldn't. We learn more about filtering in the later part of this chapter. Now let's assume that this object qualifies
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=94)** for synchronization based on the applied filtering. AD Connect marks such an object with a Source Anchor attribute. It does that for all objects that qualify for synchronization, but for this explanation, I'm assuming there's only one such object and making it more straightforward and easy for understanding. The Source Anchor is used by AD Connect to identify identical objects across on-premises and the cloud. The next step, after adding the Source Anchor attribute, is to import the object into the left Connector Space. There is one Connector Space per forest. So if were to now converting deployment configuration, there would be more than one left Connector Space. This imported object is then subjected to incoming synchronization rules, or ISR. These rules determine which attributes of the object are carried forward to the Metaverse and which attributes are stripped down. Once that's done, the object reaches the Metaverse. The Metaverse is the brain of the Sync Engine. If there are multiple forests, object from all Connector Spacess are consolidated here, deduplicated, if there are duplicate accounts for a user, organized, and then committed to the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Database. These objects are then further subjected to outgoing synchronization rules, or OSR. These rules determine which attributes of the object are carried forward further to the right Connector Space. The attributes that you strip down are maybe those that were required in the Metaverse, but are not required in Azure AD. Once that's done,
>
> **[3:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/component-architecture?u=76281980&t=187)** the object reaches the right Connector Space. This is where all the objects scheduled for synchronization in the next cycle are stored on a temporary basis, and when the time comes, they're all exported to Azure AD. This is called a full synchronization, where for the first time, the entire object synchronizes to Azure AD. It's an incredibly sophisticated mechanism. It drastically reduces the possibility of conflicts, or errors. This procedure is followed for all qualifying objects that undergo synchronization. At the end of that, the connector and the Connector Spaces are flushed out for the next batch of synchronization. If you modify any object on-premises, there's a link established between these objects so that only the changes are propagated to Azure AD and not the full object again. This is called a data synchronization. If we assume that this entire AD Connect server blows up, and you have to setup a new one from scratch, that's not going to be a big problem, because we already have the Source Anchors in place. So a new AD Connect server can quickly map objects on-premises with the corresponding copies in the cloud using this Source Anchor attribute. It will then rebuild its database and take over the operations. This is how AD Connect works under the hood.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (5), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** adfs (3), isr (1), sql (1), osr (1)
> **Definitions:** is called (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Supporting tools](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=0)** - [Narrator] When you install AD Connect, you also get a bunch of tools along with it to modify the default synchronization behavior. I like to call them supporting tools, there are mainly four tools you need to know. First is the AD Connect wizard. This is a nifty little utility that lets you modify basic AD Connect settings after the installation, things like changing the sign and method or enabling a feature that wasn't enabled during the initial installation. So any piece of setting that you saw during the first installation and want to change it to something else later, this wizard can do that. This tool is one of those that is probably used the most frequently after implementing AD Connect. The next three tools are only needed for configuring advanced functionalities of AD Connect, majority of customers will probably not need them, but being aware of the fact that they exist and what they do is something everyone should know. So the next tool is the Synchronization Service Manager. This is one of those tools that you can survive not knowing that it exists. But once you do know, things would just feel incomplete without it. Using the Synchronization Service Manager you can manually add more left connectors, view data stored in them and flush them out. You can also search the Metaverse by querying objects from its database, manually starting a full or a delta synchronization, creating your own custom objects for synchronization to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) and getting verbose [Statistics](../../Skills/Data%20Science/Statistics.md) into the synchronization cycles.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/supporting-tools?u=76281980&t=93)** You can do a lot of stuff here. This is a weapon of mass synchronization. Then comes the next tool Synchronization Rules Editor. Now, if you remember, in the previous video on Component Architecture, you understood that Incoming Synchronization Rules or ISR apply to objects passing from the left connector space to the Metaverse and Outgoing Synchronization Rules or OSR. Apply to objects passing from the Metaverse to the right connector space. These default rules for both import and export are automatically generated during the installation. And [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) recommends that you do not change them. So if you want to add your own custom incoming or outgoing synchronization rules, this tool will be the place to go to. And then the last tool Web Service Configuration Tool. This is primarily a developer tool. It is used to build your own custom connectors for synchronization objects between supported data sources and data sources that are not supported by AD Connect. If you're an IT Ops professional, then chances are that you will never need it. So don't worry too much about this one. These were the four supporting tools arranged in the order of how frequently you may require them. And with that, we've come to the end of this chapter. Take a quick quiz. I'll see you in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** isr (1), osr (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 2. Planning for Users and Devices

[↑ Back to Table of Contents](#table-of-contents)

#### [Password hash synchronization](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=0)** - [Instructor] Welcome to Planning for Users and Devices. In this chapter, we'll understand how synchronizing to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) can impact the behavior of objects or the nature of administration for users and devices. So, in order to make sure that there are no surprises, you need to plan for them and have a well-defined strategy. So, let's see what that encompasses. There are three types of sign-in methods that you can configure for users in your organization during the AD Connect installation. Those are Password Hash Synchronization, Pass-Through Authentication, and the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) Federation Services Authentication. Which one to choose largely depends on what your organization's policy is when it comes to handling passwords. Let's take a look at each one of them starting with Password Hash Synchronization. On the left, we have the Active Directory Domain Controller, in the middle an AD Connect Server, and on the right Azure AD. The synchronization here works in a way that along with the user objects being sent their corresponding password hashes are also sent to the cloud and stored there. In fact, not the password hash technically speaking. The password hash in [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) is rehashed, sent over an HTTPS connection. Once it reaches Azure AD, it is unhashed so the password hash hash just becomes hash now, and then this password hash is again rehashed with a different algorithm and stored in the cloud,
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=92)** which is much more secure. I know, probably a little confusing, but you don't have to worry about the underlying details. Now, imagine a user who is trying to access a resource on-prem. You know how it works, it's simple. Their password is verified against the password hash stored in the domain controller on premises. If they tried to access a resource on the cloud, the process is again similar. They enter their passwords on the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) log-in screen, which is then verified against the password hash stored in Azure AD. If the authentication is successful and the user is found to be authorized, they get access to the resource they need. Here are the pros and cons of using this method: since Azure AD has its own copy of password hashes, it can allow access to cloud resources without being dependent on the on-premises infrastructure. It only needs the connection in between for incoming synchronization of new objects or updates to existing objects. So, what I'm trying to say is that dependency of the business availability is very low on the on-premises infrastructure. A failure of the on-premises identity servers or the connection in between does not impact accessibility in Azure AD. In terms of additional infrastructure required to implement Password Hash Synchronization is also not a lot. The resources needed to set up AD Connect are sufficient for this as well, so it has low infrastructure requirements. Another advantage is that it supports Seamless Single Sign-On, and this really adds so much convenience and value to the whole sign-in experience of end users.
>
> **[3:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/password-hash-synchronization?u=76281980&t=187)** Using this, users only need to sign into their domain join devices. After that, they are automatically signed in to the resources they need irrespective of if it's on the cloud or on-premises. The experience is seamless. Now, the only con here is that the password hashes are stored in the cloud. This is not exactly a con, but not everyone is comfortable with their passwords stored in the cloud, given the security pattern where that unfortunately still exists around the concept of cloud. Another problem could be that maybe your policies strictly require passwords to be stored in the country or your own data centers. In that case, this sign-in method is probably unsuitable. But otherwise, this is the best and the cloud-first-oriented method out there. You get all the modern cloud features powered by [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning. This would be my number one choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (6), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Env Vars:** https (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Entra ID FS Authentication](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=0)** - [Instructor] Let's move on to the second sign in method, the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) Federation Services Authentication. Here, in addition to the domain controller, you will also need an ADFS server and a WAP application proxy. All of them present On Premises. The synchronization here works in such a way that only user objects are synchronized to the Cloud but their password hashes are not. Password hashes are stored only On Premises, not in the Cloud. This is an important differentiating factor, remember that. The way for a user to authenticate locally is pretty much the same as before but if a user tries to authenticate to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), the whole logging session is redirected to the On Premises servers. They enter the password, which is validated against [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) Active Directory present On Premises. At no point during this process does the password even touch Azure AD. If the authentication is successful, a token is passed on to Azure AD and if the user is found to be authorized, they get access to the resource they wanted. Here are the pros and cons of this method. The only borderline advantage here is that the password hashes are stored On Premises. Organizations that are either paranoid about [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) or have a policy requirement to store passwords On Premises can leverage this method. The cons outweigh the pros. One, it only comes with federated single sign on which is messy and not as efficient
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/ad-fs-authentication?u=76281980&t=92)** as seamless single sign on. Then, a lot of additional On Premises infrastructure is need to set this up. As you can see in the diagram, you need an ADFS server and also a WAP application proxy server in addition to the AD connect server. And the last con is that since all sign in requests have to be validated by On Premises servers, it has a high dependency on the On Premises servers. If the identity servers On Prem Go down, all the connection in between fails, it can disrupt user sign ins and affect business continuity. You should only choose this method if you see a real need for it. As opposed to the password hash synchronization method, this is predominantly an On Premises first oriented method and as a result, you cannot leverage most of the modern features offered by Azure AD here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1)
> **Env Vars:** adfs (2), wap (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Pass-through Authentication](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=0)** [Narrator] The third sign in method is Pass-Through Authentication. This is kind of a blend of the previous two methods, if I may dare say that. Similar to the ADFS method, the passwords are not syncronised to the cloud, when a used attempts to sign in on premises, the process is pretty much the same, but if they try to authenticate in The Cloud [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) facilitates the log-in process It accepts the password, hashes it, and adds it to a temporary queue to be processed for authentication. At the same time, there's a Pass-Through Authentication agent installed on premises, on the AD connect server, listening for queued authentication requests, in Azure AD. If it finds that there is a request to be processed, it fetches it, and validates it against on premises [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). The whole process happens so fast, that it's almost as if the password just passes through [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), on its way to on premises. The important point to note here is that Azure AD does not store this password hash, it only holds onto it momentarily, until the on premises agent fetches it from there; hence the name: Pass-Through. If the authentication is successful, and the user is found to be authorized, they get access to the required resource. The password at this stage does not exist in the Azure AD queue anymore. It's gone from there. Now, the pros and cons. The pro is, as you may have observed, that the password hashes are stored on premises, just like the last ADFS method. They are not synchronized to Azure AD.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/pass-through-authentication?u=76281980&t=94)** Then infrastructure requirements are also low, unlike the last method where you needed an extra ADFS server and WAP. Third, it supports Seamless Single Sign-On. Just like the password hash synchronization method does. Even though passwords are stored on prem and not in Azure AD, it still supports Seamless, Single Sign-On. Just like password hash synchronization method does. Which is great. And the one and only con is that it is again highly dependent on the on premises infrastructure. Any failure in the on prem servers or the connection in between them, sign ins will start to fail. So what [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) also allows you to do is set Pass-Through Authentication as the primary sign in method, but also enable password hash synchronization as a back up method. In such cases, if the primary method fails you can quickly switch to the password hash sync method, and ensure business continuity. So to sum up, this method is for those customers who want to embrace The Cloud but are partly skeptical about it as well. Like I said, this is a blend of the previous two methods, and offers the balance of control between going full-blown cloud, or full-blown on premises.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (6), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** adfs (3), wap (1)
> **Analogies:** just like (3), similar to (1)
> **Definitions:** is a  (2)
> **UI Navigation:** switch to (1)

#### [Defining user strategy](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=0)** - [Instructor] Those of us who manage users in a traditional [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md)-based on-premises environment are used to a certain way in which [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) objects behave and operate. But when you synchronize to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), some things change. My goal in this video is to make you aware of what behavior or administration techniques defer when managing users in the cloud so that you can map those changes and know when to take what action. We just learned that there are three types of sign-in methods: password hash synchronization, pass-through authentication, and ADFS authentication. You also know that there are three types of users in Azure AD: federated, synchronized, and cloud only. If you don't know what these three are, I've covered that in my previous course, [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Basics. Please go watch that. But coming back, the question arises, how are the users categorized into these three types? Here's how. If you're using PHS or PTA, which is password hash synchronization or pass-through authentication, as the sign-in method, what you get in Azure AD are basically called synchronized users. If the sign-in method is ADFS, then what you get are federated users. Technically, federated users also populate into Azure AD only after being synchronized through Azure AD. But since they are way too on-premises-oriented, they lack several functionalities that synchronized users possess. That's why we count them as separate types.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=93)** Then the third type of users are cloud users that you can see on the right. These are natively created in Azure AD and are not synchronized from anywhere. The previous two types of users originate on premises. Great, so those are the type of users. Now, what about groups? You will primarily see two main types of groups. There will be others as well, but these are the main ones: security groups and [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365 groups. I've covered them as well in the previous course. Synchronized or federated users both preserve their group memberships on synchronization because the security groups those users belong to on premises also synchronize. So what you get is the same set of users in the same set of security groups in Azure AD, as they were on premises. The structure of users and groups is maintained in the cloud. And both the security groups and Azure AD for synchronized users are static in nature as opposed to dynamic because the concept of dynamic groups is non-existent on Windows Server, so you cannot have synchronized groups that are dynamic in nature. Now, synchronized users and their groups or federated users and their groups co-exist along with the cloud users and Office 365 groups that were natively created in the cloud. Of course, you can also have security groups that were natively created in the cloud and they can be dynamic in nature because they are native to the cloud
>
> **[3:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=186)** and are not synchronized. Knowing where an object originates is vital for its management. For all synchronized objects, the source of authority or, in other words, the place where you modify them is Windows Server Active Directory On-Premises. Any changes you make to those objects propagate through AD Connect onto Azure AD and automatically reflect in their cloud counterparts. On the other hand, all objects native to the cloud are modified in the cloud. But because our focus in this course is on hybrid, let's talk a little bit more about these hybrid objects. As I said, the primary place to modify hybrid objects is Active Directory On-Premises. Next, hybrid objects are not exactly identical to their on-premises counterparts. They have mixed attributes, which means attributes that were picked up from Windows Server as well as attributes that were patched onto it by AD Connect for making it compatible with Azure AD. And AD Connect is quite intelligent that way. It automatically excludes default built-in accounts that serve no purpose in the cloud, like built-in administrators and built-in groups. So only necessary objects and attributes are synchronized to Azure AD. Next, as mentioned, all users retain their group memberships because their parent groups are also synchronized. So users and the groups they belong to, or groups and their members, will look the same in both cloud and on premises. One thing that's different, and this is important,
>
> **[4:41](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-user-strategy?u=76281980&t=281)** is that hierarchy of organizational units, or OUs, is lost in synchronization. Because Azure AD is a flat hierarchy, the concept of OUs does not exist here. There is something called an administrative unit, but that serves a slightly different purpose. And yes, another crucial point. Administrators on premises do not automatically detain their administrative privileges in the cloud after synchronization. This is by design, keeping security in mind. Just because a user is an administrator on prem does not necessarily mean that they need administrative rights also in the cloud. But if they actually do, not a problem. A global administrator account can manually assign the appropriate administrative rights to the relevant users. Finally, once synchronization completes, I encourage you to go to the [User Management](../../Skills/Web%20Development/User%20Management.md) page in Azure AD and explore the user profile of all synchronized users. Compare it with those of cloud users. See what you can do and cannot do for different types of users. Play around a little bit because all these little things are not something that can be planned entirely in advance. Sometimes you slowly observe, learn, and fine-tune the process according to your needs. And I completely understand if this was too much information, but don't be too overwhelmed by it. Once you actually get your hands on it, it becomes easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (13), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (4), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (3), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **Env Vars:** adfs (2), phs (1), pta (1)
> **Definitions:** in other words (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Defining device strategy](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=0)** - [Instructor] Just like you planned for users and groups in the last video, you also need to plan for their devices. You know there are three types of users, Federated, Synchronized and Cloud only. For managing devices, you have three options. Now, let's split them into Cloud native and non-Cloud native users. Then, for managing devices, you have three options, Hybrid [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) join, Azure AD join, and Device Registration. If you do not know these terms, please watch my previous course. There's a lot of good stuff that I've covered there. Coming back, the method of choice for managing devices of Federated and Synchronized users is Hybrid Azure AD Join. For Cloud users, Azure AD Join and Device Registration is the way to go. The question is, why? Now, if you give this a thought, you will probably figure out why. It's so that they have a common source of authority for management. You can have Federated users or Synchronized users and their devices managed on premises. Cloud users and their devices can be managed in the cloud. What you see here is not a hard and fast rule, it's just a matter of convenience and efficiency. And again, because our focus in this course is on hybrid, let's learn more about Hybrid Azure AD Join. This is a device which is joined to the domain on premises, which you're all familiar with, but also auto-joined to Azure AD. This brings you the best of both worlds for managing such devices.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/defining-device-strategy?u=76281980&t=93)** You can either manage them with the traditional group policy methods, System Center Configuration Manager, or a combination of configuration manager and Intune. So, interim or cloud solutions. The sign-in can be through traditional passwords, or through the modern [Windows](../../Glossary/Service/Windows.md) Hello feature. With this, you also get single sign-in to both cloud and on-premises resources which is really convenient for the end-users. If you are using Password Hash Synchronization or Pass Through Authentication for synchronized users, you can also get Seamless Single Sign-on. With Federated users, you just get Federated Single Sign-on. And, brace yourselves, this is my favorite part, Hybrid Azure AD Join supports the enforcement of Conditional Access policies on devices. If you don't know what Conditional Access is, it is by far one of the coolest features of Azure AD, which also has been explained in my previous course. Finally, the time to implement Hybrid Azure AD Join. Like I said in my last video, don't try to plan and implement too much together. Start with user synchronization first, get familiar with it, and once you're comfortable with it, then implement this for devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (9), [Windows](../../Glossary/Service/Windows.md) (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Filtering objects](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=0)** - [Narrator] Once we've figured out the plan for user and device strategy the next item on our to do list should be filtering. So what is filtering? It is the process of choosing which objects are allowed to synchronize to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) and which objects are not. A typical [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) forest consists of at least a few thousand objects. And it's not necessary that all of them must go up in the cloud. For example, service accounts, temporary local accounts, vendor accounts, and so on. It just doesn't make sense for them to be in Azure AD. And if we do end up synchronizing them, let's say by accident, there will be an overhead on our AD connect server, it's database, and probably it may end up costing us additional licensing fees. And that's why filtering is important. Now let's take a look at the four matters of filtering that are available in AD Connect. The first is domain based filtering. Second, OU based filtering. Third, group based filtering. And the fourth, attribute based filtering. The ideally configured domain based filtering in multi-domain environments. A diverging configuration is a very good scenario for it. A big forest with multiple domains split across multiple Azure AD tenants. In a way that objects in domain one go to tenant one, objects in domain two go to tenant two and so on. This is done through filtering at the domain level. You can exactly pick the domains
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=92)** you want to include in the synchronization and ones that you want to exclude. You can configure this either during the initial installation or after by using the AD Connect Wizard or the Synchronization Service Manger. Next, since a significant number of environments today are single forest and single domain, that makes OU based filtering the most popular and preferred method of filtering. This means you can implement it in a single domain or a multiple domain environment, all types of environments.
>
> **[2:04](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=124)** - You can include OU's which should be synchronized and excluded OU's which should not be synchronized. Similar to the domain based filtering, you can configure this during the initial installation, or after by using the AD Connect Wizard or the Synchronization Service Manger. Moving on the group based filtering. This is only supposed to be used for test environments. Please keep that in mind. This is so that you can select a small group of people, synchronize them to Azure AD and see if everything works according to the plan. Because it is intended for test deployments only, you can only choose one group to synchronize and only when running the AD Connect Installation for the very first time. This group that you choose is also called a pilot group. After you finish all the testing you need to switch to one of the other methods for filtering. One more important point to remember, is that [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) does not support this filtering method in production. So you won't be able to call them and ask for help if this is what you're using. And then lastly, comes the attribute based filtering. This is more suitable for advanced environments. It gives you a very granular control over what goes into Azure AD. You can filter objects by creating rules or conditions that scrutinize objects down to ever single attribute. It's more complicated but it also gives you a lot more control into the synchronization process. This is typically configured after the AD Connect Installation from the Synchronization Rules Editor.
>
> **[3:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/filtering-objects?u=76281980&t=218)** So these are the four types of filtering methods, along with scenarios on when to use them. Apart from this what you need to know is that you can use more than one method at a time. And when you do there is an implicit And condition applied between them. So only those objects, which fulfill all conditions will go through.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (5), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), similar to (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [narrator] (1), - you (1)
> **CLI Commands:** make (1)

#### [Understanding writeback](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=0)** - [Instructor] We know that synchronization happens from [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), but I also mentioned in the overview video that there's a bidirectional flow of data in AD Connect. I hope you remember that. This is called a writeback, when configuration from Azure AD is sent back to active directory on premises. Now, how does this make sense? Mainly, there are three things that can be configured to be written back, and those are passwords, devices, and groups. Password writeback is necessary to implement self-service password reset for users, also commonly known as SSPR. On-premises users did not have any out-of-the-box solution for password resets. They always had to involve the help desk for it, but Azure AD has a self-service password reset capability, so users can reset their passwords in Azure AD, and the new password can then be written back on premises through writeback for consistency. Or else, you'd end up with two different passwords in two different environments, but that doesn't happen here, and it's a synchronous operation. That means the writeback happens instantaneously. It does not wait for a scheduled time. And because it is synchronous, Azure AD can validate the new password on the spot against on-premises password policies to enforce compliance. So you can be confident that Azure AD is not accepting any passwords that go against your on-premises policies. Next is device writeback. This is mainly for Azure AD joined devices.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=95)** Mind you, not hybrid, but only Azure AD joined devices. This is useful in situations where users with Azure AD joined devices need to access ADFS-protected applications on premises, because, by default, the scope of operation of an Azure AD joined device wouldn't extend back on premises. So if you need to extend its scope to on premises, the device would need to be written back. And only when the on-premises infrastructure recognizes this device, then it will allow access to the ADFS-protected applications. As of today, there is a technical limitation with device writeback. It is only supported in a single-forest environment. If you have multiple forests, you cannot use this feature. But I'm hoping that this may change in the future. I'm not sure, but right now, single forest only. And finally comes the group writeback feature. This is mainly for environments where exchange server is deployed in a hybrid architecture. It is used to bring the collaboration that's available in Azure AD with [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365 Groups into the on-premises environment. So the same level of collaboration that is in the cloud is now brought to on premises. The catch here is that it only works for Office 365 Groups. You cannot write back a security group in Azure AD to on premises. That does not happen. So I hope you've understood the purpose of writeback and how this helps make your infrastructure more efficient. This brings us to the end of this chapter and halfway through the course.
>
> **[3:09](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-writeback?u=76281980&t=189)** Congratulations on making it this far. Go get some coffee, take a little quiz, and then let's roll into the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (12), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** adfs (2), sspr (1)
> **Definitions:** is called (1), known as (1), is a  (1)
> **CLI Commands:** make (2)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)


### 3. Preparing the Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing Windows Server AD](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=0)** - [Narrator] Now, let's talk about preparing the environment needed for successfully installing AD Connect on Premises. If you have ever deployed [products](../../Skills/Software%20Development/Microsoft%20Products.md) like exchange, share point, or system center, you are going to find this to be quite simple. That's because AD Connect isn't very demanding when it comes to installation prerequisites or resources. A few simple tweaks here and there, and you should be ready. So, let's see what those are. First, let us very specially define the components that need repairing. Basically, everything that AD Connect depends on, or interacts with. The list includes the domain controller running the ADDS role, the server on which we will be installing the AD Connect tool, it's sequence sever database, firewall rules for allowing communication and synchronization among the components, and the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Tenant. So, these are essentially the four or five components that need repairing. In this video, let's focus on the first component, the Active Directly Domain Services Sever. I would recommend having at least [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) 2012 R2 or above on all your domain controllers across the forest. [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s official documentation suggest that you can also use all the versions, but then the features that you can enable in AD Connect become limited. So, it's good to have at least Windows server 2012 R2 or above, and even better, if it has the latest updates installed, because depending on which version of AD Connect you're deploying, it may have a dependency
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=93)** on a patch or a hot fix. So, a fully updated server would be ideal. Then, the AD Connect server needs to have access to a right able domain controller on site. A read only domain controller will not work. It's because, if you remember, the AD Connect server needs to add the source and code to object before synchronization. It won't be able to do that if the DC is read only. The next step here is not required, but I strongly recommend that you do it. Download and run the ID fix tool. This Microsoft utility helps you clean up your list of [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) users. You can sanitize and remove unused, disabled, or unnecessary accounts before synchronization, so that those don't end up in Azure AD. Next, enable active directly, the recycle bin. This is a precautionary step, so that in case an account is accidentally deleted, you can still recover it. After these come the critical steps. First, you need to add an UPN suffix to active directly domains and trusts that corresponds to the domain verified in Azure AD, because typically, on Premises domains are local and not publicly routable. Synchronizing using this domain can lead to problems. So, to avoid that, we add the verified domain as the UPN suffix on Premises, and then begin the synchronization, and when the domains match, things work as expected, and remember, just adding the UPN suffix is not enough.
>
> **[3:07](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-windows-server-ad?u=76281980&t=187)** You need to also change it for all the users that are to be synchronized. For a small number of users, you can do it manually from the users and computer's MMC. For bulk, you can use power share, and finally, what we need is a service account for synchronization. This is the account that will have access to the list of users in Windows server active directory, and will synchronize them to Azure AD through AD Connect. The AD Connect installation wizard makes it easier for us to create and configure this account during the install automatically. So, we don't need to worry about this in advance, but if you want, you can create it beforehand, and that's pretty much it when it comes to preparing Windows Server Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (4), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** upn (3), adds (1), mmc (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1), install (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Demo: Preparing Windows Server AD](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=0)** - [Instructor] Now, let's see a demo on preparing [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). Here I am on my domain controller. The Computer Name is wttvdc01. Under Domain is wttv.local. Now, one of the first things that you will have to do is download and run the IdFix tool, but since I'm running a test environment, I do not have the need to run the IdFix tool because my list of users is already sanitized, but let me show you how to do it. Open your browser, search for download IdFix, and one of the first links should be the one we are looking for. Click on that. It gets you to a nice, little documentation, but the link that we are looking for is for the download. As you can see, here is the download link. I'm going to click on it, and the download should instantaneously finish. Your next step will be to run this tool. I'm going to skip past it, and move onto the next step, and that is enabling Active Directory Recycle Bin. For that, I'll have to go to the Active Directory Administrative Center, click on the domain that we have, which is wttv and on the right side, you should see an option, which says Enable Recycle Bin. I'm going to click on that. It'll give me a warning. It says if you enable Active Directory once, you cannot disable it. I'll be fine with that, so I'm going to click on the OK button. Now it takes a couple of seconds for it to enable this in the background. I'm just going to click on the OK button while that happens in the background.
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-windows-server-ad?u=76281980&t=93)** Now our next step will be to add the UPN suffix corresponding to the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) domain. For that, I will have to go to the Active Directory Domains and Trusts, right-click on this, and go to its Properties. Here you get the option to add an alternative UPN suffix. Now my Azure AD domain is worldtraveler.tv. I'll add that as a UPN suffix, click on the apply button, and then OK. Now remember, just adding the UPN suffix is not sufficient. You will also have to go to the Active Directory Users and Computers, and make sure you change them on all the users that you have. I'll show you one example. I'll click on my account, go to its Properties, go to the Account tab, and from the User logon name, change the UPN suffix to worldtraveler.tv, click on the Apply button, and OK. Now this was for one user. You will have to repeat this step for all users. If you have a small number of users, then you can do it manually, using the user interface or if you have a bulk of users, you can also do this through [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). Now as far as provisioning a service account for Azure AD Connect is concerned because the installation wizard allows us to create that one of the fly during the installation, we'll not do that right now. Let's move onto the next component, which needs to be prepared.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (6), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (3), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **UI Navigation:** click on (9), go to (4), right-click (1)
> **Env Vars:** upn (5)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Preparing the Entra ID Connect server](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=0)** - [Instructor] All right, now let's talk about the second component, the AD Connect Server. Like I previously mentioned, the AD Connect tool is not very demanding in terms of prerequisites and has a very moderate resource footprint. To deploy it you will need [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) 2012 R2 or above with the latest updates installed for the same reason we discussed in the previous slide. This server should preferably be a domain-joined member. It can be a stand alone server but then there will be additional configurations. So this is simpler. Next it needs to have a full GUI installation of Windows Server. You cannot use NANO Server or Server Core. As far as security is concerned, you should protect the AD Connect Server equivalent to how you'd protect a domain controller, because the AD Connect's database also has critical identity information just like your domain controller. So secure it properly. And having a rough estimate of the number of objects to be synchronized will be helpful in determining how powerful the [Hardware](../../Topics/Hardware.md) specifications of the server need to be. For example, if you have about 100k objects, then a 1.6 gigahertz processor with 16GB RAM and 100GB free hard disk space would be sufficient. Next comes the AD Connect database. You can use the free [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Express Edition as the database, but only if the number of objects is less than 100k, or the database size does not exceed 10 gigabytes.
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-ad-connect-server?u=76281980&t=94)** If you go beyond either one of these limits, then you'll need to purchase a license for SQL Server Standard or Enterprise Edition. The Express Edition comes built in to the AD Connect installation wizard, so we don't have to prepare that in advance. You just need to make sure that the hardware and software requirements for SQL Server Express are met. But in case you're using Standard or Enterprise Edition of SQL Server, you will need to have it installed and ready before installing AD Connect. I recommend using at least SQL Server 2012 R2 or above with the latest updates. If you are installing SQL Server manually, make sure that the collation is case-insensitive, denoted by CI in its name. You can install SQL Server on the same server along with AD Connect, or deploy it separately on another server, depending on whatever suits your requirements. But for low latency in the synchronization process, installing them together on one server is recommended. And lastly, use one database for each instance of the sync server. Do not try to share the database among multiple sync servers, or try to have more than one database for a single sync server. That's all you need to know for the AD Connect Server and its database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (7), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Hardware](../../Topics/Hardware.md) (2)
> **Env Vars:** sql (7), gui (1), nano (1), ram (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** you'll need (1), install (1)
> **Versions:** 1.6 (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** recommended (1)

#### [Demo: Preparing the Entra ID Connect server](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-ad-connect-server?u=76281980&t=0)** - [Instructor] Now, let's see a demo on Preparing the AD Connect Server. So here I am on the member server on which we will install the AD Connect tool. As you can see the computer name is AAD connect. And it is already joined to the domain WDTV.local. Now there is not a law that we have to do here. But we'll just make sure that all the requirements are fulfilled. One: It's is domain joined, and it is a full URL installation, and server cord or a nano server. And the number of objects that we have for synchronization is about 10. So which means, I will be able use the default [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) express installation that comes along with AD Connect installation. But in case you had more than 100K object what you will have to do is, you'll have to pre-install the SQL Server by searching for SQL Server 2019. And then installing the edition which makes sense to you. Either Data Center or Standard. But we'll not be doing that because we will be using the SQL Server express. So these are the basic checks that you have to perform on the server that will be hosting the AD Connect tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (4)
> **Env Vars:** sql (4), aad (1), wdtv (1), url (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Preparing the firewalls and ports](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=0)** - [Instructor] The third component is the firewalls. Yes, not one, but a few. The exact number will depend on if you have a twofold or a threefold configuration. If you install AD Connect and the database on the same server, then you will have a twofold configuration of the firewalls: one between the AD Connect server and the domain controller, the other between the AD Connect server and [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md). But if you install the database on a separate server, then you will have a threefold configuration. You'll also have to take care of the communication between the AD Connect server and its database. For this, the ports that need to be open are the standard [SQL](../../Skills/Data%20Science/SQL.md) port of 1433 or whatever custom port you're using between AD Connect and its database. For communication between the AD Connect server and Azure AD, all you need are the standard HTTP and HTTPS ports open, 80 and 443, which are mostly open anyway. So, you don't have to do anything extra for this. And lastly, between the AD Connect server and the domain controller, you need ports for DNS, Kerberos, LDAP, LDAP/SSL, and SMB, basically 53, 88, 389, 636, and 445. Part form these, there are two more ports which are the RPC and the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) RPC ports, but they are dynamic and automatically taken care of. Now, an important note to make here is that most of these rules can be configured
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-firewalls-and-ports?u=76281980&t=93)** by the AD Connect installation automatically if you're using the [Windows](../../Glossary/Service/Windows.md) firewall. The only reason why I'm listing all the port numbers here are so that in case you are using a third-party firewall, you will have to take care of these ports manually. But if it is the Windows firewall, then you don't have to do a lot. We'll see that in the demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** ldap (2), rpc (2), sql (1), http (1), https (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Warnings:** important note (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Preparing the firewalls and ports](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=0)** - [Narrator] Now let's see a demo on preparing the firewalls and ports. Now I'm back on the domain controller, to make sure the ports required for the AD connect installation are open. Ideally you wouldn't have to worry about this if you're using the [Windows](../../Glossary/Service/Windows.md) firewall, but you still need to know what ports to open in case you're using a third party firewall software. To ensure that the ports we require are open let's go to windows firewall with advanced security, go to inbound rules, search for the appropriate ports. Now one of the first ports required was the DNS, let's search for DNS. So DNS on port 53, TCP, and UDP are both enabled. That's great. The next port was Kerberos let's search for that. So here you can see Kerberos on port 88, TCP and UDP are again both enabled. That's great as well. Next we have to make sure that LDAP is open, so you can see here LDAP on port 389, TCP, and UDP are again both enabled. Along with LDAP, secure LDAP also needs to be open on port 636. Which is again enabled, that's great. And finally we needed the SMB port, let's search for that. As you can see here SMB port 445 for file and printer sharing is also open and enabled. Apart from these essential ports, there are two other ports. The RPC and the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) RPC ports
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-firewalls-and-ports?u=76281980&t=94)** which are basically random, so as far as the inbound rules for the domain controller are concerned, they appear to be all taken care of. But if you're using a third party firewall make sure these ports are open. Now let me switch to the AD connect server. So here I am on my AD connect server, let me open the Windows firewall with advanced security here and go to outbound rules. We just need to make sure outbound rules for port 80 and for 43 are open, so that the AD connect server can talk to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md). Now you don't have to really worry about these ports because again we're using the Windows Firewall, and AD connect installation can take care of most of the rules which are required for its successful deployment. You'll only have to pay attention to these particularly if you're using a third party firewall. In addition to that if your [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) is on a remote server then you also need to make sure that the port 1433, or any other custom port that you're using is also open. With these three ports your AD connect server is taken care of. Now let's move on to the next component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (4), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** ldap (4), dns (3), tcp (3), udp (3), smb (2)
> **Ports:** port 53 (1), port 88 (1), port 389 (1), port 636 (1), port 445 (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3), switch to (1), open the (1)
> **Speakers:** - [narrator] (1)

#### [Preparing the Entra ID tenant](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/preparing-the-azure-ad-tenant?u=76281980&t=0)** - [Instructor] The final component that needs prepping is the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) tenant. Nothing complicated just a few simple points to keep in mind and implement accordingly. First, you should know that if you do not have a custom domain added and are using the temporary on [microsoft.com](https://microsoft.com) domain, then the limit for synchronization is set to 50 k objects, I would suggest using this option only for test environments, if you add a custom domain and verified, then the limit is bumped up to 300 k objects. That's a significant upgrade. If your organization is even bigger than that, under limit of 300 K is not sufficient, then you can contact [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) support and bump this number up to 500 K. But let's imagine even that number isn't enough, then you will have to purchase Azure AD licenses and get rid of the upper limit. So depending on how many objects will be synchronized, you need to ensure your Azure AD tenant is ready to accept that incoming synchronization successfully. Apart from this, you'll also need a global administrator account, created in the cloud for enabling AD Connect to communicate with Azure AD for initial synchronization. This does not have to be a service account, it can be a regular account that we use for administration. The only important point to note here, is that this global administrator account should have the verified domain and it's UPN. And that's it. These are the components you need to prepare for at Connect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Env Vars:** upn (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Preparing the Entra ID tenant](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=0)** - [Instructor] Now, let's see a demo on preparing the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Tenant. Here I am in the Azure AD portal. For those of you that have not watched my previous course, let me quickly catch you up to speed on what we did back there. First I created a new Azure AD tenant and named it WorldTravellerTV. After that, we went to the Domain section and added a new domain, worldtraveller.tv, verified it, and also set it as primary. The third step that we performed was add a whole bunch of users there. Because the assumption there was that we were building a standalone Azure AD deployment. But because in this course we are doing a hybrid deployment, what I did before this demo was delete all the users and cleared them in [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). And in the next demo we will be synchronizing those users from Windows Server into Azure AD. And since we have a verified domain our object limit currently stands at about 300K which is more than sufficient as of now. Now in order to successfully deploy AD connect, I will need a global administrator account created in the domain that we just verified. As you can see this is the account we used to sign up for [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and create this Azure AD tenant. But the problem with this account is that it ends with @[outlook.com](https://outlook.com). We need a global administrator account that ends with @worldtraveller.tv because this account will not work
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=93)** for the Ad Connect installation. Let me click on New User to create a new user which has @worldtraveller.tv in its username. So let me click here. I want to create a new user, not invite. So this selection is fine. Type my name, kunalaadcazureadconnect@worldtraveller.tv.
>
> **[1:58](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-preparing-the-azure-ad-tenant?u=76281980&t=118)** Name, then fill in the other required information which is the full name, kunal d mahalda and AADC. Just to mark this account as one which is required to set up AD Connect. First name Kunal, last name D Mehita, AADC. And then scroll down. Let me create the password. I give it a password of my choice then scroll down further. I don't have to worry about the groups right now, but instead of a user, this account has to be assigned with the global administrator privileges, so I'm going to click on user, scroll down a little bit, select the global administrator role, and click on the select button. So you see the role assigned to this account is currently the global administrator role. Now everything else can be filled at a later stage. For now let's click on the create button at the bottom. So Chrome asks me do I want to save this? No, I don't want to save these credentials. So global administrator account created with the worldtraveller.tv domain has now been created. This account will be used for the AD connect installation in the next demo. All right, with that, we've reached the end of this chapter. Let's take a quick quiz and then proceed to the chapter we've all been waiting for, deploying AD Connect. I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (6), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (1)
> **UI Navigation:** click on (4), scroll down (3), select the (1)
> **Env Vars:** aadc (2)
> **Cross-References:** in the next (2)
> **Prerequisites:** required to (1), set up (1)
> **URLs:** [outlook.com](https://outlook.com) (1)
> **Speakers:** - [instructor] (1)


### 4. Deploying Entra ID Connect

[↑ Back to Table of Contents](#table-of-contents)

#### [Deployment methods](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=0)** - [Narrator] The chapter we've all been waiting for, Deploying AD Connect. You already know what going to happen here. So, without any further ado, let's jump right in. When you start installing AD Connect, the wizard gives you two deployment methods to choose from. The Express Mode or the Custom Mode. You need to pick one and begin the installation process. Now, which one should we choose? The answer to that question lies in the differences between the two modes. Here's how they are different from one another. Express Mode is essentially running through the installation with all the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) default settings. So, it's quicker. On the other hand, the Custom Mode is highly customizable. You can choose exactly what you need for each setting, and so it's a bit more time consuming. Express Mode is ideal for single forest environments. Whereas the Custom Mode can be used for either single or multi-forest environments. Express Mode is suitable when the number of objects for synchronization is less than 100k. On the other hand, Custom Mode can be used when the number of objects is less or greater than 100k. That's because Express Mode uses the default [SQL](../../Skills/Data%20Science/SQL.md) Express instance for its database. But in Custom Mode, you can pick your own [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) instance, that could either be a SQL Express edition, Standard or even an Enterprise edition. The Express Mode, by default, enables Password Hash Synchronization for the sign-in method. But, with the Custom Mode you can select any one,
>
> **[1:33](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/deployment-methods?u=76281980&t=93)** either Password Hash Synchronization, Pass-through Authentication or ADFS Authentication for sign-in. And finally, Express Mode works when you are installing AD Connect on a domain-joined member server. But, the Custom Mode works when the server is either domain-joined or even a standalone server. So these are the key differences between the Express Mode and the Custom Mode in AD Connect. You need to pick whichever mode is more compatible with your existing environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** sql (3), adfs (1)
> **Speakers:** - [narrator] (1)

#### [Demo: Installing Entra ID Connect](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=0)** - [Instructor] Okay, so let's see a demo on installing AD Connect. I'll use the Custom Mode to show you precisely what you need to configure. But if you wish, you can try the Express Mode in your own test environment. It should be more straightforward than the Custom Mode. So here I am on the AD Connect server. And without wasting any more time, let's quickly jump into the AD Connect installation. To do that, I'll have to open the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) portal, scroll down a little bit, and click on Azure AD Connect. On this page, you should see a download link for downloading Azure AD Connect tool. So I'm going to click on this link which will take me to the download section for downloading the Azure AD Connect tool. I'm going to click on this Download button. It should take a few seconds for the download to complete. And once complete, I'm going to run this. Let me just minimize all other [Windows](../../Glossary/Service/Windows.md) in the meantime, take this to the center. So here's the AD Connect installation wizard. On this page, I will mark this checkbox which says I agree to the license terms and [Privacy](../../Skills/Data%20Science/Privacy.md) notice. Click on the Continue button. Here is the second page. You have two options here, either use the Express Settings, which is basically the Express Mode, or use the Customize button, which is the Custom Mode. You can also see a description of what will be configured if you choose the Express Setting. We won't be using that in this course. We'll be using the Custom Mode. Clicking on that takes me to the next page. As you can see, there are a lot of configuration options.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=95)** I can either choose a custom location for the AD Connect installation or let it be the default. I can also choose an existing [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) installation on the local server or a remote server. I also have an option to use an existing service account instead of creating a new one during the installation. You can choose and configure whichever setting is appropriate for your deployment and then click on the Install button. Here, it installs all the prerequisites that it needs to support its function. Now, because we didn't choose an existing SQL Server installation, what it does right now is install SQL Server Express as its database. Once that is complete, it brings us to the User sign-in page. On this page, you can see the three primary sign-in methods that we discussed in the previous videos. There's the Password Hash Synchronization, there's the Pass-through authentication, and there's AD FS authentication. Now, these last two options are only useful if you're using a third-party solution for user sign-in. With Password Hash Synchronization and Pass-through authentication, you also have the option to enable single sign-on, which is Seamless Single Sign-On. If I select the Federation with AD FS, you can see that the Enable single sign-on button grays out. For my deployment, I'm going to select the Password Hash Synchronization method, enable single sign-on, and click on Next. On this page, I have to enter my global administrative credentials that we just created in Azure AD.
>
> **[3:08](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=188)** Let me type that in, kunalaadc @worldtraveller .tv, and put in my password, and click on Next. It will connect to [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) to validate my credentials and if successful, it will move on to the next step. It should take about a few seconds for this to complete. You can see the stages of all the checks it's performing down. Great, so if you get to the next step, that means the authentication of that account was successful. Now, I will have to establish a connection of AD Connect with my on-premises directory. For that, I'll click on the Add Directory button here. This is the page that asks you if you want to use an existing account on premises to be used as a service account or do you want the wizard to create a new service account for you? Now, because in my previous demos, I did not create a service account, I'm going to select the Create new AD account option and provide my enterprise admin credentials so that the installation wizard is able to create that account. Now, that is WTTV/administrator, and here's the password. Click on OK. Now, if the credentials are successful, you will see that this directory gets added here, under the CONFIGURED DIRECTORIES section. If you want to add more forests, you can do that from this dropdown if you have that option, or else, click on Next. On this page, you can see a list of all the domains that were successfully mapped
>
> **[4:40](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=280)** between the on-premises [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) and Azure AD. You can see here worldtraveller.tv. The upn suffix that we added is also verified and available in Azure AD. And the userPrincipalName on premises will also be used as the user principal name in Azure AD. Now, as long as one domain is matching, you can proceed with the installation. You just have to click this checkbox and click on the Next button. Here is the Domain and OU Filtering page. So you can either select all domains and OUs for synchronization or custom-select the specific ones that you want to be synchronized. I'm just going to select all and click on the Next button. Now, if you had duplicate identities existing across multiple forests, then you can use an attribute to consolidate such accounts and create a single unique account for all search users. But because I don't have duplicate accounts, I should be perfectly fine using this first option which is Users are represented only once across all directories. The second part of this page deals with the source anchor. I will just let [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) manage the source anchor. You already know what a source anchor does. Leave all the defaults on this page and click on the Next button. This is the page where you can configure group-based filtering for your pilot deployments. So if you don't want to synchronize all users and devices, you can select the second option here and enter a group name, which should be synchronized to Azure AD. Remember, this can only be used
>
> **[6:12](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=372)** in a pilot deployment or a test deployment, and not in a production environment. I'm just going to select all users and devices and click the Next button. Here are the list of optional features that you can enable in addition to what's already been configured. I'm not going to make any changes on this page as of now. I'm simply going to click on the Next button. In order to enable single sign-on, I will have to supply a domain administrator account in order to configure this. Now, because I'm in a test environment, I'll just enter my credentials and click on the OK button. You can see there's a green arrow here, which is a good sign, so I'll click on the Next button again. So we are almost ready to go. The moment I click on the Install button, the synchronization process will kick off. But instead of doing that, what I can also do is uncheck the checkbox here, which says Start the synchronization, and then click on Enable staging mode. Just remember this option for now, the staging mode. In the upcoming clips, I'll explain to you what exactly it does. But for now, I'll just kick off the synchronization process. To do that, I'll click on the Install button. So this is the part that will take a few minutes, depending on how many user accounts you have in your on-premises directory. It will take care of all the background processes and services required to configure a successful synchronization. So instead of keeping you waiting, what I will do is I will pause here and then bring you back once this installation is successfully complete. After the installation completes,
>
> **[7:44](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-installing-ad-connect?u=76281980&t=464)** this is the screen you should see. If you read, it says Configuration complete. Azure AD Connect configuration succeeded. The synchronization process has been initiated. Now, in case you don't see this screen and you face some errors, then go back to the prerequisites and make sure all the prerequisites needed are met because most of the times, that is where the fault lies. But if you didn't get any errors and you completed everything successfully like the demo over here, then absolutely great. You're ready to move on. To complete this, I'll just click on the Exit button and exit the wizard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (10), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **UI Navigation:** click on (20), select the (4), checkbox (3), open the (1), scroll down (1)
> **Prerequisites:** configure (5), install (4), required to (1)
> **Env Vars:** sql (3), wttv (1), configured (1), directories (1)
> **CLI Commands:** make (2)
> **Cross-References:** we discussed (1), go back to (1)
> **Code Identifiers:** userprincipalname (1)
> **Definitions:** is a  (1)

#### [Demo: Running the Entra ID Connect wizard](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=0)** - [Instructor] Now that you know how to install AD Connect, here's a demo on Running the AD Connect Wizard. This is the tool that we discussed in the supporting tools video. Now that the installation is complete, if you want to go back and make any changes that you configured during the installation, you can use the AD Connect Wizard to do that. It's pretty simple, you just have to double-click on the [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Connect icon on your desktop, which should open up the AD Connect Wizard. Let me just center this. Now keep in mind, as long as this wizard is running, the background synchronization processes will be suspended. So make sure that you don't keep this window open for long, quickly make the changes that you want and exit. In this demo, I will be enabling the password writeback option. In order to do that, I click on the configure button, select the customize synchronization options, click on next, validate my credentials again, so this is verifying my Azure AD global administrator credentials, and my on-premises directory is already connected, so I'll click on next. Leave the domain and OU filtering as it is, click on next. And on this page, I'll check the password writeback option. Click on next to complete this process. The single sign-on which is required for password writeback is already configured, so I'll simply click on next again. So what this wizard will now do is go ahead and enable password writeback. To finish this, I click on configure, and let the wizard complete its thing.
>
> **[1:35](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-running-the-ad-connect-wizard?u=76281980&t=95)** Now this may again take a few minutes, so what I'll do is I'll pause here and come back when this is completed. Once password writeback is successfully enabled, you should again see this configuration complete with the succeeded message. If you don't see this screen, again go through the requisites for enabling password writeback. Click on exit to end this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2)
> **UI Navigation:** click on (8), double-click (1), select the (1)
> **CLI Commands:** make (3)
> **Prerequisites:** configure (2), install (1)
> **Cross-References:** we discussed (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Monitoring using Entra ID Connect Health](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/monitoring-using-ad-connect-health?u=76281980&t=0)** - You know, that AD Connect consists of three internal components. The Health, Sync Engine and the ADFS component. The Health component of AD Connect is responsible for collecting and sending the health information of AD Connect servers, to [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). You can then view this collected data, in the AD Connect health portal in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). It's a dedicated page that displays the detailed operational status, of your organization's identity infrastructure. This includes things like AD Connect server status, uptime, and synchronization errors, if any, among other things. By default, the health component only reports the status of the AD Connect server. This is the default scope of [Data Collection](../../Skills/Data%20Science/Data%20Collection.md). But if you wish, you can expand this code to your other identity servers like, domain controllers. You just have to download and install an agent on them, for inclusion in the data collection scope. Once installed and configured, the [DCS](../../Glossary/Concept/DCS.md) also start sending their health data, through the health component up to Azure. Which is then also available for you to view in the health portal. The metrics included in this data are, things like distribution of the FSMO roles, the respective sites of the domain controllers, their status, alerts, type of the domain controller and replication events. So as you can see, this is not a namesake feature. The data is extremely detailed, granular and comprehensive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (2), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [DCS](../../Glossary/Concept/DCS.md) (1)
> **Env Vars:** adfs (1), fsmo (1)
> **Prerequisites:** install (1)
> **Speakers:** - you (1)

#### [Demo: Monitoring using Entra ID Connect Health](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=0)** - [Instructor] Now let's watch a demo on monitoring using AD Connect Health. Let's see how the AD Connect Health portal works. You should know that this is a paid feature which means you will have to purchase an [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) license to be able to use the AD Connect Health portal. Now, as you can see here, I've already purchased the Azure AD Premium P2 subscription before beginning this demo and before I actually go into demonstrating how AD Connect Health works, let me also show you that the synchronization we configured in the last demo was successful. In order to do that, I'll have to click on Users and then you'll be able to see that all the users from the on-premises directory are now populated in Azure AD. You can verify that by checking the Source column for all the users. So any user that has been synchronized will show a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) AD in the Source column so you can see there are 10 such users and apart from those 10 users which were synchronized, there's one account that was used to sign up for [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and another account with global administrative privilege that was used to configure AD Connect. All right, so now let's go to the AD Connect Health protal. In order to do that, I click on Home, and it should be right here or in case it isn't then you can also use the search box on the top to search for Azure AD Connect Health. I'm just going to click on this. Now on the left side, I can see there's a tab for Sync errors. Let me click on that.
>
> **[1:32](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=92)** So any errors that are experienced during the synchronization process will show up here. Now, because I'm in a very small test environment, luckily there aren't any errors so far. Next, if you click on Sync services, it will list the health of the AD Connect server. Let me click on this. Now, you can see there is one AD Connect server connected to Azure AD with the name AADCONNECT. And the status is Healthy which is great but if I want to see more details, I can click on this to go further into it. I can see any active alerts, alerts that have been resolved in the past 24 hours and the last time that Azure Ad had an incoming synchronization from on premises. On the right side, you can also see a graph denoting the latency. So if you have a slower network, the latency will probably be higher indicating that you need to up the network speed in order for the synchronization process to happen more efficiently. Let me scroll back up and this is not it. We can dig down even more further. Now, let me click on Properties to do that. On the right side, you should see Synchronization and System. Let's see what this shows. If I click on Synchronization, here it gives me details about the AD Connect server. The Engine Type of the synchronization product that I'm using is of course Azure AD Connect, the version, it's using a local [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database, the SQL Server instance name, the database name and the service account it is using on the AD Connect server. If I click on the System button here, I can also see the operation system that the AD Connect server is running,
>
> **[3:06](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=186)** the domain, the time zone, the last time it was rebooted and what is the machine type. Is it a physical box or a virtual machine? How many processes does it have? What's the physical memory assigned to it and all the other relevant details. This information will be helpful in case you're experiencing a degraded performance in synchronization. Let me close out of this. Now, all this is great because it collects the health status of your AD Connect servers. But what about your domain controller? Like I said, in order to include your domain controllers for monitoring, you will have to download and install the AD Connect Health agent. To do that, I click on the left where it says AD DS services. Now, here it says no results as of now because there are no connected domain controllers which are sending their health data to Azure AD but if I go to quick start, there should be a link to download the health agent on the domain controller. I'm just going to click on this link. It'll take a few seconds for the download to complete and once the download is complete, I will run this. Just that you know, I'm currently on my domain controller. If I minimize this, and open back the installation agent. Now, before I proceed with installation, here is the server. This is wttvdc01 which means it is the domain controller. Now, in addition to the prerequisites needed for the AD Connect installation, this Health agent also requires a few other additional prerequisites to be met. You'll have to worry about them, especially if you're using an older version
>
> **[4:38](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=278)** of the operating system or a third-party firewall but because I'm on Windows Server 2019, with [Windows](../../Glossary/Service/Windows.md) Firewall, I can simply click on the Install button. So the installation has started and within a few seconds, the installation should be complete. Next, you need to configure this agent. It will ask us to sign into [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) from the global administrative account. I'm going to use that account here. Kanalaadc@worldtraveler.tv. Enter the password. I'm going to center this window here so you can see what is exactly happening. So it's now installing the agent services. Great, you can see that here it says agent registration completed successfully. And if you want more details, there is a log file that has been generated for your reference. So it looks like the agent was successfully installed on the domain controller. Now what should happen is that this agent should forward the health data of the domain controller to the health component of Azure AD Connect and that in turn will send it to Azure AD. So it may take a few minutes to a few hours for the data to show up in Azure AD. I'm going to close out of this and then resume the video once the data has been populated in Azure AD. So it's been about half an hour since the agent was installed on the domain controller. And here I am in the Azure AD Connect Health portal. To see the data that was collected, I'll have to click on AD DS services on the left and see what shows up.
>
> **[6:10](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=370)** You can see that there is a result that has come here, wttv.local which is our local domain and the status it says is Healthy. Ideally, this is what you should be seeing. If I want to drill down into further details, I can click on this item. That will bring me to this page. It has the forest name, domain controller's fully qualified domain name, its forest functional level and the server hosting this schema master FSMO role. These are the basic details. If I want to know more, I can click on this which says one out of one domain controller's monitored. Now, if you had multiple [DCS](../../Glossary/Concept/DCS.md), that number would be greater but because I just have one domain controller, it says one. I'm going to click on this. That should list all the domain controllers that you have in the organization with the AD Connect Health agent installed. Currently I have only one which is wttvdc01 and as you can see, it has all the FSMO roles installed. The schema master, the domain naming master, the PDC emulator, the RID master and the infrastructure master. It also has the global catalog role and the status here is a green check box which essentially means it's healthy. This was the status of the domain controllers in your organization. Then you can also monitor the replication status after at least one successful replication cycle has been completed. Now, since zero replication cycles have been completed after the agent was installed, there's no data as of now over here. But once that synchronization cycle happens, you should see more data here.
>
> **[7:43](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/demo-monitoring-using-ad-connect-health?u=76281980&t=463)** I'm going to close out of this and if I scroll down, you'll also be able to see alerts, if any, that have been raised. The successful LDAP binds that happened in the last 24 hours and the Kerberos Authentications that took place in the last 24 hours as well. Let me scroll back up. If I click on Settings over here on the top, you can see I can modify the properties. Let's see what this shows as. Let me click on Property. It says the forest name and the forest functional level. If I click on FSMO Roles, this again lists the same thing that we previously saw. So this is the server hosting the domain naming master FSMO role and this is the server hosting the schema master FSMO role. Because we have only one domain controller, all the FSMO roles are collated on a single server but if you had multiple servers with roles distributed across them, you would see it in the original server listed here. So let me close out of this and close out of this as well. So this is how the Azure AD Connect Health portal works. It gives you consolidated insight into the health status of your AD Connect server as well as your domain controllers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (14), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** click on (19), go to (2), scroll down (1)
> **Env Vars:** fsmo (6), sql (2), aadconnect (1), pdc (1), rid (1)
> **Definitions:** is a  (4)
> **Prerequisites:** configure (2), install (2)
> **Cross-References:** in the last (3)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Entra ID Connect staging mode](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=0)** - One of the most common questions I get from customers is. "How do I ensure business continuity if my AD connect "server fails? "Do we load balance multiples servers or do we cluster them?" Well, the answer is none of them. Due to the way an AD connect server consolidates and synchronizes [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) data none of those conventional methods would work. That's why AD Connect comes built in with something called the Staging Mode. Let me explain how that works. The first thing we need to do is deploy an additional AD Connect server in Staging Mode. I highlighted this option in one of the previous demos. This additional server should also have it's own database. Next you need to ensure that the configuration of this staging mode server is identical to the primary server. Any synchronization rules, writeback features, or any other setting should be exactly the same on both servers. Once all of that is taken care of, the server starts doing it's job. It imports objects from [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) active directory, commits them to the database, but, does not export them. Similarly, it also performs a writeback. Well, that is if you have enabled writeback. It commits those objects to the database. What it does not actually do is write them back on the domain controller. So, this way, both the server are exactly identical in the configuration as well as the synchronization data. This means if the primary server goes down temporarily,
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/understanding-ad-connect-staging-mode?u=76281980&t=94)** or, entirely fails, the server in staging mode can quickly be configured to take over and keep the business going. This is how the AD Connect Staging Mode works. It's also the end of this chapter. Let's take a short quiz and move on to the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Speakers:** - one (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Key takeaways](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=0)** - [Instructor] We're almost towards the end of this course. But before we say have a goodbyes, let's do a quick review of what we learned in this course. This course had six chapters. The first one was Introduction and the one that you're currently watching is the Conclusion. In between, there were four core chapters. AD Connect Fundamentals, Planning for Users and Devices, Preparing the Environment and Deploying AD Connect. In the fundamentals chapter, we got an overview of the AD Connect tool and its capabilities. We understood deployment configurations supported by AD Connect in single forest and multi forest environments. That included converging and diverging configurations. We then learned about two rules for integration. We also saw AD Connect component architecture. This clip covered how synchronization works under the hood. And finally, we got a high level overview of four supporting tools that come with AD Connect. In the planning chapter, we learned about the three sign in methods. The Password Hash Synchronization, ADFS Authentication and Pass-Through Authentication. We then defined the user and device strategy and how to go about configuring them in a hybrid environment. We then talked about four filtering methods that you can implement to control which objects synchronized to [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) and which don't. And then we understood three types of ride backs that AD Connect is capable of performing. In the preparing the environment chapter,
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/key-takeaways?u=76281980&t=94)** we listed the components that need to be prepared and did so through demonstrations. These were preparing the [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md), AD Connect server, firewall and ports and preparing the Azure AD tenant. Then we moved on to the chapter, deploying AD Connect. We saw the two deployment methods and got to know the differences between them. So how to use AD connect health and understood staging mode. All of these are crucial aspects of planning when deploying a hybrid identity infrastructure. If you're not clear with any of these concepts, please re-watch the clips. If the doubt persists, use the Q and A section of the course to ask them to me and I will answer as soon as I can.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Env Vars:** adfs (1)
> **Speakers:** - [instructor] (1)

#### [Your personal checklist](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=0)** - Here's your personal checklist that I recommend you follow when deploying [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) in hybrid fashion. First, identify your deployment configuration, see how many forests you have. Ideally, one Azure AD tenant per forest is what you need, unless you're either converging or diverging. Then totally understand the AD connect tool, it's features, functionalities, underpinnings, and supporting tools that come with it because this is the foundation of Hybrid Identity Infrastructure. If you get this wrong, then things can become messy. Next, choose a sign-in method that suits and complies with your organizations policies. I recommend Password Hash Synchronization, but if that doesn't work for you, then you can look at Pass Through Authentication, if that doesn't work either then probably ADFS authentication is the way to go. Four, make a list of users that you plan to synchronize to Azure AD and the role they'll be assigned. Basically, will there be a standard user, an administrator, or something else? Five, fully understand the user integration and device integration strategy. Know what things will change from an administrative perspective once objects are synchronized. Six, decide which Write-back you want to enable. I personally think enabling Password Write-back is an excellent choice to implement self-service password reset among users. You can think of enabling device and group Write-back as well, if it makes sense in your infrastructure. Seven, prepare all components
>
> **[1:34](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/your-personal-checklist-2?u=76281980&t=94)** before starting AD Connect Deployment, that includes the Domain Controller, AD Connect Server, database, firewalls, bolts and the Azure AD tenant itself. After all of that is ready, the eighth step will be, to choose a deployment method for AD Connect - Express or Custom. Once the full deployment plan is ready, go ahead and perform the same steps in a proof-of-concept environment and do all the tests you want to. If the results turn out as expected, then great. Finally, fully and properly terminate the proof-of-concept tenant. This is an important step that people often overlook. Only after this is complete, then move on to rolling it out on the actual production environment. To learn more about this product, please watch my other courses on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Env Vars:** adfs (1)
> **Speakers:** - here (1)

#### [Next steps](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/planning-for-microsoft-entra-id/next-steps-15019596?u=76281980&t=1)** - [Kunal] And that's it! We've reached the end of this course. Here are the next steps you can take to extend your learning further. There is nothing that can replace actual hands-on experience. So spin up an [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) tenant and start synchronizing. Follow the key takeaways and the personal checklist in designing your deployment strategy. Then, make sure to try the express mode in AD Connect. We didn't cover that in this course, because we covered the custom mode. Express is much simpler compared to the custom mode. And finally, if you have any doubts, rewatch the course or specific clips and participate in the Q and A section. Thank you so much for watching, planning for [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning. Keep in touch, add me on LinkedIn, the profile link should flash on your screen below. That brings us to the end of this course. But wait, I have some great news. My next course deploying Azure Active Directory is out now. So go watch it, or at least bookmark it for later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** we covered (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [kunal] (1)


## Instructor

- [Kunal D Mehta](../../Instructors/Cloud%20Computing/Kunal%20D%20Mehta.md)

## Skills Covered

- Microsoft Entra ID
- Microsoft Azure

## Path Context

### In [Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals](../../Paths/Cloud%20Computing/Learning%20Paths/Infrastructure%20Management%20on%20Microsoft%20Azure-%20Top%20Skills%20for%20IT%20Professionals.md)
← [Microsoft Azure- Security Concepts](Microsoft%20Azure-%20Security%20Concepts.md) | **4 of 8** | [Deploying Microsoft Entra ID](Deploying%20Microsoft%20Entra%20ID.md) →

### In [Advance Your Skills with Microsoft Entra ID](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Skills%20with%20Microsoft%20Entra%20ID.md)
← [Microsoft Entra ID Fundamentals](../Network%20and%20System%20Administration/Microsoft%20Entra%20ID%20Fundamentals.md) | **2 of 3** | [Deploying Microsoft Entra ID](Deploying%20Microsoft%20Entra%20ID.md) →

## Appears In

- [Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals](../../Paths/Cloud%20Computing/Learning%20Paths/Infrastructure%20Management%20on%20Microsoft%20Azure-%20Top%20Skills%20for%20IT%20Professionals.md)
- [Advance Your Skills with Microsoft Entra ID](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Skills%20with%20Microsoft%20Entra%20ID.md)

## Related Courses

_Courses sharing skills:_

- [Blockchain for Developers- Hyperledger Fabric on Azure](../Cybersecurity/Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md) — Microsoft Azure
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Microsoft Azure
- [Azure DevOps for Beginners](Azure%20DevOps%20for%20Beginners.md) — Microsoft Azure
- [Azure Storage Essential Training (2021)](Azure%20Storage%20Essential%20Training%20(2021).md) — Microsoft Azure
- [Building a Web Application on Microsoft Azure](Building%20a%20Web%20Application%20on%20Microsoft%20Azure.md) — Microsoft Azure

---

[↑ Back to top](#)