---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-server-2019-install-and-configure-active-directory
url: "https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory"
duration_minutes: 116
duration: 1h 56m
level: Intermediate
updated: 4/26/2024
learners: 18040
skills:
  - Active Directory
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGYPODclmTADg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567796822271?e=2147483647&amp;v=beta&amp;t=wyAt0q-iHIPpv5-ep3kYuBUgZUc4Z4M8jmlARGy4t38"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Windows Server 2019]]'
prev_courses:
  - '[[Windows Server 2019- Installation and Configuration]]'
next_courses:
  - '[[Windows Server 2019- DHCP and DNS]]'
path_nav: '[{"path":"Getting Started with Windows Server 2019","position":3,"total":4,"prev":"Windows Server 2019- Installation and Configuration","next":"Windows Server 2019- DHCP and DNS"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/active-directory
  - skill/windows-server
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Windows%20Server%202019-%20Install%20and%20Configure%20Active%20Directory.md)

![Windows Server 2019: Install and Configure Active Directory](https://media.licdn.com/dms/image/v2/C560DAQGYPODclmTADg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567796822271?e=2147483647&amp;v=beta&amp;t=wyAt0q-iHIPpv5-ep3kYuBUgZUc4Z4M8jmlARGy4t38)

# Windows Server 2019: Install and Configure Active Directory

> Identity management is a critical part of managing an enterprise network. Active Directory is the foundation for user administration, group policy, and security in a Windows Server environment. This course shows how to install and configure Active Directory Domain Services (AD DS) in Windows Server 2019. Learn how to deploy AD DS, install additional controllers, configure permissions, and manage A

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory) | 1h 56m | Intermediate | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Installing Domain Controllers]]** (4 videos)
- **[[#2. Active Directory Administration Tools]]** (6 videos)
- **[[#3. Flexible Single Master of Operations (FSMO)]]** (3 videos)
- **[[#4. Active Directory Permissions]]** (3 videos)
- **[[#5. Managing AD DS Objects]]** (8 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Active Directory in Windows Server 2019
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=0)** - [Ed] Active Directory has been a major part of Windows Server operating systems since Windows 2000 Server and continues to be used today.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=8)** To be a successful network administrator who manages a Microsoft network environment, it is crucial to have a solid understanding of identity management.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=17)** How do you get that?
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=18)** Through Active Directory Domain Services, and that's exactly what we'll be learning about in this course.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=25)** I'll start things off by showing you how to deploy ADDS, and then we'll go over some Active Directory administration, and finally, we'll wrap things up by talking about how to manage individual active directory objects.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=37)** So let me quickly introduce myself.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=40)** I'm Ed Liberman.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=41)** I'm a Microsoft certified trainer, and I have a question for you.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=45)** Are you excited about Active Directory yet?
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-in-windows-server-2019?u=76281980&t=48)** Well, I know I am, so let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** adds (1)
> **Speakers:** - [ed] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get through this course, I do not have any specific mandatory prerequisites that you must have.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=8)** I will say that it will be helpful if you already have some level of experience knowing how to navigate your way through Windows Server 2019.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=17)** I would say, even if you have experience with Windows Server 2016, and that's just a matter of being able to navigate through it so that I can discuss the active directory side of things with you.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=28)** Now as I go through and perform the different demonstrations, I want you to know what my setup is here.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=34)** You can see on the screen that I actually have three computers running.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=38)** And they're called DC-1, DC-2, and DC-3.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=42)** Even though they have the name DC, these three computers, as of right now at the start of this course, are set up with just a basic installation of Windows Server 2019 and all I've done to them is named them, DC-1, 2, and 3, just to give 'em a name, and given them an IP configuration so that they can communicate with each other.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=66)** So if you want to follow along, that's all you need is the three computers.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=70)** And in fact, you could really get away with one to do almost everything, two for sure, you could get through most everything.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=78)** The third one is only used for one demonstration.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=82)** Outside of that, there's nothing else you need to have.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/what-you-should-know?u=76281980&t=85)** You just need to have those three machines, whether they be virtual machines or actual machines, and beyond that, they just have to have a basic installation of Windows Server 2019.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (1), set up (1), you need to have (1)
> **Speakers:** - [instructor] (1)


### 1. Installing Domain Controllers

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Installing Active Directory Domain Services role
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=0)** - [Instructor] The installation of Active Directory Domain Services is really a two step process.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=6)** The first of these two steps is to install the server role itself, and that's what we're going to take a look at here.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=13)** So to demonstrate this, I need to connect to a Windows Server 2019 machine, and I have three of them here named DC-1, two, and three, and I just want to point out that even though they're named DC, 'cause they will eventually become domain controllers, right now they are just simply standalone fresh installations of Windows Server 2019.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=34)** So let's connect to DC-1 and see how to add the role.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=38)** So here we're looking at the Server Manager, which is the tool that opens by default when you launch Windows Server 2019.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=48)** And it's in this tool that we can easily add any roles.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=52)** And if it's not obvious you'll see right on the screen there's an option that has a two next to it that says Add roles and features.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=58)** So let's click on that now.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=60)** Here in the Add Roles and Features Wizard the first thing that always opens up is a Before you begin screen that says, hey you're about to add something significant to this machine, so why don't you make sure that the machine is configured properly and, to be more specific, make sure it's nice and secure to handle the role.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=77)** Now if you don't want to see this screen again and again, you have the ability to skip this page by default.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=84)** So let's go ahead and click on next.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=86)** Here we need to decide what type of installation it's going to be, and because we are installing a role we can take the default where it says Role or feature-based installation.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=96)** And click next.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=99)** Now we have to choose what server we want to install onto, and you'll see that the DC-1 server is already selected by default, so I'll click next.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=108)** Here's where we get to select what role we want to install.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=111)** And up near the top of the list, it's actually second on the list, is Active Directory Domain Services.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=118)** So I'm going to check the box next to that, and when I do, you'll see that an additional pop-out window comes up saying that there are additional features that are required as part of this installation.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=129)** So that's great and I want to go ahead and add those features as part of this process, so I will select that button, add features.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=136)** And now I could choose any additional roles that I want to install, but I don't have any others, so I'm going to click next.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=142)** It then takes me to a screen where I can add any other features that I want to add, and I don't have anything other than the ones that were selected for me by default, so I can click next again.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=153)** This screen, I get kind of a general overview explanation of what Active Directory Domain Services is.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=160)** All right, so we could read all about it, and click next.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=165)** Then we get to our confirmation screen, which is the final process in a role installation, where it's going to just summarize everything.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=174)** There is one box that, even though it's not done too much any more, I do like to check this box every time just to simplify it, and that is the box up at the top here that says restart the destination server automatically if required.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=188)** And when I check this box, you'll see here that it gives me a little warning message saying, hey, you know, somebody else could be working on this machine, 'cause they could be connected remotely, or I could even be doing this remotely.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=199)** And I'm going to say, yup, that's okay.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=200)** So I'm going to go ahead and click yes, this is okay.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=203)** I'm not worried about anybody else on the machine.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=207)** And finally, I can click the install button.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=210)** Now at this point, it's going to begin the installation of this role, and if you're following along I will tell you, the speed of how long this takes, I mean, it could be anywhere from a minute, I've seen it as long as 10 minutes if you have a very slow machine.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=223)** So if you're following along, go ahead and pause the recording and then you can resume when this process has completed, and I'm going to go ahead and speed this up and take us to the end.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=233)** All right, so on my system the installation has now succeeded, but you will notice that it says that there is additional configuration required.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=241)** All right.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-active-directory-domain-services-role?u=76281980&t=242)** And that is actually step two of the domain controller creation process in the Active Directory Domain Services installation, and I'm going to go ahead and cover that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (2), this, (1), default. (1), finally, (1)
> **Prerequisites:** install (5), before you begin (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Installing a forest root domain controller
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=0)** - [Instructor] Now that we've installed, the Active Directory Domain Services Role, you'll see here that right on the screen it says there is additional configuration required.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=10)** And that configuration is to go through the second step of this process which is to promote this server to being a domain controller.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=18)** Now here in the Wizard, it already gives you a link to do this, we don't have to go anywhere else.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=25)** You'll see right down here, there is a link that says Promote this server to a domain controller.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=29)** So I'm going to click on that now.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=32)** What that does, is this opens up the Active Directory Domain Services configuration wizard, formerly known as DC Promo.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=40)** A quick sidenote, if you've done this in the past, and you're just trying to get yourself up to date on Windows Server 2019, DC Promo won't work for you.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=48)** So it's not that they just gave you a short cut, but they kind of deprecated or they changed the use of DC Promo.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=55)** So here, in this wizard, we need to determine what type of Domain Controller we're going to install.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=61)** And the default selection is to add a domain controller to an existing domain but we don't have one yet.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=67)** So we need to select the third choice here, which is Add a new forest, kay, that's what you do when you have a brand new forest that you're creating, like we have here.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=75)** Now we have to give this forest a name.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=78)** Alright, so Root domain name here, I'm going to name it, landonhotel.local and then I'll click Next.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=87)** So on this screen, we now get to do a couple things.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=91)** Number one, we get to choose our forest and domain functional levels, something we only have to worry about if we are working with older versions of Windows Server, and only if it's on our domain controllers.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=102)** Otherwise we can leave it alone, which we're going to do here, because I'm only going to work with Windows Server 2019.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=107)** Then in the middle section here, we have three different check boxes, one is whether we want to also be a DNS Server.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=115)** Which the box is checked by default, and we want to leave it that way, it's always a good idea on your forest root domain controller.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=123)** The second check box, is Global Catalog server, which is checked and grayed out, because we have to be, 'cause you have to have at least one global catalog server in the forest and we're it, because we're the only server that's going to exist.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=134)** And the third one is Read only domain controller, which is not checked, and can't be checked, it's grayed out, because you can't be a Read only domain controller unless you first have a writeable domain controller.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=149)** So the third thing that we can do here, and this is the thing that we are actually going to do, is create a directory services restore mode password.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=157)** So I'm going to go ahead and type that in now, feel free to go ahead and type in any password, that you feel comfortable using and it will work just fine.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=167)** And this is something you will find out a little more about later on, when we talk about domain controller recovery.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=172)** So I'm going to go ahead and click on Next.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=175)** Here it's just giving me a warning that we can't find a DNS delegation for a top level root domain, and that's because we made this landonhotel.local, and it can't find anything for .local and that's okay, we know that because this is going to be the root, we don't need that delegation.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=192)** So I will click Next, now it's going to verify the NetBIOS name version of landonhotel.local and it should autopopulate here, the NetBIOS domain name of just LANDONHOTEL, and it has done that, okay so that's just a process of make sure it's not in use anywhere else on my network.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=210)** And it's not.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=211)** So I'm going to go ahead and click Next.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=216)** Now it wants to know the default location of your database, log files, and SYSVOL folder.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=222)** I only have one drive, and if you only have one, you want to take the defaults as it has 'em here.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=229)** If you do have multiple drives, not multiple volumes, but actual physical discs then you may want to split apart the database from your log files, but in this case, we're going to take the default and click Next.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=242)** And here we get to a review of everything we just went through, there is an option to view a script, if you want to see how this would look in Power Shell, but otherwise we just go ahead and click on Next.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=255)** At this point it's going to go through and make sure that all the pre-requisites are met to be a domain controller, so this'll take just a moment for it to go through and check these out.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=266)** You can see here, this screen's a little bit deceiving, because we have a green check box at the top that says All prerequisite checks passed successfully, go ahead and click install to begin installation.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=276)** Down below we get all these warnings.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=279)** These warnings always show up and you can disregard them, this just has to do with, first of all you have your delegation for the DNS server which we already talked about, and it also has some security for some old Windows NT 4.0 stuff.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=293)** So you can disregard those two warnings, and I'm going to go ahead and click Install.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=299)** Now at this point, it's going to go through, and you'll notice that these warnings are going to come up again, the same two warnings, but otherwise it will go through the installation process.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=307)** And it will also have a reboot as part of this process.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=313)** So I'm going to go ahead and once again, speed up this, and if you're following along you go ahead and pause, and resume after this process has completed.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=324)** Alright, so on my machine, the wizard has completed, it has installed the role, the system has rebooted, I logged back in as the administrator, and of course, I'm now logging in as the domain administrator.
>
> **[5:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=338)** The Landon Hotel Administrator.
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-a-forest-root-domain-controller?u=76281980&t=340)** The only thing I really want to show you now would be the one last step is you come up to the tools menu here in server manager, and you'll notice that there are a number of Active Directory tools that have been installed, and that's kind of your confirmation that Active Directory Domain Services has been installed, including upgrading this machine to being a domain controller.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), else. (1), default, (1), for . (1), case, (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** dns (3), landonhotel (1), sysvol (1)
> **UI Navigation:** click on (3), select the (1)
> **Prerequisites:** install (3), prerequisite (1)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **Versions:** 4.0 (1)
> **Warnings:** warning (1)

#### Installing additional domain controllers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=0)** - [Instructor] After you've finished installing the first domain controller in your forest.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=4)** The next step would be to install any additional domain controllers that you need to have in your environment.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=10)** Now, one quick little side note is no matter how small your environment is, I always recommend that you have at least two domain controllers running, so you have some level of fault tolerance and high availability.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=22)** Now, to demonstrate the installation of this additional domain controller, I'm going to connect to a computer I have here named DC-2.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=30)** Here on DC-2, we're looking at the Server Manager, and the first step to this installation is exactly the same as what we did when installing the first domain controller, and that's to add the ADDS Role.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=42)** So, I'm going to click on everything through here exactly the same.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=44)** So, I'm going to go through the Wizard, and we're going to see it's a role-based installation.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=49)** We're going to install in DC-2, select Active Domain Services along with the additional features that are needed.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=57)** Click Next, no more features here.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=59)** Click Next, here's what ADDS is, click Next.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=63)** Restart if necessary, say yes to the warning, and install.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=69)** At this point, it's going to take a few moments to install.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=72)** If you're following along, pause the video and resume once this process has completed on your end.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=79)** Alright so, the installation of the role has succeeded, and as always, there is additional configuration required and that's to promote to a domain controller.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=86)** So, let's click on that link.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=89)** Here in the Active Directory Domain Services Configuration wizard, we can go ahead and take the default selection of add a domain controller to an existing domain 'cause that's what we're doing, we're adding an additional domain controller to our existing domain, and we have to specify what that domain is.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=105)** Alright, so right here, we're going to go ahead and type in landonhotel.local, and we have to supply credentials, which allow us to connect to this domain.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=118)** So, I'm going to click on Change and type in landonhotel\administrator 'cause we want to make sure we're using the domain administrator account, and then, I will type in the password that I have established for that administrator account and click Okay, and then, click Next.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=140)** Here on this screen, we get the additional domain controller options, whether we want to also be a DNS server, which I typically do make my domain controllers also a DNS server, whether we want to be a Global Catalog server, and again, in this case, I'm just going to do it.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=154)** If you were in a large enough environment, you would not necessarily make all of your domain controllers a Global Catalog server, and we could choose to be a Read Only domain controller, but we're going to cover that in a different video.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=164)** What we are going to do here, is we're going to go ahead and put in the password for the Directory Services Restore Mode, and then, we're going to go ahead and click on Next.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=175)** Now, everything else is going to be pretty much the same as what we saw when installing the first domain controller.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=180)** We get our warning here about the delegation for DNS, and click Next.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=185)** Here, this is something that's a little bit different.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=187)** Because I'm an additional domain controller, where do I want to replicate the existing Active Directory Database from?
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=195)** I could install from media if we had established some.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=198)** This would be if you were an offsite that was very remote, and you had bad internet connectivity.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=204)** Or we could replicate from any domain controller, or we could select a specific domain controller, and you'll see the only one we have is DC-1.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=212)** Typically, I just leave the default to say any domain controller is fine.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=214)** It'll go to whichever has the best connection.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=217)** I'll click Next, and Next on the database log files, and Next on our review screen here, and at this point, we're going to go ahead and it's going to go through and check the prerequisites and click Install, and at this point, we're off and running.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=236)** It's going to install, it's going to reboot, and so, I'll be right back with you as soon as this process is finished.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=243)** Alright, so my machine has finished installing and it has gone through a reboot.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=247)** I've logged in as the Landon Hotel administrator.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-additional-domain-controllers?u=76281980&t=251)** We're back in the Server Manager, and the only last thing to do is to jump up to the Tools menu and see that we have all of the Active Directory tools to confirm that this machine has indeed become a domain controller, and that's how you install an additional domain controller in an existing forest.

