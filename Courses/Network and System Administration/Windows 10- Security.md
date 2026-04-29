---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-10-security-14135501
url: "https://www.linkedin.com/learning/windows-10-security-14135501"
duration_minutes: 130
duration: 2h 10m
level: Intermediate
updated: 7/21/2021
learners: 58597
skills:
  - Windows 10
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG-86S2j1G6kQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626716915412?e=2147483647&amp;v=beta&amp;t=CT3A3M7V5NyZEDSXeAvUQAU9q9APuU1cFU6uIOMJ4s4"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Optimizing Enterprise Security and Productivity Using Microsoft 365]]'
  - '[[Explore a Career in IT Support]]'
prev_courses:
  - '[[Securing Cloud Resources with Microsoft Defender for Cloud]]'
  - '[[Windows 10- Administration]]'
next_courses:
  - '[[Configure and Manage OneDrive]]'
  - '[[Windows 10- Networking]]'
path_nav: '[{"path":"Optimizing Enterprise Security and Productivity Using Microsoft 365","position":7,"total":11,"prev":"Securing Cloud Resources with Microsoft Defender for Cloud","next":"Configure and Manage OneDrive"},{"path":"Explore a Career in IT Support","position":6,"total":11,"prev":"Windows 10- Administration","next":"Windows 10- Networking"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/devops
  - topic/it-help-desk
  - skill/windows-10
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Windows%2010-%20Security.md)

![Windows 10: Security](https://media.licdn.com/dms/image/v2/C560DAQG-86S2j1G6kQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626716915412?e=2147483647&amp;v=beta&amp;t=CT3A3M7V5NyZEDSXeAvUQAU9q9APuU1cFU6uIOMJ4s4)

# Windows 10: Security

> Whether you are upgrading or starting with a new operating system out of the box, give yourself the peace of mind that your system will be secure by taking a few necessary actions. In this course, Martin Guidry guides you through each essential security step. Martin takes you through familiar ground, such as standard account setup with accounts, authorization, user groups, and permissions. He also

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501) | 2h 10m | Intermediate | 59K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Windows 10 security overview
  - What you should know before starting
  - About this update
- [**1. Authentication and Accounts**](#1-authentication-and-accounts) (5 videos)
  - Overview of authentication and accounts
  - Working with local accounts in Windows 10
  - Working with Microsoft accounts in Windows 10
  - Working with domain accounts in Windows 10
  - Working with Azure accounts in Windows 10
- [**2. Authorization**](#2-authorization) (5 videos)
  - Overview of authorization
  - Understanding inheritance of permissions
  - Assigning permissions
  - Creating and using groups
  - Working with built-in groups
- [**3. Encryption**](#3-encryption) (4 videos)
  - Overview of encryption
  - Using BitLocker
  - Using Encrypting File System (EFS)
  - Encrypting files for the cloud
- [**4. Viruses and Malware**](#4-viruses-and-malware) (8 videos)
  - Virus and malware overview
  - Exploring antimalware solutions
  - Windows Defender: Virus and threat protection
  - Windows Defender: Device performance and health
  - Windows Defender: Firewall and network protection
  - Windows Defender: App and browser control
  - Windows Defender: Application guard
  - Windows Defender: Endpoints
- [**5. Network Security**](#5-network-security) (2 videos)
  - Securing network traffic by using IPsec
  - Using VPN in Windows 10
- [**6. Group Policy**](#6-group-policy) (4 videos)
  - Overview of Group Policy
  - Applying security settings by using Group Policy
  - Using Group Policy to audit actions in Window 10
  - Using Group Policy to harden Windows 10
- [**7. Remote Desktop**](#7-remote-desktop) (4 videos)
  - Basic configuration of Remote Desktop
  - Advanced Remote Desktop configuration using Group Policy
  - Allowing Remote Desktop through firewall
  - Changing listening port for Remote Desktop
- [**8. Additional Security Considerations**](#8-additional-security-considerations) (4 videos)
  - Controlling updates for Windows 10
  - Browsing the web securely with Edge
  - Secure Boot
  - Enabling controlled folder access
- [**Conclusion**](#conclusion) (1 videos)
  - Where to learn more about Windows 10 security

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Windows 10 security overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=0)** - [Martin] Hi, I'm Martin Guidry, and welcome to Securing Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=5)** In this course, we'll cover the skills you need to configure the security of the Microsoft Windows 10 operating system.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=13)** I'll start by discussing the different authentication and authorization methods in Windows 10.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=19)** Then I'll show you how to use Group Policy to tighten the security of Windows 10.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=25)** We'll see how to protect Windows 10 from viruses and malware.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=30)** And we'll explore encryption tools like BitLocker and EFS.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=35)** We'll cover all these features, plus plenty of other tools and techniques.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=40)** Now, let's get started with Securing Windows 10.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** efs (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [martin] (1)

#### What you should know before starting
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/what-you-should-know-before-starting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/what-you-should-know-before-starting?u=76281980&t=0)** - [Instructor] Before we get started with this course, let's talk a little bit about what you should know going into this course.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-security-14135501/what-you-should-know-before-starting?u=76281980&t=8)** Although you don't need to be an expert in Windows 10, you should be familiar with the basic features of Windows 10.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/what-you-should-know-before-starting?u=76281980&t=16)** If you feel you're not at this level yet, you might want to try one of our other courses that will get you up to speed, particularly Windows 10 Essential Training with Nick Brazzi.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### About this update
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=0)** - [Instructor] Microsoft pushes out new versions of Windows 10 from time to time.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=5)** If you'd like to check your version, off the Start menu, you can click on the gear icon, that'll open up Settings.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=15)** And there, go to system.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=17)** And if we scroll all the way down to the bottom, the last option is About.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=23)** If we scroll down in here, we see I am running version 20H2 of Windows 10.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=31)** And that means it was released in the year 2020, and H2 means in the second half, the latter part of the year 2020.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=42)** If you're using a different version than I am, you'll probably have access to most of the same features that I have, but the interface will look a little different in some places.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=54)** If you'd like to update your version of Windows 10, you can go back in the Settings area, go to Update & Security.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=64)** The top option is Windows Update.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=68)** That will allow you to check for updates, and if a new version of Windows 10 is available, you can install it from here.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1), scroll down (1)
> **Code Keywords:** interface (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Authentication and Accounts

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of authentication and accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about authentication and how it relates to security in Windows 10.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=8)** Authentication is defined as confirming the truth of a single piece of data.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=15)** In relation to security, that basically means verifying that you are who you say you are.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=21)** So if you walk up to a computer and claim that you are the administrator of that computer, the computer is not just going to take your word for it.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=30)** It's going to require that you prove somehow that you are the administrator.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=35)** And typically this happens with passwords.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=39)** In all versions of Windows, authentication is tied to accounts.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=44)** An account is an entity that should be controlled by a single user.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=49)** An account is attached to permissions.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=51)** Or we can say that permissions are attached to accounts.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=54)** But basically an account has the permission to read certain files, write certain files.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=60)** It might be denied permission to do certain things.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=64)** And in order to maintain security, every account needs to be authenticated in some way.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=69)** Again, typically a password.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=72)** Windows 10 supports four main types of accounts.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=76)** We'll start with the local account that exists only on the local computer.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=80)** And that is perfectly fine if you only have one computer.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=84)** It could make things like sharing files over the network more difficult.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=89)** So if you have multiple computers, then local accounts may not be the best option.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=95)** The next option is a Microsoft account.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=97)** And that is an account that can be used on your local computer, and also used on the Microsoft website.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=104)** You could then take that Microsoft account and log into a different Windows 10 PC, and possibly get some file sharing that way.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=114)** Next is a domain account, which is an account on a Microsoft Windows Active Directory domain.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=120)** And that's the way to go for a large enterprise if you have hundreds or thousands of computers.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=127)** And the last one is an Azure account.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=129)** Azure is the cloud offering from Microsoft.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=134)** Azure can do lots of different things, but one of them is it can store accounts and provide authentication for those accounts.

> [!info]- Semantic Content
>
> **Definitions:** is an  (4), is a  (2), defined as (1), basically means (1)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Working with local accounts in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] In Windows 10, administrator accounts and standard accounts are fairly similar to previous versions of Windows.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=7)** Administrator accounts can do basically anything on the computer.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=11)** They can change any setting.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=13)** They can install whatever they'd like to install.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=16)** And they can create user accounts and change the passwords of other user accounts.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=22)** Standard users are more limited.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=23)** They are able to run programs that have been previously installed by someone else but they cannot install programs themselves.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=33)** They could not manipulate other people's accounts.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=36)** And they cannot install new hardware.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=39)** Typically, if you're doing non-administrative tasks, like just checking your email or working with a spreadsheet, in that case, it's typically better to use a standard user account.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=51)** And only use an administrator account when you actually need to perform an administrative task, like installing new software or manipulating accounts.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=63)** Now I'd like to demonstrate to you how to add a local account to a Windows 10 PC.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=69)** So off the Start menu, I'll type in users and I'll go to the option for add, edit or remove other users, which will take me to an interface that shows the current users and also allows me to add new ones.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=86)** Under the other users heading, I'll click on the plus sign next to add someone else to this PC.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=94)** And this will start a wizard.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=97)** The first screen of the wizard wants to know the information about the user's Microsoft account.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=103)** But I don't want to use a Microsoft account for this particular demonstration.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=108)** So I'm going to click on the link that says I don't have this person's sign in information.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=114)** That will take me to a page where it wants me to create a Microsoft account, which again is not what I'm trying to accomplish in this demonstration.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=123)** So I'll go the link on the bottom that says add a user without a Microsoft account.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=130)** And now I get to the interface to create a local account.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=135)** I'm going to call this one TestUser.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=139)** I will enter a password.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=143)** Then I will enter the same password again and then it's going to have me answer some security questions.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=154)** And I'll just go through these real quick.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=158)** Once I'm done with that, I will click Next at the bottom and that's all there is to it.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=163)** I now have a TestUser as a local account.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=168)** If I click on it, I have the option to change the account type and the only choices are Standard User or Administrator.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=177)** I'm going to leave it as a Standard User for now.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=181)** And I would also have the option to remove the account, which I don't want to do right now but it is the same interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), case, (1)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** install (4)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Working with Microsoft accounts in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] In this section, I'd like to demonstrate adding an existing Microsoft account to a Windows 10 PC.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=8)** So, off the start menu, I'll type in users.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=12)** And again, I'll go to add, edit, or remove other users.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=17)** And again, I'll click on the plus sign next to, add someone else to this PC.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=23)** And the first screen asks me, "How will this person sign in?"
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=26)** So, I will provide the email address, of the account I use for my Microsoft account, and then I'll click next.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=35)** And I am now good to go.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=38)** So, I'll click finish, and we'll see that that account has come up now.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=42)** I can click on it.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=44)** It has the exact same choices that it did with a local account, where I'm able to change the account type, and or remove the account.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **Code Keywords:** type, (1)
> **Speakers:** - [instructor] (1)

