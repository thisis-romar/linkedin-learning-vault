---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-server-2022-install-and-configure-active-directory
url: "https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory"
duration_minutes: 146
duration: 2h 26m
level: Intermediate
updated: 5/23/2025
learners: 127741
skills:
  - Active Directory
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHS95VNF_sS6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1645812957022?e=2147483647&amp;v=beta&amp;t=9_R5PDYqDBuFaEKNi8h3T406eyycDLd8t0hoSMm-UBE"
linkedin_topic: IT Help Desk
learning_paths:
  - '[[Getting Started with Windows Server 2022]]'
prev_courses:
  - '[[Windows Server 2022- Installation and Configuration]]'
next_courses:
  - '[[Windows Server 2022- DHCP and DNS]]'
path_nav: '[{"path":"Getting Started with Windows Server 2022","position":3,"total":4,"prev":"Windows Server 2022- Installation and Configuration","next":"Windows Server 2022- DHCP and DNS"}]'
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - topic/network-and-system-administration
  - skill/active-directory
  - skill/windows-server
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/IT%20Help%20Desk/Windows%20Server%202022-%20Install%20and%20Configure%20Active%20Directory.md)

![Windows Server 2022: Install and Configure Active Directory](https://media.licdn.com/dms/image/v2/C560DAQHS95VNF_sS6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1645812957022?e=2147483647&amp;v=beta&amp;t=9_R5PDYqDBuFaEKNi8h3T406eyycDLd8t0hoSMm-UBE)

# Windows Server 2022: Install and Configure Active Directory

> If you want to be a successful Microsoft network administrator, a crucial requirement is an understanding of Active Directory, which has been a major part of Windows Server operating systems since Windows Server 2000. This course from instructor Ed Liberman gives you everything you need to know to install and configure Active Directory Domain Services in Microsoft Windows Server 2022. Ed teaches t

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory) | 2h 26m | Intermediate | 128K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Install and configure Active Directory](#install-and-configure-active-directory)
  - [What you should know](#what-you-should-know)
- [**1. Installing Domain Controllers**](#1-installing-domain-controllers) (4 videos)
  - [Installing Active Directory Domain Services](#installing-active-directory-domain-services)
  - [Installing a forest root domain controller](#installing-a-forest-root-domain-controller)
  - [Installing additional domain controllers](#installing-additional-domain-controllers)
  - [Installing read-only domain controllers](#installing-read-only-domain-controllers)
- [**2. Active Directory Administration Tools**](#2-active-directory-administration-tools) (6 videos)
  - [Managing AD DS with Active Directory Administrative Center](#managing-ad-ds-with-active-directory-administrative-center)
  - [Managing AD DS with Active Directory Users and Computers](#managing-ad-ds-with-active-directory-users-and-computers)
  - [Active Directory Domains and Trusts overview](#active-directory-domains-and-trusts-overview)
  - [Active Directory Sites and Services overview](#active-directory-sites-and-services-overview)
  - [Active Directory schema overview](#active-directory-schema-overview)
  - [Managing AD DS from the command line](#managing-ad-ds-from-the-command-line)
- [**3. Flexible Single Master of Operations**](#3-flexible-single-master-of-operations) (3 videos)
  - [FSMO overview](#fsmo-overview)
  - [Transferring a FSMO role](#transferring-a-fsmo-role)
  - [Seizing a FSMO role](#seizing-a-fsmo-role)
- [**4. Active Directory Permissions**](#4-active-directory-permissions) (3 videos)
  - [Delegating permissions manually](#delegating-permissions-manually)
  - [Using the Delegation of Control Wizard](#using-the-delegation-of-control-wizard)
  - [Creating a custom management tool](#creating-a-custom-management-tool)
- [**5. Managing Active Directory Objects**](#5-managing-active-directory-objects) (8 videos)
  - [Creating user accounts](#creating-user-accounts)
  - [Moving user accounts](#moving-user-accounts)
  - [Using user account templates](#using-user-account-templates)
  - [Creating a group](#creating-a-group)
  - [Managing group membership](#managing-group-membership)
  - [Creating computer accounts](#creating-computer-accounts)
  - [Creating organizational units (OUs)](#creating-organizational-units-ous)
  - [Examples of OU hierarchies](#examples-of-ou-hierarchies)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Install and configure Active Directory](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=0)** - [Ed] [[Active Directory]] has been a major part of [[Windows Server]] operating systems since [[Windows]] 2000 Server and continues to be used today.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=9)** To be a successful network administrator who manages a [[Microsoft]] network environment, it is crucial to have a solid understanding of identity management.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=18)** Now, how do you get that?
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=19)** Through Active Directory Domain Services, and that's exactly what we'll be learning about in this course.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=26)** I'm going to start things off by showing you about how to deploy Active Directory Domain Services and then we'll go over some Active Directory administration.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=34)** And finally, we'll wrap things up by talking about how to manage individual Active Directory objects.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=41)** So let me quickly introduce myself.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=43)** I'm Ed Liberman.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=44)** I'm a Microsoft certified trainer, and I have a question for you.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=48)** Are you excited about Active Directory yet?
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/install-and-configure-active-directory?u=76281980&t=50)** Well, I know I am. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (6), [[Microsoft]] (2), [[Windows Server]] (1), [[Windows]] (1)
> **Speakers:** - [ed] (1)

#### [What you should know](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get through this course, I do not have any specific mandatory prerequisites that you must have.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=7)** I will say that it will be helpful if you already have some level of experience in knowing how to navigate your way through [[Windows Server]] 2022.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=16)** In fact, I would say, even if you have experience with Windows Server 2019 or Windows Server 2016, that would be fine as well.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=24)** And that's just a matter of being able to navigate through it, so I can discuss the [[Active Directory]] side of things with you.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=33)** Now, as I go through and perform the different demonstrations, I want you to know what my setup is here.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=40)** Now, you can see on the screen that I have actually a whole bunch of [[Virtual Machines]], and I want you to ignore most of them.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=47)** I just want you to focus on the three that I have that say that they're running, which are DC1, DC2, and DC3, okay?
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=56)** Now, even though they have the name DC on these three computers, which stands for domain controller, right now, at this moment, at the start of the course, those three machines are set up with nothing more than a basic installation of Windows Server 2022.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=74)** And all I've done is named them DC1, DC2, and DC3, just to give them names, and I have configured an IP configuration so that they can communicate on the network and with each other.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=87)** So if you want to follow along, that's all you'll need, which is three computers or three virtual computers.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=94)** And in fact, you could really get away with just one machine.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=99)** Definitely, you can do almost everything.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=101)** But two machines, you really could do everything.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=105)** You might have to do some undoing along the way.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=107)** The third one is literally used for only a single demonstration, okay?
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=112)** So again, these can be either virtual machines or actual physical machines, if you have those available.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/what-you-should-know?u=76281980&t=118)** But beyond that, the only thing you need is to have a basic installation of Windows Server 2022 on those machines, and I will show you everything else from there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (5), [[Virtual Machines]] (2), [[Active Directory]] (1)
> **Env Vars:** dc1 (2), dc2 (2), dc3 (2)
> **Prerequisites:** setup (1), set up (1), you'll need (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)


### 1. Installing Domain Controllers

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Active Directory Domain Services](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=0)** - [Instructor] The process of turning a server into a domain controller is really a two step process.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=8)** So here, I want to show you the first of these two steps and that would be to install the actual [[Active Directory]] domain services role.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=19)** So here I will tell you, I am on virtual machine.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=23)** I have called DC-1, and it is nothing more than a newly installed copy of [[Windows Server]] 2022.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=33)** And other than some basic configuration like assigning the computer name and IP address and things like that, nothing else has been done to it.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=41)** So here in the server manager, you'll notice that step number one is configured to local server.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=46)** I said, we've done that already.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=47)** Step number two is add roles and features.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=49)** So I'm going to click on that now.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=53)** First thing that comes up is a before you begin screen, that basically says, Hey you're about to make this server, doing something important.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=61)** Before you do that, you want to make sure that it's secure things like having an administrator account with a strong password and that your network settings are appropriately configured and that you have the latest and greatest security updates.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=72)** Alright? So I'm going to tell you, yes, we're done.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=75)** I'm not going to worry about this.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=77)** We'll see this every time we go through this particular wizard, if you don't want to see it you can actually check the box to say skip this page by default.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=85)** So I'm going to go ahead and click on next.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=87)** I now have to decide, is this going to be a role or feature installation, or is this going to be a remote desktop services installation used in a virtual desktop infrastructure or VDI?
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=98)** Well, this is just a basic role installation.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=100)** So I'm going to take the default right up top and click next.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=105)** Now I need to choose what server I want to install this role on. Now, one of the neat things about server manager is we have the ability to add additional servers that we can manage remotely from this one location.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=120)** I have not implemented that in my environment but that's why it's asking me to choose a server.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=127)** If I was managing multiple servers I could choose which ones I want to install on.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=131)** In this case, I do want to install on this server the one we're on DC-1.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=136)** So I would click next and now is where we actually choose the role that we want to install.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=143)** And I had said that the role we're going to install is active directory domain services.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=148)** The second one on the list here.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=149)** Now, before I check the box I want to tell you to watch that something's going to happen.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=154)** Okay. When I check this box, I'll do it now.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=158)** A little pop up window comes up that basically says that there are other features that are required in order for active directory domain services to be fully installed.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=168)** Okay. So I can see the list of what they're going to add.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=171)** And the really cool thing is all I have to do is just simply click this button that says add features and it will add all of those features that are required along with the role rather than me having to worry about going back and doing that manually.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=185)** So I'm going to go ahead and click add features and that's the only role that I want to install here.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=192)** So I'm going to go ahead and click on next.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=195)** Now the next screen we get here is where I can choose any additional features that I want to install at this point.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=200)** But because I am only trying to install the one role we can just skip right through this screen and click on next.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=209)** Now it gives me a little bit about what it is that I'm about to do, right?
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=212)** Here's some information about what active directory domain services is.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=215)** You'll notice there's even a little bit of an ad here for [[Microsoft Entra ID|Azure active directory]] which is an online directory services.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=222)** So there's information that you can get right here.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=225)** If you're looking to move away from on premises and move out into the cloud with your active directory services.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=233)** But this is fine.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=234)** I'm just going to go ahead and click on next.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=236)** And then I get my confirmation screen that tells me everything I'm about to do.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=240)** Now, one of the things that I've learned do just out of habit on this screen is there's a box up at the top that says restart the destination server automatically if required.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=249)** So I'm going to check that box.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=250)** And when I do I'll get a little warning that basically says, Hey it's going to happen without any notification.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=255)** So are you sure you want to do this?
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=257)** Because you know, if there's any other processes running or any other users connected, they're going to be kicked off.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=262)** So I'm okay with this.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=263)** I'm going to click yes.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=265)** And at this point, all I have to do is click install.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=269)** And now it's going to go through the installation process.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=273)** You'll see a progress bar go across the top of the screen here.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=276)** And there's nothing else really we need to do, but wait.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=280)** I will say that this is a good point for me to explain something that will happen here and throughout the course which is when we have a process like this that can take a few minutes to go through rather than us just sitting here together staring at a bar for a few minutes.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=294)** I'm going to go ahead and speed up the video to the end.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=297)** And if you're watching and you're trying to follow along while watching this is a great point where you would go ahead and pause this video and then resume once this process has completed.
>
> **[5:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=310)** Alright. So on my machine, we have sped things up and you can see here that the progress bar has completed.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=317)** And there's a little message that says configuration required. But after that it says installation succeeded on DC-1.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=324)** That's what we're looking for.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=326)** Now, the fact that there is a configuration required that is because I told you that technically there's a two step process.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=333)** Alright. So that was step one.
>
> **[5:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-active-directory-domain-services?u=76281980&t=335)** We actually, at this point have installed the role and in the next video, I'll show you the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5), [[Windows Server]] (1), [[Microsoft Entra ID|Azure active directory]] (1)
> **Prerequisites:** install (10), before you begin (1)
> **UI Navigation:** click on (5)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2)
> **Env Vars:** vdi (1)
> **Cross-References:** in the next (1)
> **Warnings:** warning (1)