> [!info]- Semantic Content
>
> **Prerequisites:** install (8), you need to have (1)
> **Env Vars:** dns (3), adds (2)
> **UI Navigation:** click on (4), go to (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), case, (1)
> **Warnings:** warning (2)
> **Speakers:** - [instructor] (1)

#### Installing read-only domain controllers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=0)** - [Instructor] Sometimes you'll find yourself in a situation where you have a remote office that has enough users, that it's worth having a domain controller locally in that office.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=8)** But you don't have any IT staff in that location to help keep that server secure.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=14)** Well Microsoft has a solution for this.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=16)** It's called a Read Only Domain Controller.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=19)** So to demonstrate this, I'm going to use DC3.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=23)** 'Cause I've already installed active directory onto DC1 and DC2.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=27)** They're fully functional domain controllers.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=29)** So we'll make DC3 our read only version.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=35)** Now the first step to installing a Read Only Domain Controller is exactly the same as any other domain controller and that's to add the AD DS role.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=43)** Alright, so we'll just click on add role and features.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=45)** Click next.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=46)** It's a role based, installing on the correct server here.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=49)** Click next.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=51)** Active Directory Domain Services with the additional features.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=54)** Click next.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=55)** Next to no additional features.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=57)** Here's where AD DS is.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=59)** Click next.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=60)** Restart when done, if necessary.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=62)** Say yes to the warning and install.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=66)** Again, this may take a few moments.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=68)** So, I'll go ahead and speed this up and take us to the end of this process.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=74)** Okay installation has succeeded with additional configuration required and that is promoting the server to a domain controller.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=80)** So I'll click on that link now.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=81)** Here in the Active Directory Domain Services configuration wizard, we are going to take the default option to add a domain controller to an existing domain, right?
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=90)** 'Cause it's a read only.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=91)** So you have to be an additional domain controller.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=94)** The domain we're going to be adding to is LandonHotel.local.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=101)** The credentials needed are the Landon Hotel administrator account.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=110)** And click next.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=114)** Here we get additional domain controller options and you'll see we have the choices to be a DNS server and a Global Catalog server just as we had before but this is where we're going to check the box to choose to be a Read Only Domain Controller.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=127)** Now besides choosing to be a Read Only Domain Controller because security is typically an issue we want to have a very small footprint.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=134)** So we're going to say that we do not want to be a DNS server and we do not want to be a Global Catalog server.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=139)** We want to only check the box for Read Only Domain Controller.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=143)** We still have to go in and put in a password for Directory Services Restore Mode and then we can go ahead and click on next.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=155)** So here because we are a Read Only Domain Controller this is a screen that's a little bit different than we've seen before and as you'll see here that we can have a delegated administrator account.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=167)** Okay, so we could choose a specific account out in that remote office, someone who's going to be out there who we want to delegate as the administrator if we wanted to.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=177)** Okay, so we could choose that here.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=179)** We're not going to.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=180)** I don't have any accounts to do but if we had a user, we'd do it there.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=183)** Here it says what accounts that are allowed to replicate their passwords to the Read Only Domain Controller.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=189)** And this is, again, because we're trying to have a small footprint when it comes to security.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=195)** We don't want every password for the entire forest replicated out to this domain controller.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=202)** There's a group here called the Allowed RODC Password Replication Group and all we'd have to do is go ahead and add the users that are going to be in that remote office add them to this group.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=214)** And you'll notice that there are also some default accounts here that denied from having their passwords replicated and these are the super secure, you know, super powerful users like the administrators, server operators, backup operators, and so on and so forth.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=228)** We're going to keep all these defaults 'cause again, I could add specific users in this window here but what's easier is just add those user accounts to this group that's going to be created.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=239)** Go ahead and click next.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=243)** Here we need to choose where we're going to replicate from.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=246)** This is exactly the same as any other additional domain controller.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=248)** So I'll click next.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=251)** And for the most part, the rest of this is pretty much the same where I'm just going to take the default locations for our database and log files.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=257)** We have our review here.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=259)** It's going to go through the prerequisites just as it always does.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=262)** This will take just a moment.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=265)** All the prerequisites have checked out just fine.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=268)** And I click install.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=270)** And at this point, it's going to go ahead and it's going to go through the process.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=274)** It's going to install and reboot.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=277)** This is a much faster process than it would be on any other domain controller but either way I'm still going to speed it up.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=283)** When this process has completed I'll be right back with ya.
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=288)** Okay, the installation has completed.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=290)** The system has rebooted.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=291)** I have logged in as the Landon Hotel administrator account and just like with any other domain controller I can come up to the Tools menu and you'll see that I have my tools and I were to go in to any of them we would see that everything is exactly the same with the only exception being that because we are read only we won't be allowed to make changes.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=312)** But otherwise, we're a domain controller.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/installing-read-only-domain-controllers?u=76281980&t=315)** So that's how you install a Read Only Domain Controller.

> [!info]- Semantic Content
>
> **Env Vars:** dc3 (2), dns (2), dc1 (1), dc2 (1), rodc (1)
> **Code Keywords:** super (2), this. (1), this, (1), from. (1)
> **Prerequisites:** install (4)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Warnings:** warning (1)


### 2. Active Directory Administration Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Managing AD DS with Active Directory Administrative Center
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=0)** - Managing the Active Directory Domain Services environment is one of the common tasks that an IT professional would perform.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=8)** So understanding what administration tools are available is really important.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=12)** So what I would like to do is jump on to one of our domain controllers so we can take a quick look at the variety of administration tools that are available.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=19)** For this demonstration, I want to connect to DC 1.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=26)** Here in the server manager, if I go to the tools menu which you'll find the upper right hand corner.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=32)** When I click on it, you'll see right away that there are series of active directory based tools at our disposal.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=39)** Now the first one on the list is the Active Directory Administrative Center.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=43)** And that's the one I want to go over with you here so let's click on that now.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=49)** Now I do want to tell you that I am going to go over some very specific tasks in other videos in this course and other courses.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=56)** But right now, I just want you to have a general feel of what this tool looks like and what it would be used for.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=63)** One specific thing about this particular tool that I can tell you is that it happens to be a graphical user interface that was built of Windows Powershell.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=73)** Now that is the one thing that makes it different from the rest of the active directory tools that are available.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=79)** Most of the rest of the tools that are out there are kind of old-schooled tools.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=83)** They've been around since Windows 2000.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=86)** Which was when Microsoft first started using active directory.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=89)** And those tools as a result, preceded the creation of Windows Powershell and therefore, they don't necessarily have a perfect one to one matchup with Windows Powershell.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=101)** But in this particular tool, some of the common tasks that you might perform are things like creating and managing a variety of accounts like users, computers, groups or even creating and managing your organization units.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=114)** You can connect and manage multiple domains within this one single tool.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=119)** And as a matter of fact, if you just take a look at screen, look at what we are looking at right here.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=123)** Does it look like any other tool that you seen?
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=126)** It should. And in fact I'm going to ahead and minimize this for a second.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=131)** Look at that.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=131)** It looks very similar to the server manager, doesn't it?
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=135)** And the result is kind of the same thing in the sense that you have the ability to manage multiple servers at the same time within this one tool.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=146)** Now, what are some of these you can do with this tool in addition to just general management.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=150)** Well you can do things like creating fine-grained password policies or enabling the active directory recycle bin.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=157)** And these are the things in the past, you got to go before Windows Server 2016 so you go to Server 2008 or before that.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=163)** You could only do it from a command line based tool or a much less intuitive tool than what you will find here in the active directory administrative center.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=173)** Just to kind of click around real quick, you'll notice here that we have, a kind of a form of a hierarchy that is built.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=181)** On it shows you the history of where you've been.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=183)** So for instance, on this machine you'll notice inside my landonhotel dot local domain, you can already see there is a link here for users.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=191)** Well the reason is because I've already been to the users container.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=196)** Meaning I have actually gone there before, meaning before this video I've clicked on it.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=201)** So let's go somewhere else just to see how this works.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=203)** If I click on landonhotel, and then I'm going to click on Domain Controllers.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=209)** So double-click that.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=210)** And here you'll see the list of my domain controllers, DC 1, DC 2 and DC 3.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=216)** And it takes just a moment for it to pop up, but now I believe it has popped up at this point, you will see that Domain Controllers, there's a link to it that has now shown up under landonhotel dot local.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=228)** And it's not just right now right, it's not just a breadcrumb of where I am right now but if I click let's say on Overview.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=235)** I can quickly come back to the Domain Controllers or I can quickly come back to Users.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=239)** And in fact, even if I clicked on Overview and then close the tool altogether, and go back in and open the tool.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=249)** You'll notice that that history is still there, right?
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=251)** We still have kind of of the recent containers that we connected to.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=256)** So anytime you gone in and perform an action, it assumes there is a really good chance that you may want to come back and go there again.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=265)** So it gives you that quick link to jump right back in to the Domain Controllers container.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=272)** 'Cause it assumes while you've been there once, you might want to go there again.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-administrative-center?u=76281980&t=276)** Alright, so as I said, I don't really necessarily want to go super deep into the all the different ins and outs and everything that you can do with this tool because were going to come back to this tool and take a look at it later as we perform certain actions but I just wanted to show you that well this is a tool that can be used, it's based off of Windows Powershell and it is a newer tool that administrators are finding very handy for working with Active Directory Domain Services.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (2), double-click (1), open the (1)
> **Code Keywords:** let (3), for. (1), interface (1), super (1)
> **Tools:** powershell (4), command line (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2)
> **Analogies:** similar to (1), for instance (1)
> **Speakers:** - managing (1)

