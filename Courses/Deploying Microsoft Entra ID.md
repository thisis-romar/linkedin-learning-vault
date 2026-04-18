---
type: course
slug: deploying-microsoft-entra-id
url: "https://www.linkedin.com/learning/deploying-microsoft-entra-id"
duration_minutes: 123
duration: 2h 3m
level: Intermediate
updated: 1/6/2021
learners: 4424
skills:
  - Microsoft Entra ID
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/microsoft-entra-id
status: not-started
created: 2026-04-17
---

# Deploying Microsoft Entra ID

> Want to learn how to manage cloud identities in Microsoft Entra ID (formerly Azure Active Directory)? You’re in the right place. This course provides in-depth instruction regarding the day-to-day tasks that Entra ID administrators must perform after rolling out the enterprise identity service. Instructor Kunal D Mehta provides important considerations and hands-on demonstrations for each step. For

> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id) | 2h 3m | Intermediate | 4K learners

## Instructor

- [[Kunal D Mehta]]

## Skills Covered

- Microsoft Entra ID

## Table of Contents

### Introduction

#### Cloud identity
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=2)** - [Instructor] Welcome to my LinkedIn Learning course on deploying Azure Active Directory.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=8)** We'll start this course by talking about cloud identity.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=12)** But before that, let me quickly introduce myself.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=15)** My name is Kunal D. Mehta.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=17)** I'm an independent IT consultant, specializing in Microsoft Data Center and cloud technologies.
>
> **[0:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=24)** I'm really excited to have you join me in taking your Azure AD knowledge to the next level.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=30)** This course is going to be effective in helping you understand what day to day administrative tasks in an Azure AD environment look like immediately after you roll it out.
>
> **[0:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=41)** You already know by now that Azure AD is capable of independently managing users and groups, devices, and applications in the cloud.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=50)** And if you think managing them is easy, you're right.
>
> **[0:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=54)** It sure is.
>
> **[0:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=55)** But things change a little when the environment is hybrid because you now have, in addition to native objects, synchronized users and groups coming in from AD Connect.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=67)** You also have hybrid joined devices alongside devices managed in Azure, plus on-premises applications.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=74)** By on-premises applications, I mean those that are either to be moved to the cloud or are authenticated and authorized by Azure AD.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=83)** So what happens in such mixed environments is that the management method changes based on the point of origin of an object.
>
> **[1:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=91)** This will be our core focus through the remainder of this course, understanding the nuances in the management of on-premises objects versus cloud objects just after onboarding.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=103)** In this course, we will focus only on users, groups, and devices.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=109)** I wanted to include applications too, but there's so much depth to it that it deserves its own course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=2)** - Here are the prerequisites you'll need to get the best use out of this course.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=7)** I have published two Azure AD courses on LinkedIn learning, before this one.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=12)** I would strongly insist you watch those two first and then continue onto this one, for a more thorough coverage, especially if you're new to Azure AD.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=22)** The first course was Azure Active Directory: Basics where I did a complete overview of Azure AD.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=29)** Plus I explained the concept of standalone and hybrid environments.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=33)** Showed how to create an Azure AD tenant for a fictitious organization named World Traveler TV and also demonstrated how to add the custom domain worldtraveler.tv to that tenant.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=47)** Moving on, the second course was Planning for Azure Active Directory.
>
> **[0:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=53)** There, I did an in-depth coverage of the AD Connect tool, including its fundamentals.
>
> **[0:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=58)** Outlined how to plan your strategy for synchronization of users and devices.
>
> **[1:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=63)** Deployed AD Connect on premises and kicked off the synchronization process.
>
> **[1:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=69)** If you are comfortable with these topics and know how to perform them hands-on, feel free to start with this course, or else, you may want to start with one of those, but don't worry if you're starting here because this course is functionally independent of the previous two.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=84)** You'll still be able to understand everything we do here.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=90)** So, the target audience for this course is; Windows server administrators, Azure administrators and identity professionals who are familiar with the basic concepts of Azure AD.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=103)** In terms of the prior knowledge required, as I mentioned, having watched my previous courses, Azure Active Directory: Basics and Planning for Azure Active Directory is recommended.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=115)** Apart from that, a fundamental understanding of Azure Administration and Windows Server Active Directory would enhance your learning experience.
>
> **[2:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=125)** And if you want to do the demonstrations that you watch here on your own, you will need an Azure AD tenant, along with an hybrid infrastructure in place.
>
> **[2:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=134)** If you can't do hybrid, then a standalone one will also do.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), else, (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - here (1)

#### Roadmap
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=2)** - [Instructor] Here's the roadmap for this course.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=5)** The topics in this course are going to be very straightforward.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=9)** We'll focus on the most common tasks you'll need to perform daily as an Azure AD administrator.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=15)** That predominantly includes the CRUD operations, create, read, update, and delete for Azure AD objects.
>
> **[0:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=24)** My intention in this course is to simply get you comfortable with the routine tasks, without overly complicating things by teaching a ton of stuff.
>
> **[0:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=34)** There will be five chapters in this course.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=36)** The one that you're currently watching is the introduction.
>
> **[0:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=41)** In the next chapter, managing users, we will learn about the types of user accounts, the difference in methods of management for hybrid versus native users.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=51)** That'll include creating, renaming, updating, and deleting users.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=56)** We'll also take a look at tenant level settings that can be applied to these users.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=62)** Next, we'll move on to managing groups.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=65)** On the same lines as the previous chapter, we learn about the types of groups, perform CRUD operations on groups, and configure tenant level settings for them.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=76)** After that, we'll take a look at managing devices.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=80)** In this chapter, we'll learn about the three device management strategies and configuring basic device settings at the tenant level.
>
> **[1:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=89)** And finally, we'll wrap up the course with the conclusion chapter reviewing the key concepts you've learned through the chapters.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=97)** That's it, a fairly simple agenda.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=100)** So without any further ado, let's move on to the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1), finally, (1), let (1)
> **Cross-References:** in the next (1), previous chapter (1), next chapter (1)
> **Env Vars:** crud (2)
> **Prerequisites:** you'll need (1), configure (1)
> **Speakers:** - [instructor] (1)


### 1. Managing Users

#### Types of user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=2)** - [Instructor] Let's talk about the first quintessential pillar of an Azure Active Directory environment, managing users.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=9)** A directory service cannot exist without its users and that's why this is the best place to begin.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=16)** But before we dive into the chapter, let us quickly brush up on our knowledge on the types of user accounts.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=22)** If you have seen my previous courses or are familiar with the basic concepts of Azure AD, you would already know this.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=30)** There are three types of user accounts that you can have in Azure AD, federated, synchronized, and cloud, or also known as cloud-only users.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=40)** A federated user originates in an on-premises environment with Windows Server Active Directory Domain Services and Federation Services.
>
> **[0:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=49)** This user object is synchronized into Azure through the AD Connect tool.
>
> **[0:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=53)** The sign-in method used is AD FS sign-in, so the authentication happens on premises.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=60)** A synchronized user originates in an on-premises environment with just Windows Server Active Directory Domain Services.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=67)** This user is synchronized into Azure again through the AD Connect tool.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=71)** For sign-in, there are two options.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=74)** You can either use password hash synchronization or pass-through authentication.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=79)** In password hash synchronization, the authentication happens in the cloud, whereas in pass-through authentication, the authentication happens on premises, but it's facilitated by Azure.
>
> **[1:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=91)** A cloud-only user is one that originates in the cloud and has cloud-only access.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=97)** This is ideally suited in cases where there is no on-premises infrastructure present or the specific user does not need access to on-premises resources.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=108)** Federated and synchronized users are collectively referred to as hybrid users, well, because their presence is across two environments, and cloud users are referred to as native users because they're native to Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), this. (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### User object overview
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=2)** - [Lecturer] All right.
>
> **[0:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=3)** Now, let's get an overview of a User Object in the cloud.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=8)** Azure AD can have both Hybrid and Native user objects co-exist in one single tenant.
>
> **[0:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=14)** If you don't remember, a hybrid user has access to resources across on-prem and cloud environments.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=20)** Whereas a cloud only user, typically has access to only cloud resources.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=26)** Each user type whether hybrid or native, posses attributes from its original source that are required for it to be a valid object in Azure.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=36)** So hybrid users will have relevant attributes synchronized from the windows server environment into Azure.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=42)** And native users will have associated attributes generated when they are created in the cloud.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=48)** In addition to the windows server attributes, hybrid users are also appended with the necessary cloud attributes on synchronization, to make it functional with features offered by Azure AD.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=61)** A user account, its attributes and settings together in the cloud, make up a user profile.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=67)** Which is designed for cloud compatibility and readiness.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=71)** This applies to both hybrid and native users.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=75)** Now you may be thinking, what sort of compatibility or readiness am I talking about?
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=81)** For starters, things like authentication contact info for the password reset.
>
> **[1:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=86)** Users can now enroll themselves for self-service password reset by giving their phone number or alternate email address.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=94)** No more having to depend on the help desk or an administrator to manually resolve this.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=100)** From an administrator's standpoint, you can assign access to applications, devices, software licenses and resources to users.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=109)** And all of this information will be visible in that user profile to an administrator.
>
> **[1:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=114)** Something that isn't very intuitive on-premises today.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=118)** For security and compliance, you have sign-in logs, audit logs and usage location that can be viewed within the user profile all in one convenient place.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=129)** So the point is, that a user profile gives us rich insight into a user objects, permissions, assignments, activity and any relevant information there is.
>
> **[2:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=141)** Talking specifically about hybrid objects.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=144)** If you want more control over which objects from on-premises sync to Azure or which attributes of those objects sync to Azure, you can use the Synchronization Rules Editor to control this aspect of synchronization.
>
> **[2:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=157)** I've talked more about this tool in my previous course.
>
> **[2:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=162)** And finally it is important to know, that the source anchor for hybrid user objects is ms-DS-ConsistencyGuid.
>
> **[2:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=172)** If you don't know, a source anchor is what uniquely maps an on-premises object to it's corresponding copy in the cloud.
>
> **[3:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=180)** That's how AD Connect knows if an object is already in the cloud or needs to be updated.
>
> **[3:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=186)** I've talked about this in-depth in my last course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1), this. (1)
> **CLI Commands:** make (2)
> **Speakers:** - [lecturer] (1)

