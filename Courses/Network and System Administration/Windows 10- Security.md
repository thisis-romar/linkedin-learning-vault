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
created: 2026-05-03
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
  - [Windows 10 security overview](#windows-10-security-overview)
  - [What you should know before starting](#what-you-should-know-before-starting)
  - [About this update](#about-this-update)
- [**1. Authentication and Accounts**](#1-authentication-and-accounts) (5 videos)
  - [Overview of authentication and accounts](#overview-of-authentication-and-accounts)
  - [Working with local accounts in Windows 10](#working-with-local-accounts-in-windows-10)
  - [Working with Microsoft accounts in Windows 10](#working-with-microsoft-accounts-in-windows-10)
  - [Working with domain accounts in Windows 10](#working-with-domain-accounts-in-windows-10)
  - [Working with Azure accounts in Windows 10](#working-with-azure-accounts-in-windows-10)
- [**2. Authorization**](#2-authorization) (5 videos)
  - [Overview of authorization](#overview-of-authorization)
  - [Understanding inheritance of permissions](#understanding-inheritance-of-permissions)
  - [Assigning permissions](#assigning-permissions)
  - [Creating and using groups](#creating-and-using-groups)
  - [Working with built-in groups](#working-with-built-in-groups)
- [**3. Encryption**](#3-encryption) (4 videos)
  - [Overview of encryption](#overview-of-encryption)
  - [Using BitLocker](#using-bitlocker)
  - [Using Encrypting File System (EFS)](#using-encrypting-file-system-efs)
  - [Encrypting files for the cloud](#encrypting-files-for-the-cloud)
- [**4. Viruses and Malware**](#4-viruses-and-malware) (8 videos)
  - [Virus and malware overview](#virus-and-malware-overview)
  - [Exploring antimalware solutions](#exploring-antimalware-solutions)
  - [Windows Defender: Virus and threat protection](#windows-defender-virus-and-threat-protection)
  - [Windows Defender: Device performance and health](#windows-defender-device-performance-and-health)
  - [Windows Defender: Firewall and network protection](#windows-defender-firewall-and-network-protection)
  - [Windows Defender: App and browser control](#windows-defender-app-and-browser-control)
  - [Windows Defender: Application guard](#windows-defender-application-guard)
  - [Windows Defender: Endpoints](#windows-defender-endpoints)
- [**5. Network Security**](#5-network-security) (2 videos)
  - [Securing network traffic by using IPsec](#securing-network-traffic-by-using-ipsec)
  - [Using VPN in Windows 10](#using-vpn-in-windows-10)
- [**6. Group Policy**](#6-group-policy) (4 videos)
  - [Overview of Group Policy](#overview-of-group-policy)
  - [Applying security settings by using Group Policy](#applying-security-settings-by-using-group-policy)
  - [Using Group Policy to audit actions in Window 10](#using-group-policy-to-audit-actions-in-window-10)
  - [Using Group Policy to harden Windows 10](#using-group-policy-to-harden-windows-10)
- [**7. Remote Desktop**](#7-remote-desktop) (4 videos)
  - [Basic configuration of Remote Desktop](#basic-configuration-of-remote-desktop)
  - [Advanced Remote Desktop configuration using Group Policy](#advanced-remote-desktop-configuration-using-group-policy)
  - [Allowing Remote Desktop through firewall](#allowing-remote-desktop-through-firewall)
  - [Changing listening port for Remote Desktop](#changing-listening-port-for-remote-desktop)
- [**8. Additional Security Considerations**](#8-additional-security-considerations) (4 videos)
  - [Controlling updates for Windows 10](#controlling-updates-for-windows-10)
  - [Browsing the web securely with Edge](#browsing-the-web-securely-with-edge)
  - [Secure Boot](#secure-boot)
  - [Enabling controlled folder access](#enabling-controlled-folder-access)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to learn more about Windows 10 security](#where-to-learn-more-about-windows-10-security)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Windows 10 security overview](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-10-security-overview?u=76281980&t=0)** - [Martin] Hi, I'm Martin Guidry, and welcome to Securing [[Windows 10]]. In this course, we'll cover the skills you need to configure the security of the [[Microsoft]] Windows 10 operating system. I'll start by discussing the different authentication and authorization methods in Windows 10. Then I'll show you how to use Group Policy to tighten the security of Windows 10. We'll see how to protect Windows 10 from viruses and malware. And we'll explore encryption tools like BitLocker and EFS. We'll cover all these features, plus plenty of other tools and techniques. Now, let's get started with Securing Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (6), [[Microsoft]] (1)
> **Env Vars:** efs (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [martin] (1)

#### [What you should know before starting](https://www.linkedin.com/learning/windows-10-security-14135501/what-you-should-know-before-starting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/what-you-should-know-before-starting?u=76281980&t=0)** - [Instructor] Before we get started with this course, let's talk a little bit about what you should know going into this course. Although you don't need to be an expert in [[Windows 10]], you should be familiar with the basic features of Windows 10. If you feel you're not at this level yet, you might want to try one of our other courses that will get you up to speed, particularly Windows 10 Essential Training with Nick Brazzi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3)
> **Speakers:** - [instructor] (1)

#### [About this update](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/about-this-update?u=76281980&t=0)** - [Instructor] [[Microsoft]] pushes out new versions of [[Windows 10]] from time to time. If you'd like to check your version, off the Start menu, you can click on the gear icon, that'll open up Settings. And there, go to system. And if we scroll all the way down to the bottom, the last option is About. If we scroll down in here, we see I am running version 20H2 of Windows 10. And that means it was released in the year 2020, and H2 means in the second half, the latter part of the year 2020. If you're using a different version than I am, you'll probably have access to most of the same features that I have, but the interface will look a little different in some places. If you'd like to update your version of Windows 10, you can go back in the Settings area, go to Update & Security. The top option is [[Windows]] Update. That will allow you to check for updates, and if a new version of Windows 10 is available, you can install it from here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (4), [[Microsoft]] (1), [[Windows]] (1)
> **UI Navigation:** go to (2), click on (1), scroll down (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Authentication and Accounts

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of authentication and accounts](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about authentication and how it relates to security in [[Windows 10]]. Authentication is defined as confirming the truth of a single piece of data. In relation to security, that basically means verifying that you are who you say you are. So if you walk up to a computer and claim that you are the administrator of that computer, the computer is not just going to take your [[Microsoft Word|word]] for it. It's going to require that you prove somehow that you are the administrator. And typically this happens with passwords. In all versions of [[Windows]], authentication is tied to accounts. An account is an entity that should be controlled by a single user. An account is attached to permissions. Or we can say that permissions are attached to accounts. But basically an account has the permission to read certain files, write certain files. It might be denied permission to do certain things. And in order to maintain security, every account needs to be authenticated in some way. Again, typically a password. Windows 10 supports four main types of accounts. We'll start with the local account that exists only on the local computer. And that is perfectly fine if you only have one computer. It could make things like sharing files over the network more difficult. So if you have multiple computers, then local accounts may not be the best option.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authentication-and-accounts?u=76281980&t=95)** The next option is a [[Microsoft]] account. And that is an account that can be used on your local computer, and also used on the Microsoft website. You could then take that Microsoft account and log into a different Windows 10 PC, and possibly get some file sharing that way. Next is a domain account, which is an account on a Microsoft Windows [[Active Directory]] domain. And that's the way to go for a large enterprise if you have hundreds or thousands of computers. And the last one is an [[Microsoft Azure|Azure]] account. Azure is the cloud offering from Microsoft. Azure can do lots of different things, but one of them is it can store accounts and provide authentication for those accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5), [[Windows 10]] (3), [[Microsoft Azure|Azure]] (3), [[Windows]] (2), [[Microsoft Word|Word]] (1)
> **Definitions:** is an  (4), is a  (2), defined as (1), basically means (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Working with local accounts in Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] In [[Windows 10]], administrator accounts and standard accounts are fairly similar to previous versions of [[Windows]]. Administrator accounts can do basically anything on the computer. They can change any setting. They can install whatever they'd like to install. And they can create user accounts and change the passwords of other user accounts. Standard users are more limited. They are able to run programs that have been previously installed by someone else but they cannot install programs themselves. They could not manipulate other people's accounts. And they cannot install new [[Hardware]]. Typically, if you're doing non-administrative tasks, like just checking your email or working with a spreadsheet, in that case, it's typically better to use a standard user account. And only use an administrator account when you actually need to perform an administrative task, like installing new software or manipulating accounts. Now I'd like to demonstrate to you how to add a local account to a Windows 10 PC. So off the Start menu, I'll type in users and I'll go to the option for add, edit or remove other users, which will take me to an interface that shows the current users and also allows me to add new ones. Under the other users heading, I'll click on the plus sign next to add someone else to this PC.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-local-accounts-in-windows-10?u=76281980&t=94)** And this will start a wizard. The first screen of the wizard wants to know the information about the user's [[Microsoft]] account. But I don't want to use a Microsoft account for this particular demonstration. So I'm going to click on the link that says I don't have this person's sign in information. That will take me to a page where it wants me to create a Microsoft account, which again is not what I'm trying to accomplish in this demonstration. So I'll go the link on the bottom that says add a user without a Microsoft account. And now I get to the interface to create a local account. I'm going to call this one TestUser. I will enter a password. Then I will enter the same password again and then it's going to have me answer some security questions. And I'll just go through these real quick. Once I'm done with that, I will click Next at the bottom and that's all there is to it. I now have a TestUser as a local account. If I click on it, I have the option to change the account type and the only choices are Standard User or Administrator. I'm going to leave it as a Standard User for now. And I would also have the option to remove the account, which I don't want to do right now but it is the same interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Windows 10]] (2), [[Windows]] (1), [[Hardware]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** install (4)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Working with Microsoft accounts in Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-microsoft-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] In this section, I'd like to demonstrate adding an existing [[Microsoft]] account to a [[Windows 10]] PC. So, off the start menu, I'll type in users. And again, I'll go to add, edit, or remove other users. And again, I'll click on the plus sign next to, add someone else to this PC. And the first screen asks me, "How will this person sign in?" So, I will provide the email address, of the account I use for my Microsoft account, and then I'll click next. And I am now good to go. So, I'll click finish, and we'll see that that account has come up now. I can click on it. It has the exact same choices that it did with a local account, where I'm able to change the account type, and or remove the account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Windows 10]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Speakers:** - [instructor] (1)

#### [Working with domain accounts in Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-domain-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] Now I'd like to demonstrate adding a domain account to a [[Windows 10]] PC. Again, off the Start menu I'll type in users and go to add, edit or remove other users. You notice there's no option that clearly says domain account. Instead it says "Add a work or school user". And you'll see this a few different places in the Windows 10 interface, that they say work or school user. But what they mean by that in more technical, more specific terms is that account that is stored at a domain, an [[Active Directory]] domain. So I'll click the plus sign next to that. And it asks me for fairly little information and wants to know the name of the user account. And I happen to know one that exists on this domain. And it's asking me if I would like them to be a standard user or an administrator for this particular one. I will go with administrator and click add and very quickly it pops up there. And we now see it figured out the domain automatically and put in the username, at that account and administrator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Active Directory]] (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Working with Azure accounts in Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-azure-accounts-in-windows-10?u=76281980&t=0)** - [Instructor] Now let's talk about using [[Microsoft Azure|Azure]] accounts in [[Windows 10]]. Windows 10 supports adding accounts from an [[Microsoft Entra ID|Azure Active Directory]]. Azure Active Directory is an alternative to having on-site [[Active Directory]]. So rather than having to buy a new piece of [[Hardware]] to use as a domain controller and buy a license for that hardware, you could instead access this service through the cloud, which in some cases, it might be less expensive. Azure Active Directory is priced per user. So the less users you have, the less expensive it is, and if you have a large number of users, the price goes up. Azure Active Directory is included with most versions of [[Microsoft Office|Office]] 365. So if you're using Office 365, you could also utilize Azure Active Directory for the same price. This does require some expertise to manage. It is a similar set of skills to managing an onsite active directory, but there are some differences and does require some expertise and experience to manage Azure Active Directory properly. If you'd like to learn more about Azure Active Directory, it's available in several different versions, and you can get the details of what features are included in what version, here at this address.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure active directory]] (7), [[Windows 10]] (2), [[Active Directory]] (2), [[Hardware]] (2), [[Microsoft Office|Office]] (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Authorization

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of authorization](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=0)** - [Instructor] Now let's talk about authorization in [[Windows 10]]. Authorization is the process of specifying access rights to resources. In other words, setting permissions on files and folders. This will determine who has the right to read a file, who has the right to change a file, and who has the right to delete a file. Authorization is equally important as authentication. A lot of administrators focus the majority of their time on authentication, making sure everyone has a strong password and a password that is changed often. And that is important, but authorization is also important, making sure that no one can read a file that they shouldn't be able to read and making sure that no one can delete a file that they shouldn't be deleting. Basic file permissions in Windows 10 include read, read and execute, write, modify, and full control. Now we'll spend a few minutes talking about each one of these and what it means. When we grant the read permission on a particular file, that gives the user the ability to open the file and view the contents. It does not give them the ability to execute the file. In order to execute the file, we would need to give them the permission marked as read and execute, which also gives them the ability to open the file and view the contents,
>
> **[1:32](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-authorization?u=76281980&t=92)** but it also adds the extra permission of execute. The next permission is write, which as the name implies, gives the user the ability to change the file. Open the file, make changes to it, either add content or remove content, but the right permission does not allow a user to completely delete a file. In order to completely delete a file, a user needs a modify permissions. When a user is granted the modify permission it gives them the same level of access as if they had read permission, read and execute and write permission, and then in addition to that, it also grants them the ability to delete the file. The last permission, the highest level of permission is called full control, and that gives the user a combination of all of the previous permissions. So the user has the ability that they would have gained from read, read an execute, write, and modify, but giving them full control also gives them the ability to change the permissions for someone other than themselves. So in other words, they can change the permissions for other users. This is a level of access that most users do not need. Most users should not be changing the permission of other users. So therefore full control should typically be reserved only for administrators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2)
> **Definitions:** in other words (2), is called (1), is a  (1)
> **UI Navigation:** open the (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Understanding inheritance of permissions](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=0)** - [Instructor] Now let's talk about permission inheritance. By default, files and folders assume the permission of their parents. This is called inheritance. It is on by default and almost all versions of [[Windows]], including [[Windows 10]], but it can be turned off. When we turn it off, we call that disabling inheritance. Typically we want inheritance to be on so disabling it would be a little unusual. One of the situations where you might want to disable inheritance is when one document in a folder needs different permissions than all of the other documents in the folder. So you could set the permissions properly on the folder and by default, all of the documents would inherit from the parent, and then just go to the one file that needs to be changed, disable inheritance on that one file and change the permissions on that file. This brings up the question of what happens to the permissions once inheritance has been disabled? Will the permissions remain or will they be removed? And the answer is you have a choice. When you disable inheritance, you're given two choices. The first choice is to copy inherited permissions, and this means that the permissions that have previously inherited or copied to the file so effectively the file has the same permissions, but now we can edit those permissions without having to edit the parent.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=94)** The other option is to erase the permissions so we can erase all permissions that were previously inherited. If you do this, you'll want to give someone probably an administrator full control of the file. That way someone will still be able to administer the permissions on that file. So now let's look at a demonstration of this. I'm going to open up the C drive of my computer. I'll create a new folder and I'll call that folder SecuringWindows 10. And inside of that folder, I'll create a file, just a new text file. And I'm going to put a little bit of text in that file. So now we have a file we can work with for this demonstration. First thing I'm going to do is right click on the file and go to the menu option at the bottom called Properties. In there I'm interested in the second tab called Security, and we'll see the permissions currently assigned to this file. Now I never actually specified any permissions. These are just the default permissions that are given to any new folder created on my system. The ones on your system might be a little different, but certainly there will be some permissions created by default. Near the bottom if we go to the option for advanced, we can see what permissions are applied
>
> **[3:12](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=192)** and all the way to the right, we see the column inherited from. So these permissions were all inherited from the C drive. At the very bottom, I have the option to Disable inheritance. So go ahead and do that. And like I mentioned, it gives me two options, one of them convert inherited permissions, the other remove inherited permissions. So I'm going to go ahead and click on Remove inherited permissions. And now where the permissions were listed, they've all been deleted. Instead, it says no groups or users have permission to access this object. That could potentially be a problem. So I would like to add one user. I'll click on the button called Add, and it's bringing me to an interface where it would like me to select the principal. I'll click on that, brings me to another interface where I can choose a User, Group or built in security principle. From the location, and here the location has defaulted to my domain, and that is what you want sometimes, but for this particular demo, I'd like to use a local account. So I'll click on Locations and select the name of my computer, hit OK and that changes the location to the name of my computer. So now I'll be looking for a local account, not a domain account. I had previously created a user called TestUser,
>
> **[4:48](https://www.linkedin.com/learning/windows-10-security-14135501/understanding-inheritance-of-permissions?u=76281980&t=288)** so hit OK. And now we are applying permissions to TestUser. These will be allow permissions, and I'm going to go ahead and click on full control. When I do that, all the check boxes below it are also selected. So at the bottom I can hit OK. And now I have on this file one user who has full control and no permissions being inherited. I'll hit Apply and hit OK, and hit OK again in the new text document properties, and that will finalize the permissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Windows 10]] (1)
> **UI Navigation:** click on (6), go to (3), select the (2)
> **Definitions:** is called (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Assigning permissions](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=0)** - [Instructor] Now let's take a look at some examples of updating permissions on a file. Off the C drive, I'm going to open the directory securing [[Windows 10]]. And that brings me back to the file I had used in a previous demonstration. I'll right click on the name of that text file, go to properties. In the properties Window, the second tab is security. And right now we see test user has full control. I'd also like to add another user so that when I start removing permissions from test user, I don't lose access to this file completely. So I'm going to hit Advanced. I'm going to hit Add, select a principal. I'm going to add the account I am currently logged in as. I'm going to give that account full control. And now we see test user and Martin both have full control. So I hit Apply and Okay. And back in the dialogue for new text document properties. I'm going to select the test user account, hit Edit. Select the test user account again, and clear off some of these check boxes. I'm going to leave the test user with just read permission. Hit Apply, hit Okay. Hit Okay again. So now like to test this and make sure
>
> **[1:33](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=93)** the user actually can read the file but not write the file. I could log out and log back in as the test user, but there's actually an easier way to do it. And for this I'll need a command prompt. Windows 10 allows me to run a program as a different user. So I'm going to type in, run as, space slash user colon test user space.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=126)** And then the name of the program I want, which in this cases is notepad.exe. When I press Enter, it will prompt me for the password for test user. I'll type that in and hit Enter. And it pulls up a copy of notepad, but this is notepad running as a different user, running as test user. In notepad off the file menu I'll go to open. I will look for the text document I was working with earlier. I'll hit Open, and we see the text. I'll try to change that or add some text. And it should prevent me from saving it because I do not have right permission. So off the file menu, I'll go to save. It's asking me for a file name. I'm going to choose the file name as before, hit Save. It's asking me if I want to replace the document. And I get an error, you do not have permission to open this file. That is somewhat accurate. It's phrased a little peculiar 'cause I do have permission to open the file I just don't have permission to write the file, which is what I was actually trying to do. So the fact that it blocked me makes a lot of sense. The fact that this error message says permission to open the file, throws me a little bit. So I hit Okay. Let me close this. And I won't save changes.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-security-14135501/assigning-permissions?u=76281980&t=220)** I'll go back to the file viewed in the folder and I will change the permissions again. So right click properties, security tab, edit, select test user, and now I'm going to remove the read permission. Hit Apply. Okay. Okay. I'll go back to the command prompt and again run notepad as that user. And I will try to open the file again. I should get a permission denied error. And it says you don't have permission to open the file, which is exactly what I was expecting. So that was a couple of demos on working with file permissions. Again, remember when you're experimenting with permissions, if you'd like to, you can log out and log back in again as the new user, or you could use the run as command to just run one particular program as that user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2)
> **UI Navigation:** open the (5), go to (3), select the (2), click on (1)
> **Cross-References:** go back to (2)
> **Tools:** command prompt (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Creating and using groups](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=0)** - [Instructor] In this section, I'm going to do a demonstration regarding setting permissions for groups. So in order to do that, I'll need to create a test group. So off the start menu I'll type in group, and I'm going to select the option for edit local users and groups. That brings up an interface where on the left-hand side, I can select groups that in the middle pane I'll right click and go to the top option for new group. It's asking me to give the group a name. I'll just call it test group. The description is optional, but I would like to add one member. So I'll click add for the location. I would like it to be my local computer and the name of the user will be test user I'll hit, okay. And we'll see, it's a group called test group with one member, the account test user. I'll click create. It does not tell me success or failure, but if I hit close, we can look and see the test group was created. So I can close this and I'll go to the folder where my test document is stored. Right click on that and go to properties. I'll go to the security tab and edit and then add. So first I want to change the location to my local computer.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=97)** And then I will add test group. And I also want to add test user for the test group. I want to give permission to read the file and for the test user, I want to give permission to write the file. So again, test group, the only permission applied is read and test user the only permission applied is write. And when the test user tries to access this file, he should have both read and write permission. One he was assigned directly and one he is getting by being a member of the group. So hit apply. Okay. Okay again. Then I'll open up the command prompt and I'll run the command runas/user:Testuser, and the name of the program I want to run. I'll be prompted for the password for test user. And once I do that, it opens up notepad running as test user, and he should be able to open this file, make some changes to it and then save those changes. And all of that worked perfectly fine, no permission problems. So again, the user is getting some of the permissions that were
>
> **[3:11](https://www.linkedin.com/learning/windows-10-security-14135501/creating-and-using-groups?u=76281980&t=191)** assigned to him directly, but he's also getting permissions because he is a member of a group. And that group has permissions on this file.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), select the (1), click on (1)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Working with built-in groups](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=0)** - [Narrator] Now let's talk about some of the built in groups in [[Windows 10]]. Off the start menu I'll type in groups, and I'll go to edit local users and groups. Then in the panel on the left, I'll click groups and the middle panel we see a list of groups currently on my Windows 10 PC. Near the bottom, there's one called Test Group that I created, the [[Representational State Transfer (REST)|rest]] of these I did not create. Most of them were created by the operating system when it was first installed. These are called the built in groups in [[Windows]]. You notice that if I right click on one of these and go to delete, I will be given an error message saying I cannot delete it. If I double click on one of them, I will be given an interface to add or remove users from this group. So I can edit these, I cannot delete them. I'll hit cancel here. Notice in this list of groups, we do not see a group called everyone and we do not see a group called authenticated users. And that is interesting because those groups do exist. So back on my favorite demo file, I'll right click, go to properties, the security tab. So I'll click on edit, and I'll click on add, I've changed the location to my Windows 10 PC
>
> **[1:39](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=99)** and I'll type in everyone, hit okay and we'll see that group came up and we could use it to edit permissions. I'll click add again and I'll type in authenticated users, hit okay and again, it came up and I could use this to add permissions. But again, we did not see the everyone group, nor the authenticated users group in our list of groups, so what's going on here? Windows contains what's known as implicit groups, or sometimes called special identities. These are groups that cannot be deleted or edited, so I cannot change the membership of an implicit group, the membership is controlled entirely by the computer, I can use the implicit groups to set permissions. Three of the most common implicit groups are authenticated users, everyone and interactive. Talk a little bit about each one of these. Authenticated users, as the name implies, is any user who is authenticated and remember, authentication is typically done with a password. So any user that has to enter a password when they log into the machine, that is an authenticated user. The everyone implicit group contains every user, whether they are authenticated or not.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=193)** Typically on a Windows 10 machine, the only account that is not authenticated is the guest account and typically the guest account is disabled for security reasons. And the last one is interactive, and interactive contains any user who can log on locally, as opposed to accessing the machine from the network. So if we apply permissions to the interactive group, that would apply to anyone who actually goes up to our machine and logs in, it would not apply to people who are accessing our machine over the network. So those are the three most common implicit groups and again, they can be used to set permissions. I do have one tip on working with implicit groups and that is, don't be lazy. There are times when you want to give access to a large number of people, but maybe not everyone. What you should do is create a new custom group and take the time to add the appropriate people to that group. Sometimes administrators are looking for a short cut and they'll just use the everyone group, or the authenticated users group, which actually gives permission to more people than we intended to. So don't be lazy, when you need a custom group, go ahead and create a custom group, take the time to add the right users and only use the implicit groups when you really want to assign permissions
>
> **[4:49](https://www.linkedin.com/learning/windows-10-security-14135501/working-with-built-in-groups?u=76281980&t=289)** to all authenticated users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (4), [[Windows]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (4), go to (3)
> **Definitions:** known as (1), is an  (1)
> **Speakers:** - [narrator] (1)


### 3. Encryption

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of encryption](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about encryption in [[Windows 10]]. We'll define encryption as encoding data such that it is unusable until decrypted. So if you look at encrypted data, it just looks like gibberish. And decrypting is the process of turning that information back into readable data. The data should be exactly as it was before the encryption. There's two broad categories of places we'll need to encrypt data. One is data in motion, and that is data that is traveling through a network. The other is data at [[Representational State Transfer (REST)|rest]], and that is when data is stationary in a file on a drive. Data in motion in Windows 10 can be encrypted using IPsec, which is a combination of an abbreviation and an acronym. It means internet protocol security. And in a [[Windows]] network, it is the preferred way to encrypt internal network traffic. As far as external network traffic, traffic that goes out to the internet. We will typically use SSL or TLS, which are very similar technologies. And they're commonly used in things like the World Wide Web. So HTTPS, the S stands for SSL. Although actually HTTPS sometimes uses SSL,
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-encryption?u=76281980&t=95)** sometimes uses TLS. For encrypting data at rest, data that's on a hard drive, We have the option to use a BitLocker in Windows 10. And that will encrypt the entire disk. Therefore it is often called whole disk encryption. If you'd prefer to not encrypt your whole disk and instead encrypt individual files and folders, we can do that with EFS. The encrypting file system, which works on individual files and folders. One of the goals we hope for with encryption is that it will be transparent. And transparent means the user does not notice the encryption and decryption. EFS does a good job of handling this. When a user clicks on a file, if they have permission to that file, it will be decrypted. And it will be displayed to them just like it would if the file was not encrypted. If the particular user should not be accessing the file, then they'll get some sort of error message. BitLocker doesn't a hundred percent achieve transparency because with a BitLocker drive, we first need to unlock it before we can use it. But once it's unlocked, it behaves like a normal drive. A user can click on a file, the file will open. And the user will never notice the encryption and decryption process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Windows]] (1)
> **Env Vars:** ssl (3), tls (2), https (2), efs (2)
> **Definitions:** is a  (1), stands for (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Using BitLocker](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about using BitLocker to encrypt a hard drive in [[Windows 10]]. So off the start menu I'll type in BitLocker and I'll select the option for Manage BitLocker, we'll see that I have two drives. A C and an E next to both drives, I have the option to turn on BitLocker, but I know that one of my drives is compatible and one is not. So if I click on turn on BitLocker next to the C drive, I receive an error about the trusted platform module or TPM, which is an option not available on that drive. So I'll click cancel and I'll click turn on BitLocker next to the E drive. And my E drive is compatible with TPM. So I'll be given the interface to start setting up BitLocker. The first question is do I want to use a password or a smart card? I'd like to use a password and then I'll go ahead and type in a complex password. And actually I'll have to type it in twice and then click on next. Then it's asking me to backup the recovery key. Well, not exactly asking me, it's forcing me to backup the recovery key because you'll notice the next button is grayed out. I'm going to go ahead and save my recovery key to a file.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=97)** I'll put it in the folder I created for this course, and now the next button is no longer grayed out. So I'll click next then it's asking me if I would like to encrypt only the used space or encrypt the entire drive, I would like to encrypt the entire drive. So I'll select the radio button next to that and hit next. Then it's asking me which encryption mode I would like to use Windows 10 after version 15.11 uses an encryption mode called, XTS-AES. And it is a more secure, more complex encryption and therefore is preferred if it's available to you. So I'll go ahead and leave the radio button for new encryption mode checked, and click next. And then the last screen just asked me if I am sure about the options that I set up in the previous and I am so I'll click start encrypting. For me, this is going pretty quickly because my E drive is very small. If you apply BitLocker encryption to a large drive, this could take several minutes or even hours. At the end, it says encryption of E is complete. So I'll hit close. Now, want to pull up File Explorer and just look at This PC. And we'll notice the E drive now has a lock icon next to it and that icon is currently unlocked for me.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-security-14135501/using-bitlocker?u=76281980&t=195)** So I could just double click on it and use it like a normal drive. I'll go back now and I'd like to demo to you, the drive being locked. Anytime I reboot the computer, it's going to lock this drive and require the password that I use during set up in order to unlock the drive. But rather than reboot for this demo, I'll just go to the command line and force it to be locked. So I'll open up a command prompt with administrative privileges and then I'll type in manage-bde space The letter of the drive I'm interested in which for me is E and then dash lock. And it says Volume E is now locked. I'll go back to [[Windows]] Explorer and we see the padlock icon does now appear to be locked. And this is what you'll see when you first boot up your computer in a drive that is using the BitLocker technology will be locked. If I double click on it, it won't let me into it. Instead, it prompts me for a password. So I'll type in the password I used during setup, click on unlock. So now the lock icon opens. I can double-click on the drive and use the drive. Just like I would any other drive. The drive will remain unlocked until I reboot the computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Windows]] (1)
> **UI Navigation:** click on (5), select the (1), go to (1), double-click (1)
> **Env Vars:** tpm (2), xts (1), aes (1)
> **Prerequisites:** set up (2), setup (1)
> **Tools:** command line (1), command prompt (1)
> **Definitions:** is an  (1), is a  (1)
> **Versions:** version 15 (1)
> **Cross-References:** go back to (1)

#### [Using Encrypting File System (EFS)](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=0)** - [Instructor] In this section, we're going to look at encrypting individual files and folders in [[Windows 10]]. So I'm going to open up File Explorer. And navigate to one of the text files I've been using for demonstration purposes. Right-click on it. Go to Properties. In the Properties pane, I'll click on Advanced. And near the bottom, we have the option to compress or encrypt. Notice that just like in previous versions of [[Windows]], we can only do one or the other. We can either compress or encrypt, but not both. So I'll click on Encrypt. Hit OK. Hit apply. And OK. And now my file is encrypted. There's a little lock icon next to the file that may be difficult to see. So I'll change the view to large icons, and there we see clearly there is a lock icon next to that file. I can still double-click on it and see the full contents of the file. So this is transparent encryption where the end user doesn't have to do anything special in order to access the file. If we right-click again and go to Properties again, and Advanced, we'll see now that there's a button marked Details next to the encrypt contents. So I'll click on Details.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=94)** And it shows who has access to the file, and shows the thumb print of the certificate that's being used. So although this is going on in the background and you don't really see it, the operating system is using certificates to encrypt this file. And therefore, whoever has access to this certificate also has access to decrypt the file. So right now, I am the only user that has access to the certificate. So when I try to access the file, it works perfectly fine. If a different user came behind me who didn't have access to this certificate, then when they clicked on the file, they would receive an error message. Earlier, I mentioned sharing your certificates with another user. Let me do a quick demo on how to do that in Windows 10. Off the Start menu, I'll type in certificate. And I'm looking for the option for Manage User Certificates. In the control panel, that opens up on the left-hand tree view. I'll open up Personal, and I'll click on Certificates. And there we see a number of certificates issued to me. And there's a column called Intended Purpose. For me, I have one certificate with the intended purpose of encrypting file system. So that is the certificate that I'm interested in. I will right-click on it.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=186)** Go to All Task and then export. It'll pull up a wizard that will walk me through exporting this certificate. On the first page, I'll hit next. It's asking whether or not I would like to export the private key. And for someone to decrypt my files, I will need to include the private keys. So I'll include yes on that. And then hit next. On the next page, it's asking me what format I would like to export to. And there's only one format that supports including the private key. So because I checked include the private key on the previous pane, and here, I'm required to do the personal information exchange format. So I'll click next. Then it's asking who I would like to share this with. We could do this with a password, and then just give that password to anyone, but I'd prefer to keep it to users on my local computer. So I'm going to hit the check box next to group or usernames. I'm going to remove the one that was added automatically. And then hit add to add in a new user. And I'll use Test User. So now once exported, the file can only be opened by Test User. I'll hit next. So in the last page of the wizard, it's asking me where I would like to store this file.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=282)** So I'll just browse to a folder on my C drive, and give the file a name, and hit next. It's asking me to verify all of the information I entered previously. So I'll hit finish. Fairly quickly, it said the export was successful. So I'll hit OK. Close this, and we can go look for that file I created.
>
> **[5:17](https://www.linkedin.com/learning/windows-10-security-14135501/using-encrypting-file-system-efs?u=76281980&t=317)** And there's the file I just created. It is a relatively small file. So you would have some different options on how to transfer this. You could send it in an email as an attachment. You could copy it to a thumb drive and give it to someone that way. However you do it, you just need to transfer this file to someone. When they receive the file, they will double-click on it. If you set a password, they will be prompted for the password. If not, they will be authenticated by their user account, and it will import the certificate. It will probably give them some choices on where to import. And they will need to import it into their personal certificates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Windows]] (1)
> **UI Navigation:** click on (4), right-click (3), go to (3), double-click (2), navigate to (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Encrypting files for the cloud](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about encrypting files for the cloud. So here on my [[Windows 10]] PC and File Explorer, I've opened up a folder that is inside of my [[Microsoft OneDrive|OneDrive]] account. So if I create some files here, they will automatically be uploaded to the cloud. I'll go ahead and do that and create a new [[Microsoft Word]] document. I'll just call it TestDoc. And I'll open that up and add a little text to it. I also want to right click on this and go to Properties, go to Advanced and encrypt the contents. Hit OK, hit Apply, I want to encrypt the file only, okay, okay. And if I switch to the tile view, we see it now has the lock icon and is encrypted using EFS. Now I'm going to switch over to a web browser that has OneDrive opened up and look at this folder, look at this document, and we see that it is there and that I can open it, but this is not the encrypted version, and that is because EFS is a transparent encryption. So when I created the file here,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=94)** OneDrive was able to read the unencrypted version and upload that to the cloud, which is not exactly what I wanted. I wanted the file to be encrypted in the cloud. One way we could accomplish that is to use the encryption features inside of Microsoft Word. So off the File menu, I'll go to Info, I'll click on Protect Document. One of the options under that is encrypt with password and I'll type in a password, and then I'll type it in again. We see now that this document is password protected and encrypted. So I want to save a copy and I'll call it EncryptedTestDoc. I'll save that, go back to the web application. And I now see EncryptedTestDoc, when I click on it, it's saying, sorry, we can't open this document because it's password protected, which is good, that's what I wanted. So I'll click open in desktop app. Here in the desktop app, I'm being prompted for the password. If I type that in, we'll see my document open. So, this is success. This is, we have encrypted the document locally and in the cloud,
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=188)** but I had to do that using the built-in features of Microsoft Word. Other programs will have that like [[Microsoft Excel]], Adobe Acrobat, but not all programs are going to allow us to encrypt their documents. There is a another option available to us. So back here in OneDrive, I'm going to go back one level and see that in addition to the folder that I was working with, we also have an area called Personal Vault, and Personal Vault is designed to solve the problem that I'm discussing here, where files will be both encrypted in the cloud and on your device. When I click on that, it'll take me through a little setup wizard because I haven't used Personal Vault on this account before. So in the first step of the wizard, I'll hit next. It asks me to identify myself. I'll verify, it's going to to ask me to log in. And it has sent a code to my email account. So I'll retrieve that code and type it in. And now I have my Personal Vault. Here I have it open in the web interface. And again, I could add files to it that would be encrypted on the web. I can also look at it through [[Windows]] Explorer. And the first thing it's going to ask me to do
>
> **[4:44](https://www.linkedin.com/learning/windows-10-security-14135501/encrypting-files-for-the-cloud?u=76281980&t=284)** is to open the Personal Vault. This is more secure than just encryption, because it also has the two-step authentication process. And again, it's prompting me for my password. And again, it's going to email me a code. And now, Personal Vault is open. So this is a way to store encrypted files that will be encrypted on both my PC and in the cloud. This exact feature, Personal Vault, is only available through OneDrive, but most of the other providers of [[Cloud Storage]], like Dropbox and [[Google Drive]], will have a similar feature where there is an encrypted area that you can use to store sensitive files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft OneDrive|Onedrive]] (5), [[Microsoft Word]] (3), [[Windows 10]] (1), [[Microsoft Excel]] (1), [[Windows]] (1)
> **UI Navigation:** click on (4), go to (3), switch to (1), open the (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** efs (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Viruses and Malware

[↑ Back to Table of Contents](#table-of-contents)

#### [Virus and malware overview](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=0)** - [Tutor] Now let's talk about viruses and malware. The [[Microsoft Word|word]] malware comes from malicious software. In general, it is software designed to damage, disturb or disrupt normal operations. The motivation behind malware is sometimes equivalent to a prank or vandalism, or sometimes someone is actually trying to commit a crime. There are a few different types of malware. Four main types are viruses, worms, Trojans, and bots. A few pieces of malware could fall into more than one of these categories, but most things are pretty well contained by one of these definitions. So we're going to talk about each of these four individuals. First of all is a virus, a virus malware that is attached to another program. That program is called the host, so a virus always has to attach itself to something else. Typically a virus requires human interaction to spread. So when we share the host file, maybe by emailing it to someone or putting it on a jump drive, we not only share the file, but we also share the virus. The next type is a worm. A worm is similar to a virus, but it is differentiated by the fact that it is a standalone program that does not require a host. Also it typically does not require human interaction
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=95)** to spread, so it can automatically spread itself often by exploiting some weakness in your operating system or other software. Next is a Trojan, Trojans are named after the wooden horse that would used by Greece to sneak into Troy. And like their namesake Trojans are things that appear to be one thing, but actually are another. They are malicious programs that look legitimate. Sometimes they even go so far as to actually provide some legitimate functionality, but then also do malicious stuff in the background. So for example, you might download a program off the internet that prints out coupons for you, and it does in fact print coupons, but it also does something malicious in the background that is Trojan. Trojans are typically spread by humans, and they typically trick humans into performing actions that will help them spread. The last category is a bot. A bot is basically a shortening of the word robot, and a button performs an action that is usually done by humans, such as sending an email, opening a chat session, browsing the web. Sometimes the bot in and of itself is harmless, but when combined with a virus, it can be very dangerous. Rather than the virus waiting on you to send an email and attach to the virus, instead the bot will automatically send the email and automatically attach to the virus.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-security-14135501/virus-and-malware-overview?u=76281980&t=190)** So when combined with something else, bots can be very dangerous.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (5), is called (1)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Speakers:** - [tutor] (1)

#### [Exploring antimalware solutions](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about antivirus software. Antivirus software is software that is designed to detect and remove viruses from your computer. Many of the [[Microsoft Products|products]] that are called antivirus are actually anti-malware because they will remove types of malware other than just viruses. They're usually pretty good at catching worms also, and some of them will do a decent job with Trojans and bots. Most antivirus solutions will require definition files. Those definition files are lists of all known malware programs, so when your antivirus software runs, it compares a program on your computer against a list of known malware, and if it finds a match, it knows the program to be malicious. These definition files are provided by the vendors, and they are updated often, sometimes daily, sometimes updated more than once a day, and it's very important for you to download the updated definition files and use them. Out-of-date malware protection is a big problem. There's a saying that out-of-date malware protection is only marginally better than having no malware protection on your computer. If your computer is going to be infected, it's most likely going to be infected with malware that was just developed recently. All of the older viruses, the viruses that have been out for years, typically don't spread very much
>
> **[1:32](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=92)** because everyone else's virus protection software has stopped them. If you're going to get hit with a virus, it's most likely something that was developed recently, and you will only be protected if you, in fact, have an updated definition file. When choosing a malware solution, there are several out there from many different vendors. There's some things you want to look for. One is the mechanics of definition update. Most solutions will have something to automatically update. They will download new definition files from the vendor periodically. You want to choose a solution that gives you some control over how often definition files are updated, and although you want it to happen automatically most of the time, sometimes you might want to update them manually. So you'll need to make sure the software supports an option for manual updates. Most anti-malware products have some mechanism for you to exclude certain files from being scanned, and that could prevent false positives. You also want to look into what kind of reports are generated from different vendors. If your software is finding viruses on the network, you'll want to be alerted to that or have some sort of report, and if you administer a large number of [[Windows 10]] computers, you probably don't want to have to go to each computer and run the report separately. Some vendors do provide a centralized location where you can run reports for multiple PCs
>
> **[3:05](https://www.linkedin.com/learning/windows-10-security-14135501/exploring-antimalware-solutions?u=76281980&t=185)** from one place. And lastly, you want to look into resource usage. Your antivirus solution is always going to use some amount of processor and memory. Hopefully, that is a low amount, but you may want to do some measurement to see exactly how much CPU and memory your antivirus solution is using, and obviously, the preference would be for it to use less resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Windows 10]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Windows Defender: Virus and threat protection](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=0)** - [Narrator] In this section we're going to talk about virus and threat protection. So off the start menu I'll type in virus and I'll click on the option for virus and threat protection. In some versions of [[Windows 10]], this will be called [[Windows]] [[Microsoft Defender|Defender]], virus and threat protection, other times the name virus and threat protection stands alone. Also, if you're running a different version of Windows 10 than I am, you will likely see these options in a slightly different order, the core functionality is the same, but the interface may look a little different. So the top part of this interface is talking about current threats and that there are no current threats, which is good news. I have a button for quick scan and under that I have scan options, which is where I'm going to click. I have the option to do four different types of scans. The first one is a quick scan, which will check folders where threats are commonly found, so folders like your internet downloads, that's a more common place to have a virus. The next option is full scan, which checks everything on the hard disk, that'll take a much longer time. Then we have custom scan in which we can choose the files and locations we want to check. And the last option is a Windows Defender offline scan. So there are some types of viruses that are difficult to find while the computer is running.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=97)** So this offline scan will reboot the computer at least once, sometimes more than once and during the reboot, it can check for viruses that are hard to find while the computer's running. I'll go back to virus and threat protection, and I see there's a section called virus and threat protection settings, I'll click on manage settings. And here we have several options that on most Windows 10 PCs they're turned on by default, real time protection allows this tool to run on any file that's currently being opened, which provides the highest level of protection, but can impact performance a little bit. The next two options on cloud delivery protection and automatic sample submission are both similar, they deal with [[Microsoft]] maintaining a database of what files it believes are safe or unsafe, and you can check files on your computer against Microsoft's database of what is safe. And the bottom option is for tamper protection, which prevents others from tampering with important security features, so it reduces the number of users that would have access to this control panel that we're looking at. So four options again, typically we want all four to be turned on. I'll go back again and we'll look at
>
> **[3:10](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=190)** virus and threat protection updates. There's only one option there, I can check for updates. If I click on that, it tells me what version of the definition files I'm running, when they were created, and when they were last updated. I can click on check for updates. So this is a manual updating of my definition files, but in Windows 10, I also get the automatic updating of my definition files. Going back again to the virus and threat protection section and scrolling all the way down to the bottom, we have ransomware protection, which is fairly new, wasn't in the original release of Windows 10, has been released recently, if I click on manage ransomware protection, we see, first of all, there's only really one choice, turn it off or turn it on, and obviously having it on is the more secure option. It goes on to explain that if we turn this on, it will limit the number of processes that can access our files and folders, which would hopefully stop a ransomware attack. It also says it's going to upload my most important documents to [[Microsoft OneDrive|OneDrive]], and that way, if I was hit with a ransomware attack, I would still be able to recover my files from the OneDrive cloud. So again, these options and the virus and threat protection
>
> **[4:46](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-virus-and-threat-protection?u=76281980&t=286)** have changed slightly with different versions of Windows 10. So you may see slightly different options on your screen, but there's always the option to scan for threats and always the option to update your definition files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (6), [[Windows]] (2), [[Microsoft Defender|Defender]] (2), [[Microsoft]] (2), [[Microsoft OneDrive|Onedrive]] (2)
> **UI Navigation:** click on (5)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [Windows Defender: Device performance and health](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=0)** - [Instructor] Now let's talk about device performance and health. So off the start menu, I'm going to type in [[Windows]] Security and select the option for Windows Security. And here we see a tile for device performance and health. I'll click on that. And I get a quick health report about my computer. The first one is the Windows Time service is having no issues. Having the time on your computer set accurately is important for your security logs to be accurate. The next two, storage capacity and battery life. Both of these feel like issues that are not really security issues, in my opinion, even though this is in a security control panel, I feel like your hard drive running out of free space is not really a security issue. However, it is a good thing to know. So having this information on the screen is valuable, just not necessarily a true security concern. At the bottom is apps and software, and this will tell us about any potential software we have on our computer that is suspicious and could possibly be a Trojan or a bot. It will also tell us about apps and software that are using more resources than they probably should. So an application that's using almost 100% of the available memory will be listed here.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-device-performance-and-health?u=76281980&t=97)** Below that we have the option for fresh start. The idea of fresh start is that it will take us back to a state where Windows is configured very similarly to the way it was configured when we first installed Windows. It says it will not delete our personal files. It may however, delete some apps. Particularly being from a security mindset, any app that is possibly a virus or malware or any app that is causing a major performance problem would be removed. I see this as sort of a last resort. If there's another way to solve your problem, go ahead and try some other troubleshooting steps. If you get to a place where you're really stuck and you think it is one particular app that's messing you up and you can't uninstall that app going through other methods, then the fresh start is a good thing to try. Again, it says it's going to keep all of my personal files, but that would still make me a little nervous. So hopefully you have a good backup. If you have a good backup of your files, then doing this makes me much less nervous, but again, I think of it as sort of a last resort to go to after you've gone through some other troubleshooting techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5)
> **UI Navigation:** select the (1), click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Windows Defender: Firewall and network protection](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=0)** - [Instructor] Now let's look at some settings regarding the [[Windows]] firewall. So off the start menu I'll type in Windows security, and select the option called Windows security. In the security center, I'll click on firewall and network protection. The first area we come to shows me the domain network, private network, and public network, all have the firewall turned on. That's good. I can click on one of these and it will give me the option to turn the firewall off for that particular network type. I get a user account control panel, I'll click Yes. And after a few seconds, I'll get a warning saying that the firewall is off, your device may be vulnerable. So I'll go ahead and turn that back on. Going back to the previous screen, after the three sections that show as domain, private and public, we have five options underneath. The first is allow an app through a firewall. When I click on that, it'll pull up a new interface where I see quite a lengthy list of applications. And for any of those, I can allow them through the domain, private or public firewall. All of this can be configured here or configured through group policy. I don't want to make any changes so I'll hit Cancel. The next option is network and internet troubleshooter.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=97)** Which brings up the question of why exactly what we have a network troubleshooter in the firewall section. And sometimes when our network isn't working properly, it could be a problem with the firewall, or it could be a problem with routers and switches. So here by having the troubleshooter nearby, I can look through and see in fact, is it truly a firewall problem or a network problem. And I'll close that. The next one, firewall notification settings I'll click on it. Typically, you're going to be notified when settings are changed in the firewall. If you'd like more detailed notifications or less detailed notifications, you can change that here. I'll go back again. The second to last option is advanced settings. I want to click on that. It will pull up an entirely new interface. And interface you might be familiar with from previous versions of Windows. That again shows me the domain private and public profile, whether or not they're turned on. But this is the interface I can use to also create inbound and outbound rules. So over in the left-hand side, I'll right click on inbound rules. Go to new rule, and this will walk me through a wizard to create a new firewall rule. I'll go ahead and do that now. The first panel asks me if I want to base this rule
>
> **[3:13](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=193)** off of a program, port, predefined or custom, and custom is basically a combination of the three above it. For this one I'm going to set up a firewall rule based on port. So click the radio button next to port, and then hit Next. It's asking me if I'd like to create a TCP or UDP rule, notice there is no option to create a rule that applies to both TCP and UDP. So for something like DNS that uses both TCP and UDP, you would have to create two rules, one rule for the TCP configuration and one rule for the UDP configuration. I need to specify what ports I'm interested in. I can list a single port or provide a range. And then I'll hit Next. Then it's asking me when a connection comes in that matches the criteria I've defined, should we allow the connection or block the connection? Most things in windows firewall are going to be blocked by default so you'll need to create rules to allow things. There's also a middle option, a third option, allow the connection if it is secure. This checks to make sure the connection is using IPsec and if it is using IPsec, then it will be allowed. But I'm going to go with just allow this connection, hit Next. It's asking me which profiles to apply the rule to, and I can choose domain private or public
>
> **[4:48](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-firewall-and-network-protection?u=76281980&t=288)** or any combination there of. And I'll hit Next. It's asking me to give it a name. The name is not going to affect the functionality, but provided a meaningful logical name will help you with your administration. And then I'll click Finish. And we have a new rule right here on top. We could right click on that rule, go to properties, and change just about everything or anything that we did during the setup. So we have a lot of options to customize these rules. I'll close this and go back to the firewall and network protection interface. The very last option is restore firewall to default. And if we click on that, it will give me the option to restore for default, removing all settings that you have configured. And this is probably a last resort in a troubleshooting scenario. If you've gotten to the point where things just aren't working and you've tried to tweak some firewall rules and get them working, you could go back to restore default that would reset everything and allow you to try again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5)
> **UI Navigation:** click on (8), go to (2), select the (1)
> **Env Vars:** tcp (4), udp (4), dns (1)
> **Prerequisites:** set up (1), you'll need (1), setup (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Windows Defender: App and browser control](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=0)** - [Instructor] In the [[Windows]] Security settings, the next section we'll look at is App & Browser Control. So I'll click on that. And we'll see three sections: reputation-based protection, isolated browsing, and exploit protection. Let's talk about each one of these individually. The reputation-based protection, I'll click on that. And that gets into helping us with malicious or unwanted apps, files, and websites. We have several toggle buttons where we can turn on or turn off whether or not [[Microsoft Defender]] will check the reputation of various apps and files, mostly when you're surfing the internet. And it's primarily designed to work with [[Microsoft]] Edge. Near the bottom, we have the option to configure what happens when a potentially unwanted app is detected. And now our only options are to block. So we can turn on or turn off blocking apps, and turn on or turn off blocking dangerous downloads. Previous versions of [[Windows 10]] have the option to warn us instead of blocking. But now, the only option is to block. Going back to the App & Browser Control section, we see isolated browsing. At the bottom, there is an option to install Windows [[Microsoft Defender|Defender]] Application Guard.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=96)** When I click on that, I will be brought to the Windows Features Installation window. And in there, we'll see Microsoft Defender Application Guard. And if we click on that, it would give us the option to install it. In some versions of Windows 10, it's called the Microsoft Defender Application Guard, in others, it is called the Windows Defender Application Guard. But basically the same product. Both of them allow us to run a web browser in a virtualized environment that provides much more security. If we were to come across a virus in that web browser while it's in the virtual environment, it would be very unlikely to infect the [[Representational State Transfer (REST)|rest]] of our machine. Once we close the browser, we are also closing the virtualized environment, and therefore, that will likely delete the virus or malware that we encountered. And the last section at the bottom is exploit protection. In the exploit protection section, we have the option to configure several items about how the operating system runs. And some of these are highly technical. By default, they're all going to be on. And in most cases, you want to leave them on. We have things like data execution prevention, which will prevent code from being run from data-only memory pages. So by turning this on, we allow the operating system
>
> **[3:11](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-app-and-browser-control?u=76281980&t=191)** to mark some sections of memory as being used for data-only, while other sections of memory can be used for both data and programs. Turning this on will defeat some viruses. We also have several options for randomizing memory, and then even how memory is randomized as we go further down. Randomizing memory is an effort to defeat any exploit that relies on a buffer overflow. So with a buffer overflow, data is put in memory and it leaks out of where it's supposed to be, and goes into the next adjacent section. If the person writing the malware knows what things are going to be in memory and where they're going to be, then they could overwrite a very sensitive part of memory. So by randomizing what parts of memory are used for what, it makes it significantly more difficult for anyone to successfully perform a buffer overflow attack. So again, all of these things are on by default, and should be left on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Microsoft Defender]] (3), [[Windows 10]] (2), [[Microsoft Defender|Defender]] (2), [[Microsoft]] (1)
> **UI Navigation:** click on (4), toggle (1)
> **Prerequisites:** configure (2), install (2)
> **Definitions:** is an  (2), is called (1)
> **Speakers:** - [instructor] (1)

#### [Windows Defender: Application guard](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=0)** - [Instructor] So now I'd like to talk about [[Microsoft Defender]] Application Guard, and here in the [[Windows]] security settings, I'll click on app and browser control and the middle option, isolated browsing, under that we have text to install Microsoft Defender Application Guard. So I'll click on that. In the UAC I'll click on Yes. And that will pull up the dialogue to turn on Windows features. The one I'm looking for for me is called Microsoft Defender Application Guard. In some other versions of [[Windows 10]], it might be called Windows [[Microsoft Defender|Defender]] Application Guard, but I'll hit the check box next to that. Hit OK. And I'll watch a progress bar go across the screen. I received a message saying I have to reboot. So I'll go ahead and do that now and I'll see you on the other side of the reboot. Okay, now that I've rebooted, Microsoft Defender Application Guard has been installed. I'm going to open [[Microsoft]] Edge web browser and off the menu with three dots in the upper right, I'll go to the fourth option, New Application Guard Window, and it'll take a minute to set up being this is the first time I've run it. Now I have a new web browser window that for the most part
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-application-guard?u=76281980&t=94)** appears to function just like any other web browser window. However, because it is part of Application Guard, it is being run in a virtual environment. This makes a few differences. First of all, it provides increased security in that if I were to come across a virus while I'm in this environment, it's very difficult for that virus to break out of the virtual environment and affect my computer as a whole. So if I do come across a virus, this particular browser window could get infected, but as soon as I close it, the virus will be gone. That is the good part of all this. The bad part is it can affect performance because now this is a virtualized environment. Performance is not going to be as good as when we were in a non-virtualized environment. So Windows Defender Application Guard has some good and some bad. I would recommend using it. Most of the time, you won't notice the performance penalty and you will be running more securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Defender]] (4), [[Windows]] (4), [[Microsoft Defender|Defender]] (2), [[Windows 10]] (1), [[Microsoft]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** install (1), set up (1)
> **Env Vars:** uac (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Windows Defender: Endpoints](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/windows-defender-endpoints?u=76281980&t=0)** - [Instructor] Now let's talk about [[Microsoft Defender|Defender]] for Endpoint. Many of the other features of Defender are designed for working with one or two machines at a time. Defender for Endpoint is set up more with the mindset of managing a large number of [[Windows 10]] clients. It involves a central server running in the cloud that communicates with your local Windows 10 clients. So this allows for centralized configuration and centralized administration. So rather than having to go to every Windows 10 client and configure the settings for Defender, you can do your configuration through a central server. Defender for Endpoint involves three main parts. The first is in-point behavioral sensors, and these are sensors built into Windows 10 that will report information up to the cloud, up to your central server, [[Cloud Security]] analytics, so once the data is in the cloud, a variety of reports are generated so that you can see from one place, you can see what your security status is, and threat intelligence. [[Microsoft]] works with some vendors and some third parties to come up with some intelligence about what is and is not malware. So based on what you've uploaded, they could make a determination of if you've been infected or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Defender|Defender]] (5), [[Windows 10]] (4), [[Cloud Security]] (1), [[Microsoft]] (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 5. Network Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing network traffic by using IPsec](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about using IPsec in [[Windows 10]]. IPSec, the [[Microsoft Word|word]], is a combination of an acronym and then an abbreviation, but overall it means Internet Protocol Security. It is focused on the secure transfer of packets. IPSec is always based at the packet level. In this context, secure means three things. Secure means it can authenticate the origin of the data meaning we know that the data is coming from who it says it's coming from. It can provide [[Data Integrity]] assurance, so we know that the data has not been changed from what was originally sent. And it will encrypt the packets, so if anyone is able to intercept the packets, they would not be able to read them. IPSec requires authentication. And because it requires authentication, it works best on internal networks, particularly multiple servers that are on the same domain can typically authenticate to one another quite easily. It's a little more tricky to get this to work over the public Internet, because most Internet servers are anonymous. IPSec combined with other technologies can run over the public Internet and it's one of the ways that vendors implement VPN. Now let's look at implementing IPSec in Windows 10.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=95)** Off the start menu, I'll type in firewall and go to the option for [[Windows]] [[Microsoft Defender|Defender]] Firewall with Advanced Security. In the tree view on the left, I'll go to Connection Security Rules. I'll right click and go to new rule. And that'll take me to the wizard. The first page of the wizard talks about several pre-defined rule types you can create, but I'm going to go all the way to the bottom for custom, so I can specify custom values for everything. Then I'll hit next. It's asking me what end points we want to use and these end points can be a specific IP address or they can be groups of IP addresses grouped by subnets or we can even go with any IP address. I'm going to go with two specific IP addresses, so I'll add my local IP address. I'll add my local IP address for end point one and for end point two, I'll add the IP address of the machine I'm going to connect to. Then I'll hit next. Then I have the options to either request or require IPSec for either inbound or outbound. I would like to require for both inbound and outbound, so I'll select the radio button next to that and hit next. Then I have options on the authentication method to use.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=194)** I would like to authenticate the computer, not the user, because I want to encrypt all traffic going between these two servers. And it's going to use Kerberos version five which will require me to be part of a domain. So I'll select that radio button and hit next. Then it's asking what protocol. Normally I would do several different protocols. For purposes of demonstration, I'm going to select just ICMPv4 which is the protocol that ping uses. And then I'll hit next. It's asking me where I would like to apply this rule. I'll go with all three types of network connection. Hit next and now I need to give the rule a name. Then I'll hit finish. Now that this rule is created, I'll go ahead and pull up a command prompt and I'll issue the ping command going to the server I specified in the rule. And then I'll put in -t which will mean the ping command will run continuously until I stop it. We see that communication is successful. So back in Windows Defender Firewall, I can open up monitoring, go to security associations, go to quick mode, and then we see that there is a connection between my local IP address, the remote IP address, and it shows stuff about the protocol
>
> **[4:48](https://www.linkedin.com/learning/windows-10-security-14135501/securing-network-traffic-by-using-ipsec?u=76281980&t=288)** and the technologies being used for both integrity and encryption. So a very nice little tool here. I can quickly get information about any IPSec-enabled connections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Windows]] (2), [[Microsoft Defender|Defender]] (2), [[Microsoft Word|Word]] (1), [[Data Integrity]] (1)
> **UI Navigation:** go to (5), select the (1)
> **Definitions:** is a  (2)
> **Env Vars:** vpn (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [Using VPN in Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about VPN or [[Virtual Private Network (VPN)|virtual private network]], which is an authenticated and encrypted connection between our computer and some other computer that runs over the internet, but because it is encrypted is a secure connection over the internet. When connecting to a VPN, we'll need VPN client software, and many VPN vendors will provide a custom piece of software to use as the client. But [[Windows 10]] also has a built-in VPN client that will work with some, but not all VPN providers. Off the start menu I'll type in VPN. And I'll go to the option for VPN settings. And here I'm taken to an interface where the top option is add a VPN connection. I'll click on that. And then it asks me who my VPN provider is. The only one we have to start off with is [[Windows]] built-in. So I'll select that. We need to give it a name. The name is not important to the functionality. It just helps us remember which connection this is. Then we'll need either the name or address of the VPN server we'd like to connect to. This is something you'll need to get from your VPN administrator. Under VPN type, we have the option for several different protocols or groups of protocols we could use, or we can set it to automatic.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/using-vpn-in-windows-10?u=76281980&t=96)** Typically, if we set it to automatic, the machine will figure out what protocols are needed and will select the appropriate one automatically. The next option is the type of sign-in info. And in this case, sign-in info basically means what are we going to use to authenticate. That could be username and password, which is probably the most common, smart card, which is a nice way to do it if you have the technology, one-time password, which is pretty unusual and certificate, which is becoming less common now that smart cards are becoming more popular. If you select username and password, you will need to of course provide a username and password. And then we hit Save. I now have, back in the VPN interface, a listing of the connection I just created. If I click on that, I'm given the option to connect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Private Network (VPN)|Virtual private network]] (1), [[Windows 10]] (1), [[Windows]] (1)
> **Env Vars:** vpn (14)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Definitions:** is a  (2), is an  (1), basically means (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 6. Group Policy

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of Group Policy](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about using Group Policy to administer [[Windows 10]]. Group Policy is a technology that allows us to configure thousands of user and computer settings. Group Policy can be applied at the domain level or a local Group Policy. If you're running on a domain, that's probably the preferred place to do your Group Policy. If you have one or more Windows 10 computers not connected to a domain, then you could use local Group Policy to accomplish largely the same thing. Be aware that domain settings can override local settings. So if you create a policy at the domain level that has a setting, and you create a policy at the local level that has the opposite of that setting, then the domain setting will take precedence. So typically we don't manipulate the same setting at both the domain level and the local level. If you want to make a setting, just do it in one place or the other, not both. Windows 10 includes, by default, a tool called Local Group Policy Editor. Previous versions of [[Windows]] had this tool available as a download, but now it's just included as part of the base installation of the operating system. The tool has two main sections, computer configuration and user configuration. After you change settings, in order to apply the settings, you typically need to do one of two things.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-security-14135501/overview-of-group-policy?u=76281980&t=96)** You can go to a command prompt and type in GPUpdate. That command will update the local Group Policy and the domain Group Policy for most settings. But for a few settings, a reboot is required. And any time you reboot, by default, it updates everything in both local Group Policy and domain Group Policy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Windows]] (1)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Applying security settings by using Group Policy](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=0)** - [Instructor] In this section, we're going to look at applying some security settings in [[Windows 10]] by using group policy. And the goal of many of these settings will be to make our computer more secure. So off the start menu, I'll type in group policy, and I'll select the edit group policy control panel. In here on the navigation tree to the left I'm looking under computer configuration under window settings, under security settings, and under local policies, I'll click on user rights assignments and the right half of the interface, we'll see several policies listed and which groups have access to these policies. And because this is the user rights section, most of these policies are related to users having permission to do certain things on the computer. For example, allow log on locally is currently set to have several groups in it. One of them being the guest group, and I really don't want guests logging into my computer. So I will double click on that. And then in the dialogue, I'll highlight the guest and I'll hit remove, and then I'll hit apply. And okay.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=92)** And that has removed the guest group from the ability to log on locally, which should increase the security of my PC. Similarly, the option for access this computer from the network is currently applied to everyone. And I really don't like giving permission to the everyone group. So I'll double click on that. I'll highlight the everyone group click remove and click apply. It does give me a warning that this could affect some services and yes, that is accurate. Some services on the network may need to access our computer anonymously and if so, it was doing that through the every one account. I really would prefer for nothing to access my computer anonymously. So I'm okay with removing the everyone group. So hit. Yes. And okay. And now the everyone group has been removed from access this computer on the network. So plenty of options here, you can look through all of these policies, look at what they mean and then decide what groups should be allowed to do those things. Most of this is using the built-in groups, but we can also use the custom groups that we created earlier. I also want to look briefly at the account policies. So back in the left-hand pane, I'm going to select account policies, open that up
>
> **[3:05](https://www.linkedin.com/learning/windows-10-security-14135501/applying-security-settings-by-using-group-policy?u=76281980&t=185)** and look at password policies. And here's where we can set some rules about user passwords, how often they expire and the minimum password length, which by default is set to zero characters, which is certainly not a good idea. So I'll double click on that and I will increase the number four minimum password lift eight is probably the minimum you want to go. Something like 12 or 14 would be even better. I'll hit apply and okay. So again, here are some more settings you can change to whatever fits your needs to set the right level of security for your Windows 10 PC.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2)
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Using Group Policy to audit actions in Window 10](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=0)** - [Instructor] Now let's look at using group policy to configure some of the auditing of a [[Windows 10]] PC. Again, I'm in Local Group Policy Editor. Under the Local Computer Policy under Computer Configuration, I'm going to open up [[Windows]] Settings. Under that I'll open up Security Settings. Under that I'll open up Local Policies, and in there we find Audit Policy. The top one is Audit Account Logon Events. If I double-click on that, I'm given the option to either audit successful logon attempts, audit failed login attempts, or audit both. And typically on most of my computers, I like to audit both. I audit the success because I want to know who's logging into my computer and I audit the failure because I want to know who tried to log into my computer and failed. Both of those are interesting to me. So I'll hit Apply and okay. The other one I'd like to demonstrate is Audit Object Access. And for now I'm going to select both Success and Failure. Object access is just about any file or folder on your computer. So every time there's an attempt to access a file or folder whether that succeeds or fails, it'll be audited. I'll click Apply and I'll click okay. Now I'm going to go ahead and access an object,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=94)** ind particularly a file. So I'll go to the C drive. Go to the folder I created earlier in this course. Open up the text document. Close that and close Windows Explorer. Now all of that activity should have been audited. So let's look at the Windows Event Viewer. Off the start menu, I'll type in event and select the option for Event Viewer. In the tree on the left, I'll open up Windows Logs and select the Security Log. Everything you audit goes into the Security Log. If you notice in the Tasks Category column, I now have a number of items that say File System. And I'll click on one of those. We'll see it says a handle to an object was requested. The name of the user account is there, the name of the domain that's linked to that account is there, and the name of the file is listed below. And we see that it was done by explorer.exe which is Windows Explorer. I'll select another one and scroll down a little. We see the object access was eventviewer.msc. So even the fact that I opened Event Viewer is now logged because it is considered an object access.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-audit-actions-in-window-10?u=76281980&t=188)** Overall, auditing all object access often tends to be too much. It tends to flood our logs with too much information creating two potential problems. One in that our logs could grow too quickly. The other problem being that our logs may contain so much useless information that we would miss the important information. So typically I do not audit object access. I may turn it on temporarily in a troubleshooting situation. But on a day-to-day basis, I find this is just too much information in the logs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Windows 10]] (1)
> **UI Navigation:** go to (2), select the (2), double-click (1), click on (1), scroll down (1)
> **CLI Commands:** find (2)
> **Cross-References:** earlier in (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Using Group Policy to harden Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=0)** - [Instructor] Now I'd like to look at a few more settings in group policy that can allow us to harden our [[Windows 10]] PC. So off the Start menu, I'll type in group policy and select the option for Edit group policy. In the tree view on the left, I want to select [[Windows]] settings, underneath that, Security settings, then Local policies, and Security options. And this will give me several dozen options of things I can change on my Window 10 PC. I'd like to talk about a few of the ones I think are the most important. Near the top, we have Accounts: Guest account status and I like to have that as disabled so the guest account is disabled. A little further down, there's one called Audit: Shut down immediately if unable to log security audits. On my home PC, I usually have this disabled, but many businesses want this enabled to make sure the machine cannot continue to function when auditing has been disabled. Scrolling down, I'm interested in one called Interactive login: Smart card removal behavior, so when someone removes their smart card what should happen on the PC.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=94)** The default is No action, but I like to change that to Lock workstation, so if someone removes their smart card as they're walking away from the PC but they forget to lock it, this would automatically lock it for them. And scrolling down a little farther, there's two that I'm interested in. The first is Network access: Do not allow anonymous enumeration of SAM accounts. SAM accounts are basically local Windows accounts. And I don't want anyone looking at those anonymously so I have enabled the policy that says Do not allow anonymous enumeration. I've always felt this policy has a little bit of an awkward name in the sense that the functionality is phrased in the negative, do not allow. So in order to actually block people from doing things, we need to enable the policy. And it has always seemed a little counter-intuitive to me. I also like to enable the one right below that, Do not allow anonymous enumeration of SAM accounts and shares. So beyond the SAM accounts, I also want to block anonymous access to the shares on my PC. If someone wants to access a share, they're going to have to use username and password. If I double-click on this one, you notice it has a warning that says Modifying the settings
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/using-group-policy-to-harden-windows-10?u=76281980&t=188)** can affect some applications and that is because applications do require anonymous access to shares. So you'll need to check out various applications that you're running, and if any of them give you a problem, it's very easy to come back here and change this setting back to what it was, before. So again, those are the group policies that I find to be most important when locking down a Windows 10 PC. Obviously, there are dozens of others and you can take some time to look through all of these and see what might meet your particular needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Windows]] (2)
> **Env Vars:** sam (4)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** select the (1), double-click (1)
> **Warnings:** warning (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 7. Remote Desktop

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic configuration of Remote Desktop](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=0)** - [Narrator] In this section, we'll go into talk about using Remote Desktop in [[Windows 10]]. Remote Desktop has been around for several generations of [[Windows]]. The functionality in Windows 10 is not that different than previous generations, but the interface used to configure it is different. So off the start menu, I'll click on the gear icon which will take me to settings. I'm looking in the system area and if I scroll down, I'll see second from the bottom, Remote Desktop. This takes us to the basic interface where there is a slider to either turn on or turn off Remote Desktop, mine is grayed out because this particular setting is controlled by my domain. There's also check boxes for whether or not we should keep the PC awake waiting for connections when it is plugged in because if your PC goes to sleep, it typically will not respond to Remote Desktop requests, so you'll need to keep it awake, and another checkbox for making the PC discoverable. Below that we have advanced settings. If I click on that, it shows me some different options about authentication and at the bottom, it shows me I'm using port 3389, which is the default port for Remote Desktop. Going back to the main interface, it asks me how would I like to connect to this PC? And under there, there's a link for,
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=95)** don't have a Remote Desktop client on your device. If I click on that, it takes me to the [[Microsoft]] website to a page where I can download various Remote Desktop clients. Not just for Windows, but also [[Android]], iOS and Mac OS. So yes, you can use Remote Desktop going from a Mac to a Windows 10 PC, or even from a mobile phone, Android or iOS. From a technical point of view, these clients work perfectly fine. The difficulty always is the small screen. Your phone likely has a much smaller screen than your PC does and therefore, some things will be uncomfortable to work with, but the clients are easy to download, easy to install. The last section is a very important one, user accounts. Select which users can remotely access this PC, so when I click on that, you'll see that for me it is blank, but there's also a note at the top that says, anyone who is a member of the administrators group can connect even if they're not in this listed groups. So administrators can always use Remote Desktop, and for me, that's enough. Typically the only people I allow to use a Remote Desktop are the administrators of my PC, but if I wanted to add someone, fairly easy to do so. Click on the add button. The location this account is stored in is on the local computer.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-security-14135501/basic-configuration-of-remote-desktop?u=76281980&t=189)** You could add a user or a group here, I'm going to add the test user I've been using. Hit okay and so now test user would have access to Remote Desktop. So again, for security reasons, you want to be very careful about who is listed in this group, probably never want to use the guest account or everyone group here. For security reasons, we want to keep this to the minimum possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Windows]] (2), [[Android]] (2), [[Microsoft]] (1)
> **UI Navigation:** click on (5), scroll down (1), checkbox (1)
> **Definitions:** is a  (3)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **Code Identifiers:** ios (2)
> **Ports:** port 3389 (1)
> **Speakers:** - [narrator] (1)

#### [Advanced Remote Desktop configuration using Group Policy](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=0)** - [Instructor] Now I'd like to talk about some more advanced configuration of Remote Desktop in [[Windows 10]]. And for this we'll be using Local Group Policy, although you could accomplish largely the same thing through Domain Group Policy. We'll have to drill down a little to get to the settings I want to look at. So under Computer Configuration, I'll open up Administrative Templates, then I'll open [[Windows]] Components. There's a lot of windows components. So I'll have to scroll down to get to Remote Desktop Services. In there I'll open up Remote Desktop Session Host, and one of the options there is security. We have a handful of settings we can configure about security. One of the most meaningful is to require a specific security layer for Remote Desktop connections. So I'll double click on that. I'll go ahead and enable this policy by clicking the radio button next to Enable. That activates the dropdown where I can configure my security layer to either be Negotiate, RDP or SSL. The most secure of these is SSL. And we see in the Help section to the right, if we select SSL, it actually uses TLS 1.0 to encrypt our information, which is the strongest encryption supported by Remote Desktop. So SSL is the most secure.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=95)** The most functional is Negotiate. And with Negotiate, the server and the client will attempt to use different authentication and encryption protocols until they find one they can both use. They start off trying the most secure one, which is TLS. If that doesn't work, they'll go down list and keep trying other protocols until they find one that works. But because SSL is the most powerful, I will select SSL, hit Apply and Okay. The other one I like to configure in here is always prompt for a password upon connection. If we double click on that and then just hit the radio button for Enabled, that will force someone to provide their password every time they connect to a Remote Desktop session. And though the words, they will not be able to save a password and be automatically logged in. So I like that setting. I'll hit Apply and Okay. There's a few other settings not under the security section that I feel have some security implications. And that is in the session timeout limits. We can set a timeout to automatically disconnect a active or idle session after a certain amount of time. So the situation I'm looking at here is, if someone were to make a Remote Desktop connection, use that session for a bit,
>
> **[3:10](https://www.linkedin.com/learning/windows-10-security-14135501/advanced-remote-desktop-configuration-using-group-policy?u=76281980&t=190)** then get up from their computer and walk away, someone could come behind them and take over that session. By setting a timeout on the session, we don't completely eliminate that problem, but we do reduce the likelihood that someone would come behind them because hopefully by the time the person tries that, the session would have timed out. So I can double click on Set Time Limit for Active but Idle Session, go to Enabled, and then in the dropdown I have the option in minutes, hours or days. Whatever you think is appropriate for a timeout for an active but idle Remote Desktop session. I'll hit Apply and Okay. So by addressing some of these settings in Group Policy, you can fine tune your Remote Desktop Security Policy and hopefully create a more secure situation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Windows 10]] (1)
> **Env Vars:** ssl (6), tls (2), rdp (1)
> **UI Navigation:** click on (2), dropdown (2), scroll down (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Prerequisites:** configure (3)
> **Versions:** 1.0 (1)
> **Speakers:** - [instructor] (1)

#### [Allowing Remote Desktop through firewall](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=0)** - [Instructor] By default, [[Windows]] Firewall will block all remote desktop connections. So you're probably going to need to create a rule in Windows Firewall to allow remote desktop connections. Off the Start menu, I'll type in Firewall. And I'll go to Windows [[Microsoft Defender|Defender]] Firewall with Advanced Security. Then I'll click on Inbound Rules, and you see for me, the very top rule is Allow Remote Desktop. I had to create this because I am currently remoted into this computer. But if I double click on that, we can look at some of the settings for that rule. On the Programs and Services tab, I did not list a specific program, but you could if you wanted to, specifically list remote desktop. Instead, I'm limiting it by port. So on the Protocols and Ports tab, you'll see I limited it to TCP protocol and the local port of 3389, which is the default port for remote desktop. In the scope, I have limited the remote IP addresses, so I don't want just anyone coming from the internet being able to remote into my local computer. I have limited it to the 192.168 subnet, and therefore it's limited only to my local network. I could add additional IP addresses here,
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/allowing-remote-desktop-through-firewall?u=76281980&t=97)** either public or private, if I wanted to allow access from a particular IP address on the internet. The other place you might want to look is Local Principles and Remote Users. Again, for me, remote desktop is limited just to administrators. That would provide an extra layer of security, in that only administrators would be able to access remote desktop, and also only administrators would be able to get through the firewall. So, plenty of things to configure here on the inbound rule for Allow Remote Desktop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Microsoft Defender|Defender]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** tcp (1)
> **Versions:** 192.168 (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Changing listening port for Remote Desktop](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=0)** - [Instructor] By default [[Windows 10]] will listen for remote desktop connections coming in on port 3389. If you would like to change this port, it's fairly straightforward to do so. You'll need to edit the registry. So off the start menu, I'm going to type in regedit and I'll select the option for registry editor. You may get a pop-up for user account control. If you do click, yes, we'll need to drill down to the particular key that we want to edit. It's under H key local machine, system, current control set, control. Then we'll need to scroll for a bit to get to terminal server open up terminal server under there. I'll look in WinStations and then I'll click on RDP TCP, and that will pull up a number of keys. The one I'm looking for is called port number. I'll double click on port number, and we can view this data in either hexadecimal or decimal probably makes more sense to look at it in decimal. So it's currently set to 3389. You can change this value to anything between 1025, all the way up to 65,000.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/changing-listening-port-for-remote-desktop?u=76281980&t=97)** So why might you want to do this? Well, remember, everyone knows that 3389 is the default port for remote desktop services. So a hacker on the internet may try to access your machine using remote desktop and port 3389. A highly skilled hacker will probably figure out if you change the port number, but a hacker with a low level of skill might not be able to figure out that you change the port number. If you do, in fact, change this port number, you'll also probably need to change the firewall rule that you created to allow, add remote desktop. And when you connect, you'll need to specify the port. So normally in a remote desktop connection, we would just type in the IP address. And that will default to port 3389. If you'd like to specify a specific port, you just put a colon and then the number for the port. So this would try to connect to port 1234.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (1)
> **Ports:** port 3389 (3), port 1234 (1)
> **UI Navigation:** click on (2), select the (1)
> **Env Vars:** rdp (1), tcp (1)
> **Tools:** terminal (2)
> **Prerequisites:** you'll need (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 8. Additional Security Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Controlling updates for Windows 10](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about [[Windows]] Update. One of the most important things you can do to secure your [[Windows 10]] PC is to update it on a regular basis with security updates provided by [[Microsoft]]. It's also one of the easiest things to do. So off the Start menu, I'll type in Windows Update and I'll select the option for Windows Update Settings, and then the interface, the button at the very top is Check for updates. So I'll click on that and now my machine will go out to the Microsoft servers and check for any available updates and then notify me about those. Sometimes it takes a few seconds, sometimes it takes a few minutes. And it says I do have one update that I'm missing so it is downloading and installing that update for me automatically. And for this particular update, a restart was required for some updates require a reboot, some don't. I am going to do that reboot immediately after I finish this demo because I want to keep my machine as secure as possible. But first, let's talk about some of the options underneath. At the bottom, we have four options. The first is to Pause updates for 7 days. And as the name implies, this will stop my machine from checking for updates for seven days.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=94)** That's not something I want to do real often but from time to time, there may be a good reason to temporarily pause updates. The next option is to Change active hours. When I click on that, we'll see that currently my active hours are set 9:00 AM to 8:00 PM. and during that time, my device will not reboot automatically. If I turn off Active hours, then there is a possibility of an automatic restart happening during the day, so I like that to be turned on. Going back, we have the option to View update history which, as its name implies, shows me all of the updates that have been installed on this PC and does give me the option to uninstall some updates. It's pretty rare that an update will cause a problem, but if it does, you can come here, to this interface and uninstall that update. I'll hit back again and the last option, Advanced options, I have the slider selected for Receive updates with other [[Microsoft Products]] when you update Windows and I like having this turned on because security is not just about Windows being secure, I also need [[Microsoft Office]] and Microsoft Edge, and those [[Microsoft Products|products]] to be secure, so I do like to have that turned on. It has an option on whether or not I want to restart the device as soon as possible.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-security-14135501/controlling-updates-for-windows-10?u=76281980&t=188)** I have that turned off because I like some control over restart. I have the option for Show notifications when the PC requires a restart to finish updating. Most of the time I have this turned on, but being I'm recording demos on this PC, I don't want a whole lot of notifications popping up everywheres, but this is something I would normally have turned on. And then the last option, Pause updates, we had seen a previous interface that allow us to pause for seven days. This interface will allow us to pause for up to 35 days and choose which day we'd like to resume. So I'll go back. So that's our major options concerning Windows Update. You'll notice there was no option to permanently turn off updates. We can pause them for up to 35 days but we can't actually turn off Windows Updates and that is intentional. In previous versions of Windows, you could turn off updating. Microsoft decided to remove that ability in Windows 10. So all Windows 10 PCs will be updating automatically from time to time in the interest of security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Microsoft]] (4), [[Windows 10]] (3), [[Microsoft Products]] (1), [[Microsoft Office]] (1)
> **UI Navigation:** click on (2), select the (1)
> **Ports:** :00 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Browsing the web securely with Edge](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=0)** - [[Microsoft]] Edge is now the default web browser in [[Windows 10]]. So, I'd like to talk a little bit about making it more secure. Off the Start menu, I'll open up Microsoft Edge. And then in the upper right, I'll click on the menu that's signified by three dots. In there, near the bottom, I have settings which will take me to a section with quite a number of settings. And if you're using a different version of Edge, some of these settings will probably be in a slightly different place. They do seem to reorganize the settings a lot between one version of Edge to another. Surprisingly, there is not a category of settings for security but in the [[Privacy]] search and services area, there is many security related settings. So, I'll click on that. The top section talks about tracking prevention. I usually go with the strict tracking prevention, which blocks the majority of trackers from all sites. And it does this mostly by blocking cookies. In the description of it, it talks about some parts of some websites may not work. I have not found that to be the case. To me, it seems like everything works fine on the sites I visit even with the strict tracking prevention. Scrolling down, there is a section for security and there are three major options here.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/browsing-the-web-securely-with-edge?u=76281980&t=94)** [[Microsoft Defender]] SmartScreen, which will help protect me from malicious downloads, block potentially unwanted apps, which uses a similar technology to Smart Screen. Both of those are receiving information from Microsoft about the security reputation about different sites and apps. And then the bottom one, on secure DNS, giving us a nice, easy way to either use our default DNS provider through our ISP or choosing a custom DNS provider. So, if you have reason to believe your current ISP cannot provide secure DNS, you could change that here to a third party. So typically, all three of these are turned on. So, there may not be as many settings as you would expect for security inside of this interface. But remember, in previous parts of this course, we talked about areas where you could potentially influence the security of Microsoft Edge. Things like Microsoft Defender Application Guard, and actually all of Microsoft Defender, [[Windows]] [[Microsoft Defender|Defender]] Firewall, and also there's a number of group policy settings that can be used to increase the security of Microsoft Edge web browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5), [[Microsoft Defender]] (3), [[Windows 10]] (1), [[Privacy]] (1), [[Windows]] (1)
> **Env Vars:** dns (4), isp (2)
> **UI Navigation:** click on (2)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - microsoft (1)

#### [Secure Boot](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=0)** - [Tutor] In this section, we'll go into talk about the boot process in [[Windows 10]]. In Windows 10, we can think of the boot process as a three-step process. The first step are group of steps called secure boot, which then leads to trusted boot, which then leads to early launch antimalware. We'll talk about each one of these in detail. The first step secure boot, is handled by the Unified Extensible Firmware Interface, which is a standard implementation of your [[Hardware]]. So Windows 10 is not actually involved in this. At this point in the boot process, the operating system hasn't started running yet, it's just the firmware on your motherboard that's running. UEFI verifies the signature of all the firmware files that are loaded, and that makes it difficult or impossible for these files to be replaced without your authorization, which dramatically reduces the [[Probability]] of introducing a virus or malware into the boot process, hence the name secure boot. The security here is that it's going to great efforts to eliminate viruses and malware while booting. It does this by verifying the signature of the files. The last thing secure boot process does, it places the bootloader of the OS into memory, and once the bootloader takes over, we move on to the next step, which is called trusted boot.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=97)** The boot process has been handed off from the firmware to the operating system, and now Windows 10 will handle everything going forward. First thing trusted boot does is load of kernel and that [[Windows]] kernel is verified by a certificate. So the same mindset as the verification in the previous slide, we want to verify that the files have not been tampered with, and no one has introduced a virus. After the Windows kernel is loaded, trusted boot will start to load windows components. And as it's loading windows components, it will take care to load antimalware early in the launch sequence. [[Microsoft]] calls this mindset early launch antimalware. It tries to load an antimalware program before any device driver is loaded, that way if there is a virus or root kit inside of one of the device drivers, the antimalware software can catch it. So by loaded antimalware software first, that allows all device drivers to be scanned. By default in Windows 10, the antimalware software is Windows [[Microsoft Defender|defender]]. So again, the process starts with secure boot, which is handled entirely by the firmware. Once the OS loader is at beamery, that becomes the trusted boot step handled by Windows. During that time, the kernel is loaded, then Windows components are loaded, and before any device driver is loaded,
>
> **[3:12](https://www.linkedin.com/learning/windows-10-security-14135501/secure-boot?u=76281980&t=192)** Microsoft stores the early launch antimalware software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[Windows 10]] (5), [[Microsoft]] (2), [[Hardware]] (1), [[Probability]] (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** uefi (1)
> **Speakers:** - [tutor] (1)

#### [Enabling controlled folder access](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about controlled folders in [[Windows 10]]. So at the Start Menu I'll type in controlled folders, now click on the option for controlled folder access. Controlled folders is [[Microsoft]]'s ransomware protection, and basically it limits the applications that can access the files in certain folders. The hope is that it would block a ransomware attack by preventing the ransomware software from accessing your most important files. So I would highly recommend that you have this turned on just by using the slider here. Underneath that we have block history, which if I click on that, it'll show me any applications that have been blocked from accessing certain files or folders. I have none, so hit back. Next is the option on protected folders. I'll click on that and it shows the list of folders that are currently protected. There's kind of some unusual choices here, and these are automatic, I didn't change any of these. These are all the default folders. It's protecting things like public pictures, public videos. I don't commonly use the C:/users public path, so I'm not real worried about protecting this. It does protect my documents.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=94)** Under my username, there is a folder called documents, and protecting that is very important to me. So I'm glad to see that one there. But the C:/user/public doesn't seem that important to me. Very easy to add another folder to be protected. We just click on the button for add a protective folder, and then we navigate to the appropriate folder, hit Select Folder and now my folder is there. Going back, the next option under protected folders is allow an app through controlled folder access, I'll click on that. So Microsoft tries to make a best effort to determine what application should be allowed and what applications should not be allowed to look at your sensitive files. If you feel it's being too restrictive and it's blocked an application that you feel shouldn't be blocked, you can just come here and say add an allowed app, and then go to browse all apps. You could go through this interface and search for a particular application and tell that application to be allowed. So going back, again, the ransomware protection controlled folder access is something I highly recommend that you turn on. I also highly recommend that you look at the folders that are being protected, because it may not be exactly the folders that you want to protect. So you'll likely want to come in
>
> **[3:06](https://www.linkedin.com/learning/windows-10-security-14135501/enabling-controlled-folder-access?u=76281980&t=186)** and add one or two protective folders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Windows 10]] (1)
> **UI Navigation:** click on (5), navigate to (1), go to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to learn more about Windows 10 security](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-security-14135501/where-to-learn-more-about-windows-10-security?u=76281980&t=0)** - [Martin] Thank you for watching Securing [[Windows 10]]. I hope you've enjoyed the course as much as I enjoyed creating it, and I also hope that you continue your learning both about [[Cybersecurity]] and about Windows 10. We have plenty of great courses here in the library. Again, some about cybersecurity, some about Windows 10 and plenty of other topics that I hope you will enjoy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Cybersecurity]] (2)
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