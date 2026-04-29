---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: powershell-for-microsoft-365-administration
url: "https://www.linkedin.com/learning/powershell-for-microsoft-365-administration"
duration_minutes: 249
duration: 4h 9m
level: Intermediate
updated: 4/15/2025
learners: 46092
skills:
  - Office 365 Administration
  - Powershell
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEuh7ybpgsnNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639075040486?e=2147483647&amp;v=beta&amp;t=eGWEUoCTqR6GJ6_yv7gMA82FJrhEUZRAR21qpbgSC1A"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Powershell- Automate IT Tasks and Microsoft 365 Administration]]'
prev_courses:
  - '[[PowerShell- Automating IT Administration]]'
path_nav: '[{"path":"Powershell- Automate IT Tasks and Microsoft 365 Administration","position":3,"total":3,"prev":"PowerShell- Automating IT Administration","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/office-365-administration
  - skill/powershell
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/PowerShell%20for%20Microsoft%20365%20Administration.md)

![PowerShell for Microsoft 365 Administration](https://media.licdn.com/dms/image/v2/C560DAQEuh7ybpgsnNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639075040486?e=2147483647&amp;v=beta&amp;t=eGWEUoCTqR6GJ6_yv7gMA82FJrhEUZRAR21qpbgSC1A)

# PowerShell for Microsoft 365 Administration

> As a task automation and configuration management program, PowerShell is useful for a variety of applications. Knowing how to create reusable, deployable components in PowerShell optimizes your functionality as well as your performance, especially compared to in-app administration centers, which are helpful but often inefficient. In this course, instructor Liam Cleary shows you how to use PowerShe

> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration) | 4h 9m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - PowerShell for Microsoft 365
  - What you should know
- [**1. Connecting to Microsoft 365 Using PowerShell**](#1-connecting-to-microsoft-365-using-powershell) (9 videos)
  - Why use PowerShell to manage Microsoft 365?
  - Overview of PowerShell syntax
  - How to connect to Azure Active Directory
  - How to connect SharePoint Online and OneDrive for Business
  - How to connect to Exchange Online
  - How to connect to Microsoft Teams
  - How to connect for security and compliance
  - Connecting to Microsoft 365 services
  - The Microsoft PnP PowerShell commands
- [**2. Managing SharePoint Online and OneDrive for Business**](#2-managing-sharepoint-online-and-onedrive-for-business) (7 videos)
  - Connect to SharePoint Online and OneDrive for Business
  - How to create, update, and delete site collections
  - How to create, update, and delete sites
  - How to create, update, and delete lists and libraries
  - How to manage users and groups within SharePoint Online
  - How to manage OneDrive for Business using PowerShell
  - How to manage external sharing capabilities
- [**3. Managing Exchange Online**](#3-managing-exchange-online) (3 videos)
  - How to connect to Exchange Online
  - How to create, update, delete, and manage mailboxes
  - How to manage exchange online permissions
- [**4. Managing Microsoft Teams**](#4-managing-microsoft-teams) (6 videos)
  - How to connect to Microsoft Teams with PowerShell
  - How to create, update, and delete teams
  - How to manage channels
  - How to provision policies in Teams
  - How to create templates in Teams
  - Modifying core configuration
- [**5. Managing Security and Compliance**](#5-managing-security-and-compliance) (8 videos)
  - Explain the security and compliance features
  - Security and compliance demo
  - How to manage Safe Links, Documents, and Attachments
  - How to create alerts and activity alerts
  - How to create data loss prevention policies
  - How to create sensitivity labels
  - How to create sensitivity policies
  - How to review audit logs
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### PowerShell for Microsoft 365
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980&t=0)** - [Liam] Hi, I'm Liam and I'd like to welcome you to the course.
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980&t=4)** This course is going to take you on a journey to understand firstly the core PowerShell modules and commands available within Microsoft 365, secondly, how to connect to each service, third, the available commands, and then lastly, how to manage parts of each service, including creation of policies and configuration.
>
> **[0:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980&t=28)** We will walk through the out-of-the box capabilities.
>
> **[0:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980&t=31)** Our focus will be performing standard day-to-day tasks for managing the tenant.
>
> **[0:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980&t=36)** By the end of this course, you will have a greater understanding of how to manage your Microsoft 365 tenant using PowerShell.
>
> **[0:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/powershell-for-microsoft-365?u=76281980&t=44)** So join me for the rest of this course to understand how to manage Microsoft 365 using PowerShell.

> [!info]- Semantic Content
>
> **Tools:** powershell (3)
> **Speakers:** - [liam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980&t=0)** - [Instructor] Using PowerShell to manage Microsoft 365 is an area that all organizations often struggle with.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980&t=7)** Knowing the modules to utilize, which commands to use, and then how to cross services are critical to effective management.
>
> **[0:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980&t=15)** To be successful with PowerShell, you simply need some basic knowledge and skills of managing Microsoft 365 and deployments, along with some experience scripting using basic PowerShell.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980&t=27)** If you do not have any experience with PowerShell within Microsoft 365, no need to worry, the course will give you an overview of where to start.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980&t=35)** This course will start by helping you understand the available modules, commands, and how to use them.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/what-you-should-know?u=76281980&t=42)** The course will also step through common tasks, configurations, and policy creation for Microsoft 365.

> [!info]- Semantic Content
>
> **Tools:** powershell (4)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Connecting to Microsoft 365 Using PowerShell

> [↑ Back to Table of Contents](#table-of-contents)

#### Why use PowerShell to manage Microsoft 365?
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=0)** - [Instructor] So why use PowerShell to manage Microsoft 365?
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=4)** Well, PowerShell for Microsoft 365 is a powerful management tool that compliments the admin center.
>
> **[0:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=11)** For example, you can use PowerShell automation to easily manage multiple user accounts, licenses, and also to create reports.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=20)** There are six core reasons to consider when trying to use Microsoft 365 PowerShell for managing and configuring the tenant.
>
> **[0:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=28)** The first one is that you can retrieve information that's not often available directly within the admin center.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=35)** You're also able to utilize features that are only available within PowerShell.
>
> **[0:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=40)** You can manage and perform bulk operations, such as updating all of the accounts.
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=46)** You can perform queries and filter any of the data that's available within the admin center.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=52)** We can export any of the content and logs.
>
> **[0:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=55)** And then, really, we can manage and configure multiple services in one single interface.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=62)** For example, right now, to manage Exchange Online, we have to go to the Exchange admin center, to manage Microsoft Teams, we go to Microsoft Teams, to manage SharePoint, we go to the SharePoint admin center, whereas in PowerShell, we can use a single session, connect to everything and then manage everything that we need to.
>
> **[1:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=81)** So let's talk about the first one, which is retrieving information.
>
> **[1:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=86)** The Microsoft 365 admin center displays most helpful information that we can kind of find, it lets me know information about the users, the licenses, the services, et cetera.
>
> **[1:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=98)** It doesn't show all the possible information though, that Microsoft 365 stores about user licensing, mailboxes and sites.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=109)** An example of this would be trying to view licensed features based on a specific location.
>
> **[1:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=116)** So we would need to utilize PowerShell to be able to identify some of that information.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=122)** Our next one is the PowerShell-only features.
>
> **[2:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=126)** The Microsoft 365 admin center provides access to everyday, practical administrative tasks that apply to most Office 365 tenants and environments.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=137)** The admin center's purpose is so that you, as the administrator, can carry out the most common management tasks.
>
> **[2:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=146)** PowerShell obviously is the first place where most of the new features get deployed.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=151)** So you can often execute PowerShell and run new features or enable new components or even update configuration that is not available with inside the admin center.
>
> **[2:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=163)** Our next one is the bulk operations.
>
> **[2:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=166)** The visual interface of the Microsoft 365 admin center is really valuable when you're executing single operations, so updating an account, updating a mailbox, updating a site.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=180)** However, when you need to change multiple values or specifically selected large sets of items, so all of the users, all of the mailboxes, the Microsoft 365 admin center is not always the best.
>
> **[3:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=195)** An example of this would be let's say we wish to remove one of our users, Adele, from all of the SharePoint sites that she's been added to.
>
> **[3:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=204)** Now there's no option for that within the admin interface, this would definitely have to be a PowerShell action.
>
> **[3:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=210)** Next is the ability to perform queries and filters.
>
> **[3:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=214)** Now the admin center provides several ways to filter data to locate targeted subsets of information, so for example, display a list of mailboxes within New York, so you can filter that out.
>
> **[3:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=227)** However, there are limitations on what you can do as far as that filtering would go.
>
> **[3:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=232)** So another example would be displaying a list of all mailboxes within either New York or London.
>
> **[4:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=240)** The interface just doesn't have that level of filtering and querying.
>
> **[4:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=244)** This is another reason to utilize PowerShell.
>
> **[4:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=247)** Then of course, we can export content and the logs.
>
> **[4:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=251)** So the Microsoft 365 admin center lets you view lists of data.
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=255)** Not every list of information or data is exportable to you, as the administrator.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=262)** The admin center doesn't provide a way to print the displayed lists either, so for example, if you wanted to export a list of users with all of the specified fields that are associated to the user, you cannot do that within the admin interface, you actually have to use PowerShell.
>
> **[4:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=279)** Then of course, managing multiple services.
>
> **[4:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=282)** The components that make up Microsoft 365 work together.
>
> **[4:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=286)** Every day admin tasks often cross those services.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=291)** For example, if you wanted to modify user properties, including mailbox specifics, then you're managing a user account in Azure Active Directory and then the mailbox that's associated to it.
>
> **[5:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/why-use-powershell-to-manage-microsoft-365?u=76281980&t=303)** PowerShell can provide access to service specific information, which can then combine with other values, so instead of having to access multiple admin centers, you're able to access a single interface or session, which is connected to all of the services.

> [!info]- Semantic Content
>
> **Tools:** powershell (14)
> **Code Keywords:** interface (6), let (2)
> **Analogies:** for example (5), such as (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Overview of PowerShell syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=0)** - [Narrator] So let's review PowerShell Syntax.
>
> **[0:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=3)** There were three steps to the PowerShell process within Microsoft 365.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=7)** The first is to download the required PowerShell modules locally, making them available for connecting to the cloud.
>
> **[0:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=14)** The installed dash module command-let gets one or more modules from an online repository.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=21)** The command-let validates the modules and copies the folders to the installation location on your machine.
>
> **[0:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=28)** Install modules are not automatically imported making them unavailable to you after the installation.
>
> **[0:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=36)** You can filter which module is installed based on the minimum, maximum and exact versions of a specified module.
>
> **[0:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=44)** The Import-Module command-let adds one or more modules to the current PowerShell session.
>
> **[0:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=51)** A module is a package that contains members that can be used in PowerShell.
>
> **[0:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=57)** Members include command-lets, providers, scripts, functions, variables, and other tools and files.
>
> **[1:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=64)** After a module is imported you can then use any of the module members in the current session.
>
> **[1:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=71)** By default, the Import-Module imports all modules and members that it exports.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=79)** But you can use the alias function command-let and valuable parameter to restrict which ones you need to utilize.
>
> **[1:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=85)** The Import-Module command only imports into the current PowerShell session.
>
> **[1:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=92)** To import the module into every session you need to utilize the Import-Module command within your PowerShell profile.
>
> **[1:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=100)** In order to use any of the Microsoft 365 modules, you first need to install and then import them into the current PowerShell.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=109)** In the example here, we are installing the module for Azure Active Directory, and then we are importing that module to make it available to us.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=118)** The second piece is to connect to the required cloud service using the supported approaches provided by the imported and installed module.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=128)** There are three options we can use when connecting to Microsoft 365.
>
> **[2:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=133)** Firstly, the installed and imported PowerShell modules provide commands for connecting to the chosen service.
>
> **[2:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=142)** PowerShell supports session connections, which stream the required PowerShell commands directly into the current PowerShell window or session.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=151)** Lastly, we can use the Microsoft Graph PowerShell commands which called the rest API commands to perform various tasks as needed.
>
> **[2:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=161)** In order for us to connect to Microsoft 365, we can utilize standard connectivity.
>
> **[2:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=167)** So connect dash Azure AD for connecting to Active Directory in the cloud, or connect dash exchange online.
>
> **[2:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=174)** Each connection command has a different name.
>
> **[2:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=178)** We can also credentials when trying to connect.
>
> **[3:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=182)** So for example, we can populate a credential variable with our username and password and then pass those values directly to the method that we wish to use.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=193)** So connecting to exchange or Microsoft teams or SharePoint Online.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=197)** We can also connect using the session option instead, this is an older version that doesn't support some of the multi-factor authentication, but from here we can pass credentials and then we can create what's called a New PowerShell Session, which then creates a basic auth connection to the cloud.
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=216)** Once that's done, we then import the session that we've created directly into our existing PowerShell.
>
> **[3:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=224)** At that point, any PowerShell commands that we need are streamed into the current session.
>
> **[3:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=230)** We can also then utilize the Microsoft Graph, which is the newer model that's available to us, where we install and import a specific module.
>
> **[3:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=239)** So I'm going to say install module.
>
> **[4:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=242)** Then I can import the module.
>
> **[4:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=244)** And then this time around when we connect, we use specific scopes.
>
> **[4:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=249)** So the scopes are API permissions available to us within app registrations.
>
> **[4:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=254)** Lastly, once we've made the connections, we can then execute the required commands through the PowerShell session directly to the cloud.
>
> **[4:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=264)** Now, in order to utilize PowerShell, it's important to understand that PowerShell uses a verb noun naming system.
>
> **[4:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=272)** Most of the command names consist of a standard verb hyphenated with a specific noun.
>
> **[4:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=279)** Some examples could be get dash service, new dash service, restart a service or even suspend dash service.
>
> **[4:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=289)** Viewing the corresponding commands for a verb is achieved by using the dash verb or dash noun property.
>
> **[4:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=297)** Microsoft 365 is often limited to a core set of verb Noun combinations.
>
> **[5:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=304)** The most common verbs are add, get, new, remove, select, set, update, and connect.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=312)** A pipeline is a series of commands connected by pipeline operators.
>
> **[5:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=317)** Each pipeline operator sends the results of the preceding command to the next command.
>
> **[5:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=324)** The outputs of the first command can be sent for processing as input to the second command.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=330)** The output can be sent to yet another command.
>
> **[5:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=333)** The result is a complex command chain or pipeline that is composed of a series of simple commands.
>
> **[5:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=340)** For example, we can retrieve all Azure AD users then pipe the results for sorting or even selecting of specific fields.
>
> **[5:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=350)** In the example here, we're retrieving all of the Azure AD uses and then sorting by user principal name.
>
> **[5:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=356)** We could also then say, get Azure AD user, which retrieves all of the users sort by user principal name and then only select the specific fields.
>
> **[6:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=368)** Variables are a core building block of PowerShell.
>
> **[6:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=371)** When connecting to Microsoft 365, it helps to populate variables with the results from the commands executed.
>
> **[6:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=378)** Variables can contain multiple results or singular values.
>
> **[6:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=383)** Each variable is reusable and available during the current session.
>
> **[6:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=388)** They can also be defined within reusable scripts, which either require manual or automatic population depending on the purpose of the script.
>
> **[6:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=396)** So in this example, I have a variable called user, which is populated with a static value or the user variable is being populated from the output of a command.
>
> **[6:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=408)** We can then load the variables with existing data if we need to as well by creating some kind of results, populating those and then iterating through the users one by one.
>
> **[7:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=420)** Once the PowerShell modules are installed and imported into the current session, you can review the list of commands that are available.
>
> **[7:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=428)** All commands, filtered commands and specific commands can be retrieved.
>
> **[7:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=433)** So in this example here, we're using get dash command, which is a standard PowerShell command-let and filtering to Azure AD.
>
> **[7:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=441)** I can also get specifics about a command-let by typing the names such as connect dash Azure AD.
>
> **[7:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=448)** I can also then get either the types such as verb or nouns.
>
> **[7:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=454)** And then I can also retrieve by specific commands to say get me the values that are inside the Azure AD.
>
> **[7:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=461)** Now we can also execute standard commands so I can retrieve an Azure AD user for example, and then use a filter option.
>
> **[7:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=469)** I can retrieve a specific SharePoint site for example, notice the syntax is slightly different.
>
> **[7:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=475)** And then of course I could create something new by using the various command-lets.
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/overview-of-powershell-syntax?u=76281980&t=479)** The key here is that Microsoft 365 in its PowerShell modules provides all the capabilities that you would need to manage Microsoft 365.

> [!info]- Semantic Content
>
> **Code Keywords:** module (17), let (7), pass (2), default, (1), function (1)
> **Tools:** powershell (23)
> **Analogies:** for example (4), such as (2)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (4)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)

#### How to connect to Azure Active Directory
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=0)** - [Instructor] So how do we connect to Azure Active Directory?
>
> **[0:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=3)** Well, first off, there are some core prerequisites.
>
> **[0:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=5)** The first is that we need to launch PowerShell on our machine as a local administrator.
>
> **[0:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=11)** We then need to install the Azure AD module, then import the module into our current session.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=18)** And then most importantly, the account that we using needs to be a Microsoft 365 administrator account or set of credentials.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=27)** There are two different modules that can be used to manage Azure AD for Microsoft 365.
>
> **[0:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=34)** The first is based in Windows PowerShell.
>
> **[0:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=37)** And this is version 1 of the module for Azure Active Directory.
>
> **[0:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=41)** It's also known as the MSOnline module or Microsoft Online module.
>
> **[0:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=47)** And the commandlets themselves are prefixed with Msol at the beginning of the name.
>
> **[0:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=53)** The second one is the Azure Active Directory Graph module, as it's referred to.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=59)** And this one here is what's called version 2 of the Azure Active Directory module itself.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=66)** And the commandlets include as AzureAD in their name.
>
> **[1:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=71)** There are three common ways of connecting to Microsoft 365.
>
> **[1:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=76)** The first one is to utilize a browser login.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=78)** So that means that directly from the PowerShell window, a browser will load.
>
> **[1:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=83)** We could also populate a credential object with a username and a password.
>
> **[1:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=89)** Or we could use what's called a service principle, which is created within Azure Active Directory.
>
> **[1:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=95)** Now, if we wanted to connect using the version 1 module, then we would first install the module, which is the MSOnline module.
>
> **[1:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=104)** And then we would import the module directly into the PowerShell session that we are in.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=110)** We then need to create the credential object that needs to be utilized.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=114)** This will then prompt us for the username and the password.
>
> **[1:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=117)** And then we can use what's called Connect-MsolService, which is connect Microsoft Online service, and we pass the credential object.
>
> **[2:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=127)** Now, if we wanted to use version 2 of the module, then we'll now install the module called Azure AD.
>
> **[2:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=134)** There is also a preview version which is called Azure AD Preview.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=137)** We can then do import module of that same module.
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=141)** We can then pass the same credential object or create a new one.
>
> **[2:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=145)** And this time around, we use Connect-AzureAD and then pass the credential object to it.
>
> **[2:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=152)** Our other option was to utilize the Microsoft Graph PowerShell, where we install the module Microsoft.Graph.
>
> **[2:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=160)** We then import the module.
>
> **[2:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=162)** Now I will let you know here that the importing of the module can take some time, because it's not just a single module that's being installed, but a host of different modules.
>
> **[2:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=171)** And then of course, here, we then connect to the Microsoft Graph.
>
> **[2:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=177)** And the way we connect here is by using Scopes, and it will launch a browser where we can authenticate.
>
> **[3:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-azure-active-directory?u=76281980&t=184)** Then we consent to the Scopes or the Scope permissions, and then we're able to access whichever service it is that we've identified with the specific set of permissions.

> [!info]- Semantic Content
>
> **Code Keywords:** module (19), pass (3), let (1)
> **Tools:** powershell (5)
> **Versions:** version 1 (2), version 2 (2)
> **Prerequisites:** install (4)
> **Definitions:** known as (1), means that (1), is called (1)
> **Speakers:** - [instructor] (1)

#### How to connect SharePoint Online and OneDrive for Business
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=0)** - [Instructor] So how do we connect to SharePoint Online and OneDrive for Business?
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=4)** Well, first off, same prerequisites.
>
> **[0:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=6)** We need to launch PowerShell as an administrator.
>
> **[0:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=9)** We then install the SharePoint Online module, and then we import that module directly into the current session.
>
> **[0:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=17)** And then the account that we're using needs to be a Microsoft 365 administrator.
>
> **[0:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=22)** However, if we're just going to manage SharePoint, it could actually be just a SharePoint administrator.
>
> **[0:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=28)** The SharePoint Online PowerShell module provides the management for OneDrive for Business and SharePoint Online.
>
> **[0:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=36)** From an installation perspective, the installable version can be downloaded from the Microsoft link, or we can use the Install-Module option to actually install that module directly into the PowerShell session.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=52)** So two different approaches, depending on what you support within your environment.
>
> **[0:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=56)** Now to install the SharePoint Online module, we run Install-Module, and the name of the module is Microsoft.Online.SharePoint.PowerShell.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=66)** We then import that module in and it will make all of the commandlets available.
>
> **[1:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=72)** Now to connect to SharePoint Online once we have it installed and imported, we use Connect-SPOService, Very similar to the other previous, So Connect Azure AD, Connect Teams, et cetera.
>
> **[1:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=85)** And this time we pass the URL of the admin center that we wish to connect to.
>
> **[1:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=90)** The admin center is normally whatever the tenant domain is -admin.[sharepoint.com](https://sharepoint.com).
>
> **[1:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=96)** We can also connect to a specific site collection that isn't the admin one, too.
>
> **[1:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=101)** So instead of using Connect-SPOService, we can use Get-SPOSite.
>
> **[1:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=107)** Now just be aware that when we connect, we do need to have called Connect-SPOService first, before we can execute any other commands.
>
> **[1:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=117)** You need to have that connection to SharePoint Online or whatever service it is you're utilizing.
>
> **[2:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=124)** Now to connect to OneDrive for Business, you'll notice it's exactly the same.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=128)** We obviously first connect to the administrator endpoint, which is obviously Connect-SPOService and then tenant-admin.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=137)** And then to retrieve the OneDrive for Business site collections, we use the same command which we use to retrieve a normal site collection, but we filter it by using a couple of different things.
>
> **[2:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=149)** We use a property called IncludePersonalSite and set that to true.
>
> **[2:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=153)** That will add the personal locations into the list that Get-SPOSite can retrieve because by default it will only retrieve regular site collections, and then we can filter it to the path because all OneDrive sites are something -my.[sharepoint.com/personal](https://sharepoint.com/personal)/ whatever the email address would be.
>
> **[2:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=174)** What we can also do then is utilize that to get a specific for a user.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=180)** So if I know it's domain-my slash slash user, then I can retrieve that individual OneDrive for Business site.
>
> **[3:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=188)** Now we can utilize the Microsoft Graph again so we can install the module and import the module.
>
> **[3:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=194)** And the key to being able to utilize the Microsoft Graph is to set the right permissions.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=200)** So our scopes for this, you'll see the core object is Sites and Files, not users and groups and contacts.
>
> **[3:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-sharepoint-online-and-onedrive-for-business?u=76281980&t=209)** Users and groups and contacts would be Azure AD, sites and files are OneDrive and SharePoint.

> [!info]- Semantic Content
>
> **Code Keywords:** module (11), pass (1), this, (1)
> **Prerequisites:** install (6), you need to have (1)
> **Tools:** powershell (4)
> **URLs:** [sharepoint.com](https://sharepoint.com) (2)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Analogies:** similar to (1)
> **Warnings:** be aware (1)

#### How to connect to Exchange Online
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=0)** - [Instructor] So, how do we connect to Exchange Online?
>
> **[0:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=2)** Well, I have prerequisites here.
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=4)** We first launched PowerShell as an administrator, and then we install either the Exchange Online module, or we connect using the session-based approach.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=13)** We can then import the module or the session stuff into the current PowerShell session.
>
> **[0:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=19)** And of course, our account must be a Microsoft 365 administrator of some description.
>
> **[0:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=24)** It could be the global admin, or it could be an exchange administrator.
>
> **[0:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=28)** Now to connect to Exchange Online, we have two call options.
>
> **[0:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=32)** The first is the PowerShell remote session.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=35)** This is the one that doesn't support modern authentication.
>
> **[0:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=38)** It doesn't support multifactor authentication, and there's no requirement to install a PowerShell module.
>
> **[0:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=45)** The Exchange Online module does support modern authentication.
>
> **[0:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=49)** Does support multifactor authentication, but you do need to install the Exchange Online Management PowerShell module to utilize that.
>
> **[0:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=58)** Now, if we were connecting using a PowerShell session, we first got to initiate some credential object to grab the username password, and then we create a new PowerShell session.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=69)** You'll notice that the configuration name for this is Microsoft.exchange with a URI that points to Outlook and Office 365.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=78)** Then we pass credentials, and then that session will be initiated.
>
> **[1:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=83)** And there'll be a bunch of redirects that take place you can see in the PowerShell session, and then the session will be created.
>
> **[1:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=89)** The session itself is then imported into the current PowerShell window.
>
> **[1:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=95)** Now, up until you run that last command that import the PS session, you don't have access to any of the Exchange Online commandlets.
>
> **[1:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=104)** That last command physically tells the remote Exchange Online servers to push down the PowerShell commands to make them available to you.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=114)** Now, if we wanted to use the modern approach, we can install Exchange Online Management module.
>
> **[1:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=119)** We can then import that module directly into the PowerShell window that we're in.
>
> **[2:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=125)** From that point, we can then start to connect by using Connect-ExchangeOnline, and we can then pass various options.
>
> **[2:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=133)** Now what's nice about the module is it supports the modern multifactor authentication approach.
>
> **[2:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=139)** So you'll see, I'm simply passing a user principal name, and it will go ahead, and launch a browser, and let me go through the authentication flow.
>
> **[2:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=147)** So if my organization is using multifactor in a web browser, then it will go through that flow, and then let me have a session in the Powershell window.
>
> **[2:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=156)** However, I can use it without the modern authentication, it will do backwards compatibility.
>
> **[2:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=162)** So I can patch a credential object into that same exchange, online connection commandlet.
>
> **[2:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=168)** So we get the best of both worlds.
>
> **[2:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=170)** 'Cause there are oftentimes where you are working in an environment that doesn't support multifactor, and so you still need to be able to connect without being forced through that approach.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=180)** Our obviously last option here is to utilize the Microsoft Graph again so we can install the module, and import the module.
>
> **[3:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=188)** And then as before, our scopes will change.
>
> **[3:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=191)** So you can see I'm using mail read, write mail, read, write, shared mailbox, settings, et cetera.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online-14407607?u=76281980&t=197)** By defining the scopes or the API permissions as mail, when we get to the consent option, we consent to the permissions to the mail, and then there are commandlets that are available based on the scopes.

> [!info]- Semantic Content
>
> **Code Keywords:** module (10), pass (2), let (2)
> **Tools:** powershell (12)
> **Prerequisites:** install (5)
> **Env Vars:** uri (1), api (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### How to connect to Microsoft Teams
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=0)** - [Instructor] So how do we connect to Microsoft Teams?
>
> **[0:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=3)** Well, for our prerequisites, we launch PowerShell as an administrator again.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=7)** This time we installed the Teams online module, and then we import that module into the current session.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=13)** And then of course our account must be a Microsoft 365 administrator, such as a global admin, or it could be a Teams administrator.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=21)** Now the Microsoft Teams PowerShell module is a set of cmdlets for managing Teams directly from the PowerShell command line.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=29)** You can install the Microsoft Teams PowerShell module, either using the PowerShell Gallery, or you can also manually download it and install it if needed.
>
> **[0:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=37)** It provides management for all aspects of the Teams administration, including users, teams, policies, and configuration.
>
> **[0:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=45)** And it also supports authentication mechanisms such as access tokens, as well as credentials.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=52)** Now, to install the Microsoft Teams module, we first run Install-Module, and the name of it is called MicrosoftTeams.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=59)** We can then import the module.
>
> **[1:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=61)** And then if needed, we can also update the module as newer versions are available.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=66)** And this is the same for any of the other modules that you wish to utilize for connecting to Microsoft 365.
>
> **[1:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=73)** Now to connect to Microsoft Teams, we can use the modern authentication approach by using Connect-MicrosoftTeams, which will just launch the browser and we can authenticate.
>
> **[1:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=83)** We also have backwards compatibility by passing a Get-Credential object were we able to connect, and we can also connect to different types of Microsoft Teams.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=94)** So if you happen to work in a government or a military team, then there's an extra parameter available to us.
>
> **[1:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=101)** And you'll find this as available also in the other modules where you can specify the team's environment name, and if it's a GCC or a GCC high or a DOD, you can utilize the same modern authentication, but you're connecting to any one of those entry points.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=118)** We can also utilize the Microsoft Graph again.
>
> **[2:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=120)** So we install and import the module as before.
>
> **[2:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=124)** And notice the difference here in the scopes, our API permissions.
>
> **[2:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=127)** Now there are more of these, but as an idea, anything that's Team, TeamsTabs, TeamSettings, TeamsApp, TeamMember, we can add those as scopes and then during the consent we'll authorize that.
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=141)** And then there are a series of commands available to us specifically for Microsoft Teams.
>
> **[2:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams?u=76281980&t=147)** Now, I suppose the key here is with the Microsoft Graph, is that whatever the scopes are will determine if the PowerShell cmdlets that are provided will actually function.