#### Working with domain accounts in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] Now I'd like to demonstrate adding a domain account to a Windows 10 PC.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=6)** Again, off the Start menu I'll type in users and go to add, edit or remove other users.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=15)** You notice there's no option that clearly says domain account.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=19)** Instead it says "Add a work or school user".
>
> **[0:24](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=24)** And you'll see this a few different places in the Windows 10 interface, that they say work or school user.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=31)** But what they mean by that in more technical, more specific terms is that account that is stored at a domain, an active directory domain.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=40)** So I'll click the plus sign next to that.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=44)** And it asks me for fairly little information and wants to know the name of the user account.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=50)** And I happen to know one that exists on this domain.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=54)** And it's asking me if I would like them to be a standard user or an administrator for this particular one.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=61)** I will go with administrator and click add and very quickly it pops up there.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=67)** And we now see it figured out the domain automatically and put in the username, at that account and administrator.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Working with Azure accounts in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] Now let's talk about using Azure accounts in windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=5)** Windows 10 supports adding accounts from an Azure Active Directory.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=11)** Azure Active Directory is an alternative to having on-site active directory.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=17)** So rather than having to buy a new piece of hardware to use as a domain controller and buy a license for that hardware, you could instead access this service through the cloud, which in some cases, it might be less expensive.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=33)** Azure Active Directory is priced per user.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=37)** So the less users you have, the less expensive it is, and if you have a large number of users, the price goes up.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=45)** Azure Active Directory is included with most versions of Office 365.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=50)** So if you're using Office 365, you could also utilize Azure Active Directory for the same price.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=58)** This does require some expertise to manage.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=62)** It is a similar set of skills to managing an onsite active directory, but there are some differences and does require some expertise and experience to manage Azure Active Directory properly.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=76)** If you'd like to learn more about Azure Active Directory, it's available in several different versions, and you can get the details of what features are included in what version, here at this address.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Authorization

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=0)** - [Instructor] Now let's talk about authorization in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=5)** Authorization is the process of specifying access rights to resources.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=10)** In other words, setting permissions on files and folders.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=14)** This will determine who has the right to read a file, who has the right to change a file, and who has the right to delete a file.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=23)** Authorization is equally important as authentication.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=28)** A lot of administrators focus the majority of their time on authentication, making sure everyone has a strong password and a password that is changed often.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=39)** And that is important, but authorization is also important, making sure that no one can read a file that they shouldn't be able to read and making sure that no one can delete a file that they shouldn't be deleting.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=52)** Basic file permissions in Windows 10 include read, read and execute, write, modify, and full control.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=63)** Now we'll spend a few minutes talking about each one of these and what it means.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=68)** When we grant the read permission on a particular file, that gives the user the ability to open the file and view the contents.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=77)** It does not give them the ability to execute the file.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=81)** In order to execute the file, we would need to give them the permission marked as read and execute, which also gives them the ability to open the file and view the contents, but it also adds the extra permission of execute.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=97)** The next permission is write, which as the name implies, gives the user the ability to change the file.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=104)** Open the file, make changes to it, either add content or remove content, but the right permission does not allow a user to completely delete a file.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=116)** In order to completely delete a file, a user needs a modify permissions.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=122)** When a user is granted the modify permission it gives them the same level of access as if they had read permission, read and execute and write permission, and then in addition to that, it also grants them the ability to delete the file.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=141)** The last permission, the highest level of permission is called full control, and that gives the user a combination of all of the previous permissions.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=151)** So the user has the ability that they would have gained from read, read an execute, write, and modify, but giving them full control also gives them the ability to change the permissions for someone other than themselves.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=167)** So in other words, they can change the permissions for other users.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=172)** This is a level of access that most users do not need.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=176)** Most users should not be changing the permission of other users.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=181)** So therefore full control should typically be reserved only for administrators.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (1)
> **Definitions:** in other words (2), is called (1), is a  (1)
> **UI Navigation:** open the (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Understanding inheritance of permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=0)** - [Instructor] Now let's talk about permission inheritance.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=4)** By default, files and folders assume the permission of their parents.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=10)** This is called inheritance.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=12)** It is on by default and almost all versions of windows, including Windows 10, but it can be turned off.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=21)** When we turn it off, we call that disabling inheritance.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=26)** Typically we want inheritance to be on so disabling it would be a little unusual.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=32)** One of the situations where you might want to disable inheritance is when one document in a folder needs different permissions than all of the other documents in the folder.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=43)** So you could set the permissions properly on the folder and by default, all of the documents would inherit from the parent, and then just go to the one file that needs to be changed, disable inheritance on that one file and change the permissions on that file.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=60)** This brings up the question of what happens to the permissions once inheritance has been disabled?
>
> **[1:07](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=67)** Will the permissions remain or will they be removed?
>
> **[1:11](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=71)** And the answer is you have a choice.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=73)** When you disable inheritance, you're given two choices.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=76)** The first choice is to copy inherited permissions, and this means that the permissions that have previously inherited or copied to the file so effectively the file has the same permissions, but now we can edit those permissions without having to edit the parent.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=94)** The other option is to erase the permissions so we can erase all permissions that were previously inherited.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=102)** If you do this, you'll want to give someone probably an administrator full control of the file.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=109)** That way someone will still be able to administer the permissions on that file.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=115)** So now let's look at a demonstration of this.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=118)** I'm going to open up the C drive of my computer.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=123)** I'll create a new folder and I'll call that folder SecuringWindows 10.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=130)** And inside of that folder, I'll create a file, just a new text file.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=138)** And I'm going to put a little bit of text in that file.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=144)** So now we have a file we can work with for this demonstration.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=148)** First thing I'm going to do is right click on the file and go to the menu option at the bottom called Properties.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=156)** In there I'm interested in the second tab called Security, and we'll see the permissions currently assigned to this file.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=165)** Now I never actually specified any permissions.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=169)** These are just the default permissions that are given to any new folder created on my system.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=176)** The ones on your system might be a little different, but certainly there will be some permissions created by default.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=184)** Near the bottom if we go to the option for advanced, we can see what permissions are applied and all the way to the right, we see the column inherited from.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=197)** So these permissions were all inherited from the C drive.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=201)** At the very bottom, I have the option to Disable inheritance.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=206)** So go ahead and do that.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=208)** And like I mentioned, it gives me two options, one of them convert inherited permissions, the other remove inherited permissions.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=218)** So I'm going to go ahead and click on Remove inherited permissions.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=223)** And now where the permissions were listed, they've all been deleted.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=226)** Instead, it says no groups or users have permission to access this object.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=232)** That could potentially be a problem.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=235)** So I would like to add one user.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=238)** I'll click on the button called Add, and it's bringing me to an interface where it would like me to select the principal.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=246)** I'll click on that, brings me to another interface where I can choose a User, Group or built in security principle.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=256)** From the location, and here the location has defaulted to my domain, and that is what you want sometimes, but for this particular demo, I'd like to use a local account.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=268)** So I'll click on Locations and select the name of my computer, hit OK and that changes the location to the name of my computer.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=277)** So now I'll be looking for a local account, not a domain account.
>
> **[4:43](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=283)** I had previously created a user called TestUser, so hit OK.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=290)** And now we are applying permissions to TestUser.
>
> **[4:54](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=294)** These will be allow permissions, and I'm going to go ahead and click on full control.
>
> **[4:59](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=299)** When I do that, all the check boxes below it are also selected.
>
> **[5:04](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=304)** So at the bottom I can hit OK.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=306)** And now I have on this file one user who has full control and no permissions being inherited.
>
> **[5:15](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=315)** I'll hit Apply and hit OK, and hit OK again in the new text document properties, and that will finalize the permissions.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (3), select the (2)
> **Code Keywords:** let (2), default, (2), interface (2), this, (1), this. (1)
> **Definitions:** is called (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Assigning permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=0)** - [Instructor] Now let's take a look at some examples of updating permissions on a file.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=5)** Off the C drive, I'm going to open the directory securing Windows 10.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=10)** And that brings me back to the file I had used in a previous demonstration.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=16)** I'll right click on the name of that text file, go to properties.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=20)** In the properties Window, the second tab is security.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=24)** And right now we see test user has full control.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=28)** I'd also like to add another user so that when I start removing permissions from test user, I don't lose access to this file completely.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=39)** So I'm going to hit Advanced.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=41)** I'm going to hit Add, select a principal.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=46)** I'm going to add the account I am currently logged in as.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=51)** I'm going to give that account full control.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=54)** And now we see test user and Martin both have full control.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=60)** So I hit Apply and Okay.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=64)** And back in the dialogue for new text document properties.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=69)** I'm going to select the test user account, hit Edit.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=75)** Select the test user account again, and clear off some of these check boxes.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=81)** I'm going to leave the test user with just read permission.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=86)** Hit Apply, hit Okay.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=89)** Hit Okay again.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=91)** So now like to test this and make sure the user actually can read the file but not write the file.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=97)** I could log out and log back in as the test user, but there's actually an easier way to do it.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=106)** And for this I'll need a command prompt.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=110)** Windows 10 allows me to run a program as a different user.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=115)** So I'm going to type in, run as, space slash user colon test user space.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=126)** And then the name of the program I want, which in this cases is notepad.exe.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=134)** When I press Enter, it will prompt me for the password for test user.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=139)** I'll type that in and hit Enter.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=142)** And it pulls up a copy of notepad, but this is notepad running as a different user, running as test user.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=150)** In notepad off the file menu I'll go to open.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=155)** I will look for the text document I was working with earlier.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=158)** I'll hit Open, and we see the text.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=162)** I'll try to change that or add some text.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=166)** And it should prevent me from saving it because I do not have right permission.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=173)** So off the file menu, I'll go to save.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=175)** It's asking me for a file name.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=178)** I'm going to choose the file name as before, hit Save.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=183)** It's asking me if I want to replace the document.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=186)** And I get an error, you do not have permission to open this file.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=190)** That is somewhat accurate.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=191)** It's phrased a little peculiar 'cause I do have permission to open the file I just don't have permission to write the file, which is what I was actually trying to do.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=202)** So the fact that it blocked me makes a lot of sense.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=206)** The fact that this error message says permission to open the file, throws me a little bit.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=212)** So I hit Okay.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=214)** Let me close this.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=217)** And I won't save changes.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=220)** I'll go back to the file viewed in the folder and I will change the permissions again.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=226)** So right click properties, security tab, edit, select test user, and now I'm going to remove the read permission.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=238)** Hit Apply. Okay.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=241)** Okay.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=243)** I'll go back to the command prompt and again run notepad as that user.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=250)** And I will try to open the file again.
>
> **[4:14](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=254)** I should get a permission denied error.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=258)** And it says you don't have permission to open the file, which is exactly what I was expecting.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=264)** So that was a couple of demos on working with file permissions.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=268)** Again, remember when you're experimenting with permissions, if you'd like to, you can log out and log back in again as the new user, or you could use the run as command to just run one particular program as that user.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (5), go to (3), select the (2), click on (1)
> **Code Keywords:** let (2), this. (1)
> **Cross-References:** go back to (2)
> **Tools:** command prompt (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Creating and using groups
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=0)** - [Instructor] In this section, I'm going to do a demonstration regarding setting permissions for groups.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=7)** So in order to do that, I'll need to create a test group.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=10)** So off the start menu I'll type in group, and I'm going to select the option for edit local users and groups.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=20)** That brings up an interface where on the left-hand side, I can select groups that in the middle pane I'll right click and go to the top option for new group.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=31)** It's asking me to give the group a name.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=34)** I'll just call it test group.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=36)** The description is optional, but I would like to add one member.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=41)** So I'll click add for the location.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=44)** I would like it to be my local computer and the name of the user will be test user I'll hit, okay.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=55)** And we'll see, it's a group called test group with one member, the account test user.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=61)** I'll click create.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=62)** It does not tell me success or failure, but if I hit close, we can look and see the test group was created.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=72)** So I can close this and I'll go to the folder where my test document is stored.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=80)** Right click on that and go to properties.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=84)** I'll go to the security tab and edit and then add.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=91)** So first I want to change the location to my local computer.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=97)** And then I will add test group.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=102)** And I also want to add test user for the test group.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=111)** I want to give permission to read the file and for the test user, I want to give permission to write the file.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=121)** So again, test group, the only permission applied is read and test user the only permission applied is write.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=129)** And when the test user tries to access this file, he should have both read and write permission.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=135)** One he was assigned directly and one he is getting by being a member of the group.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=142)** So hit apply. Okay.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=145)** Okay again.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=147)** Then I'll open up the command prompt and I'll run the command runas/user:Testuser, and the name of the program I want to run.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=162)** I'll be prompted for the password for test user.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=165)** And once I do that, it opens up notepad running as test user, and he should be able to open this file, make some changes to it and then save those changes.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=183)** And all of that worked perfectly fine, no permission problems.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=186)** So again, the user is getting some of the permissions that were assigned to him directly, but he's also getting permissions because he is a member of a group.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=196)** And that group has permissions on this file.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), select the (1), click on (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working with built-in groups
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=0)** - [Narrator] Now let's talk about some of the built in groups in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=5)** Off the start menu I'll type in groups, and I'll go to edit local users and groups.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=15)** Then in the panel on the left, I'll click groups and the middle panel we see a list of groups currently on my Windows 10 PC.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=24)** Near the bottom, there's one called Test Group that I created, the rest of these I did not create.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=31)** Most of them were created by the operating system when it was first installed.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=36)** These are called the built in groups in Windows.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=40)** You notice that if I right click on one of these and go to delete, I will be given an error message saying I cannot delete it.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=49)** If I double click on one of them, I will be given an interface to add or remove users from this group.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=57)** So I can edit these, I cannot delete them.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=64)** I'll hit cancel here.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=67)** Notice in this list of groups, we do not see a group called everyone and we do not see a group called authenticated users.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=77)** And that is interesting because those groups do exist.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=81)** So back on my favorite demo file, I'll right click, go to properties, the security tab.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=90)** So I'll click on edit, and I'll click on add, I've changed the location to my Windows 10 PC and I'll type in everyone, hit okay and we'll see that group came up and we could use it to edit permissions.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=110)** I'll click add again and I'll type in authenticated users, hit okay and again, it came up and I could use this to add permissions.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=123)** But again, we did not see the everyone group, nor the authenticated users group in our list of groups, so what's going on here?
>
> **[2:13](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=133)** Windows contains what's known as implicit groups, or sometimes called special identities.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=141)** These are groups that cannot be deleted or edited, so I cannot change the membership of an implicit group, the membership is controlled entirely by the computer, I can use the implicit groups to set permissions.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=156)** Three of the most common implicit groups are authenticated users, everyone and interactive.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=164)** Talk a little bit about each one of these.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=167)** Authenticated users, as the name implies, is any user who is authenticated and remember, authentication is typically done with a password.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=177)** So any user that has to enter a password when they log into the machine, that is an authenticated user.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=185)** The everyone implicit group contains every user, whether they are authenticated or not.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=193)** Typically on a Windows 10 machine, the only account that is not authenticated is the guest account and typically the guest account is disabled for security reasons.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=205)** And the last one is interactive, and interactive contains any user who can log on locally, as opposed to accessing the machine from the network.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=217)** So if we apply permissions to the interactive group, that would apply to anyone who actually goes up to our machine and logs in, it would not apply to people who are accessing our machine over the network.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=232)** So those are the three most common implicit groups and again, they can be used to set permissions.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=239)** I do have one tip on working with implicit groups and that is, don't be lazy.
>
> **[4:04](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=244)** There are times when you want to give access to a large number of people, but maybe not everyone.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=252)** What you should do is create a new custom group and take the time to add the appropriate people to that group.
>
> **[4:20](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=260)** Sometimes administrators are looking for a short cut and they'll just use the everyone group, or the authenticated users group, which actually gives permission to more people than we intended to.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=274)** So don't be lazy, when you need a custom group, go ahead and create a custom group, take the time to add the right users and only use the implicit groups when you really want to assign permissions to all authenticated users.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (3)
> **Code Keywords:** delete (3), let (1), interface (1)
> **Definitions:** known as (1), is an  (1)
> **Speakers:** - [narrator] (1)


