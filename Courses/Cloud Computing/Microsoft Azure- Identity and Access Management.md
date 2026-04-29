---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: microsoft-azure-identity-and-access-management-23388392
url: "https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392"
duration_minutes: 111
duration: 1h 51m
level: Intermediate
updated: 3/29/2024
learners: 15901
skills:
  - Identity and Access Management (IAM)
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEW0zDZcclBVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705617989142?e=2147483647&amp;v=beta&amp;t=SiKipwbn1dLsl8zMbOjUUNYbtdx7Vu1KDZMMsYxE0v4"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Identity and Access Management in Azure]]'
prev_courses:
  - '[[Microsoft Entra ID Fundamentals]]'
next_courses:
  - '[[Azure for Architects- Security and Identity Management with Microsoft Entra]]'
path_nav: '[{"path":"Identity and Access Management in Azure","position":2,"total":4,"prev":"Microsoft Entra ID Fundamentals","next":"Azure for Architects- Security and Identity Management with Microsoft Entra"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/identity-and-access-management-iam
  - skill/microsoft-azure
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Microsoft%20Azure-%20Identity%20and%20Access%20Management.md)

![Microsoft Azure: Identity and Access Management](https://media.licdn.com/dms/image/v2/D560DAQEW0zDZcclBVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705617989142?e=2147483647&amp;v=beta&amp;t=SiKipwbn1dLsl8zMbOjUUNYbtdx7Vu1KDZMMsYxE0v4)

# Microsoft Azure: Identity and Access Management

> Azure Identity and Access Management enables IT professionals and administrators to ensure the right entities can access the right resources with the right permissions. In this course, Microsoft Certified Cybersecurity Architect Expert Bryan Li delves into this essential topic. Find out how to manage various identities like users, groups, devices, and applications in Microsoft Entra ID. Go over ho

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392) | 1h 51m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Manage Identities]]** (12 videos)
- **[[#2. Manage Authentication]]** (6 videos)
- **[[#3. Manage Access to Resources]]** (5 videos)
- **[[#4. Perform Monitoring and Governance]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Discovering Azure identity and access management
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=0)** - Azure IAM is a cloud-based service that helps organizations centrally manage all identities and access across the cloud and on-premises.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=11)** I'm going to show you how to manage identities for users, groups, devices, and applications.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=18)** Reduce risk by implementing multi-factor authentication, passwordless signing, and conditional access.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=25)** And how to protect resources by performing role-based access control, privileged identity management, and access reviews.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=35)** I'm Bryan Li, and I worked in IT and software development for 20 plus years.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=40)** If you want to discover the power of Azure IAM, then join me in my LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Env Vars:** iam (2)
> **Definitions:** is a  (1)
> **Speakers:** - azure (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980&t=0)** - [Narrator] This course uses Azure to perform identity and access management.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980&t=5)** Before studying this course, you should have some fundamental knowledge about Microsoft Azure Cloud.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980&t=11)** Also, to follow hands-on demonstrations in this course, you need a Microsoft Entra ID P2 license, formerly Azure Active Directory P2 license, and an Azure subscription.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980&t=25)** You can sign up for a free trial if you don't have them.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### Identity and access management concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=0)** - [Instructor] Let's talk about some key concepts of Identity and Access Management or IAM.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=6)** The goal of IAM is controlling access.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=9)** Basically, it involves a subject and an object.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=13)** The subject wants to access the object, and we need to control access to ensure the right people have the right permissions to access the right resources.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=24)** There's a general framework for Identity and Access Management.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=28)** To access resources, we need identity, something identifies a subject, for example, username or object ID.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=38)** Authentication, a process to verify who you are using password or multifactor authentication.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=45)** Authorization, a process to check what resources you can access, and what kind of actions you can take.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=52)** Finally, you can access your resources.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=56)** In addition, we need an auditing process to track who did what and where and when.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=63)** Now you understand the basic concepts of Identity and Access Management.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=68)** We are ready to look at how Azure IAM works.

> [!info]- Semantic Content
>
> **Env Vars:** iam (3)
> **Code Keywords:** let (1), finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Manage Identities

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Microsoft Entra ID overview
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=0)** - [Instructor] Microsoft Entra ID, formerly Azure Active Directory, is a cloud-based identity and access management service.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=9)** Here's a great diagram from Microsoft that shows the role of Microsoft Entra ID.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=15)** I like to think of Microsoft Entra ID as a control center.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=19)** It provides identities for users, devices, and applications, and it connects services like Azure, Microsoft 365, and the numerous apps in the cloud or on-premises.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=34)** Let's look at the Microsoft Entra ID user interface on Azure Portal.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=39)** You will find a long list of functions like users, groups, devices, and identity governance.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=47)** You can click a link to see more details.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=52)** To help you learn Microsoft Entra ID functions, I will group them into four categories: management, security, governance, and monitoring.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=63)** For management, Microsoft Entra ID helps you manage users and groups, register devices and applications, manage external identities, enable hybrid identities through Microsoft Entra Connect, assign roles and administrators, create administrative units, manage product licenses, and configure company branding.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=89)** For security, Microsoft Entra ID provides a rich set of features like password reset, authentication methods, multifactor authentication, conditional access, identity protection, identity secure score, risk activities, and a security center.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=109)** For governance, Microsoft Entra ID enables functions like entitlement management, privileged identity management, access reviews, and the lifecycle workflows.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=122)** For monitoring, Microsoft Entra ID provides functions like usage and insights, sign-in logs, audit logs, and provisioning logs, log analytics, and workbooks.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=135)** Microsoft Entra ID provides an integrated IAM, Identity and Access Management solution.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=141)** It helps you manage and secure identities for employees, suppliers, and clients, and it enables seamless access to internal and external applications and data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), interface (1)
> **CLI Commands:** find (1)
> **Env Vars:** iam (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Entra ID license comparison
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=0)** - [Instructor] Microsoft Entra ID is a licensed product, so you'll get different features based on your license level.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=8)** Microsoft Entra ID has four additions, free, premium P1, premium P2, and the Governance.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=16)** The free edition is included when you subscribe to Microsoft online services like Azure and Microsoft 365.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=26)** The premium additions P1 and P2 add many enterprise level features for management, security and reports.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=34)** The Governance edition enhances identity governance capabilities for Microsoft Entra ID P1 and the P2.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=42)** Microsoft Entra ID Free Edition provides essential functions for identity and access management, like a user and a group management, single sign-on or SSO, multifactor authentication or MFA and a role-based access control or RBAC.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=63)** Microsoft Entra ID P1 includes all the features in the free edition, and it adds more enterprise level functions like advanced group management, conditional access, custom security attributes, and advanced security and usage reports.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=83)** Microsoft Entra ID P2 includes all the features in P1 and it adds functions like identity protection, entitlement management, access certifications and reviews, and privileged identity management or PIM.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=101)** Microsoft Entra ID Governance includes advanced identity governance functions like lifecycle workflows, identity governance dashboard, and entitlement management with Verified ID.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=115)** To get the detailed information on Microsoft Entra ID licenses, you can visit the Microsoft Entra plans and the pricing page.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=125)** Here, you can compare the features included in different Microsoft Entra ID editions.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=131)** What's your current Microsoft Entra ID license?
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=136)** On Azure Portal, you can find it on your Microsoft Entra ID overview page.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=141)** For example, my license is Microsoft Entra ID P2.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=146)** You can also check if a specific feature is available in your current license.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=153)** On your Microsoft Entra ID, click Licenses, then click Licensed Features.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=161)** We'll see a list of available features.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=167)** You can select a suitable Microsoft Entra ID license based on your organization's needs.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=173)** To learn or test some premium features available in P1 or P2, you can start with a free trial.