#### Directory roles
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=2)** - [Instructor] Now, let's talk about directory roles.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=5)** There are three types of roles in Azure AD.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=8)** A global administrator role, a user role and a limited administrator role.
>
> **[0:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=14)** If I had to compare this to the on-premise roles in windows server active directory, then global administrator in Azure AD is roughly equivalent to an enterprise administrator.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=26)** A simple user is equivalent to a domain user and the limited administrator is equivalent to other sub administrator roles we have.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=37)** A global administrator role in Azure AD is the ultimate powerful role.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=42)** It has 100% access to all objects and settings in the tenant.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=48)** I'd recommend that you have at least two global administrators for redundancy and no more than three in a small to medium sized business because more administrators can mean more chaos.
>
> **[0:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=59)** So it's best to keep that number to a minimum but at the same time also ensuring redundancy just in case one admin is taking a day off or is on a vacation.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=70)** This applies only to the global administrator role.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=74)** Then, a user role in Azure AD, as you can imagine, is just a regular user with almost no administrative privileges kind of like domain users on prem.
>
> **[1:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=86)** By default, all new users in Azure, both hybrid and native will be assigned this role.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=93)** If a person was an administrator on premises and that account was synchronized to Azure, this does not mean they will retain their administrative privileges in the cloud.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=103)** They will have to be explicitly given those privileges they need in Azure AD.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=109)** The third role, or should I say a collection of roles is the limited administrator roles.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=115)** As you can guess, these roles can find the scope of the administrative privilege to specific tasks or resources only and not the entire tenant.
>
> **[2:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=124)** There are several of these built-in limited administrator roles in Azure which we will explore shortly in the demo.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=132)** So how this works is that all new users, native or hybrid are assigned the user role by default.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=139)** Out of them, you first assign the global administrator role to yourself.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=144)** That's of course, assuming that you were an enterprise administrator on premises.
>
> **[2:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=149)** Then as I said, assign the global administrator role to another suitable member of your IT team.
>
> **[2:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=157)** Make sure you know and account for each global administrator role.
>
> **[2:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=161)** There are additional two other accounts that also have the same level of privilege.
>
> **[2:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=166)** One, the Microsoft account that was used for sign up of this Azure subscription so that has global privileges being the first account in the tenant.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=176)** And then, the service account you created in Azure AD for AD connect synchronization.
>
> **[3:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=183)** It is very important and I cannot emphasize this enough to keep all of them super secured.
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=189)** Once you have assigned your actual account, the required administrative privileges keep the Microsoft account aside only to be used in case of emergencies not daily use.
>
> **[3:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=200)** Same goes with the service account.
>
> **[3:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=203)** After that, we go to the catalog of limited administrator roles and assign relevant ones to other individuals in the organization.
>
> **[3:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=211)** Some roles may be assigned to just one user that has other roles to more than one.
>
> **[3:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=217)** It's flexible.
>
> **[3:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=219)** If you do not find a role that suits your exact requirement, you can also create a custom directory rule that allows you to be granular in terms of the permission assignment.
>
> **[3:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=229)** After you create that custom role you can then use it and assign it to any user, just like other administrative roles.
>
> **[3:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=238)** The rest of the users simply remain standard users with little or no administrative privileges whatsoever.
>
> **[4:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=244)** That's usually the majority of the employees.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), default, (1), default. (1), super (1)
> **Analogies:** compare this to (1), imagine (1), kind of like (1), just like (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Demo: Assigning a directory role
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=2)** - [Instructor] All right, now let's see a demo on assigning a directory role.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=7)** I'll start this demo with users that are already in the tenant from synchronization that I configured in my last course.
>
> **[0:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=14)** Here, I will assign the global administrator role to my own account from the Microsoft account I'm logged into currently.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=22)** So let's jump in.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=27)** Here we are in our Azure AD tenant for [http://www.worldtraveler.tv](http://www.worldtraveler.tv).
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=32)** Before we begin this demo, let me quickly walk you through what we've done in the last two courses, so that you don't miss out on anything.
>
> **[0:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=38)** If you're starting with this course, the first thing I did was go to custom domains, and add the [http://www.worldtraveler.tv](http://www.worldtraveler.tv) domain to this tenant verify it, and then set it as primary.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=51)** After that, what I did in the next course is, configure AD Connect.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=56)** As you can see, the status here says enabled and the last synchronization has just run an hour ago.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=62)** This is mainly what we've done in the last two courses.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=67)** Now that you're up to speed, let's continue on with this demo.
>
> **[1:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=72)** I'm going to close out of here, go to Azure Active Directory, then click on users.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=81)** Now here you can see this is the list of users that have been synchronized from our on premises environment, except for this user, and this user.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=90)** This is the Microsoft account, we used to sign up for this Azure subscription.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=95)** And this is the service account we made for enabling the synchronization.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=100)** And that's why the directory sync column here says, "No and no" to both these accounts, because both these accounts were created in the cloud.
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=110)** And then apart from that, you can also observe the account I'm currently signed in with is the Microsoft account.
>
> **[1:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=117)** So what I will be doing is I will go to my actual account.
>
> **[2:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=122)** Here you can see there is an account called Kunal D Mahta.
>
> **[2:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=125)** It's a member and it has been synchronized from on premises, this is my actual account.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=131)** Now in order to assign directory role to this, I'm going to have to click on this account.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=137)** On the left side, click on assign roles.
>
> **[2:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=140)** Here you can see no directory roles are currently assigned to this account, which means this is a standard user right now and has no administrative privilege whatsoever.
>
> **[2:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=150)** To make this account a global administrator account, I'll have to click on the Add assignments button on the top.
>
> **[2:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=156)** Let me do that.
>
> **[2:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=158)** Here you can see the list of all administrative roles that can be assigned to users.
>
> **[2:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=163)** This includes the limited administrator roles as well.
>
> **[2:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=167)** But what we want to do is we want to assign this the global administrator role, which is over here, you can see in the description, it says, "Can manage all "aspects of Azure AD and Microsoft services "that use Azure AD" and so on.
>
> **[3:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=180)** This is the role that I'm looking for.
>
> **[3:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=181)** Once I've selected this, I click on the Add button over here.
>
> **[3:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=186)** So on the top you get a notification confirming that this role was successfully assigned to this account.
>
> **[3:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=192)** And like I said, once you have assigned global administrative privileges to your own account, you need to stop using the Microsoft account for doing any administrative tasks.
>
> **[3:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=203)** And from the next demo, I'll be signed into my own account.
>
> **[3:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=206)** So let me click on this and then quickly sign out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), continue (1), for. (1)
> **UI Navigation:** click on (6), go to (3)
> **Cross-References:** in the last (2), in the next (1)
> **URLs:** [http://www.worldtraveler.tv](http://www.worldtraveler.tv) (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=2)** - [Illustrator] This is the start of the section where we discussed CRUD operations on user objects in Azure AD.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=9)** C-R-U-D, CRUD is an abbreviation for Create, Read, Update, and Delete.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=15)** The four most commonly performed actions in our jobs.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=19)** Let's start with creating user accounts, and approach this in a structured way.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=26)** We know there are three types of user accounts; Federated, Synchronized, and Cloud only.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=33)** And we have two environment on premises Windows Server Active Directory, and Azure AD.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=40)** Federated users and synchronized users are both created on premises.
>
> **[0:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=45)** Their Windows Server Active Directory accounts will get synchronized to Azure AD through AD Connect.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=51)** If you observe you can see their scope of operation is across two environments, and that is why they're also called hybrid accounts.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=61)** In both these cases Windows Server Active Directory is said to be the source of authority.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=67)** On the other hand, cloud only accounts which is obviously given the name are created in Azure AD.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=75)** They have no relation to the on premises identity infrastructure, and work as independent entities.
>
> **[1:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=82)** The source of authority for such users here is Azure AD.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=87)** Now I'm assuming you already know how to create user accounts on premises, because it does not technically fall under the scope of Azure AD, but what does is creating cloud only accounts.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=99)** Let's talk more about it.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=102)** There are four options to create new cloud users.
>
> **[1:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=106)** The first is to simply create a new user account through the user interface in Azure AD for one single user within your tenant.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=115)** The second option is to bulk create accounts using a CSV file.
>
> **[2:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=120)** This option is ideal if you have to onboard a large number of new users into the tenant.
>
> **[2:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=126)** The important thing to note is that these users are members of our Azure AD tenant, and will have email addresses in the format, username@ourcustom domain which in this case is worldtraveler.tv.
>
> **[2:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=142)** If you have not seen my previous courses this is the domain we added to our Azure AD environment, verified it, and then set it to primary.
>
> **[2:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=152)** These two methods are intended for employees of the organization.
>
> **[2:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=157)** The next option is to invite a new guest user into your Azure AD tenant.
>
> **[2:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=162)** If you have a whole bunch of guest users who need to be invited for accessing resources in your tenant you can also use the bulk invite option.
>
> **[2:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=171)** The important difference here is that these users are external to our tenant.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=176)** Their e-mail addresses will usually be in the format username@externaldomain.
>
> **[3:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=182)** So these two methods are intended for temporary users, or third-party vendors who are not employees of the organization, but how does it matter if the user is internal or external?
>
> **[3:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=194)** Well, let me explain.
>
> **[3:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=196)** For an internal user we are responsible for their account life cycle, right from creation, to deletion, and everything in between.
>
> **[3:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=205)** Plus the authentication and authorization of such accounts happens in other Azure AD tenant.
>
> **[3:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=212)** But in the case of external user accounts their lifecycle is managed externally.
>
> **[3:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=218)** If they belong to an Azure AD tenant of another organization their IT admin will be responsible for it, or if the user is using a personal account then they themselves will be responsible for the account lifecycle.
>
> **[3:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=232)** Plus typically, their authentication and authorization also happens externally.
>
> **[3:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=238)** There's only one exception to this, when they request access to resources in our tenant.
>
> **[4:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=244)** In this case we control the authorization to our resources, but still trust the external authentication system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (1), interface (1), this, (1)
> **Env Vars:** crud (2), csv (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is an  (1)
> **Speakers:** - [illustrator] (1)

#### Demo: Creating a new cloud user account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=2)** - [Instructor] To quickly follow up on what we learned, let's jump into a demo on creating a new user account.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=9)** In this demo we will create a cloud only user account for a new employee joining the company.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=18)** As I mentioned in the last demo, I'll now be signing into my own account to perform all administrative tasks from now on.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=25)** So let me sign into my account, put in the password and then I should be signed in.
>
> **[0:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=31)** No, I do not want to stay signed in.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=33)** Let's quickly jump to the Azure Active Directory tab over here.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=37)** To confirm the fact that we are actually a global administrator now, you can see over here it says your role is the global administrator, and we are signed in with kurnal@ WorldTraveler.TV account.
>
> **[0:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=49)** So, which means the last demo was successful.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=52)** Now, in order to create a new user account, I'll have to go to the users tab.
>
> **[0:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=58)** On the top click on the new user button.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=62)** Now here you have two radio buttons, do you want to create a new user for an employee of the organization, or do you want to invite a user from an external directory?
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=71)** If you remember this option is for guests.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=74)** We want to create an employee right now so I'll leave this selected, scroll down a little bit.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=81)** So the new employee joining is Robert.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=83)** So let me put in his user name, Robert.
>
> **[1:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=89)** First name, Robert.
>
> **[1:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=91)** And then do I want the password to be assigned manually or do I want to auto-generate it?
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=96)** I'll just leave that at auto-generated.
>
> **[1:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=98)** Scroll down a little bit further.
>
> **[1:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=101)** Right now he's not a member of any groups.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=103)** We can change that later.
>
> **[1:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=105)** The role currently assigned is simply a user.
>
> **[1:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=107)** That's also correct.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=109)** Do I want to block sign-in?
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=110)** No, I want Robert to be able to sign in, so I'll leave this at no.
>
> **[1:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=114)** Usage location, I'll select India.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=118)** And then in the job title I'll put in content creator and department will be the content team.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=129)** And then I'll go ahead and click on the create button at the bottom.
>
> **[2:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=134)** So you can see Robert's account is now created.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=137)** And if you see the status in the directory synced column it says no, which means this is a cloud user and not a user which is synchronized from on premises.
>
> **[2:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=147)** And that concludes this simple demo.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), scroll down (2), go to (1)
> **Code Keywords:** let (4)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reading user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=2)** - [Instructor] Now let's talk about the second CRUD Operation.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=5)** Reading user accounts.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=8)** When I say reading user accounts, I'm basically talking about reading the attributes and settings associated with user objects.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=16)** As I've explained previously, hybrid objects have attributes from two environments.
>
> **[0:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=21)** It's point of origin Windows Server and those upended in Azure AD for cloud compatibility and readiness.
>
> **[0:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=28)** So if you want to read cloud attributes are those synchronized with the object from on-premises, you can do so in Azure AD.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=37)** But if you want to read attributes that are not by default synchronized to Azure, you will have to do so in Windows Server Active Directory on-premises.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=47)** On the other hand as you may have guessed, cloud user attributes are only readable in the cloud and have no trace on-premises whatsoever.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### Demo: Reading a cloud user account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=2)** - [Instructor] Let's jump into the next demo on reading user accounts.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=7)** In this demo, we will look at the attributes of the user we created in the last demo and also check the attributes of a hybrid user to see if we find any noticeable differences between them.
>
> **[0:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=21)** Continuing where we left off in the last demo, now, let's open up Robert's account and see what his user profile looks like and what attributes are there.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=30)** I click on his account.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=32)** You can see all the details we entered in the last demo show up here, name Robert, first, named Robert, his user principal name, type member.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=42)** And you can also see the most important aspect here.
>
> **[0:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=45)** The source says Azure Active Directory, which signifies this is a cloud only user.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=51)** And then if I scroll down further a little bit, you can see the job title says, content creator, department, content team, no block sign-in, user's location, India.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=60)** But some of the contact information like address, phone number, email, those details are missing right now.
>
> **[1:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=66)** That's fine, we'll fix it later.
>
> **[1:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=68)** If I scroll back up.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=70)** Now you can see if I click on the assigned roles tab over here, you can see no roles that are currently assigned.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=75)** That's because this is a standard user and not an administrator.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=79)** If I click on administrative units, well, we have not discussed administrative units will soon do in the next chapter.
>
> **[1:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=85)** But right now, you can see he's not a member of any AUs.
>
> **[1:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=89)** Then if I click on groups, he's not a member of any groups either.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=93)** Similarly, no applications have been assigned, no licenses have been assigned nor any devices have been assigned to this user.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=102)** I want you to pay attention to this because these aspects or these things will change in the upcoming demos.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=108)** Now let me close out of this user which was a cloud only user.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=111)** And instead, now try to go into a user which was synchronized from on premises and see if we find any noticeable differences.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=118)** Let me click on Matt's account over here.
>
> **[2:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=122)** You can see all the similar details are there but in this case, the source here says Windows Server Active Directory.
>
> **[2:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=128)** Now, if I scroll down the job info, the job title, all that information is filled in.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=132)** And in this case, the contact info is also present, the email, the zip code, the state, the country.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=139)** Now, these attributes have been populated from Windows Server Active Directory on premises.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=144)** So you can see a user profile is pretty rich in terms of the details it has after synchronization.
>
> **[2:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=152)** Let me scroll back up.
>
> **[2:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=153)** And then if I go to assigned roles, no directory roles assigned because this is again a standard user.
>
> **[2:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=160)** If I go to administrative units, not been assigned to any.
>
> **[2:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=164)** Then if I click on groups here, the interesting thing is you can see he is a member of the content team.
>
> **[2:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=170)** Now this has been configured on premises and after synchronization, the user has retained its membership to all the groups it was a part of on premises.
>
> **[3:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=180)** And then similarly, if I click on applications, licenses and devices, they're not currently assigned to this user.
>
> **[3:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=188)** Let me close out of this.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=191)** So this is how a cloud only user and a synchronized user are different.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (2), go to (2)
> **Code Keywords:** let (6), case, (2), this. (1)
> **Cross-References:** in the last (3), in the next (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### Updating user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=2)** - [Instructor] By now you're familiar with the grind, so let's talk about the third group operation, updating user accounts.
>
> **[0:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=10)** Federated and Synchronized users are typically updated on Windows server because that's the source of authority.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=18)** The relevant changes then get synchronized to Azure AD through AD connect, this is for attributes that are synchronized.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=27)** If you want to modify the Cloud attributes of hybrid users you do it in the Cloud which is Azure AD because Cloud attributes appended to the object on synchronization and are only available in the Cloud and not on-premises.
>
> **[0:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=41)** So they have to be modified in the Cloud itself.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=46)** There's this one little exception to this, it is possible for one attribute to be changed in the Cloud in Azure AD and be written back to Windows server on-premises.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=57)** Can you guess what that is?
>
> **[0:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=59)** If you've watched my previous courses you'll probably get this right it's Password writeback.
>
> **[1:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=66)** Azure AD offers its users the flexibility of performing self-service password reset without having to depend on the help desk.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=75)** And since maintaining a consistent password across environments is critical for access, Azure AD allows a password change in the Cloud to be written back on-premises.
>
> **[1:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=86)** An administrator can also reset a user password in the Cloud and have it automatically be written back on-premises.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=94)** Two points to note here are that one, this writeback is instantaneous and two Azure AD validates the new password you are trying to set against on-premises password policies to see if it meets the minimum defined requirements.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=109)** The change is only accepted if it does, for now this is all you need to remember.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=115)** And of course, Cloud users are only updated in the Cloud because there's no on-premises presence whatsoever.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), self (1)
> **Speakers:** - [instructor] (1)

