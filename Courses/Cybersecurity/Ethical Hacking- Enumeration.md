---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: ethical-hacking-enumeration-13945377
url: "https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377"
duration_minutes: 132
duration: 2h 12m
level: Beginner
updated: 5/1/2023
learners: 57779
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQH4q52rvtzUqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620842870509?e=2147483647&amp;v=beta&amp;t=vzdPFK7DX_NZaYLUqSdbOJjKVovvwllCVAZG35zTeFA"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Scanning Networks]]'
next_courses:
  - '[[Ethical Hacking- Vulnerability Analysis]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":4,"total":19,"prev":"Ethical Hacking- Scanning Networks","next":"Ethical Hacking- Vulnerability Analysis"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Enumeration.md)

![Ethical Hacking: Enumeration](https://media.licdn.com/dms/image/v2/C560DAQH4q52rvtzUqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620842870509?e=2147483647&amp;v=beta&amp;t=vzdPFK7DX_NZaYLUqSdbOJjKVovvwllCVAZG35zTeFA)

# Ethical Hacking: Enumeration

> Enumeration is designed for ethical hackers who want to build their skills in reconnaissance of targets and in optimizing their penetration testing. In this course, instructor Malcolm Shore teaches the basic methods of enumerating networks and targeting systems with common enumeration tools. Malcolm explains what enumeration is and gives you opportunities in the course for hands-on experience. He 

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377) | 2h 12m | Beginner | 58K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Basics of Enumeration]]** (4 videos)
- **[[#2. Local Host Enumeration]]** (4 videos)
- **[[#3. Enumeration Remote Hosts]]** (11 videos)
- **[[#4. Enumerating Web Apps]]** (4 videos)
- **[[#5. Enumerating the Internet]]** (3 videos)
- **[[#6. Enumerating Cloud]]** (4 videos)
- **[[#7. Other Enumeration]]** (7 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Starting your testing with enumeration
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=0)** - [Instructor] When carrying out testing through ethical hacking one of the key activities that directs the testing is a enumeration.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=8)** The ability to find out everything about a target by enumerating its ports and services, its uses and accounts, it's processes and just about everything that can be exposed and enumerator.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=22)** Carrying out enumeration well is the real key to success in your certifications and your business assignments.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=30)** I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems against cyber attacks.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=38)** In this course, I'll explore how to enumerate Windows and Linux systems using the tools built into CALI as well as some third party tools.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=48)** I'll start by explaining enumeration in the context of technical testing and I'll demonstrate the basic Windows and Linux toolsets.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=57)** I'll then look at the detailed enumeration of special protocols such as SMB, RPC, and SNMP.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=67)** I'll show how to enumerate websites and databases and how to enumerate the internet as a whole.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=75)** Finally, I'll demonstrate some key third party tools for enumeration.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=80)** When you finish this course you'll have a great understanding of how to make your testing effective by properly enumerating the targets.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=88)** Now let's get started with enumeration.

> [!info]- Semantic Content
>
> **Env Vars:** cali (1), smb (1), rpc (1), snmp (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** finally, (1), let (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=0)** - [Instructor] This is a practical course, and during this course, I'll be using a virtualized computing environment called VirtualBox.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=8)** I will also be using a number of tools which are part of the Kali Linux framework to test systems.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=14)** If you're not familiar with virtualization, you should watch the Introduction to Kali Linux Course, which will show you how to install and use VirtualBox.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=24)** In addition, I'll be assuming that you understand basic computer networking concepts, are familiar with Windows, and have a knowledge of basic Linux commands.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=34)** This course requires a number of tools to be downloaded and installed, and you can pre-install these tools to avoid unnecessary waiting during the course.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=43)** The detailed list of tools required to be installed to support this course, is available as a PDF in the associated course material.

> [!info]- Semantic Content
>
> **Prerequisites:** install (2), required to (1)
> **Env Vars:** pdf (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third-party testing tools, some are commercial products and some are open source.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=8)** The download and installation instructions for all tools used in this course is available as a PDF in the associated course material.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=17)** While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=32)** The testing tools we demonstrate are extremely powerful.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=35)** They may demonstrate some of the same signature characteristics as malware and malicious implants and they may raise antivirus alerts when you try to download them.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=45)** We can't provide assurance that the software hasn't been compromised when you download it and so, as for any other software from the internet you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. Basics of Enumeration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is enumeration?
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=0)** - [Instructor] Enumeration is the process of identifying usernames, system addresses, network resources, shares, services and other characteristics of a target.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=10)** It happens through open source intelligence, and also by direct probing of a target system.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=16)** Enumeration occurs after scanning and is part of the overall information gathering or reconnaissance activity.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=24)** Testers need to be methodical in their approach to ethical hacking.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=28)** And this means structured preparation for testing a target system, for example, the tester may wish to do the following before starting any vulnerability testing: extract usernames using enumeration, gather information about the host using null sessions, perform port enumeration using scanning tools.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=48)** Enumerate user accounts, and perform enumeration through special protocols, such as SNMP and RPC.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=57)** The reason for doing enumeration is to understand the target before testing it and to obtain information to enable testing.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=65)** For example, one outcome from this might be to identify a user account or system account for potential use in penetrating the target.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=74)** It isn't necessary to find a system administrator account because most account privileges can be escalated once access has been achieved.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=83)** I look at enumeration in four parts.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=86)** Firstly, I look at what are typically local host enumeration techniques and then look at remote host enumeration.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=94)** I look at how we can enumerate patterns and systems on the internet at scale, and then look at some specific enumeration tools for port scanning and enumerating network services such as SMTP and LDAP.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=108)** I won't, however, cover the enumeration of website pages, as this will be fully covered in the ethical hacking web testing course.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=116)** There are some standard services, which are useful targets when performing enumeration and which we'll look at further as we go through this course.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=124)** DNS is the Domain Name Service, which runs on port 53 and is used to translate system names to IP addresses.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=132)** And can sometimes be used to extract bulk translation data in what is known as a DNS zone transfer.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=139)** SMTP, the Simple Mail Transfer Protocol on port 25 is used to send email, but can be used to extract or infer email addresses.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=149)** The RPC endpoint mapper on port 135, which is used to access RPC services.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=156)** The NetBIOS named service on port 137 to enumerate NetBIOS objects.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=162)** And the NetBIOS session service on port 139, which enables SMB queries over NetBIOS.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=170)** The Simple Network Management Protocol on port 161 used to manage hosts remotely.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=176)** The Lightweight Directory Access Protocol service on port 389, which stores user and group information.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=184)** And SMB running over TCP on port 445.

> [!info]- Semantic Content
>
> **Env Vars:** rpc (3), smtp (2), dns (2), smb (2), snmp (1)
> **Ports:** port 53 (1), port 25 (1), port 135 (1), port 137 (1), port 139 (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** find (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Understanding contexts
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=0)** - Code is executed in the form of processes.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=4)** And a process has an operating context.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=6)** In both windows and Linux, a process operates in one of two modes, user a mode and system mode, which is also known as kernel or supervisor mode.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=18)** In fact, a single process will often switch between the two modes with a user mode process, switching to kernel mode when it makes the system call.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=27)** User processes run in their own address space, which is isolated from the address space of other active processes.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=34)** They make system calls to access any of the computer resources that they need.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=38)** Process operating in kernel mode are privileged and are granted access to all computer resources.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=45)** The operating system will execute largely in kernel mode.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=50)** The kernel context in Linux is further broken down into kernel interrupt context or kernel user context.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=57)** The former is for code executed as a result of an interrupt and the latter by user request via a system core.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=66)** At a microcode level operating systems provide different levels of access to resources through what are known as protection rings.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=75)** Such rings are arranged in a hierarchy from most privileged, ring zero, to least privileged.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=81)** Ring zero is kernel mode, is the level with the most privileges and interacts most directly with the physical hardware such as the CPU and memory.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=92)** In earlier windows operating systems rings one and two were not used.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=97)** More recently ring one has been used to support firmware embedded hypervisor operation, such as Intel's VTX.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=105)** Ring three is generally used for user mode.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=110)** Open VMS is a little unusual in having four operating modes corresponding to rings zero to three and known as kernel, executive supervisor and user mode respectively.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=126)** Interestingly the ARM architecture is the exception to the ring numbering rule, in that it operates with three levels of ring zero to two, in which ring zero is the least privileged application level, ring one the operating system level and ring two the most privileged hypervisor level.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=146)** User mode operation is associated with an account in the operating system which has a user identifier.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=153)** Accounts exist in specific groups of users with operating system defined privileges.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=158)** A special user mode account known as route, supervisor or administrator is needed to administer the separation and protection of individual user files and to perform such tasks as creating accounts, granting and revoking powers for ordinary users and accessing critical system files to or upgrade the system.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=181)** In windows the root user is the local service account known as system.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=186)** This user account runs all system processes.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=191)** Every windows system also has a built-in administrator account and may have additional user administrator accounts.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=198)** A windows administrator account can make system-wide changes to the computer, but does not have the full set of privileges available to the system user.

> [!info]- Semantic Content
>
> **Definitions:** known as (5), is a  (1)
> **Env Vars:** cpu (1), vtx (1), vms (1), arm (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Code Keywords:** switch (1)
> **Speakers:** - code (1)

#### Working with contexts
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=0)** - [Instructor] In Linux, every user account is automatically assigned a user identification number, the UID.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=7)** And the system uses these numbers instead of the usernames to identify and keep track of user context.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=14)** The root account has full privileges, including the ability to modify the system in any way desired and to grant and revoke access permissions for the users, including any of those that are, by default, reserved for root.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=28)** The root user is recognized by having a UID of zero.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=32)** The UID is stored in the Environmental Variable Dollar UID.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=37)** We look at Dollar UID.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=40)** We can see that for Kali, the user identification number is 1000.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=46)** We can see the UIDs for all users by looking at the slash et cetera password file.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=51)** Let's cat slash et cetera slash password.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=55)** And I'll pipe that through to more.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=59)** The first column in the line is the username, and the third is the UID.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=63)** The first entry we see is route, and we can see that the third column in the route line is zero.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=69)** If we go to the bottom, we can see the GVM account has a UID of 134.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=76)** An administrator is a non root user who can temporarily use root privileges when required, but will normally operate with user privileges.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=85)** A standard user has no special privileges and can only execute applications and access files which are within their account space.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=93)** They cannot run any privileged activity.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=96)** In Linux, a privilege user can run code in their standard user mode, or can use the Sudo command qualify to run as another user for that one command.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=106)** The slash et cetera slash Sudoers file is the default Sudo security policy plugin, and specifies authentication for use of Sudo and the effect to be taken on the user context.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=118)** If we try to run cat slash et cetera slash Sudoers,
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=126)** we don't have permission, but we do if we Sudo it.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=130)** Sudo cat slash et cetera slash Sudoers.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=138)** We can see that the default action for members of the Sudo Group is to invoke root privileges.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=144)** We can see who's in the Sudo Group with getent group Sudo.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=152)** Now we can see Kali is the only account that can assume Sudo privileges.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=157)** A similar command SU is used to switch user for the remainder of the session.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=162)** And when used without a username, we'll switch to root.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=165)** If appropriate, the root password will be requested, and we have to use Sudo to invoke this.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=172)** Sudo SU.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=174)** And if we now echo dollar UID, we can see that we're in context zero, which is root.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=183)** And we can exit to come back to user mode.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=187)** In Windows, there are two important contexts for a user, standard and administrator.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=193)** The context for a user count can be set in the user account details by changing the account type.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=201)** A standard user is a user with access to their own and shared programs and files, but no privileged access to system wide resources.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=210)** An administrative user has the same privileges, but in addition can run programs in administrator mode by right clicking and selecting run as administrator.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=222)** In addition, an executable program can have its properties modified by an administrator to automatically run in administrator context.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=232)** The properties, compatibility, run this program as administrator, and apply.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=242)** Okay.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (11), cat (3)
> **Env Vars:** uid (8), gvm (1)
> **Code Keywords:** switch (2), default, (1), let (1), this. (1), type. (1)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Understanding NetBIOS, SMB, SAMBA, and RPC
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=0)** - [Instructor] While much of the internet works on the internet protocol, IP, and its main sub protocols of UDP, TCP, and ICMP, there are other protocols which have been developed for local area networks.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=13)** Ethernet is now the dominant and almost exclusive low level protocol for traditional IT local area networks.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=21)** Some API specifications have been developed for both local area network and internet use, and which are often referred to as protocols.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=30)** The key ones are NetBIOS, SMB, SAMBA, and RPC.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=35)** The Network Basic Input-Output System, NetBIOS, provides session layer services for Windows systems, which allow applications on separate computers to communicate over a local area network.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=49)** NetBIOS is an API specification rather than a protocol and requires a networking protocol to carry NetBIOS payloads.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=59)** The NetBIOS name service runs on UDP port 137 and the Datagram distribution service on UDP port 138.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=69)** The NetBIOS over TCP/IP session service runs on TCP port 139.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=77)** The Server Message Block, or SMB protocol, is an application layer service used to enable shared access to accounts, files, printers, serial ports, and miscellaneous communications between nodes on a network.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=91)** This not only works on the local network, but can also be accessed through IP across the internet.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=99)** SAMBA is a free software implementation of SMB which can integrate with Windows systems and is standard on Linux distributions.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=108)** The distributed computing environment, DCE, is a software system developed in the early 1990s as a framework and toolkit for developing client/server applications.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=120)** The framework includes a remote procedure call, RPC mechanism, known as DCE/RPC.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=127)** This was originally commissioned by the Open Software Foundation.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=131)** While DCE has not seen much success in practical implementation, its underlying concepts have had substantial influence over subsequent efforts.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=141)** The Remote Procedure Call mechanism is used to implement client/server communications, both interprocess within a host system and interprocess between systems.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=151)** The protocol enables the client and server to connect via what are known as end points, which to the programmer look like function calls.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=160)** The RPC mechanism is the simplest way to implement client/server applications because it keeps the details of network communications out of your application code.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=170)** Each side behaves, as much as possible, the way it would within a traditional application.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=176)** The programmer on the client side issues a call and the programmer on the server side writes a procedure to carry out the desired function.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=185)** The Microsoft implementation of RPC, MSRPC, is an extended implementation of RPC which operates over SMB or across TCP/IP.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=198)** It's used extensively in Microsoft systems.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=201)** The Windows server domains protocols are entirely MSRPC-based.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=207)** Microsoft DNS administrative tool uses MSRPC.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=211)** Microsoft Exchange server 5.5's administrative front-ends are all MSRPC client/server applications.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=220)** And the MAPI implementation was made more secure by delivering MAPI as MSRPC functions that enable encryption at the MSRPC layer.