> [!info]- Semantic Content
>
> **Code Keywords:** module (9), function (1)
> **Tools:** powershell (6), command line (1)
> **Prerequisites:** install (5)
> **Env Vars:** gcc (2), dod (1), api (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### How to connect for security and compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=0)** - [Instructor] So how do we connect for managing security and compliance?
>
> **[0:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=3)** Well, our prerequisites: we launched PowerShell as an administrator as before, and then we install and import the Exchange Online module, or we create the session.
>
> **[0:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=14)** This means that security and compliance components are inside the Microsoft Exchange components.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=20)** And the account we're using must be Microsoft 365 administrator or some credential that matches any one of the admin roles.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=29)** There were three options for connecting to the security compliance features within Microsoft 365.
>
> **[0:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=34)** The first is to use basic authentication, so PowerShell Session Approach.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=39)** Then we have the Exchange version one module, and then we have the Exchange version two module.
>
> **[0:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=45)** From a basic authentication perspective, no PowerShell module is needed.
>
> **[0:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=50)** The connection is purely a PowerShell session.
>
> **[0:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=53)** The Powershell modules are not available until you've initiated the session.
>
> **[0:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=58)** And then the commands are not available until the session has been updated or you use the import PSSession object.
>
> **[1:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=65)** And this utilizes the new PowerShell session object.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=69)** Now from an exchange version one module, there's no support for PowerShell Core, so as in cross-platform PowerShell: macOS, Linux, and Windows.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=79)** It can be installed via the download from the Exchange admin center.
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=84)** It does support multifactor and federated authentication, and you can utilize this same set of modules to manage Exchange Online, as well as the Security and Compliance features.
>
> **[1:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=96)** Now, the Exchange version two module supports multifactor modern, and credential authentication.
>
> **[1:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=103)** They support for Exchange Online, Security and Compliance, and the standalone Exchange Online Protection.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=110)** You install that module using PowerShell, and it is a cross-platform module, with support for macOS, Linux, and Windows.
>
> **[1:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=119)** Now from a basic authentication connection, we've looked at this previously, you'll notice a slight adjustment here, where we were retrieving the Get Credential object.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=128)** We still create in the configuration in the PowerShell session called Microsoft.Exchange, but our URL is a little bit different.
>
> **[2:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=136)** We're now connecting to ps.compliance.protection.outlook.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=140)** So we connect into the compliance components.
>
> **[2:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=143)** Once we have connected, we do the same import as we did before.
>
> **[2:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=147)** Now, the difference here is when we connect.
>
> **[2:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=150)** We don't connect using Exchange Online or anything like that, we use what's called connect-IPPSSession, which will specifically create a security and compliance connection, not a regular Exchange connection.
>
> **[2:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=167)** If we're using the version one module, once we've installed it, we can simply say, connect the session.
>
> **[2:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=173)** If I'm connecting to a government or a military security and compliance one, then you can see we have some different connection endpoints.
>
> **[3:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=182)** So we using the PS compliance one, you'll notice the difference in the URL.
>
> **[3:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=187)** This is connecting to one in Germany, so outlook.de, and then you've got the authorization endpoint.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=193)** So anything in the gov cloud is .us instead of it being .com.
>
> **[3:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=198)** Now, if we're using the version two module, we first need to install the module and then import the module, and then we get to use the same commandlet again, so Connect-IPPS session, and we can either pass it with the user principal name for modern authentication, or we can actually go ahead and pass a credential for backwards compatibility.
>
> **[3:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=220)** So the most important thing to note here is that it doesn't matter which approach we use.
>
> **[3:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=225)** It's the exact same commandlet for connecting.
>
> **[3:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=229)** So how do you know if it worked?
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=231)** Well, during the initial connection, you should see a progress bar that displays, and it will run through the list of commands that are being imported into the current session.
>
> **[4:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=240)** All the Security and Compliance PowerShell commands will then be injected into the current session.
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=246)** And of course, if you execute a command, such as Get-RoleGroup, it should return a value.
>
> **[4:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=253)** Now we can utilize the Microsoft Graph again, instead of using the Standard Security and Compliance PowerShell modules, we can do this by installing the module, importing the module.
>
> **[4:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=265)** And then once again, we set our scopes to what we'd need them to be.
>
> **[4:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=270)** So instead of being users, or mail, or teams, et cetera, we use security actions, policy, eDiscovery, et cetera.
>
> **[4:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-for-security-and-compliance?u=76281980&t=278)** Once these have been done and we pass the consent, then the PowerShell commands available for these categories will then execute as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** module (14), pass (3)
> **Tools:** powershell (13)
> **Code Identifiers:** macos (2), ediscovery (1)
> **Env Vars:** url (2), ipps (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** install (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Connecting to Microsoft 365 services
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=0)** - [Instructor] So, how do we connect to multiple Microsoft 365 services?
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=4)** Well, normally, Microsoft 365 administration involves multiple services.
>
> **[0:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=10)** You often start by managing a simple user account, but then you'll need to administer licensing, maybe SharePoint permissions, and then maybe Exchange permissions and mailboxes.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=21)** Now there is no single module that allows connection to all of the Microsoft 365 services.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=27)** And of course, you will need to create multiple connections to manage all of those different supporting services.
>
> **[0:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=34)** Now, there are three core steps for connecting to multiple services.
>
> **[0:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=37)** The first is to install and import the required PowerShell modules.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=42)** Next, we define any variables that are to be re-used through the process.
>
> **[0:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=47)** And then lastly, we actually connect to each of the services.
>
> **[0:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=51)** So firstly, we need to import the modules.
>
> **[0:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=54)** So if I was trying to connect to multiple services, I would import the module for Azure AD, Microsoft Online, Microsoft Online SharePoint PowerShell, Exchange Online and Microsoft Teams.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=66)** They would be the core set that I would import.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=69)** We then need to go through the process of installing those modules, once we have them imported.
>
> **[1:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=74)** Remember, once you import, that doesn't mean they are currently available in the same session.
>
> **[1:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=80)** Next we need to define any variables.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=82)** So as an example, it could be the organization, so this would be the tenant prefix, so if your tenant prefix was Contoso, then it would be Contoso in that variable.
>
> **[1:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=93)** Then of course, my admin user account, for this example, I'm going to be using a credential object, so I'm going to say username is this, and then my credential object is whatever I create with that username and password, so three re-usable variables.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=109)** What I then want to do is start connecting to the various applications.
>
> **[1:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=113)** So firstly, I'm going to connect to Azure Active Directory.
>
> **[1:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=116)** I'm going to pass my credential object, so connect to Azure AD with the credential object.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=122)** I'm then going to connect to SharePoint Online with the same credential object with my variable for the tenant domain.
>
> **[2:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=130)** I'm then going to connect to Exchange Online and pass the values, or I could pass the credential.
>
> **[2:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=135)** I'm going to then connect to Security and Compliance and I'm going to connect to Microsoft Teams.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connecting-to-microsoft-365-services?u=76281980&t=140)** So we can install the modules, import the modules, and then simply reuse those and connect to all of the services in one go, which means it takes a bit of time to connect, but it then means that we have access to all of the services from a single PowerShell session, which you cannot do within the admin interfaces without bouncing between the various browsers that you would have open for the admin centers.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), module (2), import. (1), import, (1), this, (1)
> **Tools:** powershell (3)
> **Prerequisites:** install (2), you'll need (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### The Microsoft PnP PowerShell commands
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=0)** - [Instructor] Now let's understand the Microsoft PnP PowerShell commands.
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=4)** So the first question is, what is PnP PowerShell?
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=7)** Well, PnP or patterns and practices is a cross-platform PowerShell module.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=13)** It provides over 500 commandlets that can work within your Microsoft 365 environment.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=20)** However, the commands are specifically focused on SharePoint Online, Microsoft Teams, Microsoft Planner and Microsoft Flow.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=29)** So you won't be using this module to do all of your administration.
>
> **[0:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=33)** Now, why would you use the PnP PowerShell modules?
>
> **[0:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=37)** Well, first off, it enhances the existing modules that are there.
>
> **[0:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=41)** It doesn't supersede any modules.
>
> **[0:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=43)** Instead, it offers enhancements and improvements.
>
> **[0:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=47)** The PnP PowerShell module is managed by Microsoft with support from the wider Microsoft community.
>
> **[0:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=53)** And it provides best practice approaches for managing PowerShell.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=59)** If I wish to use the PnP PowerShell, as before, we're going to install a module, and this is called PnP.PowerShell.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=67)** I can then import that module in.
>
> **[1:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=70)** And then we have to enable tenant access by using what's called Register-PnPManagementShellAccess.
>
> **[1:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=77)** And what this will do is force a consent so that the relative permissions, for example, like the Microsoft Graph ones that we've been looking at, are then set.
>
> **[1:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=87)** At that point, we can then say Connect PnPOnline.
>
> **[1:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=91)** And for example, I'm passing in a SharePoint URL.
>
> **[1:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=93)** And then I have a connection to it.
>
> **[1:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=96)** And then all of the PowerShell commandlets that are available in the PnP become available to us.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/the-microsoft-pnp-powershell-commands?u=76281980&t=102)** So the PnP PowerShell is a subset of commands that are helpful and can enhance the way that you would do your PowerShell management.

> [!info]- Semantic Content
>
> **Tools:** powershell (11)
> **Code Keywords:** module (5), let (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Managing SharePoint Online and OneDrive for Business

> [↑ Back to Table of Contents](#table-of-contents)

#### Connect to SharePoint Online and OneDrive for Business
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=0)** - In order for us to connect to SharePoint Online, and OneDrive for business, utilizing PowerShell we first need to import a specific module, or at least install the module and then import it into the current session, so we can actually make a connection out.
>
> **[0:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=15)** The first thing we have to do though, is check whether we actually have the module installed, and import it into our current session.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=21)** So, I can say Get-Module and you'll see this will return the list of modules that I have available to me in the current session.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=29)** So, clearly there's nothing that says SharePoint in the name, so that means the module isn't available to me.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=35)** To add the module, we first need to say Install-Module, we can pass a name to it at this point which will be Microsoft.Online.SharePoint.PowerShell.
>
> **[0:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=48)** Now, not every module is named as long as this one, but the SharePoint one is a little bit longer than the rest.
>
> **[0:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=55)** So, I'm going to say install module, this will then prompt me because it's going to try and connect to the PowerShell gallery, and then I can choose the yes option to install.
>
> **[1:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=65)** And what you should see is the blue bar suddenly flicks up, tells me it's installing, and then it should just install it and then complete.
>
> **[1:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=72)** Now, if we're looking at other types of PowerShell modules, some of these can take a while to install and download because of the size of the files.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=82)** Okay, so now we have installed the module.
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=84)** Let me go back to my Get-Module command and enter, you'll notice I don't get the SharePoint one, but I do get things like PowerShellGet, and I get some management and utility ones and package management, so some of these were there before, but now we've added to it because we ran the installer option.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=102)** Now, the first thing we have to do to utilize it is import that module directly into the session that we're in.
>
> **[1:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=111)** So, that's one of the keys about PowerShell is you have to include the modules in the session that you'll utilizing, otherwise the commands are not available, so let me just do this.
>
> **[2:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=121)** So, import the module, and of course it'll come back and complain and sometimes it does, and it will complain about that being unapproved verbs.
>
> **[2:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=129)** Now, if you remember how PowerShell works, it utilizes a verb noun scenario, so things like add, get, new, remove, et cetera.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=137)** There will be some commands that don't follow that model.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=140)** So, now that we have that I can say, Get-Module, and sure enough we should see that top one, Microsoft.Online.SharePoint.PowerShell, and then you'll see the exported commands.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=151)** Now, what I can do here is I can say, well, I want to get a module I could say by name.
>
> **[2:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=157)** So, let's do Microsoft.Online.SharePoint.PowerShell,
>
> **[2:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=166)** I could do this and it will return me the same information.
>
> **[2:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=169)** I could then do this and just say Select, expand the property which is called ExportedCommands, and just do enter.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=180)** And then sure enough what you'll see now is a list of all of the commands that are available to me now that the module is installed.
>
> **[3:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=188)** So, fairly straightforward so far.
>
> **[3:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=191)** Now, of course, once we have it installed, what we then need to do is to look at how to connect to SharePoint Online and OneDrive, and that's done by utilizing a couple of different approaches.
>
> **[3:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=203)** The first one is to actually utilize a credential object which is what we'll do, so we'll create a variable called user.
>
> **[3:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=212)** And what we'll do is put our office 365 user account directly in as the account we wish to utilize, so I'm going to paste that into here.
>
> **[3:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=221)** You'll notice two things about this.
>
> **[3:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=222)** The first thing is this is the admin account that I'm using, and you'll see it's got the prefix for the domain.
>
> **[3:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=228)** So, I'm going to create another variable here called tenant, and what I'll do is I'll just select this option and then I'll paste that into there, so that gives me the prefix of the domain for the tenant because when we utilize SharePoint Online, predominantly if we're doing administration functions, we connect him to the admin URL.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=248)** Now, the admin URL of a SharePoint admin center is normally the tenant-admin.[SharePoint.com](https://SharePoint.com).
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=255)** Whereas site collections will be tenant.[SharePoint.com](https://SharePoint.com)/ and then whatever the path might be afterwards.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=263)** So, we have a user and then we have a tenant that we wish to utilize.
>
> **[4:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=267)** Now, the command to utilize for this is called Get-SPOService, and the Connect-SPOService is the command that we utilize by passing in these various options.
>
> **[4:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=281)** So, the first thing I'm going to do here is I need to create some kind of connection, so I'm going to get rid of connect here.
>
> **[4:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=288)** The first thing I want to do is I wannna create a credential object because the connect one supports not only the standard passing in credentials, but also the browser as well.
>
> **[4:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=299)** So, let's start with the first one, so I'm going to say, Get-Credential, I'll say UserName, and then I'll pass my user, and then there's also a message box, and I'll just say Message.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=312)** Normally you would say something like, please type your username and password.
>
> **[5:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=316)** So, I'm going to press enter and you'll see it pre-populates my account.
>
> **[5:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=320)** I'm actually just going to copy my password here, and then paste it in and click okay.
>
> **[5:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=326)** Now, what did that create?
>
> **[5:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=327)** Well, if I click creds, you'll see it created a username and a SecureString, so a key value pair which is my credentials.
>
> **[5:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=335)** Once I have that now I can then utilize that as part of that other command for connecting.
>
> **[5:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=342)** So, if I go here and say, Connect-SPOService, you can see, I need to pass in a URL, so remember, we're going to use [https://$tenant](https://$tenant), which is my variable -admin.[sharepoint.com](https://sharepoint.com).
>
> **[5:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=357)** What I can then do is choose the credential object and say creds and press enter.
>
> **[6:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=365)** Now, you'll notice it doesn't return any values back, so how do you know whether it's connected?
>
> **[6:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=370)** Well, the easiest way is to just utilize an existing command, like Get-SPOSite, press enter and sure enough if it returns values from this list of site collections, then of course you are connected.
>
> **[6:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=383)** Now, we can also disconnect as well a specific session, so I can say Disconnect-SPOService if I just clear that, and then I go back to Get-SPOSite, you'll see that that's not going to work because I have no valid connection.
>
> **[6:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=401)** So, what happens if you're trying to connect and you have to go through either a third party authentication mechanism from Azure AD, or maybe multi-factor authentication 'cause that creds object doesn't function that way.
>
> **[6:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=413)** Now, what we can do here is we can go back to our list, get rid of the credential options and just simply pass in the URL.
>
> **[7:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=422)** Now, if I click enter here, now what's going to happen is it will launch a browser window that I can then enter credentials into.
>
> **[7:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=430)** There you can see that we've got that browser window available to me, so let me just copy my credentials, I'm going to paste these into here, so same thing again, we have the password and click sign in, same thing again.
>
> **[7:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=444)** How do we know if it's functioned, or let's do Get-SPOSite and sure enough it has to.
>
> **[7:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=449)** Now, of course it was the same process for me because I wasn't utilizing multi-factor authentication for that, but if I did the browser one would have supported that, whereas the other one would not.
>
> **[7:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/connect-to-sharepoint-online-and-onedrive-for-business?u=76281980&t=459)** So, that's how we install the module, import the module, and then make a connection to SharePoint Online and OneDrive for business.

> [!info]- Semantic Content
>
> **Code Keywords:** module (18), let (6), pass (4), this. (2), new, (1)
> **Tools:** powershell (8)
> **Prerequisites:** install (7)
> **URLs:** [sharepoint.com](https://sharepoint.com) (3), [https://$tenant](https://$tenant) (1)
> **Env Vars:** url (4)
> **Definitions:** is a  (2), is called (2)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (2)

#### How to create, update, and delete site collections
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=0)** - [Instructor] So now that we have a connection, the next thing we want to do is look at how we can manage site collections.
>
> **[0:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=6)** Now, if you think in the SharePoint world, we have the admin center itself, we then have site collections, which are the boundary of the sites, then we have sub sites, then we have lists and libraries and folders, et cetera.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=18)** So the first thing to manage predominantly will be site collections.
>
> **[0:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=22)** So, first off, let's have a look at how we get a list of the site collections.
>
> **[0:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=26)** And you can see we're going to use that same command that we used for testing, which was get SPO site.
>
> **[0:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=32)** And there's a property called detailed.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=35)** Now what we're also going to do is actually go in and say, format table, and then I'm going to auto size that table to make it fit.
>
> **[0:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=44)** So let's just press enter.
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=46)** Now, of course, what you'll see is it creates a table structure and it says URL and owner, and starts to break them all down.
>
> **[0:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=53)** But you can see that we get a list of all of the site collections and there's a whole bunch of them here.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=59)** Now, of course, you'll see that there's one that's called my that's the one drive for business one.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=63)** And then you'll see the rest of them are just regular site collections.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=67)** So the my is the parent one for one drive for business sites.
>
> **[1:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=73)** Now what's interesting is we don't really know if any of these site collections are connected to Microsoft Teams, for example.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=82)** So what we can do is when we connect, we can also do what's called a limit and we can say, I want to limit it to everything and then we get to utilize some where syntax.
>
> **[1:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=93)** So I want to identify site collections, for example, that are teams connected.
>
> **[1:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=99)** So we can say .IsTeamsConnected and I'll say, equals dollar true and then close that out.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=110)** So our statement is really straightforward.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=112)** It's going get me all of the SharePoint site collections with no limits whatsoever where the property is teams connected is equal to true.
>
> **[2:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=120)** And so I'll press enter here and you'll see that big list is now suddenly condensed down to just the site collections that have a team connected to it.
>
> **[2:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=131)** Now we could go a little bit further and say, well, maybe some of those site collections are connected to groups instead, so we can use the same syntax again.
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=141)** So get SPO site, I'm going to limit it to all of them again and then there's also a property called group ID defined, and I'm going to say true, and then press enter.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=154)** And you'll see this time around that list is a little bit bigger, which means that these are site collections that have been connected to an Office 365 group.
>
> **[2:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=164)** They are not necessarily the same as Microsoft Teams.
>
> **[2:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=166)** So when you're managing site collections, just be aware you may be having to identify, now can you do that in the admin interface?
>
> **[2:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=173)** Well, of course you can, you can kind of have a look at the template that's been used.
>
> **[2:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=176)** You can then look at whether it has what's called group owners or regular, but of course you can't necessarily identify which one of those have teams connected to them.
>
> **[3:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=186)** So hence we utilize the kind of the basic properties that are available.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=190)** Now, of course we have all of these site collections and we can retrieve individual ones if we needed to, we could say, get SPO site and then I can iterate through the various properties.
>
> **[3:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=201)** You can see there's a whole load of them here, but the most important one is obviously I can go through and get the identity, or I could just pass a URL to a specific one.
>
> **[3:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=210)** So if I say, get SPO site, let's say I want to use the operations one.
>
> **[3:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=215)** I'm going to copy that.
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=216)** Then I can go back to my get SPO site paste the URL, and then what it will do is it just brings back specific information.
>
> **[3:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=224)** If I needed to view more details about the one, then I can pipe it out and I could say select star, for example.
>
> **[3:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=233)** And then this will give me all of the properties that are available to that site collection.
>
> **[3:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=238)** So remember that when we retrieve an object in PowerShell, we can get more details by changing the select statement that comes at the end of it.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=248)** Okay.
>
> **[4:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=249)** Now, one of the most common tasks that we would do is obviously create specific site collections.
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=255)** So the first thing we'll do here is define an owner of the new site collection that I wish to create.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=262)** So I'm just going to use my standard admin account here, paste that in there, so that's owner, then I'm going to create a storage quota, which is going to be the size that I want to allow for that specific site.
>
> **[4:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=277)** I can then go in and say, I want to specify the URL of that site, whatever that URL is going to be.
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=285)** So that was my admin account.
>
> **[4:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=287)** So let me just go and get my HTTPS, I'll then copy my M365 remember it's not on Microsoft it's [sharepoint.com/sites/PowerShell](https://sharepoint.com/sites/PowerShell).
>
> **[5:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=303)** So we'll call it that, once I've got my URL, then of course I can get my template that I wish to utilize.
>
> **[5:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=310)** Now, of course, it's interesting and obviously important to understand what the team site templates are, what the names of the templates are, whether it's a team site, whether it's a teams channel, whether it's a group, whether it's something else.
>
> **[5:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=326)** So what you'll need to do is identify that list of what it would be.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=330)** I'm actually just going to go ahead and I will create a team site so we can use a basic one that isn't connected to a group.
>
> **[5:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=342)** So we'll use STS#3.
>
> **[5:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=344)** And then of course, I'm going to define a variable for the title of the site.
>
> **[5:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=349)** I'm going to call it PowerShell.
>
> **[5:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=351)** Okay.
>
> **[5:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=352)** So I've created my basic variables.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=354)** So the owner, the storage, the URL, the template I wish to use, and the title.
>
> **[6:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=360)** Now as with most things in PowerShell, it's going to follow a similar model.
>
> **[6:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=365)** So where was you were using get SPO, we're now going to say new SPO site.
>
> **[6:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=370)** And of course, it's going to say, well, who's the owner going to be?
>
> **[6:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=374)** And I'm going to say, well, I actually want to use my owner variable.
>
> **[6:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=377)** It's going to say, well, what's the storage quota?
>
> **[6:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=380)** I'm going to use my variable for that.
>
> **[6:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=382)** So storage quota is going to say, well, what's the property URL?
>
> **[6:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=385)** Dollar URL.
>
> **[6:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=387)** It will then say, what's the template that we wish to utilize?
>
> **[6:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=391)** I'm going to use my variable template.
>
> **[6:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=393)** I can then say the title.
>
> **[6:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=395)** And then I'm going to use that title.
>
> **[6:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=397)** And then I have a property which is always really powerful to use, which is called no wait, which means it just goes ahead and creates that site.
>
> **[6:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=404)** So I'm going to press enter.
>
> **[6:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=406)** It's going to go ahead and complete.
>
> **[6:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=408)** Now it reckons it's completed that straight away.
>
> **[6:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=411)** So how do we tell?
>
> **[6:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=412)** Well, let's do get SPO site and just drop the list down and we can scroll through the list of sites that have been created.
>
> **[7:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=420)** And if we just look here, we're looking for one called PowerShell and sure enough, there's the PowerShell site that's been created.
>
> **[7:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=427)** So it was really, really fast doing it in there using PowerShell.
>
> **[7:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=430)** And really because we utilize the no wait option as well.
>
> **[7:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=434)** Now, of course, what happens if we needed to change what that would be?
>
> **[7:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=438)** Maybe we want to update the title or maybe we want to change the owner, whatever that would be.
>
> **[7:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=443)** So what we can do here is create a variable called site.
>
> **[7:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=447)** I'm going to say, get SPO site and I'm going to pass that URL that we created.
>
> **[7:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=453)** If I just do dollar's site here, you can see, it gives me the details.
>
> **[7:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=457)** Remember if we do the pipe option and do select star, you'll see all the values.
>
> **[7:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=462)** And if we scroll up and down here, you can see we've got the URL, we've got the details.
>
> **[7:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=467)** Is it active?
>
> **[7:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=468)** And so my down here, there will be a display title.
>
> **[7:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=471)** So it'll say PowerShell.
>
> **[7:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=473)** So let's say we wanted to update that specific.
>
> **[7:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=476)** So we can say update SPO site.
>
> **[8:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=480)** Now notice what's happening here.
>
> **[8:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=482)** There's no update.
>
> **[8:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=483)** This is the key when we're looking at some of the verb nouns we often don't get an update, but what we always have is a set SPO site.
>
> **[8:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=495)** So just be aware, it's not as simple as well I'm going to update it.
>
> **[8:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=498)** You would think he could put update, but you actually have to use the word set.
>
> **[8:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=501)** So I'm going to say identity and I can use my variable here.
>
> **[8:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=507)** So I'm going to say the URL of that site, and then what I'm going to do a site title.
>
> **[8:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=513)** And instead of it saying PowerShell, I'm going to say PowerShell site and press enter.
>
> **[8:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=520)** So this is now going to go to that site.
>
> **[8:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=522)** So let me go back to my get SPO site here and look through the properties.
>
> **[8:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=529)** Now remember we can do the pipe and then select star, or if we already know the property, we can just do this and sure enough, the value of the site has now been updated to match what it was that we typed in the first place.
>
> **[9:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=544)** So fairly straightforward to create and to update.
>
> **[9:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=547)** If I needed to remove a site collection, I could do that by utilizing this member identity.
>
> **[9:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=554)** And I'm going to say site.Url and then of course I do have the no wait option.
>
> **[9:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=560)** So I could say remove, I'm going to say yes, and then this will go ahead.
>
> **[9:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=564)** And to confirm that it's been removed, I can say, get SPO site.
>
> **[9:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=568)** And if we scroll up, you'll see that that PowerShell one has now been removed.
>
> **[9:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-site-collections?u=76281980&t=572)** So it's really simple to create, update and delete site collections by utilizing standard PowerShell command lets.

> [!info]- Semantic Content
>
> **Env Vars:** spo (13), url (12), https (1), m365 (1), sts (1)
> **Code Keywords:** let (7), pass (2), interface (1), else. (1), delete (1)
> **Tools:** powershell (12)
> **Exercise Files:** template (5)
> **Definitions:** is a  (2), means that (1), is called (1)
> **UI Navigation:** scroll up (2), go to (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)