#### [Installing a forest root domain controller](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=0)** - [Instructor] So the second step involved with the full installation of [[Active Directory]] Domain Services and bringing a server to becoming a domain controller would be to actually promote the server to being a domain controller.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=15)** Right? So here on DC-1, I have just completed the installation of the Active Directory Domain Services role, okay?
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=24)** And this is the screen that we were left on.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=26)** I didn't close anything.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=27)** It says configuration required.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=29)** Installation succeeded on DC-1.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=32)** Now, how do we know what this configuration is?
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=34)** Well, there's a link down here.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=36)** First of all, if you read in the box it says additional steps required.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=39)** And then there is a link for promote this server to a domain controller.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=43)** And I do want to point out something else just in case you happen to close out of it.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=48)** And that is let's pretend like we closed this window.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=51)** Well, that's okay.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=52)** Because up here there's a little notification area and you'll see here that it tells me that the installation has succeeded.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=59)** And then here is post-deployment configured.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=62)** And again, we have that same link for promote this server to a domain controller.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=66)** All right. So I'll click the link there.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=68)** Takes us to the exact same place and that is the Active Directory Domain Services configuration wizard.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=75)** All right. So what do we have here?
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=76)** First option we have is what kind of domain controller is this going to be?
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=80)** Are we going to add a domain controller to an existing domain?
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=83)** Well, we can't do that right now because we don't have an existing domain.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=87)** So do we want to add a new domain to an existing forest?
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=90)** Well, again, can't really do that because we don't have an existing forest.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=96)** So we have to do the third option which is we're going to add a new forest.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=101)** All right.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=102)** And you'll notice by the way that when I click on that, some of the options down below changed, right?
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=106)** When I'm up here, it wants extra information depending on what type of domain controller we're going to do.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=113)** And again, in this case, we're going to go ahead and just, we're going to say this is the first domain controller in a brand new forest or what's called the forest root domain controller.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=124)** So we need to give this root domain a name and I'm going to call it landonhotel.local.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=134)** All right.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=135)** So that is the name of pretty much like the top of my hierarchy when it comes to Active Directory Domain Services in my environment.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=143)** I'll click on next.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=148)** Now there are a few things to do here on this domain controller options window.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=153)** The first is right up top where it says select the functional level for the new forest and root domain.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=158)** So we have our forest functional level on our domain functional level.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=161)** And I will tell you that the idea of the functional level was pretty much discontinued with [[Windows Server]] 2016 which is why you'll see that that's the option that is there by default.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=174)** If I click the dropdown, we see that we can do a functional level going all the way back to Windows server 2008, which was really when they first came up with functional levels or I guess technically I think it was with R2 is where they came up with functional levels.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=187)** And the idea here is if you have older domain controllers then you need to go ahead and make the functional level match whatever your oldest domain controller is so that it can actually communicate properly with this new domain controller.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=205)** Now because this is my forest root, this is my only domain controller and all domain controllers that I'm going to have are all going to be Windows server 2022.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=214)** Well, we can just go ahead and leave this as Windows server 2016, which is the highest functional level that you can choose.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=222)** The middle section here has to do with what domain controller capabilities do you want to have?
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=226)** Do you want it to be a DNS server as well?
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=229)** Now I could have manually set up this machine as a DNS server when I installed the Active Directory Domain Services role.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=235)** But I did not because I knew that I could do it as part of this process right here.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=241)** It is a good idea that you have at least one of your domain controllers also be a DNS server.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=248)** It's a great way to be able to do something called Active Directory integrated zones within your DNS environment.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=254)** So I am going to go ahead and say I want this machine to also become a DNS server.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=259)** DNS is required by the way in order to have any communication within Active Directory Domain Services.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=265)** Now the second option is actually grayed out.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=267)** You may or may not be able to see that depending on what kind of screen you're looking at.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=270)** But even if I try to click that box, I can't do it.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=273)** It's checked and it's grayed out.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=275)** It must be a global catalog server.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=277)** And the reason is because you must have at least one global catalog server in every forest.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=283)** And so since this is the first domain controller in the forest, it must be a global catalog server.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=290)** And the third option is actually also grayed out and the box is not checked.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=295)** And I can't check it, okay?
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=296)** And that's because it's the option for a read only domain controller.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=300)** Now I'll demonstrate the installation of a read only domain controller in another video.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=304)** But basically the idea is it's just what it sounds like.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=307)** It's going to have a read only copy of the domain controller database.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=312)** Okay. The directory services database, I should say.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=314)** And so you can't have a read only copy until you have a master copy out there.
>
> **[5:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=319)** And since this is the first domain controller, it can't be one.
>
> **[5:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=322)** All right, moving right along.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=324)** We need to set up our directory services restore mode password.
>
> **[5:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=329)** So I'm going to go ahead and put in a secure password.
>
> **[5:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=332)** I put it in, got a match and put it in there twice.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=334)** And then I can go ahead and click next.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=337)** Now you'll notice a warning shows up.
>
> **[5:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=338)** Says a delegation for this DNS server cannot be created 'cause the authoritative pair zone cannot be found.
>
> **[5:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=342)** And as I have highlight over it, the whole big long message comes up.
>
> **[5:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=346)** Basically what it's saying is, hey, you're creating landonhotel.local and I can't find some DNS server out there called .local to go ahead and delegate to this particular domain.
>
> **[5:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=358)** But that's okay.
>
> **[5:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=359)** We know that that's true 'cause this is going to be our forest root.
>
> **[6:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=362)** So we can ignore this warning and click next.
>
> **[6:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=366)** Now it's going to verify the net bios name that it's going to use for this particular domain.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=371)** It's looking for basically just Landon Hotel.
>
> **[6:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=374)** And it's looking to see if that's being used on the network and it didn't find it.
>
> **[6:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=378)** So it's going to go ahead and populate it and recommend that you use that as the net bios name.
>
> **[6:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=383)** So again, we're going to take the defaults and click next.
>
> **[6:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=386)** Now we need to specify the location of the actual Active Directory Domain Services database, the log files and the CIS file folder.
>
> **[6:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=395)** Now here's what I'm going to tell you.
>
> **[6:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=397)** In a production environment, it is a very good idea that your database and log files specifically, and maybe even all three, they should each be on their own individual storage drive.
>
> **[6:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=410)** Not some kind of volume or partition on one physical drive, but separate physical drives or drive sets if you're using Raid.
>
> **[6:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=418)** In this demonstration, I only have the one hard drive so I'm not going to change anything, but I'm just letting you know that from a performance standpoint you will see a significant increase if you move these onto separate drives.
>
> **[7:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=432)** So we're going to click next.
>
> **[7:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=434)** Here is a review of everything we're going to do.
>
> **[7:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=438)** Okay? So you can read through that.
>
> **[7:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=439)** You can actually do this button here that says view script and that's if you wanted to export this process into a [[Windows]] Power Shell script to go ahead and automate it for other installations.
>
> **[7:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=451)** But in this case, all we're going to do is click on next.
>
> **[7:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=454)** And now it's going to go through a prerequisite check.
>
> **[7:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=457)** It's going to make sure that this machine has everything it needs in order to install the [[Representational State Transfer (REST)|rest]] of Active Directory Domain Services and become a domain controller.
>
> **[7:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=466)** Now this might look alarming because we suddenly got all these warnings that came up, right?
>
> **[7:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=471)** We got this warning about it having a default security setting for allow [[Cryptography]] [[Algorithms]] compatible with NT4.
>
> **[7:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=477)** There's our warning for delegation for DNS but you'll will notice that under those two warnings, it says prerequisite check complete and all prerequisite checks pass successfully.
>
> **[8:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=488)** You can click install to begin installation.
>
> **[8:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=490)** And you'll also notice that even before we read through all this right up at the top we had a green check mark here, okay?
>
> **[8:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=496)** That was the good news where it said, hey, you're good to go.
>
> **[8:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=499)** There are some warnings in case that happens to matter in your environment.
>
> **[8:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=503)** I can tell you that these are typical and we do not have to worry about them.
>
> **[8:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=507)** So at this point, I'm going to go ahead and click on install.
>
> **[8:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=510)** And this again is one of those points where it's going to go through and it's going to take a little while and it's going to involve a reboot, okay?
>
> **[8:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=517)** So I'm going to go ahead and I'm going to speed things up.
>
> **[8:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=521)** And if you following along then go ahead and pause the recording and resume once your process has completed as well.
>
> **[8:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=531)** Okay. So the process has completed on my system.
>
> **[8:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=535)** It did involve a reboot.
>
> **[8:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=537)** So I went ahead and I logged back in as the administrator and it takes us back into the server manager.
>
> **[9:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=543)** And I'd like you to notice if you take a look that we now down at the bottom where it says roles and server groups, it's now has the AD DS which is Active Directory Domain Services role and DNS.
>
> **[9:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=556)** Okay? Because those both have been configured.
>
> **[9:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=560)** And just to confirm, we want to make sure that everything has actually installed, one of the things that you can do is go ahead and click on tools.
>
> **[9:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=568)** Then you'll notice that you have a bunch of Active Directory tool options here now, right?
>
> **[9:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=573)** So Active Directory Administrative Center, domains and trusts, et cetera, et cetera.
>
> **[9:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=577)** Now, what I like to do is actually click on Active Directory users and computers and make sure it actually opens and that you can see that you do indeed have everything configured for your domain in this case, landonhotel.local.
>
> **[9:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=590)** All right. So it looks like it is there.
>
> **[9:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=594)** So that is all there is to the process.
>
> **[9:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=596)** I will make one other quick mention.
>
> **[9:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=598)** And that is if you are following along and you see this red and it's alarming you, that is very typical on a Windows server when you first reboot it.
>
> **[10:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=606)** Very often you'll end up with services.
>
> **[10:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=608)** There's a delayed start to them.
>
> **[10:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=610)** And so that's why you're getting a notification there.
>
> **[10:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=613)** All right.
>
> **[10:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=614)** Nothing to actually worry about.
>
> **[10:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=615)** All right.
>
> **[10:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=616)** So that is everything that you need to do to install the first domain controller in your forest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (13), [[Windows Server]] (5), [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Cryptography]] (1)
> **Env Vars:** dns (10), cis (1), nt4 (1)
> **Prerequisites:** install (4), prerequisite (3), set up (2)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** click on (5), select the (1), dropdown (1)
> **Definitions:** is a  (4)
> **Warnings:** warning (4)
> **Speakers:** - [instructor] (1)

#### [Installing additional domain controllers](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=0)** - [Instructor] Once you have installed the first domain controller in your forest, the next thing you want to do is install any additional domain controllers that you need to have for your environment.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=12)** Now, one thing I would like to add real quick here is it really doesn't matter how large or small your environment is.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=20)** I always recommend that you have at least two domain controllers running, okay, and the reason why is because that way, you have some degree of fault tolerance and redundancy in your environment.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=32)** Okay, so it doesn't necessarily matter whether you're in a large enterprise, even in a small business, you want to have two domain controllers because your domain controller's kind of everything.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=42)** If you only have one and you lose that one, that's kind of a problem.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=47)** You've lost everything.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=48)** All right, so let's get to this here.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=50)** What we're looking at here is I'm actually on DC-2, okay, the virtual machine I created called DC-2.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=57)** You can see that here where I'm already in the Add Roles and Features Wizard and you can see the destination server, DC-2, that's what we're on.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=65)** I just completed the process of installing [[Active Directory]] Domain Services.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=72)** Okay, I just installed that role and we're at the point where we're ready to promote this server to a domain controller.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=78)** Now, real quick before I do that, let me go ahead and close out of this window.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=83)** Remember, we can always get back to it by going up here.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=86)** And what I want to do is I'm going to click on configure this Local Server 'cause I want to show you something.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=89)** On DC-2, on our ethernet connection, what I want to do is I want to show you that it's important that I've configured it so that it has an IP address that does work within the network that you're on, but more specifically, down here for DNS, it says that my preferred DNS server is, this happens to be the IP address of DC-1, okay.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=118)** You need to point to a DNS server that is aware of your other Active Directory domain controllers in order to be able to communicate and make this additional domain controller.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=130)** All right, so let me go ahead and let's close out of here.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=134)** And I'm going to go up here to our Notifications area and let's now try to promote this server to a domain controller.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=143)** So now, I, again, get to my deployment configuration here and I need to choose am I adding a domain controller to an existing domain, a new domain to an existing forest, or a new forest?
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=154)** Well, in this case, we are truly adding an additional domain controller to the existing domain.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=161)** Okay, so we're going to take that first selection.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=164)** So it wants to know, well, what is that domain?
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=166)** So I'm going to go ahead and put in landonhotel.local, and I need to supply the credentials to perform this operation.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=175)** Okay, so I'm going to click on Change.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=177)** I'm going to put in landonhotel\administrator and then the password.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=187)** Now, even though you may be thinking, well, I'm already logged in as an administrator, you're logged in as a local administrator to this machine 'cause this machine is not part of the domain right now.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=198)** Okay, so we needed to say what we want to put in the credentials of the domain administrator account.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=204)** All right, so I'll click OK and next, and now I get some domain controller options.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=211)** All right, we saw this even when we created the first domain controller.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=214)** We have a choice and in this case, all the boxes, we can choose yes or no.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=219)** Do we want to also make this a DNS server.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=222)** All right, now I mention that you should always have at least the one, well, guess what?
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=225)** Just the same as I recommend you always have at least two domain controllers?
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=229)** Start with that minimum, no matter how large or small your organization is?
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=233)** I also recommend that you have at least two DNS servers.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=236)** So I'm going to go ahead and leave this alone and say yes, I am going to make this a DNS server.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=241)** Same thing goes for the Global Catalog server.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=246)** We don't necessarily have to have more than one but it's a good idea to have more than one.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=251)** In a very large environment, I may not make every one of my domain controllers a DNS server and a Global Catalog server, but since this is literally just the second server, yes, I do want these to be both DNS and Global Catalog servers.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=265)** And then the third option is if I want this to be a read-only domain controller, I could check that box, that is allowed.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=271)** I'm not going to do it 'cause I'm going to show that to you in a different video.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=276)** I also have to choose what site I want to go ahead and make this domain controller be a part of.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=283)** Now, if you were in a larger enterprise environment and you had multiple physical locations, part of the configuration process is you create multiple sites and then we would go ahead and we would choose what site this domain controller was going to be in.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=300)** Okay, in this case, there aren't any.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=303)** It's just default for site name.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=304)** It's the only option we have because that is not something I have configured here.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=309)** So let's go ahead and put in the DSRM password, put it in twice, there we go.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=317)** I'm going to go ahead and click on Next.
>
> **[5:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=320)** Here is my warning about the DNS allegation.
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=323)** We already discussed this in the previous video so I'm going to click on Next, and now I need to choose where am I going to replicate the Active Directory Services database from?
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=334)** Now there is an Install From Media option.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=336)** Now, this has to do with if you're installing, let's say the first domain controller in a certain location and you didn't have a good connection to another domain controller that you could export out to media and you could install from media, but typically, what you're going to do is you're going to go ahead and you're going to replicate from another domain controller.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=356)** You can leave it at any domain controller.
>
> **[5:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=357)** That's my recommendation because then it'll just pick the best one that it has the best communication with or if you know you want to replicate from a specific domain controller, you could select it.
>
> **[6:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=367)** Now, in this case, the only one I can select is this DC-1 'cause that's the only one that I have.
>
> **[6:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=372)** So I'm just going to leave it at any domain controller and click on Next.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=376)** Here, again, is where we're going to specify the physical location, our database log files and SYSVOL.
>
> **[6:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=381)** Going to leave the defaults and click Next.
>
> **[6:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=383)** We're going to review our options.
>
> **[6:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=386)** Next.
>
> **[6:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=387)** It's going to do our pre-requisite check just like it did on the Forest Route domain controller and you'll see here, I get the same warnings, but most importantly at the top, all pre-requisite checks pass successfully and we can click install to begin the installation and we are off and running.
>
> **[6:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=404)** So at this point, it is going to take a few minutes to go through this process and will involve a reboot so I'll be right back with you.
>
> **[6:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=413)** Go ahead and pause the video if you're following along with me and I will resume as soon as this process has completed.
>
> **[7:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=420)** Okay, the installation process has completed, the system has rebooted, I've logged back in as the Landon Hotel administrator and we can see here that we now have the Active Directory Domain Services role and we can also see it by going up to the Tools menu up in the top here, and notice that we have all of our Active Directory utilities.
>
> **[7:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=442)** So that is how you install an additional domain controller to an existing domain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5)
> **Env Vars:** dns (9), dsrm (1), sysvol (1)
> **Prerequisites:** install (5), you need to have (1), configure (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (5)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)