> [!info]- Semantic Content
>
> **Env Vars:** rpc (6), msrpc (6), tcp (4), smb (4), udp (3)
> **Definitions:** is an  (3), is a  (2), known as (2)
> **Ports:** port 137 (1), port 138 (1), port 139 (1)
> **Code Keywords:** function (2)
> **Versions:** 5.5 (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)


### 2. Local Host Enumeration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Profiling a Unix host
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=0)** - [Instructor] Linux provides a number of commands to enable basic profiling of the activity in the system.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=6)** I'll go through the main ones fairly quickly.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=8)** I've got a terminal window, so let's see what this system is.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=12)** I can start by entering uname -a to restore system information.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=21)** I'm logged into a metasploitable 2.6.24-16 server.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=26)** I can get more information by looking at the operating system version with the command cat /proc/version.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=38)** And I can see it's using gcc version 4.2.3.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=42)** I can look at his distribution details by entering cat /etc/*-release.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=54)** And I can see that the Ubuntu distribution is version 8.04 code name party.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=59)** I can enumerate details on the CPU by entering cat /proc/cpu info.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=71)** And you can see the time running in Intel I7 2600.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=76)** I'll enter df -a and I'll get details about the file systems that are mounted and df -h provides a summarized version.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=88)** Another useful piece of information about a Linux system is what shells are available.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=93)** We can enumerate this by entering cat /etc/shells.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=102)** Let's see who's logged in.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=104)** I'll start with myself.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=105)** Who am I and what's on my profile?
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=108)** I can find this out with the, who am I pwd and id commands.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=114)** We can see our current profile and home directory.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=118)** Now, how about the users on the system?
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=123)** We can see there are three users, johnsmith, msfadmin, and root.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=128)** To find out all users registered on the system, I can enumerate the user accounts by entering cat /etc/passwd.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=141)** You'll recall, this provides the username as the first entry and the UID is the third.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=146)** If we have root privilege, we can also list the password hashes.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=149)** I'll do this by using shadov.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=154)** I can get slightly more detail about running users with either the finger or the pinkie command.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=160)** I haven't got finger loaded on Ubuntu, so I'll use the pinkie command and we have some information about the logging time and the source IP.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=169)** The w command gives slightly different information including the running process and who -a provides a system level view of processes.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=181)** If we want to enumerate the user activity history, we can use the last and last log command.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=191)** Now let's see what processes are open.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=196)** That's a small list of processes just my bash show and the PSN more commands that I've run.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=201)** Let's try that again with the e option.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=208)** That lists all processes together with their process id and controlling terminal.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=214)** I can get more information using the ps aux command.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=220)** In particular, I can see which processes are running as root.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=225)** We can also see the tasks based on their level of system activity using the top command.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=233)** I can list all applications that have been installed using the dpkg command with the -l option.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=242)** And I can generally find version information on an application.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=246)** With the -v or --version switch, for example, python --version.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=256)** I won't spend too much time on network information as I'll cover this in more detail later in the course.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=262)** However, I can find the list of interfaces using the ifconfig command.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=268)** I can see the routing on the host using the command route.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=273)** And we can see that the default route is through the gateway at 10.0.2.1.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=281)** The IP tables command, enumerates all firewall rules.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=285)** We can see any packets from IP address 214.5.22.81 are rejected.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=291)** And a TCP packets to port 21332 are dropped and connections are accepted on SSH, SNMP and WWW, everything else is rejected.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=303)** Most to the Linux enumeration can be obtained without needing to be privileged.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=307)** And it provides a very good foundation for developing subsequent testing plans.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (5), find (4), python (1), ssh (1)
> **Env Vars:** cpu (1), uid (1), psn (1), tcp (1), ssh (1)
> **Versions:** 2.6.24 (1), version 4 (1), 2.3 (1), version 8 (1), 10.0.2 (1)
> **Code Keywords:** let (4), switch (1)
> **Tools:** terminal (2), bash (1)
> **Ports:** port 21332 (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)

#### Profiling a Windows host
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=0)** - [Instructor] While the windows command shell doesn't provide quite the same level of detailed information that's available in Linux, we can install a set of tools which adds quite a lot of local and remote capability.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=11)** These are the PS tools from system internals.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=14)** The tools can be downloaded as a zip file from the Microsoft TechNet site as shown.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=19)** I've already downloaded and extracted the tools, so I'll get straight into it.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=25)** Let's start with a simple enumeration of basic system information.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=29)** We do this using the psInfo tool.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=34)** This returns the local systems product and build information, the basic hardware configuration, and the number of hours uptime.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=41)** It also provides the root directory for the system which is commonly c:/ windows.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=46)** I can add some options to the psInfo command line to get more information.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=51)** Using the Dswitch, we'll include the logical disk drive information as well.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=57)** We can also use psInfo to enumerator remote system if that system allows RPC access and remote access to the registry.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=66)** I'll add the remote server name to the command line.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=71)** And here we see the remote system information, my Windows 10 system.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=75)** Note the time using implicit access with my current user id.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=79)** I could also add the -u -p options to add a user Id and password.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=88)** I can dig a little deeper with ps info and ask for a list of all installed Microsoft software using the Sswitch.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=98)** Another of the tools we can use for enumeration is psList, which lists processes.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=105)** This also works remotely.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=111)** The psList outputs, enumerates the processes, providing the process name and identifier.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=117)** It also contains additional information on threads and priority as well as CPU and elapsed time.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=123)** The processes can be displayed as a process tree by using the Tswitch.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=129)** More detailed information can be numerated using the Xswitch which provides full thread details for each process as well as more detail on memory and page activity and a breakdown of Kernel and User Time.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=144)** Another useful tool for enumerating system information is psloglist which provides a dump of entries in the system event log.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=152)** We can use the end switch to limit the list to the most recent specified number of entries.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=157)** Similarly, the Dswitch would limit the enumeration to so many days.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=162)** I'll run this for the last 20 entries.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=168)** Each entry shows the type of event, the time and a description of the event.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=173)** The tool can also use the BNA switches to limit the list to before or after a certain time and M switch to limit the list to the last however many minutes.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=183)** Again, we can get extended data by using the Xswitch.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=190)** And here we see the hexadecimal dump of the event.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=193)** The pslogged on tool displays the list of users who are logged on.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=197)** Let's see who's on the remote system.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=202)** We can see the local user and we can see that we're logged on through a remote share.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=207)** The final enumeration tool in the PS tools which I'll look at is psservice, which lists running services.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=216)** We can see the service name and description plus some technical information.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=220)** Once we've enumerated the services, we can enumerate security for a specific service using the security command.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=227)** For instance, let's check the security for the event system.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=235)** This enumerates for each user or user group able to manipulate the service, the action that can be taken.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=241)** I can also enumerate the services which depend upon this service using the depend command.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=251)** When we see the comm C# and send service are aligned upon this service to be running.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=257)** The PS tools then, provide a wealth of information on the local systems and where access is possible, remote systems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (2)
> **Code Identifiers:** psinfo (3), pslist (2)
> **Env Vars:** rpc (1), cpu (1), bna (1)
> **Tools:** command line (2)
> **UI Navigation:** switch to (2)
> **Exercise Files:** zip file (1)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)

#### Investigating the Windows network interface
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=0)** - [Instructor] SMBMap is a popular Samba Share Enumerator available from the Kali Applications menu in the SMB sub-menu of Information Gathering.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=10)** We can also run it from the command line.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=12)** I'll run this against my Windows 7 system.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=15)** I have a standard user account which I can use called training.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=25)** This establishes an SMB session and enumerates the shares.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=29)** We can see that the temp and training shares exist together with the four special system shares user, C$, Admin$, and IPC$.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=38)** We have read, write access to temp and read only access to training.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=42)** I can run this against Metasploitable with a null session, which means I don't need to use ID and password.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=53)** And again, we see the shares, including the temp share, with full read-write access.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=59)** I can also run this with the R option and get a directory listing of files in the accessible temp share.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=72)** There's also a tool for Kali, which can be used to enumerate the permission shares, directories, and files on a host Windows and Linux systems.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=81)** This is shareenum, and if it's not preloaded on your version of Kali, it can be downloaded and installed from the GitHub site shown.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=89)** If I execute shareenum with no options, I get the help output.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=96)** Now I can execute this against the Metasploitable target using the null session.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=106)** The output is sent to shares1.txt, which I can now cat.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=113)** We can see the enumeration of Metasploitable's file shares in comma separated form.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=119)** I can do the same with the Windows 7 system, but as this doesn't allow null sessions, I have to provide a user ID and password.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=131)** The output is sent to shares2.txt, which I can now cat.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=139)** Okay, we can see the users, temp, and training shares again in comma-separated form, as well as the standard shares, IPC$, C$, and Admin$.

