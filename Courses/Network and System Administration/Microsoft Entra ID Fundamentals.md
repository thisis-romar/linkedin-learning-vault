---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: microsoft-entra-id-fundamentals
url: "https://www.linkedin.com/learning/microsoft-entra-id-fundamentals"
duration_minutes: 131
duration: 2h 11m
level: Beginner
updated: 6/24/2024
learners: 6634
skills:
  - Microsoft Entra ID
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGdM-I2OouHxg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008944060?e=2147483647&amp;v=beta&amp;t=M4_Ml1E55Odn2dujrAcYvFXtAsj40gCFhF3oobqCBUM"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Optimizing Enterprise Security and Productivity Using Microsoft 365]]'
  - '[[Explore a Career in IT Support]]'
  - '[[Azure Administration for Beginners- Management Tools, Services, and Security]]'
  - '[[The Top Skills IT Professionals Have Right Now]]'
  - '[[Identity and Access Management in Azure]]'
  - '[[Advance Your Skills with Microsoft Entra ID]]'
prev_courses:
  - '[[Windows 10- Administration]]'
  - '[[Computer Components and Peripherals for IT Technicians]]'
  - '[[Azure Management Basics- Portal, PowerShell, Bicep, and CLI]]'
  - '[[SQL Server Intelligence- Cracking the Code of Enterprise Data]]'
  - null
  - null
next_courses:
  - '[[Securing Cloud Resources with Microsoft Defender for Cloud]]'
  - '[[Windows 10- Supporting Users Essential Training]]'
  - '[[Azure Networking and Security for Beginners- Tools and Services]]'
  - '[[Azure Administration Essential Training]]'
  - '[[Microsoft Azure- Identity and Access Management]]'
  - '[[Planning for Microsoft Entra ID]]'
path_nav: '[{"path":"Optimizing Enterprise Security and Productivity Using Microsoft 365","position":5,"total":11,"prev":"Windows 10- Administration","next":"Securing Cloud Resources with Microsoft Defender for Cloud"},{"path":"Explore a Career in IT Support","position":3,"total":11,"prev":"Computer Components and Peripherals for IT Technicians","next":"Windows 10- Supporting Users Essential Training"},{"path":"Azure Administration for Beginners- Management Tools, Services, and Security","position":4,"total":5,"prev":"Azure Management Basics- Portal, PowerShell, Bicep, and CLI","next":"Azure Networking and Security for Beginners- Tools and Services"},{"path":"The Top Skills IT Professionals Have Right Now","position":4,"total":10,"prev":"SQL Server Intelligence- Cracking the Code of Enterprise Data","next":"Azure Administration Essential Training"},{"path":"Identity and Access Management in Azure","position":1,"total":4,"prev":null,"next":"Microsoft Azure- Identity and Access Management"},{"path":"Advance Your Skills with Microsoft Entra ID","position":1,"total":3,"prev":null,"next":"Planning for Microsoft Entra ID"}]'
path_count: 6
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/devops
  - topic/it-help-desk
  - topic/security
  - topic/software-development
  - skill/microsoft-entra-id
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Microsoft%20Entra%20ID%20Fundamentals.md)