### 3. Encryption

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of encryption
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about encryption in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=5)** We'll define encryption as encoding data such that it is unusable until decrypted.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=12)** So if you look at encrypted data, it just looks like gibberish.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=17)** And decrypting is the process of turning that information back into readable data.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=24)** The data should be exactly as it was before the encryption.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=29)** There's two broad categories of places we'll need to encrypt data.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=33)** One is data in motion, and that is data that is traveling through a network.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=40)** The other is data at rest, and that is when data is stationary in a file on a drive.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=48)** Data in motion in Windows 10 can be encrypted using IPsec, which is a combination of an abbreviation and an acronym.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=60)** It means internet protocol security.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=63)** And in a Windows network, it is the preferred way to encrypt internal network traffic.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=71)** As far as external network traffic, traffic that goes out to the internet.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=76)** We will typically use SSL or TLS, which are very similar technologies.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=83)** And they're commonly used in things like the World Wide Web.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=86)** So HTTPS, the S stands for SSL.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=91)** Although actually HTTPS sometimes uses SSL, sometimes uses TLS.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=98)** For encrypting data at rest, data that's on a hard drive, We have the option to use a BitLocker in Windows 10.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=107)** And that will encrypt the entire disk.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=110)** Therefore it is often called whole disk encryption.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=115)** If you'd prefer to not encrypt your whole disk and instead encrypt individual files and folders, we can do that with EFS.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=125)** The encrypting file system, which works on individual files and folders.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=132)** One of the goals we hope for with encryption is that it will be transparent.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=137)** And transparent means the user does not notice the encryption and decryption.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=143)** EFS does a good job of handling this.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=147)** When a user clicks on a file, if they have permission to that file, it will be decrypted.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=153)** And it will be displayed to them just like it would if the file was not encrypted.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=159)** If the particular user should not be accessing the file, then they'll get some sort of error message.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=166)** BitLocker doesn't a hundred percent achieve transparency because with a BitLocker drive, we first need to unlock it before we can use it.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=177)** But once it's unlocked, it behaves like a normal drive.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=181)** A user can click on a file, the file will open.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=184)** And the user will never notice the encryption and decryption process.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (3), tls (2), https (2), efs (2)
> **Definitions:** is a  (1), stands for (1)
> **Code Keywords:** this. (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Using BitLocker
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about using BitLocker to encrypt a hard drive in windows 10.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=8)** So off the start menu I'll type in BitLocker and I'll select the option for Manage BitLocker, we'll see that I have two drives.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=19)** A C and an E next to both drives, I have the option to turn on BitLocker, but I know that one of my drives is compatible and one is not.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=30)** So if I click on turn on BitLocker next to the C drive, I receive an error about the trusted platform module or TPM, which is an option not available on that drive.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=45)** So I'll click cancel and I'll click turn on BitLocker next to the E drive.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=51)** And my E drive is compatible with TPM.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=56)** So I'll be given the interface to start setting up BitLocker.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=61)** The first question is do I want to use a password or a smart card?
>
> **[1:05](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=65)** I'd like to use a password and then I'll go ahead and type in a complex password.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=72)** And actually I'll have to type it in twice and then click on next.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=78)** Then it's asking me to backup the recovery key.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=81)** Well, not exactly asking me, it's forcing me to backup the recovery key because you'll notice the next button is grayed out.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=90)** I'm going to go ahead and save my recovery key to a file.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=97)** I'll put it in the folder I created for this course, and now the next button is no longer grayed out.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=104)** So I'll click next then it's asking me if I would like to encrypt only the used space or encrypt the entire drive, I would like to encrypt the entire drive.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=117)** So I'll select the radio button next to that and hit next.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=122)** Then it's asking me which encryption mode I would like to use Windows 10 after version 15.11 uses an encryption mode called, XTS-AES.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=136)** And it is a more secure, more complex encryption and therefore is preferred if it's available to you.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=143)** So I'll go ahead and leave the radio button for new encryption mode checked, and click next.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=151)** And then the last screen just asked me if I am sure about the options that I set up in the previous and I am so I'll click start encrypting.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=161)** For me, this is going pretty quickly because my E drive is very small.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=165)** If you apply BitLocker encryption to a large drive, this could take several minutes or even hours.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=173)** At the end, it says encryption of E is complete.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=175)** So I'll hit close.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=179)** Now, want to pull up File Explorer and just look at This PC.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=187)** And we'll notice the E drive now has a lock icon next to it and that icon is currently unlocked for me.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=195)** So I could just double click on it and use it like a normal drive.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=201)** I'll go back now and I'd like to demo to you, the drive being locked.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=205)** Anytime I reboot the computer, it's going to lock this drive and require the password that I use during set up in order to unlock the drive.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=217)** But rather than reboot for this demo, I'll just go to the command line and force it to be locked.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=225)** So I'll open up a command prompt with administrative privileges and then I'll type in manage-bde space The letter of the drive I'm interested in which for me is E and then dash lock.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=246)** And it says Volume E is now locked.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=249)** I'll go back to Windows Explorer and we see the padlock icon does now appear to be locked.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=256)** And this is what you'll see when you first boot up your computer in a drive that is using the BitLocker technology will be locked.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=265)** If I double click on it, it won't let me into it.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=268)** Instead, it prompts me for a password.
>
> **[4:32](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=272)** So I'll type in the password I used during setup, click on unlock.
>
> **[4:38](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=278)** So now the lock icon opens.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=281)** I can double-click on the drive and use the drive.
>
> **[4:44](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=284)** Just like I would any other drive.
>
> **[4:47](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=287)** The drive will remain unlocked until I reboot the computer.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), select the (1), go to (1), double-click (1)
> **Code Keywords:** module (1), interface (1), require (1), let (1)
> **Env Vars:** tpm (2), xts (1), aes (1)
> **Prerequisites:** set up (2), setup (1)
> **Tools:** command line (1), command prompt (1)
> **Definitions:** is an  (1), is a  (1)
> **Versions:** version 15 (1)
> **Cross-References:** go back to (1)