> [!info]- Semantic Content
>
> **Env Vars:** smb (2), ipc (2)
> **File Paths:** shares1.txt (1), shares2.txt (1)
> **CLI Commands:** cat (2)
> **Tools:** command line (1), github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Investigating the Linux network interface
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=0)** - [Instructor] We can run netstat in a Linux environment although the command line options are slightly different.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=6)** To start, I'll check the netstat -help file.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=10)** This lists the command line options, we can see the familiar ones such as r for routing, n for numeric and s for statistics.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=17)** However, many of the others have different meanings.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=20)** Let's run some of the common enumerations.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=23)** To start with, netstat lets me list the interfaces active on the system using the iswitch.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=30)** We can see the ethernet and the loop back connection.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=34)** If I add the eswitch, I get extended information on each.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=39)** This looks very much like the IAF conflict command.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=42)** We can list the routing table using the rn switches.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=47)** The command netstart -a, lists all internet connections and Unix sockets, including listeners.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=59)** I have ice weasel running and in the first section of output we can see many web connections and also a boot PC and ICMP connection.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=67)** There are many internal Unix domain sockets which are listening for into process connections in the second section.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=74)** I can restrict the listing to just TCP by using the -t option and just UDP by using -u.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=81)** I'll list out the UDP connections.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=86)** And here we see the one UDP connection.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=92)** With the t option, we'll see the TCP connections and I can now add the end option to get numeric addresses.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=101)** I can use the p option and this will include the idea of the owning process and the program name, ice weasel.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=113)** We can list all listening ports using the lx option.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=119)** In the next we can also use the SS command to enumerate network sessions.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=124)** Let's look at this help.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=128)** We can see there are more options available than in netstat.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=131)** I'll enter ss -t.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=136)** This lists the established sessions and the local and remote address and port details.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=142)** The n option provides the list with numeric port addresses.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=147)** I can alternatively use the r option to resolve remote host names.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=155)** The SS utility has a powerful filter option.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=158)** For example I can list all TCP connections which have 132.181.109.79 is their destination address.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=167)** By entering ss -t dst 132.181.109.79.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=179)** We can also use source for source address as port for source port and deep port for the remote porters filter commands.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=187)** For example, all http connections can be queried by ss -t dport eq :http.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=200)** I could also have used the port number :80 to get the same results.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=204)** This command works with all the common service names or numbers.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=208)** Another filter command, this state.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=210)** We can list for example, all established TCP connections.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=217)** If I'm at the t option, I get all established connections, including internal Unix sockets.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=225)** The states that can be queried include established seen sent, seen received, fin white1, fin white2.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=233)** Time weight closed, close weight fast act, closing, connected, synchronized, and all.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (4), udp (3), iaf (1), icmp (1)
> **Analogies:** for example (3), such as (1)
> **Code Keywords:** let (2)
> **Versions:** 132.181.109 (2)
> **Tools:** command line (2)
> **Ports:** :80 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Enumeration Remote Hosts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Enumerating host services
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=0)** - [Instructor] One of the first tasks after identifying a remote host is to enumerate the ports available on it.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=6)** We can do this easily with the Nmap command.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=9)** Let's enumerate the services on our Metasploitable host using the minus PS option.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=18)** Okay, that provides a list of all open TCP services.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=21)** We may also want to know what UDP services are listening for datagrams.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=25)** We can do this with the minus SU option.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=28)** This takes quite a while.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=35)** This is now completed it's check of all 65,000 or so ports, and we can see the four UDP ports that are listening.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=42)** Sometimes, as in the case of UDP port 68, 69 and 138, we may see port shown as filtered.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=50)** In these cases, Nmap believes that a firewall, filter, or other network obstacle is blocking the port and can't tell whether it's open or closed.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=59)** Nmap can also provide details of the services running on the open ports.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=64)** I can request this by using the minus SV option.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=67)** For the sake of time, I'll restrict this to just a few of the identified ports and add the T and U options to include both protocols.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=83)** This scan shows the ports open and the type and version of services running on them.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=88)** Nmap, then, provides a port scanning capability, which enables comprehensive remote detection of services.

> [!info]- Semantic Content
>
> **Env Vars:** udp (3), tcp (1)
> **Code Keywords:** let (1), while. (1)
> **Ports:** port 68 (1)
> **Speakers:** - [instructor] (1)

#### Enumerating SMB from Linux: Episode 1
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=0)** - [Instructor] SMB and its Linux equivalent Samba are important protocols for the pentester to master.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=6)** We can use SMB to enumerate the network using a tool called nbtscan.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=11)** Let's check the options available.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=13)** Okay. Let's try an nbtscan on the test network.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=24)** This produces a listing of the systems active on the network and their netbios name.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=29)** The number and letter suffix of the netbios name provides an indicator of the usage.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=34)** These codes include 00U is a workstation.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=38)** 00G is a domain name.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=41)** 20U is a file server service.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=44)** 1U and 01G of both master browser.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=48)** The full list of codes can be found at the Windows networking site.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=52)** I can use nbtscan to provide netbios information on a single host.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=57)** I'll run this against my Windows 7 system to enumerate its netbios information using the R switch and the verbose output.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=65)** This was the same information provided in the network scan in a slightly different format.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=75)** I can also enumerate individual system resources using nmap SMB scripts.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=80)** Let's check what scripts we have available.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=82)** Here, we can see the SMB scripts for enumerating the mains, groups, processes, sessions, shares, and users.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=97)** Let's use the unmapped scripting engine with an SMB operating system discovery.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=102)** This lists the open ports on my Windows 7 system which is on my testing network and shows the operating system details.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=116)** I can also run this script across the internet and I'll target my Windows 10 system on IP address 192.168.1.10.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=124)** Again, you have enumerated the open ports and acquired the operating system details.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=135)** I can also run the script against Linux hosts.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=138)** Let's have a look at the metasploitable system.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=141)** We can see this as a debian host running Samba and it has a lot of open services.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=151)** Let's enumerate the user accounts on metasploitable.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=154)** Here we see the open ports followed by a listing of accounts, starting with backup, including MSF admin, and also showing route and user, sys, UUCP and ww data.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=179)** Many of these counts are disabled.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=181)** I'll do this for my Windows 10 server.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=183)** This shows only the open ports.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=191)** This is because the M map scripts attempt to use the null session to obtain user accounts.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=197)** And this form of access has been disabled by default in most Windows operating systems.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=202)** Another Kali tool, which is useful with Linux targets is Enum for Linux.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=207)** Let's see what it can provide.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=209)** First of all, let's try this against the metasploitable system and request the user list.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=218)** This produces the list of known usernames but also identify some interesting characteristics.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=229)** Firstly, the host is on a domain of work group and it allows sessions using blank username and password then lists the user accounts.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=239)** The S switch provides an enumeration of shares.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=242)** This shows the shares starting with print, dollar, temp, opt, IPC dollar, and admin dollar.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=255)** The tool then attempts to use the share to mapped drive and succeeds with temp.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=262)** The A option performs the full set of enumeration.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=266)** This provides an extensive listing starting with the MBT stat information, user accounts, shares, password policy information,
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=288)** and finally root cycling which is an alternative method of listing users which circumvents some access controls.

> [!info]- Semantic Content
>
> **Non-Speech:** (typing) (12)
> **Code Keywords:** let (8), switch (2), enum (1)
> **Env Vars:** smb (5), msf (1), uucp (1), ipc (1), mbt (1)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)

#### Enumerating SMB from Linux: Episode 2
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=0)** - [Instructor] SMBMap is a popular Samba Share enumerator.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=4)** Available from the Kali applications menu in the SMB sub menu of information gathering.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=10)** We can also run it from the command line.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=12)** I'll run this against my Windows 7 system.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=15)** I have a standard user account which I can use called training.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=25)** This establishes an SMB session and enumerates the shares.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=29)** We can see that the temp and training shares exist together with the four special system shares user, C$, admin$ and IPC$.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=38)** We have read-write access to temp and read only access to training.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=42)** I can run this against Metasploitable with the null session which means I don't need a user ID and password.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=53)** And again, we see the shares including the temp share, with full read-write access.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=59)** I can also run this with the R option and get a direct relisting of files in the accessible temp share.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=72)** There's also a tool for Kali which can be used to enumerate the permission shares, directories and files on a host Windows and Linux systems.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=81)** This is ShareEnum.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=82)** And if it's not preloaded on your version of Kali it can be downloaded and installed from the GitHub site shown.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=89)** If I execute sharing them with no options, I get the help out part.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=96)** Now I can execute this against the Metasploitable target using the null session.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=106)** The output is sent to share is one dot text which I can now cut.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=113)** We can see the enumeration of Metasploitable file shares in comma separated form.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=119)** I can do the same with the Windows 7 system, but as this doesn't allow null sessions I have to provide a user ID and password.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=131)** The output is sent it to share is two doc text which I can now cut.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=139)** Okay, we can see the users, temp and training shares again in comma-separated form, as well as the standard shares IPC$, C$ and admin$.

> [!info]- Semantic Content
>
> **Env Vars:** smb (2), ipc (2)
> **Tools:** command line (1), github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Enumerating SMB from Linux: Episode 3
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=0)** - [Instructor] A useful tool for Windows SMB enumeration, from Linux, is RPC client which comes as part of the Samba suite.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=9)** It needs authenticated access, so we'll use the IE user account for enumeration with its password of password shriek.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=17)** I'll use it to enumerate my Windows 10 system, but, firstly, let's have a look at its help.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=26)** Okay, so now I'll connect to the Windows 10 system.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=35)** We've now got an RPC client prompt, so let's check the server information.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=42)** We can see the server has been identified as a Windows 10 system.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=47)** If I type help, I'll see the range of commands we can use within RPC client.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=54)** Okay, there's a lot we can do.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=56)** I'll start by checking the username.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=63)** Okay, this is the IE username we use to login.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=66)** I can query information about users, although I need to know the rid.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=70)** However, if I issue the enumerate domain users I get that.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=78)** Cool, we now have the user list.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=80)** What's even better, is that RPC client will allow us to enter the rid in hexadecimal, so we can query the administrator's account.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=94)** We can do the same by using the decimal rid of 500.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=102)** There's quite a lot of useful information here.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=105)** I can do the same for rid 501, and we get the guest account.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=112)** I can also enumerate the set of privileges on the system.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=118)** I can enumerate domain groups and alias groups.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=129)** I can enumerate shares, using the command netshareenum.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=136)** We can also use netshareenumall.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=142)** We now see the system shares as well, ADMIN$, C$ and IPC$.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=148)** I can enumerate the printers on the host.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=153)** The full list of enumeration commands can be found by typing enum, and hitting tab twice.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=162)** So RPC client provides a rich set of enumeration commands, and it's worth spending time to become familiar with its use.

> [!info]- Semantic Content
>
> **Env Vars:** rpc (5), smb (1), admin (1), ipc (1)
> **Code Keywords:** let (2), enum (1)
> **Speakers:** - [instructor] (1)

#### Enumerating SMB from Windows: Episode 1
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=0)** - [Instructor] DeepNetScanner is a windows graphical net bias scanning tool.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=4)** It can be downloaded from the source forge sites shown here as the nbtenum zip file.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=11)** I've already downloaded this tool.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=14)** Let's scan the address range 10.0.2.1 to 10.0.2.20 and scan.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=30)** That's finished and he's identified two systems.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=33)** Let's double-click on the first host and find the netbios information for METASPLOITABLE whom we can expand the NetBIOS Names to get more details.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=48)** Similarly, I can double click on the 10.0.2.14 host but we just get the round trip time.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=56)** I can, however right click and select Gather Information and in the right hand panel, we see that the deep scanning has probed using SMB and we can now see shares and we can open them and we can see services and open those.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=77)** And we can I expand the server information and the operating system to see where windows 10 system.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=85)** At the bottom, we have open ports and we can see two open ports, one, three, nine and four, four, five.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=92)** Netbiosenumerator is a relatively simple tool, but it's a useful start points for our netbiosenumeration.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=100)** Another tool which provides a numeration that's worth looking at, is the Mitec network scanner.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=106)** This is available from the Mitec site shown here.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=109)** Again, I've downloaded the tool already, so let's get started.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=113)** The first thing I'll do is to select preferences at the right and check the settings.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=118)** We'll leave them as default for the moment.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=120)** To enumerate systems that don't allow no sessions, I cannot credentials, but we'll just do an old session scan for now.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=129)** Let's enter network range in the top panel.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=132)** And we'll again enter 10.0.2.1 to 10.0.2.20.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=143)** Above this, we have three scanning options from the left IP range scan, network neighborhood scan, and active directory scan.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=153)** I'll select the IP Range Scan.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=157)** We can see the results appearing and we have six IP addresses and they're shown together with them Mac addresses and some of the host details.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=168)** I can now highlight one of the entries, for example, the desktop entry.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=175)** And we can say this is a windows 10 system.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=178)** If I right click it, I can select Advanced Device Explorer.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=183)** The general details are shown in the dashboard.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=186)** I can click on Shares and the tool will retrieve and display the shares.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=192)** I can go to Port Scanner and scan for open ports.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=199)** And we can see the system has three open ports.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=202)** Let's look at the processes and we can see the processes running on the system.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=209)** One of the really powerful features is WMI Explorer.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=214)** We can use this to enter windows management interface query.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=217)** And if we look at the dropdown, we can see some pre-populated sanded query examples.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=224)** If we select the query relating to fixes, and execute that, we can see the hotfixes that have been applied a useful check for missing fixes when we're testing.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=240)** Let's look the top entry and go to Advanced Device Explorer.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=245)** This time we'll look at the Event Log Explorer.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=249)** We'll let it query the event logs and then we'll select System.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=256)** We're now able to get a deep understanding of what's happening on this target.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=261)** We'll leave it there but that scanner is a very powerful tool for enumeration and it's worth spending some time exploring once you finish this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), interface (1)
> **UI Navigation:** click on (2), select the (2), go to (2), double-click (1), dropdown (1)
> **Versions:** 10.0.2 (5)
> **Definitions:** is a  (4)
> **Env Vars:** metasploitable (1), smb (1), wmi (1)
> **CLI Commands:** find (1)
> **Exercise Files:** zip file (1)
> **Analogies:** for example (1)