#### How to create, update, and delete sites
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=0)** - [Instructor] Now SubSites are the other sites or the smaller containers that reside inside a SharePoint site collection.
>
> **[0:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=8)** So imagine the SharePoint site collection is the parent container and then SubSites are smaller containers.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=13)** SubSites can have their own document libraries, their own lists, as well as permissions et cetera.
>
> **[0:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=19)** Now the downside is in the PowerShell modules, there's not really many commands outside of some of the PnP commands which we'll talk about later that can work with SubSites.
>
> **[0:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=31)** So what we have to do is look at creating specific functions as self.
>
> **[0:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=36)** Now what we're going to do is walk through the idea of creating a specific function.
>
> **[0:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=41)** So I'm going to create a new function called SubSite and I'm going to to require a WebURL and a credential.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=52)** So this is just standard PowerShell.
>
> **[0:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=53)** This isn't anything to do with Office 365.
>
> **[0:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=55)** This is just me creating a function because there's no functions that exist for retrieving SubSites.
>
> **[1:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=61)** Now what's important here, is it's utilizing what's called the CSOM.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=66)** So what we can actually do here is say New-Object.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=69)** And then what we're able to do is to create a object utilizing CSOM.
>
> **[1:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=75)** So you'll see we utilizing Microsoft SharePoint client context, with the URL that we pass into it.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=82)** What we can then do is pass credentials to that in a specific format, which is going to be a SharePoint online set of credentials.
>
> **[1:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=92)** So you can see I've got my context variable, I'm passing credentials, and then you'll see I'm using the username and password, which is sent from this object here.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=102)** Okay that's our first piece.
>
> **[1:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=103)** We actually have to create some kind of connection because we don't have a straight PowerShell command, we actually have to construct it ourselves.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=110)** What I'm then going to do is create a variable called Web, and I'm going to use the current context of the connection, which is going to be whatever the URL is.
>
> **[1:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=119)** And I'm going to say go and get the current web.
>
> **[2:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=121)** Now the web in PowerShell command lets in SharePoint, or at least in CSOM is a SubSite.
>
> **[2:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=127)** Now because we using CSOM nothing is available to us until we actually load the object.
>
> **[2:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=135)** So I'm going to say well actually I want you to go and now load into the current context, that specific web, what I can then do is then say context dot and of course I have to execute the query now.
>
> **[2:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=149)** So you notice it's a little different than using a standard PowerShell command, but what's nice about trying to write CSOM is that you get to understand what the existing PowerShell commands are already doing.
>
> **[2:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=160)** So I'm now going to execute that query.
>
> **[2:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=162)** And then from the function, I just want to return a web object and then I'm going to close that function out.
>
> **[2:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=169)** So now I have the function written, so let's just review.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=172)** I created a new function that requires a URL and a credential.
>
> **[2:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=176)** It's then going to create a context for the specific URL by passing in the credentials, then it will go and grab the web object, load it into here, execute the query, and then return it to me.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=190)** So what I should be able to do now, is say web equals get SPO and you'll see now my SubSite function is available.
>
> **[3:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=199)** And when I look through the properties it'll say WebURL.
>
> **[3:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=202)** So there's our first one.
>
> **[3:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=203)** So I need to have a specific URL and then I can then pass in a credentials object subject.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=211)** So the first thing we have to do is obviously get at WebURL.
>
> **[3:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=215)** So let me do get SPOSite just so I can choose a specific site we want to use.
>
> **[3:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=221)** So I'm going to say let me do global sales here.
>
> **[3:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=225)** So I'm going to use that one.
>
> **[3:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=227)** So let me just create a SiteURL variable so I can use this going forward, pasting global sales.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=236)** Okay, so now dollar web equals, and I'm going to say get SPOSubSite.
>
> **[4:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=245)** My WebURL is going to be SiteURL variable.
>
> **[4:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=250)** So I'm using the global sales site collection, which means it's going to look inside that site collection for any SubSites.
>
> **[4:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=256)** And then from a credential perspective, I already have a creds object.
>
> **[4:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=261)** I'm going to press Enter.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=263)** So this is now going to go and connect, and did it return anything?
>
> **[4:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=267)** Well let's go to web and show enough it did return.
>
> **[4:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=270)** It returned the global sales route site, which has returned me the web or the list the SubSite that makes up the site collection.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=280)** So think about the logic here when you spin up a site collection you get an entry point, you then provision a site into the site collection, which effectively is the same as a SubSite except it's the root level.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=291)** So now I have a web object I can then go through and pass a URL to any of those if I needed to.
>
> **[4:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=297)** And it would return me the details of that specific web.
>
> **[5:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=302)** Now the good thing is it means I can then pass a URL to a specific one.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=307)** If my SiteURL had a SubSite called project one underneath global sales, then I could pass that as the URL and it would retrieve information.
>
> **[5:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=316)** Whereas the existing command let's get SPOSite only retrieve the value at the global sales level.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=323)** So that's great.
>
> **[5:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=324)** So we were able to kind of do that.
>
> **[5:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=326)** Now what about if I wanted to create a specific SubSite in that too?
>
> **[5:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=331)** Now of course we have to go back to the same idea again, of passing a specific value.
>
> **[5:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=338)** So I'm going to go ahead and copy some information here into the window to create a specific function.
>
> **[5:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=345)** Now it's going to ask me to paste, which is okay so this is my full function.
>
> **[5:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=350)** So new SPOSubSite same thing again I'm creating it using CSOM.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=354)** It's going to ask me for a SiteURL.
>
> **[5:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=357)** It's going to ask me for the SubSiteURL.
>
> **[5:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=359)** So what I want to call it underneath, it's going to ask me for credentials.
>
> **[6:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=362)** It's going to create the same context as before, but then we're going to create this web client object, where we're going to start creating information for a web.
>
> **[6:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=373)** And then you can see we're going to specify the template like we did with the site collection, choose whether to inherit permissions, the title we want to call it, what the URL is going to be.
>
> **[6:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=382)** Add the language so 1033 is standard for here, at least in the US for English.
>
> **[6:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=387)** And then of course I'm going to say, go to the current context to the web that I'm in and then add this new web and then execute.
>
> **[6:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=395)** So that gives me my new function.
>
> **[6:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=397)** So you can see if I do New-SPOSubSite, I can loop through the various properties.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=403)** So that means my functions now available.
>
> **[6:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=405)** So what do we need to create?
>
> **[6:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=407)** Well the first thing we have to create is a series of variables that we wish to pass to it.
>
> **[6:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=412)** So the first thing is we have the SiteURL, so I don't need to worry about that.
>
> **[6:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=417)** But what I'm going to do here is say SubSiteURL.
>
> **[7:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=421)** And then I want to choose what that SubSiteURL is going to actually look like.
>
> **[7:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=427)** Like what's the value that needs to go in there.
>
> **[7:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=430)** Now if we go back over here and get rid of our values that we just typed, if we just go to SiteURL, you can say that I've got this URL right here.
>
> **[7:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=441)** So let me just copy this.
>
> **[7:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=444)** So let's create my new variable.
>
> **[7:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=446)** So SubSiteURL and then I'm going to paste the URL and then I'm going to call it PowerShell.
>
> **[7:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=453)** Okay so we have a URL and we'll come back and visit this in a second.
>
> **[7:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=458)** So we have that.
>
> **[7:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=459)** So now what I can do is say New-SPOSubSite, it's then going to say well what's the first property, which is going to be my SiteURL.
>
> **[7:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=470)** So I'm going to say SiteURL which is global sales.
>
> **[7:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=474)** I can then say SubSiteURL which is SubSiteURL.
>
> **[8:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=480)** And then of course from a credentials perspective, we're just using the creds object.
>
> **[8:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=487)** Like so and now I'm going to press Enter.
>
> **[8:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=489)** Now of course what happened here?
>
> **[8:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=490)** well it says there was an exception calling something, it can't add something, and that's because the SubSiteURL value is really just the name that we want it to be called.
>
> **[8:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=502)** So I'm going to come all the way back here.
>
> **[8:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=504)** I'm going to get rid of all of this here, repopulate my SubSiteURL, and then rerun that and sure enough it now goes ahead and tries to create it.
>
> **[8:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=514)** So when it's asking for a URL for creating, it's not actually creating, ignore the push notifications feature.
>
> **[8:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=522)** That's okay but you'll see that the site itself.
>
> **[8:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=525)** So if I say Get-SPOSite, so let's go back and look through our list here.
>
> **[8:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=533)** You can see if we scroll through some way in here should be a PowerShell one.
>
> **[8:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=538)** Remember did it create the PowerShell one?
>
> **[9:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=540)** Or no it created it in the global sales, but we don't see that PowerShell one anywhere.
>
> **[9:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=546)** We just see the root level.
>
> **[9:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=548)** So we go back to our first command that we created web Get-SPOSubSite WebURL So let me go and get my global sales paste it here.
>
> **[9:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=566)** Remember our first one what's it expecting?
>
> **[9:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=568)** It's expecting the URL now I know I created it called PowerShell, and then I'm going to say credentials, dollar creds and press Enter.
>
> **[9:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=578)** And if I may say web, you can see it's now returned that specific URL because the SPO one doesn't do it.
>
> **[9:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=586)** So it's as simple as that.
>
> **[9:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=587)** We actually have to create our own functions to be able to make adjustments and changes to SubSites themselves.
>
> **[9:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=596)** The same goes for updating as well as removing as well.
>
> **[10:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=600)** Now of course if I wanted to create an update function, I'm going to go ahead and copy again and then paste into this window here.
>
> **[10:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=608)** So let me just paste like so the function this time is called Update-SPOSubSite.
>
> **[10:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=614)** It's going to ask for the URL, the credentials, and in this instance I want it to update the title and the description.
>
> **[10:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=620)** So let me just press Enter here.
>
> **[10:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=622)** So this way around I can say Update-SPOSubSite.
>
> **[10:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=628)** The WebURL is going to be the WebURL that we just utilized.
>
> **[10:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=633)** Now of course we can go into here and say SiteURL, and then I could say PowerShell.
>
> **[10:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=643)** So I can say like so, so we could actually do this because the SiteURL, isn't going to be that full path.
>
> **[10:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=652)** It's just going to be the path up to there.
>
> **[10:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=654)** So I've got my WebURL .
>
> **[10:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=655)** And then of course it's going to ask for the credentials object.
>
> **[10:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=658)** So dollar creds and then it's going to say well what do you want to call as the title?
>
> **[11:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=663)** I'm going to say PowerShell SubSite.
>
> **[11:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=667)** And then of course I'm asking it to update the description, PowerShell SubSite, and then I can go ahead and update that site.
>
> **[11:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=676)** So if I go back to my previous one where it says get the web object, like so, and then do dollar web, we get all of those values.
>
> **[11:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=686)** If I scroll through the properties here, then you'll see that my title here says PowerShell, and there should be description around here somewhere that will then be updated because remember when we update items in SharePoint we actually have to wait for the updates to be applied.
>
> **[11:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=705)** So they don't always appear immediately.
>
> **[11:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=708)** You actually have to wait for those values to be returned back to you.
>
> **[11:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=712)** But the update is the same as the create and the delete.
>
> **[11:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=717)** Now talking about delete, how would we remove sets of SubSites?
>
> **[12:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=721)** Well we can do that simply by creating another function.
>
> **[12:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=724)** So I can go into functions here.
>
> **[12:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=726)** I'm going to copy it and drag it into this window here.
>
> **[12:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=728)** So let me just choose clear and then paste.
>
> **[12:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=732)** This function is a little bit similar.
>
> **[12:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=734)** It's called Remove-SPOSubSite.
>
> **[12:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=736)** It requires the WebURL and the credentials.
>
> **[12:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=739)** And then what it will do is it loads into the current context.
>
> **[12:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=743)** Loads the web object, gets all of the SubSites folder and then iterates all of those SubSites and then deletes the objects that are there.
>
> **[12:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-sites?u=76281980&t=752)** So for example in our global sales, when executing this it would remove the PowerShell one that I already created.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (13), pass (7), delete (2), self (1)
> **Env Vars:** url (16), csom (6), spo (2)
> **Tools:** powershell (16)
> **Definitions:** is a  (3), is called (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (3)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)

#### How to create, update, and delete lists and libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=0)** - Now, when working with the site collections and the subsites, one of the areas of focus will often be lists and libraries.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=7)** And of course, as with some of the features that we've seen so far in the out-of-the-box capabilities, you don't get the commands that are required to manage specific things like lists and libraries.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=21)** So what we can do here is we can repeat the same process we just went through by creating a specific function.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=27)** So I'm actually just going to paste in here, the code for one of the functions which is called "Get-SPOList".
>
> **[0:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=34)** So this is utilizing the CSOM objects, again.
>
> **[0:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=38)** Now, obviously as before, it's going to require a web URL and a credential object and then it will connect to the object or the URL that we specify and effectively retrieve the lists and load them for me.
>
> **[0:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=51)** So, if we look into our web object from before, we still have our URL which is the "Global Sales" and the PowerShell subsite.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=59)** So, what we can do here is say lists and then we can use a new function.
>
> **[1:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=65)** So "Get-SPOLists," I can say web URL, which is what I'm tryna get to, which is going to be the current web and then I'll say, "URL" and then the credentials object, which will be my creds one and I'm going to press enter.
>
> **[1:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=81)** So this is now connecting to the URL, which is as subsite of PowerShell.
>
> **[1:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=87)** So if I do lists here, you're going to see this long one.
>
> **[1:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=90)** So I'm going to say, "Format table."
>
> **[1:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=93)** So it should go that way.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=94)** And you'll see, we've got some values that are being pulled out here.
>
> **[1:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=98)** So I'll tell you what we'll do, the downside to some of the formatting is that you don't always get to see what's going on.
>
> **[1:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=104)** So I'm going to say, "Select title."
>
> **[1:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=107)** So we can just see that.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=109)** And so it lists the libraries inside that subsite, which is the default.
>
> **[1:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=113)** So pages, assets, page gallery, documents and composed looks.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=118)** So that shows me that it's connected to the specific option and you can see that we're utilizing a variable and then piping out the values to how we want them to get.
>
> **[2:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=127)** Now of course, that's great, we can just retrieve them.
>
> **[2:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=129)** We can also create functions to retrieve items if we need to as well.
>
> **[2:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=133)** But what about if we want to create specific libraries and lists as part of, you know, provisioning type processes.
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=141)** So, I'm going to come back and copy another piece here.
>
> **[2:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=145)** This will be another function called "New-SPOList" and what we'll do is we'll paste it here and you'll see it's very similar to the previous one which was the Get-Command but this time around, we're creating new list creation information, we're giving it a title, the template to use and then we're going to add it and then we're going to set the list description, and then we're going to update.
>
> **[2:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=165)** So, fairly painless but in order for it to work, we obviously have to set a few variables.
>
> **[2:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=171)** So, the first thing obviously is the URL which we already have, but then we need to specify a list name.
>
> **[2:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=178)** So let's call this PowerShell as well.
>
> **[3:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=181)** What we'll then do is we'll set the list description that we want to do so I can say, "List created using PowerShell."
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=193)** And then of course, I've got my list template that I wish to create.
>
> **[3:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=201)** So, we can obviously choose the template that we want to utilize.
>
> **[3:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=206)** Now, the list templates themselves, they have unique identifiers as well.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=211)** So, we can specify and say, "I want it to be a custom list or I want it to be, you know, a custom one that I created or use one of the existing list template IDs that might exist already."
>
> **[3:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=226)** So, we need to specify what that is going to be.
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=231)** Now, those are normally specified as numbers or like the team site templates where you're able to use like STS#0 or something else, you can specify those as a specific value.
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=246)** So, let's choose a specific one that we want to utilize.
>
> **[4:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=251)** So, let's create a calendar.
>
> **[4:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=253)** So, a calendar is actually has an ID of 106 so we'll utilize that.
>
> **[4:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=258)** There are lists available online to give you those numbers.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=262)** Okay, so we have our list name, our list description and then we also have a template.
>
> **[4:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=267)** I'm actually going to update the list description to get rid of the capital I here.
>
> **[4:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=271)** And there we go.
>
> **[4:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=273)** And then what I'll do is I'm going to say, "New-SPOList."
>
> **[4:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=277)** Now, what's it going to ask us for?
>
> **[4:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=279)** Well, the web URL.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=280)** So I'm going to say, "Web.URL."
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=285)** It's going to ask me for the name which I'm going to use as my list name.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=291)** It's going to ask me for a description which is going to be my list description.
>
> **[4:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=297)** It will then ask me for the template which is my unique template for the list.
>
> **[5:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=304)** So list template, like so.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=307)** And then our last one is obviously going to be credentials.
>
> **[5:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=311)** So dollar creds.
>
> **[5:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=313)** So, what this will do now is connect to that site and provision a specific list.
>
> **[5:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=319)** Now, how do we know it's been created?
>
> **[5:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=320)** Well, we could browse to the user interface or we could just go back through our previous commands here and I'm going to say, "Get SPOLists" from that site.
>
> **[5:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=331)** I'm going to say, "Lists, select title."
>
> **[5:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=335)** And sure enough, you can see that there's one now called PowerShell that's been created which is now the template based on the template that we chose.
>
> **[5:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=342)** So really, really straightforward to be able to create a specific SharePoint list and you might wonder, "Well, why do we need to go to the hassle of that?"
>
> **[5:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=350)** Well, think of a provisioning process that we're going through and building site collections, then we're building subsites, then we want to provision specific sites with lists and libraries that are specific to that one.
>
> **[6:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=362)** Now, of course, it's great that we can go ahead and create those, but what about creating items that would exist within the specific list itself or being able to retrieve items that exist within a specific list or setting permissions?
>
> **[6:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=377)** Those are options that we have available to us as well.
>
> **[6:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=380)** And we can also add columns to the specific lists as well.
>
> **[6:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=383)** Now there are various things that we can do, obviously, as you just mentioned, what about if you wanted to just remove a specific list or we can use CSOM again, so I can come into here and I'm going to paste a new function and the function here is "Remove SPO List Item" for example.
>
> **[6:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=400)** So, let's say the list has items in them.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=403)** I can then go through and retrieve those list items and then remove them or I could add new list items.
>
> **[6:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=410)** So I'm going to save this and then what we'll do is actually go to the list and just add a couple of items to that list.
>
> **[6:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=416)** So, here we are in the list and obviously what we can do is we can view the items that are here.
>
> **[7:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=424)** So I can say, "Events" and you can view calendar view, et cetera.
>
> **[7:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=427)** I could just say, "New event," click event, this will pop the window up here.
>
> **[7:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=431)** I'm going to call it test one and we'll call it test one.
>
> **[7:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=436)** We'll leave it as it is then we'll just click save.
>
> **[7:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=438)** So there's my test and I'll do another one.
>
> **[7:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=442)** We'll just call it test two, test two.
>
> **[7:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=446)** And let's say we just change that to a different time and click save.
>
> **[7:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=450)** Okay, so we have two items in the list.
>
> **[7:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=453)** What we can now do is we treat those values utilizing PowerShell.
>
> **[7:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=457)** So, let's go back to the PowerShell window.
>
> **[7:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=460)** So, you're back in the PowerShell.
>
> **[7:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=461)** So let me just clear the screen so we have some space.
>
> **[7:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=464)** And what we can then do is actually look at how we would remove those SPOListItems.
>
> **[7:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=472)** Now, of course, we created the function ready.
>
> **[7:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=474)** So the web URL is "$web.URL".
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=479)** The name that we're trying to get is the list name.
>
> **[8:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=483)** So I'm going to say, "$list name," 'cause we already have a list name.
>
> **[8:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=487)** And then of course we have credentials and I'll pass in my creds object.
>
> **[8:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=492)** And we press enter.
>
> **[8:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=493)** Now what this will do is go ahead and connect it to the list and remove the list items that are in that specific list.
>
> **[8:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=502)** So, let's go back to the browser and just check it.
>
> **[8:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=505)** So we're back here, let me just refresh and you'll see those items have now been removed automatically.
>
> **[8:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-lists-and-libraries?u=76281980&t=511)** So, not only can we create lists and libraries, we can also add to them, we can also remove from them as well as actually removing the specific libraries and lists themselves.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), require (1), default. (1), else, (1)
> **Env Vars:** url (11), csom (2), sts (1), spo (1)
> **Exercise Files:** template (10)
> **Tools:** powershell (8)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Analogies:** similar to (1), for example (1)
> **Definitions:** is called (1)

#### How to manage users and groups within SharePoint Online
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=0)** - [Instructor] Now, one of the other areas of focus within SharePoint Online and OneDrive for Business for that, is management of users and groups.
>
> **[0:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=8)** Now the nice thing is that the functions that we need are available to us here.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=13)** So if I just double-check what my URL is going to be, that's going to be my PowerShell site.
>
> **[0:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=17)** What I'm actually going to do is just update that to be the global sales one so we should be able to use site URL.
>
> **[0:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=25)** So we'll use that one instead.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=27)** What we can do here is we can use a standard function that's available to us called Get-SPOUser, which is going to retrieve a specific user or users.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=39)** And what I can do is pass a site URL.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=42)** So I'm going to say site URL and what you'll see is it gives me the list of all of the users that belong to that specific site.
>
> **[0:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=50)** You'll also see some of the groups potentially that will be here.
>
> **[0:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=54)** And normally some of the system ones like in the Microsoft tenants, we use a provisioning user, but you can see that listed here as well as the two groups that are there by default called everyone and then everyone except external users.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=66)** So I can retrieve kind of a list of the users, et cetera.
>
> **[1:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=72)** Now, what it can do is retrieve a report of information.
>
> **[1:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=77)** So that is one thing that's really, really important is the ability for you to run a report that will basically say, I want a list of who's an admin, who's not an admin, et cetera.
>
> **[1:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=90)** So we can use what's called the Get-SPOUser on one again.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=94)** I'm going to pass in the site for the specific site that I want to use, 'cause of course you may want to run this report on a parse like collection basis.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=102)** So I'm going to say site URL and then I'm going to pipe that value out and say select object and then I want to get the login name.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=112)** There's a property called is site admin, any groups that they might belong to and then the user type for the user.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=122)** And then to make it all look pretty, I'm going to format it as a table, I'm going to wrap all of the columns and I'm going to auto size it, so I'm going to press enter here.
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=132)** Now 'cause it doesn't look that great really here, just purely based on the fact that you're in a small window.
>
> **[2:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=138)** But you could export that into HTML or you could put it as a CSV, whatever it would be.
>
> **[2:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=143)** But what we can see here, is we can see the list of the user, so the login, if they are a site admin.
>
> **[2:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=149)** So most of these are going to be false.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=151)** You'll see me though and there's admin.
>
> **[2:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=153)** And then you'll see the groups that I might belong to.
>
> **[2:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=155)** So global sales members, global sales owners.
>
> **[2:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=158)** So remember in SharePoint it creates those standard security groups that are available.
>
> **[2:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=163)** So owners, members, contributors, viewers, et cetera.
>
> **[2:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=167)** So when we're managing permissions, we can obviously add users to specific groups if we needed to.
>
> **[2:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=175)** So let's take a quick look here.
>
> **[2:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=176)** So you can see we've got most of these are not admins and they're just members of global sales, global sales owners, we've got people that are not members.
>
> **[3:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=185)** You know, we've got users that are just in here with the standard permissions.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=190)** And then you've got me, who's there as an admin.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=193)** So let's have a look at my account.
>
> **[3:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=195)** So my admin account here is a member of global sales members and global sales owners.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=200)** Now what about if I wanted to add an account into that that wasn't a member of that specific one.
>
> **[3:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=208)** Let's say wanting to add, you know, Dave, let's say, as a member of a specific owner, or I wanted to remove a specific user or I needed to add new users.
>
> **[3:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=221)** Then of course what we can do is start to make adjustments utilizing PowerShell because the functions do exist.
>
> **[3:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=230)** So first off, let's just clear the screen.
>
> **[3:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=232)** And what we'll do is we'll just take a copy of this account here and then I'll clear everything.
>
> **[3:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=239)** What I can do here is, I can say add SPOUser, which is there.
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=246)** It's going to ask me for a specific site, so I'm going to say site URL.
>
> **[4:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=252)** I can then say login name, which is the specific user that we wish to utilize.
>
> **[4:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=258)** So I'm just going to put it in quotes here because I just copied the actual name itself.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=263)** And then I get to specify what the group would be.
>
> **[4:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=267)** Now in SharePoint obviously, the groups are called by the name of the specific site collection that you might be in.
>
> **[4:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=277)** So from a permissions perspective, what you end up with, you get site owners, site visitors, you get a whole mix of different ones that are there.
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=285)** So what we can do, is we can take a copy of one of the group names that would be existing.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=291)** So one of the ones that we didn't see listed in the sites is called global sales visitors.
>
> **[4:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=298)** So we have the global sales owners and the global sales members, but not visitors.
>
> **[5:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=302)** So I'm going to go into here and I can say add the user to that specific group.
>
> **[5:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=306)** Okay.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=307)** So, we just add that.
>
> **[5:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=309)** So now let's just loop back through the previous commands and I'm going to say get SPOUser.
>
> **[5:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=315)** And then if we now look at Pradeep's account here, sure enough, he's got global sales visitor added to his list.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=323)** So we can add or remove as needed moving those users in and out.
>
> **[5:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=329)** Now, of course I can remove them from the group.
>
> **[5:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=332)** So if we choose the opposite way, so I'm actually just going to say and tell you what let's go here.
>
> **[5:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=339)** And the add command, what we'll do is we'll say remove SPOUser instead, 'cause that one exists.
>
> **[5:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=350)** The site option is going to be the site URL.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=354)** The login name is going to be that Pradeep option.
>
> **[5:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=359)** Let me get Pradeep's email address so we can actually go through and put that in there 'cause I haven't created a user object.
>
> **[6:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=367)** So, I obviously need to go through and just copy his email address so I know what to do.
>
> **[6:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=373)** So let me just copy the address and paste it in here.
>
> **[6:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=376)** So I'm going to copy his address, login name, Pradeep.
>
> **[6:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=379)** And then for the group option, we obviously need to go through and put that other group that we just had in there, which was the global visitors, the global sales visitors role.
>
> **[6:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=392)** So let me quotes and paste that into there and then enter.
>
> **[6:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=397)** Okay, so we did that.
>
> **[6:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=398)** Now let's go back and run that Get-SPOUser.
>
> **[6:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=401)** Go back to Pradeep and sure enough, I've now been removed or Pradeep's been removed from that role.
>
> **[6:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=406)** So we can add or remove users very comfortably.
>
> **[6:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=410)** The last thing we can do is we can also convert people into being site collection administrators.
>
> **[6:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=416)** So I can say set SPOUser.
>
> **[6:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=418)** Remember we talked about set commands.
>
> **[7:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=421)** We've then got the site options, so site URL.
>
> **[7:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=424)** I can then say login name.
>
> **[7:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=427)** And of course it's going to be that Pradeep account that we wish to utilize.
>
> **[7:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=432)** So I can go in and just copy his email address again.
>
> **[7:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=436)** So let me do that here.
>
> **[7:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=438)** And copy and then I'll paste it into here, Pradeep.
>
> **[7:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=442)** And then at this point, what we can then do is say is site collection admin, and then I can say true.
>
> **[7:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=452)** So let me set him.
>
> **[7:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=454)** Now of course, what actually happened, we don't see the values here.
>
> **[7:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=457)** So let's go back to my get SPO and this time you'll see that Pradeep's value for this column, which if we scroll all the way back up, is the site collection admin one.
>
> **[7:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=467)** So we can very quickly create or update an account to be a site collection admin or remove them as needed.
>
> **[7:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=474)** So if we were to clear that for example and run that same command and this time say false, and then go back to the get command, you'll see he's now been removed.
>
> **[8:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-users-and-groups-within-sharepoint-online?u=76281980&t=485)** So managing permissions, adding users to the existing groups or even creating groups is really straightforward using the out of the box (indistinct).

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (2), function (1)
> **Env Vars:** url (8), html (1), csv (1), spo (1)
> **Cross-References:** go back to (3), we talked about (1)
> **CLI Commands:** make (2)
> **Tools:** powershell (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### How to manage OneDrive for Business using PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=0)** - [Speaker] Now so far, we've focused on just connecting to SharePoint online, and not really touched on OneDrive for business.
>
> **[0:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=6)** And that's because OneDrive for business sites, are really just part of SharePoint online.
>
> **[0:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=11)** Now in order for us to actually see the actual personal sites, we actually need to do something a little bit different.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=18)** So we're going to use Get SPO Sites, and then we have an option called Include Personal Site, which we set to true, which is a flag.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=27)** And I can press Enter.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=29)** Now of course what this will do, is go to the current SharePoint online site, go and look for all of the site collections, retrieve the list of site collections, and this time we'll include any of the personal sites that are created.
>
> **[0:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=44)** And you can see that suddenly a whole bunch of them.
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=46)** So if we go back up here, you can see intermingled with them is my.sharepoint, and then personal, and then the name of the individual email address or the user.
>
> **[0:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=57)** So OneDrive sites are really just SharePoint site collections, just under a specific place.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=63)** Now of course, it's really hard to view the set of just the personal ones.
>
> **[1:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=68)** So we can actually tweak this a little bit here.
>
> **[1:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=71)** We can say, get SPO site, I'm going to limit it to all.
>
> **[1:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=77)** I'm going to include the personal one and make sure that's set to true.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=82)** And then what we can do is use what's called filter.
>
> **[1:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=85)** So in the filter option, we can write almost like sequel type queries to identify what it is we're looking for.
>
> **[1:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=92)** So you can see I'm doing where URL is like my [sharepoint.com/personal](https://sharepoint.com/personal)/ like so.
>
> **[1:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=107)** So, we're basically saying filter out the list to show me just my ones.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=112)** So I'm going to press Enter, and sure enough it takes -[mysharepoint.com/personal](https://mysharepoint.com/personal) and just shows those.
>
> **[1:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=119)** So these are my OneDrive for business sites.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=122)** They are manageable in the same way as they would be if they were just a regular SharePoint site collection.
>
> **[2:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=130)** And if I wanted to retrieve a specific user, then of course I would need to know this whole format.
>
> **[2:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=135)** Because if you notice here, the email address is not an email address.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=140)** They've replaced various characters with other values.
>
> **[2:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=144)** So I'm going to do clear here for a second, and what we're going to do is create a new variable, I'm going to call it login.
>
> **[2:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=153)** It will be similar to the user one, but we'll just want to create something different.
>
> **[2:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=156)** And I'm going to put my admin one right here.
>
> **[2:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=159)** Now in order for me to make it fit in the way that I want to, I'm going to say updated login is the variable name.
>
> **[2:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=168)** And what I'm going to do is say login.replace, because I need to replace some specific parameters.
>
> **[2:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=176)** So whenever we have an @ sign, it gets replaced with, you see, an underscore in that specific one, and then I'm going to do another replace and we'll do this, and this time I'm going to replace the period with the same syntax.
>
> **[3:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=194)** So this should be, look at the login, and what should happen is the @ and the dot and the dot, should get replaced with underscores to give us that format that we were looking for.
>
> **[3:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=205)** So I'm going to press Enter, and then I can say updated login, and you'll see, shouldn't it look like the format of the URLs that we were looking at previously.
>
> **[3:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=214)** Whereas if you just double check that and go back to SPO, you can see it should be admin, underscore, tenant, underscore, on Microsoft, underscore.
>
> **[3:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=224)** So we can double check to make sure, and sure enough we have the right format name.
>
> **[3:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=229)** So that's just formatting the values.
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=231)** What I can then do is use the same Get SPO Site.
>
> **[3:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=235)** I'm going to say, I want to get a specific single one.
>
> **[4:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=242)** I can say SPO site limit to all of them.
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=246)** If we don't include the all, then some of them don't come back because it's all about paging values.
>
> **[4:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=251)** I can then say, well I have to include the personal sites.
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=255)** Otherwise I can't even query them.
>
> **[4:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=257)** And then my filter is going to change a little bit, like we did before URL dash like, and then we can say, -my.[sharepoint.com/personal](https://sharepoint.com/personal)/
>
> **[4:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=275)** and then you can see my updated login property.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=280)** So that should give us a format that we're looking for now.
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=285)** So let me enter that, and sure enough, it comes back with a single option, but no values.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=291)** So let's just pipe the value out and say select.star and Enter, and then we'll get all of the values for this specific site collection which is the my site or the OneDrive for business site.
>
> **[5:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=305)** So you can see all the properties and values.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=307)** And just like any other site collection.
>
> **[5:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=310)** We have everything from what it's connected to, storage quotas, who the owner would be, etc.
>
> **[5:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=316)** So there's lots of properties that we can update as we kind of go through all the information.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=323)** So of course what we can do, is we can retrieve things like the story.
>
> **[5:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=328)** So instead of me doing select star, I could say, well actually I want to see the URL, I also want to say the storage usage current, and who the owner is.
>
> **[5:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=341)** So we get to populate the various fields with the values.
>
> **[5:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=345)** And if they have values, then they will return those values to us.
>
> **[5:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=350)** And one of the things that you often do as part of managing them, is you often want to add a site collection.
>
> **[5:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=356)** Because of course, if you are the admin, you can't manage another persons OneDrive for business site, because you are not the owner.
>
> **[6:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=364)** So normally as an administrator, it often becomes your job to go through and somehow get added to the list of sites that are all there.
>
> **[6:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=374)** So what we're going to do is actually create a new variable, I'm going to call it sites, get SPO site.
>
> **[6:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=381)** I'm going to set the limit as we did before too all.
>
> **[6:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=384)** And I'm going to include all the personal sites because we need to query those.
>
> **[6:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=389)** And then I'm going to put that filter back on, to just say everything that's URL like, and then I'll do the -my.[sharepoint.com/personal](https://sharepoint.com/personal)/ okay?
>
> **[6:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=405)** So this should give us the full list of the personal sites.
>
> **[6:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=408)** So I'll just press Enter.
>
> **[6:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=409)** We'll just make sure that's got values, sure enough it does.
>
> **[6:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=412)** Okay?
>
> **[6:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=414)** What we then want to do is we want to loop each of these, and make an adjustment to basically say, I would like my account as the admin to be a site collection administrator for each of those.
>
> **[7:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=428)** Now luckily as with most things, we can use standard capabilities for that.
>
> **[7:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=434)** So we can say set SPO user, which we've used before, remember to create a site collection admin or add to a group, this time when we use the site URL, we can say site.url, which is going to be this object, which is going to be the one that we're looping down through the sites object.
>
> **[7:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=453)** So I can say site URL, I can say login name, and I'm going to say user, because that my admin account, and then we can use the same syntax we had before, so Is Site Collection Admin is true, and then I'm going to close that out.
>
> **[7:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=470)** Now sure enough it's going to all the way through you can see, it's basically hitting every single My Site, and adding me as an owner for that site name.
>
> **[8:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-onedrive-for-business-using-powershell?u=76281980&t=480)** A simple task that can be done to ensure that you as an administrator, have access to a specific site collection.