> [!info]- Semantic Content
>
> **Env Vars:** sso (1), mfa (1), rbac (1), pim (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Create users
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=0)** - [Instructor] It's simple to create users in Microsoft Entra ID.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=6)** Here's my Azure portal.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=8)** In the Resource menu, I can click Microsoft Entra ID.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=14)** Then click Users.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=17)** We will see a list of existing users.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=20)** Click New user from the command bar.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=23)** Here we have two options, Create new user or Invite external user.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=29)** Let's choose Create new user.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=33)** I will enter user principal name, for example, tracy.westbay.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=42)** Then select a domain name.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=45)** Here is a list of available domain names.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=49)** [Demosoc.com](https://Demosoc.com) is our primary domain.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=52)** Mydemosoc.[onmicrosoft.com](https://onmicrosoft.com) is the initial domain name created for our Azure tenant.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=60)** I will choose [demosoc.com](https://demosoc.com).
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=64)** Enter display name, Tracy Westbay.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=71)** I will let the system autogenerate the password.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=74)** To view the initial password, I can click the Show Password icon.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=80)** Click Next: Properties.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=84)** Enter first name and the last name, Tracy Westbay.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=91)** We can provide job information, for example, job title and the department.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=101)** Scroll down and I will select Usage location.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=106)** For example, Canada.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=111)** Click Next: Assignments.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=115)** Click Add group.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=118)** I can add this user to a group, for example, Group-Marketing.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=122)** Click Select.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=125)** Click Next: Review + create.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=129)** Then click Create.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=133)** After it's done, we can click Refresh.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=136)** It may take a few seconds, and we can click Refresh to see the new user.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=142)** Then click this user to see the details.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **URLs:** [demosoc.com](https://demosoc.com) (2), [onmicrosoft.com](https://onmicrosoft.com) (1)
> **Code Keywords:** let (2)
> **Tools:** azure portal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Manage users
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=0)** - [Instructor] Let's look at managing users in Microsoft Entra ID.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=5)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=9)** Click Users, we can see a list of current users.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=16)** We can click Manage view, then click Edit columns.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=21)** Let's add some columns.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=23)** For example, Job title and Department.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=31)** Click Save, now we can see the job title and the department information in the user list.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=42)** Let's select a user, for example, Tracy Westbay.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=47)** On the overview page, I can see the basic information like a user principle name, user type, groups, applications, assigned roles and the licenses.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=60)** Click Monitoring, I can view the user sign in activities.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=66)** Click Properties, I have a list of properties.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=71)** I can click Edit properties.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=74)** I can edit properties for identity, job information, contact information and settings.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=83)** Let's click Job Information.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=85)** For example, let's add employee ID.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=90)** And we can add a manager.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=94)** For example, Jerome, click Select, click Save.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=102)** We can find more user management functions in the left menu.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=107)** Click assigned roles to manage role assignments for Microsoft Entra.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=114)** Click add assignments.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=116)** Then we can select a role.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=119)** For example, Guest Inviter.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=126)** Click Next, for the assignment type, let's select Active.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=133)** Enter justification, For Demo, click Assign.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=141)** Click refresh to see the new role.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=145)** We can click Azure role assignments to view assigned roles for Azure resources.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=151)** For example, this user has a reader role in the rg-demo resource group.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=158)** Click Administrative units.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=162)** We can assign or remove from an administrative unit.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=167)** Click Groups to add or remove memberships.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=172)** We can click Add memberships and select Group-Sales.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=178)** Click Select, click Refresh to see the latest memberships.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=186)** Click Applications to view application assignments.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=190)** Click Licenses to manage licenses, click Assignments, then select Microsoft 365 Business Standard.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=202)** Review the license options and click Save.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=211)** Click Refresh, click Devices to manage the registered devices for this user, click Authentication methods.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=223)** We can add an authentication method.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=225)** Click Add authentication method.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=229)** Then choose email.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=232)** Enter the email address, click Add.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=239)** We can click Reset password to generate a temporary password for the user to sign in.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=247)** We can also require re-register multifactor authentication.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=252)** Now you should know the main functions to manage users in Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type, (2), require (1)
> **Analogies:** for example (6)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Manage and invite external users
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=0)** - [Instructor] In a business, you need to collaborate with many external people, like contractors and partners.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=7)** You can use Microsoft Entra ID to manage external identities.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=12)** First, let's set up how you want to collaborate with them.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=17)** On my Microsoft Entra ID on Azure Portal, click External Identities, then click Set Up External Collaboration Settings.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=29)** I can set up a guest user access restrictions.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=33)** For example, guest users have limited access to properties and memberships of directory objects.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=41)** I can configure guest invite restrictions.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=45)** Here, we select Only Users Assigned to Specific Admin Roles Can Invite Guest Users.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=52)** I can enable or disable guest self-service signup.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=57)** I can also configure external user leave settings.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=61)** Here, I'll allow external users to remove themselves from my organization.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=67)** For the collaboration restrictions, I can allow invitations to be sent to any domains, or if you want to restrict, for example, some personal email address, I can click Deny Invitations to the Specific Domains.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=83)** For example, I can set up [hotmail.com](https://hotmail.com) or [gmail.com](https://gmail.com),
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=95)** so these target domains will be denied for invitation.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=102)** After it's done, I can click Save, then click All Identity Providers, click Email One-Time Passcode, and we select Email One-Time Passcode as Yes.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=119)** This is useful when your guests don't already have a Microsoft Entra or Microsoft account.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=125)** You can just email them a one-time passcode for sign in.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=131)** Now, let's invite an external user.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=135)** Go back to my Microsoft Entra ID, click Users, and click New User.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=142)** Here, I will select Invite External User, enter email address, and enter a display name.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=153)** For example, Guestspeaker Jane.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=158)** Enter message, I'd like to invite you to join as a speaker.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=169)** Click Review + Invite.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=173)** Click Invite.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=178)** Click Refresh to see the new guest user.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=182)** Click this guest user, Guestspeaker Jane, and click Properties.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=191)** We can see the user type is Guest, creation type is Invitation, and the invitation state currently is Pending Acceptance.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=202)** Now, let's turn into our guest user.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=205)** Let's check the email.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=207)** In the email, I can click Accept Invitation, and click Send Code.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=214)** Go back to the email to get the verification code.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=220)** Paste here, click Sign In.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=224)** Click Accept.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=228)** Now, let's go back to our Microsoft Entra ID.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=233)** Under the properties of our guest user, click Refresh.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=239)** The invitation state changed to Accepted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (1)
> **Prerequisites:** set up (4), configure (2)
> **Analogies:** for example (4)
> **Cross-References:** go back to (3)
> **URLs:** [hotmail.com](https://hotmail.com) (1), [gmail.com](https://gmail.com) (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Perform bulk user operations
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=0)** - [Instructor] In a corporate environment, you may need to add, invite, or delete hundreds of users in a day.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=7)** Let me show you how to use the bulk operations in Microsoft Entra ID to complete this task quickly.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=15)** Here's my Microsoft Entra ID on Azure Portal.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=18)** Click Users, then click Bulk operations.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=25)** We have options like Bulk create, Bulk invite, and Bulk delete.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=31)** Click Bulk create.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=34)** We can first download a CSV template.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=40)** Open it.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=42)** Here you can enter or copy and paste the user information.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=47)** Notice the columns, Name or displayName, User name or userPrincipalName, Initial password, and Block sign in are required fields.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=58)** And the template provides a sample entry.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=62)** Now let's add some user information for testing.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=68)** We can then save the template file.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=71)** Back to Microsoft Entra ID, upload your CSV file.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=82)** Then click Submit.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=85)** You can view the status of each operation.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=90)** Once it's done, click Refresh.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=92)** You will find the bulk created users.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=97)** Bulk invite is similar to Bulk create, but it's for inviting external guests.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=104)** First, let's download a CSV template.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=108)** Then open the template file.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=112)** Here you can provide email address to invite redirection URL after accepting the invitation.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=119)** Send the invitation message and customize the invitation message.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=127)** And the template provides a sample entry.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=130)** Now let's add some guest information for testing.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=136)** Then save the CSV file.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=140)** Back to Microsoft Entra ID, upload your CSV file.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=148)** Then click Submit.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=150)** You can view the status of each operation.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=156)** After it's done, click Refresh.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=160)** You will find the bulk invited guests.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=164)** We can use Bulk delete to quickly remove users and guests from Microsoft Entra ID.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=170)** First let's download a CSV template.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=174)** Open the template.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=176)** Here we just need to provide a username, which is the userPrincipalName.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=182)** And the template provides a sample entry.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=185)** Now let's enter the usernames of our test users and guests.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=191)** Notice the format of userPrincipalName is different between users and guests.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=197)** The username for a guest include a text, #EXT#.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=203)** Let's save the template file.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=207)** Back to Microsoft Entra ID, upload your CSV file.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=215)** Type Yes to confirm the delete operation, then click Submit.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=222)** You can view the status of each operation.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=226)** Once finished, I can click Refresh.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=230)** You will see all test users and guests have been deleted from Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (4)
> **Exercise Files:** template (10)
> **Env Vars:** csv (7), url (1), ext (1)
> **Code Identifiers:** userprincipalname (3), displayname (1)
> **CLI Commands:** find (2)
> **UI Navigation:** open the (2)
> **Tools:** azure portal (1)
> **Analogies:** similar to (1)