#### Using Encrypting File System (EFS)
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=0)** - [Instructor] In this section, we're going to look at encrypting individual files and folders in Windows 10.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=7)** So I'm going to open up File Explorer.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=12)** And navigate to one of the text files I've been using for demonstration purposes.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=18)** Right-click on it.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=20)** Go to Properties.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=22)** In the Properties pane, I'll click on Advanced.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=26)** And near the bottom, we have the option to compress or encrypt.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=31)** Notice that just like in previous versions of Windows, we can only do one or the other.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=36)** We can either compress or encrypt, but not both.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=40)** So I'll click on Encrypt.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=42)** Hit OK.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=44)** Hit apply.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=45)** And OK.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=47)** And now my file is encrypted.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=50)** There's a little lock icon next to the file that may be difficult to see.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=56)** So I'll change the view to large icons, and there we see clearly there is a lock icon next to that file.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=63)** I can still double-click on it and see the full contents of the file.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=69)** So this is transparent encryption where the end user doesn't have to do anything special in order to access the file.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=77)** If we right-click again and go to Properties again, and Advanced, we'll see now that there's a button marked Details next to the encrypt contents.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=91)** So I'll click on Details.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=94)** And it shows who has access to the file, and shows the thumb print of the certificate that's being used.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=103)** So although this is going on in the background and you don't really see it, the operating system is using certificates to encrypt this file.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=113)** And therefore, whoever has access to this certificate also has access to decrypt the file.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=119)** So right now, I am the only user that has access to the certificate.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=125)** So when I try to access the file, it works perfectly fine.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=128)** If a different user came behind me who didn't have access to this certificate, then when they clicked on the file, they would receive an error message.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=140)** Earlier, I mentioned sharing your certificates with another user.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=144)** Let me do a quick demo on how to do that in Windows 10.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=149)** Off the Start menu, I'll type in certificate.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=153)** And I'm looking for the option for Manage User Certificates.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=159)** In the control panel, that opens up on the left-hand tree view.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=162)** I'll open up Personal, and I'll click on Certificates.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=166)** And there we see a number of certificates issued to me.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=172)** And there's a column called Intended Purpose.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=175)** For me, I have one certificate with the intended purpose of encrypting file system.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=181)** So that is the certificate that I'm interested in.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=184)** I will right-click on it.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=186)** Go to All Task and then export.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=192)** It'll pull up a wizard that will walk me through exporting this certificate.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=196)** On the first page, I'll hit next.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=199)** It's asking whether or not I would like to export the private key.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=203)** And for someone to decrypt my files, I will need to include the private keys.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=209)** So I'll include yes on that.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=212)** And then hit next.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=214)** On the next page, it's asking me what format I would like to export to.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=218)** And there's only one format that supports including the private key.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=222)** So because I checked include the private key on the previous pane, and here, I'm required to do the personal information exchange format.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=233)** So I'll click next.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=236)** Then it's asking who I would like to share this with.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=239)** We could do this with a password, and then just give that password to anyone, but I'd prefer to keep it to users on my local computer.
>
> **[4:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=248)** So I'm going to hit the check box next to group or usernames.
>
> **[4:14](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=254)** I'm going to remove the one that was added automatically.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=258)** And then hit add to add in a new user.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=264)** And I'll use Test User.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=267)** So now once exported, the file can only be opened by Test User.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=274)** I'll hit next.
>
> **[4:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=276)** So in the last page of the wizard, it's asking me where I would like to store this file.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=282)** So I'll just browse to a folder on my C drive, and give the file a name, and hit next.
>
> **[4:53](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=293)** It's asking me to verify all of the information I entered previously.
>
> **[4:57](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=297)** So I'll hit finish.
>
> **[4:59](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=299)** Fairly quickly, it said the export was successful.
>
> **[5:02](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=302)** So I'll hit OK.
>
> **[5:04](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=304)** Close this, and we can go look for that file I created.
>
> **[5:17](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=317)** And there's the file I just created.
>
> **[5:19](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=319)** It is a relatively small file.
>
> **[5:22](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=322)** So you would have some different options on how to transfer this.
>
> **[5:26](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=326)** You could send it in an email as an attachment.
>
> **[5:29](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=329)** You could copy it to a thumb drive and give it to someone that way.
>
> **[5:32](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=332)** However you do it, you just need to transfer this file to someone.
>
> **[5:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=336)** When they receive the file, they will double-click on it.
>
> **[5:40](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=340)** If you set a password, they will be prompted for the password.
>
> **[5:44](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=344)** If not, they will be authenticated by their user account, and it will import the certificate.
>
> **[5:50](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=350)** It will probably give them some choices on where to import.
>
> **[5:53](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=353)** And they will need to import it into their personal certificates.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), right-click (3), go to (3), double-click (2), navigate to (1)
> **Code Keywords:** private (4), let (1), export. (1), this, (1), this. (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Encrypting files for the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about encrypting files for the cloud.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=6)** So here on my Windows 10 PC and File Explorer, I've opened up a folder that is inside of my OneDrive account.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=15)** So if I create some files here, they will automatically be uploaded to the cloud.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=22)** I'll go ahead and do that and create a new Microsoft Word document.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=27)** I'll just call it TestDoc.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=31)** And I'll open that up and add a little text to it.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=38)** I also want to right click on this and go to Properties, go to Advanced and encrypt the contents.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=48)** Hit OK, hit Apply, I want to encrypt the file only, okay, okay.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=57)** And if I switch to the tile view, we see it now has the lock icon and is encrypted using EFS.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=68)** Now I'm going to switch over to a web browser that has OneDrive opened up and look at this folder, look at this document, and we see that it is there and that I can open it, but this is not the encrypted version, and that is because EFS is a transparent encryption.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=91)** So when I created the file here, OneDrive was able to read the unencrypted version and upload that to the cloud, which is not exactly what I wanted.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=104)** I wanted the file to be encrypted in the cloud.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=108)** One way we could accomplish that is to use the encryption features inside of Microsoft Word.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=117)** So off the File menu, I'll go to Info, I'll click on Protect Document.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=125)** One of the options under that is encrypt with password and I'll type in a password, and then I'll type it in again.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=135)** We see now that this document is password protected and encrypted.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=139)** So I want to save a copy and I'll call it EncryptedTestDoc.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=150)** I'll save that, go back to the web application.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=157)** And I now see EncryptedTestDoc, when I click on it, it's saying, sorry, we can't open this document because it's password protected, which is good, that's what I wanted.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=169)** So I'll click open in desktop app.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=174)** Here in the desktop app, I'm being prompted for the password.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=178)** If I type that in, we'll see my document open.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=181)** So, this is success.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=183)** This is, we have encrypted the document locally and in the cloud, but I had to do that using the built-in features of Microsoft Word.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=194)** Other programs will have that like Microsoft Excel, Adobe Acrobat, but not all programs are going to allow us to encrypt their documents.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=203)** There is a another option available to us.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=207)** So back here in OneDrive, I'm going to go back one level and see that in addition to the folder that I was working with, we also have an area called Personal Vault, and Personal Vault is designed to solve the problem that I'm discussing here, where files will be both encrypted in the cloud and on your device.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=232)** When I click on that, it'll take me through a little setup wizard because I haven't used Personal Vault on this account before.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=240)** So in the first step of the wizard, I'll hit next.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=243)** It asks me to identify myself.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=246)** I'll verify, it's going to to ask me to log in.
>
> **[4:11](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=251)** And it has sent a code to my email account.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=256)** So I'll retrieve that code and type it in.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=264)** And now I have my Personal Vault.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=266)** Here I have it open in the web interface.
>
> **[4:30](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=270)** And again, I could add files to it that would be encrypted on the web.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=275)** I can also look at it through Windows Explorer.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=282)** And the first thing it's going to ask me to do is to open the Personal Vault.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=286)** This is more secure than just encryption, because it also has the two-step authentication process.
>
> **[4:55](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=295)** And again, it's prompting me for my password.
>
> **[4:59](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=299)** And again, it's going to email me a code.
>
> **[5:05](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=305)** And now, Personal Vault is open.
>
> **[5:07](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=307)** So this is a way to store encrypted files that will be encrypted on both my PC and in the cloud.
>
> **[5:14](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=314)** This exact feature, Personal Vault, is only available through OneDrive, but most of the other providers of cloud storage, like Dropbox and Google Drive, will have a similar feature where there is an encrypted area that you can use to store sensitive files.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (3), switch to (1), open the (1)
> **Code Keywords:** switch (2), protected (2), interface (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** efs (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Viruses and Malware

> [↑ Back to Table of Contents](#table-of-contents)

#### Virus and malware overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=0)** - [Tutor] Now let's talk about viruses and malware.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=4)** The word malware comes from malicious software.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=8)** In general, it is software designed to damage, disturb or disrupt normal operations.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=16)** The motivation behind malware is sometimes equivalent to a prank or vandalism, or sometimes someone is actually trying to commit a crime.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=26)** There are a few different types of malware.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=29)** Four main types are viruses, worms, Trojans, and bots.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=36)** A few pieces of malware could fall into more than one of these categories, but most things are pretty well contained by one of these definitions.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=45)** So we're going to talk about each of these four individuals.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=49)** First of all is a virus, a virus malware that is attached to another program.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=55)** That program is called the host, so a virus always has to attach itself to something else.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=64)** Typically a virus requires human interaction to spread.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=68)** So when we share the host file, maybe by emailing it to someone or putting it on a jump drive, we not only share the file, but we also share the virus.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=79)** The next type is a worm.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=81)** A worm is similar to a virus, but it is differentiated by the fact that it is a standalone program that does not require a host.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=91)** Also it typically does not require human interaction to spread, so it can automatically spread itself often by exploiting some weakness in your operating system or other software.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=105)** Next is a Trojan, Trojans are named after the wooden horse that would used by Greece to sneak into Troy.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=114)** And like their namesake Trojans are things that appear to be one thing, but actually are another.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=120)** They are malicious programs that look legitimate.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=124)** Sometimes they even go so far as to actually provide some legitimate functionality, but then also do malicious stuff in the background.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=133)** So for example, you might download a program off the internet that prints out coupons for you, and it does in fact print coupons, but it also does something malicious in the background that is Trojan.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=146)** Trojans are typically spread by humans, and they typically trick humans into performing actions that will help them spread.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=155)** The last category is a bot.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=158)** A bot is basically a shortening of the word robot, and a button performs an action that is usually done by humans, such as sending an email, opening a chat session, browsing the web.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=171)** Sometimes the bot in and of itself is harmless, but when combined with a virus, it can be very dangerous.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=179)** Rather than the virus waiting on you to send an email and attach to the virus, instead the bot will automatically send the email and automatically attach to the virus.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=190)** So when combined with something else, bots can be very dangerous.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), is called (1)
> **Code Keywords:** require (2), let (1), else. (1), else, (1)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Speakers:** - [tutor] (1)

#### Exploring antimalware solutions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about antivirus software.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=5)** Antivirus software is software that is designed to detect and remove viruses from your computer.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=12)** Many of the products that are called antivirus are actually anti-malware because they will remove types of malware other than just viruses.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=22)** They're usually pretty good at catching worms also, and some of them will do a decent job with Trojans and bots.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=30)** Most antivirus solutions will require definition files.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=34)** Those definition files are lists of all known malware programs, so when your antivirus software runs, it compares a program on your computer against a list of known malware, and if it finds a match, it knows the program to be malicious.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=51)** These definition files are provided by the vendors, and they are updated often, sometimes daily, sometimes updated more than once a day, and it's very important for you to download the updated definition files and use them.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=66)** Out-of-date malware protection is a big problem.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=70)** There's a saying that out-of-date malware protection is only marginally better than having no malware protection on your computer.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=78)** If your computer is going to be infected, it's most likely going to be infected with malware that was just developed recently.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=86)** All of the older viruses, the viruses that have been out for years, typically don't spread very much because everyone else's virus protection software has stopped them.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=98)** If you're going to get hit with a virus, it's most likely something that was developed recently, and you will only be protected if you, in fact, have an updated definition file.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=109)** When choosing a malware solution, there are several out there from many different vendors.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=114)** There's some things you want to look for.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=117)** One is the mechanics of definition update.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=120)** Most solutions will have something to automatically update.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=123)** They will download new definition files from the vendor periodically.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=128)** You want to choose a solution that gives you some control over how often definition files are updated, and although you want it to happen automatically most of the time, sometimes you might want to update them manually.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=143)** So you'll need to make sure the software supports an option for manual updates.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=149)** Most anti-malware products have some mechanism for you to exclude certain files from being scanned, and that could prevent false positives.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=158)** You also want to look into what kind of reports are generated from different vendors.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=163)** If your software is finding viruses on the network, you'll want to be alerted to that or have some sort of report, and if you administer a large number of Windows 10 computers, you probably don't want to have to go to each computer and run the report separately.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=180)** Some vendors do provide a centralized location where you can run reports for multiple PCs from one place.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=188)** And lastly, you want to look into resource usage.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=192)** Your antivirus solution is always going to use some amount of processor and memory.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=198)** Hopefully, that is a low amount, but you may want to do some measurement to see exactly how much CPU and memory your antivirus solution is using, and obviously, the preference would be for it to use less resources.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), match, (1), protected (1), for. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Windows Defender: Virus and threat protection
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=0)** - [Narrator] In this section we're going to talk about virus and threat protection.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=4)** So off the start menu I'll type in virus and I'll click on the option for virus and threat protection.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=13)** In some versions of Windows 10, this will be called Windows Defender, virus and threat protection, other times the name virus and threat protection stands alone.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=25)** Also, if you're running a different version of Windows 10 than I am, you will likely see these options in a slightly different order, the core functionality is the same, but the interface may look a little different.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=39)** So the top part of this interface is talking about current threats and that there are no current threats, which is good news.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=47)** I have a button for quick scan and under that I have scan options, which is where I'm going to click.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=54)** I have the option to do four different types of scans.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=58)** The first one is a quick scan, which will check folders where threats are commonly found, so folders like your internet downloads, that's a more common place to have a virus.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=69)** The next option is full scan, which checks everything on the hard disk, that'll take a much longer time.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=77)** Then we have custom scan in which we can choose the files and locations we want to check.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=85)** And the last option is a Windows Defender offline scan.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=89)** So there are some types of viruses that are difficult to find while the computer is running.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=97)** So this offline scan will reboot the computer at least once, sometimes more than once and during the reboot, it can check for viruses that are hard to find while the computer's running.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=111)** I'll go back to virus and threat protection, and I see there's a section called virus and threat protection settings, I'll click on manage settings.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=121)** And here we have several options that on most Windows 10 PCs they're turned on by default, real time protection allows this tool to run on any file that's currently being opened, which provides the highest level of protection, but can impact performance a little bit.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=141)** The next two options on cloud delivery protection and automatic sample submission are both similar, they deal with Microsoft maintaining a database of what files it believes are safe or unsafe, and you can check files on your computer against Microsoft's database of what is safe.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=165)** And the bottom option is for tamper protection, which prevents others from tampering with important security features, so it reduces the number of users that would have access to this control panel that we're looking at.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=181)** So four options again, typically we want all four to be turned on.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=188)** I'll go back again and we'll look at virus and threat protection updates.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=193)** There's only one option there, I can check for updates.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=197)** If I click on that, it tells me what version of the definition files I'm running, when they were created, and when they were last updated.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=208)** I can click on check for updates.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=211)** So this is a manual updating of my definition files, but in Windows 10, I also get the automatic updating of my definition files.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=223)** Going back again to the virus and threat protection section and scrolling all the way down to the bottom, we have ransomware protection, which is fairly new, wasn't in the original release of Windows 10, has been released recently, if I click on manage ransomware protection, we see, first of all, there's only really one choice, turn it off or turn it on, and obviously having it on is the more secure option.
>
> **[4:14](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=254)** It goes on to explain that if we turn this on, it will limit the number of processes that can access our files and folders, which would hopefully stop a ransomware attack.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=267)** It also says it's going to upload my most important documents to OneDrive, and that way, if I was hit with a ransomware attack, I would still be able to recover my files from the OneDrive cloud.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=282)** So again, these options and the virus and threat protection have changed slightly with different versions of Windows 10.
>
> **[4:51](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=291)** So you may see slightly different options on your screen, but there's always the option to scan for threats and always the option to update your definition files.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5)
> **Code Keywords:** interface (2), default, (1), new, (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### Windows Defender: Device performance and health
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=0)** - [Instructor] Now let's talk about device performance and health.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=5)** So off the start menu, I'm going to type in Windows Security and select the option for Windows Security.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=16)** And here we see a tile for device performance and health.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=21)** I'll click on that.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=23)** And I get a quick health report about my computer.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=29)** The first one is the Windows Time service is having no issues.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=33)** Having the time on your computer set accurately is important for your security logs to be accurate.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=42)** The next two, storage capacity and battery life.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=46)** Both of these feel like issues that are not really security issues, in my opinion, even though this is in a security control panel, I feel like your hard drive running out of free space is not really a security issue.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=61)** However, it is a good thing to know.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=63)** So having this information on the screen is valuable, just not necessarily a true security concern.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=71)** At the bottom is apps and software, and this will tell us about any potential software we have on our computer that is suspicious and could possibly be a Trojan or a bot.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=83)** It will also tell us about apps and software that are using more resources than they probably should.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=90)** So an application that's using almost 100% of the available memory will be listed here.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=97)** Below that we have the option for fresh start.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=101)** The idea of fresh start is that it will take us back to a state where Windows is configured very similarly to the way it was configured when we first installed Windows.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=113)** It says it will not delete our personal files.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=116)** It may however, delete some apps.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=119)** Particularly being from a security mindset, any app that is possibly a virus or malware or any app that is causing a major performance problem would be removed.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=133)** I see this as sort of a last resort.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=135)** If there's another way to solve your problem, go ahead and try some other troubleshooting steps.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=141)** If you get to a place where you're really stuck and you think it is one particular app that's messing you up and you can't uninstall that app going through other methods, then the fresh start is a good thing to try.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=154)** Again, it says it's going to keep all of my personal files, but that would still make me a little nervous.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=160)** So hopefully you have a good backup.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=163)** If you have a good backup of your files, then doing this makes me much less nervous, but again, I think of it as sort of a last resort to go to after you've gone through some other troubleshooting techniques.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (1), try. (1)
> **UI Navigation:** select the (1), click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Windows Defender: Firewall and network protection
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=0)** - [Instructor] Now let's look at some settings regarding the Windows firewall.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=5)** So off the start menu I'll type in Windows security, and select the option called Windows security.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=14)** In the security center, I'll click on firewall and network protection.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=19)** The first area we come to shows me the domain network, private network, and public network, all have the firewall turned on.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=29)** That's good.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=30)** I can click on one of these and it will give me the option to turn the firewall off for that particular network type.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=39)** I get a user account control panel, I'll click Yes.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=43)** And after a few seconds, I'll get a warning saying that the firewall is off, your device may be vulnerable.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=50)** So I'll go ahead and turn that back on.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=53)** Going back to the previous screen, after the three sections that show as domain, private and public, we have five options underneath.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=64)** The first is allow an app through a firewall.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=68)** When I click on that, it'll pull up a new interface where I see quite a lengthy list of applications.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=77)** And for any of those, I can allow them through the domain, private or public firewall.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=83)** All of this can be configured here or configured through group policy.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=89)** I don't want to make any changes so I'll hit Cancel.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=93)** The next option is network and internet troubleshooter.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=97)** Which brings up the question of why exactly what we have a network troubleshooter in the firewall section.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=104)** And sometimes when our network isn't working properly, it could be a problem with the firewall, or it could be a problem with routers and switches.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=114)** So here by having the troubleshooter nearby, I can look through and see in fact, is it truly a firewall problem or a network problem.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=126)** And I'll close that.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=128)** The next one, firewall notification settings I'll click on it.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=132)** Typically, you're going to be notified when settings are changed in the firewall.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=137)** If you'd like more detailed notifications or less detailed notifications, you can change that here.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=144)** I'll go back again.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=146)** The second to last option is advanced settings.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=149)** I want to click on that.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=150)** It will pull up an entirely new interface.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=155)** And interface you might be familiar with from previous versions of Windows.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=160)** That again shows me the domain private and public profile, whether or not they're turned on.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=167)** But this is the interface I can use to also create inbound and outbound rules.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=174)** So over in the left-hand side, I'll right click on inbound rules.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=180)** Go to new rule, and this will walk me through a wizard to create a new firewall rule.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=186)** I'll go ahead and do that now.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=189)** The first panel asks me if I want to base this rule off of a program, port, predefined or custom, and custom is basically a combination of the three above it.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=202)** For this one I'm going to set up a firewall rule based on port.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=206)** So click the radio button next to port, and then hit Next.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=211)** It's asking me if I'd like to create a TCP or UDP rule, notice there is no option to create a rule that applies to both TCP and UDP.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=222)** So for something like DNS that uses both TCP and UDP, you would have to create two rules, one rule for the TCP configuration and one rule for the UDP configuration.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=236)** I need to specify what ports I'm interested in.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=238)** I can list a single port or provide a range.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=243)** And then I'll hit Next.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=246)** Then it's asking me when a connection comes in that matches the criteria I've defined, should we allow the connection or block the connection?
>
> **[4:16](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=256)** Most things in windows firewall are going to be blocked by default so you'll need to create rules to allow things.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=263)** There's also a middle option, a third option, allow the connection if it is secure.
>
> **[4:30](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=270)** This checks to make sure the connection is using IPsec and if it is using IPsec, then it will be allowed.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=277)** But I'm going to go with just allow this connection, hit Next.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=282)** It's asking me which profiles to apply the rule to, and I can choose domain private or public or any combination there of.
>
> **[4:52](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=292)** And I'll hit Next.
>
> **[4:53](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=293)** It's asking me to give it a name.
>
> **[4:56](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=296)** The name is not going to affect the functionality, but provided a meaningful logical name will help you with your administration.
>
> **[5:04](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=304)** And then I'll click Finish.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=306)** And we have a new rule right here on top.
>
> **[5:10](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=310)** We could right click on that rule, go to properties, and change just about everything or anything that we did during the setup.
>
> **[5:18](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=318)** So we have a lot of options to customize these rules.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=324)** I'll close this and go back to the firewall and network protection interface.
>
> **[5:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=329)** The very last option is restore firewall to default.
>
> **[5:33](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=333)** And if we click on that, it will give me the option to restore for default, removing all settings that you have configured.
>
> **[5:43](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=343)** And this is probably a last resort in a troubleshooting scenario.
>
> **[5:48](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=348)** If you've gotten to the point where things just aren't working and you've tried to tweak some firewall rules and get them working, you could go back to restore default that would reset everything and allow you to try again.