> [!info]- Semantic Content
>
> **Env Vars:** spo (7), url (6)
> **CLI Commands:** make (5)
> **Code Keywords:** for. (2), let (2), this, (1)
> **URLs:** [sharepoint.com](https://sharepoint.com) (3), [mysharepoint.com](https://mysharepoint.com) (1)
> **Analogies:** similar to (1), just like (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### How to manage external sharing capabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=0)** - [Instructor] And one of the last areas of focus really for SharePoint Online and OneDrive for business is really around external sharing.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=7)** Now, one of the options that we have here is obviously to utilize external users.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=13)** So we have a function called Get-SPOExternalUsers, which will obviously retrieve any external users that have been added to the tenant.
>
> **[0:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=23)** Now, of course, that configuration is really around whether you allow external sharing, which email addresses do you wish to use, et cetera.
>
> **[0:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=33)** It's fairly straightforward, though, to allow that type of external sharing, and those accounts obviously become valid when you want to obviously share something in SharePoint Online, whether you want to allow something in Teams or OneDrive for Business or something else.
>
> **[0:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=51)** So what we can do is obviously add external users, and depending on the policy that's defined, we'll determine whether users are able to share externally.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=63)** The good thing is, is that obviously we can do this either by utilizing PowerShell and retrieving them, or we can allow end users to configure the permissions.
>
> **[1:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=72)** So let's go and have a look in the SharePoint site first and see what the external sharing configuration looks like.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=79)** So we're in the SharePoint admin center, and if we just expand Policies and click Sharing, then we can see what configuration is enabled.
>
> **[1:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=88)** So for example, you can see that we have SharePoint and OneDrive are set to anyone, which means that any user could potentially come in and share the specific site or file with whoever they want to.
>
> **[1:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=103)** The changing of this permission dictates whether external sharing is available, whether OneDrive has the access to it, or whether the SharePoint does and vice versa, but the one drive permissions can't be higher than the SharePoint ones.
>
> **[1:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=116)** So based on that configuration for external sharing will determine whether or not you can add external users.
>
> **[2:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=124)** So it's important to understand that we can obviously go through and add specific users, invite them into the various applications as we need to.
>
> **[2:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=134)** You can add users at the domain level, so at Azure Active Directory, if needed, you can add them into various other locations at the services, you can add them into specific documents if needed, you could also add them to folders if needed, you could just add them into various locations.
>
> **[2:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=155)** So it's important as an administrator to be able to understand how to manage those specific accounts and check if you have external accounts.
>
> **[2:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=165)** So let's go back to the PowerShell window.
>
> **[2:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=167)** So back in the PowerShell window, and you can see that we already have a command here called Get-SPOExternalUser.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=172)** And you'll notice that there's no external users at the moment.
>
> **[2:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=177)** And that's because nobody has been, obviously, allowed to access the specific site to get in as an external user, and so SharePoint doesn't have any uses to kind of display.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=190)** So what we can do here is we could add some by using the user interface, or we could just add them into Azure Active Directory as guest accounts.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=200)** So what we'll do is we'll add one into SharePoint and then we'll rerun this PowerShell command here to see if that's available.
>
> **[3:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=208)** So let's go to our specific site we've been using.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=211)** So we'll go to our Global Sales, click into the Global Sales site, and then we'll choose share and then I can type in an email address of an account.
>
> **[3:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=221)** And of course, notice it comes back and it says, "Your organizations policies don't allow you to share with these users, go to External Sharing and enable it."
>
> **[3:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=230)** So that's important to understand that those permissions are hierarchical in nature.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=236)** And so depending on the configuration at the highest level, will then determine whether or not you can actually share with other individuals outside of the organization.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=248)** And they reside at the SharePoint level, they reside at the organization level, they reside within the Teams interface, they reside all over the place.
>
> **[4:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=258)** So of course, whenever you make an adjustment as well, you obviously have to go through and determine whether or not you can do that.
>
> **[4:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=265)** So if I go to admin center here, and if I click Policies that reside here, you can see that the external sharing for the global sales site can't be shared.
>
> **[4:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=276)** So I'm going to click Edit, and I'm going to choose Anyone and click Save.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=280)** So I'm just going to update the policy here so we can actually go through and share.
>
> **[4:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=284)** Refresh the page, and then going to click Share.
>
> **[4:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=288)** I'm going to type my external account like so, and it will say she's outside the organization, that's fine.
>
> **[4:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=294)** I can then choose the permission, so give Edit control and choose Share.
>
> **[4:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=297)** So that's an external user that I've now added.
>
> **[5:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=301)** That person will receive an invitation and they'll be able to access the site.
>
> **[5:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=306)** So what does it look like in PowerShell when we retrieve it now?
>
> **[5:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=308)** So let's go back to that console window, okay?
>
> **[5:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=311)** So back here, let's go back and say Get-SPOExternalUser.
>
> **[5:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=314)** And sure enough, now that account resides and appears as a valid account, because it's now an external user.
>
> **[5:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=321)** Now, the interesting thing is that command does not retrieve external users that reside in Azure Active Directory that don't have access to SharePoint.
>
> **[5:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=331)** That command only retrieves external users that have been added directly to SharePoint.
>
> **[5:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=337)** Now, it's important you notice about the sharing status that I kind of went through.
>
> **[5:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=342)** So let's go back here and we'll use Get-SPOSite, which we've used in the past, we use Identity, and then I want to use the URL.
>
> **[5:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=353)** So I'm going to say site URL, which is the URL of the site that I'm trying to get to.
>
> **[5:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=357)** And then what I can see is DisableSharingForNonOwnerStatus.
>
> **[6:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=363)** So I'm going to press Enter, and you'll see what it does is it brings back some information about the site.
>
> **[6:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=370)** And that property, DisableSharingForNonOwnersStatus is a value that we can retrieve and save.
>
> **[6:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=378)** So I'll tell you what we'll do, let's get rid of that one and we'll say, Select *.
>
> **[6:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=385)** Oops, I chopped off the end of my L for site URL.
>
> **[6:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=388)** So let's do that again, okay?
>
> **[6:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=391)** And you'll see, as we go down here, you'll see it has various options and you can see SharingDomain, allowed sharing, SharingBlocking, LimitAccess.
>
> **[6:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=400)** You can see that these properties are defined directly against.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=403)** And most importantly is the SharingCapability, which is ExternalUserAndGuestSharing.
>
> **[6:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=409)** That's the configuration that's currently set.
>
> **[6:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=412)** Now, of course, if we wanted to add external users, we could do that with PowerShell, but if I wanted to just retrieve that configuration, so let's say I wanted to Get-SPOSite and I really just wanted to have a quick look at what the configuration is across the board.
>
> **[7:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=432)** for all of my site collections, I can do a Select-Object and then say SharingCapability like so, and show enough what you'll get is the URL of the site.
>
> **[7:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=444)** and then whether or not it's been enabled or disabled, 'cause one of the things that you can't do in the user interface is kind of see that very easily.
>
> **[7:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=451)** So we can definitely use PowerShell to be able to go through and then determine whether it's on or off.
>
> **[7:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=457)** We can also iterate each of the site collections if needed, or we could turn something off.
>
> **[7:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=462)** So you'll see, for example here, I've got GuestSharing is configured for my, 'cause you can see like the rest of the guest word.
>
> **[7:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=469)** So in my GlobalSales, this was the one that we enabled it on, but let's say we suddenly realized that we don't actually want that to be configured that way, so let me just clear the screen here.
>
> **[8:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=480)** What I can actually do here is say Set-SPOSite.
>
> **[8:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=485)** I'm going to use my identity of the site URL that I wish to utilize.
>
> **[8:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=491)** And then we have a property called SharingCapability and I can specify what that would be.
>
> **[8:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=495)** So I'm going to say Disabled and Enter.
>
> **[8:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=498)** Now, what that means is it's going to change what that value is.
>
> **[8:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=502)** So I'm going to go back to here and then go back to my GlobalSales and now you'll see it's been disabled.
>
> **[8:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=508)** So I don't have to go into the user interface.
>
> **[8:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=510)** It's a one line command and I can update whether or not it's been configured.
>
> **[8:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=514)** Now, if I wanted to change it the other way, then of course, I could change it back to a couple of different things.
>
> **[8:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=520)** So we have some specific options.
>
> **[8:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=522)** So I'm just going to copy my PowerShell and paste it into the window.
>
> **[8:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=529)** So let me just copy and paste here.
>
> **[8:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=532)** I'm copying set SPO command.
>
> **[8:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=535)** Let me just clear.
>
> **[8:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=537)** And this is being copied from the training files and I click paste.
>
> **[9:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=540)** And you'll say that I'm nice setting it to ExternalUserSharingOnly, which means it's for authenticated users.
>
> **[9:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=548)** Now, what does that do to my list?
>
> **[9:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=550)** Well, if I go back to my GlobalSales, you can see it's been adjusted now.
>
> **[9:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=554)** I could also then change that again with a different command, so let me just clear this here, and we'll use this option, paste that into here, and this will be an ExternalUserAndGuestSharing.
>
> **[9:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=567)** So what does that look like when we look at it here?
>
> **[9:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=570)** You'll see global sales now adjusts to be that option as well.
>
> **[9:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-external-sharing-capabilities?u=76281980&t=574)** So you have the flexibility of being able to do that as and when you need to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), interface (4), function (1), else. (1)
> **Tools:** powershell (8)
> **Env Vars:** url (6), spo (1)
> **Cross-References:** go back to (5)
> **UI Navigation:** go to (4)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)


### 3. Managing Exchange Online

> [↑ Back to Table of Contents](#table-of-contents)

#### How to connect to Exchange Online
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=0)** - [Instructor] Now in order for us to manage Exchange Online, we first need to install the module.
>
> **[0:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=5)** And this can be done by first checking, which modules we actually have loaded.
>
> **[0:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=10)** So as you can see, I don't have an exchange module loaded.
>
> **[0:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=14)** So to do this, we first need to install the module if we don't have it installed already.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=20)** And it's called Exchange Online Management, I'm going to press enter here now.
>
> **[0:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=25)** I should already have this installed in my machine so it shouldn't take long to prepare itself.
>
> **[0:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=30)** But if you haven't installed this for the first time, it will take some time to download, it might prompt you for installing something from the PowerShell gallery.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=39)** So just accept the defaults.
>
> **[0:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=40)** Now, if I just do get module again, you'll notice it's loaded some extra ones, but it hasn't loaded my Exchange Online.
>
> **[0:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=48)** And that's because you need to load that in as well.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=52)** So I'm going to say import-module Exchange Online Management, and we'll import that module.
>
> **[1:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=61)** Now, when I've run get module, you can see that it's listed there as one of the modules that is available.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=67)** Now, another approach that we have is to actually not use Exchange Online.
>
> **[1:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=71)** We could also use the Microsoft Graph.
>
> **[1:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=75)** Now this one is a little bit different.
>
> **[1:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=76)** We're going to do the same thing as before.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=78)** So install module, Microsoft.Graph as this one is called and we'll do enter, now, of course, I already have this installed on the machine, so it shouldn't prompt me, but it is the first time the same as Exchange, it'll ask you to confirm the repository.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=94)** I'm then going to say, import module, and then Microsoft.Graph.
>
> **[1:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=101)** Now I'm not going to press anything yet because when I do this, this is going to default to the version 1.0 end point of the graph.
>
> **[1:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=108)** Now of course I like using the beta endpoint, just because it's a bit more cutting edge.
>
> **[1:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=113)** So what we can do before we do the import, I'm just going to clear my screen.
>
> **[1:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=116)** And I'm going to say select MgProfile, which is a command to set the profile for the graph connector.
>
> **[2:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=125)** And I'm going to say, let's use the beta endpoint instead.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=128)** Now I can import the module and the module will be connected to the beta version of the partial cmdlets.
>
> **[2:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=138)** So I'm going to say import module.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=140)** Now, the Microsoft Graph one, isn't just importing Microsoft Graph, It's importing all of the modules that are part of the Microsoft Graph PowerShell SDK.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=151)** So there's about 25 of these that will be imported.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=154)** So this can take some time to load, so you might want to do this and then walk away and kind of leave it as it is.
>
> **[2:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=160)** I'm just going to actually kill this one here, I don't need to load it.
>
> **[2:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=163)** But now that we have it loaded, one of the things that we want to do is obviously now connect to my specific tenant, to actually see whether we can make a connection, we can connect to Exchange Online, we can manage et cetera.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=180)** Now this is done by first, let us create a user variable, which will contain the user name that we wish to utilize.
>
> **[3:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=189)** So that'll be a kind of admin account that we'll be utilizing before.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=193)** So let me just grab the details for this one.
>
> **[3:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=196)** Let me just paste that into here, so my admin account.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=200)** And then what I'm going to do here is create a credential object using the standard get credential.
>
> **[3:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=207)** And I'm going to pre-populate the username by using the user variable.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=211)** And then it's going to require a quick message, so I'm going to say, add password.
>
> **[3:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=217)** Now of course, if I was using PowerShell 7, it would require the message, if I'm using regular Windows PowerShell, I don't need to.
>
> **[3:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=222)** But either way, when a press enter here, it pops up the window little dialog box, and then I can paste in the password.
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=231)** And if I simply say creds, you can see I've got my security object now.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=236)** At this point, I can say connect Exchange Online and I can pass the credential object like so, and then I can press enter.
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=246)** And the first thing it does, it gives us a little table of the types of commands that have been updated.
>
> **[4:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=252)** So for example, get recipient or get mailbox, and then the new, faster equivalent versions.
>
> **[4:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=257)** And then it connects to Exchange Online.
>
> **[4:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=260)** So let me just clear some space here.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=262)** To check it's working, I can say, get mailbox for example, and if it connects and returns mailboxes, then we know that we connected directly to Exchange Online.
>
> **[4:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=271)** Now I can also disconnect from Exchange Online, like so I'm going to say all, and that will kill my existing PowerShell session that was created.
>
> **[4:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=282)** So if I now choose get mailbox, you'll see it comes back and say get mailbox isn't recognized.
>
> **[4:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=289)** And that's because the module's been kind of still loaded, but the connection is an active, so the commands aren't available.
>
> **[4:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=296)** We also have the ability to connect to Exchange Online simply by just pressing enter.
>
> **[5:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=303)** And then at this point when you press enter, it will launch a specific browser window, or another PowerShell window utilizing Explorer.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=312)** From here we can pick the account that we wish to log in with.
>
> **[5:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=315)** Of course, we're going to grab a password at this point and put that in.
>
> **[5:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=321)** And then if we had anything like multifactor authentication that needed to be completed, you know, maybe it's Azure multifactor or something else, we can then complete that process, and then we're able to connect.
>
> **[5:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=332)** Now let me just clear my screen here.
>
> **[5:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=335)** And to double check that we have a connection, we can just choose get mailbox.
>
> **[5:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=340)** You'll see it's taken some time, and then we turned some values.
>
> **[5:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=343)** So we can connect to Exchange Online either using a credential object, or we can actually go through and fulfill the browser requirements depending on how we want to connect to the environment.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=354)** Now the last option that we have for connecting to Exchange Online is of course to use the Microsoft Graph.
>
> **[6:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=362)** So we can say connect MgGraph, and then the way that we connect to the graph is by defining the scopes or the sets of permissions that we would like to access.
>
> **[6:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=372)** So for example, one of the first permissions is email.
>
> **[6:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=375)** We could then do Mail.ReadWrite.
>
> **[6:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=380)** We could also do maybe Contacts.ReadWrite.
>
> **[6:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=386)** So we have these various permissions that are available within Azure active directory.
>
> **[6:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=390)** And I when press enter here, it's going to say welcome to the graph because I already have an existing connection, but if it didn't, it would ask me to consent or authenticate, and then it would say welcome to the Microsoft Graph.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=403)** So now I have a connection I can for example say, MgUser mail folder, for example, or child folder or tab through, the various different types of messages that all available or folders, or topics, or whatever it would be that I need to manage Exchange Online.
>
> **[7:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=426)** So there are lots and lots of PowerShell commands that are available inside what's called Get-Mg, and we're able to manage the graph components that connect to Exchange Online.
>
> **[7:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=442)** An easy example of this would be to say, Get-MgUser mail folder and then press enter.
>
> **[7:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=451)** And then of course, this will go ahead and try and connect.
>
> **[7:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=453)** And of course we didn't pass any properties, but what we could do is utilize the user.
>
> **[7:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=460)** Now, of course it comes back and it says, oh, we're looking for a specific type of object that needs to come back, so let's have a look at my user.
>
> **[7:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=469)** So my user has my unique ID here.
>
> **[7:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=471)** So it's looking for the user ID.
>
> **[7:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=473)** So what we can do is we could say, Get-MgUser mail folder.
>
> **[8:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=480)** And then if we tab through the various options, you can see that we can do searching, we can scape, we can do user ID, et cetera.
>
> **[8:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=487)** So if I say user and go in, you'll see it comes back and it will say, hey, there's some items in here.
>
> **[8:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=494)** Now, of course, those don't make any sense, but we could say select, you know, format as a list, for example, or we could say format as a table, or we could say just select star, and you'll see it starts to show the items in there.
>
> **[8:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=509)** Now just be aware as with all PowerShell, some of the values don't return in the right format, some of them are in Jason format, et cetera.
>
> **[8:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=515)** but that's as simple as how we can connect.
>
> **[8:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-exchange-online?u=76281980&t=517)** And as easy as it is to actually retrieve some basic values to ensure that we actually have connected.

> [!info]- Semantic Content
>
> **Code Keywords:** module (13), let (7), this, (2), require (2), pass (2)
> **Tools:** powershell (8)
> **Analogies:** for example (6)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Prerequisites:** install (3)
> **CLI Commands:** make (2)
> **Env Vars:** sdk (1)
> **Versions:** version 1 (1)