#### Managing AD DS with Active Directory Users and Computers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=0)** - Another tool that you should be familiar with is the active directory users and computers tool.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=8)** So here, we are looking at the server manager on DC1.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=12)** And if I go up to the tools menu, you will see the fifth choice on the list here is Active Directory Users and Computers.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=19)** So let me go ahead and click on that.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=22)** Now, the first thing that I'd like to point out is when looking at LandonHotel.local, or I can even expand it, you'll notice the containers that I see are extremely similar to what we saw are extremely similar to what we saw in the active directory administrative center.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=39)** And in fact, many of the actions that you will perform in this tool are the same as what you would do in the active directory administrative center.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=50)** This tool has some slight limitations, and I want you to focus on this because I'm going to tell you something very interesting in a moment.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=58)** This one has the limitations in the sense that it was not built off Powershell and therefor, anything that is Powershell-specific you can only do, if you want to do it through a GUI, you have to do it in the active directory administrative center. You won't be able to do it here.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=72)** A couple of examples would be dealing with things like fine-grained password policies or the active directory recycle bin.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=80)** This is the older tool.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=82)** This is the older tool.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=84)** Or what's considered to be doing things the old school way.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=88)** But here's what's interesting.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=90)** What's interesting is that even though this tool is the one that has it's limitations, it is also the one that seems to be more popular.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=100)** Now, in some cases it's more popular with older administrators, whereas newer administrators go ahead and use the newer tool.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=109)** But even when polling newer administrators, I find out they tend to use this tool more often and there's a theory that it's because they're being taught by old school administrators like me.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=121)** So either way, I just want to make sure you know there is no right or wrong.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=124)** Use the tool that you're more familiar with.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=127)** Now, when it come to familiarity, let me show you something.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=129)** First of all, this tool doesn't look like server manager or the other newer tools.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=135)** It looks more like it has a hierarchy like Windows Explorer, which has been around since forever.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=143)** And if I click on an item, so here I'm going to click on the users container, and then here's the administrator user account.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=150)** When I right click on it, you'll see that I get a menu that is very similar to an old school menu.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=155)** And it is very long menu where you can do a lot of things.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=158)** And if I click on properties you see a properties sheet.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=162)** That is one we are very familiar with if you've ever used prior versions of Windows operating systems where we have a bunch of tabs and we can do different things.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=172)** So let me jump back over to the active directory administrative center for just a moment because I want you to be able to compare apples to apples here.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=182)** Here, if I right click on the administrator account, first of all, you'll notice I have a much more restrictive list of things you can do from the context menu, but also if I click on properties, you get a very different looking properties sheet.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=197)** Again, some people may find this type of property sheet to be more friendly, where we don't have tabs to be more friendly, where we don't have tabs but we can scroll down through everything.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=207)** Or I can click to go to the equivalent of the different tabs.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=212)** But again, it's new for a lot of people.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=214)** So for that reason, many people will stick with the active directory users and computers tool since you can still do most functions from here.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-with-active-directory-users-and-computers?u=76281980&t=225)** And I do want to give you one other heads up that as I go through this course and other courses, you'll find that I will perform more actions probably in active directory users and computers than I will in the active directory administrative center.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), scroll down (1), go to (1)
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (3)
> **Env Vars:** dc1 (1), gui (1)
> **Tools:** powershell (2)
> **Analogies:** similar to (2)
> **Warnings:** heads up (1)
> **Speakers:** - another (1)

#### Active Directory Domains and Trusts overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=0)** - [Narrator] Another management tool available to you is called Active Directory Domains and Trusts.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=6)** Here in the Server Manager on DC1, if I go back up to the Tools menu and click on it, the second one on the list that you'll see is Active Directory Domains and Trusts.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=17)** I'll click on it, open up the tool, so you can see what it looks like.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=21)** There's not a lot to look at here, and I'll explain why in just a moment, but basically, the number one purpose for this tool is to configure and manage trust relationships between domains and possibly even between forests.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=38)** So this is where we would be able to see any trust relationships if we had any.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=42)** The problem that we have right now, and the reason you can't see anything is well, if I expand landonhotel, there's nothing to expand, right?
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=50)** I click the expansion and it just goes away.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=52)** It's the only domain we have in our environment right now, so there's no other domain to create a trust with.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=59)** But I want you to know that as you build out your enterprise this is the tool you would use to manage those trust relationships.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=68)** And you'll see how to do that as we get deeper into Enterprise courses and stuff like that.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=74)** Now something else you can also do in this tool is if I actually right-click on the words Active Directory Domains and Trust up at the top here, we can look at the Operations Master, which we'll look at in another video, but we also have the ability to raise the forest functional level.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=90)** So if we were operating at a lower forest functional level and we needed to raise it up, that is something we could do here.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=97)** And along those same lines, from within this same tool, I could right-click on landonhotel.local, and I could raise the domain functional level.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=108)** So that is another option of something you can do with Active Directory Domains and Trust.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=113)** You can raise your functional levels.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-domains-and-trusts-overview?u=76281980&t=116)** But the primary purpose for this tool is for the creating, the configuring, and the overall management of your trust relationships.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (4)
> **UI Navigation:** click on (2), right-click (2)
> **Env Vars:** dc1 (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Active Directory Sites and Services overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=0)** - [Narrator] Another tool available for helping manage Active Directory Domain Services is called Active Directory Sites and Services.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=8)** So, here on DC-1 looking at the Server Manager, we're going to go up to the tools menu.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=12)** I click on it.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=14)** You'll see the fourth choice down we have Active Directory Sites and Services.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=17)** I'm going to go ahead and click on it.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=19)** Now this tool is, once again, an older tool, falls in line with Active Directory Users and Computers, has that same look about it.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=29)** This is where we would manage sites, subnets, replication, network topologies, and things of that nature.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=36)** All right, so for instance, you'll notice that there's not a whole lot built into this.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=41)** You'll see that we have sites, right?
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=43)** So, if I expand the sites container here, this is where we would be able to see the sites that we have.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=52)** Now a site is a representation of a physical location that you may have in your organization.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=61)** All right, so, that's how you can help manage replication between locations where you might have slower WAN connectivity and stuff like that.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=70)** Now in this particular network I only have the one site.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=73)** I haven't actually built out anything.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=75)** We're just building this from scratch.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=77)** So, we have the one domain with the one site.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=79)** The original site that is there by default is actually called Default First Site Name.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=87)** If I expand that, here I see servers, and if I expand that, you'll see DC-1, two, and three.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=93)** All three domain controllers all exist within that one site.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=97)** Now, I'll go into much more detail on how to actually create additional sites, and manage that replication in other videos, in other courses, but this is where you would do that.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=109)** Additionally, there is another container here called the subnets container and if I go to expand it you'll see it doesn't go anywhere.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=115)** There's just nothing there.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=116)** I can click on it, it's blank.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=118)** This is where you can actually correlate a given IP Subnet to a given site.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=126)** Again, to help with that communication and ultimately, and I know I'm kind of working from the bottom up here, we have our Inter-site transports where if I expand those, you'll see we have our IP versus SMTP transport, and this is how we determine the type of communication between one site and another.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-sites-and-services-overview?u=76281980&t=146)** So, that is all managed from within this tool called Active Directory Sites and Services.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** wan (1), smtp (1)
> **Definitions:** is called (1), is a  (1)
> **Code Keywords:** this. (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Active Directory schema overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=0)** - [Instructor] In Windows Server 2019, there a number of graphical tools that are available to manage Active Directory Domain Services.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=11)** And where we see these tools typically is, what we're looking at here is the Server Manager.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=16)** I happen to be on DC1, looking at the Server Manager, and if I go up to the Tools menu, well, I can see a number of these tools.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=24)** Well, believe it or not, there is one more tool that we don't see on this list, and that tool is called the Active Directory Schema.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=33)** This tool is hidden, and it's hidden for a reason.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=37)** Before I get into the reason, let me show you how to access the tool.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=41)** To access it, we need to open up a command line, so I'm going to click on Start, and I'm going to type in CMD, and then that brings me to the Command Prompt, so I'll click on that.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=52)** Here in the Command Prompt window, I'm going to type in a command, regserver32, and to be more specific, it's R-E-G-S-V-R-32, space, and then S-C-H-M-M-G-M-T.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=70)** It's for schema management.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=73)** This is a DLL that has to be registered in order to be able to access the tool.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=78)** So I'm going to hit Enter and you'll see I get a little dialog box that says that the DLL register server in schema management has succeeded.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=87)** So I'll click Okay, and let me leave the Command Prompt window open for a minute, but let's jump back over here to the Server Manager, 'cause I want to show you that even though we've registered the DLL for this tool, it still does not exist on the Tools menu, okay?
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=101)** Schema management is still not easily accessible.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=105)** The way we access it is by creating a custom tool and pulling it in.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=110)** So I'm going to go back to my Command Prompt window, and I'm going to simply type M-M-C, and hit Enter.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=116)** This launches a generic, blank Microsoft Management tool.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=123)** This is a great way to be able to create a custom tool, so for instance, let's say you wanted to quickly and easily access Active Directory users and computers, and Active Directory domains and trusts, right?
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=137)** Let's say you're going back and forth between those two tools all the time.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=141)** Well, you would come up here to the File menu, and you would select Add/Remove Snap-In, and I could actually take Active Directory Users and Computers, I know you can't really see the whole thing, it's a very small window, and I could add that in, and I could take Domains and Trusts, and I could add that in, and now I have a single tool where I can go back and forth and access those two tools, but we're trying to talk about the Active Directory schema here, so let me remove this, remove that.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=170)** You'll notice on the list, we have Active Directory Schema.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=173)** That was not there before registering the DLL.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=176)** So I'm going to add that schema and click Okay.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=180)** Now I have a tool where I can manage the Active Directory schema.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=183)** But what is the schema, and why is it that it's so hidden?
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=186)** Well, if I expand it, you will see that we have two different items here.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=191)** We have Classes and Attributes, and if I click on Classes, I get an extensive list of all the different classifications of objects that are available in Active Directory, and if I click on Attributes, I get a very extensive list of all the individual attributes that you find on all the different types of objects in Active Directory.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=214)** In other words, it's the schema that kind of defines the design or the makeup of Active Directory.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=220)** And modifying it can have massive consequences.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=225)** So why is it hidden?
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=228)** Why should you not be able to access it so readily?
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=232)** Because you can cause a lot of damage, and in fact, even though I've now shown you how you can go in and manually have access to this information, you typically, as a systems or network administrator, should not be doing it.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=249)** Any modifications to the schema would typically be done programmatically by a developer.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/active-directory-schema-overview?u=76281980&t=255)** But in case you ever do have a need within your organization, you now know where to access it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1)
> **Env Vars:** dll (4), dc1 (1), cmd (1)
> **Tools:** command prompt (4), command line (1)
> **UI Navigation:** click on (4)
> **Definitions:** is a  (2), is called (1), in other words (1)
> **CLI Commands:** snap (1), find (1)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)