#### [Installing read-only domain controllers](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=0)** - [Instructor] There are situations that you may find yourself in to where you may have a remote [[Microsoft Office|office]] in your organization that has enough users that makes it worth justifying have a domain controller locally in that office so that they can log in quickly and easily, but you don't have any IT or security staff out in that remote office which would help keep that domain controller secure, which is something of importance, so you don't want that machine to be compromised 'cause a lot of damage can be done to your environment if somebody gains access to a domain controller.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=35)** So, the solution that [[Microsoft]] gives us is something called a read-only domain controller, which is a domain controller which can provide full services to the users in that remote office, but no configuration changes can be made, all right?
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=53)** So, what I'm going to do is show you the process of creating a read-only domain controller.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=57)** Now, I will tell you that the process is pretty straightforward, especially if you were watching the previous two videos on installing the other domain controllers because the process is going to be very similar in the sense that we're going to go ahead and first install the [[Active Directory]] Domain Services role, which I've already done here on DC Three, okay, and you'll see here that it's just sitting here waiting for me to go ahead and promote this server to being a domain controller, so let's do that now.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=84)** We are going to make this an additional domain controller in an existing domain.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=89)** The name of that domain is going to be landonhotel.local, and the credentials are going to be landonhotel\administrator and the password, click OK, and Next.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=105)** I will point out, by the way, one configuration thing I did do to DC Three here, just like I did with DC Two before we made it an additional to make sure.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=114)** I set up its IP configuration so that it was pointing to DC One as its DNS server so that it would find the landonhotel.local domain.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=123)** All right, so here is where now have the option to make this a read-only domain controller or RODC, so I'm going to check that box.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=132)** Now, what we also need to decide is whether we want this server to also be a DNS server and whether we want this server to be a global catalog server.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=142)** Now, what you choose really is going to depend on your overall environment.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=149)** I find that very often because it is read-only, we want to have a very small footprint so we would not make it a DNS server or a global catalog server, and in fact, very often, this particular server might even be installed, which is simply Server Core, so it doesn't even have a graphic interface to it, but, in this case, we have the graphic interface already installed, we're going to take away DNS and Global Catalog, make this a read-only domain controller.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=174)** This is where you would choose the site, and you'd put in whatever that site location is, and then put in our DSRM password and click on Next.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=186)** Now, this next screen here is a little bit different than anything that we've seen before.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=190)** Okay, there's a few different things we need to pay attention to.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=193)** First of all, you'll see, at the very top here, it says Delegated administrator account, and it says Not provided, and basically, what this is is because this is a read-only domain controller that is potentially going to be out in some remote office, you could go ahead and choose a specific account of somebody who is out in that remote office that you want to delegate as being the administrator, maybe somebody who you want to be able to call you and then that you can walk them through management processes and things like that.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=224)** All right, so you would choose that account here, where it says Select, I'm not going to do it, I don't have any other accounts in my environment, there's nothing set up here, this is just for demonstration, but that's how you would do it.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=235)** Now, the next section here, it says Accounts that are allowed to replicate passwords to the read-only domain controller.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=241)** Again, the idea here is that you have a potential security hole.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=246)** So, you don't necessarily want the entire active directory database to be out on this read-only domain controller.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=252)** You may want to only have the passwords for the users who are actually going to be out in that remote office.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=259)** So you'll notice that, by default, there's this Allowed RODC Password Replication Group.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=265)** What you would do is you go ahead and you take all your users who work out in that remote office, and you'd make them a member of that group.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=272)** You could also, by the way, click on Add and just add some other group that you've actually created for that office, that's another option.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=279)** You'll also notice that there are some accounts that are denied from having their passwords replicated to the read-only domain controller, and those are some of our very secure accounts that we don't want to have compromised if this machine was to be somehow attacked, so I'm going to go ahead and then click on Next.
>
> **[4:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=298)** Now, we have to specify where we're going to install from, we're going to say from any domain controller, Next.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=303)** Our default paths are fine, Next.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=306)** Review the options, Next.
>
> **[5:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=308)** It's going to go through a prerequisite check, guess what it's going to find, okay, it's going to find that we have our typical warning here, but it's going to say, All prerequisite checks passed successfully, so we can go ahead and click Install to begin, and we are off and running, and just like with the other videos where I installed the other domain controllers, this will take a few moments, it will involve a reboot, so I'm going to go ahead and I'm going to speed things up, and I'll be right back with you as soon as this process has completed.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=339)** Okay, so the process has completed, the system is rebooted, I've logged back in as the Landon Hotel administrator.
>
> **[5:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=347)** I can see here that I have the role of Active Director Domain Services, I can click on Tools, and I can see that I have my different utilities, all right?
>
> **[5:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=357)** There's nothing else very specific that I can go into very quickly here to show that this is a read-only domain controller.
>
> **[6:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=365)** There are places I could go to show you, but for this most part, we know it is an RODC because we chose that during the point of installation.
>
> **[6:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=375)** All right, so that's how you install a read-only domain controller when you have a need for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (9), [[Active Directory]] (2), [[Microsoft]] (1)
> **CLI Commands:** make (6), find (5)
> **Env Vars:** dns (4), rodc (3), dsrm (1)
> **Prerequisites:** install (4), set up (2), prerequisite (2)
> **UI Navigation:** click on (4), go to (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** just like (2)
> **Warnings:** warning (1)


### 2. Active Directory Administration Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing AD DS with Active Directory Administrative Center](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=0)** - Managing the [[Active Directory]] domain services environment is one of the most common tasks that many IT professionals will perform.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=9)** So understanding what administration tools are available is really important.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=15)** So I'd like to take an opportunity here to go through and demonstrate some of these tools that are available for managing active directory.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=25)** Now, to do this, I want you to know I am connected to DC one. Okay. Which was our forest root domain controller but it really doesn't matter.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=32)** You can do it on any domain controller.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=34)** All right, and right here in the server manager, if I go to the upper right to the tools menu, you'll see here that there are a number of active directory related tools.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=44)** Now, the one I want to show you in this video is the very first one the active directory administrative center.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=50)** So I'll click on that and it opens into our active directory administrative center tool.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=58)** Now the very first thing I want to mention about this tool is that it is a little bit different than pretty much most of the [[Representational State Transfer (REST)|rest]] of the tools that I will show you.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=67)** And the reason is because it's a newer tool and it was designed and built off of [[Windows]] [[Powershell]].
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=75)** What it's really doing is, is performing the functionality with Windows powershell so that you have that equal administrative functionality whether you're doing it through a script or whether you're doing it through this tool.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=87)** Now, another thing I want you to notice about this tool is that just kind of the overall design and look of it.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=92)** Okay. You may notice that this tool looks a lot like another tool that we've already seen in this course.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=99)** And I will click back to that tool real quick.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=101)** All right, and watch carefully Cause you may not even notice the screen change, but if I pop back over here to the server manager notice the similarity you have similar color coordination similarities were over on the left margin.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=114)** Okay. We actually have our little navigation margin over there as well as some common tasks and things like that.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=121)** All right, so let's jump back over to the active directory administrative center.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=124)** Again, we have our navigation over on the left and we have some common tasks over on the right.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=130)** All right, and so now another thing that I do want to mention about this particular tool is you would use this tool for basic functionality, doing things like managing users and groups and organizational units and stuff like that.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=147)** But another thing that you can do is you can do things like create fine grained password policies or do things like enable the active directory recycle bin.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=156)** Now these are things that in the past if you go all the way back before [[Windows Server]], 2016 you know, you go all the way back to like server 2008 or before that those are things that you could only do through a command line based tool.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=169)** Okay, and was a lot more difficult than this graphical tool that we have here.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=174)** So there is a little bit of functionality that we have added to this particular tool.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=181)** All right, so one other thing that I want to show you about this tool, again, I'm not going to go into too many of the very specific functions cause we'll get into that in other places.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=192)** But over on the left we have our little navigation and you'll see here here's our landonhotel, that local domain.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=198)** So if I click on that here, we can see the actual domain and we can see all the different containers that we have.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=206)** All right So let's click on the user's container for instance.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=209)** Now I want to show you something that happens when I go into the user's container.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=215)** All right, so I click to go in there.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=217)** First of all, I see all of the users and groups that are in that container, but something else that is happening, you may have noticed, it just popped up is over on the left, in that navigation pane, it'll actually remember the places that you've recently been to. Okay, so here we have that users container.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=238)** All right, and let me go somewhere else.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=241)** So let's go back to landonhotel.local and let's click on domain controllers.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=246)** Here I can see my three domain controllers, DC, one, two and three Right. DC three being our read only domain controller.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=253)** And again, you'll notice that over on the left, I now have a link for the domain controllers container.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=259)** Now what's cool about this is how quickly and easily you can navigate to the places that you commonly go.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=265)** So if I wanted to quickly get to my users container I don't have to go back to landonhotel or anywhere else.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=271)** I can literally just click on users and it'll take me back to my users container.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=275)** And if I want to get to my domain controllers, well I can quickly click on that link and jump to my domain controllers container.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=282)** All right, so that is kind of the high level basics of what the active directory admin center looks like.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=291)** And again, some of the specific functions, we'll save that for videos that are on how to do those specific functions.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=297)** But you just need to know that this is how you navigate this particular tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (8), [[Windows]] (2), [[Powershell]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Windows Server]] (1)
> **UI Navigation:** click on (6), navigate to (1)
> **Tools:** powershell (2), command line (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Speakers:** - managing (1)

#### [Managing AD DS with Active Directory Users and Computers](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=0)** - [Narrator] All right, so the next tool that I'd like to show you is something called [[Active Directory]] Users and Computers.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=6)** So here, we're in the server manager on DC1, I'm going to go up to the Tools menu.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=11)** You'll see the fifth item on the list is Active Directory Users and Computers.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=14)** I'll click on that, and it takes me into that particular tool.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=20)** Couple things I want to pull out here real fast.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=23)** First of all, you'll notice it looks very different than the Active Directory Administrative Center that we just looked at in the last video.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=31)** The reason is because I had mentioned that that tool was built on [[Powershell]].
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=36)** Well, this tool was actually built long before [[Windows]] PowerShell, and believe it or not, even though it is probably the most commonly used tool out there, it's also the older and more limited tool than what we have with the Active Directory Administrative Center.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=56)** The two tools can be used for pretty much all the same functions.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=62)** All right, so it's a matter of choosing, do you want to use the newer tool, the Active Directory Administrative Center, or the old school tool of Active Directory Users and Computers.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=71)** Now, one more quick little side note, and then I'm going to show you a couple things here, is I mentioned this is one of the most widely used tools out there.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=79)** Now, there's a couple reasons for this.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=80)** One reason is because you have older Administrators who use what they're already used to.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=87)** This is the tool's been around since Windows 2000, so it's been around for more than two decades, and so this is what they're used to.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=97)** Why go to a new tool?
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=98)** I mean, yeah, there's a couple of functions that you can only do in the new tool, but outside of that, why not use what you're already familiar with?
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=106)** Now, the second reason that I find when I pull various IT users that they like this one better, even the newer IT users say they like this one better.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=115)** I have a hunch on why that might be.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=117)** And it might be because they're all learning how to do their jobs from old school Administrators, like me, who are actually teaching on this older tool.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=128)** So I just want to really emphasize.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=130)** It does not matter which way you go with it.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=132)** If you have a tool and it's able to be used for a certain function and you like it, there is no right or wrong.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=138)** All right. So let's actually take a look at this.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=140)** First of all, let's look at the navigation.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=142)** You'll notice that the navigation looks a little bit different.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=145)** This looks more, again, old school.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=147)** Looks like the old Windows Explorer, right?
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=150)** Where you just go ahead and have this hierarchy.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=152)** Another thing I want to show you is if I went to Users and I'm going to right click on this Administrator user, you'll notice that I get this long context menu that pops out.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=162)** Looks, again, just like what we've seen in Windows for many, many, many years.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=167)** And if I go to the Properties window, we get a very familiar looking properties window where we have a whole bunch of different tabs of information.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=178)** Very old school look to it.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=180)** Now, just to kind of show you the difference, let me jump back over to the Active Directory Administrative Center for just a moment.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=189)** So here we have the Active Directory Administrative Center.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=192)** And I'm in the Users container and here's my Administrator account, you'll notice if I right click on it, I have a much more specific, much more direct context menu.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=205)** And if I go to the properties of that Administrator account, you'll notice that the window itself looks very different than what we were previously used to.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=217)** This is a window to where I can actually scroll down through all the different properties.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=224)** Okay, so I can either scroll, or you'll notice on the left, if this is to make it similar to the tabs, you have account and you have this account information.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=231)** If I click on Organization, it'll just jump me down to this Organization section, Member Of section, Password Settings, Profile.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=239)** It's just taking me up and down without having to scroll.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=244)** So, again, just want to show you that is what the newer tool looks like, versus what we have in the older and original Active Directory Users and Computers tools.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=257)** And I do have to admit, for me, personally, because I am an old school Administrator, I've been doing this, not just since Windows 2000, but even before Windows 2000.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=267)** This is the tool that I am most familiar with, I can navigate the quickest without having to give much thought to it, and I do tend to use more often.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=276)** I will try to be fair to you in this course, and when there's something that you can do in both tools, I will try to show you in both tools so that you can learn for yourself and decide for yourself which tool you find is easier for managing Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (10), [[Windows]] (6), [[Powershell]] (2)
> **UI Navigation:** click on (4), go to (3), scroll down (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** powershell (2)
> **Analogies:** just like (1), similar to (1)
> **Env Vars:** dc1 (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)

#### [Active Directory Domains and Trusts overview](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=0)** - The next tool I'd like to show you is called [[Active Directory]] Domains and Trusts.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=5)** So here again in the server manager on DC-1 I'm going to go up to the tools menu.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=9)** And the second option on the list here says Active Directory Domains and Trusts So we'll click on that.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=15)** And I want to tell you that while I'm going to explain to you what you would do in this particular tool as far as its main purpose I'm going to also tell you that I can't really demonstrate it for you right now because of the way my environment is set up.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=32)** Now, the first thing is, let's take a look here we have our Active Directory Domains and Trusts.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=36)** You can see our landonhotel.local domain If I go to expand this, watch what happens, nothing.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=41)** When I click the little arrow to expand it the arrow goes away.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=45)** Why? Why is because this is where I would see a hierarchy of the different domains that I may have in my environment.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=54)** Now, why would that be?
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=55)** Well, the reason why is because this is how I could manage trust between those domains and trust has to do with if users in one domain can access resources in another domain.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=67)** All right? So, because I only have the one domain, well I can't really show you specifically how to configure the various trusts.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=76)** That is something that would be covered in, you know more advanced enterprise level courses.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=82)** When you take a look at the enterprise level of active directory.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=86)** So let's take a look here.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=89)** What can I show you?
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=90)** What can we do here?
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=92)** Well, the first thing is if I click on landonhotel.local, and if I right click and I go to its properties, I do want to just show you that if I go to trusts, this is where we would go ahead and configure a trust relationship, okay?
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=109)** With domains that are trusted by this domain and then domains that trust this domain.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=115)** Okay. Again, there's nothing I can do.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=117)** I mean, I can click on new trust but it's going to take us nowhere because I have no other domains and no other forests to go ahead and configure these trusts.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=125)** So what else can I do in this tool?
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=127)** Cause there are a couple other things we can do if right up at the top here on the actual words Active Directory Domains and Trusts If I right click on those words, I can go ahead and there's an option here for operations master.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=141)** Now that's something I am going to show you in other videos in this course where we're going to take a look at how you can go ahead and change your operations master roles.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=150)** Well, that can be done through this tool.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=153)** And then we have our forest functional level that we could raise.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=157)** Now you may remember when we installed our domain controllers, we had to choose a functional level for the domain and for the forest.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=166)** Okay? And if we had selected an older functional level, right?
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=170)** We left it at the default, which was [[Windows Server]], 2016.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=173)** That's as high as we could go.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=174)** Well I could raise that forest functional level using this tool.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=179)** And if I wanted to raise the functional level for the domain, well then you right click on landonhotel.local, and you have the option for raising the domain functional level.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=191)** Okay? So just again, nothing I can actually do or show you here because my functional levels are already as high as they can go and I can't show you anything as far as setting up a trust because we don't have multiple domains to configure that with, but it is important that you know, that this is the tool where you would perform these actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5), [[Windows Server]] (1)
> **UI Navigation:** click on (4), go to (3)
> **Prerequisites:** configure (4), set up (1)
> **Definitions:** is called (1)
> **Speakers:** - the (1)

#### [Active Directory Sites and Services overview](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=0)** - The next tool I'd like to show you is called [[Active Directory]] sites and services.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=5)** So back here in our server manager on DC-1, I'm going to go ahead and click on the tools menu and you'll see the fourth option here is Active Directory Sites and Services.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=14)** I will click on that and open it now.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=18)** Here in this tool I want to tell you that what the main functionality of this particular tool is to go ahead and manage your sites, which is a representation of the different physical locations that you may have in an enterprise organization.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=37)** And the idea behind sites is to go ahead and to allow for efficiency when it comes to user authentication and access to resources.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=48)** So let's take a quick look at what we have here.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=51)** I do want to emphasize this is just going to be an overview.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=54)** I don't have an environment configured here to really emulate multiple locations.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=60)** I just have my one simple location, my one simple network, and I only have my single domain.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=65)** Well, let's see what we have.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=66)** If I go ahead and expand Sites you'll see here that I have three main things here.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=71)** I have my Inter Site Transports.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=72)** I have my Subnets and then I have my actual sites themselves, which you'll see here, there's only one site.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=79)** And the name of that site is actually Default First Site Name.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=83)** Now that is literally just what it sounds like.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=86)** It's the name of the Default First Site.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=88)** You could rename it.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=91)** You could always go ahead and you click on that, you can right click and you could say rename and I could go ahead and type in another name for this site but keep in mind that there is certain functionality that the Default First Site will always have no matter what you name it.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=108)** Additionally, if I were to expand that particular site, you'll see there's a container for servers.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=115)** And if I click on that container you can see that I have my three servers DC-1, 2 and 3 that are all in that site.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=123)** If I wanted to create a new site I could go ahead and I could right click on sites.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=129)** And I could say new site, right?
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=132)** So I'm just going to put DemoSite.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=134)** You have to pick a link.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=136)** I'm going to do this very quickly.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=137)** No real details.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=139)** Oh, it's mad at me because I put a space in there.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=141)** So DemoSite, there you go.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=144)** And now it's just telling me that there's other things you need to do to finish configuring it.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=148)** And that's why I'm trying to save you here.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=150)** This is a very quick, quick, quick overview demonstration.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=153)** We're not actually setting this up.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=155)** I just wanted to show you that we do have the ability to have an additional site.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=161)** There are no servers there now.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=163)** Well, if I were to take one of my servers and literally click and drag it over into the other place and it gives you a little warning on what's going to happen.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=171)** Things might not work the way you previously expected.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=174)** I just want to show you now I only have DC-1 and 2 in my Default First Site Name and I have DC-3 over in my DemoSite.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=182)** Again, this is not something that you should just do willy-nilly the way I just did it.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=188)** There needs to be significant planning behind multiple sites like this.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=193)** Now besides our actual sites, so we have our sites down here.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=197)** We have our subnets.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=199)** All right.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=200)** So if we have multiple sites, what we could do is we could create a subnet that ties in with that particular site, right?
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=210)** So literally the IP subnet that you use in one location may be different than the IP subnet that you use in another location.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=219)** And what you would do is you would configure those in the subnets container, right?
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=223)** You would actually create a logical subnet that matches to say what IP subnet matches with your individual sites.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=232)** We also have another thing here called Inter Site Transports.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=236)** You have two options, IP and SMTP, not going to go into the detail of what they mean other than to tell you that those are two different [[Forms]] of communication that could be used to allow for replication to be configured between the different sites.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=254)** So I know that was a lot.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=256)** If you're new to this, just understand that this particular tool, I wanted you to at least can have it in the back of your mind for when you get deeper into your learnings about active directory and get into your enterprise type level stuff that you'll know that this is where you go to configure your different sites and your subnets as well as replication between the different sites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[Forms]] (1)
> **UI Navigation:** click on (5)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** keep in mind (1), warning (1)
> **Prerequisites:** configure (2)
> **Env Vars:** smtp (1)
> **Speakers:** - the (1)