![Microsoft Entra ID Fundamentals](https://media.licdn.com/dms/image/v2/D560DAQGdM-I2OouHxg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008944060?e=2147483647&amp;v=beta&amp;t=M4_Ml1E55Odn2dujrAcYvFXtAsj40gCFhF3oobqCBUM)

# Microsoft Entra ID Fundamentals

> Microsoft Entra ID is Microsoft's cloud-based identity and access management service. In this beginning-level course, IT consultant and trainer Kunal D Mehta provides an introduction to Entra ID. Explore the place that Entra ID holds at the helm of all Microsoft cloud products. Learn why it’s needed today. Dive into key features that set Entra ID apart from its competitors, as well as information 

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals) | 2h 11m | Beginner | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (5 videos)
- **[[#1. Microsoft Entra ID Basics]]** (6 videos)
- **[[#2. Core Components of Entra ID]]** (6 videos)
- **[[#3. Standards and Compliance]]** (2 videos)
- **[[#4. Administering an Entra Tenant]]** (4 videos)
- **[[#Conclusion]]** (2 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### A world of modern identity
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=2)** - [Instructor] Let's take a moment to reminisce about the good old days of computing, what it looked like a couple of decades ago.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=10)** Back then, employees had one desktop, one set of credentials, needed access to very few applications, and worked out of their physical office spaces.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=22)** The digital world was a luxury, not an essential part of life as it is today.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=28)** So for IT administrators, managing user identities was simple.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=35)** However, technology evolved, and so did the complexity of managing identities.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=42)** The attack surface increased, threats grew more sophisticated, and identities became more prone to compromise.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=51)** In today's world, differentiating between a legitimate user and a bad actor is almost like driving through a thick fog with a cat as your navigator.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=63)** Given this change, security is now of our top most priority.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=68)** Identity and access management plays a crucial role in ensuring we navigate this complex landscape effectively by designing and implementing natively secure solutions.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=81)** I invite you to join me in this course where we discuss the evolution of identity, its challenges, and how to tackle them.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=91)** Welcome to Microsoft Entra ID Fundamentals.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### History of Active Directory
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=2)** - [Instructor] To appreciate the potential of Microsoft Entra in its full glory, it is essential to go back to its roots and trace the history of its development.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=13)** So let me take you through a quick overview of how it all began.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=19)** In the year 1999, Microsoft announced a preview of Active Directory for the first time, which subsequently made its way into Windows 2000 server and became generally available.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=35)** I started my IT journey with Windows Server 2008 back in college.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=41)** Between the years 2000 and 2008, there were three more iterations of the operating system, Windows Server 2003, then came Service Pack 1 and then Service Pack 2.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=54)** Each iteration of the operating system came with new advancements to Active Directory.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=60)** When I dove headfirst into Windows Server, Active Directory was no longer a monolithic service.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=68)** It had evolved into an umbrella of services, each designed to serve a specific purpose.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=75)** These services included Active Directory Domain Services, Certificate Services, Federation Services, Rights Management Services, and Lightweight Directory Services.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=87)** To manage them, we used tools such as Windows PowerShell and the Active Directory Administrative Center.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=95)** Since Active Directory was already quite advanced at this point, my learning curve was steep.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=102)** Then came the pivotal point that set the trajectory for today's generation of cloud computing.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=109)** In 2010, Windows Azure became generally available, along with Azure Active Directory.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=117)** I like to refer to the period from 2000 to 2010 as the server era, and from 2010 onwards, the cloud era, and it's not just me saying that.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=130)** In the year 2014, Microsoft CEO Satya Nadella also emphasized that in order to innovate for the future, businesses will have to adopt a mobile-first and cloud-first approach in their IT strategy.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=146)** That's also the year when Windows Azure was rebranded as Microsoft Azure, dropping the Windows prefix from its name.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=157)** While the cloud era ushered in the digital transformation movement, it also presented its own set of challenges.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=165)** Let us zoom into this period to understand the challenges we faced.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=171)** Typically in the server era, when a user needed access to an application, they would provide their credentials to a directory services server for authentication.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=182)** If successful, this server grants them an authorization token that they pass on to the application to gain access.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=191)** Since all three entities, the users, directory servers and applications were mostly on premises, managing this setup was relatively easy.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=202)** This is how things worked in the server era, but with the advent of the cloud era, things began to change.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=211)** Applications gradually started migrating to the cloud.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=216)** Now here's our first challenge.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=218)** How do you authenticate and authorize requests for access to apps in the cloud?
>
> **[3:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=224)** Some of you may suggest using the directory servers on premises.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=229)** Unfortunately, that isn't a good idea.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=233)** The cloud is known for its elasticity, scalability, high availability, and fault tolerance capabilities, whereas the on-premises infrastructure just cannot offer the resilience a cloud can.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=248)** This creates a dependency that could result in bottlenecks, or worse, complete inaccessibility of apps running in the cloud.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=258)** The second challenge is the fact that cloud apps use modern authentication and authorization protocols that may not be supported by the on-premises directory servers.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=270)** Attempting to use older legacy protocols would be an undesired adjustment.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=277)** The third challenge is that cloud apps are accessed over the internet, which is a dangerous place from a security perspective.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=286)** Unlike on-premises environments, nobody is physically present in the cloud.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=292)** That's another big challenge for us to solve.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=297)** The fourth and fifth challenges are employees today want to be productive everywhere, on the go or from any remote location.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=307)** They also want the freedom to use a device of their choice.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=312)** Striking the right balance between allowing users to be productive on their terms and maintaining organizational security is vital for us.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=322)** Microsoft Azure Active Directory was designed from the ground up to address these challenges.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=330)** That was a quick summary of what transpired in the cloud era and the fresh challenges it brought for us.
>
> **[5:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=338)** Then in 2023, Microsoft officially rebranded Azure Active Directory to Microsoft Entra ID.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=347)** Right now, we are at this juncture where it's the best time to learn about the Entra family, because the Entra family is still taking shape and only a few people have achieved expertise in it.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=362)** Microsoft's Identity Solutions are rock solid and Windows Server Active Directory is a testament to that fact.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=370)** I mean, Active Directory is still in use even after 24 years since its inception.
>
> **[6:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=377)** That rarely happens in the technological world, where most products have a life equivalent to a packet of cat food.
>
> **[6:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=386)** In my opinion, Entra ID is here to stay for at least the next decade or two.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=392)** The question is, are you ready to participate in this journey and level up your career?

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1)
> **Definitions:** is a  (2)
> **CLI Commands:** cat (1)
> **Env Vars:** ceo (1)
> **Cross-References:** go back to (1)
> **Tools:** powershell (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### The Microsoft Entra family
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=2)** - [Instructor] Microsoft Entra is a family of identity and access management solutions designed to help organizations manage identities, permissions, and policies for their cloud-centric environments.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=17)** The word Entra is derived from the Latin word intrare, meaning to enter, and that makes sense because verifying one's identity is the first step in entering or gaining access to a digital environment.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=34)** This family consists of the following members, Microsoft Entra ID, the heavy weight of the Entra family, also formally known as Azure Active Directory.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=46)** I know what you're wondering.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=48)** Why does Microsoft keep renaming their products?
>
> **[0:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=52)** It almost feels as if there's a dedicated person whose sole job is to change names.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=58)** But hear me out.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=60)** There are two excellent reasons why this rebranding was necessary.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=65)** Firstly, there was this constant confusion between Windows Server Active Directory and Azure Active Directory due to the similarity in names.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=76)** Secondly, the word Azure downplayed the product's capability.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=81)** Azure AD could not only work within Azure, but it also integrated with the on-premises environments and multi-cloud environments.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=91)** Its reach went beyond Azure, and hence, the new name, Microsoft Entra ID.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=98)** We will be discussing this product in greater detail throughout the rest of this course, but let me briefly describe what other members of the Entra family do.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=111)** Entra ID Protection helps us identify anomalies and respond to unusual sign-in attempts and risky user behavior.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=121)** Entra External ID allows us to securely collaborate with external partners by granting them access to internal resources using their own credentials.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=133)** Entra ID Governance provides us with the tools to ensure access to resources is in compliance with the organizational policies.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=143)** Entra Domain Services provides us with a platform to run legacy applications in the cloud that use older authentication protocols, like Kerberos and NTLM.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=156)** Entra Verified ID allows us to automate the verification and validation of user identities across organizations and third-party entities.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=168)** Entra Permissions Management provides us with a comprehensive visibility and control over permissions for resources in multi-cloud environments.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=178)** Entra Workload ID helps us configure managed identities for apps and services.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=186)** Entra Internet Access allows us to streamline access to Microsoft 365, SaaS apps, and other internet resources by redirecting user requests through a gateway running in Azure.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=201)** Entra Private Access works similar to Entra Internet Access, except that it streamlines access to the on-premises environment, private apps, and multi-cloud resources through the same gateway in Azure.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=216)** It is perfectly okay if these short descriptions don't give you a clear picture of the functionality of each member.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=225)** For now, just remembering the names should suffice.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=229)** As you progress through my Entra courses, you will get a deeper insight into the role of each member.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=237)** That being said, let's refocus on our core mission, which is to learn Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (2)
> **Definitions:** is a  (1), known as (1)
> **Env Vars:** ntlm (1)
> **Analogies:** picture (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=2)** - [Instructor] This course will cover the fundamental concepts of Microsoft Entra ID.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=9)** The first chapter is the introduction, which you are currently watching.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=14)** In the next chapter, "Microsoft Entra ID Basics," we will discuss the concept of identity and access, understand what Entra ID exactly is, we'll take a look at its architecture, and see how it differs from Windows Server Active Directory.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=33)** We will then move on to the chapter, "Core Competence of Entra ID," where we will learn how to set up hybrid identities, manage users, groups, devices, apps, and administrative units in Azure.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=51)** After that, we'll get to "Standards and Compliance."
>
> **[0:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=55)** Here, I'll talk about the industry standards Entra ID supports, and the regulatory compliance offering it adheres to.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=64)** Finally, we'll talk a little about administering an Entra tenant.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=70)** Here, I'll give you a trailer of what it's like managing an Entra tenant on a daily basis.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=77)** We'll also talk about features that can improve the security of our Entra tenant, and potential benefits that organizations can derive from deploying Entra ID.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=89)** I also have a case study for you showcasing one of my favorite companies and how they use Entra to increase employee efficiency and productivity.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=100)** We'll wrap up the course in the last chapter, the conclusion, where I'll summarize the key concepts you've learned in the preceding chapters.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=110)** This is a beginner-friendly course designed for learners who have very little to no experience with Microsoft Entra ID.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=120)** Hopefully, by the end of this course, you'll have a solid grasp of the key terminology, be able to explain what Entra ID is, how it functions, and perform basic tasks in a lab environment.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=134)** Although there are no mandatory prerequisites, having a basic understanding of Azure will be helpful.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=142)** If you are not familiar with Azure, no problem.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=146)** I have an entire learning path dedicated to Microsoft Azure Fundamentals.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=152)** It's one of the most popular and top-rated pieces of content on LinkedIn Learning, rated an average of 4.8 out of five, and watched by over 150K learners.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=166)** So, feel free to start your journey there if that sounds more relevant to you.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=172)** And for better retention of the concepts taught in this course.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=176)** I highly recommend taking physical, handwritten notes.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=180)** I have included a PDF in the exercise files that you can print and use to write notes.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=187)** I still use this old-school technique myself, and it works a lot better for me than simply watching a course or taking screenshots.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1), in the last (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** pdf (1)
> **Versions:** 4.8 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Prerequisites:** set up (1)

#### Microsoft Entra admin center
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=2)** - [Kunal] As you gear up to embark on this course, I'd like to offer you a little sneak peek into the Microsoft Entra Admin Center, which is the central hub specifically designed for managing all services of the Entra family.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=18)** Since this is only a sneak peek, I'm going to skip showing you the steps you need to take to get to the Admin Center.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=26)** At this point, my goal is to give you a glimpse of the Admin Center.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=31)** So this is our homepage.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=34)** If you are new, there is a link on the top to resources that will help you learn more about Microsoft Entra.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=42)** Then, if I scroll down, I can click here to view all products of the Entra family.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=49)** On the right, there are these guides to help you with whatever features you want to deploy in Entra.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=56)** Then if I scroll down further, there are quick navigation buttons that take me directly to the page where I can manage users, groups, devices, apps, and some other things we'll explore later on.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=73)** Below that, you can see small snippets of relevant blog posts and announcements.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=80)** This is what the homepage looks like, but here's what I want to do.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=84)** Let me scroll back up and then click on the View all products button.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=91)** As we learned earlier, these are all the members of the Entra family.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=96)** Directly under each member is a hyperlink that takes you to the page where you can manage that specific service, including Microsoft Entra ID, which is on top of the list.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=109)** I'll click on Done to exit out of this.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=113)** You can also use the blade on the left side to manage users, groups, devices, applications, and other Entra services listed here.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=126)** On the top right below the homepage, I can click on the What's new button to keep up with the latest and greatest of Microsoft Entra.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=135)** Like I said, this family is brand-new and still taking shape.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=140)** This page helps you keep up pace with all the new developments in Entra.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=146)** The Roadmap tab here lists exactly what features are coming up, along with category information, release type, and release date.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=156)** Similarly, right next to it is the Change announcements tab.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=161)** Here, you'll see a list of what is expected to change in an Entra service in the nearby future.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=169)** And that was a quick tour of the Microsoft Entra Admin Center.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=174)** I want to remind you that this interface is rapidly changing.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=178)** The Admin Center is a work in progress, so there's a good chance if you are looking at it using your own account, it may look slightly different.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=189)** Now, before we go any further, let me take a moment to introduce myself.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=195)** I am Kunal D Mehta, and I'm the Director at ServerBaba Consulting Private Limited.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=202)** This is an IT consulting and e-learning company based in Hyderabad, India.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=208)** We specialize in Microsoft data center and cloud technologies.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=213)** If you are interested in knowing more about the services we offer, please feel free to use the contact firm on my website, [serverbaba.com](https://serverbaba.com), or send me a message on LinkedIn.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), new, (1), this. (1), type, (1), interface (1)
> **UI Navigation:** click on (3), scroll down (2)
> **Definitions:** is a  (3), is an  (1)
> **URLs:** [serverbaba.com](https://serverbaba.com) (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [kunal] (1)


### 1. Microsoft Entra ID Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Identity and access
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=2)** - [Instructor] I hope you are as excited to begin this course as I am.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=6)** So lock your doors, throw the keys aside, and let's get started with the chapter, Microsoft Entra ID Basics.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=15)** Here I'll explain what Entra ID is, its architecture, and how it differs from Windows Server Active Directory.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=24)** Imagine you are flying off to an exotic international destination for your holidays.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=30)** What is the first piece of document you'll be required to show at the airport?
>
> **[0:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=35)** A passport.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=38)** The airport authorities will check the passport to see if everything looks good and then issue a boarding pass.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=46)** After flying for a few hours, you land at your destination.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=50)** Upon arrival, authorities typically require you to present a visa for entry.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=57)** This document outlines what you can and cannot do in that country.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=63)** For instance, if you have a tourist visa, you roam around and take pictures.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=68)** If you have a business visa, you go attend meetings.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=72)** You must stick to what your visa permits you to do.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=76)** You may be wondering, "What does this have to do with Entra ID?"
>
> **[1:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=81)** Well, there are several similarities between the aviation world and the computing world.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=88)** Let me connect the dots for you.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=91)** There, you need a passport to prove your identity.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=95)** Here, we use credentials for authentication.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=98)** Credentials in the form of a username and password to verify if a user really is who they claim to be.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=106)** There, a visa is used to determine the level of access, like what you can and cannot do in the destination country.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=115)** Here, we use permissions for authorization.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=119)** We use this to create a list of actions a user is allowed to perform, like create, read, update, and delete objects and resources.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=130)** There, you need a boarding pass to facilitate the trip.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=134)** Here, we are granted an access token that is valid for a sign-in session.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=140)** There, you have to go through multiple checkpoints before you can board the flight.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=145)** This is done for the safety of passengers, crew, and the aircraft.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=150)** Here, you implement multi-factor authentication to provide extra security for your digital assets.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=158)** And finally, the local government or the immigration department issues passports for their citizens.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=166)** And here, a directory services server provisions the credentials for users or employees.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=173)** The study of managing users, credentials, authentication, and authorization, directory services, and provisioning resources is called Identity and Access Management, abbreviated as IAM.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=190)** While this comparison may not be perfect, my intention behind this is to help you understand the significance of each step outlined in the process of Identity and Access Management.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), throw (1), require (1), delete (1)
> **Analogies:** imagine (1), for instance (1)
> **Env Vars:** iam (1)
> **Definitions:** is called (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### What is Microsoft Entra ID?
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=2)** - [Narrator] First things first. 2 What is Microsoft Entra ID? 3 It is an identity as a service running in Microsoft Azure. 4 With Entra ID, you can authenticate and authorize users 5 to grant them access to modern cloud applications. 6 And because this is a cloud service, 7 you don't have to worry about any underlying pieces 8 of the identity infrastructure, like directory servers, 9 replication, networking, backups, or anything else. 10 Microsoft manages all of that for you. 11 Entra ID allows you to manage users their credentials, 12 assign them administrative rights, 13 provide them access to resources, 14 and manage the entire lifecycle of these user accounts. 15
>
> **[0:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=53)** It also allows you to organize these user accounts 16 into groups so that you can manage them collectively 17 and enable them to collaborate among themselves. 18 Additionally, Entra ID enables you to manage all sorts 19 of devices as well, including desktops, laptops, 20 and mobile devices, running Windows, macOS, 21 Android, or iOS, the whole spectrum . 22 I consider users, groups, devices, and apps, 23 the four key pillars of a Microsoft Entra tenant. 24 That's because everything that Entra ID has to offer 25 mostly revolves around these four key entities. 26 Then many organizations worry that their existing 27 investments in Windows Server Active Directory 28
>
> **[1:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=105)** may go to waste because of Entra ID. 29 They imagine directory servers being decommissioned 30 and thrown out of the windows. 31 But let me tell you, that is not true. 32 Entra ID is not a replacement 33 for active directory on premises. 34 Instead, think of Entra ID as a means to extend 35 your identity network beyond the on premises 36 and into the cloud. 37 You can do this by integrating Windows Server Active 38 Directory with Entra ID. 39 This allows users in your organization 40 to seamlessly access applications across both environments. 41 So in a sense, what I'm trying to say is, 42 that Entra ID is hybrid ready. 43 Next, Entra ID is driven by open industry standards. 44
>
> **[2:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=157)** This is crucial to enable interoperability 45 and prevent vendor lock-in. 46 For example, Entra ID supports common web security protocols 47 like OpenID, OAuth, and SAML. 48 In addition, it also supports SCIM for cross-domain 49 identity management and FIDO 50 for passwordless authentication. 51 So that's about the industry standards. 52 Then when it comes to regulatory compliance, 53 Azure also has a great reputation there. 54 For example, it complies with international certifications 55 like ISO and SOC, complies with PCI-DSS required 56 by the payment card industry, complies with HIPAA required 57 to safeguard medical information of patients, 58
>
> **[3:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=206)** complies with FIPs, a federal standard 59 for information processing and GDPR, 60 which is European Unions latest set of guidelines 61 for data privacy of citizens in the EU. 62 These were just a few examples of the regulatory 63 compliances Azure adheres to. 64 All of this combined makes Entra ID one of the strongest 65 identity as a service providers out there.