#### Create groups
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=0)** - [Instructor] Let's look at creating groups in Microsoft Entra ID.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=6)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=9)** Click Groups, we can see a list of existing groups.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=15)** Click New group on the command bar.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=18)** First we need to select a group type.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=22)** We have two options here: Security or Microsoft 365.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=29)** You can click the information icon to learn the difference.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=32)** Basically, security groups gave members access to applications, resources, and the licenses.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=39)** Microsoft 365 groups, originally called Office 365 groups, give members access to shared mailbox, cutting the files and the SharePoint site.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=51)** In addition, security groups can have members like users, devices, service principles, and other groups.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=58)** Microsoft 365 groups can only have users.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=62)** We select Security here.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=66)** Then enter a group name, for example, Group-Finance.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=72)** You may also add a group description.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=77)** You can decide if Microsoft Entra roles can be assigned to the group.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=82)** You need a Microsoft Entra ID P1 or P2 licenses to see this feature.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=87)** Basically, you can assign roles to a group instead of each individual person.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=92)** Basically, you can assign roles to a group instead of each person individually, so administrators can save lots of time and effort.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=102)** We leave the default value here.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=105)** We can select membership type.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=108)** If you have a Microsoft Entra ID P1 or P2 license the options are Assigned, Dynamic User, and Dynamic Device.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=118)** Assigned means we need to assign members manually.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=122)** Dynamic means the system will manage members automatically based on some defined rules.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=128)** We select Assigned here.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=132)** You can select group owner, for example, Jerome.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=137)** Click Select.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=140)** You can select group members.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=143)** It gives you a list of users, groups, devices, and enterprise applications.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=152)** Let's choose Peyton here.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=157)** Now we can create this group and we can click refresh to see the new group.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=166)** Next, let's create a dynamic group.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=169)** You need a Microsoft Entra ID premium license to use this feature.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=175)** Click New group.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=177)** For the group name, I can type Group-Customer-Success.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=183)** Select membership type as Dynamic User.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=188)** Now let's add a dynamic query to define the membership rules.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=194)** For this customer success group we want to have anyone from the marketing and the sales departments join it automatically.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=203)** Let's use the rule builder to create a single rule.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=206)** Under the Property, select department.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=211)** On the Operator, select Equals.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=214)** For the Value, enter Marketing.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=219)** Click Add expression.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=222)** Again, under Property select department, equals, enter Sales.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=232)** Because we need users from marketing or sales departments we select the logic operation as Or.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=243)** The system will generate a rule syntax based on your configuration.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=248)** You can also click Edit to edit rule syntax directly.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=255)** Let's save our rules.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=257)** Now we can create this dynamic group.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=262)** It may take a while to finish the setup.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=267)** Once it's done, let's view the group members.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=275)** We can see users from marketing and the sales departments have been added to this dynamic group automatically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type. (2)
> **Analogies:** for example (2)
> **Tools:** azure portal (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Manage groups
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=0)** - [Instructor] Let's look at managing groups in Microsoft Entra ID.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=4)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=8)** Click Groups.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=10)** I can see a list of existing groups.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=14)** Select Group Finance.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=17)** On the Overview page, we can see membership type as assigned, group type as a security, and a group memberships.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=29)** Click Properties.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=32)** Here we can update group name, group description.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=36)** We can't change group type, but we can change membership type from assigned, for example, to dynamic user.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=45)** Then you need to add a dynamic query.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=51)** We can select group write back state.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=54)** This is for thinking with your on-premises active directory.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=58)** Once you enable Microsoft Entra Connect.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=62)** Under Members, we can add members.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=67)** Here's a list of users, groups, devices, and enterprise applications.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=74)** You can search and select a member.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=78)** You can also do bulk operations to import, remove, or download members.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=84)** For example, click Import Members.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=87)** We can download a CSV template, fill in membership object ID or user principle name.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=98)** Then we can upload the CSV file, then click Submit.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=104)** You can add group owners.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=111)** We'll cover roles and administrative units later in the chapter.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=117)** For group memberships, I can add memberships.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=122)** For example, we can add the group finance to the group corporate.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=127)** Click Select.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=129)** Click Refresh to see the new group.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=133)** Click Group Corporate.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=136)** Click Members.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=140)** You can see group finance is already a member.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=144)** Back to group finance.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=147)** Click Licenses.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=150)** You can assign available licenses to all group members instead of doing it individually.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=159)** Click Azure Role Assignments.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=162)** You can view group roles for Azure resources like subscriptions.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=168)** We'll talk about privileged identity management and access reviews later.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=174)** On the audit logs, you can track group activity and status.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=182)** Now you should know the main functions to manage groups in Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), type, (1), import, (1)
> **Analogies:** for example (3)
> **Env Vars:** csv (2)
> **Cross-References:** later in (1)
> **Tools:** azure portal (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Manage devices
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=0)** - [Instructor] Let's talk about managing devices in Microsoft Entra ID.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=5)** Microsoft Entra ID can manage identities for not only users and groups but also applications and device To get a device identity in Microsoft Entra ID, we have three options, Microsoft Entra registration, Microsoft Entra join, and a Microsoft Entra hybrid join.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=30)** Let's quickly compare the three different methods.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=34)** For device ownership, Microsoft Entra Registration supports bring your own devices, Microsoft Entra join and hybrid join manage organization-owned devices.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=48)** For operating systems.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=50)** Microsoft Entra Registration supports Windows 10 or newer, iOS, Android, macOS, and Ubuntu.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=58)** Microsoft Entra join and hybrid join only support Windows.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=63)** Hybrid join can support down level Windows versions, like Windows 8.1 and the Windows Server 2008.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=71)** For directory location, Microsoft Entra Registration and join use the cloud-based Microsoft Entra ID.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=80)** Microsoft Entra hybrid join uses on-premises Active Directory and a Microsoft Entra ID.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=88)** For sign-in accounts, Microsoft Entra Registration can use local user account.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=94)** Microsoft Entra join and the hybrid join use organizational account.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=100)** For resource access, Microsoft Enter Registration can single sign-on, or SSO, to cloud resources.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=108)** Microsoft Entra join and the hybrid join can also access on-premises resources.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=114)** For device management, Microsoft Entra Registration and join usually use mobile device management solutions, like Microsoft Intune.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=124)** Microsoft Entra hybrid Join usually uses group policy.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=130)** How do we enroll a Windows device to Microsoft Entra ID?
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=134)** You can visit Access work or school in System Settings.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=139)** Then click Connect to add a work or school account.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=144)** For Microsoft Entra Registration.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=146)** you can enter the assigned email address, then click Next.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=151)** Or if you want to do Microsoft Entra join, you can click Join this device to Microsoft Entra ID, formerly Azure Active Directory.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=162)** Now let's go to Microsoft Entra ID on Azure portal.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=167)** Click Devices and click All devices.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=173)** We can see two Windows devices here.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=176)** The join type for the first one is Microsoft Entra registered, and the second one is Microsoft Entra joined.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=185)** We can enable, disable or delete devices.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=190)** We can click a device.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=193)** Then see the Device ID and Object ID.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=197)** If this device is enrolled by a mobile device management, or MDM, solution like Microsoft Intune, we can click Manage to manage this device.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=211)** Click Device settings.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=214)** We can set up who may join devices to Microsoft Entra who may register their devices with Microsoft Entra.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=225)** Do we require multifactor authentication to register or join devices?
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=231)** And the maximum number of devices a user can register or join.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (1), require (1)
> **Code Identifiers:** ios (1), macos (1)
> **Env Vars:** sso (1), mdm (1)
> **Versions:** 8.1 (1)
> **Tools:** azure portal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Manage applications
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=0)** - [Instructor] Let's look at managing applications in Microsoft Entra ID.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=6)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=9)** Click enterprise applications.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=14)** We can see a list of registered applications in my demo organization.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=19)** Let's add a new application.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=22)** I can search applications using Microsoft Entra ID App Gallery.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=27)** For example, let's search Slack.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=33)** We can see some app information, like a publisher, single sign-on mode, and the URL.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=40)** Click create.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=43)** After it's done, we can see the application ID and object ID.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=48)** The object ID is the unique ID of the service principle object, so we can use it in Power Shell to perform management operations.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=60)** Go back to all applications, click Refresh.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=68)** We can see Slack showing on the list.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=73)** For developers, they can also register their applications in Microsoft Entra ID.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=79)** To do that, we can click app registrations, then click new registrations.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=87)** Enter the app name, for example, My Demo App.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=93)** We can select who can use this application or access this API.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=98)** For this demo, I will just choose accounts in this organization directory only.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=105)** I can select the app platform.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=108)** For example, web and enter redirect URL, click register.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=117)** After it's done, I can see the application ID and the object ID.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=122)** For developers, they can continue to set up authentication, certificates, and secrets and API permissions.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=133)** But for the initial app registration, our job is done.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=138)** Now, go back to enterprise applications.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=142)** I can see My Demo App is showing on the list.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=146)** We can add users and groups to our apps.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=150)** For example, click My Demo App, click users and groups, then add user and group.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=160)** We can select, for example, group IT, keep the role as a default access, then click assign, click group IT, then click members.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=178)** We can select a member, for example, Harry, then click applications.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=186)** We can see Harry has the access to My Demo App.

