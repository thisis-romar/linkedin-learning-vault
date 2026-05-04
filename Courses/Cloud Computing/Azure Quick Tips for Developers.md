---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-quick-tips-for-developers-18807163
url: "https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163"
duration_minutes: 55
duration: 55m
level: Intermediate
updated: 9/7/2022
learners: 47381
skills:
  - Cloud Development
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFm71t-4Ap50w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1662051741994?e=2147483647&amp;v=beta&amp;t=b3v-XlYbIf5HQSqlQRTch4H6z-nwkkRr924kGBXs74s"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Getting Started as an Azure Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20Azure%20Developer.md)'
prev_courses:
  - '[Azure Essential Training for Developers](Azure%20Essential%20Training%20for%20Developers.md)'
next_courses:
  - '[Building a Web Application on Microsoft Azure](Building%20a%20Web%20Application%20on%20Microsoft%20Azure.md)'
path_nav: '[{"path":"Getting Started as an Azure Developer","position":3,"total":7,"prev":"Azure Essential Training for Developers","next":"Building a Web Application on Microsoft Azure"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/cloud-development
  - skill/microsoft-azure
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Quick%20Tips%20for%20Developers.md)

![Azure Quick Tips for Developers](https://media.licdn.com/dms/image/v2/C4E0DAQFm71t-4Ap50w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1662051741994?e=2147483647&amp;v=beta&amp;t=b3v-XlYbIf5HQSqlQRTch4H6z-nwkkRr924kGBXs74s)

# Azure Quick Tips for Developers

> Want to work smarter with Microsoft Azure? This course can help you get there, one quick tip at a time. Each self-contained video is about a minute long, so you can pick up new ways of working in your spare moments. Instructor Mike Benkovich demonstrates how to leverage the latest features and tools that the platform has to offer, sharing insider solutions and techniques in the areas of resource m

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163) | 55m | Intermediate | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Azure quick tips overview](#azure-quick-tips-overview)
- [**1. Azure Quick Tips for Developers**](#1-azure-quick-tips-for-developers) (44 videos)
  - [Create a resource group from the portal](#create-a-resource-group-from-the-portal)
  - [Customize the default view in the portal](#customize-the-default-view-in-the-portal)
  - [Use the activity log to review actions](#use-the-activity-log-to-review-actions)
  - [Create a custom report of RGs by tag value](#create-a-custom-report-of-rgs-by-tag-value)
  - [Use multiple accounts in the portal](#use-multiple-accounts-in-the-portal)
  - [Add a guest user to an Azure subscription](#add-a-guest-user-to-an-azure-subscription)
  - [Create a report of users](#create-a-report-of-users)
  - [Use bulk operations to manage users](#use-bulk-operations-to-manage-users)
  - [Check a user's access in Azure](#check-a-users-access-in-azure)
  - [Create a custom dashboard](#create-a-custom-dashboard)
  - [Share a dashboard with operations](#share-a-dashboard-with-operations)
  - [Extract an ARM template from a resource group](#extract-an-arm-template-from-a-resource-group)
  - [Dashboard from Quickstart templates](#dashboard-from-quickstart-templates)
  - [ARM template from deployment](#arm-template-from-deployment)
  - [Clean up resources in a resource group](#clean-up-resources-in-a-resource-group)
  - [Delete a resource group](#delete-a-resource-group)
  - [Create a basic blueprint](#create-a-basic-blueprint)
  - [Assign a blueprint to grant access to RG](#assign-a-blueprint-to-grant-access-to-rg)
  - [Visual Studio's resource group project](#visual-studios-resource-group-project)
  - [Use policy to enforce tagging](#use-policy-to-enforce-tagging)
  - [Configure scaling for an App Service](#configure-scaling-for-an-app-service)
  - [Add an autoscale rule to an App Service](#add-an-autoscale-rule-to-an-app-service)
  - [Automate backups for App Service](#automate-backups-for-app-service)
  - [Restore an App Service from a backup](#restore-an-app-service-from-a-backup)
  - [Diagnose and solve App Service problems](#diagnose-and-solve-app-service-problems)
  - [Set up Azure DevOps from the portal](#set-up-azure-devops-from-the-portal)
  - [Azure Storage Explorer](#azure-storage-explorer)
  - [Reset service principle credentials](#reset-service-principle-credentials)
  - [Enable dynamic data masking in Azure SQL](#enable-dynamic-data-masking-in-azure-sql)
  - [Create a VNET](#create-a-vnet)
  - [Add a subnet to a VNET](#add-a-subnet-to-a-vnet)
  - [Define peering for VNETs](#define-peering-for-vnets)
  - [Create a virtual machine with auto shutdown](#create-a-virtual-machine-with-auto-shutdown)
  - [Configure monitoring for Azure VM](#configure-monitoring-for-azure-vm)
  - [Create an SQL database from the portal](#create-an-sql-database-from-the-portal)
  - [Dynamically scale an Azure SQL database](#dynamically-scale-an-azure-sql-database)
  - [Create a Key Vault](#create-a-key-vault)
  - [Grant access to a Key Vault](#grant-access-to-a-key-vault)
  - [Update a secret in a Key Vault](#update-a-secret-in-a-key-vault)
  - [Purge or recover deleted Key Vaults](#purge-or-recover-deleted-key-vaults)
  - [Integrate App Service and Key Vault](#integrate-app-service-and-key-vault)
  - [Create an App Insights dashboard](#create-an-app-insights-dashboard)
  - [Azure Quickstart Center](#azure-quickstart-center)
  - [Azure free services](#azure-free-services)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure quick tips overview](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-quick-tips-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-quick-tips-overview?u=76281980&t=2)** - [Mike Benkovich] Hello, and welcome to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Quick Tips for Developers. The cloud is a rapidly changing place with new features and services arriving daily. This series is a collection of quick tips and tricks that will help you see what's possible and how to use new features in Azure. Each movie is self-contained, it's about a minute long so that you can jump in at any point and learn something new, topics include cloud governance, resource management, user access, service configuration, and much more. So even if you only have just a minute or two, you can still pick up some valuable skills for working with Azure. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **Definitions:** is a  (2)
> **Speakers:** - [mike (1)


### 1. Azure Quick Tips for Developers

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a resource group from the portal](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-resource-group-from-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-resource-group-from-the-portal?u=76281980&t=3)** - [Instructor] There are many ways that we can create a resource group. One way is from the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Portal. To create a resource group in the Azure Portal, go into the Resource groups, click on Add, and then type in the name of the subscription you want to work with. In this case, I'm going to use my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Demo Sub. And I'm going to give it a name and then I'm going to pick a location for it. We'll put this in West US. We can add some tags. I can add a tag like CostCenter, Conference, Deployment name, Project. The nice thing about it is that Azure Portal remembers what I've used for other tags. So in this case, I'm going to use my CostCenter being my tags. Click on Review + create. And then once the validation is passed, click on Create. The deployment goes out, creates the resource group. And then when it's done, you can click on Go to resource group to see what's deployed inside of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** click on (4), go to (1)
> **Tools:** azure portal (3)
> **Speakers:** - [instructor] (1)

#### [Customize the default view in the portal](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/customize-the-default-view-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/customize-the-default-view-in-the-portal?u=76281980&t=1)** - [Narrator] The [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Portal is an interesting application with a lot of features and capabilities, being able to customize it makes it easier for me to find what I'm looking for. One of my favorite things is that on the new Azure homepage I've got a list of services that are listing what I've recently created. I have a list of favorites as well as a list of recents. And I can customize and update this if I want to. One of the things I can do is I can go up to where the gear is and I can open up the settings, click on your appearance and then you can specify how you want the behavior of portal to work. I can have the fly out of the menu, like where I click on this and it flies out, or I can have it docked. I can change the color theme to Azure blue, light. I can change to a high contrast team if I want. I can also change my startup page so that instead of coming to the Azure home, I could go to a dashboard. If I select the dashboard and apply. Then when I click on the Azure home tab it'll take me to my dashboard instead of to the homepage. I can always switch back of course. Go back to the home and then I can also change it from my settings. And then I've got the view that looks just the way I want it that works for me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Tools:** azure portal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Use the activity log to review actions](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-the-activity-log-to-review-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-the-activity-log-to-review-actions?u=76281980&t=1)** - How do you figure out what's changed or what activities have occurred inside of your environment in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md)? This is where in the Azure activity log we can take a look and see what's been going on. For example, in a resource group, I can click on the activity log and it will open up the list of all the activities that have happened filtered to this specific resource group, and for a span of the last six hours. I could change my time span and go longer if I wanted to up to the last month. I can also change the resources, and the types of things that I'm looking at. But in general, I can go down. I can see, okay, here's an audit policy action. It succeeded, but it's got a little warning on it. If I want to get an idea of how things are going, I can click on quick insights and this will go out and build a quick report, showing me the number of errors, failed deployments, service health, and other interesting items that I might be interested in. If I'm happy with that, I can also export the activity logs either to a log storage, or I can download a CSV file so I can look at it later on. The insights gives me a view of what's going on, including more information that comes from the log analytics. But this is a great place to go and get information about what's going on within a given Azure set of resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **Env Vars:** csv (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - how (1)

#### [Create a custom report of RGs by tag value](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-custom-report-of-rgs-by-tag-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-custom-report-of-rgs-by-tag-value?u=76281980&t=3)** - [Instructor] Do you need to get, a report of particular resource groups, and you need to be able to sort or filter by a tag? There's a great way in the portal, that I can go out and do that. What I do is I can go out to resource groups, click the resource group icon. If it's not there you can go to all services and find it. Then in the view of all resource groups, simply click on edit columns, to determine what you want to show. For instance, I want to be able to see the tags. Click on tags, add it to where you want. You can move the tags, into different ordering on the columns, you can put the location, you can put the location ID. I can remove columns as well. When I'm done click on apply, and then the list will go to what you want. You can also filter so if I want to filter by name, for instance, maybe I just want to see, my proof of concepts or my POCs selecting that, brings up exactly the list of resource groups, that meet that criteria, and then when I'm ready click on export to CSV, and it will allow me to go out and save that. When it's saved I can open it and it gives me my report.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (2)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### [Use multiple accounts in the portal](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-multiple-accounts-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-multiple-accounts-in-the-portal?u=76281980&t=3)** - [Instructor] Have you been using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) for a while and maybe you have your own subscriptions as well as the subscriptions you can access at work? You probably have different accounts. And in the Azure portal, I can use those different accounts to switch between the identity that I need to. What you do is click on your account icon. Go down to sign in with a different account. This lets me choose the account I want to use. I'm going to switch to my MSDN account. Click on Next. And then it asks, "Is this a work account?" which means it's in the [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365 domain tenant that I've been working with or is it a personal account, a Hotmail or a Live account that I created? In this case, I'm using a personal account. So I'm going to click that, enter my password and then click on sign in. This then logs me into my alternate account. And now I can see those resources and switch back and forth as needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **UI Navigation:** click on (3), switch to (1)
> **Env Vars:** msdn (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Add a guest user to an Azure subscription](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/add-a-guest-user-to-an-azure-subscription?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/add-a-guest-user-to-an-azure-subscription?u=76281980&t=3)** - [Instructor] If you need to add a user from another organization into your subscription you can do that by adding a guest user. You may have a tile that says Quick tasks which has an icon that says, Add a guest user. You also may have [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) on your toolbar. But if you don't, you can get to the same place by going up to All services, searching for Active directory, selecting the icon, then going over to the Users tab and then clicking on Add new guest user. From here, we can invite a user from outside of our organization to collaborate with us. We could also create a user in our organization. In this case, I want to invite someone from another organization into here to see what it is. Enter in the email of who you want to include. Include their first name and last name. You can type a personal message and then you can assign them to particular roles that you want them to work in. If you select a role like developer, or operations then when they log in, they'll be able to see that. And then, when you're done click on Invite this invites that other user into your organization and then they will get an email and then they will be able to see whatever it is they're supposed to see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Create a report of users](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-report-of-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-report-of-users?u=76281980&t=3)** - [Instructor] Have you ever been asked for a list of who is an active user in your subscription? You can get that by going out to the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) and then using the list of users, be able to create that. What you do is go to the active directory. You can either go to it if it's in your toolbar, pinned as a favorite. You can also go to all services. Simply search for active directory, and then open up the active directory pane. Click on the users, and then go over to where you've got your list of operations. Operations include bulk create, bulk invite, bulk delete, but the download users allows us to go out and create a report. Click on the start to export the list. This then will go out and create the report. Click on here to see the status. And when it's done, you can click on the list of users and then you can click on open and then you get a list of all the user accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (4)
> **UI Navigation:** click on (5), go to (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Use bulk operations to manage users](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-bulk-operations-to-manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-bulk-operations-to-manage-users?u=76281980&t=3)** - [Instructor] Are you new going into [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and you have a set of subscriptions that you need to import your users into? You can do that with the bulk operations on [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). In the Azure portal, go to the Active Directory tool. If it's pinned to your toolbar, you can click the icon there or go up to All services and search for it. Active Directory has a number of different features and capabilities. What we want to do is manage the users. So click on Users. And then you have the operations for Bulk create, which allows me to go out and create new users. I have Bulk invite, which lets me create and invite, which will send out emails to all of the users. There are also Bulk delete. Clicking on Bulk create allows you to go out and download the CSV template. You add your changes to it. And then when you upload it, it will process them and add them to your subscription.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** download the (1), template (1)
> **Env Vars:** csv (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Check a user's access in Azure](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/check-a-user-s-access-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/check-a-user-s-access-in-azure?u=76281980&t=1)** - [Instructor] Role-based access control is a great way to manage access in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). It allows us to protect and govern who can see, contribute, and create things. I can use it to limit who can do what with the services that form an application. For example, my eshop-learn resource group. I want to be able to go out and manage my developers. I have a new developer called Dev Dad that I want to give access. If I click on access control, I can go out and confirm my access, that I have rights to be able to go out and do things. You can see that I'm logged in with an account that is the owner of this resource group. With that I can check to see if my user Dev Dad has rights, and I can click on Dev Dad and you can see nope, they have no access. So if they were to go into Azure, the portal, they wouldn't be able to do anything. I can grant them access by going up to add, click on a role assignment, and then deciding what access I want to give them. They're going to be a contributor. They're working on this and I want to grant all access to the resources, but I don't want them to be able to assign roles. Clicking on next, I can go through and then select the member. Click this and type in Dev Dad, select the user, and then I can say review and assign. And then like that, the role is added. Once I've done that, then I can check access on this. And now we can see that Dev Dad is a contributor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **UI Navigation:** click on (3), select the (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Create a custom dashboard](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-custom-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-custom-dashboard?u=76281980&t=3)** - [Instructor] If you have users who are new to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), it can be challenging trying to show them where to find everything to be able to manage the services that they might be responsible for. That's where [Dashboards](../../Skills/Data%20Science/Dashboards.md) come in. Dashboards allow us to create and give our users a nice starting point to find things and pin what they want to look for. You can create a new dashboard, a custom dashboard, by clicking on new dashboard, giving it a name, let me call this Mike's Dashboard. And then I can add things to it, things like I can add resource groups. I can make this larger or smaller, and customize the size. It'll add columns and dynamically fill up the amount of screen as I want it to do. I can add things like markdown. So if I have a markdown, I can add that, which would then allow me to put custom information. Maybe there's some help information I want my users to have. I can change the sizes. I can add things like quick tasks. So if I want to add users and be able to get to that quickly, I can do that. I might have a support. I can customize how things are laid out. And when I'm done, click on done customizing and that saves it. Now I have my dashboard. I can also pin things from particular services to this. And when I'm done, just go ahead and click on save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)

#### [Share a dashboard with operations](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/share-a-dashboard-with-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/share-a-dashboard-with-operations?u=76281980&t=3)** - [Instructor] I can create a custom operations dashboard and share it with that team by using the share feature on the dashboard. What I do is I go up on the dashboard. You'll notice the link that is Share. Click that, and then you can publish this to a location. Now I have this in my MSDN subscription so I'm going to go ahead and publish this. And then once it's been published, then I can go up and I can manage the users. The users, I can specify particular individuals and I can check whether or not they have access to this by going in and typing in their name. So for instance, if I want to see if my instructor has access to this dashboard, I could go ahead and check that assignment. If it's not there, I can add role assignments either to users or to groups. In this case, I'm going to add a reader, which means that they cannot change the dashboard, to the operations team. So if I click on operations, search for the user, and then save it, then I can go out and I can confirm that they have access to it. Click on the check access, type in operations, and this time we'll see that they are in the reader role.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2)
> **Env Vars:** msdn (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Extract an ARM template from a resource group](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/extract-an-arm-template-from-a-resource-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/extract-an-arm-template-from-a-resource-group?u=76281980&t=3)** - [Instructor] If you ever wanted to copy a deployment, maybe have some slightly different names, but be able to recreate it later on, you can take the native language, which is the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) resource manager template and export it. If you look at a resource group, I can click on the export template, and this will take me to where it has all of the values, the parameters and the resources, that are deployed into this group. Not everything can get exported but most things can. The nice thing about this is that I can take this template, and if I want to redeploy it with [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), I can get a PowerShell script, I can use a .net, I can also just take the template itself, and I can download it and save it to my environment, Save it and then I can go out, and open it in whatever tool I want to. I can also add it to a library so that I can save this, and I might call this my MSDN demo RG template, give it a description template of demo stuff, and then click on save, and then I've got it added to my library, and then I could redeploy it by using the deploy button. This then would let me go through, and recreate this in another location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Exercise Files:** template (6)
> **Tools:** powershell (2)
> **UI Navigation:** click on (2)
> **Env Vars:** msdn (1)
> **Speakers:** - [instructor] (1)

#### [Dashboard from Quickstart templates](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/dashboard-from-quickstart-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/dashboard-from-quickstart-templates?u=76281980&t=3)** - [Instructor] Creating arm templates can be a confusing thing. Fortunately, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) created a [GitHub](../../Skills/Software%20Development/GitHub.md) library of templates that you can use. I've got a link to that on my website. And if you go to [Benkotips.com](https://Benkotips.com), you'll see that I have a link to a shared dashboard that I contributed, did a poll request on for a shared dashboard. You can deploy this either by clicking this deploy to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) icon, or you can go to [Benkotips.com](https://Benkotips.com) and click on deploy the shared Azure dashboard. And this is going to deploy my copy of that. In here, what I do is I simply select the resource group I want this to work with in this case, I'm going to do my demo resource group. We'll give this a name. I'm going to call this msdn Demos, and then I can scroll down and say, agree to the terms and click on purchase. And what that will do is it'll go out and do a deployment of that. And now that it's done, you'll see that my msdn Demos dashboard is in the list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** go to (2), click on (2), select the (1), scroll down (1)
> **URLs:** [benkotips.com](https://benkotips.com) (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [ARM template from deployment](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/arm-template-from-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/arm-template-from-deployment?u=76281980&t=3)** - [Instructor] If you want to get to a specific deployment template that was used, you can do that by going into the resource group, and then looking at the deployments. In this case, we open up the resource group that we want to look at and then scroll down, and you go to deployments. Under the deployments, I can see that a template deployment was used. I can click on that, and this will give me all of the exact resources that I need to see for the inputs, the outputs and the template itself. Clicking on the template lets me go out and take this shared dashboard, and I can download it and then edit it in my own environment. I can also add it to my library, and if I add it to my library, then I can do template deployments from that library that's stored within [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or I can just click on deploy to create a new instance of this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Exercise Files:** template (5)
> **UI Navigation:** click on (2), scroll down (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Clean up resources in a resource group](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/clean-up-resources-in-a-resource-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/clean-up-resources-in-a-resource-group?u=76281980&t=3)** - [Instructor] Sometimes you need to be able to just remove multiple resources within a resource group but not delete the entire thing that used to be hard because you'd have to go into each resource and click on delete and then iterate through all of them. The portal's been updated so that you can do that directly from the resource group view. Simply go to the overview where you've got the list of resources and then select the ones you want to get rid of. I have a VM that I'm done using so I can click those resources. And then I click on delete. It'll ask me to confirm and I type yes at which point, I click on delete and then those resources will be removed from that resource group. This may takes a few minutes to complete but when it's done, if you click on the refresh icon those resources will be gone.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (1), select the (1)
> **Speakers:** - [instructor] (1)

#### [Delete a resource group](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/delete-a-resource-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/delete-a-resource-group?u=76281980&t=3)** - [Instructor] Do you need to clean up your [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) subscription and delete resource groups and resources you don't use anymore. You can do that by going into the actual resource group blade, and then you can select the resource group that you want to work with. If I click on this, I could open up that resource group, MSDN resource group, click on select, and then I can go up here and I could delete it but I can also just go to the resource group itself, highlight it, go to the right hand side, say, delete this resource group. It says, are you sure you want to delete that? In which case, then you need to type the name. Sometimes typing the name takes a little bit. What I like to do is I like to just highlight this and then drag it down onto the name and then go ahead and click on delete. And I'm going to delete in this case, the rg-test-1. Click on delete and the operation gets started to go ahead and delete that resource group. When it's done, it'll refresh the list, and that resource group will no longer be in the list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **UI Navigation:** click on (4), select the (1), go to (1)
> **Env Vars:** msdn (1)
> **Speakers:** - [instructor] (1)

#### [Create a basic blueprint](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-basic-blueprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-basic-blueprint?u=76281980&t=3)** - [Instructor] You can use [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Blueprints to do governance type of things like granting access to an application team. Where we do that is in the blueprint part of the portal where I can search for blueprints, open up where I can get to the Get Started and I can work with the tool. I'm going to create a new blueprint and this is going to be a basic networking blueprint. Although I could use one of the other starter templates that have common policies that you might be interested in. The basic networking one, I'm going to go out and I'm going to call this basic network and I'm going to call it blueprint and pick the location where this is going to be associated with. In this case, I'm going to go to my subscription. Although if you have management group set up, you could be using that as well. When you click on Artifacts, you'll see that it has got a starter set of things that its added a resource group for the shared networking, a VNet with a subnet. I'm going to add another artifact which is going to be a resource group for the application team. I could also do policy assignments or our back assignments or have an arm template that I want to deploy. We're going to call this my app resource group and then we will let them assign the name of it when we actually deploy it. But I am going to put it into a specific location which is going to be in Central U.S. If I have tags, I could add that here as well. Click on Add and then I can save a draft. Saving the draft adds it to my library and then once I've added it to my library, if I go to my blueprint definitions,
>
> **[1:36](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-basic-blueprint?u=76281980&t=96)** I can publish it so that I can use it. So here's my basic blueprint. Click on Publish. Give it a version. I'm going to call this V 0.1 cuz it's my first iteration. And I want to be able to version this and update it as we go. But that is how we can go out and create a basic blueprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **UI Navigation:** click on (3), go to (2)
> **Versions:** 0.1 (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Assign a blueprint to grant access to RG](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/assign-a-blueprint-to-grant-access-to-rg?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/assign-a-blueprint-to-grant-access-to-rg?u=76281980&t=3)** - [Instructor] Blueprints allow us to grant access to a resource group and to resources inside of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Inside of the blueprint's tool, I can assign blueprints by going to my blueprint definitions, selecting one that I want to assign, like the basic network blueprint, and saying Assign Blueprint. This lets me take a particular version of it and apply it. If I scroll down, you'll see that it has a couple of parameters that need to be put in and I'm going to use the resource group name. I'm going to call this mydemo as the prefix and then I'm going to pick the region where I want this to run, in Central U.S., come down and it has parameters for the VNET it'll create, and then also, for the application resource group. Call this rg myapp. Click on Assign and then this will go out and it'll create a blueprint assignment. Go back to blueprint definitions, click on Assign Blueprints, and here, I'm assigning the blueprint and I can see the status as it updates and does what it needs to do. This may take some time, but when it's done, you'll see all the resources listed here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Env Vars:** vnet (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Visual Studio's resource group project](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/visual-studio-s-resource-group-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/visual-studio-s-resource-group-project?u=76281980&t=3)** - [Instructor] Publishing an application into [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) from Visual Studio can be done a number of different ways. I can publish from the Publish screen or I can go to the solution and I can Add a resource group project. A resource group project is in here if I search for cloud. We'll call this myDeploy. A resource group project allows me to go out and deploy my application into some resource services and it'll create an ARM template for me. There are the built in ones, but I can also go to the [GitHub](../../Skills/Software%20Development/GitHub.md) and go to the Azure Quickstart templates. There's over 700 that are there. Clicking OK, it goes out and it will create a project that has three things. It'll have the template, it'll have the parameters, and a script that I can use to test the deployment of that. Right click on Deploy, and you can test the deployment by going out and creating a new one and then running the deploy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** go to (3), click on (1)
> **Tools:** visual studio (1), github (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** mydeploy (1)
> **Env Vars:** arm (1)
> **Speakers:** - [instructor] (1)

#### [Use policy to enforce tagging](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-policy-to-enforce-tagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/use-policy-to-enforce-tagging?u=76281980&t=3)** - [Instructor] Policies allow us to enforce different governance controls on our subscriptions. We can do that by going into the policy manager, type in policy, to search for it. And you'll see that here's my policy icon and I will get on the overview a compliance of how compliant I am with all of my resources. I'm going to create a new assignment and I want to have an assignment to enforce tagging. So what I can do is I can assign a policy, select the subscription I want to put this into. I can specify specific resource groups, for instance, I might want to have a policy on my data, click on select and then I can come down to my policy definition. This is where the policies are already defined. There's 285 different policies which makes it kind of hard to know which ones to use. Fortunately, I can search for ones I want. And in this case I want to do tagging. And in order for people to deploy things, I want to require a given and tag and its value. Click on select, and then I can come down, I can specify all resources have to be deployed with the cost center on them. And then the tag value is going to be demos. I can also use managed identity if I need to create remediation activities. I'm just going to go ahead and click on assign. And this will add that to my policies.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), select the (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Configure scaling for an App Service](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/configure-scaling-for-an-app-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/configure-scaling-for-an-app-service?u=76281980&t=0)** - [Instructor] [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) App Services is a great option for compute because it provides some really great features that you can take advantage of. For instance, I've got an application that I've deployed here, a web application, and I'm running on an app service plan that is currently free because I was doing a development making sure that things looked right. I can change the scale of that by going over here and opening up the scale up or scale out in the settings. Also, you can search for this by typing up there, but if you open up the scale up plan, you'll see that I'm currently running on a free infrastructure. I can change the plan I'm running on by simply selecting one of the other tiles. Each time I do, I can see what it adds. For instance, shared infrastructure added custom domains, but the B1 added manual scale. For production workloads, I'm going to use an S1 at least because it includes features like auto scale staging slots, daily backups, and even traffic manager. The larger plans that are in purple include more compute, more storage, and each one has an estimated cost that also costs more. To change the size, simply click on apply and this then will update the app service plan. Takes just a couple minutes. And if I go back to the overview I can see now that my app service plan in the essentials shows that I'm running on an S1.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Analogies:** for instance (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add an autoscale rule to an App Service](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/add-an-autoscale-rule-to-an-app-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/add-an-autoscale-rule-to-an-app-service?u=76281980&t=0)** - [Instructor] One feature of app services that may be useful to you is the ability to dynamically respond to usage of the application. If I scroll down on my app service and I go to the scale out on the app service plan in the settings, you'll see that I can either manually scale or set up a custom auto scale. I can manually scale to a number of instances or I can configure a custom auto scale rule. For instance, when I do this by default it adds a rule that has a CPU percentage usage as the rule. And it includes a scale up as well as a scale out rule. It's important to have both. In this case, it'll scale up if the CPU percentage gets above 80. And it'll scale down, if it goes below 60. You can specify the number of instances for when it scales up to go no more than say five. I can have a minimum of no less than one. And I might want to have a default, so when the instance starts, I have at least two. We can save this and add that scale condition. And then when you're ready, you can click on save. If you want, you could also add additional metrics but this will let us go out and create and apply an auto scale configuration for our app service.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (1), go to (1), click on (1)
> **Env Vars:** cpu (2)
> **Prerequisites:** set up (1), configure (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Automate backups for App Service](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/automate-backups-for-app-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/automate-backups-for-app-service?u=76281980&t=0)** - [Narrator] One of the features that's great about the App Service is the ability to have a automated backup schedule. You can do that with the standard plan and higher. And the way that we do that is by going into the settings, make your way down to where backups are. In the backups, we can see there's a snapshot preview which requires a premium App Service plan. We're not going to look at that, but we are going to do the backup. So to create a backup, click on the Configure button. This then requires you to select a storage. Now I've already set this up, but if you don't have one, you can go out and set it up inside of this interface. I've created a container for backups, click on Select and then I can specify a schedule. I want to back up every day in this case and I want it to go for 30 backups and I always want to keep at least one. Another thing I can do is I can optionally include the database in the backup. Simply click on Include and then click on Save. This then will go out and it'll create the schedule and it'll automatically do a backup now that we've created it.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### [Restore an App Service from a backup](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/restore-an-app-service-from-a-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/restore-an-app-service-from-a-backup?u=76281980&t=1)** - [Narrator] One of the great features of the App Service is the backup and restore. In this video, I want to show how we can take an existing backup and do a restore on it. You can see we've got a backup configured for this App Service, and I've got a backup that I created. I can click on restore. And then from here, I can configure all of the settings of how I want it to work. I've got the application that's going to back up. It's also going to restore the database. I can come back to the same App Service by overwriting the destination or I can create a new or existing app. If I create a new application, I click on the configuration and specify what that I want that to be. In this case, I'm just going to overwrite the existing one and then I can adjust the connection strings as needed. Ignore the conflicting host names. I can also ignore [Databases](../../Skills/Software%20Development/Databases.md) if I only want to restore the compute. Clicking OK will take us to where the restore happens and then we can monitor the progress on the backup screen. And then when it's done, we'll be notified.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **UI Navigation:** click on (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### [Diagnose and solve App Service problems](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/diagnose-and-solve-app-service-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/diagnose-and-solve-app-service-problems?u=76281980&t=0)** - [Instructor] Diagnosing and solving problems is always a challenge. But in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), there's a troubleshooting support that you can go to help you identify common problems. For instance, if I go into an app service or really any of the Azure services, you'll find the diagnose and solve problems. If you click that link, it's going to open up a series of services that will go out and provide some feedback on how we're doing. For instance, I can see that I've got some availability issues, auto-heal is not enabled, and I've got a health check feature. I can click on this and then dive deeper into that. Alternately, I could go and I could run one of the troubleshooting categories, for instance availability and performance. Click on troubleshoot. It'll go out and it takes a look at all of these different types of things, web app down, the CPU analysis, [HTB](../../Glossary/Service/HackTheBox.md) 400 errors, and then gives me a chart that shows me how my performance has been behaving. This is a great way to get into finding out what's going on and to diagnose what's going wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Htb](../../Glossary/Service/HackTheBox.md) (1)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** for instance (3)
> **Env Vars:** cpu (1), htb (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Set up Azure DevOps from the portal](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/set-up-azure-devops-from-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/set-up-azure-devops-from-the-portal?u=76281980&t=0)** - [Narrator] You can use automated deployments to set up a [DevOps](../../Topics/DevOps.md) process to your application using the App Services from the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Portal. The way you do that is go into the deployment center click on the deployment center and then choose your source control. In this case, I'm going to use Azure Repos. Click on continue then select the type of deployment you want to use for the pipeline. I can either use the App Service to build it or I can use Azure Pipelines. Azure Pipelines allows me to connect it to a DevOps project that I already have. In this case, I go out and select my organization, select the project. Then come down, select your repository and the branch, click continue and finish. And it will go out and set up our deployment to automate running. Whenever changes are made to our source repository. Now this is going to take a little bit of time so we're going to speed things up. And now that it's done, it'll go through and actually trigger a build and release.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [DevOps](../../Topics/DevOps.md) (2)
> **UI Navigation:** click on (2), select the (2)
> **Prerequisites:** set up (2)
> **Tools:** azure portal (1)
> **Speakers:** - [narrator] (1)

#### [Azure Storage Explorer](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-storage-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-storage-explorer?u=76281980&t=0)** - [Instructor] Storage is a core service of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Being able to explore it and see what's in there is very important. We can go to the Storage Explorer in the preview inside the portal, or you can open in the [Windows](../../Glossary/Service/Windows.md) app that is a Storage Explorer. If you click on download it from here, it'll go out to the page where you can download and install the app. Otherwise you can click on the open in the Storage Explorer, say switch apps which then goes out and starts the Storage Explorer. If needed, click on sign in to open the Azure account. Click on next to continue. Put in your credentials. In this case, my developer account. Click on next. And then the Explorer will open up. You apply your account. It'll then show all of the accounts that are local and attached for Storage, Cosmos database as well as Data Lake storage and let you go through and see what's in there. Things that you can see include blobs, files, queues, tables, et cetera, and you can even go out and edit and see what's in there. So for instance, I can go to the tables and I can see here's a table for my uploads. The Storage Explorer makes it easy to go out and manage your data in Azure Storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** click on (4), go to (2), open the (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Reset service principle credentials](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/reset-service-principle-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/reset-service-principle-credentials?u=76281980&t=0)** - [Narrator] Service credentials are principles that connect up to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and do work on our behalf, and we can manage things like APIs or build agents or other tools that don't have a username and a password. Sometimes they expire and we have to fix it. How do we do that? We go into [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md). [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) has a location called App Registrations which you can open up. And then you can search for the application that has the expired credential. You might have to click on all applications to show them, but then when you come to the one that is expired, click on it, and then you can reset the credential certificate. Let's create a new one. And what I'm going to do is create a new client secret. We're going to give it a description. I'm going to say it expires in one year, click on Add and it creates the new credential. Now, one key thing to mind is that this value that's down here in the description is only visible now. You can't retrieve it after you go and do another operation or leave this part of the portal. So make sure you copy it and then you can use that to be able to set the value in whatever the service is that needs it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Enable dynamic data masking in Azure SQL](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/enable-dynamic-data-masking-in-azure-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/enable-dynamic-data-masking-in-azure-sql?u=76281980&t=0)** - [Instructor] Security and encryption are important things in managing any data that's in the cloud. One feature that's available in [SQL](../../Skills/Data%20Science/SQL.md) database is dynamic data masking. If you scroll down to the Security section, you can open up the Dynamic Data Masking and SQL database will go through and look at your schema and identify fields that are likely candidates to be using this feature. For instance, in my sample database, my customer has an email address. I can add that mask and then customize what I want it to look like. By default, that mask has a default value, but I can change this to be an email. When I save this and update, then I can close this, come back, and click on Save. This will save that dynamic masking, and then when I query the data, unless I'm an admin, I will only see the mask instead of the actual data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** sql (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Create a VNET](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-vnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-vnet?u=76281980&t=1)** - [Instructor] A subnet allows us to connect a group of resources in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) into a VNet and then manage the traffic between them. For example, we may have a group of resources that should be isolated from the internet. Let's call them backend services. We can create a subnet to put these in and then define the rules to prevent unwanted traffic from reaching them. The way we do that is by going into the Vnet in question, clicking on our subnets, and then we can define a new one. We click on subnet, we give it a name. We're going to call this backend. And then we've picked the size of the addresses we want. A /24 gives us 255 addresses. So that should be plenty big enough. And then I can also specify on net gateway, a [Network Security](../../Skills/Cybersecurity/Network%20Security.md) group, and route tables. Clicking on save, this will go out and it'll create and add our subnet. Once we've created this, now we can go in and we can manage the configuration and update the settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Add a subnet to a VNET](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/add-a-subnet-to-a-vnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/add-a-subnet-to-a-vnet?u=76281980&t=1)** - [Instructor] A VNet is a free service in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) that allows us to define virtual networks that manage traffic connect resources, such as VMs and data, and optionally allow us to connect to our on-premises networks. Let's see how we can create that in Azure. From the Azure portal, I can go out and I can see virtual networks and I can create a new one. Click on create and then using the template, we can go into the resource group where we want to connect our new network. I'm going to put this into my shared resource group and I'm going to call this my azquicktip and I'm going to make it a shared spoke VNet. And I'm going to put this in the east US and I'm using a name that kind of describes what it is. Next, we define our IP address space which is going to be the address space that we will connect and work with, this by default, gives me a slash 16 which is 65,000 addresses, maybe a little bit overkill, but you can size that to whatever you needed and then define your subnets. Clicking on security, we can define whether we want to use bastion hosts, have a DDoS protection turned on, and/or define an extra firewall here. Click on tags and then go to create brings us to where we have the template. It'll do some validation, but then clicking on create, will go out and trigger that deployment. Takes it just a second, but when it is done, we can go to the resource and we can then manage other properties about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **UI Navigation:** click on (2), go to (2)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Define peering for VNETs](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/define-peering-for-vnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/define-peering-for-vnets?u=76281980&t=1)** - [Instructor] Peering is the mechanism we can use to connect VNets together to allow us to manage traffic. For example, we can have a central VNet connected to our on-premises data center that we want to share with VNets for other applications. We could describe this as a hub-and-spoke type configuration and here's how we can set it up. As you can see, my azqt-shared-spoke-vnet has a couple of backend subnets and a default subnet. I want to set peering for this to connect up to my hub subscription. The way I would do that is click on Peering and then go to add. We're going to create a new peering link. We'll call this my spoke-hub-peer and that is going to allow traffic to go from the remote network into the hub. And then I'm going to set up the hub-to-peer relationship and then we'll call that our hub-spoke-peer. I'm going to do this deployment using my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning azqt demo environment. And then I can go down, I can select the hub VNet. Clicking on Add, this will allow traffic. This will allow us to then go out and be able to see the two networks together. So then when I go back to my topology by clicking back on the overview and coming up here, clicking on Topology, then I can see how the connection will work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** click on (1), go to (1), select the (1)
> **Cross-References:** go back to (1), coming up (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create a virtual machine with auto shutdown](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-virtual-machine-with-auto-shutdown?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-virtual-machine-with-auto-shutdown?u=76281980&t=1)** - [Instructor] [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) are a great option in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) for when you need resources of a full machine for your workload. One scenario I use is a developer VM with all the tools I need already installed. However, I don't need to run this continuously, so it's great that I can provision the machine with an automatic shutdown enabled. The way I do that is when I'm creating the virtual machine is I go through the options. Here, you can see I've got my machine name. I'm running azureqt-vm, my developer VM. I selected an image that's got Visual Studio 2022 enabled and I'm running it on a standard D2 v3. Next, I can specify disks. I can attach a development disk if I want to. And then I can go out and attach this to a network. Here, I'm going to connect this to my shared spoke network. And then I go to management. And underneath here, I can scroll down and I can enable auto-shutdown. What this does is it allows me to have a time that I want to finish work, in this case 7:00 p.m., 'cause I work very hard, and then I can email a notification saying, hey, I'm going to shut this down. Just in case I don't want to, I want to skip it today, I could go out and I could say don't automatically shut it down because I'm going to be working later, but that allows me to get that notification. Click on Next, you go into the advanced and the tags and then you can review and then click on Create. And this will then allow us to go out and create that VM with the auto-shutdown enabled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **Ports:** :00 (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure monitoring for Azure VM](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/configure-monitoring-for-azure-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/configure-monitoring-for-azure-vm?u=76281980&t=1)** - [Instructor] How do you ensure that you're not surprised when something goes wrong with an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) deployment? You can configure monitoring and alerts. With the Azure VM, once you've created a VM, I can go over and I can take a look at the monitoring to set up some rules. By default in the portal, we can enable recommendation for alerts by simply clicking on Enable. This then goes out and creates alerts that say if the CPU percentage exceeds some value like 80% or if my available memory is below a certain point. Each of these different options I can go out and configure to send me an email. If something goes wrong, I can specify sending the email to a particular user. I can also go out to a role. Maybe I want to send this to all of my contributors or the owners of the subscription. I can also go out and create an existing action group if I have something like that set up. And then I can go out and I can enable this. And the total cost is provided for me so I can see how much this will cost. Clicking on Enable then turns on those alerts and then it'll go ahead and set up those alert rules for me. And that's how I can make sure that I'm not surprised when something goes wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **Prerequisites:** set up (3), configure (2)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Speakers:** - [instructor] (1)

#### [Create an SQL database from the portal](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-an-sql-database-from-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-an-sql-database-from-the-portal?u=76281980&t=1)** - [Instructor] [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) is a very popular relational database engine. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md) allows us to use SQL Server as a service in the cloud. We can create a database by going into the SQL databases and creating a new one. Clicking New takes us to the portal template for doing this. What we can do is select our resource group where we're going to do this and then we're going to create a database. I'm going to call this my azqtdb and I'm going to create a new server and I'm going to call this my azqtdbms. I'll put this in the east-us and then I'm going to allow it to do authentication with both SQL Server and with [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Authentication, or I could do with just Azure AD Authentication. Click on Set Admin. This then allows me to go out here and pull in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) account, select and then say OK. Now I go back into the template for this, and by default, you can see I'm running my workload. On the top, we can see the cost summary for this. Since this is just going to be a development workload, I can check that and the costs will go down. Next, I can specify how I want this to run. I can change the size, the storage. I can also go in and set up networking where I can create access points. Do I want access from the public endpoint? And I say yes, allow Azure services to connect. And I can even add my local IP client IP so that I can log in using the port 1433. And then I can step through security
>
> **[1:35](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-an-sql-database-from-the-portal?u=76281980&t=95)** and I can specify additional things, additional settings, but I can go to the review and create, and at this point then, I can click on Create and it will create that database for me as I've defined it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2)
> **Env Vars:** sql (5)
> **UI Navigation:** click on (2), go to (1)
> **Exercise Files:** template (2)
> **Ports:** port 1433 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Dynamically scale an Azure SQL database](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/dynamically-scale-an-azure-sql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/dynamically-scale-an-azure-sql-database?u=76281980&t=1)** - [Instructor] [SQL](../../Skills/Data%20Science/SQL.md) [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) makes it easy to work with your data, but for development versus testing versus production, you're likely to have different performance requirements. Fortunately, SQL Azure provides a way to dynamically scale a running database. We can do this by going into the compute in storage settings inside of the Azure portal. From here you can see how you're currently configured. For my database I created, I am doing serverless because I'm doing development and it is using the gen five up to 40 cores where I pay for the usage that I need. But I can change to a different type of compute. There are two different models. One is a VCORE where I'm specifying how many virtual cores do I want to run. And the other is DTU or Database Transaction Units. It used to be Database Transaction Units. Basic for five gave us a simple SQL Azure database that we could use for doing simple development. I can do basic. I can do standard. I can do premium. In here I can specify how many DTUs and then adjust up and down based on how much compute I need. There's also the VCORE where I can specify general purpose, hyperscale, or business critical. Once I've decided how I want to run this, for instance, I could go to provisioned. I can specify if I have [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) licenses I want to apply. I just click on apply, and that will now upsize my database to where it needs to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** sql (4), vcore (2), dtu (1)
> **UI Navigation:** go to (1), click on (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Create a Key Vault](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-a-key-vault?u=76281980&t=0)** - [Instructor] Key Vaults provide a way for the secure storage of secrets, certificates, and keys in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). I can create a Key Vault in Azure in the portal by going out and searching for Key Vaults, by typing in Key Vault, and then doing the search. It'll then pull up that, or once I've done that, it'll show up in my quick access, and I can create a new one. Click on Create, and this will then specify how I want to do this. Now, I'm going to create this inside of my Azure quick tips shared directory, and we're going to give this a name and I'm going to call this my AZ QT key vault 01. And then I'm going to put it into a region and I'm going to select the pricing tier. There's a soft delete that is enabled. I can say number of days to retain deleted key vaults and I can specify purge protection. Next, we can create some access policies and then we can specify networking endpoints so that we can lock this down to only private networks. And then I can go out and I can create this, clicking on the review and create it'll do a check to make sure that everything is right. And then I can click on the review and create button to initialize the deployment and create the key vault. This takes just a few seconds and when it's done, I can click on go to the resource and now I can manage my key vault.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **UI Navigation:** click on (3), select the (1), go to (1)
> **CLI Commands:** az (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Grant access to a Key Vault](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/grant-access-to-a-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/grant-access-to-a-key-vault?u=76281980&t=0)** - Access to key vaults can be managed either through access policies or with [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) integration. Let's take a look at how we can grant our developer access to read secrets with access policies. From the key vault, click on access policies. This will show us who has access, and what kinds of access they have. Click on add an access policy to go out and select from the template. Now I've got secrets that I want my developer to be able to get to. They don't need keys or certificates. So I'm just going to go to secret management. And then I can say, do I want them to be able to do all of these things, or just be able to read? I'm going to give the get and list, and then I'm going to click on add. And this is a very simple permission group. And then we need to specify who we're adding access to. Click on the select principle, type in dev Dad, and then click on select. And then we can add. Now it shows that the developer Dad is in the list, but I still have to click on save to apply this permission. Once I do that, then dev Dad can go out and read the secrets in our key vault.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **UI Navigation:** click on (6), go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - access (1)

#### [Update a secret in a Key Vault](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/update-a-secret-in-a-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/update-a-secret-in-a-key-vault?u=76281980&t=1)** - [Instructor] In key vaults, secrets are versioned and managed so that we can recover if we need to. If you have access, you can update a secret with a new version. Do that by going into the key vault and then go into secrets under the settings. This gives you a list of the secrets that are there. If you don't have access, you'll get a message saying you don't have access but if you do, then you can go and you can say, let's create a new version. I'm going to go to my secret and I'm going to create a new version of this. I can click on new version, give it a value. And if you want to see what it says, you can click the little eye and it'll tell you and then we can go down, set an activation date, optionally which is the date that'll become active. And I can also set an expiration date, perhaps that I want the secret only to be in here until a certain day. When I'm done, I can click on create. And that creates the new version. Now, if you click on the version and you click here, you can actually copy that secret version into the clipboard and specify that you want to use that version of the secret. If you cut off the last bit of the 07 et cetera, then it will use the latest version.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1)
> **Speakers:** - [instructor] (1)

#### [Purge or recover deleted Key Vaults](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/purge-or-recover-deleted-key-vaults?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/purge-or-recover-deleted-key-vaults?u=76281980&t=0)** - [Instructor] Key vaults contain secrets, certificates and keys that are critical to how our applications work. One of the nice features about them is that they have a soft delete feature which means that if I delete a key vault, it'll keep it for a period of 90 days. I can go ahead and delete this and then go on with my day. And at some point I might decide, well, gee, I need to recover that. Well, the way that I recover it is by going into the key vaults. From the key vault blade, I can go out and I can say, manage deleted key vaults. This takes me to where I can pick a subscription. And inside here, I'll get a list of the key vaults that I may have deleted inadvertently that I might need to recover. To recover it, I can click on the key vaulting question, click on recover. Or if I do want actually completely delete it and reuse the name, I can click on purge and purge will then get rid of all the key vault, the secrets, certificates and keys. And then I can start over from scratch.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Integrate App Service and Key Vault](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/integrate-app-service-and-key-vault?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/integrate-app-service-and-key-vault?u=76281980&t=1)** - [Instructor] Using Key Vault secrets in App Services can be done with no code involved by setting values in the configuration settings. In this application, in my configuration, I have a secret value that is currently set to be from the App Service config. In order to pull this secret value from a Key Vault, what I need to do is go into the application identity, turn on system assigned identity. This will go out and apply a setting for the application to run within a particular identity. And then once that's done, I can make an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) role assignment to grant it a Key Vault reader access to a Key Vault environment. Select on add role assignment, set your scope to Key Vault. Then go down, pick the resource which is my azqt Key Vault, and then select the role. And I'm going to be a Key Vault reader. Select save and this will go out and assign that role assignment to my App Service. Next, we go back into our configuration and it may take a moment for those settings to propagate but when it's done, I can go in and I can take my secret and instead of having a hard coded value, 'cause I can use a value from that Key Vault, where I pull in the @[Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).KeyVault, pass in the vault name, [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learnings demo with a secret name of my secret, say OK and then save, click on continue.
>
> **[1:42](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/integrate-app-service-and-key-vault?u=76281980&t=102)** And now my settings will show that my secret is coming from the Key Vault. And the Key Vault reference will then turn to green once it's verified that it has access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** select the (1), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Create an App Insights dashboard](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-an-app-insights-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/create-an-app-insights-dashboard?u=76281980&t=1)** - [Instructor] Application Insights gives us some great information about how our applications are performing. And one of the nice features is that not only can I explore and see things, but I can create a dashboard that will show that performance criteria. Let me show you how we can set that up. Simply go out to the application dashboard and click the link. This then goes out and it creates a dashboard that has the usage, reliability, response and other characteristics of how the application is running. I can customize the dashboard by adding additional controls and views to it if I want, but is a easy to get started thing. This is a great way to get a dashboard so you can see how your application is running.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Azure Quickstart Center](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-quickstart-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-quickstart-center?u=76281980&t=1)** - [Instructor] So you've decided to use [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), but now it's like, how do I get started? Well, let me tell you about one thing in Azure that you can check out. Under the all services general is the quick start center. If you click on that, you can go out and you can see how you can get started creating web apps, [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), build and deploy serverless applications, among other things. There's an Azure setup guide as well as migration guide which will help you identify where you're at in the cloud journey and help you figure out what the next step is. There's also a number of online courses. These are connected to the learn.[microsoft.com](https://microsoft.com) and there's a number of great opportunities to go through and learn how to set up and do things like working with the compute services or managing your Azure costs. But the quick start center is a great place to start out and see where you're at and to get started quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Prerequisites:** setup (1), set up (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Azure free services](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-free-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-quick-tips-for-developers-18807163/azure-free-services?u=76281980&t=0)** - [Instructor] If you're new to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), and you're wondering, "What can I do with it?" you might be interested in this little nugget that I found. If you go up into the More Services, and you click on General, you're going to see, there's a link here for free services. Free services is always good, something that you can get for free, and this lists out all the different kinds of things you can do in Azure, everything from Compute, where you get a free account with 12 months, Key Vault, Azure Storage, media services. If you scroll down, you can see you get [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md), you have AI, things like [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md), moderation, custom vision, [Forms](../../Skills/Web%20Development/Forms.md) recognizer. A lot of these options are available for free with the new subscription, but there's also always free services, where you can have app compute services, where you can have functions up to a million requests per month for free, you can have AD B2C, you can have [DevOps Tools](../../Skills/Software%20Development/DevOps%20Tools.md), application insights. Go out and explore this. There's a lot of things out here, and as you can see, you can go out and build a lot of stuff in the cloud, for free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [DevOps Tools](../../Skills/Software%20Development/DevOps%20Tools.md) (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Env Vars:** b2c (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Mike Benkovich](../../Instructors/Cloud%20Computing/Mike%20Benkovich.md)

## Skills Covered

- Cloud Development
- Microsoft Azure

## Path Context

### In [Getting Started as an Azure Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20Azure%20Developer.md)
← [Azure Essential Training for Developers](Azure%20Essential%20Training%20for%20Developers.md) | **3 of 7** | [Building a Web Application on Microsoft Azure](Building%20a%20Web%20Application%20on%20Microsoft%20Azure.md) →

## Appears In

- [Getting Started as an Azure Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20Azure%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Microsoft Azure, Cloud Development
- [Azure Essential Training for Developers](Azure%20Essential%20Training%20for%20Developers.md) — Microsoft Azure, Cloud Development
- [Blockchain for Developers- Hyperledger Fabric on Azure](../Cybersecurity/Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md) — Microsoft Azure
- [Leveraging Google Cloud Developer and DevOps Tools](Leveraging%20Google%20Cloud%20Developer%20and%20DevOps%20Tools.md) — Cloud Development
- [Azure DevOps for Beginners](Azure%20DevOps%20for%20Beginners.md) — Microsoft Azure

---

[↑ Back to top](#)