> [!info]- Semantic Content
>
> **Env Vars:** saml (1), scim (1), fido (1), iso (1), soc (1)
> **Analogies:** for example (2), imagine (1)
> **Code Keywords:** else. (1), let (1)
> **Code Identifiers:** macos (1), ios (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Sign up for an Azure subscription
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=2)** - [Kunal] To get started with Entra ID, let us first sign up for an Azure subscription.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=9)** Even if you have prior experience with Azure and have done this before, I insist you walk through this demo with me because my intent here is to not just show you what's happening on the screen but also explain what's happening in the background.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=26)** I open the browser and head to the URL signup.[azure.com](https://azure.com).
>
> **[0:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=32)** It leads me to this page that you see on your screen.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=36)** Here, you'll need a Microsoft account to sign up.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=40)** I've already created one beforehand, so, I'll type in that, sbckdm@[outlook.com](https://outlook.com).
>
> **[0:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=48)** sbckdm is just an abbreviation of my company name and my name combined, Serverbaba Consulting, Kunal D. Metha.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=57)** That's all it is.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=59)** And then I'll click on the Next button, enter my password, and click on the Sign in button.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=66)** Do I want to stay signed in?
>
> **[1:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=68)** I'll tick the box, "Don't show this again," and click on Yes.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=73)** So at this point, I am signed into my Microsoft account.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=78)** Now we sign up for Azure.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=81)** Fill in your profile information.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=83)** My country is set to India. That's correct.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=87)** Try to be as accurate as possible when you're filling this in.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=91)** Put my middle letter in the middle name field, make sure my email address is correct, and then come down to the Phone Number field.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=101)** After you enter your number, you'll have to verify it using a one-time password sent to you, either through a text message or a phone call.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=111)** Further down, you'll have to fill in your company name, tax ID, and official address.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=118)** This information is required for billing purposes.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=122)** At the bottom, you have to mark the agree to terms and conditions checkbox and then click on the Next button.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=130)** I'll pause the video here.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=132)** Complete these steps and resume the video on the next page.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=137)** After completing your profile, you'll be directed to this page where you'll be asked to provide your credit card information.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=146)** But don't worry, we are signing up for a free Azure trial.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=151)** You will not be charged unless you deploy a paid service and keep it running after the trial period is over.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=160)** I'll enter my name and my credit card details on this page.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=165)** Now I don't want my learners to be shopping on my card, so I'll pause the video, complete these steps, and resume again on the next page.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=175)** Once the credit card is verified, this payment method will be associated with your Azure account for billing.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=183)** You can see my card is added to my Azure account.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=187)** Let us double check everything before clicking on the Sign up button.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=193)** So here it says after sign up, Azure should provide us with its popular services free for one year, more than 55 services always free, and about 13,300 Indian rupees in credit to use in the first 30 days.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=210)** That's roughly around 200 US dollars.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=214)** Everything looks good, so I'll click on the Sign up button.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=219)** Here, it gives me a nice little tip saying, "Enabling multi-factor authentication can block more than 99.9% of identity attacks."
>
> **[3:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=229)** That's good to know.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=230)** For now, I'll click on the Next button and enter my password again to sign into Azure.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=238)** Let me type that in.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=239)** If your Microsoft account is new, you may be requested to take a few additional steps, such as adding an alternate email or phone number just so that you don't lose access to your account.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=253)** Once all that is done, this is what you should see.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=257)** My sign in experience was good, no problems.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=260)** So click on the smiley here, and that is it.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=264)** This Quickstart landing page is what you should see for the first time after successfully signing into Azure.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=272)** I can show you that this, in fact, is the same account.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=275)** If I click on top right here, the email is sbckdm@[outlook.com](https://outlook.com) and note it says "DEFAULT DIRECTORY."
>
> **[4:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=285)** If we want to explore the subscription a little more, I can go to the search box here on the top and search for Subscriptions.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=294)** There it is.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=296)** The name of our subscription is Free Trial.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=300)** I'll click on that to go into more details.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=303)** This is the overview page of our subscription named Free trial.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=309)** Since we just signed up for this account, there is no information populated yet.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=314)** Keeping that aside, I want to draw your attention here.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=318)** Notice how it says "Default Directory," and there's a domain in the brackets, sbckdmoutlook.on [microsoft.com](https://microsoft.com).
>
> **[5:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=329)** So Azure took my email address string and provisioned a temporary domain name for me based on that string.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=339)** Now let's switch back to the slides.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), open the (1), checkbox (1), go to (1)
> **Code Keywords:** let (4), new, (1), this, (1), switch (1)
> **URLs:** [outlook.com](https://outlook.com) (2), [azure.com](https://azure.com) (1), [microsoft.com](https://microsoft.com) (1)
> **Env Vars:** url (1), default (1), directory (1)
> **CLI Commands:** make (1)
> **Versions:** 99.9 (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### Entra ID architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=2)** - [Instructor] When you sign up for a new Azure subscription, there is a specific order in which Microsoft provisions your account.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=10)** Despite what you may think, your subscription is not the first thing that comes into existence.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=17)** Instead, an Entra tenant is created at first, also known as the default directory because it's automatically created during the signup process.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=28)** This tenant serves as the universal set for all your cloud assets.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=34)** Then within this tenant, a route management group is created, and the subscription you sign up for is placed under this route management group.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=44)** This hierarchy that you see is already in place the first time you log into the Azure portal.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=51)** We then create resource groups under the subscription to hold our cloud resources.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=57)** It is very important for Azure administrators to remember this order.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=63)** Just in case you are new to Azure, you may use my trick to remember it.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=68)** Take the initial letters and make a sentence.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=71)** I prefer the phrase, "MeGa Shopping RaGe Returns".
>
> **[1:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=75)** I've taught several such tricks in my Azure Fundamentals Learning Path, so make sure to check that out after this course, if you're interested.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=85)** Now, let's take a closer look at the Entra tenant.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=89)** Underneath this tenant is the primary partition.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=93)** It's like a database that stores all the user objects, group objects, device objects, security identifiers, and core metadata about the tenant.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=105)** It's fairly accurate to say that this is the brain of your Azure account, which begs the question, where does it live?
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=114)** It is deployed in a data center at the location we choose when we sign up for Azure.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=120)** For example, if you select United States during the signup, this primary partition will be deployed in a data center in the U.S.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=130)** Choosing the right location is important to ensure the partition is in close proximity to the end users and complies with the organization's data residency requirements.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=143)** The primary prefix here indicates that this is a writeable copy.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=148)** Any actions such as creating, updating, or deleting objects in the Entra tenant is executed on this primary partition.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=158)** It is then replicated to read-only copies of the partition in the data center for redundancy.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=165)** If the primary partition fails, the right requests can quickly be redirected to another partition in the data center.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=174)** But if you observe, this design is insufficient in protecting your data against data center-wide failures, which can happen due to any catastrophic event in and around the data center.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=189)** But there is no need to panic because Microsoft has got us covered.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=194)** To protect against such incidents, the partition data is not only replicated within the data center, but also across multiple data centers.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=205)** These copies are called secondary replicas.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=209)** This cross data center replication happens over the Microsoft Backbone Network, which powers its cloud services and not the public internet.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=219)** This ensures safety and security.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=223)** The primary partition is writeable, whereas the secondary replicas are just read-only.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=230)** These secondary replicas are what allow Entra ID to scale globally and provide identity services to users around the world, regardless of their location.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=242)** In an event where the entire data center fails, a secondary replica can take over the role of a primary to provide business continuity.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=252)** This means your data is not only protected against small glitches at the partition level, but also if the whole data center gets destroyed for whatsoever unfortunate reason.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=266)** Okay, now I have a small confession to make.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=270)** There is a small inaccuracy in my diagram here.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=273)** As you can see, there are three copies of the partition in each data center, and there are three such data centers, but in reality, there are at least nine replicas in each data center, and those are replicated across at least four data centers.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=293)** If we do the math here, it comes down to at least 36 replicas or copies of the primary partition.
>
> **[5:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=301)** Imagine the amount of redundancy this brings to the table.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=306)** So much so that my slides couldn't accommodate it.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=310)** If the thought of managing so many replicas scares you, let me remind you that Entra ID is a cloud service, meaning you don't have to deal with any underlying configuration of the service.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=324)** It is all orchestrated by a gateway service, including which partition is up, which one isn't, how to handle the replication, and where to redirect the read/write requests.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=337)** It's all done by this gateway service, and that makes Entra ID highly robust.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=345)** So to put things into perspective, administrators like us interact with the Azure Resource Manager using management tools, which in turn communicates with the Gateway service, and this Gateway Service handles everything after that, ensuring all systems run smoothly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1), protected (1)
> **Definitions:** is a  (4)
> **Analogies:** it's like (1), for example (1), such as (1), imagine (1)
> **CLI Commands:** make (3)
> **Tools:** azure portal (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Configure the default directory
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=2)** - [Instructor] Let's take a tour of our Entra tenant and configure the default directory.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=9)** In this demo, we'll try to reinforce our learnings from the last video and in the process, add our own custom domain to the tenant.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=19)** It is critical to add the custom domain before onboarding users and granting them access to services in Azure.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=28)** This is where we left off in the last demo, where we signed up for Azure.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=34)** Towards the end of that demo, I highlighted the name Default Directory and the temporary domain automatically provisioned at signup, which was sbckdmoutlook.[onmicrosoft.com](https://onmicrosoft.com).
>
> **[0:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=50)** Let me click here to go to the homepage.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=54)** Now, if you are thinking this interface looks different from the one we saw in the introduction chapter, you're right.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=62)** That was the Entra admin center, a central location to manage all Entra services, but this is the Azure portal.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=72)** When we sign up for Azure, it takes us to the Azure portal by default for managing Entra ID and other Azure resources.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=82)** I'll use the search box on the top to look for Entra ID.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=87)** There it is, I'll click on that.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=90)** Here's the overview page for our Entra tenant.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=94)** There's some basic information and alerts, including the first one, telling us that Azure AD is now Microsoft Entra ID.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=104)** You already know that because you're watching this course.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=108)** If I scroll down in the my feed section, the first link is to the Entra admin center.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=116)** If I click on this, it will take me to the same admin center you saw in the sneak peek video.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=123)** Right next to it is my user information and my role in the tenant.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=128)** Since I was the one who signed up for this subscription, I'm designated as the global administrator.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=136)** That's the top level.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=137)** It also shows on the right, we've never run Entra Connect because this tool is used to configure hybrid identities and we are just getting started.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=148)** Below, there are some feature highlights and quick action buttons to help us add a user, a group, and to provision and register applications.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=159)** Let me scroll back up and then click on the monitoring tab.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=164)** This gives me a quick overview of all user sign-ins.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=168)** There is no information here yet because we are in a brand new subscription.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=174)** Let us move on to the properties tab, and there it is.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=179)** We can change the name of this directory from here.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=183)** I don't quite like the Default Directory name.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=186)** I want the name to reflect my brand, so let me rename it to ServerBaba Directory.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=194)** This looks good to me.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=195)** I will leave the other values below to its defaults.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=199)** I will then go down here and toggle this setting to yes, under the access management for Azure resources.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=208)** For security reasons, some settings are hidden and restricted by default, even for global administrators.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=216)** So switching this toggle to yes allows us to view and make changes to those settings.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=223)** Since we are in a test environment, this is not really a problem, but in production, you may want to keep this setting on no.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=233)** I'll scroll down and click on the save button to save the changes I just made.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=239)** It may take a couple of seconds for the changes to apply.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=244)** Okay, the notification on the top right corner says successfully updated tenant properties.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=250)** That's good news.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=252)** Let me just refresh the page, and yes, we can see the name has changed to ServerBaba Directory.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=260)** On the left side, you can use this blade to manage users, groups, enterprise applications, devices, and other Entra ID settings.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=272)** But what we are interested in right now is the custom domain names page.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=277)** Let me click on that.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=280)** This is our temporary default domain, sbckdmoutlook.[onmicrosoft.com](https://onmicrosoft.com).
>
> **[4:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=288)** Now, I don't want our users to have this domain in their principle name and email addresses.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=295)** It's not easy to spell and doesn't look professional.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=299)** I want a domain that reflects my brand name, that is ServerBaba.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=305)** So what I'll do is I'll click on add custom domain button on the top and type in the domain I already own for my brand.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=315)** That is ServerBaba.in.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=319)** Note that my actual company domain is [serverbaba.com](https://serverbaba.com), but for this course, I'll be using the serverbaba.in domain for testing.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=329)** After doing that, I'll click on the add domain button here at the bottom of the page.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=336)** We are not done yet.
>
> **[5:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=338)** I also have to prove Microsoft that I own this domain.
>
> **[5:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=343)** To do that, Microsoft requires me to either add a TXT record or an MX record in the DNS settings of my domain.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=352)** These are the values you'll need to enter in the TXT record to prove your ownership.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=358)** Now, the next set of steps will vary depending on who your domain registrar is.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=364)** Mine is GoDaddy.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=367)** So in the interest of saving us some time, I'll pause the video here, configure the TXT record on my DNS server, and then come back.
>
> **[6:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=377)** All right, so I have added this TXT record in my domains DNS and waited for a couple of minutes.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=384)** Let's click on the verify button to see if this worked.
>
> **[6:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=388)** That's awesome.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=390)** So it says successfully verified domain name serverbaba.in.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=395)** It is important to note that although it just took two minutes for me, it can take up to 72 hours for the DNS records to propagate across the global DNS servers.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=407)** So this step may require additional time from organization to organization.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=413)** Let me close out of this page and then refresh.
>
> **[6:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=418)** You can see serverbaba.in is now added to the list of my custom domains.
>
> **[7:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=425)** Before we can start using this domain, there is one more step to complete.
>
> **[7:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=431)** I need to mark this domain as the primary as opposed to the older one.
>
> **[7:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=437)** You can see the primary is still the temporary domain.
>
> **[7:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=442)** To change this, I'll click on my domain serverbaba.in and click on the make primary button on top.
>
> **[7:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=450)** Click yes on the confirmation box, and within a few seconds, you should see this success notification.
>
> **[7:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=459)** Let me close out of this and go back and refresh the page.
>
> **[7:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=464)** That's great.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=465)** You can see this is now our tenants primary domain.
>
> **[7:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=470)** This little tick next to our domain denotes that.
>
> **[7:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=474)** If I go back to the overview page, you can see the domain change reflects here as well.
>
> **[8:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=481)** It now says serverbaba.in.
>
> **[8:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=484)** So essentially what we did so far was we renamed the default directory to ServerBaba Directory and then added, verified, and made our custom domain serverbaba.in as primary.
>
> **[8:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=500)** This part is over.
>
> **[8:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=502)** Now let me use the search box and go to management groups.
>
> **[8:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=507)** There it is.
>
> **[8:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=509)** This is the overview page for management groups.
>
> **[8:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=513)** I'll click on the start using management groups button, wait for a few seconds and then refresh the page.
>
> **[8:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=522)** This is what I was talking about in the architecture video.
>
> **[8:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=526)** When you sign up for Azure, first the tenant is created, then the root management group is created and placed inside the tenant.
>
> **[8:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=537)** And finally, the subscription itself is placed under this root management group.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), interface (1), default, (1), require (1)
> **UI Navigation:** click on (10), go to (2), scroll down (2), toggle (2)
> **Env Vars:** dns (5), txt (4)
> **Prerequisites:** configure (3), getting started (1), you'll need (1)
> **URLs:** [onmicrosoft.com](https://onmicrosoft.com) (2), [serverbaba.com](https://serverbaba.com) (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), go back to (1)
> **Tools:** azure portal (2)

#### Active Directory vs. Entra ID
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=2)** - [Instructor] By now, you should have a good idea of what Entra ID is all about.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=8)** If you have experience as an Active Directory administrator, it's natural to think that Entra ID is simply the cloud version of Active Directory.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=18)** Although both products aim to provide identity and access, their foundational elements are quite different.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=27)** Active Directory is an on-premises, Windows server based solution, whereas Entra ID is an Identity as a Service solution built into Microsoft Azure.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=40)** Then Active Directory uses multi-master replication model where there are multiple writeable partitions of the directory.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=49)** Whereas Entra ID uses a single master replication model where there is only one writeable, primary partition, and all of the copies are read-only replicas.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=61)** I illustrated that in the Entra ID Architecture video.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=66)** Then Active Directory has sub-domains and domains, and you can combine domains into trees and trees into forests.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=77)** It has a multi-level topology, whereas Entra ID has a flat hierarchy across the tenant, which means all objects of the tenant are at the same level and equal members of the domain.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=92)** Speaking of domains, Active Directory allows you to use any local or internet domain.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=99)** A local domain is one that cannot be queried through the global DNS servers.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=105)** A classic example is the .loc domain, which many of you may have worked with if you have experience in AD.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=114)** But with Entra ID, you can only use a public-facing internet domain.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=120)** By that, I mean you should be able to resolve it by querying the global DNS servers, and it should be publicly routable.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=129)** You cannot use a .loc or similar domains in Entra ID.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=135)** Then in Active Directory, we use NTLM and Kerberos protocols for authentication, and we use LDAP for interacting with directory services, whereas Entra ID leverages modern protocols, such as OpenID, OAuth, and SAML, for authentication and authorization.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=156)** And we use the Microsoft Graph API to access and interact with Microsoft Cloud Service resources, including Entra.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=167)** Finally, there we have the Active Directory Administrative Center, which is an MMC built on top of PowerShell, used to manage all things related to Active Directory.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=179)** On the other hand, here, we have the web-based Microsoft Entra Admin Center.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=185)** This is our home for managing all services in the Entra family, but if you only want to manage Entra ID, you can use the Azure portal for that.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=197)** We will also be using the Azure portal in this course to manage Entra ID.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=203)** The Entra Admin Center is still in its initial stages, and the UI is constantly changing.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=210)** I already gave you a sneak peek of what it looks like in the Introduction chapter, so for the remainder of this course, it makes sense for us to stick to the Azure portal for consistent user experience.