> [!info]- Semantic Content
>
> **Code Keywords:** private (5), public (5), interface (5), let (1), type. (1)
> **UI Navigation:** click on (8), go to (2), select the (1)
> **Env Vars:** tcp (4), udp (4), dns (1)
> **Prerequisites:** set up (1), you'll need (1), setup (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Windows Defender: App and browser control
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=0)** - [Instructor] In the Windows Security settings, the next section we'll look at is App & Browser Control.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=7)** So I'll click on that.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=9)** And we'll see three sections: reputation-based protection, isolated browsing, and exploit protection.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=17)** Let's talk about each one of these individually.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=21)** The reputation-based protection, I'll click on that.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=25)** And that gets into helping us with malicious or unwanted apps, files, and websites.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=32)** We have several toggle buttons where we can turn on or turn off whether or not Microsoft Defender will check the reputation of various apps and files, mostly when you're surfing the internet.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=48)** And it's primarily designed to work with Microsoft Edge.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=53)** Near the bottom, we have the option to configure what happens when a potentially unwanted app is detected.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=62)** And now our only options are to block.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=64)** So we can turn on or turn off blocking apps, and turn on or turn off blocking dangerous downloads.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=74)** Previous versions of Windows 10 have the option to warn us instead of blocking.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=80)** But now, the only option is to block.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=84)** Going back to the App & Browser Control section, we see isolated browsing.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=90)** At the bottom, there is an option to install Windows Defender Application Guard.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=96)** When I click on that, I will be brought to the Windows Features Installation window.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=105)** And in there, we'll see Microsoft Defender Application Guard.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=109)** And if we click on that, it would give us the option to install it.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=113)** In some versions of Windows 10, it's called the Microsoft Defender Application Guard, in others, it is called the Windows Defender Application Guard.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=123)** But basically the same product.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=125)** Both of them allow us to run a web browser in a virtualized environment that provides much more security.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=133)** If we were to come across a virus in that web browser while it's in the virtual environment, it would be very unlikely to infect the rest of our machine.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=144)** Once we close the browser, we are also closing the virtualized environment, and therefore, that will likely delete the virus or malware that we encountered.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=158)** And the last section at the bottom is exploit protection.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=163)** In the exploit protection section, we have the option to configure several items about how the operating system runs.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=171)** And some of these are highly technical.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=174)** By default, they're all going to be on.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=176)** And in most cases, you want to leave them on.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=179)** We have things like data execution prevention, which will prevent code from being run from data-only memory pages.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=188)** So by turning this on, we allow the operating system to mark some sections of memory as being used for data-only, while other sections of memory can be used for both data and programs.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=202)** Turning this on will defeat some viruses.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=207)** We also have several options for randomizing memory, and then even how memory is randomized as we go further down.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=217)** Randomizing memory is an effort to defeat any exploit that relies on a buffer overflow.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=224)** So with a buffer overflow, data is put in memory and it leaks out of where it's supposed to be, and goes into the next adjacent section.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=235)** If the person writing the malware knows what things are going to be in memory and where they're going to be, then they could overwrite a very sensitive part of memory.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=246)** So by randomizing what parts of memory are used for what, it makes it significantly more difficult for anyone to successfully perform a buffer overflow attack.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=259)** So again, all of these things are on by default, and should be left on.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), toggle (1)
> **Code Keywords:** default, (2), let (1), delete (1)
> **Prerequisites:** configure (2), install (2)
> **Definitions:** is an  (2), is called (1)
> **Speakers:** - [instructor] (1)