#### [Active Directory schema overview](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=0)** - The next tool I want to show you is an interesting one.
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=3)** It's called the [[Active Directory]] Schema and the way we access it is not going to be the way we access all of the other tools.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=12)** And there's actually a good reason for that.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=14)** So let's start off with where we are.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=17)** Right here we have the server manager on DC1.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=19)** I'm going to go up to the tools menu.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=20)** This is where we've gone for everything else.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=22)** And we have all of our tools here.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=24)** They're alphabetical, Active Directory.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=28)** Oh, there's no Active Directory Schema.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=29)** It doesn't exist there.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=30)** Right. Okay.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=32)** So how do we get to this tool?
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=34)** Well, the way we get to the tool is by creating what's called a custom MMC.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=38)** All right.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=39)** So I'm going to go ahead and click on Start and I'm going to type in CMD to open up a command prompt.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=46)** Now you don't necessarily have to do this to get to a custom MMC I just want to show you.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=51)** I'm going to go ahead and just type in MMC.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=55)** And at that point, look what it does.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=57)** It actually opens up an actual, you know just blank console, right?
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=62)** And it looks like many of our other tools.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=64)** And in fact, we can go ahead and we could create a custom tool here by going to File and then go to Add / Remove Snap-in.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=73)** Now, this is where you can add all the different tools and you can create your own custom tool.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=78)** So let's say, for instance, and I know this is kind of a small window here, so let's say Active Directory users and computers.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=84)** We're going to add that and Active Directory domains and trusts, add that, Active Directory sites and services, add that, right.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=90)** We've looked at all of these tools already.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=94)** I'm going to put all three there and I'm going to click "OK".
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=97)** And look what we've done.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=99)** We've created one single tool that gives us the ability to go ahead and access all of those other tools all in one location.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=112)** Okay. So that's what this custom MMC is.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=116)** But wait a minute, that's not what we're here to talk about.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=119)** We're here to talk about the Active Directory schema.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=122)** You'll notice if I go back to add or remove snap in, those were the only Active Directory tools.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=126)** There was no Active Directory schema option there.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=129)** All right.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=130)** So let's go ahead and close this tool and no we're not going to save the settings.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=135)** What I need to do here is I need to type a command into our command prompt window.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=141)** And that command is regsvr32.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=145)** And to be specific, it's R E G S V R 32 space S C H M M G M T.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=157)** Okay.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=157)** So then you're going to register for 32 schema management.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=161)** What you're doing is you're registering this DLL and making it available for use.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=167)** So I'm going to go ahead and hit enter and you'll see here that it says that has been succeeded.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=173)** So I'll click "OK".
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=175)** Now I'm going to type MMC again to take me back into just a generic console here.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=182)** And this time when I go to file and add remove snap in, you'll see here, if I expand this over, I now have an option for the Active Directory Schema.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=193)** All right.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=194)** Now I want to show you that even though I registered that schema management tool, you still don't find it here on this tool's menu.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=203)** Okay. It's not there.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=205)** That's why we still have to go back to our custom MMC our custom [[Microsoft]] Management Console to add the Active Directory Schema.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=213)** So I'm going to go ahead and add that in, click "OK".
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=217)** And now here I have my Active Directory Schema and if I expand it, you'll see here that I have two sections.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=223)** I have what's called classes which is all the classes of the different types of objects that exist in Active Directory.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=233)** And we have attributes, which is an extremely extensive list of all the various attributes that we may find within all the various different objects within Active Directory.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=246)** So let's put this all together.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=249)** This is a tool that is not easily accessible and there may be a reason for that.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=255)** Well, there is.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=256)** And the reason is because the schema is the actual design or the actual makeup of all objects and attributes of those objects within Active Directory and modifying something in this schema could have extreme consequences because you're completely changing the design of your Active Directory database.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=281)** So as much as I've now shown you how to get to this tool the reality is is unless you have a very specific reason and you know exactly what you're doing, don't do it.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=292)** Don't come here, don't mess around with it.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=294)** 99.999% of the time that you are going to modify the Active Directory schema, it will be done programmatically by a developer, okay, through some other utility that requires it.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=312)** Okay? So at this point, if I wanted to have access to this tool, all I would do is I would go ahead and I would save this tool.
>
> **[5:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=320)** Right, and I could save this in a specific location.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=324)** Right? So here's like [[Windows]] Administrative Tools and you'll see the, the hierarchy of where that is.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=330)** Okay. It's showing you it's in our Windows Administrative Tools.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=333)** And if we wanted to we could just call it Active Directory Schema.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=339)** Okay. And then save it there.
>
> **[5:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=341)** If we wanted it somewhere else, I mean, heck I could put it out on the desktop if I wanted to, and I could save the tool there.
>
> **[5:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=347)** Now I'm going to actually hit, cancel, and I'm going to close this without saving the settings to that particular console because I don't need to go back there.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=356)** I just wanted to show you that's where you would go and access the Active Directory Schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (19), [[Windows]] (2), [[Microsoft]] (1)
> **Env Vars:** mmc (6), dc1 (1), cmd (1), dll (1)
> **CLI Commands:** snap (3), find (2)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** go back to (2)
> **Tools:** command prompt (2)
> **Versions:** 99.999 (1)