> [!info]- Semantic Content
>
> **Analogies:** for example (6)
> **Code Keywords:** let (3), continue (1)
> **Env Vars:** url (2), api (2)
> **Tools:** slack (2), azure portal (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Manage hybrid identities
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=0)** - [Instructor] Let's talk about managing hybrid identities in Microsoft Entra ID.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=6)** Hybrid identities refers to users both in the cloud and on-premises.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=11)** In our case, we have users in cloud-based Microsoft Entra ID, and on-premises Active Directory.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=19)** The challenge is how to sync your users at different locations so you can provide them with single sign-on capabilities.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=28)** Microsoft uses Microsoft Entra Connect, formally Azure AD Connect.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=34)** It acts as a bridge between your Microsoft Entra ID and on-premises Active Directory, so we can do tasks like identity sync, and a directory query between the cloud and on-premises.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=49)** How can we authenticate hybrid identities?
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=53)** There are three common methods, password hash synchronization, pass-through authentication, and federation.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=62)** The first two use Microsoft Entra ID for authentication.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=66)** The third one uses a separate trusted authentication system, like on-premises Active Directory Federation Services, or ADFS.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=77)** Let me give you a high level idea about these three methods.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=82)** For password hash synchronization, we have the hash value of user passwords synced between the cloud-based Microsoft Entra ID and the local Active Directory, so users can simply sign in to Microsoft Entra ID with the same username and a password that they use on premises.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=104)** For pass-through authentication, Microsoft Entra ID doesn't store the hash value of on-premises user passwords.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=112)** While users sign to Microsoft Entra ID, it will forward the password validation to your on-premises Active Directory.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=123)** For federation, we use a separate federation service to do the user authentication.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=129)** When users sign in to Microsoft Entra ID, it will delegate the validation process to a trusted federation service, like ADFS.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=140)** How do you choose your authentication method?
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=143)** It depends on your organization's requirements.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=146)** For example, do you allow password hashes stored in the cloud?
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=151)** If the answer is no, you can't use the method, password hash synchronization.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=157)** Does Microsoft Entra ID support your specific sign-in requirements?
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=163)** If you need to use on-premises multifactor authentication for your users, Microsoft Entra ID doesn't support it, so you can only use a federation service, like ADFS.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=176)** In the end, let me quickly show you Microsoft Entra Connect, formally Azure AD Connect.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=183)** Here's my Microsoft Entra ID on Azure Portal.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=188)** Click Microsoft Entra Connect.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=191)** You can use either Cloud Sync or Connect Sync.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=195)** Let's click Connect Sync.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=198)** You can download Microsoft Entra Connect.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=201)** After installation, it will integrate your on-premises directories with Microsoft Entra ID.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=209)** You can also configure the user sign-in methods here.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=213)** For example, federation, seamless single sign-on, or pass-through authentication.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (3), case, (1)
> **Env Vars:** adfs (3)
> **Analogies:** for example (2)
> **Tools:** azure portal (1)
> **Definitions:** refers to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Manage Azure administrative units
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=0)** - [Instructor] Let's look at administrative units in Microsoft Entra ID.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=5)** Why do we need administrative units?
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=8)** It's for delegating your administrative tasks to selected people in defined business units.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=15)** For example, a large global organization has the offices in US, Canada, UK, and Singapore.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=23)** It's challenging for administrators at the headquarter to look after all the operating requests, so we can create administrative units for these four regions, then dedicate some work to regional administrators.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=39)** What can we do with administrative units in Microsoft Entra ID?
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=44)** We can configure roles and administrators, and we can manage users, groups, and devices.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=53)** Let's do a quick demo for administrative units.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=57)** Here's my Microsoft Entra ID on Azure portal.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=60)** Click Administrative Units.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=64)** Let's add a new one. Click Add.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=68)** Give it a name, Canada Office.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=72)** Then click Next: Assign Roles.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=75)** We have a list of building administrative roles like authentication administrator, password administrator, and user administrator.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=86)** You can read the descriptions to learn their permissions.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=90)** Let's assign a role to regional members.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=93)** Select User Administrator.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=96)** Select, for example, Henry.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=99)** Click Add.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=101)** We can see one member already assigned to the user administrator role.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=107)** Click Next: Review plus Create.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=111)** Then click Create.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=114)** We can see the Canada Office has been added.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=118)** Now let's go into this administrative unit, Canada Office.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=123)** I can click users and add member.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=126)** For example, Dustin and Peyton.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=130)** Click Select.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=133)** I can add groups.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=135)** Click Add.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=137)** I can select Group Toronto and Group Vancouver.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=142)** Click Select.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=144)** Click Refresh.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=146)** I can see these two groups have been added.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=150)** I can click Devices to add a device.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=156)** For example, WIN-AZURE-JOIN.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=159)** I can also click Properties to view the membership types.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=164)** The current type is Assigned.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=167)** We can also use Dynamic User or Dynamic Device to assign membership automatically.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=173)** To do that, I need to add a dynamic query.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=177)** For example, if a user's country equals Canada, then this user will be added to the administrative unit for Canada automatically.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=191)** Click Save.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=194)** Notice, if I change the administrative type from assigned to dynamic, the existing membership may change.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=202)** For the demo, I will click Yes to continue.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=207)** Now the membership type for this administrative unit changes to dynamic user.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=214)** After it takes effect, click Users.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=218)** Click Refresh.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=220)** We can see the users in Canada have been added to this administrative unit automatically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), continue (1)
> **Analogies:** for example (5)
> **Env Vars:** win (1), azure (1), join (1)
> **SQL:** join (1)
> **Tools:** azure portal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 2. Manage Authentication

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Manage authentication methods
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=0)** - [Instructor] Microsoft Entra ID supports many authentication methods.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=4)** Before we look into them, let's go back to the basic concept of authentication.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=10)** What is authentication?
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=13)** It's about verifying credentials.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=15)** When a user sign in to a device or application, the user needs to present an identity like a username.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=24)** Then the verification process will use the available methods like a password or multifactor authentication, to prove the identity or reject it.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=36)** You can use many authentication methods in Microsoft Entra ID.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=40)** In general, we can group them into three categories, password, password plus something, and passwordless.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=51)** Password has been the most common authentication method for a long time, but it has some big problems.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=58)** For example, password strength.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=61)** Simple passwords like a password1 or test123 are very easy to be cracked by hackers.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=69)** Password management.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=71)** Complex and long passwords are very difficult to remember and enter, not to mention you need to change them every 60 or 90 days based on your password policy.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=83)** Password reuse.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=85)** People often use the same password for many different services like email, social media, and online shopping.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=92)** If hackers break into one service, they may use compromised passwords to sign in to many other systems.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=100)** Because password alone is not enough to protect identities, the industry is moving to multifactor authentication.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=108)** Basically, you need to provide a password plus something else, like something you have or something you are.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=116)** In the early implementation, the good methods are SMS, like getting a text message on your mobile phone, voice, like you're receiving a phone call.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=127)** But now you have some better ways like authenticator app to receive a push notification, OATH hardware tokens that refresh codes every 60 or 90 seconds.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=139)** OATH software tokens that can be installed on your mobile phone.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=145)** The best solution to password problems is not using password at all.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=150)** That's called passwordless.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=153)** We can use the authentication methods like authenticator app to enable phone sign in.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=159)** FIDO2 security key.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=161)** It's like a USB key protected by fingerprints or pings.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=166)** Certificate-based authentication.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=170)** Windows Hello, the building authentication methods on devices using biometrics like a facial detection and a fingerprints.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=180)** Now you know the evolution of the authentication methods.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=184)** Using password alone is bad.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=186)** The good or better way is to use password plus something.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=190)** The best way is passwordless.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=194)** Let's look at how Microsoft Entra ID supports multiple authentication methods.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=200)** Here's my Microsoft Entra ID on Azure Portal.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=203)** Click security, then click authentication methods.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=210)** We have a list of available authentication methods like a FIDO2 security key, Microsoft Authenticator, SMS, and a certificate-based authentication.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=222)** You can configure the policy for an authentication method.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=226)** For example, click Microsoft Authenticator.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=230)** I can enable or disable it, include all users or select groups.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=236)** I can further configure the Microsoft Authenticator app, for example, require number matching for push notifications, or show geo location in push and passwordless notifications.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=251)** After it's done, I can click save.

> [!info]- Semantic Content
>
> **Env Vars:** sms (2), oath (2), fido2 (2), usb (1)
> **Code Keywords:** let (2), else, (1), protected (1), require (1)
> **Analogies:** for example (3), it's like (1)
> **Prerequisites:** configure (2)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Configure self-service password reset
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=0)** - [Instructor] A help desk may spend lots of time resetting user passwords in a large organization.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=6)** The good news is, Microsoft Enter ID supports a self-service password reset so users can change their passwords without involving the help desk.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=17)** Let's see how it works.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=20)** Here's my Microsoft Enter ID on Azure portal.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=25)** In the left menu, click Password Reset.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=31)** We can apply it to the selected group or to all users.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=36)** Please note these settings only apply to end users.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=39)** The means are always enabled for self-service password reset.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=45)** Next, let's configure authentication methods.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=50)** We can select if we require one-step verification or two-step verification.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=55)** Then choose authentication methods available to users.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=59)** For example, email and the mobile phone.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=63)** After you finish, you can click Save.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=67)** We can set up notifications.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=70)** We can notify users on password resets and notify all admins When other admins reset their password.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=78)** we can click Customization to customize help desk URL.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=84)** For example, this is the URL for my demo support page.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=89)** If we have an on-premises integration, we can perform password right back to on-premises active directory.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=97)** You need to install a sync agent before using it.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=102)** After finishing configuration, let's test a self-service password reset as a user.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=110)** Go to users, then select a user.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=114)** For example, Tracy Westbay.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=118)** We can copy the user principle name.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=123)** Open the browser in private mode so the existing credentials won't affect the signing event.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=131)** Enter the URL portal.[azure.com](https://azure.com).
>
> **[2:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=136)** Paste the username.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=137)** Click Next.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=139)** On the password page let's click, Forgot my password.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=144)** Enter the characters in the picture for fraud protection.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=149)** Click Next.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=151)** Select the verification method, email, and Tracy will receive a verification code via email.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=161)** We can enter the received verification code, then click Next.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=167)** We can now enter a new password.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=170)** Confirm new password.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=173)** Click Finish.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=175)** Your password has been reset successfully.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=179)** We'll also receive a notification email for the password reset.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), self (3), require (1), private (1)
> **Analogies:** for example (3), picture (1)
> **Env Vars:** url (3)
> **UI Navigation:** go to (1), open the (1), select the (1)
> **Prerequisites:** configure (1), set up (1), install (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Implement multifactor authentication (MFA)
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=0)** - [Instructor] Let's look at implementing multifactor authentication, or MFA, in Microsoft Entra ID.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=7)** What is multifactor authentication?
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=10)** A factor here means a way to verify your identity.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=14)** We have three common kinds of factors.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=17)** Something you know, like your password, ping, or security questions; something you have, like your mobile phone, email, hardware tokens; and something you are, like your fingerprints, voice, facial recognition.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=32)** So multifactor authentication means using two or more different kinds of factors to verify your identity.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=41)** For example, we can use password plus text message to your phone, password plus push notification to your mobile app.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=51)** But using password plus security questions doesn't meet the requirement of MFA because they are from the same factor type, something you know.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=62)** You should use authentication methods from different kinds of factors in MFA.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=68)** In Microsoft Entra ID, we have three common ways to enforce multifactor authentication.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=74)** Security defaults.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=76)** You can enable them to require all users to register for MFA.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=81)** Per-user MFA.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=83)** You can enable MFA for selected users.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=87)** And conditional access.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=89)** You can create conditional access policies to require MFA.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=93)** This is a recommended approach, but you need a Microsoft Entra ID Premium P1 license to use it.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=102)** Let's do a demo of multifactor authentication.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=105)** Here's my Microsoft Entra ID on Azure Portal.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=109)** Click Security, then click Multifactor authentication.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=116)** Click Configure, Additional cloud-based multifactor authentication settings.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=122)** You can see the service settings like trusted IPs, so you don't need MFA if requests are from these IP addresses.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=132)** Verification options like text message to phone, notification through mobile app.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=140)** Allow users to remember multifactor authentication on trusted devices and for how long.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=147)** After it's done, you can click Save.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=151)** Go back to my Microsoft Entra ID.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=155)** I can enable the security defaults to require all users to register for MFA.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=160)** In the left menu, click Properties, then click Manage security defaults.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=169)** I can enable or disable security defaults.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=174)** I can also require an MFA for selected users.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=179)** Click Users, then click Per-user MFA.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=187)** You can enable or disable and enforce MFA for selected users.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=197)** Go back to Microsoft Entra ID.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=199)** If you have Microsoft Entra ID Premium license, like a P1 and a P2, you are recommended to use conditional access to enforce MFA.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=209)** In the left menu, click Security, then click Conditional access.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=216)** Click Create new policy.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=219)** Click Users.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=220)** You can include all users.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=223)** Under the Access control, click Grant.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=228)** Under Grant access, click Require multifactor authentication, then click Select.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=236)** Now, you should know the three ways to enforce multifactor authentication in Microsoft Entra ID: security defaults, per-user MFA, and conditional access, which is recommended.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=248)** If you use conditional access, I recommend you now to use security defaults and per-user MFA at the same time to avoid confusion.

