---
type: course
cssclasses:
  - lle-course
slug: azure-developer-associate-az-204-cert-prep-implement-azure-security
url: "https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security"
duration_minutes: 72
duration: 1h 12m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEtDcyZYAW1GA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730768603460?e=2147483647&amp;v=beta&amp;t=jNqm5Zbs3AVZDJqAZoVAhSsemsOz78usqiHR3CdpMRw"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Azure Data Lake for Developers]]'
next_courses:
  - '[[Developing Chatbots with Azure]]'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":4,"total":7,"prev":"Azure Data Lake for Developers","next":"Developing Chatbots with Azure"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Developer%20Associate%20(AZ-204)%20Cert%20Prep-%20Implement%20Azure%20Security.md)

![Azure Developer Associate (AZ-204) Cert Prep: Implement Azure Security](https://media.licdn.com/dms/image/v2/D560DAQEtDcyZYAW1GA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730768603460?e=2147483647&amp;v=beta&amp;t=jNqm5Zbs3AVZDJqAZoVAhSsemsOz78usqiHR3CdpMRw)

# Azure Developer Associate (AZ-204) Cert Prep: Implement Azure Security

> With the rise of cloud computing, and especially platform as a service (PaaS) solutions, developer productivity has reached new heights. A single developer can now be responsible for the design and even configuration of databases, web servers, and application deployment. But with this new power comes a new set of security concerns. In this course, learn how to secure your applications by leveragin

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security) | 1h 12m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Why security matters for developers
  - What you should know
- [**1. Control access to Azure**](#1-control-access-to-azure) (10 videos)
  - Azure Role Based Access Control (RBAC)
  - Grant role based access to a user
  - Azure RBAC roles for development
  - The contributor role
  - The User Access Administrator and Owner roles
  - Custom Azure RBAC roles
  - Create custom Azure RBAC roles
  - Management pane vs data pane RBAC roles
  - Challenge: Design Azure access control
  - Solution: Design Azure access control design
- [**2. Control user access to your apps**](#2-control-user-access-to-your-apps) (6 videos)
  - Register an application to Azure AD
  - Web application sign in with Azure AD
  - Securing web application authentication with Azure AD Conditional Access
  - The Microsoft Authentication Library
  - Challenge: Internal web app with Azure AD
  - Solution: Internal web application with Azure AD
- [**3. Control app access to your data**](#3-control-app-access-to-your-data) (9 videos)
  - Manage Azure application secrets
  - Shared Access Signatures in Azure
  - Azure Key Vault service
  - Adding secrets to an Azure Key Vault
  - Azure Key Vault Access Policies
  - Audit logs
  - Managed Identity for Azure Resources
  - Challenge: Design data access controls
  - Solution: Design data access controls
- [**Conclusion**](#conclusion) (1 videos)
  - Developing solutions for Azure and beyond

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Why security matters for developers
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=0)** - [Karl] With Azure Services, the time to market for application development is faster than ever before.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=6)** At the same time, any security issues we might face will have a wider impact than ever before.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=13)** It's a bad day when you discover that the security credentials of your application have leaked.
>
> **[0:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=18)** Azure offers a rich set of tools to keep your app secure and protect your credentials.
>
> **[0:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=24)** The tools take care of all of the heavy lifting, but they can only do that if you understand how they work.
>
> **[0:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=30)** Hi, I'm Karl Ots, an Azure MVP, CISSP, and a patented inventor.
>
> **[0:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=36)** I invite you to join me for my course on LinkedIn Learning.
>
> **[0:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=39)** There we will explore the baseline Azure security controls and discuss Azure application security best practices.
>
> **[0:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=46)** You can start incorporating these controls today with your existing projects.
>
> **[0:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=50)** However, when you design your systems from the beginning with these features in mind, you can easily design, implement, and monitor the security of your apps throughout their development lifecycle.

> [!info]- Semantic Content
>
> **Env Vars:** mvp (1), cissp (1)
> **Speakers:** - [karl] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=0)** - [Instructor] For this course, I'm assuming that you're already familiar with Azure Portal and the basic services available in Azure.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=6)** We'll be using a few different Azure resources in this course, but the focus of this course is security.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=13)** If you find that you have any questions about apps services, storage, or Azure Active Directory, I'd encourage you to take a look at one of our other Azure courses.
>
> **[0:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=22)** It's also important to note that the tools we are discussing aren't limited to the services we'll be using in our examples.
>
> **[0:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=29)** They can be used across other Azure services as well.
>
> **[0:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=32)** For this course, we will be working in a natural environment of KinetEco, Inc.
>
> **[0:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=37)** KinetEco creates alternative energy products and systems worldwide.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=41)** It serves both industrial and consumer customers.
>
> **[0:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=45)** As you're following along, you won't have access to the same environment.
>
> **[0:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=49)** If you'd like to follow along, you can apply the same steps to your own environment, or you can run the provided script to create the KinetEco resources that I'll be working with.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Control access to Azure