> [!info]- Semantic Content
>
> **Env Vars:** dns (2), ntlm (1), ldap (1), saml (1), api (1)
> **Tools:** azure portal (3), powershell (1)
> **Definitions:** is an  (3)
> **Code Keywords:** public (1), finally, (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Core Components of Entra ID

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understand Entra Cloud Sync
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=2)** - [Instructor] I hope you now have a firm grasp of the basic concepts.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=6)** In this chapter, let us deconstruct and examine the core components of Entra ID.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=13)** Here, we'll talk about managing users, groups, devices, and applications in the cloud.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=21)** It is possible for small businesses to run their entire organization in a purely cloud-only configuration without any enterprise hardware on-premises.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=32)** But medium to large enterprises often have a significant presence of on-premises infrastructure.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=39)** This includes Windows Server Active Directory servers providing directory services to users, groups, applications, and devices.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=49)** In such cases, taking a hybrid approach is recommended.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=53)** This allows businesses to keep their on-premises investments intact, and at the same time, leverage the goodness of Azure and Entra ID.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=64)** A hybrid cloud enables organizations to migrate workloads to the cloud at a pace they are comfortable with, and also provides users with seamless access to resources spanning across both environments.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=79)** This is accomplished by synchronizing a copy of the Active Directory user objects, group objects and device objects to Entra ID.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=90)** There are two ways to do that.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=93)** The first option is to use the Entra Connect tool.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=97)** It requires installation on a Windows Server machine on-premises, along with the SQL Server database to store the synchronization metadata.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=107)** Keeping the server up and running is essential for the hybrid identity infrastructure to function.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=114)** The second option is to use the Entra Cloud Sync tool.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=119)** This is cloud-based and only requires installing a small piece of software on-premises, which in turn talks to the Cloud Sync Service in Entra ID.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=130)** As opposed to Entra Connect, you don't have to deploy a dedicated server or a database in this case.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=137)** Keeping the Cloud Sync service up and running is Microsoft's responsibility.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=143)** Although at this point Entra Clouds Sync may seem like a better option, Entra Connect offers many granular level customizations that Cloud Sync doesn't.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=154)** One big example of this is Cloud Sync does not support the synchronization of device objects.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=161)** While users, groups and devices can be synchronized using these tools, migrating applications to the cloud is a more complex process that depends on various factors.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=174)** We will discuss this in more detail later in this chapter.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=178)** For now, let's try to understand Entra Cloud Sync a little better.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=184)** Throughout this fundamental course, if there are multiple ways to achieve a goal, I'll try to focus on the one that follows a cloud-first approach.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=193)** Therefore, my pick for the time being is going to be Entra Cloud Sync.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=199)** We'll talk more about Entra Connect in another course.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=204)** So what exactly is Entra Cloud Sync?
>
> **[3:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=208)** It is a powerful cloud-based tool that integrates Windows Server Active Directory with Microsoft Entra ID, allowing users to access applications across both on-premises and the cloud using a single set of credentials.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=225)** This simplifies identity management for administrators like us.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=231)** To configure this, we need to install a lightweight provisioning agent on-premises.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=237)** When I say lightweight, I mean it's a small piece of software that needs very little resources to run, especially compared to the footprint of running a full fledged deployment of Entra Connect.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=251)** This lightweight agent communicates with the Cloud Sync service and keeps objects across environments consistent and up to date.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=260)** Keeping the agent up and running is our responsibility.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=264)** While Microsoft is responsible for keeping the Cloud Sync service up and running, the type of objects we can synchronize using this tool are users, groups, and contacts.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=279)** It's worth noting that the synchronization process happens with high fidelity.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=284)** This means all the essential attributes of the objects inActive Directory are accurately carried over to their synchronized counterparts in Entra ID.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=296)** You also get full control of which objects you want to synchronize to Entra ID.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=302)** You can filter objects based on domains, organizational units, and groups.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=309)** For instance, if your organization has multiple domains, you can select to synchronize objects only from specific domains, and even within those specific domains, you can include or exclude specific organizational units.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=326)** If you want more control, you can configure attribute based filtering.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=331)** The decision whether an object gets to synchronize or not can be based on its specific attributes.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=339)** But mind you, that functionality is only available in Entra Connect, not with Cloud Sync.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=347)** And what's interesting is that while object synchronization occurs one way, that is, from on-premises to the cloud, the flow of configuration changes is bidirectional.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=359)** This means that minor changes that you make to the copies of the object in the cloud can be written back to the original object on-premises.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=368)** For example, if a synchronized user changes their password in Azure, Cloud Sync will go ahead and change their password in Active Directory as well.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=380)** This is known as a write-back.
>
> **[6:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=382)** I am sure you understand why it is needed, because if the same user has two different passwords for two different environments, things would get confusing really soon.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=395)** This write-back that I mentioned is only applicable to minor changes.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=400)** For any major change, the source of authority for such objects is Windows Server.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=406)** For instance, if you want to delete an object, you must delete it on-premises, not in Entra ID.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=413)** Once you delete the original object, the synchronization service will go ahead and delete its copy in the cloud.
>
> **[7:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=421)** It is not possible to delete the copy in the cloud and expect the original object to disappear from Active Directory.
>
> **[7:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=429)** This is because the source of authority for all synchronized objects is Windows Server.
>
> **[7:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=435)** A unique capability of Entra Cloud Sync is being able to connect multiple disconnected on-premises Active Directory forests to a single Entra tenant for synchronization.
>
> **[7:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=448)** This feature comes in handy, especially during corporate mergers where you may have multiple forests and the new management wants to adopt Entra ID without maintaining multiple Entra tenants.
>
> **[7:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=462)** With this feature, you can consolidate Active Directory objects from disconnected forests into a single tenant.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (2), function (1), case. (1), this, (1)
> **Definitions:** is a  (2), means that (1), known as (1)
> **Analogies:** for instance (2), for example (1)
> **Prerequisites:** configure (2), install (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** inactive (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)

#### Manage users
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=2)** - [Presenter] As an Entra administrator, it is important to have a comprehensive understanding of the four key pillars of an Entra tenant.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=11)** Those are users, groups, devices, and applications.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=16)** Let's start with users.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=19)** Here's the first rule of thumb to remember.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=22)** The lifecycle of user accounts depends on their source of authority.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=27)** As we learned earlier, most organizations operate in a hybrid fashion, with only a few having a standalone cloud-only environment.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=37)** Due to this, there's going to be a mix of different types of users in any tenant.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=43)** That is why understanding the concept of source of authority will help you manage users appropriately.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=51)** Federated users are managed and authenticated in Active Directory, which is their source of authority, because that is where they are created.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=62)** These users are synchronized from environments where both Active Directory Domain Services and Active Directory Federation Services are deployed.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=72)** When a federated user attempts to sign into Azure, their sign-in session is redirected to the federation servers on-premises for authentication.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=82)** This is because their password hashes are only stored in Active Directory and not synchronized to Azure.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=90)** Then we have synchronized users that can be authenticated in either Active Directory or Microsoft Entra ID.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=98)** The source of authority for these user accounts is, again, Active Directory, because that is where they are created.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=106)** These users are synchronized from environments where we just have Active Directory Domain Services deployed.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=114)** When a synchronized user attempts to sign into Azure, they can be authenticated directly in Azure without any intervention from Active Directory, because their password hashes are not only stored in Active Directory but also synchronized to Azure.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=132)** Federated and synchronized accounts are meant for users who require access to both on-premises and cloud resources.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=141)** They can authenticate against Active Directory to access local resources, and against Entra ID to access cloud resources.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=151)** Next, we have cloud-native users that are entirely managed in Microsoft Entra ID.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=158)** There is no synchronization involved.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=161)** The source of authority for these user accounts is Entra ID, because that is where we create them.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=169)** Their entire lifecycle starts and ends in Azure.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=173)** When a cloud user attempts to sign into Azure they are natively authenticated in the cloud, because both their user object and password hash is stored in the cloud.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=185)** These users can take advantage of modern cloud-grade features in Entra ID, and have no dependency on any on-premises infrastructure.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=196)** We create cloud-native accounts for users who primarily need access to apps and resources in Azure.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=204)** Since the scope of operation of this account is confined to Azure, it means a cloud user will not be able to authenticate against Active Directory on-premises.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=216)** At this point, you should have a clear understanding of which account to create and use in what scenario.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=224)** Let me give you a quick recap.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=226)** If users need access to resources in both environments, passwords must be stored only on-premises and the authentication should only happen on-premises, you go with federated users.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=239)** This is the most conservative approach.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=243)** Then, if users need access to resources in both environments and you are okay with storing passwords in the cloud, and authenticating users in the cloud, you go with synchronized users.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=256)** This is a more balanced approach.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=259)** Then, if users primarily need access to apps and resources in the cloud, and almost minimal to none on-premises, you go with cloud-native users.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=270)** This is the most modern and cloud-first approach you can embrace among these three options.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=277)** In general, it is common for an Entra tenant to have mixed users, either a combination of federated and cloud-native users or synchronized and cloud-native users.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=290)** The existence of federated and synchronized users is mutually exclusive.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=296)** Once these user accounts populate in your Entra tenant, you can assign Entra roles to grant administrative rights to your users.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=306)** These roles can be assigned to cloud-native users as well as synchronized or federated users.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=313)** Entra roles help you define the level of access and permissions users have within the tenant.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=321)** To put things into perspective, let's get into a demo showcasing how to create new user accounts in Entra ID.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=331)** We are back on the homepage of the Azure portal.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=335)** If you notice, I made a minor tweak to its appearance.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=339)** I turned on the dark mode.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=341)** Other than that, everything is as it was in the last demo.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=345)** Let's click on Microsoft Entra ID here to go into our tenant's overview page.
>
> **[5:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=351)** Here you can see it's the same account.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=354)** ServerBaba Directory, primary domain is serverbaba.in, license is Microsoft Entra ID free and there's only one user account at the moment, which is the one I'm using right now.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=368)** Over the length of this chapter we will be adding users, groups, devices, and applications to our tenant, so pay attention to these numbers here.
>
> **[6:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=379)** To create new users, I'll go to the users here on the left side and click on it.
>
> **[6:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=386)** As you can see, there's only one user account, and that's mine.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=390)** I created this Microsoft account before signing up for Azure, which means it is external to Azure.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=398)** I suggest that once your Azure subscription is set up, create a strong password for this account and keep it reserved for emergency use only.
>
> **[6:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=408)** So the first action I'll perform is to create a cloud-native user account for myself that I can use regularly and belongs to this Entra tenant.
>
> **[6:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=419)** To do that, I'll click on the New User button here on the top and then click on Create New User.
>
> **[7:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=427)** That should bring us to this Create New User page.
>
> **[7:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=431)** I'll type in my user principal name, kunal@serverbaba.in.
>
> **[7:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=438)** We can see this domain listed here because we added, verified, and set it to primary in the last demo.
>
> **[7:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=446)** The default mail nickname looks good to me.
>
> **[7:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=449)** I want my display name to be Kunal D Mehta, then I'll copy the autogenerated password onto the clipboard to sign in and change it later.
>
> **[7:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=460)** Below that, I want the account to be enabled after creation, so I'll leave this checkbox as it is.
>
> **[7:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=468)** Then I'll go down here and click on this button to go to the next properties page.
>
> **[7:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=474)** Here, it'll ask you for basic information about the user.
>
> **[7:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=479)** Since this is my account, I'll be entering my information.
>
> **[8:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=483)** First name, Kunal.
>
> **[8:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=485)** Job title, IT administrator.
>
> **[8:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=490)** Company name, ServerBaba Consulting.
>
> **[8:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=495)** Then Department, IT.
>
> **[8:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=497)** Office location, Hyderabad.
>
> **[8:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=501)** Then I'll scroll down a little bit.
>
> **[8:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=504)** City, Hyderabad again.
>
> **[8:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=507)** Country or region, India.
>
> **[8:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=510)** Below that, age group, adult.
>
> **[8:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=514)** And Usage location set to India.
>
> **[8:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=519)** I'll recheck everything to make sure there are no mistakes.
>
> **[8:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=523)** While it is not mandatory to fill in this information, I strongly recommend you do it, mainly because some Entra ID features depend on it and it also gives your employees a rich user experience to work with.
>
> **[8:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=538)** Once I'm done, I'll click on the Next Assignments button down here.
>
> **[9:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=544)** On this page, I can add this user account to administrative units, groups, or assign Entra roles to it.
>
> **[9:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=552)** Because this is going to be my account, I want to assign administrative privileges to it.
>
> **[9:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=558)** To do that I'll click on Add Role, search for Global Administrator, check the box next to it, and then click on the Select button at the bottom,.
>
> **[9:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=569)** You can see the Global Administrator role has been selected for assignment.
>
> **[9:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=575)** I'll move on to the next review and create page by clicking on this button below.
>
> **[9:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=581)** Here I'll double-check everything to make sure all information entered on the previous pages is correct, and there are no mistakes.
>
> **[9:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=590)** It looks perfect to me.
>
> **[9:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=591)** I'll finally click on the Create button.
>
> **[9:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=595)** It'll take a couple of seconds and then bring me back to the Users page.
>
> **[10:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=600)** On the top right corner of the page, you can see a success notification.
>
> **[10:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=605)** That's always good news.
>
> **[10:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=607)** I'll refresh the page, and there it is.
>
> **[10:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=611)** Let me just adjust these columns a little bit to make sure you can see all the fields clearly.
>
> **[10:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=618)** This is my new user account.
>
> **[10:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=621)** Its user principal name is Kunal@serverbaba.in and the value of its On-Premises Sync Enabled column is no.
>
> **[10:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=630)** This proves that it is a cloud-native user account in the ServerBaba Directory.
>
> **[10:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=636)** To save us precious time I'll now pause the video, repeat this process nine more times, and then come back and join you.
>
> **[10:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=647)** All right, so here we are.
>
> **[10:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=649)** I created cloud-native accounts for Alex, Emily, Georgina, Marcus, Nick, Oliver, Ryan, Taylor, and Zoe.
>
> **[11:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=660)** That's because I wanted a total of 10 cloud-native user accounts, and we have it here.
>
> **[11:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=667)** I'll click on Manage View and then Edit Columns.
>
> **[11:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=671)** I'll get rid of the columns On-Premises Sync Enabled, Identities, Company Name, and Creation Type.
>
> **[11:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=679)** Instead, I'll add the Department and City columns.
>
> **[11:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=686)** You can now clearly see what values I filled in for the Department and City attributes when I was creating them.
>
> **[11:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=695)** Alex, Emily, and Nick are from the sales department in the city of London.
>
> **[11:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=700)** This is my account and this is Georgina's account, who also works in IT but from New York City.
>
> **[11:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=708)** These attributes will come into play in the next demo.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (10), go to (2), checkbox (1), scroll down (1)
> **Code Keywords:** let (5), this, (1), require (1), type. (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the last (2), in the next (1)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** set up (1)

#### Manage groups
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=2)** - [Instructor] Now let's talk about groups.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=5)** Similar to users, the lifecycle of groups also depends on their source of authority.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=11)** Groups created on-premises are managed with Active Directory, and groups created in Azure are managed with Entra ID.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=19)** First, we have synchronized security groups that are managed in Active Directory.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=26)** You create these groups on-premises, add members to them, and then synchronize them to the cloud.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=33)** What's convenient is that the membership of these groups is preserved post-synchronization, so users who are members of the group in Active Directory will continue to be members of the synchronized security group in the cloud.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=48)** This type of group is used when a set of users require access to both on-premises and cloud resources.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=57)** Then we have cloud-native security groups that are managed in Entra ID.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=64)** These are created in the cloud, and there is no synchronization involved.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=69)** Their entire lifecycle starts and ends in Azure.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=73)** As you may have guessed already, this type of group is used when a set of users primarily require access to cloud resources.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=82)** The similarity between synchronized and cloud-native security groups is that both these groups are intended to grant users access to resources.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=93)** These groups provide ease of administration by allowing us to grant access to resources collectively instead of granting access to each individual user.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=106)** Next, we have Microsoft 365 groups, and their main purpose is to enable collaboration among users in Azure.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=115)** These are also cloud-native because they are created and managed in Entra ID.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=121)** They do an excellent job of improving communication and productivity among users.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=129)** Now, how does it enable collaboration, if you ask?
>
> **[2:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=133)** It does so by provisioning a shared mailbox, shared calendar, document libraries, and other collaborative tools for its members through seamless integration with Outlook, SharePoint, and Teams.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=147)** It is important to keep in mind that Microsoft 365 groups enable collaboration among users by providing them with shared workspaces.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=157)** Whereas, on the other hand, security groups grant users access to resources.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=163)** Their goal is to reduce the administrative burden for us.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=168)** Moving on, cloud-native groups have another interesting new feature where their membership type can be set to either assigned or dynamic.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=179)** In groups with assigned membership, an administrator manually adds or removes members to it, just like we normally do in Active Directory.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=189)** But in groups with dynamic membership, we configure rules to determine who should be a member of the group and who shouldn't.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=197)** These rules can be based on attributes of the user such as city, country, department, or job title, and many more.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=207)** If the defined rule is satisfied, a user is automatically added to the group.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=213)** Let's jump into a demo that illustrates how to create new groups in Entra ID.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=221)** Between the last demo and this one, I made one small change.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=226)** I upgraded my Entra ID license from the free plan to a trial of the Premium P2 plan.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=233)** I did this off the screen because it's a simple process where you enter your billing address and activate the trial.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=240)** There are no technical steps involved.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=243)** So continuing with our demo, I'll first head to the Groups page.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=248)** To create a new group, I'll click on the New Group button here at the top.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=253)** That should bring me to this New Group page.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=257)** What I want to do right now is to create a new cloud-native security group for the IT team.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=264)** So I'll leave the group type to Security, name it IT Team, leave the group description field blank for now.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=273)** And then if I look below, the membership type is Assigned.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=278)** Do I want to enable Entra role assignment for this group?
>
> **[4:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=282)** I will toggle it to Yes.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=284)** So the basic structure of our group is complete.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=288)** Now, I'll click on this link below to add members to the group manually.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=293)** I'll first search for my own account, because I'm from the IT team, mark the box, and then search for Georgina.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=302)** Mark her box, and then click on the Select button at the bottom of the page to add these two users to this group.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=311)** Finally, I'll click on the Create button.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=315)** A popup asks me if I really want to enable Entra role assignment for this group, because if I do, I cannot change this setting later.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=324)** I'll click on Yes to confirm.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=327)** Within a couple of seconds, we get the success notification.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=331)** Let me just refresh the page, and there it is.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=335)** You can see the group type column says Security and the membership type column says Assigned.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=342)** If I click on the group and go to its members section, you can see both me and Georgina are added to the group.
>
> **[5:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=350)** Let me go back to the Groups page and click on the New Group button again to create another group.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=358)** This time instead of a security group, we will create a Microsoft 365 group.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=364)** This group will be for the sales team so that they can collaborate.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=368)** I'll type in the name, Sales Team.
>
> **[6:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=372)** The address for their shared mailbox is going to be Sales.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=376)** In the membership type, I'll select Dynamic User.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=381)** This is the reason why I had to upgrade my Entra ID license from the free plan to the Premium P2 trial plan.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=390)** So what you need to remember here is that dynamic membership is a premium feature.
>
> **[6:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=396)** This dropdown will be grayed out if you are on the free plan.
>
> **[6:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=401)** In the next step, instead of adding members, I'll add a dynamic query that will automatically determine who should be its members.
>
> **[6:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=409)** To do that, I'll click on this link here.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=413)** A basic dynamic query, or a dynamic membership rule, consists of a property, an operator, and a value.
>
> **[7:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=422)** In the property dropdown, I'll select the department, in operator, I'll select Equals, and in the value box, I'll enter the string Sales, and hit Enter.
>
> **[7:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=436)** The rule syntax for this dynamic query is generated here.
>
> **[7:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=441)** you can see it says user.department -eq "Sales."
>
> **[7:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=446)** I'll click on the save button on top to save the changes I made, and go back.
>
> **[7:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=452)** And then finally click on the Create button.
>
> **[7:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=456)** Now the group will be created within a few seconds, but sometimes it may take a few minutes for the dynamic query to run and the group memberships to be updated.
>
> **[7:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=466)** So depending on how many users your tenant has, you may have to wait for a bit.
>
> **[7:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=472)** Let me refresh the page, and there it is.
>
> **[7:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=476)** I'll click on the group to go into more details.
>
> **[8:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=480)** Now, this is what you should be looking for.
>
> **[8:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=482)** The dynamic rule processing status should say Succeeded.
>
> **[8:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=487)** Let's verify if it really did.
>
> **[8:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=490)** I'll click on Members here, and yes, looks like Alex, Emily, and Nick were all automatically added to the Sales group.
>
> **[8:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=499)** We did not update this list manually.
>
> **[8:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=502)** So what happened in the background is that the dynamic group scanned for the attributes of all users, picked up all the accounts whose department attribute was set to Sales, and then added them to this group all on its own.
>
> **[8:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=516)** Isn't that wonderful?