#### How to create, update, delete, and manage mailboxes
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=0)** - [Instructor] My managing exchange mailboxes is fairly straightforward.
>
> **[0:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=4)** Using the new commands for example, we can say, Get-EXOMailbox.
>
> **[0:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=9)** And the first thing we can do is learn about what's called the result size, which is going to allow us to return all of the mailboxes, and the Get-EXOMailbox is obviously a faster option.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=20)** Now, obviously when it returns back, we get this kind of weird structure where it just renders everything.
>
> **[0:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=25)** So what we can do is do a select object.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=29)** And then for example, we could say, I want name, let's have a quick look here.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=35)** We can say, just copy this value.
>
> **[0:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=37)** So primary SMTP, we can paste this here and then I can do Enter.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=42)** And then of course we get a different view.
>
> **[0:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=44)** We get the name of the user and the primary SMTP.
>
> **[0:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=48)** So when we bring information back, we don't actually have to stick with the view that's there, but the EXO mailbox one will return all of the values about a specific mailbox.
>
> **[0:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=58)** Now, if we wish to retrieve specifics around a user mailbox, so let me just take Pradeep's email address here.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=66)** The first thing I'm going to do is say user equals, and then I'm actually just going to use that email address here.
>
> **[1:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=74)** Let me just clear some space here.
>
> **[1:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=75)** And then what I can do is say, Get-EXOMailbox.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=79)** And this time we're going to use the identity parameter.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=82)** And then I can just say user, and this will retrieve that list of information that we saw, but it will be just Pradeep's information, nothing else.
>
> **[1:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=91)** So fairly straightforward once we have this as an object.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=94)** So if I go back and declare a variable here and call it mailbox and do get, let me just clear some space here.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=102)** Then what I can do is say mailbox dot, and you can see I can tab through the various parameters or I suppose, properties that are available.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=112)** So I could say a mailbox alias.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=114)** And of course, if we tab through the other options, for example, display name, or we can go back and keep tabbing through distinguished name, email addresses, you'll see the email addresses that are associated to the specific account.
>
> **[2:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=129)** So it's an easy way of retrieving specific information.
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=132)** Now what about if we were trying to find different types of mailboxes?
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=137)** So what I mean by that is, let's say we're trying to identify any of the shared mailboxes.
>
> **[2:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=143)** So the first thing I'm going to do is set the result size to be unlimited, because that's what we're looking for.
>
> **[2:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=148)** And then what I can do is use a property called recipient type details.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=154)** And then I'm able to say shared mailbox as the value.
>
> **[2:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=159)** Now, I don't have any shared mailboxes, so that's good.
>
> **[2:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=162)** But if I had a shared mailbox, then that mailbox would then be listed here, just like I had done if I get rid of this here and said, Get-EXOMailbox and it would return the values.
>
> **[2:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=174)** So shared mailboxes if we wish to use them, not many people use them anymore, but you can, and you can retrieve information.
>
> **[3:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=181)** Now, the next thing that you would often want to identify is maybe statistics about a specific mailbox.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=190)** So there's a command called Get-EXOMailboxStatistics that will allow me to pass an identifier, so of a specific user.
>
> **[3:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=199)** And then if I just press Enter here, it's going to go ahead and retrieve any statistics about the mailbox.
>
> **[3:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=205)** And this is perfect because this allows me to get a quick snapshot view of the mailbox that's there.
>
> **[3:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=212)** Now, what we can do is if I go back here and say, get here, let me go all the way back to get mailbox.
>
> **[3:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=222)** I can start to join mailbox retrieval to statistics because rarely do you want to get statistics for a single mailbox.
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=231)** You probably want to retrieve it for all of the mailboxes in one go.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=236)** So what we can do is we can go into here.
>
> **[4:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=240)** I'm going to set the results size to be unlimited 'cause I want all the mailboxes.
>
> **[4:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=245)** And then as we've done in the past, we can pipe the value of what we've just done.
>
> **[4:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=250)** So this will retrieve all of the mailboxes.
>
> **[4:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=253)** Then I can pass that into the statistics option, and then I can pass that value out.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=262)** So select object, and I'll just choose display name, which is the name of the field here.
>
> **[4:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=269)** And then maybe I'll pick the total item size and we'll just copy that one here.
>
> **[4:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=275)** So what this will do is combine the two commands together to say, go and get all the mailboxes.
>
> **[4:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=279)** Then when you've got them all, take each one of them and throw them into this command and then get the values.
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=285)** So I'm going to press Enter here, and we'll wait for this to retrieve the mailboxes, and then execute mailbox statistics against each one, and then it should return the display name and the total item size.
>
> **[4:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=296)** And sure enough it's still going.
>
> **[4:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=298)** But you can see, we now have a simple report that says, this is the mailbox, and this is how much has been used as far as storage would go inside the mailboxes.
>
> **[5:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=308)** So an easy way to run some kind of report if we needed to.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=312)** Now, what we can do also is go through and retrieve other information about the specific mailboxes.
>
> **[5:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=320)** So let's say we were trying to identify things such as, if it's an inactive mailbox, so once again, we're going to use the Get-EXOMailbox.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=330)** We're going to set the result size to be unlimited because this is going to be the format that we wish to use.
>
> **[5:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=337)** I'm actually just going to pipe this out and then use the tilde option here.
>
> **[5:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=340)** So I can write in the next line.
>
> **[5:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=342)** I'm then going to utilize a ForEach-Object loop to basically say, I want to loop through each item.
>
> **[5:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=353)** And then I'm going to say, get the mailbox statistics again.
>
> **[6:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=360)** And then the identity of the mailbox that I wished it.
>
> **[6:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=362)** 'Cause if we're using a for each loop object, we need to pass an identity to that.
>
> **[6:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=367)** So then we can use an object called the dollar underscore, which is the item that's being looped at the moment.
>
> **[6:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=374)** I'm going to say user principal name.
>
> **[6:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=378)** So once I've got that user principal name, then of course, I then want to retrieve some specific details.
>
> **[6:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=386)** So I'm going to say, get the user one.
>
> **[6:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=388)** I'm going to pipe the value out.
>
> **[6:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=390)** I'm going to tilde it again so I can select object.
>
> **[6:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=394)** Now you can see what the tilde does.
>
> **[6:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=395)** It just lets me kind of flow to the different lines.
>
> **[6:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=400)** I'm going to do last log on time.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=403)** And I'll say, last user action time, and then we'll close that down.
>
> **[6:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=409)** So what we have is retrieval the mailboxes and then loop that command looking for that information.
>
> **[6:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=415)** So I'm going to press Enter here.
>
> **[6:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=417)** So this will go through each one.
>
> **[6:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=418)** And notice what's happening, it's rendering all the mailboxes, but I don't actually have any values.
>
> **[7:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=425)** So let me just stop that one from executing for a second.
>
> **[7:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=429)** So what's the problem?
>
> **[7:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=430)** Well, this is one of the things that's different about some of the commands is that some of the EXO commands don't retrieve the same values that the regular commands would utilize.
>
> **[7:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=442)** So let's go back into here.
>
> **[7:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=444)** And what we'll do is we'll do the same thing again, but this time I'm going to go through and remove the EXO option.
>
> **[7:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=451)** So we're going to use the slower out of the box commands that come with the PowerShell.
>
> **[7:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=457)** And then we're going to go across to here again, and Enter.
>
> **[7:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=461)** So notice what happens now, we'll wait for this to load.
>
> **[7:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=465)** It should retrieve all the mailboxes, get all the details, and notice the values come back now.
>
> **[7:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=470)** So just be aware there is a difference between using the EXO commands and using the older commands.
>
> **[7:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=477)** Sometimes the older commands are better.
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=479)** So that's just one way to identify inactive mailboxes.
>
> **[8:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=482)** And that's done by just viewing when they logged in last.
>
> **[8:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=486)** Now, once we've created the mailbox, there may be an instance where we would need to update a mailbox.
>
> **[8:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=491)** So first off we want to check that we have our current user.
>
> **[8:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=495)** I'm going to go and retrieve my mailbox.
>
> **[8:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=497)** So Get-EXOMailbox with an identity of the user that we just created.
>
> **[8:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=504)** I can just double-check that by typing in, get mailbox, the actual mailbox variable and sure enough, it gives me all the details.
>
> **[8:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=512)** What I can then do is utilize a command called Set-Mailbox, which requires specific ID.
>
> **[8:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=519)** So I can say identity.
>
> **[8:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=521)** And then I can say mailbox, and I could say mail ID.
>
> **[8:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=527)** And then at this point we can kind of loop through all of the values that we're able to update for a specific mailbox.
>
> **[8:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=535)** You can see as I keep tabbing all the way through there's lots and lots and lots of these.
>
> **[8:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=539)** Now of course, there are some, if I say display name, that we can update.
>
> **[9:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=544)** So right now my display name is PowerShell dash user.
>
> **[9:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=548)** So I'm going to say PowerShell user updated, like so, and then I'm going to press Enter.
>
> **[9:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=557)** Now what this will do is check them out box itself and force an update to that mailbox.
>
> **[9:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=562)** So how do we check if it's correct?
>
> **[9:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=564)** Well, let's go back and retrieve the mailbox and then I can use my variable to come back and say, get the display name.
>
> **[9:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=571)** Now notice what happened here.
>
> **[9:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=572)** The display name still says PowerShell user.
>
> **[9:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=576)** It didn't update my display name to be what it should be.
>
> **[9:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=580)** So let's go back to my mailbox and press enter.
>
> **[9:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=583)** And if we scroll through, you can see the display name is still sitting here.
>
> **[9:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=587)** Now some of the PowerShell commands don't enforce updates immediately.
>
> **[9:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=593)** Or they will take the values that you type, but not necessarily update the values.
>
> **[9:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=599)** Or they take a specific amount of time to get those values.
>
> **[10:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=605)** So dollar mailbox, again, keep going here, and you can see now it's updated.
>
> **[10:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=611)** So you can see there was a short space of time where it didn't actually update.
>
> **[10:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=616)** So just be aware that you may make an update, check it, it didn't take, you might execute the PowerShell again and again and again, and actually you just need to wait for that command to be completed.
>
> **[10:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=627)** Now, the ultimate thing here is what about if we needed to remove the mailbox?
>
> **[10:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=632)** Well, that's as simple as saying remove mailbox.
>
> **[10:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=634)** We can pass in the identity of the mailbox itself.
>
> **[10:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=639)** So mailbox dot ID, and then I can just press Enter here.
>
> **[10:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=643)** And this is going to go ahead and connect to the mailbox that we've already got by the ID that's there.
>
> **[10:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=648)** It will then prompt me and say, okay, we're going to remove the mailbox and the associated account that was created.
>
> **[10:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=656)** I'm going to press A, to do yes to all.
>
> **[10:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=658)** Otherwise it might prompt me multiple times and then I'll connect (indistinct).
>
> **[11:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=663)** What we can then do a say, get mailbox.
>
> **[11:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=667)** Actually, if we use the EXO one, it will be quicker.
>
> **[11:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=671)** So mailbox, press Enter, and then scroll down.
>
> **[11:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=672)** We know that we've got Pradeep here.
>
> **[11:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=674)** If we scroll up here, we have Scott Patti, and notice that my PowerShell one has now been removed.
>
> **[11:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=680)** So some execution commands will be immediate and some will have to wait.
>
> **[11:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=686)** So as we are managing the mailboxes for creating, updating and deleting mailboxes, it's a fairly straightforward approach.
>
> **[11:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=693)** Now what we can do is also kind of find what happened to the mailbox.
>
> **[11:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=698)** So what about if we delete a mailbox and then realize that we actually needed the mailbox to kind of be put back?
>
> **[11:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=707)** Well, luckily what we have is called a command called Undo-SoftDeletedMailbox, which is the original piece that goes first.
>
> **[11:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=717)** I'm going to pass in my user object, which is the user.
>
> **[12:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=721)** So my PowerShell dot user.
>
> **[12:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=724)** I've then got a property called Windows Live ID, which is my user.
>
> **[12:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=729)** So I'll talk with Dave before we do that, let's just make sure that our variables are correct.
>
> **[12:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=732)** Okay, perfect.
>
> **[12:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=733)** So my user and my user variables being used can work for both of these properties.
>
> **[12:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=739)** So let me just say, undo again, soft deleted mailbox, dollar user, will then say Windows Live ID dollar user 'cause it's in the correct format.
>
> **[12:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=752)** And then I'm going to say password because what we need to do is obviously reset the password when it gets brought back in again.
>
> **[12:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=761)** So secure string, string dollar, password as plain text, and then I'll force that in.
>
> **[12:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=770)** Okay, and I'll press Enter.
>
> **[12:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=772)** Now, what this is going to do is try and find that soft deleted mailbox, which was the one that we just deleted by the user ID and the Windows Live, and then bring it back in which will return the Windows Live or the Azure ID account, and the mailbox back to where it was with the new password or the original password that we originally had and put that back to wherever it is.
>
> **[13:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=796)** So let's give this a second to complete.
>
> **[13:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=797)** It shouldn't take too long.
>
> **[13:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=799)** However, it can take a little bit of time depending on the size of the mailbox that we're trying to restore.
>
> **[13:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=805)** And there we go.
>
> **[13:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=806)** It says it's now restored.
>
> **[13:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=807)** So when I say Get-EXOMailbox now, I should be able to say my Pradeep one, and then back is my PowerShell one.
>
> **[13:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-delete-and-manage-mailboxes?u=76281980&t=816)** So as you can see, we can create them, we can update them, we can delete them, and then we can actually restore them if we need to as well, all utilizing PowerShell.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (6), delete (2), else. (1), for. (1)
> **Tools:** powershell (10)
> **Env Vars:** exo (5), smtp (2)
> **CLI Commands:** find (3), make (2)
> **Analogies:** for example (3), just like (1), such as (1)
> **Cross-References:** in the next (1), go back to (1)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Definitions:** is a  (1), is called (1)

#### How to manage exchange online permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=0)** - [Instructor] So how do we manage Exchange Online permissions?
>
> **[0:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=3)** Well, first off in Exchange Online, the permissions that you grant to administrators and users are based on management roles.
>
> **[0:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=11)** A management role defines the set of tasks that an administrator or a user can perform.
>
> **[0:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=17)** When a management role is assigned to an administrator or user, that person is granted the permission provided by the admin management role.
>
> **[0:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=26)** Now, there are two types of management roles.
>
> **[0:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=28)** The first is administrative roles, and the second is an end user role.
>
> **[0:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=33)** The admin roles, these roles contain permissions that can be assigned to administrators or specialist users.
>
> **[0:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=40)** End user roles are assigned the role assignment policies enable end users to manage aspects of their own mailbox and distribution groups.
>
> **[0:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=50)** Management roles give permissions to perform tasks to administrators and users by making Powershell commandlets available to those who are assigned in those specific roles.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=62)** Management roles give permissions to perform tasks in Exchange Online, but you need an easy way to assign them to administrators and users instead of independently assigning them.
>
> **[1:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=73)** Exchange Online provides you with two different ways of making assignments.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=79)** The first is a role group, role groups enable you to grant permission to administrators and some of those specialists or power users.
>
> **[1:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=87)** Role assignment policies enable you to grant permission to end users to change settings on their own mailbox or the distribution groups that they might own.
>
> **[1:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=98)** When you create a user in Microsoft 365 or Office 365, you can choose whether to assign various admin roles such as the global administrator role, the service administrator role, password administrator, and so on.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=114)** Some, but not all of these roles grant the user administrative permissions in Exchange Online.
>
> **[2:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=120)** In Microsoft 365 or just Office 365, when you add a user to either the global administrator or the password administrator roles, the user is granted the rights provided by the respective Exchange Online role group, other Microsoft 365 or Office 365 groups and roles don't have corresponding Exchange Online role groups that match the same.
>
> **[2:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=148)** So for example, we can see the global administrator in 365 matches the organization management role within Exchange Online, whereas billing administrator does not have a corresponding group, whereas password administrator matches help desk administrator in exchange and so on.
>
> **[2:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=166)** Now for mailbox permissions, you can use Exchange Online PowerShell to assign permissions to a mailbox or group so that other users can access that mailbox using three different types of permissions.
>
> **[2:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=179)** The first would be full access permission, Send As, so we can send emails as that person or Send On Behalf of that person.
>
> **[3:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=188)** Full access allows the delegate or the user to open the mailbox and view and add and remove the contents of the mailbox.
>
> **[3:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=198)** It doesn't allow the person to send messages from that mailbox.
>
> **[3:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=202)** If you assign the full access permission to a mailbox that's hidden from the address list, the user won't be able to open the mailbox.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=211)** By default, discovery mailboxes are hidden from the address list.
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=216)** The Send As permission allows the user to send messages as if they came directly from the mailbox or group.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=223)** There's no indication that the message was sent by someone else.
>
> **[3:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=227)** It doesn't allow the user to read the contents of the mailbox either.
>
> **[3:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=232)** If you assign the send us permission to a mailbox that's hidden from address lists, that delegate won't be able to send messages from the mailbox.
>
> **[4:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=241)** The Send On Behalf permission allows the user to send messages from the mailbox or the group.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=248)** The from address of these messages clearly shows that the message was sent by a different user.
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=255)** However, replies to these messages are sent to the mailbox or group, not to the user that sent the message.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=262)** This permission obviously doesn't allow users to read the contents of the mailbox.
>
> **[4:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=268)** Now to add or remove full access permission, we can utilize a PowerShell command called add mailbox permission, where we specify the identity, the user, and then the permission.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=280)** We can also then remove that mailbox permission also by using a similar PowerShell commandlet.
>
> **[4:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=287)** If we wish to add Send As, you can see, we now utilize a different command called add recipient permission where we specify who the identity mailbox is, and then the trustee, and then the access.
>
> **[5:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=300)** We can also remove that same permission by using the remove recipient permission.
>
> **[5:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=306)** If we wish to Send On Behalf permission, then we can use the set mailbox command to select the actual mailbox.
>
> **[5:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=315)** So in this case, it's Noah's mailbox and there's a property called Grant Send On Behalf To and then whatever that user might be, we can also set that same permission on distribution groups or other types of groups within Microsoft 365 and Exchange Online.
>
> **[5:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=332)** Now, one of the most important things that we often want to do is review all of the permissions that are available.
>
> **[5:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=338)** Now to get a full summary of all of the user's permissions, we can use the get mailbox command joined with the get mailbox permission.
>
> **[5:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=347)** So in this example here, it's retrieving all of the mailboxes iterating through every single mailbox looking for the mailbox permissions, and then selecting the specific access rights and viewing that back to us on the screen.
>
> **[6:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=361)** And of course we could also export that out directly into a CSV or a log file for obviously offline access.
>
> **[6:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-exchange-online-permissions?u=76281980&t=369)** So utilize in PowerShell, we can very easily, not only just manage permissions, but we can also generate reports of the permissions that have been set.

> [!info]- Semantic Content
>
> **Tools:** powershell (5)
> **Code Keywords:** default, (1), else. (1), case, (1)
> **UI Navigation:** open the (2), select the (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Microsoft Teams

> [↑ Back to Table of Contents](#table-of-contents)

#### How to connect to Microsoft Teams with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=0)** - [Instructor] Now, as is consistent with managing any part of Microsoft 365, you first need to install specific modules to make things work.
>
> **[0:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=10)** And that is no different when it comes to Microsoft Teams.
>
> **[0:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=14)** So first off, if we do get module, now you can see that we start into include lots of PowerShell modules.
>
> **[0:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=19)** As you can see the Microsoft Graph ones that have been loaded and our exchange one.
>
> **[0:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=23)** Microsoft Teams is exactly the same.
>
> **[0:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=25)** So the first thing we have to do is to install the module.
>
> **[0:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=30)** And if I just say name and this one's called MicrosoftTeams, and I'm going to press enter here.
>
> **[0:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=37)** Now, the same thing will happen.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=39)** This time I haven't installed it.
>
> **[0:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=40)** I'm just going to say yes, and this will prompt me to say, are you sure you want to do this and do this?
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=46)** And then it will come back and say, okay, hold on a minute, you already have a version of it installed.
>
> **[0:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=51)** Do you wish to install a newer version, and do you wish to run it side by side?
>
> **[0:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=55)** So what I'm actually going to do is instead of doing Install-Module, I can actually just... let me clear the screen here.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=63)** I can just import the module because it's already installed.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=67)** I don't need to update the module.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=69)** The version I have is sufficient for what we need.
>
> **[1:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=73)** So Import-Module MicrosoftTeams.
>
> **[1:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=76)** So because it's already installed on the machine, now, I suppose, I know I've gone over this a few times, but when you install the module, it puts it onto the physical machine.
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=84)** When you import the module, it makes it visible and available inside the current PowerShell session that you happen to be in.
>
> **[1:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=92)** So this is now importing the MicrosoftTeams module into my existing session so that I can then start to utilize any of those commands.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=102)** Now, as before, there're lots of times where the commands can take some time to load, it's now finished, but it can take some time to load depending on the size of the module.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=112)** So if I now say, Get-Module, you'll see that we've now got MicrosoftTeams that's now loaded for us here.
>
> **[1:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=119)** So let me just clear that.
>
> **[2:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=121)** Now, of course, how do we connect to Microsoft Teams?
>
> **[2:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=124)** Well, first off, let me just check my user objects.
>
> **[2:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=126)** So right now my user object is set to the previous user account.
>
> **[2:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=131)** I'm just going to adjust this here.
>
> **[2:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=133)** So user, and we'll make it the admin account.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=137)** And then if I do my creds object, you can see that's still valid, so we can still utilize that as needed.
>
> **[2:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=145)** So what we can do is do the same thing we did before and say, Connect-MicrosoftTeams this time, pass a credential and use that creds object that we already created.
>
> **[2:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=157)** This is now going to go and try and communicate to MicrosoftTeams, and then should we turn back, and sure enough, there we go.
>
> **[2:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=164)** Now, notice it gives you a different returning value.
>
> **[2:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=166)** Sometimes what you end up with is nothing.
>
> **[2:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=170)** So when you connect to certain types of services, you get no response.
>
> **[2:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=173)** Others will give you kind of a verbose kind of connection, or you'll end it with something like this.
>
> **[2:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=179)** Now, in fact, what we talking about there, if I say verbose, when we do the connection, you can see it only really adds an extra piece and that's down to the commands themselves.
>
> **[3:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=189)** So let me just clear that.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=190)** So I'm now connected to MicrosoftTeams.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=193)** Now, I can also disconnect from MicrosoftTeams also, and then I can say, Connect-MicrosoftTeams, but this time we can connect to MicrosoftTeams and I can force a browser prompt this time by not passing a credential object.
>
> **[3:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=210)** So I'm going to select my admin account here.
>
> **[3:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=213)** This is now going to go ahead and reconnect me.
>
> **[3:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=215)** So remember, the browser option is if you need to pass some kind of multifactor authentication, or something else in the authentication pipeline.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=223)** So that gives me my core connection.
>
> **[3:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=225)** Now, we also touched on the idea of using the Microsoft Graph to connect.
>
> **[3:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=234)** So MgGraph, and remember we talked about the scopes.
>
> **[3:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=237)** Now, the nice thing here is that there's a whole set of scopes that are available to us for connecting to Microsoft Teams.
>
> **[4:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=245)** So for example, if I say, TeamSettings.Readwrite.All or maybe I want to manage the TeamsApp configuration, then I can do that too.
>
> **[4:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=262)** So I can actually go through and connect.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=263)** It's going to launch me the browser.
>
> **[4:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=265)** I'm going to select the account, it's going to prompt me for consent.
>
> **[4:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=269)** I can choose accept, and then it'll connect to the graph.
>
> **[4:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=272)** And then I'm able to start utilizing some of those Teams commands if I wanted to kind of manage the Microsoft Teams infrastructure by utilizing the PowerShell graph instead.
>
> **[4:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=284)** Now, not all of the kind of commands that you would expect to do in the admin interface exist in the graph.
>
> **[4:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=290)** But what we can do, just to kind of prove that we can connect to things is do Get-MgTeam.
>
> **[4:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=295)** Now, notice it's asking me for a TeamId, and that's because I haven't passed one yet.
>
> **[5:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=300)** So maybe we could say, Get-MgGroupTeam.
>
> **[5:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=305)** Notice, it asked me for a GroupId.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=307)** So you can see where we go in with this.
>
> **[5:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=309)** You have to kind of play with them and say MgGroup.
>
> **[5:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=313)** So this is now going to retrieve any of the groups that are connected for Teams, then I can grab the ID of the group, then I can pass it into the Team, et cetera.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=323)** So for example, if I grab this one and then say GroupTeam -GroupId, pass that one and you enter, it's now going to go and tie those two together.
>
> **[5:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=334)** So now I get the GroupTeam, and I can start managing the Team.
>
> **[5:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-connect-to-microsoft-teams-with-powershell?u=76281980&t=338)** So that's just one way of how you would be connecting and ensuring that you had a connection to Microsoft Teams.

> [!info]- Semantic Content
>
> **Code Keywords:** module (11), let (4), pass (4), this. (2), interface (1)
> **Prerequisites:** install (5)
> **Tools:** powershell (3)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Cross-References:** we talked about (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### How to create, update, and delete teams
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=0)** - At the first administration task is really around managing teams themselves.
>
> **[0:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=6)** So, I'm going to choose Get-team, and Get-team retrieves me a list of the Microsoft teams.
>
> **[0:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=11)** So, in my team's tenant, you can say that I have, one two, three, four, five, six, seven, eight, teams.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=18)** You can see whether they're public or private and then the Mail Nicknames associated to them.
>
> **[0:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=24)** Now, if I wanted to retrieve a specific team, so, let's say I want to retrieve my U.S Sales one, so, I'm going to use that, I can put the name of the team in there, I can say, Get-team, Display name, and team, and then do the same thing, and it will retrieve information about the team.
>
> **[0:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=45)** Now, as you saw before, in other commands, it puts it as kind of this weird table, but if I wanted to, I could say select the specific fields, or I could just say, format table, or format list.
>
> **[1:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=60)** If do format list, then what we get to see is all of the properties that are associated to a specific team.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=67)** So, at that point, we can then start to perform updates if needed.
>
> **[1:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=72)** Now, one of our first tasks normally, is to actually create specific teams.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=78)** So, I'm going to call this one, PowerShell team, that's going to be the team name.
>
> **[1:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=83)** Let me just copy that, 'cause I'm going to use that again, like so.
>
> **[1:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=87)** We'll do team description, like so, so, same name, same description, and then I get to say team visibility and I can set that to be a specific visibility, so, let's just say public.
>
> **[1:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=106)** Once we have that, then I can obviously go ahead and create a new team.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=110)** So, I can say New Team, Display Name, and we'll take our team name.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=118)** I then also have the description property, which we've defined.
>
> **[2:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=123)** So, team description, and then you'll notice our last one is visibility, and I can use my team visibility and press enter.
>
> **[2:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=134)** So, now, what that's going to do is create me a new team.
>
> **[2:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=136)** Now, what's the construct of a team?
>
> **[2:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=138)** Well, it's going to be the Microsoft team's components, it's the Office 365 Group, it's the SharePoint Online site, it's the Azure AD Group, et cetera.
>
> **[2:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=146)** So, all of these components get spun up as part of the new team command.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=151)** Now, when that's being created, obviously, it can take some time, it's not a quick process to create a team.
>
> **[2:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=159)** It's even the same in the user interface.
>
> **[2:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=161)** So, when you go into the Admin Center and create a new team, it's obviously going to create a team construct and then it will provision all of the other pieces over time after the first piece has been created and then continues to create them after that.
>
> **[2:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=174)** So, I'll give this a moment to complete.
>
> **[2:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=176)** Okay, so, it's returned.
>
> **[2:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=178)** So, we now have our team.
>
> **[2:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=179)** So I'm just going to say, Get-team, we'll just retrieve a new list of teams, and sure enough there's my PowerShell Team that's been created.
>
> **[3:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=187)** So, a fairly straightforward process, we just passed the various properties.
>
> **[3:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=191)** Now, what we can also do is obviously, update teams as well, because there may be times where you need to modify a specific team.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=200)** So, we've got our three variable still.
>
> **[3:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=203)** So, what we can do here, is I'm going to say, Dollar Team, I'm going to retrieve that specific team, and I'll use my Display Name variable that we already have.
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=216)** So, team name like so.
>
> **[3:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=218)** Let's just make sure that we've retrieved that, so, team, sure enough we have.
>
> **[3:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=222)** At this point, I can then use this Set-Team commands to update specific things.
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=231)** So, for example, if I wanted to, you know, use the Set command, it's actually going to require a group ID.
>
> **[3:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=239)** Now, how do we get the group ID?
>
> **[4:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=241)** Well, the good thing is that when we retrieve a Microsoft Team, there's a property called GroupId.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=248)** So, we can pass that in, and then at this point, let's say, I wanted to change my Display Name, so, instead of it being PowerShell Team, I'm going to say, PowerShell Team updated, so, that will be my new Display Name.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=263)** I'm going to press enter.
>
> **[4:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=264)** So, this is now going to connect to the group.
>
> **[4:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=266)** You can see that it returns a Display Name, but we don't know if it's been updated yet.
>
> **[4:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=271)** So, let's go back to my Get-Team, and you'll see it still says PowerShell Team, it doesn't have the specific name update.
>
> **[4:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=281)** So, what does that mean?
>
> **[4:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=282)** Okay, now it's moved.
>
> **[4:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=283)** Notice it moved places?
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=285)** And that's because it's got the dots, which means it's now been updated.
>
> **[4:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=289)** So, let me go here, and what we'll do is just, PowerShell Team updated, and enter, Dollar Team, and sure enough, it's now updated.
>
> **[5:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=305)** So, we can update them as we need to.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=307)** Now, if you remember, there were other properties that we could utilize, and so, if I do format list here, and that we could modify on a team by team basis.
>
> **[5:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=319)** So, you can see we've got, whether you can allow Giphys, whether you've got stickers, memes, et cetera.
>
> **[5:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=324)** These are all properties that we can update for a specific team.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=330)** And this is done utilizing that Set-Team command also.
>
> **[5:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=334)** Now, instead of using Set-Team, we can actually go one step further, and what you'll see, is we have a different command that is available to us, and we can do Set-Team, archived, channel, picture, app, targeted.
>
> **[5:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=350)** You can see, we can kind of loop backwards and forwards through various properties.
>
> **[5:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=355)** Or we can just say, Set-Team, do the GroupId, so, Dollar team dot GroupId, and then we can tab through the various properties.
>
> **[6:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=366)** Now, at least we've got Giphy ratings, allow stickers and memes.
>
> **[6:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=370)** So, for example, let me go into stickers and memes and I'll say Dollar true.
>
> **[6:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=376)** I can then do Display Name again, I could say visibility, let's go through to allow GIPHYs, and let's say, I wanted to make that false, and I can then press enter.
>
> **[6:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=387)** So, this will now go ahead and perform an update on that specific team.
>
> **[6:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=392)** So, let me retrieve the team again, and team, and we want to do format list.
>
> **[6:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=398)** Now, what you can see, is we've got Giphys in our false and stickers and memes in our true.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=403)** And we could have updated any of the other options also, such as allow creation of channels, and deletion of channels, et cetera.
>
> **[6:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=410)** So, we have the ability to manage those specific types of things against a specific team.
>
> **[6:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=416)** Now, not only do we have the ability to obviously, create an update, we also have the ability to remove specific teams as well.
>
> **[7:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=426)** And this is done by using the Remove-Team command, and you'll notice that everything is really related to the GroupId of the object.
>
> **[7:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=434)** So, I'm going to say, GroupId, Dollar Team, which is the one that we created, and then GroupId, and I can say, remove the team.
>
> **[7:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=443)** Now, if I now do Get-Team, you'll see that that PowerShell one still exists.
>
> **[7:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=449)** So, if I keep saying, Get-Team, eventually... Okay, it's moving around, you can see it's up here now, and now it's gone.
>
> **[7:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=458)** So, it does take a little bit of time, obviously, that was nice and quick, but sometimes it can take a long time for that to be deleted.
>
> **[7:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-update-and-delete-teams?u=76281980&t=465)** So, we can create, we can update, and we can also delete specific teams as required.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), public (2), private (1), interface (1), require (1)
> **Tools:** powershell (7)
> **Analogies:** for example (2), picture (1), such as (1)
> **CLI Commands:** make (2)
> **Cross-References:** as you saw (1), go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - at (1)

