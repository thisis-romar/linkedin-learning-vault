---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: github-foundations-privacy-security-and-administration
url: "https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration"
duration_minutes: 49
duration: 49m
level: Beginner
updated: 10/17/2023
learners: 4495
skills:
  - GitHub
  - Privacy
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHg0wPhg4lCpQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697155619629?e=2147483647&amp;v=beta&amp;t=O-FTaX-4NRzFTJBUO7DwmPGIy_9gjuOj9dKt0FIOrFU"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Prepare for the GitHub Foundations Certification]]'
prev_courses:
  - '[[Learning GitHub Codespaces for Enterprise]]'
next_courses:
  - '[[Benefits of GitHub Community]]'
path_nav: '[{"path":"Prepare for the GitHub Foundations Certification","position":6,"total":7,"prev":"Learning GitHub Codespaces for Enterprise","next":"Benefits of GitHub Community"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/github
  - skill/privacy
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md)

![GitHub Foundations: Privacy, Security, and Administration](https://media.licdn.com/dms/image/v2/D4E0DAQHg0wPhg4lCpQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697155619629?e=2147483647&amp;v=beta&amp;t=O-FTaX-4NRzFTJBUO7DwmPGIy_9gjuOj9dKt0FIOrFU)

# GitHub Foundations: Privacy, Security, and Administration

> GitHub helps software engineers manage everything from their own projects to complex development workflows with larger companies. In this course—one of seven installments in the GitHub Foundations series—work towards GitHub certification as you learn how to secure your GitHub account with 2FA, access permissions, and EMUs, as well as configure and manage repositories and organizations. Noah Gift, 

> [LinkedIn Learning](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration) | 49m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building secure and efficient GitHub workflows](#building-secure-and-efficient-github-workflows)
- [**1. Ensuring Your GitHub Account's Integrity: Authentication and Security Introduction**](#1-ensuring-your-github-accounts-integrity-authentication-and-security-introduction) (4 videos)
  - [Introduction to authentication and security](#introduction-to-authentication-and-security)
  - [Securing account with 2FA](#securing-account-with-2fa)
  - [Understanding access permissions](#understanding-access-permissions)
  - [Enterprise Managed Users (EMUs) explained](#enterprise-managed-users-emus-explained)
- [**2. Configuring and Managing Repositories and Organizations: GitHub Administration Introduction**](#2-configuring-and-managing-repositories-and-organizations-github-administration-introduction) (10 videos)
  - [Introduction to GitHub administration](#introduction-to-github-administration)
  - [Enabling and disabling features](#enabling-and-disabling-features)
  - [Repository permission levels explained](#repository-permission-levels-explained)
  - [Setting repository visibility options](#setting-repository-visibility-options)
  - [Repository privacy settings and options](#repository-privacy-settings-and-options)
  - [Features and options in the security tab](#features-and-options-in-the-security-tab)
  - [Understanding repository insights](#understanding-repository-insights)
  - [Managing collaborators in GitHub](#managing-collaborators-in-github)
  - [Managing organization settings](#managing-organization-settings)
  - [Members, teams, and roles in a GitHub organization](#members-teams-and-roles-in-a-github-organization)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps: Continuing your GitHub mastery journey](#next-steps-continuing-your-github-mastery-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building secure and efficient GitHub workflows](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/building-secure-and-efficient-github-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/building-secure-and-efficient-github-workflows?u=76281980&t=1)** Welcome to building secure and efficient [[GitHub]] Workflows. This is the introduction to the course. First up, my name is Noah Gift and I'm going to be your instructor. I have a background as a Duke Executive in Residence. This means that I teach [[Cloud Computing]], [[Data Engineering]], machine learning operations, and I'm also the author of ten technical books. So you're in great hands for this course. First up, we have in Section One, Authentication and Security: Ensuring Your GitHub Account's Integrity. We'll cover authentication and security. Also, how to secure your account with two-factor auth, understanding access permissions as well as enterprise managed users explained. In Section Two, we get into the administration. This includes configuring and managing repositories and organizations. This means that we'll talk about an intro to the administration. We'll also talk about enabling and disabling features, repository permission levels explained. Also, repository visibility options and security insights, collaboration, and we'll also work with members, teams, and rules inside of GitHub organizations. All right. We have a lot to cover. Let's go ahead and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Cloud Computing]] (1), [[Data Engineering]] (1)
> **Tools:** github (3)
> **Definitions:** means that (2)


### 1. Ensuring Your GitHub Account's Integrity: Authentication and Security Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to authentication and security](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-authentication-and-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-authentication-and-security?u=76281980&t=8)** Let's explore Authentication and Security Concepts. First, we have the user interface layer. The idea here is that this is the topmost layer that a user interacts with. In the context of a platform like [[GitHub]], it could include both the web interface and the command line interface as well. You could think about how proper authentication starts even before a user would make a critical operation. And this is from the UI layer. Now next, we have the API endpoint and service, and this layer is responsible for handling the HTTP request made from the UI. At this point, it's the API [[Tokens]] or the SSH key that are verified. So this is where you would authenticate, for example, if you're using GitHub to clone a repo. That authentication process is in that endpoint layer. There are some other things to consider. For example, a first line of defense like rate limiting or IP filtering, like if a particular band of IP addresses maybe from a particular cloud vendor is doing a lot of abuse, you could limit that IP from accessing the API endpoints or you could even do rate limiting as well. So there's lots of techniques here at that layer. Next up, we have authentication and authorization middleware. So this is a specialized set of services responsible for verifying a user's identity, authentication, and the permissions, which would be the authorization.
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-authentication-and-security?u=76281980&t=104)** So a good way to think about this would be the role of two-factor authentication or 2FA and access control lists at this layer. So in this case, what you're doing is you're adding another layer of security so that, for example, if there was some kind of middleman attack where there's a hijacked request, they also wouldn't be able to log in because there's a separate physical device that's necessary for that authentication to occur. And in terms of backend [[Data Storage]], this is where a user would provide credentials and their permissions are stored. And this could be, let's say, a database, a distributed ledger. It could be a [[Version Control]] system, depends on the architecture of the system. But in this case, you would need strong encryption to make sure that this data is safeguarded because it's sensitive data. So in the case of, let's say, an accidental configuration error that exposed some of that data, if it's encrypted, it doesn't matter because the encrypted data would not be able to be decrypted. So it's just another layer of security when you're building an authentication and security system. We also have logging and auditing, and this is really the final layer here, and this is something that is often overlooked, but it's critical for maintaining security. It would log the authentication and authorization attempts and actions. So why would you care about this? Well, it's for forensic analysis. And also it can help you identify and cure security breaches.
>
> **[3:21](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-authentication-and-security?u=76281980&t=201)** So if you see some unusual behavior occurring, for example, you know, outlier-type requests where you're getting hundreds of requests per second, there's something going on, and you would use this to investigate that security incident.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Tokens]] (1), [[Data Storage]] (1), [[Version Control]] (1)
> **Env Vars:** api (3), http (1), ssh (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2), ssh (1)
> **Tools:** github (2)
> **Definitions:** is a  (1)

#### [Securing account with 2FA](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/securing-account-with-2fa?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/securing-account-with-2fa?u=76281980&t=8)** Securing [[GitHub]] account with two-factor authentication is a critical workflow for the enterprise because you can ensure that you're going to have the security best practices enabled. Why would you want to do two-factor authentication? Well, first up, it's the most secure way to authenticate, and if you use one-time password applications to configure two-factor auth or TOTP, which is a time-based version, you're going to have the most secure method. So first step, let's see in the UI how you do this. On the right here we can see there's a settings picture. When you open up the settings, you go under password and authentication and it has a section called "Enable two-factor authentication." Next step, you would set up the authenticator app, so you would go through here and scan their QR code, set that up, and then you now have time-based one-time password, which is the most secure form of two-factor auth. Once you've got that set up, then the final step in Step 4, would be to set up backup security keys. These backup security keys would be much more secure than SMS and it's a recommended best practice to set up those backup security keys. So once you've got it set up, let's go ahead and walk through the flow here of how it would work. So we see here in this blue icon, user interface. The user would log in and this would begin the login request. This login request here would involve the username
>
> **[1:41](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/securing-account-with-2fa?u=76281980&t=101)** and the password. So this is the first factor in the two-factor authentication. Next step, after receiving the login request, the server would check the password against the stored credentials. So if you can't get past this, you're not going to be able to go to the next phase, and that's why there's two factors to the authentication. After you've been able to be verified, the next step here, in Step C, would be the two-factor token generation. So once the password is verified, the server would initiate the 2FA process. This would involve sending a unique token to the user via either SMS or the generation through the one-time password. And at this point, you've now got this generated in real time. So there's a time-based component as well, which makes it much more secure. Once you've got the token, the next step here would be to take that and go to the GitHub UI and put in that token and this would be the final layer of security. Once you've been able to get that verified, the server would validate the submitted two-factor token against the one it generated and sent, and there would be a brief validation period where the token would be available during this enhanced security measure. So this is a very secure method for GitHub. Soon it will be the recommended method and required for all accounts, and this is the workflow in order to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Prerequisites:** set up (5), configure (1)
> **Env Vars:** sms (2), totp (1)
> **Tools:** github (3)
> **Best Practices:** recommended (2), best practice (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Analogies:** picture (1)

#### [Understanding access permissions](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-access-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-access-permissions?u=76281980&t=8)** Here we have Access Permissions and Roles for [[GitHub]]. There are several different ways to consider access permissions and roles. First is a user type. So in terms of a user type here, this could be repository owners, organization owners, team members, external collaborators. We also have a repository access level. So, for example, can you read to an access or could you write to access a particular repo? And we also have organizational level. So we can think of things including organization owners, billing. And in the case of enterprise, we have these enterprise accounts here. So the first step, look at the personal accounts here. I think this is a good place to start. If we look at some of the things that can happen is perform the personal account, the owner has access to every action that you can do in GitHub, which makes sense. You could create a new repo, you could pull a repository or write to a repository, et cetera. But often you'll want to collaborate with people, but you don't want to give them any level of permission that would be administrative. So typically what you do is you would add a collaborator level access. This means that a collaborator could either read or write or both to your repository. The next level up here would be an organization account. So you'll see this with, let's say, a company may have several different repositories, and on an organizational level, the roles would be an owner, a billing manager,
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-access-permissions?u=76281980&t=104)** and then a member. So if you're a member of an organization, you wouldn't have access to the billing system or be able to destroy repositories or even the entire organization if you weren't the owner-level access. So what can we do here in terms of permissions? We have people, teams, read/write/admin. These are some of the things to consider. So in terms of a person, again, this would just be a typical operation that you would have as a role and this person would be able to work with the projects. In terms of a team, this is where you break things up so that you could organize potentially on the level of access that someone has. So maybe there are certain repositories that are private. Maybe this is top-secret code. A certain team could access it, but another team could not. That would be one way to divide up amongst teams. Finally, in terms of the read/write/admin, as well, this would be when you would control at the organizational level, for example, who could create new repositories or who could make a repository public or private. Those are some of the things to think about. In terms of enterprise, this is also a pretty interesting aspect of the whole GitHub ecosystem in that you can also organize with a more enterprise-level flavor. So what this means is that you could collaborate within your entire organization, but the administrator could have visibility and management. What this means is that an enterprise owner could invite existing organizations to join the account or transfer organizations.
>
> **[3:20](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-access-permissions?u=76281980&t=200)** You can also enforce policies at the enterprise level. So it gives you the level of control that's necessary for a large organization. You can also have billing and usage, user licenses, for example, to get access to things like [[Generative AI]], coding assistance, or GitHub actions for building services, the compute hours, or GitHub code spaces. So it's important to think about the different levels of access, what are the permissions that are associated with it, and then what are the roles that make sense given a particular type of account? Again, personal, organizational or enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Generative AI]] (1)
> **Tools:** github (5)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)

#### [Enterprise Managed Users (EMUs) explained](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enterprise-managed-users-emus-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enterprise-managed-users-emus-explained?u=76281980&t=8)** Enterprise-managed users allow you to control the user accounts of your enterprise users. If you have this license service from [[GitHub]], your identity provider as well, which is an IdP, is a mechanism that you can use throughout the GitHub enterprise managed user application. So you can use this IdP to provision new user accounts and you can also control usernames, profile data, team memberships, and repository access as well. So let's go ahead and walk through this diagram here and take a look. First up, we have the admin dashboard here and this allows you to have a central hub to manage the enterprise, users, including role assignment and permissions. If we look at the user portal, this would be where you would log in as an EMU to do a self-service or update a profile and also access allocated resources. If we go into the authentication and authorization layer here, we can see that the Identity Provider, IdP, serves as the secure vault of the user identities and it ensures reliable and [[Secure Authentication]]. So it works with several different providers: [[Microsoft Entra ID|Azure Active Directory]], Okta, PingFederate. These are all different services that you can use. And then in terms of access control, this implements a rule-based policy as well as a policy-driven permission to grant or restrict access.
>
> **[1:45](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enterprise-managed-users-emus-explained?u=76281980&t=105)** If we get into the core services here, [[User Management]] is a service that's responsible for CRUD. This would be create, read, update, delete, and operations on EMUs. And then in terms of resource allocation, it would allocate and manage resources like disk space, compute power, or even service access to EMUs. If we go into the data layer, this would be where we have persistent storage of profiles, including login details, roles, and preferences. And also, we have a central repository for resources like files or applications. If we dive into external services here, there are many different external services that can be audited via the enterprise interface and you may want to collect those and put those into some kind of security monitoring system to make sure that everything that you hope is happening in terms of security is actually occurring. And you could also trigger some kind of notification service as well. So there's a rich feature set of things you can audit, anything from, you know, billing systems to access to repos to scanning patterns, et cetera, for secrets. Finally, we have networking here, where you would look at maybe building out a system that could interact with the enterprise system and this would manage routes and API requests and allow you to maybe combine different resources and, of course, you
>
> **[3:19](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enterprise-managed-users-emus-explained?u=76281980&t=199)** would load balances. So really, the EMU is part of maybe a richer application that you're building in your organization and you can leverage the existing services to provide new features and new security and enhanced hardening for your organization when you're dealing with source control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Secure Authentication]] (1), [[Microsoft Entra ID|Azure active directory]] (1), [[User Management]] (1)
> **Env Vars:** emu (2), crud (1), api (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** github (2)
> **CLI Commands:** make (1)


### 2. Configuring and Managing Repositories and Organizations: GitHub Administration Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to GitHub administration](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-github-administration?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-github-administration?u=76281980&t=8)** Here we have the [[GitHub]] interface and let's dive into some of the administrative features that you can use when you're looking at the console. First up, you have your profile. So in this icon here, if I select it, I can select my profile. And at this point, it gives me an overview of the ability to edit it. So this is a good place to start when you're controlling your GitHub account, is to put whatever features you'd like inside of here and you can control this from this icon. Now notice as well from the README file, this is a special feature of GitHub. You can also edit this as markdown and this is a great way to have a more robust profile. If we go back here as well, we can look at repositories. This is one of the key features that you can administer and inside of here you could select new for a new repository. You could also search for your existing repositories as well. So this is an administrative feature that you get from a single user account. Now if we go down to projects, you can also administer projects. You can also administer [[Codespaces]]. Let's go ahead and take a look at that real quick. If we go to Codespaces here and you say "new Codespace", we can actually pick a repository for the Codespace to be administered inside of. We also could administer a new Codespace as well, and that's where we would select the different kinds of Codespace types from GPU to CPU. If we scroll down here later, we can also look at organizations. So organizational level shows us the different things
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/introduction-to-github-administration?u=76281980&t=104)** that we have here. So we have organizations that I belong to. I also have the ability to have ownership privileges. So in this particular organization, for example, if I go into it, you can see that I can pin repositories onto the organization. I also have a huge list of repositories as well. There's over 1,000 repositories and I also have teams that I can administer and people. So the organization is a higher-level entity that is beyond just the reach of a single user, like an individual GitHub account, and it gives us more organizational control. We also could go into the settings here and set up things like billing, for example, or repository roles, member privileges, moderation requests from users, et cetera, and even get into features like [[Microsoft Copilot|Copilot]]. For example, would we want to enable certain restrictions or features with Copilot? Also, can we configure actions, webhooks, discussions, packages, pages, et cetera? So, really, there's a much more rich interface when you get into the organizational level because you have team-level privileges and organizational-level privileges that can be propagated across the entire organization, not just your individual account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Codespaces]] (2), [[Microsoft Copilot|Copilot]] (2)
> **Definitions:** is a  (4), is an  (1)
> **Tools:** github (4)
> **Env Vars:** readme (1), gpu (1), cpu (1)
> **UI Navigation:** go to (1), select the (1), scroll down (1)
> **Analogies:** for example (3)
> **Prerequisites:** set up (1), configure (1)
> **Documentation:** the readme (1)

#### [Enabling and disabling features](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enabling-and-disabling-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enabling-and-disabling-features?u=76281980&t=8)** Here we have an enterprise account for [[GitHub]] and it shows us an overview of how you can manage and control features from a hierarchical perspective. First up, inside of this structure, we have the ability to control not just one but multiple organizations in one main interface. Now, if we go to people as well, we can see there's different people. And if we look at policies as well, we can see this is where you would enable or disable features. So if we take a look at what this would do from a repository level, you could set up a policy that says we want no permissions, read/write, et cetera. And these repository policies would propagate across all of the organizations that they apply to. We also could enable or disable features by selecting them. So let's go ahead and take a look at something that is a beta feature here, which is [[Codespaces]]. And in Codespaces, I can set up a billing limit if I wanted to, for my organization. So this would be an important field to look at if you're going to enable Codespaces for, let's say, 1,000 people. You could limit the spend so that it matches your IT budget. Now, also notice that we can enable or disable this. So this is currently enabled for all organizations, but we could specify, for example, a specific organization or we could disable. We could disable this feature so that nobody could use Codespaces. Another thing that we could do as well is we could select [[Microsoft Copilot|Copilot]].
>
> **[1:43](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/enabling-and-disabling-features?u=76281980&t=103)** Now, Copilot as well has policies. For example, we could allow or block certain suggestions based on rules that we set up. We also could enable other sub-features like [[GitHub Copilot]] Chat. In this case, we can see enabled, disabled, et cetera. Now, in terms of managing the organization, we also could do that at an organizational level. We can also do the same thing as well to enable features for GitHub actions, which is a build system that is hosted in the cloud. And we can say that, for example, all actions can be used or only specific actions that were designed for the enterprise, or we could specifically allow non-enterprise actions and reusable workflows. It really is up to us on what we want to configure. Finally, if we look at runners, we could also disable, for example, a self-managed, self-hosted runner at the repository level. Finally, if we go down to projects, teams, code security, and analysis, these are also features that we can enable as well. So really, this is the idea of enabling or disabling features at an enterprise account level, and it can propagate down to multiple organizations, one organization, or in some cases like this, you can enable those features for all organizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (4), [[GitHub]] (3), [[Microsoft Copilot|Copilot]] (3)
> **Analogies:** for example (4)
> **Prerequisites:** set up (3), configure (1)
> **Tools:** github (3)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Repository permission levels explained](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/repository-permission-levels-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/repository-permission-levels-explained?u=76281980&t=8)** [[GitHub]] Repository Permission Levels can be divided into three main ways of thinking about the levels. First, we have no access. The idea here is that a user or collaborator can't view or interact with the repository. The implication is that this is essential for security because it ensures that unauthorized users can't even see the repository existing. A use case would be for a past collaborator who no longer needs access or for people that should never have access like an external vendor. In terms of immutable access, the immutable access allows a user to read the code but not make any changes. This idea would be similar to a read-level permission in GitHub. The implications would be this is great for auditing or automatic deployment or even for a non-technical stakeholder, but not for somebody that needs to make changes. So that would be mutable access. And with this, that means you have write or even admin permissions to modify things like the administration of the repository itself. So this would be co-developers, project managers, or even [[DevOps]] people. So this corresponds now to the policies we see here below; repository creation, repository forking, the administration repository, or even repository outside contributors. Okay. Here we have the repository policies inside of GitHub Enterprise and you can see how these translate very cleanly
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/repository-permission-levels-explained?u=76281980&t=104)** to the diagram before. Repository creation, there's either no policy disabled or you can explicitly say that members can create public, private, or internal. Similarly, with repository forking, you can set up policy whether it's either enabled or disabled. Right. This would be mutating or immutable repository outside as well. Can you actually have repository administration allowed? And then in terms of the administration of the repository itself, can people make changes to the repository? Can you delete or transfer? And if there is an issue with deletion, what are the different aspects of this that we care about? So these are all things that you are able to control at a granular level using GitHub Enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[DevOps]] (1)
> **Tools:** github (4)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### [Setting repository visibility options](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/setting-repository-visibility-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/setting-repository-visibility-options?u=76281980&t=8)** [[GitHub]] Repository Visibility Levels play an important role in the security of both an individual and an organization. Let's go ahead and take a look at the three levels here. First up, we have public. In a public level, that means the repositories are visible to anybody, including those who are not logged in to GitHub. The use case would be open source, documentation, or publicly distributed software. And the security implications are that anybody could read or fork the repository. Next up, we have internal and this would be for enterprise users and the repositories are only visible to the enterprise members. The use case would be a shared library or internal documentation or even non-sensitive projects. And the security implications are that it restricts the visibility to inside the enterprise, but allows any member to read it or to fork it. We also have private. The use case here is that its sensitive data, high-security projects or even private development. The repositories are visible only to specific users who have been granted access. The security implications are that it's highly restricted and only users with permissions can access it. We also have a correlation here with secrets management in that there is a safer or riskier approach depending on whether you're keeping those secrets tied into a private repository, which you only have control over, or if you start to gradually
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/setting-repository-visibility-options?u=76281980&t=104)** lessen the controls over it. Let's look at how repository visibility plays out in a demo. First, we have an organization called CloudComputing. Inside of this CloudComputing organization, which is part of the University enterprise, we have a repo here called Test. Let's go ahead and create a new one. In this case, we'll say new. But notice what happens here is that I have the ability to, by default, have an internal repo. So this means that the enterprise members can see it. So if I have one or two people in my enterprise, that's all that will be able to see it. We also have public, which means anybody on the Internet can see the repository or we have private, which means that you can choose who can see and commit to this repository. So this is really the level here that you're thinking about. Let's go ahead and select internal. Once we've gone through and created that repository as well, we'll have to put a name. So we'll go ahead and say test2. We create this repository. And final thing that we can do here is go to the settings inside of test2. And if we scroll all the way down, one of the things that you can do is get into the danger zone. And this is dangerous because of the fact that you could change the repository visibility. This is currently an internal repository. If we change the visibility to public, this means that everybody can see this repository. Let's go ahead and do this. And now we can go through and see that, oh, this repository's actually been made public. So it's going to ask for my authentication.
>
> **[3:19](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/setting-repository-visibility-options?u=76281980&t=199)** Once I've got that set up, it'll go ahead and make that a visible repository. So this is a very serious operation and if we look at this diagram here, you can see that really there's a level of risk that's being transferred. The further you make a repository visible, the higher the risk. And so it's important to be aware of what's in that repository so you can mitigate that risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Definitions:** means that (3), is a  (2)
> **CLI Commands:** make (2)
> **Tools:** github (2)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### [Repository privacy settings and options](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/repository-privacy-settings-and-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/repository-privacy-settings-and-options?u=76281980&t=8)** Let's take a look at it from an enterprise-level all the way down to a repository level, [[Privacy]] settings for our repository. First up, if we go over to policies here, here is where we could go into setting the enterprise-level repository visibility policies. So if we go through here, first, we could disable even the ability to create repositories or we could limit, we could say members can only create, for example, internal or private repositories. Likewise, we could set it so there's no policy. As well, we can also say repository outside collaborators, right, so we could restrict the ability of the repository to be shown to outside collaborators. So there are many different visibility changes at the enterprise level that are very important to be aware of in terms of making sure that the visibility is even possible to doing granular controls. Now let's go ahead and move over back into the organization itself. So if we go back to an organization, we can see here is one, and if I select this organization, we can actually go through here and select a repository and actually go in and control it at the repository level as well. So let's go ahead and look at the settings here. If we say settings, one of the things to be aware of is that at the very bottom, there's something called the Danger Zone. So the danger zone has the granular control at the repository level. And again, it's controlled at the enterprise level,
>
> **[1:41](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/repository-privacy-settings-and-options?u=76281980&t=101)** whether you have these features or not. But in this case, since they're not enabled, I could change the visibility and I could change to public or I could change to private. If I change to public, that means the outside world can get access to it. Or if I change this to private, it means nobody in my enterprise has access to it anymore, only I have access to it. We also could do several other visibility operations. So one is I could transfer the ownership to another person. So, for example, I could transfer to an individual or some other organization. Likewise, we could also archive this repository. So if you archive it and made it read-only that means it's visible, but it's immutable. We also could delete this repository. If you delete the repository, in fact, let's go ahead and do this. What'll happen is it's gone forever. So let's go ahead and type this in here and delete this repository, Duke, and this goes through and it deletes this repository. So you can see there are many different controls, both at the enterprise level and at the repository granular level that you can control to make sure that the visibility is up to the requirements of your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### [Features and options in the security tab](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/features-and-options-in-the-security-tab?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/features-and-options-in-the-security-tab?u=76281980&t=8)** Here we have security tab features as the next section here under security. Let's take a look at a repository that's in an organization and go to the settings. When we go to settings, on the lower left corner, there is a security tab. Let's first dive into this feature, which is code security and analysis, which is a critical feature for security. For example, you can have the dependency graph enabled so that you can make sure that your dependencies in your repo are secure and up-to-date. And this is something that can be done by enabling this dependency graph. You also can enable security updates and also version updates. So these are all configurable at the repository level. Now another thing to consider though is you can do this at the organizational level. So if we go to this tab, we can see that there's a coverage icon here which shows security coverage and we can see all of the settings for multiple repositories, including dependabot, code scanning, and even secret scanning. And secret scanning is a very important one because of the fact that it's easy for a member of an organization to accidentally put an API key inside. And so this will scan it and let you know if something has been put into this repo. Notice that if we selected this as well, we could actually go through here and actually change each of these settings at a repo level. So this is a once but apply mini-type setting that will override
>
> **[1:45](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/features-and-options-in-the-security-tab?u=76281980&t=105)** all of the previous repository settings. Now, next up here, let's go back to that repository setting here and look at some other security features. We also have the concept of deploy keys. So what is a deploy key? Well, it allows you to have an SSH key that provides, read-only or read/write if configured access to a single repo. The common use case for this, if we wanted to add a deploy key would be that, the deploy key would be used for automated systems that need to either push or pull from a repository. So this could be, for example, a CI/CD pipeline. You also could use these deploy keys for read-only or write-only access. So deploy keys are a more secure alternative to using personal access [[Tokens]], which can give two broad of access. So that's really the reason for the deploy keys. Now let's talk about secrets and variables here next. This is a big feature of the repository in that you can actually build out encrypted variables that you use in an organization, so you can use it for deployment or build processes here, so you could say with my build system, here are my environment, my repository, my organization secrets, and these all can be very useful because they allow you to do automation. Next up, we have the secrets Codespace secret. And what this does is that it allows you to use [[Codespaces]] secrets inside of a development environment so that, lets say, your
>
> **[3:21](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/features-and-options-in-the-security-tab?u=76281980&t=201)** API access to [[Microsoft Azure|Azure]] or AWS is automatic and this can also be managed from this location. Finally, again, the dependabot secrets can also be configured here as well. So, really, there's a fine-grained control here that you can use at the repo level as well as if we go again to the multi-repo level here, you can control multiple repositories by using the organizational controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[Codespaces]] (1), [[Microsoft Azure|Azure]] (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (1), ssh (1), cd (1), aws (1)
> **Env Vars:** api (2), ssh (1), aws (1)
> **UI Navigation:** go to (3)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### [Understanding repository insights](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-repository-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:09](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-repository-insights?u=76281980&t=9)** Here we have an organizational picture of all the different features that are available. We're going to dive into something called Insights. Why do you care about Insights? Well, they're a dashboard that provide a range of metrics and data visualizations about your [[GitHub]] repository. This includes things like what can you do to be more efficient, effective, or have a more collaborative environment. So if we take a look at this Insights directory right here, look at the activity overview. What this does is it shows, in some particular period, a week, a month, a year, exactly what's happening for either all of your repositories or for a particular repository. If, for example, you're an engineering manager, you may want to look at pull requests and you may want to look at the pull requests that are open, the ones that have been merged, and the ones that are closed so that you can see if there's some kind of organizational issue that you need to take care of. Also, we have issues here. So this could be for an open-source project. And how many issues are being created? Is there too many issues with the frequency according to the closed rate? For example, are there not enough contributors? You need to do something to get more issues closed. This would be something you could see from this member. Now, in this case, we also can look at where members are getting the work done. So for your organization, do you need to hire new people that are working on bugs, for example, or hire more people on [[Code Review]] or hire more people to develop the software or hire more people to be managing the pull requests.
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/understanding-repository-insights?u=76281980&t=104)** Right. This is a good overview of exactly what's happening in your organization and it allows you to make, really, organizational changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Code Review]] (1)
> **Analogies:** for example (3), picture (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)

#### [Managing collaborators in GitHub](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-collaborators-in-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-collaborators-in-github?u=76281980&t=8)** Here we have the ability to invite collaborators in the official [[GitHub]] documentation. Notice how you would go to the settings in a project, manage access, and then invite these collaborators. The important thing to be aware of is when you're inviting a collaborator, there are three different roles to be aware of. One is read. So it's the team or individual can view the project. Two is write, the team or individual can view or edit the project. Or third, which is the most powerful but you also want to be very careful is, the team or individual can view, edit, or even add new collaborators to the project. So let's go ahead and go to Access right here. If we look at the GitHub organizational page here for this repo, we have the controls that show us that we can say "Add people". And if I wanted to add octocat, you can see that I could invite the octocat as a collaborator. With the enterprise level, notice we have even more control, right? We can add read, triage. So this would be recommended for contributors who need to manage issues in pull requests, but they don't have write access. We could do write, which would be the ability to push changes to the project or maintain. And this could be somebody who could manage the repository, but they don't have access to, let's say, secrets or destructive actions or admin.
>
> **[1:41](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-collaborators-in-github?u=76281980&t=101)** This would be a full-access to the project, right? This is a great way to think about what it is you're doing. You want to be very careful about the different rules that you're recommending. Typically, if you're going to add a collaborator, it's safe to start with read access. This is called the principle of least privilege. So you're giving someone initially just enough so that they can view and discuss the project. Later, if there's a specific action they need to participate in that is not accomplished by the read, you can level up their permission level and that's a great way to think about handling collaborators for your repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** be aware (2)
> **Best Practices:** recommended (1)

#### [Managing organization settings](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-organization-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-organization-settings?u=76281980&t=8)** Here we have an empty organization where there's really not much configured, but I want to change some organizational settings. Let's go ahead and look at how you could do that at an enterprise level. If I go to the enterprise controls, notice it shows that there's one organization. If I wanted to create a new organization, obviously, I could say test or whatever it is I wanted to do, 23456. All these are created. Start again. Three, two, one. Obviously, from the organizational level here, I could create new organizations, I could invite in organization, et cetera. Or if I wanted to, I could change some of the organizational settings at a granular level here. So this is a great place to just change one setting. Before we get to this, so let's go ahead and look at the policies here. And notice if you wanted to, you can also change the organizational settings from these controls. And what this does is it changes it from multiple organizations at the same time. So that's something to be aware of as well, is that any of these settings, for example, can be changed to make it at an organizational level that applies to multiple organizations. If we go back here to this control though, and we go to this organizational settings, here we have an organizational settings page and you can see there's quite a few things that can be controlled from a [[GitHub]]
>
> **[1:44](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-organization-settings?u=76281980&t=104)** organization. Let's walk through some of them. First up, they have information around email, name, URLs. So if you are going to do something for a public open-source project, this would be important to fill out all of these details, including a picture so organization's impact could be shown from the identification of, let's say, the logo of a programming language. Now if we look at features, you also can toggle, for example, insights. If you wanted to, in your your feature set here, you could also go through and look at the billing sections and you could see how much was being billed for GitHub actions, for packages, for storage, for [[Codespaces]], for the LFS data as well, the large file data. And you also can dive into repository rules, you can dive into these different roles here, read, triage, write, maintain, admin, so you could actually set a base role for a repository, member privileges. Another one you can do as well so the base permission would apply to all members and excludes outside collaborators, repository creation, repository forking, right? So you can, really, at a granular level, control what's happening in your organization. Now, the other thing you can do as well is for code planning and automation. You can actually get into things like policies around Codespaces, and this policy could be anything from a constraint.
>
> **[3:20](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/managing-organization-settings?u=76281980&t=200)** So maybe there are certain kinds of machines that are very expensive that you don't want to be using in your organization or the timeout or the retention period or even you could set allowed base images. So this could be your company base image, which might be a good idea if you wanted to ensure that the work that's using Codespaces is only using, you know, verified base images that have certain security policies set up. Likewise, every other part of GitHub, from actions to webhooks to discussions to packages, all of these things, including security, can be controlled at an organizational level. So really the organizational settings are very feature-rich and every single aspect of the organization can be controlled. And this is a great way to ensure security and compliance for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Codespaces]] (3)
> **Tools:** github (3)
> **UI Navigation:** go to (2), toggle (1)
> **Analogies:** for example (2), picture (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** lfs (1)
> **Warnings:** be aware (1)

#### [Members, teams, and roles in a GitHub organization](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/members-teams-and-roles-in-a-github-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/members-teams-and-roles-in-a-github-organization?u=76281980&t=8)** Here we have the organizational settings that shows who is a member of my organization, and we're going to talk about members, teams, and roles here. So first up, we have members. If I want to invite a new member, all I need to do is, for example, do username, full name, or email address. So if I typed in, for example, octocat, I could invite the octocat inside of this project and you could see that I would have the option of either making them a member, which is typical of most times you would want to invite somebody to the organization, and I would say 99 percent of the time this is what you want, or owner. Now, owner is very dangerous. And I would say you have to be extremely careful about typos or making other mistakes because of the fact that they would have the ability to administer your organization and have complete access to all repositories and teams. So this is very dangerous and not something you should do lightly, is to give people ownership access, but if you do, you would just need to select that option. Now, I'm going to go back here because I don't need to add octocat to this repo, but I'm going to build out a team here next. So in order to do teams, what do we do? Well, we can create a new team here and we could call this, for example, My Front End Developers, we'll say Front End. And what's nice about this is that this means that if I was going to do a pull request, I could tag the entire front-end team. So let's go ahead and say this. We could say UX developers here and we would want to
>
> **[1:43](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/members-teams-and-roles-in-a-github-organization?u=76281980&t=103)** make this visible. So again, we could add them when we were doing some kind of pull requests, and then we also would want some notifications as well. Once I've done that, now all I need to do is add a member to this particular organization. Again, we could go back to octocat here and add the octocat and that would make that person a member of this particular team. And they would have to obviously accept that invitation. I'm going to go ahead and say that we don't want this invitation to occur because that was a demo invitation. But this is a very important mechanism for you to control. For example, communication, pull requests, and messaging is to add, let's say, front end back end, et cetera, to logical teams in your organization. Really, that's it. From a management perspective, it is again important to make sure that when you're looking at the organizational level, you have two different administrators. This is just a shell account that is not active. But in a real-world scenario, you would want to make sure you have two different owners of the organization for safety's sake. And you also want to make sure that you're able to audit the different organizational permissions. For example, how many outside collaborators do you have? How many pending collaborators do you have? What are failed invitations? And again, who are the enterprise owners here for whatever it is that you're building? So that's a quick overview of the teams and people structure of
>
> **[3:18](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/members-teams-and-roles-in-a-github-organization?u=76281980&t=198)** the [[GitHub]] organization. It's got all the features you need and it can really make your life easier when you do app messages for a particular team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** make (6)
> **Analogies:** for example (5)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps: Continuing your GitHub mastery journey](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/next-steps-continuing-your-github-mastery-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/next-steps-continuing-your-github-mastery-journey?u=76281980&t=1)** Building Secure and Efficient [[GitHub]] Workflows. We've reached the conclusion of this course. Let's go ahead and talk about what we covered. In the first section, what we covered was the authentication and security, which is ensuring your GitHub account by using the integrity tools. So this would mean things like authentication and security with two-factor auth, looking at access permissions, using enterprise managed users or EMUs. Next up, we covered the configuration and managing of the repositories and organizations. We got into enabling and disabling features. Also, the visibility of repositories, which is a critical feature, and also talked about the options in the security tab, which can be a critical feature to make sure that you're doing appropriate [[Security Management]] for secrets. We got into repository insights as well as managing collaborators in GitHub. All right. It's time to talk about next steps here. Some of the things I would do would include using a dummy GitHub account to practice implementing two-factor authentication. Also, I would look into access controls as well. This is great with a dummy account so you can practice setting permissions and roles. In terms of advanced actions, you may want to simulate admin tasks with a GitHub organization that you create.
>
> **[1:32](https://www.linkedin.com/learning/github-foundations-privacy-security-and-administration/next-steps-continuing-your-github-mastery-journey?u=76281980&t=92)** You also may want to have a different security feature on a GitHub repo so you can test it out. In terms of continuous learning, I would look at the GitHub documentation, the community forums, and also look at maybe some of the advanced topics that are beyond the scope of this particular course so that you can feel like you're prepared when you do practice these steps in the real world. All right. Best of luck. I'll talk to you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[Security Management]] (1)
> **Tools:** github (7)
> **Cross-References:** we covered (3)
> **CLI Commands:** make (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)


## Instructor

- [[Noah Gift]]

## Skills Covered

- GitHub
- Privacy

## Path Context

### In [[Prepare for the GitHub Foundations Certification]]
← [[Learning GitHub Codespaces for Enterprise]] | **6 of 7** | [[Benefits of GitHub Community]] →

## Appears In

- [[Prepare for the GitHub Foundations Certification]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[Learning GitHub Codespaces for Enterprise]] — GitHub

---

[↑ Back to top](#)