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
  - '[Advancing Your Azure Developer Skills- Exploring Complex Application Development](../../Paths/Cloud%20Computing/Learning%20Paths/Advancing%20Your%20Azure%20Developer%20Skills-%20Exploring%20Complex%20Application%20Development.md)'
prev_courses:
  - '[Azure Data Lake for Developers](Azure%20Data%20Lake%20for%20Developers.md)'
next_courses:
  - '[Developing Chatbots with Azure](Developing%20Chatbots%20with%20Azure.md)'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":4,"total":7,"prev":"Azure Data Lake for Developers","next":"Developing Chatbots with Azure"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-05-03
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
  - [Why security matters for developers](#why-security-matters-for-developers)
  - [What you should know](#what-you-should-know)
- [**1. Control access to Azure**](#1-control-access-to-azure) (10 videos)
  - [Azure Role Based Access Control (RBAC)](#azure-role-based-access-control-rbac)
  - [Grant role based access to a user](#grant-role-based-access-to-a-user)
  - [Azure RBAC roles for development](#azure-rbac-roles-for-development)
  - [The contributor role](#the-contributor-role)
  - [The User Access Administrator and Owner roles](#the-user-access-administrator-and-owner-roles)
  - [Custom Azure RBAC roles](#custom-azure-rbac-roles)
  - [Create custom Azure RBAC roles](#create-custom-azure-rbac-roles)
  - [Management pane vs data pane RBAC roles](#management-pane-vs-data-pane-rbac-roles)
  - [Challenge: Design Azure access control](#challenge-design-azure-access-control)
  - [Solution: Design Azure access control design](#solution-design-azure-access-control-design)
- [**2. Control user access to your apps**](#2-control-user-access-to-your-apps) (6 videos)
  - [Register an application to Azure AD](#register-an-application-to-azure-ad)
  - [Web application sign in with Azure AD](#web-application-sign-in-with-azure-ad)
  - [Securing web application authentication with Azure AD Conditional Access](#securing-web-application-authentication-with-azure-ad-conditional-access)
  - [The Microsoft Authentication Library](#the-microsoft-authentication-library)
  - [Challenge: Internal web app with Azure AD](#challenge-internal-web-app-with-azure-ad)
  - [Solution: Internal web application with Azure AD](#solution-internal-web-application-with-azure-ad)
- [**3. Control app access to your data**](#3-control-app-access-to-your-data) (9 videos)
  - [Manage Azure application secrets](#manage-azure-application-secrets)
  - [Shared Access Signatures in Azure](#shared-access-signatures-in-azure)
  - [Azure Key Vault service](#azure-key-vault-service)
  - [Adding secrets to an Azure Key Vault](#adding-secrets-to-an-azure-key-vault)
  - [Azure Key Vault Access Policies](#azure-key-vault-access-policies)
  - [Audit logs](#audit-logs)
  - [Managed Identity for Azure Resources](#managed-identity-for-azure-resources)
  - [Challenge: Design data access controls](#challenge-design-data-access-controls)
  - [Solution: Design data access controls](#solution-design-data-access-controls)
- [**Conclusion**](#conclusion) (1 videos)
  - [Developing solutions for Azure and beyond](#developing-solutions-for-azure-and-beyond)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why security matters for developers](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/why-security-matters-for-developers-14526626?u=76281980&t=0)** - [Karl] With [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Services, the time to market for [Application Development](../../Skills/Software%20Development/Application%20Development.md) is faster than ever before. At the same time, any security issues we might face will have a wider impact than ever before. It's a bad day when you discover that the security credentials of your application have leaked. Azure offers a rich set of tools to keep your app secure and protect your credentials. The tools take care of all of the heavy lifting, but they can only do that if you understand how they work. Hi, I'm Karl Ots, an Azure MVP, CISSP, and a patented inventor. I invite you to join me for my course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. There we will explore the baseline Azure security controls and discuss Azure [Application Security](../../Skills/Cybersecurity/Application%20Security.md) best practices. You can start incorporating these controls today with your existing projects. However, when you design your systems from the beginning with these features in mind, you can easily design, implement, and monitor the security of your apps throughout their development lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1)
> **Env Vars:** mvp (1), cissp (1)
> **Speakers:** - [karl] (1)

#### [What you should know](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/what-you-should-know-14526629?u=76281980&t=0)** - [Instructor] For this course, I'm assuming that you're already familiar with [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Portal and the basic services available in Azure. We'll be using a few different Azure resources in this course, but the focus of this course is security. If you find that you have any questions about apps services, storage, or [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), I'd encourage you to take a look at one of our other Azure courses. It's also important to note that the tools we are discussing aren't limited to the services we'll be using in our examples. They can be used across other Azure services as well. For this course, we will be working in a natural environment of KinetEco, Inc. KinetEco creates alternative energy [products](../../Skills/Software%20Development/Microsoft%20Products.md) and systems worldwide. It serves both industrial and consumer customers. As you're following along, you won't have access to the same environment. If you'd like to follow along, you can apply the same steps to your own environment, or you can run the provided script to create the KinetEco resources that I'll be working with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Control access to Azure

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure Role Based Access Control (RBAC)](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=0)** - [Instructor] The default way of granting access to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) resources is called Role-based Access Control. Role-based Access Control or RBAC handles authorization across all services in Azure, be it [Databases](../../Skills/Software%20Development/Databases.md), app services, or even [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). And keep in mind that while Role-based Access Control handles authorization, [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) actually takes care of the authentication of our users and applications. Before we go any deeper with Role-based Access Control, let's talk about Azure Resource Manager Terminology. At the highest level of hierarchy, we have the Azure AD directory, which is sometimes called a tenant. Next, we have the subscription. Now, a subscription is a collection of all things below resource groups, resource providers, and resources, and in the end subscription is the highest level of Role-based Access Control assignments and actually the link to our account to the billing. Your subscription might be tied to your credit card or your subscription might come from your enterprise agreement so you don't have to take care of the bill at all. Under subscriptions, we have resource groups and resource groups are like folders in a file system so they collect these underlying resources together. Before we can create resources to resource groups, we need to enable a resource providers in Azure resource manager. A resource provider is an API or a representation of a particular Azure service. For example, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).compute gives us services related to Microsoft virtual machines.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=94)** Another example will be Microsoft database resource provider that gives us all actions and operations related to Azure App Services. And finally, we have resources. A resource is an instance of an Azure service such as a particular web application or a particular database. In KinetEco's case, their [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) is called kinetecoinc.[onmicrosoft.com](https://onmicrosoft.com). This Azure ID is actually linked to their on premises [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) so that all of the users and groups are actually synchronized from on premises to Azure ID. This means that their users can actually use their existing credentials, username and password, to log into Azure. As this is KinetEco's first Azure subscription, it's called KinetEco business applications. Underneath the subscription, KinetEco has two resource groups, one for installation app, and one for solar panel. The installation application actually has resources from several resource providers, Azure App Service, [SQL](../../Skills/Data%20Science/SQL.md) database, and storage accounts. The KinetEco remote solar panel app actually only has one resource, Azure App Service. A Role-based Access Control Assignment in Azure consists of three parts. The first part is scope, that is, subscription, resource group, or resource. Next we have a target of the Role-based Access Control Assignment or an object. These are reference to an identity in Azure AD, these can be a user, a group, or even an application, and next we have a role. A Role-based Access Control role is a collection
>
> **[3:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-role-based-access-control-rbac-14525625?u=76281980&t=187)** of resource provider actions. These can be pretty rogue such as Microsoft.Compute/virtualMachines/* giving us access to any action within the Microsoft Compute virtual machines namespace of the resource provider, always can be very specific, such as Microsoft.Compute/virtualMachines/start/action. A Role-based Access Controls role controls whether or not these particular actions are allowed or not allowed by the particular role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (14), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (6), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (3), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is called (2), is a  (2), is an  (2), means that (1)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** rbac (1), api (1), sql (1)
> **Code Identifiers:** virtualmachines (2)
> **URLs:** [onmicrosoft.com](https://onmicrosoft.com) (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Grant role based access to a user](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=0)** - [Man] And let's have a look at role-based access control assignments in real life. I'm the consultant. I've been tasked to introduce a new developer into Kineteco's [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) environment. And as you'll see, I've actually logged in with my own [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) credentials. But Kineteco has granted me access in their own environment. The first thing I need to do is to navigate to the scope of my Azure role-based control assignments. And to do that, I'm going to open up my list of subscriptions. We'll see the KinetEco business applications subscription. Underneath that, under this blade of settings, we'll see resource groups. And underneath here, we have Kineteco installation app dev, West US, resource group. In the left blade, I'm going to select access control. Next, I'm going to select add and add a role assignment. Notice we have already set up our scope of the role-based access control assignment as this resource group. Let's next, select the appropriate role. And there are a ton of built in roles available, but because Brian is a developer, we are going to give them the contributor role. Brian actually has already a user in Kineteco's [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) so we will leave this as it is. And let's search for Brian's user here on the selection box. This looks like Brian. So I'm going to click on it and hit save. And after a while, the assignment has been successfully completed. How can we verify this?
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/grant-role-based-access-to-a-user-14529522?u=76281980&t=93)** We can navigate to the role assignments pane. And we'll see we have two existing role assignments. First of all mine, and secondly, Brian's role-based access control assignment is, different than mine, because Brian has a different role, but also Brian's scope is actually, if you hover over here, we'll see that the scope is the particular subscription slash resource groups, the name of the resource group. And there you have it. A role-based access control assignment is consisting of a scope, a role and a user or object in Azure active directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **UI Navigation:** select the (1), click on (1), navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [man] (1)

#### [Azure RBAC roles for development](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=0)** - [Instructor] When setting up development resources, we need to provide access to our developers with the principle of least privilege in mind. It all comes down to the design of which roles do we assign to which developers in which scopes, and we really need to understand the roles in more detail to make this decision. The first role I'm going to talk about is the owner role. The owner is the default role that you will have when you create a new subscription yourself. Owner has access to create and modify any resources within the scope that it's assigned to. If you are getting assigned an owner role in the subscription scope, you then create and delete any resource groups under that subscription, but owner also has access to modify access control. So, owner can invite new people in, assign people different roles, and delete existing RBAC assignments. Next, we have the contributor, and the contributor shall be the default role for an active developer or an administrator in any [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) project. Contributor is the role that lets you create, read, and delete any resources within the scope that it's assigned to, which means that we can modify anything. We can create new resources. We can delete existing resources, but contributor does not get to assign people access. And lastly, we have the reader. Reader is a role that has access to view any sort of configuration related to the management plane of Azure. Meaning a reader access in a subscription scope gives you access to view any resources and resource group within the subscription.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-rbac-roles-for-development-14528562?u=76281980&t=94)** Reader even has access to view the configuration, or scaling settings of a particular resource, but reader does not have access to your secrets. As reader does not have access to data plane of Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** rbac (1)
> **Speakers:** - [instructor] (1)

#### [The contributor role](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=0)** - So now that Brian has access to Kineteco installation app development resource group, let's see what they are able to do. And to do that, let's navigate to resource groups, and we'll see that we only have one resource group visible, kineteco-installation-app-dev. Let's click on that to open it. And now that Brian is a contributor in this resource group, they are able to add new resources, they are able to delete existing resources and they are able to change the tags assigned to this resource group. However, if they go to access control and try to add role assignments, they'll see that add role assignment functionality is disabled because they don't have access to the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).authorization resource provider. But Brian has only this particular resource group visible to them. And for development purposes, they actually need to see additional resource groups as well. And to do that, we need someone who has access to the whole subscription as an owner. And of course that's me, Karl. So let's navigate back to my view and let's navigate to subscriptions open up the Kinetico business application subscription and go to access control and add a roll assignment. In this case as role let's select reader and search again for Brian and click save. And now that the role assignment it has been completed.
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-contributor-role-14529520?u=76281980&t=95)** I'm able to navigate back, ask Brian to the list of resource groups. And once we hit refresh, we are able to see the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the resource groups visible to Brian as well. And let's have a look at the third one over here, Kinetico remote solar panel up . SNL Brian's role-based access control assignment for the development environments is complete. He is able to see all of the resources because he's a reader of the whole subscription but he's only able to modify the resources within his own resource group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** navigate to (2), go to (2), click on (1)
> **Env Vars:** snl (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### [The User Access Administrator and Owner roles](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=0)** - [Instructor] Beyond the owner role, there's also another built-in role in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) called user access administrator that users will use for managing access. Let's take a look at the user access administrator role. As you will see, the list of available actions for user access admin is pretty slim. We have the read action available for any resource provider in Azure, but we also have access to any operations within the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).Authorization resource provider. This means that the user access administrator does not have access to make any changes to resources or resource groups, but it can control access for other users. As a rule of thumb, you should always use the user access administrator role over the owner role, as the owner role actually is a combination of user access administrator role, as well as the contributor role. The owner role is really a combination of user access administrative role, as well as the contributor role. Beyond the role based access control roles, your developers might also need [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) roles. Azure active directory roles are assigned in the directory or a tenant level. So they are not assigned in the same scopes as role based access control, subscription, resource group, or resource. There are two relevant roles for application developers in [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md). First, we have application developer, which is a role that lets you create and manage application registrations, and similarly, we have the Azure active directory guest inviter. The guest inviter is a role that lets you invite new people
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-user-access-administrator-and-owner-roles-14530456?u=76281980&t=95)** from outside of your Azure active directory from other organizations. Once they accept your invitation, you are able to manage them as your own users because they will have an object ID in your Azure active directory, but their authentication is still handled by their own Azure active directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (6), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **Definitions:** is a  (3), means that (1)
> **Best Practices:** rule of thumb (1), you should always (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Custom Azure RBAC roles](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=0)** - [Instructor] Now that we know how to set up a development environment using built-in roles, let's talk about custom [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) role based access control roles. And there are several cases where you will think of implementing custom roles for Azure role based access control. First of all is, there are more than 70 different roles available and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) is actually building even more roles as we speak. So sometimes you might be very tempted to implement just one custom role or one higher up role, for example, implementing the owner role instead of the user access administrator and the contributor role, if you need all of those powers in one. Second of all, there might be an external auditor or an internal security officer saying that we need to monitor all of the access across all of our Azure. This would mean that we would actually need to go ahead and drag us to all of our Azure subscriptions resource groups, all the way down to the resources and see what roles are actually in effect in all of those resources. Both to directly assigned and also inherited from those higher up hierarchy of subscriptions or even resource groups. And in the end, it's really about the question of this role based access control being both the scope, as well as the role. And instead of trying to find out an appropriate role, we could actually go ahead and modify the scope that is available for us when assigning the role. For example, instead of trying to find out a very specific web app related role, we could just go ahead and assign a contributor access, not just even to the web app level,
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=95)** but we'll actually go ahead into the sub resource level in some of these resources like Azure app service slots, web apps, or even virtual networks and their subnets. So building a comprehensive role-based access control access management using built-in roles, is already pretty complex. We need to monitor who has access to where, we even need to be aware of some of these backdoors that might not be visible to us using traditional monitoring or using test monitoring that's available to us. For example, [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) global administrators actually have the possibility to elevate them as user access administrators to any of the subscriptions that are linked to our [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) tenant. And some of the resource specific roles are not always very clear on their naming either. For example, what is the difference between a backup operator and a backup contributor? And this is the complexity of managing access with role-based access control only with built-in roles, not even the custom roles. So why won't I consider custom roles? First of all, built in roles are actually [products](../../Skills/Software%20Development/Microsoft%20Products.md) just like any other Azure services built by Microsoft. [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) are actually try to modeling these role based access controls roles. And when they are introducing new features, the Azure services, specifically these resource providers, they are actually introducing new services or at least re-evaluating these building roles as well. When we are building these roles ourselves,
>
> **[3:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/custom-azure-rbac-roles-14524621?u=76281980&t=189)** whenever something changes on Microsoft side, we actually need to [Version Control](../../Skills/Web%20Development/Version%20Control.md) the changes and actually update these changes to each of our subscriptions that are using these custom roles. And if you're not careful, you actually might end up having names that are very similar to those of the built-in roles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (7), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Analogies:** for example (4), just like (1), similar to (1)
> **CLI Commands:** find (2)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create custom Azure RBAC roles](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=0)** - [Tutor] So all of the built-in roles are actually defined here in docs.[microsoft.com](https://microsoft.com) under built-in roles for [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) resources page. For example, if I were to look for [SQL](../../Skills/Data%20Science/SQL.md) related roles, I could just go ahead and search for SQL. We'll see that there are actually a couple of roles built specifically for [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) SQL. And let's have a look at the SQL Database Contributor role for more details. And as we will see, SQL database contributor role actually is comprised of several actions that are available for users who have been assigned this role in that particular scope of the role based access control assignment. And there are even denied actions defined in that, not actions phase of that role definition as well. What if we would want to build our own custom roles? To do that, we can open up the inverse of this documentation called resource provider operations. I've already opened up the documentation over here. And let's have a look at Microsoft.Sql and see what's available. This is the lowest level of access control that we can have. We can build custom roles that define very specifically that this is specifically an action that is either allowed or not allowed by the specific role that we are building. Based on thresholds of a recent regulatory audit, KinetEco decides that there is now a need to push for more streaks or access control. And specifically, they really need to separate the roles of a SQL network administrator
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=93)** and a regular SQL administrator. And to do that, they're going to implement custom roles. As you'll see, custom roles are defined just like the real roles built-in. We have a list of actions that are available for us in terms of a resource provider operations, and we have a list of not actions that are not permitted for this role. The last thing we have is the assignable scopes. Where can we actually implement this particular role? The KinetEco database administrator has access to do anything within the Microsoft.Sql/servers/[Databases](../../Skills/Software%20Development/Databases.md) namespace of the resource provider. But specifically, it is not permitted to perform any write or delete operations to the firewall rules of the [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). The KinetEco Database Network Administrator however, has no other access to that Microsoft.Sql resource provider, but it actually has access to modify and delete the firewall rules. Custom rules are uploaded from the command line. In Azure [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), it now using the command az role definition create. Azure parameter it takes in the role definition file that is written in [JSON](../../Skills/Web%20Development/JSON.md). And once we have uploaded the custom roles into our Azure subscription, we are able to assign them to users. I've logged in here to KinetEco environment as myself
>
> **[3:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/create-custom-azure-rbac-roles-14524612?u=76281980&t=186)** and I'm already navigated here to the resource group view. So I'll just go ahead and click on, add and add role assignment. And in the list of available roles, I'm now able to search for KinetEco. You'll see that we have the KinetEco database administrator and the network administrator available for us and even the definitions are here visible, that we defined in the Json previously. I'm going to select KinetEco Database Network Administrator and search for Brian and hit save. We can verify that the role assignment was successful by checking the role assignments tab of this pane. And here we can see Brian's cumulative access, he's a reader in the subscription scope and also KinetEco Database Network Administrator in this resource group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (10), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (5), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (8), cli (1)
> **File Paths:** microsoft.sql (3)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** az (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)

#### [Management pane vs data pane RBAC roles](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=0)** - [Instructor] So far, we have talked about access to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) management pane. Examples of these management pane access controls are rights about modifying file modules to Azure [SQL](../../Skills/Data%20Science/SQL.md), creating new resources, or managing access to others. We gave Brian a contributor access so that he can create, read, update or delete resources in his resource group. But now let's switch gears and talk about data pane access control. KinetEco wants the installation engineers to be able to upload service manuals to Azure Storage. And the engineers should not have access to change Azure Storage configurations or see any other Azure resources available. We can implement access control like this using data pane access control. And specifically, we do this by introducing two new sets of allowed or not allowed resource provider actions. Data actions and not data actions. I've already looked ahead for an appropriate role for KinetEco's installation engineers. The role is called storage blob data contributor. And as we'll see, it has allowed actions for the management pane over here but it also have allowed data actions, specifically ability to write to a blob storage. So let's give Aaron, one of the installation engineers, access to upload new files to Azure Storage. So I'm starting off by navigating to the appropriate storage account. And let's give Aaron access specifically
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=93)** to this resource only. So I'm going to open up the access control and selecting add, add role assignment and searching for the role.
>
> **[1:49](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/management-pane-vs-data-pane-rbac-roles-14525617?u=76281980&t=109)** Next up, I'm going to select Aaron as user and hit save. To verify, let's have a look at the role assignments. So currently, the access control to this storage account looks like this. Myself and Brian have access in the subscription scope. I as an owner and Brian as a reader. Brian has also access to this resource group specifically as a contributor. And Aaron has storage blob data contributor access specifically to this resource or the storage account only. Now that Aaron has been granted data grain access, he's able to work with data on our Azure Storage account. I've logged into Azure Storage Explorer using Aaron's credentials. To update a new file, let's just select KinetEco's subscription and navigate to the appropriate storage account. Select a container, which is sort of like a folder in a storage account and just drag and drop the PDF file into the installation manual's container. After the upload is complete, we can double click the file to download it again and verify it is accurate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1), pdf (1)
> **UI Navigation:** navigate to (1), drag and drop (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Design Azure access control](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-azure-access-control-14529518?u=76281980&t=6)** - [Instructor] And now it's time for a challenge. KinetEco is building their installation support application. The application itself is pretty easy. They have a web application, [SQL](../../Skills/Data%20Science/SQL.md) database, and a storage account for installing installation manuals as PDF files. There are two copies of the environment, the development environment, and the production environment. KinetEco has defined the following access control requirements for the application. First off, the project managers need to be able to manage project members' access to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) resources. The developers need to be able to create and modify resources in the development resource group, and they also need to be able to view the production resource group to troubleshoot issues in production. And finally, installation engineers need to be able to access the storage account in the production resource group to upload new files. Your challenge is to plan the access control for the KinetEco installation support app with the principle of least privilege in mind. You should design the solution with minimal number of role-based access control assignments, and you shouldn't spend more than 10 minutes on this challenge. Now, it's your turn to take the challenge. You can post the video now, and when you're ready, skip to the next video to see my approach to the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** sql (1), pdf (1)
> **Cross-References:** next video (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Design Azure access control design](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-azure-access-control-design?u=76281980&t=0)** - And here's an example of how your Access Control could look like. On the top, I have Cecilia, who has access as a User Access Administrator for the whole KinetEco Business Application Subscription scope. Next up, I have two assignments for the installation-app-dev [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) group role-based Access Control Contributor for the dev environment, and Reader for the production environment. And lastly, I have the Installation Manual Uploaders group, assigned a storage block data contributor access, specifically to production environments, storage account only. As you'll notice, to minimize our back assignments, I'm going to use Azure AD groups. You might recall that Azure AD groups can be a target or the object of a RBAC assignment, just like a user or an application can be. If this was a brand new subscription, Cecilia will need to have owner privileges to register the resource providers of a mitered dev app, mitered [SQL](../../Skills/Data%20Science/SQL.md), and mitered storage, for the first time they want to use those services. After that User Access Administrator privileges are sufficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** rbac (1), sql (1)
> **Analogies:** just like (1)
> **Speakers:** - and (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Control user access to your apps

[↑ Back to Table of Contents](#table-of-contents)

#### [Register an application to Azure AD](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=0)** - [Instructor] Registering an application is really a prerequisite for us to use [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) as an identity provider in our applications, meaning that our users get single sign-on using their existing credentials. But you can use Azure AD to authentic applications as well. Using Azure AD as an identity provider, lets us focus on authorization rather than worrying about how are we storing the user credentials. But what is this in practice? When we register an application, an application object and a corresponding service principle are actually created behind the scenes. Applications are registered in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) portal. I've logged in as myself into Kineteco's Azure environment, and I'll navigate to the [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) page of the Azure portal. Here on, I'll scroll down for application registrations, and select new registration. So we have two choices to make. First of all, we give my application registration a name, preferably a name that's the same as our application. And then we need to decide which users do we allow to sign in. Kineteco is building an application that only lets in users from Kineteco Azure Active Directory. So the first choice is actually suitable for them. If they would want to use external partners who will then log in using their own credentials, they would use Azure Active Directory multi-tenant. And if they were to build consumer-facing applications, the last selection will be appropriate.
>
> **[1:36](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=96)** Once I made my tenancy selection and inverted my name I then click on register. Two things have happened now, first of all as you created an Azure Active Directory object behind the scenes, you might recall that an Azure Active Directory object is that target of a role-based access control assignment, meaning that instead of a user or a group, we can actually assign role-based access control now to this application as well. And another thing that was created for us is the managed application or a service principle. We'll be configuring this later. For now, let's go back to the application registration. Let's navigate under manage to authentication. This is the URL for configuring the authentication settings of our application. I already have an application that is hosted in kineteco.[azurewebsites.net](https://azurewebsites.net). Now let's see how to configure Azure Active Directory to secure this application against unauthenticated users. In my case I'm going to use a feature of Azure app service to authenticate my users, meaning that my redirection URL is actually the path of my website, followed by auth, login, Azure AD and callback.
>
> **[3:03](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/register-an-application-to-azure-ad?u=76281980&t=183)** Depending on your authentication technology, your redirection URL might look a little bit different. In addition, we need to enable the access token and ID token implicit grants. Once we've done that we can hit save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (6), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4)
> **Env Vars:** url (3)
> **UI Navigation:** navigate to (1), scroll down (1), click on (1)
> **Tools:** azure portal (2)
> **Prerequisites:** prerequisite (1), configure (1)
> **CLI Commands:** make (1)
> **URLs:** [azurewebsites.net](https://azurewebsites.net) (1)
> **Cross-References:** go back to (1)

#### [Web application sign in with Azure AD](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=0)** - [Instructor] To authenticate users in our web applications using [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), we need to talk about claims-based access control. And claims-based access control starts with both the user and the application trusting a separate external identity provider, in this case, Azure AD. Beyond just simple authentication [Tokens](../../Skills/Web%20Development/Tokens.md), the external identity provider can actually store multitude of claims about the user as well. These can be used to grant more granular access and actually perform authorization-related access control methods within our application. You then think of these claims like a driver's license. A driver's license is issued by its trusted third party. In this case, a Department of Motor Vehicles or a police station, depending on where you're from. And at least not just the fact that you are licensed to drive but also lists some more specific claims about your driving ability, maybe that you're certified to drive a specific category of a vehicle and maybe even some additional information that is not only related to your driving ability. In some cases, it might be your date of birth and maybe even some physical abilities as well. So when we are building web applications that let users authenticate using [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), we are actually implementing something called an open ID authentication protocol. And let's quickly walk through how does it work. We start off with the user requesting access
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=94)** to the web app. Then the web application actually passes on that request to that identity provider or Azure AD. Azure Active Directory makes sure that the user is successfully being logged in. They check whether or not the username and password match. And in some cases, also asks for a second or even third factor of authentication. If the user successfully logs in, our authentication provider provides a security token to the user and redirects the user to the application page that they requested. Once the user is redirected to the page, they are able to present the correct authentication token and our application is able to parse that token and decide whether or not the user is authorized to log into the page. Now that we have verified the identity of the user based on the authentication provider's security token, we can actually [Fetch](../../Skills/Web%20Development/Fetch.md) more detailed profile information from the identity provider. In Azure AD's case, that could entail claims about group membership, [office](../../Skills/Web%20Development/Microsoft%20Office.md) location or which part of the organization do they belong to? So we left off KinetEco's website unsecured. Anyone is able to access this website. Let's go ahead and set up Azure Active Directory authentication for this. To do that, I'm going to need a couple of IDs from our application registration. Namely, the application ID, sometimes referred to as the client ID of the app. This is unique to the application registration
>
> **[3:08](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=188)** that we created. And secondly, the directory ID or Azure Active Directory tenant ID of our organization. This is common across all of the application throughout our whole organization. Once we have copied these IDs, we can go ahead and configure the app service. In the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) portal, I'm going to select my app service from the recent resources. Under settings, when I scroll down, I see authentication/authorization and I can go ahead and turn this on. We need to select two things. Before we configure the Azure AD app, we first need to select what sort of action to take when an unauthenticated request is coming in. As we are using Azure AD, we are selecting that. Next, we can configure the Azure App Service application registration. There're two modes for us to choose from. A global administrator of the Azure AD, such as myself would be able to just pick the Azure app registration from the list using the express mode. A developer would more likely have to actually configure this manually in the advanced mode. Next, we'll paste in the client ID of our application. And then we need to define our identity provider URL. This is different depending on what sort of authentication tools you are using. In my case, I'm going to use the following. The one common part of the identity provider URL
>
> **[4:41](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/web-application-sign-in-with-azure-ad-14525621?u=76281980&t=281)** is our directory unique identifier. Depending on your configuration, your base URL might be different. And then we can click OK. And also save in the authentication/authorization pane. Now that we have configured our application authentication, we can visit the website and see if it's working. To do that, I'm going to open up a new in private window and navigate to the website. I'm getting redirected to the login.[Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).online, slash our directory ID. I'll log in using Aaron's credentials. And once the login is successful, we can see that we are successfully redirected to the website. So now we have successfully configured authentication of our application. Our users in KinetEco's Azure AD are able to log in, all of them. Next, we will have a look at how to set up more stricter authorization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (8), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Prerequisites:** configure (4), set up (2)
> **Env Vars:** url (3)
> **UI Navigation:** scroll down (1), navigate to (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Securing web application authentication with Azure AD Conditional Access](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=0)** - [Instructor] Now that we have set up authentication of our application, let's start looking at authorization. And authorization logic can be applied using [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) conditional access. Azure AD conditional access also lets us specify when should we ask the user for another form of authentication, such as a one-time use code over SMS or an authentication application. Let's continue from our app registration and navigate into the manage application in our local directory. Conditional access is part of the premium licenses, which KinetEco has because they're using [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365. So in the Enterprise application view, I'll just go ahead and click on Security, Conditional Access, and select new policy. And now I can configure the authorization logic of my application. In the conditional access configuration page, I first need to select the scope of the assignment, which user, which application and which combination of this condition. Secondly, I need to select what are we doing with these users or applications. Do we let them in, are we blocking the access or granting the access? And finally, if you're not sure if you are about to block ourselves out, we can turn this in the audit-only mode to verify that everything is working. Once we are satisfied, we can turn the policy on. So let's implement these for KinetEco's web application. First up, I'm going to select the default access control for users who are trying to authenticate into this application.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=94)** Under access control, I am going to select block access and click select. And then I navigate back up under assignments, users and groups. I'll configure this to apply to all users. This means that we are in the danger of locking ourselves out because we have selected the block type of grant for all users, meaning that no one is able to log in yet. Next up, on the exclude page, let's select users and groups and select a particular Azure AD group that should access this web application. I'm going to search for the name of the group. Click it and hit select. Once again, I'll pick done. Now that we are done, we can go ahead and turn the policy on and click create. In a production environment, you would want to be more careful and first enable this in the report-only mode, verify that everything is correct and only later come back and enable this whole policy in on mode. So let's go ahead and navigate to kineteco.[azurewebsites.net](https://azurewebsites.net). We are redirected again to the Azure AD page. And let's select Aaron. And I click sign in. And we have successfully authenticated here. So as Aaron should have access, this seems to be working. Now let's try logging in as someone who shouldn't have access. To do that, let's select Brian. And log in again. And you'll see that we actually don't have access
>
> **[3:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/securing-web-application-authentication-with-azure-ad-conditional-access-14529515?u=76281980&t=187)** to this site. Our sign in was successful but we don't have permissions to access to this resource. So to verify that Brian wasn't able to log in because of the conditional access, let's navigate under enterprise applications under activity to sign-ins. All of the sign-ins against these applications are listed here in a central place. Here's Brian's login. Let's click on it to reveal more details. If we scroll down, we'll see that a failure reason for this sign-in was that access has been blocked due to conditional access policies. So as our conditional access policy seems to be working, we have successfully set up both authentication and authorization for our web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (4), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **UI Navigation:** click on (2), select the (2), scroll down (1)
> **Prerequisites:** set up (2), configure (2)
> **URLs:** [azurewebsites.net](https://azurewebsites.net) (1)
> **Env Vars:** sms (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [The Microsoft Authentication Library](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/the-microsoft-authentication-library?u=76281980&t=0)** - [Instructor] We have talked about securing the authentication towards our application using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) App Service. However, if you are using another platform to host your apps, or if you are using a specific other technology, you might want to have a look at how to do this all in code. To do that, have a look at the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) identity platform. You'll find the information about how to implement all of these authentication scenarios in application code for a single page application, web application, even authenticating APIs against other APIs, and building native applications for services like mobile apps or [Windows](../../Glossary/Service/Windows.md) native. What's more, Microsoft is providing us with Microsoft Authentication Library. Microsoft Authentication Library or MSAL, is available for .NET, [JavaScript](../../Skills/Software%20Development/JavaScript.md), and other languages. From here, you'll have a chance to look at all of the sample code on a specific language or framework that you would like to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** msal (1), net (1)
> **CLI Commands:** find (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Internal web app with Azure AD](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=0)** (upbeat intro music)
>
> **[0:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-internal-web-app-with-azure-ad?u=76281980&t=6)** - It's time for another challenge. This time we are going to secure an internal web application using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) ID. KinetEco wants to approach the cloud with the same security standards as they are used to from the on-premises world. Specifically, they want to provide access to their internal applications only to the users who have credentials in their own premises [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) already, and the users need to be accessing the application from the known secure company network. Your challenge is to plan the access control for this internal web application. Securing access from the point of view of [Network Security](../../Skills/Cybersecurity/Network%20Security.md) is something that we haven't talked about before. So go ahead and explore while the other conditions are available for you to protect your applications. You should not spend more than five minutes on the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Speakers:** - it (1)
> **Non-Speech:** (upbeat intro music) (1)

#### [Solution: Internal web application with Azure AD](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=0)** - [Instructor] And let's walk through the steps on securing the internal web application for KinetEco. I'm going to do this using conditional access. First, I'm going to give it a name, next, on the assignments tab, I'm going to select this conditional access to be applied to all users. I'm going to select the specific internal web application from the list.
>
> **[0:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-internal-web-application-with-azure-ad-14531514?u=76281980&t=35)** Next, under the conditions we have several options, particularly let's have a look at the locations options. Let's turn this on, on the yes part and let's select all trusted network locations. Then we can go ahead and click done, again done, and navigate to access controls. In here let's select grant access and also select required devices to be marked as compliant. Once we are satisfied, we can go ahead and enable this policy by turning this on.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Control app access to your data

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage Azure application secrets](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=0)** - [Tutor] Kineteco also has a line of [products](../../Skills/Software%20Development/Microsoft%20Products.md) aimed at consumers. Most of these products are actually built around solar panels. And throughout this chapter, we are actually building an companion app for the solar panels. With the solar panel companion app, the users kind of view the servicing manuals of their solar panels. There's no authentication built in. The users actually just type in the serial number written on their device. In the future, customers can even order replacement parts for their solar panels, provided that their warranty is still valid. As the key feature of the solar panel companion app is actually displaying off the manuals to the end user, we now need a way to grant solar panel web application access to the storage account. I've already logged into the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) environment of Kineteco. The storage account that actually has all of the servicing manuals is the same one that we are using in the installation application. To connect to a storage account securely, just like to our [SQL](../../Skills/Data%20Science/SQL.md) database we need a connection string. We can find them under the settings and access keys. The connection string of a storage account actually consists of two parts. The storage account name, which is part of the fully-qualified domain name of the storage account and a primary or a secondary account key. Let's see how we can connect to this storage account using Storage Explorer. To do that, let me copy over the primary account key and navigate to Storage Explorer.
>
> **[1:34](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=94)** Let's add the storage account. I'm going to select the storage account name and key. Copy over the account key and the account name. This is all that's needed for me to connect to this Azure storage account. Once I hit connect, I'm able to navigate into this locally attached storage account. And we'll see that we have the installation manuals container available for us as well. Notice that there was no other authentication. The only thing that I needed to have is the master key or the account key of the storage account. And this master key actually gives me full access to perform any operations in here. There's no authorization whatsoever. We can, for example, go ahead and just delete the existing PDF files in here. And no one will be non the wiser. As I have full access, I can perform also access control-related settings. I can go ahead and set the public access level of this container. I can select public access for containers and the actual resources blobs inside the containers or just the individual blobs and hit Apply. As I did not authenticate with my own account, but rather with the account key and account name of the storage account, there's no way of proving who actually made these changes. There is a way to see who actually have been accessing these account keys. To do that,
>
> **[3:06](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/manage-azure-application-secrets-14528559?u=76281980&t=186)** let's navigate inside the same storage account into activity log. Under the activity log, we have a list of Azure operations that have been performed within this scope. And we'll see that an operation called List Storage Account Keys was actually performed by myself just seconds ago. So as we've seen, the storage account key is really similar to the root password of your whole storage account. We should be really careful when protecting this key and preferably not even use it at all. We should avoid sharing this key with other users because this is the same key for all users of this storage account. We shouldn't hard code it in any code and we shouldn't definitely store it in [Version Control](../../Skills/Web%20Development/Version%20Control.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Env Vars:** sql (1), pdf (1)
> **UI Navigation:** navigate to (1), select the (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### [Shared Access Signatures in Azure](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=0)** - [Instructor] Instead of using this one account key to rule them all, let's talk about Shared Access Signatures or SAS [Tokens](../../Skills/Web%20Development/Tokens.md) that we can use in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Shared Access Signatures control the access to Azure Storage in a much more granular way. For example, we can limit which sort of operations can you perform, is it only read only access? Can you also write? And we can even grant you access on a smaller level than just the account, for example, a Container, or even a particular Blob, or a Binary File. And SAS tokens are the primary way for us to authenticate access to Azure Storage, when we cannot really trust the client where code is running. For example, any web application that will be used to connect to Azure Storage is always untrusted, and shouldn't use the Master Keys, or the Account Keys, but should rather use the shared access signatures. So how can Kinetico share those servicing manuals securely to the end-users? They really cannot use the Storage Account Master Keys because that will also let the users, delete the data as well. So we start where we left off in the Storage Explorer, where there are no longer any manuals available as we deleted them using those account keys earlier. Let's upload a couple of new manuals to the Container. Again, I'll just drag and drop from my File Explorer to the Storage Explorer, and wait for the transfer to be complete. As I have just uploaded the files using my Storage Account Master Key,
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=95)** if I would go ahead and open this file in a browser by copying the URL of the Wind Tunnel User Manual, Azure actually does not let me access this file as this is set to private only. As I've logged in with the Account Key, I can actually go ahead and change this. To do that, I'll just right click on the Container, and set the Public Access Level on this particular Blob to read only, and hit apply. After the change has been successfully saved, I can go ahead and refresh the page of my link. As you see, now I'm actually able to download the information from the manual. But with SAS tokens, we can actually control access in a much more granular way. Being a select that access is controlled in the whole Storage Account, or Container, or even just on the Blob level. And we can define which sort of actions are actually allowed. We can say that these a list action, for example, users can list all files in the Container, or these is only available for read, or write, or delete, for a particular Blob only. And what's more we can even have IP address control, to adjust these SAS tokens to be used, only by the users who we intend to. Before we implement the SAS tokens, let me revert back to the private only mode of the public access level of this Container. I'll just right click on the Container name, set Public Access Level, and no public access, and apply.
>
> **[3:10](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=190)** Now when we copy the URL of the user manual, and navigate to it in our browser, we shouldn't be able to access it. Just we'll see, we are back in the private only mode. And back in the Storage Explorer, let's implement SAS tokens. To do that, for just this particular user manual, I'm going to hover over and right-click, select get Shared Access Signature, and configure this. I could use something called Access Policies, to create templates for creating these shared Access Signatures, but just for creating this one Shared Access Signature, or SAS token, I'm just going to configure it here manually. As SAS tokens are meant for more granular access control, they even have a time to leave that we need to set, when the access actually starts, and when it ends. The default time to leave is 24 hours, so I'm going to leave that as it is. Next, I need to select which sort of permissions are added for this Shared Access Signature. My users need to be able to read the file, but they actually don't need to be able to list all of the files in the Container, so I'm going to uncheck that box. Once I'm satisfied with the permissions and the time, I can go ahead and click create. The actual SAS token is just an additional string that we'll attach to the URL of the file. So I'm just going to copy this, and add it here in my browser, and as you'll see, now we are able to access this file, even though the public access level is set to private.
>
> **[4:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=285)** In the Azure portal, and in the APIs, we actually have even more possibilities to configure the SAS tokens. So let's have a look at those. I'm going to navigate in my storage account into settings, Shared Access Signature, in this page of the Azure Portal, we have a list of familiar permissions. We have the time to leave, start and end time of the SAS token, and here we can specify which IP addresses are on the allowed list, who are able to actually use this access key. And very specifically, we can even choose which Storage Account Key we're actually using to create this SAS token. As the SAS tokens are created using the Access Keys of the Storage Account, whenever we need to regenerate the keys of the Storage Account, the SAS tokens also get refurbished. So if I navigate into my Access Keys, and click on regenerate, we'll see a warning that if you really want to do this, we'll actually invalidate all users and all access who are using the Azure Storage Account using the Account Key. So I want to do this, so I click yes. Now that I have successfully regenerated the key, we can go ahead and try to [Fetch](../../Skills/Web%20Development/Fetch.md) the file again from the Azure Blob Storage. Now when I refresh the page, we actually get another type of error saying that, "Our authorization header is formed incorrectly," because the signature is no longer valid. It's no longer valid, because the SAS token was created using the Account Key, or the Master Key of the storage Account.
>
> **[6:19](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/shared-access-signatures-in-azure?u=76281980&t=379)** Similarly, as we have connected to Azure Storage Explorer using the Account Key, we can no longer perform any operations. For example, I cannot go and delete this file. In addition to Azure Storage, SAS tokens are available for us for authorization and access control in Azure Service Bus as well. Because Service Bus shares the authorization model with these other services, we can actually use SAS tokens with Service Bus queues, topics, Relay and even Event Hub and [IoT](../../Glossary/Concept/IoT.md) Hub as well. Using SAS tokens to authorize your users, downloading files from Blob Storage, is actually a best practice. You can read more about this Valet Key Pattern, actually in the Azure Architecture Center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (13), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (13), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [IoT](../../Glossary/Concept/IoT.md) (1)
> **Env Vars:** sas (18), url (3)
> **UI Navigation:** click on (3), drag and drop (1), navigate to (1), right-click (1)
> **Analogies:** for example (5)
> **Prerequisites:** configure (3)
> **Tools:** azure portal (2)
> **Exercise Files:** download the (1)
> **Best Practices:** best practice (1)

#### [Azure Key Vault service](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=0)** - [Instructor] As we are dealing with various connection strings in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), we need a place to store all of these secrets. And that's where Azure Key Vault comes in. Azure Key Vault is a place where we can store encryption keys, secrets, and certificates in a centralized and secure manner. Mugshots make sure to store these secrets in a compliant way. We can even bring in our own keys that [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) will use to store these secrets in [Hardware](../../Topics/Hardware.md) security modules. And one of the key features of Azure Key Vault is auditing. We get a centralized view of who has access to our keys. We also get versioning, when changes are needed to access [Tokens](../../Skills/Web%20Development/Tokens.md) or account keys of storage accounts or any other secrets, we can build on the existing Azure key, well secret key or certificate. And we even get this audit trail record of what was changed and by whom. We get key management operations such as editing, inputting new, and for certificates, even automatic renewables, if we are using specific certificate authorities. And finally it will be insecure if you won't have access control. Azure Key Vault has its own method of granting access to users. Access to the Key Vault data pane, so secrets, encryption keys and certificates is managed by something called access policies. And these access policies apply to the entire Key Vault resource, not to individual keys, secrets or certificates. So the target of this access policy assignment is always the whole account or the Key Vault itself. We don't get containers just like we did in storage accounts, or we don't get various scopes
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-service-14528564?u=76281980&t=95)** like we did with role based access control assignments. And very interesting thing to note here is that even though we have previously seen the role-based access control owner role being the one who was able to access this data pane on granting access to others, with Key Volt specifically, anyone who has access to Key Vault resource as a contributor, actually have access to grant themselves this data pane access as well, because they can manage these access policies. The reason for that is that Key Vault access policies are not actually defined in the mugshots dot authorization resource provider, but actually as operations or actions inside the Key Vault resource provider itself. As we have access to all operationals within the Key Vault as contributor, that's why we also have the right access to the access control of the Key Vault.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Adding secrets to an Azure Key Vault](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=0)** - [Instructor] To secure the access between the solar panel companion app, web application and the storage account of the installation app, Kineteco is going to use [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) key vault. And as Cecilia is the project manager of the whole Azure business of Kineteco, she's the one who is able to set up the Azure key vault. I've logged in here, as Cecilia and I've navigated to a pre-created key vault that's empty and ready for us to be configured. As you'll see, the key vault actually has a publicly available, fully qualified domain name, kinetecosolarAzurekeyvault.vault.[azure.net](https://azure.net) This means that the key vault needs to be globally uniquely named. The key vault is also tied to the Azure ID of the Kineteco, which means that we can use access policies to point to users in the Azure ID of Kineteco. Azure Key vault is a service that stores different types of secrets. The first one we are going to look at cryptographic keys. They look like, just like you would expect so you can generate or import any sort of cryptographic keys to the key vault and store them securely. Next up, we have certificates. We can generate and import TLS or SSL certificates. And for our web applications, we can even configure our Key vault to be automatically renewing the certificates from a trusted certification authority. Currently Azure supports these two certificates authority providers. And finally, we have secrets.
>
> **[1:35](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=95)** Now secrets can be anything. In Kineteco's case, secrets will be connection strings to the storage account that we can use for the solar panel application to connect to the storage account. To add a key, I'm going to click on generate an import. I'm going to manually upload a key. The name will be storage account key. And for the value, I'm going to navigate to the storage account. Now, as Cecilia is actually a contributor for this storage account, she's actually able to create these SAS [Tokens](../../Skills/Web%20Development/Tokens.md) as well. Let's configure this SAS token. The solar panel application only needs to read for us from the storage account. So we will only need that permission. And for the time to leave, let's select something that's far away, in this case one year and let's generate the key. Now this is the connection string that the developers of the solar panel application would use to connect to the Azure storage account. Let's copy this and store this in the key vault as a secret. If I would have a process of rotating the keys, I'll go set up all of the keys that I will have in the future here as well, and define them as activated in the certain time. In this case, I'm just going to add this key manually at once. So I'm just going to click on create. Now that the secret has been successfully created, we can go ahead and navigate to the secret and we'll see that we always have versioning on, even though we only have
>
> **[3:09](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/adding-secrets-to-an-azure-key-vault-14530459?u=76281980&t=189)** this one version currently available, We can just go ahead and click on open it. We see the URL that the solar panel application we need to call in order to [Fetch](../../Skills/Web%20Development/Fetch.md) the connection string of the storage account. If you navigate down below, we can click on show secret value in order to copy or view the secret.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (9), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** sas (2), tls (1), ssl (1), url (1)
> **UI Navigation:** click on (4), navigate to (1)
> **Prerequisites:** set up (2), configure (2)
> **Definitions:** means that (2), is a  (1)
> **Code Identifiers:** kinetecosolarazurekeyvault (1)
> **URLs:** [azure.net](https://azure.net) (1)
> **Analogies:** just like (1)

#### [Azure Key Vault Access Policies](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=0)** - [Instructor] In order for Brian to get access to the Secrets he needs to have access policy set up in the Key Vault. And let's have look at the role based access control assignments to verify what are the current assignments. As we discussed, Cecilia is a Contributor for the subscription and Brian is actually a Reader for the whole subscription. So Brian is able to read the management pane of this [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) environment, but not the data pane, so the actual content of the Secrets, If he navigates to the Secrets page, he gets an error message showing that his access is unauthorized. Back in Cecelia's environment, she can go ahead to the Access policies page and add an access policy. We have several predefined templates, sort of like roles for role based access control that we could choose. In our case, we are not satisfied with any of these. So let's manually add access policies for Brian. Brian only needs to be able to list and read Secrets. So let's just pick those. And let's select Brian from the list of [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) principles and click Select. Finally, we'll click on Add, and we need to remember to click Save, and these are now updated. And as we see, Brian's access has now been activated. Back in Brian's view, we are now able to see that storageaccountkey Secret, navigate to it, and show the Secret value.
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/azure-key-vault-access-policies-14530455?u=76281980&t=93)** It's important to note that Cecilia does not need to have Owner privileges for this Key Vault as Contributor access is enough for changing these access policies. And there are even some more additional functionalities that we need to configure before we can go ahead and start using the Key Vault.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **UI Navigation:** click on (1), navigate to (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Audit logs](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/audit-logs?u=76281980&t=0)** - [Instructor] Auditing is one of the key features of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Key Vault but it's not turned on by default as there are some costs involved. Auditing functionality is actually hidden away underneath this monitoring and diagnostic settings. To enable audit logging, we navigate to add diagnostic settings. Give the audit log a name. And select a location for our logs. In this case, a storage account. Next, we need to enable the audit logs and define the retention policy. In KinetEco's case, they have a requirement to store audit logs for a full year. Once we're satisfied with everything, we can go ahead and click save. Now we have configured audit logging and access policies for users accessing the Key Vault. However, our web application is not yet able to connect to the Key Vault. Let's see how to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Managed Identity for Azure Resources](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=0)** - [Instructor] Now that our secrets are securely stored in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Key Vault, let's make sure that our applications are able to access the key vault as well, and we are going to do that using something called managed identities for Azure resources. Managed identities are an alternative to using secrets or connections strings in our code. Behind the scenes when we create a managed identity, we automatically get created an [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) identity or an object, for our application's Azure resources. For example, our Azure app service could have its own Azure AD identity. Because Azure managed identities are actually represented in Azure AD, we can use those as a target or an object in role-based access control or access policy assignments. Granting role-based access control to an application makes sense when the application itself needs to modify existing resources on Azure, it makes sense for example, in the case of AKS or Azure [Kubernetes](../../Skills/DevOps/Kubernetes.md) Service, when we actually need to give the AKS cluster itself contributor access in a resource group. That way the AKS cluster is able to create and modify [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) and virtual networks as the cluster is being scaled up and down. I'm back in the Azure portal and I have logged in using Brian's credentials. Brian has contributor access to the app service. To create a managed identity, I need to navigate to settings and identity. There are two options: I could assign an already manually created managed identity, or I could let Azure create a managed identity for me.
>
> **[1:37](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=97)** That is called system assigned managed identity and that's what we are going to use now. To turn this on, I'm just going to click On and click Save. As the warning notes, this actually is creating the Azure AD identity behind the scenes, we are okay with that. Once the managed identity has been created successfully, we'll see that this is the object ID just like for users applications and even user groups in Azure AD. Now these object ID is something that we can use as a target of our role-based access control, or for example, granting access in the Azure Key Vault in the access policy. Let's add an access policy using Cecilia's account again. To do that, I'll navigate to settings, access policies, add an access policy, and select the appropriate permissions. In this case, as we did with Brian, the application needs access to get and list secrets in the key vault. Next we will select the principal in Azure AD that gets access. Previously we selected Brian here as a target. Brian is a user which is also represented as a principal in the Azure AD, but in this case, let's use the managed identity that represents the identity of our web application, Kinetecosolar-UI. (keyboard clacking) Here it is, I'll click on it and hit Select, and then we can go ahead and click Add. Just one more time let's click on Save and the preferences have been saved. Now we have successfully added a new managed identity
>
> **[3:11](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=191)** for our web application, and we also configure the access policies of the key vault so that the managed identity is actually able to read and list secrets in that key vault. But how can we read that secret within our app service? To do that, let's navigate under secrets and open up that secrets in current version, and let's copy the secret identifier in here. Now let's configure the Azure app service so that we are able to read the secret. To configure Azure app service to access the key vault secret, let's go into Azure app services configuration and add a new application setting. I'll give my app setting a name. (keyboard clacking) And as a value, let's start this with the @MicrosoftKeyVault, (keyboard clacking) and the secret URI is the one that we've just copied over. Once we click Okay, we can go ahead and verify it and hit Save and there we have it. Now we are able to retrieve this value from the key vault at runtime of our application. Now that we have created a managed identity for our application's fib app, we can actually assign it directly a role-based access control data pane access already within the storage account. So to do that, let's navigate into access control and click on Add and add a role assignment. As a role, let's search for a blob data reader, and as a target or the object of the role-based access control assignment, let's search for Kineteco.
>
> **[4:45](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/managed-identity-for-azure-resources-14525627?u=76281980&t=285)** And there we go, Kinetecosolar-UI web application managed identity. Let's click Save. Open role assignments, and voila, here we have it, storage blob data reader role assigned to the Kinetecosolar-UI app service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (13), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (7), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **UI Navigation:** click on (4), navigate to (2), select the (2)
> **Env Vars:** aks (3), uri (1)
> **Analogies:** for example (3), just like (1)
> **Prerequisites:** configure (3)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)

#### [Challenge: Design data access controls](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/challenge-design-data-access-controls-14529524?u=76281980&t=0)** - [Narrator] Now it's time for another challenge. You will finish the design of the access control of the solar panel companion application. As you will recall, the solar panel owners are not actually authenticated against the web app. Rather, they are just inputting their serial number of their registered solar panels. If their solar panel serial number is found in the database, then they are authorized to download the servicing manuals from the storage account of the installation app. Here's a recommendation. Have a look what [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Key Vault could do for you in this case. Because you are only choosing the access control technologies, this shouldn't take you more than a few minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Design data access controls](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/solution-design-data-access-controls-14524620?u=76281980&t=0)** - [Instructor] This is how I will solve the solar panel applications access control issues. First of all, as mentioned, the solar panel owners actually don't log in at all, so there is no authentication. They just input in a free form field, a serial number of the database. Secondly, our solar panel web app fetches the [SQL](../../Skills/Data%20Science/SQL.md) connection string from the key vault and uses that connection string to check whether or not this serial number is already in the list of registered devices. If that is the case, we are able to use [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) data pane role-based access control assignments to [Fetch](../../Skills/Web%20Development/Fetch.md) the data from storage account and display that to the solar panel owners. Another way of controlling the access between the web app and the SQL database, would be to use something called, [Azure AD](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) authentication for SQL. This is a feature of Azure SQL, where we could use instead of real SQL users, Azure AD users, and in this case, for example, the manage identity of our whole web application. You can read more about Azure ID authentication for Azure SQL at the following document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Azure ad](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** sql (6)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Developing solutions for Azure and beyond](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=0)** - [Instructor] You might have been watching this course in the preparation of the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Developer Exam AZ-203. If you have, here are a couple of pointers for you. First of all, all information related to the exam is available at the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Learn website. At the same website, you can go ahead and finally schedule your exam and view more details about what sort of skills are measured and what are the (indistinct) averages across them. There are several types of questions that you might face during the exam. Most of them are multiple choice questions. Where you need to choose the best answer out of possible many wrong ones or possible many right ones. Some of them are case studies. When you're actually presented several questions related to the same case. In these questions, you have several tabs open related to the background of the application, related to the business requirements and even technical requirements. It's a good idea to have a look at all of the questions related to the same case first, and then go ahead and read the relevant information about the background of the case. Sometimes there's way too much information. So it's good idea to know what you're being asked upon before reading all of them through. And you might end up having to answer to the same question over and over again. So goes sudden death or repeated answer questions actually presents you one question at a time. You cannot go back and review your answers and you are being asked maybe three or four times related to the same topic. Lastly, with Azure course, we also have laps. Laps are longer questions
>
> **[1:33](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=93)** where you are free to use any tool that you want as your cultural or Azure portal to deploy Azure services as per the question requirements. You're charts based on the end result, not how did you achieve that? If you want to learn more about Azure Security, you can visit the Security Center of your Azure environment. You can find the Security Center behind the full menu of the Azure portal. Azure Security Center is not a resource. It's not something that you provision on your own. Security Center is always available for you as a service. The content and the relevant recommendations vary based on what sort of role based access control access you have to the Azure environment. In my case, I'm getting shown recommendations related to this particular subscription only. Security Center gathers all security related recommendations in one place on Azure. For example, we have recommendations related to app services in here. So let's have a look. This particular recommendation is about closing HTTP access in our web apps. And that's actually something that Azure is able to fix for us automatically. So quick fix is available. To enable the quick fix and disable HTTP connection. I'm going to have to select the web app and click remediate. At this port Azure Security Center tells me what really changed. Of course, I need to review these changes that are affected. As I'm okay with this. I don't have any HTTP connections that I myself using. I can go ahead and click remediate. To summarize, Security Center alerted me
>
> **[3:07](https://www.linkedin.com/learning/azure-developer-associate-az-204-cert-prep-implement-azure-security/developing-solutions-for-azure-and-beyond?u=76281980&t=187)** that my app service was configured in an unsecured way. It was accessible over HTTP and HTTPS. I was able to identify which app service was infected by this. I was able to block HTTP access with just a couple of clicks. Beyond such recommendations and fixes, Security Center can also send us alerts [Real-Time](../../Skills/Database%20Management/Real-Time.md) when something malicious happens. For example, for Azure Storage accounts, we will get alerts when something malicious is happening in our environment. For example, our application access patterns have changed, somebody downloading an unusual amount of data or deleting an unusual amount of data, or when my application is being accessed from an unusual location. Thank you for joining me. I hope you are now more confident in securing your Azure environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (14), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** http (5), https (1)
> **Analogies:** for example (3)
> **CLI Commands:** az (1), find (1)
> **Tools:** azure portal (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Karl Ots](../../Instructors/Cloud%20Computing/Karl%20Ots.md)

## Path Context

### In [Advancing Your Azure Developer Skills- Exploring Complex Application Development](../../Paths/Cloud%20Computing/Learning%20Paths/Advancing%20Your%20Azure%20Developer%20Skills-%20Exploring%20Complex%20Application%20Development.md)
← [Azure Data Lake for Developers](Azure%20Data%20Lake%20for%20Developers.md) | **4 of 7** | [Developing Chatbots with Azure](Developing%20Chatbots%20with%20Azure.md) →

## Appears In

- [Advancing Your Azure Developer Skills- Exploring Complex Application Development](../../Paths/Cloud%20Computing/Learning%20Paths/Advancing%20Your%20Azure%20Developer%20Skills-%20Exploring%20Complex%20Application%20Development.md)

---

[↑ Back to top](#)