> [!info]- Semantic Content
>
> **UI Navigation:** click on (12), dropdown (2), toggle (1), go to (1), select the (1)
> **Code Keywords:** let (6), require (2), continue (1), finally, (1), type, (1)
> **Analogies:** similar to (1), just like (1), such as (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Manage devices
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=2)** - [Kunal] Now, let's explore how to manage devices in Entra ID.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=8)** So far, you've learned that users and groups can either be synchronized or cloud native.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=14)** The same principle applies to devices.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=18)** First, we have an Entra hybrid join for computers that are already domain joined to Windows Server Active Directory on-premises.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=28)** As you may have inferred, this dual join allows devices to seamlessly access resources across both environments.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=38)** It is crucial to remember that hybrid join devices require Entra Connect for synchronization and are mainly managed using Group Policy.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=48)** We need Entra Connect because Entra Cloud Sync does not support device synchronization, and we use Group Policy because the source of authority is Active Directory, which means these devices have to be managed on-premises.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=66)** Enterprise organizations may also have System Center Configuration Manager deployed in addition to Group Policy for a more comprehensive approach towards managing devices and applications.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=80)** Then, we have Entra Join, which lets you add Windows devices directly to Entra ID without the need for on-premises Active Directory.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=91)** The process to configure this is very straightforward.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=95)** A user has to simply go to Settings on the Windows computer they are assigned, and then use the Connect button to join the device to Entra ID using their corporate credentials.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=107)** It is as easy as that.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=110)** Entra Join is intended mainly for company-owned devices.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=115)** Then, Entra ID also has Device Registration that enables bring-your-own-device, or BYOD, scenarios for users.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=125)** The process to configure this is also straightforward.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=129)** A user has to simply register their personal device with Entra ID.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=135)** Once registered, they can securely access corporate resources using their own devices and without compromising their privacy.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=145)** The main objective of Device Registration by design is to ensure that devices that are accessing Azure resources are recognized.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=156)** This method supports a wide range of operating systems, including Windows, Linux, macOS, Android, and also iOS.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=166)** Although Entra Join is the preferred option for company-owned devices, it supports only Windows.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=174)** So, if the company also owns non-Windows devices and wants to manage them in Entra ID, Device Registration can be used as an alternate option.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=185)** It's not necessary to use it only in BYOD scenarios.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=190)** The common denominator between Entra Join and Device Registration is that both can be managed with Intune or other MDM solutions.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=201)** If you are not aware, Intune is Microsoft's cloud-based mobile device management solution that we use for configuring policies, deploying applications, and in general, making sure devices are secure and compliant with organizational standards.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=219)** Intune supports Windows, as well as non-Windows devices.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=225)** Now, let's try to implement Entra Join in Windows.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=232)** This is a Windows 10 computer.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=234)** Let's assume my company has assigned this device to me and requested me to join it to Entra ID.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=242)** Here's how we'll do that.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=244)** I'll first go to the search box and look for the Settings app.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=249)** I can see it shows up here on the top apps list.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=252)** Let me click on that, drag the window to the center, and there it is.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=257)** This is the Settings app of a Windows 10 computer.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=261)** To join this computer to our ServerBaba directory, I'll first go to accounts.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=268)** Then, on the left side, click on the tab for Access work or school.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=273)** On this page, you'll see a connect button.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=277)** Let's click on that.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=281)** This is the page we are looking for.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=285)** You can do everything from here.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=287)** You can add this computer to your local Active Directory domain, perform a Entra Join, or configure Device Registration.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=296)** If I simply enter my corporate credentials in this box and click on Next, it will kickstart the Device Registration workflow.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=305)** But that's not what we want to do.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=308)** We want to perform an Entra Join, so I'll click on this link below that says, "Join this device to Microsoft Entra ID".
>
> **[5:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=318)** Enter my corporate email address, which is kunal@serverbaba.in, click next, enter my password, and click on Sign in.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=330)** I get a warning asking me to make sure this is my organization.
>
> **[5:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=334)** It is, we know that.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=337)** I'll finally click on the Join button to confirm my action.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=342)** It takes a few seconds, and if everything goes well, you'll see a message that says, "This device is connected to ServerBaba Directory."
>
> **[5:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=352)** I am now required to sign out of this device and sign back in using my corporate credentials.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=359)** I'll click on the Done button to close this window.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=363)** You can also see under the Connect button, it says, "Connected to ServerBaba Directory's Entra ID".
>
> **[6:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=370)** Now, let's switch to the Azure portal.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=374)** On the left side of our directory's Overview page, I'll click on Devices.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=381)** This is the Overview page for devices.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=384)** I'll click on all devices on the left side.
>
> **[6:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=387)** Let me just adjust the columns, here, so you can see everything that's written properly.
>
> **[6:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=393)** All right.
>
> **[6:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=394)** The Windows 10 computer we just joined to Entra ID shows up here.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=399)** You can see the device name, which says, "EJDemo 1", the Join Type, Owner, and other settings.
>
> **[6:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=408)** I can click on the device to view more details.
>
> **[6:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=412)** This is how you add a Window 10 device to Entra ID using Entra Join.
>
> **[6:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=418)** Your next step would be to enroll this device with Intune to start managing it.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (11), go to (3), switch to (1)
> **Code Keywords:** let (7), require (1), for. (1), switch (1), type, (1)
> **Prerequisites:** configure (3), required to (1)
> **Env Vars:** byod (2), mdm (1)
> **Code Identifiers:** macos (1), ios (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)