> [!info]- Semantic Content
>
> **Env Vars:** mfa (15)
> **Code Keywords:** require (5), let (2), type, (1)
> **Best Practices:** recommended (3)
> **Cross-References:** go back to (2)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### Implement passwordless authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=0)** - [Instructor] Let's look at implementing passwordless authentication in Microsoft Entra ID.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=7)** We have talked about the evolution of authentication methods.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=11)** In terms of security, usability, and availability, the best solution today is passwordless.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=19)** In this demo, we will use Microsoft Authenticator to sign into Azure without a password.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=26)** Microsoft Authenticator is a free mobile app.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=29)** You can download it from App Store or Google Play.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=32)** Once configured, we can enable the phone sign-in function in Microsoft Authenticator.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=39)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=42)** First, we need to enable Microsoft Authenticator for users.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=47)** In the left menu, click security.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=52)** Then click authentication methods.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=55)** Under the policies, click Microsoft Authenticator.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=60)** You can enable it for all users or select groups.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=64)** Here I select all users.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=70)** Next, let's select a demo user.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=75)** Click users.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=77)** Select, for example, Tracy Westbay.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=83)** Copy user principal name.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=85)** Open the browser in the private mode.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=89)** Sign into portal.[azure.com](https://azure.com).
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=93)** Paste the username and click next.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=97)** Enter the password, click sign in.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=103)** Now we will start to set up the authenticator.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=107)** Click next.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=112)** You need to download the Microsoft Authenticator app and install it on your phone.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=117)** Here I already have my authenticator installed on my iPhone.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=122)** Click next.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=125)** You will set up your account on this app.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=130)** You can use the app to scan the QR code.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=134)** Tap add account, then tap work or school account.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=140)** Then tap scan QR code.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=146)** After it's done, we can click next.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=150)** You will receive a notification in the app.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=153)** Enter the matching number, tap yes.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=159)** Once the notification is approved, click next.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=164)** We have successfully set up Microsoft Authenticator.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=168)** Click done.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=170)** By default, we can use Microsoft Authenticator to complete a multifactor authentication.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=177)** We will use this test user, Tracy Westbay.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=181)** Open the browser in the private mode.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=184)** Then sign into portal.[azure.com](https://azure.com).
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=190)** Click next, enter password, click sign in.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=197)** It sent a push notification to Authenticator to approve sign in.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=202)** I will enter the matching number and tap yes.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=209)** We have successfully signed in.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=215)** Now let's take one step further to enable passwordless sign in.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=220)** Open Authenticator app on my smartphone.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=225)** Tap the user, then tap enable phone sign in.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=231)** I need to register this device, my phone in Microsoft Entra ID.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=236)** It's a simple step.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=237)** I just need to tap continue, then enter the password and tap sign in.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=250)** Enter the matching number, tap yes.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=256)** Then tap register.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=260)** My phone is registered.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=262)** Enter the account again.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=265)** I can see passwordless sign-in has been enabled.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=271)** Finally, let's do a passwordless sign in to Azure.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=275)** Open a browser in private mode.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=278)** Sign in to portal.[azure.com](https://azure.com).
>
> **[4:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=282)** Enter the username, click next.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=285)** On the password page, we can use an app instead.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=290)** Click it.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=292)** We will approve the sign in request.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=296)** It will show a simple number.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=299)** On our authenticator app, we will enter the same number.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=303)** Tap yes.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=309)** I have signed in successfully without a password.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), private (3), function (1), default, (1), continue (1)
> **Prerequisites:** set up (3), install (1)
> **URLs:** [azure.com](https://azure.com) (3)
> **UI Navigation:** open the (2)
> **Code Identifiers:** iphone (1)
> **Tools:** azure portal (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### Implement identity protection
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=0)** - [Instructor] Let's talk about implementing Identity Protection in Microsoft Entra ID.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=7)** Identity security is critical to today's organizations.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=11)** With the acceleration of cloud computing, traditional network based controls like firewalls are not enough to protect our applications and data.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=21)** The industry is now moving to identity centric security models like zero trust.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=29)** The core of identity security is managing identity risk.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=33)** There are two basic risk types, user risk and sign-in risk.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=40)** User risk is related to user accounts.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=43)** For example, leak the credentials like usernames and a password posted on dark web.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=50)** Sign-in risk is related to authentication requests.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=54)** For example, someone tried to log in from a different country or from a malware-linked IP address.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=62)** You can use Microsoft Entra Identity Protection, a premium feature provided by Microsoft to manage your identity risk.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=71)** Here's how it works.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=73)** Microsoft leverages its big data and threat intelligence to detect identity risk, including user risk and sign-in risk.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=83)** It also gives the risk level as high, medium, and low.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=88)** The risk detection data is fed to Identity Protection.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=93)** Protect identities by creating risk policies, investigate risk reports, and notify admins with alerts and a weekly digest.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=105)** To fully use Identity Protection, you need a Microsoft Entra ID Premium P2 license.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=113)** Now let's do a quick demo of Identity Protection.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=117)** Here's my Microsoft Entra ID on Azure portal.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=120)** In the left menu, click Security.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=124)** Then click Identity Protection.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=128)** On the overview page, you can see a dashboard for new risky user detected and new risky sign-ins detected.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=138)** Also, it gives you current identity secure score.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=142)** You can click it to learn more.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=146)** Back to Identity Protection.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=148)** Under Protect, you can configure user risk policy, sign-in risk policy, and a multifactor authentication registration policy.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=161)** For example, let me click User Risk Policy to configure it.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=166)** For all users, based on their user risk, I can select medium and above, then click down.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=174)** And for access control, I can either block access or allow access but require password change.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=184)** Click done.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=186)** Turn on the policy, then click save.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=190)** Please note, Microsoft recommends migrating user risk policy to conditional access for more conditions and controls.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=202)** I can view risk reports for risky users, risky workload identities, risky sign-ins, and risk detections.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=214)** For example, I can click risky users, then change the risk level, include low, click apply.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=225)** I can investigate the risk.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=228)** After it's done, I can confirm user compromised or dismiss user risk.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=234)** Finally, for notifications, I can set up alerts or weekly digest.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1), finally, (1)
> **Analogies:** for example (4)
> **Prerequisites:** configure (2), set up (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Implement conditional access
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=0)** - [Instructor] Let's look at implementing conditional access in Microsoft Entra ID.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=6)** The core of conditional access is organizational policies.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=11)** For example, here are some common policies: Require MFA for all users, require password change for high-risk users, and block access for unsupported device platform.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=28)** In a nutshell, policies are like if-then statements.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=32)** If meeting a condition, then making a decision.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=37)** Now let's talk about conditional access.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=40)** What is conditional access?
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=42)** It brings signals together, makes decisions, and enforces organizational policies.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=51)** Here's a diagram from Microsoft, which describes the process of conditional access.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=57)** First, it collects all kinds of signals about users and their locations, applications, devices, and risks.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=67)** Then it verifies every access attempt to make a policy decision, like allow access or require MFA.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=76)** Finally, it grants or blocks access to apps and data.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=82)** Because conditional access may impact business operations, you should test your policies before enforcing them.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=90)** Here are two ways to do it.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=93)** Create a report-only policy so it will report evaluation result only rather than execute the policy or use what-if tool to evaluate your result.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=105)** I will cover both of them in the demo later.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=110)** To use conditional access, you need a Microsoft Entra ID P1 license.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=115)** If you want to create risk-based policies, you need a Microsoft Entra ID P2 license because it requires premium features provided by Identity Protection.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=129)** In addition, to avoid conflicts with other tools, before using conditional access, Microsoft recommends that you disable security defaults, disable per-user MFA, and migrate identity protection policies.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=147)** Now, let's do a demo of conditional access.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=150)** Here's my Microsoft Entra ID on Azure portal.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=154)** In the left menu, click Security.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=157)** Then click Conditional Access.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=161)** Click Policies.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=164)** I will add a new policy.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=166)** Give a policy name.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=169)** For example, require MFA for Slack sign-in.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=173)** Under Assignments, I select all users.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=179)** For target resources, I click select apps.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=185)** Then click Select.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=187)** I can search for Slack, click it and select.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=194)** Under Conditions, I can click sign-in risk.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=199)** Select the sign-in risk level high and medium.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=204)** Then click Done.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=207)** Under Access Control, I can click grant.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=211)** Then grant access, but require multifactor authentication.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=216)** Click Select.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=219)** For this demo, we will enable policy as report-only.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=224)** Finally, click Create.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=228)** We can see this policy require MFA for Slack sign-in already created.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=234)** To test the impact of conditional access, we can use the What If tool.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=240)** Click it.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=241)** We can select a user, for example, Tracy Westbay.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=249)** Click Select.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=253)** We can set up all kinds of conditions like IP address, sign-in risk, user risk.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=261)** For this demo, let's just click What If.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=266)** Under the evaluation result, we can see policies that will apply to this user, and the policies that will not apply to this user.

