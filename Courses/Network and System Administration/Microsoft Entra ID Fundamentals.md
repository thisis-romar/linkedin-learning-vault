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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Microsoft%20Entra%20ID%20Fundamentals.md)

![Microsoft Entra ID Fundamentals](https://media.licdn.com/dms/image/v2/D560DAQGdM-I2OouHxg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008944060?e=2147483647&amp;v=beta&amp;t=M4_Ml1E55Odn2dujrAcYvFXtAsj40gCFhF3oobqCBUM)

# Microsoft Entra ID Fundamentals

> Microsoft Entra ID is Microsoft's cloud-based identity and access management service. In this beginning-level course, IT consultant and trainer Kunal D Mehta provides an introduction to Entra ID. Explore the place that Entra ID holds at the helm of all Microsoft cloud products. Learn why it’s needed today. Dive into key features that set Entra ID apart from its competitors, as well as information 

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals) | 2h 11m | Beginner | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [A world of modern identity](#a-world-of-modern-identity)
  - [History of Active Directory](#history-of-active-directory)
  - [The Microsoft Entra family](#the-microsoft-entra-family)
  - [Course overview](#course-overview)
  - [Microsoft Entra admin center](#microsoft-entra-admin-center)
- [**1. Microsoft Entra ID Basics**](#1-microsoft-entra-id-basics) (6 videos)
  - [Identity and access](#identity-and-access)
  - [What is Microsoft Entra ID?](#what-is-microsoft-entra-id)
  - [Sign up for an Azure subscription](#sign-up-for-an-azure-subscription)
  - [Entra ID architecture](#entra-id-architecture)
  - [Configure the default directory](#configure-the-default-directory)
  - [Active Directory vs. Entra ID](#active-directory-vs-entra-id)
- [**2. Core Components of Entra ID**](#2-core-components-of-entra-id) (6 videos)
  - [Understand Entra Cloud Sync](#understand-entra-cloud-sync)
  - [Manage users](#manage-users)
  - [Manage groups](#manage-groups)
  - [Manage devices](#manage-devices)
  - [Provision enterprise apps](#provision-enterprise-apps)
  - [Manage administrative units](#manage-administrative-units)
- [**3. Standards and Compliance**](#3-standards-and-compliance) (2 videos)
  - [Industry standards](#industry-standards)
  - [Regulatory compliance](#regulatory-compliance)
- [**4. Administering an Entra Tenant**](#4-administering-an-entra-tenant) (4 videos)
  - [Managing an Entra tenant](#managing-an-entra-tenant)
  - [Securing an Entra tenant](#securing-an-entra-tenant)
  - [Potential benefits of deploying Entra ID](#potential-benefits-of-deploying-entra-id)
  - [Case study: Audi AG](#case-study-audi-ag)
- [**Conclusion**](#conclusion) (2 videos)
  - [Course summary](#course-summary)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [A world of modern identity](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/a-world-of-modern-identity?u=76281980&t=2)** - [Instructor] Let's take a moment to reminisce about the good old days of computing, what it looked like a couple of decades ago. Back then, employees had one desktop, one set of credentials, needed access to very few applications, and worked out of their physical [[Microsoft Office|office]] spaces. The digital world was a luxury, not an essential part of life as it is today. So for IT administrators, managing user identities was simple. However, technology evolved, and so did the complexity of managing identities. The attack surface increased, threats grew more sophisticated, and identities became more prone to compromise. In today's world, differentiating between a legitimate user and a bad actor is almost like driving through a thick fog with a cat as your navigator. Given this change, security is now of our top most priority. Identity and access management plays a crucial role in ensuring we navigate this complex landscape effectively by designing and implementing natively secure solutions. I invite you to join me in this course where we discuss the evolution of identity, its challenges, and how to tackle them. Welcome to [[Microsoft Entra ID]] Fundamentals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Microsoft Entra ID]] (1)
> **CLI Commands:** cat (1)
> **Speakers:** - [instructor] (1)

#### [History of Active Directory](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=2)** - [Instructor] To appreciate the potential of [[Microsoft]] [[Microsoft Entra ID|Entra]] in its full glory, it is essential to go back to its roots and trace the history of its development. So let me take you through a quick overview of how it all began. In the year 1999, Microsoft announced a preview of [[Active Directory]] for the first time, which subsequently made its way into [[Windows]] 2000 server and became generally available. I started my IT journey with [[Windows Server]] 2008 back in college. Between the years 2000 and 2008, there were three more iterations of the operating system, Windows Server 2003, then came Service Pack 1 and then Service Pack 2. Each iteration of the operating system came with new advancements to Active Directory. When I dove headfirst into Windows Server, Active Directory was no longer a monolithic service. It had evolved into an umbrella of services, each designed to serve a specific purpose. These services included Active Directory Domain Services, Certificate Services, Federation Services, Rights Management Services, and Lightweight Directory Services. To manage them, we used tools such as Windows [[Powershell]] and the Active Directory Administrative Center. Since Active Directory was already quite advanced
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=98)** at this point, my learning curve was steep. Then came the pivotal point that set the trajectory for today's generation of [[Cloud Computing]]. In 2010, Windows [[Microsoft Azure|Azure]] became generally available, along with [[Microsoft Entra ID|Azure Active Directory]]. I like to refer to the period from 2000 to 2010 as the server era, and from 2010 onwards, the cloud era, and it's not just me saying that. In the year 2014, Microsoft CEO Satya Nadella also emphasized that in order to innovate for the future, businesses will have to adopt a mobile-first and cloud-first approach in their [[IT Strategy]]. That's also the year when Windows Azure was rebranded as [[Microsoft Azure]], dropping the Windows prefix from its name. While the cloud era ushered in the [[Digital Transformation]] movement, it also presented its own set of challenges. Let us [[Zoom]] into this period to understand the challenges we faced. Typically in the server era, when a user needed access to an application, they would provide their credentials to a directory services server for authentication. If successful, this server grants them an authorization token that they pass on to the application to gain access. Since all three entities, the users, directory servers
>
> **[3:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=195)** and applications were mostly on premises, managing this setup was relatively easy. This is how things worked in the server era, but with the advent of the cloud era, things began to change. Applications gradually started migrating to the cloud. Now here's our first challenge. How do you authenticate and authorize requests for access to apps in the cloud? Some of you may suggest using the directory servers on premises. Unfortunately, that isn't a good idea. The cloud is known for its elasticity, [[Scalability]], high availability, and fault tolerance capabilities, whereas the on-premises infrastructure just cannot offer the resilience a cloud can. This creates a dependency that could result in bottlenecks, or worse, complete inaccessibility of apps running in the cloud. The second challenge is the fact that cloud apps use modern authentication and authorization protocols that may not be supported by the on-premises directory servers. Attempting to use older legacy protocols would be an undesired adjustment. The third challenge is that cloud apps are accessed over the internet, which is a dangerous place from a security perspective. Unlike on-premises environments,
>
> **[4:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=289)** nobody is physically present in the cloud. That's another big challenge for us to solve. The fourth and fifth challenges are employees today want to be productive everywhere, on the go or from any remote location. They also want the freedom to use a device of their choice. Striking the right balance between allowing users to be productive on their terms and maintaining organizational security is vital for us. Microsoft Azure Active Directory was designed from the ground up to address these challenges. That was a quick summary of what transpired in the cloud era and the fresh challenges it brought for us. Then in 2023, Microsoft officially rebranded Azure Active Directory to [[Microsoft Entra ID]]. Right now, we are at this juncture where it's the best time to learn about the Entra family, because the Entra family is still taking shape and only a few people have achieved expertise in it. Microsoft's Identity Solutions are rock solid and Windows Server Active Directory is a testament to that fact. I mean, Active Directory is still in use even after 24 years since its inception. That rarely happens in the technological world, where most [[Microsoft Products|products]] have a life
>
> **[6:22](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/history-of-active-directory?u=76281980&t=382)** equivalent to a packet of cat food. In my opinion, [[Microsoft Entra ID|Entra ID]] is here to stay for at least the next decade or two. The question is, are you ready to participate in this journey and level up your career?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (9), [[Microsoft]] (5), [[Windows]] (5), [[Windows Server]] (4), [[Microsoft Entra ID|Entra]] (3)
> **Definitions:** is a  (2)
> **CLI Commands:** cat (1)
> **Env Vars:** ceo (1)
> **Cross-References:** go back to (1)
> **Tools:** powershell (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### [The Microsoft Entra family](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=2)** - [Instructor] [[Microsoft]] [[Microsoft Entra ID|Entra]] is a family of identity and access management solutions designed to help organizations manage identities, permissions, and policies for their cloud-centric environments. The [[Microsoft Word|word]] Entra is derived from the Latin word intrare, meaning to enter, and that makes sense because verifying one's identity is the first step in entering or gaining access to a digital environment. This family consists of the following members, [[Microsoft Entra ID]], the heavy weight of the Entra family, also formally known as [[Microsoft Entra ID|Azure Active Directory]]. I know what you're wondering. Why does Microsoft keep renaming their [[Microsoft Products|products]]? It almost feels as if there's a dedicated person whose sole job is to change names. But hear me out. There are two excellent reasons why this rebranding was necessary. Firstly, there was this constant confusion between [[Windows Server]] [[Active Directory]] and Azure Active Directory due to the similarity in names. Secondly, the word [[Microsoft Azure|Azure]] downplayed the product's capability. [[Microsoft Entra ID|Azure AD]] could not only work within Azure, but it also integrated with the on-premises environments and multi-cloud environments. Its reach went beyond Azure, and hence, the new name, Microsoft Entra ID.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=98)** We will be discussing this product in greater detail throughout the [[Representational State Transfer (REST)|rest]] of this course, but let me briefly describe what other members of the Entra family do. [[Microsoft Entra ID|Entra ID]] Protection helps us identify anomalies and respond to unusual sign-in attempts and risky user behavior. Entra External ID allows us to securely collaborate with external partners by granting them access to internal resources using their own credentials. Entra ID Governance provides us with the tools to ensure access to resources is in compliance with the organizational policies. Entra Domain Services provides us with a platform to run legacy applications in the cloud that use older authentication protocols, like Kerberos and NTLM. Entra Verified ID allows us to automate the verification and validation of user identities across organizations and third-party entities. Entra Permissions Management provides us with a comprehensive visibility and control over permissions for resources in multi-cloud environments. Entra Workload ID helps us configure managed identities for apps and services. Entra Internet Access allows us to streamline access to [[Microsoft 365]], [[SaaS]] apps,
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/the-microsoft-entra-family?u=76281980&t=193)** and other internet resources by redirecting user requests through a gateway running in Azure. Entra Private Access works similar to Entra Internet Access, except that it streamlines access to the on-premises environment, private apps, and multi-cloud resources through the same gateway in Azure. It is perfectly okay if these short descriptions don't give you a clear picture of the functionality of each member. For now, just remembering the names should suffice. As you progress through my Entra courses, you will get a deeper insight into the role of each member. That being said, let's refocus on our core mission, which is to learn Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra]] (13), [[Microsoft Azure|Azure]] (5), [[Microsoft Word|Word]] (3), [[Microsoft Entra ID]] (3), [[Microsoft]] (2)
> **Definitions:** is a  (1), known as (1)
> **Env Vars:** ntlm (1)
> **Analogies:** picture (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Course overview](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=2)** - [Instructor] This course will cover the fundamental concepts of [[Microsoft Entra ID]]. The first chapter is the introduction, which you are currently watching. In the next chapter, "Microsoft Entra ID Basics," we will discuss the concept of identity and access, understand what [[Microsoft Entra ID|Entra ID]] exactly is, we'll take a look at its architecture, and see how it differs from [[Windows Server]] [[Active Directory]]. We will then move on to the chapter, "Core Competence of Entra ID," where we will learn how to set up hybrid identities, manage users, groups, devices, apps, and administrative units in [[Microsoft Azure|Azure]]. After that, we'll get to "Standards and Compliance." Here, I'll talk about the industry standards Entra ID supports, and the [[Regulatory Compliance]] offering it adheres to. Finally, we'll talk a little about administering an [[Microsoft Entra ID|Entra]] tenant. Here, I'll give you a trailer of what it's like managing an Entra tenant on a daily basis. We'll also talk about features that can improve the security of our Entra tenant, and potential benefits that organizations can derive from deploying Entra ID. I also have a case study for you showcasing one of my favorite companies and how they use Entra to increase employee efficiency
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=98)** and productivity. We'll wrap up the course in the last chapter, the conclusion, where I'll summarize the key concepts you've learned in the preceding chapters. This is a beginner-friendly course designed for learners who have very little to no experience with Microsoft Entra ID. Hopefully, by the end of this course, you'll have a solid grasp of the key terminology, be able to explain what Entra ID is, how it functions, and perform basic tasks in a lab environment. Although there are no mandatory prerequisites, having a basic understanding of Azure will be helpful. If you are not familiar with Azure, no problem. I have an entire learning path dedicated to [[Microsoft Azure]] Fundamentals. It's one of the most popular and top-rated pieces of content on [[LinkedIn]] Learning, rated an average of 4.8 out of five, and watched by over 150K learners. So, feel free to start your journey there if that sounds more relevant to you. And for better retention of the concepts taught in this course. I highly recommend taking physical, handwritten notes. I have included a PDF in the exercise files that you can print and use to write notes. I still use this old-school technique myself, and it works a lot better for me
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-overview?u=76281980&t=193)** than simply watching a course or taking screenshots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (5), [[Microsoft Entra ID|Entra]] (4), [[Microsoft Entra ID]] (3), [[Microsoft Azure|Azure]] (3), [[Windows Server]] (1)
> **Cross-References:** in the next (1), in the last (1)
> **Env Vars:** pdf (1)
> **Versions:** 4.8 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Prerequisites:** set up (1)

#### [Microsoft Entra admin center](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=2)** - [Kunal] As you gear up to embark on this course, I'd like to offer you a little sneak peek into the [[Microsoft]] [[Microsoft Entra ID|Entra]] Admin Center, which is the central hub specifically designed for managing all services of the Entra family. Since this is only a sneak peek, I'm going to skip showing you the steps you need to take to get to the Admin Center. At this point, my goal is to give you a glimpse of the Admin Center. So this is our homepage. If you are new, there is a link on the top to resources that will help you learn more about Microsoft Entra. Then, if I scroll down, I can click here to view all [[Microsoft Products|products]] of the Entra family. On the right, there are these guides to help you with whatever features you want to deploy in Entra. Then if I scroll down further, there are quick navigation buttons that take me directly to the page where I can manage users, groups, devices, apps, and some other things we'll explore later on. Below that, you can see small snippets of relevant blog posts and announcements. This is what the homepage looks like, but here's what I want to do. Let me scroll back up and then click on the View all products button. As we learned earlier, these are all the members of the Entra family.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=96)** Directly under each member is a hyperlink that takes you to the page where you can manage that specific service, including [[Microsoft Entra ID]], which is on top of the list. I'll click on Done to exit out of this. You can also use the blade on the left side to manage users, groups, devices, applications, and other Entra services listed here. On the top right below the homepage, I can click on the What's new button to keep up with the latest and greatest of Microsoft Entra. Like I said, this family is brand-new and still taking shape. This page helps you keep up pace with all the new developments in Entra. The Roadmap tab here lists exactly what features are coming up, along with category information, release type, and release date. Similarly, right next to it is the Change announcements tab. Here, you'll see a list of what is expected to change in an Entra service in the nearby future. And that was a quick tour of the Microsoft Entra Admin Center. I want to remind you that this interface is rapidly changing. The Admin Center is a work in progress, so there's a good chance if you are looking at it using your own account, it may look slightly different.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/microsoft-entra-admin-center?u=76281980&t=189)** Now, before we go any further, let me take a moment to introduce myself. I am Kunal D Mehta, and I'm the Director at ServerBaba Consulting Private Limited. This is an IT consulting and e-learning company based in Hyderabad, India. We specialize in Microsoft data center and cloud technologies. If you are interested in knowing more about the services we offer, please feel free to use the contact firm on my website, [serverbaba.com](https://serverbaba.com), or send me a message on [[LinkedIn]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra]] (11), [[Microsoft]] (5), [[Microsoft Products|Products]] (2), [[Microsoft Entra ID]] (1), [[LinkedIn]] (1)
> **UI Navigation:** click on (3), scroll down (2)
> **Definitions:** is a  (3), is an  (1)
> **URLs:** [serverbaba.com](https://serverbaba.com) (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [kunal] (1)


### 1. Microsoft Entra ID Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Identity and access](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=2)** - [Instructor] I hope you are as excited to begin this course as I am. So lock your doors, throw the keys aside, and let's get started with the chapter, [[Microsoft Entra ID]] Basics. Here I'll explain what [[Microsoft Entra ID|Entra ID]] is, its architecture, and how it differs from [[Windows Server]] [[Active Directory]]. Imagine you are flying off to an exotic international destination for your holidays. What is the first piece of document you'll be required to show at the airport? A passport. The airport authorities will check the passport to see if everything looks good and then issue a boarding pass. After flying for a few hours, you land at your destination. Upon arrival, authorities typically require you to present a visa for entry. This document outlines what you can and cannot do in that country. For instance, if you have a tourist visa, you roam around and take pictures. If you have a business visa, you go attend meetings. You must stick to what your visa permits you to do. You may be wondering, "What does this have to do with Entra ID?" Well, there are several similarities between the aviation world and the computing world. Let me connect the dots for you. There, you need a passport to prove your identity. Here, we use credentials for authentication.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=98)** Credentials in the form of a username and password to verify if a user really is who they claim to be. There, a visa is used to determine the level of access, like what you can and cannot do in the destination country. Here, we use permissions for authorization. We use this to create a list of actions a user is allowed to perform, like create, read, update, and delete objects and resources. There, you need a boarding pass to facilitate the trip. Here, we are granted an access token that is valid for a sign-in session. There, you have to go through multiple checkpoints before you can board the flight. This is done for the safety of passengers, crew, and the aircraft. Here, you implement [[Multi-factor Authentication]] to provide extra security for your digital assets. And finally, the local government or the immigration department issues passports for their citizens. And here, a directory services server provisions the credentials for users or employees. The study of managing users, credentials, authentication, and authorization, directory services, and provisioning resources is called Identity and Access Management, abbreviated as IAM. While this comparison may not be perfect,
>
> **[3:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/identity-and-access?u=76281980&t=192)** my intention behind this is to help you understand the significance of each step outlined in the process of Identity and Access Management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (2), [[Microsoft Entra ID]] (1), [[Windows Server]] (1), [[Active Directory]] (1), [[Multi-factor Authentication]] (1)
> **Analogies:** imagine (1), for instance (1)
> **Env Vars:** iam (1)
> **Definitions:** is called (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [What is Microsoft Entra ID?](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=2)** - [Narrator] First things first. 2 What is [[Microsoft Entra ID]]? 3 It is an identity as a service running in [[Microsoft Azure]]. 4 With [[Microsoft Entra ID|Entra ID]], you can authenticate and authorize users 5 to grant them access to modern cloud applications. 6 And because this is a cloud service, 7 you don't have to worry about any underlying pieces 8 of the identity infrastructure, like directory servers, 9 replication, networking, backups, or anything else. 10 [[Microsoft]] manages all of that for you. 11 Entra ID allows you to manage users their credentials, 12 assign them administrative rights, 13 provide them access to resources, 14 and manage the entire lifecycle of these user accounts. 15 It also allows you to organize these user accounts 16 into groups so that you can manage them collectively 17 and enable them to collaborate among themselves. 18 Additionally, Entra ID enables you to manage all sorts 19 of devices as well, including desktops, laptops, 20 and mobile devices, running [[Windows]], macOS, 21 [[Android]], or iOS, the whole spectrum . 22 I consider users, groups, devices, and apps, 23 the four key pillars of a Microsoft [[Microsoft Entra ID|Entra]] tenant. 24 That's because everything that Entra ID has to offer 25 mostly revolves around these four key entities. 26
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=98)** Then many organizations worry that their existing 27 investments in [[Windows Server]] [[Active Directory]] 28 may go to waste because of Entra ID. 29 They imagine directory servers being decommissioned 30 and thrown out of the windows. 31 But let me tell you, that is not true. 32 Entra ID is not a replacement 33 for active directory on premises. 34 Instead, think of Entra ID as a means to extend 35 your identity network beyond the on premises 36 and into the cloud. 37 You can do this by integrating Windows Server Active 38 Directory with Entra ID. 39 This allows users in your organization 40 to seamlessly access applications across both environments. 41 So in a sense, what I'm trying to say is, 42 that Entra ID is hybrid ready. 43 Next, Entra ID is driven by open industry standards. 44 This is crucial to enable interoperability 45 and prevent vendor lock-in. 46 For example, Entra ID supports common web security protocols 47 like OpenID, OAuth, and SAML. 48 In addition, it also supports SCIM for cross-domain 49 identity management and FIDO 50 for passwordless authentication. 51 So that's about the industry standards. 52 Then when it comes to [[Regulatory Compliance]], 53 [[Microsoft Azure|Azure]] also has a great reputation there. 54 For example, it complies with international certifications 55
>
> **[3:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/what-is-microsoft-entra-id?u=76281980&t=195)** like ISO and SOC, complies with [[PCI DSS|PCI-DSS]] required 56 by the payment card industry, complies with HIPAA required 57 to safeguard medical information of patients, 58 complies with FIPs, a federal standard 59 for information processing and GDPR, 60 which is European Unions latest set of guidelines 61 for [[Data Privacy]] of citizens in the EU. 62 These were just a few examples of the regulatory 63 compliances Azure adheres to. 64 All of this combined makes Entra ID one of the strongest 65 identity as a service providers out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (12), [[Microsoft]] (2), [[Windows]] (2), [[Windows Server]] (2), [[Active Directory]] (2)
> **Env Vars:** saml (1), scim (1), fido (1), iso (1), soc (1)
> **Analogies:** for example (2), imagine (1)
> **Code Identifiers:** macos (1), ios (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Sign up for an Azure subscription](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=2)** - [Kunal] To get started with [[Microsoft Entra ID|Entra ID]], let us first sign up for an [[Microsoft Azure|Azure]] subscription. Even if you have prior experience with Azure and have done this before, I insist you walk through this demo with me because my intent here is to not just show you what's happening on the screen but also explain what's happening in the background. I open the browser and head to the URL signup.[azure.com](https://azure.com). It leads me to this page that you see on your screen. Here, you'll need a [[Microsoft]] account to sign up. I've already created one beforehand, so, I'll type in that, sbckdm@[outlook.com](https://outlook.com). sbckdm is just an abbreviation of my company name and my name combined, Serverbaba Consulting, Kunal D. Metha. That's all it is. And then I'll click on the Next button, enter my password, and click on the Sign in button. Do I want to stay signed in? I'll tick the box, "Don't show this again," and click on Yes. So at this point, I am signed into my Microsoft account. Now we sign up for Azure. Fill in your profile information. My country is set to India. That's correct. Try to be as accurate as possible when you're filling this in. Put my middle letter in the middle name field, make sure my email address is correct,
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=98)** and then come down to the Phone Number field. After you enter your number, you'll have to verify it using a one-time password sent to you, either through a text message or a phone call. Further down, you'll have to fill in your company name, tax ID, and official address. This information is required for billing purposes. At the bottom, you have to mark the agree to terms and conditions checkbox and then click on the Next button. I'll pause the video here. Complete these steps and resume the video on the next page. After completing your profile, you'll be directed to this page where you'll be asked to provide your credit card information. But don't worry, we are signing up for a free Azure trial. You will not be charged unless you deploy a paid service and keep it running after the trial period is over. I'll enter my name and my credit card details on this page. Now I don't want my learners to be shopping on my card, so I'll pause the video, complete these steps, and resume again on the next page. Once the credit card is verified, this payment method will be associated with your Azure account for billing. You can see my card is added to my Azure account. Let us double check everything before clicking on the Sign up button.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=193)** So here it says after sign up, Azure should provide us with its popular services free for one year, more than 55 services always free, and about 13,300 Indian rupees in credit to use in the first 30 days. That's roughly around 200 US dollars. Everything looks good, so I'll click on the Sign up button. Here, it gives me a nice little tip saying, "Enabling [[Multi-factor Authentication]] can block more than 99.9% of identity attacks." That's good to know. For now, I'll click on the Next button and enter my password again to sign into Azure. Let me type that in. If your Microsoft account is new, you may be requested to take a few additional steps, such as adding an alternate email or phone number just so that you don't lose access to your account. Once all that is done, this is what you should see. My sign in experience was good, no problems. So click on the smiley here, and that is it. This Quickstart landing page is what you should see for the first time after successfully signing into Azure. I can show you that this, in fact, is the same account. If I click on top right here, the email is sbckdm@[outlook.com](https://outlook.com) and note it says "DEFAULT DIRECTORY." If we want to explore the subscription a little more,
>
> **[4:49](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/sign-up-for-an-azure-subscription?u=76281980&t=289)** I can go to the search box here on the top and search for Subscriptions. There it is. The name of our subscription is Free Trial. I'll click on that to go into more details. This is the overview page of our subscription named Free trial. Since we just signed up for this account, there is no information populated yet. Keeping that aside, I want to draw your attention here. Notice how it says "Default Directory," and there's a domain in the brackets, sbckdmoutlook.on [microsoft.com](https://microsoft.com). So Azure took my email address string and provisioned a temporary domain name for me based on that string. Now let's switch back to the slides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Microsoft]] (4), [[Microsoft Outlook|Outlook]] (2), [[Microsoft Entra ID|Entra id]] (1), [[Multi-factor Authentication]] (1)
> **UI Navigation:** click on (9), open the (1), checkbox (1), go to (1)
> **URLs:** [outlook.com](https://outlook.com) (2), [azure.com](https://azure.com) (1), [microsoft.com](https://microsoft.com) (1)
> **Env Vars:** url (1), default (1), directory (1)
> **CLI Commands:** make (1)
> **Versions:** 99.9 (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### [Entra ID architecture](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=2)** - [Instructor] When you sign up for a new [[Microsoft Azure|Azure]] subscription, there is a specific order in which [[Microsoft]] provisions your account. Despite what you may think, your subscription is not the first thing that comes into existence. Instead, an [[Microsoft Entra ID|Entra]] tenant is created at first, also known as the default directory because it's automatically created during the signup process. This tenant serves as the universal set for all your cloud assets. Then within this tenant, a route management group is created, and the subscription you sign up for is placed under this route management group. This hierarchy that you see is already in place the first time you log into the Azure portal. We then create resource groups under the subscription to hold our cloud resources. It is very important for Azure administrators to remember this order. Just in case you are new to Azure, you may use my trick to remember it. Take the initial letters and make a sentence. I prefer the phrase, "MeGa Shopping RaGe Returns". I've taught several such tricks in my Azure Fundamentals Learning Path, so make sure to check that out after this course, if you're interested. Now, let's take a closer look at the Entra tenant. Underneath this tenant is the primary partition. It's like a database that stores all the user objects,
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=97)** group objects, device objects, security identifiers, and core [[Metadata]] about the tenant. It's fairly accurate to say that this is the brain of your Azure account, which begs the question, where does it live? It is deployed in a data center at the location we choose when we sign up for Azure. For example, if you select United States during the signup, this primary partition will be deployed in a data center in the U.S. Choosing the right location is important to ensure the partition is in close proximity to the end users and complies with the organization's data residency requirements. The primary prefix here indicates that this is a writeable copy. Any actions such as creating, updating, or deleting objects in the Entra tenant is executed on this primary partition. It is then replicated to read-only copies of the partition in the data center for redundancy. If the primary partition fails, the right requests can quickly be redirected to another partition in the data center. But if you observe, this design is insufficient in protecting your data against data center-wide failures, which can happen due to any catastrophic event in and around the data center. But there is no need to panic
>
> **[3:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=191)** because Microsoft has got us covered. To protect against such incidents, the partition data is not only replicated within the data center, but also across multiple data centers. These copies are called secondary replicas. This cross data center replication happens over the Microsoft Backbone Network, which powers its [[Cloud Services]] and not the public internet. This ensures safety and security. The primary partition is writeable, whereas the secondary replicas are just read-only. These secondary replicas are what allow [[Microsoft Entra ID|Entra ID]] to scale globally and provide identity services to users around the world, regardless of their location. In an event where the entire data center fails, a secondary replica can take over the role of a primary to provide business continuity. This means your data is not only protected against small glitches at the partition level, but also if the whole data center gets destroyed for whatsoever unfortunate reason. Okay, now I have a small confession to make. There is a small inaccuracy in my diagram here. As you can see, there are three copies of the partition in each data center, and there are three such data centers, but in reality,
>
> **[4:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/entra-id-architecture?u=76281980&t=284)** there are at least nine replicas in each data center, and those are replicated across at least four data centers. If we do the math here, it comes down to at least 36 replicas or copies of the primary partition. Imagine the amount of redundancy this brings to the table. So much so that my slides couldn't accommodate it. If the thought of managing so many replicas scares you, let me remind you that Entra ID is a cloud service, meaning you don't have to deal with any underlying configuration of the service. It is all orchestrated by a gateway service, including which partition is up, which one isn't, how to handle the replication, and where to redirect the read/write requests. It's all done by this gateway service, and that makes Entra ID highly robust. So to put things into perspective, administrators like us interact with the Azure Resource Manager using management tools, which in turn communicates with the Gateway service, and this Gateway Service handles everything after that, ensuring all systems run smoothly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Microsoft]] (3), [[Microsoft Entra ID|Entra]] (3), [[Microsoft Entra ID|Entra id]] (3), [[Metadata]] (1)
> **Definitions:** is a  (4)
> **Analogies:** it's like (1), for example (1), such as (1), imagine (1)
> **CLI Commands:** make (3)
> **Tools:** azure portal (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Configure the default directory](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=2)** - [Instructor] Let's take a tour of our [[Microsoft Entra ID|Entra]] tenant and configure the default directory. In this demo, we'll try to reinforce our learnings from the last video and in the process, add our own custom domain to the tenant. It is critical to add the custom domain before onboarding users and granting them access to services in [[Microsoft Azure|Azure]]. This is where we left off in the last demo, where we signed up for Azure. Towards the end of that demo, I highlighted the name Default Directory and the temporary domain automatically provisioned at signup, which was sbckdmoutlook.[onmicrosoft.com](https://onmicrosoft.com). Let me click here to go to the homepage. Now, if you are thinking this interface looks different from the one we saw in the introduction chapter, you're right. That was the Entra admin center, a central location to manage all Entra services, but this is the Azure portal. When we sign up for Azure, it takes us to the Azure portal by default for managing [[Microsoft Entra ID|Entra ID]] and other Azure resources. I'll use the search box on the top to look for Entra ID. There it is, I'll click on that. Here's the overview page for our Entra tenant. There's some basic information and alerts,
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=98)** including the first one, telling us that [[Microsoft Entra ID|Azure AD]] is now [[Microsoft Entra ID]]. You already know that because you're watching this course. If I scroll down in the my feed section, the first link is to the Entra admin center. If I click on this, it will take me to the same admin center you saw in the sneak peek video. Right next to it is my user information and my role in the tenant. Since I was the one who signed up for this subscription, I'm designated as the global administrator. That's the top level. It also shows on the right, we've never run Entra Connect because this tool is used to configure hybrid identities and we are just getting started. Below, there are some feature highlights and quick action buttons to help us add a user, a group, and to provision and register applications. Let me scroll back up and then click on the monitoring tab. This gives me a quick overview of all user sign-ins. There is no information here yet because we are in a brand new subscription. Let us move on to the properties tab, and there it is. We can change the name of this directory from here. I don't quite like the Default Directory name. I want the name to reflect my brand, so let me rename it to ServerBaba Directory.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=194)** This looks good to me. I will leave the other values below to its defaults. I will then go down here and toggle this setting to yes, under the access management for Azure resources. For security reasons, some settings are hidden and restricted by default, even for global administrators. So switching this toggle to yes allows us to view and make changes to those settings. Since we are in a test environment, this is not really a problem, but in production, you may want to keep this setting on no. I'll scroll down and click on the save button to save the changes I just made. It may take a couple of seconds for the changes to apply. Okay, the notification on the top right corner says successfully updated tenant properties. That's good news. Let me just refresh the page, and yes, we can see the name has changed to ServerBaba Directory. On the left side, you can use this blade to manage users, groups, enterprise applications, devices, and other Entra ID settings. But what we are interested in right now is the custom domain names page. Let me click on that. This is our temporary default domain, sbckdmoutlook.[onmicrosoft.com](https://onmicrosoft.com). Now, I don't want our users
>
> **[4:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=290)** to have this domain in their principle name and email addresses. It's not easy to spell and doesn't look professional. I want a domain that reflects my brand name, that is ServerBaba. So what I'll do is I'll click on add custom domain button on the top and type in the domain I already own for my brand. That is ServerBaba.in. Note that my actual company domain is [serverbaba.com](https://serverbaba.com), but for this course, I'll be using the serverbaba.in domain for testing. After doing that, I'll click on the add domain button here at the bottom of the page. We are not done yet. I also have to prove [[Microsoft]] that I own this domain. To do that, Microsoft requires me to either add a TXT record or an MX record in the DNS settings of my domain. These are the values you'll need to enter in the TXT record to prove your ownership. Now, the next set of steps will vary depending on who your domain registrar is. Mine is GoDaddy. So in the interest of saving us some time, I'll pause the video here, configure the TXT record on my DNS server, and then come back. All right, so I have added this TXT record in my domains DNS and waited for a couple of minutes.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=384)** Let's click on the verify button to see if this worked. That's awesome. So it says successfully verified domain name serverbaba.in. It is important to note that although it just took two minutes for me, it can take up to 72 hours for the DNS records to propagate across the global DNS servers. So this step may require additional time from organization to organization. Let me close out of this page and then refresh. You can see serverbaba.in is now added to the list of my custom domains. Before we can start using this domain, there is one more step to complete. I need to mark this domain as the primary as opposed to the older one. You can see the primary is still the temporary domain. To change this, I'll click on my domain serverbaba.in and click on the make primary button on top. Click yes on the confirmation box, and within a few seconds, you should see this success notification. Let me close out of this and go back and refresh the page. That's great. You can see this is now our tenants primary domain. This little tick next to our domain denotes that. If I go back to the overview page,
>
> **[7:56](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/configure-the-default-directory?u=76281980&t=476)** you can see the domain change reflects here as well. It now says serverbaba.in. So essentially what we did so far was we renamed the default directory to ServerBaba Directory and then added, verified, and made our custom domain serverbaba.in as primary. This part is over. Now let me use the search box and go to management groups. There it is. This is the overview page for management groups. I'll click on the start using management groups button, wait for a few seconds and then refresh the page. This is what I was talking about in the architecture video. When you sign up for Azure, first the tenant is created, then the root management group is created and placed inside the tenant. And finally, the subscription itself is placed under this root management group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Microsoft Entra ID|Entra]] (6), [[Microsoft Entra ID|Entra id]] (3), [[Microsoft]] (2), [[Microsoft Entra ID|Azure ad]] (1)
> **UI Navigation:** click on (10), go to (2), scroll down (2), toggle (2)
> **Env Vars:** dns (5), txt (4)
> **Prerequisites:** configure (3), getting started (1), you'll need (1)
> **URLs:** [onmicrosoft.com](https://onmicrosoft.com) (2), [serverbaba.com](https://serverbaba.com) (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), go back to (1)
> **Tools:** azure portal (2)

#### [Active Directory vs. Entra ID](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=2)** - [Instructor] By now, you should have a good idea of what [[Microsoft Entra ID|Entra ID]] is all about. If you have experience as an [[Active Directory]] administrator, it's natural to think that Entra ID is simply the cloud version of Active Directory. Although both [[Microsoft Products|products]] aim to provide identity and access, their foundational elements are quite different. Active Directory is an on-premises, [[Windows Server]] based solution, whereas Entra ID is an Identity as a Service solution built into [[Microsoft Azure]]. Then Active Directory uses multi-master replication model where there are multiple writeable partitions of the directory. Whereas Entra ID uses a single master replication model where there is only one writeable, primary partition, and all of the copies are read-only replicas. I illustrated that in the Entra ID Architecture video. Then Active Directory has sub-domains and domains, and you can combine domains into trees and trees into forests. It has a multi-level topology, whereas Entra ID has a flat hierarchy across the tenant, which means all objects of the tenant are at the same level and equal members of the domain. Speaking of domains, Active Directory allows you to use any local
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=97)** or internet domain. A local domain is one that cannot be queried through the global DNS servers. A classic example is the .loc domain, which many of you may have worked with if you have experience in AD. But with Entra ID, you can only use a public-facing internet domain. By that, I mean you should be able to resolve it by querying the global DNS servers, and it should be publicly routable. You cannot use a .loc or similar domains in Entra ID. Then in Active Directory, we use NTLM and Kerberos protocols for authentication, and we use LDAP for interacting with directory services, whereas Entra ID leverages modern protocols, such as OpenID, OAuth, and SAML, for authentication and authorization. And we use the [[Microsoft]] Graph API to access and interact with Microsoft Cloud Service resources, including [[Microsoft Entra ID|Entra]]. Finally, there we have the Active Directory Administrative Center, which is an MMC built on top of [[Powershell]], used to manage all things related to Active Directory. On the other hand, here, we have the web-based Microsoft Entra Admin Center. This is our home for managing all services in the Entra family, but if you only want to manage Entra ID,
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/active-directory-vs-entra-id?u=76281980&t=194)** you can use the [[Microsoft Azure|Azure]] portal for that. We will also be using the Azure portal in this course to manage Entra ID. The Entra Admin Center is still in its initial stages, and the UI is constantly changing. I already gave you a sneak peek of what it looks like in the Introduction chapter, so for the remainder of this course, it makes sense for us to stick to the Azure portal for consistent [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (11), [[Active Directory]] (9), [[Microsoft Entra ID|Entra]] (4), [[Microsoft]] (3), [[Microsoft Azure|Azure]] (3)
> **Env Vars:** dns (2), ntlm (1), ldap (1), saml (1), api (1)
> **Tools:** azure portal (3), powershell (1)
> **Definitions:** is an  (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Core Components of Entra ID

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Entra Cloud Sync](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=2)** - [Instructor] I hope you now have a firm grasp of the basic concepts. In this chapter, let us deconstruct and examine the core components of [[Microsoft Entra ID|Entra ID]]. Here, we'll talk about managing users, groups, devices, and applications in the cloud. It is possible for small businesses to run their entire organization in a purely cloud-only configuration without any enterprise [[Hardware]] on-premises. But medium to large enterprises often have a significant presence of on-premises infrastructure. This includes [[Windows Server]] [[Active Directory]] servers providing directory services to users, groups, applications, and devices. In such cases, taking a hybrid approach is recommended. This allows businesses to keep their on-premises investments intact, and at the same time, leverage the goodness of [[Microsoft Azure|Azure]] and Entra ID. A [[Hybrid Cloud]] enables organizations to migrate workloads to the cloud at a pace they are comfortable with, and also provides users with seamless access to resources spanning across both environments. This is accomplished by synchronizing a copy of the Active Directory user objects, group objects and device objects to Entra ID. There are two ways to do that. The first option is to use the [[Microsoft Entra ID|Entra]] Connect tool.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=97)** It requires installation on a Windows Server machine on-premises, along with the [[Microsoft SQL Server|SQL Server]] database to store the synchronization [[Metadata]]. Keeping the server up and running is essential for the hybrid identity infrastructure to function. The second option is to use the Entra Cloud Sync tool. This is cloud-based and only requires installing a small piece of software on-premises, which in turn talks to the Cloud Sync Service in Entra ID. As opposed to Entra Connect, you don't have to deploy a dedicated server or a database in this case. Keeping the Cloud Sync service up and running is [[Microsoft]]'s responsibility. Although at this point Entra Clouds Sync may seem like a better option, Entra Connect offers many granular level customizations that Cloud Sync doesn't. One big example of this is Cloud Sync does not support the synchronization of device objects. While users, groups and devices can be synchronized using these tools, migrating applications to the cloud is a more complex process that depends on various factors. We will discuss this in more detail later in this chapter. For now, let's try to understand Entra Cloud Sync a little better. Throughout this fundamental course, if there are multiple ways to achieve a goal, I'll try to focus on the one
>
> **[3:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=190)** that follows a cloud-first approach. Therefore, my pick for the time being is going to be Entra Cloud Sync. We'll talk more about Entra Connect in another course. So what exactly is Entra Cloud Sync? It is a powerful cloud-based tool that integrates Windows Server Active Directory with [[Microsoft Entra ID]], allowing users to access applications across both on-premises and the cloud using a single set of credentials. This simplifies identity management for administrators like us. To configure this, we need to install a lightweight provisioning agent on-premises. When I say lightweight, I mean it's a small piece of software that needs very little resources to run, especially compared to the footprint of running a full fledged deployment of Entra Connect. This lightweight agent communicates with the Cloud Sync service and keeps objects across environments consistent and up to date. Keeping the agent up and running is our responsibility. While Microsoft is responsible for keeping the Cloud Sync service up and running, the type of objects we can synchronize using this tool are users, groups, and contacts. It's worth noting that the synchronization process happens with high fidelity.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=284)** This means all the essential attributes of the objects inActive Directory are accurately carried over to their synchronized counterparts in Entra ID. You also get full control of which objects you want to synchronize to Entra ID. You can filter objects based on domains, organizational units, and groups. For instance, if your organization has multiple domains, you can select to synchronize objects only from specific domains, and even within those specific domains, you can include or exclude specific organizational units. If you want more control, you can configure attribute based filtering. The decision whether an object gets to synchronize or not can be based on its specific attributes. But mind you, that functionality is only available in Entra Connect, not with Cloud Sync. And what's interesting is that while object synchronization occurs one way, that is, from on-premises to the cloud, the flow of configuration changes is bidirectional. This means that minor changes that you make to the copies of the object in the cloud can be written back to the original object on-premises. For example, if a synchronized user changes their password in Azure, Cloud Sync will go ahead and change their password in Active Directory as well.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/understand-entra-cloud-sync?u=76281980&t=380)** This is known as a write-back. I am sure you understand why it is needed, because if the same user has two different passwords for two different environments, things would get confusing really soon. This write-back that I mentioned is only applicable to minor changes. For any major change, the source of authority for such objects is Windows Server. For instance, if you want to delete an object, you must delete it on-premises, not in Entra ID. Once you delete the original object, the synchronization service will go ahead and delete its copy in the cloud. It is not possible to delete the copy in the cloud and expect the original object to disappear from Active Directory. This is because the source of authority for all synchronized objects is Windows Server. A unique capability of Entra Cloud Sync is being able to connect multiple disconnected on-premises Active Directory forests to a single Entra tenant for synchronization. This feature comes in handy, especially during corporate mergers where you may have multiple forests and the new management wants to adopt Entra ID without maintaining multiple Entra tenants. With this feature, you can consolidate Active Directory objects from disconnected forests into a single tenant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra]] (14), [[Microsoft Entra ID|Entra id]] (8), [[Active Directory]] (7), [[Windows Server]] (5), [[Microsoft Azure|Azure]] (2)
> **Definitions:** is a  (2), means that (1), known as (1)
> **Analogies:** for instance (2), for example (1)
> **Prerequisites:** configure (2), install (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** inactive (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)

#### [Manage users](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=2)** - [Presenter] As an [[Microsoft Entra ID|Entra]] administrator, it is important to have a comprehensive understanding of the four key pillars of an Entra tenant. Those are users, groups, devices, and applications. Let's start with users. Here's the first rule of thumb to remember. The lifecycle of user accounts depends on their source of authority. As we learned earlier, most organizations operate in a hybrid fashion, with only a few having a standalone cloud-only environment. Due to this, there's going to be a mix of different types of users in any tenant. That is why understanding the concept of source of authority will help you manage users appropriately. Federated users are managed and authenticated in [[Active Directory]], which is their source of authority, because that is where they are created. These users are synchronized from environments where both Active Directory Domain Services and Active Directory Federation Services are deployed. When a federated user attempts to sign into [[Microsoft Azure|Azure]], their sign-in session is redirected to the federation servers on-premises for authentication. This is because their password hashes are only stored in Active Directory and not synchronized to Azure. Then we have synchronized users that can be authenticated in either Active Directory or [[Microsoft Entra ID]].
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=98)** The source of authority for these user accounts is, again, Active Directory, because that is where they are created. These users are synchronized from environments where we just have Active Directory Domain Services deployed. When a synchronized user attempts to sign into Azure, they can be authenticated directly in Azure without any intervention from Active Directory, because their password hashes are not only stored in Active Directory but also synchronized to Azure. Federated and synchronized accounts are meant for users who require access to both on-premises and cloud resources. They can authenticate against Active Directory to access local resources, and against [[Microsoft Entra ID|Entra ID]] to access cloud resources. Next, we have cloud-native users that are entirely managed in Microsoft Entra ID. There is no synchronization involved. The source of authority for these user accounts is Entra ID, because that is where we create them. Their entire lifecycle starts and ends in Azure. When a cloud user attempts to sign into Azure they are natively authenticated in the cloud, because both their user object and password hash is stored in the cloud. These users can take advantage of modern cloud-grade features in Entra ID, and have no dependency on any on-premises infrastructure.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=196)** We create cloud-native accounts for users who primarily need access to apps and resources in Azure. Since the scope of operation of this account is confined to Azure, it means a cloud user will not be able to authenticate against Active Directory on-premises. At this point, you should have a clear understanding of which account to create and use in what scenario. Let me give you a quick recap. If users need access to resources in both environments, passwords must be stored only on-premises and the authentication should only happen on-premises, you go with federated users. This is the most conservative approach. Then, if users need access to resources in both environments and you are okay with storing passwords in the cloud, and authenticating users in the cloud, you go with synchronized users. This is a more balanced approach. Then, if users primarily need access to apps and resources in the cloud, and almost minimal to none on-premises, you go with cloud-native users. This is the most modern and cloud-first approach you can embrace among these three options. In general, it is common for an Entra tenant to have mixed users, either a combination of federated and cloud-native users or synchronized and cloud-native users. The existence of federated and synchronized users
>
> **[4:54](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=294)** is mutually exclusive. Once these user accounts populate in your Entra tenant, you can assign Entra roles to grant administrative rights to your users. These roles can be assigned to cloud-native users as well as synchronized or federated users. Entra roles help you define the level of access and permissions users have within the tenant. To put things into perspective, let's get into a demo showcasing how to create new user accounts in Entra ID. We are back on the homepage of the Azure portal. If you notice, I made a minor tweak to its appearance. I turned on the dark mode. Other than that, everything is as it was in the last demo. Let's click on Microsoft Entra ID here to go into our tenant's overview page. Here you can see it's the same account. ServerBaba Directory, primary domain is serverbaba.in, license is Microsoft Entra ID free and there's only one user account at the moment, which is the one I'm using right now. Over the length of this chapter we will be adding users, groups, devices, and applications to our tenant, so pay attention to these numbers here. To create new users, I'll go to the users here on the left side and click on it. As you can see, there's only one user account,
>
> **[6:28](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=388)** and that's mine. I created this [[Microsoft]] account before signing up for Azure, which means it is external to Azure. I suggest that once your Azure subscription is set up, create a strong password for this account and keep it reserved for emergency use only. So the first action I'll perform is to create a cloud-native user account for myself that I can use regularly and belongs to this Entra tenant. To do that, I'll click on the New User button here on the top and then click on Create New User. That should bring us to this Create New User page. I'll type in my user principal name, kunal@serverbaba.in. We can see this domain listed here because we added, verified, and set it to primary in the last demo. The default mail nickname looks good to me. I want my display name to be Kunal D Mehta, then I'll copy the autogenerated password onto the clipboard to sign in and change it later. Below that, I want the account to be enabled after creation, so I'll leave this checkbox as it is. Then I'll go down here and click on this button to go to the next properties page. Here, it'll ask you for basic information about the user. Since this is my account, I'll be entering my information.
>
> **[8:03](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=483)** First name, Kunal. Job title, IT administrator. Company name, ServerBaba Consulting. Then Department, IT. [[Microsoft Office|Office]] location, Hyderabad. Then I'll scroll down a little bit. City, Hyderabad again. Country or region, India. Below that, age group, adult. And Usage location set to India. I'll recheck everything to make sure there are no mistakes. While it is not mandatory to fill in this information, I strongly recommend you do it, mainly because some Entra ID features depend on it and it also gives your employees a rich [[User Experience (UX)|user experience]] to work with. Once I'm done, I'll click on the Next Assignments button down here. On this page, I can add this user account to administrative units, groups, or assign Entra roles to it. Because this is going to be my account, I want to assign administrative privileges to it. To do that I'll click on Add Role, search for Global Administrator, check the box next to it, and then click on the Select button at the bottom,. You can see the Global Administrator role has been selected for assignment. I'll move on to the next review and create page
>
> **[9:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=578)** by clicking on this button below. Here I'll double-check everything to make sure all information entered on the previous pages is correct, and there are no mistakes. It looks perfect to me. I'll finally click on the Create button. It'll take a couple of seconds and then bring me back to the Users page. On the top right corner of the page, you can see a success notification. That's always good news. I'll refresh the page, and there it is. Let me just adjust these columns a little bit to make sure you can see all the fields clearly. This is my new user account. Its user principal name is Kunal@serverbaba.in and the value of its On-Premises Sync Enabled column is no. This proves that it is a cloud-native user account in the ServerBaba Directory. To save us precious time I'll now pause the video, repeat this process nine more times, and then come back and join you. All right, so here we are. I created cloud-native accounts for Alex, Emily, Georgina, Marcus, Nick, Oliver, Ryan, Taylor, and Zoe. That's because I wanted a total of 10 cloud-native user accounts, and we have it here. I'll click on Manage View and then Edit Columns. I'll get rid of the columns On-Premises Sync Enabled,
>
> **[11:15](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-users?u=76281980&t=675)** Identities, Company Name, and Creation Type. Instead, I'll add the Department and City columns. You can now clearly see what values I filled in for the Department and City attributes when I was creating them. Alex, Emily, and Nick are from the sales department in the city of London. This is my account and this is Georgina's account, who also works in IT but from New York City. These attributes will come into play in the next demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (13), [[Active Directory]] (11), [[Microsoft Entra ID|Entra]] (8), [[Microsoft Entra ID|Entra id]] (5), [[Microsoft Entra ID]] (4)
> **UI Navigation:** click on (10), go to (2), checkbox (1), scroll down (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the last (2), in the next (1)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** set up (1)

#### [Manage groups](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=2)** - [Instructor] Now let's talk about groups. Similar to users, the lifecycle of groups also depends on their source of authority. Groups created on-premises are managed with [[Active Directory]], and groups created in [[Microsoft Azure|Azure]] are managed with [[Microsoft Entra ID|Entra ID]]. First, we have synchronized security groups that are managed in Active Directory. You create these groups on-premises, add members to them, and then synchronize them to the cloud. What's convenient is that the membership of these groups is preserved post-synchronization, so users who are members of the group in Active Directory will continue to be members of the synchronized security group in the cloud. This type of group is used when a set of users require access to both on-premises and cloud resources. Then we have cloud-native security groups that are managed in Entra ID. These are created in the cloud, and there is no synchronization involved. Their entire lifecycle starts and ends in Azure. As you may have guessed already, this type of group is used when a set of users primarily require access to cloud resources. The similarity between synchronized and cloud-native security groups is that both these groups are intended to grant users access to resources. These groups provide ease of administration
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=97)** by allowing us to grant access to resources collectively instead of granting access to each individual user. Next, we have [[Microsoft 365]] groups, and their main purpose is to enable collaboration among users in Azure. These are also cloud-native because they are created and managed in Entra ID. They do an excellent job of improving communication and productivity among users. Now, how does it enable collaboration, if you ask? It does so by provisioning a shared mailbox, shared calendar, document libraries, and other collaborative tools for its members through seamless integration with [[Microsoft Outlook|Outlook]], [[SharePoint]], and Teams. It is important to keep in mind that Microsoft 365 groups enable collaboration among users by providing them with shared workspaces. Whereas, on the other hand, security groups grant users access to resources. Their goal is to reduce the administrative burden for us. Moving on, cloud-native groups have another interesting new feature where their membership type can be set to either assigned or dynamic. In groups with assigned membership, an administrator manually adds or removes members to it, just like we normally do in Active Directory. But in groups with dynamic membership, we configure rules
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=193)** to determine who should be a member of the group and who shouldn't. These rules can be based on attributes of the user such as city, country, department, or job title, and many more. If the defined rule is satisfied, a user is automatically added to the group. Let's jump into a demo that illustrates how to create new groups in Entra ID. Between the last demo and this one, I made one small change. I upgraded my Entra ID license from the free plan to a trial of the Premium P2 plan. I did this off the screen because it's a simple process where you enter your billing address and activate the trial. There are no technical steps involved. So continuing with our demo, I'll first head to the Groups page. To create a new group, I'll click on the New Group button here at the top. That should bring me to this New Group page. What I want to do right now is to create a new cloud-native security group for the IT team. So I'll leave the group type to Security, name it IT Team, leave the group description field blank for now. And then if I look below, the membership type is Assigned. Do I want to enable [[Microsoft Entra ID|Entra]] role assignment for this group? I will toggle it to Yes. So the basic structure of our group is complete.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=288)** Now, I'll click on this link below to add members to the group manually. I'll first search for my own account, because I'm from the IT team, mark the box, and then search for Georgina. Mark her box, and then click on the Select button at the bottom of the page to add these two users to this group. Finally, I'll click on the Create button. A popup asks me if I really want to enable Entra role assignment for this group, because if I do, I cannot change this setting later. I'll click on Yes to confirm. Within a couple of seconds, we get the success notification. Let me just refresh the page, and there it is. You can see the group type column says Security and the membership type column says Assigned. If I click on the group and go to its members section, you can see both me and Georgina are added to the group. Let me go back to the Groups page and click on the New Group button again to create another group. This time instead of a security group, we will create a Microsoft 365 group. This group will be for the sales team so that they can collaborate. I'll type in the name, Sales Team. The address for their shared mailbox is going to be Sales. In the membership type, I'll select Dynamic User. This is the reason why I had to upgrade
>
> **[6:23](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=383)** my Entra ID license from the free plan to the Premium P2 trial plan. So what you need to remember here is that dynamic membership is a premium feature. This dropdown will be grayed out if you are on the free plan. In the next step, instead of adding members, I'll add a dynamic query that will automatically determine who should be its members. To do that, I'll click on this link here. A basic dynamic query, or a dynamic membership rule, consists of a property, an operator, and a value. In the property dropdown, I'll select the department, in operator, I'll select Equals, and in the value box, I'll enter the string Sales, and hit Enter. The rule syntax for this dynamic query is generated here. you can see it says user.department -eq "Sales." I'll click on the save button on top to save the changes I made, and go back. And then finally click on the Create button. Now the group will be created within a few seconds, but sometimes it may take a few minutes for the dynamic query to run and the group memberships to be updated. So depending on how many users your tenant has, you may have to wait for a bit. Let me refresh the page, and there it is. I'll click on the group to go into more details.
>
> **[8:00](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-groups?u=76281980&t=480)** Now, this is what you should be looking for. The dynamic rule processing status should say Succeeded. Let's verify if it really did. I'll click on Members here, and yes, looks like Alex, Emily, and Nick were all automatically added to the Sales group. We did not update this list manually. So what happened in the background is that the dynamic group scanned for the attributes of all users, picked up all the accounts whose department attribute was set to Sales, and then added them to this group all on its own. Isn't that wonderful?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (6), [[Active Directory]] (4), [[Microsoft Azure|Azure]] (3), [[Microsoft 365]] (3), [[Microsoft Entra ID|Entra]] (2)
> **UI Navigation:** click on (12), dropdown (2), toggle (1), go to (1), select the (1)
> **Analogies:** similar to (1), just like (1), such as (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Manage devices](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=2)** - [Kunal] Now, let's explore how to manage devices in [[Microsoft Entra ID|Entra ID]]. So far, you've learned that users and groups can either be synchronized or cloud native. The same principle applies to devices. First, we have an [[Microsoft Entra ID|Entra]] hybrid join for computers that are already domain joined to [[Windows Server]] [[Active Directory]] on-premises. As you may have inferred, this dual join allows devices to seamlessly access resources across both environments. It is crucial to remember that hybrid join devices require Entra Connect for synchronization and are mainly managed using Group Policy. We need Entra Connect because Entra Cloud Sync does not support device synchronization, and we use Group Policy because the source of authority is Active Directory, which means these devices have to be managed on-premises. Enterprise organizations may also have System Center Configuration Manager deployed in addition to Group Policy for a more comprehensive approach towards managing devices and applications. Then, we have Entra Join, which lets you add [[Windows]] devices directly to Entra ID without the need for on-premises Active Directory. The process to configure this is very straightforward. A user has to simply go to Settings
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=97)** on the Windows computer they are assigned, and then use the Connect button to join the device to Entra ID using their corporate credentials. It is as easy as that. Entra Join is intended mainly for company-owned devices. Then, Entra ID also has Device Registration that enables bring-your-own-device, or BYOD, scenarios for users. The process to configure this is also straightforward. A user has to simply register their personal device with Entra ID. Once registered, they can securely access corporate resources using their own devices and without compromising their [[Privacy]]. The main objective of Device Registration by design is to ensure that devices that are accessing [[Microsoft Azure|Azure]] resources are recognized. This method supports a wide range of operating systems, including Windows, [[Linux]], macOS, [[Android]], and also iOS. Although Entra Join is the preferred option for company-owned devices, it supports only Windows. So, if the company also owns non-Windows devices and wants to manage them in Entra ID, Device Registration can be used as an alternate option. It's not necessary to use it only in BYOD scenarios. The common denominator
>
> **[3:12](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=192)** between Entra Join and Device Registration is that both can be managed with Intune or other MDM solutions. If you are not aware, Intune is [[Microsoft]]'s cloud-based mobile device management solution that we use for configuring policies, deploying applications, and in general, making sure devices are secure and compliant with organizational standards. Intune supports Windows, as well as non-Windows devices. Now, let's try to implement Entra Join in Windows. This is a [[Windows 10]] computer. Let's assume my company has assigned this device to me and requested me to join it to Entra ID. Here's how we'll do that. I'll first go to the search box and look for the Settings app. I can see it shows up here on the top apps list. Let me click on that, drag the window to the center, and there it is. This is the Settings app of a Windows 10 computer. To join this computer to our ServerBaba directory, I'll first go to accounts. Then, on the left side, click on the tab for Access work or school. On this page, you'll see a connect button. Let's click on that. This is the page we are looking for. You can do everything from here.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=287)** You can add this computer to your local Active Directory domain, perform a Entra Join, or configure Device Registration. If I simply enter my corporate credentials in this box and click on Next, it will kickstart the Device Registration workflow. But that's not what we want to do. We want to perform an Entra Join, so I'll click on this link below that says, "Join this device to [[Microsoft Entra ID]]". Enter my corporate email address, which is kunal@serverbaba.in, click next, enter my password, and click on Sign in. I get a warning asking me to make sure this is my organization. It is, we know that. I'll finally click on the Join button to confirm my action. It takes a few seconds, and if everything goes well, you'll see a message that says, "This device is connected to ServerBaba Directory." I am now required to sign out of this device and sign back in using my corporate credentials. I'll click on the Done button to close this window. You can also see under the Connect button, it says, "Connected to ServerBaba Directory's Entra ID". Now, let's switch to the Azure portal. On the left side of our directory's Overview page, I'll click on Devices.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-devices?u=76281980&t=381)** This is the Overview page for devices. I'll click on all devices on the left side. Let me just adjust the columns, here, so you can see everything that's written properly. All right. The Windows 10 computer we just joined to Entra ID shows up here. You can see the device name, which says, "EJDemo 1", the Join Type, Owner, and other settings. I can click on the device to view more details. This is how you add a Window 10 device to Entra ID using Entra Join. Your next step would be to enroll this device with Intune to start managing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra]] (12), [[Microsoft Entra ID|Entra id]] (10), [[Windows]] (8), [[Active Directory]] (4), [[Windows 10]] (3)
> **UI Navigation:** click on (11), go to (3), switch to (1)
> **Prerequisites:** configure (3), required to (1)
> **Env Vars:** byod (2), mdm (1)
> **Code Identifiers:** macos (1), ios (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)

#### [Provision enterprise apps](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=2)** - [Instructor] Moving on to the fourth and final pillar of an [[Microsoft Entra ID|Entra]] tenant, applications. At the beginning of this chapter, I gave you an overview of how to synchronize users, groups, and devices from [[Active Directory]] to [[Microsoft Entra ID|Entra ID]]. There I mentioned that migrating applications is a complex process that depends on various factors. It cannot be done through synchronization tools like Entra Connect or Entra Cloud Sync. An application migration strategy largely depends on the degree of access you have to the application's source code and the platform it was developed on. One, if it is an off-the-shelf product developed by a large software manufacturer, you may not have access to its source code at all. Two, if it is developed by an independent software vendor that your organization contracted, you may have partial or more access to its source code. Three, if it is fully developed in-house by developers of your organization, you'll most likely have full access to its source code. Each case will require a different strategy. Unfortunately, that's not in the scope of this course. So without drifting away, let's talk about how to provision enterprise apps directly in Entra ID. The [[Microsoft]] Identity Platform
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=97)** provides identity and access management for apps in Entra ID. It offers a comprehensive set of APIs and services to developers for managing identities and integrating applications with Entra ID. Leveraging an identity as a service solution is a lot easier than coding the entire authentication and authorization module of an application right from scratch. If you are lucky, you may not have to do that because Entra ID comes with the Apps Gallery, which is a curated catalog of pre-integrated [[SaaS]] apps. It has most of the popular business applications that organizations out there use pre-configured to work seamlessly with Entra ID. Provisioning applications from the Apps Gallery to your tenant takes only a few minutes. This reduces the administrator overhead and developer effort required for integration. Organizations can also deploy the application they desire as a [[PaaS]] app if it is developed by third-party ISVs or in-house. This works when organizations have either partial or more access to the application source code and developers know how to utilize the Microsoft Identity Platform. The modern identity methods that Entra ID offers for the authentication and authorization of PaaS apps
>
> **[3:10](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=190)** are OpenID, OAuth, SAML, and WS-Fed. Developers can choose any of these popular industry standards that meet their functionality and security requirements. Then a process called app registration is required for all those apps that are not hosted in the gallery, but require integration with Entra ID. This is the actual step where a [[Vanilla]] application is integrated with Entra ID. This involves going to the [[Microsoft Azure|Azure]] Portal, specifying the app's settings, permissions, and scope. To put it in simple words, this is where you introduce your app to Azure and request Entra ID to start handling authentication and authorization on behalf of the app. One of the prominent features of Entra ID and Azure is developer friendliness. Developers get a wide variety of SDKs and libraries to help them build web, mobile, and desktop applications quickly and at scale. They also get the freedom to choose any of the popular platforms out there like .NET, [[JavaScript]], [[Java]], [[Python (Programming Language)|Python]], [[Android]], iOS, et cetera. Let us see how to provision an app from the Apps Gallery. We are back in the Azure Portal.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=283)** To provision an app from the Apps Gallery, I'll first click on the Enterprise applications button here on the left. That brings us to the All applications page. Now, I haven't decided what app I want to add because this is just a demo in a test environment. I will explore around the Apps Gallery and see what peaks my interest. But if you are doing this in a production environment, you must consult the app vendor's documentation in advance and plan your rollout strategy meticulously. To get started, I'll click on the New application button on top. This is the Apps Gallery. You can use this search box to search for the SaaS app you are looking for. Or if I scroll down, Microsoft has a list of featured applications that are popular among organizations. There are apps like Box, WebEx, DocuSign, Dropbox, Salesforce. If I scroll down, there's [[Slack]], [[Zoom]], and a whole bunch of other business apps. As far as my organization is concerned, I don't need any storage apps because I already have [[Microsoft OneDrive|OneDrive]]. And we don't need any meeting or instant messaging apps either because we have Teams. But DocuSign looks like a great option because we sign and exchange a lot of digital agreements and contract documents.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=378)** So let's click on DocuSign to provision it in our tenant. I'm given the option to choose a custom name for the app that it will display in my tenant. I leave its default name, Docusign, and right under the name field are some details of the app and the features it supports. There is also a link to a step-by-step integration tutorial for DocuSign. In a production environment, please take the time to read this carefully. For the time being, I'll just go ahead and click on the Create button at the bottom. This can take a few minutes to complete. And once it's done, you'll be redirected to the overview page of the app. After provisioning, there are additional steps you need to take to make this app fully functional and accessible in Entra ID. Those are highlighted here. We need to assign users and groups to this app, set up single sign on, provision user accounts in the app, and more. Let's configure the first step by clicking on the link right below it. I want the sales team as well as Georgina to have access to this app, so I'll click on the Add user/group button on top. Then on this page, I'll click on the link below Users and groups. Let me search for the sales group, mark the box next to it, and search for Georgina.
>
> **[7:53](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/provision-enterprise-apps?u=76281980&t=473)** Check the box next to her as well, and click on the Select button. To finalize this step, I have to click on the Assign button at the bottom. What we did here is interesting because we assigned a group and an individual user together in one step to this application. Now let us try to understand from Georgina's perspective what she'll see when she logs into her My Apps portal, the URL for which is myapps.[microsoft.com](https://microsoft.com). When I type that into the browser, it brings me to this page where I'll use her credentials to sign in, type in the password. Do I want to stay signed in? Yes. And there it is. You can see the DocuSign app was published to Georgina's My Apps portal, and the same would also reflect for all users that belong to the sales group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (12), [[Microsoft]] (4), [[Microsoft Azure|Azure]] (4), [[Microsoft Entra ID|Entra]] (3), [[SaaS]] (2)
> **UI Navigation:** click on (8), scroll down (2)
> **Exercise Files:** source code (5)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** saml (1), net (1), url (1)
> **Tools:** azure portal (2), slack (1)
> **CLI Commands:** python (1), make (1)
> **Prerequisites:** set up (1), configure (1)

#### [Manage administrative units](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=1)** - [Instructor] It is common for larger companies to have multiple administrators with different levels of permissions to handle different administrative tasks because there's only so much a single person can do. This is how a typical chain of command looks like in [[Microsoft Entra ID|Entra ID]]. On the top, you have global administrators. Under them are designated sub-administrators, and under them are your standard users. In this model, whatever rights you grant your sub-administrators, they can exercise them over all the users under them, which may not always be what you want. Like for example, what if you need to grant administrative rights only over a subset of users and not all of them? That's where administrative units come into play. Let me explain how. Administrative units help you define the scope of administration for administrators. Having clearly assigned roles and responsibilities helps improve efficiency and [[Accountability]] while reducing confusion and friction among peers. When there is a conflict between administrators, it creates a negative vibe that is never good for the organization. Once the scope of administration is defined, the next step is to delegate the management of the selected subset of resources
>
> **[1:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=96)** by placing them into an administrative unit. You then assign it to the user responsible for these resources. Delegation not only improves efficiency, but also reduces your burden so you can focus on more important things to do. Another advantage that comes with it is the ability to apply distinct policies to different administrative units. This allows you to customize access control settings, security settings, and other configurations to meet the unique requirement of each unit. This ensures you can be [[Agile Development|agile]] in adapting to your organizational policies based on operational needs. Administrative units can hold user objects, group objects, and device objects as members. Adding these objects to administrative units logically clumps them together for easier management. For example, consider an organization with offices dispersed across multiple geographies. With administrative units, you can combine users, groups, and devices in each geography into their respective administrative units and then delegate it to an administrator in that area. If required, you can further segregate larger AUs into smaller ones for ease of management. In Entra ID,
>
> **[3:07](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=187)** we also have something called Restricted Management AUs, and their sole purpose is to protect key objects in the tenant. This feature helps us safeguard critical assets and objects in [[Microsoft Azure|Azure]], making sure only those administrators who are explicitly authorized to can access them. A classic use case is to protect user accounts, groups, and devices of your organization's top-level management, CSOs, or board members, because let's face it, you don't want anyone to mess with their settings, either accidentally or mischievously. In a Restricted Management Administrative Unit, or RMAU, any type of modification, deletion, or password reset is not allowed on its members. Even global administrators cannot make any changes to the member objects unless they assign themselves to a role authorized to manage that unit. Also, if an administrator chooses to do so, it is recorded in Entra ID's audit logs, so any action performed with malicious intent can be traced back to the person responsible for it. Although this situation is rare, it's still possible. Finally, it's important to note that organizational units from on-premises [[Active Directory]] are not synchronized into administrative units in Entra ID. I am sure those of you
>
> **[4:42](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/manage-administrative-units?u=76281980&t=282)** who have experience in Active Directory may be wondering this. Tools like [[Microsoft Entra ID|Entra]] Connect and CloudSync help you synchronize users, groups, and devices, but this functionality does not extend to organizational units. This is mainly because of the difference in how objects are organized and managed across these two environments. For example, in the past, users had designated physical offices and they were categorized into OUs accordingly. But with the cloud, users are moving and working from all around, so OUs that previously made sense in Active Directory may not necessarily make sense in the form of AUs, and that is why you must manually create the administrative units you want and add members to it in Entra ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (5), [[Active Directory]] (3), [[Accountability]] (1), [[Agile Development|Agile]] (1), [[Microsoft Azure|Azure]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Env Vars:** rmau (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Standards and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Industry standards](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=2)** - [Instructor] I hope you are now comfortable with the core elements of [[Microsoft Entra ID|Entra ID]]. In this chapter, let's switch gears and talk about standards and compliance. Here we'll discuss what they are, their significance in IT, and how they benefit us. When a product claims to support industry standards, it essentially means that it allows us to use popular technical specifications for developing and running applications. These technical specifications are known, tried, tested, and widely embraced by organizations in the industry. It is important for a product to support industry standards as it ensures that you can leverage existing skills your employees already have and avoid the use of proprietary solutions. Finding and hiring candidates who have a good knowledge of the subject is also easier when you're using open standards. In contrast with proprietary solutions, finding such candidates is difficult, and even bigger risk is of vendor lock-ins. These standards can apply to a wide range of items such as writing code, storing and transferring data, or even deploying services. For instance, [[Microsoft Azure|Azure]] allows you to run apps built on the .NET platform, as well as [[PHP]], [[Python (Programming Language)|Python]], [[Java]], Ruby,
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=97)** and other popular languages out there. These are some of the most widely used development platforms in the industry. [[Microsoft]] does not restrict you to .NET only. You have the freedom to choose any language that best suits your needs. Another example of this is [[Virtual Machines]]. In Azure, you can not only provision VMs running [[Windows]], but also [[Red Hat Linux]], [[Ubuntu]], and other commonly used operating systems. The point I'm trying to make is that Azure openly embraces industry standards, and does not force you into using something you don't want to. And since this is an Entra ID course, our conversation is going to be incomplete if we don't talk about the standards from an identity and access standpoint. Entra ID supports OpenID, OAuth, SAML, SCIM, and FIDO to name a few. The first three, OpenID, OAuth, and SAML are authentication and authorization protocols. SCIM stands for System for Cross-domain Identity Management, which is a standard used for exchanging identity information across applications and services. Its job is to basically facilitate interoperability between apps. And the last one is FIDO, Fast Identity Online. We use this standard to configure
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=193)** and implement passwordless authentication. These are just a few examples of open standards that Azure supports. The list is actually much longer. Regardless of whether you work in a predominantly Microsoft environment or not, you will still be able to use Azure and [[Microsoft Entra ID|Entra]] with every bit of freedom and flexibility. Let me walk you through a few different documents that highlight what we just discussed in the slides. The links to all these pages will be in the exercise files for you to review after the course. Firstly, I'd like to highlight the documentation for Entra integrations with authentication protocols. If I scroll down, there's a neat little table with all the protocols the Entra family supports. Here is OIDC, which is the OpenID Connect protocol, then there's the OAuth 2.0 protocol, and the SAML protocol. They are fully supported, which means they provide authentication, authorization, and are compatible with multifactor authentication and conditional access in Entra ID. I'm highlighting these specifically, because they are the current industry standard protocols for modern cloud apps. Secondly, here's the documentation for SCIM synchronization with [[Microsoft Entra ID]].
>
> **[4:46](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/industry-standards?u=76281980&t=286)** The first line reads that SCIM is an open standard protocol for automating the exchange of user identity information between identity domains and IT systems. If I scroll down, there are details about when to use it, its components, and how to implement it. And lastly, this is the documentation for passwordless authentication options for Microsoft Entra ID. If I scroll down to this part, you can see that FIDO helps to promote open authentication standards and reduce the use of passwords as a form of authentication. As you learn more about Entra, exploring and reading about these industry standards will be beneficial in your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft Entra ID|Entra id]] (4), [[Microsoft Entra ID|Entra]] (4), [[Microsoft]] (2), [[Microsoft Entra ID]] (2)
> **Env Vars:** scim (4), saml (3), fido (3), net (2), php (1)
> **Definitions:** is an  (2), means that (1), stands for (1), is a  (1)
> **CLI Commands:** php (1), python (1), ruby (1), make (1)
> **Documentation:** the documentation (3)
> **UI Navigation:** scroll down (3)
> **Analogies:** such as (1), for instance (1)
> **Versions:** 2.0 (1)

#### [Regulatory compliance](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=2)** - [Instructor] When a product claims to meet [[Regulatory Compliance]] requirements, it essentially means that it follows or ensures adherence to regulations, policies, or laws drafted by a competent authority. These can be put in place for various reasons, such as optimization of existing business processes, strengthening security, safeguarding the [[Privacy]] of employees and customers, or satisfying legal restrictions at the national and international level. When you comply with these requirements, it instills trust for the product in a customer's mind because they can be confident that the product or application functions as per expectations and won't get you into unforeseen trouble. Let's talk about a few such compliance requirements that [[Microsoft Azure|Azure]] adheres to. First, there's ISO, or the International Organization for Standardization. This certification aims to establish the highest standards in quality management for proprietary, commercial, and industrial organizations. Then there's SOC, or System and Organization Controls. This basically revolves around protecting [[Financial Statements]] and improving general operational efficiency. [[PCI DSS]] stands for [[PCI DSS|Payment Card Industry Data Security Standard]].
>
> **[1:38](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=98)** This is pretty much mandatory for organizations that store credit card information or process payment transactions like most [[Banking]], financial, and FinTech institutions. Next is HIPAA, the Health Insurance Portability and [[Accountability]] Act. This has provisions to ensure confidential medical data of patients is kept private and shared appropriately with authorized personnel only. Then, FIPS, or Federal Information Processing Standard, is a US standard that applies to the security of [[Data Processing]] systems. It outlines the minimum thresholds for data encryption at [[Representational State Transfer (REST)|rest]] and in transit. The most recent one, GDPR, which stands for General Data Protection Regulations, was introduced by the European Union to protect the data and privacy of citizens residing in the European Economic Area. Like I said, these are just a few examples of the hundreds of compliances Azure adheres to. If you want to explore more on this, the exhaustive list is available on the [[Microsoft]] Service Trust Portal. Lastly, as you may already know, the responsibility for uptime and security is shared between the cloud service provider and the customer when it comes to [[Cloud Computing]]. This is known as the shared responsibility model.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=194)** When you're using Azure, Microsoft takes responsibility for some of the controls while the customer remains responsible for the other controls. To determine which responsibilities belong to whom, you can run an assessment using the Microsoft Purview Compliance Manager. This tool scans your environment and generates a personalized report that clearly outlines which compliance measures are complete, which measures are incomplete, and what actions should be taken by which party to ensure full compliance. This is the Service Trust Portal that I mentioned in the slides. All the popular regulations and certifications are listed on this page. You can see there is ISO, SOC, GDPR, PCI DSS, and more. If I scroll down, you'll see there are reports, whitepapers, artifacts, and even more resources to help you manage your organization's compliance requirements. Please note that this list is not exhaustive. It only covers the popular certifications and regulations. To view the entire list, we can go to the Azure compliance documentation. This is the whole list categorized by global certifications, government certifications, industrial, such as financial, healthcare, and even regional compliances.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/regulatory-compliance?u=76281980&t=288)** If you scroll to the bottom of the page, there are even more resources to help you with your compliance. You can see how impressively long this list is. If you want to check them out on your own, the links to all these pages will be in the Exercise Files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft]] (3), [[Privacy]] (2), [[PCI DSS]] (2), [[Regulatory Compliance]] (1)
> **Env Vars:** iso (2), soc (2), pci (2), dss (2), gdpr (2)
> **Definitions:** stands for (2), means that (1), is a  (1), known as (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** such as (2)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Administering an Entra Tenant

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing an Entra tenant](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=2)** - [Instructor] So far, we have just scratched the surface of [[Microsoft Entra ID|Entra ID]]. A deeper appreciation will come only through hands-on practice. However, in this chapter, I'll try my best to give you an overview of what it entails to be administering an [[Microsoft Entra ID|Entra]] Tenant. Managing an Entra tenant can be an immersive experience because of the great features and powerful tools we get for handling our identity and access needs. Let me make my case. The Entra family is designed to facilitate dynamic modern identities that can adapt to the evolving needs of any organization. It supports not only [[Microsoft Azure|Azure]], but also on-premises [[Active Directory]], AWS, and GCP. It gives you the freedom to be [[Agile Development|agile]] and stay on top of trends in a rapidly changing digital landscape. To me, that is an underrated luxury. Then, Entra ID is a cloud powered identity as a service solution that gives you centralized administration and global reach, without the need for on-premises infrastructure. It comes with all the built-in goodness of the cloud, like [[Scalability]], availability, fall tolerance, plus automatic backups and updates. Then, end users are less dependent on the help desk and administrators
>
> **[1:36](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=96)** because they can now avail self-service to edit their profiles, change or reset passwords, manage group memberships, and request access to apps. This empowers us as administrators to focus on more strategic tasks. In addition to that, you can also invite external users to collaborate with your employees in the tenant. Whether they are external partners or contractors, you can securely grant them access to your resources without the overhead of setting up things like cross forest trust relationships and federation servers. Then my personal favorite is the ability to delegate ownership of groups and apps to those in charge and enable end users to manage their own device join and registration. I cannot emphasize enough what a huge difference this makes in our lives. Next, Entra also provides sophisticated sign-in logs, audit logs, and Health for monitoring. With Sign-in logs, you can view all sign-in attempts made against your tenant, along with the device and location information. Audit logs allow you to keep a track of which user accessed what resources and when, for [[Accountability]]. The health component provides a comprehensive insight into your entire identity infrastructure spanning across
>
> **[3:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/managing-an-entra-tenant?u=76281980&t=191)** the cloud and on-premises environment. And this last one is something businesses and end users love: Entra offers custom branding options such as your company logo on the login page, profile pictures for users and general appearance settings like the dark mode. I personally love the dark mode and cannot do without it. Despite the fact that these features are purely cosmetic and non-functional, they still help reinforce your brand and provide an engaging [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra]] (5), [[Microsoft Entra ID|Entra id]] (2), [[Microsoft Azure|Azure]] (1), [[Active Directory]] (1), [[Agile Development|Agile]] (1)
> **CLI Commands:** make (1), aws (1)
> **Env Vars:** aws (1), gcp (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Securing an Entra tenant](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=2)** - [Instructor] Security is an inherently complex subject. If we want to keep our environment secure and the bad actors out, what we need to begin with is a strong gatekeeper. That's the reason why [[Microsoft]] says identity is the new control plane. An ideal solution should provide us with a multi-layered approach to security, and that's where [[Microsoft Entra ID|Entra ID]] comes into play. It allows you to deploy controls at various layers to protect your tenant. These layers, in essence, are manifestations of core ideas like the principle of least privilege, zero trust, and defense in depth. They work together to keep the bad actors out, and at the same time maintain ease of access for legitimate users. Let me explain this in a little more detail. A regular sign-in requires a set of credentials. To add an additional layer of security, Entra ID allows you to configure multifactor authentication using the Authenticator app, email, phone calls, and text messages. Based on a study, implementing this one additional step effectively stops 99.9% of attacks on your accounts and prevents them from being compromised. An even better way to improve security is to deploy [[Microsoft Entra ID|Entra]] Conditional Access,
>
> **[1:37](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=97)** which analyzes sign-in attempts based on user behavior, location, and device information. Depending on the result of this analysis, it may do one of three things. It may either directly allow the sign-in, stop it, or require you to perform an additional task such as multifactor authentication before approving the sign-in request. So you see this solution is a little smarter than simply using multifactor authentication. Then Entra ID also supports passwordless authentication with the Authenticator app, [[Windows]] Hello, FIDO keys, and certificates. This reduces the organization's dependency on passwords, thereby enhancing security and lowering the risk of credential theft. Next, Entra ID Protection uses machine learning [[Algorithms]] to detect and flag risky users, sign-in attempts, and apps. Depending on the level and type of suspicious activity, it may enforce preventive measures on the user account in question, like either require multifactor authentication or enforce a password reset. Then Identity Score gives insights into the security posture of your organization. It evaluates how well you adhere to security best practices, helps you identify areas for improvement,
>
> **[3:11](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/securing-an-entra-tenant?u=76281980&t=191)** and strengthens your defenses. This score is measured in percentage. The higher, the better. And the most recent member to join [[Microsoft Azure|Azure]]'s arsenal of security [[Microsoft Products|products]] is the [[Microsoft Copilot]] for Security, which is a [[Generative AI]] tool. It promises to assist with rapid investigation into risks, faster troubleshooting, and bringing new levels of administrative efficiency, all of it done in natural language that we as humans use in our daily life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (4), [[Microsoft]] (1), [[Microsoft Entra ID|Entra]] (1), [[Windows]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** fido (1)
> **Versions:** 99.9 (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Potential benefits of deploying Entra ID](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=2)** - [Narrator] Deploying [[Microsoft Entra ID|Entra ID]] can offer a wide array of benefits for businesses of all sizes. Let's explore some key advantages you may be able to enjoy. Small to medium-sized businesses can save on the upfront cost of expensive [[Hardware]] and software licenses. It is quite possible for the number of physical domain controllers and [[Windows Server]] licenses to go down all the way to zero for such businesses. This allows SMBs to allocate their capital investments into growing the business. Similarly, enterprises can save on hardware, licenses, and additional services they may need to maintain their identity infrastructure. You can now manage with less number of domain controllers, less number of servers to backup and update, and probably even get rid of federation servers and traditional VPNs. Doing that could lower operational costs and improve ROI in the long run. We also learned previously how Entra ID provides a highly available and fault-tolerant identity infrastructure designed to ensure business continuity. This is extremely critical, because authentication is the first barrier to entry, and if this service itself fails, everything after that becomes inaccessible,
>
> **[1:35](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/potential-benefits-of-deploying-entra-id?u=76281980&t=95)** even if the target applications and resources are up and running. If you cannot authenticate, you cannot access them, as simple as that. Then Entra ID also provides global [[Scalability]] and resilient headquarters to branch [[Microsoft Office|office]] connectivity. So, instead of relying on traditional slow LAN links for cross-site authentication or installing RODCs, you can now fashion your network in a hub-and-spoke topology where [[Microsoft Azure|Azure]] is the hub and all other offices are the spokes. Then hybrid identity combined with single sign-on boosts employee productivity. Just one set of credentials gives them access seamlessly to both on-premises and cloud resources. This unification improves user satisfaction and efficiency, and we all know, if the employees are happy, the organization is happy. Lastly, Entra ID includes robust security tools to mitigate modern day threats. I think we've firmly established the importance of security throughout this course and the role Entra ID plays in the game. So, that's another huge benefit of deploying Entra ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (6), [[Hardware]] (2), [[Windows Server]] (1), [[Scalability]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** roi (1), lan (1)
> **Speakers:** - [narrator] (1)

#### [Case study: Audi AG](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/case-study-audi-ag?u=76281980&t=2)** - [Presenter] I'm sure you recognize this logo. It belongs to Audi, one of the world's leading automobile manufacturers based Ingolstadt, Germany. I have a case study here showcasing how Audi implemented [[Microsoft]] Intune for mobile device management to enhance security, streamline device management, and improve productivity. Although the case study revolves around Intune, it is essential to note that [[Microsoft Entra ID|Entra ID]] was the base identity and access management solution used to deploy this. Audi leveraged several [[Microsoft Entra ID|Entra]] features such as zero trust, conditional access, and self-service among other things. This is the full range of [[Microsoft Products|products]] used in this implementation. If you are interested, I've added the link to the whole story in exercise files for you to read. This is just one of the 100s of success stories out there, but I specifically chose this one because it is special to me. In my professional life I love working with [[Microsoft Products]], and in my personal time I love going out on long drives in my Audi. So when this story came to my attention, it made me really happy. Therefore, I had to include it in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microsoft Entra ID|Entra id]] (1), [[Microsoft Entra ID|Entra]] (1), [[Microsoft Products|Products]] (1), [[Microsoft Products]] (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=2)** - [Instructor] You can now take a deep breath, sit back and relax, because you've made it all the way to the last chapter, the conclusion. Here, I'll quickly summarize the key takeaways of this course, and point you to the next step in your journey towards mastering [[Microsoft Entra ID]]. We started off with an analogy of international air travel, and compared it to identity and access management. I tried to correlate the importance of passports and visas to authentication and authorization in the computing world. Then I explained what [[Microsoft Entra ID|Entra ID]] is. We learned that it is an identity as a service running in [[Microsoft Azure|Azure]] that allows us to manage users, groups, devices, and apps in the cloud. After that, we looked into its architecture, including the writeable, primary partition, replication within and across the data centers, and read-only secondary replicas. We also got an insight into how this whole design provides global [[Scalability]]. I then drew a comparison between [[Active Directory]] and Entra ID. We found that the main difference being Entra ID supports modern authentication and authorization protocols for a modern day app, whereas Active Directory supports legacy protocols for more traditional applications.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=99)** Now, here's a challenge for you. Can you recollect the protocols, both Active Directory and Entra ID support, without looking back at the video or your notes? If you can, then fantastic. Moving on, we discussed the two tools that help us synchronize on-premises, users, groups, and devices from [[Windows Server]] to Azure, and they were [[Microsoft Entra ID|Entra]] Connect and Entra Cloud Sync. We then talked a little bit more about the latter, since it is a cloud-based solution. We then tackled the key elements of Entra ID, starting with users. I explained the different types of users, including federated, synchronized, and cloud native users. Then in groups, I explained about synchronized security groups, cloud native security groups, and [[Microsoft 365]] groups. Next, in devices, I explained about Entra hybrid join, a simple Entra join, and device registration. We then talked about how migrating existing on-premises applications to the cloud isn't very straightforward. The process varies, depending on factors such as if it is an off-the-shelf product, if it is developed by an ISV, or if it is made in-house. So that was about migration.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=193)** Then we also discussed how to provision enterprise apps in Entra ID. I mentioned the apps gallery, app registration, supported identity protocols, types of apps, and development platforms. After that, I explained the concept of administrative units, and how they allow us to delegate the administration of a subset of resources in Azure to other users. Next, we followed that up with a quick short chapter where we talked about industry standards and [[Regulatory Compliance]]. The former allows us to utilize popular technical specifications for developing solutions, while the latter ensures adherence to required regulations, policies, and laws. Moving on, I gave you an overview of what it's like to manage Entra ID. Here we talked about dynamic modern identities and support for on-premises and multi-cloud environments, including AWS and GCP. Next, I discussed the various security features that Entra ID offers, such as [[Multi-factor Authentication]], conditional access, passwordless authentication, identity score, and the brand new [[Microsoft Copilot]] for Security. Lastly, we got a glimpse into the potential benefits that an organization could experience by deploying Entra ID.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/course-summary?u=76281980&t=290)** These benefits include cost saving, increased employee productivity, global scalability, and robust security. To illustrate the effectiveness of Entra ID, I presented a case study of Audi, and how they successfully leveraged Entra ID, Intune, and Microsoft 365 to enhance endpoint management and security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (11), [[Microsoft Entra ID|Entra]] (4), [[Microsoft Azure|Azure]] (3), [[Active Directory]] (3), [[Scalability]] (2)
> **Env Vars:** isv (1), aws (1), gcp (1)
> **Cross-References:** we talked about (2), we discussed (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** such as (2), it's like (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/microsoft-entra-id-fundamentals/next-steps?u=76281980&t=2)** - [Kunal] Congratulations on completing this course. Great job. I hope you enjoyed this course where we dissected and investigated the fundamental elements of [[Microsoft Entra ID]]. To reinforce your learning, I strongly recommend you do two things. First, download the exercise files, and use the workbook included to make your own notes. Second, sign up for [[Microsoft Azure|Azure]] and retrace the demos you witnessed in this course. If you want to learn more about [[Microsoft Entra ID|Entra ID]], Azure and security, follow me on [[LinkedIn]]. You can find me by searching for my name, Kunal D. Mehta. If you find this course to be valuable, please like and share it with your friends and colleagues who might be interested in learning about Entra ID. And lastly, I would be extremely grateful if you can spare just a minute to rate and review the course. Learner feedback is what drives instructors like me and helps us make better courses for you in the future. Thank you so much for your support. I hope to see you again in another course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Microsoft Entra ID|Entra id]] (2), [[Microsoft Entra ID]] (1), [[LinkedIn]] (1)
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