#### Demo: Updating a cloud user account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=2)** - [Instructor] Let's jump into the next demo on updating a user account.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=7)** Here we'll try to modify a couple of attributes for users and see what can be changed and what cannot be changed.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=15)** Great, now let's open up Robert's profile again.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=19)** Scroll down, and remember I mentioned some of the information for his profile was missing, like the city, the email, the state, the zip code and country.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=29)** Let's try to modify these attributes and populate them to Robert's profile in Azure AD.
>
> **[0:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=34)** Now, in order to do that, I'll scroll up and hit the edit button you see on the top.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=40)** That brings me to the page where I can edit this information.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=43)** You can see, I can edit his name, his first name, his UPN, his job title, department, everything is available for you to edit.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=52)** Now I'll just enter the city over here because he's joining the content team which is hosted in Hyderabad.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=57)** I'll put in the Hyderabad, the city, I'll put in the zip code 500001.
>
> **[1:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=63)** I'll enter his email, robert@worldtraveler.tv.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=70)** State, Telangana, and country, India.
>
> **[1:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=77)** So I've populated all the details that should be present for the content team members.
>
> **[1:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=82)** That looks good to me.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=83)** I'll scroll back up and click on the save button.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=87)** Great.
>
> **[1:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=88)** So we've successfully managed to update Robert's profile.
>
> **[1:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=91)** Now let me exit out of here.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=93)** Go back to users.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=95)** Click on Azure Active Directory and go to users.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=99)** So you saw that we could modify the attributes of Robert's user account.
>
> **[1:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=104)** Now let's get into Matt's user account, which was synchronized from on-premises.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=109)** I'll try to modify his attributes now by clicking on the edit button on top.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=115)** Now you see all of these fields, the name, the first name, all of these fields are grayed out.
>
> **[2:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=120)** I cannot change any of them over here.
>
> **[2:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=123)** Even if I scroll down, you can see the contact info, these parts which we filled in for Robert are again grayed out.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=129)** The reason behind it is Matt is an on-premises user synchronized through AD Connect.
>
> **[2:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=134)** And because its source of authority is Windows Server Active Directory, these changes need to be made on-premises and not in the cloud.
>
> **[2:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=142)** So these are the differences in updating users in Azure AD.
>
> **[2:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=147)** You'll see the contrast in modifying a cloud user versus synchronized user.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (2), click on (2), scroll up (1), go to (1)
> **Code Keywords:** let (5)
> **Env Vars:** upn (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Deleting user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=2)** - [Instructor] Okay, so let's talk about the final CRUD operation for users, deleting user accounts.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=8)** This is very simple and straightforward.
>
> **[0:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=11)** If you want to delete hybrid accounts, you do it on premises because that's where the source of authority is.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=18)** This then takes effect into the cloud through AD Connect, so the corresponding cloud counterpart also vanish.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=26)** Now here's a revelation.
>
> **[0:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=28)** This is why it is strongly recommended that you enable Active Directory Recycle Bin in Windows server because if you're deleting an account on premises, you can only recover it back on premises.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=40)** If you don't have Active Directory Recycle Bin enabled and accidentally end up deleting a user account, there's no way to recover it.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=48)** It will be gone forever from both environments.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=51)** Azure AD cannot recover a hybrid account because it's not the source of authority.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=57)** Understanding this is very critical.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=61)** Of the less serious of scenarios, if you have Active Directory Recycle Bin enabled, then you get about 180 days to recover that user account.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=71)** If you choose to recover it, that account will again pop up in Azure AD automatically through AD Connect.
>
> **[1:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=78)** No additional step is required.
>
> **[1:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=82)** On the other hand, a cloud-only user account is deleted in Azure AD because it's the source of authority.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=90)** At this point, what essentially happens is a soft delete.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=94)** It is removed from the user directory and moved to the deleted users bin for 30 days.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=100)** If at any point during that period the circumstances change and you want to bring the user back, it is possible.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=108)** But once the 30-day timeframe is over, then that's it.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=111)** It's a hard delete with no possibility of recovery, so be very careful while deleting users.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=118)** In fact, I suggest temporarily blocking the user account from signing in instead of deleting them.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (1)
> **Env Vars:** crud (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Demo: Deleting a cloud user account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=2)** - In this demo, deleting a user account, we will delete the account created in the first demo of this chapter and try to restore them back.
>
> **[0:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=11)** Let's see how that works.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=15)** Now let's delete Robert's account and see what happens.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=18)** To do that, I'll go into Robert's account, on the top you'll see an option which says delete.
>
> **[0:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=24)** I'm going to click on the Delete button, there's a confirmation box which asking me, do I really want to do that?
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=29)** Yes, I want to delete Robert's account and you can see on the top I get a notification that his account was deleted.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=36)** Now I know the account shows up here but if I refresh it will not.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=39)** Let me just refresh the page again.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=43)** Now as you can see, after refresh, Robert's account is gone from this folder but like I mentioned, this is a soft delete and not a hard delete.
>
> **[0:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=53)** If you want to recover Robert's account back, you'll have to go to the deleted user's bin by clicking on this tab.
>
> **[0:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=59)** You can see that Robert's account has shown up over here, you can see the deletion date and the permanent deletion date.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=67)** So this is about 30 days after the soft delete.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=71)** Now there are two things you can do from here, you can either select this and permanently delete it which I suggest you don't do or another option that you have is to restore the user.
>
> **[1:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=82)** Now what I'm going to do is I'm going to restore this user and see if it shows back in the all users folder.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=87)** I click on the Restore User, I get a confirmation box, click on the Ok button.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=94)** On the top, I see that Robert has been successfully restored, great.
>
> **[1:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=98)** Let me close other field.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=99)** Go to the all users folder.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=103)** Robert isn't here yet but after refresh, he will be.
>
> **[1:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=106)** So let me just refresh this page.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=111)** Awesome, so I have just refreshed the page and now you can see Robert's account has shown up over here which means the user was deleted and successfully restored back.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (9), let (5)
> **UI Navigation:** click on (3), go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Blocking user account sign-ins
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=2)** - [Instructor] Blocking User Account Sign-Ins.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=5)** I mentioned this in the last slide, so let's get to know more about it.
>
> **[0:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=10)** The flow here works very similarly to the previous operation.
>
> **[0:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=14)** If you want to temporarily stop a hybrid user account from signing in, you'd disable it on premises.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=20)** And this change then comes into effect in the cloud through AD Connect.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=25)** If you want to temporarily stop a cloud account from signing in, you do it in the cloud by configuring its Block Sign-In property.
>
> **[0:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=34)** This is likely different in the naming convention.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=37)** It's called Disabling On-Premises and Blocking in the Cloud.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=42)** But, both pretty much do the same thing.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=46)** And it goes without saying, blocking a cloud user sign in has got nothing to do with Windows Server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Demo: Blocking a user account sign-in
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=2)** - [Instructor] In this demo, blocking a user account sign in.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=5)** We will put a pause on log in attempts coming from the user account recovered in the last demo.
>
> **[0:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=10)** Let's see how to do that.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=15)** Let us try to block sign-in for Robert's user account, but first let me show you that he can actually sign in.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=22)** Let me put in his password here.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=26)** No, I do not want to stay signed in.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=29)** And you can see he was successfully able to sign into Azure.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=33)** Now let me sign out again.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=36)** So I'm here back in Robert's profile.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=40)** Now to block his account from signing in, I'll have to click on the edit button on top, scroll down a little bit, and then change the setting of block sign in from no to yes.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=52)** Once I make this change, I'll go ahead and save it.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=56)** You get a confirmation that this change was successfully executed.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=60)** That's great.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=61)** Now, let's again try to see if Robert is able to sign in.
>
> **[1:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=66)** Now I'm going to click on Robert's user account here, put in the password and see if he's able to sign in.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=74)** Oops. It says your account has been locked, contact your support person to unlock it and then try again.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=80)** So this is how the block users sign-in feature works in Azure (mumbles) And I strongly recommend implementing this before going ahead and deleting a user account.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### User settings
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=2)** - [Instructor] So far, we've seen settings at the user level.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=5)** That's when you go into an individual user profile and make changes to their permissions or settings at the user level.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=12)** But some changes need to be applied across the tenant for all users.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=17)** These are called tenant level user settings.
>
> **[0:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=21)** Some of the things we can configure at this level are, managing access to the Azure AD admin portal.
>
> **[0:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=28)** Well, to be specific managing access of non-administrators to the Azure AD admin portal.
>
> **[0:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=35)** By default non-administrators can log into the Azure AD portal and view resources they are assigned to work with or allowed to read.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=43)** This is helpful when you have an internal team of developers who need access to resources tied to that Azure AD accounts.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=52)** But if you are maybe a non IT company with no technical teams, except for the IT admins, then configuring this setting makes sense.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=61)** Next, control user access to enterprise applications.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=65)** When a user needs access to use an application, they first need to give it consent.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=70)** A consent that they are okay with the application accessing that information required for its functioning.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=76)** This setting deals with the consent settings of all users at the tenant level.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=83)** After that comes managing privileges for app registration.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=87)** Then a new application is developed, it needs to be integrated with Azure AD for authentication.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=94)** For that to happen, it needs to go through a process called app registration.
>
> **[1:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=98)** This setting allows you to configure which users are allowed to register custom applications for authentication with Azure AD.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=108)** Then you have a setting for managing LinkedIn account connections.
>
> **[1:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=113)** This is more of a social feature than a technical one.
>
> **[1:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=116)** Once this is enabled, users will be able to consent to the connection between Microsoft Azure and their LinkedIn profiles.
>
> **[2:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=124)** This will result in an enriched experience on LinkedIn and Microsoft apps and services.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=131)** Next, you can also manage external user access from here.
>
> **[2:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=135)** Remember we talked about guest users a few videos ago.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=139)** This setting lets you configure which users in your organization can invite guest users, which external users are allowed to be invited, and which aren't.
>
> **[2:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=149)** Also, what they can view and not view in your directory as external users.
>
> **[2:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=155)** All of that can be managed from here.
>
> **[2:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=159)** Finally, the last setting allows you to configure how users interact with Azure AD features in preview.
>
> **[2:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=167)** Because features in preview quickly move to general availability, this section will be fast changing.
>
> **[2:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=175)** All the settings that I've just described, works for both native and hybrid users.
>
> **[3:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=183)** I think I've done enough talking for now.
>
> **[3:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=185)** Let's see these settings in action.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (4)
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### Demo: Configuring user settings
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=2)** - [Instructor] In the last and final demo of this chapter configuring user settings, we will walk through the tenant level user settings available in Azure AD and make changes that are relevant to other organization.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=16)** Now let's configure user settings at the tenant level.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=20)** To do that I'll click on users on the left, and then over here, click on user settings.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=27)** That should bring you to this page.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=30)** Let's go through these settings in order.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=33)** So the first setting here says user can register applications.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=36)** This setting pertains to app registrations.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=39)** Right now we do not have any plans of developing custom applications in house, so I'll select the no option over here.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=46)** I do not want users to be registering any applications right now.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=50)** Then the next setting here says restrict access to Azure AD administration portal.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=56)** You see the default setting is no, I want to enable this because right now I do not expect any users requiring access to the Azure AD admin portal.
>
> **[1:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=66)** Then the next setting is for LinkedIn account connections, I'll leave that to the default yes, and then you see, there are two links below that.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=76)** Before we go to them, I'll save the settings we made so far by clicking on the save button on top, great.
>
> **[1:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=82)** Now I'll click on the manage external collaboration settings link over here, so all the settings you see on this page pertain to access for guest users.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=93)** Out of these three here the one selected is guest users have limited access to properties and membership of directory objects.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=100)** This option is kind of balanced between the most inclusive and the most restrictive one.
>
> **[1:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=105)** So leave that over here as default, scroll down a little bit.
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=110)** Now, do I want administrators and users in the guest invited all to be able to invite guests to our tenant?
>
> **[1:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=116)** Yes.
>
> **[1:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=117)** Do I want other members or other standard users to be able to invite guests?
>
> **[2:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=121)** That will be no.
>
> **[2:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=124)** Then do I want guests to be able to invite more guests?
>
> **[2:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=127)** That is again going to be no.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=129)** Then the next couple of settings are in preview right now.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=132)** This setting enables guests to log in using an OTP.
>
> **[2:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=136)** Do I want that?
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=137)** No, but to select it by default and then next, do I want guests to be able to self service sign up for our tenant using user flows?
>
> **[2:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=148)** That's again, going to be no, which is already by default that's great.
>
> **[2:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=152)** The last setting here at the bottom of this page defines the scope of guest invitations.
>
> **[2:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=159)** Do I want guests to be invited from any domain or do I want to deny specific domain guests from being invited or do I want to only allow guests from specified domains?
>
> **[2:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=171)** You can configure the setting according to what your needs are.
>
> **[2:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=175)** Right now I'm going to allow guests from any domain into my tenant.
>
> **[2:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=179)** Once I made these changes I'll go back up and click on the save button.
>
> **[3:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=184)** Now let's go back to the user settings page, here I'll click on the last link which says manage user feature preview settings.
>
> **[3:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=192)** I'm going to click on that.
>
> **[3:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=196)** Now here I can select which users are allowed to use preview features.
>
> **[3:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=200)** Currently it's set to none, which is great.
>
> **[3:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=203)** I don't want any users to be using the view features.
>
> **[3:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=207)** Then next, users can use the combined security information registration experience.
>
> **[3:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=212)** Now, this setting is important for users to be able to use self service password reset.
>
> **[3:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=217)** So they go through a flow where they give their phone number and email addresses that can be used to reset their passwords.
>
> **[3:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=224)** I'm going to enable this by switching to all, and the last setting is administrators can access my staff.
>
> **[3:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=231)** I'm going to leave that setting to its default as well and then click on the save button on top.
>
> **[3:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=238)** And that's it.
>
> **[3:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=238)** We've configured the user settings at the tenant level which we're delivering to other organization.
>
> **[4:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=245)** And with that, we've reached the end of this long, but fun chapter.
>
> **[4:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=250)** Let's take a quick chapter quiz to evaluate your understanding of what we have learned so far.
>
> **[4:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=255)** I'll see you after that.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), select the (1), go to (1), scroll down (1)
> **Code Keywords:** let (4), self (2), default, (1)
> **Cross-References:** in the last (1), go back to (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Env Vars:** otp (1)
> **Speakers:** - [instructor] (1)


### 2. Managing Groups

#### Types of groups
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=2)** - Now let's talk about managing groups.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=5)** The second quintessential pillar often Azure active directory environment.
>
> **[0:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=10)** There are two main types of groups in Azure AD, security groups and Microsoft 365 groups.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=18)** Let's do a comparison of these two.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=22)** Security groups are similar to on-premises groups you already know and are familiar with.
>
> **[0:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=28)** Whereas Microsoft 365 groups are new to Azure AD.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=32)** Then security groups enable administrative comfort, so that admins can bring multiple users together and manage them collectively.
>
> **[0:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=41)** Whereas Microsoft 365 groups are intended to facilitate end user collaboration.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=47)** After that, security groups are used to grant access to applications and resources to its members.
>
> **[0:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=54)** On the other hand Microsoft 365 groups are used to grant access to a shared mailbox, SharePoint site and teams channel to enable the collaboration I mentioned in the previous point.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=65)** Security groups can be from two origins in Azure AD, either doors that are synchronized from windows server or created within Azure AD.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=75)** But a Microsoft 365 group is cloud only, because there's no such thing on premises to synchronize to, to Azure AD.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=83)** But what you can have is optionally writeback of this group to an on premises exchange server in a hybrid deployment.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=90)** This feature is called a group writeback.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=93)** So these are the differences, in terms of similarities you can delegate ownership of both these types of groups to users.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=102)** The assigned owner can then add and remove members from the group as required without needing our manual intervention every single time.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=111)** So if you have like a department head or a team leader make them the owner of their department group and let them handle the group memberships.
>
> **[1:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=119)** For critical or classified groups you as an administrator can retain that control.
>
> **[2:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=126)** And lastly, conversion across the group types is not possible.
>
> **[2:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=130)** You cannot convert a security group to a Microsoft 365 group, nor can you convert a Microsoft 365 group into a security group.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=139)** Now let's understand how memberships in these groups work.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=143)** There are three membership types available with these groups, assigned user, dynamic user and dynamic device.
>
> **[2:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=151)** You already know the concept of an assigned user, that you manually add the member to a specific group, but the dynamic user and dynamic device concept is new.
>
> **[2:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=162)** Here, you don't have to manually assign users to be part of groups or devices for that matter.
>
> **[2:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=169)** Instead, you can create simple and advanced rules that will automatically take care of members to be added to a group.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=176)** For example, you can configure a rule where it says, if the user's department attribute is marketing, automatically add them to the marketing group.
>
> **[3:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=186)** This is a simple rule.
>
> **[3:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=188)** You can also have rules that are more complex than that.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=191)** A group with the membership type dynamic user is intended to add users as members automatically based on configured rules.
>
> **[3:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=199)** Whereas the dynamic device membership type is intended to add devices as members automatically based on the configured rules for it.
>
> **[3:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=207)** But there's something you need to remember, security groups can be configured to have any membership type, assigned user, dynamic user or dynamic device.
>
> **[3:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=217)** Whereas a Microsoft 365 groups only support assigned user or dynamic user.
>
> **[3:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=224)** If you think about it, it makes sense.
>
> **[3:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=226)** A Microsoft 365 group is intended for user collaboration.
>
> **[3:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=231)** So it should only have users as it members.
>
> **[3:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=233)** And so that is how it is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), new. (1), type, (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - now (1)

#### Group object overview
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=2)** - [Instructor] Let's get an overview of the group object in Azure AD.
>
> **[0:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=6)** Similar to users, both hybrid and native groups can coexist in a single tenant.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=12)** They also possess attributes from their original source required for it to be valid objects in Azure.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=19)** So hybrid groups will have relevant attributes synchronized from the Windows Server environment into Azure, and native groups will have the required attributes generated when they are created in the cloud.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=30)** In addition, hybrid objects are also appended with the necessary cloud attributes on synchronization to make it functional with features offered by Azure AD.
>
> **[0:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=41)** Security and Microsoft 365 groups can hold both type of users, hybrid or native, as its members.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=48)** There's no restriction on it.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=50)** Then, for users, just like we had a user profile summarizing everything about a specific user in groups, we have a group overview page for a high-level summary of the group.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=62)** As an administrator, you can assign permissions, licenses, applications, and other resources to groups in Azure all from one single place.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=71)** It's very convenient compared to how groups work on premises.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=76)** Then for security and compliance, you also get access reviews and audit logs attached to groups.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=83)** And then specifically for hybrid groups, you can also use the Synchronization Rules Editor to configure more granularly which attributes get synced to the cloud and which don't.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=94)** The important point to remember is that the source anchor for hybrid groups also is now ms-DS ConsistencyGuid.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=103)** It used to be different until a few versions ago of AD Connect.
>
> **[1:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=107)** But remember, now it's the same attribute for both user objects and group objects, that is ms-DS ConsistencyGuid.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating groups
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=2)** - [Instructor] All right.
>
> **[0:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=3)** Let's start with crude operations on groups in Azure AD.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=7)** Starting with creating groups.
>
> **[0:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=10)** In this chapter we'll take a similar tabular approach we took in the last one with users.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=16)** We have the two environments Windows Server On-premises and Azure AD.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=20)** And then we have the three varieties of groups in Azure AD.
>
> **[0:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=24)** Security groups synchronized from On-premises, security groups originating in the cloud, and Microsoft 365 groups.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=33)** Security groups on premises are, this is easy to guess.
>
> **[0:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=38)** They are created On-premises in windows server active directory.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=42)** They get synchronized through AD connect into Azure.
>
> **[0:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=45)** Such groups retain all its members on synchronization.
>
> **[0:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=49)** So if an on premises group had five users all those five users will also be members of the synchronized security group in Azure AD.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=60)** Next security groups native to Azure are well obviously not created On-premises but are created within Azure AD.
>
> **[1:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=69)** There is no synchronization or any sort of writeback over here.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=75)** After that, we have Microsoft 365 groups.
>
> **[1:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=78)** As I've mentioned, these are new to Azure AD.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=81)** And so they are created in Azure.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=84)** But it is possible for these groups to be synchronized back to the on premises environment.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=90)** But only on one condition that Group Writeback is enabled in AD connect.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=95)** And you've got an exchange hybrid deployment in place.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=99)** Native groups can have either assigned or dynamic group membership, but because an on premises group does not have a dynamic feature.
>
> **[1:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=106)** It's synchronized copy in the cloud has to be assigned.
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=110)** It cannot be dynamic.
>
> **[1:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=112)** And also if there is no exchange hybrid or if group writeback is disabled then this group will only be present in Azure AD.
>
> **[2:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=121)** Now that you've understood where to create which type of group, let us get a deeper understanding of when to choose which type of group.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=131)** Picking the right type of group for a given use case is important to make sure your requirements are met.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=137)** So if the primary goal is to grant users access to resources, you need a security group.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=143)** If the primary goal is to enable end user collaboration then select a Microsoft 365 group.
>
> **[2:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=150)** Now under security groups, if you want mixed access, meaning access for users across On-prem and cloud environments, then create a security group in Windows Server Active Directory so that this can be synchronized to Azure as well.
>
> **[2:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=165)** But if you want cloud only access create the security group in Azure AD.
>
> **[2:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=171)** And when you're creating this group in Azure.
>
> **[2:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=173)** you'll also have to decide on its membership type.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=176)** Assigned user, dynamic user or dynamic device.
>
> **[3:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=181)** This will determine, if you want the group to be static where you assign users to it manually, or do you want the group to be dynamic so that members are automatically assigned to it.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=191)** For users or devices, either of them.
>
> **[3:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=195)** On the other hand if you're creating a Microsoft 365 group you will still need to choose the membership type.
>
> **[3:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=201)** But here you only have two options instead of three because Microsoft 365 groups are meant for users not devices.
>
> **[3:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=209)** So the options available are assigned user or dynamic user.
>
> **[3:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=214)** The next decision will depend on if you have exchange server On-premises in hybrid deployment with exchange online.
>
> **[3:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=221)** If the answer to that is yes, then go ahead and enable group writeback in AD connect or else if there's no exchange server present then no group writeback.
>
> **[3:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=233)** Understanding this chart is important to make the right decisions while creating groups.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (2), static (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Demo: Creating a new Microsoft 365 group
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=2)** - [Instructor] It's time for the first demo of this chapter, creating a new Microsoft 365 group.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=8)** Because you already know how security groups work, I thought it'll be nice to see a Microsoft 365 group in action.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=15)** We'll create this group with dynamic membership, using a simple rule.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=19)** So let's jump in.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=22)** Okay, so for this demo, there's one small minor change that I've made behind the scenes.
>
> **[0:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=28)** I've upgraded my Azure AD license from the free version to the Premium P2 version because a Premium license is required for this demo to work.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=37)** So that's just one thing you need to keep in mind.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=40)** Now, to create a new Microsoft 365 group with dynamic membership, I go to Groups on the left.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=47)** Here are my list of groups that have been synchronized from on premises and some that were created by AD Connect.
>
> **[0:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=55)** Groups that we created are Content Team, the IT Team, Leadership Team, Sales and Marketing, and the Software Development Team.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=64)** This other groups that you see over here were auto generated.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=67)** So I'm just going to unselect these and now to create a new Microsoft 365 group, I'll have to click on the button on top that says New group.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=76)** Let me do that.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=79)** Now, first, in the groups type, I'll select Microsoft 365 because that's what we are making.
>
> **[1:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=85)** Then I'll enter the group name.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=87)** I want this group for the social media members, so I'll create Social Media and then let the group email be social@worldtraveler.tv.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=97)** Group description.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=99)** Members of the social media team.
>
> **[1:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=106)** Then do I want Azure AD role assignment for this group?
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=110)** This feature is in preview right now, so I'll let this be no, which is the default.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=115)** And the moving on to the next one and the most important one, membership type needs to be Dynamic User.
>
> **[2:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=122)** I'm going to select that.
>
> **[2:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=124)** Then no owners are currently assigned to this group.
>
> **[2:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=127)** I'm going to do that.
>
> **[2:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=128)** Click on this link.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=131)** And I know for a fact that Matt is a member of the content team, which is also going to be handling social media.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=137)** So I'm going to assign Matt to be the owner of this group.
>
> **[2:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=140)** Select Matt and then click on the select button.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=144)** You see it says one owner selected, which is Matt, that's great.
>
> **[2:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=148)** Then coming to the last and the most important point of a dynamic group, adding a dynamic query.
>
> **[2:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=153)** And I'm going to click on this link.
>
> **[2:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=156)** Now what's going in my organization is that the content team is handling the social media for the organization as well.
>
> **[2:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=162)** So what I will do is all the users who have the department attribute set to content team will be added to this social media group as well.
>
> **[2:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=172)** So let's do that.
>
> **[2:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=173)** Property, I'm going to select department.
>
> **[2:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=177)** If I type department, that should pop up here.
>
> **[2:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=179)** That's great. Department.
>
> **[3:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=180)** In the operator, I'm going to select equals because I am selecting department equals and then value needs to be Content Team.
>
> **[3:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=188)** I'm going to type that.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=191)** And once I enter that, a rule syntax is automatically generated.
>
> **[3:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=195)** It says user.department -eq Content Team.
>
> **[3:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=199)** This is a simple rule.
>
> **[3:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=200)** If you want to create complex rules, you can click on the Edit button here and then modify the rule syntax based on multiple and and/or conditions.
>
> **[3:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=210)** I'm not going to do that so I'll exit from here and then click on the Save button on top.
>
> **[3:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=215)** So the dynamic query has been assigned to this group creation.
>
> **[3:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=218)** Now the final step is to actually hit the Create button.
>
> **[3:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=222)** Let's do that.
>
> **[3:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=224)** Now, it says creating group Social Media.
>
> **[3:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=228)** That's it, it took like a couple of seconds for the group to be created and now it shows up over here.
>
> **[3:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=233)** And you can see the group type says over here Microsoft 365.
>
> **[3:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=237)** Membership type is dynamic.
>
> **[4:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=240)** It has an email, social@ so and so.
>
> **[4:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=243)** And the source is cloud.
>
> **[4:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=245)** Let's jump into the group and see what it looks like.
>
> **[4:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=249)** So here in the overview page, it says membership, dynamic, source, cloud, type, Microsoft 365 and membership processing status is evaluating.
>
> **[4:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=257)** So it's still currently going through the list of users, seeing the department attributes and currently adding them to the group as we speak.
>
> **[4:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=265)** And that's why right now, the number of members of this group are zero.
>
> **[4:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=270)** This evaluation is going to take a few minutes.
>
> **[4:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=272)** So what I will do is pause the video now and then resume once that evaluation is finished and the members are added to this group.
>
> **[4:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=279)** So this took like a couple of minutes but as you can see now, the membership processing status says update complete.
>
> **[4:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=286)** And you can see direct members shows a number three right now, which was previously zero.
>
> **[4:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=291)** Now let's see what those users are.
>
> **[4:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=293)** To do that, I click on the Members tab on the left here.
>
> **[4:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=297)** And you can see there are three people right now.
>
> **[4:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=299)** Yash, Matt and Robert, which have been added to this group.
>
> **[5:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=303)** And this happened because if I click on any of these users and look at their department attribute, it will be the content team.
>
> **[5:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=311)** This is essentially what we configured in the dynamic rules membership.
>
> **[5:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=315)** This worked perfectly as expected.
>
> **[5:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=318)** Then I'm going to click on the Owners tab over here.
>
> **[5:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=322)** And you can see that Matt has been assigned as the owner of the group in addition to my own account.
>
> **[5:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=329)** So the great thing about doing this is now Matt can manage the memberships of these groups or handle the lifecycle of this group.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type, (2), default. (1)
> **UI Navigation:** click on (9), go to (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Reading groups
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=2)** - [Instructor] Let's talk about the second CRUD operation: Reading groups.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=7)** This is plain and simple.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=9)** For on-premises security groups, both synchronized and cloud attributes are available to read in the cloud.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=15)** But attributes that are not synchronized can only be read on-premises.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=20)** That's because Windows Server is the source of authority here.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=26)** For cloud native security groups, all attributes are available to read in the cloud, and none on-premises.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=32)** Because the object source here is Azure AD.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=36)** And for Microsoft 365 Groups, all attributes are available to read in the cloud.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=42)** But if you have an Exchange hybrid deployment, with group writeback enabled, then the group attributes will also be partly readable on-premises.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=51)** If there is no Exchange hybrid, or if group writeback is disabled, then the group attributes can only be read in the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### Demo: Reading a Microsoft 365 group
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=3)** Great let's see a demo, on reading a Microsoft 365 Group.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=8)** Here, we'll explore the attributes of the group we created in the last demo and compare it with the security group synchronized from on-premises.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=16)** Let's dive in.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=20)** First, I'll open up the Social Media Group, Let me click on that.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=25)** On the overview page, you can see the membership type is dynamic source cloud, Microsoft 365 update was complete, and here on the top I also have a delete option, which is enabled.
>
> **[0:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=35)** I can delete this group if I want to write from here.
>
> **[0:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=40)** But let's not do that, let's go to the properties page.
>
> **[0:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=45)** Here you can see I can change the group name If I want to, change the group description or switch the membership type from dynamic to assigned.
>
> **[0:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=54)** But what I can't change is the group type.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=57)** You remember me mentioning that in the slides that you cannot change a Microsoft 365 Group to a security one or vice versa.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=65)** And that's why this field is also disabled.
>
> **[1:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=69)** If I go to the Members Page, you will see these are the three members, on the top the add members and the remove button is disabled.
>
> **[1:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=78)** And that's because this is a dynamic group.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=80)** You can not add members to it manually.
>
> **[1:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=83)** It happens automatically based on the dynamic membership query.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=87)** Let's look at Owner's Page, can see Matt and I, are both owners of this group.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=93)** I can add more owners if I want to from this page but I'm not going to do that.
>
> **[1:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=98)** Let's jump to this page dynamic membership rules page.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=102)** Here's the current rule in effect user.department equals content team.
>
> **[1:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=107)** If I want, I can add additional expressions to be validated before the user is added to the group.
>
> **[1:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=114)** I'll delete this, or I can edit this existing query, which is a simple rule and convert it to a complex one.
>
> **[2:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=122)** I'm going to cancel out of here, discard any changes, Yes, I want to discard the changes.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=129)** and then close out of here as well.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=132)** This is how the Microsoft 365 Group with dynamic membership look like.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=139)** Let's open the content team by clicking here.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=143)** This is a group that was synchronized from windows server active directory.
>
> **[2:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=147)** You can see the membership type is assigned.
>
> **[2:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=150)** Like I said, it cannot be dynamic because it's been synchronized.
>
> **[2:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=153)** The source windows server active directory and there's an object ID creation, date and email.
>
> **[2:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=158)** There's no membership processing status here because this is an assigned group.
>
> **[2:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=164)** And if you observe here on the top, the delete option here is grayed out, because the source of authority of this group is on premises window server, that is the place you'll have to delete it from.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=176)** Let's go to the properties page.
>
> **[3:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=180)** The group name, the group description, everything is grayed out you can change it here.
>
> **[3:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=185)** Go to the members in this case add members and remove is again disabled.
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=189)** And that's not because the group is dynamic that's because the source of authority is on-premises.
>
> **[3:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=196)** These are the differences between a Microsoft 365 Group created in the cloud versus a group synchronized from on-premises.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), delete (5), switch (1), type. (1), this, (1)
> **UI Navigation:** go to (4), click on (1), open the (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** in the last (1)

#### Updating groups
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=2)** - [Instructor] Now, let's take a look at the third CRUD operation, updating groups.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=8)** You must already be a pro at this by now, so here's what you can do for fun.
>
> **[0:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=13)** Pause the video and see if you can guess this table right.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=16)** Unpause and then continue to see if your guess matches with what I have on the screen.
>
> **[0:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=23)** Okay, let's continue now.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=25)** For security groups synchronized from on premises, any modification would need to be made on premises and have it synchronized to the cloud through AD Connect because again, same concept, source of authority.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=39)** Then for cloud native security groups, any changes needed are made within Azure AD because it has no trace on premises whatsoever.
>
> **[0:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=49)** Next for Microsoft 365 groups, all updates to its attributes need to be made in the cloud, which may then propagate to an on-premises environment if there is group writeback or else it stays within the confines of the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (2)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### Demo: Updating a Microsoft 365 group
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=2)** - [Instructor] In this demo, Updating a Microsoft 365 Group, let us try to change the membership type of the group we created from Dynamic to Assigned and see what happens to its members.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=16)** All right.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=17)** So to change the membership type, let's go back and open up the Social Media group and then go to the Properties page.
>
> **[0:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=24)** Here, under Membership Type, I'm going to change this from Dynamic User to Assigned.
>
> **[0:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=31)** After changing that, click on the Save button on top.
>
> **[0:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=35)** It gives you a little notification saying that the dynamic rule will no longer be processed.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=39)** Current group members will remain in the group and group will have assigned membership.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=43)** Do you want to continue?
>
> **[0:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=45)** I can click on Yes after that.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=47)** I get a notification on the top saying the setting was successfully changed.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=52)** Let me close out of this page and now see how this group looks like.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=57)** Let's go back to Social Media.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=60)** Now, here you can see there's no membership processing status, that's gone.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=64)** If you go to the Properties page, here, I'm able to edit all of these because it's a cloud group.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=71)** And then let me go to the Members page.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=75)** The interesting thing here is that the Add Members button now is enabled, because the group is no longer dynamic, and so I can manually add members to this group now.
>
> **[1:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=85)** But the existing members of this group are preserved as they were.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type, (2), continue (1)
> **UI Navigation:** go to (3), click on (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Deleting groups
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=2)** - [Instructor] Domain to the last crude operation, deleting groups.
>
> **[0:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=6)** Now this again functions very similarly to how users did.
>
> **[0:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=10)** Deletion always happens at the source of authority of an object with no exceptions.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=16)** So what that means is a security group synchronized to Azure AD will need to be deleted on premises.
>
> **[0:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=23)** This change will then take effect in Azure AD through AD Connect.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=27)** So it's got responding copy in the cloud will also disappear.
>
> **[0:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=31)** If you want to recover this object you have 180 days period to do that.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=37)** And of course that's assuming you have Active Directory Recycle Bin enabled in Windows Server Active Directory domain services.
>
> **[0:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=45)** If it's not enabled then you are out of luck.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=47)** That group will be gone forever.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=50)** That's precisely why you should enable Active Directory Recycle Bin.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=56)** Then a Cloud Native Security group is deleted in the cloud.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=61)** Pretty simple because there is nothing on premises.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=65)** And lastly, our Microsoft 365 group will have to be deleted in Azure AD.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=71)** If this group was written back using Group Writeback its copy on premises will also vanish after deletion.
>
> **[1:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=78)** If there was no write-back then the scenario is even simpler.
>
> **[1:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=82)** Delete it from the cloud and it's gone.
>
> **[1:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=85)** Just like in the case of users, you only have 30 days to recover a deleted Microsoft 365 group in Azure AD.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=93)** Once that timeframe is over the group along with its associated data is gone forever.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=100)** Now, if you observe there is no recovery for Cloud Native Security groups.
>
> **[1:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=105)** Synchronized security groups can be recovered on prem.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=108)** Microsoft 365 groups can be recovered in the cloud but Cloud Native Security groups cannot be recovered.
>
> **[1:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=114)** This may seem like a problem at first but it really isn't because unlike Microsoft 365 groups, security groups in the cloud don't have associated user data.
>
> **[2:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=125)** It's only intent is ease of administration and not user collaboration.
>
> **[2:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=130)** So even if this group is deleted no data is really lost.
>
> **[2:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=133)** You can simply recreate the group and be up and running again.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Demo: Deleting a Microsoft 365 group
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=2)** - [Instructor] In the last crude demo of this chapter deleting a Microsoft 365 group, let's delete the group we created in the first demo of this chapter, and then try to restore it back.
>
> **[0:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=14)** By now you should know how this process works.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=17)** I'm going to click on the social media group.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=20)** And then on the top, there's a delete option.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=22)** I'm going to click on that button.
>
> **[0:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=24)** It brings up a confirmation window.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=26)** Do I want to delete the group?
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=27)** Yes, I want to.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=30)** Now if you see this group is gone from the list of all groups.
>
> **[0:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=34)** But just like users, this group isn't permanently gone yet.
>
> **[0:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=38)** Right now, it is in this deleted groups bin over here.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=42)** So what has happened is essentially a soft delete and not a hard delete.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=46)** Now from here, I have two options to go.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=48)** Select and either deleted permanently or restore the group.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=52)** You can also see that the deletion date has been timestamped here and the permanent deletion date is also populated here.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=60)** So at this time the group will permanently vanish.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=64)** Let me select this group and click on the restore group option on the top.
>
> **[1:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=68)** Brings up a confirmation window.
>
> **[1:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=69)** Do I want to restore it?
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=71)** Yes, I want to.
>
> **[1:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=72)** And then this group will be moved back to the all group section here.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=76)** You see, this has come back over here.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=79)** Pretty simple.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (2)
> **UI Navigation:** click on (3)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Expiring groups
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=2)** - [Instructor] Now that we are done with crude operations, Let's talk about another brand new feature in Azure (mumbles) Expiring groups.
>
> **[0:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=11)** In my opinion, this is a wonderful addition to groups, makes your life so much easier.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=17)** This can be configured on Microsoft 365 groups, but unfortunately not security groups.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=26)** The purpose of this feature is to automate the cleanup process and avoid group sprawls.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=32)** It's a common occurrence in IT that you keep on creating groups and one day you realize there are just so many of them, a lot of which are no longer needed.
>
> **[0:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=41)** Expiring groups help you prevent such inconvenient situations.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=46)** All you have to do is apply an expiration policy to the group.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=50)** And if you put on your thinking hats, you'll also understand why this is only available on Microsoft 365 groups and not security groups.
>
> **[0:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=58)** It's because Microsoft 365 groups have a bigger footprint in terms of storage as compared to security groups.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=65)** They are meant for user collaboration, which generate data.
>
> **[1:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=69)** And over a period of time, that data grows and starts costing you money, so cleaning that up becomes necessary.
>
> **[1:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=77)** On the other hand, security groups are just a collection of users tied together for administration.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=84)** Does not generate a lot of data, so a cleanup as such, although helpful is not necessary.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=90)** Okay, moving on.
>
> **[1:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=92)** Once you apply an expiration policy, you get three warnings before deletion and a 30-day retention period after deletion.
>
> **[1:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=101)** One important thing to check is to make sure all expiring groups have designated owners with valid email addresses, because that's how the warnings are sent, over email.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=111)** So if there's no owner assigned or they don't have a valid email address, those warnings can be lost, so be careful about that.
>
> **[2:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=120)** The first warning will be 30 days before the scheduled expiration, then 15 days before, and the final warning appears one day before expiration, after which the group is soft deleted.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=132)** So you get another 30 days to recover the group if you choose to.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=137)** During these 30 days, the group is moved to the deleted groups bin and is non-functional.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=143)** After those 30 days pass, everything is permanently deleted with no scope of recovery, it's a hard delete.
>
> **[2:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=151)** So as you can see, you get ample opportunities to prevent a group from expiring and be gone forever.
>
> **[2:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=158)** If at any time before the soft deletion you change your mind, just remove its expiration policy, the group will then stay indefinitely.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), pass (1), delete (1)
> **Warnings:** warning (2), be careful (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Demo: Applying an expiration policy
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=2)** - [Instructor] In this demo, applying an expiration policy.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=5)** Let's apply an expiration policy to the same Microsoft 365 Group we've been playing with all along in this chapter.
>
> **[0:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=13)** Applying an expiration policy to a group is again fairly simple.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=17)** To do that, I'll have to click on the expiration tab on the left, which brings me to this page, and then select from the dropdown, the lifetime of the group.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=29)** I'll select 180 days which is roughly about six months, then in the email contact for groups with no owners, I've put in my email address.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=37)** So any group which is set to expire, but has no owner assigned to it, the notification for that expiry will come to my email address.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=46)** But I still insist on assigning owners with valid email addresses, because sometimes you as an administrator, can easily be overwhelmed with these notifications, and there's a good chance you may miss them.
>
> **[0:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=58)** So the first priority should always be to assign an owner with a valid email address.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=64)** And then over here below, I can select which groups do I want to apply this expiration policy to.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=70)** I'm going to click on this selected button here, add a group to this list.
>
> **[1:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=75)** Now because this expiration policy can only be applied to Microsoft 365 Groups, you will only see one group over here in this list, because every other group that we have is a security group.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=87)** So I'm going to click on the social media group, selected, and click on the select button here.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=93)** So you see this group shows up on the list here, and then I'll just click on the save button on top.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=100)** This will probably take a few seconds, and that's it.
>
> **[1:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=104)** The expiration policy was successfully applied to this group.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=108)** That means this group and all its associated data, will be deleted in 180 days.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), dropdown (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Group settings
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=2)** - [Instructor] Let's talk about group settings at the tenant level.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=5)** Just like user settings can be configured at both the object level and tenant level, the same applies to groups, as well.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=12)** These are the settings we can configure for groups.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=16)** First, self-service group management.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=19)** This feature enables users to automatically add themselves to groups or request membership to groups they need to be a part of.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=27)** If the group is open, they can add themselves on their own or you can put an approval process in place where they're added to a group only if the request is accepted by an administrator.
>
> **[0:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=38)** Next, you can create a directory-wide All Users group if you want one.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=43)** The Settings page links to an article on how you can do that.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=47)** There's no toggle button that you can simply switch and this group will be brought to life.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=52)** But again, it's not that difficult either.
>
> **[0:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=55)** All you have to do is create a security group with dynamic membership and in the membership rule, check if a user object is not null.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=64)** Any user object which is not null will be added to the group.
>
> **[1:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=68)** So what we get at the end is a group with all the users of the tenant.
>
> **[1:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=73)** Of course, you can define it further, if you wish to, like to only include internal users and exclude guest accounts.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=81)** Then, you can delegate the creation of new security groups.
>
> **[1:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=86)** This setting allows you to choose if you want users in your tenant to be able to create new security groups of their own.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=94)** Similarly, you can also delegate the creation of new Microsoft 365 groups.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=99)** So this setting will allow you to choose if you want users to be able to create new Microsoft 365 groups in the tenant.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1), switch (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Demo: Configuring group settings
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=2)** - [Instructor] In this demo, Configuring Group Settings we'll walk through the group settings at the tenant level that we just discussed.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=9)** Let's see how those work.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=12)** This is my all groups page.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=15)** Now to configure group settings at the tenant level, I'll have to go to the general settings tab on the left that you see here and click on it.
>
> **[0:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=23)** That brings me to this page.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=25)** The first setting pertains to if owners can approve group membership requested by users.
>
> **[0:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=31)** Yes, I want to do that so that my job as an administrator is easier.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=37)** Then the next setting, restrict user ability to access groups in the access panel.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=42)** Now, I know we've not discussed access panel but that's a page that end users will be able to see and request membership to groups.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=50)** So I do not want to restrict that.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=52)** I want the users to be able to request membership to groups through the access panel page.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=57)** Then the next setting is users can create security groups in Azure.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=62)** Well, I don't want users to be able to do that.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=64)** Because we are a small organization I don't want users to be able to create their own groups resulting in a group strike later on.
>
> **[1:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=73)** So this setting will be no.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=74)** And similarly, I don't even want Microsoft 365 groups to be created by end-users.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=80)** So I'm going to select no.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=81)** All administrators will still be able to do this.
>
> **[1:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=85)** So these settings look good to me.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=87)** I'm going to click on the save button to save these changes and that's it.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **Code Keywords:** let (1), this. (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Administrative units
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=2)** - [Instructor] Let's talk about administrative units in Azure AD.
>
> **[0:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=6)** This feature was in preview for a long time and has just become generally available.
>
> **[0:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=11)** And due to this, the information available on its long-term road map is slightly limited.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=16)** So I decided to add a video for this within the groups chapter.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=20)** Administrative units in Azure AD are similar to organizational units in Windows Server Active Directory.
>
> **[0:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=28)** It is very critical to understand that the composition of existing organizational units on premises is not synchronized into administrative units in Azure AD.
>
> **[0:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=38)** I know it just seems obvious that it should, but it doesn't because AD Connect does not synchronize OUs, it synchronizes the objects of it in the OUs into Azure AD and lays it all out as a flat structure.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=52)** That's why Azure AD is said to have a flat hierarchy.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=56)** In my opinion, valid reasoning behind this is how OUs on premises were categorized.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=62)** They were based on Active Directory sites or for applying distinct group policies to various collection of on-prem resources.
>
> **[1:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=69)** But in the cloud, the concept of sites is blurred and there's no group policy.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=74)** So preserving the exact structure of OUs in the cloud as administrative units may not really be helpful.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=81)** And that's why you get to start from scratch.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=84)** But as far as the functioning is concerned, the fundamental concept behind AUs is similar to OUs.
>
> **[1:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=92)** We know directory rules operate at the tenant level.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=95)** But, what if you wanted an administrator to have rights only over a selected group of objects and not the rest.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=103)** Administrative unit allow you to do that by logically segregating objects and defining their scope of management.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=111)** This way, you can delegate the administration of resources to respective admins.
>
> **[1:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=116)** Nodes is that you can also apply distinct policies to individual AUs.
>
> **[2:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=122)** And like I mentioned, AUs have just reads general availability.
>
> **[2:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=126)** So it currently only supports users and groups as members it can hold.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=131)** This may or may not change in the future, but right now, this is how it is.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=137)** So this concludes a basic overview of administrative units and also brings us to the end of the chapter, managing groups.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=144)** You will now take a quick chapter quiz to check if you've understood everything you've learned in this chapter.
>
> **[2:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=150)** I'll see you after that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Managing Devices