> [!info]- Semantic Content
>
> **Code Keywords:** require (6), let (4), finally, (2), if. (1)
> **Env Vars:** mfa (5)
> **Tools:** slack (3), azure portal (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Manage Access to Resources

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Organize Azure resources
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=0)** - [Instructor] You can get hundreds of services from a cloud platform today.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=4)** For example, here's my Azure portal.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=7)** Click More Services.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=10)** I can see a long list of services in the categories like AI plus machine learning, analytics, compute, containers, databases, DevOps, and many others.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=28)** We can create so many things on Azure, but how can we organize Azure resources effectively?
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=36)** The answer is applying a governance hierarchy for your resources.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=40)** In Azure, we have four management levels.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=44)** Management groups are on the top.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=47)** They are the logic containers for managing access, policies and compliance.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=53)** Under a management group, we can have one or more subscriptions.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=57)** They are billing accounts for creating and using resources.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=62)** Then we have resource groups.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=65)** They are logic containers for deploying and managing Azure resources.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=70)** At the bottom, we have all kinds of resources like containers, virtual machines, and virtual networks.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=78)** There's a concept called inheritance.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=82)** Lower level units inherit the rules from higher levels.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=88)** For example, if I apply a policy to a management group, all underlying subscriptions, resource groups, and the resources will be affected too.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=98)** You can also design the structure of your management groups.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=102)** For example, under my tenant root group, I can have the management groups for finance, IT, and marketing.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=111)** Under IT, I can have the management groups for production and development.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=117)** After building my management groups, I can now add subscriptions.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=122)** For example, under the marketing management group, I can add a demo subscription.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=129)** Let's do a quick demo on creating management groups.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=133)** Here's my Azure portal.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=135)** Click Management Groups.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=138)** By default, Azure has one called Tenant Root Group.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=142)** Here I also have some demo subscriptions.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=146)** Let's create a new management group under the root.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=149)** Click Create.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=152)** Give it management group ID.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=155)** Enter the display name IT Group.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=160)** Click Submit.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=165)** Click Refresh.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=167)** We can see the IT group already created.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=171)** Now let's create a management group for marketing.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=174)** Click Create.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=176)** Give a group ID, mg-marketing.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=180)** Group display name, Marketing Group.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=185)** Click Submit.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=189)** Click Refresh.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=191)** We can see the marketing group already created at the same level as the IT group.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=197)** I can create groups under the IT group.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=201)** Click IT group, then click Create.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=205)** Give a group ID, mg-it-production, and a display name, IT Prod Group.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=217)** Click Submit.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=219)** Let's add one more.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=222)** Click Create, mg-it-dev.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=228)** IT Dev Group.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=231)** Click Submit.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=235)** Click Refresh.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=239)** We can see the two management groups, IT Dev and IT Production, already created under the IT group.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=247)** Finally, I can move my demo subscription to the marketing group.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=253)** I just need to click three dots here, then click move.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=259)** Then select the parent management group.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=264)** Click Save.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=268)** Click Refresh.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=270)** After everything's done, I can click Expand All and here's my Azure governance hierarchy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), finally, (1)
> **Analogies:** for example (4)
> **Tools:** azure portal (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Azure role-based access control (RBAC) overview
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=0)** - [Instructor] Azure role-based access control, Azure RBAC, provides fine-grained access management to Azure resources.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=8)** Before we look at it, let's go back to the basic concept of authorization.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=14)** What is authorization?
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=16)** We have a user and the resources.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=19)** The user wants to access the resources.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=23)** Authorization is the process of access control.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=27)** There are different ways to implement access control.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=31)** The most popular method is role-based access control or RBAC.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=36)** To do that, you need to define a role first.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=40)** A role is a collection of permissions.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=42)** For example, the owner role includes all permissions, like read, write, and delete resources.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=49)** The reader role only allows viewing resources.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=53)** The users assigned the role helps the access control to grant or deny the requested actions on the resources.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=62)** Now let's look at Azure role-based access control.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=66)** It has four main components, security principal, role, role assignment, and scope.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=74)** Security principle in Azure includes user, group, service principal that represents an application, and managed identity for Azure resources.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=86)** Azure supports two types of roles, built-in roles, for example, owner, contributor, reader, user access administrator, and a virtual machine contributor.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=99)** You can also create custom roles based on your business needs.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=104)** Scope is a set of resources you want to access.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=108)** In Azure, you can select your scope at four levels, management group, subscription, resource group, and the resource.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=118)** What is role assignment?
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=120)** It puts everything together for access control.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=124)** First, we have a security principal, for example, marketing group.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=128)** Second, we have a role definition, for example, contributor.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=133)** Third, we have a scope, for example, the resource group for pharmaceutic sales.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=139)** In this example, the role assignment attaches contributor role to the marketing group at the scope of pharma sales resource group.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=148)** Finally, Azure RBAC can grant or deny an access request based on this role assignment.

> [!info]- Semantic Content
>
> **Analogies:** for example (5)
> **Code Keywords:** let (2), delete (1), finally, (1)
> **Env Vars:** rbac (3)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Define Azure roles
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=0)** - [Instructor] An Azure role is a collection of access permissions.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=4)** Let's look at how to define Azure roles.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=7)** Here's my Azure portal. I will click Management Groups.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=12)** I can view the resource hierarchy, then click Tenant Root Group.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=19)** In the left menu, click Access Control IAM.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=23)** IAM means Identity and Access Management.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=28)** Click Roles at the top.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=30)** Here we can see a list of roles like owner, contributor, and reader.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=37)** I can filter the list by the role type.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=41)** For example, building role and custom role.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=49)** I can also select the role category, like compute or general.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=59)** Let's select the owner role and the click View.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=64)** Here's the role definition for owner.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=67)** Under Permissions, we can see all allowed actions.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=74)** Under JSON, JavaScript Object Notation, we can find the role definition in JSON format.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=82)** It has ID, role name as owner, description, assignable scopes as a root scope, which means this role is available for all scopes.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=94)** Under permissions actions, the asterisk sign is a wildcard.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=99)** That means all actions.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=102)** So based on this JSON definition, the owner role has the full access to manage all resources.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=110)** As a comparison, let's view the contributor role.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=114)** Click JSON. We can find the role definition in JSON format.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=120)** Under permissions actions, we have the same asterisk sign, which allows all actions.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=127)** But under no actions, we need to exclude some permissions like Microsoft.Authorization/asterisk/Delete, Microsoft.Authorization/asterisk/Write, Microsoft.Authorization/elevateAccess/Action.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=151)** So this definition means the contributor role has the full access to manage all resources, but it doesn't allow you to assign roles in Azure RBAC or Azure role-based access control.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=165)** Now let's create an Azure custom role.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=168)** Click Add.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=170)** Then click Add Custom Role.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=173)** We can enter custom role name.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=176)** For example, Custom VM Reader.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=179)** I'll start from scratch.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=181)** Then click Next.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=184)** I'll click Add Permissions.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=186)** Search permissions for virtual machines.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=190)** Then click the resource provider, Microsoft Compute.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=195)** Scroll down to find Microsoft.Compute/VirtualMachines.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=201)** Select Read: Get Virtual Machine.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=205)** Then click Add.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=207)** Click Next.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=209)** I'm okay with the current assignable scope. Click Next.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=214)** I can see the role definition in JSON format.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=218)** Allowed action is Microsoft.Compute/virtualMachines/read.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=225)** Click Review plus Create.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=227)** Then click Create.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=230)** Now go back to the roles and select the type as custom role.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=237)** I can see my Custom VM Reader role has been created.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=241)** I can click View to see the role definition.