#### Enumerating SMB from Windows: Episode 2
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=0)** - SoftPerfect have produced a freeway network scanner which provides a wide range of network scanning and enumeration across the network, including WMI, SMB, SNMP, amongst other remote services.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=13)** I'll use this to do some network scanning.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=16)** The tool is available as an installation and portable download from the SoftPerfect website.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=23)** I've got this downloaded already, so let's have a look at it.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=27)** Okay, I've selected the IP address range 10.0.2.1 to 10.0.2.20.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=34)** Let's go to the Options tab and select Program Options.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=39)** I'll click the Workstation tab and make sure all the options are selected and the Ports tab and we'll select Ports 1 to 1024 and all the UDP ports.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=54)** In the Shares tab, we'll enumerate all.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=58)** And in the Applications tab, we'll make sure computer management and remote desktop have both been checked.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=67)** Let's open, in the Options menu, Remote WMI and mark all.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=78)** Remote Services and mark all,
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=86)** and Remote SNMP and mark all.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=91)** Okay. I'll now start the scan.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=97)** I've started at my Ubuntu system, so the scan now finds seven systems on the network and continues to run the scan, with the longer-running items, such as port scans, updating as they're complete.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=109)** 10.0.2.9 and 10.0.2.14 show that they can be expanded.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=116)** When I do that, we can see the shares that are available on those two targets.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=124)** If I double click on C$, I can explore the remote Windows 10 file system.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=134)** And if I click on Users, I can see the user folders.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=145)** I can select and right-click on the entry and select Properties.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=150)** And the results are provided in a pop-up.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=155)** I can also right-click and select Open Device, Computer Management.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=162)** This brings up a remote access to the host computer management console, and provides me with full management control.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=169)** For instance, I can open services and applications services, and see the services running.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=176)** Of course, this generally requires credentials which we can put in by the Credentials Manager.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=184)** SoftPerfect is easy to use, and it's another powerful scanner that's a must for any network enumeration task.

> [!info]- Semantic Content
>
> **Env Vars:** wmi (2), snmp (2), smb (1), udp (1)
> **UI Navigation:** click on (2), right-click (2), go to (1)
> **Versions:** 10.0.2 (4)
> **Code Keywords:** let (3)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - softperfect (1)

#### Enumerating using SNMP
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=0)** - The Simple Network Management Protocol, SNMP, is an evolution of an earlier protocol known as SGMP.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=8)** SNMP was approved as an internet standard in 1990 and has been used widely in network management systems since that time.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=17)** While most network equipment vendors provide SNMP support in their products, Microsoft has recently announced it will see support for SNMP and has essentially removed it from Windows.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=29)** Nevertheless, you'll find a lot of SNMP out there.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=33)** An SNMP manager application is used to manage devices through an SNMP agent running on them which gives the SNMP manager access to a vast amount of internal device status and configuration information.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=47)** The SNMP manager will typically store this information in what's known as a Management Information Base or MIB.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=54)** Information in SNMP is given an object identifier.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=59)** These identifies exist in a hierarchal tree and an example is shown here, starting at root and progressing down a path of ISO, org, DOD, internet, et cetera.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=70)** The object identifier can be expressed in words as [iso.org](https://iso.org).dod.internet or more typically numerically as 1.3.6.1.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=80)** As we can say in this example, manufacturers are provided with a node in the tree.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=85)** Here we can see the experimental note for Cisco which has object identifiers starting with 1.3.6.1.4.1.9 and all Microsoft experimental systems will have objects identifier starting with 1.3.6.1 4.1.311.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=106)** Production systems will use a common object identifier for the same information.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=110)** So both a Microsoft and a Linux system will have 1.3.6.1.2.1.1.1 as the object identifier for system information.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=122)** And 1.3.6.1.2.1.25.4.2.1.2 for running processes.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=132)** Cisco uses the same object identifier for system information, but uses X experimental branch object identifier for its processes 1.3.6.1 4.1.9.9.109.1.2.1.1.2.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=151)** Another concept within SNMP is communities where objects are intended for sharing throughout a community of users.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=158)** Most vendors ship their products with the two defaults community strings, public, which is used for read only and private, which allows read-write.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=167)** The community name is often used when requesting objects.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=171)** Kali provides some useful tools for enumerating SNMP.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=176)** To start with, we can use 161 to list SNMP enabled devices.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=182)** 161 and we'll check our sub-net 10.0.2.0/24 and we'll look for the public community.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=194)** And here we see we have just 10.0.2.9, which is our Ubuntu system.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=200)** Next we can use snmpget, which extracts a specific RID.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=206)** snmpget minus V1 version one, SNMP.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=213)** The community string is public.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=216)** The IP address is 10,0.2.9.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=219)** And our LID is 1.3.6.1.2.1.1.5.0.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=231)** And we see this response with the system name.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=235)** And if we look at 2.1.1.1.0, we get the system information.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=243)** We can look at all our IDs in a branch by using snmpwalk.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=249)** snmpwalk version one, SNMP community string public 10.0.2.9.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=261)** And we'll look at the branch 1.3.6.1.2.1.1.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=269)** And we get all the SNMP entries in that branch.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=274)** And if we go higher, when we look at everything in 1.3.6.1, we get everything in the MIB for that device.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=286)** We can explore a target more easily with a graphical tool such as iReasoning free MIB browser.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=293)** We can download this as a zip file.
>
> **[4:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=296)** wget [https://www.ireasoning.com](https://www.ireasoning.com)/
>
> **[5:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=306)** download/mibfree/mibbrowser.zip
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=317)** And we can extract it, unzip mibfree/mibbrowser.zip
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=325)** And then we can go into the extracted files which are in ireasoning/mibbrowser
>
> **[5:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=337)** and we can run it, browser.sh.
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=346)** Okay, so we can put in the IP address, 10.0.2.9 and I'm going to expand the entries and on the entry we can walk and we get all the our LIDs.
>
> **[6:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=361)** We now have a tree with object descriptions in the left pane and they're interpreted values in the right pane.

> [!info]- Semantic Content
>
> **Versions:** 1.3.6 (9), 1.2.1 (4), 10.0.2 (4), 2.1.1 (2), 1.4.1 (1)
> **Env Vars:** snmp (16), mib (3), sgmp (1), iso (1), dod (1)
> **Code Keywords:** public (4), private (1)
> **CLI Commands:** find (1), node (1), wget (1), unzip (1)
> **Definitions:** known as (2), is an  (1)
> **URLs:** [iso.org](https://iso.org) (1), [https://www.ireasoning.com](https://www.ireasoning.com) (1)
> **File Paths:** browser.sh (1)
> **Code Identifiers:** ireasoning (1)

#### Enumerating with RPC
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=0)** - [Instructor] The RPC protocol works with application endpoints, which are defined by a universal unique identifier.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=8)** If we want to generate a UUID for our RPC application we can use an online service such as the site shown here.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=17)** When a client makes an RPC call to the server using the UUID, a binding is created which establishes a pipe for data transfer between the client and the server.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=28)** The server's RPC service helps the client by providing a locator function, which can be called to enumerate all endpoints that it holds.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=36)** Let's take a look at it.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=39)** Let's load a graphical tool called winfingerprint which provides a lot of types of enumeration including enumerating RPC endpoints.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=47)** This is available from the QP download site and I've already installed it on my Windows system.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=53)** Winfingerprint has many features, but for the purpose of RPC enumeration I'll select a single host and de-select all but the RPC bindings option, and then we'll scan.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=69)** And we can see here, the endpoint enumeration in the bottom panel, we can see pipe endpoints and TCP/IP endpoint ports in the 49,000 range.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=80)** Carly also comes with a tool to enumerate Unix endpoints using the Unix RPC port mapper on port one, one, one.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=90)** RPC and Linux is available as assembler service.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=92)** And we can use the RPC info tool in Carly to enumerate it.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=96)** Let's enumerate sandbar on our Metasploitable system using the command rpcinfo-p10.0.2.8.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=107)** And this provides a listing of the TCP and UDP end points on the system showing the port numbers and the services managing them.

> [!info]- Semantic Content
>
> **Env Vars:** rpc (10), uuid (2), tcp (2), udp (1)
> **Code Keywords:** let (3), function (1)
> **Versions:** 0.2.8 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using WMI to enumerate Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=0)** - [Instructor] WMI is the Microsoft implementation of Web-Based Enterprise Management, WBEM, and Common Information Model, CIM, to industry-driven distributed system management standards.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=15)** Managed components are represented as WMI objects, class instances representing highly structured operating system data.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=25)** Microsoft provides a wealth of WMI objects that communicate information related to the operating system, as well as mechanisms such as PowerShell for accessing WMI data, and executing WMI methods.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=39)** All WMI objects are queried using the WMI query language, WQL, which is similar to SQL.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=47)** There are two types of WMI objects, dynamic and persistent.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=52)** Dynamic objects are generated on the fly when a specific query is performed.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=57)** For example, when 32 process objects are generated on the fly.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=63)** Persistent objects are stored in the CIM repository located by default in the System32 Windows directory under WBEM/Repository/OBJECTS.DATA.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=76)** The Windows Management Instrumentation Service is automatically started by default in Windows, and can be used to enumerate the windows configuration.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=86)** Microsoft provides two protocols for transmitting WMI data remotely, DCOM and Windows Remote Management, WinRM.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=96)** DCOM has been the default protocol used by WMI since its inception.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=102)** DCOM establishes an initial connection over TCP port 135 in order to negotiate a random service port.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=110)** Although this port can be hard coded to a static port number by running Dcomconfig at the command prompt.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=117)** Some WMI objects include methods that can be executed.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=120)** For example, the create method of the Win32_Process class.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=125)** WMI also provides an eventing system, whereby users can register event handlers upon the creation, modification, or deletion of any WMI object instance.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=139)** The commonly used WMI Classes are described in detail on MSDN.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=144)** But many more obscure WMI classes are not officially documented.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=149)** WMI Classes are categorized hierarchically into namespaces, all of which derive from the root namespace.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=157)** Microsoft uses root/cimv2 as it's default.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=163)** WMI is an extremely powerful tool for attackers across many phases of the attack lifecycle.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=169)** From reconnaissance, AVM detection, code execution, lateral movement, covered data storage, introduction of a bank door, and persistence.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=180)** Understanding how to enumerate WMI is useful both for offensive and defensive activities.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=188)** Let's use PowerShell to start by entering a simple WMI query to list all account names.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=195)** There we go.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=202)** A complete list of group, system, and user accounts.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=207)** We can write a PowerShell script to do more sophisticated queries, such as enumerating the logical desks and showing their size.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=215)** I have a short script to do this in notepad.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=218)** I'll select it and right click to copy it and then right click in PowerShell to paste it.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=228)** This then executes when I press Enter.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=232)** This provides the enumeration of disc drives with their size.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=235)** We can see the C and D drives as well as the Z: network share.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=241)** We can run many different WMI queries to enumerate a window system.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=245)** And there are hundreds of tables in the WMI database.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=249)** We can script queries if we know the tables and entries, but there's an easier way.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=254)** Microsoft provides the WMI C and WB M test utilities for interacting with WMI through PowerShell.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=262)** Let's have a look at WBM test.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=267)** This displays a gooey and waits for me to make connection.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=271)** I'll click Connect.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=274)** The default namespace is displayed root/cmiv2.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=279)** I can enter credentials for privileged access session or just accept an authenticated access.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=285)** I'll accept that and press the Connect button.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=290)** I now have the WMI controls active and can enumerate, create, open and delete classes and instances as well as running queries.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=301)** I'll take a simple action and select Enum to enumerate and I'll leave the super namespace blank.
>
> **[5:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=311)** I can now scroll down the list of classes and I can select Win32-Security Setting Group and these properties are displayed.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=324)** We have complete control to edit, create and delete qualifiers properties and methods.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=332)** If using the Microsoft tools is difficult, we can use a tool called WMI Explorer to manually navigate the WMI instrumentation data tables and explore them with a gooey.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=344)** The end results will still be the same.
>
> **[5:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=347)** Selection from a namespace and a script that runs to enumerate the information we want but it's easier than having to remember PowerShell scripts and it does provide a good hierarchical approach.
>
> **[5:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=359)** WMI Explorer can be downloaded as a simple zip file from the code flex website.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=364)** I've already downloaded it, so let's get started.
>
> **[6:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=367)** The first thing I have to do is put in an IP address.
>
> **[6:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=371)** I'll start by looking at my local host, either just a dot or I can specify 127.0.0.1.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=384)** We can see the WMI instrumentation groups in a tree view in the namespace panel.
>
> **[6:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=389)** Windows instrumentation provides access to objects which have settings and which can have multiple instances.
>
> **[6:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=395)** I can select ROOT\CMIV2 and expand it out.
>
> **[6:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=400)** When we double-click on ROOT\CMIV2, we see at the top of the classes column, that there were 421 classes.
>
> **[6:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=408)** I'll scroll down to Win32 account and select that.
>
> **[6:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=414)** In the right-hand panel, I can see there are 49 instances and nine properties.
>
> **[6:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=419)** In the instances, we can see the enumerated account information for the system, including group accounts, system accounts and at the bottom, the configured user accounts.
>
> **[7:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=435)** A little further down, I can select Win32_/BIOS.
>
> **[7:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=441)** This has one instance and when I select it, I can see the 31 properties.
>
> **[7:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=449)** Win32_/Disk Drive enumerate to one instance
>
> **[7:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=458)** and we can select it to see its properties.
>
> **[7:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=463)** Down to Win32_/Logical Disk and we have three instances relating to 2 disk drives C and D which we saw in the PowerShell query and the Z share.
>
> **[7:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=475)** Moving down the classes, I'll select ROOT\Security Center2, this shows three entries in the classes panel, I'll click on the first AntiSpyware and an entry appears in the instances.
>
> **[8:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=488)** I can double click on that when we get the properties showing that windows defender is configured.
>
> **[8:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=496)** PowerShell remoting uses WinRM rather than Dcom and allows for extremely powerful remote management of a windows enterprise at scale, using PowerShell.
>
> **[8:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=508)** The default WinRMTCP port is 5985 http and provides encryption by default.
>
> **[8:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=515)** Certificates may also be configured enabling https support over TCP port 5986.
>
> **[8:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=523)** I can check from PowerShell whether a remote computer is set up to take a remote WMI request.
>
> **[8:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=529)** I'll run the Test-WSMan command against the windows 10 system.
>
> **[8:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=539)** This confirms that it can access the remote windows seven system displaying the standard the WSMan identity banner.
>
> **[9:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=547)** Let's use PowerShell again to query the remote system.
>
> **[9:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=551)** I'll use the original query I run but I'll point it at the remote system.
>
> **[9:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=562)** There we go, complete list of group system and user accounts from the remote system.
>
> **[9:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=567)** We have a powerful tool for local and remote enumeration as well as many of the users.