#### Device management overview
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=2)** - [Instructor] Let's talk about managing devices, the third quintessential pillar of administering Azure AD.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=8)** In the previous chapters, we covered users and then groups.
>
> **[0:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=13)** Now we'll cover devices.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=16)** Here's a high-level overview of the device management strategies available in Azure AD and how it compares to existing strategies we already have in on-premises environments.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=27)** The most common way of managing a device on premises is to domain join it and apply Windows Server Active Directory Group Policy to it.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=36)** That's how most organizations do it.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=39)** If you want a more advanced solution, then you use System Center Configuration Manager in addition to Group Policy.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=47)** You can have a proportion of the management distributed across these two solutions based on your requirements.
>
> **[0:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=53)** If you're using either one or a combination of these two solutions, a device is said to be primarily managed on premises.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=61)** Now let's see what a cloud-managed device looks like in terms of the tools and techniques involved.
>
> **[1:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=68)** First of all, there's no Group Policy in Azure, but what we do have is Azure AD Conditional Access.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=76)** I'm not saying this is a Group Policy replacement in the cloud.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=79)** Group Policy is way more comprehensive, but Conditional Access is new, modern, and continuously evolving.
>
> **[1:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=88)** And then, if you need a more advanced solution that integrates deeper into the devices, you have products like Microsoft Intune or the Microsoft Endpoint Configuration Manager.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=99)** If a device is using either one or a combination of these solutions, it is said to be managed in the cloud.
>
> **[1:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=106)** But before you can implement any of these solutions, either Conditional Access, Intune, or Endpoint Configuration Manager, you need to either join or register your device with Azure AD.
>
> **[1:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=119)** There are three ways to do that, and that's what we'll be discussing in this chapter.
>
> **[2:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=125)** Point to note, Intune and Endpoint Configuration Manager are independent products, and so they fall outside the scope of Azure AD, but what we will discuss is joining and registering devices.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), new, (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Hybrid Entra ID join
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=2)** - [Instructor] The first method out of the three, for managing devices and Azure AD, is the Hybrid Azure AD Join.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=9)** Because it has hybrid in its name, you already may have gotten a rough idea of how this works.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=15)** In this method, you start off with the device that's already domain joined to Windows Server Active Directory on premises.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=22)** Typically being used by an on premises user.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=26)** Then you have your group policy plus SCCM in place for managing the device.
>
> **[0:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=31)** This setup manages the devices access to mainly non-cloud resources.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=37)** Hybrid Azure AD Join is implemented through AD Connect.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=42)** In addition to the domain join on premises, it also enrolls the device for the Hybrid Azure AD Join in Azure.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=50)** If you need, you can then optionally configure conditional access policies and apply Intune settings on this device.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=57)** This setup manages the devices access to mainly Azure resources.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=62)** It works hand in hand in addition to the existing on premises solutions.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=67)** Think of it like an extension for management in the cloud.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=71)** Now I know what you're thinking.
>
> **[1:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=73)** This looks like an awful lot of management for a device and way too confusing.
>
> **[1:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=77)** It's not, let me convince you.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=80)** Our primary goal through Hybrid Azure AD Join, is not to complicate the device management process but is to primarily enable better security and accountability across on premises and cloud environments.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=93)** Configuring the Join is one part and deploying conditional access or Intune is another part.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=99)** The first part is solely designed to allow Azure to recognize the device when a user tries to access cloud resources.
>
> **[1:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=107)** If a device is recognized, it's easier for Azure to allow it to access cloud resources.
>
> **[1:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=112)** And it's easier for the user because they don't have to jump through hoops to get access to resources they need.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=118)** The second part, which is implementing conditional access or Intune only comes into play, if you want a tighter control of access to cloud resources.
>
> **[2:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=128)** That's why I say it's optional to configure them.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=132)** You can choose to implement both on premises and cloud management techniques in a proportion that suits your organizational needs.
>
> **[2:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=140)** The pharma being the predominant one.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=143)** So what kind of scenarios is Hybrid Azure AD Join suitable for?
>
> **[2:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=148)** One, like I mentioned if the computer is already domain joined to on premises Active Directory.
>
> **[2:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=155)** Then two, it runs Windows 10 or even older operating systems like Windows 7 or Windows 8.1.
>
> **[2:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=162)** Windows Server 2008 R2 and above server operating systems are also supported.
>
> **[2:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=168)** Next if the device is corporate owned and managed primarily through on-premises solutions like Group Policy and SCCM.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=176)** Another suitable, but not necessary criteria is if the device is assigned to a hybrid user.
>
> **[3:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=182)** If they use it as hybrid and their devices hybrid, it just makes the management simpler because of a common source of authority for both objects.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=191)** It can be implemented through AD Connect as you already know.
>
> **[3:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=195)** But you can also implement it through Windows Autopilot or an MSI file.
>
> **[3:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=200)** Once this is successfully deployed, it enables the device to participate in modern cloud capabilities, like a full single sign on experience across on premises and cloud resources.
>
> **[3:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=211)** Then self-service service password reset and the super cool Windows Hello sign-in.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (2), configure (2)
> **Code Keywords:** let (1), self (1), super (1)
> **Env Vars:** sccm (2), msi (1)
> **Versions:** 8.1 (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [instructor] (1)

#### Demo: Implementing hybrid Entra ID join
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=2)** - [Instructor] Let's see a demo on implementing Hybrid Azure AD Join.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=7)** I'll be configuring this on a Windows 10 device that's already domain joined on premises.
>
> **[0:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=13)** Before I demonstrate how to implement Hybrid Azure AD Join, I want to show you what we have here in the Azure portal.
>
> **[0:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=21)** If I scroll down and click on Devices, you will see it says no device found.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=27)** Once we start joining and registering devices, they should show up on this page.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=32)** Now let me switch to the client that will be Hybrid Azure AD joined.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=37)** This is the Windows 10 computer that will be Hybrid Azure AD joined by the end of this demo.
>
> **[0:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=44)** If I open up the system properties, you will see the computer name is wttv-cl1, which stands for World Traveler TV, Client 1.
>
> **[0:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=53)** And also if you notice, this is already domain joined to our on-premises Active Directory.
>
> **[0:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=59)** Let me minimize this, open up the command prompt.
>
> **[1:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=63)** You can see I'm logged in as Matt.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=65)** Now let me execute this command.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=67)** Dsregcmd /status.
>
> **[1:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=72)** And hit Enter.
>
> **[1:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=73)** Now, if I scroll up, you will see AzureAdJoined status is currently no and DomainJoined status is currently yes, which means this is only on-premises domain joined right now and not Azure AD joined.
>
> **[1:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=87)** Now let's switch to the AD Connect server to configure Hybrid Azure AD join.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=94)** This is my AD Connect server.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=97)** The first thing I'll have to do is open up the AD Connect Reconfiguration Wizard.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=102)** That should bring up this wizard.
>
> **[1:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=103)** Let me center this.
>
> **[1:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=105)** And then I click on the Configure button below.
>
> **[1:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=109)** Now here is a series of tasks that you can change or modify in AD Connect.
>
> **[1:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=114)** Right now what we are trying to do is implement Hybrid Azure AD join.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=118)** So for that, I'll click on this, which says configure device options.
>
> **[2:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=123)** Select that and click on Next.
>
> **[2:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=126)** This page gives me an overview of what I can do if I proceed with this wizard.
>
> **[2:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=130)** I can do two things.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=131)** One, configure Hybrid Azure AD join and the second, configure device writeback.
>
> **[2:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=136)** We'll not be doing device writeback right now.
>
> **[2:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=138)** We'll be doing the first one.
>
> **[2:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=140)** So I'll click on Next.
>
> **[2:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=142)** Before I can proceed with this configuration change, I'll have to authenticate myself.
>
> **[2:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=146)** I put in my account.
>
> **[2:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=148)** I'll not be using the previous global admin account that we created to be a service account.
>
> **[2:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=152)** I'll be using my own account, which is kunal@worldtraveler.tv.
>
> **[2:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=156)** Put in my password, which is this and click on Enter.
>
> **[2:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=162)** Now, it'll connect to Azure AD and try to verify my credentials before proceeding onto the next screen.
>
> **[2:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=167)** That should take a couple of seconds here.
>
> **[2:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=170)** Great, so the authentication was successful.
>
> **[2:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=172)** Here, there are three radio buttons, obviously one is disabled.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=176)** And then the two enabled ones are configure Hybrid Azure AD join and configure device writeback.
>
> **[3:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=182)** Right now we want to do configure Hybrid Azure AD join.
>
> **[3:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=185)** So keep that selected and proceed to the Next button.
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=189)** On this page, I can configure which device operating systems I want to be supported in the Azure AD tenant I have.
>
> **[3:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=196)** Do I want only Windows 10 and later devices or do I also want to support down-level devices that includes Windows 8.1 or even Windows 7?
>
> **[3:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=204)** Personally in my own environment, I only have Windows 10 computers.
>
> **[3:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=207)** So I'll select the first checkbox, not the second one and click on the Next button.
>
> **[3:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=213)** So the wizard brings us to this page where we configure our service connection point.
>
> **[3:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=218)** This is basically used by devices in our organization on premises to discover Azure AD tenant information.
>
> **[3:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=225)** If you have multiple forests and multiple tenants, you will see the list here so that you can map them accordingly.
>
> **[3:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=231)** But because we only have one of them right now, I'll select the one that we have.
>
> **[3:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=235)** Wttv.local.
>
> **[3:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=237)** Select the authentication service, Azure Active Directory.
>
> **[4:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=241)** On the previous pages, we already authenticated our credentials with Azure AD.
>
> **[4:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=246)** But we didn't do that for the on-premises Windows Server Active Directory.
>
> **[4:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=250)** For that, we'll have to give our enterprise admin credentials also on this page.
>
> **[4:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=254)** I'll click on the Add button.
>
> **[4:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=257)** It should pop up a window.
>
> **[4:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=258)** Put in my admin credentials, which are enterprise administrator credentials.
>
> **[4:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=262)** I'll put in administrator here.
>
> **[4:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=266)** And put in the password.
>
> **[4:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=270)** So it has accepted my enterprise admin credentials.
>
> **[4:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=272)** That's great.
>
> **[4:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=274)** It shows up here.
>
> **[4:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=275)** And then I'll click on the next button.
>
> **[4:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=278)** On this page, Azure AD is preparing for all the prerequisites that are needed to configure Hybrid Azure AD join.
>
> **[4:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=284)** So this is what it's going to do now.
>
> **[4:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=286)** Configure the SCP for device registration in our local Active Directory domain.
>
> **[4:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=291)** That sounds good.
>
> **[4:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=292)** Click on the Configure button.
>
> **[4:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=294)** In this step, Azure AD Connect takes care of everything that is needed to finally implement Hybrid Azure AD join successfully.
>
> **[5:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=302)** As you can see, we've got a successful confirmation message.
>
> **[5:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=305)** It says the task to configure Hybrid Azure AD join completed successfully.
>
> **[5:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=309)** That's great.
>
> **[5:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=310)** You also see there's a message below that says we need to carry out additional steps.
>
> **[5:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=314)** That's only required if we have down-level devices.
>
> **[5:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=317)** Right now because we only have Windows 10 devices, that step is not necessary.
>
> **[5:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=322)** Now I'll exit from this wizard so that the synchronization can resume.
>
> **[5:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=327)** Click on the Exit button and then wait for a few minutes before the device can show up in Azure AD.
>
> **[5:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=333)** If your device does not show up in the Azure AD portal, this is one setting you may want to check.
>
> **[5:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=339)** I'm on my domain controller right now for the World Traveler TV domain.
>
> **[5:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=343)** I've opened up my group policy management console.
>
> **[5:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=346)** Then I'll right click on Default Domain Policy.
>
> **[5:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=349)** Click on Edit.
>
> **[5:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=351)** Maximize this page.
>
> **[5:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=353)** Expand this line so you that can see exactly what's on the screen and then expand on Policies, expand Administrative Templates.
>
> **[6:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=361)** Expand Windows Components.
>
> **[6:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=364)** Scroll down to where you can see Device Registration.
>
> **[6:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=368)** It's over here.
>
> **[6:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=370)** And then make sure this policy setting is enabled.
>
> **[6:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=374)** It says register domain join computers as devices automatically.
>
> **[6:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=378)** If this setting is disabled, your device may not appear in the Azure AD portal, so make sure this setting is enabled.
>
> **[6:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=386)** I'm going to close out of here.
>
> **[6:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=387)** Now, let's switch back to the Azure AD portal to see if the device has appeared.
>
> **[6:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=393)** Now let's see if that device showed up in the Azure AD portal.
>
> **[6:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=396)** Let me click on devices.
>
> **[6:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=399)** This looks good.
>
> **[6:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=400)** You can see wwtv-cl1 client has been successfully Hybrid Azure AD joined and shows up in the Azure AD portal.
>
> **[6:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=408)** You can see here join type, it says Hybrid Azure AD joined.
>
> **[6:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=412)** That's great, so this demo worked successfully.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (14), select the (3), scroll down (2), switch to (2), scroll up (1)
> **Code Keywords:** let (9), switch (3), this, (2), this. (1), type, (1)
> **Prerequisites:** configure (14)
> **CLI Commands:** make (2)
> **Tools:** azure portal (1), command prompt (1)
> **Definitions:** stands for (1), is a  (1)
> **Env Vars:** scp (1)
> **Versions:** 8.1 (1)