#### Managing AD DS from the command line
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=0)** - [Narrator] Besides managing active directory, through the graphical user interface, there are also a couple of ways that you can manage by using scripting or command line test.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=15)** One thing that you may have noticed, here we're in the server manager on DC1, when in the past when I talked about the tools menu and we've seen all the different tools that are available, all of these Active Directory tools are all graphical tools, except for one.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=31)** It's the one right here in the middle, it's the third one on the list of the five Active Directory tools and it's called Active Directory Module for Windows PowerShell.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=39)** If I click on that, you will see that it take me into a Powershell console.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=46)** Alright, and so this is where you could do PowerShell scripting or enter in specific PowerShell commands to manage Active Directory.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=58)** Now, there's not a whole lot for me to show here because, other than just randomly typing in commands.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=64)** Let me close that.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=66)** The other way we can do it is from the old traditional command line.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=71)** Click on start and I'm going to type in C-M-D and then open up our Command Prompt.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=77)** In here there's a number of what's called D-S commands that can be used.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=83)** For instance, I'm going to type in D-S add and then I'll put a slash question mark.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=91)** Okay, so this is how you can get help to see all the different variables for this command.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=96)** So I hit enter and you'll see that there's a number of options here, like D-S add a computer or contact, or group, an organization unit, user, quota, okay and then they give you examples on how you would do it.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=110)** I also what to show you, down at the bottom of this list, you'll notice besides D-S add, which would be specifically for adding an object or creating an object, we have D-S get for displaying an object, we have D-S mod for modifying an object, D-S move for moving it, D-S query just to query objects, D-S-R-M that's one that throws people, it's not D-S delete or anything like that, it's D-S-R-M for removing or deleting objects.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-ad-ds-from-the-command-line?u=76281980&t=140)** Okay, so, and I'm not going to get into the super specifics of how to use these individual commands, that's stuff that will be covered when necessary, when talking about specific management tasks, but I wanted to make sure that you had an understanding that besides the graphical user interface, you also do have command line capabilities which then give you scripting capabilities within Active Directory Domain Services Management.

> [!info]- Semantic Content
>
> **Tools:** powershell (4), command line (3), command prompt (1)
> **Code Keywords:** interface (2), module (1), let (1), delete (1), super (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Env Vars:** dc1 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)


### 3. Flexible Single Master of Operations (FSMO)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### FSMO overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=0)** - [Instructor] In Active Directory Domain Services, all domain controllers are pretty much equal in the sense that we work in what's called a multi-master replication typology and any domain controller has the ability to perform pretty much the same actions that any other domain controller can perform.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=19)** But you need to know that there are certain components of the database and certain actions in which we need to designate a single master.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=27)** So this means that one domain controller will be the master of that specific operation.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=34)** Now that one master can be moved from one domain controller to another and that's why we call it Flexible Single Master of Operations or FSMO.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=45)** So let's take a look at the five FSMOs that we have in Windows Server 2019.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=51)** To do this I'm going to connect to pretty much any domain controller, but I'm going to choose DC1.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=59)** Here in the Server Manager, if I go up to the Tools menu, there's a couple of different ways we can do this, but I'm going to take us to Active Directory Users and Computers.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=70)** In Active Directory Users and Computers, I'm going to right click on the domain itself, right at landonhotel.local.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=77)** Right click, and I'm going to select Operation Masters.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=82)** You will see here that there are three tabs.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=84)** One that says RID, one that says PDC, and one that says Infrastructure.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=88)** And the reason there are three tabs is because there are five FSMOs total, but three of them are what's known as Domain FSMOs, and that means that there will be one domain controller that is the master in each domain in our forest.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=104)** Okay, so let's look at what these are.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=106)** First we have RID.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=107)** You'll see here that it says the operation master that manages the allocation of the RID pools, and RID stands for relative ID, to other domain controllers.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=118)** So this is what's known as the RID master and it manages the master list of relative IDs to be handed out to all the other domain controllers when creating objects.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=129)** The second tab says this is the operations master that emulates the functions of a primary domain controller, that's where the letters PDC come from, for pre-Windows 2000 clients.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=142)** Okay, so this is what's called the PDC emulator, and it emulates to pre-Windows 2000 Clients that are used to the old days when we used to have a primary domain controller and then backup domain controllers.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=155)** Now you might be thinking to yourself, "Pre-Windows 2000?"
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=157)** That's 20 plus years ago.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=160)** What environment would possibly have that?
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=163)** You're probably right.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=164)** There really aren't environments that have that really any more.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=169)** I mean I suppose there's some you'll find way out there some where.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=172)** But there are other functions that still exist within this PDC emulator as far as things like time management, stuff like that, that have maintained even post Windows 2000.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=184)** The third one is the infrastructure master.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=187)** And this ensures consistency of objects for inter-domain operations.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=192)** So this means that the infrastructure master will be responsible for having representative connection objects to connect and view and manage from other domains.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=205)** Now you will notice no matter which tab I'm on, infrastructure, PDC, or RID, down here where it says operations master, it is DC1.landonhotel.local.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=216)** This is because the three domain FSMOs by default will be on the first domain controller installed in the domain.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=227)** And in this case it was DC1.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=230)** Let's close this window and I'm going to close out of Active Directory Users and Computers.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=233)** And I'm going to go to a different tool called Active Directory Domains and Trusts.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=240)** In this tool, I'm not going to click on the domain, landonhotel.local, but I'm going to actually click on Active Directory Domains and Trusts all the way up at the top.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=249)** I'm going to right click and select Operations Master.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=253)** And this then says that we're now talking about the domain naming operations master.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=258)** Okay, or sometimes just known as the domain naming master.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=261)** Ensures that domain names are unique and this, even though it doesn't say this here, this is within the forest.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=270)** So there is a single master within a forest, not a domain, but a forest, that makes sure that all domains and all your different trees are all unique.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=281)** And again, if we look down here to what is the domain naming master, it is DC1.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=286)** Why?
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=287)** Because by default, it goes to the first domain controller installed in the forest, which again, in this case was DC1.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=295)** Now the last of the five FSMOs is a little bit tricky to take a look at, and it's what's called the schema master.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=302)** And in order to see the schema master, we have to go to a schema management tool.
>
> **[5:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=308)** And this tool, you won't find it on the Tools menu.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=312)** You have to go ahead and access it via a custom tool.
>
> **[5:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=316)** So I'm going to click on Start and type in CMD to get us to a command prompt where I can then type mmc which will open up a customizable mmc, File, Add Remove Snap-in.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=330)** Here's Active Directory Schema.
>
> **[5:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=331)** I know it's kind of hard to see because the window's small.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=333)** There you go, Active Directory Schema.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=334)** We'll add it, click okay.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=337)** I actually cover this in a video where we talk about the Active Directory Schema tool.
>
> **[5:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=342)** But if I right click on the words Active Directory Schema, and select Operations master, this is where you will see an explanation that says the schema master manages modifications to the schema.
>
> **[5:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=353)** This is the one master database.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=356)** And again, the role is held by default by DC1.landonhotel.local because it was the first domain controller in the forest.
>
> **[6:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=367)** So those are your five FSMOs.
>
> **[6:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=369)** We have two FSMOs in the forest which are the schema master or the domain naming master.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=376)** So there'll be one domain role in the entire forest.
>
> **[6:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/fsmo-overview?u=76281980&t=378)** And then we have three FSMOs per domain where there'll be one domain role in each domain, and those are the RID master, PDC emulator, and infrastructure master.

> [!info]- Semantic Content
>
> **Env Vars:** rid (7), dc1 (6), pdc (6), fsmo (1), cmd (1)
> **Definitions:** means that (3), known as (3), is a  (2), stands for (1)
> **Code Keywords:** let (3), this, (2), from, (1), default, (1)
> **UI Navigation:** click on (4), go to (2)
> **CLI Commands:** find (2), snap (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### Transferring a FSMO role
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=0)** - [Narrator] When talking about FSMOs, the first word is flexible, and when we talk about flexibles, because we can move an operations master role from one computer to another, and this is typically what's called transferring a FSMO role.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=18)** So, I want to demonstrate how you would do that now.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=21)** To do this, I want to connect to DC-2, and I specifically want to connect to DC-2 because the FSMO roles are currently held by DC-1, and I want to show you how we take another demector, and bring it over.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=35)** So, let's go there now.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=37)** Here in the Server Manager, we're going to go up to the tools menu, and I'm going to select Active Directory Users and Computers because this is where we can see the three domain FSMOs.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=47)** I'm going to right click on landonhotel.local, and select Operations Masters.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=53)** And you will notice that the RID master is held by DC-1, PDC emulator held by DC-1, and Infrastructure master held by DC-1, but I'm going to take the RID master, and I want to transfer it.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=64)** Now to do this, you'll notice that here in the middle, it says, to transfer the operations masters role to the following computer, click Change, and the computer that's listed is DC-2.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=76)** Why?
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=77)** Because that's the computer I'm currently on or connected to.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=80)** You could do this remotely.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=82)** So, to make this transfer, I'm going to click Change.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=88)** It's going to ask me if I'm sure whether I really want to do this.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=90)** It's something of significance so it's good to always have that warning.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=94)** And I will say, yes, I'm sure I want to do it.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=96)** And almost instantaneously, it says, the operations master role was successfully transferred.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=100)** I click OK, and now you can see that the operations master for the RID master is DC-2, but if I click on PDC emulator, it's still DC-1, Infrastructure master still DC-1.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=113)** It's only the RID master that has switched to DC-2.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=117)** Now, what happened when I clicked Change?
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=119)** What happened is DC-2 basically says to DC-1, hey, I'd like to be in charge of the relative IDs for a while, and DC-1 says, okay, I was tired of doing it anyway, so it makes sure that all of its information is up to date and complete, and then it transfers over its information to DC-2 so that it has all the latest and greatest information about the relative IDs, and then, at that point, it's able to say, great, I'll pass the baton, and you are now in charge of this list.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=155)** So, enjoy.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=156)** All right, so that's kind of the gist happening behind the scenes.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/transferring-a-fsmo-role?u=76281980&t=160)** So, that is how you transfer an operations master role.