#### [Managing AD DS from the command line](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=0)** - Besides all the different graphical tools that we have looked at that are available for managing [[Active Directory]], we also have a couple of command line based tools that we have as an option.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=15)** Now, first of all, here on DC1 in the server manager if I go up to the tools menu you'll notice that there is an active directory.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=23)** It's the third item here, active directory module for [[Windows]] [[Powershell]].
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=27)** All right.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=28)** And if I click on that, all it really does is it takes me into what looks like a command prompt window, but it's actually a PowerShell window, right?
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=35)** I have PS at the beginning.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=37)** That's how you know that you're in a PowerShell window as opposed to a traditional command prompt window.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=43)** And yes, there are various PowerShell different commandlets that we could go through and different functions that we could do to manage through Windows PowerShell.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=52)** And in fact, some of the other things that I've already shown you actually had the ability to click on script.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=60)** You could have actually seen what the PowerShell script would look like, but something else that I want to show you is believe it or not, you can actually manage active directory from a traditional command line.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=71)** So if I click on start and I type in CMD just to go into a regular command prompt, right?
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=77)** You'll notice there is no PS, right?
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=78)** We just have our prompt now.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=81)** I'm going to go ahead and I'm going to type in the command DS for directory services, add space, forward slash, question mark.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=92)** And that's how you ask for help on a command in a command prompt window.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=98)** Okay. So the starting point here is DSadd.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=101)** I know that this is a command that can be used to add objects to directory services.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=108)** So let's take a look at the help.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=109)** I'm going to hit enter, and let's see what we have here.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=112)** We have a help that comes up and you'll see here that it says as a description, this tool's command adds specific types of objects to the directory.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=122)** All right. Now, what are the different commands?
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=123)** Well, we can do DSadd computer, contact, group, OU, user, or quota.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=128)** Okay. These are the different objects that can be added using the DSadd command.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=134)** All right, but besides DSadd, and by the way, you'll see here it says for additional help, you could do things like so let's say I wanted to add a user.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=143)** I could put DSadd user, slash question mark and get the help there.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=149)** But more specifically, let's go down and look at the bottom of this help.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=155)** And this is why I chose to do it this way is it's showing you that there are a number of directory service command line tools and the different help that you can get on them is always with slash question mark.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=167)** But besides DSadd, we also have DSget which is what we could use for just simply displaying objects.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=177)** We could do DSmod for modifying or making changes to existing objects.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=182)** We have DSmove for moving objects, DSquery for finding objects to match a search criteria.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=192)** That would be used in a script you would query and then perform an action on that query.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=197)** And then the last one which sometimes confuses people is DSRM, which stands for directory services remove or removing objects or what's actually deleting objects.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=209)** Okay. There is no DS delete.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=211)** It's DSRM.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=214)** So again, I'm not going to really go into any detail.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=217)** In other videos, I can show you how the command can specifically be used for a specific function.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=223)** If I'm teaching you how to perform that function.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=226)** Same thing with Windows PowerShell.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=228)** But I just want you to know that those are the other management tools that you have.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=234)** Those are your command line based tools.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=237)** And the real benefit to using a command line tool, you may think, well, why would I ever want to do that?
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=242)** Well, the real benefit is because then you can write scripts which will help with automation.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=247)** So while it feels like a command line tool is a less intuitive and lengthier way of managing, the reality is is that if you do set it up once and then you save it you can create a script which will actually then simplify.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (7), [[Active Directory]] (4), [[Windows]] (3)
> **Tools:** powershell (7), command line (6), command prompt (4)
> **Env Vars:** dsrm (2), dc1 (1), cmd (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - besides (1)


### 3. Flexible Single Master of Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [FSMO overview](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=0)** - [Instructor] When working with [[Active Directory]] domain controllers in [[Windows Server]] 2022, you need to understand that, for the most part, just about all the domain controllers are created equal or they all have full functionality.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=13)** Now, there is an exception to this.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=15)** We've already learned about read only domain controllers.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=18)** Okay?
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=19)** So that is a domain controller that does not have full functionality.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=22)** But the [[Representational State Transfer (REST)|rest]] of them are full functionality domain controllers.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=25)** And the reason why is because we work in what's called a multi-master replication topology.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=31)** Now, back in the old days, and when I say the old days, I'm talking going all the way back, like to [[Windows]] NT, back in the 1990s, we used to have what was called a primary domain controller and a backup domain controller or we'd have one primary domain controller and then a series of backup domain controllers.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=47)** That was not multi-master.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=49)** You had one master, you had a single master and then you replicated out to everything else.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=55)** Well now, since we have multi-master replication and all the domain controllers are pretty much equal there are certain functions of being a domain controller that we still need to have a single master.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=70)** And that's where something called a FSMO, F-S-M-O, or flexible single master operations, comes into play.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=78)** All right.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=79)** So let me show you what the five FSMO roles are in Windows Server 2022.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=89)** To do this, we're going to go to a few different tools.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=92)** The first one we're going to do, and by the way, right now I'm in the server manager and I'm on DC1.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=98)** All right.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=99)** So we're going to go ahead and go to the tools menu and we're going to select active directory users and computers.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=106)** In this tool, I'm going to go ahead and I'm going to right click on LandonHotel.local and I'm going to select operations masters.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=117)** Now in this window, there are three operations masters that we can look at.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=122)** Now, the reason there are three, I mentioned there were five total, but there's three here, is because these are the three domain level operations masters, meaning in every domain, there will be one master for that domain.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=138)** What are those?
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=139)** Well, the first tab that I have here is R-I-D, or RID, and this is the RID master.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=147)** And if you just read the explanation, it says this operation master manages the allocation of the RID pools to the other domain controllers.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=155)** Now, what is a RID pool?
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=156)** RID stands for relative ID.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=159)** So when you're handing out the unique IDs to every object that's created in the active directory, you need to have an ID for the domain itself and then a relative ID within that domain.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=172)** And that pool of relative IDs is all managed by one server.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=177)** Okay?
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=178)** And that's the RID master.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=179)** The next one we have here is PDC, which stands for PDC emulator.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=183)** And it says that this emulates the functions of a primary domain controller in pre Windows 2000 clients.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=191)** Okay, now time out a minute here.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=192)** You might be thinking, wait a minute.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=194)** That's, you know, over 20 years ago.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=198)** Who's going to still have a pre Windows 2000 client out there?
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=202)** I suppose it's always possible, but it's not very realistic.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=206)** But I want you to know that even without any pre Windows 2000 clients, the PDC emulator also does perform other functionality, things like time synchronization and stuff like that, that is more modern than pre Windows 2000.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=221)** And then we have our infrastructure master, which ensures consistency of objects for inter domain operations.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=229)** Okay, so the representation of objects from other domains.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=233)** Now, in all three cases you'll notice that the operations master is DC1.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=239)** Okay?
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=240)** There's infrastructure master, DC1.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=241)** PDC emulator, DC1.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=243)** RID master, DC1.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=245)** Now why is that?
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=246)** Because by default, the operations master is always the first domain controller installed in the domain, which in this case was DC1.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=256)** All right, let's close out of here and close out of this tool.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=260)** Now go to another tool, active directory, domains and trusts.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=265)** Now I'm not going to click on the domain.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=266)** I'm going to click on the actual words, active directory domains and trusts.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=270)** I'm going to right click and go to operations master.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=273)** And I'll see one operations master here.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=275)** And it says, this is the domain naming operations master, okay, or sometimes it's just the domain naming master, which ensures that the domain names are unique within the forest.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=286)** And it says only one domain controller in the enterprise, or in the forest, will perform this role.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=292)** So this is a forest-wide FSMO.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=296)** And again, it is currently DC1.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=299)** Why?
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=300)** Because it's the first domain controller in the forest, is where it gets installed by default, which, again, was DC1.
>
> **[5:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=308)** All right, now the last FSMO is one that's a little bit trickier to get to.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=313)** It's what's called the schema master.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=315)** And in order to get there, you have to go to the active directory schema, which I did talk about in another video.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=321)** So very quickly, I'm going to go ahead and click on start and go to my command prompt, open up an MMC.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=328)** In that MMC, I'm going to do this very quickly 'cause we covered this in another video, add remove snap in, active directory schema.
>
> **[5:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=335)** Okay.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=336)** Okay.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=337)** So now that you have a tool where you can see the active directory schema, if you right click on the words active directory schema and you go to operations master, this is where you will see the schema master.
>
> **[5:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=353)** This is the one master copy of the schema itself and it will be hosted on one domain controller in the forest.
>
> **[6:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=364)** So this is another forest-wide role.
>
> **[6:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=366)** And again, by default, it is going to be DC1.
>
> **[6:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=370)** It's going to be the first domain controller in the forest.
>
> **[6:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=374)** So as a quick review, we have five FSMOs.
>
> **[6:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=378)** We have two that are at the forest level, one is the schema master, the other is the domain naming master, which we can see through active directory domains and trusts, and then we have three that are at the domain level.
>
> **[6:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=391)** We have the RID master, the PDC emulator and the infrastructure master, all right?
>
> **[6:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/fsmo-overview?u=76281980&t=397)** So those are the five FSMOs and you need to be familiar with what they are, forest or domain level, and where you can see which domain controller is that particular master.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (10), [[Windows]] (5), [[Windows Server]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dc1 (9), rid (8), pdc (5), fsmo (4), mmc (2)
> **UI Navigation:** go to (7), click on (5)
> **Definitions:** is a  (3), stands for (2), is an  (1)
> **CLI Commands:** snap (1)
> **Cross-References:** we covered (1)
> **Tools:** command prompt (1)
> **Prerequisites:** you need to have (1)

#### [Transferring a FSMO role](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=0)** - [Instructor] So now let's take a look at how to transfer a FSMO role from one domain controller to another.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=12)** Before showing you this I will mention that it is recommended that you don't do this unless you have something that is specifically motivating you to do so.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=24)** In other words, it's installed on one domain controller by default and unless there's a very specific reason, like, you know you're going to decommission the machine or maybe that machine is already having some other issues or whatever, it's actually recommended that you leave it alone.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=40)** But if you do ever have to transfer it let's take a look at how to do it.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=43)** It's a pretty simple process.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=46)** So for this demonstration, first of all I want to tell you that I am on DC2.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=52)** Okay, and the reason I'm on DC2 is because we know that all the FSMOs by default were on DC1.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=58)** So if I want to transfer to DC2, I need to be on DC2.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=62)** And we're just going to go ahead and transfer one of our domain FSMOs.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=67)** So I'm going to go up to the tools menu here in the server manager.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=70)** And I'm going to select [[Active Directory]] users and computers.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=76)** From here, I'm going to go ahead and I'm going to right click on Landonhotel.local and go to my operations masters.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=84)** Now here for all three of them, we can see, right here's the RID master.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=88)** We can see the current operations master is DC1 but there's an option.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=93)** It says to transfer the role to the following computer click change.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=96)** And the computer it populates there is the domain control that you're on.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=100)** That would be DC2.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=102)** It would look the same if I click on PDC.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=104)** Right, we have DC1 is the current.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=106)** We could change it to DC2.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=108)** And infrastructure, currently DC1, new ones DC2.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=112)** So let's just pick the first one RID master.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=114)** I'm going to go ahead and click on change.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=117)** It says, are you sure you want to transfer this role?
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=121)** I'm going to say yes, I do want to do this.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=123)** And they took all about a moment and it said the operations master role was successfully transferred.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=128)** So I'll click okay.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=130)** And sure enough, you'll notice that for the RID master it now says that the operations master is DC2.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=136)** If I go to PC emulator, it's still DC1.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=139)** Infrastructure still DC1.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=142)** Okay, so transferring a role is actually quite easy.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=146)** Now the me give you just a very quick explanation of what basically took place behind the scenes.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=151)** And by the way, if you're following along sometimes you'll get a little spinning cursor for a few moments.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=157)** It doesn't necessarily happen instantaneously like it did here.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=159)** In my case it did cause there's very little that it had to transfer.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=163)** What basically happens is when you click I want to transfer this DC2 goes to DC1 and says, hey, DC1 I would like to be in charge of those relative IDs for a while.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=177)** And DC1 says huh, okay, no problem.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=180)** I was tired of doing it anyway.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=182)** So it makes sure DC1 looks at the latest and greatest database of relative IDs.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=187)** It copies it over to DC2 and then, you know, sends it over.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=193)** And then it basically hands over baton and says, here you are now the master.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=197)** And DC2 says great, thank you very much.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=199)** I will honor this role with all the integrity in the world.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=204)** So obviously I'm kind of glorifying it with a little bit of a story there, but that's all that really takes place with a transfer when you have both systems up and running and they can still talk to one another.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=217)** All right, so a very simple way to transfer the FSMO role when you have both systems up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1)
> **Env Vars:** dc2 (11), dc1 (10), rid (3), fsmo (2), pdc (1)
> **UI Navigation:** click on (3), go to (2)
> **Best Practices:** recommended (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Seizing a FSMO role](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=0)** - [Speaker] So we know that transferring a role from one domain controller to another is very easy.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=5)** When both domain controllers are up and running and can communicate with one another.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=11)** But what happens if the domain controller that's hosting one of these roles has gone down?
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=17)** Let's say we've completely lost that domain controller.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=20)** Well, what do we do?
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=21)** Well, what we do in that instance is we do something called seize the role when you can't nicely transfer the role.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=30)** So let's take a look at this.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=32)** First thing I want to show you, I just want to show you it's up on my screen.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=34)** It says here the virtual machine DC-1 is turned off.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=38)** Okay, I just wanted you to see that, that I've shut down DC-1.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=42)** There is no communication to it.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=45)** Now let's go ahead and jump over here to DC-2.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=48)** Here in the Server Manager, I'm going to go up to Tools.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=50)** I'm going to select Domains and Trusts.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=53)** And you'll notice right away, I already get an error.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=56)** It says you can't modify domains trust information 'cause the PDC emulator cannot be contacted.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=62)** Okay, so it's already telling me we've got issues.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=64)** So I'm going to click on OK.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=67)** And now it's going to go ahead and open up Domains and Trusts.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=71)** And I'm going to right click on [[Active Directory]] Domains and Trusts, and I'm going to go to the Operations Master.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=78)** Now you'll notice that in the past, other videos when I did this exact same thing, you know, window opened up like instantly.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=86)** It was like, boom, there was the window.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=87)** Now I'm sitting here looking at this spinning cursor.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=90)** And the reason I'm looking at this spinning cursor is because it's trying to contact the operations master for this role and it can't, okay?
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=101)** So it's going to take just a moment for it to realize that it cannot contact that operations master.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=108)** And then once it's realized that, the window will pop open anyway.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=111)** So just as we've seen in other videos, I'm going to go ahead and I'm going to kind of speed things up.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=116)** And if you're following along go ahead and pause and... And then there we go.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=120)** The window has popped up.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=121)** All right?
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=122)** So you'll see here, it says that the current domain naming operations master is DC-1.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=129)** And if you want to transfer it to DC-2, oh wait, look at that.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=134)** The message is different.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=136)** It says the current operations master is offline.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=139)** The role cannot be transferred.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=141)** So you see that Change button that we did when we were transferring before?
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=144)** It's grayed out.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=145)** We can't do it.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=146)** It's not an option.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=148)** All right?
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=149)** So let's go ahead and close out of this window.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=151)** So now what do we need to do?
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=154)** We need to go to a command line tool called ntdsutil.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=159)** So I'm going to go ahead and click on Start.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=161)** I'm going to type C M D.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=164)** Takes me to a command prompt window.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=167)** Here in the command prompt window, I'm going to type in N T D S U T I L right?
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=172)** ntdsutil.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=173)** And hit Enter.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=174)** And watch what happens.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=176)** It now takes me to a special ntdsutil interactive prompt.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=181)** Now, if you need help using these tools and you don't have everything memorized, all you have to do to get that help is hit question mark and hit Enter.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=188)** And now you can see all the different options that this utility has available to you.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=194)** Now there's a lot of things you can do with ntdsutil.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=196)** But the one that we specifically want to do is this one that says Roles.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=199)** Manage the NTDS role owner [[Tokens]], right?
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=203)** So I'm going to go ahead and type in roles and hit Enter.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=207)** And you'll see, it takes me into something that says fsmo maintenance.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=211)** Now again, with fsmo maintenance, I'm going to hit question mark and we can see all the different options.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=217)** We have the ability to do something called connections which we're going to actually do in just a moment.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=223)** But before we get to that, let's take a look here.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=226)** We have Seize and we have five different Seize options for the five different roles.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=233)** Okay?
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=234)** And then we also have Transfer.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=236)** And we have five different Transfer options for the transferring of those roles.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=239)** Okay, so first thing is, if the systems were online, besides the graphical way of transferring a role, you could also transfer fsmo this way.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=249)** Now, before we can seize or transfer any role, we have to first make a connection to a specific domain controller.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=256)** Even though I'm on a domain controller right now, we still have to connect to it.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=261)** So what I'm going to do is I'm going to go ahead and type in connections.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=266)** Okay, and that takes me to this server connections.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=269)** Again, I can hit question mark, and you see here that I can connect to a domain or I can connect to a server.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=275)** So I'm going to go ahead and I'm going to say connect to server and then I need to put in the name of server.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=283)** So I'm going to put in DC-2.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=287)** And now I am connected to DC-2.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=292)** Now the next command I'm going to put in is quit.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=295)** Now this one sometimes confuses people because you think, oh you're going to quit completely out of the utility?
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=300)** No, you'll notice for the quit command under the help here, it says return to the prior menu.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=306)** So when I hit quit, that just takes me back to the fsmo maintenance menu.
>
> **[5:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=311)** And now what I'm going to do is I am going to go ahead and seize.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=317)** Okay, so S E I Z E naming master, right?
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=323)** That's the one we were just trying to do the domain naming master.
>
> **[5:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=325)** We're going to seize the naming master and hit Enter.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=330)** And it says, are you sure that you want server DC-2, 'cause we connected to it, to seize the domain naming role with the value below?
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=339)** Okay, and so basically it's going to go ahead and seize it and I'm going to say yes, I want to do this.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=345)** Now, it is going to take just a moment 'cause the first thing it's going to try to do, it says you're attempting safe transfer of domain naming fsmo before seizure.
>
> **[5:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=353)** Okay, when you tell it to seize the role, well first it's going to say, wait a minute, wait, let me see if we can do this with a nice transfer first.
>
> **[6:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=360)** And the reason why is 'cause you have to keep in mind that whoever this new domain controller is, may not have the latest and greatest information, okay?
>
> **[6:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=370)** So you want to try to get that through a transfer first.
>
> **[6:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=375)** But in the event that that transfer is not possible, which it did actually error out that it could not do the actual transfer, it goes ahead and it successfully has now seized it.
>
> **[6:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=388)** Now how do we know that it seized it?
>
> **[6:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=390)** Well, let's go ahead and let's close out of our command prompt window.
>
> **[6:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=394)** Back here in Active Directory Domains and Trusts.
>
> **[6:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=396)** If I go into Operations Master, take a look.
>
> **[6:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=401)** The domain naming operations master is now DC-2.landinghotel.local.
>
> **[6:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=406)** All right?
>
> **[6:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=407)** So it did indeed take over the role.
>
> **[6:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=409)** In other words, what happened is DC-2 says, hey DC-1, I want to take over the role.
>
> **[6:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=415)** Hello DC-1.
>
> **[6:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=417)** DC-1 doesn't answer.
>
> **[6:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=418)** DC-2 says, okay, that's it.
>
> **[7:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=420)** I'm taking over the role.
>
> **[7:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=421)** DC-1 seems to have disappeared for whatever reason.
>
> **[7:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=425)** So I am now going to, you know, use the latest and greatest information I possibly have available to me.
>
> **[7:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=431)** And I am now going to be the master.
>
> **[7:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=433)** Now the one last thing that I am going to mention about the current state of affairs when it comes to seizing a role.
>
> **[7:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=440)** In the old days, all right?
>
> **[7:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=442)** Back with like [[Windows]] 2000.
>
> **[7:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=443)** Back when they first created this process.
>
> **[7:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=446)** If you had domain controller that was the master of any of these particular fsmo's and it went down and you had to seize the role, you had to strategically figure out how to bring that machine back up or never bring that machine back up.
>
> **[7:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=462)** Now, in today's world, that's not an issue.
>
> **[7:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=465)** If I were to boot DC-1 back up again, automatically DC-1 and DC-2 would both look at each other and both realize that they have the master.
>
> **[7:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=474)** They would compare notes to see who has the actual latest and greatest information, right?
>
> **[8:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=480)** Who has the more up to date database.
>
> **[8:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=482)** And then the other one would go ahead and relinquish the role automatically so that you're back to a single master.
>
> **[8:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=489)** This all happens behind the scenes.
>
> **[8:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=490)** You don't have to worry about it at all.
>
> **[8:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=492)** All right?
>
> **[8:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=493)** So as you can see, fsmo's can be seized even if the original operations master has gone to down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Tokens]] (1), [[Windows]] (1)
> **Tools:** command prompt (3), command line (1)
> **UI Navigation:** click on (2), go to (2)
> **Env Vars:** pdc (1), ntds (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [speaker] (1)


### 4. Active Directory Permissions

[↑ Back to Table of Contents](#table-of-contents)

#### [Delegating permissions manually](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=0)** - [Instructor] Managing the [[Active Directory]] environment is one of the most common tasks that an IT professional may perform.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=8)** In fact, there can be so much that has to be done when it comes to managing Active Directory that you may want to choose to delegate out some of the administrative tasks out to other people.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=24)** As your enterprise grows, you don't want to have to manage every aspect of that enterprise all by yourself.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=32)** So you're going to want to go ahead and delegate some of the permissions to go ahead and perform certain administrative tasks out to other people.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=40)** So let's take a look at how we can do this.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=42)** So here, I'm on DC1 and I'm in the Server Manager, so I'm going to go up to the Tools menu and select Active Directory Users and Computers.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=52)** Now before we get into actually looking at the delegation of permission, I do want to point out a couple of things that I did behind the scenes.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=62)** So mine will look a little bit different than yours.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=65)** The first thing is is inside landonhotel.local, if I go to Users, there is a user that was created that you won't have.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=72)** It's not there by default.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=73)** It's called Junior Admin, okay, just simply create a user called Junior Admin.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=78)** Nothing special about this user, just a regular ordinary everyday user.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=82)** The other thing is you may notice that I have a new container or an organizational unit inside landonhotel.local called Customer Service.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=89)** And inside Customer Service, I went ahead and just kind of emulated creating three users, very basic names, User One, Two, and Three, created actually a fourth user called Customer Service Manager, right?
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=100)** It's just an example, trying to emulate a typical environment.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=105)** So let's go ahead and let's figure out how we can go ahead and grant some permissions to our Junior Admin who we want to be in charge of certain aspects of the customer service department, or the people in the customer service department.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=123)** So if I go to the properties of this Customer Service container.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=128)** I'm going to right-click and go to Properties the tab that I want to look for is one that says Security.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=135)** All right, we see General, Managed by, COM+, oh, wait a minute.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=139)** There's no tab there for Security.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=141)** Well the reason why is because that is considered to be an advanced feature.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=145)** So let me close out of here.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=147)** I'm going to go up to the View menu, and I'm going to select Advanced Features.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=153)** Okay, when I do that, first of all, you'll notice everything about this particular tool is more extensive now.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=160)** Okay, there's a lot more items here.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=162)** Now I don't want you to worry about everything else that's here.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=164)** We're still going to focus on our Customer Service organizational unit.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=167)** I'm going to right-click and go to Properties again.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=170)** And this time, you'll notice that there are more tabs, including the Security tab.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=177)** Now this Security tab works similar to how pretty much the Security tab works on any file or folder, anything like that, in the sense that we have certain permissions and we can allow or deny those permissions.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=192)** Now one way we could have given Junior Admin permissions would be to go ahead and make that user a member of a group that already has administrative permissions over things, like, for instance, the Domain Admins.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=208)** You'll notice that the domain admins, well, has full control over everything with this particular container.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=215)** The problem is when you make a user a member of Domain Admins group, they are going to get a level of permission that exceeds everything that you may want to allow them to do.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=231)** Okay, so you want to do what's called the Principle of Least Privilege, which means you only give them the permission they need.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=236)** All right, so what we're going to do is, first of all, I'm going to show you on this list, Junior Admin does not exist.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=242)** All right, what we want to do is we want to add Junior Admin, but the problem is if I click Add here, all I'm going to do is add and get these very basic permissions.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=256)** So I'm going to go to Advanced for special permissions so I can get very, very specific with what I'm going to go ahead and add.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=265)** So now, in Advanced here, I'm going to click on Add and the principal that I'm going to add is going to be, I'm just going to type the [[Microsoft Word|word]] junior, Check Names, and there's Junior Admin.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=275)** I'll click OK.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=277)** And are we going to Allow or Deny?
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=279)** We're going to go ahead and Allow certain permissions.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=283)** And then, is it going to be on This object and all descendant objects within this object?
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=288)** Or maybe just all the objects within the object?
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=291)** Or there's a whole lot of different choices, I'm going to actually scroll all the way down to the bottom and I'm going to say specifically the Descendant User objects.
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=301)** Okay, so we are specifically saying Junior Admin is going to have some level of control over the Descendant User objects.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=309)** Now I'm going to go ahead and leave the very basic List contents, Read the properties, and Read the permissions.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=315)** All right, we're going to leave that alone.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=317)** But I'm going to go ahead and I'm going to add something else here, which is the ability to Reset the password for these users, right?
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=324)** That's our hypothetical scenario here is we want Junior Admin to be able to reset passwords for all the users in customer service.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=333)** All right, so I'll go ahead and click OK.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=336)** And I'll click OK once again.
>
> **[5:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=338)** And you'll now notice that Junior Admin is now on the list and only on the list for a special permission.
>
> **[5:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=347)** So if I wanted to see what that permission is, I got to go back into the Advanced, and when I look for Junior Admin, I can see here that Junior Admin has the ability to reset passwords.
>
> **[6:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/delegating-permissions-manually?u=76281980&t=360)** All right, so that is an example of how you can go ahead and manually delegate a certain level of control out to another user to help you manage Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (5), right-click (2), click on (1)
> **CLI Commands:** make (2)
> **Env Vars:** dc1 (1), com (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Using the Delegation of Control Wizard](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=0)** - [Instructor] Now, as we saw in the previous video, assigning specific permissions to specific users can be a fairly lengthy and tedious process.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=12)** But I want you to know that [[Microsoft]] has actually given us a tool to help simplify that process for some of the common tasks that we might want to delegate out and it's called the Delegation of Control Wizard.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=27)** All right.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=28)** So the first thing I want to do is I'm going to actually stop viewing advanced features.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=33)** Okay, I'm going to stop viewing those, because I want to show you that that is not necessary in order to access this particular Wizard.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=41)** What I'm going to do is here in my customer service organizational unit we had already delegated control manually for junior admin to be able to reset passwords, but I'm going to now change the scenario a little bit.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=53)** I'm going to say that we want to allow the customer service manager the ability to go ahead and reset passwords for these users.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=60)** All right.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=61)** So what I'm going to do is I'm going to right click on customer service and you'll notice the very first option there is delegate control.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=69)** So I'm going to click on that and it takes me into the Delegation of Control Wizard.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=73)** I'm going to click on next and it says select one or more users or groups to whom you want to delegate control.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=80)** Who do you want to give this control to?
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=82)** So I'm going to click on add and I'm going to put in cust and let's see if that's enough.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=87)** Yep, there it is, customer service manager.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=90)** Okay.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=92)** Next.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=93)** And now here is a list of some common tasks that you may want to go ahead and delegate out to somebody.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=102)** And you'll notice the second one on the list says reset users, passwords, and force password change on next login, so we're going to go ahead and check that box.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=111)** We're going to say that's what we're going to allow the customer service manager to do.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=114)** Next and finish.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=118)** Now I need to have the advanced features back on.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=120)** So let's go back to view and say advanced features.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=123)** And now let's go to the properties of customer service and go security.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=130)** You'll see here that we now have the customer service manager on the list who has special permissions.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=136)** And if I go into advanced we can see customer service manager has the same ability that junior admin has, the ability to reset password.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=147)** Okay?
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-the-delegation-of-control-wizard?u=76281980&t=148)** So that I think is a much easier way to go ahead and delegate certain permissions by using that Wizard as opposed to the longer way that we saw to assign that same level of permission to our junior admin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Cross-References:** as we saw (1), previous video (1), go back to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Creating a custom management tool](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=0)** - [Narrator] Now one problem that can come up when you delegate certain administrative privileges out to non-IT staff is that, well, they don't know where to go or how to perform the function that you've delegated them the ability to do.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=20)** So example is the one that we were just using here where we went ahead, and we said that the CustSvc Manager could go ahead and reset passwords for the other customer service users.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=33)** Well, the problem is is the CustSvc Manager doesn't work in IT and doesn't know where to go, doesn't know what [[Active Directory]] Users and Computers is, and doesn't know how to reset the password once they get there.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=46)** So how do we solve this?
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=47)** Well, I'm going to show you how you can fix this by creating what's called a custom MMC.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=56)** So let's go ahead and let's close out of Active Directory Users and Computers, and I'm going to click on Start.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=63)** I'm just going to go to a command prompt, but really, I'm going to the command prompt only so I can type in mmc.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=71)** This opens up a customizable [[Microsoft]] Management Console.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=75)** We actually saw this in another video when we went in to see how to get to the Active Directory schema.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=81)** But I'm going to show you how we can take this to step further.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=84)** So the first thing we need to do is we need to add a snap-in into this particular tool.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=88)** So I'm going to go to File, and say, Add/Remove Snap-in, I'm going to select Active Directory Users and Computers, 'cause that is the tool where you reset passwords, and click OK. The problem here is that, well, this is no different than just going into Active Directory Users and Computers.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=106)** So we need to simplify this.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=108)** Now, because it is a Customer Service organizational unit that we said can be managed, I'm going to go ahead, and I'm going to right click, and I'm going to select new window from here.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=121)** So now, we have a much more simplified view, right?
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=127)** We just have Customer Service, and we have all of our customer service users.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=131)** But I'm going to make this even easier.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=136)** And so I'm going to right click on the Customer Service container, and I'm going to say New Taskpad View.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=143)** So we're going to turn this into a different view, that's a little bit easier for non-IT folks to look at.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=150)** So in this wizard, I'm going to go ahead and click on Next on the welcome screen.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=154)** I can choose whether I want a vertical list, which is where I'll see all my users on the right and my tasks on the left, or I can do a horizontal list, where I get a list of all my users and tasks on the bottom.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=164)** Now, if you're sitting here squinting and you're trying to fix out how to see this window right here, you can't.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=170)** Even on my big monitor I'm looking at, this is all fuzzed out.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=174)** But I will tell you that once we're done, you'll see how easy and how wonderful this looks.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=179)** All right, I'm going to go ahead and leave the horizontal list.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=181)** Either one is fine, but we'll do horizontal.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=183)** So I'm going to click on Next.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=185)** And now, I can choose whether I want to use this taskpad on everything or just the selected item.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=192)** So I'm going to say just the selected tree item, just the Customer Service container.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=197)** Click on Next. We'll give it a name, we're going to call this Reset Passwords, click on Next.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=207)** And now, that I've created the new taskpad view, I need to actually create a task to put into that view.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=213)** And that's why by default, the box is checked, saying add a new task when this wizard closes.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=219)** So I'm going to leave that box checked, then, I'm going to click Finish.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=222)** Now, in the background, you could probably see that this view has already changed, we'll ignore that for the moment.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=227)** Let's create a new task. Click on Next.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=231)** It is a menu command, right?
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=233)** Resetting password is something we access via a menu.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=235)** So I click on Next.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=239)** And now, what is the actual item that I want to be able do?
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=244)** I'm going to say Reset Password. Next.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=247)** The name is just fine, Reset password. Next.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=251)** We can either choose some of the built-in icons that they have here, or we could even do our own custom icon if we wanted to go ahead and upload an icon.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=260)** I'll just go ahead and take a default, I'll just use the keys.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=263)** Seems like a decent icon. Click on Next.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=267)** And if I wanted to create an additional task, I could check the box saying when I finish run this wizard again.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=274)** But I only want the one task, 'cause we're trying to create a very simple tool here.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=277)** So I'm going to click on Finish.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=280)** And now, I have a very, very basic tool called Reset Passwords, right?
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=285)** So I seek a Customer Service on the left, we see our users here in the middle.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=289)** And, in fact, I'm going to even take this a step further.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=292)** I'm going to go up to the View menu, and I'm going to go to Customize, and I'm going to get rid of the Console Tree, and the Action pane.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=304)** So I got rid of the view to the left and the view to the right, and all I'm left with is just this one box, one simple box that says Reset Passwords.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=314)** I have a list of users.
>
> **[5:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=316)** And if I were to click on a user, so let's say User One has forgotten their password, you click on the user, and down at the bottom, you get a link that you click on to go ahead and reset the password for that user.
>
> **[5:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=329)** Here is a tool that pretty much anybody can use.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=333)** You do not have to be an IT Administrator to understand how to use this particular tool, right?
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=340)** Any user, anywhere, should be able to understand this particular tool.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=345)** And all I have to do at this point is just do a Save As, and I would give this tool appropriate name, and I would store it in a location where that user, whoever you're delegating the permissions out to, could access easily.
>
> **[6:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=361)** So maybe put it on the desktop for the CustSvc Manager, or maybe in their Start menu or something.
>
> **[6:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=368)** So that is how you can create a custom tool to simplify certain delegated tasks to non-IT use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5), [[Microsoft]] (1)
> **UI Navigation:** click on (12), go to (3)
> **CLI Commands:** snap (2), make (1)
> **Definitions:** is a  (3)
> **Tools:** command prompt (2)
> **Env Vars:** mmc (1)
> **Speakers:** - [narrator] (1)