#### Entra ID join
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=2)** - [Instructor] Moving on to the second method for managing devices in Azure AD.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=7)** The Azure AD Join.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=9)** This is relatively simpler and more straightforward as compared to hybrid Azure AD Join.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=16)** Here's how it works.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=17)** You have a standalone device probably brand new that you joined directly to Azure AD and then preferably assign it to a cloud user.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=27)** This device is not influenced in any way from management solutions present on premises.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=33)** It operates as an independent entity in the cloud.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=37)** To manage this device, you use a combination of Conditional Access, Microsoft Intune and if necessary Endpoint Configuration Manager.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=47)** Which ones to use and to what extent will depend on your needs.
>
> **[0:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=51)** If we go any deeper into it this will turn into a mobile device management course.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=56)** I want to make sure that Azure AD remains the center of our attention and we don't drift away from that.
>
> **[1:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=63)** So the Conditional Access, Intune or ECM policies and settings you apply will in turn control the access of this device to Azure resources.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=74)** So the question is, what's our primary goal here.
>
> **[1:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=77)** The primary goal here is management, security and accountability in the cloud.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=84)** The scenario is where Azure AD Join is suitable ad if the computer is in a Workgroup configuration not influenced by any existing management solutions.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=95)** Next it runs Windows 10 and not an older operating system.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=100)** Then the device is corporate owned and is intended to be managed through the use of cloud solutions like Conditional Access, Intune and maybe Endpoint Configuration Manager.
>
> **[1:51](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=111)** Again, preferred but not necessary is if the device is supposed to be assigned to a cloud user Azure AD Join will help both objects share a common source of authority.
>
> **[2:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=124)** This can be implemented using multiple ways.
>
> **[2:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=128)** One is via the Out Of Box Experience during the windows 10 setup or you can also use the settings app after installation or autopilot during provisioning.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=139)** There's also a bulk add process in place.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=143)** Once this is implemented, you'll get a seamless single sign on experience in the cloud, Self Service Password Reset, Windows Hello and FIDO2 authentication support.
>
> **[2:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=154)** If you don't know what FIDO2 is, it's basically a latest set of authentication standards that facilitate password less signings next to generation stuff.