#### How to manage channels
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=0)** - [Instructor] Now when you're using Microsoft teams, one of the features that's quite common is channels within the teams, public or private channels.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=7)** And depending on the types of channel that you create will determine the functionality that's available to it.
>
> **[0:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=12)** So for example, if you are using a private channel, then of course, you're trying to restrict who can be in that specific channel.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=21)** Now we can manage those directly with PowerShell too.
>
> **[0:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=24)** The first thing that we need to do though is, be able to retrieve the actual team that we kind of want to create.
>
> **[0:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=31)** So let me first go into here and we should already have our team object.
>
> **[0:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=38)** So team dot display name.
>
> **[0:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=41)** Okay, so that's a previous one, which means I need to obviously clear that.
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=46)** So I'm going to say team name equals PowerShell team and we'll just say, get team, display name, let me just make sure this works and dollar team name like so.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=62)** Okay, so it is called PowerShell team.
>
> **[1:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=64)** Okay, perfect just wanted to make sure that was the right value before we start trying to connect to it.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=69)** Okay, so let's take that last command we ran, which was the get team and what we'll do is populate a variable called team again, and just double check, that's got a value.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=79)** Okay, sure enough it does, so let's clear them.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=82)** Okay, so how do we get team channels?
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=84)** Well, once we retrieved the team object, we can then go in and start connecting to team channel.
>
> **[1:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=92)** Now you'll notice like lots of things in teams, it's a group ID that you pass.
>
> **[1:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=97)** So I'm going to say team, group ID and press enter.
>
> **[1:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=101)** Now this will go through and retrieve the original channel that's in there, every default team has a standard channel called general.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=110)** So it's retrieved my general channel.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=114)** So what does that look like?
>
> **[1:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=115)** Well, let's populate a variable first and we'll call this one channel and then I can say channel and let's do format list.
>
> **[2:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=124)** So this gives me an easier view.
>
> **[2:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=126)** So what we can see is we've got the idea of it, which is a unique identifier, the display name and the description, which has been passed and then of course the membership type that's been configured.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=137)** So a standard one means it's effectively a public channel.
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=141)** Now what we can do is obviously try and identify specific channel types if we needed to.
>
> **[2:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=149)** So if we go back to our get kind of channel, if I do this, you'll see you've got membership type and there's private shared, standard private shared standard.
>
> **[2:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=158)** So when I choose standard, it retrieves that but if I go back and say private, you'll notice it's not going to return any values cause I have no private channels that are in there.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=172)** Now when we create the channels, obviously we can associate specific individuals as members of those specific ones.
>
> **[3:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=183)** So if just double-check we have our channel, our channel is here.
>
> **[3:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=187)** What we can do is utilize a team channel user command and from here, I can pass in the group ID of the team, so group ID.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=200)** I can then go through and pass in a display name if I wanted to, or I can say role an owner.
>
> **[3:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=208)** Now, that's not just what happened here.
>
> **[3:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=210)** The display name simply doesn't really make any sense when you think about it, but actually it's the display name that we need to pass, which is the channel display name, not the display name of the team.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=223)** So I can say the display name and then of course I've got my channel and I can then say, display name and then do enter.
>
> **[3:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=233)** So this is now going to go and connect to it and come back and say, get me the teams channel user that's been associated to this.
>
> **[4:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=240)** So let's make this a little bit easier to view, so select, not select, we'll just do format list and what we should not get is, for this specific channel, so the general channel in my team, the admin account has the role of owner and that's the only person that's in there as a specific owner.
>
> **[4:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=260)** So we can obviously define and view the permissions that are there.
>
> **[4:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=265)** Now, of course, what's our most important task at managing teams, well, once we have the teams in place, we obviously might want to create channels.
>
> **[4:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=272)** So I'm going to create a new variable called channel name and in here, I'll call it PowerShell discussions and click enter.
>
> **[4:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=284)** Now I already have my team, which is the PowerShell team, so I can actually just create new team channel, same thing as always, it's going to need the group ID.
>
> **[4:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=296)** So team dot group ID.
>
> **[5:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=300)** At this point, it's also going to need a display name, which we just created called channel name and then we pick the membership type and for this one, I'm actually going to choose the private option, which I created as a private channel, so I'm going to click enter here.
>
> **[5:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=317)** Okay, so now it's created a private one, which means if we say, get team channel in the group ID, team dot group ID and press enter, what we should now get is both of those channels.
>
> **[5:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=333)** So we should get the display name for the general one which was created and we should also get the private one that was created as well.
>
> **[5:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=341)** Now, of course we can create as many of those as we need to, but we can also update them, so let's say when I created that, I created it as a private one and actually that's not what I want it to do.
>
> **[5:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=352)** So what we can also do here is change things around, we have, so let me just clear some space here.
>
> **[6:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=363)** We can also use what's called set team channel.
>
> **[6:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=368)** Same thing again, it's going to require that team dot group ID and at this point, if we tab through, we've got current display names, description, there's only a couple of things that we can update.
>
> **[6:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=381)** So I wanted to update, you know, the membership type, but if we tab through, there's no property for us to update, so be aware that some of the PowerShell commands themselves don't actually have the properties that you would wish to update.
>
> **[6:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=394)** So if I say current display name, I'm going to say channel name, and then you can see we have a property called new display name.
>
> **[6:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=405)** So let's say I just wanted to call it PowerShell instead of discussions. like so, I can press enter.
>
> **[6:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=412)** So that's now going to force an update against the channel, I can then go back to my get team channel and this will retrieve my newly renamed display name of the channel itself.
>
> **[7:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=425)** So a very simple process.
>
> **[7:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=426)** We can create teams create channels and then of course we can also start to remove channels if we needed to.
>
> **[7:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=434)** So I can use remove team channel, like so.
>
> **[7:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=440)** Same again, it's going to be the group ID that's required, dollar team, group ID and then I can do the display name, which in this instance is now called PowerShell and press enter.
>
> **[7:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=454)** And now it says the channel is not available.
>
> **[7:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=458)** It's not there for me to delete, it says there's no channel that has that specific name.
>
> **[7:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=465)** So what does that mean?
>
> **[7:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=466)** Well, remember there's a timing issue as well when it comes to moving, deleting, renaming, et cetera.
>
> **[7:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=475)** Just because we rename it in the user interface doesn't mean it renamed everything under the covers.
>
> **[8:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=480)** So in my team group, I have a channel and the channel is called PowerShell.
>
> **[8:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=485)** If I do enter, it still comes back and says, channel is not found.
>
> **[8:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=489)** So just be aware, we have to give it some time and then we're able to execute that delete.
>
> **[8:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=494)** And there we have it, it's now completed.
>
> **[8:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=496)** You'll see that it removed it, it didn't give me the error this time and so remember that's just a timing thing, especially as we're trying to create them, update them and delete them and remove them all at the same time, you sometimes just have to wait.
>
> **[8:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=509)** So in normal administration, you wouldn't be doing everything all in one go.
>
> **[8:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-channels?u=76281980&t=513)** So that's as simple as it is to obviously view specific teams or also go through add view channels, add channels, update channels, and also delete channels.

> [!info]- Semantic Content
>
> **Code Keywords:** private (11), let (10), pass (4), delete (4), public (2)
> **Tools:** powershell (9)
> **CLI Commands:** make (4)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (2)
> **Warnings:** be aware (2)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)

#### How to provision policies in Teams
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=0)** - Now, one of the most important tasks, when it comes to Microsoft teams, outside of creating them and provisioning them, is also the ability to manage things like policies, to be able to identify, you know, specific configuration changes that need to be made to control what individual users can do.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=18)** So, first off, let's have a look at how we can get a specific policy.
>
> **[0:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=24)** Now, you'll notice that we're using a different type of command. It's not just, Get-Team.
>
> **[0:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=30)** They have what's called Cs in front of it.
>
> **[0:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=32)** These are PowerShell commands that come directly from the Skype for Business type PowerShell commands.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=42)** So, it's going to be Get-CsTeams, and then meeting policies, messaging policies, et cetera.
>
> **[0:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=49)** So, if I just do Get-CsTeams Meeting Policy, what you'll see is it lists a whole bunch of information, directly to the screen.
>
> **[0:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=56)** And this is all of the properties for each of the policies that have been created.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=62)** So, if we scroll a bit further here, you've got one called Kiosk.
>
> **[1:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=65)** We scrolled a bit further, should be another one here that's called, Default.
>
> **[1:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=70)** And another one up here, which will be Restricted Anonymous Recording, and then another one.
>
> **[1:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=76)** So, we have these types of policies.
>
> **[1:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=77)** They're not just Meeting Policies.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=79)** So, if I do Messaging Policy, this will go back and give me one that's related to Messaging, which is, you know, can we use images?
>
> **[1:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=88)** Can we use GIPHYs, and all that kind of stuff?
>
> **[1:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=90)** We also might have policies that relate to Calling.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=94)** So, if you're allowing Calling, within teams, so get the Calling Policies.
>
> **[1:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=100)** This will go back and say, you know, "Can we forward to voicemail?"
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=102)** et cetera, things like that.
>
> **[1:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=104)** So, we have a series of policies that all available.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=109)** One of those policies, if we go back here, and just type Channel Policy is a small one that basically says, who can create channels.
>
> **[1:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=117)** And we have some kind of Default, and Global type capabilities.
>
> **[2:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=120)** So you'll see, Allow Sharing, Allow Shared Channel, Allow Private Creation, et cetera.
>
> **[2:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=125)** Now, of course, when we're creating these types of policies, obviously out of the box, there are Global Defaults, that you can modify.
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=132)** But often as an organization, you need to create your own types of policies.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=137)** So, how does that process work?
>
> **[2:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=138)** Well, the good news is, just like we use the Get capabilities, we can also utilize the Messaging kind of policies and Phone Policies, and everything else.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=151)** And they all have what's called New.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=154)** So, for example, New-CsTeams Messaging Policy, and then I'm going to press Enter, and it's going to complain, because it needs a whole bunch of different things.
>
> **[2:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=163)** So, I'm not going to fill those in yet, but we have a PowerShell commandment for that.
>
> **[2:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=168)** So, first off let's create a messaging policy.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=172)** So, we'll first create a variable called, messaging policy name, and we'll call it, PowerShell Messaging Policy.
>
> **[2:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=179)** We're going to go all out with the names.
>
> **[3:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=182)** Okay.
>
> **[3:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=183)** And then what I'm going to do is, I'm actually going to copy and paste this, from the example file into the window, just because there's too much information to kind of, go for.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=193)** Okay.
>
> **[3:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=194)** So, what we can see here, is we using New-CsTeams Messaging Policy.
>
> **[3:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=198)** We first give it the Identity, which is the name that we wish to give the policy.
>
> **[3:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=203)** And then we have various properties.
>
> **[3:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=204)** So for example, in Messaging, which is where we would communicate and chat, do we wish to allow URL previews?
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=211)** Do we wish to own it, to delete the messages?
>
> **[3:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=213)** Can the user chat?
>
> **[3:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=215)** Can they use GIPHYs?
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=216)** Can they use stickers and memes, et cetera, and some capabilities.
>
> **[3:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=220)** So we can create policies, that will control what end users can actually do.
>
> **[3:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=226)** So, I just pressed Enter, and this will create my policy.
>
> **[3:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=230)** So, I now have this policy defined and created, which means I can then start to assign those to individual users.
>
> **[3:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=238)** That's the purpose of the policy.
>
> **[4:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=240)** Now, once you've created one, what about if we realize, for example, that actually I wanted to allow GIPHYs, and I wanted to allow memes.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=248)** So, actually I got that kind of wrong.
>
> **[4:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=250)** So, what I want to do here is I want to actually go and get, and kind of update, so I can use SET commands.
>
> **[4:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=259)** So, let's do Messaging, cause that's what we created before.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=263)** Messaging Policy.
>
> **[4:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=264)** It's going to to ask for an Identity, and we can use that same variable that we just created.
>
> **[4:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=271)** So, the policy name, and I'll just put that down to the next line, and I can then say, Allow, and you'll see, we can loop through everything.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=280)** So, I'm going to say, actually, I want to update that, to be True.
>
> **[4:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=284)** And then I also want to allow memes, and I'll set that to True, as well.
>
> **[4:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=290)** And then my last one, I'm going to allow stickers, and we'll say True, and then I'll press Enter.
>
> **[4:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=298)** Okay, so what did that do?
>
> **[5:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=300)** Well, that's supposed to have updated.
>
> **[5:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=302)** So, I've got my Messaging Policy.
>
> **[5:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=304)** So we can say, Get-CsTeams Messaging Policy, and I can do Identity and say messaging policy name.
>
> **[5:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=314)** And then let's go back up to here, you can see that my Allow GIPHY is no set to True, my Allow Memes is set to True, and my Allow Stickers are now set to True.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=323)** So, not only can we create them, but we can update them as we needed to, as well.
>
> **[5:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=328)** Now, of course, outside of that.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=330)** What about if we create them, and then maybe we don't want to keep that policy?
>
> **[5:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=336)** Well luckily, we have a Remove-CsTeams Messaging Policy command, which just takes the Identity where I can say, messaging policy name, and just press Enter.
>
> **[5:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=349)** Now, that will go ahead and remove.
>
> **[5:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=351)** So, when I now run, Get-CsTeams Messaging Policy, like so, they should just return us back to my Edustudent, my Faculty, my Default, and my Global, and my custom one that I created has now been removed.
>
> **[6:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=370)** So, as you can see, it's fairly straightforward, using the standard commands.
>
> **[6:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=374)** Be aware that they are not the regular Teams commands.
>
> **[6:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-provision-policies-in-teams?u=76281980&t=377)** And if you're trying to look up the documentation online, you need to look into the Skype for Business documentation, to identify these types of commands.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (2), default. (1), private (1), else. (1)
> **Tools:** powershell (4)
> **Analogies:** for example (3), just like (1)
> **Env Vars:** url (1), set (1), giphy (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - now (1)

#### How to create templates in Teams
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=0)** - [Instructor] And one of the features available within Microsoft Teams is the ability to create Teams Templates, which means that when you create a Microsoft Teams, you can select from an existing template.
>
> **[0:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=12)** And luckily, there's a command which is called Get-CsTeamTemplateList, which will display the current templates that are there.
>
> **[0:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=22)** You'll notice they have a funny kind of reference.
>
> **[0:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=24)** It's called an OdataID and they referenced various things like managing a project, help desk, healthcare, et cetera.
>
> **[0:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=32)** Now, the good news is that you can actually go ahead and create your own templates as well if needed.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=39)** But let's first look at what's inside an existing template.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=42)** So let's take this one, which is healthcare hospital and we'll just clear this here, we'll need OData object, so I'm going to create a new variable called ODataID, which is going to contain that path that we just saw and then at this point, I'm going to say, get CS Team Template, and then I can pass an ID to that.
>
> **[1:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=64)** It's actually going to be the ODataID like so, and press enter.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=69)** Now you notice what it looks like, is a kind of a JSON structure, and that would be correct.
>
> **[1:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=74)** Everything that's contained within the template, is stored in a JSON template.
>
> **[1:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=79)** So if we just keep scrolling here, you'll see details about the name and description, which channels are being created, whether it's private or public.
>
> **[1:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=87)** We can scroll further down, there'll be list of applications that are available.
>
> **[1:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=91)** Things like do we allow giphy's and images in the chats, things like that, list of applications and then some various information towards the button.
>
> **[1:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=101)** So we've got this idea of creating templates based on specific values.
>
> **[1:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=107)** Now, to create them, it's a bit more complicated, so we have two different trails of thought here.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=112)** The first one is to, well, if we could take the existing JSON, and then we could use that as the basis, we could perhaps modify the JSON and then do it that way.
>
> **[2:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=121)** That's one way but I actually like to construct things using just PoweShell from scratch.
>
> **[2:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=127)** So I'm going to paste some variables here from the exercise file.
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=132)** We'll just click paste and you'll see that I've already created a series of variables for the name, the description, any applications, I'm using planner and then some channels.
>
> **[2:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=143)** So we have a PowerShell channel and an Errors channel, and then there's a Locale also.
>
> **[2:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=148)** So fairly straightforward, now the complicated piece comes when we try to construct the template itself.
>
> **[2:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=156)** So I'm going to paste this again in from the exercise file, it's easier to see this way.
>
> **[2:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=160)** So what we're able to do is create a new object, which is called a Team's Template.
>
> **[2:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=166)** You can see this object sitting right here.
>
> **[2:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=168)** Then, we can take all of the variables that we've created and put them in the various places that are required.
>
> **[2:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=175)** So display name, would be template name, short description, description ID, et cetera.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=180)** So we can see all of these values, I'm going to press enter here.
>
> **[3:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=184)** Now, what does that create in our template?
>
> **[3:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=186)** Well, if I press enter, you'll notice it crates me the JSON type object that we saw when we reviewed an existing one that was there.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=197)** Once we have that, so let's just clear this, we can say new CS Team Template.
>
> **[3:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=205)** I'm going to specify my locale, which is going to be the variable I created called locale and then my body of this template is going to be that variable that I just populated, so I'm going to press enter here.
>
> **[3:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=218)** Now sure enough it went through and it created an object.
>
> **[3:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=222)** It created my new PowerShell Template, the most important thing is this piece here.
>
> **[3:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=227)** It created a specific unique identifier for my template.
>
> **[3:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=233)** So what does that look like?
>
> **[3:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=234)** Well, let's just do get Team Template list, press enter and you should see at the top there, is that one that I created.
>
> **[4:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=242)** So let's grab those details and then we'll say, get CS Team Template and we'll pass in an ODataID and this time we'll paste that new one that was created and press enter and sure enough, you can see all of the values that have been associated.
>
> **[4:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=259)** You'll see PowerShell Template, the channel's called PowerShell and PowerShell, et cetera.
>
> **[4:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=264)** So now we have that template created, so of course we can then either update the template or we can remove items in the template too.
>
> **[4:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=273)** It's all about utilizing the Odata path to kind of choose what to update.
>
> **[4:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=278)** Now we could download the specific files here, the JSON again, and obviously push it back up again if we needed to, to say, we'll take this update and apply the updates.
>
> **[4:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=290)** The other option is that we can go through and modify, so if I got back to my command from earlier, which is this one, I can modify this option here to be adjusted so that it would then reflect the new values.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=307)** So we've got our template that already existed.
>
> **[5:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=309)** If I wanted to, for example, you can see I'm just browsing through my structure.
>
> **[5:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=314)** I could go through here and say true instead and I could go all the way up here to my, is favorite by default and change that one to false.
>
> **[5:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=325)** So I've just swapped those values around, so press enter.
>
> **[5:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=328)** So I have my new template object, and then this time around, what we're going to do is, I'm just going to go back and get my C Template list here.
>
> **[5:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=341)** And I need to copy my OData object because I'm going to need that for the update.
>
> **[5:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=346)** I'm then going to go in and say, update CS Team Template.
>
> **[5:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=352)** The first property that's required is Odata, so I can paste that in and then we simply need to pass in the body option again, which will be my template, and I can then click update.
>
> **[6:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=365)** So now that's forced an update into my template, so let's review back through my commands to where we did the get and sure enough when we go into the get now, we can scroll through and look for our updates and you'll see there that it's favorite is now true here and this one is now false.
>
> **[6:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=382)** So we can update at any point in those templates.
>
> **[6:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=387)** Now, what about if we realize that we don't actually want that specific template anymore.
>
> **[6:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=392)** Then that's as simple as making sure, so I'm going to say, ODataID.
>
> **[6:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=398)** I'm going to paste that one that we've got, and then we'd have a command called CS Team Template and it's just going to take my OData object, OData ID like so, and I can remove.
>
> **[6:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=413)** So now when I do my Team Template list, you'll notice that that Team's Template is now gone.
>
> **[7:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=420)** So the great news is that we can define them, download the JSON, modify if we need to and upload them using the existing JSON, or we can just construct it our self from a series of variables.
>
> **[7:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-templates-in-teams?u=76281980&t=432)** But once we define the templates, they become available to anybody who has access to create new teams.

> [!info]- Semantic Content
>
> **Exercise Files:** template (29), exercise file (2), download the (2)
> **Code Keywords:** let (6), pass (3), private (1), public (1), this, (1)
> **Env Vars:** json (8)
> **Tools:** powershell (5)
> **Definitions:** is called (2), means that (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Modifying core configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=0)** - [Instructor] Now, one of the last things to look at here, is just general core configuration.
>
> **[0:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=5)** So first off, you'll notice that we actually have, what's called the "Get-CsOnlineCapabilities," and I can say, "Get-CsOnlineUser," which is going to connect to Microsoft Teams, and try and identify, those users.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=21)** And of course, it's just so much information that comes down.
>
> **[0:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=24)** So what we have to do here, is Select-Object, and then of course, we may want to kind of, identify specific properties, that we wish to bring down.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=35)** 'Cause you can see this so much information.
>
> **[0:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=38)** When we actually go through and say, get me the Cs-User, It gives us everything that would be available for teams and also for Skype for business.
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=46)** So I'm going to say, "UserPrincipalName," and just do this.
>
> **[0:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=49)** And this will give me a list of all the user principal names, that are, online users that have access to, Skype for business and teams type capabilities.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=59)** Now, what we can do, is obviously we can retrieve specific user accounts if we need to.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=63)** So I'm going to pick my AllanD account here, and I'm then going to say, "Get-CsOnlineUser," and I'm going to pass in my identity, for that specific user, and just press enter.
>
> **[1:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=77)** So now that retrieved all of the properties that are available, for, specific users that have teams access.
>
> **[1:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=85)** Now, if we just go back to here, and say, "Get-TeamUser," okay, it's going to ask for a GroupId.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=94)** It doesn't ask me for a user.
>
> **[1:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=96)** So it's one thing to be aware of, that, when we're looking at the CsOnlineUser, that's a user that has access to teams.
>
> **[1:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=103)** Whereas a TeamUser, is somebody that's associated to a specific group.
>
> **[1:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=108)** Now we can also retrieve things, such as well, a standard kind of query that you would do, as a end user would be, well, actually, I'm trying to find out, if my users, are associated to meeting policies.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=122)** So let's go into, "TeamMeetingPolicy."
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=128)** So let's have a look at the list of the names that are here.
>
> **[2:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=130)** So we have meeting policies.
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=132)** So let me just get identity, just because, I want to know, "Select Identity."
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=141)** Okay, so we have global, all restricted et cetera.
>
> **[2:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=144)** So let's have a look for the global one.
>
> **[2:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=146)** So what I want to do, is run a query, that says, "go and get me all of the users, but filtering out, to those that have been associated to the global policy."
>
> **[2:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=155)** So, the first thing I'm going to do is, specify a variable called meeting policy, and I'll call it "Global."
>
> **[2:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=164)** What I'm then going to do, is create, what's, a filter, and filter in PowerShell are a little bit different.
>
> **[2:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=171)** So I'm going to filter what's called, "TeamsMeetingPolicy."
>
> **[2:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=175)** This is a property, that's associated to a specific account.
>
> **[2:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=179)** And then of course, I'm going to say "equal to something."
>
> **[3:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=181)** Now I'm not going to hard code the value, because I want to use a variable.
>
> **[3:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=185)** So I'm going to do something like this, where I'm able to, then say, "-f," and do "$meetingpolicy."
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=193)** So what does that filter look like?
>
> **[3:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=194)** Well, let's have a look here, You can see it basically fills in the value, and it's dynamic.
>
> **[3:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=198)** So, I'm looking for, any user, that has a teams meeting policy, equal to "Global."
>
> **[3:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=204)** Now what's nice here, let me just clear it and start back at the top.
>
> **[3:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=207)** It's I can say, "Get-CsOnlineUser," and then there's a filter option available to us, that just says "$filter."
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=216)** And this will go ahead and start to identify it.
>
> **[3:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=219)** Now it comes back and says it can't bind, the filter globally is not user policy.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=223)** And that's perfect, because it's just a, core, general one, that was created out of the box.
>
> **[3:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=229)** So, how do we, filter, by specific policies?
>
> **[3:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=233)** Well, let's go and say, "Get-CsTeamsMeetingPolicy," you'll see the names.
>
> **[4:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=242)** And then of course we can go through and update them and say, "well, let's not have that."
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=246)** We could just use "Kiosk" for example.
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=248)** Now, what does it mean by, it's not a user one that's there?
>
> **[4:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=252)** Well, if we scroll through the various properties, you can see, there's a few properties here, but there's nothing that, designates that it's a user one.
>
> **[4:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=259)** a user one, is one that was created, by you, as an admin and is available for assigning.
>
> **[4:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=267)** Say, if I go back, and change my filter a little bit, let's say my filter is, "Kiosk," go back to my, filter option, likes so, $, let's just make sure it filters right, which is "Kiosk" now, and then I'm going to say filter.
>
> **[4:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=283)** It's now going to come back with no values, because there's no users that are associated to that specific kiosk one.
>
> **[4:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=290)** So it's actually quite a common request where you want to know which users have obviously associated to a policy.
>
> **[4:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=296)** Now, some of the things that you might want to actually do, if I just clear this, is use, what's called, "Get-CsTenant," which we'll go and retrieve, information about this Microsoft 365 tenant, and anything that was associated.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=312)** So for example, "AssignedPlan," what might be there, et cetera.
>
> **[5:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=315)** So some of the standard, ways of doing this, let me just kind of clear this out here.
>
> **[5:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=321)** I'm going to pay some values in.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=323)** You can see I'm getting my tenant value.
>
> **[5:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=326)** And, as I go through and get display name, it's my Contoso one.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=330)** You can see the domain that's supported.
>
> **[5:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=332)** You can see that we're in the effective upgrade mode of "TeamsOnly."
>
> **[5:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=336)** And, I've got the "ProvisionedAsTeams", teams flag set.
>
> **[5:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=340)** Now, of course, if we wanted to, kind of move, from a previous version.
>
> **[5:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=344)** So let's say that we were still, running, in Skype for business mode.
>
> **[5:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=349)** Then of course we can come through and force an upgrade to, our entire tenant.
>
> **[5:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=356)** And that's done by utilizing some of the grant commands, that, are available to us.
>
> **[6:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=361)** Now, outside of that, there is a set of, commands, that will manage, things like the tenant federation configuration.
>
> **[6:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=371)** So for example, what are the allowed domains?
>
> **[6:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=373)** What are the blocked domains?
>
> **[6:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=375)** Are we allowing public users, teen consumers, et cetera.
>
> **[6:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=378)** So we have some high-level tenant, configuration options, that are available to us, that we can adjust if needed as well.
>
> **[6:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=387)** So some of these values are there.
>
> **[6:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=388)** So, if we just do "Set-CsTenantFederationConfiguration," you'll see that I can kind of loop through, the various options.
>
> **[6:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=400)** So if I wanted to, go through and say, "AllowTeamsConsumer," I could say "$false," click enter, then go back and say, get the configuration, And you'll see it now says it's false.
>
> **[6:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=416)** I can go back and say, "true," and that will update that value back again.
>
> **[7:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=421)** So you do have the flexibility of adjusting some values if needed.
>
> **[7:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=425)** Now, we can also get values, and configuration, about the teams, client configuration, too.
>
> **[7:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=433)** So I can say "TeamsClientConfiguration."
>
> **[7:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=436)** This has a set of properties also, So, everything within, teams, has various objects and various properties.
>
> **[7:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=445)** So for example, in the teams client, you'll see when we go to files, that there's all these various kind of integration pieces, that we can set, and change as needed.
>
> **[7:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=454)** So for example, I could say, "Set-CsTeamsClientConfiguration," and I could say, "Allow..."
>
> **[7:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=464)** Let me, change this to be a bit more restrictive, I could say, "-AllowGuestUser $true," I could then say, "-AllowGoogleDrive" and I could say that would be "$true," And then I can press enter here.
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=479)** And that will then update, the specific configuration.
>
> **[8:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=482)** So if I go back to here, and get configuration, you'll see Google drive is now true.
>
> **[8:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=486)** And we should have a guest options is now set for true, which, if I change that the other way around, and don't false, and then we trade those values, you should then see that Google Drive is now false.
>
> **[8:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/modifying-core-configuration?u=76281980&t=498)** So this will affect the client itself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this, (3), for, (2), this. (1), pass (1)
> **Analogies:** for example (5), such as (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Tools:** powershell (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)


### 5. Managing Security and Compliance

> [↑ Back to Table of Contents](#table-of-contents)

#### Explain the security and compliance features
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=0)** - [Instructor] In order for us to understand security and compliance, we first need to understand the security categories that exist within Microsoft 365.
>
> **[0:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=8)** Microsoft 365 security solutions will help you as an organization work securely from anywhere, with all the standard tools that you're used to.
>
> **[0:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=17)** There are four security pillars that are identity and access management, threat protection, information protection, and security management.
>
> **[0:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=26)** Identity and access management is about protecting user identities, and controlling access to resources based on a specific risk level.
>
> **[0:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=34)** Threat protection is about protecting against advanced threats, and then being able to recover from those attacks.
>
> **[0:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=41)** Information protection is ensuring documents and files and emails are accessed and viewed only by authorized users.
>
> **[0:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=48)** And then of course, security management is really around gaining visibility, and control over all of the security within Microsoft 365.
>
> **[0:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=56)** Now within Microsoft 365, there are core security and compliance features.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=62)** Some of these are auditing, identity protection and governance, data loss prevention, insider risk management, Defender for Identity, records management, privileged access management.
>
> **[1:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=73)** The list goes on for the types of security and compliance features.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=78)** However, not all of these features have a rich PowerShell command interface.
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=84)** So only some of these are able to be configured utilizing PowerShell, or at least utilizing modules that already exist, or the Microsoft Graph.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=94)** Now, one of the first areas is really focused on the security of the content, and some protections, and there were four kind of buckets to this.
>
> **[1:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=103)** The first one is data loss prevention.
>
> **[1:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=105)** This is about detecting sensitive content as it's used, and shared within the organization, in the cloud, on devices, and then of course tries to protect from accidental deletion or data loss.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=118)** Information governance is about managing the content life cycle for importing, storing, and classifying business critical data.
>
> **[2:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=127)** Information protection allows you to discover, classify, and protect sensitive and business critical content through its life cycle.
>
> **[2:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=136)** And then records management uses intelligent classification to automate, and then apply retention schedules for regulatory, legal, and business critical records within the organization.
>
> **[2:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=148)** We can also utilize what's referred to as communication compliance and insider risk management.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=154)** Communication compliance minimizes communication risks by helping you as the IT admin and organization to automatically capture inappropriate messages, investigate policy violations, and then take steps to minimize any of the harm between employees, and sharing of content.
>
> **[2:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=175)** Insider risk management is about detecting risky activities across the organization.
>
> **[3:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=181)** So you can quickly identify, investigate, and act on those insider risks and threats.
>
> **[3:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=187)** And then our last kind of bucket of components is audit.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=190)** So records are retained within a telemetry platform within Microsoft 365.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=197)** So every user and admin activity is recorded within the organization.
>
> **[3:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=202)** And you as an admin have the ability to search the audit log, and investigate a comprehensive list of activities across all the locations and services.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=211)** We could also perform data subject requests, which are part of the GDPR capabilities, but more importantly, we can manage eDiscovery core and advanced eDiscovery.
>
> **[3:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=220)** eDiscovery core searches across content to identify, preserve, and export data in response to legal discovery requests in eDiscovery cases, whereas advanced eDiscovery builds on top of that, by providing intelligent analytics, and machine learning to help you analyze that data even further.
>
> **[4:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=240)** So the three most common categories where you as an organization will utilize PowerShell for security compliance is data loss prevention, sensitivity labels and policies, and then lastly for searching the audit log.
>
> **[4:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=253)** These are the three most common areas where PowerShell is utilized.
>
> **[4:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=258)** PowerShell is utilized for creation of the data loss prevention policies, as well as viewing any of the false positives or actual alerts.
>
> **[4:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=266)** Sensitivity labels and policies can be created, applied, changed, updated, both on premises and in the cloud utilizing PowerShell.
>
> **[4:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=276)** And then auditing, just because the telemetry platform is so big that it's often easier to just stream the data down in PowerShell, and search it offline, or synchronize it into another application if needed.
>
> **[4:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=288)** So these are the three core areas where you can utilize PowerShell.
>
> **[4:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/explain-the-security-and-compliance-features?u=76281980&t=292)** Now, the other areas do have PowerShell commandlets, but these are the most common.