> [!info]- Semantic Content
>
> **Env Vars:** wmi (29), dcom (3), root (3), wbem (2), cim (2)
> **Code Keywords:** let (4), default. (2), delete (2), static (1), class. (1)
> **Tools:** powershell (11), command prompt (1)
> **UI Navigation:** scroll down (2), click on (2), double-click (1)
> **Analogies:** such as (2), for example (2), similar to (1)
> **Ports:** port 135 (1), port 5986 (1)
> **CLI Commands:** make (1)
> **Versions:** 127.0.0 (1)

#### Enumeration using Finger
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=0)** - [Instructor] Finger is an older utility which was used for enumeration.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=4)** It may still be available on some systems, and if it is, then it's an easy way of enumerating users.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=10)** I've installed the Finger Daemon on my Ubuntu host so let's take a look at what it gives me.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=15)** It's basic use is to check on details of a specific user.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=19)** Let's look at the user Malcolm.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=26)** This provides the home director for the user Malcolm, the username, the login shell, details of the user login time and information about mail and plans.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=35)** I can use Finger to look at all logged in users on a host, I do this by emitting the username.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=44)** Malcolm and Harvey are logged in and we can see that details.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=48)** We can also use finger to get information about users not currently active, if we know their user ID.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=59)** Finger is legacy and often not used, but if it's detected on port 79, it can be quite useful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Ports:** port 79 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Remote enumeration using PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=0)** - [Instructor] When testing a target network, you may gain access to a Windows target inside the network.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=7)** At this point, you'll likely want to scan the internal network.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=11)** To do this, we can use the target's own PowerShell capability to scan for additional hosts or to do port scanning.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=19)** This way, we don't need to increase the risk of detection by loading additional tools.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=24)** Let's see how we do this.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=27)** I'm at the PowerShell prompt and can use ipconfig as we normally would to get our IP address.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=35)** Okay, we can see our IP address is 10.0.2.14.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=39)** Let's scan the sub-net.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=42)** To do this, I'll use the PowerShell for loop checking IP addresses ending with 0.1 to 0.254, checking whether the ping succeeds.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=52)** Inside the for loop, we use the system net function for ping and send a ping request with 100 milliseconds timeout for each host.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=61)** The variable hosty is output if a ping is a success.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=65)** And we're scanning the sub-net now.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=68)** Okay, that's it, and we found seven hosts active.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=72)** Let's now do a scan of the host on address 10.0.2.8.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=76)** To do this, again, I'll use the PowerShell for loop, this time checking for some common ports and we'll test each connection and list the port number if it's open.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=87)** We start by initializing the port array with a few common ports.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=91)** In the for loop, we use the system net TCP client and try to open a connection.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=97)** If it connects, then we display the current entry in the ports array, and we can see we have the open port on 10.0.2.8.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=106)** These are just two ways of enumerating with PowerShell and there are many more techniques you can use as you advance your PowerShell knowledge.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (3), this. (1), function (1)
> **Tools:** powershell (6)
> **Versions:** 10.0.2 (3), 0.1 (1), 0.254 (1)
> **Env Vars:** tcp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Enumerating Web Apps

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is that web server?
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=0)** - [Instructor] We can fingerprint a website using a tool called WhatWeb.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=4)** Let's use this against the Metasploitable server on 10.0.2.8 and see what it finds.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=10)** Whatweb 10.0.2.8.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=15)** We can see the web server is running on a Ubuntu platform using the Apache 2.2.8 software configured with WebDAV, and it's called Metasploitable2 - Linux.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=27)** WhatWeb can also check all websites on a subnet, and using grep, we can skip hosts which don't respond.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=34)** WhatWeb 10.0.2.0/24 --no errors, and we'll pipe that into grep-v Unassigned.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=50)** We have two websites available, the Metasploitable website we've just checked and another on IP address 10.0.2.9.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=59)** This is also running on Ubuntu with Apache 2.4.29 and it's presenting the Apache default page.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=68)** Whatweb comes with a large number of plugins which identify specific websites and applications.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=73)** We can see these using the minus L switch.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=77)** Whatweb -l, and that'll pipe that through to more.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=83)** Here we see the plugins for all the web servers and applications that Whatweb knows about, and there are plenty of them.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=90)** Whatweb is useful for us to rapidly kickstart our web testing and gather valuable information for subsequent deeper targeted testing.

> [!info]- Semantic Content
>
> **Versions:** 10.0.2 (4), 2.2.8 (1), 2.4.29 (1)
> **CLI Commands:** apache (3), grep (2)
> **Code Keywords:** let (1), switch (1)
> **Speakers:** - [instructor] (1)

#### Enumerating a website with Nikto
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=0)** - [Instructor] Having identified our target list of web servers with a tool such as What Web, we can use Nikto to get more detailed enumeration of these websites.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=9)** Let's run Nikto against the Metasploitable server on 10.0.2.8.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=15)** Nikto -h 10.0.2.8.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=22)** We can see that Metasploitable presents an Apache 2.2.8 server with WebDAV.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=30)** Nikto advises that's anti-clickjacking, cross-site scripting protection and X content type headers aren't set.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=37)** There's a warning that the Apache server is outdated.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=40)** There's then a couple more warnings about a TCN header and multi-view weaknesses.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=47)** Nikto then identifies a number of vulnerabilities starting with OSVDB-877, which means that the trace option is active and that it's vulnerable to cross-site tracing.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=59)** Nikto also identifies a folder/doc which can be browsed, so let's check that out.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=66)** Okay, Nikto was right and we have a lot of entries in this folder.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=72)** I won't go through each of the vulnerabilities identified in detail, however, these do provide a good start point for your subsequent deeper testing.

> [!info]- Semantic Content
>
> **Versions:** 10.0.2 (2), 2.2.8 (1)
> **CLI Commands:** apache (2)
> **Code Keywords:** let (2)
> **Env Vars:** tcn (1), osvdb (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Enumerating webpages
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=0)** - [Instructor] If we want to enumerate a website, we can do that with OWASP ZAP which we can run from the web application analysis menu.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=11)** We can run our analysis by clicking Automated Scan and entering 10.0.2.8.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=23)** Pressing Attack.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=27)** ZAP starts spidering the site, looking for ways to attack it.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=31)** At the bottom left, we can see the alerts that are being raised as we go.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=36)** Once its finished spidering, it will start its active scan.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=40)** Let's wait while ZAP finishes the scan.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=44)** Okay, we can see it's now doing its active scan.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=48)** We've got enough to look at, so I'll stop the scan.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=53)** If we expand Sites and expand 10.0.2.8, we can see the website's structure.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=63)** At the bottom left, we can also see the alerts that have been raised by ZAP.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=69)** If we click on the first path traversal, we can see that during enumeration, ZAP found it was able to find a path traversal.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=77)** And if we copy this path, we see Metasploitable's password file.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=87)** ZAP provides us with good website enumeration and more.

> [!info]- Semantic Content
>
> **Env Vars:** zap (6), owasp (1)
> **Versions:** 10.0.2 (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Enumerating hidden webpages
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=0)** - [Instructor] Spidering is fine for pages linked to the main web route, but we also need to find those pages that aren't.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=7)** For that, we can use one of a number of tools, the main ones being DIRB, DirBuster, and Gobuster.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=13)** Let's look at a couple of these.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=15)** DIRB by default uses its own small dictionary of webpages, which can be used as a first-pass enumeration.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=22)** Like Gobuster and DirBuster, it also gives us the option of specifying a wordless file and selecting specific file extensions to search for.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=30)** Let's run DIRB in its simplest form, dirb [http://10.0.2.8](http://10.0.2.8).
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=42)** The default dictionary for DIRB is in alphabetical order, and we can see the current word list being tested.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=49)** We can see it's quickly found a number of files and folders at the top level.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=54)** Once the top level structure and files have been listed, DIRB starts enumerating the folders, and providing a second level of enumeration, and this goes on until all folders and subfolders have been enumerated.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=66)** Okay, we can see DIRB found 56 files.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=71)** We can see there's a php MyAdmin directory with a webpage, TODO.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=76)** Let's take a look at that.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=79)** Okay, we can see there's a user, nijel, and that the Sourceforge tracker is installed.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=88)** Let's look at one of the other tools, Gobuster.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=91)** This isn't installed by default, so we can install it by entering sudo apt install gobuster.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=106)** Okay, for this I'll run Gobuster using a medium-sized lowercase dictionary, and direct it to show me all of the PHP and text files in the search, as well as the webpages.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=116)** I'll set the number of threads to 25.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=120)** Gobuster, and move onto directory, listing of -u 10.0.2.8.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=129)** And we want to see PHP and text files, and the word list we're going to use is in usr/share/wordlists/dirbuster/
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=144)** directory-list-lowercase-2.3-medium.text,
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=154)** and we'll run with 25 threads.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=159)** Okay.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=160)** Gobuster doesn't by default display the current word being processed, although that's a configuration option, but it does display the folders and files it finds, starting with the /index folder and the PHP file.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=171)** We'll let that run for a while.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=176)** Okay, that's finished.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=177)** Gobuster doesn't do recursive searches by default, but we can run it again with the folder name to go one level deeper.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=184)** Let's enumerate the twiki folder.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=192)** We can now see the files and folders under twiki, starting with the templates folder.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=197)** There are other tools for webpage enumeration, and all are very similar, so the real key to enumerating websites is having the right dictionary.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=206)** Kali provides a number of dictionaries to use, and you may wish to have your own available, based on your knowledge of what you've found in the past in your pen testing.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=216)** The appropriate use of spidering is an adjunct to busting the website.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=220)** Can save quite a bit of time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (2), pass (1), for. (1), while. (1)
> **Env Vars:** dirb (6), php (3), todo (1)
> **CLI Commands:** php (4), find (1), sudo (1), apt (1)
> **Versions:** 10.0.2 (2), 2.3 (1)
> **Prerequisites:** install (2)
> **URLs:** [http://10.0.2.8](http://10.0.2.8) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Enumerating the Internet

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Tracing routes across the internet routes
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=0)** - [Instructor] When testing an internet based system, it's sometimes useful to enumerate the route from the test system to the target.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=7)** Let's use sudo traceroute to trace the internet path.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=13)** To demonstrate this I'll set ICMP echo mode using minus I and I'll use a random IP address of 67.3.11.1.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=25)** Okay, we can follow the packet as it hops across the world to get to its destination, with a hop return trip time and the name of the hop server.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=34)** The trace terminates when the responses cease.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=38)** Windows provides a tracing tool called TRACERT.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=41)** TRACERT and I'll look again at 67.3.11.1.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=50)** This, again, shows the time taken for each hop and the name of the hop point.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=61)** The Windows tool also shows hop points which provide no response.