> [!info]- Semantic Content
>
> **Env Vars:** fido2 (2), ecm (1)
> **CLI Commands:** make (1)
> **Code Keywords:** self (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Demo: Implementing Entra ID join
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=2)** - [Instructor] All right, let's see a demo on: Implementing Azure AD Join.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=8)** I'll be configuring this on a Windows 10 device in a workgroup configuration using the settings app.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=15)** So now we're logged into our second client computer.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=18)** Let me show you the details.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=20)** If I open up the System Properties, you will see the computer name is wttv-cl2, which is World Traveller TV Client 2 but it is in a workgroup configuration.
>
> **[0:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=31)** It is not joined to the on-premises Windows Server Active Directory.
>
> **[0:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=36)** Let me minimize this, open up the command prompt, and execute the same command we executed the last time, which is dsregcmd /status and hit on Enter.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=43)** which is dsregcmd /status and hit on Enter.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=48)** If I scroll back up, you can see AzureAdJoined is currently NO and DeviceJoined is also NO.
>
> **[0:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=55)** Let me minimize this.
>
> **[0:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=57)** Now to join this client computer to Azure Active Directory, I'll have to open the settings app.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=62)** Here it is.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=64)** Go to Accounts, then on the left side select Access Work or School.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=71)** On the top you can see there's a Connect button, I'm going to click on that.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=79)** So that opens up a wizard, from where we can configure Azure Active Directory Join.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=84)** In order to do that, I'll have to click on the link which is at the bottom over here, which says, "Join this device to Azure Active Directory."
>
> **[1:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=91)** I'll click on that.
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=94)** In the last demo, what we did was Hybrid Azure AD Join for a hybrid user.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=100)** So the computer was locally joined to the Windows Server Active Directory and that computer belonged to Matt, which was again an on-premises user.
>
> **[1:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=108)** In this demo, we'll be configuring Azure AD Join for a Cloud user.
>
> **[1:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=113)** So we'll have to enter the credentials of the Cloud user we have, which is Robert in this scenario.
>
> **[1:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=118)** Let me put in that.
>
> **[2:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=120)** Robert@worldtraveller.tv Click on Next, enter his password.
>
> **[2:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=131)** Sign in.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=132)** Now this wizard in the background is configuring Azure AD Join and there's going to be one last confirmation before the join actually happens.
>
> **[2:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=141)** Let me confirm the join.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=143)** Now this may take a few minutes, so I'm going to pause the video now and then resume once this is over.
>
> **[2:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=151)** So this took like a minute and afterwards I got this confirmation window which says, "You're all set!"
>
> **[2:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=156)** The device is connected to WorldTravellerTV.
>
> **[2:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=159)** That's fantastic.
>
> **[2:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=160)** Now let's switch to the Azure Portal and see if we are able to view this device in the Devices section.
>
> **[2:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=166)** I'm going to click on Done to exit out of here and then open up the Azure Portal.
>
> **[2:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=174)** I'm back in the Azure AD Portal.
>
> **[2:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=175)** Now let me click on Devices to see if the second client was added successfully to our tenant.
>
> **[3:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=181)** So I can see over here World Traveller CL2 has appeared, which is great.
>
> **[3:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=187)** And the Join Type says Azure AD Joined.
>
> **[3:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=190)** This is exactly what we were expecting and that's how you configure Azure AD Join.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1), this. (1), switch (1)
> **UI Navigation:** click on (6), open the (1), go to (1), switch to (1)
> **Tools:** azure portal (2), command prompt (1)
> **Prerequisites:** configure (2)
> **Env Vars:** cl2 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Device registration
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=1)** - [Instructor] Coming to the third and last device management method in Azure AD, device registration.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=7)** This feature is intended to fill the gap where the previous two methods aren't really suitable.
>
> **[0:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=13)** And that's mainly bring your own device or BYOD scenarios.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=18)** This Azure AD capability requires a device to be registered with Azure AD, and it supports a wide spectrum of devices and operating systems: Windows, macOS, Android, and iOS.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=32)** At the time of this recording, Linux computers are not supported yet, but that may change in the future.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=39)** Once the device is registered with Azure AD, you can then configure basic conditional access policies, and Intune enrollment for it.
>
> **[0:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=48)** Since device registration is intended for BYOD scenarios, that means the device is not typically owned by the organization.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=56)** That's why I've written Intune enrollment and not Intune management.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=61)** We need to make sure we do what we need to secure access to corporate data, but at the same time, not locking down employees' personal devices with a ton of restrictions.
>
> **[1:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=72)** There needs to be a subtle balance, which is offered by this method and not the previous two.
>
> **[1:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=77)** Once configured, this in turn is used to control access of the device to Azure resources.
>
> **[1:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=84)** By control, I mean enforce and check if the device has the minimum required compliance needed to get access.
>
> **[1:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=91)** So what's our primary goal here?
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=93)** The primary goal here is accountability and security in the cloud.
>
> **[1:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=98)** Scenarios where this is suitable are first and the foremost, if an employee's personal device has been used in a BYOD scenario.
>
> **[1:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=107)** Because hybrid Azure AD join and Azure AD join are a bit too restrictive or intrusive for an employee's personal device.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=115)** So device registration is the best option to use in such cases, unless you have a very specific reason not to.
>
> **[2:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=123)** The employee log into the laptop or computer using their own local credentials and corporate credentials are only needed when they're accessing company resources.
>
> **[2:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=133)** Then, the operating systems.
>
> **[2:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=136)** Device registration not only supports Windows 10, but also non-Microsoft operating systems like macOS, iOS and Android.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=144)** Hybrid Azure AD join and Azure AD join only support Microsoft operating systems.
>
> **[2:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=151)** Next, these devices should mainly be managed through conditional access, and if necessary, then maybe a little bit of Intune.
>
> **[2:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=160)** This device management method can be used for any type of user: federated, synchronized, our cloud only.
>
> **[2:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=167)** It doesn't matter, because the user eventually signs into their personal device using their own credentials, and there's no source of authority as such for these devices.
>
> **[2:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=178)** In Windows, this can be implemented via the settings app after installation or the Intune Company Portal app.
>
> **[3:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=185)** What you get after implementing this is single sign on in the cloud and sign in using the authenticator app.
>
> **[3:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=192)** Of course, these are in addition to accountability, which is the most important aspect.