> [!info]- Semantic Content
>
> **Env Vars:** rid (4), fsmo (2), pdc (2)
> **Code Keywords:** this, (2), let (1), this. (1), while, (1), pass (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Speakers:** - [narrator] (1)

#### Seizing a FSMO role
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=0)** - [Instructor] Transferring a FSMO role from one domain controller to another is a pretty straightforward and simple process, when both domain controllers are up and running and communicating easily.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=13)** But what happens when the domain controller that's hosting a FSMO suddenly becomes unavailable, or unexpectedly before we could transfer the role?
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=23)** Well the solution is we do what's called seize the role from that other domain controller.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=30)** So to demonstrate this, I'd like to first of all show you that DC-1, which is hosting most of our FSMOs, is in the off state.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=38)** So you can see here in my Hyper-V manager, DC-1 is off.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=42)** And that is because I shut it down, therefore made it unavailable.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=47)** So let's connect to DC-2 and see what the result is when we try to transfer the role.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=53)** Here in the Server Manager, I am going to go to the Tools menu, and select Active Directory Domains and Trusts, because this is where we can see the domain naming master role.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=66)** And you'll see that right away, I'm already dealing with error messages.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=71)** And it says you cannot modify domain or trust information because the PDC emulator cannot be contacted.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=77)** That happens to be one of the FSMOs that DC-1 is hosting.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=82)** Now I'm going to click OK, through the message and I can still get into the tool, but when I right-click on Active Directory Domains and Trusts, and select Operations Master, watch what happens.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=93)** Normally, a window pops right up, and it says hey, the domain naming master, this is who it is, and do you want to transfer it?
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=100)** But instead, I get this spinning cursor, because what it's doing is it's trying to contact that master and it cannot.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=108)** Now depending on the speed of your machine, this could take a few seconds, or it could take a few minutes.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=113)** So I'm going to go ahead and jump ahead here to once it's done thinking.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=119)** Okay, on my end, I think it took a good 20 or 30 seconds or so, but I now have a window that has popped up, and I want to show you that there is a slight difference from what we've seen in the past.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=130)** It does show us that the domain naming operations master is DC-1, but instead of having the ability to transfer it, it says the current operations master is offline, and therefore the role cannot be transferred, and the Change button is grayed out.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=147)** So we can't do this here.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=149)** I'm going to close this window.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=152)** And what I'm going to show you is that we need to go to a Command Prompt, and use a utility called ntdsutil to force the transfer, or do what's called seize the role.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=163)** So I'm going to click on Start.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=165)** And I'll just select my Command Prompt here.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=168)** And in the Command Prompt window, I'm going to type in N-T-D-S-U-T-I-L.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=174)** So ntdsutil, and when I hit Enter, watch what happens.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=178)** It takes me to a special prompt called ntdsutil.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=183)** Now if you ever need help within this particular utility, all you have to do is hit question mark.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=189)** So if I hit question mark and hit Enter, you'll see here that I can see everything I could do with this utility.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=194)** And there's a lot more you can do besides managing your FSMO roles.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=200)** But right here, there is an option for Roles, and that's the one we want to do, so I'm going to type in R-O-L-E-S, and hit Enter, and you'll see it takes me to a prompt called fsmo maintenance, where again if I hit question mark, you'll see that I have a number of choices.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=217)** If I start at the bottom of this list, you'll see where you have the ability to transfer any of the five roles, and we also have the ability to seize any of the five roles.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=229)** But before I can do that, I need to first jump to an additional one more step down within this utility called Connections, which is where we connect to a specific instance.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=241)** So I'm going to type in connections, and that takes me to a server connections prompt, where again I could hit question mark, and you'll see here that I have the ability to connect to a specific domain or server.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=254)** So I'm going to do that now.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=255)** I'm going to type in connect to server dc-2.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=264)** Even though I'm on DC-2, within the utility I still have to make a connection.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=269)** So I've made the connection, I will hit Enter.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=271)** I am now connected to DC-2 using the credentials of however I'm logged in, which is as the administrator.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=279)** Now I need to, and this is going to be a little bit weird, I'm going to type in the word quit.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=283)** This doesn't quit out of ntdsutil, it only quits me out of the server connections.
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=288)** And when I hit Enter you'll see it brings me back to fsmo maintenance.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=292)** From there, let me hit question mark one more time, just so you could see the list, and you'll see here that I'm going to type in the word seize, so S-E-I-Z-E, space, naming master.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=306)** Just as it's listed in the help up above.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=309)** And when I hit Enter, I get a prompt that comes up, says are you sure you want DC-2 to seize this role?
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=317)** And I'm going to say yes, I want to do this.
>
> **[5:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=319)** So I'll click Yes.
>
> **[5:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=320)** And it says it's attempting a safe transfer of the domain naming FSMO before seizure.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=326)** Cause first, its preference would be, hey, you know what, I don't know that I have the latest and greatest information and everything's up-to-date, so I'm going to go ahead and reach out to what I believe to be the current master, and see if I can do this.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=344)** Once I cannot do that, then I can go ahead and seize it.
>
> **[5:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=350)** And so that's where we can see that everything has happened here as far as seizing the role.
>
> **[5:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=355)** And if everything has worked correctly, I will jump back over to Active Directory Domains and Trusts, and now when I go into Operations Master, you'll see here that sure enough, DC-2 is now the domain naming operations master.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=371)** From here, I want to tell you, just kind of real quick, even though that's how you seize it, one concern that we used to have in the old days is what happens if DC-1 comes back up?
>
> **[6:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=381)** Cause now you have two computers who both think that they are the master.
>
> **[6:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=384)** And I will tell you that that is no longer an issue.
>
> **[6:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/seizing-a-fsmo-role?u=76281980&t=387)** In today's world, automatically, it has been flagged so that when DC-1 comes back up and running, it will look at DC-2, the two will negotiate with one another, they will look to see who has the most up-to-date information, and one of them will automatically be assigned the master role once the original has returned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), this, (1)
> **Env Vars:** fsmo (4), pdc (1)
> **UI Navigation:** go to (2), right-click (1), click on (1)
> **Tools:** command prompt (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Active Directory Permissions

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Permissions overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=0)** - Managing the active directory domain services environment is one of the most common tasks that an IT professional will perform.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=7)** In fact, there is so much to be done when it comes to managing active directory, it's important that you sometimes choose to make the wise decision to go ahead and assign some of those administration needs out to other people.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=22)** So what I'd like to do here is to connect to one of our domain controllers and show you how you can actually assign permissions over certain active directory objects out to other administrators.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=36)** So for this demonstration, I'm going to connect with DC1.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=40)** Here in the server manager, we're going to go up to the tools menu, and then select active directory users and computers.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=50)** Now before I go any further, I do want to mention some things that I did before recording this video, so that if you're following along you can also do the same thing.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=60)** If I expand my domain, Landonhotel.local, and I click on the users container, there's one additional user that's not there by default.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=69)** And that's a user that I've created called junior admin.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=73)** I didn't do anything special.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=74)** I just created an account called junior admin.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=76)** An additional thing that I did is I created a customer service organizational unit, and inside of it I created three users which we will say are part of the customer service department.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=88)** Now, when it comes to assigning permissions to other administrators, so let's say that we want junior admin to have some level of control over the users in customer service.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=100)** Well, there's a couple different things we could do.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=102)** If I go back to the users container, you'll notice that there are a number of built-in groups.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=108)** And one of the most notable ones is one called domain admins, which will give like the all-powerful, you can administrate things in the domain.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=118)** But the problem is if I take junior admin and I make that user a member of the domain admins group, junior admin's going to have a lot more in the way of privileges than just managing a few users in customer service, okay?
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=131)** We really want to do something that's called the principle of least privilege.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=134)** In other words, we only want to give him the permissions needed.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=137)** So let me show you how you can do that.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=140)** If I go to the customer service container, I'm going to right click and go to properties.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=145)** Now what I'm looking for in this properties sheet is the security tab, and you'll notice, it does not exist by default.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=151)** This is considered an advanced feature.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=154)** So let me cancel out of that window and in active directory users and computers, the way we get to the advanced features is by going to the view menu and selecting it: advanced features.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=166)** Now you'll notice that we can see a lot more, and we're not going to worry about everything that was just created, but I am going to right click on customer service and select properties, and we're going to look at the fact that we have a number of additional tabs, most specifically, a security tab.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=182)** In this security tab, we will see what basically looks the same as the security tab on any file or folder, just in any Windows environment.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=190)** We have an access control list, or an ACL, of users and groups, and then a set of permissions that they are allowed or denied.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=199)** Additionally, we have some special or advanced permissions.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=203)** That's what I'm going to do here, 'cause I want to get very, very particular on what we're going to do.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=208)** So I'm going to click on advanced.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=210)** And in here, I'm going to go ahead and add a permission.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=216)** The first thing I have to do is select the principle that I'm adding to this list.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=220)** So I'll click on that and then type in the word junior and when I click check names, it'll find junior admin.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=227)** I'll click okay.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=229)** And we want to allow a certain permission.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=231)** And then we have to choose what do we want to be working with.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=237)** We want to allow our permission on this object and all descendant objects, or just maybe all the descendant objects, meaning the objects within the container, but I'm going to actually go down this big long list and jump to the very bottom and say that I want to give junior admin some level of control over the descendant user objects, so the user objects inside this container.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=258)** Alright, 'cause that's what I'm trying to do.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=259)** I'm trying to let junior admin have some level of permission over the customer service users.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=266)** We'll leave the defaults of listing and reading permissions.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=269)** They can't really do anything there, but specifically we're going to say that junior is allowed to reset and or change users passwords.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=277)** Now click okay.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=281)** And you'll see that junior admin is now on the list, being able to do a variety of things.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=285)** If I click okay once again, you'll see junior admin is on the list here, and if I scroll down, there is a special permission that has been flagged.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/permissions-overview?u=76281980&t=296)** So, that is pretty much how permissions work in the advanced feature version of active directory users and computers.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (2), select the (1), scroll down (1)
> **Code Keywords:** let (4), default. (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** dc1 (1), acl (1)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - managing (1)

#### Delegation of Control Wizard
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=0)** - [Instructor] Even though permissions can be assigned over Active Directory objects manually the same we would do with files and folders, Microsoft has given us a nifty little wizard that we can use to simplify the process, so here we're looking at the server manager on DC1, and I'm going to go to the Tools menu, and take us into Active Directory Users and Computers.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=26)** And in here we can see that if we go to the properties of the customer service container, I had previously assigned, I meant to go to the Security tab here, I had assigned Junior Admin the ability to reset and change passwords for the users.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=46)** But I'm going to go ahead and remove that, okay, so Junior Admin is gone, not on the list anywhere.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=53)** So we'll click Apply, and I'll click Ok just to doubly make sure that it's gone, and I'm going to go up to the View menu.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=60)** And I'm going to deselect this checkbox for Advance Features, that we had done in the prior video when we saw how to go ahead and assign permissions manually.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=71)** What I'm going to show you is how this can be done much faster.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=74)** And this is done with something called the Delegation of Control Wizard.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=77)** So I'm going to click on Customer Service here, and I'm going to right click, and you'll see here, right at the top, there's a selection for Delegate Control.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=86)** And when I click on that, it takes me into the Delegation of Control Wizard.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=92)** So here's a welcome screen, I will click Next.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=96)** From here it says, Select one or more users or groups that you want to delegate control, so who do we want to give some level of control to?
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=105)** And the answer is Junior Admin.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=107)** We're basically going to try to do the same thing but through a wizard.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=110)** So I'm going to click Add, and I'll type in junior, Check Names, there's Junior Admin, Ok.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=118)** And then I'll click Next.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=119)** Now I need to choose what it is that I want to allow Junior Admin to be able to do.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=125)** And if I take a look at the list here, you'll see that there's a check box, second on the list, Reset user passwords and force password change at the next login.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=136)** And I can click Next and Finish.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=141)** Now if I turn the Advance Features back on again, okay, I just wanted to show you to don't need that to run the wizard.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=150)** But if course I do need that to be able to see the Security tab.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=153)** I'm going to turn the Advance Features back on, go to the Properties of Customer Service, under the Security tab, we'll see that Junior Admin is back with some special permission.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=166)** And I click on Advanced, you'll see here that Junior Admin has been added with the ability to go ahead and reset passwords on the descendant user objects which essentially is the exact same thing that we did manually through the advance features.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/delegation-of-control-wizard?u=76281980&t=185)** But now you can see how much faster and how much easier it is using the Delegation of Control Wizard.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (3), checkbox (1)
> **CLI Commands:** make (1)
> **Env Vars:** dc1 (1)
> **Speakers:** - [instructor] (1)