> [!info]- Semantic Content
>
> **Env Vars:** tracert (2), icmp (1)
> **Code Keywords:** let (1), this, (1)
> **Versions:** 67.3.11 (2)
> **CLI Commands:** sudo (1)
> **Speakers:** - [instructor] (1)

#### Using Shodan
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=0)** - Shodan is an Internet repository which maintains indexes of the services presented to the Internet via a vast number of Internet servers.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=9)** In essence, it's a service directory for the Internet.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=17)** Signing up for Shodan is free, and you can do that by following the Create an Account link on the right.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=24)** I've already got an account, so I'll log in.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=28)** (keys click) Our free membership restricts the number of results that we can see.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=38)** It's adequate to learn how to use Shodan.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=40)** To start with, let's start by looking for IBM Domino servers.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=45)** I'll type domino in the search bar, and press enter.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=51)** Okay, we've got a candidate list of Domino servers.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=55)** At the top of the list, we can see that right now Shodan knows of 51,715 of them.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=62)** In addition to providing the IP address, Shodan gives us the banner from the server, and if I go down the list a little way, I can see the (indistinct) server from HeiTech Padu on IP address 202.171.35.11.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=80)** We can get more details on the entry by pressing the Details link.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=87)** This show's the ports open, and the services running on those ports, together with the banner from those services.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=95)** Another feature of Shodan is to enumerate all vulnerabilities related to the search.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=100)** I'll click on the Exploits button on the left of the screen, and I'm presented with a set of vulnerabilities relevant to my last search.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=109)** In this case, we've got all the known Domino server vulnerabilities listed.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=113)** I'll scroll down to vulnerability described as Lotus Domino SMTP router, EMAIL server, and client DoS, and click it.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=124)** And we're taken to the Exploit's DB site to see the details of the exploit.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=129)** The Shodan database has a greater history than exploit's DB, so don't be surprised if the automated link leads to a missing entry.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=137)** The Shodan list of Domino servers also shows the distribution of servers by country.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=142)** It shows there are 3,083 systems hosting Domino in China, and if we click on China, we can see the list.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=153)** Note, the search has been constructed as domino country "CN".
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=158)** However, if I enter China in search request, just as a filter term, (keys click) I get only the list of Domino servers with China in the company name.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=169)** We've seen the use of country as a search filter.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=172)** Other search filters we can use include the terms city, host name, OS, and port.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=179)** Let's ask Shodan to enumerate all servers in its database with port 1352, the Domino administration port, open.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=188)** (keys click) And Shodan enumerates 80 systems from its database.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=196)** We can also search on the network address.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=199)** A useful query to see what's known about subnet of interest.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=203)** (keys click) We've got a 176 servers on that network.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=214)** I can combine these with a query such as net 177.137.102.0/24 space port 80.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=221)** (keys click)
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=235)** Which returns just two systems with HTTP open.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=238)** Shodan allows export of the search results in CSV, JSON, or XML format by clicking the Downloads link, and also is able to create a formatted report which it stores for subsequent access.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=251)** Shodan is a powerful enumeration tool that offers the opportunity to enumerate a significant amount of information about a target system or network without doing any active inquiries on the Internet.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=263)** Of course, the Internet changes all the time, so Shodan, and similar post-survey tools, can only tell you what was there, not what's there now.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=271)** That's needs active reconnaissance.

> [!info]- Semantic Content
>
> **Env Vars:** ibm (1), smtp (1), email (1), http (1), csv (1)
> **Code Keywords:** let (2), case, (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Ports:** port 1352 (1), port 80 (1)
> **Versions:** 202.171.35 (1), 177.137.102 (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - shodan (1)

#### Scan the internet with ZMap
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=0)** - [Instructor] The internet has grown to consume most of the IPv4 address space and is continuing to grow as IPv6 and that offer the means of extending beyond that.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=10)** Surprisingly, it's still possible to scan the internet and enumerate its connectivity.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=16)** ZMap is designed to perform comprehensive scans of the IPv4 address space or large portions of it.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=22)** At a rate which enables a full scan to complete within five minutes, given a good enough broadband connection.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=29)** It's a research tool which is used to profile the shape and size of the internet or at least the IPv4 part of it.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=36)** ZMap provides an ethical research capability by including a standard blankness file.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=41)** This ensure sites which do not wish to be scammed are emitted from it's scanning.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=46)** It also includes the capability to use a white list file to limit the scanning, to a known subset of the internet.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=54)** ZMap can be downloaded from the website [zmap.io](https://zmap.io) using the download ZMap link shown.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=61)** However, it can also be installed into Linux using the standard command apt-get install ZMap.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=69)** I've already installed ZMap so let's check the available options.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=76)** Let's run a simple scan on a limited number of hosts.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=79)** By default ZMap we'll perform a TCP syn scan on the specified port at the maximum rate possible.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=86)** Randomly selecting IP addresses and covering the whole internet.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=91)** I can limit the search using its options.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=93)** I look for the open web server, port 80.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=97)** With a limit of 1000 systems to scan, I'll output the results to web1.text and then list the results.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=111)** Okay, that's completed.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=118)** And we found two public servers open for business in the first 1000 random internet addresses we enumerated.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=126)** We can do the same scan for a specified sub-net range say 66 . 77 . 0 . 0 / 16 And I'll remove the limit on hosts scanned but I'll reduce the packet rates to 200 packets per second.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=148)** Okay, that's finished.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=156)** And again, we see a number of public web servers in that range.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=160)** This is enumerated a full class b address space in just under six minutes on the consumer internet connection.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=167)** Even though I've limited its bandwidth.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=170)** Using ZMap to scan the internet is a noisy and potentially disruptive activity if run in an uncontrolled manner.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=178)** In addition packets can be lost if the speed is too high and the results will then be incomplete.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=184)** Nevertheless, it is a good tool to look at current services that have been made public and with some trial and error to find the maximum reliable working rate.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=194)** ZMap can be a useful tool for numeration at scale.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (2)
> **CLI Commands:** apt (1), find (1)
> **Definitions:** is a  (2)
> **URLs:** [zmap.io](https://zmap.io) (1)
> **Ports:** port 80 (1)
> **Env Vars:** tcp (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 6. Enumerating Cloud

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Enumeration of the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=0)** - [Instructor] Cloud service providers offer a wide range of services ranging from generic operating system platforms to specialized applications.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=8)** Here we can see the services that Amazon offers which make up the Amazon web services offering.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=14)** Covering compute, storage, database, management and governance, more exotic services such as quantum and machine learning and many more.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=25)** One of the most popular services in AWS is the elastic compute cloud or EC2 service.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=32)** This is a Windows or Linux platform with an operating system installed and ready to go.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=38)** When we commissioned an EC2 platform, it's called an instance.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=42)** The life business may run many hundreds of instances.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=45)** Popular data resources are the S3 simple storage service which is like a virtual drive in the cloud and the RDS service, which provides various forms of SQL databases.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=58)** Even though a cloud service is on a public cloud, that doesn't mean it's necessarily accessible from the internet.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=65)** A cloud service such as EC2 will operate inside an AWS account virtual private network.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=71)** Being accessible only by the owner using a private IP address and accessed using SSH keys.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=78)** However, such services can be configured for internet access using a public IP address and can be configured to accept traditional user ID and password login.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=90)** We can use normal pen testing tools to enumerate internet facing cloud systems as we would do with any internet facing system.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=98)** However, Amazon provides a command line tool which you can use to do additional enumeration.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=103)** This is called AWS CLI.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=106)** If you want to see how to register for an install list, check out my cybersecurity and cloud computing course on LinkedIn Learning.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=114)** We don't need an Amazon account to do an authenticated testing, but this provides limited results.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=120)** If we have a personal account, we can get access to much more information on a target.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=126)** Having a target set of credentials provides of course the ideal level of access.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=130)** And this is a typical testing scenario.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=134)** These credentials are typically set up in what's known as a profile.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=138)** And a user can have many profiles and select the one required for each command.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=143)** Deploying infrastructure into the cloud retains the normal attack surface of the resources, system services accessible through their TCP and UDP ports, and injection points accessible through the web portal.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=156)** We can enumerate these as normal using tools such as Nmap and Burp Suite.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=161)** However, with cloud, we also get a complex set of policy scripts written in JSON form, which are attached to users to detail the services they can access and the actions they can take.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=173)** Policies can also be attached to resources, such as servers and storage to also detail access rights and restrictions.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=181)** Let's take a look to fragment of user policy.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=184)** This is an example of a policy which can be attached to a user to detail the actions that the user can take and on what kind of resource.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=193)** This is one version of the policy.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=195)** And at the bottom we can see it's version one, and it's the default policy.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=200)** However, other versions can exist and can be selected as the default to use.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=205)** The key part of this policy from an attack surface perspective is the middle portion which details the actions, effects and resources.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=214)** In this case, a user to which this policy is attached is restricted to three classes of actions, get resource, list resource, and change the default policy.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=226)** The policy can be an allow or deny.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=229)** And in this case it's an allow.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=231)** This policy applies to any resource.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=233)** So any service offered by AWS.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=236)** Consequently, this policy allows a substantial amount of enumeration but not the ability to change any resource setting.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=244)** So, enumerating cloud deployments involves not only traditional server and web portal enumeration, but also involves enumeration of resource policies to gain insight into the resource and looking for policy weaknesses which allow additional enumeration to be done.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), ec2 (3), rds (1), sql (1), ssh (1)
> **CLI Commands:** aws (4), make (1), ssh (1)
> **Code Keywords:** public (2), private (2), let (1), case, (1)
> **Definitions:** is a  (2), is called (1), known as (1), is an  (1)
> **Analogies:** such as (4)
> **Prerequisites:** install (1), set up (1)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)