### 5. Managing Active Directory Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating user accounts](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=0)** - [Instructor] There are many different types of objects that we will find in [[Active Directory]], and one of the most common objects that you'll find is something called the User Account.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=11)** The User Account object is basically Active Directory's representation of an actual user, so an actual human on your network.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=22)** And you use that account to go ahead and assign different rights and permissions to be able to access resources or perform certain functions in your network.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=34)** Let me show you how to go ahead and create one of these user accounts.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=36)** And as I'd promised earlier in the course, I'm going to show you how to do it using a couple of different tools that are very similar as far as what you can do with them, and then you can decide which one you like better.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=48)** The first thing I'm going to do is here in the Server Manager, I happen to be on DC1 by the way if you're following along.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=53)** I'm going to go up to the Tools menu, and I'm going to go to Active Directory Users and Computers.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=61)** I'd mentioned earlier that this is the older tool that we used to use, and we've had this around since [[Windows]] 2000.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=70)** Let's take a look at what we would do here.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=71)** In Active Directory Users Computers, you can see that we have our domain landonhotel.local.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=76)** And then we have a series of containers to where we could go ahead and create a user.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=84)** For instance, there is the Users container, but you don't have to put a user in the Users container that's just a built-in container.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=92)** In another video in the course, I had shown that I had created this Customer Service container so that we could go ahead and put our customer service users in there.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=102)** Wherever it is that we want to go ahead and add a user, what we're going to do is we're just going to right-click on the container, I'll use Customer Service since we're already on it.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=110)** Just right-click on the container.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=112)** And then on the menu, hover down to New and select User, and you'll get the New Object User window, and you just basically have to fill in the fields.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=124)** For the first name I'm going to put in, Demo, and then I'm going to go to the last name and I'm going to say, User.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=131)** You'll notice as I put in the first name and the last name it auto populates the full name as being, Demo User.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=137)** Then, we have our user login name.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=139)** Now you need to decide on a user name, naming convention that you're going to go with, a very typical one might be something like first initial, so D, and then the last name, so D User.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=150)** You do need to consider when looking at that naming convention that as the company grows you might have more than one D User, so you'll have to figure out what to do with that.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=158)** But anyway, that's the user login name.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=161)** If you are using multiple UPNs, then you would have a drop down here where you could choose the different UPN suffixes that you would add to it.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=171)** And then, it also auto populates the pre-Windows 2000 name or the netbios name, so D User, click Next.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=180)** Then, we just need to put in a password for the user.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=183)** I'm going to go ahead and put in a password, you got to put it in twice, and then we have some options when it comes to that password.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=189)** The first one is, User Must Change Password at Next Logon, and that is checked by default and the reason why is 'cause that's actually good practice.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=196)** You go ahead and as the administrator you create the user, you assign them some fairly simple, temporary password that you will send it to them.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=206)** And the first time they log in with that password that you send to them, they will be forced to then change to a password that only they know about.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=215)** That's one option you could do.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=216)** Another option you could do is that the user cannot change the password.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=220)** If you want to assign the password and users just have to stick with whatever you assign, you could do that, that is not a good recommended practice.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=229)** You could choose that password never expires, and that would mean if you had any kind of a password policy that says you have to do a new password, let's say every 30 days or something, that would not apply to this user.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=240)** And another option we could do is that the account is disabled, and that's not necessarily related specifically to the password.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=248)** But this is if you want to create the account but not have the account active until a future time when you actually activate it.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=255)** This would be pretty much for the purpose of pre-staging user accounts for let's say, new hires that aren't actually ready to log in yet.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=265)** Those are some of the options that we have available.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=268)** We're going to go ahead and click on Next, and then Finish, and just like that, we now have a user called Demo User.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=275)** That's how you do it in Active Directory Users and Computers.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=280)** Now let's go back over to the server manager, go up to the Tools menu, and select Active Directory Administrative Center.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=287)** That's the newer tool that you could also do similar actions to Active Directory Users and Computers.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=295)** Let's take a look, how would we go ahead and create a new user here?
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=299)** Well, let's go to the same place, let's go to that Customer Service container.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=303)** I'm going to go ahead and click on landonhotel.local, and then here we have Customer Service.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=309)** And if I right-click on Customer Service, I can say, New, User.
>
> **[5:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=316)** And the process is similar but you can see that the screen is very different.
>
> **[5:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=322)** We're going to go ahead and put it in a first name, so we're just going to say, let's call this one, Test, for the first name, last name is going to be, User.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=330)** Again, you'll notice that the full name does populate to Test User, same as what we had in the other tool.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=337)** Here we have the user UPN login.
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=340)** I want to show you something that's a little bit weird in my opinion about how this works and that is, you'll notice that we have the little asterisk here, this is a required field.
>
> **[5:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=352)** And then we have an asterisks down here, this is a required field.
>
> **[5:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=354)** It almost tempts you to jump down here to the User SamAccountName, which is the pre Windows 2000 name.
>
> **[6:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=362)** If I jump down here and I put in, tuser, first initial, last name, it doesn't end up populating up here.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=371)** And you do actually want to have your full UPN login.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=376)** But if you were to go to the UPN login and you put, tuser, there, it does populate down here.
>
> **[6:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=382)** And really, this is the same as what we did over in the other tool.
>
> **[6:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=387)** It's just that, because they put this asterisks there it's a little bit weird, it tempts you to go to the wrong place.
>
> **[6:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=394)** Anyway, so we've put in the login name of, tuser.
>
> **[6:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=397)** Again put in the password, I have to put it in twice of course 'cause you want to make sure you don't mistype it.
>
> **[6:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=404)** Here's an option that we didn't see automatically which is Protect from Accidental Deletion.
>
> **[6:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=409)** That's an added option that we have here that did actually exist over in the other tool, but you had to do it manually after creating the user.
>
> **[6:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=418)** Over on the right, we have our account expiration, which again, these are things that you'll find in the property sheet of a user over in the other tool.
>
> **[7:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=426)** For Password Options says, "User must change password at next log on," that's the default.
>
> **[7:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=431)** Or we could say, nope, let's go to the other Password options which is where we can use the [[Microsoft]] Password or smart card.
>
> **[7:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=438)** It wasn't even an option when creating a user over there.
>
> **[7:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=441)** We could again do, Password Never Expires, and/or that the user cannot change the password.
>
> **[7:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=446)** And I shouldn't say and/or 'cause if it's going to be User Cannot Change Password, it doesn't ever expire either.
>
> **[7:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=452)** These are some of the options that we have here.
>
> **[7:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=455)** Another thing that we can do at the point of creation when using this particular tool is, you can go ahead and populate a whole lot of other things.
>
> **[7:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=464)** One of the main things might be making them the member of a group right away at the initial creation, whereas in the other tool, this is all stuff you would have to do after creating the user.
>
> **[7:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=475)** We go ahead and we can scroll down, you see there's a lot of stuff that we can do.
>
> **[7:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=478)** But mostly we just go ahead and click Okay.
>
> **[8:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=482)** And just like we saw in the other tool, if I go into Customer Service, you can still see all the users we had over before but we also now have Test User.
>
> **[8:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=492)** As you can see there are pros and cons to either of these tools, whether it is the Active Directory Administrative Center, or Active Directory Users and Computers.
>
> **[8:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=503)** But that's how you can create a user account in Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (10), [[Windows]] (3), [[Microsoft]] (1)
> **UI Navigation:** go to (7), right-click (3), click on (2), scroll down (1)
> **Env Vars:** upn (4), dc1 (1)
> **CLI Commands:** find (3), make (1)
> **Analogies:** just like (2), for instance (1)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (1), recommended (1)
> **Cross-References:** earlier in (1)