#### Creating a custom management tool
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=0)** - Once you have delegated some level of control out to a user, you have to make sure that that user has the tools and the know-how to perform the task you have delegated out to them.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=12)** To demonstrate how we can create a custom tool that's perfectly matched to a delegated task, I am looking right now at the Server Manager on DC1 and the first thing I'd like to do is to go up to the tools menu, and take us into Active Directory Users and Computers, because I want to show you something that I've already done before recording here.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=33)** In our Customer Service container, we used to have three users.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=37)** I've created a fourth one.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=38)** And that's a Customer Service Manager.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=41)** Right, so this is an example of somebody who is not part of the IT Department.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=46)** And if I go into the properties of the Customer Service Container, you'll see under the security tab that I have already gone through the delegation of control wizard and added some permissions to Customer Service Manager and if I dig all the way down into it I'm just going to tell you, I've said that this manager can reset passwords for their own department.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=69)** Okay? So I've already done that.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=71)** That's already been taken care of.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=73)** But the Customer Service Manager doesn't know how to reset passwords, and maybe you don't want to give them access to Active Directory Users and Computers.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=80)** So, I'm going to close out of this tool and I'm going to create a tool for the Customer Service Manager.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=85)** We do this by opening up a custom mmc.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=88)** So, I'm going to click on Start and type cmd, which will take me to a command prompt where I can then type mmc, which opens up this blank management tool.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=100)** The first thing I to do is add a Snap-In, right?
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=103)** So, go up to File, and select Add/Remove Snap-In.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=106)** And it's Active Directory User and Computers that is the Snap-In for Reset Passwords.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=111)** So, I'm going to add that in, and click OK.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=114)** But right now, this is not really any different than if we just look at Active Directory Users and Computers.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=121)** So, I'm going to take Customer Service Container and I'm going to right click on it and select New Window from Here.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=129)** Now, I've created a tool where someone would see is the Customer Service Users.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=136)** That alone might be good enough because all you have to do is teach the Customer Service Manager to right click on a user and select Reset Password.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=144)** But if you really want to simplify it even further, I'm going to show you something neat, it's called a Taskpad View.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=149)** I'm going to right click on Customer Service and select New Taskpad View.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=153)** Takes me to into a Wizard.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=154)** Here's the welcome screen. I'll click next.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=157)** I can choose whether I want a vertical lists with buttons on the left, or a horizontal list with the buttons on the bottom, which is what I like.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=164)** And by the way, it's hard to see when going through the Wizard, but the end result will make sense to you.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=169)** So, I'm going to click Next and we're going to say that we want this Taskpad to be used only on the selected tree item. Right?
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=175)** Only for the Customer Service Container. Click Next.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=180)** We'll actually call this Reset Passwords.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=186)** And click Next.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=188)** And now that's the end of creating the view, but now we have to create a task itself.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=192)** And that's why this box checked by default that says add a new task after this Wizard closes.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=197)** So, I'm going to click Finish, and it jumps into a new Wizard that says create a new task.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=201)** So, I'll click Next on the welcome screen.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=205)** It is a Menu Command.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=206)** That is the task that I want to create because resetting password is something that I can select from the menu.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=212)** So I'll click next.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=214)** Here is where I can choose the available commands, one of them is called Reset Password.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=219)** Click Next.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=221)** The name is appropriate as is. Next.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=225)** I can give it an icon.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=226)** I can select from the default icons or I could import my own custom icon.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=231)** I'm going to go ahead and select the keys, I think that is something that probably is closely enough related to this.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=236)** I'll click Next.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=238)** And I could add an additional task by checking the box saying when I finish run this Wizard again.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=243)** But I have no tasks to create.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=245)** I want just the one task. Very simple. Finish.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=250)** So, now I have this Taskpad View.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=253)** I have a tool to where all you see is the Customer Service Container, and in fact, I could even take this a step further.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=260)** that can go to Customize, and I can get rid of the Console Tree.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=266)** And click OK.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=267)** So, now I don't even see the Customer Service Container, I just see the users.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=275)** And in order to rest a password, all I do is click on a user, and then I have a button down below to reset password.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=282)** And all you have to do is click on that button and you'd be going through the process of resetting the password.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=287)** This is a tool that pretty much anybody can do.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=290)** Okay? They don't have to be part of the IT staff.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=292)** From here I would just simply do a File, Save As, give it an appropriate name.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-custom-management-tool?u=76281980&t=297)** Save it in a location that the Customer Service Manager can access and you have a custom tool, very easy for a delegated user to be able to go ahead and perform their task.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), select the (1), go to (1)
> **CLI Commands:** snap (3), make (2)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Code Keywords:** this. (1)
> **Env Vars:** dc1 (1)
> **Tools:** command prompt (1)
> **Speakers:** - once (1)


### 5. Managing AD DS Objects

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=0)** - In Active Directory Domain Services, there are many different types of objects that you'll be responsible for managing.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=6)** One of those objects is something known as a user account object.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=12)** Now this user account object is basically an interface between an actual human user in your company and the Active Directory Domain Services enterprise.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=24)** So if you think about it you have the actual people in your company.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=28)** And when they're on the network they need to be able to access resources.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=32)** Well you manage their ability to access or even restrict their access to resources through the user account that you create to represent those people.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=42)** So to demonstrate the creation of one of these user accounts, I'm going to connect to DC1.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=50)** Here in the Server Manager, I am going to go up to the tools menu, and select Active Directory Users and Computers.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=60)** Here in Active Directory Users and Computers, you will see we have our domain, landonhotel.local, and if I expand that there's a number of folders or containers.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=70)** And when I want to create a user account object, I just need to select the container that I want to create the object in.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=78)** So, how about we take this one right at the bottom that says users.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=81)** Right, that seems like a good container for a user.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=84)** So I'm going to click on it and them I'm going to actually right-click using the right mouse button, and in this menu I'm just going to hover my mouse over the word new, and you'll see it pops out a secondary menu, and down near the bottom we see user.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=99)** So I'm going to click that.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=102)** Here, I have the new object user wizard.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=106)** So, we're going to say that we have a new user in our company named Kathy Lopez.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=111)** So we're just going to simply fill in the form here.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=115)** First name is Kathy.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=118)** I'm not going to worry about a middle initial, but if we go to the last name, last name is Lopez.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=125)** And you'll notice that as I typed in the first name and the last name, the full name field auto-populated.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=131)** So it's already saying that we have Kathy Lopez.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=135)** Next, we have to assign a user login name, and this is something you should put a little bit of thought into for your organization, you should have some kind of a consistent naming convention, and use one that would work no matter how large your enterprise is.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=151)** Now a very typical naming convention would be first initial and last name, so that would just simply be klopez.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=158)** But you want to be careful because what happens if I hire Kathy's brother Kevin, and so now I have Kevin Lopez which would also be klopez, so you have to have some kind of alternative backup to what happens when you have a duplicate, cause you're not allowed to have duplicate user account names on your network.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=176)** So here we'll see that we have klopez@landonhotel.local.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=180)** The pre-Windows 2000 name is LANDONHOTEL\klopez.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=185)** Okay, it's just a matter of how it's looked at by the system.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=188)** I'm going to click on next, and then we get to the password screen.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=192)** Now I'm going to go ahead and type in a password that I like to use here.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=197)** And you have to type it in twice, make sure it matches.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=200)** But then we have four options when it comes to the password.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=202)** The default is that the user must change password at next logon.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=205)** And that is a recommended way to go.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=209)** What this means is the password I've typed in might be something simple like temp123.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=215)** And that won't necessarily work if you have certain password restriction policies that you have to be more complex, but the idea is that you're using a very basic password, you give it to the user, the user logs on using the password you assigned, and then they are prompted to change to a password that only they know.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=234)** That is the recommended strategy.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=236)** You could, however, click the second box that says, "user cannot change password," which means that you, the administrator, actually will be assigning passwords and have full control over the users' passwords.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=249)** This is not a good idea, but it is an option that's available.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=253)** The third checkbox is password never expires.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=256)** This is if you want to override any password policies that you have forcing an account to have to reset their password every X number of days.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=266)** You typically do not want to do this on any of your strong security accounts, okay, even though it used to be a common thing that IT administrators because they knew about this, they would check the box so that they never had to reset their passwords, but that's the exact opposite of what you should do.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=283)** Administrators that have power should regularly be changing passwords so that you don't have a security vulnerability.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=289)** Whereas if you have, let's say, like a kiosk account that has no privileges whatsoever, maybe you never have change that password just for simplicity.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=297)** And the last checkbox is that the account could be disabled.
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=301)** And that means that you're creating the account, it will be established in your Active Directory database, but the user account can't be used yet, it can't be logged in.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=312)** This would be done if you were going to forecast a future hiring.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=315)** Maybe somebody's been hired but they haven't hit their start date yet.
>
> **[5:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=318)** You want to create the account, get the work done, have it in Active Directory, only to then be enabled at a future date once the employee has been hired.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=328)** So at this point we would make whatever selections are appropriate, and like I said, the default is the one it really should be.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=334)** Okay, so I'm going to put it back to that.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=336)** And I'll click next, and finish.
>
> **[5:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=338)** And just like that, you can see that we now have a user account named Kathy Lopez.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-user-accounts?u=76281980&t=345)** And that's all there is to creating a user account in Active Directory.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), checkbox (2), select the (1), right-click (1), go to (1)
> **Code Keywords:** interface (1), new, (1), override (1), this, (1), let (1)
> **Definitions:** means that (2), known as (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **Env Vars:** dc1 (1), landonhotel (1)
> **Best Practices:** recommended (2)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)

#### Moving user accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=0)** - [Instructor] One of the nice features about Windows Server 2019 Active Directory Domain Services is the ability to quickly and easily move user account objects from one container to another.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=13)** So, here I am on DC1 and we are in the Active Directory Users and Computers utility, and we've just created a user account named Kathy Lopez, and when I created this account, I added it into the Users container, okay, that's what we're highlighting on here is the Users container and we have Kathy Lopez, but maybe I've realized, well, Kathy Lopez wasn't supposed to be in the Users container.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=40)** Kathy Lopez is a member of our customer service team, and therefore, that account should be in the Customer Service container.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=50)** Alright so, I would like to show you a few different ways that you can do this.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=54)** The old school way of doing it is that you would right click on Kathy Lopez' account, and you would select Move, and then, you could pick the container you would want to move that account to.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=68)** So, I will highlight customer service and click Okay, and you'll see that the account has disappeared from the Users container and if I highlight Customer Service container, there's Kathy Lopez.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=81)** Now, we have a much easier way of doing it, one that makes a lot of sense, which is just a simple drag and drop.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=89)** So, I could just click and hold down on Kathy Lopez' account and you'll see I'm going to move this account, and I'm just going to drag it right back to the Users container, and because it is so easy to just accidentally click and drag something as you're moving a mouse around, they now throw a warning message in there to say, hey, look, if you move an object from one container to another, it could have an effect on the rights and permissions that that object has.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=120)** Okay, and the reason is because, you know, we can assign certain group policy object permissions and things like that to other containers.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=127)** This is just a warning saying are you sure you know what you're doing?
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=130)** And I'ma say yes, I do know what I'm doing, and Kathy Lopez has disappeared, and is back over in the Users container.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=138)** It's actually down at the bottom if I were to refresh, it would go back to alphabetical, but since we just moved the account, it ends up going at the bottom, but I also would like to point out that you have the ability to do this with multiple accounts, right, so let me go back to Customer Service and I'm going to take two accounts.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=156)** So, I'll take Pamela, and then I'm going to hold down the shift key on the keyboard, and select Robin Hart.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=162)** Okay, and you can see they're both highlighted, or just to demonstrate that better, I'll highlight the very top one, I'll hold down shift and click the bottom one, you see they all highlight, or the other option is you could highlight Earl, alright, I have that here, and I'll hold down the control key on the keyboard if I would like to skip over a user, and I'll select Robin and you'll get two users selected that way.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=183)** When you do this, you once again, can just drag and drop.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=187)** You get the warning message and say yes, and they both move.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=191)** If I go over to the Users container, and now, let's say I want to take all three users, I'd like to show you that if I highlight all three, I can once again right-click, select Move, Customer Service, Okay, they've all disappeared and they appear in the Customer Service container.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=209)** Alright, so you can see that there's two main ways to do it.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/moving-user-accounts?u=76281980&t=212)** You can either right-click and select Move, or you could just simply drag and drop if you ever have a need to move a user from one container to another.