> [!info]- Semantic Content
>
> **Code Identifiers:** macos (2), ios (2)
> **Env Vars:** byod (3)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Demo: Implementing device registration
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=2)** - [Instructor] Now let's see a demo on the third device management method.
>
> **[0:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=6)** Implementing device registration.
>
> **[0:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=8)** Here, I have a Windows 10 computer, which is acting as an employee's personal device.
>
> **[0:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=14)** We'll see how to register this device with Azure AD.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=19)** So here we are on a Windows 10 computer, which will be acting as my personal device for this demo.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=25)** Let's see what we've got.
>
> **[0:26](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=26)** Let me first open up the system properties.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=29)** You can see the computer name says kunal-PC.
>
> **[0:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=32)** It does not follow the typical WTTV convention because this is my personal device and not a company owned device.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=39)** Then you can also see it doesn't have workgroup configuration.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=42)** Let me minimize this and open up the command prompt here.
>
> **[0:47](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=47)** Let's execute the same command we've been executing all these demos, which is dsregcmd/status and hit enter.
>
> **[0:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=58)** Now, if I scroll back up, it's going to say no Azure AD joined and no device joined either.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=65)** Let me minimize this and now go to the settings app.
>
> **[1:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=68)** This is how you configure device registration.
>
> **[1:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=71)** First go into accounts.
>
> **[1:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=73)** Then on the left, click access work or school.
>
> **[1:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=77)** Click on the same connect button we did in the last demo.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=81)** That'll open up this wizard that you've seen.
>
> **[1:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=85)** This is the point at which the demo becomes different.
>
> **[1:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=88)** Instead of clicking on this link at the bottom, where it says join to Azure Active Directory, you will just go through this wizard, which asks for your corporate email address.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=97)** So I'm going to enter my corporate email address, which is kunal@worldtraveler.tv.
>
> **[1:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=106)** Hit on enter.
>
> **[1:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=112)** Now this may take a few seconds to pop up.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=115)** It asks me to enter the corporate password for my email account, which is this.
>
> **[2:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=121)** Click on sign-in.
>
> **[2:06](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=126)** And there it is.
>
> **[2:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=127)** We've kicked off the registration process for this device with Azure AD.
>
> **[2:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=132)** Okay, awesome.
>
> **[2:13](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=133)** It looks like we didn't even have to wait, and this was almost instantaneously completed.
>
> **[2:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=137)** It says you're all set.
>
> **[2:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=138)** We've added your account successfully.
>
> **[2:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=140)** Let me click on the done button to exit out of here.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=144)** And now let's switch to the Azure AD portal and see if this device appears in the devices section.
>
> **[2:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=154)** Now let's see if my personal computer was added successfully as a registered device to our tenant.
>
> **[2:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=160)** To verify that, I'll click on the devices button over here.
>
> **[2:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=164)** And if I go through this list, I will find a kunal-PC computer has been registered with my tenant.
>
> **[2:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=170)** If I expand this column a little bit, you'll be able to clearly see that.
>
> **[2:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=174)** So it says Azure AD registered.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=176)** You will also notice the column section says, Kunal D Metta, that's because the registration of this device was initiated using my credentials.
>
> **[3:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=184)** Similarly, what we did for the previous demo was use Robert's credentials to Azure AD join his device, and that's why here it says the owner is Robert and this device is Azure AD joined.
>
> **[3:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=196)** In contrast, if I compare wttv-cl1, which was hybrid Azure AD joined does not have an owner because this was a device joined on-premises and synchronized through AD Connect into Azure.
>
> **[3:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=209)** The concept of device ownership is not synchronized through AD Connect.
>
> **[3:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=214)** And that brings us to the end of this demo.
>
> **[3:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=216)** I hope by now you clearly understand the difference between hybrid Azure AD joined, Azure AD joined and Azure AD registered device.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (1), switch (1)
> **UI Navigation:** click on (4), go to (1), switch to (1)
> **CLI Commands:** find (1)
> **Env Vars:** wttv (1)
> **Cross-References:** in the last (1)
> **Tools:** command prompt (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Device settings
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=2)** - [Instructor] Coming to the last part of this chapter understanding device settings at the tenant level.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=9)** If you remember joining a device to active directory on premises requires enterprise admin credentials.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=16)** That makes things a little difficult because an enterprise admin needs to be involved every time a device needs to be added to the domain.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=25)** But in Azure AD, thankfully things are a bit easier.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=29)** You can choose which users are allowed to join devices to Azure AD.
>
> **[0:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=34)** They can simply use their standard user credentials to add devices to the tenant.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=39)** In this remote age, this is a much needed feature.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=43)** By the way, this refers to Azure AD Join because hybrid joins are initiated by administrators through AD Connect.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=50)** Users can do that.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=52)** So remember this only refers to Azure AD Join.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=56)** Then you can also delegate local administrative privileges to a user or group of users on the joined devices.
>
> **[1:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=64)** So they'll have administrative privileges only locally on joined devices, not the entire tenant.
>
> **[1:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=72)** For extra security you can require multifactor authentication for users to join their devices to Azure AD.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=80)** This ensures that no random person who has access to a user's leaked credentials can join their own device to the tenant.
>
> **[1:28](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=88)** Similar to the join setting.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=90)** You can also configure, which users are allowed to register their devices with Azure AD.
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=96)** This refers to device registration.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=99)** You can also limit the maximum number of devices a user can add to Azure AD.
>
> **[1:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=105)** This includes the sum total of devices joined and registered by a user.
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=110)** This setting is useful because if a user joins a lot of devices to Azure AD, all of those will have bits and pieces of corporate data on them.
>
> **[2:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=120)** More devices will mean a greater effort in securing the data, which we all unfortunately know users are not always diligent about.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=129)** And lastly, you can also configure Enterprise Stage Roaming for user settings and application data on devices.
>
> **[2:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=136)** Enabling this will ensure users have a consistent experience with their personalization across multiple devices.
>
> **[2:23](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=143)** And that's pretty much there is to device settings in Azure AD.