#### Enumerating cloud policies
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=0)** - [Instructor] When we start Pen Testing AWS it's usually based on having a set of credentials.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=5)** These may have been obtained from earlier testing as hard coded API core parameters or from finding the credentials after penetrating a system.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=14)** Let's use the Amazon command line tool to look at enumerating policies using credentials that have stored in to profiles called scenario one and scenario two.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=23)** These come from testing deployments, I've set up using the CloudGoat AWS test system.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=29)** There's a reasonable amount of work involved in setting up a testing environment for AWS.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=34)** So we won't do that here, but if you want to get hands on with AWS, then I'd suggest you hop over to my Pen Testing AWS with Python course and take a deeper dive into the cloud.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=45)** With the scenario two access keys.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=47)** Let's look at how we enumerate the overall cloud accounts.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=51)** We can do a first check on an access key using the command aws sts get access key info minus minus access key.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=68)** And the access key we've got is ASIA 22ZK 7 SWAE WK6 X 4 MM And this returns the account that it belongs to.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=86)** If we have the secret key and have set it up in a profile we can get the user information also, using aws sts get caller identity minus minus profile scenario1.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=104)** We now get the user ID the Amazon resource name and the account.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=109)** We can also extract the username from the yarn.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=111)** We can see that the user is called raynor cgid, et cetera.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=116)** We can get overall account information using the IAM service by querying aws iam get account summary minus minus profile scenario1.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=134)** This is out the configuration information.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=137)** And we're looking for things such as the number of policies and versions of policies.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=141)** The number of access keys allowed per user and whether multi-factor authentication is active.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=146)** We can list the users active in the account with aws iam list users minus minus profile scenario1 there's two here.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=162)** And the one we're interested in for the enumeration is Raynor.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=166)** Having enumerated the basic account details.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=168)** Let's look at what policies exist.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=171)** We can do this with aws iam lists policies minus minus profile scenario1 to outerpol.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=186)** We get a lot of information provided in the JSON structure.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=190)** So I've saved it into a file.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=193)** Let's take a look at it, nano outerpol minus l.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=200)** We can see an initial policy called cg raynor policy cgid et cetera, et cetera.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=207)** The rest of the output relates to standard Amazon policies.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=211)** Okay, now we've got the policy name.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=214)** We can now check what policies are attached to our user by querying aws iam list attached user policies minus minus user- name raynor cgid sinp xl b t5t minus minus profile scenario1.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=249)** Let's do that again.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=250)** That should have been an n can see the account cg raynor policy is attached to Raynor.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=259)** Now let's check on the policy versions, aws iam list policy versions minus minus policy arn.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=275)** And then we have the arn for the policy that we saw before on aws iam 744 730 10 5216 are account number policy / cg raynor policy cgid s inp x lb t5t minus minus profile scenario1.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=314)** Now we can see, there are five versions.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=318)** Let's check what one of the policy versions contains.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=322)** You can do this by looking at version id v1, and instead of list policy versions, we'll get policy version.
>
> **[5:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=339)** And we can see the policy version details.
>
> **[5:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=342)** So we know that Raynor can get and list any resource and set the default policy.
>
> **[5:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=347)** Before we leave let's see what version three has in it.
>
> **[5:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=354)** And here we say that this policy allows any to be taken on any resource.
>
> **[5:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=359)** It's a super user policy.
>
> **[6:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=362)** While it's not active.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=364)** We now know that we can activate it with Raynor's account.
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=368)** As Raynor is permitted to change the default policy.
>
> **[6:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=371)** We can use this to escalate our privileges.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (13), python (1), yarn (1)
> **Env Vars:** aws (5), api (1), asia (1), swae (1), wk6 (1)
> **Code Keywords:** let (8), super (1)
> **Tools:** command line (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Enumerating cloud compute resources
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=0)** - [Instructor] Let's use the Amazon Command Line tool to look at how we enumerate compute resources.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=5)** We'll use a command called describe resources to enumerate all EC2 instances in the account, and we'll use our default profile.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=15)** We do this by entering the command, aws ec2 describe-instances, and we have to put the region in, which I'll use ap-southeast-2.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=36)** We can see that AWS has returned a JSON structure.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=39)** Let's examine this.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=41)** First of all, we can see the image ID from which this instance was spawned, and its unique instance ID.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=48)** When we select our elastic compute platform, we can select different types and sizes of computer.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=54)** We can see that this instance is a T2 medium EC2 compute resource.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=60)** Then we have a key name of Kali.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=62)** That's the name I gave this EC2 instance and I've used the same name for its access keys.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=68)** We can see there's a group clause.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=70)** We can group our EC2 instances into categories, such as dev, prod, test, and so on, but in this case, I haven't specified a group.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=79)** Further down, we can see this is placed in an availability zone, ap-southeast-2c.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=86)** Resources can often be duplicated across availability zones for redundancy purposes.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=92)** We then see the internal IP address for this instance.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=96)** We can access this instance through this address by using the relevant AWS profile which is associated with this instance's VPN and the SSH keys provided by AWS for this server.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=110)** We can see the product type of this resource, in this case, Kali is a product from the AWS Marketplace, and we can see its unique product ID.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=120)** If we scroll down, we can see the public DNS name is blank.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=125)** This instance doesn't have a DNS entry or a public IP address, so it's not accessible from the internet.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=131)** We can also see it stopped.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=134)** There's a fair bit more technical information provided about the instance, including its block storage and hypervisor type.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=141)** We can see it's a Kali Linux platform and we have its DNS information.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=145)** This provides a fairly good start point for understanding the type of server this is.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (4), aws (4), dns (3), json (1), vpn (1)
> **Code Keywords:** let (2), case, (2), public (2), this. (1), type. (1)
> **CLI Commands:** aws (5), ssh (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Enumerating cloud storage resources
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=0)** - [Instructor] The first type of storage resource that we'll look at is the AWS simple storage system, which is a repository, or bucket in Amazon terms, for files.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=9)** Let's see how we enumerate these resources using the AWS command line tool.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=15)** S3 storage buckets are a global resource so we don't need to specify a region.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=19)** We use the command, aws s3api list-buckets.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=29)** Okay, I can now see there's an S3 bucket called cg-cardholder-data-bucket.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=35)** We may need to have permission to access the bucket or it may allow anyone access.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=39)** Let's see if we can enumerate its contents.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=46)** Aws s3 ls, and we give it the bucket name, and we have access to this bucket and we can enumerate its contents.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=60)** We can see what's in a file using a special form of the copy command.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=64)** to do this, we'll change this to cp, we'll use the s3 prefix, and let's look at the cardholder_data_primary, and we use the minus for denoting standard output, and we can see here the data in the file.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=91)** The key problem with AWS storage is buckets being accidentally made open for public internet access.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=97)** GrayhatWarfare provides an index of open buckets which we can search to find any related to our testing.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=104)** I'll do a search for the term password.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=114)** At line four, we see a document.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=117)** If we click on it and open it, we find it's the servicedesk credentials for user superadmin, probably not what we want to have on the internet.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=132)** If we now navigate to the bucket and scroll down to the next page, we can see a set of safe password files.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=146)** If we open one, we can see everybody's password, again, probably not what we want on a server, nevermind on the internet.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=159)** There's another form of storage used frequently on Amazon, and that's the Relational Database Storage service or RDS which provides SQL databases.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=168)** Let's see how we use the command line tool to enumerate our relational databases.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=174)** The method we'll be focusing on for enumerating databases is describe-db-instances and we can try this using the command line interface.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=182)** We need to specify a region, so we'll look at us-east-1.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=186)** Aws rds describe-db-instances --region us-east-1.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=201)** Okay, we've now enumerated the relational databases on the account, there's just the one, which we can see is called securedb, which is managed with a master user account called cgadmin.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=213)** It's a Postgres SQL database run on a db.t2.micro server.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=218)** A little bit further down, we can see it's accessible as an endpoint through port 5432, and we find it's running Postgres9.6.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=229)** That's a good start to enumerating the RDB server.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=233)** There's a lot to learn about enumerating cloud, especially the account details in the identity and access management system and the accountant component policies.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=242)** To learn more about cloud enumeration, check out my LinkedIn learning courses, Cybersecurity and Cloud Computing and Pen tTesting AWS with Python.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (7), find (3), ls (1), cp (1), python (1)
> **Env Vars:** aws (4), sql (2), rds (1), rdb (1)
> **Code Keywords:** let (4), this, (1), public (1), interface (1)
> **Tools:** command line (3)
> **UI Navigation:** click on (1), navigate to (1), scroll down (1)
> **Code Identifiers:** cardholder_data_primary (1), ttesting (1)
> **Definitions:** is a  (1), is called (1)
> **Ports:** port 5432 (1)


### 7. Other Enumeration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Scanning with SuperScan
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=1)** - [Narrator] SuperScan is a Legacy Windows Enumeration tool, which we can download from the SnapFile site as shown.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=7)** The download is a zip file, and the tool can be used directly after extraction.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=12)** SuperScan offers a simple tabbed interface for running Discovery and Enumeration Functions.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=18)** The first thing I'll do is go to the Host and Service Discovery tab, and check all the discovery options.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=25)** I'll leave the UDP and TCP ports to just the common ones, that are checked as default, but I'll change the TCP Scan to Full Connect.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=37)** I'll also go to the Scan Options and uncheck Hide systems with no open ports.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=44)** And I'll go back to the Scan tab, and I'll enter the range of IP addresses we want to check, 10.0.2.1 and I'll just go through to 20.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=59)** I'll use the right-hand arrow to transfer them to the target list.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=63)** And then the record button at the bottom, to run the scan.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=69)** The scan progress is shown at the bottom of the screen.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=72)** We can see we quickly found 7 hosts and SuperScan is now enumerating ports.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=78)** Okay, that's finished now.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=80)** SuperScan found 7 live systems and the summary results is shown in the middle panel.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=87)** If I scroll up, I can see that we found IP addresses 10.0.2.1 2 3 8 9 14 and 15 5 of the 7 of open ports.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=103)** I can also view the scan report as an HTML document.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=109)** This provides the details for each host, and identifies its service characteristics.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=115)** For example, 10.0.2.1 is the main name server and has the trivial file transfer service, TFTP open.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=124)** 10.0.2.2 has 2 ports open, and 10.0.2.3 is a closed system.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=132)** 10.0.2.8 is called Metasploitable and has 18 TCP and 3 UDP ports open.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=140)** As we look further down this report on Metasploitable, we can say that connecting port 1524 provides a shell prompt, It's an open command shell.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=151)** 10.0.2.9 has 3 TCP and 2 UDP ports open.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=156)** And we can see in the port banner information, that it's a Ubuntu system.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=161)** 10.0.2.14 has 8 common TCP ports open, and the UDP Echo port.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=168)** And finally 10.0.2.15 is a closed system.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=173)** The scan detected that port 139 is open on host 10.0.2.14, and this is a common SMB port.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=181)** I'll go to the Window Enumeration tab and I will enter the address 10.0.2.14, and enumerate that.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=194)** SuperScan uses NetBIOS to enumerate the Windows 10 server.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=199)** We can see the MAC address, but SuperScan isn't able to identify the operating system.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=204)** It's a Legacy Tool, which sadly hasn't caught up with the latest Windows releases.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=208)** It has found that its version is 10.0, however.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=212)** It shows detailed information, on user, and group accounts.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=219)** And it's enumerated the RPC endpoint information.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=227)** It's identified the policies and shares, and detected the time logged on.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=234)** It also finally lists the services table, showing all the running and stopped services.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=242)** Let's clear this and let's now look at our 10.0.2.8 Metasploitable server.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=250)** While SuperScan calls this a Windows Enumeration, we can still use it to enumerate Samba on Linux systems.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=257)** Okay, well it thinks this is a Windows NT system, but it has been able to extract the server name and comment, which shows us that it is the Metasploitable Debian server.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=267)** It lists the user accounts, and it lists the password policy, the sole shares and then it finishes with time of day.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=281)** While this is not as complete as for a Window system, it does provide useful information as a start point for further Linux specific enumeration.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=291)** Despite it being Legacy, SuperScan is simple to use, and it's a powerful tool to having the testing inventory.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (5), udp (4), html (1), tftp (1), smb (1)
> **Versions:** 10.0.2 (12), 10.0 (1)
> **Definitions:** is a  (6), is called (1)
> **Code Keywords:** let (2), interface (1), default, (1)
> **UI Navigation:** go to (3), scroll up (1)
> **Ports:** port 1524 (1), port 139 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** zip file (1)

#### Scanning with NetScanTools Pro
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=0)** - [Instructor] When enumerating network information, it's useful to have a tool which combines a number of capabilities.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=7)** One such tool is NetScanTools Pro.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=9)** While it's a commercial product, a basic freeware version is available, and a 30-day demonstration version of the professional tool can be downloaded and used.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=20)** I've downloaded and installed the NetScanTools Pro version.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=23)** So let's have a look at how we can use it to enumerate our network.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=28)** On the left-hand side of the screen is a set of controls which duplicate the entries in the accessibility menu.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=35)** I'll select the automated tools section and enter and retrieve data.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=44)** This shows the tools in the right-hand panel.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=46)** The target type can be entered as an IP address, a name, an email address or a URL.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=52)** Let's start with my metasploitable server.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=55)** And I'll clear the functions and just select ping, scan and ARP scan.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=62)** And I'll click on get information about the target.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=67)** Okay, the scan is complete, and I can click on the reports button.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=71)** This provides a record of the test.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=74)** I'll select the record and view selected report.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=82)** This produces an HTML report showing the ping results followed by the port scan with banner information.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=89)** The report finishes with an ARP scan, and that shows the systems that are known to be on the network together with their Mac addresses.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=98)** The next option in the menu on the left is manual tools.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=104)** Opening this item provides access to many tools with the down arrow enabling the list to be scrolled.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=109)** These include the ping and ARP scans and many more.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=113)** I'll scroll down to the OS fingerprinting tool which attempts to determine the type of operating system running on a target, and run this against 10.0.2.9.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=128)** Analyze the target.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=130)** This shows the test being carried out.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=133)** Okay, that's complete now.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=135)** And it's identified the target as a Linux server, possibly a Slackware variant with kernel version 2.4.26.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=143)** Well, it is a Linux system.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=148)** Let's move down a little bit further to the system info - SMB tool.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=157)** And I'll run this against 10.0.2.14, and get info.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=164)** It's quickly gets our SMB information from the server.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=168)** It's not able to access the user list or the account information or the password policy.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=175)** It does provide the local security authority policy and provide share information.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=182)** And it finishes with our system time information.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=187)** The NetScanTools Pro's toolsets provides a useful consolidation of tools.