#### Provision enterprise apps
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=2)** - [Instructor] Moving on to the fourth and final pillar of an Entra tenant, applications.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=9)** At the beginning of this chapter, I gave you an overview of how to synchronize users, groups, and devices from Active Directory to Entra ID.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=20)** There I mentioned that migrating applications is a complex process that depends on various factors.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=28)** It cannot be done through synchronization tools like Entra Connect or Entra Cloud Sync.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=36)** An application migration strategy largely depends on the degree of access you have to the application's source code and the platform it was developed on.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=47)** One, if it is an off-the-shelf product developed by a large software manufacturer, you may not have access to its source code at all.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=57)** Two, if it is developed by an independent software vendor that your organization contracted, you may have partial or more access to its source code.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=68)** Three, if it is fully developed in-house by developers of your organization, you'll most likely have full access to its source code.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=78)** Each case will require a different strategy.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=82)** Unfortunately, that's not in the scope of this course.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=86)** So without drifting away, let's talk about how to provision enterprise apps directly in Entra ID.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=94)** The Microsoft Identity Platform provides identity and access management for apps in Entra ID.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=102)** It offers a comprehensive set of APIs and services to developers for managing identities and integrating applications with Entra ID.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=113)** Leveraging an identity as a service solution is a lot easier than coding the entire authentication and authorization module of an application right from scratch.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=125)** If you are lucky, you may not have to do that because Entra ID comes with the Apps Gallery, which is a curated catalog of pre-integrated SaaS apps.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=137)** It has most of the popular business applications that organizations out there use pre-configured to work seamlessly with Entra ID.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=147)** Provisioning applications from the Apps Gallery to your tenant takes only a few minutes.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=153)** This reduces the administrator overhead and developer effort required for integration.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=160)** Organizations can also deploy the application they desire as a PaaS app if it is developed by third-party ISVs or in-house.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=170)** This works when organizations have either partial or more access to the application source code and developers know how to utilize the Microsoft Identity Platform.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=183)** The modern identity methods that Entra ID offers for the authentication and authorization of PaaS apps are OpenID, OAuth, SAML, and WS-Fed.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=196)** Developers can choose any of these popular industry standards that meet their functionality and security requirements.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=205)** Then a process called app registration is required for all those apps that are not hosted in the gallery, but require integration with Entra ID.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=216)** This is the actual step where a vanilla application is integrated with Entra ID.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=223)** This involves going to the Azure Portal, specifying the app's settings, permissions, and scope.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=231)** To put it in simple words, this is where you introduce your app to Azure and request Entra ID to start handling authentication and authorization on behalf of the app.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=243)** One of the prominent features of Entra ID and Azure is developer friendliness.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=250)** Developers get a wide variety of SDKs and libraries to help them build web, mobile, and desktop applications quickly and at scale.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=260)** They also get the freedom to choose any of the popular platforms out there like .NET, JavaScript, Java, Python, Android, iOS, et cetera.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=273)** Let us see how to provision an app from the Apps Gallery.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=280)** We are back in the Azure Portal.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=283)** To provision an app from the Apps Gallery, I'll first click on the Enterprise applications button here on the left.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=291)** That brings us to the All applications page.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=295)** Now, I haven't decided what app I want to add because this is just a demo in a test environment.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=303)** I will explore around the Apps Gallery and see what peaks my interest.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=309)** But if you are doing this in a production environment, you must consult the app vendor's documentation in advance and plan your rollout strategy meticulously.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=319)** To get started, I'll click on the New application button on top.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=324)** This is the Apps Gallery.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=327)** You can use this search box to search for the SaaS app you are looking for.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=332)** Or if I scroll down, Microsoft has a list of featured applications that are popular among organizations.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=341)** There are apps like Box, WebEx, DocuSign, Dropbox, Salesforce.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=347)** If I scroll down, there's Slack, Zoom, and a whole bunch of other business apps.
>
> **[5:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=355)** As far as my organization is concerned, I don't need any storage apps because I already have OneDrive.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=362)** And we don't need any meeting or instant messaging apps either because we have Teams.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=368)** But DocuSign looks like a great option because we sign and exchange a lot of digital agreements and contract documents.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=378)** So let's click on DocuSign to provision it in our tenant.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=383)** I'm given the option to choose a custom name for the app that it will display in my tenant.
>
> **[6:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=390)** I leave its default name, Docusign, and right under the name field are some details of the app and the features it supports.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=399)** There is also a link to a step-by-step integration tutorial for DocuSign.
>
> **[6:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=405)** In a production environment, please take the time to read this carefully.
>
> **[6:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=410)** For the time being, I'll just go ahead and click on the Create button at the bottom.
>
> **[6:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=416)** This can take a few minutes to complete.
>
> **[6:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=419)** And once it's done, you'll be redirected to the overview page of the app.
>
> **[7:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=424)** After provisioning, there are additional steps you need to take to make this app fully functional and accessible in Entra ID.
>
> **[7:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=433)** Those are highlighted here.
>
> **[7:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=435)** We need to assign users and groups to this app, set up single sign on, provision user accounts in the app, and more.
>
> **[7:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=444)** Let's configure the first step by clicking on the link right below it.
>
> **[7:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=449)** I want the sales team as well as Georgina to have access to this app, so I'll click on the Add user/group button on top.
>
> **[7:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=459)** Then on this page, I'll click on the link below Users and groups.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=465)** Let me search for the sales group, mark the box next to it, and search for Georgina.
>
> **[7:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=473)** Check the box next to her as well, and click on the Select button.
>
> **[7:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=478)** To finalize this step, I have to click on the Assign button at the bottom.
>
> **[8:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=483)** What we did here is interesting because we assigned a group and an individual user together in one step to this application.
>
> **[8:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=493)** Now let us try to understand from Georgina's perspective what she'll see when she logs into her My Apps portal, the URL for which is myapps.[microsoft.com](https://microsoft.com).
>
> **[8:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=505)** When I type that into the browser, it brings me to this page where I'll use her credentials to sign in, type in the password.
>
> **[8:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=517)** Do I want to stay signed in?
>
> **[8:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=519)** Yes.
>
> **[8:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=520)** And there it is.
>
> **[8:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=521)** You can see the DocuSign app was published to Georgina's My Apps portal, and the same would also reflect for all users that belong to the sales group.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), require (2), module (1), for. (1)
> **UI Navigation:** click on (8), scroll down (2)
> **Exercise Files:** source code (5)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** saml (1), net (1), url (1)
> **Tools:** azure portal (2), slack (1)
> **CLI Commands:** python (1), make (1)
> **Prerequisites:** set up (1), configure (1)

#### Manage administrative units
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=1)** - [Instructor] It is common for larger companies to have multiple administrators with different levels of permissions to handle different administrative tasks because there's only so much a single person can do.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=16)** This is how a typical chain of command looks like in Entra ID.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=21)** On the top, you have global administrators.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=25)** Under them are designated sub-administrators, and under them are your standard users.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=33)** In this model, whatever rights you grant your sub-administrators, they can exercise them over all the users under them, which may not always be what you want.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=45)** Like for example, what if you need to grant administrative rights only over a subset of users and not all of them?
>
> **[0:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=54)** That's where administrative units come into play.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=58)** Let me explain how.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=61)** Administrative units help you define the scope of administration for administrators.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=67)** Having clearly assigned roles and responsibilities helps improve efficiency and accountability while reducing confusion and friction among peers.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=79)** When there is a conflict between administrators, it creates a negative vibe that is never good for the organization.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=87)** Once the scope of administration is defined, the next step is to delegate the management of the selected subset of resources by placing them into an administrative unit.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=99)** You then assign it to the user responsible for these resources.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=105)** Delegation not only improves efficiency, but also reduces your burden so you can focus on more important things to do.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=114)** Another advantage that comes with it is the ability to apply distinct policies to different administrative units.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=123)** This allows you to customize access control settings, security settings, and other configurations to meet the unique requirement of each unit.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=133)** This ensures you can be agile in adapting to your organizational policies based on operational needs.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=142)** Administrative units can hold user objects, group objects, and device objects as members.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=149)** Adding these objects to administrative units logically clumps them together for easier management.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=156)** For example, consider an organization with offices dispersed across multiple geographies.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=163)** With administrative units, you can combine users, groups, and devices in each geography into their respective administrative units and then delegate it to an administrator in that area.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=178)** If required, you can further segregate larger AUs into smaller ones for ease of management.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=186)** In Entra ID, we also have something called Restricted Management AUs, and their sole purpose is to protect key objects in the tenant.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=196)** This feature helps us safeguard critical assets and objects in Azure, making sure only those administrators who are explicitly authorized to can access them.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=209)** A classic use case is to protect user accounts, groups, and devices of your organization's top-level management, CSOs, or board members, because let's face it, you don't want anyone to mess with their settings, either accidentally or mischievously.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=228)** In a Restricted Management Administrative Unit, or RMAU, any type of modification, deletion, or password reset is not allowed on its members.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=239)** Even global administrators cannot make any changes to the member objects unless they assign themselves to a role authorized to manage that unit.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=249)** Also, if an administrator chooses to do so, it is recorded in Entra ID's audit logs, so any action performed with malicious intent can be traced back to the person responsible for it.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=265)** Although this situation is rare, it's still possible.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=269)** Finally, it's important to note that organizational units from on-premises Active Directory are not synchronized into administrative units in Entra ID.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=280)** I am sure those of you who have experience in Active Directory may be wondering this.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=286)** Tools like Entra Connect and CloudSync help you synchronize users, groups, and devices, but this functionality does not extend to organizational units.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=297)** This is mainly because of the difference in how objects are organized and managed across these two environments.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=305)** For example, in the past, users had designated physical offices and they were categorized into OUs accordingly.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=313)** But with the cloud, users are moving and working from all around, so OUs that previously made sense in Active Directory may not necessarily make sense in the form of AUs, and that is why you must manually create the administrative units you want and add members to it in Entra ID.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), this. (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Env Vars:** rmau (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Standards and Compliance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Industry standards
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=2)** - [Instructor] I hope you are now comfortable with the core elements of Entra ID.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=7)** In this chapter, let's switch gears and talk about standards and compliance.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=13)** Here we'll discuss what they are, their significance in IT, and how they benefit us.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=21)** When a product claims to support industry standards, it essentially means that it allows us to use popular technical specifications for developing and running applications.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=34)** These technical specifications are known, tried, tested, and widely embraced by organizations in the industry.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=43)** It is important for a product to support industry standards as it ensures that you can leverage existing skills your employees already have and avoid the use of proprietary solutions.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=57)** Finding and hiring candidates who have a good knowledge of the subject is also easier when you're using open standards.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=65)** In contrast with proprietary solutions, finding such candidates is difficult, and even bigger risk is of vendor lock-ins.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=75)** These standards can apply to a wide range of items such as writing code, storing and transferring data, or even deploying services.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=87)** For instance, Azure allows you to run apps built on the .NET platform, as well as PHP, Python, Java, Ruby, and other popular languages out there.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=100)** These are some of the most widely used development platforms in the industry.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=106)** Microsoft does not restrict you to .NET only.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=109)** You have the freedom to choose any language that best suits your needs.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=115)** Another example of this is virtual machines.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=119)** In Azure, you can not only provision VMs running Windows, but also Red Hat Linux, Ubuntu, and other commonly used operating systems.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=131)** The point I'm trying to make is that Azure openly embraces industry standards, and does not force you into using something you don't want to.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=141)** And since this is an Entra ID course, our conversation is going to be incomplete if we don't talk about the standards from an identity and access standpoint.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=152)** Entra ID supports OpenID, OAuth, SAML, SCIM, and FIDO to name a few.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=160)** The first three, OpenID, OAuth, and SAML are authentication and authorization protocols.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=168)** SCIM stands for System for Cross-domain Identity Management, which is a standard used for exchanging identity information across applications and services.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=181)** Its job is to basically facilitate interoperability between apps.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=186)** And the last one is FIDO, Fast Identity Online.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=191)** We use this standard to configure and implement passwordless authentication.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=196)** These are just a few examples of open standards that Azure supports.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=202)** The list is actually much longer.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=205)** Regardless of whether you work in a predominantly Microsoft environment or not, you will still be able to use Azure and Entra with every bit of freedom and flexibility.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=219)** Let me walk you through a few different documents that highlight what we just discussed in the slides.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=226)** The links to all these pages will be in the exercise files for you to review after the course.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=233)** Firstly, I'd like to highlight the documentation for Entra integrations with authentication protocols.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=240)** If I scroll down, there's a neat little table with all the protocols the Entra family supports.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=248)** Here is OIDC, which is the OpenID Connect protocol, then there's the OAuth 2.0 protocol, and the SAML protocol.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=258)** They are fully supported, which means they provide authentication, authorization, and are compatible with multifactor authentication and conditional access in Entra ID.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=271)** I'm highlighting these specifically, because they are the current industry standard protocols for modern cloud apps.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=279)** Secondly, here's the documentation for SCIM synchronization with Microsoft Entra ID.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=286)** The first line reads that SCIM is an open standard protocol for automating the exchange of user identity information between identity domains and IT systems.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=299)** If I scroll down, there are details about when to use it, its components, and how to implement it.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=308)** And lastly, this is the documentation for passwordless authentication options for Microsoft Entra ID.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=315)** If I scroll down to this part, you can see that FIDO helps to promote open authentication standards and reduce the use of passwords as a form of authentication.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=328)** As you learn more about Entra, exploring and reading about these industry standards will be beneficial in your journey.