> [!info]- Semantic Content
>
> **Tools:** powershell (9)
> **Code Identifiers:** ediscovery (5)
> **Code Keywords:** interface (1), this. (1)
> **Env Vars:** gdpr (1)
> **Speakers:** - [instructor] (1)

#### Security and compliance demo
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=0)** - [Instructor] Now when managing security compliance within Microsoft 365 there is a couple of different ways of connecting purely based on supportability.
>
> **[0:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=9)** So the most up-to-date version is to utilize the Microsoft Exchange Online PowerShell module, which we already imported.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=20)** However, one of the first options is to utilize the standard PowerShell session object, which I'm going to populate here a specific user.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=29)** So we use my admin user and I'm also then going to create my creds object.
>
> **[0:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=36)** I know I probably already have one, but that's okay.
>
> **[0:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=38)** We can do get credential, username and we'll say, user press enter.
>
> **[0:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=44)** It's going to ask me to put a message in, because obviously I forgot to type it so I can say add password.
>
> **[0:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=51)** And then my box appears and I'm going to select this value for the password and paste in.
>
> **[0:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=57)** You can see my add password option here, click okay.
>
> **[1:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=60)** Okay, clear that, and then creds.
>
> **[1:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=64)** So I've got my secure string option.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=67)** Now I'm just going to paste what is required for the connection here.
>
> **[1:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=74)** And what you'll see is the session approach utilizes a standard PowerShell commandment code, New-PSSession, which is used for remoting to other machines.
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=84)** In this instance, the configuration name is Microsoft Exchange with a URI that points to ps.compliance.protection.[outlook.com](https://outlook.com).
>
> **[1:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=93)** And then we pass the creds and we get a connection.
>
> **[1:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=95)** So I'm going to press enter here.
>
> **[1:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=97)** This is going to go ahead, it changes the connection URI to be whatever the specific server is and then if I just choose session here, it creates me a remote session to the server.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=109)** Now what we actually have to do here is import that specific session that we have the remote session.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=118)** So I'm going to say import PSSession session, and I'll just use a disabled name check-in just because it's going to be faster and click import.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=128)** Now, what you can see is it's loading all of the commands directly into the same window, and you'll see the module is now loaded, but it's not called Exchange Online, it's called that unique name.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=140)** Say, if I say, "Get module" and load it, you can say that I have these kind of temp Vons that have been loaded here, which has come from that command.
>
> **[2:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=151)** So once we have that, then I can start to connect to Exchange Online or the security and compliance components, because it's the same capabilities.
>
> **[2:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=161)** The difference being that the way we connect is by utilizing a different command.
>
> **[2:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=168)** So we use what's called connect IPPSSession.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=172)** So this is going to be the same, whether we use the Exchange Online module, or we use the session-based MODULE, which we just looked at.
>
> **[3:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=180)** So I'm actually just going to press clear on here.
>
> **[3:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=182)** And I'm going to say, get the PSSession first, PSSession.
>
> **[3:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=188)** And you'll see, I've got a PSSession here.
>
> **[3:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=190)** So I've got two, five and six.
>
> **[3:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=192)** So I'm going to say remove PSSession.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=197)** And if I look for the ID here, so I'm going to say two, five, and six.
>
> **[3:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=204)** And then if I say PSSession, this time they'll be no sessions.
>
> **[3:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=209)** So now what we can do instead is say connect IPPSSession, cause it's already loaded.
>
> **[3:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=216)** Cause I have it from the Exchange Online option and I can then just press connect here.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=223)** Now what this will do is this will launch me to the browser.
>
> **[3:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=228)** I can then select my account, wait for it to connect now to it gives you a message very similar by saying it's redirecting and doing whatever, and now I'm connected, but it doesn't return any values whatsoever.
>
> **[4:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=242)** So we don't actually know if we are connected.
>
> **[4:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=246)** While we do we can execute obviously a specific command if we needed to, to see if we are connected.
>
> **[4:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=253)** So for example, if I wanted to get specific information, so let's say, "Get activity alert" for example, now it didn't return anything, but it did execute as a command.
>
> **[4:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=268)** So we know that we have a connection at least to the tenant.
>
> **[4:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=273)** So we can connect either using the session approach or we can connect using this approach.
>
> **[4:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=278)** Or our last one would be that we use the Microsoft Graph.
>
> **[4:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=283)** We pass all of our scopes in and our scopes are a bit more complicated this time.
>
> **[4:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=288)** So I'm actually just going to copy and paste the list of scopes that we wish to utilize.
>
> **[4:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=293)** So let me just go here and paste and you'll see that we've got security actions, security events, policies, and e-discovery.
>
> **[5:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=301)** So the difference is when we connect with the Microsoft Graph, we obviously have to specifically choose the permissions from the Microsoft Graph to connect.
>
> **[5:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=310)** I'm not going to connect this way, but that's how we would do it.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/security-and-compliance-demo?u=76281980&t=312)** So now that we have a connection, we're ready to execute any of the commands that we need to modify security and compliance.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), pass (2), let (2), import. (1)
> **Env Vars:** uri (2), module (1)
> **Tools:** powershell (3)
> **Analogies:** for example (2)
> **URLs:** [outlook.com](https://outlook.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How to manage Safe Links, Documents, and Attachments
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=0)** - [Instructor] Now, one of the first areas of focus is really around the ATP type components.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=7)** Now, what we've got here is we can use Get-ATP, and we have these ATP type.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=13)** So it could be policy, it could be something else.
>
> **[0:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=16)** Now, first off, I just need to make a connection to the environment.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=20)** So what we'll do for this instance is for the purposes of this, I'm just going to use a session-based control.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=27)** So I'm going to paste all this into here, like so.
>
> **[0:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=31)** This will connect me.
>
> **[0:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=32)** We'll wait for the inputs into the existing session.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=35)** So it has all the properties that I need and the commands.
>
> **[0:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=38)** Notice it comes back and complains because I already kind of had it in there once.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=42)** You can use what's called allow clobber, which means that my command would change to something like this.
>
> **[0:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=49)** And when I do a low clobber, it basically comes in and will connect.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=52)** And there we go, you can see it's connected now.
>
> **[0:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=54)** What we can then do is say, get module, just to make sure that we have them connected.
>
> **[0:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=59)** And sure enough, I've got connections into here.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=62)** Now, what I also have to do is I have to say whether it's loaded all of my commands that I'm looking for.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=69)** So my first one here is Get-AtpPolicy, but notice it doesn't resolve.
>
> **[1:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=76)** I'm not able to access the Get-AtpPolicy components because I need to first as well, create IPPSS session to that one.
>
> **[1:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=88)** And I'll use my creds object and just press enter.
>
> **[1:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=91)** So I now have a session connection and I have a connection using the exchange one.
>
> **[1:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=97)** Now, what does this look like?
>
> **[1:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=99)** Well, let's have a look at the get module.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=102)** Now notice what it's doing.
>
> **[1:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=103)** It's just creating the same thing.
>
> **[1:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=104)** So this is an interesting point to make, it doesn't matter how we connect, what you end up with is the same kind of modules connected.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=114)** Doesn't matter whether it's the exchange online module, whether it's a connect IPPSS session module, or whether it's a new session.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=122)** What we also need in order to be able to successfully manage is an exchange online one too, because some of the security and compliance options reside in exchange online.
>
> **[2:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=134)** So we'll make a connection to exchange online, which means we'll have a security and compliance connection and an exchange online connection also.
>
> **[2:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=143)** Now, if we say, get module and go back here, now you can see that it's loaded something separately here, and you'll see that I've got things that have ATP in the name.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=154)** So let me see if I can do that and sure enough.
>
> **[2:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=157)** It now starts to resolve my ATP type policies as well.
>
> **[2:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=164)** So let's clear this and let's start there.
>
> **[2:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=167)** So to look at the ATP policy, we're going to say, Get-AtpPolicy for office 365. And if I scroll up here, you can see that I have a specific policy.
>
> **[2:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=179)** Lots of the settings are configured for false, which means if I wanted to retrieve some specific values.
>
> **[3:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=186)** So let me go over here because often the standard view isn't great. So let's just paste from the exercise file here.
>
> **[3:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=192)** You can see that my enable safe links, my web access, they're all set to false with odd ones being set for true.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=200)** So what we need to look at is, well, how do we kind of adjust those? Can we adjust those?
>
> **[3:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=206)** Can we update them as needed as well?
>
> **[3:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=209)** So the AtpPolicy options say, if I say policy set-AtpPolicy, then you'll see that I've got all of those properties that are available to us. So allow, click through enable safe links for office 365 clients.
>
> **[3:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=226)** So let's say I wanted to put that as true. I could do this, set that value for that policy. Okay.
>
> **[3:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=235)** If I then go back to looping and getting the original policy like so dollar policy, if we go back to the values that we just looked at, which was for clients, you can say that it's now true, so we can update these policies at any point.
>
> **[4:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=252)** So that's kind of a general advanced threat protection policy. That is that.
>
> **[4:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=257)** There is also different options available to us, such as SafeAttachmentPolicy, which in my talent is not configured whatsoever. I can say, Get-SafeLinksPolicy and let me go here as well.
>
> **[4:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=272)** And you'll notice that there's no safe links policy now in your talent, you may have them, but in the default tenant, they don't exist.
>
> **[4:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=281)** So how do we actually go through and create them? Well, first thing is let's create a name for a safeattachmentpolicy, so safeattachmentpolicyname, and we'll call it PowerShell, Safe Attachments.
>
> **[4:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=297)** So we have a policy name.
>
> **[4:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=299)** I then need to create what's called a policyrule instead. So that cause a bit of policy.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=307)** So have safeattachment policy attachments rule.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=312)** Okay. So we have a rule name.
>
> **[5:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=314)** I then need the email, which is going to be my user account.
>
> **[5:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=319)** Cause I already have that one.
>
> **[5:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=321)** And then I'm going to set my send to variable and I'll just use that as the user.
>
> **[5:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=328)** So it's going to send it to me either way.
>
> **[5:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=330)** What we can then do is say policy equals New-SafeAttachmentPolicy.
>
> **[5:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=337)** And then we go to the next line here. So I have space name, safeattachmentpolicyname.
>
> **[5:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=343)** Then I can go through and say, well, firstly, I'd like to enable that.
>
> **[5:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=348)** I also wish to enable redirect, which means that if there's redirects for the attachments and inside the policy, it will update that.
>
> **[5:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=357)** And then I'm going to say redirect address, and I'm going to send it to my email.
>
> **[6:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=363)** So I'm going to click okay here.
>
> **[6:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=365)** So that's going to create me the new safe attachment policy.
>
> **[6:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=368)** So if I go up to my first command that we executed and say, get the policy, sure enough It's there with some basic parameters that have been set.
>
> **[6:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=377)** Now, when we create a policy, we need to go through and create a rule for that also say, if I say New-SafeAttachmentRule, and then go to the next line, my name for this rule will be dollarsafeattachmentrulename.
>
> **[6:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=396)** I can then go through and say safe attachment policy, which is the policy that I just created.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=403)** And then who I want to send that to send to member of send to, oops, let me go back here.
>
> **[6:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=414)** I need to do policy.Name.
>
> **[6:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=418)** There we go. Okay.
>
> **[6:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=419)** So now we have a rule that's been added to our policy.
>
> **[7:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=424)** The same exact process works for either safe links policies, where we're able to go through and set those values as well as any of the safe attachments policies.
>
> **[7:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=435)** Now, of course, let's say that we liked our policy.
>
> **[7:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=439)** So let me go back to my get attachment policy here, but let's say that we wanted to, you know, perhaps update that a little bit to change what I want it to do So what I can then do is say Set-SafeAttachmentPolicy.
>
> **[7:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=454)** I've got my identity, which is going to be my safeattachmentpolicyname.
>
> **[7:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=461)** What I'm then going to do is go to the next line here I have got my redirect, which I'd specify as true.
>
> **[7:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=469)** So we'll keep that one there and then I'm going to change my action and I want to make it so it's dynamic delivery.
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=479)** So what that means is where my attachments get put into my email, that they will get scanned and then removed and then reattached later on.
>
> **[8:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=487)** So we can go back to here and then I'm going to say, redirect address Dollar. And then I can just say, use it.
>
> **[8:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=495)** And then we'll update that attachment.
>
> **[8:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=497)** So the attachment policy gets updated to now reflect dynamic delivery instead.
>
> **[8:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=503)** So what we can then do is I can say, well, go and get me that policy.
>
> **[8:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=509)** And I'm going to say format list, which will give me all of the properties.
>
> **[8:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=514)** And then you can see the properties where we've tried to update. So action, you can see is dynamic delivery.
>
> **[8:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=521)** So those values have been updated now by setting and updating using those update commands.
>
> **[8:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=527)** Now of course, our last option here for any of the policy types that we can kind of look at here, whether it's document links or safe links.
>
> **[8:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=535)** So safe links are just the same.
>
> **[8:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=537)** If we go through the process of creating a safe links policy, then we're going to utilize New-safeLinksPolicy.
>
> **[9:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=546)** And then we pass the same and name. Then we pass a, put, some values in here is enabled, is the one that I'm after is enabled and obviously dollar true. Once that's been created, then we'll say New-SafeLinksPolicy and actually get rid of policy. We're going to say rule.
>
> **[9:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=567)** And then we do the same process that we did for the attachments.
>
> **[9:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=571)** So we have document protections that exist at the top level for ATP.
>
> **[9:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-manage-safe-links-documents-and-attachments?u=76281980&t=575)** Then of course we have attachment ones and then we have actual link ones that we can create as well and create and manage utilizing PowerShell.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), module (5), this, (2), pass (2), type. (1)
> **Env Vars:** atp (7), ippss (2)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (4)
> **UI Navigation:** go to (3), scroll up (1)
> **Definitions:** means that (2), is an  (2)
> **Tools:** powershell (2)
> **Code Identifiers:** safelinkspolicy (1)

#### How to create alerts and activity alerts
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=0)** - [Instructor] As part of managing the security and compliance within Microsoft 365, we need to be able to review alerts such as activity alerts or protection alerts.
>
> **[0:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=10)** So, being able to identify the threats.
>
> **[0:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=13)** Now, in order for us to do this there were two commandlets that we can actually have a look at.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=18)** And the first one is ActivityAlert.
>
> **[0:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=23)** And this, if I just press Enter, I don't have anything in my tenant because I have no rules that have been defined.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=29)** So an ActivityAlert, which will create shortly is some activity took place.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=35)** So for example, let's say I had tried to share a file or, invite somebody into the tenant.
>
> **[0:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=43)** That would be a type of ActivityAlert.
>
> **[0:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=46)** The other option is what's called a ProtectionAlert.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=52)** Now I do have some of these listed, so we'll leave that go in.
>
> **[0:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=54)** But there was some ProtectionAlerts that come in and you can see they are malicious types of URLs and things like that.
>
> **[1:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=60)** These are threat ones.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=62)** These are specifically for security and compliance.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=66)** So an example of this would be creating an alert policy that triggers when someone in the organization deletes something, let's say a content search or something else, you could then be notified of that one.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=78)** So those two commands, the get commands, the get activity alert and the get protection alert would allow us to obviously retrieve information.
>
> **[1:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=86)** Now, what I can do is using any of those I'm also able to view any of those alert details.
>
> **[1:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=94)** So if we just create a variable called alert name, and what I'll then do is just kind of scroll up a little bit here, and you can see that we've got some with the name and et cetera.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=102)** So I'm going to say a potentially malicious URL click was detected.
>
> **[1:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=107)** That's a long name.
>
> **[1:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=108)** And I'm just going to paste that into there.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=110)** And that becomes my alert name.
>
> **[1:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=112)** Let me just clear some space here.
>
> **[1:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=114)** And I'm going to say, Get-ProtectionAlert, and then the identity is going to be the alert name.
>
> **[2:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=121)** And I can press Enter.
>
> **[2:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=123)** Now, of course it retrieves all of the information about that specific ProtectionAlert.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=128)** So you can see it's got some details here.
>
> **[2:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=131)** Who is it going to notify?
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=132)** So the tenant admins, what type of threat category it sits in, as well as, the details that you want to return to the end-user or the admin.
>
> **[2:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=140)** So the comment here is we have detected blah, blah, blah.
>
> **[2:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=143)** So you get that information kind of listed here in the actual alert itself.
>
> **[2:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=148)** Now, it's great that we can kind of view those alerts.
>
> **[2:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=150)** We can also see those in the tenant directly.
>
> **[2:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=153)** Now what about if we wanted to create a specific alert a kind of for activity.
>
> **[2:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=159)** So be notified of something.
>
> **[2:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=161)** So let's just create some variables here.
>
> **[2:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=163)** So I'm going to say alertname, and we'll call it external sharing alert.
>
> **[2:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=169)** So that's going to be the name that we wish to choose.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=172)** I'm then going to say the operation that I would wish to utilize.
>
> **[2:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=178)** I'm actually just going to copy and paste to my operation here.
>
> **[3:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=181)** Just a piece of text.
>
> **[3:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=182)** So this is going to be looking for sharing invitations that were created.
>
> **[3:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=187)** I'm also then going to specify the user that I wish to notify at this point.
>
> **[3:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=194)** So who's my user account that I wish to send the email to, for example.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=200)** So let's just stick with that admin account for now.
>
> **[3:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=203)** So I'll just paste my admin account in.
>
> **[3:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=206)** Then of course I can start to filter if I want it to the specific users.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=211)** So I could say this specific user, or just leave it blank here.
>
> **[3:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=214)** And then I can also put a description.
>
> **[3:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=217)** It's always helpful when creating any type of policies within Microsoft 365, that you kind of have a description.
>
> **[3:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=226)** So (murmurs) this can view and understand the logic for you creating that type of policy.
>
> **[3:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=232)** So I've got my various details.
>
> **[3:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=233)** I'm not going to filter it to a specific individual.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=236)** And then what we can do is say New-ActivityAlert.
>
> **[4:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=241)** I'm going to go to the next line here to give me some space, and then we're going to start tying everything together.
>
> **[4:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=245)** So name, it's going to be alert name.
>
> **[4:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=249)** Then I'm going to say, operation will be the operation itself.
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=255)** I can say notify user.
>
> **[4:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=257)** You can see that as you name the variables, the right name, it kind of makes sense as you go all the way down.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=263)** So I'm going to say description and $description.
>
> **[4:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=266)** So I have my information created and I can now press Enter and sure enough it goes ahead and creates me an activity alert.
>
> **[4:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=274)** You can see the name, External Sharing Alert.
>
> **[4:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=276)** You can see some configuration of it was created by me.
>
> **[4:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=279)** It's full auditing.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=280)** You can see it's an activity and it's this specific activity that we're targeting.
>
> **[4:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=285)** Now, what does that look like?
>
> **[4:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=286)** So if I say, Get-ActivityAlert, notice it now returns that activity alert.
>
> **[4:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=293)** Because the interesting thing is we're not actually viewing the alerts, we're viewing the rules or the policies that we've created to retrieve that.
>
> **[5:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=301)** Now that's an activity alert.
>
> **[5:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=303)** Now the creation of a protection alert is a little bit different.
>
> **[5:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=308)** So protection alert is obviously one that sits squarely inside security and compliance.
>
> **[5:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=313)** So if I go back and create me a new alert name, and this time we'll call it a Search Deleted.
>
> **[5:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=321)** So we're going to call it that because you want to capture, when somebody tries to delete something, as far as a content search would go.
>
> **[5:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=329)** Then of course, I need to have an operation of some description.
>
> **[5:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=333)** And the operation is called SearchRemoved.
>
> **[5:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=337)** So fairly straightforward there.
>
> **[5:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=339)** Then of course, I'm going to have my notifyuser.
>
> **[5:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=343)** And actually what I can just do is just populate it back with the same value, because I already have that address configured.
>
> **[5:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=349)** Now a new type, which is available inside the actual protection alerts is the threat type.
>
> **[5:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=356)** And this is an activity which is the threat type that we're trying to capture.
>
> **[6:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=361)** And then lastly, we've got what's called the aggregation type.
>
> **[6:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=367)** Now the aggregation type is an option where it brings everything together.
>
> **[6:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=372)** So we have alerts are triggered for every occurrence or they are triggered based on volume or they are triggered when it reaches an unusual level.
>
> **[6:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=382)** Now, I'm going to just aggregationtype.
>
> **[6:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=388)** And I'm just going to put it as none, which is the default.
>
> **[6:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=390)** So, basically I want it to happen every time it identifies the action, then just to go ahead and set in.
>
> **[6:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=399)** Otherwise I could pick the other option, like simple aggregation, et cetera.
>
> **[6:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=403)** So I've got my options name.
>
> **[6:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=405)** Now I'm going to say New-ProtectionAlert, go to the next line.
>
> **[6:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=409)** And the same thing as before, we're going to go through the variables here, alert name, I'm then going to go to category.
>
> **[6:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=417)** And for my category, I didn't create a variable for this, but that's okay.
>
> **[7:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=421)** We can actually just go through and type the values too.
>
> **[7:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=423)** So it'll accept text values.
>
> **[7:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=426)** So one of the categories is Others.
>
> **[7:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=429)** And so we'll put it as that one.
>
> **[7:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=431)** We can also go and start populating all of the other options.
>
> **[7:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=436)** And that's not the one I wanted.
>
> **[7:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=437)** Notify user, $notifyuser.
>
> **[7:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=442)** I've got my ThreatType, $threatType.
>
> **[7:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=449)** Then my Operation.
>
> **[7:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=452)** I've got my description, but I don't necessarily need to have that one.
>
> **[7:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=456)** But the most important one is my AggregationType and I can do my aggregationtype, and I can press Enter here.
>
> **[7:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=463)** And this will now create me the new protection alerts.
>
> **[7:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=465)** So if I scroll up, it's called Search Deleted.
>
> **[7:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=468)** You can see the name here.
>
> **[7:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=469)** And if I scroll up here, you can say it's an activity and it's auditable.
>
> **[7:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=474)** And it's going to send me a message here.
>
> **[7:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=476)** And the operation is SearchRemoved.
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=479)** So, creating those alert options allows me to be able to capture and retrieve in the view, all of those alerts that might have taken place.
>
> **[8:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-alerts-and-activity-alerts?u=76281980&t=489)** Now of course, when we want to retrieve all of that, these alerts are then viewable inside the actual logging mechanism inside Microsoft 365.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), type. (2), else, (1), delete (1)
> **UI Navigation:** scroll up (3), go to (3)
> **Definitions:** is an  (2), is a  (1), is called (1)
> **Analogies:** for example (2), such as (1)
> **Code Identifiers:** threattype (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### How to create data loss prevention policies
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=0)** - [Instructor] One of the main security controls within Office 365 and Microsoft 365 is data loss prevention policies.
>
> **[0:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=7)** We are able to retrieve any of the DLP compliance policies by simply running, get DLP compliance policy.
>
> **[0:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=15)** Now, of course, all it gives me is some basic information.
>
> **[0:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=18)** However, if I pipe this value out and then maybe do select star, which we can do as a value, you'll see it returns all of the items for every single one.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=29)** Now, though, that's helpful, it's a bit hard to kind of view.
>
> **[0:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=31)** So I'm going to take the name here and what I can then do is actually just filter out the values by let's just create a variable here, we'll put the name in, and then I'll just say, get DLP compliance policy, I'll do identity and I'll say, use the DLP name and then what we'll do is just format that as a list like so.
>
> **[0:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=57)** And of course it gives me that same information, but it's just for the one policy, not both of them.
>
> **[1:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=62)** Now of course, what you can see from here is what the policy does.
>
> **[1:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=65)** So this policy is specifically for SharePoint online and it has a few other bits of configuration, but nothing spectacular and there's no extra queries, no nothing it's just a standard.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=78)** Now what's interesting though, is it just shows me the policy details.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=82)** What about the rules that make up the actual policy?
>
> **[1:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=86)** So let's say get DLP compliance rule, and then we'll be able to go to policy and then of course I can just use my DLP name again, and this will now go ahead and show me that there's a rule in there called Project Olivine DLP policy rule.
>
> **[1:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=105)** So now, I want to be able to get information about that specific rule.
>
> **[1:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=109)** So if I go back over here, I could say dollar rule equals, that will populate the rule for me and then I can pipe that out as we did before and say format list, and then I'm able to get the details about the specific rule that makes up that specific policy.
>
> **[2:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=128)** And you can see I'm still scrolling and there's lots and lots of values here.
>
> **[2:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=132)** So if we keep going and going and going, you can see all of these properties are available, which you would normally just update in the user interface are available to us directly within a PowerShell.
>
> **[2:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=144)** So we're able to manage the DLP policy and the rules.
>
> **[2:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=149)** So obviously that's just retrieving the information that's there.
>
> **[2:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=153)** Now we also have the ability to perform specific types of requests.
>
> **[2:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=159)** So we could go through and, you know, view a specific data loss prevention report, for example, so once we have policies in place, so let me just come into here, let me just clear this out.
>
> **[2:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=171)** What I'm able to do here is say, get DLP detections or well detections report and press enter and of course, there's no detections available to us, but if I had detections, you'll notice that I got actions, source, page and end date, the compliance policy, aggregation, et cetera, there's various options available to us.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=193)** So the detections report can simply just take a start and an end date depending on the information that it's retrieved.
>
> **[3:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=200)** Now, I can also obviously view the same information if I wanted to pass the specific compliance policy.
>
> **[3:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=209)** So let's say we run that same command, detection report, I can then go through and say, what I would like to do is run that with a specific policy.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=223)** So let me go here and then of course, I can say my DLP name and go ahead and it would execute.
>
> **[3:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=229)** Now, obviously these are just brand new out of the box, so there's no content that's there, but the get DLP detections report will return any of the values that's identified when those items have actually been created.
>
> **[4:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=241)** Now, what about if we wanted to not just view them, but we wanted to start creating our own data loss prevention policies?
>
> **[4:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=248)** Well, the first thing we have to focus on is the types of things that we can identify.
>
> **[4:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=254)** And this is done by first understanding that DLP utilizes sensitive information types.
>
> **[4:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=261)** So if I just press enter here, you can see there's a whole host of different sensitive information types.
>
> **[4:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=266)** These are provisioned by Microsoft in the tenant and match different countries, versions of driving licenses, tax numbers, passport numbers, et cetera.
>
> **[4:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=275)** And then we have these other ones called Project Obsidian, et cetera, which are labels that we can create.
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=280)** So these specific sensitive information types are available to us, so that we can then create a DLP policy that tries to identify content based on that.
>
> **[4:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=293)** So how do we create a new DLP policy?
>
> **[4:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=297)** Well, the good news is, that there's a simple command within exchange PowerShell, which is what we connected to called new DLP policy.
>
> **[5:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=307)** So if I just clear my screen here, say new DLP policy, and we'll go to the next line.
>
> **[5:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=314)** What it's going to require at this point is a name and we could create variables if we needed to, but I'm going to call this DLP policy test.
>
> **[5:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=323)** We can then go in and choose what the template should look like and the template is the specific name of the sensitive information type.
>
> **[5:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=334)** Now, luckily this is one of them, which is PII data, so we can just use that as the template instead.
>
> **[5:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=341)** And then of course at that point, I'm able to create a new DLP policy.
>
> **[5:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=346)** So this will now go ahead and create the policy.
>
> **[5:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=348)** Now, as before, remember a policy comes in two parts, you have a policy and you have a rule.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=354)** So right now this is an empty shell, it's just created an exchange DLP policy without any rules whatsoever.
>
> **[6:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=363)** It will just be looking for the sensitive information type.
>
> **[6:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=366)** That's one way of creating them and those are specifically targeted for exchange.
>
> **[6:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=372)** Now, if we're looking at pure security and compliance, then we're going to use a different command, which is similar to the one that we first looked at, which is going to be new DLP compliance policy.
>
> **[6:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=385)** So that one's created, but that's only for exchange.
>
> **[6:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=388)** So if I was going to create one that will be for Microsoft 365 in general, then of course, I'm going to say new DLP policy.
>
> **[6:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=398)** I'm actually going to populate a variable at this point because I'll need to use that policy name to be able to create the actual rule that goes with that.
>
> **[6:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=407)** So once we have our kind of basis created, what we can then do is start to apply various things to it.
>
> **[6:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=416)** So for example, in here, it's going to require a name, it's going to require, so let's just go here and say name and we'll call this DLP compliance policy test, put a space back here.
>
> **[7:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=432)** Okay, so that's my name.
>
> **[7:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=433)** It's also then can have any other kind of sets of information.
>
> **[7:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=439)** So if I go back to my policy, you'll say it's created it and it was enabled, but it has no other properties associated to it.
>
> **[7:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=448)** So that's helpful, but doesn't really do anything.
>
> **[7:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=451)** So how do we update one while we can say, set DLP compliance policy, it's going to say well, it can say as we tab through, there's lots and lots of them here, so I'm going to go back to my identity here and in my identity option, I'm going to specify what that compliance policy is going to be.
>
> **[7:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=473)** So it can be the name or it can be whatever the policy is, so I'm going to say policy dot, and let's say name, we'll go to the next line.
>
> **[8:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=482)** At this point, I can start adding various sets information.
>
> **[8:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=487)** So if we just kind of tab, so one drive shared, remove third party, remove teams confirm, remove, remove one drive shared, add third, add exchange location, so add teams location, force priority.
>
> **[8:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=502)** You can see we've got this idea of removing and adding various places.
>
> **[8:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=507)** So exceptions and updating at an end point at a SharePoint location.
>
> **[8:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=512)** And then for the SharePoint location, we might actually want to add a specific URL for a SharePoint site.
>
> **[8:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=519)** So for this example, we'll just use one of the SharePoint sites.
>
> **[8:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=523)** Let me go to the next line, so I've added a SharePoint location and what I can then do is specify the mode that we wish to execute in.
>
> **[8:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=533)** You may wonder what the mode actually be.
>
> **[8:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=536)** Well, the mode itself is the mode of the policy, which will either be enabled, disabled, test with notifications or test without notifications.
>
> **[9:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=546)** So this is how we implement.
>
> **[9:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=548)** So I'm going to to say test without notifications and press enter and that's going to update my DLP policy.
>
> **[9:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=554)** So how do we get our DLP policy?
>
> **[9:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=557)** Well remember we can say, get DLP compliance policy, if I just press enter now, you can say I've got my policy here.
>
> **[9:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=565)** So I'm going to go back and just say, get DLP policy, identity, paste the name in, press enter and of course we can say, select star and it will give me all the details again.
>
> **[9:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=578)** If we scroll upwards, you'll see that my SharePoint location is configured for that Contoso brand site and the mode that we sent is test without notifications.
>
> **[9:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=588)** So that helps me create the actual policy.
>
> **[9:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=591)** Now you can add rules to that now.
>
> **[9:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=594)** So right now it's just a default one that says, this is a policy with a location and it's going to be test mode, but there's no rules defined in there at all.
>
> **[10:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=606)** So let's go to here, new DLP compliance rule, which is what we want to create.
>
> **[10:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=613)** Let's go down to the next line.
>
> **[10:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=616)** I'm going to give it a name.
>
> **[10:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=618)** Now of course, it's just put in here and we'll call it test rule like so, and then the next one, we can go in and say, well, what is the policy it's associated to?
>
> **[10:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=629)** So I'm going to say policy dot name and then the next one is what we want to do.
>
> **[10:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=634)** So I'm going to say content, let's do contains sensitive information, and this is done by populating a kind of a hash table of values.
>
> **[10:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=644)** So I'm going to say name equals and then of course, I just need to know what my sensitive information type is actually going to be.
>
> **[10:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=652)** So remember we looked at using a specific sensory information type, such as PII data or something else.
>
> **[11:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=660)** So we can obviously go in and start adding what that would be.
>
> **[11:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=664)** So, let's say we wanted to use the same one that we utilize before, or maybe something smaller.
>
> **[11:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=671)** So let's use credit card number, for example, as one of the options.
>
> **[11:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=675)** So now we've got that, we can go back and then what I'd like to do is update a value that would say block access, and then I'm going to say true, and then press enter.
>
> **[11:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=685)** So this is now adding my rules, if I scroll up to the rule you can see, DLP compliance policies test rule and as we scroll up, you'll see all of those properties that we had before when we looked at the last rule are all listed out and you can see, this is my policy rule test.
>
> **[11:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=701)** You can scroll all the way down, there's various properties updated.
>
> **[11:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=704)** So once we've created those, then we're able to utilize those and we can obviously manage them either in the UI or directly here.
>
> **[11:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=713)** Now, what about if you needed to actually get rid of a DLP policy.
>
> **[11:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=716)** Well fairly straightforward, we can use remove dash DLP compliance policy, passing the identity, and we'll say policy dot name and enter.
>
> **[12:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=730)** And it's going to ask me, I'm going to say yes, and it's going to go ahead and remove that policy.
>
> **[12:16](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-data-loss-prevention-policies?u=76281980&t=736)** So not only can we add the policies which are just an exchange using new DLP policy, we can add compliance policies and we can add rules to both of them and we can also remove them as needed.