> [!info]- Semantic Content
>
> **Env Vars:** arp (3), smb (2), url (1), html (1)
> **UI Navigation:** select the (2), click on (2), in the menu (1), scroll down (1)
> **Versions:** 10.0.2 (2), version 2 (1), 4.26 (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Enumerating LDAP
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=0)** - LDAP is the Lightweight Directory Access Protocol and is used extensively in various forms of enterprise servers.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=8)** It provides a repository for organizational entity information.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=12)** Allowing the structure of organizations and the people within them, to be reflected in a form that can be queried.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=19)** Its main security use is for authenticating users.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=22)** A number of Linux packages exist, the best known being OpenLDAP and Active Directory is a Windows product which uses LDAP as the access protocol.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=33)** LDAP uses a tree structure database to store information about an organization and enable searching for people in the organization without knowing where they're located in the tree.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=44)** An LDAP directory tree hierarchy consists of the root directory, which has broken down into countries.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=50)** Each of which breaks down into organizations which branch out to one or more levels of organizational units, divisions, departments and so on.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=59)** And then, individual entities such as people, files, printers and so on.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=65)** An LDAP directory can be distributed among many servers, each having a replicated version of the total directory that synchronized periodically.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=74)** An LDAP server that receives a request from a user, takes responsibility for the request.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=79)** Passing it to other servers as necessary but ensuring a single coordinated response for the user.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=86)** OpenLDAP is an open source tool which can be installed on Linux systems as an LDAP server.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=91)** I've set up an OpenLDAP server on my Ubuntu system as IP address 10.2.9 and populated it with some entries.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=100)** I won't go into the details of how to do this.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=103)** But you can find all you need to know in Grant Williams Linux, OpenLDAP course here on LinkedIn.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=111)** We can enumerate LDAP information at the Kali terminal using Nmap's LDAP search script.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=118)** We do that with nmap, minus P 389, minus, minus script equals LDAP search and the servers 10.0.2.9.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=135)** This connects to the server, confirms port 389 is open and enumerates the whole database using anonymous access.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=143)** There are many ways to structure LDAP models.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=145)** We can see here, we've modeled the organization by keeping key elements such as users and groups at the top level.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=152)** And we've used attributes to control membership of users to groups.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=158)** This makes the model more resilient to organizational change.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=163)** Its perhaps easier to use a visual tool for managing LDAP domains.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=167)** We can download a free LDAP administration client from SourceForge as shown here.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=173)** I'll go into the files tab, LDAP admin, folder 183, and I can download LDAP admin, W 64-183.zip.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=188)** This is a zipped executable.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=190)** I've downloaded it, extracted it and I've started it.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=195)** Okay, let's select, start, connect and create a new connection.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=203)** We'll call the connection name, Cybex.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=208)** The host is 10.0.2.9 and I've got anonymous connection selected and I can fetch DNs.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=219)** We can see we've been able to get the Cybex.nz domain from the server.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=225)** Okay, let's click okay, and double click Cybex to open it.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=231)** Okay, we can see the LDAP structure for the Cybex.nz domain at the left and the schemer the right.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=237)** We've got an admin account and two organizational units showing users and groups.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=245)** If we open groups, we can see our two groups, developments and sales.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=249)** And if we open users, we can see all our users.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=253)** Let's select actor.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=256)** When we click on actor, we'll see actor's details in the right hand pane.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=260)** What would don't get returned, of course, is actor's password.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=264)** We can't change the LDAP data with anonymous access but we can do a lot of useful enumeration.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (17)
> **Code Keywords:** let (3), this. (1)
> **Versions:** 10.0.2 (2), 10.2.9 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Ports:** port 389 (1)
> **Tools:** terminal (1)

#### Checking for SMTP users
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=0)** - [Instructor] Enumeration is usually carried out by running tools to list object instances, but it can also be done indirectly by checking whether objects exist.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=10)** An example of this approach is used to enumerate an SMTP service.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=14)** We can connect to SMTP by using Telnet or connect to the Metasploitable SMTP server using port 25.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=26)** I can now ask the server to verify an email address.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=35)** The server tells me that the email address doesn't exist with a failure code 511.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=41)** I can ask the server to verify msfadmin, and the server responds with code 200, the email address exists.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=54)** I can try more potential email address.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=60)** We also use the receipt command to detect the existence of email addresses.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=69)** The valid email address results in a 2.1.5 success code,
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=78)** but in this case, the incorrect email address results in a 5.1.1 failure code.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=84)** By using a set of common email addresses, this technique can be used to detect whether or not those addresses are active in the SMTP system.

> [!info]- Semantic Content
>
> **Env Vars:** smtp (4)
> **Versions:** 2.1.5 (1), 5.1.1 (1)
> **Code Keywords:** case, (1)
> **Ports:** port 25 (1)
> **Speakers:** - [instructor] (1)

#### Digging into DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=1)** - [Instructor] The domain name service is the set of public information which allows us to use computer names instead of their IP addresses.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=8)** It provides the services to convert a computer name to an IP address, and an IP address back to a computer name.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=16)** Domain name servers work together holding information on the set of hosts that they're responsible for, and passing on queries for other hosts to their name servers.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=26)** We can enumerate the public information held on domain name servers to get a good idea of what's often called an organization's attack surface.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=36)** For an attacker, these are the potential entry points into the organization.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=41)** Let's run a simple DNS query.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=43)** We can do that with a tool named Dig.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=47)** Dig, and let's have a look at [sciencedirect.com](https://sciencedirect.com).
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=54)** This provides with information on the IP addresses for [sciencedirect.com](https://sciencedirect.com), which are 162.159.136.70 and 162.159.137.70.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=67)** We also know the name servers that are used by [sciencedirect.com](https://sciencedirect.com), Sofia and Elmo in CloudFlare.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=76)** We can use the T flag to search for specific information.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=80)** Let's dig further to find the mail server with dig [sciencedirect.com](https://sciencedirect.com) minus -t mx, and we'll get the short output.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=93)** We've now got the name of the mail server which is sciencedirect.mail.protection.[outlook.com](https://outlook.com).
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=101)** This is a Microsoft 365 mail service.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=105)** Another command we can use to look for DNS information is the host command, host [sciencedirect.com](https://sciencedirect.com), and this provides a tidy set of information.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=122)** A more extensive dig into DNS can be done using the DNS ENUM tool.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=128)** So let's do dnsenum --noreverse, we don't need any reverse DNS checking, and we'll just look at [sciencedirect.com](https://sciencedirect.com).
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=148)** This provides the IP addresses of [sciencedirect.com](https://sciencedirect.com) and the associated name and mail servers, and tries to run his own transfer, which doesn't work, it rarely does nowadays.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=163)** DNS ENUM then uses a host named dictionary to try to find additional DNS records through brute force.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=172)** This is able to find the IP addresses of the Dev FTP, RSS, and web service, which in this case is just the four addresses identified.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=182)** DNS ENUM also determines the range of IP addresses owned by Science Direct.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=188)** These are shown as /32 IP blocks, which means it's just these two individual addresses.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), enum (3), ftp (1), rss (1)
> **Code Keywords:** let (4), enum (3), public (2), for, (1)
> **URLs:** [sciencedirect.com](https://sciencedirect.com) (7), [outlook.com](https://outlook.com) (1)
> **CLI Commands:** find (3)
> **Versions:** 162.159.136 (1), 162.159.137 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Enumerating netbios
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=1)** - [Instructor] Window servers use the netBIOS over TCP service to manage system naming and file sharing.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=7)** This is commonly used on local networks through ports 137 and 139, but may also be exposed to the internet.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=14)** In order to demonstrate how we enumerate NetBIOS information, we'll do testing on my active directory server, so you won't be able to follow hands on.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=24)** The first tool we'll use is NMB lookup.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=28)** NMB lookup minus A 192.168.1.199
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=40)** and this returns the A records from the directory server.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=45)** Here we see our computer name, starting with WIN B 5.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=49)** The zero zero record is the computer name, and the 20 record is the name used for accessing shares through the file service.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=57)** We also find that the server is a domain controller and the primary domain controller for the Cybex domain.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=63)** These are the one C and one B entries.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=66)** And finally, we'll have the server's Mac address.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=70)** We can also use Nmap to run a NetBIOS scan.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=75)** Nmap minus SV 192.168.1.199 minus minus script
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=88)** equals MB stat, and we'll get verbose output.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=95)** Nmap provides a port scan, as usual, and then provides the same netBIOS information as we got through NMB lookup.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=104)** Of course, if we have credentials to access a server, then we can get a lot more information.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=109)** A useful tool for this is enum four Linux.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=113)** Let's run that with our Sam Spade credentials.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=117)** Enum four Linux minus A minus U Sam Spade minus P.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=130)** We use Scorpion 5 as the password, 192.168.1.199.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=141)** We get the basic information on the machine name, MAC address and domain, and we also get the domain sid.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=149)** There's information about the operating system platform and version and server type.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=156)** This is followed by the user list with their full names and rids.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=163)** The shares are enumerated and we're told that SMB one is not configured.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=171)** And the various groups and group memberships are also enumerated.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=176)** That's a reasonably good start if we want to focus our penetration testing on specific high value accounts.

> [!info]- Semantic Content
>
> **Env Vars:** nmb (3), tcp (1), win (1), mac (1), smb (1)
> **Code Keywords:** enum (2), finally, (1), let (1), type. (1)
> **Versions:** 192.168.1 (3)
> **Code Identifiers:** netbios (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Taking time to enumerate
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=0)** - [Instructor] Our computers all need to work to an agreed time source, and this is provided by the network of time servers on the internet.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=9)** We can enumerate time servers, although it's rare we'll need to do so in our day-to-day pen testing as these invariably sit outside our target scope.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=19)** However, for completeness, let's just touch on a couple of ways of enumerating time.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=24)** The first is to use the NTPQ tool.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=27)** Let's check out its command set.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=30)** Ntpq -c help.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=36)** Okay, let's get a list of peers from a time server Ntpq -c peers 89.221.165.134.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=54)** We can see that there are two remote peers with IP addresses 89.135.149.196.133.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=64)** This isn't the most important aspect of enumeration but nevertheless, do take some time to try out more of the NTPQ commands once you finish this course.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=74)** Another tool we can use is Nmap with its NTP enumeration script.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=81)** We'll run this as a UDP query against the time service on port 123.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=89)** Sudo nmap minus -su -p 123 --script and we'll use the nmap script ntp info.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=105)** 89.221.165.134.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=115)** We've enumerated the operational information from the time server.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=119)** We can see the server is running NTP version four on a Unix platform.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=124)** Then we have a lot of technical information around the time value it maintains, which may be of interest in some specialist situations.

> [!info]- Semantic Content
>
> **Env Vars:** ntpq (2), ntp (2), udp (1)
> **Versions:** 89.221.165 (2), 89.135.149 (1), 196.133 (1)
> **Code Keywords:** let (3)
> **CLI Commands:** sudo (1)
> **Ports:** port 123 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=3)** I hope you enjoyed learning about enumeration.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=7)** There's always something new to learn about in cybersecurity, and if you're interested in learning more, then check out the full cybersecurity segment in the library where new cybersecurity courses are added regularly.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=18)** You'll find courses on cybersecurity in the cloud, using cryptography for cybersecurity, cybersecurity and artificial intelligence, and much more.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=29)** I'd like to invite you to go to my author page where you can find some additional courses on cybersecurity.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=35)** If you want to get hands-on with some of the common tools, then do take a look at Cybersecurity for IT Professionals.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=41)** If you're wanting to learn about security for the cloud, then Cybersecurity for Cloud Computing is for you.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=48)** You might also want to see what my colleague on the cybersecurity ethical hacking series, Lisa Bock, has for you on her home page.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=57)** Thanks again for joining me on this course and I hope to see you again soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Scanning Networks]] | **4 of 19** | [[Ethical Hacking- Vulnerability Analysis]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking

---

[↑ Back to top](#)