> [!info]- Semantic Content
>
> **UI Navigation:** drag and drop (3), right-click (2), click on (1)
> **Code Keywords:** let (2), this. (1), throw (1), this, (1)
> **Warnings:** warning (3)
> **Cross-References:** go back to (2)
> **Env Vars:** dc1 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### User account templates
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=0)** - When working in a larger enterprise environment, the process of creating user accounts can become quite tedious.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=9)** Not only do you have many users that you may need to be creating, you'll find yourself creating a lot of users that have similar needs.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=20)** So for instance, if you hire a customer into a certain department in a certain position, and there's 50 other people in that department with the exact same position, odds are they need the exact same rights and permissions.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=35)** They need the same access to the same resources, and so it can get quite tedious.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=40)** Well there is a solution for this, and it's called a user account template.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=45)** So what we're looking at here is I'm on DC1, and we're in the Active Directory Users Utility, and we're looking at the Customer Service container, so we have our Customer Service users.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=60)** And I would say that it's pretty common that anybody I hire into the customer service department is going to have the exact same needs as pretty much any other customer service user.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=70)** So I'm going to create a new user account, just like I have done before with these other accounts by right clicking on Customer Service, or I'm actually going to show you, you can right click in the blank space when you're looking at the container, and it's the same menu.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=84)** You go to New, and then User.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=89)** But this time, I am going to call this CustSvc and that's first name, and then Template.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=100)** Okay so this is the Customer Service template.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=103)** And in fact, I'm going to go back to the First name, and I'm going to show you that it's not uncommon to put in underscore before the name, and you do that only on the templates and that way alphabetically they will all show up at the top of the list.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=118)** So we have our customer service template, and for User logon name, we'll just say ctemplate.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=126)** It's not really going to matter and I'm going to explain why in just a moment.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=129)** Click Next, assign a password because we have to.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=133)** It really doesn't matter, again.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=136)** In this case, we're going to say that the user cannot change password, password never expires, and most importantly, account is disabled.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=146)** And that's why I was saying it does not matter what the actual user log in name is or the password because this account is going to be disabled.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=153)** We never want anybody to ever log in as this account that we're creating right now.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=159)** So I'm going to click Next, and Finish, and we now have our customer service template.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=164)** If we go into the properties by double clicking on this account, there's a number of property sheets out there, and we would go through all the different properties and populate anything that would be common to all customer service employees.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=180)** And the number one piece of commonality would be the Member Of tab, which it shows what groups this account is a member of.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=190)** So I'm not going to do anything here, but I just kind of wanted to show you: this is what you do, this is how you set up the template.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=197)** Once you have this template established, so that it's the typical customer service user, in the future, when you go to create an additional customer service user account.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=209)** Instead of just right clicking and selecting New Account, and then adding the account and going through and manually going through all the different property sheets and setting them up, instead I can right click on the template and I can copy it.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=225)** And now, when I copy it, I get a very similar wizard.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=230)** I'm going to say that we are now hiring Christopher Riley.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=237)** And we're going to do criley, Next.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=241)** Password.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=245)** Now you'll notice that in this case, it defaults to these same checkboxes, so we do have to be careful to change it.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=251)** By the way, the reason I got this error, is because I can't have the checkbox for both User must change password and User cannot change password, that's what this error message is so I'll click OK, clear these boxes, check that box.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=264)** Next. Finish.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=266)** I've now created an additional user, and it may seem like it was the same level of work as it was to create any other user but the difference is, now the different property sheet tabs would be already populated, rights and permissions would already be in place without me having to manually do it.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/user-account-templates?u=76281980&t=283)** And that's the benefit of using a user account template.

> [!info]- Semantic Content
>
> **Exercise Files:** template (9)
> **Code Keywords:** case, (2), this, (1), new, (1)
> **UI Navigation:** go to (2), click on (1), checkbox (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), just like (1)
> **CLI Commands:** find (1)
> **Env Vars:** dc1 (1)
> **Cross-References:** go back to (1)

#### Creating a group
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=0)** - [Instructor] While you might find it to be practical to assign rights and permissions to individual user accounts in a very small environment it is not very practical at all when you are working in a large enterprise network.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=15)** So in order to help alleviate the problem of having to assign rights and permissions to individual users one at a time we now have the ability to create groups and then we can make users members of those groups and then simply assign rights and permissions to the group which will then inherit down to the users.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=37)** So let me demonstrate the how to create these group objects in Active Directory.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=43)** To do this, we're going to connect to DC one.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=47)** Here in Server Manager I'm going to go up to the Tools menu and select Active Directory Users and Computers.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=55)** Here, we can see our domain landonhotel.local and if I expand it we get all our containers and we need to, just like with creating any other object, we need to select what container we want to create the group in and for this demonstration I'm going to select the Customer Service container and when I do you'll notice that I have a number of users and there's a really good chance that those users will all need access to the same resources, and so, we could probably group them together.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=87)** So I will right click and I can right click either on the container object itself here, or in the blank space over here.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=95)** Either way, it's the same thing, and I'm going to highlight over New and then select Group.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=101)** Now, I will tell you that this New Object Group Wizard so to speak is not really much of a wizard.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=108)** It's more of a form because it's just one screen.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=113)** All we have to do is simply give the group a name.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=116)** So I'm going to say Customer Service Users and you'll see that it auto-populates the same name for pre Windows 2000.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=127)** But the main thing is is making sure that we select the correct Group Scope and Group Type.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=133)** Now I'm going to start on the right hand side and talk about the two different group types.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=136)** We have Security and Distribution and this is pretty simple.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=139)** Distribution has one purpose and one purpose only and that is if you are working with Exchange and you want to make an email distribution list, okay?
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=150)** So this will have nothing to do with assigning rights and permissions at all.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=154)** This would be just to create a distribution list.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=156)** You would create the Distribution group here and that's how you form the distribution list.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=162)** So, the reality is is that when we're talking about rights and permission we're always going to be the Security group type.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=169)** Now, over on the left we have to choose a Group Scope and we have three of them.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=173)** I'm going to actually start with the one that is highlighted by default which is the Global security group and a Global group is the most typical group that you would make users a member of, all right?
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=190)** So the most typical way to do this is honestly to just create the group, give it a name, and click okay.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=196)** That's all you're going to do.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=197)** Bing, bang, boom, done, because the default are already in place.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=202)** But we do also have a group called a Universal group and this has to do with if you want to nest groups from different domains within a forest and put them all into one Universal group so that you can assign permissions to users throughout the forest.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=223)** And then we have this group called the Domain Local group and this is an interesting group.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=229)** It is one that Microsoft has had around for a long time.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=234)** They have been pushing for a long time.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=235)** When I say a long time, basically since forever.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=238)** It used to just be called Local before it was Domain Local but going all the way back to the days of Windows NT back in the 1990s they had this and the reason why is because Microsoft has always pushed that the right way to do all this is through a group nesting strategy where what you do is you actually take users and make them a member of a Global group, all right?
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=262)** So that's the purpose of the Global group within the domain and you then create these Domain Local groups for the sole purpose of assigning the actual permissions to resources.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=275)** So, for every resource you're going to create these Domain Local groups and assign the permissions to that Domain Local group and then you'll take a Global group and make it a member of the Domain Local group and you know what?
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=288)** If you're feeling kind of confused right now that's a little bit normal.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=292)** Group nesting is probably one of the most complicated things to many people in the industry, or I should say, many new people in the industry.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=300)** So for right now don't really worry about it.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=302)** To create a group you give it a name.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-a-group?u=76281980&t=305)** The most typical group you're going to create is a Security group and then it's going to be a Global Security group, and I'll click okay, and just like that you can see that we've created a Customer Service Users Security group.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** type. (2), let (1), this, (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (2)
> **Speakers:** - [instructor] (1)

#### Managing group membership
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=0)** - [Instructor] Once you have created a group in Active Directory, the next thing you have to worry about is managing the membership of that group.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=11)** Alright, so, here we are looking at Active Directory Users and Computers on DC1, and we've just created the customer service users security group.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=22)** But right now, that's all it is, it's just a blank group.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=26)** So if I double click on it, you will see here, that there is a Members tab, and its blank.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=33)** Nobody is a member of this group.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=36)** So there are a few different ways that we can add users to a group, as far as becoming a member.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=44)** One way, would be to go to an individual user account, so I will take Robin Hart, and I'm going to double click and go into the properties sheet for Robin Hart, and you'll notice that there is a Member Of tab.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=57)** Right, in the group we had the Members tab, here we have a Member Of tab.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=62)** And we'll see that Robin Hart is a member of Domain Users, 'cause everybody automatically becomes a member of domain users.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=68)** And if I want Robin to become a member of this customer service users group, I just click Add, and if I start to type in, I'll just hit cust, and check names, and I get customer service users, and I click OK.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=83)** Robin's been added, and if I click OK, and then jump over to the customer service users group, and go to the Members tab, you'll see Robin Hart has now been listed.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=95)** So that's one way, you can go to the user, and add them to a group.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=98)** Another thing you could do, is you could come here to the group, right here on this screen, and on the Members tab, I can pull in users.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=105)** So I will click Add, and I'm going to type in Pamela, over on the left here, you'll see Pamela Diego is also a customer service user, when I click Check Names, it finds Pamela Diego, I click OK, and now Robin Hart and Pamela Diego are members.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=122)** And just to double check, if I click okay, go into Pamela Diego go to the Member Of, you'll see that Pamela Diego is a member of the customer service users group.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=131)** The third way you can do it, is a nice way to do it if you want to do more than one account.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=138)** And that is to simply right click on account, so if I take Kathy Lopez and right click, I can say add to group.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=146)** But instead of doing it with just one user, let's take both Earl and Kathy, by pressing the shift key to select multiple users in a row, or I could do the control key, for instance if I wanted to add Christopher Riley, I could now hold control on my keyboard, and click on that one.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=162)** And with all three of these names highlighted, I can right click and say add to group, and then type in the name, I'll just put cust in there again, check names, customer service users, OK, the add to group operation was successfully completed, click OK, if I go into customer service users, the Members tab, now you can see that I have five customer service user accounts who are now a member of this group.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=192)** Now the only other thing I would like to point out to you real quick before we wrap things up with this, is that you'll notice that on the group account, there's not only a Members tab, but there's also a Member Of tab, and that's because when I was talking to you about how to create a group, and we were talking about domain local versus global and universal, and I said that a group could be a member of another group, or I called it group nesting, that's where you would do it here.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=219)** You would see that one group could be a member of another group, and I will tell you that if you have group nesting, right, so if you had a user who was a member of one group, who is a member of another group, who is a member of another group, or however many deep you go, and it's not recommended that you go that deep, any permissions that are assigned to a group automatically are inherited to all users, or I should say all objects that are a member.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=243)** So, if a group has a permission, and there are other groups that are members of that group, that group also gets the permissions.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/managing-group-membership?u=76281980&t=253)** So, that's how we manage group membership, and that's really the whole purpose to having groups, is to have memberships, so that we can assign rights and permissions on a much simpler basis.