> [!info]- Semantic Content
>
> **Definitions:** refers to (3), is a  (1)
> **Prerequisites:** configure (2)
> **Code Keywords:** require (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Demo: Configuring device settings
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=2)** - [Tutor] Let's get to the last and final demo on configuring device settings.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=7)** In this demo, we will walk through the tenant level device settings and see what changes may be appropriate for our environment.
>
> **[0:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=16)** So here I am on the devices section page.
>
> **[0:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=19)** Now to configure device level settings at the tenant level I'll have to click on this button on the left which says device settings.
>
> **[0:27](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=27)** That should bring me to this page.
>
> **[0:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=30)** Most of the settings that you see here are simple and easy to understand.
>
> **[0:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=34)** Almost self-explanatory.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=37)** So lets walk through them one by one.
>
> **[0:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=39)** The first setting says, users may join devices to Azure AD.
>
> **[0:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=44)** The setting is currently set to all which means all users are authorized to join their devices to Azure AD using their credentials.
>
> **[0:52](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=52)** I'm not going to change this setting because I want users to be able to join their own devices and decrease the administrative workloads on the IT admins.
>
> **[1:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=60)** So this setting looks good.
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=62)** Next similarly users may register their devices with Azure AD.
>
> **[1:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=67)** I'll leave that also selected to all.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=70)** And then require multi-factor authentication to join devices.
>
> **[1:14](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=74)** Depending on your security needs you can set this to yes or no.
>
> **[1:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=79)** As of now because I have a very limited number of users I'll leave this setting to no then over here in this drop down I can configure the maximum number of devices a user can add as joined or registered device to our tenant.
>
> **[1:32](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=92)** Now by default this number says 50 which I personally think is a lot, I'm going to decrease that to five.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=99)** Before moving further let me save this settings.
>
> **[1:45](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=105)** It should take a couple of seconds and then we'll open up this setting which says manage additional local administrators on all Azure AD joined devices.
>
> **[1:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=114)** Let me click on that link.
>
> **[1:57](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=117)** Right now there are no such role assignments found.
>
> **[2:00](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=120)** What I'm going to do is I'm going to add assignments, select my own account which is kunal@worldtravellertv.
>
> **[2:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=128)** Click on the add button.
>
> **[2:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=130)** Doing this will enable me to have administrative privileges on all Azure AD joined devices.
>
> **[2:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=136)** So if there's a need for me to manage any of those devices , I can do that because I now have administrative privileges on them.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=144)** So this has been saved let me exit out of this and then go to the last setting which is manage enterprise state roaming settings.
>
> **[2:31](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=151)** Let me click on that.
>
> **[2:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=153)** Here there's this one setting which says users may sync settings and app data across devices.
>
> **[2:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=160)** Right now it's selected to none.
>
> **[2:41](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=161)** I'll leave that to the default because we'll be changing this further in the next courses.
>
> **[2:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=166)** I'm going to exit out of here.
>
> **[2:48](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=168)** That's it.
>
> **[2:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=169)** We've configured the devices settings that we're appropriate for our organization.
>
> **[2:54](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=174)** That wraps up this chapter.
>
> **[2:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=176)** Time for one last chapter quiz before moving on to the closing chapter.
>
> **[3:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=181)** I'll see you after you're done with this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (1), require (1), this. (1)
> **UI Navigation:** click on (4), go to (1)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)


### Conclusion

#### Key takeaways
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=2)** - [Instructor] The conclusion.
>
> **[0:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=4)** Great job on making it all the way to the end.
>
> **[0:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=7)** Here, we'll do a quick review of what we've learned so far.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=12)** This course had five chapters.
>
> **[0:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=15)** The first one was introduction, and the one you're watching right now is the conclusion.
>
> **[0:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=20)** In between, there were three core chapters, managing users, managing groups, and managing devices.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=29)** In managing users, we learned about the types of user accounts, federated and synchronized, which are collectively called hybrid accounts, and cloud-only accounts, which are also called native accounts.
>
> **[0:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=42)** Then we got an overview of the structure of a user object and what it comprises of.
>
> **[0:49](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=49)** Next, we talked about assigning administrative privileges to users through directory roles.
>
> **[0:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=55)** You can either use a built-in role or make your own custom directory role.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=61)** After that, we performed the create, read, update, and delete, or in short, CRUD operations, on users in Azure AD.
>
> **[1:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=72)** Then we talked about temporarily blocking users from signing in and configured user settings at the tenant level.
>
> **[1:20](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=80)** In managing groups, we learned about security groups and Microsoft 365 groups, formerly known as Office 365 groups.
>
> **[1:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=90)** We also got to understand their membership types: assigned user, dynamic user, and dynamic device.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=97)** Then we got an overview of the group object type and its composition.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=102)** After that, we performed CRUD operations on groups, configured policy for expiration, walked through the tenant level settings, and got a conceptual overview of administrative units.
>
> **[1:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=116)** In the next chapter, managing devices, we understood the different approaches to device management using on-premises solutions, using tools in Azure, and weighed their pros and cons.
>
> **[2:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=129)** Then we got a deeper understanding of how hybrid Azure AD Join works, how Azure AD Join works, and how device registration works.
>
> **[2:19](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=139)** I then demonstrated how these three are implemented.
>
> **[2:24](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=144)** And finally, we saw the device settings available in Azure at the tenant level.
>
> **[2:30](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=150)** That's the summary of this course.

> [!info]- Semantic Content
>
> **Cross-References:** we talked about (2), in the next (1)
> **Code Keywords:** delete (1), finally, (1)
> **Env Vars:** crud (2)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Your personal checklist
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=2)** - [Instructor] Here are some important things you need to pay attention to while deploying Azure AD in your own production environment.
>
> **[0:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=9)** First of all, if you have a hybrid identity infrastructure, understand the behavior of both hybrid versus native objects and how they're different.
>
> **[0:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=18)** This difference in behavior will be tied to their Source of Authority.
>
> **[0:22](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=22)** So understand this concept well if an object's source is Windows Server or Azure.
>
> **[0:29](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=29)** Next, just get comfortable performing basic CRUD operations on objects, both hybrid and native.
>
> **[0:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=37)** Go through the tasks.
>
> **[0:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=38)** Observe the differences.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=43)** After that, two very important points.
>
> **[0:46](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=46)** Be absolutely clear about what type of user strategy to use when and also, be absolutely clear about what type of group strategy to use when.
>
> **[0:56](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=56)** Should the user be hybrid or cloud only?
>
> **[0:59](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=59)** Should the group be security or Microsoft 365?
>
> **[1:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=62)** And what should be its membership type?
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=65)** Get all those details correct right from the beginning.
>
> **[1:10](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=70)** And then prefer using a device management strategy based on the user type.
>
> **[1:16](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=76)** So a hybrid join for a hybrid user and a cloud join for a cloud user.
>
> **[1:21](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=81)** Remember, this is not a hard and fast rule but having a common source of authority for a pair of user and device will make management much easier.
>
> **[1:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=93)** Then know how to modify the user, group, and device settings, both at the object and tenant level.
>
> **[1:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=102)** Once you understand the theory, deploy a proof-of-concept to validate your use cases and test your hypothesis.
>
> **[1:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=110)** After you're fully done, properly terminate your POC.
>
> **[1:55](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=115)** And finally, watch my other courses in the Azure AD learning path if you haven't already.
>
> **[2:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=121)** I have a lot of cool Azure AD content out there.
>
> **[2:04](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=124)** So go check it out.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), finally, (1)
> **Env Vars:** crud (1), poc (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=2)** - [Instructor] Here's what you can do to take things up a notch.
>
> **[0:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=5)** Like I repeatedly keep telling in all my courses, there's nothing that can replace actual hands-on experience.
>
> **[0:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=12)** So spin up an Azure AD Tenant and start performing CRUD operations.
>
> **[0:17](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=17)** Then, follow the key takeaways and the personal checklist for outlining your own management strategy.
>
> **[0:25](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=25)** Next, modify the user, group, and device settings, both at the object level and tenant level.
>
> **[0:33](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=33)** And lastly, if you have any doubts, rewatch the course or specific clips and participate in the Q and A section of this course.
>
> **[0:43](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=43)** That's it.
>
> **[0:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=44)** Thank you so much for watching this course, Deploying Azure Active Directory on LinkedIn Learning.
>
> **[0:50](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=50)** Keep in touch, add me on LinkedIn.
>
> **[0:53](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=53)** The profile link should flash below on your screen.
>
> **[0:58](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=58)** With that, we've reached the end of this course.
>
> **[1:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=61)** But the end of only this course.
>
> **[1:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=63)** The journey isn't over yet.
>
> **[1:05](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=65)** Because the learning continues.

> [!info]- Semantic Content
>
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
← [[Planning for Microsoft Entra ID]] | **5 of 8** | [[Microsoft Azure- Networking Concepts]] →

### In [[Advance Your Skills with Microsoft Entra ID]]
← [[Planning for Microsoft Entra ID]] | **3 of 3**

## Appears In

- [[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]
- [[Advance Your Skills with Microsoft Entra ID]]

## Related Courses

_Courses sharing skills:_

- [[Azure for Architects- Security and Identity Management with Microsoft Entra]] — Microsoft Entra ID
- [[Planning for Microsoft Entra ID]] — Microsoft Entra ID
- [[Microsoft Entra ID Fundamentals]] — Microsoft Entra ID
