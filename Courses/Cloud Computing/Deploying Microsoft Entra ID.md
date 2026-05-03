---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGffNRcvs919w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1609787284260?e=2147483647&amp;v=beta&amp;t=FfNYthjZJ87W06z5OuUZwyQBAppj9YGZhMvQqAvbpOk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals]]'
  - '[[Advance Your Skills with Microsoft Entra ID]]'
prev_courses:
  - '[[Planning for Microsoft Entra ID]]'
  - '[[Planning for Microsoft Entra ID]]'
next_courses:
  - '[[Microsoft Azure- Networking Concepts]]'
  - null
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":5,"total":8,"prev":"Planning for Microsoft Entra ID","next":"Microsoft Azure- Networking Concepts"},{"path":"Advance Your Skills with Microsoft Entra ID","position":3,"total":3,"prev":"Planning for Microsoft Entra ID","next":null}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/microsoft-entra-id
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Deploying%20Microsoft%20Entra%20ID.md)

![Deploying Microsoft Entra ID](https://media.licdn.com/dms/image/v2/C4E0DAQGffNRcvs919w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1609787284260?e=2147483647&amp;v=beta&amp;t=FfNYthjZJ87W06z5OuUZwyQBAppj9YGZhMvQqAvbpOk)

# Deploying Microsoft Entra ID

> Want to learn how to manage cloud identities in Microsoft Entra ID (formerly Azure Active Directory)? You’re in the right place. This course provides in-depth instruction regarding the day-to-day tasks that Entra ID administrators must perform after rolling out the enterprise identity service. Instructor Kunal D Mehta provides important considerations and hands-on demonstrations for each step. For

> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-microsoft-entra-id) | 2h 3m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Cloud identity](#cloud-identity)
  - [Prerequisites](#prerequisites)
  - [Roadmap](#roadmap)
- [**1. Managing Users**](#1-managing-users) (16 videos)
  - [Types of user accounts](#types-of-user-accounts)
  - [User object overview](#user-object-overview)
  - [Directory roles](#directory-roles)
  - [Demo: Assigning a directory role](#demo-assigning-a-directory-role)
  - [Creating user accounts](#creating-user-accounts)
  - [Demo: Creating a new cloud user account](#demo-creating-a-new-cloud-user-account)
  - [Reading user accounts](#reading-user-accounts)
  - [Demo: Reading a cloud user account](#demo-reading-a-cloud-user-account)
  - [Updating user accounts](#updating-user-accounts)
  - [Demo: Updating a cloud user account](#demo-updating-a-cloud-user-account)
  - [Deleting user accounts](#deleting-user-accounts)
  - [Demo: Deleting a cloud user account](#demo-deleting-a-cloud-user-account)
  - [Blocking user account sign-ins](#blocking-user-account-sign-ins)
  - [Demo: Blocking a user account sign-in](#demo-blocking-a-user-account-sign-in)
  - [User settings](#user-settings)
  - [Demo: Configuring user settings](#demo-configuring-user-settings)
- [**2. Managing Groups**](#2-managing-groups) (15 videos)
  - [Types of groups](#types-of-groups)
  - [Group object overview](#group-object-overview)
  - [Creating groups](#creating-groups)
  - [Demo: Creating a new Microsoft 365 group](#demo-creating-a-new-microsoft-365-group)
  - [Reading groups](#reading-groups)
  - [Demo: Reading a Microsoft 365 group](#demo-reading-a-microsoft-365-group)
  - [Updating groups](#updating-groups)
  - [Demo: Updating a Microsoft 365 group](#demo-updating-a-microsoft-365-group)
  - [Deleting groups](#deleting-groups)
  - [Demo: Deleting a Microsoft 365 group](#demo-deleting-a-microsoft-365-group)
  - [Expiring groups](#expiring-groups)
  - [Demo: Applying an expiration policy](#demo-applying-an-expiration-policy)
  - [Group settings](#group-settings)
  - [Demo: Configuring group settings](#demo-configuring-group-settings)
  - [Administrative units](#administrative-units)
- [**3. Managing Devices**](#3-managing-devices) (9 videos)
  - [Device management overview](#device-management-overview)
  - [Hybrid Entra ID join](#hybrid-entra-id-join)
  - [Demo: Implementing hybrid Entra ID join](#demo-implementing-hybrid-entra-id-join)
  - [Entra ID join](#entra-id-join)
  - [Demo: Implementing Entra ID join](#demo-implementing-entra-id-join)
  - [Device registration](#device-registration)
  - [Demo: Implementing device registration](#demo-implementing-device-registration)
  - [Device settings](#device-settings)
  - [Demo: Configuring device settings](#demo-configuring-device-settings)
- [**Conclusion**](#conclusion) (3 videos)
  - [Key takeaways](#key-takeaways)
  - [Your personal checklist](#your-personal-checklist)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud identity](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=2)** - [Instructor] Welcome to my [[LinkedIn]] Learning course on deploying [[Microsoft Entra ID|Azure Active Directory]]. We'll start this course by talking about cloud identity. But before that, let me quickly introduce myself. My name is Kunal D. Mehta. I'm an independent IT consultant, specializing in [[Microsoft]] Data Center and cloud technologies. I'm really excited to have you join me in taking your [[Microsoft Entra ID|Azure AD]] knowledge to the next level. This course is going to be effective in helping you understand what day to day administrative tasks in an Azure AD environment look like immediately after you roll it out. You already know by now that Azure AD is capable of independently managing users and groups, devices, and applications in the cloud. And if you think managing them is easy, you're right. It sure is. But things change a little when the environment is hybrid because you now have, in addition to native objects, synchronized users and groups coming in from AD Connect. You also have hybrid joined devices alongside devices managed in [[Microsoft Azure|Azure]], plus on-premises applications. By on-premises applications, I mean those that are either to be moved to the cloud or are authenticated and authorized by Azure AD. So what happens in such mixed environments is that the management method changes based on the point of origin of an object. This will be our core focus through the remainder of this course,
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/cloud-identity?u=76281980&t=95)** understanding the nuances in the management of on-premises objects versus cloud objects just after onboarding. In this course, we will focus only on users, groups, and devices. I wanted to include applications too, but there's so much depth to it that it deserves its own course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (4), [[LinkedIn]] (1), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **Speakers:** - [instructor] (1)

#### [Prerequisites](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=2)** - Here are the prerequisites you'll need to get the best use out of this course. I have published two [[Microsoft Entra ID|Azure AD]] courses on [[LinkedIn]] learning, before this one. I would strongly insist you watch those two first and then continue onto this one, for a more thorough coverage, especially if you're new to Azure AD. The first course was [[Microsoft Entra ID|Azure Active Directory]]: Basics where I did a complete overview of Azure AD. Plus I explained the concept of standalone and hybrid environments. Showed how to create an Azure AD tenant for a fictitious organization named World Traveler TV and also demonstrated how to add the custom domain worldtraveler.tv to that tenant. Moving on, the second course was Planning for Azure Active Directory. There, I did an in-depth coverage of the AD Connect tool, including its fundamentals. Outlined how to plan your strategy for synchronization of users and devices. Deployed AD Connect on premises and kicked off the synchronization process. If you are comfortable with these topics and know how to perform them hands-on, feel free to start with this course, or else, you may want to start with one of those, but don't worry if you're starting here because this course is functionally independent of the previous two. You'll still be able to understand everything we do here. So, the target audience for this course is; [[Windows Server]] administrators, [[Microsoft Azure|Azure]] administrators
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/prerequisites?u=76281980&t=97)** and identity professionals who are familiar with the basic concepts of Azure AD. In terms of the prior knowledge required, as I mentioned, having watched my previous courses, Azure Active Directory: Basics and Planning for Azure Active Directory is recommended. Apart from that, a fundamental understanding of Azure Administration and Windows Server [[Active Directory]] would enhance your learning experience. And if you want to do the demonstrations that you watch here on your own, you will need an Azure AD tenant, along with an hybrid infrastructure in place. If you can't do hybrid, then a standalone one will also do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (6), [[Microsoft Entra ID|Azure active directory]] (4), [[Windows Server]] (2), [[Microsoft Azure|Azure]] (2), [[LinkedIn]] (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - here (1)

#### [Roadmap](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=2)** - [Instructor] Here's the roadmap for this course. The topics in this course are going to be very straightforward. We'll focus on the most common tasks you'll need to perform daily as an [[Microsoft Entra ID|Azure AD]] administrator. That predominantly includes the CRUD operations, create, read, update, and delete for Azure AD objects. My intention in this course is to simply get you comfortable with the routine tasks, without overly complicating things by teaching a ton of stuff. There will be five chapters in this course. The one that you're currently watching is the introduction. In the next chapter, managing users, we will learn about the types of user accounts, the difference in methods of management for hybrid versus native users. That'll include creating, renaming, updating, and deleting users. We'll also take a look at tenant level settings that can be applied to these users. Next, we'll move on to managing groups. On the same lines as the previous chapter, we learn about the types of groups, perform CRUD operations on groups, and configure tenant level settings for them. After that, we'll take a look at managing devices. In this chapter, we'll learn about the three device management strategies and configuring basic device settings at the tenant level. And finally, we'll wrap up the course with the conclusion chapter reviewing the key concepts you've learned
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/roadmap?u=76281980&t=95)** through the chapters. That's it, a fairly simple agenda. So without any further ado, let's move on to the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (2)
> **Cross-References:** in the next (1), previous chapter (1), next chapter (1)
> **Env Vars:** crud (2)
> **Prerequisites:** you'll need (1), configure (1)
> **Speakers:** - [instructor] (1)


### 1. Managing Users

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of user accounts](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=2)** - [Instructor] Let's talk about the first quintessential pillar of an [[Microsoft Entra ID|Azure Active Directory]] environment, managing users. A directory service cannot exist without its users and that's why this is the best place to begin. But before we dive into the chapter, let us quickly brush up on our knowledge on the types of user accounts. If you have seen my previous courses or are familiar with the basic concepts of [[Microsoft Entra ID|Azure AD]], you would already know this. There are three types of user accounts that you can have in Azure AD, federated, synchronized, and cloud, or also known as cloud-only users. A federated user originates in an on-premises environment with [[Windows Server]] [[Active Directory]] Domain Services and Federation Services. This user object is synchronized into [[Microsoft Azure|Azure]] through the AD Connect tool. The sign-in method used is AD FS sign-in, so the authentication happens on premises. A synchronized user originates in an on-premises environment with just Windows Server Active Directory Domain Services. This user is synchronized into Azure again through the AD Connect tool. For sign-in, there are two options. You can either use password hash synchronization or pass-through authentication. In password hash synchronization, the authentication happens in the cloud, whereas in pass-through authentication, the authentication happens on premises, but it's facilitated by Azure. A cloud-only user is one that originates in the cloud and has cloud-only access.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-user-accounts?u=76281980&t=97)** This is ideally suited in cases where there is no on-premises infrastructure present or the specific user does not need access to on-premises resources. Federated and synchronized users are collectively referred to as hybrid users, well, because their presence is across two environments, and cloud users are referred to as native users because they're native to Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft Entra ID|Azure ad]] (2), [[Windows Server]] (2), [[Active Directory]] (2), [[Microsoft Entra ID|Azure active directory]] (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [User object overview](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=2)** - [Lecturer] All right. Now, let's get an overview of a User Object in the cloud. [[Microsoft Entra ID|Azure AD]] can have both Hybrid and Native user objects co-exist in one single tenant. If you don't remember, a hybrid user has access to resources across on-prem and cloud environments. Whereas a cloud only user, typically has access to only cloud resources. Each user type whether hybrid or native, posses attributes from its original source that are required for it to be a valid object in [[Microsoft Azure|Azure]]. So hybrid users will have relevant attributes synchronized from the [[Windows Server]] environment into Azure. And native users will have associated attributes generated when they are created in the cloud. In addition to the windows server attributes, hybrid users are also appended with the necessary cloud attributes on synchronization, to make it functional with features offered by Azure AD. A user account, its attributes and settings together in the cloud, make up a user profile. Which is designed for cloud compatibility and readiness. This applies to both hybrid and native users. Now you may be thinking, what sort of compatibility or readiness am I talking about? For starters, things like authentication contact info for the password reset. Users can now enroll themselves for self-service password reset by giving their phone number or alternate email address. No more having to depend on the help desk
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-object-overview?u=76281980&t=96)** or an administrator to manually resolve this. From an administrator's standpoint, you can assign access to applications, devices, software licenses and resources to users. And all of this information will be visible in that user profile to an administrator. Something that isn't very intuitive on-premises today. For security and compliance, you have sign-in logs, audit logs and usage location that can be viewed within the user profile all in one convenient place. So the point is, that a user profile gives us rich insight into a user objects, permissions, assignments, activity and any relevant information there is. Talking specifically about hybrid objects. If you want more control over which objects from on-premises sync to Azure or which attributes of those objects sync to Azure, you can use the Synchronization Rules Editor to control this aspect of synchronization. I've talked more about this tool in my previous course. And finally it is important to know, that the source anchor for hybrid user objects is ms-DS-ConsistencyGuid. If you don't know, a source anchor is what uniquely maps an on-premises object to it's corresponding copy in the cloud. That's how AD Connect knows if an object is already in the cloud or needs to be updated. I've talked about this in-depth in my last course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft Entra ID|Azure ad]] (2), [[Windows Server]] (2)
> **CLI Commands:** make (2)
> **Speakers:** - [lecturer] (1)

#### [Directory roles](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=2)** - [Instructor] Now, let's talk about directory roles. There are three types of roles in [[Microsoft Entra ID|Azure AD]]. A global administrator role, a user role and a limited administrator role. If I had to compare this to the on-premise roles in [[Windows Server]] [[Active Directory]], then global administrator in Azure AD is roughly equivalent to an enterprise administrator. A simple user is equivalent to a domain user and the limited administrator is equivalent to other sub administrator roles we have. A global administrator role in Azure AD is the ultimate powerful role. It has 100% access to all objects and settings in the tenant. I'd recommend that you have at least two global administrators for redundancy and no more than three in a small to medium sized business because more administrators can mean more chaos. So it's best to keep that number to a minimum but at the same time also ensuring redundancy just in case one admin is taking a day off or is on a vacation. This applies only to the global administrator role. Then, a user role in Azure AD, as you can imagine, is just a regular user with almost no administrative privileges kind of like domain users on prem. By default, all new users in [[Microsoft Azure|Azure]], both hybrid and native will be assigned this role. If a person was an administrator on premises
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=96)** and that account was synchronized to Azure, this does not mean they will retain their administrative privileges in the cloud. They will have to be explicitly given those privileges they need in Azure AD. The third role, or should I say a collection of roles is the limited administrator roles. As you can guess, these roles can find the scope of the administrative privilege to specific tasks or resources only and not the entire tenant. There are several of these built-in limited administrator roles in Azure which we will explore shortly in the demo. So how this works is that all new users, native or hybrid are assigned the user role by default. Out of them, you first assign the global administrator role to yourself. That's of course, assuming that you were an enterprise administrator on premises. Then as I said, assign the global administrator role to another suitable member of your IT team. Make sure you know and account for each global administrator role. There are additional two other accounts that also have the same level of privilege. One, the [[Microsoft]] account that was used for sign up of this Azure subscription so that has global privileges being the first account in the tenant. And then, the service account you created in Azure AD for AD connect synchronization. It is very important and I cannot emphasize this enough to keep all of them super secured.
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/directory-roles?u=76281980&t=189)** Once you have assigned your actual account, the required administrative privileges keep the Microsoft account aside only to be used in case of emergencies not daily use. Same goes with the service account. After that, we go to the catalog of limited administrator roles and assign relevant ones to other individuals in the organization. Some roles may be assigned to just one user that has other roles to more than one. It's flexible. If you do not find a role that suits your exact requirement, you can also create a custom directory rule that allows you to be granular in terms of the permission assignment. After you create that custom role you can then use it and assign it to any user, just like other administrative roles. The [[Representational State Transfer (REST)|rest]] of the users simply remain standard users with little or no administrative privileges whatsoever. That's usually the majority of the employees.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (6), [[Microsoft Azure|Azure]] (4), [[Microsoft]] (2), [[Windows Server]] (1), [[Active Directory]] (1)
> **Analogies:** compare this to (1), imagine (1), kind of like (1), just like (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Assigning a directory role](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=2)** - [Instructor] All right, now let's see a demo on assigning a directory role. I'll start this demo with users that are already in the tenant from synchronization that I configured in my last course. Here, I will assign the global administrator role to my own account from the [[Microsoft]] account I'm logged into currently. So let's jump in. Here we are in our [[Microsoft Entra ID|Azure AD]] tenant for [http://www.worldtraveler.tv](http://www.worldtraveler.tv). Before we begin this demo, let me quickly walk you through what we've done in the last two courses, so that you don't miss out on anything. If you're starting with this course, the first thing I did was go to custom domains, and add the [http://www.worldtraveler.tv](http://www.worldtraveler.tv) domain to this tenant verify it, and then set it as primary. After that, what I did in the next course is, configure AD Connect. As you can see, the status here says enabled and the last synchronization has just run an hour ago. This is mainly what we've done in the last two courses. Now that you're up to speed, let's continue on with this demo. I'm going to close out of here, go to [[Microsoft Entra ID|Azure Active Directory]], then click on users. Now here you can see this is the list of users that have been synchronized from our on premises environment, except for this user, and this user. This is the Microsoft account, we used to sign up for this [[Microsoft Azure|Azure]] subscription.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=95)** And this is the service account we made for enabling the synchronization. And that's why the directory sync column here says, "No and no" to both these accounts, because both these accounts were created in the cloud. And then apart from that, you can also observe the account I'm currently signed in with is the Microsoft account. So what I will be doing is I will go to my actual account. Here you can see there is an account called Kunal D Mahta. It's a member and it has been synchronized from on premises, this is my actual account. Now in order to assign directory role to this, I'm going to have to click on this account. On the left side, click on assign roles. Here you can see no directory roles are currently assigned to this account, which means this is a standard user right now and has no administrative privilege whatsoever. To make this account a global administrator account, I'll have to click on the Add assignments button on the top. Let me do that. Here you can see the list of all administrative roles that can be assigned to users. This includes the limited administrator roles as well. But what we want to do is we want to assign this the global administrator role, which is over here, you can see in the description, it says, "Can manage all "aspects of Azure AD and Microsoft services "that use Azure AD" and so on. This is the role that I'm looking for. Once I've selected this, I click on the Add button over here. So on the top you get a notification
>
> **[3:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-assigning-a-directory-role?u=76281980&t=188)** confirming that this role was successfully assigned to this account. And like I said, once you have assigned global administrative privileges to your own account, you need to stop using the Microsoft account for doing any administrative tasks. And from the next demo, I'll be signed into my own account. So let me click on this and then quickly sign out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5), [[Microsoft Entra ID|Azure ad]] (3), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** click on (6), go to (3)
> **Cross-References:** in the last (2), in the next (1)
> **URLs:** [http://www.worldtraveler.tv](http://www.worldtraveler.tv) (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Creating user accounts](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=2)** - [Illustrator] This is the start of the section where we discussed CRUD operations on user objects in [[Microsoft Entra ID|Azure AD]]. C-R-U-D, CRUD is an abbreviation for Create, Read, Update, and Delete. The four most commonly performed actions in our jobs. Let's start with creating user accounts, and approach this in a structured way. We know there are three types of user accounts; Federated, Synchronized, and Cloud only. And we have two environment on premises [[Windows Server]] [[Active Directory]], and Azure AD. Federated users and synchronized users are both created on premises. Their Windows Server Active Directory accounts will get synchronized to Azure AD through AD Connect. If you observe you can see their scope of operation is across two environments, and that is why they're also called hybrid accounts. In both these cases Windows Server Active Directory is said to be the source of authority. On the other hand, cloud only accounts which is obviously given the name are created in Azure AD. They have no relation to the on premises identity infrastructure, and work as independent entities. The source of authority for such users here is Azure AD. Now I'm assuming you already know how to create user accounts on premises, because it does not technically fall under the scope of Azure AD,
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=95)** but what does is creating cloud only accounts. Let's talk more about it. There are four options to create new cloud users. The first is to simply create a new user account through the user interface in Azure AD for one single user within your tenant. The second option is to bulk create accounts using a CSV file. This option is ideal if you have to onboard a large number of new users into the tenant. The important thing to note is that these users are members of our Azure AD tenant, and will have email addresses in the format, username@ourcustom domain which in this case is worldtraveler.tv. If you have not seen my previous courses this is the domain we added to our Azure AD environment, verified it, and then set it to primary. These two methods are intended for employees of the organization. The next option is to invite a new guest user into your Azure AD tenant. If you have a whole bunch of guest users who need to be invited for accessing resources in your tenant you can also use the bulk invite option. The important difference here is that these users are external to our tenant. Their e-mail addresses will usually be in the format username@externaldomain. So these two methods are intended for temporary users, or third-party vendors who are not employees of the organization,
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-user-accounts?u=76281980&t=189)** but how does it matter if the user is internal or external? Well, let me explain. For an internal user we are responsible for their account life cycle, right from creation, to deletion, and everything in between. Plus the authentication and authorization of such accounts happens in other Azure AD tenant. But in the case of external user accounts their lifecycle is managed externally. If they belong to an Azure AD tenant of another organization their IT admin will be responsible for it, or if the user is using a personal account then they themselves will be responsible for the account lifecycle. Plus typically, their authentication and authorization also happens externally. There's only one exception to this, when they request access to resources in our tenant. In this case we control the authorization to our resources, but still trust the external authentication system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (12), [[Windows Server]] (3), [[Active Directory]] (3)
> **Env Vars:** crud (2), csv (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is an  (1)
> **Speakers:** - [illustrator] (1)

#### [Demo: Creating a new cloud user account](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=2)** - [Instructor] To quickly follow up on what we learned, let's jump into a demo on creating a new user account. In this demo we will create a cloud only user account for a new employee joining the company. As I mentioned in the last demo, I'll now be signing into my own account to perform all administrative tasks from now on. So let me sign into my account, put in the password and then I should be signed in. No, I do not want to stay signed in. Let's quickly jump to the [[Microsoft Entra ID|Azure Active Directory]] tab over here. To confirm the fact that we are actually a global administrator now, you can see over here it says your role is the global administrator, and we are signed in with kurnal@ WorldTraveler.TV account. So, which means the last demo was successful. Now, in order to create a new user account, I'll have to go to the users tab. On the top click on the new user button. Now here you have two radio buttons, do you want to create a new user for an employee of the organization, or do you want to invite a user from an external directory? If you remember this option is for guests. We want to create an employee right now so I'll leave this selected, scroll down a little bit. So the new employee joining is Robert. So let me put in his user name, Robert. First name, Robert. And then do I want the password to be assigned manually or do I want to auto-generate it?
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-cloud-user-account?u=76281980&t=96)** I'll just leave that at auto-generated. Scroll down a little bit further. Right now he's not a member of any groups. We can change that later. The role currently assigned is simply a user. That's also correct. Do I want to block sign-in? No, I want Robert to be able to sign in, so I'll leave this at no. Usage location, I'll select India. And then in the job title I'll put in content creator and department will be the content team. And then I'll go ahead and click on the create button at the bottom. So you can see Robert's account is now created. And if you see the status in the directory synced column it says no, which means this is a cloud user and not a user which is synchronized from on premises. And that concludes this simple demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure active directory]] (1)
> **UI Navigation:** click on (2), scroll down (2), go to (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Reading user accounts](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-user-accounts?u=76281980&t=2)** - [Instructor] Now let's talk about the second CRUD Operation. Reading user accounts. When I say reading user accounts, I'm basically talking about reading the attributes and settings associated with user objects. As I've explained previously, hybrid objects have attributes from two environments. It's point of origin [[Windows Server]] and those upended in [[Microsoft Entra ID|Azure AD]] for cloud compatibility and readiness. So if you want to read cloud attributes are those synchronized with the object from on-premises, you can do so in Azure AD. But if you want to read attributes that are not by default synchronized to [[Microsoft Azure|Azure]], you will have to do so in Windows Server [[Active Directory]] on-premises. On the other hand as you may have guessed, cloud user attributes are only readable in the cloud and have no trace on-premises whatsoever.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Microsoft Entra ID|Azure ad]] (2), [[Microsoft Azure|Azure]] (1), [[Active Directory]] (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Reading a cloud user account](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=2)** - [Instructor] Let's jump into the next demo on reading user accounts. In this demo, we will look at the attributes of the user we created in the last demo and also check the attributes of a hybrid user to see if we find any noticeable differences between them. Continuing where we left off in the last demo, now, let's open up Robert's account and see what his user profile looks like and what attributes are there. I click on his account. You can see all the details we entered in the last demo show up here, name Robert, first, named Robert, his user principal name, type member. And you can also see the most important aspect here. The source says [[Microsoft Entra ID|Azure Active Directory]], which signifies this is a cloud only user. And then if I scroll down further a little bit, you can see the job title says, content creator, department, content team, no block sign-in, user's location, India. But some of the contact information like address, phone number, email, those details are missing right now. That's fine, we'll fix it later. If I scroll back up. Now you can see if I click on the assigned roles tab over here, you can see no roles that are currently assigned. That's because this is a standard user and not an administrator. If I click on administrative units, well, we have not discussed administrative units will soon do in the next chapter. But right now, you can see he's not a member of any AUs. Then if I click on groups, he's not a member of any groups either. Similarly, no applications have been assigned,
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=96)** no licenses have been assigned nor any devices have been assigned to this user. I want you to pay attention to this because these aspects or these things will change in the upcoming demos. Now let me close out of this user which was a cloud only user. And instead, now try to go into a user which was synchronized from on premises and see if we find any noticeable differences. Let me click on Matt's account over here. You can see all the similar details are there but in this case, the source here says [[Windows Server]] [[Active Directory]]. Now, if I scroll down the job info, the job title, all that information is filled in. And in this case, the contact info is also present, the email, the zip code, the state, the country. Now, these attributes have been populated from Windows Server Active Directory on premises. So you can see a user profile is pretty rich in terms of the details it has after synchronization. Let me scroll back up. And then if I go to assigned roles, no directory roles assigned because this is again a standard user. If I go to administrative units, not been assigned to any. Then if I click on groups here, the interesting thing is you can see he is a member of the content team. Now this has been configured on premises and after synchronization, the user has retained its membership to all the groups it was a part of on premises. And then similarly, if I click on applications, licenses and devices, they're not currently assigned to this user. Let me close out of this.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-cloud-user-account?u=76281980&t=191)** So this is how a cloud only user and a synchronized user are different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Active Directory]] (2), [[Microsoft Entra ID|Azure active directory]] (1)
> **UI Navigation:** click on (6), scroll down (2), go to (2)
> **Cross-References:** in the last (3), in the next (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Updating user accounts](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=2)** - [Instructor] By now you're familiar with the grind, so let's talk about the third group operation, updating user accounts. Federated and Synchronized users are typically updated on [[Windows Server]] because that's the source of authority. The relevant changes then get synchronized to [[Microsoft Entra ID|Azure AD]] through AD connect, this is for attributes that are synchronized. If you want to modify the Cloud attributes of hybrid users you do it in the Cloud which is Azure AD because Cloud attributes appended to the object on synchronization and are only available in the Cloud and not on-premises. So they have to be modified in the Cloud itself. There's this one little exception to this, it is possible for one attribute to be changed in the Cloud in Azure AD and be written back to Windows server on-premises. Can you guess what that is? If you've watched my previous courses you'll probably get this right it's Password writeback. Azure AD offers its users the flexibility of performing self-service password reset without having to depend on the help desk. And since maintaining a consistent password across environments is critical for access, Azure AD allows a password change in the Cloud to be written back on-premises. An administrator can also reset a user password in the Cloud and have it automatically be written back on-premises. Two points to note here are that one,
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-user-accounts?u=76281980&t=97)** this writeback is instantaneous and two Azure AD validates the new password you are trying to set against on-premises password policies to see if it meets the minimum defined requirements. The change is only accepted if it does, for now this is all you need to remember. And of course, Cloud users are only updated in the Cloud because there's no on-premises presence whatsoever.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (6), [[Windows Server]] (2)
> **Speakers:** - [instructor] (1)

#### [Demo: Updating a cloud user account](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=2)** - [Instructor] Let's jump into the next demo on updating a user account. Here we'll try to modify a couple of attributes for users and see what can be changed and what cannot be changed. Great, now let's open up Robert's profile again. Scroll down, and remember I mentioned some of the information for his profile was missing, like the city, the email, the state, the zip code and country. Let's try to modify these attributes and populate them to Robert's profile in [[Microsoft Entra ID|Azure AD]]. Now, in order to do that, I'll scroll up and hit the edit button you see on the top. That brings me to the page where I can edit this information. You can see, I can edit his name, his first name, his UPN, his job title, department, everything is available for you to edit. Now I'll just enter the city over here because he's joining the content team which is hosted in Hyderabad. I'll put in the Hyderabad, the city, I'll put in the zip code 500001. I'll enter his email, robert@worldtraveler.tv. State, Telangana, and country, India. So I've populated all the details that should be present for the content team members. That looks good to me. I'll scroll back up and click on the save button. Great. So we've successfully managed to update Robert's profile. Now let me exit out of here. Go back to users.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-cloud-user-account?u=76281980&t=95)** Click on [[Microsoft Entra ID|Azure Active Directory]] and go to users. So you saw that we could modify the attributes of Robert's user account. Now let's get into Matt's user account, which was synchronized from on-premises. I'll try to modify his attributes now by clicking on the edit button on top. Now you see all of these fields, the name, the first name, all of these fields are grayed out. I cannot change any of them over here. Even if I scroll down, you can see the contact info, these parts which we filled in for Robert are again grayed out. The reason behind it is Matt is an on-premises user synchronized through AD Connect. And because its source of authority is [[Windows Server]] [[Active Directory]], these changes need to be made on-premises and not in the cloud. So these are the differences in updating users in Azure AD. You'll see the contrast in modifying a cloud user versus synchronized user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (2), [[Microsoft Entra ID|Azure active directory]] (1), [[Windows Server]] (1), [[Active Directory]] (1)
> **UI Navigation:** scroll down (2), click on (2), scroll up (1), go to (1)
> **Env Vars:** upn (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Deleting user accounts](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=2)** - [Instructor] Okay, so let's talk about the final CRUD operation for users, deleting user accounts. This is very simple and straightforward. If you want to delete hybrid accounts, you do it on premises because that's where the source of authority is. This then takes effect into the cloud through AD Connect, so the corresponding cloud counterpart also vanish. Now here's a revelation. This is why it is strongly recommended that you enable [[Active Directory]] Recycle Bin in [[Windows Server]] because if you're deleting an account on premises, you can only recover it back on premises. If you don't have Active Directory Recycle Bin enabled and accidentally end up deleting a user account, there's no way to recover it. It will be gone forever from both environments. [[Microsoft Entra ID|Azure AD]] cannot recover a hybrid account because it's not the source of authority. Understanding this is very critical. Of the less serious of scenarios, if you have Active Directory Recycle Bin enabled, then you get about 180 days to recover that user account. If you choose to recover it, that account will again pop up in Azure AD automatically through AD Connect. No additional step is required. On the other hand, a cloud-only user account is deleted in Azure AD because it's the source of authority. At this point, what essentially happens is a soft delete. It is removed from the user directory
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-user-accounts?u=76281980&t=96)** and moved to the deleted users bin for 30 days. If at any point during that period the circumstances change and you want to bring the user back, it is possible. But once the 30-day timeframe is over, then that's it. It's a hard delete with no possibility of recovery, so be very careful while deleting users. In fact, I suggest temporarily blocking the user account from signing in instead of deleting them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[Microsoft Entra ID|Azure ad]] (3), [[Windows Server]] (1)
> **Env Vars:** crud (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Deleting a cloud user account](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=2)** - In this demo, deleting a user account, we will delete the account created in the first demo of this chapter and try to restore them back. Let's see how that works. Now let's delete Robert's account and see what happens. To do that, I'll go into Robert's account, on the top you'll see an option which says delete. I'm going to click on the Delete button, there's a confirmation box which asking me, do I really want to do that? Yes, I want to delete Robert's account and you can see on the top I get a notification that his account was deleted. Now I know the account shows up here but if I refresh it will not. Let me just refresh the page again. Now as you can see, after refresh, Robert's account is gone from this folder but like I mentioned, this is a soft delete and not a hard delete. If you want to recover Robert's account back, you'll have to go to the deleted user's bin by clicking on this tab. You can see that Robert's account has shown up over here, you can see the deletion date and the permanent deletion date. So this is about 30 days after the soft delete. Now there are two things you can do from here, you can either select this and permanently delete it which I suggest you don't do or another option that you have is to restore the user. Now what I'm going to do is I'm going to restore this user and see if it shows back in the all users folder. I click on the Restore User, I get a confirmation box, click on the Ok button. On the top, I see that Robert
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-cloud-user-account?u=76281980&t=95)** has been successfully restored, great. Let me close other field. Go to the all users folder. Robert isn't here yet but after refresh, he will be. So let me just refresh this page. Awesome, so I have just refreshed the page and now you can see Robert's account has shown up over here which means the user was deleted and successfully restored back.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Blocking user account sign-ins](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/blocking-user-account-sign-ins?u=76281980&t=2)** - [Instructor] Blocking User Account Sign-Ins. I mentioned this in the last slide, so let's get to know more about it. The flow here works very similarly to the previous operation. If you want to temporarily stop a hybrid user account from signing in, you'd disable it on premises. And this change then comes into effect in the cloud through AD Connect. If you want to temporarily stop a cloud account from signing in, you do it in the cloud by configuring its Block Sign-In property. This is likely different in the naming convention. It's called Disabling On-Premises and Blocking in the Cloud. But, both pretty much do the same thing. And it goes without saying, blocking a cloud user sign in has got nothing to do with [[Windows Server]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Blocking a user account sign-in](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-blocking-a-user-account-sign-in?u=76281980&t=2)** - [Instructor] In this demo, blocking a user account sign in. We will put a pause on log in attempts coming from the user account recovered in the last demo. Let's see how to do that. Let us try to block sign-in for Robert's user account, but first let me show you that he can actually sign in. Let me put in his password here. No, I do not want to stay signed in. And you can see he was successfully able to sign into [[Microsoft Azure|Azure]]. Now let me sign out again. So I'm here back in Robert's profile. Now to block his account from signing in, I'll have to click on the edit button on top, scroll down a little bit, and then change the setting of block sign in from no to yes. Once I make this change, I'll go ahead and save it. You get a confirmation that this change was successfully executed. That's great. Now, let's again try to see if Robert is able to sign in. Now I'm going to click on Robert's user account here, put in the password and see if he's able to sign in. Oops. It says your account has been locked, contact your support person to unlock it and then try again. So this is how the block users sign-in feature works in Azure (mumbles) And I strongly recommend implementing this before going ahead and deleting a user account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [User settings](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=2)** - [Instructor] So far, we've seen settings at the user level. That's when you go into an individual user profile and make changes to their permissions or settings at the user level. But some changes need to be applied across the tenant for all users. These are called tenant level user settings. Some of the things we can configure at this level are, managing access to the [[Microsoft Entra ID|Azure AD]] admin portal. Well, to be specific managing access of non-administrators to the Azure AD admin portal. By default non-administrators can log into the Azure AD portal and view resources they are assigned to work with or allowed to read. This is helpful when you have an internal team of developers who need access to resources tied to that Azure AD accounts. But if you are maybe a non IT company with no technical teams, except for the IT admins, then configuring this setting makes sense. Next, control user access to enterprise applications. When a user needs access to use an application, they first need to give it consent. A consent that they are okay with the application accessing that information required for its functioning. This setting deals with the consent settings of all users at the tenant level. After that comes managing privileges for app registration. Then a new application is developed, it needs to be integrated with Azure AD for authentication. For that to happen,
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/user-settings?u=76281980&t=95)** it needs to go through a process called app registration. This setting allows you to configure which users are allowed to register custom applications for authentication with Azure AD. Then you have a setting for managing [[LinkedIn]] account connections. This is more of a social feature than a technical one. Once this is enabled, users will be able to consent to the connection between [[Microsoft Azure]] and their LinkedIn profiles. This will result in an enriched experience on LinkedIn and [[Microsoft]] apps and services. Next, you can also manage external user access from here. Remember we talked about guest users a few videos ago. This setting lets you configure which users in your organization can invite guest users, which external users are allowed to be invited, and which aren't. Also, what they can view and not view in your directory as external users. All of that can be managed from here. Finally, the last setting allows you to configure how users interact with Azure AD features in preview. Because features in preview quickly move to general availability, this section will be fast changing. All the settings that I've just described, works for both native and hybrid users. I think I've done enough talking for now. Let's see these settings in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (7), [[LinkedIn]] (3), [[Microsoft Azure]] (1), [[Microsoft]] (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Configuring user settings](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=2)** - [Instructor] In the last and final demo of this chapter configuring user settings, we will walk through the tenant level user settings available in [[Microsoft Entra ID|Azure AD]] and make changes that are relevant to other organization. Now let's configure user settings at the tenant level. To do that I'll click on users on the left, and then over here, click on user settings. That should bring you to this page. Let's go through these settings in order. So the first setting here says user can register applications. This setting pertains to app registrations. Right now we do not have any plans of developing custom applications in house, so I'll select the no option over here. I do not want users to be registering any applications right now. Then the next setting here says restrict access to Azure AD administration portal. You see the default setting is no, I want to enable this because right now I do not expect any users requiring access to the Azure AD admin portal. Then the next setting is for [[LinkedIn]] account connections, I'll leave that to the default yes, and then you see, there are two links below that. Before we go to them, I'll save the settings we made so far by clicking on the save button on top, great. Now I'll click on the manage external collaboration settings link over here, so all the settings you see on this page pertain to access for guest users. Out of these three here
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=94)** the one selected is guest users have limited access to properties and membership of directory objects. This option is kind of balanced between the most inclusive and the most restrictive one. So leave that over here as default, scroll down a little bit. Now, do I want administrators and users in the guest invited all to be able to invite guests to our tenant? Yes. Do I want other members or other standard users to be able to invite guests? That will be no. Then do I want guests to be able to invite more guests? That is again going to be no. Then the next couple of settings are in preview right now. This setting enables guests to log in using an OTP. Do I want that? No, but to select it by default and then next, do I want guests to be able to self service sign up for our tenant using user flows? That's again, going to be no, which is already by default that's great. The last setting here at the bottom of this page defines the scope of guest invitations. Do I want guests to be invited from any domain or do I want to deny specific domain guests from being invited or do I want to only allow guests from specified domains? You can configure the setting according to what your needs are. Right now I'm going to allow guests from any domain into my tenant. Once I made these changes I'll go back up and click on the save button. Now let's go back to the user settings page,
>
> **[3:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-user-settings?u=76281980&t=188)** here I'll click on the last link which says manage user feature preview settings. I'm going to click on that. Now here I can select which users are allowed to use preview features. Currently it's set to none, which is great. I don't want any users to be using the view features. Then next, users can use the combined security information registration experience. Now, this setting is important for users to be able to use self service password reset. So they go through a flow where they give their phone number and email addresses that can be used to reset their passwords. I'm going to enable this by switching to all, and the last setting is administrators can access my staff. I'm going to leave that setting to its default as well and then click on the save button on top. And that's it. We've configured the user settings at the tenant level which we're delivering to other organization. And with that, we've reached the end of this long, but fun chapter. Let's take a quick chapter quiz to evaluate your understanding of what we have learned so far. I'll see you after that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (3), [[LinkedIn]] (1)
> **UI Navigation:** click on (7), select the (1), go to (1), scroll down (1)
> **Cross-References:** in the last (1), go back to (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Env Vars:** otp (1)
> **Speakers:** - [instructor] (1)


### 2. Managing Groups

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of groups](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=2)** - Now let's talk about managing groups. The second quintessential pillar often [[Microsoft Entra ID|Azure active directory]] environment. There are two main types of groups in [[Microsoft Entra ID|Azure AD]], security groups and [[Microsoft 365]] groups. Let's do a comparison of these two. Security groups are similar to on-premises groups you already know and are familiar with. Whereas Microsoft 365 groups are new to Azure AD. Then security groups enable administrative comfort, so that admins can bring multiple users together and manage them collectively. Whereas Microsoft 365 groups are intended to facilitate end user collaboration. After that, security groups are used to grant access to applications and resources to its members. On the other hand Microsoft 365 groups are used to grant access to a shared mailbox, [[SharePoint]] site and teams channel to enable the collaboration I mentioned in the previous point. Security groups can be from two origins in Azure AD, either doors that are synchronized from [[Windows Server]] or created within Azure AD. But a Microsoft 365 group is cloud only, because there's no such thing on premises to synchronize to, to Azure AD. But what you can have is optionally writeback of this group to an on premises exchange server in a hybrid deployment. This feature is called a group writeback. So these are the differences,
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=96)** in terms of similarities you can delegate ownership of both these types of groups to users. The assigned owner can then add and remove members from the group as required without needing our manual intervention every single time. So if you have like a department head or a team leader make them the owner of their department group and let them handle the group memberships. For critical or classified groups you as an administrator can retain that control. And lastly, conversion across the group types is not possible. You cannot convert a security group to a Microsoft 365 group, nor can you convert a Microsoft 365 group into a security group. Now let's understand how memberships in these groups work. There are three membership types available with these groups, assigned user, dynamic user and dynamic device. You already know the concept of an assigned user, that you manually add the member to a specific group, but the dynamic user and dynamic device concept is new. Here, you don't have to manually assign users to be part of groups or devices for that matter. Instead, you can create simple and advanced rules that will automatically take care of members to be added to a group. For example, you can configure a rule where it says, if the user's department attribute is marketing, automatically add them to the marketing group. This is a simple rule.
>
> **[3:08](https://www.linkedin.com/learning/deploying-microsoft-entra-id/types-of-groups?u=76281980&t=188)** You can also have rules that are more complex than that. A group with the membership type dynamic user is intended to add users as members automatically based on configured rules. Whereas the dynamic device membership type is intended to add devices as members automatically based on the configured rules for it. But there's something you need to remember, security groups can be configured to have any membership type, assigned user, dynamic user or dynamic device. Whereas a Microsoft 365 groups only support assigned user or dynamic user. If you think about it, it makes sense. A Microsoft 365 group is intended for user collaboration. So it should only have users as it members. And so that is how it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (9), [[Microsoft Entra ID|Azure ad]] (5), [[Microsoft Entra ID|Azure active directory]] (1), [[SharePoint]] (1), [[Windows Server]] (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - now (1)

#### [Group object overview](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=2)** - [Instructor] Let's get an overview of the group object in [[Microsoft Entra ID|Azure AD]]. Similar to users, both hybrid and native groups can coexist in a single tenant. They also possess attributes from their original source required for it to be valid objects in [[Microsoft Azure|Azure]]. So hybrid groups will have relevant attributes synchronized from the [[Windows Server]] environment into Azure, and native groups will have the required attributes generated when they are created in the cloud. In addition, hybrid objects are also appended with the necessary cloud attributes on synchronization to make it functional with features offered by Azure AD. Security and [[Microsoft 365]] groups can hold both type of users, hybrid or native, as its members. There's no restriction on it. Then, for users, just like we had a user profile summarizing everything about a specific user in groups, we have a group overview page for a high-level summary of the group. As an administrator, you can assign permissions, licenses, applications, and other resources to groups in Azure all from one single place. It's very convenient compared to how groups work on premises. Then for security and compliance, you also get access reviews and audit logs attached to groups. And then specifically for hybrid groups, you can also use the Synchronization Rules Editor to configure more granularly which attributes get synced to the cloud and which don't. The important point to remember
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-object-overview?u=76281980&t=96)** is that the source anchor for hybrid groups also is now ms-DS ConsistencyGuid. It used to be different until a few versions ago of AD Connect. But remember, now it's the same attribute for both user objects and group objects, that is ms-DS ConsistencyGuid.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft Entra ID|Azure ad]] (2), [[Windows Server]] (1), [[Microsoft 365]] (1)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Creating groups](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=2)** - [Instructor] All right. Let's start with crude operations on groups in [[Microsoft Entra ID|Azure AD]]. Starting with creating groups. In this chapter we'll take a similar tabular approach we took in the last one with users. We have the two environments [[Windows Server]] On-premises and Azure AD. And then we have the three varieties of groups in Azure AD. Security groups synchronized from On-premises, security groups originating in the cloud, and [[Microsoft 365]] groups. Security groups on premises are, this is easy to guess. They are created On-premises in windows server [[Active Directory]]. They get synchronized through AD connect into [[Microsoft Azure|Azure]]. Such groups retain all its members on synchronization. So if an on premises group had five users all those five users will also be members of the synchronized security group in Azure AD. Next security groups native to Azure are well obviously not created On-premises but are created within Azure AD. There is no synchronization or any sort of writeback over here. After that, we have Microsoft 365 groups. As I've mentioned, these are new to Azure AD. And so they are created in Azure. But it is possible for these groups to be synchronized back to the on premises environment. But only on one condition that Group Writeback is enabled in AD connect. And you've got an exchange hybrid deployment in place.
>
> **[1:39](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=99)** Native groups can have either assigned or dynamic group membership, but because an on premises group does not have a dynamic feature. It's synchronized copy in the cloud has to be assigned. It cannot be dynamic. And also if there is no exchange hybrid or if group writeback is disabled then this group will only be present in Azure AD. Now that you've understood where to create which type of group, let us get a deeper understanding of when to choose which type of group. Picking the right type of group for a given use case is important to make sure your requirements are met. So if the primary goal is to grant users access to resources, you need a security group. If the primary goal is to enable end user collaboration then select a Microsoft 365 group. Now under security groups, if you want mixed access, meaning access for users across On-prem and cloud environments, then create a security group in Windows Server Active Directory so that this can be synchronized to Azure as well. But if you want cloud only access create the security group in Azure AD. And when you're creating this group in Azure. you'll also have to decide on its membership type. Assigned user, dynamic user or dynamic device. This will determine, if you want the group to be static where you assign users to it manually, or do you want the group to be dynamic so that members are automatically assigned to it. For users or devices, either of them.
>
> **[3:15](https://www.linkedin.com/learning/deploying-microsoft-entra-id/creating-groups?u=76281980&t=195)** On the other hand if you're creating a Microsoft 365 group you will still need to choose the membership type. But here you only have two options instead of three because Microsoft 365 groups are meant for users not devices. So the options available are assigned user or dynamic user. The next decision will depend on if you have exchange server On-premises in hybrid deployment with exchange online. If the answer to that is yes, then go ahead and enable group writeback in AD connect or else if there's no exchange server present then no group writeback. Understanding this chart is important to make the right decisions while creating groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (8), [[Microsoft 365]] (5), [[Microsoft Azure|Azure]] (5), [[Windows Server]] (3), [[Active Directory]] (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Creating a new Microsoft 365 group](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=2)** - [Instructor] It's time for the first demo of this chapter, creating a new [[Microsoft 365]] group. Because you already know how security groups work, I thought it'll be nice to see a Microsoft 365 group in action. We'll create this group with dynamic membership, using a simple rule. So let's jump in. Okay, so for this demo, there's one small minor change that I've made behind the scenes. I've upgraded my [[Microsoft Entra ID|Azure AD]] license from the free version to the Premium P2 version because a Premium license is required for this demo to work. So that's just one thing you need to keep in mind. Now, to create a new Microsoft 365 group with dynamic membership, I go to Groups on the left. Here are my list of groups that have been synchronized from on premises and some that were created by AD Connect. Groups that we created are Content Team, the IT Team, Leadership Team, Sales and Marketing, and the [[Software Development]] Team. This other groups that you see over here were auto generated. So I'm just going to unselect these and now to create a new Microsoft 365 group, I'll have to click on the button on top that says New group. Let me do that. Now, first, in the groups type, I'll select Microsoft 365 because that's what we are making. Then I'll enter the group name. I want this group for the social media members, so I'll create Social Media and then let the group email be social@worldtraveler.tv.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=97)** Group description. Members of the social media team. Then do I want Azure AD role assignment for this group? This feature is in preview right now, so I'll let this be no, which is the default. And the moving on to the next one and the most important one, membership type needs to be Dynamic User. I'm going to select that. Then no owners are currently assigned to this group. I'm going to do that. Click on this link. And I know for a fact that Matt is a member of the content team, which is also going to be handling social media. So I'm going to assign Matt to be the owner of this group. Select Matt and then click on the select button. You see it says one owner selected, which is Matt, that's great. Then coming to the last and the most important point of a dynamic group, adding a dynamic query. And I'm going to click on this link. Now what's going in my organization is that the content team is handling the social media for the organization as well. So what I will do is all the users who have the department attribute set to content team will be added to this social media group as well. So let's do that. Property, I'm going to select department. If I type department, that should pop up here. That's great. Department. In the operator, I'm going to select equals because I am selecting department equals and then value needs to be Content Team. I'm going to type that.
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=191)** And once I enter that, a rule syntax is automatically generated. It says user.department -eq Content Team. This is a simple rule. If you want to create complex rules, you can click on the Edit button here and then modify the rule syntax based on multiple and and/or conditions. I'm not going to do that so I'll exit from here and then click on the Save button on top. So the dynamic query has been assigned to this group creation. Now the final step is to actually hit the Create button. Let's do that. Now, it says creating group Social Media. That's it, it took like a couple of seconds for the group to be created and now it shows up over here. And you can see the group type says over here Microsoft 365. Membership type is dynamic. It has an email, social@ so and so. And the source is cloud. Let's jump into the group and see what it looks like. So here in the overview page, it says membership, dynamic, source, cloud, type, Microsoft 365 and membership processing status is evaluating. So it's still currently going through the list of users, seeing the department attributes and currently adding them to the group as we speak. And that's why right now, the number of members of this group are zero. This evaluation is going to take a few minutes. So what I will do is pause the video now and then resume once that evaluation is finished and the members are added to this group. So this took like a couple of minutes but as you can see now,
>
> **[4:42](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-creating-a-new-microsoft-365-group?u=76281980&t=282)** the membership processing status says update complete. And you can see direct members shows a number three right now, which was previously zero. Now let's see what those users are. To do that, I click on the Members tab on the left here. And you can see there are three people right now. Yash, Matt and Robert, which have been added to this group. And this happened because if I click on any of these users and look at their department attribute, it will be the content team. This is essentially what we configured in the dynamic rules membership. This worked perfectly as expected. Then I'm going to click on the Owners tab over here. And you can see that Matt has been assigned as the owner of the group in addition to my own account. So the great thing about doing this is now Matt can manage the memberships of these groups or handle the lifecycle of this group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (7), [[Microsoft Entra ID|Azure ad]] (2), [[Software Development]] (1)
> **UI Navigation:** click on (9), go to (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Reading groups](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/reading-groups?u=76281980&t=2)** - [Instructor] Let's talk about the second CRUD operation: Reading groups. This is plain and simple. For on-premises security groups, both synchronized and cloud attributes are available to read in the cloud. But attributes that are not synchronized can only be read on-premises. That's because [[Windows Server]] is the source of authority here. For cloud native security groups, all attributes are available to read in the cloud, and none on-premises. Because the object source here is [[Microsoft Entra ID|Azure AD]]. And for [[Microsoft 365]] Groups, all attributes are available to read in the cloud. But if you have an Exchange hybrid deployment, with group writeback enabled, then the group attributes will also be partly readable on-premises. If there is no Exchange hybrid, or if group writeback is disabled, then the group attributes can only be read in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (1), [[Microsoft Entra ID|Azure ad]] (1), [[Microsoft 365]] (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Reading a Microsoft 365 group](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=3)** Great let's see a demo, on reading a [[Microsoft 365]] Group. Here, we'll explore the attributes of the group we created in the last demo and compare it with the security group synchronized from on-premises. Let's dive in. First, I'll open up the Social Media Group, Let me click on that. On the overview page, you can see the membership type is dynamic source cloud, Microsoft 365 update was complete, and here on the top I also have a delete option, which is enabled. I can delete this group if I want to write from here. But let's not do that, let's go to the properties page. Here you can see I can change the group name If I want to, change the group description or switch the membership type from dynamic to assigned. But what I can't change is the group type. You remember me mentioning that in the slides that you cannot change a Microsoft 365 Group to a security one or vice versa. And that's why this field is also disabled. If I go to the Members Page, you will see these are the three members, on the top the add members and the remove button is disabled. And that's because this is a dynamic group. You can not add members to it manually. It happens automatically based on the dynamic membership query. Let's look at Owner's Page, can see Matt and I, are both owners of this group. I can add more owners if I want to from this page
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=96)** but I'm not going to do that. Let's jump to this page dynamic membership rules page. Here's the current rule in effect user.department equals content team. If I want, I can add additional expressions to be validated before the user is added to the group. I'll delete this, or I can edit this existing query, which is a simple rule and convert it to a complex one. I'm going to cancel out of here, discard any changes, Yes, I want to discard the changes. and then close out of here as well. This is how the Microsoft 365 Group with dynamic membership look like. Let's open the content team by clicking here. This is a group that was synchronized from [[Windows Server]] [[Active Directory]]. You can see the membership type is assigned. Like I said, it cannot be dynamic because it's been synchronized. The source windows server active directory and there's an object ID creation, date and email. There's no membership processing status here because this is an assigned group. And if you observe here on the top, the delete option here is grayed out, because the source of authority of this group is on premises window server, that is the place you'll have to delete it from. Let's go to the properties page. The group name, the group description, everything is grayed out you can change it here. Go to the members in this case add members and remove is again disabled.
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-reading-a-microsoft-365-group?u=76281980&t=189)** And that's not because the group is dynamic that's because the source of authority is on-premises. These are the differences between a Microsoft 365 Group created in the cloud versus a group synchronized from on-premises.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (5), [[Windows Server]] (2), [[Active Directory]] (2)
> **UI Navigation:** go to (4), click on (1), open the (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** in the last (1)

#### [Updating groups](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/updating-groups?u=76281980&t=2)** - [Instructor] Now, let's take a look at the third CRUD operation, updating groups. You must already be a pro at this by now, so here's what you can do for fun. Pause the video and see if you can guess this table right. Unpause and then continue to see if your guess matches with what I have on the screen. Okay, let's continue now. For security groups synchronized from on premises, any modification would need to be made on premises and have it synchronized to the cloud through AD Connect because again, same concept, source of authority. Then for cloud native security groups, any changes needed are made within [[Microsoft Entra ID|Azure AD]] because it has no trace on premises whatsoever. Next for [[Microsoft 365]] groups, all updates to its attributes need to be made in the cloud, which may then propagate to an on-premises environment if there is group writeback or else it stays within the confines of the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (1), [[Microsoft 365]] (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Updating a Microsoft 365 group](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-updating-a-microsoft-365-group?u=76281980&t=2)** - [Instructor] In this demo, Updating a [[Microsoft 365]] Group, let us try to change the membership type of the group we created from Dynamic to Assigned and see what happens to its members. All right. So to change the membership type, let's go back and open up the Social Media group and then go to the Properties page. Here, under Membership Type, I'm going to change this from Dynamic User to Assigned. After changing that, click on the Save button on top. It gives you a little notification saying that the dynamic rule will no longer be processed. Current group members will remain in the group and group will have assigned membership. Do you want to continue? I can click on Yes after that. I get a notification on the top saying the setting was successfully changed. Let me close out of this page and now see how this group looks like. Let's go back to Social Media. Now, here you can see there's no membership processing status, that's gone. If you go to the Properties page, here, I'm able to edit all of these because it's a cloud group. And then let me go to the Members page. The interesting thing here is that the Add Members button now is enabled, because the group is no longer dynamic, and so I can manually add members to this group now. But the existing members of this group are preserved as they were.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (1)
> **UI Navigation:** go to (3), click on (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Deleting groups](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=2)** - [Instructor] Domain to the last crude operation, deleting groups. Now this again functions very similarly to how users did. Deletion always happens at the source of authority of an object with no exceptions. So what that means is a security group synchronized to [[Microsoft Entra ID|Azure AD]] will need to be deleted on premises. This change will then take effect in Azure AD through AD Connect. So it's got responding copy in the cloud will also disappear. If you want to recover this object you have 180 days period to do that. And of course that's assuming you have [[Active Directory]] Recycle Bin enabled in [[Windows Server]] Active Directory domain services. If it's not enabled then you are out of luck. That group will be gone forever. That's precisely why you should enable Active Directory Recycle Bin. Then a Cloud Native Security group is deleted in the cloud. Pretty simple because there is nothing on premises. And lastly, our [[Microsoft 365]] group will have to be deleted in Azure AD. If this group was written back using Group Writeback its copy on premises will also vanish after deletion. If there was no write-back then the scenario is even simpler. Delete it from the cloud and it's gone. Just like in the case of users, you only have 30 days to recover a deleted Microsoft 365 group in Azure AD. Once that timeframe is over
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/deleting-groups?u=76281980&t=95)** the group along with its associated data is gone forever. Now, if you observe there is no recovery for Cloud Native Security groups. Synchronized security groups can be recovered on prem. Microsoft 365 groups can be recovered in the cloud but Cloud Native Security groups cannot be recovered. This may seem like a problem at first but it really isn't because unlike Microsoft 365 groups, security groups in the cloud don't have associated user data. It's only intent is ease of administration and not user collaboration. So even if this group is deleted no data is really lost. You can simply recreate the group and be up and running again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (4), [[Microsoft 365]] (4), [[Active Directory]] (3), [[Windows Server]] (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Deleting a Microsoft 365 group](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-deleting-a-microsoft-365-group?u=76281980&t=2)** - [Instructor] In the last crude demo of this chapter deleting a [[Microsoft 365]] group, let's delete the group we created in the first demo of this chapter, and then try to restore it back. By now you should know how this process works. I'm going to click on the social media group. And then on the top, there's a delete option. I'm going to click on that button. It brings up a confirmation window. Do I want to delete the group? Yes, I want to. Now if you see this group is gone from the list of all groups. But just like users, this group isn't permanently gone yet. Right now, it is in this deleted groups bin over here. So what has happened is essentially a soft delete and not a hard delete. Now from here, I have two options to go. Select and either deleted permanently or restore the group. You can also see that the deletion date has been timestamped here and the permanent deletion date is also populated here. So at this time the group will permanently vanish. Let me select this group and click on the restore group option on the top. Brings up a confirmation window. Do I want to restore it? Yes, I want to. And then this group will be moved back to the all group section here. You see, this has come back over here. Pretty simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (1)
> **UI Navigation:** click on (3)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Expiring groups](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=2)** - [Instructor] Now that we are done with crude operations, Let's talk about another brand new feature in [[Microsoft Azure|Azure]] (mumbles) Expiring groups. In my opinion, this is a wonderful addition to groups, makes your life so much easier. This can be configured on [[Microsoft 365]] groups, but unfortunately not security groups. The purpose of this feature is to automate the cleanup process and avoid group sprawls. It's a common occurrence in IT that you keep on creating groups and one day you realize there are just so many of them, a lot of which are no longer needed. Expiring groups help you prevent such inconvenient situations. All you have to do is apply an expiration policy to the group. And if you put on your thinking hats, you'll also understand why this is only available on Microsoft 365 groups and not security groups. It's because Microsoft 365 groups have a bigger footprint in terms of storage as compared to security groups. They are meant for user collaboration, which generate data. And over a period of time, that data grows and starts costing you money, so cleaning that up becomes necessary. On the other hand, security groups are just a collection of users tied together for administration. Does not generate a lot of data, so a cleanup as such, although helpful is not necessary. Okay, moving on. Once you apply an expiration policy, you get three warnings before deletion
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/expiring-groups?u=76281980&t=96)** and a 30-day retention period after deletion. One important thing to check is to make sure all expiring groups have designated owners with valid email addresses, because that's how the warnings are sent, over email. So if there's no owner assigned or they don't have a valid email address, those warnings can be lost, so be careful about that. The first warning will be 30 days before the scheduled expiration, then 15 days before, and the final warning appears one day before expiration, after which the group is soft deleted. So you get another 30 days to recover the group if you choose to. During these 30 days, the group is moved to the deleted groups bin and is non-functional. After those 30 days pass, everything is permanently deleted with no scope of recovery, it's a hard delete. So as you can see, you get ample opportunities to prevent a group from expiring and be gone forever. If at any time before the soft deletion you change your mind, just remove its expiration policy, the group will then stay indefinitely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (3), [[Microsoft Azure|Azure]] (1)
> **Warnings:** warning (2), be careful (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Applying an expiration policy](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=2)** - [Instructor] In this demo, applying an expiration policy. Let's apply an expiration policy to the same [[Microsoft 365]] Group we've been playing with all along in this chapter. Applying an expiration policy to a group is again fairly simple. To do that, I'll have to click on the expiration tab on the left, which brings me to this page, and then select from the dropdown, the lifetime of the group. I'll select 180 days which is roughly about six months, then in the email contact for groups with no owners, I've put in my email address. So any group which is set to expire, but has no owner assigned to it, the notification for that expiry will come to my email address. But I still insist on assigning owners with valid email addresses, because sometimes you as an administrator, can easily be overwhelmed with these notifications, and there's a good chance you may miss them. So the first priority should always be to assign an owner with a valid email address. And then over here below, I can select which groups do I want to apply this expiration policy to. I'm going to click on this selected button here, add a group to this list. Now because this expiration policy can only be applied to Microsoft 365 Groups, you will only see one group over here in this list, because every other group that we have is a security group. So I'm going to click on the social media group, selected, and click on the select button here. So you see this group shows up on the list here,
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-applying-an-expiration-policy?u=76281980&t=96)** and then I'll just click on the save button on top. This will probably take a few seconds, and that's it. The expiration policy was successfully applied to this group. That means this group and all its associated data, will be deleted in 180 days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (2)
> **UI Navigation:** click on (4), dropdown (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Group settings](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=2)** - [Instructor] Let's talk about group settings at the tenant level. Just like user settings can be configured at both the object level and tenant level, the same applies to groups, as well. These are the settings we can configure for groups. First, self-service group management. This feature enables users to automatically add themselves to groups or request membership to groups they need to be a part of. If the group is open, they can add themselves on their own or you can put an approval process in place where they're added to a group only if the request is accepted by an administrator. Next, you can create a directory-wide All Users group if you want one. The Settings page links to an article on how you can do that. There's no toggle button that you can simply switch and this group will be brought to life. But again, it's not that difficult either. All you have to do is create a security group with dynamic membership and in the membership rule, check if a user object is not null. Any user object which is not null will be added to the group. So what we get at the end is a group with all the users of the tenant. Of course, you can define it further, if you wish to, like to only include internal users and exclude guest accounts. Then, you can delegate the creation of new security groups. This setting allows you to choose if you want users in your tenant to be able to create new security groups of their own. Similarly, you can also delegate the creation
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/group-settings?u=76281980&t=96)** of new [[Microsoft 365]] groups. So this setting will allow you to choose if you want users to be able to create new Microsoft 365 groups in the tenant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (2)
> **UI Navigation:** toggle (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Configuring group settings](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-group-settings?u=76281980&t=2)** - [Instructor] In this demo, Configuring Group Settings we'll walk through the group settings at the tenant level that we just discussed. Let's see how those work. This is my all groups page. Now to configure group settings at the tenant level, I'll have to go to the general settings tab on the left that you see here and click on it. That brings me to this page. The first setting pertains to if owners can approve group membership requested by users. Yes, I want to do that so that my job as an administrator is easier. Then the next setting, restrict user ability to access groups in the access panel. Now, I know we've not discussed access panel but that's a page that end users will be able to see and request membership to groups. So I do not want to restrict that. I want the users to be able to request membership to groups through the access panel page. Then the next setting is users can create security groups in [[Microsoft Azure|Azure]]. Well, I don't want users to be able to do that. Because we are a small organization I don't want users to be able to create their own groups resulting in a group strike later on. So this setting will be no. And similarly, I don't even want [[Microsoft 365]] groups to be created by end-users. So I'm going to select no. All administrators will still be able to do this. So these settings look good to me. I'm going to click on the save button to save these changes and that's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[Microsoft 365]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Administrative units](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=2)** - [Instructor] Let's talk about administrative units in [[Microsoft Entra ID|Azure AD]]. This feature was in preview for a long time and has just become generally available. And due to this, the information available on its long-term road map is slightly limited. So I decided to add a video for this within the groups chapter. Administrative units in Azure AD are similar to organizational units in [[Windows Server]] [[Active Directory]]. It is very critical to understand that the composition of existing organizational units on premises is not synchronized into administrative units in Azure AD. I know it just seems obvious that it should, but it doesn't because AD Connect does not synchronize OUs, it synchronizes the objects of it in the OUs into Azure AD and lays it all out as a flat structure. That's why Azure AD is said to have a flat hierarchy. In my opinion, valid reasoning behind this is how OUs on premises were categorized. They were based on Active Directory sites or for applying distinct group policies to various collection of on-prem resources. But in the cloud, the concept of sites is blurred and there's no group policy. So preserving the exact structure of OUs in the cloud as administrative units may not really be helpful. And that's why you get to start from scratch. But as far as the functioning is concerned, the fundamental concept behind AUs is similar to OUs. We know directory rules operate at the tenant level.
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/administrative-units?u=76281980&t=95)** But, what if you wanted an administrator to have rights only over a selected group of objects and not the [[Representational State Transfer (REST)|rest]]. Administrative unit allow you to do that by logically segregating objects and defining their scope of management. This way, you can delegate the administration of resources to respective admins. Nodes is that you can also apply distinct policies to individual AUs. And like I mentioned, AUs have just reads general availability. So it currently only supports users and groups as members it can hold. This may or may not change in the future, but right now, this is how it is. So this concludes a basic overview of administrative units and also brings us to the end of the chapter, managing groups. You will now take a quick chapter quiz to check if you've understood everything you've learned in this chapter. I'll see you after that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (5), [[Active Directory]] (2), [[Windows Server]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Managing Devices

[↑ Back to Table of Contents](#table-of-contents)

#### [Device management overview](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=2)** - [Instructor] Let's talk about managing devices, the third quintessential pillar of administering [[Microsoft Entra ID|Azure AD]]. In the previous chapters, we covered users and then groups. Now we'll cover devices. Here's a high-level overview of the device management strategies available in Azure AD and how it compares to existing strategies we already have in on-premises environments. The most common way of managing a device on premises is to domain join it and apply [[Windows Server]] [[Active Directory]] Group Policy to it. That's how most organizations do it. If you want a more advanced solution, then you use System Center Configuration Manager in addition to Group Policy. You can have a proportion of the management distributed across these two solutions based on your requirements. If you're using either one or a combination of these two solutions, a device is said to be primarily managed on premises. Now let's see what a cloud-managed device looks like in terms of the tools and techniques involved. First of all, there's no Group Policy in [[Microsoft Azure|Azure]], but what we do have is Azure AD Conditional Access. I'm not saying this is a Group Policy replacement in the cloud. Group Policy is way more comprehensive, but Conditional Access is new, modern, and continuously evolving. And then, if you need a more advanced solution that integrates deeper into the devices, you have [[Microsoft Products|products]] like [[Microsoft]] Intune
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-management-overview?u=76281980&t=95)** or the Microsoft Endpoint Configuration Manager. If a device is using either one or a combination of these solutions, it is said to be managed in the cloud. But before you can implement any of these solutions, either Conditional Access, Intune, or Endpoint Configuration Manager, you need to either join or register your device with Azure AD. There are three ways to do that, and that's what we'll be discussing in this chapter. Point to note, Intune and Endpoint Configuration Manager are independent products, and so they fall outside the scope of Azure AD, but what we will discuss is joining and registering devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (5), [[Microsoft Products|Products]] (2), [[Microsoft]] (2), [[Windows Server]] (1), [[Active Directory]] (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid Entra ID join](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=2)** - [Instructor] The first method out of the three, for managing devices and [[Microsoft Entra ID|Azure AD]], is the Hybrid Azure AD Join. Because it has hybrid in its name, you already may have gotten a rough idea of how this works. In this method, you start off with the device that's already domain joined to [[Windows Server]] [[Active Directory]] on premises. Typically being used by an on premises user. Then you have your group policy plus SCCM in place for managing the device. This setup manages the devices access to mainly non-cloud resources. Hybrid Azure AD Join is implemented through AD Connect. In addition to the domain join on premises, it also enrolls the device for the Hybrid Azure AD Join in [[Microsoft Azure|Azure]]. If you need, you can then optionally configure conditional access policies and apply Intune settings on this device. This setup manages the devices access to mainly Azure resources. It works hand in hand in addition to the existing on premises solutions. Think of it like an extension for management in the cloud. Now I know what you're thinking. This looks like an awful lot of management for a device and way too confusing. It's not, let me convince you. Our primary goal through Hybrid Azure AD Join, is not to complicate the device management process but is to primarily enable better security and [[Accountability]] across on premises and cloud environments. Configuring the Join is one part
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=95)** and deploying conditional access or Intune is another part. The first part is solely designed to allow Azure to recognize the device when a user tries to access cloud resources. If a device is recognized, it's easier for Azure to allow it to access cloud resources. And it's easier for the user because they don't have to jump through hoops to get access to resources they need. The second part, which is implementing conditional access or Intune only comes into play, if you want a tighter control of access to cloud resources. That's why I say it's optional to configure them. You can choose to implement both on premises and cloud management techniques in a proportion that suits your organizational needs. The pharma being the predominant one. So what kind of scenarios is Hybrid Azure AD Join suitable for? One, like I mentioned if the computer is already domain joined to on premises Active Directory. Then two, it runs [[Windows 10]] or even older operating systems like [[Windows]] 7 or Windows 8.1. Windows Server 2008 R2 and above server operating systems are also supported. Next if the device is corporate owned and managed primarily through on-premises solutions like Group Policy and SCCM. Another suitable, but not necessary criteria is if the device is assigned to a hybrid user. If they use it as hybrid and their devices hybrid, it just makes the management simpler
>
> **[3:07](https://www.linkedin.com/learning/deploying-microsoft-entra-id/hybrid-azure-ad-join?u=76281980&t=187)** because of a common source of authority for both objects. It can be implemented through AD Connect as you already know. But you can also implement it through Windows Autopilot or an MSI file. Once this is successfully deployed, it enables the device to participate in modern cloud capabilities, like a full single sign on experience across on premises and cloud resources. Then self-service service password reset and the super cool Windows Hello sign-in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (6), [[Microsoft Azure|Azure]] (4), [[Windows]] (4), [[Windows Server]] (2), [[Active Directory]] (2)
> **Prerequisites:** setup (2), configure (2)
> **Env Vars:** sccm (2), msi (1)
> **Versions:** 8.1 (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Implementing hybrid Entra ID join](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=2)** - [Instructor] Let's see a demo on implementing Hybrid [[Microsoft Entra ID|Azure AD]] Join. I'll be configuring this on a [[Windows 10]] device that's already domain joined on premises. Before I demonstrate how to implement Hybrid Azure AD Join, I want to show you what we have here in the [[Microsoft Azure|Azure]] portal. If I scroll down and click on Devices, you will see it says no device found. Once we start joining and registering devices, they should show up on this page. Now let me switch to the client that will be Hybrid Azure AD joined. This is the Windows 10 computer that will be Hybrid Azure AD joined by the end of this demo. If I open up the system properties, you will see the computer name is wttv-cl1, which stands for World Traveler TV, Client 1. And also if you notice, this is already domain joined to our on-premises [[Active Directory]]. Let me minimize this, open up the command prompt. You can see I'm logged in as Matt. Now let me execute this command. Dsregcmd /status. And hit Enter. Now, if I scroll up, you will see AzureAdJoined status is currently no and DomainJoined status is currently yes, which means this is only on-premises domain joined right now and not Azure AD joined. Now let's switch to the AD Connect server to configure Hybrid Azure AD join. This is my AD Connect server.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=97)** The first thing I'll have to do is open up the AD Connect Reconfiguration Wizard. That should bring up this wizard. Let me center this. And then I click on the Configure button below. Now here is a series of tasks that you can change or modify in AD Connect. Right now what we are trying to do is implement Hybrid Azure AD join. So for that, I'll click on this, which says configure device options. Select that and click on Next. This page gives me an overview of what I can do if I proceed with this wizard. I can do two things. One, configure Hybrid Azure AD join and the second, configure device writeback. We'll not be doing device writeback right now. We'll be doing the first one. So I'll click on Next. Before I can proceed with this configuration change, I'll have to authenticate myself. I put in my account. I'll not be using the previous global admin account that we created to be a service account. I'll be using my own account, which is kunal@worldtraveler.tv. Put in my password, which is this and click on Enter. Now, it'll connect to Azure AD and try to verify my credentials before proceeding onto the next screen. That should take a couple of seconds here. Great, so the authentication was successful. Here, there are three radio buttons, obviously one is disabled. And then the two enabled ones are configure Hybrid Azure AD join and configure device writeback. Right now we want to do configure Hybrid Azure AD join. So keep that selected and proceed to the Next button. On this page, I can configure which device operating systems
>
> **[3:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=192)** I want to be supported in the Azure AD tenant I have. Do I want only Windows 10 and later devices or do I also want to support down-level devices that includes [[Windows]] 8.1 or even Windows 7? Personally in my own environment, I only have Windows 10 computers. So I'll select the first checkbox, not the second one and click on the Next button. So the wizard brings us to this page where we configure our service connection point. This is basically used by devices in our organization on premises to discover Azure AD tenant information. If you have multiple forests and multiple tenants, you will see the list here so that you can map them accordingly. But because we only have one of them right now, I'll select the one that we have. Wttv.local. Select the authentication service, [[Microsoft Entra ID|Azure Active Directory]]. On the previous pages, we already authenticated our credentials with Azure AD. But we didn't do that for the on-premises [[Windows Server]] Active Directory. For that, we'll have to give our enterprise admin credentials also on this page. I'll click on the Add button. It should pop up a window. Put in my admin credentials, which are enterprise administrator credentials. I'll put in administrator here. And put in the password. So it has accepted my enterprise admin credentials. That's great. It shows up here. And then I'll click on the next button. On this page, Azure AD is preparing for all the prerequisites that are needed to configure Hybrid Azure AD join.
>
> **[4:44](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=284)** So this is what it's going to do now. Configure the SCP for device registration in our local Active Directory domain. That sounds good. Click on the Configure button. In this step, Azure AD Connect takes care of everything that is needed to finally implement Hybrid Azure AD join successfully. As you can see, we've got a successful confirmation message. It says the task to configure Hybrid Azure AD join completed successfully. That's great. You also see there's a message below that says we need to carry out additional steps. That's only required if we have down-level devices. Right now because we only have Windows 10 devices, that step is not necessary. Now I'll exit from this wizard so that the synchronization can resume. Click on the Exit button and then wait for a few minutes before the device can show up in Azure AD. If your device does not show up in the Azure AD portal, this is one setting you may want to check. I'm on my domain controller right now for the World Traveler TV domain. I've opened up my group policy management console. Then I'll right click on Default Domain Policy. Click on Edit. Maximize this page. Expand this line so you that can see exactly what's on the screen and then expand on Policies, expand Administrative Templates. Expand Windows Components. Scroll down to where you can see Device Registration. It's over here. And then make sure this policy setting is enabled. It says register domain join computers as devices automatically.
>
> **[6:18](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-hybrid-azure-ad-join?u=76281980&t=378)** If this setting is disabled, your device may not appear in the Azure AD portal, so make sure this setting is enabled. I'm going to close out of here. Now, let's switch back to the Azure AD portal to see if the device has appeared. Now let's see if that device showed up in the Azure AD portal. Let me click on devices. This looks good. You can see wwtv-cl1 client has been successfully Hybrid Azure AD joined and shows up in the Azure AD portal. You can see here join type, it says Hybrid Azure AD joined. That's great, so this demo worked successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (27), [[Windows 10]] (5), [[Active Directory]] (3), [[Windows]] (3), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** click on (14), select the (3), scroll down (2), switch to (2), scroll up (1)
> **Prerequisites:** configure (14)
> **CLI Commands:** make (2)
> **Tools:** azure portal (1), command prompt (1)
> **Definitions:** stands for (1), is a  (1)
> **Env Vars:** scp (1)
> **Versions:** 8.1 (1)

#### [Entra ID join](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=2)** - [Instructor] Moving on to the second method for managing devices in [[Microsoft Entra ID|Azure AD]]. The Azure AD Join. This is relatively simpler and more straightforward as compared to hybrid Azure AD Join. Here's how it works. You have a standalone device probably brand new that you joined directly to Azure AD and then preferably assign it to a cloud user. This device is not influenced in any way from management solutions present on premises. It operates as an independent entity in the cloud. To manage this device, you use a combination of Conditional Access, [[Microsoft]] Intune and if necessary Endpoint Configuration Manager. Which ones to use and to what extent will depend on your needs. If we go any deeper into it this will turn into a mobile device management course. I want to make sure that Azure AD remains the center of our attention and we don't drift away from that. So the Conditional Access, Intune or ECM policies and settings you apply will in turn control the access of this device to [[Microsoft Azure|Azure]] resources. So the question is, what's our primary goal here. The primary goal here is management, security and [[Accountability]] in the cloud. The scenario is where Azure AD Join is suitable ad if the computer is in a Workgroup configuration not influenced by any existing management solutions. Next it runs [[Windows 10]] and not an older operating system.
>
> **[1:40](https://www.linkedin.com/learning/deploying-microsoft-entra-id/azure-ad-join?u=76281980&t=100)** Then the device is corporate owned and is intended to be managed through the use of cloud solutions like Conditional Access, Intune and maybe Endpoint Configuration Manager. Again, preferred but not necessary is if the device is supposed to be assigned to a cloud user Azure AD Join will help both objects share a common source of authority. This can be implemented using multiple ways. One is via the Out Of Box Experience during the windows 10 setup or you can also use the settings app after installation or autopilot during provisioning. There's also a bulk add process in place. Once this is implemented, you'll get a seamless single sign on experience in the cloud, Self Service Password Reset, [[Windows]] Hello and FIDO2 authentication support. If you don't know what FIDO2 is, it's basically a latest set of authentication standards that facilitate password less signings next to generation stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (7), [[Windows 10]] (2), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[Accountability]] (1)
> **Env Vars:** fido2 (2), ecm (1)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Implementing Entra ID join](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=2)** - [Instructor] All right, let's see a demo on: Implementing [[Microsoft Entra ID|Azure AD]] Join. I'll be configuring this on a [[Windows 10]] device in a workgroup configuration using the settings app. So now we're logged into our second client computer. Let me show you the details. If I open up the System Properties, you will see the computer name is wttv-cl2, which is World Traveller TV Client 2 but it is in a workgroup configuration. It is not joined to the on-premises [[Windows Server]] [[Active Directory]]. Let me minimize this, open up the command prompt, and execute the same command we executed the last time, which is dsregcmd /status and hit on Enter. which is dsregcmd /status and hit on Enter. If I scroll back up, you can see AzureAdJoined is currently NO and DeviceJoined is also NO. Let me minimize this. Now to join this client computer to [[Microsoft Entra ID|Azure Active Directory]], I'll have to open the settings app. Here it is. Go to Accounts, then on the left side select Access Work or School. On the top you can see there's a Connect button, I'm going to click on that. So that opens up a wizard, from where we can configure Azure Active Directory Join. In order to do that, I'll have to click on the link which is at the bottom over here, which says, "Join this device to Azure Active Directory." I'll click on that. In the last demo, what we did was Hybrid Azure AD Join
>
> **[1:38](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=98)** for a hybrid user. So the computer was locally joined to the Windows Server Active Directory and that computer belonged to Matt, which was again an on-premises user. In this demo, we'll be configuring Azure AD Join for a Cloud user. So we'll have to enter the credentials of the Cloud user we have, which is Robert in this scenario. Let me put in that. Robert@worldtraveller.tv Click on Next, enter his password. Sign in. Now this wizard in the background is configuring Azure AD Join and there's going to be one last confirmation before the join actually happens. Let me confirm the join. Now this may take a few minutes, so I'm going to pause the video now and then resume once this is over. So this took like a minute and afterwards I got this confirmation window which says, "You're all set!" The device is connected to WorldTravellerTV. That's fantastic. Now let's switch to the [[Microsoft Azure|Azure]] Portal and see if we are able to view this device in the Devices section. I'm going to click on Done to exit out of here and then open up the Azure Portal. I'm back in the Azure AD Portal. Now let me click on Devices to see if the second client was added successfully to our tenant. So I can see over here World Traveller CL2 has appeared, which is great. And the Join Type says Azure AD Joined. This is exactly what we were expecting
>
> **[3:12](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-azure-ad-join?u=76281980&t=192)** and that's how you configure Azure AD Join.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (7), [[Microsoft Entra ID|Azure active directory]] (3), [[Windows Server]] (2), [[Active Directory]] (2), [[Microsoft Azure|Azure]] (2)
> **UI Navigation:** click on (6), open the (1), go to (1), switch to (1)
> **Tools:** azure portal (2), command prompt (1)
> **Prerequisites:** configure (2)
> **Env Vars:** cl2 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Device registration](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=1)** - [Instructor] Coming to the third and last device management method in [[Microsoft Entra ID|Azure AD]], device registration. This feature is intended to fill the gap where the previous two methods aren't really suitable. And that's mainly bring your own device or BYOD scenarios. This Azure AD capability requires a device to be registered with Azure AD, and it supports a wide spectrum of devices and operating systems: [[Windows]], macOS, [[Android]], and iOS. At the time of this recording, [[Linux]] computers are not supported yet, but that may change in the future. Once the device is registered with Azure AD, you can then configure basic conditional access policies, and Intune enrollment for it. Since device registration is intended for BYOD scenarios, that means the device is not typically owned by the organization. That's why I've written Intune enrollment and not Intune management. We need to make sure we do what we need to secure access to corporate data, but at the same time, not locking down employees' personal devices with a ton of restrictions. There needs to be a subtle balance, which is offered by this method and not the previous two. Once configured, this in turn is used to control access of the device to [[Microsoft Azure|Azure]] resources. By control, I mean enforce and check if the device has the minimum required compliance needed to get access. So what's our primary goal here? The primary goal here is [[Accountability]]
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=96)** and security in the cloud. Scenarios where this is suitable are first and the foremost, if an employee's personal device has been used in a BYOD scenario. Because hybrid Azure AD join and Azure AD join are a bit too restrictive or intrusive for an employee's personal device. So device registration is the best option to use in such cases, unless you have a very specific reason not to. The employee log into the laptop or computer using their own local credentials and corporate credentials are only needed when they're accessing company resources. Then, the operating systems. Device registration not only supports [[Windows 10]], but also non-[[Microsoft]] operating systems like macOS, iOS and Android. Hybrid Azure AD join and Azure AD join only support Microsoft operating systems. Next, these devices should mainly be managed through conditional access, and if necessary, then maybe a little bit of Intune. This device management method can be used for any type of user: federated, synchronized, our cloud only. It doesn't matter, because the user eventually signs into their personal device using their own credentials, and there's no source of authority as such for these devices. In Windows, this can be implemented via the settings app after installation or the Intune Company Portal app. What you get after implementing this is single sign on in the cloud
>
> **[3:09](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-registration?u=76281980&t=189)** and sign in using the authenticator app. Of course, these are in addition to accountability, which is the most important aspect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (8), [[Windows]] (2), [[Android]] (2), [[Accountability]] (2), [[Microsoft]] (2)
> **Code Identifiers:** macos (2), ios (2)
> **Env Vars:** byod (3)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Implementing device registration](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=2)** - [Instructor] Now let's see a demo on the third device management method. Implementing device registration. Here, I have a [[Windows 10]] computer, which is acting as an employee's personal device. We'll see how to register this device with [[Microsoft Entra ID|Azure AD]]. So here we are on a Windows 10 computer, which will be acting as my personal device for this demo. Let's see what we've got. Let me first open up the system properties. You can see the computer name says kunal-PC. It does not follow the typical WTTV convention because this is my personal device and not a company owned device. Then you can also see it doesn't have workgroup configuration. Let me minimize this and open up the command prompt here. Let's execute the same command we've been executing all these demos, which is dsregcmd/status and hit enter. Now, if I scroll back up, it's going to say no Azure AD joined and no device joined either. Let me minimize this and now go to the settings app. This is how you configure device registration. First go into accounts. Then on the left, click access work or school. Click on the same connect button we did in the last demo. That'll open up this wizard that you've seen. This is the point at which the demo becomes different. Instead of clicking on this link at the bottom, where it says join to [[Microsoft Entra ID|Azure Active Directory]], you will just go through this wizard,
>
> **[1:34](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=94)** which asks for your corporate email address. So I'm going to enter my corporate email address, which is kunal@worldtraveler.tv. Hit on enter. Now this may take a few seconds to pop up. It asks me to enter the corporate password for my email account, which is this. Click on sign-in. And there it is. We've kicked off the registration process for this device with Azure AD. Okay, awesome. It looks like we didn't even have to wait, and this was almost instantaneously completed. It says you're all set. We've added your account successfully. Let me click on the done button to exit out of here. And now let's switch to the Azure AD portal and see if this device appears in the devices section. Now let's see if my personal computer was added successfully as a registered device to our tenant. To verify that, I'll click on the devices button over here. And if I go through this list, I will find a kunal-PC computer has been registered with my tenant. If I expand this column a little bit, you'll be able to clearly see that. So it says Azure AD registered. You will also notice the column section says, Kunal D Metta, that's because the registration of this device was initiated using my credentials. Similarly, what we did for the previous demo was use Robert's credentials to Azure AD join his device,
>
> **[3:11](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-implementing-device-registration?u=76281980&t=191)** and that's why here it says the owner is Robert and this device is Azure AD joined. In contrast, if I compare wttv-cl1, which was hybrid Azure AD joined does not have an owner because this was a device joined on-premises and synchronized through AD Connect into [[Microsoft Azure|Azure]]. The concept of device ownership is not synchronized through AD Connect. And that brings us to the end of this demo. I hope by now you clearly understand the difference between hybrid Azure AD joined, Azure AD joined and Azure AD registered device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (11), [[Windows 10]] (2), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** click on (4), go to (1), switch to (1)
> **CLI Commands:** find (1)
> **Env Vars:** wttv (1)
> **Cross-References:** in the last (1)
> **Tools:** command prompt (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Device settings](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=2)** - [Instructor] Coming to the last part of this chapter understanding device settings at the tenant level. If you remember joining a device to [[Active Directory]] on premises requires enterprise admin credentials. That makes things a little difficult because an enterprise admin needs to be involved every time a device needs to be added to the domain. But in [[Microsoft Entra ID|Azure AD]], thankfully things are a bit easier. You can choose which users are allowed to join devices to Azure AD. They can simply use their standard user credentials to add devices to the tenant. In this remote age, this is a much needed feature. By the way, this refers to Azure AD Join because hybrid joins are initiated by administrators through AD Connect. Users can do that. So remember this only refers to Azure AD Join. Then you can also delegate local administrative privileges to a user or group of users on the joined devices. So they'll have administrative privileges only locally on joined devices, not the entire tenant. For extra security you can require multifactor authentication for users to join their devices to Azure AD. This ensures that no random person who has access to a user's leaked credentials can join their own device to the tenant. Similar to the join setting. You can also configure, which users are allowed to register their devices with Azure AD.
>
> **[1:36](https://www.linkedin.com/learning/deploying-microsoft-entra-id/device-settings?u=76281980&t=96)** This refers to device registration. You can also limit the maximum number of devices a user can add to Azure AD. This includes the sum total of devices joined and registered by a user. This setting is useful because if a user joins a lot of devices to Azure AD, all of those will have bits and pieces of corporate data on them. More devices will mean a greater effort in securing the data, which we all unfortunately know users are not always diligent about. And lastly, you can also configure Enterprise Stage Roaming for user settings and application data on devices. Enabling this will ensure users have a consistent experience with their personalization across multiple devices. And that's pretty much there is to device settings in Azure AD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (9), [[Active Directory]] (1)
> **Definitions:** refers to (3), is a  (1)
> **Prerequisites:** configure (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Configuring device settings](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=2)** - [Tutor] Let's get to the last and final demo on configuring device settings. In this demo, we will walk through the tenant level device settings and see what changes may be appropriate for our environment. So here I am on the devices section page. Now to configure device level settings at the tenant level I'll have to click on this button on the left which says device settings. That should bring me to this page. Most of the settings that you see here are simple and easy to understand. Almost self-explanatory. So lets walk through them one by one. The first setting says, users may join devices to [[Microsoft Entra ID|Azure AD]]. The setting is currently set to all which means all users are authorized to join their devices to Azure AD using their credentials. I'm not going to change this setting because I want users to be able to join their own devices and decrease the administrative workloads on the IT admins. So this setting looks good. Next similarly users may register their devices with Azure AD. I'll leave that also selected to all. And then require [[Multi-factor Authentication]] to join devices. Depending on your security needs you can set this to yes or no. As of now because I have a very limited number of users I'll leave this setting to no then over here in this drop down I can configure the maximum number of devices a user can add as joined or registered device to our tenant. Now by default this number says 50 which I personally think
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/demo-configuring-device-settings?u=76281980&t=95)** is a lot, I'm going to decrease that to five. Before moving further let me save this settings. It should take a couple of seconds and then we'll open up this setting which says manage additional local administrators on all Azure AD joined devices. Let me click on that link. Right now there are no such role assignments found. What I'm going to do is I'm going to add assignments, select my own account which is kunal@worldtravellertv. Click on the add button. Doing this will enable me to have administrative privileges on all Azure AD joined devices. So if there's a need for me to manage any of those devices , I can do that because I now have administrative privileges on them. So this has been saved let me exit out of this and then go to the last setting which is manage enterprise state roaming settings. Let me click on that. Here there's this one setting which says users may sync settings and app data across devices. Right now it's selected to none. I'll leave that to the default because we'll be changing this further in the next courses. I'm going to exit out of here. That's it. We've configured the devices settings that we're appropriate for our organization. That wraps up this chapter. Time for one last chapter quiz before moving on to the closing chapter. I'll see you after you're done with this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (5), [[Multi-factor Authentication]] (1)
> **UI Navigation:** click on (4), go to (1)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Key takeaways](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=2)** - [Instructor] The conclusion. Great job on making it all the way to the end. Here, we'll do a quick review of what we've learned so far. This course had five chapters. The first one was introduction, and the one you're watching right now is the conclusion. In between, there were three core chapters, managing users, managing groups, and managing devices. In managing users, we learned about the types of user accounts, federated and synchronized, which are collectively called hybrid accounts, and cloud-only accounts, which are also called native accounts. Then we got an overview of the structure of a user object and what it comprises of. Next, we talked about assigning administrative privileges to users through directory roles. You can either use a built-in role or make your own custom directory role. After that, we performed the create, read, update, and delete, or in short, CRUD operations, on users in [[Microsoft Entra ID|Azure AD]]. Then we talked about temporarily blocking users from signing in and configured user settings at the tenant level. In managing groups, we learned about security groups and [[Microsoft 365]] groups, formerly known as [[Microsoft Office|Office]] 365 groups. We also got to understand their membership types: assigned user, dynamic user, and dynamic device.
>
> **[1:37](https://www.linkedin.com/learning/deploying-microsoft-entra-id/key-takeaways?u=76281980&t=97)** Then we got an overview of the group object type and its composition. After that, we performed CRUD operations on groups, configured policy for expiration, walked through the tenant level settings, and got a conceptual overview of administrative units. In the next chapter, managing devices, we understood the different approaches to device management using on-premises solutions, using tools in [[Microsoft Azure|Azure]], and weighed their pros and cons. Then we got a deeper understanding of how hybrid Azure AD Join works, how Azure AD Join works, and how device registration works. I then demonstrated how these three are implemented. And finally, we saw the device settings available in Azure at the tenant level. That's the summary of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (3), [[Microsoft Azure|Azure]] (2), [[Microsoft 365]] (1), [[Microsoft Office|Office]] (1)
> **Cross-References:** we talked about (2), in the next (1)
> **Env Vars:** crud (2)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Your personal checklist](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=2)** - [Instructor] Here are some important things you need to pay attention to while deploying [[Microsoft Entra ID|Azure AD]] in your own production environment. First of all, if you have a hybrid identity infrastructure, understand the behavior of both hybrid versus native objects and how they're different. This difference in behavior will be tied to their Source of Authority. So understand this concept well if an object's source is [[Windows Server]] or [[Microsoft Azure|Azure]]. Next, just get comfortable performing basic CRUD operations on objects, both hybrid and native. Go through the tasks. Observe the differences. After that, two very important points. Be absolutely clear about what type of user strategy to use when and also, be absolutely clear about what type of group strategy to use when. Should the user be hybrid or cloud only? Should the group be security or [[Microsoft 365]]? And what should be its membership type? Get all those details correct right from the beginning. And then prefer using a device management strategy based on the user type. So a hybrid join for a hybrid user and a cloud join for a cloud user. Remember, this is not a hard and fast rule but having a common source of authority for a pair of user and device will make management much easier. Then know how to modify the user,
>
> **[1:35](https://www.linkedin.com/learning/deploying-microsoft-entra-id/your-personal-checklist?u=76281980&t=95)** group, and device settings, both at the object and tenant level. Once you understand the theory, deploy a proof-of-concept to validate your use cases and test your hypothesis. After you're fully done, properly terminate your POC. And finally, watch my other courses in the Azure AD learning path if you haven't already. I have a lot of cool Azure AD content out there. So go check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure ad]] (3), [[Windows Server]] (1), [[Microsoft Azure|Azure]] (1), [[Microsoft 365]] (1)
> **Env Vars:** crud (1), poc (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-microsoft-entra-id/next-steps?u=76281980&t=2)** - [Instructor] Here's what you can do to take things up a notch. Like I repeatedly keep telling in all my courses, there's nothing that can replace actual hands-on experience. So spin up an [[Microsoft Entra ID|Azure AD]] Tenant and start performing CRUD operations. Then, follow the key takeaways and the personal checklist for outlining your own management strategy. Next, modify the user, group, and device settings, both at the object level and tenant level. And lastly, if you have any doubts, rewatch the course or specific clips and participate in the Q and A section of this course. That's it. Thank you so much for watching this course, Deploying [[Microsoft Entra ID|Azure Active Directory]] on [[LinkedIn]] Learning. Keep in touch, add me on LinkedIn. The profile link should flash below on your screen. With that, we've reached the end of this course. But the end of only this course. The journey isn't over yet. Because the learning continues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Microsoft Entra ID|Azure ad]] (1), [[Microsoft Entra ID|Azure active directory]] (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kunal D Mehta]]

## Skills Covered

- Microsoft Entra ID

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

---

[↑ Back to top](#)