> [!info]- Semantic Content
>
> **Definitions:** is a  (8)
> **UI Navigation:** go to (4), click on (3)
> **Code Keywords:** let (1), this, (1)
> **Env Vars:** dc1 (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Computer accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=0)** - [Instructor] Another type of object that we have in Active Directory Domain Services is something called the computer account object.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=9)** Now a computer account, similar to a user account, is a security principle.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=15)** In other words, we've talked about how the user account is an interface between Active Directory and an actual human person, well, a computer account is the interface between Active Directory and then an actual, physical computer that's connected to the network.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=33)** So, I want to show you just a couple of quick things when it comes to computer accounts, because computer account management is not quite as extensive as user or group account management, but I want to make sure that you at least can see the accounts and know what to do with them.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=47)** To demonstrate this, I'm going to connect through DC-1.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=50)** Here in the Server Manager, I am going to go up to the Tools menu, and then I will select Active Directory Users and Computers.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=59)** Here we have our domain, landonhotel.local, which I will expand.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=63)** There's two containers that, by default, will host computer account objects.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=71)** The first one should look pretty obvious, and that is this container that says Computers.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=78)** Now when I click on it, I want you to notice something.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=82)** Over on the right, it's blank.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=84)** Even though I said that this is an obvious container for computer account objects, there's nothing in there.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=90)** And the reason there's nothing in there is because I only have three computers operating on my network right here that we've created in this course, and all three of them are domain controllers, which should lead you to the second container, that computer objects will be contained in, and that is the Domain Controllers container.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=113)** When I click on that, you'll notice I now have three computer account objects.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=119)** We have DC-1, 2, and 3.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=121)** Those are the three computers that we've created as a part of this course.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=126)** We can not only see that we have these computer accounts, but we can see what type of account they are.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=132)** You can notice that besides being a domain controller, DC-1 and 2 are also GC is what it says for DC Type, and that means that it is a global catalog server, and DC-3, you'll see, is a read-only domain controller.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=148)** So we can see that quickly and easily.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=151)** Now if I double click to go into the properties of one of these computer accounts, you'll see that there's not nearly as many tabs as you might have, let's say, on a user account.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=163)** There's not much that we would do, as far as setting this up or managing the computer account.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=169)** It's mostly self-managed.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=172)** Now when it comes to creating a computer account, we can do it just like we created other Active Directory objects, but we typically wouldn't.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=181)** So let me show you an example.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=183)** If I go to the Computers container, and I right-click and I hover over New, you'll see that I do have the ability to create a computer account.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=191)** And all I would do is give the computer a name, so I might say something like Client1.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=196)** And there's nothing else I have to do here, I just simply click OK.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=201)** And I'm going to hit cancel, I don't want to actually do that.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=204)** The way it would typically be done, it is when you go to the client, when you go to the other computers on the network, and you join them to the domain, just like we did with the domain controller computers.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=219)** I never came here and created those computer accounts.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=221)** They created automatically.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=223)** When you join the domain, they will automatically create a computer account here in the Computers container.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=231)** Now why would you want to manually create a computer account?
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=234)** Well this would be what's called pre-staging the computer account, and this would be if you wanted your computer accounts to already be created and be in a given location.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=246)** So for instance, let's say in the Customer Service container, I'm going to actually right-click, and I'm going to do something that I don't want you to worry too much about the meaning behind it, because I'm going to go over this in a different video.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=260)** But if I right-click and say New and I'm going to create one that says Organizational Unit, and I say Customer Service Computers, OK.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=273)** I now have a sub-container, and maybe this is where I want the Customer Service Computer accounts to be.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=282)** Then, I would go ahead and I could right-click, select New, Computer, and create the computer account here, and then when I actually install a computer out on the network, with the same name I create here, it would go ahead and match up to the account here in the Customer Service Computers' container.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=306)** Now the reality, as far as I'm concerned, is I would still never do that.
>
> **[5:11](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=311)** I would allow the computer accounts to create automatically, and then I would go into the Computers container, and for demonstration purposes, I'll actually go to the Domain Controllers container, just to show you that I could take that computer, and I could simply move it by dragging and dropping or right-clicking and selecting Move, just like we did with user accounts, to get them all moved into the container we want them moved into.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=337)** Now I don't want this computer there, so I'm going to move it back to the Domain Controllers, I just wanted to show you that that's how I would do it.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=345)** So beyond that, about the only other thing I'd like to show you is when it comes to computer account management, I want to remind you that the account is a security principle.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=356)** I mentioned that before.
>
> **[5:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=358)** And it does have a password.
>
> **[6:01](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=361)** Now you don't ever assign the password, you don't ever see the password.
>
> **[6:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=364)** But if that password was to get messed up for some reason, what you would do is you'd come over here into Active Directory, you'd right-click on the computer account, and you would tell it to reset the account and then you would go back out to the computer, and you would dis-join it from the domain and re-join it, and it would re-authenticate with a new secure channel.
>
> **[6:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/computer-accounts?u=76281980&t=388)** So again, computer management pretty automatic, behind the scenes, but I wanted to make sure that you understand that these accounts do exist, and know where to access them if you ever need to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), new, (2), this, (1), default, (1)
> **UI Navigation:** right-click (5), go to (4), click on (2)
> **Definitions:** is a  (4), is an  (2), in other words (1), means that (1)
> **Analogies:** just like (3), similar to (1), for instance (1)
> **CLI Commands:** make (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Creating organizational units (OUs)
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=0)** - [Instructor] In Active Directory Domain Services, the organizational unit container object may be your all-time best friend, and the reason why is because without these container objects, well, then your Active Directory Domain Services environment would probably be quite complicated, confusing, and in some cases next to impossible to administrate.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=22)** To show you first of all here how to simply create these organizational units, or what's sometimes known as OUs for short, to do this, I'm going to jump on to DC1.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=36)** Here in the server manager, I'm going to go up to the tools menu and then select "Active Directory Users and Computers".
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=45)** So the first thing I want to show you, if I expand landonhotel.local, you'll see that I already have a number of containers, and most of these were built-in and there by default, but there is one that was created as part of some of the other videos that I've been demonstrating in this course, for instance I have the customer service container that was created, then if I expand that, there was a sub-container called customer service computers that was created.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=77)** So let's talk about the detail of how we do this.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=81)** Let's create a whole separate OU structure at the domain level.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=87)** To do this I basically right-click on the domain itself, hover over new, and then select "organizational unit".
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=98)** Here I get the simplest of simple one page forms to fill in, and that is to just give it a name.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=106)** So I'm going to call it "Top Level OU".
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=113)** And the only other thing we have to do besides give it a name is choose whether we are going to have this box checked that says "protect container from accidental deletion".
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=123)** For right now, I am going to leave that box checked, and the reason is because we're going to create another OU and we're going to uncheck the box and I'm going to show you the difference.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=134)** So I'll click "okay", and you'll see that I now have an OU created called "Top Level OU".
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=140)** If I want to create a hierarchical structure of OUs, we can think of it almost like a folder structure in Windows Explorer, I would right-click on that OU, and again, tell it that I want to create another new OU, and this time we're going to call this "Second Level OU", again I'll leave the protection on, click OK, and I want to show you that I can even go another step deeper, to create another organizational unit, call this the "Third Level OU", and this time I'm going to not protect from accidental deletion, click OK, alright so there we go.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=186)** I now have a hierarchical structure, top level, second level, third level, and you can go as deep as you want to go.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=192)** It is never recommended to go past, I've heard four or five is the max, it's rare that I see a benefit in going much past three, to be honest with you.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=203)** I want to show you what the difference was between the accidental deletion or not, and the reason that this is so important, as far as accidental deletion, is because these are containers, and by containers it means that we're going to have other objects inside, and when we delete one of these containers, we're deleting everything inside.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=222)** So I'm going to take my third level OU, and I'm going to show you that now I could right click, and I can select delete, but I'm going to show you that it's even easier, I could hit, and I know you can't see me doing it, but I'm going to hit delete on the keyboard, and when I hit delete, it says "are you sure you want to delete the organizational unit named Third Level OU?"
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=243)** So it is good that at least I get that warning, but now if I just click yes, and I think to myself "oh no!, there was stuff inside there, that was a mistake!"
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=254)** Well, too late, it's gone.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=257)** So that's why we have that protection from accidental deletion.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=261)** Now the second level OU had that protection on it, and so this time, if I, and instead of hitting delete on the keyboard I'm going to show you, if I right-click, select delete, it's the same thing, you get the same message, says "are you sure you want to do this?"
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=275)** When I click yes, it's going to say, no, you do not have sufficient privileges to delete this OU, or the object is protected from accidental deletion.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=286)** So let's go ahead and say okay wait a minute, I really do want to delete this, what do I do?
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=293)** Well if I go into the properties, so I'm going to right click and select properties, I want to jump into the object tab, you see the object tab up here?
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=302)** No, you don't.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=303)** The reason you don't see it is because that is an advanced feature, it's there to protect you.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=309)** So I'm going to cancel out of this, I'm going to go up to the view menu, in Active Directory Users and Computers, and select "advanced features".
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=317)** Now you see a whole lot of extra stuff appears, but I still have my top level and my second level OU here, and this time when I go to the properties of Second Level OU, you'll notice there is an object tab, and when I click on, that's where the check box is for protecting object from accidental deletion.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=336)** If I clear that check box, and click OK, and now I choose to delete that OU, it says "are you sure?" And I click yes, it's gone.
>
> **[5:48](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/creating-organizational-units-ous?u=76281980&t=348)** So that is how you create an OU structure and protect it from accidental deletion, or force the deletion if necessary.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (10), this, (3), let (3), default, (1), this. (1)
> **UI Navigation:** right-click (3), go to (1), click on (1)
> **Definitions:** is an  (2), known as (1), means that (1)
> **Env Vars:** dc1 (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Examples of OU hierarchies
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=0)** - [Instructor] There are three main benefits to having an organizational unit hierarchy within your Active Directory Domain Services environment.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=10)** The first one is just kind of the obvious, which is that it just helps keep things organized.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=14)** It stops you from having to have all of your objects in just one place.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=19)** You can actually have some level of organizational to it.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=22)** The second is that it can help you to apply group policy object settings, and don't worry if you're not familiar with group policy objects, you'll learn about that as part of learning all about Windows Server 2019.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=37)** And the third has to do with having the ability to delegate control over objects, which we learned about in another video in this course.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=46)** So, what I want to do here is talk to you about the different hierarchical strategies that are typically used.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=56)** To do this, I'm going to connect to DC1.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=60)** Here in the server manager, we're going to go up to the Tools menu, and go to Active Directory Users and Computers, and then I have my landonhotel.local domain, and it's in here that I would want to now create some kind of hierarchical strategy.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=78)** So I want to tell you one very typical strategy that is used, one that starts with location being your top level OU, so I'm just going to very quickly create a bunch of OUs here, I'm going to right click on the domain, I'm going to create an OU, and I'm just going to simply call it Chicago.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=102)** And likewise, I'm going to create one for New York, and I'm going to create one for Los Angeles.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=119)** Now from there, we would then do departments.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=125)** So in the Chicago OU, I would create an OU that might say Customer Service, and I want to tell you that that wouldn't be typical because you don't want to have an OU that, you know, Chicago would have a customer service, New York would have a customer service, and Los Angeles would have one, so you might want to actually call it Chicago Customer Service.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=150)** And then we might want to go ahead and make another department for Chicago IT, and Chicago Marketing.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=165)** So, I'm not going to bore you and build out an entire structure, but you can imagine doing the same thing, putting these three departments inside of New York and Los Angeles, or maybe whatever departments happen to exist in that city.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=178)** And we might take it a step further, and inside Chicago Customer Service, we might create an organizational unit that then says Chicago, and these can get quite lengthy, so you might start to abbreviate, but I'm going to say Customer Service Computers.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=199)** And then say Chicago Customer Service Users.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=209)** All right, so this is just kind of an example, where we have Chicago, we have the location, and then we have the department, and then we break it down into computers versus users within that department.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=220)** That's a typical OU hierarchy.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=223)** And I will tell you that some companies will do the opposite, right?
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=226)** Some companies will go ahead and make the top level OU be the department, right?
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=231)** So the top level wold be let's say Customer Service, and then inside of Customer Service, we have Chicago, New York, or Los Angeles.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=240)** Now, I'm going to explain to you why it's really a best practice to do it the way I've laid it out here, where we have the cities being the top level, and that is because how often do companies go through some form of reorganization, and departments change names or structure?
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=259)** It happens all the time in big business, right?
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=262)** But how often does a company completely move to a new location?
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=268)** That does happen, but not as often.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=271)** And the reason that this is significant is because it's these top level OUs that you don't want to have to make too many changes to because it has an effect all the way down through the hierarchy, so you want to try to make your top level as stable as possible, and in fact, very often, what will happen is instead of having Chicago, New York, and Los Angeles, I might actually have a top level OU called North America.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=304)** So I would have North America, and then inside of it is where I would create Chicago, New York, and Los Angeles, and then inside of each of the cities, I would create the hierarchy that I created here, and the reason why is because, yeah, we may move from one city to another within a state or within a country, but to move to a whole different continent is a really extreme situation, so that's why very often we will start with a continent location at the top.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/examples-of-ou-hierarchies?u=76281980&t=333)** But as a whole, I just need you to understand that it's very important to have a well thought out organizational unit structure before you go and create it, so that you don't run into hassles down the road.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** this, (1), let (1)
> **Env Vars:** dc1 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/next-steps?u=76281980&t=0)** - [Ed] I hope you've enjoyed finding out about installing and configuring Active Directory domain services in Windows Server 2019 as much as I've enjoyed showing you.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/next-steps?u=76281980&t=9)** If you want to learn more about working with Active Directory in Windows Server 2019, please explore our library as we have a number of courses out there to help you.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-install-and-configure-active-directory/next-steps?u=76281980&t=18)** See you next time.

> [!info]- Semantic Content
>
> **Speakers:** - [ed] (1)


## Instructor

- [[Ed Liberman]]

## Skills Covered

- Active Directory
- Windows Server

## Path Context

### In [[Getting Started with Windows Server 2019]]
← [[Windows Server 2019- Installation and Configuration]] | **3 of 4** | [[Windows Server 2019- DHCP and DNS]] →

## Appears In

- [[Getting Started with Windows Server 2019]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2022- Install and Configure Active Directory]] — Active Directory, Windows Server
- [[Windows Server 2022- DHCP and DNS]] — Windows Server
- [[Windows Server 2022- Installation and Configuration]] — Windows Server
- [[Windows Server 2019- DHCP and DNS]] — Windows Server
- [[Windows Server 2019- Installation and Configuration]] — Windows Server

---

[↑ Back to top](#)