> [!info]- Semantic Content
>
> **Env Vars:** dlp (32), pii (2), url (1)
> **Code Keywords:** let (14), require (3), type. (2), interface (1), pass (1)
> **UI Navigation:** go to (5), scroll up (2)
> **Analogies:** for example (3), similar to (1), such as (1)
> **Exercise Files:** template (3)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** go back to (2)
> **Tools:** powershell (2)

#### How to create sensitivity labels
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=0)** - Along with Data Loss Prevention Policies and Sensitive Information Types, we have what's called Sensitivity Labels.
>
> **[0:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=6)** Now, labels are simply retrievable by using what's called Get-Label, which we'll go ahead and look at the system and retrieve labels that are allowed to be associated to content. So for example, files and emails.
>
> **[0:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=20)** So when I did a quick search here using Get-Label, I can retrieve the list of all of the labels that are available.
>
> **[0:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=26)** And some of these are Out-of-the-Box Microsoft ones that are there.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=29)** Now if I wanted to view specific details about a label, then I could simply come in here and say, let's do Highly Confidential. I'm going to go into there.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=39)** "Highly Confidential" as the name.
>
> **[0:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=41)** And then of course I can say, Get-Label.
>
> **[0:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=45)** My Identity will be the labelname.
>
> **[0:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=49)** And then we can just pipe all of those values out into a list like normal.
>
> **[0:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=54)** And sure enough, it goes that funny kind of structure that you expect to see.
>
> **[0:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=58)** But as we go through here, you can see this is my label.
>
> **[1:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=61)** It talks about why it's so important, and it's a sensitivity type.
>
> **[1:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=65)** And what type of data it's looking for.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=66)** You've got local options, label options.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=69)** You can see they're all squashed up into these funny kind of blocks. Almost look like JSON.
>
> **[1:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=74)** And this is because when you create the labels, everything is stored in kind of hash table JSON objects that are then saved, and you can retrieve them later.
>
> **[1:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=83)** So, it can make it a bit complicated when you're trying to create them utilizing PowerShell.
>
> **[1:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=88)** Now, what we can do is when we created a label, we're also able to get label policies because remember a label doesn't really do anything unless it's associated to a policy.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=102)** So if I go into here, you can see I've got policy.
>
> **[1:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=105)** So, what I'm going to do here is I'm going to find a quick value that I'm looking for here.
>
> **[1:50](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=110)** So, we've got the type and I'm looking for specific field, identity. We'll do Name.
>
> **[1:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=118)** So, let's do Select Name.
>
> **[2:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=123)** So, you can see that I have two specific policies.
>
> **[2:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=126)** We have the global sensitivity label policy, and then the Project Obsidian label.
>
> **[2:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=130)** Now, of course the label is associated to the policy.
>
> **[2:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=134)** The policy is what makes the label valid and can be utilized.
>
> **[2:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=141)** Now, of course, to create a specific label, it just requires a couple of different things.
>
> **[2:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=146)** So, let's first go in and create a label name.
>
> **[2:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=150)** So, I'm going to go in and set my label as "Test Label."
>
> **[2:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=155)** I then also can put a label description in and I'll call this "Test Label" again.
>
> **[2:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=163)** So, we have a description and a label this time, and I can just create a label like that.
>
> **[2:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=169)** It doesn't have any other values associated to it.
>
> **[2:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=172)** But of course, when we create them, we obviously want to configure lots and lots of different information around text colors, font sizes, et cetera. Whatever you want to do.
>
> **[3:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=183)** Do you want to put a watermark on it and things like that.
>
> **[3:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=186)** But for now, we'll just create New-Label, like so.
>
> **[3:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=191)** Go to the next line.
>
> **[3:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=192)** I'll say Name. Labelname. Next line down.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=197)** And it'll be... I'll choose DisplayName.
>
> **[3:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=201)** And we'll use the labeldescription, and press Enter.
>
> **[3:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=205)** Okay. Now, notice what happens.
>
> **[3:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=207)** If there's a property that we haven't passed, it'll prompt it for us. So, that's good.
>
> **[3:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=212)** So, I can go here and say -Tooltip, and I'm going to say "Test." And press Enter.
>
> **[3:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=220)** And then it populates that value for me.
>
> **[3:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=222)** So if you're ever stuck, as you're creating things like in PowerShell, and you're not sure, then you can come into here, run it, and see what properties obviously come back.
>
> **[3:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=231)** And obviously at that point, then you would go back and change what's being done.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=236)** Now, of course, if we create the label, we may want to associate specific things.
>
> **[4:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=242)** So, I created a label that doesn't really do anything.
>
> **[4:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=244)** It just has a name and a description and kind of a tool tip that pops up.
>
> **[4:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=249)** So, what I've got here is the information.
>
> **[4:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=252)** So, what I'm going to do is just retrieve this label again, and you'll see I have an identity.
>
> **[4:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=260)** And what I'll do is I'll just say labelname.
>
> **[4:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=266)** Let's just make sure it retrieved my label.
>
> **[4:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=268)** And sure enough, I have a variable populated.
>
> **[4:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=270)** Now to update a specific label, we can actually use the Set-Label option.
>
> **[4:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=278)** All we have to do is retrieve the identity of the one that we're looking for.
>
> **[4:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=282)** So I'm going to say label.Id, because that's the one I want to update.
>
> **[4:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=288)** And then I'm deciding what I would like to update.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=291)** And I think I'll use the LabelActions.
>
> **[4:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=294)** So what I'm going to do here is I'm actually just going to Copy and Paste from the exercise file here.
>
> **[4:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=298)** And I'll paste that into there and click Paste.
>
> **[5:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=302)** And then what you'll see is it's using that funny JSON type format or what's really a hash table, and I've got a type which is content marking.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=312)** It's going to add me a header with some settings.
>
> **[5:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=315)** I'm going to be using font size 10.
>
> **[5:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=317)** It's going to put the word "Header." It's going to be text, and it's going to be a specific color.
>
> **[5:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=322)** So, what I can then do is press Enter.
>
> **[5:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=325)** And then that means my label has now been updated.
>
> **[5:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=328)** So, let's go back to here and retrieve that label.
>
> **[5:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=333)** And this time we can go Select *, and we'll get all of the values.
>
> **[5:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=339)** And if we just scroll up here, remember we saw all of those blocks of text.
>
> **[5:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=344)** And you'll see that my LabelActions, which is what I just created, is now configured and entered here, exactly the same as if it would have been, if I'd created it in the beginning.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=354)** So, we can obviously update the values as we go through, and we can change it to say, well, I want to use this type of font or this type of update or whatever it would be.
>
> **[6:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=363)** Now, of course, right now, all it has is the colors and some basic key text values, but we can update those at any point.
>
> **[6:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=371)** So, maybe I wanted to update the layout of it.
>
> **[6:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=375)** So, maybe I want it to be a diagonal format.
>
> **[6:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=379)** So, what I can do instead is do the same thing.
>
> **[6:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=381)** So if we go back to Set-Label, I'm going to just remove all of my label actions that we put in place.
>
> **[6:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=389)** And then I'll copy from the excise file again, the label actions. So in my LabelActions, I have an update to make. We'll paste it over here.
>
> **[6:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=399)** And what you'll see this time is I've got my font size, my font color.
>
> **[6:44](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=404)** I've got "disabled" as a "Value."
>
> **[6:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=407)** And then I've got this. I've got this "layout," which I didn't have before, which was "Diagonal."
>
> **[6:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=413)** And so now what that's doing is it's going to say, this is the text I want to put in. "Watermark," and I want it diagonal across it.
>
> **[6:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-labels?u=76281980&t=419)** So, my label is now updated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for. (2), type. (1), this. (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** json (3)
> **Cross-References:** go back to (2)
> **Tools:** powershell (2)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** for example (1)

#### How to create sensitivity policies
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=0)** - [Tutor] Now, once you have the label ready, then of course, you need to create a specific policy.
>
> **[0:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=6)** Now, policy makes the label valid so it can be utilized by office applications and other services.
>
> **[0:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=15)** Now, this is done by first retrieving the label, which we already have.
>
> **[0:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=19)** So let me just double check, I can say label.
>
> **[0:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=21)** And then what we can do here is say new label policy.
>
> **[0:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=26)** I can then go down to what I want to call it.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=29)** And so I can say Test Label Policy and then the labels that I wish to associate.
>
> **[0:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=39)** So I'm going to say label 'cause you might have more than one label.
>
> **[0:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=43)** And at that point, notice what happens.
>
> **[0:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=45)** It comes back and says, well, hold on a minute.
>
> **[0:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=47)** I don't know what to do with that variable label 'cause that label is just the details of a specific policy.
>
> **[0:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=56)** So that's when we have to understand the format of what's required to create the actual label policy.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=63)** And not every single thing is just a string value.
>
> **[1:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=67)** A lot of the time you need to populate the labels.
>
> **[1:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=70)** And in this instance, they are multi-value options.
>
> **[1:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=74)** So if I just go back to my label option, you can see it has too much information.
>
> **[1:18](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=78)** It's trying to populate everything.
>
> **[1:20](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=80)** So what I'm going to do here is just say label name and press Enter.
>
> **[1:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=84)** And sure enough, it now updates.
>
> **[1:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=87)** So when you're creating objects and populating them, you might need to actually just use the various properties, not the entire object itself.
>
> **[1:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=95)** Now, of course, we can update the policies too.
>
> **[1:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=98)** So for example, I've got my policy that's been created now.
>
> **[1:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=102)** So if we just go here, you can see I've got my Test Label Policy.
>
> **[1:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=105)** If I just copy that information here, if I scroll up here, you'll see it's got various sets of information associated.
>
> **[1:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=113)** You can see my test label is associated.
>
> **[1:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=115)** Now, what about if I wanted to update that policy to add other things into it.
>
> **[2:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=121)** So maybe I wanted to make it so it wasn't mandatory in Outlook or maybe I wanted to enforce justification if someone tried to downgrade the label on a document.
>
> **[2:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=134)** So the same as we did before, we can this time use set-labelpolicy instead of set-label.
>
> **[2:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=142)** I can then go to the next line.
>
> **[2:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=144)** And I'm going to go in and say identity.
>
> **[2:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=147)** And of course, I've already got my policy.
>
> **[2:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=150)** So I'm going to retrieve that with my identification.
>
> **[2:33](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=153)** I'm then going to add an exchange location.
>
> **[2:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=157)** And to make life easier, I'm just going to say all of exchange.
>
> **[2:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=161)** Maybe I'll go in and say, add OneDrive location, and I'll say all, and move down.
>
> **[2:49](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=169)** And then what I can do here is I can populate settings.
>
> **[2:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=173)** Now, settings are another chunk of text, which is in that funny JSON kind of hash table format.
>
> **[3:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=182)** I'm going to paste this in here.
>
> **[3:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=183)** And so here's some values.
>
> **[3:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=185)** It's going to say, this is my default label, this is going to be mandatory.
>
> **[3:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=188)** And I'm going to require downgrading.
>
> **[3:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=192)** I'm actually just going to remove this line.
>
> **[3:13](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=193)** I don't want to put a default label.
>
> **[3:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=195)** That's okay. So we can get rid of that.
>
> **[3:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=197)** And you can see what we're doing here.
>
> **[3:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=199)** We're just constructing the right values so that we can then update that.
>
> **[3:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=204)** Now, of course, notice it came back and it said, okay, the policy can't be found, which is this domain.
>
> **[3:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=211)** DLP Compliance Policy Test wasn't found.
>
> **[3:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=214)** So that means when it's trying to identify, it doesn't know what to do with that specific policy.
>
> **[3:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=219)** So once again, let's go back to policy.
>
> **[3:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=223)** Notice, you're probably going to have to use policy name.
>
> **[3:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=225)** So let's go back up here.
>
> **[3:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=228)** And if I go from ID to name and do that, you'll see now it come back and it said, make sure you type the policy name correctly.
>
> **[3:56](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=236)** And it says the policy name wasn't found.
>
> **[3:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=239)** So as we're trying to identify things, sometimes the information doesn't appear because we just created it.
>
> **[4:05](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=245)** Sometimes we have to give it a few minutes to come through.
>
> **[4:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=247)** Or sometimes it just won't identify the specific label policy because we are not using the correct value.
>
> **[4:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=255)** But in this instance, we'll have to wait for that policy to be valid because we just created it.
>
> **[4:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=261)** It doesn't mean it's activated right away.
>
> **[4:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=264)** So let's try this again.
>
> **[4:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=265)** There we go.
>
> **[4:26](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=266)** I told you we had to wait a few minutes and then it updated.
>
> **[4:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=269)** So my label policy has now been updated, which means what I can then do a say, policy get label policy.
>
> **[4:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=279)** And I'll use the existing variable that I've got, which is the name.
>
> **[4:43](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=283)** And if I say policy and scroll up here now, what we should now see is that some of those property values, which are listed all through here have now been updated to match what that would be.
>
> **[4:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=294)** And some of the information is stored in kind of these funny brackets to make sure.
>
> **[4:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=299)** So you can see in the settings, in this section, there's that piece of code that we actually put in.
>
> **[5:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=306)** So when we're creating the sensitivity labels, we can obviously create them in the user interface or in PowerShell.
>
> **[5:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=312)** We can update them in both.
>
> **[5:14](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=314)** We can then create policies to push them out as well as then update them as we need to.
>
> **[5:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=319)** Updating the labels and the policies.
>
> **[5:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=321)** And of course, in the labels option, we can have more than one label as needed.
>
> **[5:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=325)** So PowerShell is a great way to be able to manage those policies and to update them, but the key is to make sure that this information is configured in the right way.
>
> **[5:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=335)** Otherwise, it won't accept the values.
>
> **[5:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-create-sensitivity-policies?u=76281980&t=337)** It has to be done in a hash table format.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), require (1), interface (1)
> **CLI Commands:** make (5)
> **UI Navigation:** scroll up (2), go to (1)
> **Env Vars:** json (1), dlp (1)
> **Cross-References:** go back to (2)
> **Tools:** powershell (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### How to review audit logs
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=0)** - [Instructor] One of the tasks for managing Microsoft 365 is obviously the ability to go back and view in the audit logs and the audit trails to identify what's taken place, for example, when an administrator made a change or whether an end user did something that they shouldn't have.
>
> **[0:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=15)** Now, there are various locations that we can go to for this one.
>
> **[0:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=19)** The first one would be the admin audit log search, or maybe the first one would be the mailbox kind of search instead.
>
> **[0:27](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=27)** Now the mailbox search is a powerful tool.
>
> **[0:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=29)** It lets me go in and do a mailbox audit log search.
>
> **[0:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=35)** When I press enter, it's going to ask me for a series of values, but that's the command that we actually need to utilize.
>
> **[0:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=40)** So what I can do is just copy and paste from the exercise file here 'cause there's quite a few properties that need to be updated.
>
> **[0:47](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=47)** And you can see from here that I'm going to perform a search, looking for admin or delegated access.
>
> **[0:53](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=53)** I'm going to focus on the Microsoft CDX account which is my admin account.
>
> **[0:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=57)** I'm looking for admin or delegation on the log-on types with a range of dates.
>
> **[1:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=63)** I can say that I've got my dates a little bit wrong here.
>
> **[1:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=66)** I need to update here, otherwise it'll complain.
>
> **[1:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=69)** Then I've got my mail recipient.
>
> **[1:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=71)** Now, when we execute this command, it's not going to return any results to me, it will email me or email the status mail recipients, a copy of those.
>
> **[1:22](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=82)** Then of course, I've got some Boolean values which are, do you want to check external access or we're looking for things that have attachments, and then of course, I'd like to show all the details possible.
>
> **[1:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=92)** Now when you press enter, it looks like it returns values, but what it actually does, it just returns the fact that it kicked off the search.
>
> **[1:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=99)** There's the name of the search with my query.
>
> **[1:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=101)** And then you'll just have to wait for it to kind of email results back to you if and when it matches.
>
> **[1:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=108)** Now, there are other commands that are available too.
>
> **[1:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=111)** So not only do we have the new admin audit log search one, but also the mailbox one which you've looked at, we can also search the admin audit log as well, by looking for specific values.
>
> **[2:02](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=122)** Say if I type search dash admin audit log and press enter, you can see what it's got here is it brings back a series of values of things it took place, and of course our most recent one is us creating the labels.
>
> **[2:17](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=137)** And so that shows up inside there.
>
> **[2:19](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=139)** So if I copy set label policy, I can go back to my search, and then from here, I could say, you can say commandlets and I can paste the commandlet and press enter.
>
> **[2:30](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=150)** And sure enough, it'll retrieve that specific instance.
>
> **[2:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=154)** Now, of course, we did create some other bits and pieces, so let me go back to here and say new label.
>
> **[2:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=161)** And of course it returns back all the execution of new label.
>
> **[2:45](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=165)** So this allows me to kind of retrieve values and say, "Well, who was it that originally executed that PowerShell command against Microsoft 365, for example."
>
> **[2:57](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=177)** Now, of course, we also have the most common one, which is actually searching the unified log.
>
> **[3:03](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=183)** So the unified log is the one that's part of the core audit capabilities.
>
> **[3:07](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=187)** So what we can do first is I'm going to specify a start date.
>
> **[3:12](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=192)** So let's do 10/01/2021.
>
> **[3:15](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=195)** I'll then also do an end date, which just make it short and sweet 10/10/21, and enter, I can then use search UnifiedAuditLog, and I'm just going to pass a start date and also an end date to that.
>
> **[3:35](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=215)** And then I'll press enter.
>
> **[3:37](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=217)** Now this one's going to go crazy and suddenly start capturing.
>
> **[3:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=219)** I'm going to stop it from executing, but it's going to go and capture everything that's been logged in the audit log and taken place that you would see if you went into the admin kind of center and wanted to have a look.
>
> **[3:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=234)** Now, what we can do is we can start to go through and say, "Well, what about if I wanted to look at a specific instance?"
>
> **[4:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=241)** So let me grab the identity of this one here.
>
> **[4:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=244)** What I can then do a search the UnifiedAuditLog, get rid of all of this.
>
> **[4:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=250)** And if I start tabbing through the various items, you can say I can type session IDs, all kinds of different things, users, but if I go back to kind of the beginning end date object IDs, I could paste a value.
>
> **[4:23](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=263)** Now watch what happens.
>
> **[4:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=265)** It goes through, it still comes back and asks me for an end date.
>
> **[4:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=269)** So I'm going to go here and just put an end date.
>
> **[4:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=272)** It's going to ask me for a start date, 10/01/2021, and then it's going to go ahead and try and identify.
>
> **[4:38](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=278)** Now, why didn't it find anything?
>
> **[4:40](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=280)** Because the object ID doesn't refer to the actual entry that's been retrieved.
>
> **[4:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=286)** Now to retrieve the specific entries, we would need to know what the identity of the object is.
>
> **[4:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=291)** This object ID needs to be the object ID that we're kind of looking for.
>
> **[4:55](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=295)** So if it was a word document that had an object ID of 2700, let's say, that's what that value would be.
>
> **[5:01](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=301)** But searching the audit log, we can also filter it down to specific things like types of records and things that we're trying to identify.
>
> **[5:11](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=311)** So let me just clear this here, go back to our search, the unified log with our start dates, and then at this point I can start to add in record types, things that I want to kind of identify.
>
> **[5:25](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=325)** So let me just choose RecordType PM, and then I'm going to use SharePoint file operation.
>
> **[5:31](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=331)** I can press enter.
>
> **[5:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=332)** This will now search for everything that was SharePoint online file.
>
> **[5:36](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=336)** For example, if we scroll up, you can see instantly this is my all test cases document, and if I scroll up, the operation is file accessed, and the record type SharePoint file operation, and all the results will match them.
>
> **[5:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=351)** So we can filter those results out really quickly.
>
> **[5:54](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=354)** Now that's all helpful that we can retrieve things in the mailbox, things in the audit log, but what about if we wanted to retrieve things about, uses that have logged in?
>
> **[6:04](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=364)** Well locally, what we're able to do here is connect to Azure Active Directory.
>
> **[6:09](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=369)** So I'm going to say, get Azure AD audit signing logs and press enter, and of course straight away, it's going to say, "Well, actually you need to connect to Azure AD."
>
> **[6:21](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=381)** As do credentials, I still have my creds object.
>
> **[6:24](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=384)** We'll just connect to Azure AD here, and we'll do the same thing again and do sign-in logs.
>
> **[6:29](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=389)** And then this will go ahead and connect to Azure Active Directory and then start to bring down and we'll stop it there 'cause there's way too many.
>
> **[6:39](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=399)** And it just keeps going and going and going.
>
> **[6:41](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=401)** There we go.
>
> **[6:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=402)** So that brings back specific ones that are there.
>
> **[6:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=406)** It brings back literally everything that's in there.
>
> **[6:48](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=408)** Now, how do we kind of filter those out?
>
> **[6:51](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=411)** Well, we can luckily pass a filter object that can help us, kind of break down and say, "Well, actually I don't need to get all of the values, I'm just looking for specific things."
>
> **[7:06](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=426)** So let me clear this out and we'll do a simple one here.
>
> **[7:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=430)** So what we can do is say filter, and then I'm going to say, UserPricipalName equals, and then I can put in a user principal name, which in this case we'll just use our admin account and then I can press enter.
>
> **[7:28](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=448)** And what this will do here, is this we'll go ahead and search.
>
> **[7:32](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=452)** I'm going to stop that again 'cause it has too much information that brings back, but it will go ahead and bring back all the results, and if we start scrolling through the various properties, we should see user principal name, which is my admin account that's been listed here.
>
> **[7:46](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=466)** So we can not only retrieve stuff from the regular audit log, the admin log, the mailbox, we can get them from Azure AD, then of course we haven't even touched on that, you can get them from Microsoft Teams or from all the other locations too.
>
> **[7:59](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/how-to-review-audit-logs?u=76281980&t=479)** But you can easily retrieve values from any of the audit logs by just using PowerShell.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), this. (1), for. (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** scroll up (2), go to (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **Tools:** powershell (2)
> **Env Vars:** cdx (1)
> **Exercise Files:** exercise file (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=0)** - [Liam] I hope you've enjoyed this course as much as I've enjoyed being able to put it together for you and take you through the basics of using PowerShell to manage Microsoft 365.
>
> **[0:10](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=10)** I recommend that your next steps are download each of the PowerShell modules for each of the services, review the basic commands that are available, then perform some basic tasks using those PowerShell commands, and then lastly, start to learn about the Microsoft Graph PowerShell SDK, or software development kit, and the commands, as they will be some of the replacement going forward.
>
> **[0:34](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=34)** Regardless of where you go from here with PowerShell for Microsoft 365, I encourage you to dig deeper and deeper into how it can benefit you.
>
> **[0:42](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=42)** With Microsoft 365, the next logical step is to begin using some of the more advanced capabilities with PowerShell and bundle those with parts of Azure.
>
> **[0:52](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=52)** Most of all, enjoy the process of managing your Microsoft 365 tenant using PowerShell.
>
> **[0:58](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=58)** It is a core part of what I do each day and has played a big role in my overall IT career, especially working with organizations, both on premises and within the cloud.
>
> **[1:08](https://www.linkedin.com/learning/powershell-for-microsoft-365-administration/next-steps?u=76281980&t=68)** I wish you the best of luck as you utilize PowerShell for Microsoft 365.

> [!info]- Semantic Content
>
> **Tools:** powershell (8)
> **Env Vars:** sdk (1)
> **Definitions:** is a  (1)
> **Speakers:** - [liam] (1)


## Instructor

- [[Liam Cleary]]

## Resources

- Exercise files available

## Skills Covered

- Office 365 Administration
- Powershell

## Path Context

### In [[Powershell- Automate IT Tasks and Microsoft 365 Administration]]
← [[PowerShell- Automating IT Administration]] | **3 of 3**

## Appears In

- [[Powershell- Automate IT Tasks and Microsoft 365 Administration]]

## Related Courses

_Courses sharing skills:_

- [[Microsoft 365 Teams Administrator Associate Cert Prep (MS-700)- Managing Collaboration Tools]] — Office 365 Administration
- [[Microsoft 365 for Administrators- Supporting Users]] — Office 365 Administration
- [[Learning PowerShell]] — Powershell
- [[PowerShell- Automating IT Administration]] — Powershell
- [[Powershell 7 Essential Training]] — Powershell

---

[↑ Back to top](#)