#### Windows Defender: Application guard
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=0)** - [Instructor] So now I'd like to talk about Microsoft Defender Application Guard, and here in the Windows security settings, I'll click on app and browser control and the middle option, isolated browsing, under that we have text to install Microsoft Defender Application Guard.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=23)** So I'll click on that.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=25)** In the UAC I'll click on Yes.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=29)** And that will pull up the dialogue to turn on Windows features.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=36)** The one I'm looking for for me is called Microsoft Defender Application Guard.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=41)** In some other versions of Windows 10, it might be called Windows Defender Application Guard, but I'll hit the check box next to that.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=50)** Hit OK.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=52)** And I'll watch a progress bar go across the screen.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=56)** I received a message saying I have to reboot.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=58)** So I'll go ahead and do that now and I'll see you on the other side of the reboot.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=64)** Okay, now that I've rebooted, Microsoft Defender Application Guard has been installed.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=70)** I'm going to open Microsoft Edge web browser and off the menu with three dots in the upper right, I'll go to the fourth option, New Application Guard Window, and it'll take a minute to set up being this is the first time I've run it.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=91)** Now I have a new web browser window that for the most part appears to function just like any other web browser window.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=100)** However, because it is part of Application Guard, it is being run in a virtual environment.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=108)** This makes a few differences.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=109)** First of all, it provides increased security in that if I were to come across a virus while I'm in this environment, it's very difficult for that virus to break out of the virtual environment and affect my computer as a whole.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=126)** So if I do come across a virus, this particular browser window could get infected, but as soon as I close it, the virus will be gone.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=136)** That is the good part of all this.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=137)** The bad part is it can affect performance because now this is a virtualized environment.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=142)** Performance is not going to be as good as when we were in a non-virtualized environment.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=149)** So Windows Defender Application Guard has some good and some bad.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=154)** I would recommend using it.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=156)** Most of the time, you won't notice the performance penalty and you will be running more securely.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1)
> **Code Keywords:** function (1), this. (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** install (1), set up (1)
> **Env Vars:** uac (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Windows Defender: Endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=0)** - [Instructor] Now let's talk about Defender for Endpoint.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=4)** Many of the other features of Defender are designed for working with one or two machines at a time.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=11)** Defender for Endpoint is set up more with the mindset of managing a large number of Windows 10 clients.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=19)** It involves a central server running in the cloud that communicates with your local Windows 10 clients.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=27)** So this allows for centralized configuration and centralized administration.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=32)** So rather than having to go to every Windows 10 client and configure the settings for Defender, you can do your configuration through a central server.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=44)** Defender for Endpoint involves three main parts.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=47)** The first is in-point behavioral sensors, and these are sensors built into Windows 10 that will report information up to the cloud, up to your central server, cloud security analytics, so once the data is in the cloud, a variety of reports are generated so that you can see from one place, you can see what your security status is, and threat intelligence.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=76)** Microsoft works with some vendors and some third parties to come up with some intelligence about what is and is not malware.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=87)** So based on what you've uploaded, they could make a determination of if you've been infected or not.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 5. Network Security

> [↑ Back to Table of Contents](#table-of-contents)

#### Securing network traffic by using IPsec
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about using IPsec in Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=6)** IPSec, the word, is a combination of an acronym and then an abbreviation, but overall it means Internet Protocol Security.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=16)** It is focused on the secure transfer of packets.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=21)** IPSec is always based at the packet level.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=25)** In this context, secure means three things.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=28)** Secure means it can authenticate the origin of the data meaning we know that the data is coming from who it says it's coming from.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=39)** It can provide data integrity assurance, so we know that the data has not been changed from what was originally sent.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=49)** And it will encrypt the packets, so if anyone is able to intercept the packets, they would not be able to read them.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=56)** IPSec requires authentication.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=59)** And because it requires authentication, it works best on internal networks, particularly multiple servers that are on the same domain can typically authenticate to one another quite easily.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=72)** It's a little more tricky to get this to work over the public Internet, because most Internet servers are anonymous.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=80)** IPSec combined with other technologies can run over the public Internet and it's one of the ways that vendors implement VPN.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=90)** Now let's look at implementing IPSec in Windows 10.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=95)** Off the start menu, I'll type in firewall and go to the option for Windows Defender Firewall with Advanced Security.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=106)** In the tree view on the left, I'll go to Connection Security Rules.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=111)** I'll right click and go to new rule.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=114)** And that'll take me to the wizard.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=116)** The first page of the wizard talks about several pre-defined rule types you can create, but I'm going to go all the way to the bottom for custom, so I can specify custom values for everything.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=129)** Then I'll hit next.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=131)** It's asking me what end points we want to use and these end points can be a specific IP address or they can be groups of IP addresses grouped by subnets or we can even go with any IP address.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=147)** I'm going to go with two specific IP addresses, so I'll add my local IP address.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=157)** I'll add my local IP address for end point one and for end point two, I'll add the IP address of the machine I'm going to connect to.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=169)** Then I'll hit next.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=172)** Then I have the options to either request or require IPSec for either inbound or outbound.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=181)** I would like to require for both inbound and outbound, so I'll select the radio button next to that and hit next.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=190)** Then I have options on the authentication method to use.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=194)** I would like to authenticate the computer, not the user, because I want to encrypt all traffic going between these two servers.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=204)** And it's going to use Kerberos version five which will require me to be part of a domain.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=210)** So I'll select that radio button and hit next.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=214)** Then it's asking what protocol.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=216)** Normally I would do several different protocols.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=218)** For purposes of demonstration, I'm going to select just ICMPv4 which is the protocol that ping uses.
>
> **[3:48](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=228)** And then I'll hit next.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=230)** It's asking me where I would like to apply this rule.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=233)** I'll go with all three types of network connection.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=237)** Hit next and now I need to give the rule a name.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=243)** Then I'll hit finish.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=245)** Now that this rule is created, I'll go ahead and pull up a command prompt and I'll issue the ping command going to the server I specified in the rule.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=258)** And then I'll put in -t which will mean the ping command will run continuously until I stop it.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=266)** We see that communication is successful.
>
> **[4:29](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=269)** So back in Windows Defender Firewall, I can open up monitoring, go to security associations, go to quick mode, and then we see that there is a connection between my local IP address, the remote IP address, and it shows stuff about the protocol and the technologies being used for both integrity and encryption.
>
> **[4:54](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=294)** So a very nice little tool here.
>
> **[4:56](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=296)** I can quickly get information about any IPSec-enabled connections.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), public (2), from. (1), let (1)
> **UI Navigation:** go to (5), select the (1)
> **Definitions:** is a  (2)
> **Env Vars:** vpn (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### Using VPN in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about VPN or virtual private network, which is an authenticated and encrypted connection between our computer and some other computer that runs over the internet, but because it is encrypted is a secure connection over the internet.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=22)** When connecting to a VPN, we'll need VPN client software, and many VPN vendors will provide a custom piece of software to use as the client.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=33)** But Windows 10 also has a built-in VPN client that will work with some, but not all VPN providers.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=42)** Off the start menu I'll type in VPN.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=45)** And I'll go to the option for VPN settings.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=49)** And here I'm taken to an interface where the top option is add a VPN connection.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=54)** I'll click on that.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=56)** And then it asks me who my VPN provider is.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=59)** The only one we have to start off with is Windows built-in.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=63)** So I'll select that.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=65)** We need to give it a name.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=67)** The name is not important to the functionality.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=69)** It just helps us remember which connection this is.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=74)** Then we'll need either the name or address of the VPN server we'd like to connect to.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=80)** This is something you'll need to get from your VPN administrator.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=84)** Under VPN type, we have the option for several different protocols or groups of protocols we could use, or we can set it to automatic.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=96)** Typically, if we set it to automatic, the machine will figure out what protocols are needed and will select the appropriate one automatically.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=106)** The next option is the type of sign-in info.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=109)** And in this case, sign-in info basically means what are we going to use to authenticate.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=114)** That could be username and password, which is probably the most common, smart card, which is a nice way to do it if you have the technology, one-time password, which is pretty unusual and certificate, which is becoming less common now that smart cards are becoming more popular.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=134)** If you select username and password, you will need to of course provide a username and password.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=143)** And then we hit Save.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=145)** I now have, back in the VPN interface, a listing of the connection I just created.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=151)** If I click on that, I'm given the option to connect.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (14)
> **Code Keywords:** interface (2), private (1), type, (1), case, (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Definitions:** is a  (2), is an  (1), basically means (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 6. Group Policy

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of Group Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about using Group Policy to administer windows 10.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=7)** Group Policy is a technology that allows us to configure thousands of user and computer settings.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=14)** Group Policy can be applied at the domain level or a local Group Policy.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=20)** If you're running on a domain, that's probably the preferred place to do your Group Policy.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=25)** If you have one or more Windows 10 computers not connected to a domain, then you could use local Group Policy to accomplish largely the same thing.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=36)** Be aware that domain settings can override local settings.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=41)** So if you create a policy at the domain level that has a setting, and you create a policy at the local level that has the opposite of that setting, then the domain setting will take precedence.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=53)** So typically we don't manipulate the same setting at both the domain level and the local level.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=60)** If you want to make a setting, just do it in one place or the other, not both.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=66)** Windows 10 includes, by default, a tool called Local Group Policy Editor.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=72)** Previous versions of Windows had this tool available as a download, but now it's just included as part of the base installation of the operating system.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=82)** The tool has two main sections, computer configuration and user configuration.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=89)** After you change settings, in order to apply the settings, you typically need to do one of two things.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=96)** You can go to a command prompt and type in GPUpdate.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=100)** That command will update the local Group Policy and the domain Group Policy for most settings.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=108)** But for a few settings, a reboot is required.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=112)** And any time you reboot, by default, it updates everything in both local Group Policy and domain Group Policy.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), override (1)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Applying security settings by using Group Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=0)** - [Instructor] In this section, we're going to look at applying some security settings in Windows 10 by using group policy.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=7)** And the goal of many of these settings will be to make our computer more secure.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=14)** So off the start menu, I'll type in group policy, and I'll select the edit group policy control panel.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=26)** In here on the navigation tree to the left I'm looking under computer configuration under window settings, under security settings, and under local policies, I'll click on user rights assignments and the right half of the interface, we'll see several policies listed and which groups have access to these policies.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=54)** And because this is the user rights section, most of these policies are related to users having permission to do certain things on the computer.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=65)** For example, allow log on locally is currently set to have several groups in it.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=73)** One of them being the guest group, and I really don't want guests logging into my computer.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=80)** So I will double click on that.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=83)** And then in the dialogue, I'll highlight the guest and I'll hit remove, and then I'll hit apply.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=91)** And okay.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=92)** And that has removed the guest group from the ability to log on locally, which should increase the security of my PC.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=102)** Similarly, the option for access this computer from the network is currently applied to everyone.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=111)** And I really don't like giving permission to the everyone group.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=115)** So I'll double click on that.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=118)** I'll highlight the everyone group click remove and click apply.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=123)** It does give me a warning that this could affect some services and yes, that is accurate.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=129)** Some services on the network may need to access our computer anonymously and if so, it was doing that through the every one account.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=138)** I really would prefer for nothing to access my computer anonymously.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=143)** So I'm okay with removing the everyone group.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=147)** So hit. Yes.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=149)** And okay.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=150)** And now the everyone group has been removed from access this computer on the network.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=157)** So plenty of options here, you can look through all of these policies, look at what they mean and then decide what groups should be allowed to do those things.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=167)** Most of this is using the built-in groups, but we can also use the custom groups that we created earlier.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=175)** I also want to look briefly at the account policies.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=178)** So back in the left-hand pane, I'm going to select account policies, open that up and look at password policies.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=188)** And here's where we can set some rules about user passwords, how often they expire and the minimum password length, which by default is set to zero characters, which is certainly not a good idea.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=204)** So I'll double click on that and I will increase the number four minimum password lift eight is probably the minimum you want to go.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=213)** Something like 12 or 14 would be even better.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=217)** I'll hit apply and okay.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=220)** So again, here are some more settings you can change to whatever fits your needs to set the right level of security for your Windows 10 PC.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Using Group Policy to audit actions in Window 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=0)** - [Instructor] Now let's look at using group policy to configure some of the auditing of a Windows 10 PC.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=7)** Again, I'm in Local Group Policy Editor.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=11)** Under the Local Computer Policy under Computer Configuration, I'm going to open up Windows Settings.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=19)** Under that I'll open up Security Settings.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=23)** Under that I'll open up Local Policies, and in there we find Audit Policy.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=29)** The top one is Audit Account Logon Events.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=33)** If I double-click on that, I'm given the option to either audit successful logon attempts, audit failed login attempts, or audit both.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=45)** And typically on most of my computers, I like to audit both.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=49)** I audit the success because I want to know who's logging into my computer and I audit the failure because I want to know who tried to log into my computer and failed.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=59)** Both of those are interesting to me.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=61)** So I'll hit Apply and okay.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=65)** The other one I'd like to demonstrate is Audit Object Access.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=70)** And for now I'm going to select both Success and Failure.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=74)** Object access is just about any file or folder on your computer.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=79)** So every time there's an attempt to access a file or folder whether that succeeds or fails, it'll be audited.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=88)** I'll click Apply and I'll click okay.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=91)** Now I'm going to go ahead and access an object, ind particularly a file.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=96)** So I'll go to the C drive.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=103)** Go to the folder I created earlier in this course.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=107)** Open up the text document.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=110)** Close that and close Windows Explorer.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=114)** Now all of that activity should have been audited.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=118)** So let's look at the Windows Event Viewer.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=121)** Off the start menu, I'll type in event and select the option for Event Viewer.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=129)** In the tree on the left, I'll open up Windows Logs and select the Security Log.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=134)** Everything you audit goes into the Security Log.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=138)** If you notice in the Tasks Category column, I now have a number of items that say File System.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=146)** And I'll click on one of those.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=148)** We'll see it says a handle to an object was requested.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=153)** The name of the user account is there, the name of the domain that's linked to that account is there, and the name of the file is listed below.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=165)** And we see that it was done by explorer.exe which is Windows Explorer.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=172)** I'll select another one and scroll down a little.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=175)** We see the object access was eventviewer.msc.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=181)** So even the fact that I opened Event Viewer is now logged because it is considered an object access.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=188)** Overall, auditing all object access often tends to be too much.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=194)** It tends to flood our logs with too much information creating two potential problems.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=201)** One in that our logs could grow too quickly.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=204)** The other problem being that our logs may contain so much useless information that we would miss the important information.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=214)** So typically I do not audit object access.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=218)** I may turn it on temporarily in a troubleshooting situation.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=222)** But on a day-to-day basis, I find this is just too much information in the logs.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), select the (2), double-click (1), click on (1), scroll down (1)
> **CLI Commands:** find (2)
> **Code Keywords:** let (2)
> **Cross-References:** earlier in (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Using Group Policy to harden Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=0)** - [Instructor] Now I'd like to look at a few more settings in group policy that can allow us to harden our Windows 10 PC.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=10)** So off the Start menu, I'll type in group policy and select the option for Edit group policy.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=20)** In the tree view on the left, I want to select Windows settings, underneath that, Security settings, then Local policies, and Security options.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=36)** And this will give me several dozen options of things I can change on my Window 10 PC.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=42)** I'd like to talk about a few of the ones I think are the most important.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=47)** Near the top, we have Accounts: Guest account status and I like to have that as disabled so the guest account is disabled.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=57)** A little further down, there's one called Audit: Shut down immediately if unable to log security audits.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=67)** On my home PC, I usually have this disabled, but many businesses want this enabled to make sure the machine cannot continue to function when auditing has been disabled.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=80)** Scrolling down, I'm interested in one called Interactive login: Smart card removal behavior, so when someone removes their smart card what should happen on the PC.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=94)** The default is No action, but I like to change that to Lock workstation, so if someone removes their smart card as they're walking away from the PC but they forget to lock it, this would automatically lock it for them.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=112)** And scrolling down a little farther, there's two that I'm interested in.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=117)** The first is Network access: Do not allow anonymous enumeration of SAM accounts.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=124)** SAM accounts are basically local Windows accounts.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=128)** And I don't want anyone looking at those anonymously so I have enabled the policy that says Do not allow anonymous enumeration.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=139)** I've always felt this policy has a little bit of an awkward name in the sense that the functionality is phrased in the negative, do not allow.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=150)** So in order to actually block people from doing things, we need to enable the policy.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=156)** And it has always seemed a little counter-intuitive to me.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=160)** I also like to enable the one right below that, Do not allow anonymous enumeration of SAM accounts and shares.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=169)** So beyond the SAM accounts, I also want to block anonymous access to the shares on my PC.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=177)** If someone wants to access a share, they're going to have to use username and password.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=182)** If I double-click on this one, you notice it has a warning that says Modifying the settings can affect some applications and that is because applications do require anonymous access to shares.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=196)** So you'll need to check out various applications that you're running, and if any of them give you a problem, it's very easy to come back here and change this setting back to what it was, before.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=208)** So again, those are the group policies that I find to be most important when locking down a Windows 10 PC.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=215)** Obviously, there are dozens of others and you can take some time to look through all of these and see what might meet your particular needs.