> [↑ Back to Table of Contents](#table-of-contents)

#### Azure Role Based Access Control (RBAC)
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=0)** - [Instructor] The default way of granting access to Azure resources is called Role-based Access Control.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=6)** Role-based Access Control or RBAC handles authorization across all services in Azure, be it databases, app services, or even virtual machines.
>
> **[0:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=16)** And keep in mind that while Role-based Access Control handles authorization, Azure AD actually takes care of the authentication of our users and applications.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=26)** Before we go any deeper with Role-based Access Control, let's talk about Azure Resource Manager Terminology.
>
> **[0:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=33)** At the highest level of hierarchy, we have the Azure AD directory, which is sometimes called a tenant.
>
> **[0:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=39)** Next, we have the subscription.
>
> **[0:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=40)** Now, a subscription is a collection of all things below resource groups, resource providers, and resources, and in the end subscription is the highest level of Role-based Access Control assignments and actually the link to our account to the billing.
>
> **[0:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=56)** Your subscription might be tied to your credit card or your subscription might come from your enterprise agreement so you don't have to take care of the bill at all.
>
> **[1:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=66)** Under subscriptions, we have resource groups and resource groups are like folders in a file system so they collect these underlying resources together.
>
> **[1:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=75)** Before we can create resources to resource groups, we need to enable a resource providers in Azure resource manager.
>
> **[1:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=82)** A resource provider is an API or a representation of a particular Azure service.
>
> **[1:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=88)** For example, Microsoft.compute gives us services related to Microsoft virtual machines.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=94)** Another example will be Microsoft database resource provider that gives us all actions and operations related to Azure App Services.
>
> **[1:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=102)** And finally, we have resources.
>
> **[1:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=105)** A resource is an instance of an Azure service such as a particular web application or a particular database.
>
> **[1:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=112)** In KinetEco's case, their Azure active directory is called kinetecoinc.[onmicrosoft.com](https://onmicrosoft.com).
>
> **[1:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=118)** This Azure ID is actually linked to their on premises active directory so that all of the users and groups are actually synchronized from on premises to Azure ID.
>
> **[2:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=127)** This means that their users can actually use their existing credentials, username and password, to log into Azure.
>
> **[2:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=134)** As this is KinetEco's first Azure subscription, it's called KinetEco business applications.
>
> **[2:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=140)** Underneath the subscription, KinetEco has two resource groups, one for installation app, and one for solar panel.
>
> **[2:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=147)** The installation application actually has resources from several resource providers, Azure App Service, SQL database, and storage accounts.
>
> **[2:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=156)** The KinetEco remote solar panel app actually only has one resource, Azure App Service.
>
> **[2:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=162)** A Role-based Access Control Assignment in Azure consists of three parts.
>
> **[2:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=166)** The first part is scope, that is, subscription, resource group, or resource.
>
> **[2:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=171)** Next we have a target of the Role-based Access Control Assignment or an object.
>
> **[2:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=176)** These are reference to an identity in Azure AD, these can be a user, a group, or even an application, and next we have a role.
>
> **[3:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=185)** A Role-based Access Control role is a collection of resource provider actions.
>
> **[3:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=189)** These can be pretty rogue such as Microsoft.Compute/virtualMachines/* giving us access to any action within the Microsoft Compute virtual machines namespace of the resource provider, always can be very specific, such as Microsoft.Compute/virtualMachines/start/action.
>
> **[3:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=208)** A Role-based Access Controls role controls whether or not these particular actions are allowed or not allowed by the particular role.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (2), is an  (2), means that (1)
> **Analogies:** such as (3), for example (1)
> **Code Keywords:** let (1), finally, (1), case, (1)
> **Env Vars:** rbac (1), api (1), sql (1)
> **Code Identifiers:** virtualmachines (2)
> **URLs:** [onmicrosoft.com](https://onmicrosoft.com) (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Grant role based access to a user
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=0)** - [Man] And let's have a look at role-based access control assignments in real life.
>
> **[0:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=4)** I'm the consultant.
>
> **[0:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=5)** I've been tasked to introduce a new developer into Kineteco's Azure environment.
>
> **[0:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=11)** And as you'll see, I've actually logged in with my own Azure AD credentials.
>
> **[0:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=16)** But Kineteco has granted me access in their own environment.
>
> **[0:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=20)** The first thing I need to do is to navigate to the scope of my Azure role-based control assignments.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=26)** And to do that, I'm going to open up my list of subscriptions.
>
> **[0:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=30)** We'll see the KinetEco business applications subscription.
>
> **[0:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=34)** Underneath that, under this blade of settings, we'll see resource groups.
>
> **[0:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=39)** And underneath here, we have Kineteco installation app dev, West US, resource group.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=47)** In the left blade, I'm going to select access control.
>
> **[0:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=50)** Next, I'm going to select add and add a role assignment.
>
> **[0:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=55)** Notice we have already set up our scope of the role-based access control assignment as this resource group.
>
> **[1:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=60)** Let's next, select the appropriate role.
>
> **[1:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=64)** And there are a ton of built in roles available, but because Brian is a developer, we are going to give them the contributor role.
>
> **[1:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=72)** Brian actually has already a user in Kineteco's Azure active directory so we will leave this as it is.
>
> **[1:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=79)** And let's search for Brian's user here on the selection box.
>
> **[1:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=84)** This looks like Brian.
>
> **[1:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=85)** So I'm going to click on it and hit save.
>
> **[1:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=87)** And after a while, the assignment has been successfully completed.
>
> **[1:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=92)** How can we verify this?
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=93)** We can navigate to the role assignments pane.
>
> **[1:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=96)** And we'll see we have two existing role assignments.
>
> **[1:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=98)** First of all mine, and secondly, Brian's role-based access control assignment is, different than mine, because Brian has a different role, but also Brian's scope is actually, if you hover over here, we'll see that the scope is the particular subscription slash resource groups, the name of the resource group.
>
> **[1:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=118)** And there you have it.
>
> **[1:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=119)** A role-based access control assignment is consisting of a scope, a role and a user or object in Azure active directory.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), while, (1)
> **UI Navigation:** select the (1), click on (1), navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [man] (1)

#### Azure RBAC roles for development
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=0)** - [Instructor] When setting up development resources, we need to provide access to our developers with the principle of least privilege in mind.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=8)** It all comes down to the design of which roles do we assign to which developers in which scopes, and we really need to understand the roles in more detail to make this decision.
>
> **[0:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=18)** The first role I'm going to talk about is the owner role.
>
> **[0:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=21)** The owner is the default role that you will have when you create a new subscription yourself.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=26)** Owner has access to create and modify any resources within the scope that it's assigned to.
>
> **[0:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=32)** If you are getting assigned an owner role in the subscription scope, you then create and delete any resource groups under that subscription, but owner also has access to modify access control.
>
> **[0:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=43)** So, owner can invite new people in, assign people different roles, and delete existing RBAC assignments.
>
> **[0:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=51)** Next, we have the contributor, and the contributor shall be the default role for an active developer or an administrator in any Azure project.
>
> **[1:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=60)** Contributor is the role that lets you create, read, and delete any resources within the scope that it's assigned to, which means that we can modify anything.
>
> **[1:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=69)** We can create new resources.
>
> **[1:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=70)** We can delete existing resources, but contributor does not get to assign people access.
>
> **[1:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=77)** And lastly, we have the reader.
>
> **[1:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=79)** Reader is a role that has access to view any sort of configuration related to the management plane of Azure.
>
> **[1:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=85)** Meaning a reader access in a subscription scope gives you access to view any resources and resource group within the subscription.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=94)** Reader even has access to view the configuration, or scaling settings of a particular resource, but reader does not have access to your secrets.
>
> **[1:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=103)** As reader does not have access to data plane of Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** rbac (1)
> **Speakers:** - [instructor] (1)

#### The contributor role
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=0)** - So now that Brian has access to Kineteco installation app development resource group, let's see what they are able to do.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=8)** And to do that, let's navigate to resource groups, and we'll see that we only have one resource group visible, kineteco-installation-app-dev.
>
> **[0:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=16)** Let's click on that to open it.
>
> **[0:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=19)** And now that Brian is a contributor in this resource group, they are able to add new resources, they are able to delete existing resources and they are able to change the tags assigned to this resource group.
>
> **[0:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=32)** However, if they go to access control and try to add role assignments, they'll see that add role assignment functionality is disabled because they don't have access to the Microsoft.authorization resource provider.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=47)** But Brian has only this particular resource group visible to them.
>
> **[0:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=52)** And for development purposes, they actually need to see additional resource groups as well.
>
> **[0:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=58)** And to do that, we need someone who has access to the whole subscription as an owner.
>
> **[1:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=63)** And of course that's me, Karl.
>
> **[1:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=66)** So let's navigate back to my view and let's navigate to subscriptions open up the Kinetico business application subscription and go to access control and add a roll assignment.
>
> **[1:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=82)** In this case as role let's select reader and search again for Brian and click save.
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=93)** And now that the role assignment it has been completed.
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=95)** I'm able to navigate back, ask Brian to the list of resource groups.
>
> **[1:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=100)** And once we hit refresh, we are able to see the rest of the resource groups visible to Brian as well.
>
> **[1:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=106)** And let's have a look at the third one over here, Kinetico remote solar panel up .
>
> **[1:53](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=113)** SNL Brian's role-based access control assignment for the development environments is complete.
>
> **[1:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=118)** He is able to see all of the resources because he's a reader of the whole subscription but he's only able to modify the resources within his own resource group.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (1)
> **UI Navigation:** navigate to (2), go to (2), click on (1)
> **Env Vars:** snl (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### The User Access Administrator and Owner roles
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=0)** - [Instructor] Beyond the owner role, there's also another built-in role in Azure called user access administrator that users will use for managing access.
>
> **[0:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=9)** Let's take a look at the user access administrator role.
>
> **[0:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=12)** As you will see, the list of available actions for user access admin is pretty slim.
>
> **[0:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=17)** We have the read action available for any resource provider in Azure, but we also have access to any operations within the Microsoft.Authorization resource provider.
>
> **[0:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=28)** This means that the user access administrator does not have access to make any changes to resources or resource groups, but it can control access for other users.
>
> **[0:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=39)** As a rule of thumb, you should always use the user access administrator role over the owner role, as the owner role actually is a combination of user access administrator role, as well as the contributor role.
>
> **[0:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=52)** The owner role is really a combination of user access administrative role, as well as the contributor role.
>
> **[0:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=59)** Beyond the role based access control roles, your developers might also need Azure active directory roles.
>
> **[1:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=65)** Azure active directory roles are assigned in the directory or a tenant level.
>
> **[1:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=69)** So they are not assigned in the same scopes as role based access control, subscription, resource group, or resource.
>
> **[1:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=77)** There are two relevant roles for application developers in Azure AD.
>
> **[1:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=80)** First, we have application developer, which is a role that lets you create and manage application registrations, and similarly, we have the Azure active directory guest inviter.
>
> **[1:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=91)** The guest inviter is a role that lets you invite new people from outside of your Azure active directory from other organizations.
>
> **[1:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=100)** Once they accept your invitation, you are able to manage them as your own users because they will have an object ID in your Azure active directory, but their authentication is still handled by their own Azure active directory.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (1)
> **Best Practices:** rule of thumb (1), you should always (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Custom Azure RBAC roles
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=0)** - [Instructor] Now that we know how to set up a development environment using built-in roles, let's talk about custom Azure role based access control roles.
>
> **[0:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=9)** And there are several cases where you will think of implementing custom roles for Azure role based access control.
>
> **[0:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=15)** First of all is, there are more than 70 different roles available and Microsoft is actually building even more roles as we speak.
>
> **[0:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=22)** So sometimes you might be very tempted to implement just one custom role or one higher up role, for example, implementing the owner role instead of the user access administrator and the contributor role, if you need all of those powers in one.
>
> **[0:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=38)** Second of all, there might be an external auditor or an internal security officer saying that we need to monitor all of the access across all of our Azure.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=47)** This would mean that we would actually need to go ahead and drag us to all of our Azure subscriptions resource groups, all the way down to the resources and see what roles are actually in effect in all of those resources.
>
> **[1:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=60)** Both to directly assigned and also inherited from those higher up hierarchy of subscriptions or even resource groups.
>
> **[1:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=68)** And in the end, it's really about the question of this role based access control being both the scope, as well as the role.
>
> **[1:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=75)** And instead of trying to find out an appropriate role, we could actually go ahead and modify the scope that is available for us when assigning the role.
>
> **[1:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=84)** For example, instead of trying to find out a very specific web app related role, we could just go ahead and assign a contributor access, not just even to the web app level, but we'll actually go ahead into the sub resource level in some of these resources like Azure app service slots, web apps, or even virtual networks and their subnets.
>
> **[1:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=107)** So building a comprehensive role-based access control access management using built-in roles, is already pretty complex.
>
> **[1:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=114)** We need to monitor who has access to where, we even need to be aware of some of these backdoors that might not be visible to us using traditional monitoring or using test monitoring that's available to us.
>
> **[2:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=127)** For example, Azure active directory global administrators actually have the possibility to elevate them as user access administrators to any of the subscriptions that are linked to our Azure AD tenant.
>
> **[2:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=140)** And some of the resource specific roles are not always very clear on their naming either.
>
> **[2:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=145)** For example, what is the difference between a backup operator and a backup contributor?
>
> **[2:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=151)** And this is the complexity of managing access with role-based access control only with built-in roles, not even the custom roles.
>
> **[2:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=160)** So why won't I consider custom roles?
>
> **[2:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=163)** First of all, built in roles are actually products just like any other Azure services built by Microsoft.
>
> **[2:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=170)** Microsoft teams are actually try to modeling these role based access controls roles.
>
> **[2:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=174)** And when they are introducing new features, the Azure services, specifically these resource providers, they are actually introducing new services or at least re-evaluating these building roles as well.
>
> **[3:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=187)** When we are building these roles ourselves, whenever something changes on Microsoft side, we actually need to version control the changes and actually update these changes to each of our subscriptions that are using these custom roles.
>
> **[3:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=198)** And if you're not careful, you actually might end up having names that are very similar to those of the built-in roles.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), just like (1), similar to (1)
> **CLI Commands:** find (2)
> **Code Keywords:** let (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create custom Azure RBAC roles
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=0)** - [Tutor] So all of the built-in roles are actually defined here in docs.[microsoft.com](https://microsoft.com) under built-in roles for Azure resources page.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=8)** For example, if I were to look for SQL related roles, I could just go ahead and search for SQL.
>
> **[0:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=14)** We'll see that there are actually a couple of roles built specifically for Microsoft SQL.
>
> **[0:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=20)** And let's have a look at the SQL Database Contributor role for more details.
>
> **[0:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=25)** And as we will see, SQL database contributor role actually is comprised of several actions that are available for users who have been assigned this role in that particular scope of the role based access control assignment.
>
> **[0:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=37)** And there are even denied actions defined in that, not actions phase of that role definition as well.
>
> **[0:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=44)** What if we would want to build our own custom roles?
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=47)** To do that, we can open up the inverse of this documentation called resource provider operations.
>
> **[0:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=54)** I've already opened up the documentation over here.
>
> **[0:57](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=57)** And let's have a look at Microsoft.Sql and see what's available.
>
> **[1:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=64)** This is the lowest level of access control that we can have.
>
> **[1:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=66)** We can build custom roles that define very specifically that this is specifically an action that is either allowed or not allowed by the specific role that we are building.
>
> **[1:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=78)** Based on thresholds of a recent regulatory audit, KinetEco decides that there is now a need to push for more streaks or access control.
>
> **[1:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=87)** And specifically, they really need to separate the roles of a SQL network administrator and a regular SQL administrator.
>
> **[1:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=96)** And to do that, they're going to implement custom roles.
>
> **[1:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=99)** As you'll see, custom roles are defined just like the real roles built-in.
>
> **[1:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=104)** We have a list of actions that are available for us in terms of a resource provider operations, and we have a list of not actions that are not permitted for this role.
>
> **[1:57](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=117)** The last thing we have is the assignable scopes.
>
> **[1:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=119)** Where can we actually implement this particular role?
>
> **[2:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=123)** The KinetEco database administrator has access to do anything within the Microsoft.Sql/servers/databases namespace of the resource provider.
>
> **[2:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=133)** But specifically, it is not permitted to perform any write or delete operations to the firewall rules of the SQL server.
>
> **[2:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=142)** The KinetEco Database Network Administrator however, has no other access to that Microsoft.Sql resource provider, but it actually has access to modify and delete the firewall rules.
>
> **[2:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=156)** Custom rules are uploaded from the command line.
>
> **[2:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=159)** In Azure CLI, it now using the command az role definition create.
>
> **[2:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=165)** Azure parameter it takes in the role definition file that is written in Json.
>
> **[2:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=176)** And once we have uploaded the custom roles into our Azure subscription, we are able to assign them to users.
>
> **[3:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=183)** I've logged in here to KinetEco environment as myself and I'm already navigated here to the resource group view.
>
> **[3:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=189)** So I'll just go ahead and click on, add and add role assignment.
>
> **[3:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=194)** And in the list of available roles, I'm now able to search for KinetEco.
>
> **[3:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=198)** You'll see that we have the KinetEco database administrator and the network administrator available for us and even the definitions are here visible, that we defined in the Json previously.
>
> **[3:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=209)** I'm going to select KinetEco Database Network Administrator and search for Brian and hit save.
>
> **[3:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=219)** We can verify that the role assignment was successful by checking the role assignments tab of this pane.
>
> **[3:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=226)** And here we can see Brian's cumulative access, he's a reader in the subscription scope and also KinetEco Database Network Administrator in this resource group.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), cli (1)
> **Code Keywords:** let (2), delete (2)
> **File Paths:** microsoft.sql (3)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** az (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)

#### Management pane vs data pane RBAC roles
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=0)** - [Instructor] So far, we have talked about access to Azure management pane.
>
> **[0:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=4)** Examples of these management pane access controls are rights about modifying file modules to Azure SQL, creating new resources, or managing access to others.
>
> **[0:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=15)** We gave Brian a contributor access so that he can create, read, update or delete resources in his resource group.
>
> **[0:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=22)** But now let's switch gears and talk about data pane access control.
>
> **[0:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=27)** KinetEco wants the installation engineers to be able to upload service manuals to Azure Storage.
>
> **[0:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=33)** And the engineers should not have access to change Azure Storage configurations or see any other Azure resources available.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=41)** We can implement access control like this using data pane access control.
>
> **[0:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=45)** And specifically, we do this by introducing two new sets of allowed or not allowed resource provider actions.
>
> **[0:53](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=53)** Data actions and not data actions.
>
> **[0:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=58)** I've already looked ahead for an appropriate role for KinetEco's installation engineers.
>
> **[1:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=63)** The role is called storage blob data contributor.
>
> **[1:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=65)** And as we'll see, it has allowed actions for the management pane over here but it also have allowed data actions, specifically ability to write to a blob storage.
>
> **[1:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=78)** So let's give Aaron, one of the installation engineers, access to upload new files to Azure Storage.
>
> **[1:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=84)** So I'm starting off by navigating to the appropriate storage account.
>
> **[1:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=92)** And let's give Aaron access specifically to this resource only.
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=95)** So I'm going to open up the access control and selecting add, add role assignment and searching for the role.
>
> **[1:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=109)** Next up, I'm going to select Aaron as user and hit save.
>
> **[1:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=116)** To verify, let's have a look at the role assignments.
>
> **[1:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=119)** So currently, the access control to this storage account looks like this.
>
> **[2:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=123)** Myself and Brian have access in the subscription scope.
>
> **[2:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=127)** I as an owner and Brian as a reader.
>
> **[2:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=129)** Brian has also access to this resource group specifically as a contributor.
>
> **[2:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=134)** And Aaron has storage blob data contributor access specifically to this resource or the storage account only.
>
> **[2:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=142)** Now that Aaron has been granted data grain access, he's able to work with data on our Azure Storage account.
>
> **[2:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=149)** I've logged into Azure Storage Explorer using Aaron's credentials.
>
> **[2:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=153)** To update a new file, let's just select KinetEco's subscription and navigate to the appropriate storage account.
>
> **[2:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=159)** Select a container, which is sort of like a folder in a storage account and just drag and drop the PDF file into the installation manual's container.
>
> **[2:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=170)** After the upload is complete, we can double click the file to download it again and verify it is accurate.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), delete (1), switch (1), this. (1)
> **Env Vars:** sql (1), pdf (1)
> **UI Navigation:** navigate to (1), drag and drop (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Design Azure access control
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=6)** - [Instructor] And now it's time for a challenge.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=8)** KinetEco is building their installation support application.
>
> **[0:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=12)** The application itself is pretty easy.
>
> **[0:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=14)** They have a web application, SQL database, and a storage account for installing installation manuals as PDF files.
>
> **[0:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=21)** There are two copies of the environment, the development environment, and the production environment.
>
> **[0:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=27)** KinetEco has defined the following access control requirements for the application.
>
> **[0:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=33)** First off, the project managers need to be able to manage project members' access to Azure resources.
>
> **[0:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=40)** The developers need to be able to create and modify resources in the development resource group, and they also need to be able to view the production resource group to troubleshoot issues in production.
>
> **[0:53](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=53)** And finally, installation engineers need to be able to access the storage account in the production resource group to upload new files.
>
> **[1:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=62)** Your challenge is to plan the access control for the KinetEco installation support app with the principle of least privilege in mind.
>
> **[1:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=70)** You should design the solution with minimal number of role-based access control assignments, and you shouldn't spend more than 10 minutes on this challenge.
>
> **[1:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=80)** Now, it's your turn to take the challenge.
>
> **[1:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=82)** You can post the video now, and when you're ready, skip to the next video to see my approach to the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), pdf (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** next video (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Design Azure access control design
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=0)** - And here's an example of how your Access Control could look like.
>
> **[0:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=10)** On the top, I have Cecilia, who has access as a User Access Administrator for the whole KinetEco Business Application Subscription scope.
>
> **[0:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=18)** Next up, I have two assignments for the installation-app-dev Azure AD group role-based Access Control Contributor for the dev environment, and Reader for the production environment.
>
> **[0:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=30)** And lastly, I have the Installation Manual Uploaders group, assigned a storage block data contributor access, specifically to production environments, storage account only.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=41)** As you'll notice, to minimize our back assignments, I'm going to use Azure AD groups.
>
> **[0:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=45)** You might recall that Azure AD groups can be a target or the object of a RBAC assignment, just like a user or an application can be.
>
> **[0:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=54)** If this was a brand new subscription, Cecilia will need to have owner privileges to register the resource providers of a mitered dev app, mitered SQL, and mitered storage, for the first time they want to use those services.
>
> **[1:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=69)** After that User Access Administrator privileges are sufficient.

> [!info]- Semantic Content
>
> **Env Vars:** rbac (1), sql (1)
> **Analogies:** just like (1)
> **Speakers:** - and (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Control user access to your apps

> [↑ Back to Table of Contents](#table-of-contents)

#### Register an application to Azure AD
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=0)** - [Instructor] Registering an application is really a prerequisite for us to use Azure AD as an identity provider in our applications, meaning that our users get single sign-on using their existing credentials.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=13)** But you can use Azure AD to authentic applications as well.
>
> **[0:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=17)** Using Azure AD as an identity provider, lets us focus on authorization rather than worrying about how are we storing the user credentials.
>
> **[0:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=27)** But what is this in practice?
>
> **[0:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=28)** When we register an application, an application object and a corresponding service principle are actually created behind the scenes.
>
> **[0:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=38)** Applications are registered in the Azure portal.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=41)** I've logged in as myself into Kineteco's Azure environment, and I'll navigate to the Azure Active Directory page of the Azure portal.
>
> **[0:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=50)** Here on, I'll scroll down for application registrations, and select new registration.
>
> **[0:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=58)** So we have two choices to make.
>
> **[0:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=59)** First of all, we give my application registration a name, preferably a name that's the same as our application.
>
> **[1:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=69)** And then we need to decide which users do we allow to sign in.
>
> **[1:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=73)** Kineteco is building an application that only lets in users from Kineteco Azure Active Directory.
>
> **[1:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=78)** So the first choice is actually suitable for them.
>
> **[1:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=82)** If they would want to use external partners who will then log in using their own credentials, they would use Azure Active Directory multi-tenant.
>
> **[1:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=90)** And if they were to build consumer-facing applications, the last selection will be appropriate.
>
> **[1:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=96)** Once I made my tenancy selection and inverted my name I then click on register.
>
> **[1:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=104)** Two things have happened now, first of all as you created an Azure Active Directory object behind the scenes, you might recall that an Azure Active Directory object is that target of a role-based access control assignment, meaning that instead of a user or a group, we can actually assign role-based access control now to this application as well.
>
> **[2:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=128)** And another thing that was created for us is the managed application or a service principle.
>
> **[2:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=133)** We'll be configuring this later.
>
> **[2:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=135)** For now, let's go back to the application registration.
>
> **[2:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=139)** Let's navigate under manage to authentication.
>
> **[2:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=142)** This is the URL for configuring the authentication settings of our application.
>
> **[2:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=147)** I already have an application that is hosted in kineteco.[azurewebsites.net](https://azurewebsites.net).
>
> **[2:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=153)** Now let's see how to configure Azure Active Directory to secure this application against unauthenticated users.
>
> **[2:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=162)** In my case I'm going to use a feature of Azure app service to authenticate my users, meaning that my redirection URL is actually the path of my website, followed by auth, login, Azure AD and callback.
>
> **[3:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=183)** Depending on your authentication technology, your redirection URL might look a little bit different.
>
> **[3:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=191)** In addition, we need to enable the access token and ID token implicit grants.
>
> **[3:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=197)** Once we've done that we can hit save.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** url (3)
> **UI Navigation:** navigate to (1), scroll down (1), click on (1)
> **Tools:** azure portal (2)
> **Prerequisites:** prerequisite (1), configure (1)
> **CLI Commands:** make (1)
> **URLs:** [azurewebsites.net](https://azurewebsites.net) (1)
> **Cross-References:** go back to (1)

#### Web application sign in with Azure AD
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=0)** - [Instructor] To authenticate users in our web applications using Azure AD, we need to talk about claims-based access control.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=8)** And claims-based access control starts with both the user and the application trusting a separate external identity provider, in this case, Azure AD.
>
> **[0:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=18)** Beyond just simple authentication tokens, the external identity provider can actually store multitude of claims about the user as well.
>
> **[0:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=28)** These can be used to grant more granular access and actually perform authorization-related access control methods within our application.
>
> **[0:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=38)** You then think of these claims like a driver's license.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=41)** A driver's license is issued by its trusted third party.
>
> **[0:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=45)** In this case, a Department of Motor Vehicles or a police station, depending on where you're from.
>
> **[0:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=52)** And at least not just the fact that you are licensed to drive but also lists some more specific claims about your driving ability, maybe that you're certified to drive a specific category of a vehicle and maybe even some additional information that is not only related to your driving ability.
>
> **[1:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=71)** In some cases, it might be your date of birth and maybe even some physical abilities as well.
>
> **[1:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=77)** So when we are building web applications that let users authenticate using Azure Active Directory, we are actually implementing something called an open ID authentication protocol.
>
> **[1:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=88)** And let's quickly walk through how does it work.
>
> **[1:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=92)** We start off with the user requesting access to the web app.
>
> **[1:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=96)** Then the web application actually passes on that request to that identity provider or Azure AD.
>
> **[1:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=101)** Azure Active Directory makes sure that the user is successfully being logged in.
>
> **[1:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=105)** They check whether or not the username and password match.
>
> **[1:48](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=108)** And in some cases, also asks for a second or even third factor of authentication.
>
> **[1:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=115)** If the user successfully logs in, our authentication provider provides a security token to the user and redirects the user to the application page that they requested.
>
> **[2:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=127)** Once the user is redirected to the page, they are able to present the correct authentication token and our application is able to parse that token and decide whether or not the user is authorized to log into the page.
>
> **[2:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=141)** Now that we have verified the identity of the user based on the authentication provider's security token, we can actually fetch more detailed profile information from the identity provider.
>
> **[2:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=153)** In Azure AD's case, that could entail claims about group membership, office location or which part of the organization do they belong to?
>
> **[2:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=163)** So we left off KinetEco's website unsecured.
>
> **[2:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=166)** Anyone is able to access this website.
>
> **[2:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=169)** Let's go ahead and set up Azure Active Directory authentication for this.
>
> **[2:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=174)** To do that, I'm going to need a couple of IDs from our application registration.
>
> **[2:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=179)** Namely, the application ID, sometimes referred to as the client ID of the app.
>
> **[3:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=185)** This is unique to the application registration that we created.
>
> **[3:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=189)** And secondly, the directory ID or Azure Active Directory tenant ID of our organization.
>
> **[3:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=197)** This is common across all of the application throughout our whole organization.
>
> **[3:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=203)** Once we have copied these IDs, we can go ahead and configure the app service.
>
> **[3:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=208)** In the Azure portal, I'm going to select my app service from the recent resources.
>
> **[3:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=213)** Under settings, when I scroll down, I see authentication/authorization and I can go ahead and turn this on.
>
> **[3:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=221)** We need to select two things.
>
> **[3:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=223)** Before we configure the Azure AD app, we first need to select what sort of action to take when an unauthenticated request is coming in.
>
> **[3:53](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=233)** As we are using Azure AD, we are selecting that.
>
> **[3:57](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=237)** Next, we can configure the Azure App Service application registration.
>
> **[4:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=242)** There're two modes for us to choose from.
>
> **[4:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=244)** A global administrator of the Azure AD, such as myself would be able to just pick the Azure app registration from the list using the express mode.
>
> **[4:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=253)** A developer would more likely have to actually configure this manually in the advanced mode.
>
> **[4:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=260)** Next, we'll paste in the client ID of our application.
>
> **[4:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=265)** And then we need to define our identity provider URL.
>
> **[4:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=268)** This is different depending on what sort of authentication tools you are using.
>
> **[4:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=273)** In my case, I'm going to use the following.
>
> **[4:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=278)** The one common part of the identity provider URL is our directory unique identifier.
>
> **[4:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=285)** Depending on your configuration, your base URL might be different.
>
> **[4:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=289)** And then we can click OK.
>
> **[4:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=292)** And also save in the authentication/authorization pane.
>
> **[4:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=299)** Now that we have configured our application authentication, we can visit the website and see if it's working.
>
> **[5:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=305)** To do that, I'm going to open up a new in private window and navigate to the website.
>
> **[5:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=312)** I'm getting redirected to the login.microsoft.online, slash our directory ID.
>
> **[5:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=319)** I'll log in using Aaron's credentials.
>
> **[5:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=324)** And once the login is successful, we can see that we are successfully redirected to the website.
>
> **[5:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=331)** So now we have successfully configured authentication of our application.
>
> **[5:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=335)** Our users in KinetEco's Azure AD are able to log in, all of them.
>
> **[5:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=340)** Next, we will have a look at how to set up more stricter authorization.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), let (3), from. (2), match. (1), this. (1)
> **Prerequisites:** configure (4), set up (2)
> **Env Vars:** url (3)
> **UI Navigation:** scroll down (1), navigate to (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Securing web application authentication with Azure AD Conditional Access
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=0)** - [Instructor] Now that we have set up authentication of our application, let's start looking at authorization.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=6)** And authorization logic can be applied using Azure AD conditional access.
>
> **[0:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=12)** Azure AD conditional access also lets us specify when should we ask the user for another form of authentication, such as a one-time use code over SMS or an authentication application.
>
> **[0:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=24)** Let's continue from our app registration and navigate into the manage application in our local directory.
>
> **[0:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=31)** Conditional access is part of the premium licenses, which KinetEco has because they're using Office 365.
>
> **[0:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=38)** So in the Enterprise application view, I'll just go ahead and click on Security, Conditional Access, and select new policy.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=47)** And now I can configure the authorization logic of my application.
>
> **[0:53](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=53)** In the conditional access configuration page, I first need to select the scope of the assignment, which user, which application and which combination of this condition.
>
> **[1:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=64)** Secondly, I need to select what are we doing with these users or applications.
>
> **[1:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=68)** Do we let them in, are we blocking the access or granting the access?
>
> **[1:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=72)** And finally, if you're not sure if you are about to block ourselves out, we can turn this in the audit-only mode to verify that everything is working.
>
> **[1:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=80)** Once we are satisfied, we can turn the policy on.
>
> **[1:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=83)** So let's implement these for KinetEco's web application.
>
> **[1:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=87)** First up, I'm going to select the default access control for users who are trying to authenticate into this application.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=94)** Under access control, I am going to select block access and click select.
>
> **[1:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=99)** And then I navigate back up under assignments, users and groups.
>
> **[1:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=105)** I'll configure this to apply to all users.
>
> **[1:48](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=108)** This means that we are in the danger of locking ourselves out because we have selected the block type of grant for all users, meaning that no one is able to log in yet.
>
> **[1:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=119)** Next up, on the exclude page, let's select users and groups and select a particular Azure AD group that should access this web application.
>
> **[2:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=128)** I'm going to search for the name of the group.
>
> **[2:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=131)** Click it and hit select.
>
> **[2:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=133)** Once again, I'll pick done.
>
> **[2:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=136)** Now that we are done, we can go ahead and turn the policy on and click create.
>
> **[2:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=141)** In a production environment, you would want to be more careful and first enable this in the report-only mode, verify that everything is correct and only later come back and enable this whole policy in on mode.
>
> **[2:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=154)** So let's go ahead and navigate to kineteco.[azurewebsites.net](https://azurewebsites.net).
>
> **[2:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=159)** We are redirected again to the Azure AD page.
>
> **[2:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=162)** And let's select Aaron.
>
> **[2:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=165)** And I click sign in.
>
> **[2:48](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=168)** And we have successfully authenticated here.
>
> **[2:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=171)** So as Aaron should have access, this seems to be working.
>
> **[2:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=174)** Now let's try logging in as someone who shouldn't have access.
>
> **[2:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=178)** To do that, let's select Brian.
>
> **[3:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=182)** And log in again.
>
> **[3:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=185)** And you'll see that we actually don't have access to this site.
>
> **[3:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=189)** Our sign in was successful but we don't have permissions to access to this resource.
>
> **[3:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=194)** So to verify that Brian wasn't able to log in because of the conditional access, let's navigate under enterprise applications under activity to sign-ins.
>
> **[3:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=203)** All of the sign-ins against these applications are listed here in a central place.
>
> **[3:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=208)** Here's Brian's login.
>
> **[3:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=210)** Let's click on it to reveal more details.
>
> **[3:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=213)** If we scroll down, we'll see that a failure reason for this sign-in was that access has been blocked due to conditional access policies.
>
> **[3:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=221)** So as our conditional access policy seems to be working, we have successfully set up both authentication and authorization for our web application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), continue (1), finally, (1)
> **UI Navigation:** click on (2), select the (2), scroll down (1)
> **Prerequisites:** set up (2), configure (2)
> **URLs:** [azurewebsites.net](https://azurewebsites.net) (1)
> **Env Vars:** sms (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### The Microsoft Authentication Library
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=0)** - [Instructor] We have talked about securing the authentication towards our application using Azure App Service.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=6)** However, if you are using another platform to host your apps, or if you are using a specific other technology, you might want to have a look at how to do this all in code.
>
> **[0:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=15)** To do that, have a look at the Microsoft identity platform.
>
> **[0:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=19)** You'll find the information about how to implement all of these authentication scenarios in application code for a single page application, web application, even authenticating APIs against other APIs, and building native applications for services like mobile apps or Windows native.
>
> **[0:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=37)** What's more, Microsoft is providing us with Microsoft Authentication Library.
>
> **[0:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=43)** Microsoft Authentication Library or MSAL, is available for .NET, JavaScript, and other languages.
>
> **[0:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=49)** From here, you'll have a chance to look at all of the sample code on a specific language or framework that you would like to use.

> [!info]- Semantic Content
>
> **Env Vars:** msal (1), net (1)
> **CLI Commands:** find (1)
> **Code Keywords:** for . (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Internal web app with Azure AD
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=0)** (upbeat intro music)
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=6)** - It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=8)** This time we are going to secure an internal web application using Azure ID.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=13)** KinetEco wants to approach the cloud with the same security standards as they are used to from the on-premises world.
>
> **[0:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=20)** Specifically, they want to provide access to their internal applications only to the users who have credentials in their own premises Active Directory already, and the users need to be accessing the application from the known secure company network.
>
> **[0:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=36)** Your challenge is to plan the access control for this internal web application.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=41)** Securing access from the point of view of network security is something that we haven't talked about before.
>
> **[0:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=46)** So go ahead and explore while the other conditions are available for you to protect your applications.
>
> **[0:53](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=53)** You should not spend more than five minutes on the challenge.

> [!info]- Semantic Content
>
> **Speakers:** - it (1)
> **Non-Speech:** (upbeat intro music) (1)

#### Solution: Internal web application with Azure AD
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=0)** - [Instructor] And let's walk through the steps on securing the internal web application for KinetEco.
>
> **[0:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=11)** I'm going to do this using conditional access.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=13)** First, I'm going to give it a name, next, on the assignments tab, I'm going to select this conditional access to be applied to all users.
>
> **[0:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=24)** I'm going to select the specific internal web application from the list.
>
> **[0:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=35)** Next, under the conditions we have several options, particularly let's have a look at the locations options.
>
> **[0:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=43)** Let's turn this on, on the yes part and let's select all trusted network locations.
>
> **[0:48](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=48)** Then we can go ahead and click done, again done, and navigate to access controls.
>
> **[0:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=55)** In here let's select grant access and also select required devices to be marked as compliant.
>
> **[1:01](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=61)** Once we are satisfied, we can go ahead and enable this policy by turning this on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Control app access to your data

> [↑ Back to Table of Contents](#table-of-contents)

#### Manage Azure application secrets
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=0)** - [Tutor] Kineteco also has a line of products aimed at consumers.
>
> **[0:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=4)** Most of these products are actually built around solar panels.
>
> **[0:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=7)** And throughout this chapter, we are actually building an companion app for the solar panels.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=13)** With the solar panel companion app, the users kind of view the servicing manuals of their solar panels.
>
> **[0:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=19)** There's no authentication built in.
>
> **[0:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=21)** The users actually just type in the serial number written on their device.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=26)** In the future, customers can even order replacement parts for their solar panels, provided that their warranty is still valid.
>
> **[0:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=35)** As the key feature of the solar panel companion app is actually displaying off the manuals to the end user, we now need a way to grant solar panel web application access to the storage account.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=47)** I've already logged into the Azure environment of Kineteco.
>
> **[0:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=52)** The storage account that actually has all of the servicing manuals is the same one that we are using in the installation application.
>
> **[0:59](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=59)** To connect to a storage account securely, just like to our SQL database we need a connection string.
>
> **[1:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=66)** We can find them under the settings and access keys.
>
> **[1:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=71)** The connection string of a storage account actually consists of two parts.
>
> **[1:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=75)** The storage account name, which is part of the fully-qualified domain name of the storage account and a primary or a secondary account key.
>
> **[1:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=84)** Let's see how we can connect to this storage account using Storage Explorer.
>
> **[1:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=88)** To do that, let me copy over the primary account key and navigate to Storage Explorer.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=94)** Let's add the storage account.
>
> **[1:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=97)** I'm going to select the storage account name and key.
>
> **[1:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=102)** Copy over the account key and the account name.
>
> **[1:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=110)** This is all that's needed for me to connect to this Azure storage account.
>
> **[1:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=114)** Once I hit connect, I'm able to navigate into this locally attached storage account.
>
> **[2:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=120)** And we'll see that we have the installation manuals container available for us as well.
>
> **[2:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=126)** Notice that there was no other authentication.
>
> **[2:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=128)** The only thing that I needed to have is the master key or the account key of the storage account.
>
> **[2:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=133)** And this master key actually gives me full access to perform any operations in here.
>
> **[2:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=139)** There's no authorization whatsoever.
>
> **[2:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=141)** We can, for example, go ahead and just delete the existing PDF files in here.
>
> **[2:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=147)** And no one will be non the wiser.
>
> **[2:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=150)** As I have full access, I can perform also access control-related settings.
>
> **[2:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=155)** I can go ahead and set the public access level of this container.
>
> **[2:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=160)** I can select public access for containers and the actual resources blobs inside the containers or just the individual blobs and hit Apply.
>
> **[2:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=169)** As I did not authenticate with my own account, but rather with the account key and account name of the storage account, there's no way of proving who actually made these changes.
>
> **[3:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=180)** There is a way to see who actually have been accessing these account keys.
>
> **[3:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=185)** To do that, let's navigate inside the same storage account into activity log.
>
> **[3:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=190)** Under the activity log, we have a list of Azure operations that have been performed within this scope.
>
> **[3:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=196)** And we'll see that an operation called List Storage Account Keys was actually performed by myself just seconds ago.
>
> **[3:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=205)** So as we've seen, the storage account key is really similar to the root password of your whole storage account.
>
> **[3:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=211)** We should be really careful when protecting this key and preferably not even use it at all.
>
> **[3:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=217)** We should avoid sharing this key with other users because this is the same key for all users of this storage account.
>
> **[3:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=224)** We shouldn't hard code it in any code and we shouldn't definitely store it in version control.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (2), delete (1)
> **Env Vars:** sql (1), pdf (1)
> **UI Navigation:** navigate to (1), select the (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### Shared Access Signatures in Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=0)** - [Instructor] Instead of using this one account key to rule them all, let's talk about Shared Access Signatures or SAS tokens that we can use in Azure.
>
> **[0:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=9)** Shared Access Signatures control the access to Azure Storage in a much more granular way.
>
> **[0:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=15)** For example, we can limit which sort of operations can you perform, is it only read only access?
>
> **[0:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=21)** Can you also write?
>
> **[0:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=22)** And we can even grant you access on a smaller level than just the account, for example, a Container, or even a particular Blob, or a Binary File.
>
> **[0:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=32)** And SAS tokens are the primary way for us to authenticate access to Azure Storage, when we cannot really trust the client where code is running.
>
> **[0:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=42)** For example, any web application that will be used to connect to Azure Storage is always untrusted, and shouldn't use the Master Keys, or the Account Keys, but should rather use the shared access signatures.
>
> **[0:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=55)** So how can Kinetico share those servicing manuals securely to the end-users?
>
> **[1:01](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=61)** They really cannot use the Storage Account Master Keys because that will also let the users, delete the data as well.
>
> **[1:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=68)** So we start where we left off in the Storage Explorer, where there are no longer any manuals available as we deleted them using those account keys earlier.
>
> **[1:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=77)** Let's upload a couple of new manuals to the Container.
>
> **[1:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=81)** Again, I'll just drag and drop from my File Explorer to the Storage Explorer, and wait for the transfer to be complete.
>
> **[1:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=89)** As I have just uploaded the files using my Storage Account Master Key, if I would go ahead and open this file in a browser by copying the URL of the Wind Tunnel User Manual, Azure actually does not let me access this file as this is set to private only.
>
> **[1:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=110)** As I've logged in with the Account Key, I can actually go ahead and change this.
>
> **[1:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=114)** To do that, I'll just right click on the Container, and set the Public Access Level on this particular Blob to read only, and hit apply.
>
> **[2:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=124)** After the change has been successfully saved, I can go ahead and refresh the page of my link.
>
> **[2:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=132)** As you see, now I'm actually able to download the information from the manual.
>
> **[2:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=138)** But with SAS tokens, we can actually control access in a much more granular way.
>
> **[2:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=143)** Being a select that access is controlled in the whole Storage Account, or Container, or even just on the Blob level.
>
> **[2:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=149)** And we can define which sort of actions are actually allowed.
>
> **[2:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=153)** We can say that these a list action, for example, users can list all files in the Container, or these is only available for read, or write, or delete, for a particular Blob only.
>
> **[2:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=165)** And what's more we can even have IP address control, to adjust these SAS tokens to be used, only by the users who we intend to.
>
> **[2:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=175)** Before we implement the SAS tokens, let me revert back to the private only mode of the public access level of this Container.
>
> **[3:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=182)** I'll just right click on the Container name, set Public Access Level, and no public access, and apply.
>
> **[3:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=190)** Now when we copy the URL of the user manual, and navigate to it in our browser, we shouldn't be able to access it.
>
> **[3:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=199)** Just we'll see, we are back in the private only mode.
>
> **[3:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=203)** And back in the Storage Explorer, let's implement SAS tokens.
>
> **[3:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=206)** To do that, for just this particular user manual, I'm going to hover over and right-click, select get Shared Access Signature, and configure this.
>
> **[3:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=217)** I could use something called Access Policies, to create templates for creating these shared Access Signatures, but just for creating this one Shared Access Signature, or SAS token, I'm just going to configure it here manually.
>
> **[3:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=230)** As SAS tokens are meant for more granular access control, they even have a time to leave that we need to set, when the access actually starts, and when it ends.
>
> **[4:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=240)** The default time to leave is 24 hours, so I'm going to leave that as it is.
>
> **[4:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=245)** Next, I need to select which sort of permissions are added for this Shared Access Signature.
>
> **[4:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=250)** My users need to be able to read the file, but they actually don't need to be able to list all of the files in the Container, so I'm going to uncheck that box.
>
> **[4:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=260)** Once I'm satisfied with the permissions and the time, I can go ahead and click create.
>
> **[4:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=266)** The actual SAS token is just an additional string that we'll attach to the URL of the file.
>
> **[4:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=272)** So I'm just going to copy this, and add it here in my browser, and as you'll see, now we are able to access this file, even though the public access level is set to private.
>
> **[4:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=285)** In the Azure portal, and in the APIs, we actually have even more possibilities to configure the SAS tokens.
>
> **[4:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=292)** So let's have a look at those.
>
> **[4:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=294)** I'm going to navigate in my storage account into settings, Shared Access Signature, in this page of the Azure Portal, we have a list of familiar permissions.
>
> **[5:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=305)** We have the time to leave, start and end time of the SAS token, and here we can specify which IP addresses are on the allowed list, who are able to actually use this access key.
>
> **[5:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=316)** And very specifically, we can even choose which Storage Account Key we're actually using to create this SAS token.
>
> **[5:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=324)** As the SAS tokens are created using the Access Keys of the Storage Account, whenever we need to regenerate the keys of the Storage Account, the SAS tokens also get refurbished.
>
> **[5:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=337)** So if I navigate into my Access Keys, and click on regenerate, we'll see a warning that if you really want to do this, we'll actually invalidate all users and all access who are using the Azure Storage Account using the Account Key.
>
> **[5:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=352)** So I want to do this, so I click yes.
>
> **[5:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=354)** Now that I have successfully regenerated the key, we can go ahead and try to fetch the file again from the Azure Blob Storage.
>
> **[6:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=362)** Now when I refresh the page, we actually get another type of error saying that, "Our authorization header is formed incorrectly," because the signature is no longer valid.
>
> **[6:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=371)** It's no longer valid, because the SAS token was created using the Account Key, or the Master Key of the storage Account.
>
> **[6:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=379)** Similarly, as we have connected to Azure Storage Explorer using the Account Key, we can no longer perform any operations.
>
> **[6:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=386)** For example, I cannot go and delete this file.
>
> **[6:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=391)** In addition to Azure Storage, SAS tokens are available for us for authorization and access control in Azure Service Bus as well.
>
> **[6:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=399)** Because Service Bus shares the authorization model with these other services, we can actually use SAS tokens with Service Bus queues, topics, Relay and even Event Hub and IoT Hub as well.
>
> **[6:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=411)** Using SAS tokens to authorize your users, downloading files from Blob Storage, is actually a best practice.
>
> **[6:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=418)** You can read more about this Valet Key Pattern, actually in the Azure Architecture Center.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (5), private (4), delete (3), this, (3)
> **Env Vars:** sas (18), url (3)
> **UI Navigation:** click on (3), drag and drop (1), navigate to (1), right-click (1)
> **Analogies:** for example (5)
> **Prerequisites:** configure (3)
> **Tools:** azure portal (2)
> **Exercise Files:** download the (1)
> **Best Practices:** best practice (1)

#### Azure Key Vault service
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=0)** - [Instructor] As we are dealing with various connection strings in Azure, we need a place to store all of these secrets.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=6)** And that's where Azure Key Vault comes in.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=8)** Azure Key Vault is a place where we can store encryption keys, secrets, and certificates in a centralized and secure manner.
>
> **[0:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=16)** Mugshots make sure to store these secrets in a compliant way.
>
> **[0:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=19)** We can even bring in our own keys that Microsoft will use to store these secrets in hardware security modules.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=26)** And one of the key features of Azure Key Vault is auditing.
>
> **[0:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=30)** We get a centralized view of who has access to our keys.
>
> **[0:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=33)** We also get versioning, when changes are needed to access tokens or account keys of storage accounts or any other secrets, we can build on the existing Azure key, well secret key or certificate.
>
> **[0:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=44)** And we even get this audit trail record of what was changed and by whom.
>
> **[0:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=49)** We get key management operations such as editing, inputting new, and for certificates, even automatic renewables, if we are using specific certificate authorities.
>
> **[1:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=60)** And finally it will be insecure if you won't have access control.
>
> **[1:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=64)** Azure Key Vault has its own method of granting access to users.
>
> **[1:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=68)** Access to the Key Vault data pane, so secrets, encryption keys and certificates is managed by something called access policies.
>
> **[1:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=76)** And these access policies apply to the entire Key Vault resource, not to individual keys, secrets or certificates.
>
> **[1:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=83)** So the target of this access policy assignment is always the whole account or the Key Vault itself.
>
> **[1:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=90)** We don't get containers just like we did in storage accounts, or we don't get various scopes like we did with role based access control assignments.
>
> **[1:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=99)** And very interesting thing to note here is that even though we have previously seen the role-based access control owner role being the one who was able to access this data pane on granting access to others, with Key Volt specifically, anyone who has access to Key Vault resource as a contributor, actually have access to grant themselves this data pane access as well, because they can manage these access policies.
>
> **[2:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=123)** The reason for that is that Key Vault access policies are not actually defined in the mugshots dot authorization resource provider, but actually as operations or actions inside the Key Vault resource provider itself.
>
> **[2:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=136)** As we have access to all operationals within the Key Vault as contributor, that's why we also have the right access to the access control of the Key Vault.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** make (1)
> **Code Keywords:** new, (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Adding secrets to an Azure Key Vault
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=0)** - [Instructor] To secure the access between the solar panel companion app, web application and the storage account of the installation app, Kineteco is going to use Azure key vault.
>
> **[0:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=10)** And as Cecilia is the project manager of the whole Azure business of Kineteco, she's the one who is able to set up the Azure key vault.
>
> **[0:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=19)** I've logged in here, as Cecilia and I've navigated to a pre-created key vault that's empty and ready for us to be configured.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=26)** As you'll see, the key vault actually has a publicly available, fully qualified domain name, kinetecosolarAzurekeyvault.vault.[azure.net](https://azure.net) This means that the key vault needs to be globally uniquely named.
>
> **[0:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=40)** The key vault is also tied to the Azure ID of the Kineteco, which means that we can use access policies to point to users in the Azure ID of Kineteco.
>
> **[0:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=51)** Azure Key vault is a service that stores different types of secrets.
>
> **[0:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=56)** The first one we are going to look at cryptographic keys.
>
> **[1:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=60)** They look like, just like you would expect so you can generate or import any sort of cryptographic keys to the key vault and store them securely.
>
> **[1:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=69)** Next up, we have certificates.
>
> **[1:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=72)** We can generate and import TLS or SSL certificates.
>
> **[1:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=77)** And for our web applications, we can even configure our Key vault to be automatically renewing the certificates from a trusted certification authority.
>
> **[1:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=86)** Currently Azure supports these two certificates authority providers.
>
> **[1:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=92)** And finally, we have secrets.
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=95)** Now secrets can be anything.
>
> **[1:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=97)** In Kineteco's case, secrets will be connection strings to the storage account that we can use for the solar panel application to connect to the storage account.
>
> **[1:48](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=108)** To add a key, I'm going to click on generate an import.
>
> **[1:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=112)** I'm going to manually upload a key.
>
> **[1:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=114)** The name will be storage account key.
>
> **[1:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=118)** And for the value, I'm going to navigate to the storage account.
>
> **[2:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=122)** Now, as Cecilia is actually a contributor for this storage account, she's actually able to create these SAS tokens as well.
>
> **[2:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=130)** Let's configure this SAS token.
>
> **[2:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=132)** The solar panel application only needs to read for us from the storage account.
>
> **[2:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=136)** So we will only need that permission.
>
> **[2:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=143)** And for the time to leave, let's select something that's far away, in this case one year and let's generate the key.
>
> **[2:30](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=150)** Now this is the connection string that the developers of the solar panel application would use to connect to the Azure storage account.
>
> **[2:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=158)** Let's copy this and store this in the key vault as a secret.
>
> **[2:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=164)** If I would have a process of rotating the keys, I'll go set up all of the keys that I will have in the future here as well, and define them as activated in the certain time.
>
> **[2:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=172)** In this case, I'm just going to add this key manually at once.
>
> **[2:57](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=177)** So I'm just going to click on create.
>
> **[3:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=180)** Now that the secret has been successfully created, we can go ahead and navigate to the secret and we'll see that we always have versioning on, even though we only have this one version currently available, We can just go ahead and click on open it.
>
> **[3:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=193)** We see the URL that the solar panel application we need to call in order to fetch the connection string of the storage account.
>
> **[3:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=201)** If you navigate down below, we can click on show secret value in order to copy or view the secret.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), finally, (1), import. (1)
> **Env Vars:** sas (2), tls (1), ssl (1), url (1)
> **UI Navigation:** click on (4), navigate to (1)
> **Prerequisites:** set up (2), configure (2)
> **Definitions:** means that (2), is a  (1)
> **Code Identifiers:** kinetecosolarazurekeyvault (1)
> **URLs:** [azure.net](https://azure.net) (1)
> **Analogies:** just like (1)

#### Azure Key Vault Access Policies
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=0)** - [Instructor] In order for Brian to get access to the Secrets he needs to have access policy set up in the Key Vault.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=6)** And let's have look at the role based access control assignments to verify what are the current assignments.
>
> **[0:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=12)** As we discussed, Cecilia is a Contributor for the subscription and Brian is actually a Reader for the whole subscription.
>
> **[0:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=20)** So Brian is able to read the management pane of this Azure environment, but not the data pane, so the actual content of the Secrets, If he navigates to the Secrets page, he gets an error message showing that his access is unauthorized.
>
> **[0:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=34)** Back in Cecelia's environment, she can go ahead to the Access policies page and add an access policy.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=41)** We have several predefined templates, sort of like roles for role based access control that we could choose.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=47)** In our case, we are not satisfied with any of these.
>
> **[0:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=50)** So let's manually add access policies for Brian.
>
> **[0:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=54)** Brian only needs to be able to list and read Secrets.
>
> **[0:57](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=57)** So let's just pick those.
>
> **[1:02](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=62)** And let's select Brian from the list of Azure AD principles and click Select.
>
> **[1:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=70)** Finally, we'll click on Add, and we need to remember to click Save, and these are now updated.
>
> **[1:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=79)** And as we see, Brian's access has now been activated.
>
> **[1:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=83)** Back in Brian's view, we are now able to see that storageaccountkey Secret, navigate to it, and show the Secret value.
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=93)** It's important to note that Cecilia does not need to have Owner privileges for this Key Vault as Contributor access is enough for changing these access policies.
>
> **[1:44](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=104)** And there are even some more additional functionalities that we need to configure before we can go ahead and start using the Key Vault.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), finally, (1)
> **UI Navigation:** click on (1), navigate to (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Audit logs
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=0)** - [Instructor] Auditing is one of the key features of Azure Key Vault but it's not turned on by default as there are some costs involved.
>
> **[0:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=7)** Auditing functionality is actually hidden away underneath this monitoring and diagnostic settings.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=13)** To enable audit logging, we navigate to add diagnostic settings.
>
> **[0:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=18)** Give the audit log a name.
>
> **[0:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=21)** And select a location for our logs.
>
> **[0:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=23)** In this case, a storage account.
>
> **[0:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=28)** Next, we need to enable the audit logs and define the retention policy.
>
> **[0:32](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=32)** In KinetEco's case, they have a requirement to store audit logs for a full year.
>
> **[0:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=37)** Once we're satisfied with everything, we can go ahead and click save.
>
> **[0:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=42)** Now we have configured audit logging and access policies for users accessing the Key Vault.
>
> **[0:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=47)** However, our web application is not yet able to connect to the Key Vault.
>
> **[0:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=51)** Let's see how to do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### Managed Identity for Azure Resources
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=0)** - [Instructor] Now that our secrets are securely stored in Azure Key Vault, let's make sure that our applications are able to access the key vault as well, and we are going to do that using something called managed identities for Azure resources.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=13)** Managed identities are an alternative to using secrets or connections strings in our code.
>
> **[0:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=19)** Behind the scenes when we create a managed identity, we automatically get created an Azure AD identity or an object, for our application's Azure resources.
>
> **[0:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=29)** For example, our Azure app service could have its own Azure AD identity.
>
> **[0:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=34)** Because Azure managed identities are actually represented in Azure AD, we can use those as a target or an object in role-based access control or access policy assignments.
>
> **[0:46](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=46)** Granting role-based access control to an application makes sense when the application itself needs to modify existing resources on Azure, it makes sense for example, in the case of AKS or Azure Kubernetes Service, when we actually need to give the AKS cluster itself contributor access in a resource group.
>
> **[1:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=65)** That way the AKS cluster is able to create and modify virtual machines and virtual networks as the cluster is being scaled up and down.
>
> **[1:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=75)** I'm back in the Azure portal and I have logged in using Brian's credentials.
>
> **[1:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=80)** Brian has contributor access to the app service.
>
> **[1:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=83)** To create a managed identity, I need to navigate to settings and identity.
>
> **[1:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=89)** There are two options: I could assign an already manually created managed identity, or I could let Azure create a managed identity for me.
>
> **[1:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=97)** That is called system assigned managed identity and that's what we are going to use now.
>
> **[1:42](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=102)** To turn this on, I'm just going to click On and click Save.
>
> **[1:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=107)** As the warning notes, this actually is creating the Azure AD identity behind the scenes, we are okay with that.
>
> **[1:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=115)** Once the managed identity has been created successfully, we'll see that this is the object ID just like for users applications and even user groups in Azure AD.
>
> **[2:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=127)** Now these object ID is something that we can use as a target of our role-based access control, or for example, granting access in the Azure Key Vault in the access policy.
>
> **[2:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=136)** Let's add an access policy using Cecilia's account again.
>
> **[2:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=140)** To do that, I'll navigate to settings, access policies, add an access policy, and select the appropriate permissions.
>
> **[2:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=147)** In this case, as we did with Brian, the application needs access to get and list secrets in the key vault.
>
> **[2:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=155)** Next we will select the principal in Azure AD that gets access.
>
> **[2:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=159)** Previously we selected Brian here as a target.
>
> **[2:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=161)** Brian is a user which is also represented as a principal in the Azure AD, but in this case, let's use the managed identity that represents the identity of our web application, Kinetecosolar-UI.
>
> **[2:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=174)** (keyboard clacking) Here it is, I'll click on it and hit Select, and then we can go ahead and click Add.
>
> **[3:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=183)** Just one more time let's click on Save and the preferences have been saved.
>
> **[3:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=188)** Now we have successfully added a new managed identity for our web application, and we also configure the access policies of the key vault so that the managed identity is actually able to read and list secrets in that key vault.
>
> **[3:22](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=202)** But how can we read that secret within our app service?
>
> **[3:25](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=205)** To do that, let's navigate under secrets and open up that secrets in current version, and let's copy the secret identifier in here.
>
> **[3:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=214)** Now let's configure the Azure app service so that we are able to read the secret.
>
> **[3:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=220)** To configure Azure app service to access the key vault secret, let's go into Azure app services configuration and add a new application setting.
>
> **[3:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=230)** I'll give my app setting a name.
>
> **[3:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=231)** (keyboard clacking) And as a value, let's start this with the @MicrosoftKeyVault, (keyboard clacking) and the secret URI is the one that we've just copied over.
>
> **[4:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=246)** Once we click Okay, we can go ahead and verify it and hit Save and there we have it.
>
> **[4:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=252)** Now we are able to retrieve this value from the key vault at runtime of our application.
>
> **[4:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=257)** Now that we have created a managed identity for our application's fib app, we can actually assign it directly a role-based access control data pane access already within the storage account.
>
> **[4:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=268)** So to do that, let's navigate into access control and click on Add and add a role assignment.
>
> **[4:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=274)** As a role, let's search for a blob data reader, and as a target or the object of the role-based access control assignment, let's search for Kineteco.
>
> **[4:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=285)** And there we go, Kinetecosolar-UI web application managed identity.
>
> **[4:50](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=290)** Let's click Save.
>
> **[4:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=292)** Open role assignments, and voila, here we have it, storage blob data reader role assigned to the Kinetecosolar-UI app service.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case, (2)
> **UI Navigation:** click on (4), navigate to (2), select the (2)
> **Env Vars:** aks (3), uri (1)
> **Analogies:** for example (3), just like (1)
> **Prerequisites:** configure (3)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)

#### Challenge: Design data access controls
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=0)** - [Narrator] Now it's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=8)** You will finish the design of the access control of the solar panel companion application.
>
> **[0:13](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=13)** As you will recall, the solar panel owners are not actually authenticated against the web app.
>
> **[0:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=18)** Rather, they are just inputting their serial number of their registered solar panels.
>
> **[0:24](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=24)** If their solar panel serial number is found in the database, then they are authorized to download the servicing manuals from the storage account of the installation app.
>
> **[0:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=34)** Here's a recommendation.
>
> **[0:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=35)** Have a look what Azure Key Vault could do for you in this case.
>
> **[0:39](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=39)** Because you are only choosing the access control technologies, this shouldn't take you more than a few minutes.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Design data access controls
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=0)** - [Instructor] This is how I will solve the solar panel applications access control issues.
>
> **[0:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=10)** First of all, as mentioned, the solar panel owners actually don't log in at all, so there is no authentication.
>
> **[0:16](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=16)** They just input in a free form field, a serial number of the database.
>
> **[0:21](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=21)** Secondly, our solar panel web app fetches the SQL connection string from the key vault and uses that connection string to check whether or not this serial number is already in the list of registered devices.
>
> **[0:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=33)** If that is the case, we are able to use Azure data pane role-based access control assignments to fetch the data from storage account and display that to the solar panel owners.
>
> **[0:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=43)** Another way of controlling the access between the web app and the SQL database, would be to use something called, Azure AD authentication for SQL.
>
> **[0:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=52)** This is a feature of Azure SQL, where we could use instead of real SQL users, Azure AD users, and in this case, for example, the manage identity of our whole web application.
>
> **[1:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=63)** You can read more about Azure ID authentication for Azure SQL at the following document.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6)
> **Code Keywords:** case, (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Developing solutions for Azure and beyond
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=0)** - [Instructor] You might have been watching this course in the preparation of the Azure Developer Exam AZ-203.
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=6)** If you have, here are a couple of pointers for you.
>
> **[0:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=9)** First of all, all information related to the exam is available at the Microsoft Learn website.
>
> **[0:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=15)** At the same website, you can go ahead and finally schedule your exam and view more details about what sort of skills are measured and what are the (indistinct) averages across them.
>
> **[0:26](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=26)** There are several types of questions that you might face during the exam.
>
> **[0:29](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=29)** Most of them are multiple choice questions.
>
> **[0:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=31)** Where you need to choose the best answer out of possible many wrong ones or possible many right ones.
>
> **[0:38](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=38)** Some of them are case studies.
>
> **[0:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=41)** When you're actually presented several questions related to the same case.
>
> **[0:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=45)** In these questions, you have several tabs open related to the background of the application, related to the business requirements and even technical requirements.
>
> **[0:54](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=54)** It's a good idea to have a look at all of the questions related to the same case first, and then go ahead and read the relevant information about the background of the case.
>
> **[1:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=63)** Sometimes there's way too much information.
>
> **[1:05](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=65)** So it's good idea to know what you're being asked upon before reading all of them through.
>
> **[1:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=71)** And you might end up having to answer to the same question over and over again.
>
> **[1:15](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=75)** So goes sudden death or repeated answer questions actually presents you one question at a time.
>
> **[1:20](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=80)** You cannot go back and review your answers and you are being asked maybe three or four times related to the same topic.
>
> **[1:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=88)** Lastly, with Azure course, we also have laps.
>
> **[1:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=91)** Laps are longer questions where you are free to use any tool that you want as your cultural or Azure portal to deploy Azure services as per the question requirements.
>
> **[1:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=101)** You're charts based on the end result, not how did you achieve that?
>
> **[1:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=105)** If you want to learn more about Azure Security, you can visit the Security Center of your Azure environment.
>
> **[1:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=111)** You can find the Security Center behind the full menu of the Azure portal.
>
> **[1:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=116)** Azure Security Center is not a resource.
>
> **[1:58](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=118)** It's not something that you provision on your own.
>
> **[2:01](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=121)** Security Center is always available for you as a service.
>
> **[2:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=124)** The content and the relevant recommendations vary based on what sort of role based access control access you have to the Azure environment.
>
> **[2:12](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=132)** In my case, I'm getting shown recommendations related to this particular subscription only.
>
> **[2:17](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=137)** Security Center gathers all security related recommendations in one place on Azure.
>
> **[2:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=143)** For example, we have recommendations related to app services in here.
>
> **[2:27](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=147)** So let's have a look.
>
> **[2:28](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=148)** This particular recommendation is about closing HTTP access in our web apps.
>
> **[2:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=153)** And that's actually something that Azure is able to fix for us automatically.
>
> **[2:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=157)** So quick fix is available.
>
> **[2:40](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=160)** To enable the quick fix and disable HTTP connection.
>
> **[2:43](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=163)** I'm going to have to select the web app and click remediate.
>
> **[2:47](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=167)** At this port Azure Security Center tells me what really changed.
>
> **[2:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=171)** Of course, I need to review these changes that are affected.
>
> **[2:55](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=175)** As I'm okay with this.
>
> **[2:56](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=176)** I don't have any HTTP connections that I myself using.
>
> **[3:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=180)** I can go ahead and click remediate.
>
> **[3:04](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=184)** To summarize, Security Center alerted me that my app service was configured in an unsecured way.
>
> **[3:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=190)** It was accessible over HTTP and HTTPS.
>
> **[3:14](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=194)** I was able to identify which app service was infected by this.
>
> **[3:18](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=198)** I was able to block HTTP access with just a couple of clicks.
>
> **[3:23](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=203)** Beyond such recommendations and fixes, Security Center can also send us alerts real-time when something malicious happens.
>
> **[3:31](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=211)** For example, for Azure Storage accounts, we will get alerts when something malicious is happening in our environment.
>
> **[3:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=217)** For example, our application access patterns have changed, somebody downloading an unusual amount of data or deleting an unusual amount of data, or when my application is being accessed from an unusual location.
>
> **[3:51](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=231)** Thank you for joining me.
>
> **[3:52](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=232)** I hope you are now more confident in securing your Azure environments.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), this. (2), case, (1), let (1)
> **Env Vars:** http (5), https (1)
> **Analogies:** for example (3)
> **CLI Commands:** az (1), find (1)
> **Tools:** azure portal (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Karl Ots]]

## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Azure Data Lake for Developers]] | **4 of 7** | [[Developing Chatbots with Azure]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)