#### [Moving user accounts](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=0)** - [Instructor] So now let's take a look at how to move user account objects.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=6)** Now, before I show you how to do it, let me just talk briefly about why you might want to do it, or what happens if you move a user account.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=15)** Basically, when a user exists in a particular container in the [[Active Directory]] hierarchy, two main things that happen with that account.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=25)** Number one, you could have some form of delegation of control over that user, right?
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=31)** You might have somebody who is able to manage objects within a container, right?
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=38)** So here, as an example, in Active Directory Users and Computers, looking at the customer's service container and there may be a user who has been delegated some level of authority over the customer service container.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=50)** So that means all the users in that container are under that person's authority.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=54)** And if you move the user to a different container, that authority may change.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=59)** The second thing has to do with group policy.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=61)** You assign group policy settings to apply to certain containers.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=67)** And when you move a user from one container to another, well, those policy settings may also change.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=73)** All right, so let's take a look at how to do this.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=75)** And just like with creating the account, I'm going to show you how to do it both here in Active Directory Users and Computers, as well as in the Active Directory Administrative Center.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=84)** So, here in Active Directory Users and Computers, there are two main ways that you can move a user.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=94)** One way, which I think is just the most straightforward and easy way, is to simply just click and drag, right?
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=101)** So here's my demo user, currently sitting in the customer service container, and I'm a going to go ahead and I'm just literally going to click and I'm going to drag that user account over to the users container, and I'm going to let go.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=114)** Now it gives me a little warning, and it's basically warning me everything I just told you about what happens if you were to move a user.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=120)** So it's saying certain things may change.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=122)** So I'm going to say, yep, I'm aware of that.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=124)** I'll click Yes.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=125)** And just like that, demo user is gone from customer service.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=129)** And if I go over to the users container, you'll see that I now have, down at the bottom here, demo user.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=136)** Okay, so the user is there.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=138)** If I go back to customer service, let me show you the other way that you can move a user, and that would be to right click on the user and select Move and then pick where you want to move that user to.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=154)** So I'm going to say the users container again, click Okay Test user has disappeared.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=159)** Go to the users container, test user has appeared over there.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=164)** Now the other thing that is nice that you can do in this particular tool is that if they're together, you could hold the Shift key.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=171)** So if you hold Shift, you get a whole bunch of highlighted all together, or if they are spaced apart, you can highlight one and hold the Control key and highlight multiple items, but not together.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=184)** All right, so what I want to do is I want to highlight both demo user and test user.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=189)** With both of them, I could either right click and do move again that way.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=194)** Or, with them both highlighted, I could actually just simply click and drag, and say yes to the warning.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=202)** And look, they're both gone from the users container and they both are right back in the customer service container where they were before.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=210)** All right, so you do have the ability to move more than one user at a time.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=216)** All right, so let's jump over into the Active Directory Administrative Center.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=220)** So over here, we're still, again, looking at the customer service container and we have all of our users here.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=228)** And in this case, it's pretty much the same thing, but the one thing you cannot do is you cannot click and drag, right?
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=236)** So if I try to click on demo user and then drag that user somewhere, it doesn't go anywhere.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=242)** Nothing happens, okay?
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=245)** The only thing we can do is right click and then select Move, and then pick the container we're going to move to, and click OK.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=256)** Demo user has disappeared.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=259)** I'm going to take test user and I'm going to do the same thing.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=262)** Move test user over to the users, disappeared.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=266)** If I go over to the users container, here's demo user and here's test user.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=273)** Now, the reason I did both of them is 'cause what I do want to show you is that even though you can only use the menu option, you do have the ability to still use the Control key or the Shift key.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=285)** Okay, so there are actually, it says right down here, two users are highlighted right now.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=289)** If I scroll back and forth, you can see they're both highlighted right now.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=293)** And then I could either right click on either of them, or over on the right, I want you to see there is actually a task pane over here, where I could click Move and then put customer service, click OK.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=305)** Both of them have disappeared from here, and if I go back to the customer service container, they are both back over there.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=312)** So while you don't have the click and drag capabilities over here in Active Directory Administrative Center, you do have the ability to go ahead and highlight and move multiple users at the same time.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=326)** All right, so that's how we move users around in Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (8)
> **UI Navigation:** click on (3), go to (1)
> **Warnings:** warning (3)
> **Cross-References:** go back to (2)
> **Analogies:** just like (2)
> **Speakers:** - [instructor] (1)

#### [Using user account templates](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=0)** - [Instructor] The process of creating user accounts, especially in a large enterprise environment, can become quite tedious.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=8)** I should say not only in a large enterprise, but maybe if you're in a growing company where you're doing a lot of hiring, a lot of new users, or maybe there's a lot of turnover and a lot of new users coming in.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=18)** So I want to show you that there is a way to somewhat help simplify the process of creating user accounts based upon the fact that users who work in a similar capacity in your organization are going to have similar needs.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=38)** And so therefore their accounts should be set up almost identically.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=43)** So the idea here is we're going to use what's called a user account template.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=48)** So here in [[Active Directory]] Users and Computers, we are looking at the Customer Service container here.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=55)** So here's the scenario I want you to think about, and that is customer service is a department where we're hiring users all the time, and those users pretty much always need the exact same access to the exact same resources and have the same permissions and everything else.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=71)** So what I'm going to do is create a template for the future creation of customer service users.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=77)** To do this, I'm just going to create another user account.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=80)** I'm going to right-click on Customer Service, select New, User.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=87)** And what I'm going to do is go ahead and name this user.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=92)** I'm going to say Customer Service User, and then for the last name, I'll put Template.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=99)** And you'll notice that the full name now is Customer Service User Template, and I'm actually going to go do something that is really common to do with a template, and that is, with the first name, I'm going to start it off with an underscore.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=111)** Underscore Customer Service User Template.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=114)** Okay, so that's the full name.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=115)** The user login name really doesn't matter.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=118)** I'll just put ctemplate just to give it a name.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=121)** I'll explain in a moment why that doesn't really matter.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=124)** I'm going to click on Next.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=125)** I'm going to go ahead and design a password, probably want to make it fairly secure, but what I definitely want to do is check this box that says Account is Disabled.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=135)** And the reason is because this is an account we never actually will have anybody logging in as.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=143)** And that's why the username doesn't really matter, is because no one will ever log in using this account.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=148)** This is strictly for the future creation of other user accounts.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=153)** So I'm going to go ahead and click on Next, and Finish.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=157)** And here we go, we now have an account that says Customer Service User Template.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=162)** Now I want to explain why I put that underscore in the name, and the reason is because by putting an underscore at the beginning of the name, alphabetically it's always going to appear at the top, and that way you can find your templates quickly and easily up at the top, because if you end up in an environment where we now have hundreds or maybe thousands of customer service users in this window, you want to be able to get to the template very quickly and easily.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=187)** So how do we use this template?
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=189)** Well there's a couple things.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=190)** First of all, I'm going to right-click and go to the Properties of this template and I'm going to point out that there are a lot of different tabs of information that can be populated, and they should all be populated, right?
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=206)** You should go through and populate every piece of information that is pertinent to what would be for any customer service user.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=216)** So an example might be the Member Of tab.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=218)** What groups is this user going to be a member of?
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=224)** That means any customer service user, as opposed to if we just go back to that General tab, putting something like a telephone number or an email, that doesn't make sense because that's not going to be the same for all users.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=237)** So the idea here is there are some settings which you'll learn about in different courses and different videos and this and that.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=244)** Anything that is pertinent to every user, you populate it.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=248)** Next, let's now go through the process of, I want to go ahead and create a user using this template.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=255)** All I have to do is right-click on the template and select Copy.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=261)** And now I get a wizard that is very similar to the other New User wizard.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=269)** So we're just going to put Another User, auser, Next, and I'll put in the password.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=279)** Notice, by the way, that the check boxes match what we already had with the other user, so you have to decide whether you want this account to be disabled or not.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=290)** If you want this one to be enabled, just clear that check box, click on Next, and Finish, and just like that, we've created another user.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=296)** While you can't really see it here, I will tell you that this new user I just created, this one called Another User, it has all the same properties, if we would've populated any, as our original customer service user template.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=312)** So that's the idea of using the template, is we can go ahead and copy it and everything will carry over.
>
> **[5:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=318)** One quick side note that I'm going to mention is that this is something that can only be done in Active Directory Users and Computers.
>
> **[5:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=325)** You cannot do this in the Administrator Center.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=328)** There is no Copy option.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=330)** You can certainly create the template account over there, but you can't actually do the copying over there.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=337)** That option just doesn't exist.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/using-user-account-templates?u=76281980&t=339)** So that's how we can use a user account template to help create future user accounts more efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2)
> **Exercise Files:** template (16)
> **UI Navigation:** right-click (3), click on (3), go to (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)