> [!info]- Semantic Content
>
> **Env Vars:** sam (4)
> **Code Keywords:** continue (1), function (1), require (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** select the (1), double-click (1)
> **Warnings:** warning (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 7. Remote Desktop

> [↑ Back to Table of Contents](#table-of-contents)

#### Basic configuration of Remote Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=0)** - [Narrator] In this section, we'll go into talk about using Remote Desktop in Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=6)** Remote Desktop has been around for several generations of Windows.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=10)** The functionality in Windows 10 is not that different than previous generations, but the interface used to configure it is different.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=20)** So off the start menu, I'll click on the gear icon which will take me to settings.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=26)** I'm looking in the system area and if I scroll down, I'll see second from the bottom, Remote Desktop.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=35)** This takes us to the basic interface where there is a slider to either turn on or turn off Remote Desktop, mine is grayed out because this particular setting is controlled by my domain.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=49)** There's also check boxes for whether or not we should keep the PC awake waiting for connections when it is plugged in because if your PC goes to sleep, it typically will not respond to Remote Desktop requests, so you'll need to keep it awake, and another checkbox for making the PC discoverable.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=69)** Below that we have advanced settings.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=72)** If I click on that, it shows me some different options about authentication and at the bottom, it shows me I'm using port 3389, which is the default port for Remote Desktop.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=86)** Going back to the main interface, it asks me how would I like to connect to this PC?
>
> **[1:32](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=92)** And under there, there's a link for, don't have a Remote Desktop client on your device.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=98)** If I click on that, it takes me to the Microsoft website to a page where I can download various Remote Desktop clients.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=106)** Not just for Windows, but also Android, iOS and Mac OS.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=110)** So yes, you can use Remote Desktop going from a Mac to a Windows 10 PC, or even from a mobile phone, Android or iOS.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=122)** From a technical point of view, these clients work perfectly fine.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=126)** The difficulty always is the small screen.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=129)** Your phone likely has a much smaller screen than your PC does and therefore, some things will be uncomfortable to work with, but the clients are easy to download, easy to install.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=143)** The last section is a very important one, user accounts.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=147)** Select which users can remotely access this PC, so when I click on that, you'll see that for me it is blank, but there's also a note at the top that says, anyone who is a member of the administrators group can connect even if they're not in this listed groups.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=164)** So administrators can always use Remote Desktop, and for me, that's enough.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=170)** Typically the only people I allow to use a Remote Desktop are the administrators of my PC, but if I wanted to add someone, fairly easy to do so.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=179)** Click on the add button.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=182)** The location this account is stored in is on the local computer.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=189)** You could add a user or a group here, I'm going to add the test user I've been using.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=195)** Hit okay and so now test user would have access to Remote Desktop.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=201)** So again, for security reasons, you want to be very careful about who is listed in this group, probably never want to use the guest account or everyone group here.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=213)** For security reasons, we want to keep this to the minimum possible.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), scroll down (1), checkbox (1)
> **Code Keywords:** interface (3), for, (1)
> **Definitions:** is a  (3)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **Code Identifiers:** ios (2)
> **Ports:** port 3389 (1)
> **Speakers:** - [narrator] (1)

#### Advanced Remote Desktop configuration using Group Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=0)** - [Instructor] Now I'd like to talk about some more advanced configuration of Remote Desktop in Windows 10.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=7)** And for this we'll be using Local Group Policy, although you could accomplish largely the same thing through Domain Group Policy.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=15)** We'll have to drill down a little to get to the settings I want to look at.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=19)** So under Computer Configuration, I'll open up Administrative Templates, then I'll open Windows Components.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=28)** There's a lot of windows components.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=29)** So I'll have to scroll down to get to Remote Desktop Services.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=35)** In there I'll open up Remote Desktop Session Host, and one of the options there is security.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=43)** We have a handful of settings we can configure about security.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=47)** One of the most meaningful is to require a specific security layer for Remote Desktop connections.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=55)** So I'll double click on that.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=57)** I'll go ahead and enable this policy by clicking the radio button next to Enable.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=64)** That activates the dropdown where I can configure my security layer to either be Negotiate, RDP or SSL.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=73)** The most secure of these is SSL.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=77)** And we see in the Help section to the right, if we select SSL, it actually uses TLS 1.0 to encrypt our information, which is the strongest encryption supported by Remote Desktop.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=93)** So SSL is the most secure.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=95)** The most functional is Negotiate.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=98)** And with Negotiate, the server and the client will attempt to use different authentication and encryption protocols until they find one they can both use.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=109)** They start off trying the most secure one, which is TLS.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=114)** If that doesn't work, they'll go down list and keep trying other protocols until they find one that works.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=122)** But because SSL is the most powerful, I will select SSL, hit Apply and Okay.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=131)** The other one I like to configure in here is always prompt for a password upon connection.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=137)** If we double click on that and then just hit the radio button for Enabled, that will force someone to provide their password every time they connect to a Remote Desktop session.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=149)** And though the words, they will not be able to save a password and be automatically logged in.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=156)** So I like that setting.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=157)** I'll hit Apply and Okay.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=160)** There's a few other settings not under the security section that I feel have some security implications.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=168)** And that is in the session timeout limits.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=172)** We can set a timeout to automatically disconnect a active or idle session after a certain amount of time.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=180)** So the situation I'm looking at here is, if someone were to make a Remote Desktop connection, use that session for a bit, then get up from their computer and walk away, someone could come behind them and take over that session.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=197)** By setting a timeout on the session, we don't completely eliminate that problem, but we do reduce the likelihood that someone would come behind them because hopefully by the time the person tries that, the session would have timed out.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=213)** So I can double click on Set Time Limit for Active but Idle Session, go to Enabled, and then in the dropdown I have the option in minutes, hours or days.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=227)** Whatever you think is appropriate for a timeout for an active but idle Remote Desktop session.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=237)** I'll hit Apply and Okay.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=240)** So by addressing some of these settings in Group Policy, you can fine tune your Remote Desktop Security Policy and hopefully create a more secure situation.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (6), tls (2), rdp (1)
> **UI Navigation:** click on (2), dropdown (2), scroll down (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Prerequisites:** configure (3)
> **Code Keywords:** require (1)
> **Versions:** 1.0 (1)
> **Speakers:** - [instructor] (1)

#### Allowing Remote Desktop through firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=0)** - [Instructor] By default, Windows Firewall will block all remote desktop connections.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=6)** So you're probably going to need to create a rule in Windows Firewall to allow remote desktop connections.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=15)** Off the Start menu, I'll type in Firewall.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=19)** And I'll go to Windows Defender Firewall with Advanced Security.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=25)** Then I'll click on Inbound Rules, and you see for me, the very top rule is Allow Remote Desktop.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=32)** I had to create this because I am currently remoted into this computer.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=39)** But if I double click on that, we can look at some of the settings for that rule.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=44)** On the Programs and Services tab, I did not list a specific program, but you could if you wanted to, specifically list remote desktop.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=55)** Instead, I'm limiting it by port.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=57)** So on the Protocols and Ports tab, you'll see I limited it to TCP protocol and the local port of 3389, which is the default port for remote desktop.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=72)** In the scope, I have limited the remote IP addresses, so I don't want just anyone coming from the internet being able to remote into my local computer.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=83)** I have limited it to the 192.168 subnet, and therefore it's limited only to my local network.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=93)** I could add additional IP addresses here, either public or private, if I wanted to allow access from a particular IP address on the internet.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=106)** The other place you might want to look is Local Principles and Remote Users.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=111)** Again, for me, remote desktop is limited just to administrators.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=117)** That would provide an extra layer of security, in that only administrators would be able to access remote desktop, and also only administrators would be able to get through the firewall.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=128)** So, plenty of things to configure here on the inbound rule for Allow Remote Desktop.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (1), public (1), private (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** tcp (1)
> **Versions:** 192.168 (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Changing listening port for Remote Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=0)** - [Instructor] By default Windows 10 will listen for remote desktop connections coming in on port 3389.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=8)** If you would like to change this port, it's fairly straightforward to do so.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=13)** You'll need to edit the registry.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=15)** So off the start menu, I'm going to type in regedit and I'll select the option for registry editor.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=25)** You may get a pop-up for user account control.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=28)** If you do click, yes, we'll need to drill down to the particular key that we want to edit.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=37)** It's under H key local machine, system, current control set, control.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=46)** Then we'll need to scroll for a bit to get to terminal server open up terminal server under there.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=55)** I'll look in WinStations and then I'll click on RDP TCP, and that will pull up a number of keys.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=66)** The one I'm looking for is called port number.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=71)** I'll double click on port number, and we can view this data in either hexadecimal or decimal probably makes more sense to look at it in decimal.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=84)** So it's currently set to 3389.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=87)** You can change this value to anything between 1025, all the way up to 65,000.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=97)** So why might you want to do this?
>
> **[1:38](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=98)** Well, remember, everyone knows that 3389 is the default port for remote desktop services.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=107)** So a hacker on the internet may try to access your machine using remote desktop and port 3389.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=116)** A highly skilled hacker will probably figure out if you change the port number, but a hacker with a low level of skill might not be able to figure out that you change the port number.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=129)** If you do, in fact, change this port number, you'll also probably need to change the firewall rule that you created to allow, add remote desktop.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=139)** And when you connect, you'll need to specify the port.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=144)** So normally in a remote desktop connection, we would just type in the IP address.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=150)** And that will default to port 3389.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=154)** If you'd like to specify a specific port, you just put a colon and then the number for the port.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=161)** So this would try to connect to port 1234.