> [!info]- Semantic Content
>
> **Env Vars:** json (6), iam (2), rbac (1)
> **Code Keywords:** let (4), type. (1), delete (1)
> **UI Navigation:** select the (3), scroll down (1)
> **CLI Commands:** find (3)
> **Code Identifiers:** elevateaccess (1), virtualmachines (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### Microsoft Entra roles and Azure roles
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=0)** - [Instructor] People often get confused about the difference between Microsoft Entra roles, formerly Azure AD roles, and Azure roles.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=9)** We use Microsoft Entra roles to manage identities and the buildings in Microsoft Entra ID.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=16)** The common building at Microsoft Entrta roles are global administrator, user administrator, building administrator, and help desk administrator.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=27)** We can use Azure roles to manage access to resources.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=31)** The general building Azure roles are owner, contributor, reader, and user access administrator.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=39)** We can elevate access for global administrators in Microsoft Entra ID to manage Azure resources.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=47)** In this case, global admin will be assigned the user access admin role in Azure at the root scope.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=56)** Let's do a quick demo of Microsoft Entra roles and Azure roles.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=60)** Here's my Azure portal.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=62)** To view Microsoft Entra roles, I will click Microsoft Entra ID.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=68)** Click roles and administrators.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=71)** Here's a list of administrative roles.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=74)** Notice some of them are marked as privileged roles.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=79)** I can select a role, for example, application administrator.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=84)** Then click description.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=87)** Here I can see the summary and the role permissions.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=92)** So this application administrator role can add, manage, and configure enterprise applications, app registrations, and manage on-premises like app proxy.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=105)** As a comparison, to view Azure roles, I will click management groups, then click tenant root group, then click access control IAM.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=120)** Click rows at the top.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=123)** Here we can see a list of roles like owner, contributor, and reader.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=129)** I can select a row and view the row definition.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1)
> **Env Vars:** iam (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Implement Azure role-based access control (RBAC)
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=0)** - [Instructor] Let's look at implementing Azure role-based access control, or Azure RBAC.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=7)** Here's my Azure portal. I can click Subscriptions.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=13)** I have an Azure Demo Subscription.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=16)** Click it.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=19)** In the left menu, click Access Control IAM.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=24)** Under Check Access, click View My Access.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=28)** I can see my current role assignments as owner and the user administrator.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=34)** Under Scope, it tells me these roles are inherited from the upper management group and root.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=42)** I can also check access for others.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=46)** For example, for the user Tracy Westbay.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=53)** It looks like Tracy doesn't have any role assignments right now.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=60)** I can also view all role assignments.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=64)** Here are all current role assignments for this subscription.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=69)** Now let's add a role assignment.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=73)** Click Add at the top and click Add Role Assignment.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=79)** We can select a role, for example, reader. Then click Next.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=85)** Let's assign access to a user. Click Select Members.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=90)** Then choose Tracy.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=94)** Click Select.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=96)** Then click Review plus Assign.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=102)** We can confirm Tracy has the reader role for the Azure Demo Subscription.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=110)** If a user has multiple Azure role assignments, how can we determine the effective permissions?
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=117)** Azure RBAC is an additive model.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=120)** It means the sum of your role assignments are your effective permissions.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=124)** For example, we have a user and Azure resources.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=129)** The user has an owner role at the subscription level.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=134)** The same user also has a reader role at the resource group under the subscription.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=141)** What are the effective permissions for this user?
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=144)** It's the sum of the owner permissions for the subscription and the reader permissions for the resource group.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=151)** So it's effectively the owner role for the subscription.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** rbac (2), iam (1)
> **Analogies:** for example (3)
> **Tools:** azure portal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Perform Monitoring and Governance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Monitor Microsoft Entra ID
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=0)** - [Instructor] Let's talk about monitoring Microsoft Entra ID.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=4)** In general, we have two ways to monitor Microsoft Entra ID.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=8)** First, we use logs, for example, sign-in for sign in activities and how users access resources; audit logs for changes apply to your tenant, like adding a user or assigning a license; provisioning logs for provisioning activities done by third party services, like creating a user in Adobe or removing a group from ServiceNow.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=35)** Second, we use monitoring tools, for example, Log Analytics for acquiring and analyzing various Microsoft Entra ID logs; workbooks for building rich interactive reports; and usage and insights for reporting application and authentication activities.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=55)** Now let's do a quick demo for Microsoft Entra ID monitoring.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=60)** Here's my Microsoft Entra ID on Azure portal.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=64)** In the left menu under Monitoring, we can see three types of logs: sign-in logs, audit logs, and the provisioning logs.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=76)** Click Sign-In Logs.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=80)** We will see a list of sign-in activities.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=83)** I can select the time range, for example, last seven days.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=87)** Then click Apply.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=90)** I can add filters, for example, status.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=94)** Click Apply.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=97)** Then select status as success. Click Apply.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=101)** I can then click a log to view the activity details, like basic information, location, and device information.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=110)** I can do the similar things for audit logs and the provisioning logs.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=116)** Before we can use the tools like Log Analytics and the workbooks, we need to first configure diagnostic settings.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=125)** Click Diagnostic Settings.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=127)** I already have one setting.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=129)** I can either edit setting or add a new one.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=132)** Click Edit Setting.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=134)** For data collection, I can select categories like sign-in logs, audit logs, provisioning logs, user risk events, risky users.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=146)** For destination details, I can send to Log Analytics workspace, archive to a storage account streamed to an event hub, and send to a partner solution.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=157)** Here I will send data to my demo Log Analytics workspace.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=162)** Please note, you need Microsoft Entra ID, formerly Azure Active Directory, P1 or P2 license to export sign-in data.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=171)** Finally, I can save the settings.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=176)** Now let's click Log Analytics.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=179)** On the left sidebar, we can see a list of available tables.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=185)** In the query window, we can use Kusto Query Language or KQL to analyze data.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=191)** I can change the time range from last hour to last seven days.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=197)** Let's enter a query.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=199)** For example, sign-in logs.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=203)** Summarize count by location, then click Run.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=210)** I can see the query results.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=213)** I can also use chart to visualize the results.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=216)** Next, let's use workbooks to see some rich reports.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=222)** For example, click the workbook for sign-ins.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=226)** Change the time range to last seven days.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=231)** I can see a dashboard for sign-in activities.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=234)** Finally, I can click Usage and Insights.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=237)** I can see Microsoft Entra application activity and authentication methods activity.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2)
> **Analogies:** for example (6)
> **Env Vars:** kql (1)
> **Tools:** azure portal (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Identity secure score
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=0)** - [Bryan] Let's talk about identity secure score.
>
> **[0:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=3)** What is identity secure Score?
>
> **[0:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=6)** It's a percentage number indicating how aligned you are with Microsoft's security recommendations.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=12)** Identity secure score will help you measure your identity security posture, plan your improvement actions, and review your improvement results.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=23)** Now let's do a quick demo for identity secure score.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=26)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=30)** In the left menu, click Security, then click Identity Secure Score.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=37)** It shows the secure score for identity and the last updated date and time.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=44)** Click the information icon.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=46)** It tells you secure score updates can take up to 48 hours.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=52)** I can also see the comparison between my organization and the typical company of a similar size.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=60)** It has a score history showing how my score has changed over time, like 7 days, 30 days, and 90 days.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=70)** Under the Improvement actions, I can see a list of action items.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=75)** I can edit columns and add current score, max score, and status.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=81)** Click Apply.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=83)** For a specific action I can see how it impacts the score, what's the current score, what's the max score I can get, how it impacts user, the implementation cost, and the current implementation status.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=99)** I can sort by status to see the tasks completed or to address.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=106)** Click an action.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=109)** I can see the detailed information of this improvement action.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=115)** After reviewing the recommendation, I can decide how to proceed with this action.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=120)** Click Status.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=123)** I can select to address it at some point in the future.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=127)** Accept the risk, plan to implement it, resolve through third party and resolve through alternate mitigation.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=137)** For example, your administrative controls like a HR policy.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=143)** Click Planned, then click Save.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=146)** Now I can see this improvement action is planned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Speakers:** - [bryan] (1)