#### [Creating a group](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=0)** - [Narrator] I had mentioned previously, that one of the main purposes for having user account objects in [[Active Directory]] is for the purposes of assigning rights and permissions to our users in our environment.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=13)** Well, you have to keep in mind that a large enterprise where you may have, you know, tens of thousands of users that the assigning of rights and permissions individually to each user, that could be a lot of work, right?
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=24)** So it is recommended that you assign permissions, not on a user by user basis but using another type of Active Directory object, which is called a group account.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=36)** The idea behind a group account is that if you create the account and then you make users a member of that group.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=46)** And any permissions that you assign to the group will also then be automatically assigned to all of the users, okay.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=55)** So that way we can assign permissions to groups of users at a time instead of one by one.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=61)** So let's take look here in active direct users computers, and I'm also going to show you in the active administrative center how to create a group account.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=70)** So we're looking at the customer service container and you can see here we have a bunch of user accounts.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=76)** And it's starting to add up, right?
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=77)** Just through demonstrations, we're getting more and more users here.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=80)** It's starting to add up.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=81)** So let's create a group for these users.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=84)** So I'm going to right click on the container where I want to create the group account, and then I'm going to select New, Group.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=92)** Here, I get a very simple little one page wizard.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=96)** I just need to give the group a name.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=98)** So let's call it CustomerServiceUsers and then you'll notice it auto populates the pre [[Windows]] 2000 name, that's fine.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=107)** The only other thing we have to do here is decide the scope and the type.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=110)** Now, as far as the scope, you have three options here.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=113)** It's called Domain, Local, Global and Universal.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=115)** Now, you'll learn about this in other enterprise level courses, what the differences are between each of those scopes as far as Domain, Local, Global and Universal.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=126)** For right now, for this video, I'm going to simplify it to telling you that the most common group that you would create for the purposes of gathering users, for the purposes of signing permissions would be a global group, and that's why that's the default.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=140)** As far as the group type, you'll see we have security or distribution.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=144)** A security group is one that does everything I've been talking about, where you can assign the rights and permissions to the group, and then the users will get those rights and permissions.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=154)** A distribution group is strictly for the purposes of being able to send an email and have that email go to all the users who are a member of that distribution group.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=166)** But you cannot assign rights and permissions.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=169)** So the default group we're going to create here is a Global Security Group.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=173)** So we'll take those defaults, click OK.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=176)** And just like that, you see we now have CustomerServiceUsers which is a Global Security Group, okay, has been created.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=183)** So that's how you can create the group in Active Directory Users and Computers.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=187)** Let's go over to the Active Directory Administrative Center.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=190)** Over here in the Active Directory Administrative Center, you'll notice again, we're looking at customer service and we have all the users, you'll notice the group has not populated yet.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=198)** And that's just because it needs to refresh.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=200)** Now, sometimes you can refresh the screen by simply clicking away to somewhere else and coming back.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=205)** But you'll notice that didn't do it.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=207)** So if you're ever thinking that an object should be there and it's not, you want to go up to the actual Refresh button up near the top right here.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=214)** So I'm going to refresh it.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=215)** And now I can see that the CustomerServiceUsers group is there.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=221)** So what do we want to do?
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=223)** We want to create another group in this same container.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=227)** Now I can't right-click necessarily over here, right?
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=230)** 'Cause that has to do with navigation.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=232)** If I wanted to actually click on the actual container, I want to create the group in, I'd have to go up to higher up in the hierarchy, and then over here I could right-click on Customer Service and select New Group.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=245)** If you are in the container itself you can right-click in the blank area.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=249)** Now I want to caution you.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=250)** You don't want to right-click over to the right of any of these users, 'cause if you do, and how it highlights that user.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=255)** If I go down below where it's truly a blank area I could right-click and select New and then of course go to group that way, or I'm going to show you one other way, because we are actually looking at the customer service container, even though demo users highlighted right now.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=272)** Over on the right, you'll see here, there are tasks specific to Demo User but then there are also tasks for the customer service container.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=280)** So this is where I could do New, Group, okay.
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=284)** So no matter how you do it, you got to select New Group.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=286)** And again, we get a window that looks a little different than we saw over in Active Directory Users and Computers.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=293)** We have to give the group a name.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=295)** So we'll just put, OtherUsers, just to create another fictional group here.
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=301)** Again, we're going to say it's a Security group and it's a Global group.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=305)** You can see there are additional options here that we didn't have in the other tool like protecting this group from accidental deletion.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=312)** We want to sign an email to the group.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=314)** If I scroll down, one of the main things that we can do, is we can do Member Of, which is where this group becomes a member of another group, it's called group nesting, or we can add users who are members right now, okay.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=328)** So these are things that we can do at the point of creation, but we don't have to.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=334)** We can do just like in the other tool and just click OK, doing nothing more than creating a name.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=339)** And you'll notice I now have a group called OtherUsers.
>
> **[5:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=342)** All right.
>
> **[5:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-a-group?u=76281980&t=343)** So that is how you can create group accounts in Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (7), [[Windows]] (1)
> **UI Navigation:** right-click (5), click on (2), go to (2), scroll down (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** just like (2)
> **Warnings:** keep in mind (1), caution (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [Managing group membership](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=0)** - [Narrator] Once you have created your group accounts, the next step would be to actually take users and make them members of those group accounts so that they can actually start getting the rights and permissions from those group accounts.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=12)** So I'm going to show you how to do this in both [[Active Directory]] Users and Computers, as well as in the Administrative Center.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=17)** But we'll start here in Users and Computers, and I'm going to show you that there's a couple different ways that we can do this.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=23)** Now one way would be to go to the group itself, right?
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=27)** So I'll pick customer service users and I'm going to go into the properties of that group.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=34)** And then I'm going to go to the Members tab.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=37)** Now you want to be careful with Members versus Member Of.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=40)** The Member Of tab would be what other groups this group is a member of.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=45)** Cause we can have what's called group nesting where you have a hierarchy of groups.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=50)** But the Members tab is what we're interested in when we're trying to make users to be members of a group.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=56)** So what I can do is I can go ahead and come down here and click add.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=59)** You'll notice there are no group members right now, so I'll click on add.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=63)** And I'm going to type in the [[Microsoft Word|word]] Demo and click Check Names and there's Demo User.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=68)** Click okay. And now Demo User is a member of the customer service users group.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=75)** Okay. So that's one way, right?
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=77)** You can go to the group and you can kind of pull in the members.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=81)** The other way would be to go to the user and then have the user join the group from the user side.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=90)** So I'm going to go to the properties of the user.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=93)** And now I'm going to go to the Member Of tab.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=97)** Why the Member Of tab?
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=99)** Kind of like I said, it's not the members.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=101)** I don't have any members, I'm a user.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=102)** I want to be the member of a group.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=104)** So I'm going to go ahead and I'm going to click on add.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=107)** Right now I'm just a member of Domain Users.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=109)** When I click on add, I'm going to put in custsvc.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=113)** Let's see if that's enough, I'll click Check Names.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=115)** And there's the customer service users group.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=118)** Click okay. And now it says that I'm a member of the customer service users group.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=123)** I'm going to click okay.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=125)** I'm going to go back to customer service users.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=127)** And I'm going to show you on the members tab that test user is also there now.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=133)** Okay so that's another way that you can join.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=135)** Now there is a third way that you can join.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=138)** And that is, if I take another user, I could right click and I could say add to group and I want to show you why this is actually a really really cool option, is because I'm not going to do it with one user.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=154)** I'm going to take users one, two, and three, highlight them all.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=159)** And then right click and say add to group.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=163)** Here's my customer service users.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=165)** Click okay. And it says, add to group room was successful.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=170)** If I go into my customer service users and I go to the members tab, look at that.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=176)** I've now added those three users all in one shot.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=181)** All right so those are the three different ways that we can manage group membership here in active directory users and computers.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=190)** Now let's jump over to the Active Directory Administrative Center.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=195)** Here in the Active Directory Administrative Center, it's actually similar.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=199)** First of all, if I were to highlight a user, let's highlight another user.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=206)** I think that's one that has not been done yet.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=209)** You'll see that over on the right, there is an option for add to group. Or if I were to right click on it, I could choose add to group, right?
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=218)** And then again, I could do customer service.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=222)** There's customer service users.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=224)** I could add that way now I'm going to hit cancel.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=225)** We're not going to do that yet, but I also want to show you that if I were to go to the customer service users group, I could then go to its properties.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=238)** You know, I could do this a couple different ways.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=240)** I could either scroll down, or I could just click on the Members button and it will jump to the Members section here.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=249)** I'll make this a little bit bigger.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=250)** All right, so here I can see all the members that we have here.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=254)** And then I could go ahead and I could add.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=256)** So if I say another, there's another user.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=260)** Click okay. Now adds another user that way.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=266)** And then, technically the third way that it can be done, right? Cause I showed you that you can do it by either.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=271)** Well, I'm not highlighted on the user.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=272)** There we go.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=273)** You can either do it by add to group here.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=275)** I showed you how to do it from the group side or again if I go to the specific user, and I go to its properties, I could go to the Member Of section and I could add a group this way.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=294)** And click okay.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=295)** And so again, you have all three ways to do it.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=299)** It's similar to how it's done in active directory users and computers, but with just some slight differences as far as the interface itself.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=307)** And as I've mentioned, I've said this a few times before, there is no right or wrong way to do it.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=312)** There is no automatic like, oh, here's the easy way.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=315)** This is the hard way.
>
> **[5:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=316)** No, it's pretty much your choice.
>
> **[5:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=319)** Which one feels more comfortable to you.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/managing-group-membership?u=76281980&t=321)** But now you know how to do it here in Active Administrative Center or over here in Active Directory Users and Computers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (6), [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (12), click on (5), scroll down (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (3)
> **Analogies:** kind of like (1), similar to (1)
> **Cross-References:** go back to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)

#### [Creating computer accounts](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=0)** - [Narrator] There is another type of [[Active Directory]] object that we have.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=5)** And this object is also a security principle, which means, similar to our user account objects and our group account objects, where we can assign rights and permissions.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=16)** Well, this new type of object that I'm going to talk to you about here also is a security principle, where you can assign rights and permissions, even though very often is not thought of that way.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=26)** Now, this type of Active Directory object is something called a computer account.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=32)** So here in Active Directory users computers, I want to show you that there are two containers in our domain hierarchy, that we will find computer accounts by default, or I should say that computer accounts will get created by default.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=53)** The first one, if we take it our look at our landedhotel.local, and we scroll down, you'll see, here's one's pretty obvious, it's the Computers container, right?
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=62)** That seems like a good place for computer account objects.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=66)** Now, you'll notice that when I highlighted that particular container, it says there are no items to showing this view, it is blank. Well, there's a reason for that.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=75)** This is the container to where all computer accounts, when they join the domain.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=81)** So when you have somebody who's out there on a client computer, and that computer joins the domain, an account is created for that computer, and it will go into this Computers container.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=94)** But why don't I have any?
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=96)** Well, the reason is because I only have three computers that are on my network right now that are participating in this domain.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=103)** You've been following along with the course, you watched me create all three of 'em, it's DC-1, 2, and 3.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=107)** And just from the name, you know that they are all domain controllers.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=113)** Well, domain controllers by default get put into a different container, and if we take a look at the list, should be pretty obvious, oh, there it is, we have a container called Domain Controllers.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=124)** So I'm going to click on it.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=126)** And that is where we find our three computer accounts, DC-1, 2, and 3.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=132)** Now, there's not a whole lot that you would manually do with these accounts.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=137)** They are mostly self-managed.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=141)** You can assign group policy settings based upon the container they are in.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=146)** So that's part of why it may be important where a computer account resides, and, technically, you can even assign permissions to them, but there's not a whole lot that you would do with these accounts.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=157)** Now, when it comes to actually creating a computer account.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=161)** Well, let me go back to the Computers container, and I'll show you that if you right click on the container, and go to New, you can technically select new computer account.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=172)** And when you do this, you have a very simple screen where you put in the computer name, so let's just say CLIENT 1, just to give it a name, and you'll see there's nothing else really to do.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=183)** You just do it and then click OK.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=185)** And you now have a computer account that's been created.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=188)** Now, the reality is is that this is not something you would do very often.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=193)** Manually creating a computer account the way I just did, that would be done to do what's called pre-stage your computer accounts.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=202)** And the reason for pre-staging computer accounts is I mentioned that by default, all computers when they join the domain, they get a computer account that's in this Computers container.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=214)** What if I don't want 'em in the Computers container?
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=217)** Like maybe here in Customers Service, maybe we want to have all of the computer accounts for customer service to be in this container.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=225)** Or, in fact, I'm going to do something, I don't want you to pay too much attention, I'm going to cover this in another video.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=231)** But I'm going to actually right click, and I'm going to say New, Organizational Unit, and I'm going to call it CustSvcComputers.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=242)** So maybe I want the customer service computers, the computers that are used by the customer service people, to actually exist in this particular container.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=253)** Well, then, what I could do is I could go ahead and I could create the new computer accounts for each of those computers in this particular container.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=262)** Now, that said, I'm going to tell you that that's still probably not the easiest way to do it, 'cause I can imagine I have this customer service call center, let's say there's 100 computers being used, and that wouldn't even be that big of a call center, but let's say there were 100 computers.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=277)** Well, could you imagine coming here and creating 100 accounts?
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=281)** That might be a bit tedious.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=282)** So what probably would be easier would be to allow those computer accounts to create themselves automatically.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=291)** They'll appear over here in the Computers container.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=294)** And then what you can do is just like with user accounts, you can simply click and drag the account and move it over to the new location.
>
> **[5:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=308)** All right. So now, that would be probably the easier way to get those computer accounts over to that location.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=314)** All right. So that's what a computer account is, and how you can create it.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=317)** I will make a very quick side mention just 'cause I've been doing it throughout the course.
>
> **[5:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=320)** Technically, over here in the Active Directory Administrative Center, you could also go ahead, and in any particular container wherever you want it to be, so if I go into Customer Service, and then go into, I need to actually refresh, if I then from there go into CustSvcComputers, I could go ahead and say New, Computer.
>
> **[5:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=347)** And again, not much to it.
>
> **[5:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=349)** You just go ahead and give it a name, click OK, you're on your way.
>
> **[5:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=352)** All right. So that is something that you technically can do in the Active Directory Administrative Center.
>
> **[5:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-computer-accounts?u=76281980&t=358)** All right. So that's computer accounts and how they work in Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (6)
> **UI Navigation:** click on (2), scroll down (1), go to (1)
> **Analogies:** imagine (2), similar to (1), just like (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** client (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Creating organizational units (OUs)](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=0)** - [Instructor] As we have been learning about [[Active Directory]] objects and the creation of these objects, I have been showing you how Active Directory has this whole hierarchical structure, and it has these containers that we've been looking at, right?
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=15)** Like Customer Service, that's a container, or in inside of that, even Customer Service Computers, right?
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=21)** Those containers, believe it or not, those actually are also Active Directory objects and they have a name.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=28)** They're called organizational units.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=30)** So an organizational unit or sometimes it's just simply abbreviated to OU, okay?
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=35)** These are what's called container objects.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=38)** The whole idea behind these objects is to just organize your other objects within the Active Directory hierarchy, all right?
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=50)** So what I want to do is I'm going to show you here how we can create these organizational units.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=55)** Obviously, we do have the Customer Service that was created by me as part of the course and then all these other ones that were there by default, but let's create a whole new hierarchy.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=65)** So what I'm going to do is I'm going to actually go right up to landonhotel.local and I'm going to right click, and say New, Organizational Unit.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=72)** And I get a very, very simple window where I just have to give it a name.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=76)** So I'm just going to call this Top Level OU.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=79)** That's all there is to it.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=81)** Literally, just give it a name.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=83)** And then there's only one other option.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=85)** There's a checkbox here which is protect container from accidental deletion.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=88)** In fact, we've actually seen that over in the Active Directory Administrative Center and all of our different objects that we've created.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=94)** So I'm going to show you what that actually means and how that works.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=97)** So I'm going to leave that checked for now.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=99)** I'm going to click OK.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=101)** And, you see, I now have a new Top Level OU.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=104)** Now the reason I called it that is because I'm going to right click on that Top Level OU, and I'm going to, again, select New, Organizational Unit, and I'm going to call it Second Level OU.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=119)** And again, I will leave the protection there from accidental deletion.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=123)** That's what you see what happens here.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=125)** You see how now we have a hierarchy, we have the top level and then the second level.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=128)** And in fact, we could continue along, and I could create another one, and call it the Third Level OU.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=136)** And with this Third Level OU, I'm going to clear that checkbox 'cause I want to show you the difference of what that accidental deletion protection is.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=143)** So I click OK.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=145)** So mainly I just want you to see here, we're creating a hierarchy, and you can go as deep as you want with that hierarchy.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=150)** It is recommended by [[Microsoft]] that you never go more than about four or five levels deep.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=155)** And to be honest with you, in my own personal opinion, I don't see a whole lot of value in going much more than even three levels deep other than maybe some isolated scenarios.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=166)** All right.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=167)** So let's real quick here, let's talk about that accidental deletion.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=171)** If I go ahead and, let's take that Third Level OU which we took off the protection, if I were to either right click and select Delete, or even if I were to just simply highlight it and then you can't see me doing it, but on the keyboard I'm just going to hit Delete, in either case you're going to end up getting a message here saying "Are you sure you want to delete this "Organizational Unit?"
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=195)** And so we'll just simply say, there's a warning, that's nice, they do that, but I'm just going to say, "Yep."
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=201)** And then I'm going to go, "Oh wait, shoot.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=203)** "I didn't want to do that."
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=205)** Well, the reason that that could be a problem is because these Organizational Units, well they may contain other objects and you don't want to delete an Organizational Unit and then potentially the objects inside of it.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=215)** So you don't want it to necessarily be that easy to do.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=220)** So if we took our Second Level OU and did the same thing.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=223)** Now, this one has the accidental deletion protection on it.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=227)** If I go ahead and I select Delete for this one and I say, "Yeah, I want to delete it," look what happens.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=232)** It says, "You don't have the privileges "or it is protected from accidental deletion."
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=238)** So in order for me to actually delete this object, what I would have to do is I have to go to the properties of the object.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=246)** Now there's a tab that we were looking for that does not exist here, okay?
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=251)** If I look at these tabs none of these say anything about accidental deletion.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=255)** And the reason is because it's considered an advanced feature.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=257)** So we have to go up to View, and say Advanced Features.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=262)** And you'll notice that now we have a lot more items here but we still have our Top Level and Second Level OU.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=267)** If I now go to the properties of my Second Level OU, I now have an Object tab.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=273)** That's the one I was looking for.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=275)** And that's where I can find the checkbox.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=277)** So if I know that I want this Organizational Unit gone, now I could clear that box, right?
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=283)** I have to go to Advanced Features, go to the Properties, go to the Object tab, Delete, get rid of the box, click OK, now come over here, and say I want to delete this organizational unit and say, "Yes I want to do it," and now it goes away, okay?
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=299)** So it's really, you have to be very intentful about deleting it.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=303)** You couldn't accidentally do it.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=304)** And that's what the whole accidental deletion thing is.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=307)** Now, very quickly before we wrap this up, let's jump over to the Active Directory Administrative Center and take a look.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=314)** So here in the Active Directory Administrative Center, I just want to show you, again, we'll go up to landonhotel right at the top.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=321)** If I highlight landonhotel.local, and then over on the right, if we go ahead and select New, we could create new Organizational Unit, give it a name.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=334)** I'm just going to call this Demo OU.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=337)** And again, here's the checkbox for protect from accidental deletion.
>
> **[5:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=341)** So I'm going to click OK.
>
> **[5:43](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=343)** And you can see here, I now have an Organizational Unit, says Demo OU.
>
> **[5:48](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=348)** So now if I right click on Demo OU, and I select Delete, and I say, "Yes," guess what?
>
> **[5:55](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=355)** Look at that.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=356)** I get my same message here about the credentials.
>
> **[5:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=359)** The only thing that's really different here is if I go to the Properties, I don't need to necessarily worry about advanced features or anything like that, I could just clear this checkbox saying don't protect it from accidental deletion, and now I could simply delete and we're on our way.
>
> **[6:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=377)** All right, so that is how we can create an Organizational Unit structure in both Active Directory users computers, as well as the Administrative Center, and a little bit about what that accidental deletion protection is for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (8), [[Microsoft]] (1)
> **UI Navigation:** go to (6), checkbox (5), click on (1)
> **CLI Commands:** find (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Examples of OU hierarchies](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=0)** - [Instructor] So now that you know how to create an OU structure, let's talk a little bit about some of the examples of how these OU structures may be created in a production environment with something that's actually practical.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=14)** Right, so I'm going to do this by actually creating one.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=17)** And we'll talk about some of the benefits and disadvantages depending on which way you go with it.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=22)** Now, one of the most typical OU structures you'll find is one that starts off with a top level OU based upon location.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=32)** So again, here at landonhotel.local, what I'm going to do, is I'm going to create an organizational unit, and I'm just going to call it New York.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=44)** And then, I'm going to create another one, and I'm going to call it Chicago.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=52)** And I'm going to create a third one, I'm going to call it London.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=60)** Okay. So there I have three organization units that have been created, and they are top level organizational units.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=69)** So what do we do?
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=70)** Inside, as our second level, we might then go to something like department.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=78)** Okay so, inside of New York, I'm going to create a New OU, and we'll call it NY customer service.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=89)** Now you don't want to just call it customer service cause that can be confusing.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=91)** Cause there might be a customer service in New York and a customer service in Chicago, customer service in London, you don't want to have OUs with the same name.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=97)** So I'm going to call it New York customer service.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=100)** Okay.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=101)** And then again in New York, we'll say another OU, will say New York IT.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=110)** And we'll do one more inside New York, New OU, we're going to say it's NY sales.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=119)** Okay. So now we have a second level and I'm not going to bore you with like going through and doing every single one, but there's a really good chance that I would create these same departments inside of Chicago and inside London.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=133)** And it may not be completely identical cause each [[Microsoft Office|office]] may not have all the same departments, right?
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=138)** I'll give you one example in Chicago, well, it may be, that we have Chicago marketing.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=148)** And maybe in Chicago we also have, Chicago R&D.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=158)** Okay? So just an example of how we may set that up.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=161)** And then it a take a step further, a third level, that is not that in common might be to go ahead, and let's go back up here to New York customer service.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=169)** Inside there, I'm going to create another new OU that says New York customer service Users, and then create one more New York customer service computers.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=191)** All right.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=191)** So you can see what we have building out here.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=194)** Right we have a hierarchy that's being built out, that makes sense, for where we might put our objects.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=200)** And again, one of the main reasons for having these containers is for the application of group policy settings, and also for delegation of authority over certain areas.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=214)** So this all makes sense.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=217)** Now one thing I do want to point out, is I want to point out that when you create your hierarchy, it is really really important that you make your top level of the hierarchy.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=231)** So this New York, Chicago, London be something that is as static as you think it can be.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=237)** Okay? So I will tell you that there is another example of OU hierarchy that some companies use which is the opposite of this.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=245)** Instead of having location and then inside each location is the department, sometimes they start out with the very first top level being department, like I did up here earlier in the course where I did customer service, right?
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=258)** And then inside customer service, you know maybe I go ahead and I put in, you know, New York customer service and do it that way.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=268)** Right? And then inside customer service, new OU Chicago customer service.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=276)** Okay?
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=277)** The reason that that's not as recommended a practice is because how often do we see organizations go through an actual organizational change, where departments change names, you know everything about them changes.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=293)** It happens all the time, but how often do we see companies up and completely move out of a city?
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=301)** Right? I mean if I have a location in New York, I'm probably going to have a location in New York, for quite a while, let's not to say that's impossible that a company wouldn't change, but it's not very likely.
>
> **[5:10](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=310)** And in fact what you'll sometimes see is instead of the top level being something like the city, New York, Chicago, and London, I might actually have a top level OU that says North America.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=328)** That means that even though we may actually end up, you know, leaving New York or Chicago, well, it's still going to be in North America so I could take New York and I could drag it inside North America.
>
> **[5:41](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=341)** Oh, you know what?
>
> **[5:42](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=342)** I have certain permission set up to where I can't make that move very easily.
>
> **[5:46](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=346)** All right, so, so anyway, you get the ideas.
>
> **[5:51](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=351)** New York and Chicago would go inside North America, and then I might have another top level OU, for Europe.
>
> **[6:01](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=361)** Okay, and then London would be inside Europe.
>
> **[6:03](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=363)** Okay? So I apologize that I can't actually move those around to show you, but I think you're getting the idea.
>
> **[6:08](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=368)** Those are some examples of OU hierarchies that you want to take into consideration when you're creating them for your actual enterprise environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/next-steps?u=76281980&t=0)** - [Ed] I hope you've enjoyed learning about installing and configuring [[Active Directory]] domain services in [[Windows Server]] 2022 as much as I've enjoyed showing you.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/next-steps?u=76281980&t=9)** If you want to learn more about working with active directory in Windows Server 2022, please explore our library as we have a number of courses out there to help you.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-install-and-configure-active-directory/next-steps?u=76281980&t=19)** See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Windows Server]] (2)
> **Speakers:** - [ed] (1)


## Instructor

- [[Ed Liberman]]

## Skills Covered

- Active Directory
- Windows Server

## Path Context

### In [[Getting Started with Windows Server 2022]]
← [[Windows Server 2022- Installation and Configuration]] | **3 of 4** | [[Windows Server 2022- DHCP and DNS]] →

## Appears In

- [[Getting Started with Windows Server 2022]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2019- Install and Configure Active Directory]] — Active Directory, Windows Server
- [[Windows Server 2022- DHCP and DNS]] — Windows Server
- [[Windows Server 2022- Installation and Configuration]] — Windows Server
- [[Windows Server 2019- DHCP and DNS]] — Windows Server
- [[Windows Server 2019- Installation and Configuration]] — Windows Server

---

[↑ Back to top](#)