> [!info]- Semantic Content
>
> **Env Vars:** scim (4), saml (3), fido (3), net (2), php (1)
> **Definitions:** is an  (2), means that (1), stands for (1), is a  (1)
> **CLI Commands:** php (1), python (1), ruby (1), make (1)
> **Code Keywords:** let (2), switch (1)
> **Documentation:** the documentation (3)
> **UI Navigation:** scroll down (3)
> **Analogies:** such as (1), for instance (1)
> **Versions:** 2.0 (1)

#### Regulatory compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=2)** - [Instructor] When a product claims to meet regulatory compliance requirements, it essentially means that it follows or ensures adherence to regulations, policies, or laws drafted by a competent authority.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=18)** These can be put in place for various reasons, such as optimization of existing business processes, strengthening security, safeguarding the privacy of employees and customers, or satisfying legal restrictions at the national and international level.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=37)** When you comply with these requirements, it instills trust for the product in a customer's mind because they can be confident that the product or application functions as per expectations and won't get you into unforeseen trouble.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=55)** Let's talk about a few such compliance requirements that Azure adheres to.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=61)** First, there's ISO, or the International Organization for Standardization.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=67)** This certification aims to establish the highest standards in quality management for proprietary, commercial, and industrial organizations.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=78)** Then there's SOC, or System and Organization Controls.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=83)** This basically revolves around protecting financial statements and improving general operational efficiency.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=92)** PCI DSS stands for Payment Card Industry Data Security Standard.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=98)** This is pretty much mandatory for organizations that store credit card information or process payment transactions like most banking, financial, and FinTech institutions.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=113)** Next is HIPAA, the Health Insurance Portability and Accountability Act.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=118)** This has provisions to ensure confidential medical data of patients is kept private and shared appropriately with authorized personnel only.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=130)** Then, FIPS, or Federal Information Processing Standard, is a US standard that applies to the security of data processing systems.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=140)** It outlines the minimum thresholds for data encryption at rest and in transit.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=147)** The most recent one, GDPR, which stands for General Data Protection Regulations, was introduced by the European Union to protect the data and privacy of citizens residing in the European Economic Area.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=162)** Like I said, these are just a few examples of the hundreds of compliances Azure adheres to.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=170)** If you want to explore more on this, the exhaustive list is available on the Microsoft Service Trust Portal.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=178)** Lastly, as you may already know, the responsibility for uptime and security is shared between the cloud service provider and the customer when it comes to cloud computing.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=190)** This is known as the shared responsibility model.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=194)** When you're using Azure, Microsoft takes responsibility for some of the controls while the customer remains responsible for the other controls.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=204)** To determine which responsibilities belong to whom, you can run an assessment using the Microsoft Purview Compliance Manager.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=214)** This tool scans your environment and generates a personalized report that clearly outlines which compliance measures are complete, which measures are incomplete, and what actions should be taken by which party to ensure full compliance.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=232)** This is the Service Trust Portal that I mentioned in the slides.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=237)** All the popular regulations and certifications are listed on this page.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=242)** You can see there is ISO, SOC, GDPR, PCI DSS, and more.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=250)** If I scroll down, you'll see there are reports, whitepapers, artifacts, and even more resources to help you manage your organization's compliance requirements.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=262)** Please note that this list is not exhaustive.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=265)** It only covers the popular certifications and regulations.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=269)** To view the entire list, we can go to the Azure compliance documentation.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=275)** This is the whole list categorized by global certifications, government certifications, industrial, such as financial, healthcare, and even regional compliances.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=288)** If you scroll to the bottom of the page, there are even more resources to help you with your compliance.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=295)** You can see how impressively long this list is.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=299)** If you want to check them out on your own, the links to all these pages will be in the Exercise Files.