#### Entitlement management
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=0)** - [Instructor] Let's talk about entitlement management.
>
> **[0:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=3)** Entitlement management can help you manage IAM lifecycle at scale, automate access request workflows.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=12)** Entitlement management is a feature of Microsoft Entra Identity Governance.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=17)** You need a Microsoft Entra ID P2 license before use it.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=22)** So, how does entitlement management work?
>
> **[0:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=25)** First, admins create catalogs, which are containers of related resources and access packages.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=34)** Resources include groups and teams, applications, and SharePoint sites.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=41)** Access packages define resource roles and request policy.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=46)** After the configuration is done, requesters can use access packages to request access.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=53)** Now, let's do a quick demo of entitlement management.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=57)** Here's my Microsoft Entra ID on Azure Portal.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=61)** In the left menu, I will click Identity Governance.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=66)** Under Entitlement Management, click Access Packages.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=72)** Let's create a new access package.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=75)** Give a name, for example, Pilot Apps.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=79)** Add a description.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=83)** For the catalog, which is the container of this access package, we can use the default general catalog.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=91)** Click Next: Resource Roles.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=94)** Here, we can add groups and teams, applications, and SharePoint signs.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=99)** Click Groups and Teams.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=102)** Check See All Groups and Teams, then select Group-App-Pilot.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=109)** Click Select.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=111)** Then I will select the role as Member, so access requesters will join the group, App Pilot as members.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=120)** Next, click Applications.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=124)** Click See All Applications, then click Slack.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=129)** Click Select.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=131)** Then for the role, I will select User, so access requesters can use Slack application.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=139)** Click Next: Requests.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=141)** Here, we can create a request policy.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=144)** Under Users Who Can Request Access, choose For Users in Your Directory, then select All Members Excluding Guests.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=155)** Click Yes to enable new requests, then click Next: Requester Information.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=163)** I can create some questions for requesters.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=166)** I can specify answer format.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=169)** I will leave them for now.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=171)** Click Next: Lifecycle.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=173)** I can set up a number of days assignments expire.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=177)** Can user request a specific timeline?
>
> **[3:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=181)** And do we require access reviews?
>
> **[3:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=184)** For this demo, we select No.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=188)** Click Next: Rules.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=190)** You can configure a rule.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=192)** A rule is like if-that statement, if an event happens, then triggers a custom flow.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=199)** We leave it for now.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=201)** Click Next: Review + Create.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=205)** Here's the summary of access package configuration.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=209)** After reviewing it, click Create.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=212)** We have created this access package for Pilot Apps.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=218)** There's My Access portal link.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=221)** Users can use this link to request this access package.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=226)** I can copy and paste this one.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=229)** Now, let's sign in as a user to request the access package.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=234)** Copy the link, then open the browser in private mode.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=240)** Paste the link.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=243)** I will sign in as a user.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=248)** After sign in, I can see the access package, Pilot Apps.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=254)** I can then click Request, enter business justification, for app testing, then click Request Access.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=265)** The request is being processed.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=269)** Now, let's go back to the access package.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=273)** Click Assignments.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=277)** We can see the status is Delivered.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=281)** To confirm the result, I will go to Microsoft Entra ID, then click Groups.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=289)** Click Group_App_Pilot.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=292)** Click Members.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=294)** I can see Henry has been added as a member.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=300)** Go back to Microsoft Entra ID, then click Enterprise Applications.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=308)** Click Slack, then click Users and Groups.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=314)** Henry has been assigned a user role.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), require (1), private (1)
> **Tools:** slack (3), azure portal (1)
> **UI Navigation:** select the (1), open the (1), go to (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** iam (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Access reviews
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=0)** - [Instructor] Let's talk about access reviews.
>
> **[0:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=3)** The purpose of access reviews is ensuring the right people have the right access to groups and applications.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=11)** So how do access reviews work?
>
> **[0:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=13)** First admins create a program.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=16)** Then within the program create one or more access reviews for teams, groups, or applications.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=24)** Next, reviewers need to perform access reviews within scheduled timelines.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=30)** Finally, based on the review settings and the results, access will be kept or removed.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=36)** Access reviews are part of identity governance.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=40)** You need a Microsoft Entra ID P2 license before you use it.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=45)** Now let's do a demo of access reviews for the application Slack.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=50)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=54)** Click identity governance.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=56)** Under access reviews, click programs.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=60)** Click new program, give a name.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=64)** Program Application reviews.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=70)** Add a description, program for application reviews.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=74)** Then click create.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=77)** Click program we just created.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=81)** We can see the dashboard for this program.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=84)** Click access reviews.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=86)** Click new access review.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=89)** Under review type, select what to review.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=92)** I will choose applications.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=95)** Then click select applications, then select Slack.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=101)** For scope, select all users, click next.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=106)** Under reviews, select reviewers.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=110)** We can choose selected users or groups, users review their own access, or managers of users.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=119)** I choose self reviews.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=121)** For duration, I keep three days.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=125)** For review recurrence, I will select quarterly.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=130)** Start date is today, end date is never, click next.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=135)** Under settings for this demo, I don't use auto apply results to resource.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=141)** If reviewers don't respond within the scheduled timeline, I choose no change.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=147)** At end of review, I will send a notification to selected users.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=153)** For example, myself.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=155)** Click select.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=157)** I will keep the default values for the rest.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=161)** Click next.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=163)** I will give the review name, Access review for Slack.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=172)** Then click create.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=175)** Click refresh.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=178)** We need to wait for the status to become active.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=185)** Now let's switch to a reviewer to perform the access review.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=189)** After the access review is active, the reviewers will receive a notification email like this.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=198)** Action required, review access to the Slack app.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=202)** It also shows the end day of the review period.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=205)** The reviewer can click the link to start review.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=212)** Now Henry can perform the access review.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=215)** Do you still need access to the app Slack?
>
> **[3:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=218)** Let's select yes.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=219)** Give the reason, for app testing.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=223)** Click submit.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=225)** Henry has completed the access review.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=228)** Go back to the access reviews in Microsoft Entra ID.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=232)** Click access review for Slack.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=235)** I can see the current review status.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=238)** One user has approved the access.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=241)** Click results.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=243)** I can see Henry already approved the access.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=246)** I can then click view to see audit logs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), type, (1), self (1), switch (1)
> **Tools:** slack (6), azure portal (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Privileged identity management overview
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=0)** - [Instructor] Let's talk about privileged identity management.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=4)** Privileged roles like administrators, owners, and contributors have high access permissions to critical resources in your organization.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=14)** If a privileged account gets compromised or misused, it could lead to some significant damage to your business.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=22)** So we need a solution to manage the risk of excessive and unnecessary access permissions.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=28)** That's why we need a privileged identity management.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=32)** We can use privileged identity management to manage two types of roles in Azure.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=37)** Microsoft Entra roles for managing identities and billings in Microsoft Entra ID.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=43)** The common building Microsoft Entra roles are like global administrator, user administrator, and the billing administrator.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=52)** Azure roles for managing access to Azure Resources.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=56)** The general building Azure roles are like owner, contributor, reader, and a user access administrator.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=64)** The core of privileged identity management is a two-step role assignment process.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=70)** When you assign a role to a user, it creates two assignments, eligible assignment, and active assignment.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=79)** Eligible means a user is qualified for a role, but they need to activate the role before performing privileged tasks.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=88)** Once the job is done, they can deactivate the role.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=92)** For example, Henry is eligible for a user administrator role.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=96)** When he needs to update some user information, he should first activate this administrator role.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=103)** After finishing the work, Henry will not need the privileged access anymore, so he can deactivate the role.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=111)** Privileged identity management offers some key features.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=115)** For example, just-in-time or JIT access.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=120)** It means users get temporary access permissions only when they need to do some privileged operations, like adding or changing accounting information.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=130)** Time-bounded, it means users can only activate and use a privileged role within a defined time window.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=139)** Multifactor authentication, or MFA, can be enforced when users activate a privileged role.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=146)** Approval and a justification can be required for activating privileged roles.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=152)** The general workflow of privileged identity management starts with admins assign users with eligible roles for Microsoft Entra ID or Azure Resources.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=164)** Users activate eligible roles before performing privileged tasks.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=169)** Reviewers approve role activation requests, managers audit the history of privileged role assignments and activations.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=179)** In addition, we can schedule access reviews for privileged roles to ensure users still need them.

> [!info]- Semantic Content
>
> **Env Vars:** jit (1), mfa (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Implement privileged identity management
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=0)** - [Instructor] Let's look at implementing privileged identity management.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=4)** First, I will assign the privileged role for Azure Resources.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=8)** Here's my Microsoft Entra ID on Azure portal.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=12)** In the left menu, click Identity Governance.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=16)** Under Privileged Identity Management, we can assign Microsoft Entra roles, formally Azure AD roles, or Azure resource roles.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=26)** Click Azure resources.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=29)** Click Azure resources.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=32)** Here I already have the Azure demo subscription identified.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=36)** You can click Discover resources to onboard the resources for management.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=44)** Click Resource type.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=46)** We can add a resource group.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=49)** Click the resource group rg-demo.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=53)** In the left menu under Management, click Assignments.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=58)** Click Add assignments at the top.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=61)** For accessing resource group, I can select the role, for example, contributor.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=70)** I will then select a member, for example, Morgan King.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=79)** Click Next.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=81)** For the assignment type, I will select eligible.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=83)** I can specify when this assignment starts and when it ends.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=90)** Click Assign.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=92)** We can see Morgan is now eligible for a contributor role.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=97)** Now let's sign in as a user Morgan to activate the role.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=102)** Open the browser in private mode.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=104)** Type portal.[azure.com](https://azure.com), sign in as the user.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=111)** Morgan is now on the Azure portal.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=114)** Click Subscriptions.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=116)** Currently, she can't access any subscriptions.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=120)** Click View eligible subscriptions.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=124)** Morgan is eligible for the contributor role to access the resource group rg-demo.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=130)** Under Action, click Activate.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=134)** Morgan can select activation start time.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=138)** And the duration, for example, two hours.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=142)** And enter the reason for activation.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=146)** Click Activate.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=148)** It will go through some stages to activate this role.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=152)** This process may take a while.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=157)** After it's done, we can see the role is activated.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=161)** Now Morgan can access the resource group rg-demo.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=172)** She can see a list of resources.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=175)** As a contributor, Morgan can add, update, and delete any resources within the resource group.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=182)** After the job is done, Morgan can deactivate the contributor role.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=188)** Go to Subscriptions, then click View eligible subscriptions.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=200)** Click Active assignments.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=203)** For the contributor role, under Action, we can click Deactivate.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=211)** Click Deactivate.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=214)** It will go through some stages to deactivate this role.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=223)** After it's done, click Active assignments.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=227)** We can see this role is not active anymore.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=233)** Now let's see how to audit role assignments and activation.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=237)** Go to Microsoft Entra ID.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=240)** In the left menu, click Identity governance.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=246)** Then under the Privileged Identity Management, click Azure resources.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=252)** Under Manage, click Azure resources.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=256)** Select the resource type and add resource group.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=261)** Click the resource group rg-demo.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=266)** On the main view page, we can see the recent role activation.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=271)** In the left menu under Activities, click Resource audit.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=277)** I can see the history of role assignments and activations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (1), type, (1), private (1), while. (1)
> **UI Navigation:** select the (2), go to (2), open the (1)
> **Analogies:** for example (3)
> **Tools:** azure portal (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=0)** - [Bryan] You made it.
>
> **[0:01](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=1)** Congratulations on completing this course.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=4)** Now you have a comprehensive view of Azure Identity and Access Management.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=10)** As a quick summary, we learned how to manage identities for users, guests, groups, devices, and applications.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=19)** Configure authentication methods like MFA, passwordless signing, and conditional access, control access to resources using Azure RBAC, perform identity governance using entitlement management, privilege identity management, and access reviews.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=39)** This means we cover the whole IM framework, including identity, authentication, authorization, and auditing.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=48)** So what's next?
>
> **[0:50](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=50)** The best way to learn something is by doing it.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=53)** I recommend you to do some hands-on exercises on Azure.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=58)** This course can help you prepare for some Azure certifications.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=62)** You can visit the Microsoft Certifications website to learn more.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=67)** Finally, let's stay connected.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=69)** You are welcome to connect with me on LinkedIn.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=72)** I look forward collaborating with you.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** mfa (1), rbac (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [bryan] (1)


## Instructor

- [[Bryan Li]]

## Skills Covered

- Identity and Access Management (IAM)
- Microsoft Azure

## Path Context

### In [[Identity and Access Management in Azure]]
← [[Microsoft Entra ID Fundamentals]] | **2 of 4** | [[Azure for Architects- Security and Identity Management with Microsoft Entra]] →

## Appears In

- [[Identity and Access Management in Azure]]

## Related Courses

_Courses sharing skills:_

- [[Microsoft Azure- Security Concepts]] — Identity and Access Management (IAM), Microsoft Azure
- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Identity and Access Management (IAM)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure

---

[↑ Back to top](#)