> [!info]- Semantic Content
>
> **Ports:** port 3389 (3), port 1234 (1)
> **UI Navigation:** click on (2), select the (1)
> **Env Vars:** rdp (1), tcp (1)
> **Tools:** terminal (2)
> **Prerequisites:** you'll need (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 8. Additional Security Considerations

> [↑ Back to Table of Contents](#table-of-contents)

#### Controlling updates for Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about Windows Update.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=4)** One of the most important things you can do to secure your Windows 10 PC is to update it on a regular basis with security updates provided by Microsoft.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=15)** It's also one of the easiest things to do.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=19)** So off the Start menu, I'll type in Windows Update and I'll select the option for Windows Update Settings, and then the interface, the button at the very top is Check for updates.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=36)** So I'll click on that and now my machine will go out to the Microsoft servers and check for any available updates and then notify me about those.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=46)** Sometimes it takes a few seconds, sometimes it takes a few minutes.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=51)** And it says I do have one update that I'm missing so it is downloading and installing that update for me automatically.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=60)** And for this particular update, a restart was required for some updates require a reboot, some don't.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=66)** I am going to do that reboot immediately after I finish this demo because I want to keep my machine as secure as possible.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=76)** But first, let's talk about some of the options underneath.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=79)** At the bottom, we have four options.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=81)** The first is to Pause updates for 7 days.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=85)** And as the name implies, this will stop my machine from checking for updates for seven days.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=94)** That's not something I want to do real often but from time to time, there may be a good reason to temporarily pause updates.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=104)** The next option is to Change active hours.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=107)** When I click on that, we'll see that currently my active hours are set 9:00 AM to 8:00 PM.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=114)** and during that time, my device will not reboot automatically.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=119)** If I turn off Active hours, then there is a possibility of an automatic restart happening during the day, so I like that to be turned on.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=130)** Going back, we have the option to View update history which, as its name implies, shows me all of the updates that have been installed on this PC and does give me the option to uninstall some updates.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=146)** It's pretty rare that an update will cause a problem, but if it does, you can come here, to this interface and uninstall that update.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=157)** I'll hit back again and the last option, Advanced options, I have the slider selected for Receive updates with other Microsoft products when you update Windows and I like having this turned on because security is not just about Windows being secure, I also need Microsoft Office and Microsoft Edge, and those products to be secure, so I do like to have that turned on.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=183)** It has an option on whether or not I want to restart the device as soon as possible.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=188)** I have that turned off because I like some control over restart.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=193)** I have the option for Show notifications when the PC requires a restart to finish updating.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=200)** Most of the time I have this turned on, but being I'm recording demos on this PC, I don't want a whole lot of notifications popping up everywheres, but this is something I would normally have turned on.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=213)** And then the last option, Pause updates, we had seen a previous interface that allow us to pause for seven days.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=220)** This interface will allow us to pause for up to 35 days and choose which day we'd like to resume.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=231)** So I'll go back.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=232)** So that's our major options concerning Windows Update.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=236)** You'll notice there was no option to permanently turn off updates.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=240)** We can pause them for up to 35 days but we can't actually turn off Windows Updates and that is intentional.
>
> **[4:08](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=248)** In previous versions of Windows, you could turn off updating.
>
> **[4:13](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=253)** Microsoft decided to remove that ability in Windows 10.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=258)** So all Windows 10 PCs will be updating automatically from time to time in the interest of security.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), require (1), let (1)
> **UI Navigation:** click on (2), select the (1)
> **Ports:** :00 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Browsing the web securely with Edge
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=0)** - Microsoft Edge is now the default web browser in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=5)** So, I'd like to talk a little bit about making it more secure.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=10)** Off the Start menu, I'll open up Microsoft Edge.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=14)** And then in the upper right, I'll click on the menu that's signified by three dots.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=21)** In there, near the bottom, I have settings which will take me to a section with quite a number of settings.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=28)** And if you're using a different version of Edge, some of these settings will probably be in a slightly different place.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=35)** They do seem to reorganize the settings a lot between one version of Edge to another.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=42)** Surprisingly, there is not a category of settings for security but in the privacy search and services area, there is many security related settings.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=55)** So, I'll click on that.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=57)** The top section talks about tracking prevention.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=60)** I usually go with the strict tracking prevention, which blocks the majority of trackers from all sites.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=68)** And it does this mostly by blocking cookies.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=71)** In the description of it, it talks about some parts of some websites may not work.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=76)** I have not found that to be the case.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=78)** To me, it seems like everything works fine on the sites I visit even with the strict tracking prevention.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=86)** Scrolling down, there is a section for security and there are three major options here.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=94)** Microsoft Defender SmartScreen, which will help protect me from malicious downloads, block potentially unwanted apps, which uses a similar technology to Smart Screen.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=106)** Both of those are receiving information from Microsoft about the security reputation about different sites and apps.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=116)** And then the bottom one, on secure DNS, giving us a nice, easy way to either use our default DNS provider through our ISP or choosing a custom DNS provider.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=131)** So, if you have reason to believe your current ISP cannot provide secure DNS, you could change that here to a third party.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=142)** So typically, all three of these are turned on.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=145)** So, there may not be as many settings as you would expect for security inside of this interface.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=153)** But remember, in previous parts of this course, we talked about areas where you could potentially influence the security of Microsoft Edge.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=162)** Things like Microsoft Defender Application Guard, and actually all of Microsoft Defender, Windows Defender Firewall, and also there's a number of group policy settings that can be used to increase the security of Microsoft Edge web browser.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4), isp (2)
> **Code Keywords:** case. (1), interface (1)
> **UI Navigation:** click on (2)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - microsoft (1)

#### Secure Boot
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=0)** - [Tutor] In this section, we'll go into talk about the boot process in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=5)** In Windows 10, we can think of the boot process as a three-step process.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=11)** The first step are group of steps called secure boot, which then leads to trusted boot, which then leads to early launch antimalware.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=23)** We'll talk about each one of these in detail.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=26)** The first step secure boot, is handled by the Unified Extensible Firmware Interface, which is a standard implementation of your hardware.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=37)** So Windows 10 is not actually involved in this.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=40)** At this point in the boot process, the operating system hasn't started running yet, it's just the firmware on your motherboard that's running.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=49)** UEFI verifies the signature of all the firmware files that are loaded, and that makes it difficult or impossible for these files to be replaced without your authorization, which dramatically reduces the probability of introducing a virus or malware into the boot process, hence the name secure boot.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=71)** The security here is that it's going to great efforts to eliminate viruses and malware while booting.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=79)** It does this by verifying the signature of the files.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=83)** The last thing secure boot process does, it places the bootloader of the OS into memory, and once the bootloader takes over, we move on to the next step, which is called trusted boot.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=97)** The boot process has been handed off from the firmware to the operating system, and now Windows 10 will handle everything going forward.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=105)** First thing trusted boot does is load of kernel and that Windows kernel is verified by a certificate.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=113)** So the same mindset as the verification in the previous slide, we want to verify that the files have not been tampered with, and no one has introduced a virus.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=125)** After the Windows kernel is loaded, trusted boot will start to load windows components.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=131)** And as it's loading windows components, it will take care to load antimalware early in the launch sequence.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=139)** Microsoft calls this mindset early launch antimalware.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=144)** It tries to load an antimalware program before any device driver is loaded, that way if there is a virus or root kit inside of one of the device drivers, the antimalware software can catch it.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=158)** So by loaded antimalware software first, that allows all device drivers to be scanned.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=166)** By default in Windows 10, the antimalware software is Windows defender.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=171)** So again, the process starts with secure boot, which is handled entirely by the firmware.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=176)** Once the OS loader is at beamery, that becomes the trusted boot step handled by Windows.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=183)** During that time, the kernel is loaded, then Windows components are loaded, and before any device driver is loaded, Microsoft stores the early launch antimalware software.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **Code Keywords:** interface (1), this. (1)
> **Env Vars:** uefi (1)
> **Speakers:** - [tutor] (1)

#### Enabling controlled folder access
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about controlled folders in Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=6)** So at the Start Menu I'll type in controlled folders, now click on the option for controlled folder access.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=16)** Controlled folders is Microsoft's ransomware protection, and basically it limits the applications that can access the files in certain folders.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=28)** The hope is that it would block a ransomware attack by preventing the ransomware software from accessing your most important files.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=39)** So I would highly recommend that you have this turned on just by using the slider here.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=45)** Underneath that we have block history, which if I click on that, it'll show me any applications that have been blocked from accessing certain files or folders.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=57)** I have none, so hit back.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=60)** Next is the option on protected folders.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=64)** I'll click on that and it shows the list of folders that are currently protected.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=70)** There's kind of some unusual choices here, and these are automatic, I didn't change any of these.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=76)** These are all the default folders.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=79)** It's protecting things like public pictures, public videos.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=84)** I don't commonly use the C:/users public path, so I'm not real worried about protecting this.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=92)** It does protect my documents.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=94)** Under my username, there is a folder called documents, and protecting that is very important to me.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=100)** So I'm glad to see that one there.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=103)** But the C:/user/public doesn't seem that important to me.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=109)** Very easy to add another folder to be protected.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=112)** We just click on the button for add a protective folder, and then we navigate to the appropriate folder, hit Select Folder and now my folder is there.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=127)** Going back, the next option under protected folders is allow an app through controlled folder access, I'll click on that.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=135)** So Microsoft tries to make a best effort to determine what application should be allowed and what applications should not be allowed to look at your sensitive files.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=147)** If you feel it's being too restrictive and it's blocked an application that you feel shouldn't be blocked, you can just come here and say add an allowed app, and then go to browse all apps.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=160)** You could go through this interface and search for a particular application and tell that application to be allowed.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=167)** So going back, again, the ransomware protection controlled folder access is something I highly recommend that you turn on.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=175)** I also highly recommend that you look at the folders that are being protected, because it may not be exactly the folders that you want to protect.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=185)** So you'll likely want to come in and add one or two protective folders.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (5), public (4), this. (1), interface (1)
> **UI Navigation:** click on (5), navigate to (1), go to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Where to learn more about Windows 10 security
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980&t=0)** - [Martin] Thank you for watching Securing Windows 10.
>
> **[0:03](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980&t=3)** I hope you've enjoyed the course as much as I enjoyed creating it, and I also hope that you continue your learning both about cybersecurity and about Windows 10.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980&t=16)** We have plenty of great courses here in the library.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980&t=19)** Again, some about cybersecurity, some about Windows 10 and plenty of other topics that I hope you will enjoy.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Speakers:** - [martin] (1)


## Instructor

- [[Martin Guidry]]

## Skills Covered

- Windows 10

## Path Context

### In [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
← [[Securing Cloud Resources with Microsoft Defender for Cloud]] | **7 of 11** | [[Configure and Manage OneDrive]] →

### In [[Explore a Career in IT Support]]
← [[Windows 10- Administration]] | **6 of 11** | [[Windows 10- Networking]] →

## Appears In

- [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
- [[Explore a Career in IT Support]]

## Related Courses

_Courses sharing skills:_

- [[Windows 10 for IT Support- Advanced Troubleshooting]] — Windows 10
- [[Windows 10- Manage and Maintain Windows 10]] — Windows 10
- [[Windows 10 Configure And Support Core Services]] — Windows 10
- [[Windows 10 for IT Support- Troubleshooting Basics]] — Windows 10
- [[Windows 10- Administration]] — Windows 10

---

[↑ Back to top](#)