> [!info]- Semantic Content
>
> **Env Vars:** iso (2), soc (2), pci (2), dss (2), gdpr (2)
> **Definitions:** stands for (2), means that (1), is a  (1), known as (1)
> **Code Keywords:** let (1), private (1), this, (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** such as (2)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Administering an Entra Tenant

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Managing an Entra tenant
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=2)** - [Instructor] So far, we have just scratched the surface of Entra ID.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=7)** A deeper appreciation will come only through hands-on practice.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=11)** However, in this chapter, I'll try my best to give you an overview of what it entails to be administering an Entra Tenant.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=21)** Managing an Entra tenant can be an immersive experience because of the great features and powerful tools we get for handling our identity and access needs.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=33)** Let me make my case.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=35)** The Entra family is designed to facilitate dynamic modern identities that can adapt to the evolving needs of any organization.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=46)** It supports not only Azure, but also on-premises Active Directory, AWS, and GCP.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=54)** It gives you the freedom to be agile and stay on top of trends in a rapidly changing digital landscape.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=63)** To me, that is an underrated luxury.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=66)** Then, Entra ID is a cloud powered identity as a service solution that gives you centralized administration and global reach, without the need for on-premises infrastructure.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=80)** It comes with all the built-in goodness of the cloud, like scalability, availability, fall tolerance, plus automatic backups and updates.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=91)** Then, end users are less dependent on the help desk and administrators because they can now avail self-service to edit their profiles, change or reset passwords, manage group memberships, and request access to apps.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=108)** This empowers us as administrators to focus on more strategic tasks.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=114)** In addition to that, you can also invite external users to collaborate with your employees in the tenant.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=122)** Whether they are external partners or contractors, you can securely grant them access to your resources without the overhead of setting up things like cross forest trust relationships and federation servers.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=137)** Then my personal favorite is the ability to delegate ownership of groups and apps to those in charge and enable end users to manage their own device join and registration.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=153)** I cannot emphasize enough what a huge difference this makes in our lives.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=158)** Next, Entra also provides sophisticated sign-in logs, audit logs, and Health for monitoring.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=166)** With Sign-in logs, you can view all sign-in attempts made against your tenant, along with the device and location information.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=175)** Audit logs allow you to keep a track of which user accessed what resources and when, for accountability.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=183)** The health component provides a comprehensive insight into your entire identity infrastructure spanning across the cloud and on-premises environment.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=195)** And this last one is something businesses and end users love: Entra offers custom branding options such as your company logo on the login page, profile pictures for users and general appearance settings like the dark mode.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=212)** I personally love the dark mode and cannot do without it.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=217)** Despite the fact that these features are purely cosmetic and non-functional, they still help reinforce your brand and provide an engaging user experience.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1), self (1)
> **CLI Commands:** make (1), aws (1)
> **Env Vars:** aws (1), gcp (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Securing an Entra tenant
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=2)** - [Instructor] Security is an inherently complex subject.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=6)** If we want to keep our environment secure and the bad actors out, what we need to begin with is a strong gatekeeper.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=14)** That's the reason why Microsoft says identity is the new control plane.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=20)** An ideal solution should provide us with a multi-layered approach to security, and that's where Entra ID comes into play.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=30)** It allows you to deploy controls at various layers to protect your tenant.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=36)** These layers, in essence, are manifestations of core ideas like the principle of least privilege, zero trust, and defense in depth.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=47)** They work together to keep the bad actors out, and at the same time maintain ease of access for legitimate users.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=56)** Let me explain this in a little more detail.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=60)** A regular sign-in requires a set of credentials.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=64)** To add an additional layer of security, Entra ID allows you to configure multifactor authentication using the Authenticator app, email, phone calls, and text messages.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=78)** Based on a study, implementing this one additional step effectively stops 99.9% of attacks on your accounts and prevents them from being compromised.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=90)** An even better way to improve security is to deploy Entra Conditional Access, which analyzes sign-in attempts based on user behavior, location, and device information.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=104)** Depending on the result of this analysis, it may do one of three things.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=110)** It may either directly allow the sign-in, stop it, or require you to perform an additional task such as multifactor authentication before approving the sign-in request.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=123)** So you see this solution is a little smarter than simply using multifactor authentication.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=130)** Then Entra ID also supports passwordless authentication with the Authenticator app, Windows Hello, FIDO keys, and certificates.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=141)** This reduces the organization's dependency on passwords, thereby enhancing security and lowering the risk of credential theft.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=150)** Next, Entra ID Protection uses machine learning algorithms to detect and flag risky users, sign-in attempts, and apps.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=161)** Depending on the level and type of suspicious activity, it may enforce preventive measures on the user account in question, like either require multifactor authentication or enforce a password reset.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=176)** Then Identity Score gives insights into the security posture of your organization.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=183)** It evaluates how well you adhere to security best practices, helps you identify areas for improvement, and strengthens your defenses.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=194)** This score is measured in percentage.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=197)** The higher, the better.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=199)** And the most recent member to join Azure's arsenal of security products is the Microsoft Copilot for Security, which is a generative AI tool.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=211)** It promises to assist with rapid investigation into risks, faster troubleshooting, and bringing new levels of administrative efficiency, all of it done in natural language that we as humans use in our daily life.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** require (2), let (1)
> **Env Vars:** fido (1)
> **Versions:** 99.9 (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Potential benefits of deploying Entra ID
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=2)** - [Narrator] Deploying Entra ID can offer a wide array of benefits for businesses of all sizes.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=9)** Let's explore some key advantages you may be able to enjoy.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=15)** Small to medium-sized businesses can save on the upfront cost of expensive hardware and software licenses.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=24)** It is quite possible for the number of physical domain controllers and Windows Server licenses to go down all the way to zero for such businesses.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=34)** This allows SMBs to allocate their capital investments into growing the business.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=41)** Similarly, enterprises can save on hardware, licenses, and additional services they may need to maintain their identity infrastructure.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=52)** You can now manage with less number of domain controllers, less number of servers to backup and update, and probably even get rid of federation servers and traditional VPNs.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=65)** Doing that could lower operational costs and improve ROI in the long run.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=71)** We also learned previously how Entra ID provides a highly available and fault-tolerant identity infrastructure designed to ensure business continuity.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=83)** This is extremely critical, because authentication is the first barrier to entry, and if this service itself fails, everything after that becomes inaccessible, even if the target applications and resources are up and running.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=100)** If you cannot authenticate, you cannot access them, as simple as that.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=106)** Then Entra ID also provides global scalability and resilient headquarters to branch office connectivity.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=114)** So, instead of relying on traditional slow LAN links for cross-site authentication or installing RODCs, you can now fashion your network in a hub-and-spoke topology where Azure is the hub and all other offices are the spokes.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=133)** Then hybrid identity combined with single sign-on boosts employee productivity.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=140)** Just one set of credentials gives them access seamlessly to both on-premises and cloud resources.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=148)** This unification improves user satisfaction and efficiency, and we all know, if the employees are happy, the organization is happy.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=159)** Lastly, Entra ID includes robust security tools to mitigate modern day threats.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=167)** I think we've firmly established the importance of security throughout this course and the role Entra ID plays in the game.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=176)** So, that's another huge benefit of deploying Entra ID.

> [!info]- Semantic Content
>
> **Env Vars:** roi (1), lan (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Case study: Audi AG
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=2)** - [Presenter] I'm sure you recognize this logo.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=5)** It belongs to Audi, one of the world's leading automobile manufacturers based Ingolstadt, Germany.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=13)** I have a case study here showcasing how Audi implemented Microsoft Intune for mobile device management to enhance security, streamline device management, and improve productivity.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=27)** Although the case study revolves around Intune, it is essential to note that Entra ID was the base identity and access management solution used to deploy this.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=40)** Audi leveraged several Entra features such as zero trust, conditional access, and self-service among other things.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=50)** This is the full range of products used in this implementation.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=54)** If you are interested, I've added the link to the whole story in exercise files for you to read.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=60)** This is just one of the 100s of success stories out there, but I specifically chose this one because it is special to me.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=70)** In my professional life I love working with Microsoft products, and in my personal time I love going out on long drives in my Audi.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=80)** So when this story came to my attention, it made me really happy.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=85)** Therefore, I had to include it in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), self (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Course summary
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=2)** - [Instructor] You can now take a deep breath, sit back and relax, because you've made it all the way to the last chapter, the conclusion.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=11)** Here, I'll quickly summarize the key takeaways of this course, and point you to the next step in your journey towards mastering Microsoft Entra ID.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=23)** We started off with an analogy of international air travel, and compared it to identity and access management.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=32)** I tried to correlate the importance of passports and visas to authentication and authorization in the computing world.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=42)** Then I explained what Entra ID is.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=45)** We learned that it is an identity as a service running in Azure that allows us to manage users, groups, devices, and apps in the cloud.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=57)** After that, we looked into its architecture, including the writeable, primary partition, replication within and across the data centers, and read-only secondary replicas.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=70)** We also got an insight into how this whole design provides global scalability.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=76)** I then drew a comparison between Active Directory and Entra ID.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=82)** We found that the main difference being Entra ID supports modern authentication and authorization protocols for a modern day app, whereas Active Directory supports legacy protocols for more traditional applications.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=99)** Now, here's a challenge for you.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=102)** Can you recollect the protocols, both Active Directory and Entra ID support, without looking back at the video or your notes?
>
> **[1:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=110)** If you can, then fantastic.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=114)** Moving on, we discussed the two tools that help us synchronize on-premises, users, groups, and devices from Windows Server to Azure, and they were Entra Connect and Entra Cloud Sync.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=130)** We then talked a little bit more about the latter, since it is a cloud-based solution.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=136)** We then tackled the key elements of Entra ID, starting with users.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=142)** I explained the different types of users, including federated, synchronized, and cloud native users.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=150)** Then in groups, I explained about synchronized security groups, cloud native security groups, and Microsoft 365 groups.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=161)** Next, in devices, I explained about Entra hybrid join, a simple Entra join, and device registration.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=170)** We then talked about how migrating existing on-premises applications to the cloud isn't very straightforward.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=178)** The process varies, depending on factors such as if it is an off-the-shelf product, if it is developed by an ISV, or if it is made in-house.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=190)** So that was about migration.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=193)** Then we also discussed how to provision enterprise apps in Entra ID.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=199)** I mentioned the apps gallery, app registration, supported identity protocols, types of apps, and development platforms.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=209)** After that, I explained the concept of administrative units, and how they allow us to delegate the administration of a subset of resources in Azure to other users.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=222)** Next, we followed that up with a quick short chapter where we talked about industry standards and regulatory compliance.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=231)** The former allows us to utilize popular technical specifications for developing solutions, while the latter ensures adherence to required regulations, policies, and laws.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=245)** Moving on, I gave you an overview of what it's like to manage Entra ID.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=252)** Here we talked about dynamic modern identities and support for on-premises and multi-cloud environments, including AWS and GCP.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=263)** Next, I discussed the various security features that Entra ID offers, such as multi-factor authentication, conditional access, passwordless authentication, identity score, and the brand new Microsoft Copilot for Security.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=282)** Lastly, we got a glimpse into the potential benefits that an organization could experience by deploying Entra ID.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=290)** These benefits include cost saving, increased employee productivity, global scalability, and robust security.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=300)** To illustrate the effectiveness of Entra ID, I presented a case study of Audi, and how they successfully leveraged Entra ID, Intune, and Microsoft 365 to enhance endpoint management and security.

> [!info]- Semantic Content
>
> **Env Vars:** isv (1), aws (1), gcp (1)
> **Cross-References:** we talked about (2), we discussed (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** such as (2), it's like (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=2)** - [Kunal] Congratulations on completing this course.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=5)** Great job.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=7)** I hope you enjoyed this course where we dissected and investigated the fundamental elements of Microsoft Entra ID.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=16)** To reinforce your learning, I strongly recommend you do two things.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=21)** First, download the exercise files, and use the workbook included to make your own notes.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=29)** Second, sign up for Azure and retrace the demos you witnessed in this course.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=36)** If you want to learn more about Entra ID, Azure and security, follow me on LinkedIn.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=44)** You can find me by searching for my name, Kunal D. Mehta.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=50)** If you find this course to be valuable, please like and share it with your friends and colleagues who might be interested in learning about Entra ID.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=60)** And lastly, I would be extremely grateful if you can spare just a minute to rate and review the course.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=69)** Learner feedback is what drives instructors like me and helps us make better courses for you in the future.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=77)** Thank you so much for your support.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=80)** I hope to see you again in another course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Exercise Files:** download the (1), exercise files (1)
> **Speakers:** - [kunal] (1)


## Instructor

- [[Kunal D Mehta]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Entra ID

## Path Context

### In [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
← [[Windows 10- Administration]] | **5 of 11** | [[Securing Cloud Resources with Microsoft Defender for Cloud]] →

### In [[Explore a Career in IT Support]]
← [[Computer Components and Peripherals for IT Technicians]] | **3 of 11** | [[Windows 10- Supporting Users Essential Training]] →

### In [[Azure Administration for Beginners- Management Tools, Services, and Security]]
← [[Azure Management Basics- Portal, PowerShell, Bicep, and CLI]] | **4 of 5** | [[Azure Networking and Security for Beginners- Tools and Services]] →

### In [[The Top Skills IT Professionals Have Right Now]]
← [[SQL Server Intelligence- Cracking the Code of Enterprise Data]] | **4 of 10** | [[Azure Administration Essential Training]] →

### In [[Identity and Access Management in Azure]]
**1 of 4** | [[Microsoft Azure- Identity and Access Management]] →

### In [[Advance Your Skills with Microsoft Entra ID]]
**1 of 3** | [[Planning for Microsoft Entra ID]] →

## Appears In

- [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
- [[Explore a Career in IT Support]]
- [[Azure Administration for Beginners- Management Tools, Services, and Security]]
- [[The Top Skills IT Professionals Have Right Now]]
- [[Identity and Access Management in Azure]]
- [[Advance Your Skills with Microsoft Entra ID]]

## Related Courses

_Courses sharing skills:_

- [[Azure for Architects- Security and Identity Management with Microsoft Entra]] — Microsoft Entra ID
- [[Deploying Microsoft Entra ID]] — Microsoft Entra ID
- [[Planning for Microsoft Entra ID]] — Microsoft Entra ID

---

[↑ Back to top](#)