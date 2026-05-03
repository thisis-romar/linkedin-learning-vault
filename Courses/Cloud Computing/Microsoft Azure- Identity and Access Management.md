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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Microsoft%20Azure-%20Identity%20and%20Access%20Management.md)

![Microsoft Azure: Identity and Access Management](https://media.licdn.com/dms/image/v2/D560DAQEW0zDZcclBVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705617989142?e=2147483647&amp;v=beta&amp;t=SiKipwbn1dLsl8zMbOjUUNYbtdx7Vu1KDZMMsYxE0v4)

# Microsoft Azure: Identity and Access Management

> Azure Identity and Access Management enables IT professionals and administrators to ensure the right entities can access the right resources with the right permissions. In this course, Microsoft Certified Cybersecurity Architect Expert Bryan Li delves into this essential topic. Find out how to manage various identities like users, groups, devices, and applications in Microsoft Entra ID. Go over ho

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392) | 1h 51m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Discovering Azure identity and access management](#discovering-azure-identity-and-access-management)
  - [What you should know](#what-you-should-know)
  - [Identity and access management concepts](#identity-and-access-management-concepts)
- [**1. Manage Identities**](#1-manage-identities) (12 videos)
  - [Microsoft Entra ID overview](#microsoft-entra-id-overview)
  - [Microsoft Entra ID license comparison](#microsoft-entra-id-license-comparison)
  - [Create users](#create-users)
  - [Manage users](#manage-users)
  - [Manage and invite external users](#manage-and-invite-external-users)
  - [Perform bulk user operations](#perform-bulk-user-operations)
  - [Create groups](#create-groups)
  - [Manage groups](#manage-groups)
  - [Manage devices](#manage-devices)
  - [Manage applications](#manage-applications)
  - [Manage hybrid identities](#manage-hybrid-identities)
  - [Manage Azure administrative units](#manage-azure-administrative-units)
- [**2. Manage Authentication**](#2-manage-authentication) (6 videos)
  - [Manage authentication methods](#manage-authentication-methods)
  - [Configure self-service password reset](#configure-self-service-password-reset)
  - [Implement multifactor authentication (MFA)](#implement-multifactor-authentication-mfa)
  - [Implement passwordless authentication](#implement-passwordless-authentication)
  - [Implement identity protection](#implement-identity-protection)
  - [Implement conditional access](#implement-conditional-access)
- [**3. Manage Access to Resources**](#3-manage-access-to-resources) (5 videos)
  - [Organize Azure resources](#organize-azure-resources)
  - [Azure role-based access control (RBAC) overview](#azure-role-based-access-control-rbac-overview)
  - [Define Azure roles](#define-azure-roles)
  - [Microsoft Entra roles and Azure roles](#microsoft-entra-roles-and-azure-roles)
  - [Implement Azure role-based access control (RBAC)](#implement-azure-role-based-access-control-rbac)
- [**4. Perform Monitoring and Governance**](#4-perform-monitoring-and-governance) (6 videos)
  - [Monitor Microsoft Entra ID](#monitor-microsoft-entra-id)
  - [Identity secure score](#identity-secure-score)
  - [Entitlement management](#entitlement-management)
  - [Access reviews](#access-reviews)
  - [Privileged identity management overview](#privileged-identity-management-overview)
  - [Implement privileged identity management](#implement-privileged-identity-management)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Discovering Azure identity and access management](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/discovering-azure-identity-and-access-management-23736543?u=76281980&t=0)** - [[Microsoft Azure|Azure]] IAM is a cloud-based service that helps organizations centrally manage all identities and access across the cloud and on-premises. I'm going to show you how to manage identities for users, groups, devices, and applications. Reduce risk by implementing [[Multi-factor Authentication]], passwordless signing, and conditional access. And how to protect resources by performing role-based access control, privileged identity management, and access reviews. I'm Bryan Li, and I worked in IT and [[Software Development]] for 20 plus years. If you want to discover the power of Azure IAM, then join me in my [[LinkedIn]] Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Multi-factor Authentication]] (1), [[Software Development]] (1), [[LinkedIn]] (1)
> **Env Vars:** iam (2)
> **Definitions:** is a  (1)
> **Speakers:** - azure (1)

#### [What you should know](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/what-you-should-know?u=76281980&t=0)** - [Narrator] This course uses [[Microsoft Azure|Azure]] to perform identity and access management. Before studying this course, you should have some fundamental knowledge about [[Microsoft Azure]] Cloud. Also, to follow hands-on demonstrations in this course, you need a [[Microsoft Entra ID]] P2 license, formerly [[Microsoft Entra ID|Azure Active Directory]] P2 license, and an Azure subscription. You can sign up for a free trial if you don't have them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Microsoft Azure]] (1), [[Microsoft Entra ID]] (1), [[Microsoft Entra ID|Azure active directory]] (1)
> **Speakers:** - [narrator] (1)

#### [Identity and access management concepts](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-and-access-management-concepts?u=76281980&t=0)** - [Instructor] Let's talk about some key concepts of Identity and Access Management or IAM. The goal of IAM is controlling access. Basically, it involves a subject and an object. The subject wants to access the object, and we need to control access to ensure the right people have the right permissions to access the right resources. There's a general framework for Identity and Access Management. To access resources, we need identity, something identifies a subject, for example, username or object ID. Authentication, a process to verify who you are using password or multifactor authentication. Authorization, a process to check what resources you can access, and what kind of actions you can take. Finally, you can access your resources. In addition, we need an auditing process to track who did what and where and when. Now you understand the basic concepts of Identity and Access Management. We are ready to look at how [[Microsoft Azure|Azure]] IAM works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **Env Vars:** iam (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Manage Identities

[↑ Back to Table of Contents](#table-of-contents)

#### [Microsoft Entra ID overview](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=0)** - [Instructor] [[Microsoft Entra ID]], formerly [[Microsoft Entra ID|Azure Active Directory]], is a cloud-based identity and access management service. Here's a great diagram from [[Microsoft]] that shows the role of Microsoft Entra ID. I like to think of Microsoft Entra ID as a control center. It provides identities for users, devices, and applications, and it connects services like [[Microsoft Azure|Azure]], [[Microsoft 365]], and the numerous apps in the cloud or on-premises. Let's look at the Microsoft Entra ID user interface on Azure Portal. You will find a long list of functions like users, groups, devices, and identity governance. You can click a link to see more details. To help you learn Microsoft Entra ID functions, I will group them into four categories: management, security, governance, and monitoring. For management, Microsoft Entra ID helps you manage users and groups, register devices and applications, manage external identities, enable hybrid identities through Microsoft [[Microsoft Entra ID|Entra]] Connect, assign roles and administrators, create administrative units, manage product licenses, and configure company branding. For security, Microsoft Entra ID provides a rich set of features like password reset,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-overview?u=76281980&t=96)** authentication methods, multifactor authentication, conditional access, identity protection, identity secure score, risk activities, and a security center. For governance, Microsoft Entra ID enables functions like entitlement management, privileged identity management, access reviews, and the lifecycle workflows. For monitoring, Microsoft Entra ID provides functions like usage and insights, sign-in logs, audit logs, and provisioning logs, log analytics, and workbooks. Microsoft Entra ID provides an integrated IAM, Identity and Access Management solution. It helps you manage and secure identities for employees, suppliers, and clients, and it enables seamless access to internal and external applications and data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (10), [[Microsoft]] (2), [[Microsoft Azure|Azure]] (2), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft 365]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** iam (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Entra ID license comparison](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=0)** - [Instructor] [[Microsoft Entra ID]] is a licensed product, so you'll get different features based on your license level. Microsoft Entra ID has four additions, free, premium P1, premium P2, and the Governance. The free edition is included when you subscribe to [[Microsoft]] online services like [[Microsoft Azure|Azure]] and [[Microsoft 365]]. The premium additions P1 and P2 add many enterprise level features for management, security and reports. The Governance edition enhances identity governance capabilities for Microsoft Entra ID P1 and the P2. Microsoft Entra ID Free Edition provides essential functions for identity and access management, like a user and a group management, single sign-on or SSO, multifactor authentication or MFA and a role-based access control or RBAC. Microsoft Entra ID P1 includes all the features in the free edition, and it adds more enterprise level functions like advanced group management, conditional access, custom security attributes, and advanced security and usage reports. Microsoft Entra ID P2 includes all the features in P1 and it adds functions like identity protection, entitlement management, access certifications and reviews,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-id-license-comparison?u=76281980&t=96)** and privileged identity management or PIM. Microsoft Entra ID Governance includes advanced identity governance functions like lifecycle workflows, identity governance dashboard, and entitlement management with Verified ID. To get the detailed information on Microsoft Entra ID licenses, you can visit the Microsoft [[Microsoft Entra ID|Entra]] plans and the pricing page. Here, you can compare the features included in different Microsoft Entra ID editions. What's your current Microsoft Entra ID license? On Azure Portal, you can find it on your Microsoft Entra ID overview page. For example, my license is Microsoft Entra ID P2. You can also check if a specific feature is available in your current license. On your Microsoft Entra ID, click Licenses, then click Licensed Features. We'll see a list of available features. You can select a suitable Microsoft Entra ID license based on your organization's needs. To learn or test some premium features available in P1 or P2, you can start with a free trial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (14), [[Microsoft]] (2), [[Microsoft Azure|Azure]] (2), [[Microsoft 365]] (1), [[Microsoft Entra ID|Entra]] (1)
> **Env Vars:** sso (1), mfa (1), rbac (1), pim (1)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Create users](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=0)** - [Instructor] It's simple to create users in [[Microsoft Entra ID]]. Here's my [[Microsoft Azure|Azure]] portal. In the Resource menu, I can click Microsoft Entra ID. Then click Users. We will see a list of existing users. Click New user from the command bar. Here we have two options, Create new user or Invite external user. Let's choose Create new user. I will enter user principal name, for example, tracy.westbay. Then select a domain name. Here is a list of available domain names. [Demosoc.com](https://Demosoc.com) is our primary domain. Mydemosoc.[onmicrosoft.com](https://onmicrosoft.com) is the initial domain name created for our Azure tenant. I will choose [demosoc.com](https://demosoc.com). Enter display name, Tracy Westbay. I will let the system autogenerate the password. To view the initial password, I can click the Show Password icon. Click Next: Properties. Enter first name and the last name, Tracy Westbay. We can provide job information,
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-users?u=76281980&t=93)** for example, job title and the department. Scroll down and I will select Usage location. For example, Canada. Click Next: Assignments. Click Add group. I can add this user to a group, for example, Group-Marketing. Click Select. Click Next: Review + create. Then click Create. After it's done, we can click Refresh. It may take a few seconds, and we can click Refresh to see the new user. Then click this user to see the details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (2), [[Microsoft Azure|Azure]] (2)
> **Analogies:** for example (4)
> **URLs:** [demosoc.com](https://demosoc.com) (2), [onmicrosoft.com](https://onmicrosoft.com) (1)
> **Tools:** azure portal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Manage users](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=0)** - [Instructor] Let's look at managing users in [[Microsoft Entra ID]]. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click Users, we can see a list of current users. We can click Manage view, then click Edit columns. Let's add some columns. For example, Job title and Department.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=31)** Click Save, now we can see the job title and the department information in the user list. Let's select a user, for example, Tracy Westbay. On the overview page, I can see the basic information like a user principle name, user type, groups, applications, assigned roles and the licenses. Click Monitoring, I can view the user sign in activities. Click Properties, I have a list of properties. I can click Edit properties. I can edit properties for identity, job information, contact information and settings. Let's click Job Information. For example, let's add employee ID. And we can add a manager. For example, Jerome, click Select, click Save. We can find more [[User Management]] functions in the left menu. Click assigned roles to manage role assignments for [[Microsoft]] [[Microsoft Entra ID|Entra]]. Click add assignments. Then we can select a role. For example, Guest Inviter. Click Next, for the assignment type,
>
> **[2:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=130)** let's select Active. Enter justification, For Demo, click Assign.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=141)** Click refresh to see the new role. We can click Azure role assignments to view assigned roles for Azure resources. For example, this user has a reader role in the rg-demo resource group. Click Administrative units. We can assign or remove from an administrative unit. Click Groups to add or remove memberships. We can click Add memberships and select Group-Sales. Click Select, click Refresh to see the latest memberships. Click Applications to view application assignments. Click Licenses to manage licenses, click Assignments, then select [[Microsoft 365]] Business Standard. Review the license options and click Save.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-users?u=76281980&t=211)** Click Refresh, click Devices to manage the registered devices for this user, click Authentication methods. We can add an authentication method. Click Add authentication method. Then choose email. Enter the email address, click Add. We can click Reset password to generate a temporary password for the user to sign in. We can also require re-register multifactor authentication. Now you should know the main functions to manage users in Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (3), [[Microsoft Azure|Azure]] (3), [[User Management]] (1), [[Microsoft]] (1), [[Microsoft Entra ID|Entra]] (1)
> **Analogies:** for example (6)
> **CLI Commands:** find (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Manage and invite external users](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=0)** - [Instructor] In a business, you need to collaborate with many external people, like contractors and partners. You can use [[Microsoft Entra ID]] to manage external identities. First, let's set up how you want to collaborate with them. On my Microsoft Entra ID on [[Microsoft Azure|Azure]] Portal, click External Identities, then click Set Up External Collaboration Settings. I can set up a guest user access restrictions. For example, guest users have limited access to properties and memberships of directory objects. I can configure guest invite restrictions. Here, we select Only Users Assigned to Specific Admin Roles Can Invite Guest Users. I can enable or disable guest self-service signup. I can also configure external user leave settings. Here, I'll allow external users to remove themselves from my organization. For the collaboration restrictions, I can allow invitations to be sent to any domains, or if you want to restrict, for example, some personal email address, I can click Deny Invitations to the Specific Domains. For example, I can set up [hotmail.com](https://hotmail.com) or [gmail.com](https://gmail.com),
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=95)** so these target domains will be denied for invitation. After it's done, I can click Save, then click All Identity Providers, click Email One-Time Passcode, and we select Email One-Time Passcode as Yes. This is useful when your guests don't already have a [[Microsoft]] [[Microsoft Entra ID|Entra]] or Microsoft account. You can just email them a one-time passcode for sign in. Now, let's invite an external user. Go back to my Microsoft Entra ID, click Users, and click New User. Here, I will select Invite External User, enter email address, and enter a display name. For example, Guestspeaker Jane. Enter message, I'd like to invite you to join as a speaker.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-and-invite-external-users?u=76281980&t=169)** Click Review + Invite. Click Invite. Click Refresh to see the new guest user. Click this guest user, Guestspeaker Jane, and click Properties. We can see the user type is Guest, creation type is Invitation, and the invitation state currently is Pending Acceptance. Now, let's turn into our guest user. Let's check the email. In the email, I can click Accept Invitation, and click Send Code. Go back to the email to get the verification code. Paste here, click Sign In. Click Accept. Now, let's go back to our Microsoft Entra ID. Under the properties of our guest user, click Refresh. The invitation state changed to Accepted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (4), [[Microsoft]] (2), [[Microsoft Azure|Azure]] (1), [[Microsoft Entra ID|Entra]] (1)
> **Prerequisites:** set up (4), configure (2)
> **Analogies:** for example (4)
> **Cross-References:** go back to (3)
> **URLs:** [hotmail.com](https://hotmail.com) (1), [gmail.com](https://gmail.com) (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Perform bulk user operations](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=0)** - [Instructor] In a corporate environment, you may need to add, invite, or delete hundreds of users in a day. Let me show you how to use the bulk operations in [[Microsoft Entra ID]] to complete this task quickly. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] Portal. Click Users, then click Bulk operations. We have options like Bulk create, Bulk invite, and Bulk delete. Click Bulk create. We can first download a CSV template. Open it. Here you can enter or copy and paste the user information. Notice the columns, Name or displayName, User name or userPrincipalName, Initial password, and Block sign in are required fields. And the template provides a sample entry. Now let's add some user information for testing. We can then save the template file. Back to Microsoft Entra ID, upload your CSV file.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=82)** Then click Submit. You can view the status of each operation. Once it's done, click Refresh. You will find the bulk created users. Bulk invite is similar to Bulk create, but it's for inviting external guests. First, let's download a CSV template. Then open the template file. Here you can provide email address to invite redirection URL after accepting the invitation. Send the invitation message and customize the invitation message. And the template provides a sample entry. Now let's add some guest information for testing. Then save the CSV file. Back to Microsoft Entra ID, upload your CSV file. Then click Submit. You can view the status of each operation. After it's done, click Refresh. You will find the bulk invited guests. We can use Bulk delete to quickly remove users and guests from Microsoft Entra ID. First let's download a CSV template. Open the template.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=176)** Here we just need to provide a username, which is the userPrincipalName. And the template provides a sample entry. Now let's enter the usernames of our test users and guests. Notice the format of userPrincipalName is different between users and guests. The username for a guest include a text, #EXT#. Let's save the template file. Back to Microsoft Entra ID, upload your CSV file.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/perform-bulk-user-operations?u=76281980&t=215)** Type Yes to confirm the delete operation, then click Submit. You can view the status of each operation. Once finished, I can click Refresh. You will see all test users and guests have been deleted from Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (7), [[Microsoft Azure|Azure]] (1)
> **Exercise Files:** template (10)
> **Env Vars:** csv (7), url (1), ext (1)
> **Code Identifiers:** userprincipalname (3), displayname (1)
> **CLI Commands:** find (2)
> **UI Navigation:** open the (2)
> **Tools:** azure portal (1)
> **Analogies:** similar to (1)

#### [Create groups](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=0)** - [Instructor] Let's look at creating groups in [[Microsoft Entra ID]]. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click Groups, we can see a list of existing groups. Click New group on the command bar. First we need to select a group type. We have two options here: Security or [[Microsoft 365]]. You can click the information icon to learn the difference. Basically, security groups gave members access to applications, resources, and the licenses. Microsoft 365 groups, originally called [[Microsoft Office|Office]] 365 groups, give members access to shared mailbox, cutting the files and the [[SharePoint]] site. In addition, security groups can have members like users, devices, service principles, and other groups. Microsoft 365 groups can only have users. We select Security here. Then enter a group name, for example, Group-Finance. You may also add a group description. You can decide if [[Microsoft]] [[Microsoft Entra ID|Entra]] roles can be assigned to the group. You need a Microsoft Entra ID P1 or P2 licenses to see this feature. Basically, you can assign roles to a group instead of each individual person. Basically, you can assign roles to a group
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=95)** instead of each person individually, so administrators can save lots of time and effort. We leave the default value here. We can select membership type. If you have a Microsoft Entra ID P1 or P2 license the options are Assigned, Dynamic User, and Dynamic Device. Assigned means we need to assign members manually. Dynamic means the system will manage members automatically based on some defined rules. We select Assigned here. You can select group owner, for example, Jerome. Click Select. You can select group members. It gives you a list of users, groups, devices, and enterprise applications. Let's choose Peyton here. Now we can create this group and we can click refresh to see the new group. Next, let's create a dynamic group. You need a Microsoft Entra ID premium license to use this feature. Click New group. For the group name, I can type Group-Customer-Success. Select membership type as Dynamic User. Now let's add a dynamic query
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/create-groups?u=76281980&t=190)** to define the membership rules. For this customer success group we want to have anyone from the marketing and the sales departments join it automatically. Let's use the rule builder to create a single rule. Under the Property, select department. On the Operator, select Equals. For the Value, enter Marketing. Click Add expression. Again, under Property select department, equals, enter Sales. Because we need users from marketing or sales departments we select the logic operation as Or. The system will generate a rule syntax based on your configuration. You can also click Edit to edit rule syntax directly. Let's save our rules. Now we can create this dynamic group. It may take a while to finish the setup. Once it's done, let's view the group members. We can see users from marketing and the sales departments have been added to this dynamic group automatically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (5), [[Microsoft 365]] (3), [[Microsoft Azure|Azure]] (1), [[Microsoft Office|Office]] (1), [[SharePoint]] (1)
> **Analogies:** for example (2)
> **Tools:** azure portal (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Manage groups](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=0)** - [Instructor] Let's look at managing groups in [[Microsoft Entra ID]]. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click Groups. I can see a list of existing groups. Select Group Finance. On the Overview page, we can see membership type as assigned, group type as a security, and a group memberships. Click Properties. Here we can update group name, group description. We can't change group type, but we can change membership type from assigned, for example, to dynamic user. Then you need to add a dynamic query. We can select group write back state. This is for thinking with your on-premises [[Active Directory]]. Once you enable [[Microsoft]] [[Microsoft Entra ID|Entra]] Connect. Under Members, we can add members. Here's a list of users, groups, devices, and enterprise applications. You can search and select a member. You can also do bulk operations to import, remove, or download members. For example, click Import Members. We can download a CSV template, fill in membership object ID or user principle name.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-groups?u=76281980&t=98)** Then we can upload the CSV file, then click Submit. You can add group owners. We'll cover roles and administrative units later in the chapter. For group memberships, I can add memberships. For example, we can add the group finance to the group corporate. Click Select. Click Refresh to see the new group. Click Group Corporate. Click Members. You can see group finance is already a member. Back to group finance. Click Licenses. You can assign available licenses to all group members instead of doing it individually. Click Azure Role Assignments. You can view group roles for Azure resources like subscriptions. We'll talk about privileged identity management and access reviews later. On the audit logs, you can track group activity and status. Now you should know the main functions to manage groups in Microsoft Entra ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (3), [[Microsoft Azure|Azure]] (3), [[Active Directory]] (1), [[Microsoft]] (1), [[Microsoft Entra ID|Entra]] (1)
> **Analogies:** for example (3)
> **Env Vars:** csv (2)
> **Cross-References:** later in (1)
> **Tools:** azure portal (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Manage devices](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=0)** - [Instructor] Let's talk about managing devices in [[Microsoft Entra ID]]. Microsoft Entra ID can manage identities for not only users and groups but also applications and device To get a device identity in Microsoft Entra ID, we have three options, [[Microsoft]] [[Microsoft Entra ID|Entra]] registration, Microsoft Entra join, and a Microsoft Entra hybrid join. Let's quickly compare the three different methods. For device ownership, Microsoft Entra Registration supports bring your own devices, Microsoft Entra join and hybrid join manage organization-owned devices. For operating systems. Microsoft Entra Registration supports [[Windows 10]] or newer, iOS, [[Android]], macOS, and [[Ubuntu]]. Microsoft Entra join and hybrid join only support [[Windows]]. Hybrid join can support down level Windows versions, like Windows 8.1 and the [[Windows Server]] 2008. For directory location, Microsoft Entra Registration and join use the cloud-based Microsoft Entra ID. Microsoft Entra hybrid join uses on-premises [[Active Directory]] and a Microsoft Entra ID. For sign-in accounts, Microsoft Entra Registration can use local user account. Microsoft Entra join
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=95)** and the hybrid join use organizational account. For resource access, Microsoft Enter Registration can single sign-on, or SSO, to cloud resources. Microsoft Entra join and the hybrid join can also access on-premises resources. For device management, Microsoft Entra Registration and join usually use mobile device management solutions, like Microsoft Intune. Microsoft Entra hybrid Join usually uses group policy. How do we enroll a Windows device to Microsoft Entra ID? You can visit Access work or school in System Settings. Then click Connect to add a work or school account. For Microsoft Entra Registration. you can enter the assigned email address, then click Next. Or if you want to do Microsoft Entra join, you can click Join this device to Microsoft Entra ID, formerly [[Microsoft Entra ID|Azure Active Directory]]. Now let's go to Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click Devices and click All devices. We can see two Windows devices here. The join type for the first one is Microsoft Entra registered, and the second one is Microsoft Entra joined. We can enable, disable or delete devices. We can click a device.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-devices?u=76281980&t=193)** Then see the Device ID and Object ID. If this device is enrolled by a mobile device management, or MDM, solution like Microsoft Intune, we can click Manage to manage this device. Click Device settings. We can set up who may join devices to Microsoft Entra who may register their devices with Microsoft Entra. Do we require multifactor authentication to register or join devices? And the maximum number of devices a user can register or join.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (23), [[Microsoft Entra ID|Entra]] (20), [[Microsoft Entra ID]] (8), [[Windows]] (5), [[Windows 10]] (1)
> **Code Identifiers:** ios (1), macos (1)
> **Env Vars:** sso (1), mdm (1)
> **Versions:** 8.1 (1)
> **Tools:** azure portal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Manage applications](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=0)** - [Instructor] Let's look at managing applications in [[Microsoft Entra ID]]. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click enterprise applications. We can see a list of registered applications in my demo organization. Let's add a new application. I can search applications using Microsoft Entra ID App Gallery. For example, let's search [[Slack]]. We can see some app information, like a publisher, single sign-on mode, and the URL. Click create. After it's done, we can see the application ID and object ID. The object ID is the unique ID of the service principle object, so we can use it in Power Shell to perform management operations. Go back to all applications, click Refresh.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=68)** We can see Slack showing on the list. For developers, they can also register their applications in Microsoft Entra ID. To do that, we can click app registrations, then click new registrations. Enter the app name, for example, My Demo App. We can select who can use this application or access this API. For this demo, I will just choose accounts in this organization directory only. I can select the app platform. For example, web and enter redirect URL, click register.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-applications?u=76281980&t=117)** After it's done, I can see the application ID and the object ID. For developers, they can continue to set up authentication, certificates, and secrets and API permissions. But for the initial app registration, our job is done. Now, go back to enterprise applications. I can see My Demo App is showing on the list. We can add users and groups to our apps. For example, click My Demo App, click users and groups, then add user and group. We can select, for example, group IT, keep the role as a default access, then click assign, click group IT, then click members. We can select a member, for example, Harry, then click applications. We can see Harry has the access to My Demo App.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (4), [[Slack]] (2), [[Microsoft Azure|Azure]] (1)
> **Analogies:** for example (6)
> **Env Vars:** url (2), api (2)
> **Tools:** slack (2), azure portal (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Manage hybrid identities](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=0)** - [Instructor] Let's talk about managing hybrid identities in [[Microsoft Entra ID]]. Hybrid identities refers to users both in the cloud and on-premises. In our case, we have users in cloud-based Microsoft Entra ID, and on-premises [[Active Directory]]. The challenge is how to sync your users at different locations so you can provide them with single sign-on capabilities. [[Microsoft]] uses Microsoft [[Microsoft Entra ID|Entra]] Connect, formally [[Microsoft Entra ID|Azure AD]] Connect. It acts as a bridge between your Microsoft Entra ID and on-premises Active Directory, so we can do tasks like identity sync, and a directory query between the cloud and on-premises. How can we authenticate hybrid identities? There are three common methods, password hash synchronization, pass-through authentication, and federation. The first two use Microsoft Entra ID for authentication. The third one uses a separate trusted authentication system, like on-premises Active Directory Federation Services, or ADFS. Let me give you a high level idea about these three methods. For password hash synchronization, we have the hash value of user passwords synced between the cloud-based Microsoft Entra ID and the local Active Directory,
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=94)** so users can simply sign in to Microsoft Entra ID with the same username and a password that they use on premises. For pass-through authentication, Microsoft Entra ID doesn't store the hash value of on-premises user passwords. While users sign to Microsoft Entra ID, it will forward the password validation to your on-premises Active Directory. For federation, we use a separate federation service to do the user authentication. When users sign in to Microsoft Entra ID, it will delegate the validation process to a trusted federation service, like ADFS. How do you choose your authentication method? It depends on your organization's requirements. For example, do you allow password hashes stored in the cloud? If the answer is no, you can't use the method, password hash synchronization. Does Microsoft Entra ID support your specific sign-in requirements? If you need to use on-premises multifactor authentication for your users, Microsoft Entra ID doesn't support it, so you can only use a federation service, like ADFS. In the end, let me quickly show you Microsoft Entra Connect, formally Azure AD Connect. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] Portal. Click Microsoft Entra Connect.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-hybrid-identities?u=76281980&t=191)** You can use either Cloud Sync or Connect Sync. Let's click Connect Sync. You can download Microsoft Entra Connect. After installation, it will integrate your on-premises directories with Microsoft Entra ID. You can also configure the user sign-in methods here. For example, federation, seamless single sign-on, or pass-through authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (13), [[Active Directory]] (5), [[Microsoft]] (5), [[Microsoft Entra ID|Entra]] (4), [[Microsoft Entra ID|Azure ad]] (2)
> **Env Vars:** adfs (3)
> **Analogies:** for example (2)
> **Tools:** azure portal (1)
> **Definitions:** refers to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Manage Azure administrative units](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=0)** - [Instructor] Let's look at administrative units in [[Microsoft Entra ID]]. Why do we need administrative units? It's for delegating your administrative tasks to selected people in defined business units. For example, a large global organization has the offices in US, Canada, UK, and Singapore. It's challenging for administrators at the headquarter to look after all the operating requests, so we can create administrative units for these four regions, then dedicate some work to regional administrators. What can we do with administrative units in Microsoft Entra ID? We can configure roles and administrators, and we can manage users, groups, and devices. Let's do a quick demo for administrative units. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click Administrative Units. Let's add a new one. Click Add. Give it a name, Canada [[Microsoft Office|Office]]. Then click Next: Assign Roles. We have a list of building administrative roles like authentication administrator, password administrator, and user administrator. You can read the descriptions to learn their permissions. Let's assign a role to regional members.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=93)** Select User Administrator. Select, for example, Henry. Click Add. We can see one member already assigned to the user administrator role. Click Next: Review plus Create. Then click Create. We can see the Canada Office has been added. Now let's go into this administrative unit, Canada Office. I can click users and add member. For example, Dustin and Peyton. Click Select. I can add groups. Click Add. I can select Group Toronto and Group Vancouver. Click Select. Click Refresh. I can see these two groups have been added. I can click Devices to add a device. For example, WIN-AZURE-JOIN. I can also click Properties to view the membership types. The current type is Assigned. We can also use Dynamic User or Dynamic Device to assign membership automatically. To do that, I need to add a dynamic query. For example, if a user's country equals Canada, then this user will be added
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-azure-administrative-units?u=76281980&t=186)** to the administrative unit for Canada automatically. Click Save. Notice, if I change the administrative type from assigned to dynamic, the existing membership may change. For the demo, I will click Yes to continue. Now the membership type for this administrative unit changes to dynamic user. After it takes effect, click Users. Click Refresh. We can see the users in Canada have been added to this administrative unit automatically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (3), [[Microsoft Office|Office]] (3), [[Microsoft Azure|Azure]] (2)
> **Analogies:** for example (5)
> **Env Vars:** win (1), azure (1), join (1)
> **SQL:** join (1)
> **Tools:** azure portal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 2. Manage Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage authentication methods](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=0)** - [Instructor] [[Microsoft Entra ID]] supports many authentication methods. Before we look into them, let's go back to the basic concept of authentication. What is authentication? It's about verifying credentials. When a user sign in to a device or application, the user needs to present an identity like a username. Then the verification process will use the available methods like a password or multifactor authentication, to prove the identity or reject it. You can use many authentication methods in Microsoft Entra ID. In general, we can group them into three categories, password, password plus something, and passwordless. Password has been the most common authentication method for a long time, but it has some big problems. For example, password strength. Simple passwords like a password1 or test123 are very easy to be cracked by hackers. Password management. Complex and long passwords are very difficult to remember and enter, not to mention you need to change them every 60 or 90 days based on your password policy. Password reuse. People often use the same password for many different services like email, social media, and online shopping. If hackers break into one service,
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=95)** they may use compromised passwords to sign in to many other systems. Because password alone is not enough to protect identities, the industry is moving to multifactor authentication. Basically, you need to provide a password plus something else, like something you have or something you are. In the early implementation, the good methods are SMS, like getting a text message on your mobile phone, voice, like you're receiving a phone call. But now you have some better ways like authenticator app to receive a push notification, OATH [[Hardware]] [[Tokens]] that refresh codes every 60 or 90 seconds. OATH software tokens that can be installed on your mobile phone. The best solution to password problems is not using password at all. That's called passwordless. We can use the authentication methods like authenticator app to enable phone sign in. FIDO2 security key. It's like a USB key protected by fingerprints or pings. Certificate-based authentication. [[Windows]] Hello, the building authentication methods on devices using biometrics like a facial detection and a fingerprints. Now you know the evolution of the authentication methods. Using password alone is bad. The good or better way is to use password plus something.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/manage-authentication-methods?u=76281980&t=190)** The best way is passwordless. Let's look at how Microsoft Entra ID supports multiple authentication methods. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] Portal. Click security, then click authentication methods. We have a list of available authentication methods like a FIDO2 security key, [[Microsoft]] Authenticator, SMS, and a certificate-based authentication. You can configure the policy for an authentication method. For example, click Microsoft Authenticator. I can enable or disable it, include all users or select groups. I can further configure the Microsoft Authenticator app, for example, require number matching for push notifications, or show geo location in push and passwordless notifications. After it's done, I can click save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (4), [[Microsoft]] (3), [[Tokens]] (2), [[Hardware]] (1), [[Windows]] (1)
> **Env Vars:** sms (2), oath (2), fido2 (2), usb (1)
> **Analogies:** for example (3), it's like (1)
> **Prerequisites:** configure (2)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Configure self-service password reset](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=0)** - [Instructor] A help desk may spend lots of time resetting user passwords in a large organization. The good news is, [[Microsoft]] Enter ID supports a self-service password reset so users can change their passwords without involving the help desk. Let's see how it works. Here's my Microsoft Enter ID on [[Microsoft Azure|Azure]] portal. In the left menu, click Password Reset. We can apply it to the selected group or to all users. Please note these settings only apply to end users. The means are always enabled for self-service password reset. Next, let's configure authentication methods. We can select if we require one-step verification or two-step verification. Then choose authentication methods available to users. For example, email and the mobile phone. After you finish, you can click Save. We can set up notifications. We can notify users on password resets and notify all admins When other admins reset their password. we can click Customization to customize help desk URL. For example, this is the URL for my demo support page. If we have an on-premises integration, we can perform password right back
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/configure-self-service-password-reset?u=76281980&t=94)** to on-premises [[Active Directory]]. You need to install a sync agent before using it. After finishing configuration, let's test a self-service password reset as a user. Go to users, then select a user. For example, Tracy Westbay. We can copy the user principle name. Open the browser in private mode so the existing credentials won't affect the signing event. Enter the URL portal.[azure.com](https://azure.com). Paste the username. Click Next. On the password page let's click, Forgot my password. Enter the characters in the picture for fraud protection. Click Next. Select the verification method, email, and Tracy will receive a verification code via email. We can enter the received verification code, then click Next. We can now enter a new password. Confirm new password. Click Finish. Your password has been reset successfully. We'll also receive a notification email for the password reset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Azure|Azure]] (2), [[Active Directory]] (1)
> **Analogies:** for example (3), picture (1)
> **Env Vars:** url (3)
> **UI Navigation:** go to (1), open the (1), select the (1)
> **Prerequisites:** configure (1), set up (1), install (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Implement multifactor authentication (MFA)](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=0)** - [Instructor] Let's look at implementing multifactor authentication, or MFA, in [[Microsoft Entra ID]]. What is multifactor authentication? A factor here means a way to verify your identity. We have three common kinds of factors. Something you know, like your password, ping, or security questions; something you have, like your mobile phone, email, [[Hardware]] [[Tokens]]; and something you are, like your fingerprints, voice, facial recognition. So multifactor authentication means using two or more different kinds of factors to verify your identity. For example, we can use password plus text message to your phone, password plus push notification to your mobile app. But using password plus security questions doesn't meet the requirement of MFA because they are from the same factor type, something you know. You should use authentication methods from different kinds of factors in MFA. In Microsoft Entra ID, we have three common ways to enforce multifactor authentication. Security defaults. You can enable them to require all users to register for MFA. Per-user MFA. You can enable MFA for selected users. And conditional access. You can create conditional access policies to require MFA. This is a recommended approach,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=96)** but you need a Microsoft Entra ID Premium P1 license to use it. Let's do a demo of multifactor authentication. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] Portal. Click Security, then click Multifactor authentication. Click Configure, Additional cloud-based multifactor authentication settings. You can see the service settings like trusted IPs, so you don't need MFA if requests are from these IP addresses. Verification options like text message to phone, notification through mobile app. Allow users to remember multifactor authentication on trusted devices and for how long. After it's done, you can click Save. Go back to my Microsoft Entra ID. I can enable the security defaults to require all users to register for MFA. In the left menu, click Properties, then click Manage security defaults. I can enable or disable security defaults. I can also require an MFA for selected users. Click Users, then click Per-user MFA. You can enable or disable
>
> **[3:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-multifactor-authentication-mfa?u=76281980&t=190)** and enforce MFA for selected users. Go back to Microsoft Entra ID. If you have Microsoft Entra ID Premium license, like a P1 and a P2, you are recommended to use conditional access to enforce MFA. In the left menu, click Security, then click Conditional access. Click Create new policy. Click Users. You can include all users. Under the Access control, click Grant. Under Grant access, click Require multifactor authentication, then click Select. Now, you should know the three ways to enforce multifactor authentication in Microsoft Entra ID: security defaults, per-user MFA, and conditional access, which is recommended. If you use conditional access, I recommend you now to use security defaults and per-user MFA at the same time to avoid confusion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (8), [[Hardware]] (1), [[Tokens]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** mfa (15)
> **Best Practices:** recommended (3)
> **Cross-References:** go back to (2)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### [Implement passwordless authentication](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=0)** - [Instructor] Let's look at implementing passwordless authentication in [[Microsoft Entra ID]]. We have talked about the evolution of authentication methods. In terms of security, usability, and availability, the best solution today is passwordless. In this demo, we will use [[Microsoft]] Authenticator to sign into [[Microsoft Azure|Azure]] without a password. Microsoft Authenticator is a free mobile app. You can download it from App Store or [[Google]] Play. Once configured, we can enable the phone sign-in function in Microsoft Authenticator. Here's my Microsoft Entra ID on Azure portal. First, we need to enable Microsoft Authenticator for users. In the left menu, click security. Then click authentication methods. Under the policies, click Microsoft Authenticator. You can enable it for all users or select groups. Here I select all users. Next, let's select a demo user. Click users. Select, for example, Tracy Westbay. Copy user principal name. Open the browser in the private mode. Sign into portal.[azure.com](https://azure.com). Paste the username and click next.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=97)** Enter the password, click sign in. Now we will start to set up the authenticator. Click next. You need to download the Microsoft Authenticator app and install it on your phone. Here I already have my authenticator installed on my iPhone. Click next. You will set up your account on this app. You can use the app to scan the QR code. Tap add account, then tap work or school account. Then tap scan QR code. After it's done, we can click next. You will receive a notification in the app. Enter the matching number, tap yes. Once the notification is approved, click next. We have successfully set up Microsoft Authenticator. Click done. By default, we can use Microsoft Authenticator to complete a multifactor authentication. We will use this test user, Tracy Westbay. Open the browser in the private mode. Then sign into portal.[azure.com](https://azure.com). Click next, enter password, click sign in.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=197)** It sent a push notification to Authenticator to approve sign in. I will enter the matching number and tap yes. We have successfully signed in. Now let's take one step further to enable passwordless sign in. Open Authenticator app on my smartphone. Tap the user, then tap enable phone sign in. I need to register this device, my phone in Microsoft Entra ID. It's a simple step. I just need to tap continue, then enter the password and tap sign in.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-passwordless-authentication?u=76281980&t=250)** Enter the matching number, tap yes. Then tap register. My phone is registered. Enter the account again. I can see passwordless sign-in has been enabled. Finally, let's do a passwordless sign in to Azure. Open a browser in private mode. Sign in to portal.[azure.com](https://azure.com). Enter the username, click next. On the password page, we can use an app instead. Click it. We will approve the sign in request. It will show a simple number. On our authenticator app, we will enter the same number. Tap yes. I have signed in successfully without a password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (8), [[Microsoft Azure|Azure]] (6), [[Microsoft Entra ID]] (3), [[Google]] (1)
> **Prerequisites:** set up (3), install (1)
> **URLs:** [azure.com](https://azure.com) (3)
> **UI Navigation:** open the (2)
> **Code Identifiers:** iphone (1)
> **Tools:** azure portal (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### [Implement identity protection](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=0)** - [Instructor] Let's talk about implementing Identity Protection in [[Microsoft Entra ID]]. Identity security is critical to today's organizations. With the acceleration of [[Cloud Computing]], traditional network based controls like firewalls are not enough to protect our applications and data. The industry is now moving to identity centric security models like zero trust. The core of identity security is managing identity risk. There are two basic risk types, user risk and sign-in risk. User risk is related to user accounts. For example, leak the credentials like usernames and a password posted on dark web. Sign-in risk is related to authentication requests. For example, someone tried to log in from a different country or from a malware-linked IP address. You can use [[Microsoft]] [[Microsoft Entra ID|Entra]] Identity Protection, a premium feature provided by Microsoft to manage your identity risk. Here's how it works. Microsoft leverages its [[Big Data]] and threat intelligence to detect identity risk, including user risk and sign-in risk. It also gives the risk level as high, medium, and low. The risk detection data is fed to Identity Protection. Protect identities by creating risk policies,
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=97)** investigate risk reports, and notify admins with alerts and a weekly digest. To fully use Identity Protection, you need a Microsoft Entra ID Premium P2 license. Now let's do a quick demo of Identity Protection. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. In the left menu, click Security. Then click Identity Protection. On the overview page, you can see a dashboard for new risky user detected and new risky sign-ins detected. Also, it gives you current identity secure score. You can click it to learn more. Back to Identity Protection. Under Protect, you can configure user risk policy, sign-in risk policy, and a multifactor authentication registration policy. For example, let me click User Risk Policy to configure it. For all users, based on their user risk, I can select medium and above, then click down. And for access control, I can either block access or allow access but require password change. Click done. Turn on the policy, then click save. Please note, Microsoft recommends migrating user risk policy
>
> **[3:14](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-identity-protection?u=76281980&t=194)** to conditional access for more conditions and controls. I can view risk reports for risky users, risky workload identities, risky sign-ins, and risk detections. For example, I can click risky users, then change the risk level, include low, click apply. I can investigate the risk. After it's done, I can confirm user compromised or dismiss user risk. Finally, for notifications, I can set up alerts or weekly digest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Microsoft Entra ID]] (3), [[Cloud Computing]] (1), [[Microsoft Entra ID|Entra]] (1), [[Big Data]] (1)
> **Analogies:** for example (4)
> **Prerequisites:** configure (2), set up (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Implement conditional access](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=0)** - [Instructor] Let's look at implementing conditional access in [[Microsoft Entra ID]]. The core of conditional access is organizational policies. For example, here are some common policies: Require MFA for all users, require password change for high-risk users, and block access for unsupported device platform. In a nutshell, policies are like if-then statements. If meeting a condition, then making a decision. Now let's talk about conditional access. What is conditional access? It brings signals together, makes decisions, and enforces organizational policies. Here's a diagram from [[Microsoft]], which describes the process of conditional access. First, it collects all kinds of signals about users and their locations, applications, devices, and risks. Then it verifies every access attempt to make a policy decision, like allow access or require MFA. Finally, it grants or blocks access to apps and data. Because conditional access may impact [[Business Operations]], you should test your policies before enforcing them. Here are two ways to do it. Create a report-only policy
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=95)** so it will report evaluation result only rather than execute the policy or use what-if tool to evaluate your result. I will cover both of them in the demo later. To use conditional access, you need a Microsoft Entra ID P1 license. If you want to create risk-based policies, you need a Microsoft Entra ID P2 license because it requires premium features provided by Identity Protection. In addition, to avoid conflicts with other tools, before using conditional access, Microsoft recommends that you disable security defaults, disable per-user MFA, and migrate identity protection policies. Now, let's do a demo of conditional access. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. In the left menu, click Security. Then click Conditional Access. Click Policies. I will add a new policy. Give a policy name. For example, require MFA for [[Slack]] sign-in. Under Assignments, I select all users. For target resources, I click select apps. Then click Select. I can search for Slack,
>
> **[3:11](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-conditional-access?u=76281980&t=191)** click it and select. Under Conditions, I can click sign-in risk. Select the sign-in risk level high and medium. Then click Done. Under Access Control, I can click grant. Then grant access, but require multifactor authentication. Click Select. For this demo, we will enable policy as report-only. Finally, click Create. We can see this policy require MFA for Slack sign-in already created. To test the impact of conditional access, we can use the What If tool. Click it. We can select a user, for example, Tracy Westbay. Click Select. We can set up all kinds of conditions like IP address, sign-in risk, user risk. For this demo, let's just click What If. Under the evaluation result, we can see policies that will apply to this user, and the policies that will not apply to this user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (4), [[Slack]] (3), [[Microsoft]] (2), [[Business Operations]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** mfa (5)
> **Tools:** slack (3), azure portal (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Manage Access to Resources

[↑ Back to Table of Contents](#table-of-contents)

#### [Organize Azure resources](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=0)** - [Instructor] You can get hundreds of services from a cloud platform today. For example, here's my [[Microsoft Azure|Azure]] portal. Click More Services. I can see a long list of services in the categories like AI plus machine learning, analytics, compute, containers, [[Databases]], [[DevOps]], and many others.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=28)** We can create so many things on Azure, but how can we organize Azure resources effectively? The answer is applying a governance hierarchy for your resources. In Azure, we have four management levels. Management groups are on the top. They are the logic containers for managing access, policies and compliance. Under a management group, we can have one or more subscriptions. They are billing accounts for creating and using resources. Then we have resource groups. They are logic containers for deploying and managing Azure resources. At the bottom, we have all kinds of resources like containers, [[Virtual Machines]], and virtual networks. There's a concept called inheritance. Lower level units inherit the rules from higher levels. For example, if I apply a policy to a management group, all underlying subscriptions, resource groups, and the resources will be affected too. You can also design the structure of your management groups. For example, under my tenant root group, I can have the management groups for finance, IT, and marketing. Under IT, I can have the management groups for production and development. After building my management groups, I can now add subscriptions.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=122)** For example, under the marketing management group, I can add a demo subscription. Let's do a quick demo on creating management groups. Here's my Azure portal. Click Management Groups. By default, Azure has one called Tenant Root Group. Here I also have some demo subscriptions. Let's create a new management group under the root. Click Create. Give it management group ID. Enter the display name IT Group. Click Submit. Click Refresh. We can see the IT group already created. Now let's create a management group for marketing. Click Create. Give a group ID, mg-marketing. Group display name, Marketing Group. Click Submit. Click Refresh. We can see the marketing group already created at the same level as the IT group. I can create groups under the IT group. Click IT group, then click Create. Give a group ID, mg-it-production, and a display name, IT Prod Group. Click Submit.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/organize-azure-resources?u=76281980&t=219)** Let's add one more. Click Create, mg-it-dev. IT Dev Group. Click Submit. Click Refresh. We can see the two management groups, IT Dev and IT Production, already created under the IT group. Finally, I can move my demo subscription to the marketing group. I just need to click three dots here, then click move. Then select the parent management group. Click Save. Click Refresh. After everything's done, I can click Expand All and here's my Azure governance hierarchy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Databases]] (1), [[DevOps]] (1), [[Virtual Machines]] (1)
> **Analogies:** for example (4)
> **Tools:** azure portal (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Azure role-based access control (RBAC) overview](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] role-based access control, Azure RBAC, provides fine-grained access management to Azure resources. Before we look at it, let's go back to the basic concept of authorization. What is authorization? We have a user and the resources. The user wants to access the resources. Authorization is the process of access control. There are different ways to implement access control. The most popular method is role-based access control or RBAC. To do that, you need to define a role first. A role is a collection of permissions. For example, the owner role includes all permissions, like read, write, and delete resources. The reader role only allows viewing resources. The users assigned the role helps the access control to grant or deny the requested actions on the resources. Now let's look at Azure role-based access control. It has four main components, security principal, role, role assignment, and scope. Security principle in Azure includes user, group, service principal that represents an application, and managed identity for Azure resources. Azure supports two types of roles, built-in roles, for example, owner, contributor, reader, user access administrator,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/azure-role-based-access-control-rbac-overview?u=76281980&t=96)** and a virtual machine contributor. You can also create custom roles based on your business needs. Scope is a set of resources you want to access. In Azure, you can select your scope at four levels, management group, subscription, resource group, and the resource. What is role assignment? It puts everything together for access control. First, we have a security principal, for example, marketing group. Second, we have a role definition, for example, contributor. Third, we have a scope, for example, the resource group for pharmaceutic sales. In this example, the role assignment attaches contributor role to the marketing group at the scope of pharma sales resource group. Finally, Azure RBAC can grant or deny an access request based on this role assignment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9)
> **Analogies:** for example (5)
> **Env Vars:** rbac (3)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Define Azure roles](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=0)** - [Instructor] An [[Microsoft Azure|Azure]] role is a collection of access permissions. Let's look at how to define Azure roles. Here's my Azure portal. I will click Management Groups. I can view the resource hierarchy, then click Tenant Root Group. In the left menu, click Access Control IAM. IAM means Identity and Access Management. Click Roles at the top. Here we can see a list of roles like owner, contributor, and reader. I can filter the list by the role type. For example, building role and custom role.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=49)** I can also select the role category, like compute or general. Let's select the owner role and the click View. Here's the role definition for owner. Under Permissions, we can see all allowed actions. Under [[JSON]], [[JavaScript]] Object Notation, we can find the role definition in JSON format. It has ID, role name as owner, description, assignable scopes as a root scope, which means this role is available for all scopes. Under permissions actions, the asterisk sign is a wildcard. That means all actions. So based on this JSON definition, the owner role has the full access to manage all resources. As a comparison, let's view the contributor role. Click JSON. We can find the role definition in JSON format. Under permissions actions, we have the same asterisk sign, which allows all actions. But under no actions, we need to exclude some permissions like [[Microsoft]].Authorization/asterisk/Delete, Microsoft.Authorization/asterisk/Write, Microsoft.Authorization/elevateAccess/Action.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/define-azure-roles?u=76281980&t=151)** So this definition means the contributor role has the full access to manage all resources, but it doesn't allow you to assign roles in Azure RBAC or Azure role-based access control. Now let's create an Azure custom role. Click Add. Then click Add Custom Role. We can enter custom role name. For example, Custom VM Reader. I'll start from scratch. Then click Next. I'll click Add Permissions. Search permissions for [[Virtual Machines]]. Then click the resource provider, Microsoft Compute. Scroll down to find Microsoft.Compute/VirtualMachines. Select Read: Get Virtual Machine. Then click Add. Click Next. I'm okay with the current assignable scope. Click Next. I can see the role definition in JSON format. Allowed action is Microsoft.Compute/virtualMachines/read. Click Review plus Create. Then click Create. Now go back to the roles and select the type as custom role. I can see my Custom VM Reader role has been created. I can click View to see the role definition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[JSON]] (6), [[Microsoft]] (6), [[JavaScript]] (1), [[Virtual Machines]] (1)
> **Env Vars:** json (6), iam (2), rbac (1)
> **UI Navigation:** select the (3), scroll down (1)
> **CLI Commands:** find (3)
> **Code Identifiers:** elevateaccess (1), virtualmachines (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### [Microsoft Entra roles and Azure roles](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=0)** - [Instructor] People often get confused about the difference between [[Microsoft]] [[Microsoft Entra ID|Entra]] roles, formerly [[Microsoft Entra ID|Azure AD]] roles, and [[Microsoft Azure|Azure]] roles. We use Microsoft Entra roles to manage identities and the buildings in [[Microsoft Entra ID]]. The common building at Microsoft Entrta roles are global administrator, user administrator, building administrator, and help desk administrator. We can use Azure roles to manage access to resources. The general building Azure roles are owner, contributor, reader, and user access administrator. We can elevate access for global administrators in Microsoft Entra ID to manage Azure resources. In this case, global admin will be assigned the user access admin role in Azure at the root scope. Let's do a quick demo of Microsoft Entra roles and Azure roles. Here's my Azure portal. To view Microsoft Entra roles, I will click Microsoft Entra ID. Click roles and administrators. Here's a list of administrative roles. Notice some of them are marked as privileged roles. I can select a role, for example, application administrator. Then click description. Here I can see the summary and the role permissions. So this application administrator role can add, manage,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/microsoft-entra-roles-and-azure-roles?u=76281980&t=96)** and configure enterprise applications, app registrations, and manage on-premises like app proxy. As a comparison, to view Azure roles, I will click management groups, then click tenant root group, then click access control IAM. Click rows at the top. Here we can see a list of roles like owner, contributor, and reader. I can select a row and view the row definition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Microsoft]] (5), [[Microsoft Entra ID|Entra]] (4), [[Microsoft Entra ID]] (3), [[Microsoft Entra ID|Azure ad]] (1)
> **Env Vars:** iam (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Implement Azure role-based access control (RBAC)](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=0)** - [Instructor] Let's look at implementing [[Microsoft Azure|Azure]] role-based access control, or Azure RBAC. Here's my Azure portal. I can click Subscriptions. I have an Azure Demo Subscription. Click it. In the left menu, click Access Control IAM. Under Check Access, click View My Access. I can see my current role assignments as owner and the user administrator. Under Scope, it tells me these roles are inherited from the upper management group and root. I can also check access for others. For example, for the user Tracy Westbay. It looks like Tracy doesn't have any role assignments right now. I can also view all role assignments. Here are all current role assignments for this subscription. Now let's add a role assignment. Click Add at the top and click Add Role Assignment. We can select a role, for example, reader. Then click Next. Let's assign access to a user. Click Select Members. Then choose Tracy.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-azure-role-based-access-control-rbac?u=76281980&t=94)** Click Select. Then click Review plus Assign. We can confirm Tracy has the reader role for the Azure Demo Subscription. If a user has multiple Azure role assignments, how can we determine the effective permissions? Azure RBAC is an additive model. It means the sum of your role assignments are your effective permissions. For example, we have a user and Azure resources. The user has an owner role at the subscription level. The same user also has a reader role at the resource group under the subscription. What are the effective permissions for this user? It's the sum of the owner permissions for the subscription and the reader permissions for the resource group. So it's effectively the owner role for the subscription.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8)
> **Env Vars:** rbac (2), iam (1)
> **Analogies:** for example (3)
> **Tools:** azure portal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Perform Monitoring and Governance

[↑ Back to Table of Contents](#table-of-contents)

#### [Monitor Microsoft Entra ID](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=0)** - [Instructor] Let's talk about monitoring [[Microsoft Entra ID]]. In general, we have two ways to monitor Microsoft Entra ID. First, we use logs, for example, sign-in for sign in activities and how users access resources; audit logs for changes apply to your tenant, like adding a user or assigning a license; provisioning logs for provisioning activities done by third party services, like creating a user in Adobe or removing a group from ServiceNow. Second, we use monitoring tools, for example, Log Analytics for acquiring and analyzing various Microsoft Entra ID logs; workbooks for building rich interactive reports; and usage and insights for reporting application and authentication activities. Now let's do a quick demo for Microsoft Entra ID monitoring. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. In the left menu under Monitoring, we can see three types of logs: sign-in logs, audit logs, and the provisioning logs. Click Sign-In Logs. We will see a list of sign-in activities. I can select the time range, for example, last seven days. Then click Apply. I can add filters, for example, status.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=94)** Click Apply. Then select status as success. Click Apply. I can then click a log to view the activity details, like basic information, location, and device information. I can do the similar things for audit logs and the provisioning logs. Before we can use the tools like Log Analytics and the workbooks, we need to first configure diagnostic settings. Click Diagnostic Settings. I already have one setting. I can either edit setting or add a new one. Click Edit Setting. For [[Data Collection]], I can select categories like sign-in logs, audit logs, provisioning logs, user risk events, risky users. For destination details, I can send to Log Analytics workspace, archive to a storage account streamed to an event hub, and send to a partner solution. Here I will send data to my demo Log Analytics workspace. Please note, you need Microsoft Entra ID, formerly [[Microsoft Entra ID|Azure Active Directory]], P1 or P2 license to export sign-in data. Finally, I can save the settings. Now let's click Log Analytics. On the left sidebar, we can see a list of available tables. In the query window,
>
> **[3:06](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/monitor-microsoft-entra-id?u=76281980&t=186)** we can use Kusto Query Language or KQL to analyze data. I can change the time range from last hour to last seven days. Let's enter a query. For example, sign-in logs. Summarize count by location, then click Run. I can see the query results. I can also use chart to visualize the results. Next, let's use workbooks to see some rich reports. For example, click the workbook for sign-ins. Change the time range to last seven days. I can see a dashboard for sign-in activities. Finally, I can click Usage and Insights. I can see [[Microsoft]] [[Microsoft Entra ID|Entra]] application activity and authentication methods activity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (6), [[Microsoft Azure|Azure]] (1), [[Data Collection]] (1), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft]] (1)
> **Analogies:** for example (6)
> **Env Vars:** kql (1)
> **Tools:** azure portal (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Identity secure score](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=0)** - [Bryan] Let's talk about identity secure score. What is identity secure Score? It's a percentage number indicating how aligned you are with [[Microsoft]]'s security recommendations. Identity secure score will help you measure your identity security posture, plan your improvement actions, and review your improvement results. Now let's do a quick demo for identity secure score. Here's my [[Microsoft Entra ID]] on [[Microsoft Azure|Azure]] portal. In the left menu, click Security, then click Identity Secure Score. It shows the secure score for identity and the last updated date and time. Click the information icon. It tells you secure score updates can take up to 48 hours. I can also see the comparison between my organization and the typical company of a similar size. It has a score history showing how my score has changed over time, like 7 days, 30 days, and 90 days. Under the Improvement actions, I can see a list of action items. I can edit columns and add current score, max score, and status. Click Apply. For a specific action I can see how it impacts the score, what's the current score, what's the max score I can get, how it impacts user, the implementation cost,
>
> **[1:36](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/identity-secure-score?u=76281980&t=96)** and the current implementation status. I can sort by status to see the tasks completed or to address. Click an action. I can see the detailed information of this improvement action. After reviewing the recommendation, I can decide how to proceed with this action. Click Status. I can select to address it at some point in the future. Accept the risk, plan to implement it, resolve through third party and resolve through alternate mitigation. For example, your administrative controls like a HR policy. Click Planned, then click Save. Now I can see this improvement action is planned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microsoft Entra ID]] (1), [[Microsoft Azure|Azure]] (1)
> **Tools:** azure portal (1)
> **Analogies:** for example (1)
> **Speakers:** - [bryan] (1)

#### [Entitlement management](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=0)** - [Instructor] Let's talk about entitlement management. Entitlement management can help you manage IAM lifecycle at scale, automate access request workflows. Entitlement management is a feature of [[Microsoft]] [[Microsoft Entra ID|Entra]] Identity Governance. You need a [[Microsoft Entra ID]] P2 license before use it. So, how does entitlement management work? First, admins create catalogs, which are containers of related resources and access packages. Resources include groups and teams, applications, and [[SharePoint]] sites. Access packages define resource roles and request policy. After the configuration is done, requesters can use access packages to request access. Now, let's do a quick demo of entitlement management. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] Portal. In the left menu, I will click Identity Governance. Under Entitlement Management, click Access Packages. Let's create a new access package. Give a name, for example, Pilot Apps. Add a description. For the catalog, which is the container of this access package, we can use the default general catalog. Click Next: Resource Roles.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=94)** Here, we can add groups and teams, applications, and SharePoint signs. Click Groups and Teams. Check See All Groups and Teams, then select Group-App-Pilot. Click Select. Then I will select the role as Member, so access requesters will join the group, App Pilot as members. Next, click Applications. Click See All Applications, then click [[Slack]]. Click Select. Then for the role, I will select User, so access requesters can use Slack application. Click Next: Requests. Here, we can create a request policy. Under Users Who Can Request Access, choose For Users in Your Directory, then select All Members Excluding Guests. Click Yes to enable new requests, then click Next: Requester Information. I can create some questions for requesters. I can specify answer format. I will leave them for now. Click Next: Lifecycle. I can set up a number of days assignments expire. Can user request a specific timeline? And do we require access reviews? For this demo, we select No.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=188)** Click Next: Rules. You can configure a rule. A rule is like if-that statement, if an event happens, then triggers a custom flow. We leave it for now. Click Next: Review + Create. Here's the summary of access package configuration. After reviewing it, click Create. We have created this access package for Pilot Apps. There's My Access portal link. Users can use this link to request this access package. I can copy and paste this one. Now, let's sign in as a user to request the access package. Copy the link, then open the browser in private mode. Paste the link. I will sign in as a user. After sign in, I can see the access package, Pilot Apps. I can then click Request, enter business justification, for app testing, then click Request Access. The request is being processed. Now, let's go back to the access package. Click Assignments. We can see the status is Delivered. To confirm the result, I will go to Microsoft Entra ID,
>
> **[4:46](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/entitlement-management?u=76281980&t=286)** then click Groups. Click Group_App_Pilot. Click Members. I can see Henry has been added as a member. Go back to Microsoft Entra ID, then click Enterprise Applications. Click Slack, then click Users and Groups. Henry has been assigned a user role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID]] (4), [[Slack]] (3), [[SharePoint]] (2), [[Microsoft]] (1), [[Microsoft Entra ID|Entra]] (1)
> **Tools:** slack (3), azure portal (1)
> **UI Navigation:** select the (1), open the (1), go to (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1), configure (1)
> **Env Vars:** iam (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Access reviews](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=0)** - [Instructor] Let's talk about access reviews. The purpose of access reviews is ensuring the right people have the right access to groups and applications. So how do access reviews work? First admins create a program. Then within the program create one or more access reviews for teams, groups, or applications. Next, reviewers need to perform access reviews within scheduled timelines. Finally, based on the review settings and the results, access will be kept or removed. Access reviews are part of identity governance. You need a [[Microsoft Entra ID]] P2 license before you use it. Now let's do a demo of access reviews for the application [[Slack]]. Here's my Microsoft Entra ID on [[Microsoft Azure|Azure]] portal. Click identity governance. Under access reviews, click programs. Click new program, give a name. Program Application reviews. Add a description, program for application reviews. Then click create. Click program we just created. We can see the dashboard for this program. Click access reviews. Click new access review. Under review type, select what to review. I will choose applications.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=95)** Then click select applications, then select Slack. For scope, select all users, click next. Under reviews, select reviewers. We can choose selected users or groups, users review their own access, or managers of users. I choose self reviews. For duration, I keep three days. For review recurrence, I will select quarterly. Start date is today, end date is never, click next. Under settings for this demo, I don't use auto apply results to resource. If reviewers don't respond within the scheduled timeline, I choose no change. At end of review, I will send a notification to selected users. For example, myself. Click select. I will keep the default values for the [[Representational State Transfer (REST)|rest]]. Click next. I will give the review name, Access review for Slack. Then click create. Click refresh. We need to wait for the status to become active. Now let's switch to a reviewer to perform the access review.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/access-reviews?u=76281980&t=189)** After the access review is active, the reviewers will receive a notification email like this. Action required, review access to the Slack app. It also shows the end day of the review period. The reviewer can click the link to start review. Now Henry can perform the access review. Do you still need access to the app Slack? Let's select yes. Give the reason, for app testing. Click submit. Henry has completed the access review. Go back to the access reviews in Microsoft Entra ID. Click access review for Slack. I can see the current review status. One user has approved the access. Click results. I can see Henry already approved the access. I can then click view to see audit logs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (6), [[Microsoft Entra ID]] (3), [[Microsoft Azure|Azure]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** slack (6), azure portal (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Privileged identity management overview](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=0)** - [Instructor] Let's talk about privileged identity management. Privileged roles like administrators, owners, and contributors have high access permissions to critical resources in your organization. If a privileged account gets compromised or misused, it could lead to some significant damage to your business. So we need a solution to manage the risk of excessive and unnecessary access permissions. That's why we need a privileged identity management. We can use privileged identity management to manage two types of roles in [[Microsoft Azure|Azure]]. [[Microsoft]] [[Microsoft Entra ID|Entra]] roles for managing identities and billings in [[Microsoft Entra ID]]. The common building Microsoft Entra roles are like global administrator, user administrator, and the billing administrator. Azure roles for managing access to Azure Resources. The general building Azure roles are like owner, contributor, reader, and a user access administrator. The core of privileged identity management is a two-step role assignment process. When you assign a role to a user, it creates two assignments, eligible assignment, and active assignment. Eligible means a user is qualified for a role, but they need to activate the role before performing privileged tasks. Once the job is done, they can deactivate the role. For example, Henry is eligible
>
> **[1:34](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/privileged-identity-management-overview?u=76281980&t=94)** for a user administrator role. When he needs to update some user information, he should first activate this administrator role. After finishing the work, Henry will not need the privileged access anymore, so he can deactivate the role. Privileged identity management offers some key features. For example, just-in-time or JIT access. It means users get temporary access permissions only when they need to do some privileged operations, like adding or changing accounting information. Time-bounded, it means users can only activate and use a privileged role within a defined time window. Multifactor authentication, or MFA, can be enforced when users activate a privileged role. Approval and a justification can be required for activating privileged roles. The general workflow of privileged identity management starts with admins assign users with eligible roles for Microsoft Entra ID or Azure Resources. Users activate eligible roles before performing privileged tasks. Reviewers approve role activation requests, managers audit the history of privileged role assignments and activations. In addition, we can schedule access reviews for privileged roles to ensure users still need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Microsoft]] (2), [[Microsoft Entra ID|Entra]] (2), [[Microsoft Entra ID]] (2)
> **Env Vars:** jit (1), mfa (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Implement privileged identity management](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=0)** - [Instructor] Let's look at implementing privileged identity management. First, I will assign the privileged role for [[Microsoft Azure|Azure]] Resources. Here's my [[Microsoft Entra ID]] on Azure portal. In the left menu, click Identity Governance. Under Privileged Identity Management, we can assign [[Microsoft]] [[Microsoft Entra ID|Entra]] roles, formally [[Microsoft Entra ID|Azure AD]] roles, or Azure resource roles. Click Azure resources. Click Azure resources. Here I already have the Azure demo subscription identified. You can click Discover resources to onboard the resources for management. Click Resource type. We can add a resource group. Click the resource group rg-demo. In the left menu under Management, click Assignments. Click Add assignments at the top. For accessing resource group, I can select the role, for example, contributor. I will then select a member, for example, Morgan King. Click Next. For the assignment type, I will select eligible. I can specify when this assignment starts and when it ends. Click Assign. We can see Morgan is now eligible for a contributor role.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=97)** Now let's sign in as a user Morgan to activate the role. Open the browser in private mode. Type portal.[azure.com](https://azure.com), sign in as the user. Morgan is now on the Azure portal. Click Subscriptions. Currently, she can't access any subscriptions. Click View eligible subscriptions. Morgan is eligible for the contributor role to access the resource group rg-demo. Under Action, click Activate. Morgan can select activation start time. And the duration, for example, two hours. And enter the reason for activation. Click Activate. It will go through some stages to activate this role. This process may take a while. After it's done, we can see the role is activated. Now Morgan can access the resource group rg-demo.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=172)** She can see a list of resources. As a contributor, Morgan can add, update, and delete any resources within the resource group. After the job is done, Morgan can deactivate the contributor role. Go to Subscriptions, then click View eligible subscriptions. Click Active assignments. For the contributor role, under Action, we can click Deactivate. Click Deactivate. It will go through some stages to deactivate this role.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/implement-privileged-identity-management?u=76281980&t=223)** After it's done, click Active assignments. We can see this role is not active anymore. Now let's see how to audit role assignments and activation. Go to Microsoft Entra ID. In the left menu, click Identity governance. Then under the Privileged Identity Management, click Azure resources. Under Manage, click Azure resources. Select the resource type and add resource group. Click the resource group rg-demo. On the main view page, we can see the recent role activation. In the left menu under Activities, click Resource audit. I can see the history of role assignments and activations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[Microsoft Entra ID]] (2), [[Microsoft]] (1), [[Microsoft Entra ID|Entra]] (1), [[Microsoft Entra ID|Azure ad]] (1)
> **UI Navigation:** select the (2), go to (2), open the (1)
> **Analogies:** for example (3)
> **Tools:** azure portal (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-azure-identity-and-access-management-23388392/next-steps?u=76281980&t=0)** - [Bryan] You made it. Congratulations on completing this course. Now you have a comprehensive view of [[Microsoft Azure|Azure]] Identity and Access Management. As a quick summary, we learned how to manage identities for users, guests, groups, devices, and applications. Configure authentication methods like MFA, passwordless signing, and conditional access, control access to resources using Azure RBAC, perform identity governance using entitlement management, privilege identity management, and access reviews. This means we cover the whole IM framework, including identity, authentication, authorization, and auditing. So what's next? The best way to learn something is by doing it. I recommend you to do some hands-on exercises on Azure. This course can help you prepare for some Azure certifications. You can visit the [[Microsoft]] Certifications website to learn more. Finally, let's stay connected. You are welcome to connect with me on [[LinkedIn]]. I look forward collaborating with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Microsoft]] (1), [[LinkedIn]] (1)
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