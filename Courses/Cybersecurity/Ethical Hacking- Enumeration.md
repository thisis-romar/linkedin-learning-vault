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
  - '[Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)'
prev_courses:
  - '[Ethical Hacking- Scanning Networks](Ethical%20Hacking-%20Scanning%20Networks.md)'
next_courses:
  - '[Ethical Hacking- Vulnerability Analysis](Ethical%20Hacking-%20Vulnerability%20Analysis.md)'
path_nav: '[{"path":"Become an Ethical Hacker","position":4,"total":19,"prev":"Ethical Hacking- Scanning Networks","next":"Ethical Hacking- Vulnerability Analysis"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Enumeration.md)

![Ethical Hacking: Enumeration](https://media.licdn.com/dms/image/v2/C560DAQH4q52rvtzUqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620842870509?e=2147483647&amp;v=beta&amp;t=vzdPFK7DX_NZaYLUqSdbOJjKVovvwllCVAZG35zTeFA)

# Ethical Hacking: Enumeration

> Enumeration is designed for ethical hackers who want to build their skills in reconnaissance of targets and in optimizing their penetration testing. In this course, instructor Malcolm Shore teaches the basic methods of enumerating networks and targeting systems with common enumeration tools. Malcolm explains what enumeration is and gives you opportunities in the course for hands-on experience. He 

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377) | 2h 12m | Beginner | 58K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Starting your testing with enumeration](#starting-your-testing-with-enumeration)
  - [What you need to know](#what-you-need-to-know)
  - [Disclaimer](#disclaimer)
- [**1. Basics of Enumeration**](#1-basics-of-enumeration) (4 videos)
  - [What is enumeration?](#what-is-enumeration)
  - [Understanding contexts](#understanding-contexts)
  - [Working with contexts](#working-with-contexts)
  - [Understanding NetBIOS, SMB, SAMBA, and RPC](#understanding-netbios-smb-samba-and-rpc)
- [**2. Local Host Enumeration**](#2-local-host-enumeration) (4 videos)
  - [Profiling a Unix host](#profiling-a-unix-host)
  - [Profiling a Windows host](#profiling-a-windows-host)
  - [Investigating the Windows network interface](#investigating-the-windows-network-interface)
  - [Investigating the Linux network interface](#investigating-the-linux-network-interface)
- [**3. Enumeration Remote Hosts**](#3-enumeration-remote-hosts) (11 videos)
  - [Enumerating host services](#enumerating-host-services)
  - [Enumerating SMB from Linux: Episode 1](#enumerating-smb-from-linux-episode-1)
  - [Enumerating SMB from Linux: Episode 2](#enumerating-smb-from-linux-episode-2)
  - [Enumerating SMB from Linux: Episode 3](#enumerating-smb-from-linux-episode-3)
  - [Enumerating SMB from Windows: Episode 1](#enumerating-smb-from-windows-episode-1)
  - [Enumerating SMB from Windows: Episode 2](#enumerating-smb-from-windows-episode-2)
  - [Enumerating using SNMP](#enumerating-using-snmp)
  - [Enumerating with RPC](#enumerating-with-rpc)
  - [Using WMI to enumerate Windows](#using-wmi-to-enumerate-windows)
  - [Enumeration using Finger](#enumeration-using-finger)
  - [Remote enumeration using PowerShell](#remote-enumeration-using-powershell)
- [**4. Enumerating Web Apps**](#4-enumerating-web-apps) (4 videos)
  - [What is that web server?](#what-is-that-web-server)
  - [Enumerating a website with Nikto](#enumerating-a-website-with-nikto)
  - [Enumerating webpages](#enumerating-webpages)
  - [Enumerating hidden webpages](#enumerating-hidden-webpages)
- [**5. Enumerating the Internet**](#5-enumerating-the-internet) (3 videos)
  - [Tracing routes across the internet routes](#tracing-routes-across-the-internet-routes)
  - [Using Shodan](#using-shodan)
  - [Scan the internet with ZMap](#scan-the-internet-with-zmap)
- [**6. Enumerating Cloud**](#6-enumerating-cloud) (4 videos)
  - [Enumeration of the cloud](#enumeration-of-the-cloud)
  - [Enumerating cloud policies](#enumerating-cloud-policies)
  - [Enumerating cloud compute resources](#enumerating-cloud-compute-resources)
  - [Enumerating cloud storage resources](#enumerating-cloud-storage-resources)
- [**7. Other Enumeration**](#7-other-enumeration) (7 videos)
  - [Scanning with SuperScan](#scanning-with-superscan)
  - [Scanning with NetScanTools Pro](#scanning-with-netscantools-pro)
  - [Enumerating LDAP](#enumerating-ldap)
  - [Checking for SMTP users](#checking-for-smtp-users)
  - [Digging into DNS](#digging-into-dns)
  - [Enumerating netbios](#enumerating-netbios)
  - [Taking time to enumerate](#taking-time-to-enumerate)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Starting your testing with enumeration](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/starting-your-testing-with-enumeration?u=76281980&t=0)** - [Instructor] When carrying out testing through [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) one of the key activities that directs the testing is a enumeration. The ability to find out everything about a target by enumerating its ports and services, its uses and accounts, it's processes and just about everything that can be exposed and enumerator. Carrying out enumeration well is the real key to success in your certifications and your business assignments. I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems against cyber attacks. In this course, I'll explore how to enumerate [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) systems using the tools built into CALI as well as some third party tools. I'll start by explaining enumeration in the context of technical testing and I'll demonstrate the basic Windows and Linux toolsets. I'll then look at the detailed enumeration of special protocols such as SMB, RPC, and SNMP. I'll show how to enumerate websites and [Databases](../../Skills/Software%20Development/Databases.md) and how to enumerate the internet as a whole. Finally, I'll demonstrate some key third party tools for enumeration. When you finish this course you'll have a great understanding of how to make your testing effective by properly enumerating the targets. Now let's get started with enumeration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** cali (1), smb (1), rpc (1), snmp (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-you-need-to-know?u=76281980&t=0)** - [Instructor] This is a practical course, and during this course, I'll be using a virtualized computing environment called VirtualBox. I will also be using a number of tools which are part of the [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) framework to test systems. If you're not familiar with virtualization, you should watch the Introduction to Kali Linux Course, which will show you how to install and use VirtualBox. In addition, I'll be assuming that you understand basic [Computer Networking](../../Skills/Network%20and%20System%20Administration/Computer%20Networking.md) concepts, are familiar with [Windows](../../Glossary/Service/Windows.md), and have a knowledge of basic [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) commands. This course requires a number of tools to be downloaded and installed, and you can pre-install these tools to avoid unnecessary waiting during the course. The detailed list of tools required to be installed to support this course, is available as a PDF in the associated course material.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (2), [Computer Networking](../../Skills/Network%20and%20System%20Administration/Computer%20Networking.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Prerequisites:** install (2), required to (1)
> **Env Vars:** pdf (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third-party testing tools, some are commercial [products](../../Skills/Software%20Development/Microsoft%20Products.md) and some are open source. The download and installation instructions for all tools used in this course is available as a PDF in the associated course material. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants and they may raise antivirus alerts when you try to download them. We can't provide assurance that the software hasn't been compromised when you download it and so, as for any other software from the internet you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. Basics of Enumeration

[↑ Back to Table of Contents](#table-of-contents)

#### [What is enumeration?](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=0)** - [Instructor] Enumeration is the process of identifying usernames, system addresses, network resources, shares, services and other characteristics of a target. It happens through open source intelligence, and also by direct probing of a target system. Enumeration occurs after scanning and is part of the overall information gathering or reconnaissance activity. Testers need to be methodical in their approach to [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md). And this means structured preparation for testing a target system, for example, the tester may wish to do the following before starting any vulnerability testing: extract usernames using enumeration, gather information about the host using null sessions, perform port enumeration using scanning tools. Enumerate user accounts, and perform enumeration through special protocols, such as SNMP and RPC. The reason for doing enumeration is to understand the target before testing it and to obtain information to enable testing. For example, one outcome from this might be to identify a user account or system account for potential use in penetrating the target. It isn't necessary to find a system administrator account because most account privileges can be escalated once access has been achieved. I look at enumeration in four parts. Firstly, I look at what are typically local host enumeration techniques and then look at remote host enumeration.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-enumeration?u=76281980&t=94)** I look at how we can enumerate patterns and systems on the internet at scale, and then look at some specific enumeration tools for port scanning and enumerating network services such as SMTP and LDAP. I won't, however, cover the enumeration of website pages, as this will be fully covered in the ethical hacking web testing course. There are some standard services, which are useful targets when performing enumeration and which we'll look at further as we go through this course. DNS is the Domain Name Service, which runs on port 53 and is used to translate system names to IP addresses. And can sometimes be used to extract bulk translation data in what is known as a DNS zone transfer. SMTP, the Simple Mail Transfer Protocol on port 25 is used to send email, but can be used to extract or infer email addresses. The RPC endpoint mapper on port 135, which is used to access RPC services. The NetBIOS named service on port 137 to enumerate NetBIOS objects. And the NetBIOS session service on port 139, which enables SMB queries over NetBIOS. The Simple Network Management Protocol on port 161 used to manage hosts remotely. The Lightweight Directory Access Protocol service on port 389, which stores user and group information. And SMB running over TCP on port 445.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (2)
> **Env Vars:** rpc (3), smtp (2), dns (2), smb (2), snmp (1)
> **Ports:** port 53 (1), port 25 (1), port 135 (1), port 137 (1), port 139 (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** find (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding contexts](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=0)** - Code is executed in the form of processes. And a process has an operating context. In both [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), a process operates in one of two modes, user a mode and system mode, which is also known as kernel or supervisor mode. In fact, a single process will often switch between the two modes with a user mode process, switching to kernel mode when it makes the system call. User processes run in their own address space, which is isolated from the address space of other active processes. They make system calls to access any of the computer resources that they need. Process operating in kernel mode are privileged and are granted access to all computer resources. The operating system will execute largely in kernel mode. The kernel context in Linux is further broken down into kernel interrupt context or kernel user context. The former is for code executed as a result of an interrupt and the latter by user request via a system core. At a microcode level operating systems provide different levels of access to resources through what are known as protection rings. Such rings are arranged in a hierarchy from most privileged, ring zero, to least privileged. Ring zero is kernel mode, is the level with the most privileges and interacts most directly with the physical [Hardware](../../Topics/Hardware.md) such as the CPU and memory. In earlier windows operating systems rings one
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=95)** and two were not used. More recently ring one has been used to support firmware embedded hypervisor operation, such as Intel's VTX. Ring three is generally used for user mode. Open VMS is a little unusual in having four operating modes corresponding to rings zero to three and known as kernel, executive supervisor and user mode respectively. Interestingly the ARM architecture is the exception to the ring numbering rule, in that it operates with three levels of ring zero to two, in which ring zero is the least privileged application level, ring one the operating system level and ring two the most privileged hypervisor level. User mode operation is associated with an account in the operating system which has a user identifier. Accounts exist in specific groups of users with operating system defined privileges. A special user mode account known as route, supervisor or administrator is needed to administer the separation and protection of individual user files and to perform such tasks as creating accounts, granting and revoking powers for ordinary users and accessing critical system files to or upgrade the system. In windows the root user is the local service account known as system. This user account runs all system processes.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-contexts?u=76281980&t=191)** Every windows system also has a built-in administrator account and may have additional user administrator accounts. A windows administrator account can make system-wide changes to the computer, but does not have the full set of privileges available to the system user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** known as (5), is a  (1)
> **Env Vars:** cpu (1), vtx (1), vms (1), arm (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Speakers:** - code (1)

#### [Working with contexts](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=0)** - [Instructor] In [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), every user account is automatically assigned a user identification number, the UID. And the system uses these numbers instead of the usernames to identify and keep track of user context. The root account has full privileges, including the ability to modify the system in any way desired and to grant and revoke access permissions for the users, including any of those that are, by default, reserved for root. The root user is recognized by having a UID of zero. The UID is stored in the Environmental Variable Dollar UID. We look at Dollar UID. We can see that for Kali, the user identification number is 1000. We can see the UIDs for all users by looking at the slash et cetera password file. Let's cat slash et cetera slash password. And I'll pipe that through to more. The first column in the line is the username, and the third is the UID. The first entry we see is route, and we can see that the third column in the route line is zero. If we go to the bottom, we can see the GVM account has a UID of 134. An administrator is a non root user who can temporarily use root privileges when required, but will normally operate with user privileges. A standard user has no special privileges and can only execute applications and access files which are within their account space.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=93)** They cannot run any privileged activity. In Linux, a privilege user can run code in their standard user mode, or can use the Sudo command qualify to run as another user for that one command. The slash et cetera slash Sudoers file is the default Sudo security policy plugin, and specifies authentication for use of Sudo and the effect to be taken on the user context. If we try to run cat slash et cetera slash Sudoers,
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=126)** we don't have permission, but we do if we Sudo it. Sudo cat slash et cetera slash Sudoers.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=138)** We can see that the default action for members of the Sudo Group is to invoke root privileges. We can see who's in the Sudo Group with getent group Sudo. Now we can see Kali is the only account that can assume Sudo privileges. A similar command SU is used to switch user for the remainder of the session. And when used without a username, we'll switch to root. If appropriate, the root password will be requested, and we have to use Sudo to invoke this. Sudo SU. And if we now echo dollar UID, we can see that we're in context zero, which is root. And we can exit to come back to user mode. In [Windows](../../Glossary/Service/Windows.md), there are two important contexts for a user, standard and administrator. The context for a user count can be set in the user account details by changing the account type. A standard user is a user with access to their own and shared programs and files, but no privileged access to system wide resources. An administrative user has the same privileges, but in addition can run programs in administrator mode by right clicking and selecting run as administrator. In addition, an executable program can have its properties modified by an administrator to automatically run in administrator context. The properties, compatibility,
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/working-with-contexts?u=76281980&t=236)** run this program as administrator, and apply. Okay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** sudo (11), cat (3)
> **Env Vars:** uid (8), gvm (1)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Understanding NetBIOS, SMB, SAMBA, and RPC](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=0)** - [Instructor] While much of the internet works on the internet protocol, IP, and its main sub protocols of UDP, TCP, and ICMP, there are other protocols which have been developed for local area networks. Ethernet is now the dominant and almost exclusive low level protocol for traditional IT local area networks. Some API specifications have been developed for both [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) and internet use, and which are often referred to as protocols. The key ones are NetBIOS, SMB, SAMBA, and RPC. The Network Basic Input-Output System, NetBIOS, provides session layer services for [Windows](../../Glossary/Service/Windows.md) systems, which allow applications on separate computers to communicate over a local area network. NetBIOS is an API specification rather than a protocol and requires a networking protocol to carry NetBIOS payloads. The NetBIOS name service runs on UDP port 137 and the Datagram distribution service on UDP port 138. The NetBIOS over TCP/IP session service runs on TCP port 139. The Server Message Block, or SMB protocol, is an application layer service used to enable shared access to accounts, files, printers, serial ports, and miscellaneous communications between nodes on a network. This not only works on the local network,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=94)** but can also be accessed through IP across the internet. SAMBA is a free software implementation of SMB which can integrate with Windows systems and is standard on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) distributions. The distributed computing environment, DCE, is a software system developed in the early 1990s as a framework and toolkit for developing client/server applications. The framework includes a remote procedure call, RPC mechanism, known as DCE/RPC. This was originally commissioned by the Open Software Foundation. While DCE has not seen much success in practical implementation, its underlying concepts have had substantial influence over subsequent efforts. The Remote Procedure Call mechanism is used to implement client/server communications, both interprocess within a host system and interprocess between systems. The protocol enables the client and server to connect via what are known as end points, which to the programmer look like function calls. The RPC mechanism is the simplest way to implement client/server applications because it keeps the details of network communications out of your application code. Each side behaves, as much as possible, the way it would within a traditional application. The programmer on the client side issues a call and the programmer on the server side writes a procedure to carry out the desired function. The [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) implementation of RPC, MSRPC,
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/understanding-netbios-smb-samba-and-rpc?u=76281980&t=190)** is an extended implementation of RPC which operates over SMB or across TCP/IP. It's used extensively in Microsoft systems. The [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) domains protocols are entirely MSRPC-based. Microsoft DNS administrative tool uses MSRPC. Microsoft Exchange server 5.5's administrative front-ends are all MSRPC client/server applications. And the MAPI implementation was made more secure by delivering MAPI as MSRPC functions that enable encryption at the MSRPC layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (4), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** rpc (6), msrpc (6), tcp (4), smb (4), udp (3)
> **Definitions:** is an  (3), is a  (2), known as (2)
> **Ports:** port 137 (1), port 138 (1), port 139 (1)
> **Versions:** 5.5 (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)


### 2. Local Host Enumeration

[↑ Back to Table of Contents](#table-of-contents)

#### [Profiling a Unix host](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=0)** - [Instructor] [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) provides a number of commands to enable basic profiling of the activity in the system. I'll go through the main ones fairly quickly. I've got a terminal window, so let's see what this system is. I can start by entering uname -a to restore system information. I'm logged into a metasploitable 2.6.24-16 server. I can get more information by looking at the operating system version with the command cat /proc/version. And I can see it's using gcc version 4.2.3. I can look at his distribution details by entering cat /etc/*-release.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=54)** And I can see that the [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) distribution is version 8.04 code name party. I can enumerate details on the CPU by entering cat /proc/cpu info.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=71)** And you can see the time running in Intel I7 2600. I'll enter df -a and I'll get details about the file systems that are mounted and df -h provides a summarized version. Another useful piece of information about a Linux system is what shells are available. We can enumerate this by entering cat /etc/shells.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=102)** Let's see who's logged in. I'll start with myself. Who am I and what's on my profile? I can find this out with the, who am I pwd and id commands. We can see our current profile and home directory. Now, how about the users on the system? We can see there are three users, johnsmith, msfadmin, and root. To find out all users registered on the system, I can enumerate the user accounts by entering cat /etc/passwd. You'll recall, this provides the username as the first entry and the UID is the third. If we have root privilege, we can also list the password hashes. I'll do this by using shadov. I can get slightly more detail about running users with either the finger or the pinkie command. I haven't got finger loaded on Ubuntu, so I'll use the pinkie command and we have some information about the logging time and the source IP. The w command gives slightly different information including the running process and who -a provides a system level view of processes. If we want to enumerate the user activity history, we can use the last and last log command. Now let's see what processes are open. That's a small list of processes just my bash show
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=199)** and the PSN more commands that I've run. Let's try that again with the e option. That lists all processes together with their process id and controlling terminal. I can get more information using the ps aux command. In particular, I can see which processes are running as root. We can also see the tasks based on their level of system activity using the top command. I can list all applications that have been installed using the dpkg command with the -l option. And I can generally find version information on an application. With the -v or --version switch, for example, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) --version. I won't spend too much time on network information as I'll cover this in more detail later in the course. However, I can find the list of interfaces using the ifconfig command. I can see the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) on the host using the command route. And we can see that the default route is through the gateway at 10.0.2.1. The IP tables command, enumerates all firewall rules. We can see any packets from IP address 214.5.22.81 are rejected. And a TCP packets to port 21332 are dropped
>
> **[4:56](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-unix-host?u=76281980&t=296)** and connections are accepted on SSH, SNMP and WWW, everything else is rejected. Most to the Linux enumeration can be obtained without needing to be privileged. And it provides a very good foundation for developing subsequent testing plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **CLI Commands:** cat (5), find (4), python (1), ssh (1)
> **Env Vars:** cpu (1), uid (1), psn (1), tcp (1), ssh (1)
> **Versions:** 2.6.24 (1), version 4 (1), 2.3 (1), version 8 (1), 10.0.2 (1)
> **Tools:** terminal (2), bash (1)
> **Ports:** port 21332 (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)

#### [Profiling a Windows host](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=0)** - [Instructor] While the [Windows](../../Glossary/Service/Windows.md) command shell doesn't provide quite the same level of detailed information that's available in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), we can install a set of tools which adds quite a lot of local and remote capability. These are the PS tools from system internals. The tools can be downloaded as a zip file from the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) TechNet site as shown. I've already downloaded and extracted the tools, so I'll get straight into it. Let's start with a simple enumeration of basic system information. We do this using the psInfo tool. This returns the local systems product and build information, the basic [Hardware](../../Topics/Hardware.md) configuration, and the number of hours uptime. It also provides the root directory for the system which is commonly c:/ windows. I can add some options to the psInfo command line to get more information. Using the Dswitch, we'll include the logical disk drive information as well. We can also use psInfo to enumerator remote system if that system allows RPC access and remote access to the registry. I'll add the remote server name to the command line. And here we see the remote system information, my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system. Note the time using implicit access with my current user id. I could also add the -u -p options to add a user Id and password. I can dig a little deeper with ps info and ask for a list of all installed Microsoft software
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=94)** using the Sswitch. Another of the tools we can use for enumeration is psList, which lists processes. This also works remotely. The psList outputs, enumerates the processes, providing the process name and identifier. It also contains additional information on threads and priority as well as CPU and elapsed time. The processes can be displayed as a process tree by using the Tswitch. More detailed information can be numerated using the Xswitch which provides full thread details for each process as well as more detail on memory and page activity and a breakdown of Kernel and User Time. Another useful tool for enumerating system information is psloglist which provides a dump of entries in the system event log. We can use the end switch to limit the list to the most recent specified number of entries. Similarly, the Dswitch would limit the enumeration to so many days. I'll run this for the last 20 entries. Each entry shows the type of event, the time and a description of the event. The tool can also use the BNA switches to limit the list to before or after a certain time and M switch to limit the list to the last however many minutes. Again, we can get extended data by using the Xswitch. And here we see the hexadecimal dump of the event.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/profiling-a-windows-host?u=76281980&t=193)** The pslogged on tool displays the list of users who are logged on. Let's see who's on the remote system. We can see the local user and we can see that we're logged on through a remote share. The final enumeration tool in the PS tools which I'll look at is psservice, which lists running services. We can see the service name and description plus some technical information. Once we've enumerated the services, we can enumerate security for a specific service using the security command. For instance, let's check the security for the event system. This enumerates for each user or user group able to manipulate the service, the action that can be taken. I can also enumerate the services which depend upon this service using the depend command. When we see the comm C# and send service are aligned upon this service to be running. The PS tools then, provide a wealth of information on the local systems and where access is possible, remote systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Code Identifiers:** psinfo (3), pslist (2)
> **Env Vars:** rpc (1), cpu (1), bna (1)
> **Tools:** command line (2)
> **UI Navigation:** switch to (2)
> **Exercise Files:** zip file (1)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)

#### [Investigating the Windows network interface](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=0)** - [Instructor] SMBMap is a popular Samba Share Enumerator available from the Kali Applications menu in the SMB sub-menu of Information Gathering. We can also run it from the command line. I'll run this against my [Windows](../../Glossary/Service/Windows.md) 7 system. I have a standard user account which I can use called training.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=25)** This establishes an SMB session and enumerates the shares. We can see that the temp and training shares exist together with the four special system shares user, C$, Admin$, and IPC$. We have read, write access to temp and read only access to training. I can run this against Metasploitable with a null session, which means I don't need to use ID and password. And again, we see the shares, including the temp share, with full read-write access. I can also run this with the R option and get a directory listing of files in the accessible temp share.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-windows-network-interface?u=76281980&t=72)** There's also a tool for Kali, which can be used to enumerate the permission shares, directories, and files on a host Windows and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) systems. This is shareenum, and if it's not preloaded on your version of Kali, it can be downloaded and installed from the [GitHub](../../Skills/Software%20Development/GitHub.md) site shown. If I execute shareenum with no options, I get the help output. Now I can execute this against the Metasploitable target using the null session. The output is sent to shares1.txt, which I can now cat. We can see the enumeration of Metasploitable's file shares in comma separated form. I can do the same with the Windows 7 system, but as this doesn't allow null sessions, I have to provide a user ID and password. The output is sent to shares2.txt, which I can now cat. Okay, we can see the users, temp, and training shares again in comma-separated form, as well as the standard shares, IPC$, C$, and Admin$.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** smb (2), ipc (2)
> **File Paths:** shares1.txt (1), shares2.txt (1)
> **CLI Commands:** cat (2)
> **Tools:** command line (1), github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Investigating the Linux network interface](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=0)** - [Instructor] We can run netstat in a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) environment although the command line options are slightly different. To start, I'll check the netstat -help file. This lists the command line options, we can see the familiar ones such as r for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), n for numeric and s for [Statistics](../../Skills/Data%20Science/Statistics.md). However, many of the others have different meanings. Let's run some of the common enumerations. To start with, netstat lets me list the interfaces active on the system using the iswitch. We can see the ethernet and the loop back connection. If I add the eswitch, I get extended information on each. This looks very much like the IAF conflict command. We can list the routing table using the rn switches. The command netstart -a, lists all internet connections and Unix sockets, including listeners. I have ice weasel running and in the first section of output we can see many web connections and also a boot PC and ICMP connection. There are many internal Unix domain sockets which are listening for into process connections in the second section. I can restrict the listing to just TCP by using the -t option and just UDP by using -u. I'll list out the UDP connections. And here we see the one UDP connection. With the t option, we'll see the TCP connections
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=95)** and I can now add the end option to get numeric addresses. I can use the p option and this will include the idea of the owning process and the program name, ice weasel. We can list all listening ports using the lx option. In the next we can also use the SS command to enumerate network sessions. Let's look at this help. We can see there are more options available than in netstat. I'll enter ss -t. This lists the established sessions and the local and remote address and port details. The n option provides the list with numeric port addresses. I can alternatively use the r option to resolve remote host names. The SS utility has a powerful filter option. For example I can list all TCP connections which have 132.181.109.79 is their destination address. By entering ss -t dst 132.181.109.79.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=179)** We can also use source for source address as port for source port and deep port for the remote porters filter commands. For example, all http connections can be queried by ss -t dport eq :http.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/investigating-the-linux-network-interface?u=76281980&t=200)** I could also have used the port number :80 to get the same results. This command works with all the common service names or numbers. Another filter command, this state. We can list for example, all established TCP connections. If I'm at the t option, I get all established connections, including internal Unix sockets. The states that can be queried include established seen sent, seen received, fin white1, fin white2. Time weight closed, close weight fast act, closing, connected, synchronized, and all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** tcp (4), udp (3), iaf (1), icmp (1)
> **Analogies:** for example (3), such as (1)
> **Versions:** 132.181.109 (2)
> **Tools:** command line (2)
> **Ports:** :80 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Enumeration Remote Hosts

[↑ Back to Table of Contents](#table-of-contents)

#### [Enumerating host services](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=0)** - [Instructor] One of the first tasks after identifying a remote host is to enumerate the ports available on it. We can do this easily with the [Nmap](../../Glossary/Tool/Nmap.md) command. Let's enumerate the services on our Metasploitable host using the minus PS option. Okay, that provides a list of all open TCP services. We may also want to know what UDP services are listening for datagrams. We can do this with the minus SU option. This takes quite a while. This is now completed it's check of all 65,000 or so ports, and we can see the four UDP ports that are listening. Sometimes, as in the case of UDP port 68, 69 and 138, we may see port shown as filtered. In these cases, Nmap believes that a firewall, filter, or other network obstacle is blocking the port and can't tell whether it's open or closed. Nmap can also provide details of the services running on the open ports. I can request this by using the minus SV option. For the sake of time, I'll restrict this to just a few of the identified ports and add the T and U options to include both protocols.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-host-services?u=76281980&t=83)** This scan shows the ports open and the type and version of services running on them. Nmap, then, provides a port scanning capability, which enables comprehensive remote detection of services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Nmap](../../Glossary/Tool/Nmap.md) (4)
> **Env Vars:** udp (3), tcp (1)
> **Ports:** port 68 (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating SMB from Linux: Episode 1](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=0)** - [Instructor] SMB and its [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) equivalent Samba are important protocols for the pentester to master. We can use SMB to enumerate the network using a tool called nbtscan. Let's check the options available. Okay. Let's try an nbtscan on the test network. This produces a listing of the systems active on the network and their netbios name. The number and letter suffix of the netbios name provides an indicator of the usage. These codes include 00U is a workstation. 00G is a domain name. 20U is a file server service. 1U and 01G of both master browser. The full list of codes can be found at the [Windows](../../Glossary/Service/Windows.md) networking site. I can use nbtscan to provide netbios information on a single host. I'll run this against my Windows 7 system to enumerate its netbios information using the R switch and the verbose output. This was the same information provided in the network scan in a slightly different format. I can also enumerate individual system resources using [Nmap](../../Glossary/Tool/Nmap.md) SMB scripts. Let's check what scripts we have available. Here, we can see the SMB scripts for enumerating the mains, groups, processes, sessions, shares, and users.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=97)** Let's use the unmapped scripting engine with an SMB operating system discovery. This lists the open ports on my Windows 7 system which is on my testing network and shows the operating system details. I can also run this script across the internet and I'll target my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system on IP address 192.168.1.10. Again, you have enumerated the open ports and acquired the operating system details. I can also run the script against Linux hosts. Let's have a look at the metasploitable system. We can see this as a debian host running Samba and it has a lot of open services. Let's enumerate the user accounts on metasploitable. Here we see the open ports followed by a listing of accounts, starting with backup, including [MSF](../../Glossary/Framework/Metasploit.md) admin, and also showing route and user, sys, UUCP and ww data. Many of these counts are disabled. I'll do this for my Windows 10 server. This shows only the open ports.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=191)** This is because the M map scripts attempt to use the null session to obtain user accounts. And this form of access has been disabled by default in most Windows operating systems. Another Kali tool, which is useful with Linux targets is Enum for Linux. Let's see what it can provide. First of all, let's try this against the metasploitable system and request the user list. This produces the list of known usernames but also identify some interesting characteristics. Firstly, the host is on a domain of work group and it allows sessions using blank username and password then lists the user accounts. The S switch provides an enumeration of shares. This shows the shares starting with print, dollar, temp, opt, IPC dollar, and admin dollar. The tool then attempts to use the share to mapped drive and succeeds with temp. The A option performs the full set of enumeration. This provides an extensive listing starting with the MBT stat information, user accounts, shares, password policy information,
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-1?u=76281980&t=288)** and finally root cycling which is an alternative method of listing users which circumvents some access controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (4), [Windows](../../Glossary/Service/Windows.md) (4), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (2), [Nmap](../../Glossary/Tool/Nmap.md) (1), [Msf](../../Glossary/Framework/Metasploit.md) (1)
> **Non-Speech:** (typing) (12)
> **Env Vars:** smb (5), msf (1), uucp (1), ipc (1), mbt (1)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating SMB from Linux: Episode 2](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=0)** - [Instructor] SMBMap is a popular Samba Share enumerator. Available from the Kali applications menu in the SMB sub menu of information gathering. We can also run it from the command line. I'll run this against my [Windows](../../Glossary/Service/Windows.md) 7 system. I have a standard user account which I can use called training.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=25)** This establishes an SMB session and enumerates the shares. We can see that the temp and training shares exist together with the four special system shares user, C$, admin$ and IPC$. We have read-write access to temp and read only access to training. I can run this against Metasploitable with the null session which means I don't need a user ID and password. And again, we see the shares including the temp share, with full read-write access. I can also run this with the R option and get a direct relisting of files in the accessible temp share.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-2?u=76281980&t=72)** There's also a tool for Kali which can be used to enumerate the permission shares, directories and files on a host Windows and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) systems. This is ShareEnum. And if it's not preloaded on your version of Kali it can be downloaded and installed from the [GitHub](../../Skills/Software%20Development/GitHub.md) site shown. If I execute sharing them with no options, I get the help out part. Now I can execute this against the Metasploitable target using the null session. The output is sent to share is one dot text which I can now cut. We can see the enumeration of Metasploitable file shares in comma separated form. I can do the same with the Windows 7 system, but as this doesn't allow null sessions I have to provide a user ID and password. The output is sent it to share is two doc text which I can now cut. Okay, we can see the users, temp and training shares again in comma-separated form, as well as the standard shares IPC$, C$ and admin$.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** smb (2), ipc (2)
> **Tools:** command line (1), github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating SMB from Linux: Episode 3](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=0)** - [Instructor] A useful tool for [Windows](../../Glossary/Service/Windows.md) SMB enumeration, from [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), is RPC client which comes as part of the Samba suite. It needs authenticated access, so we'll use the IE user account for enumeration with its password of password shriek. I'll use it to enumerate my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system, but, firstly, let's have a look at its help. Okay, so now I'll connect to the Windows 10 system.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=35)** We've now got an RPC client prompt, so let's check the server information. We can see the server has been identified as a Windows 10 system. If I type help, I'll see the range of commands we can use within RPC client. Okay, there's a lot we can do. I'll start by checking the username. Okay, this is the IE username we use to login. I can query information about users, although I need to know the rid. However, if I issue the enumerate domain users I get that. Cool, we now have the user list. What's even better, is that RPC client will allow us to enter the rid in hexadecimal, so we can query the administrator's account.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=94)** We can do the same by using the decimal rid of 500. There's quite a lot of useful information here. I can do the same for rid 501, and we get the guest account. I can also enumerate the set of privileges on the system. I can enumerate domain groups and alias groups.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-linux-episode-3?u=76281980&t=129)** I can enumerate shares, using the command netshareenum. We can also use netshareenumall. We now see the system shares as well, ADMIN$, C$ and IPC$. I can enumerate the printers on the host. The full list of enumeration commands can be found by typing enum, and hitting tab twice. So RPC client provides a rich set of enumeration commands, and it's worth spending time to become familiar with its use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** rpc (5), smb (1), admin (1), ipc (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating SMB from Windows: Episode 1](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=0)** - [Instructor] DeepNetScanner is a [Windows](../../Glossary/Service/Windows.md) graphical net bias scanning tool. It can be downloaded from the source forge sites shown here as the nbtenum zip file. I've already downloaded this tool. Let's scan the address range 10.0.2.1 to 10.0.2.20 and scan.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=30)** That's finished and he's identified two systems. Let's double-click on the first host and find the netbios information for METASPLOITABLE whom we can expand the NetBIOS Names to get more details. Similarly, I can double click on the 10.0.2.14 host but we just get the round trip time. I can, however right click and select Gather Information and in the right hand panel, we see that the deep scanning has probed using SMB and we can now see shares and we can open them and we can see services and open those. And we can I expand the server information and the operating system to see where [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system. At the bottom, we have open ports and we can see two open ports, one, three, nine and four, four, five. Netbiosenumerator is a relatively simple tool, but it's a useful start points for our netbiosenumeration. Another tool which provides a numeration that's worth looking at, is the Mitec network scanner. This is available from the Mitec site shown here. Again, I've downloaded the tool already, so let's get started. The first thing I'll do is to select preferences at the right and check the settings. We'll leave them as default for the moment. To enumerate systems that don't allow no sessions,
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=123)** I cannot credentials, but we'll just do an old session scan for now. Let's enter network range in the top panel. And we'll again enter 10.0.2.1 to 10.0.2.20.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=143)** Above this, we have three scanning options from the left IP range scan, network neighborhood scan, and [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) scan. I'll select the IP Range Scan. We can see the results appearing and we have six IP addresses and they're shown together with them Mac addresses and some of the host details. I can now highlight one of the entries, for example, the desktop entry. And we can say this is a windows 10 system. If I right click it, I can select Advanced Device Explorer. The general details are shown in the dashboard. I can click on Shares and the tool will retrieve and display the shares. I can go to Port Scanner and scan for open ports. And we can see the system has three open ports. Let's look at the processes and we can see the processes running on the system. One of the really powerful features is WMI Explorer. We can use this to enter windows management interface query. And if we look at the dropdown, we can see some pre-populated sanded query examples. If we select the query relating to fixes, and execute that, we can see the hotfixes that have been applied a useful check for missing fixes when we're testing.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-1?u=76281980&t=240)** Let's look the top entry and go to Advanced Device Explorer. This time we'll look at the Event Log Explorer. We'll let it query the event logs and then we'll select System. We're now able to get a deep understanding of what's happening on this target. We'll leave it there but that scanner is a very powerful tool for enumeration and it's worth spending some time exploring once you finish this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (2), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **UI Navigation:** click on (2), select the (2), go to (2), double-click (1), dropdown (1)
> **Versions:** 10.0.2 (5)
> **Definitions:** is a  (4)
> **Env Vars:** metasploitable (1), smb (1), wmi (1)
> **CLI Commands:** find (1)
> **Exercise Files:** zip file (1)
> **Analogies:** for example (1)

#### [Enumerating SMB from Windows: Episode 2](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=0)** - SoftPerfect have produced a freeway network scanner which provides a wide range of network scanning and enumeration across the network, including WMI, SMB, SNMP, amongst other remote services. I'll use this to do some network scanning. The tool is available as an installation and portable download from the SoftPerfect website. I've got this downloaded already, so let's have a look at it. Okay, I've selected the IP address range 10.0.2.1 to 10.0.2.20. Let's go to the Options tab and select Program Options. I'll click the Workstation tab and make sure all the options are selected and the Ports tab and we'll select Ports 1 to 1024 and all the UDP ports. In the Shares tab, we'll enumerate all. And in the Applications tab, we'll make sure computer management and remote desktop have both been checked. Let's open, in the Options menu, Remote WMI and mark all.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=78)** Remote Services and mark all,
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=86)** and Remote SNMP and mark all. Okay. I'll now start the scan. I've started at my [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) system, so the scan now finds seven systems on the network and continues to run the scan, with the longer-running items, such as port scans, updating as they're complete. 10.0.2.9 and 10.0.2.14 show that they can be expanded. When I do that, we can see the shares that are available on those two targets. If I double click on C$, I can explore the remote [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) file system. And if I click on Users, I can see the user folders.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-smb-from-windows-episode-2?u=76281980&t=145)** I can select and right-click on the entry and select Properties. And the results are provided in a pop-up. I can also right-click and select Open Device, Computer Management. This brings up a remote access to the host computer management console, and provides me with full management control. For instance, I can open services and applications services, and see the services running. Of course, this generally requires credentials which we can put in by the Credentials Manager. SoftPerfect is easy to use, and it's another powerful scanner that's a must for any network enumeration task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Env Vars:** wmi (2), snmp (2), smb (1), udp (1)
> **UI Navigation:** click on (2), right-click (2), go to (1)
> **Versions:** 10.0.2 (4)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - softperfect (1)

#### [Enumerating using SNMP](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=0)** - The Simple Network Management Protocol, SNMP, is an evolution of an earlier protocol known as SGMP. SNMP was approved as an internet standard in 1990 and has been used widely in network management systems since that time. While most network equipment vendors provide SNMP support in their [products](../../Skills/Software%20Development/Microsoft%20Products.md), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) has recently announced it will see support for SNMP and has essentially removed it from [Windows](../../Glossary/Service/Windows.md). Nevertheless, you'll find a lot of SNMP out there. An SNMP manager application is used to manage devices through an SNMP agent running on them which gives the SNMP manager access to a vast amount of internal device status and configuration information. The SNMP manager will typically store this information in what's known as a Management Information Base or MIB. Information in SNMP is given an object identifier. These identifies exist in a hierarchal tree and an example is shown here, starting at root and progressing down a path of ISO, org, DOD, internet, et cetera. The object identifier can be expressed in words as [iso.org](https://iso.org).dod.internet or more typically numerically as 1.3.6.1. As we can say in this example, manufacturers are provided with a node in the tree. Here we can see the experimental note for Cisco which has object identifiers starting with 1.3.6.1.4.1.9 and all Microsoft experimental systems
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=97)** will have objects identifier starting with 1.3.6.1 4.1.311.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=106)** Production systems will use a common object identifier for the same information. So both a Microsoft and a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) system will have 1.3.6.1.2.1.1.1 as the object identifier for system information. And 1.3.6.1.2.1.25.4.2.1.2 for running processes.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=132)** Cisco uses the same object identifier for system information, but uses X experimental branch object identifier for its processes 1.3.6.1 4.1.9.9.109.1.2.1.1.2.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=151)** Another concept within SNMP is communities where objects are intended for sharing throughout a community of users. Most vendors ship their products with the two defaults community strings, public, which is used for read only and private, which allows read-write. The community name is often used when requesting objects. Kali provides some useful tools for enumerating SNMP. To start with, we can use 161 to list SNMP enabled devices. 161 and we'll check our sub-net 10.0.2.0/24 and we'll look for the public community. And here we see we have just 10.0.2.9, which is our [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) system. Next we can use snmpget, which extracts a specific RID. snmpget minus V1 version one, SNMP. The community string is public. The IP address is 10,0.2.9. And our LID is 1.3.6.1.2.1.1.5.0.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=231)** And we see this response with the system name. And if we look at 2.1.1.1.0, we get the system information.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=243)** We can look at all our IDs in a branch by using snmpwalk. snmpwalk version one, SNMP community string public 10.0.2.9.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=261)** And we'll look at the branch 1.3.6.1.2.1.1.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=269)** And we get all the SNMP entries in that branch. And if we go higher, when we look at everything in 1.3.6.1, we get everything in the MIB for that device. We can explore a target more easily with a graphical tool such as iReasoning free MIB browser. We can download this as a zip file. wget [https://www.ireasoning.com](https://www.ireasoning.com)/
>
> **[5:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=306)** download/mibfree/mibbrowser.zip
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=317)** And we can extract it, unzip mibfree/mibbrowser.zip
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=325)** And then we can go into the extracted files which are in ireasoning/mibbrowser
>
> **[5:37](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=337)** and we can run it, browser.sh.
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-using-snmp?u=76281980&t=346)** Okay, so we can put in the IP address, 10.0.2.9 and I'm going to expand the entries and on the entry we can walk and we get all the our LIDs. We now have a tree with object descriptions in the left pane and they're interpreted values in the right pane.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Versions:** 1.3.6 (9), 1.2.1 (4), 10.0.2 (4), 2.1.1 (2), 1.4.1 (1)
> **Env Vars:** snmp (16), mib (3), sgmp (1), iso (1), dod (1)
> **CLI Commands:** find (1), node (1), wget (1), unzip (1)
> **Definitions:** known as (2), is an  (1)
> **URLs:** [iso.org](https://iso.org) (1), [https://www.ireasoning.com](https://www.ireasoning.com) (1)
> **File Paths:** browser.sh (1)
> **Code Identifiers:** ireasoning (1)

#### [Enumerating with RPC](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=0)** - [Instructor] The RPC protocol works with application endpoints, which are defined by a universal unique identifier. If we want to generate a UUID for our RPC application we can use an online service such as the site shown here. When a client makes an RPC call to the server using the UUID, a binding is created which establishes a pipe for data transfer between the client and the server. The server's RPC service helps the client by providing a locator function, which can be called to enumerate all endpoints that it holds. Let's take a look at it. Let's load a graphical tool called winfingerprint which provides a lot of types of enumeration including enumerating RPC endpoints. This is available from the QP download site and I've already installed it on my [Windows](../../Glossary/Service/Windows.md) system. Winfingerprint has many features, but for the purpose of RPC enumeration I'll select a single host and de-select all but the RPC bindings option, and then we'll scan. And we can see here, the endpoint enumeration in the bottom panel, we can see pipe endpoints and TCP/IP endpoint ports in the 49,000 range. Carly also comes with a tool to enumerate Unix endpoints using the Unix RPC port mapper on port one, one, one. RPC and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) is available as assembler service. And we can use the RPC info tool
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-with-rpc?u=76281980&t=94)** in Carly to enumerate it. Let's enumerate sandbar on our Metasploitable system using the command rpcinfo-p10.0.2.8. And this provides a listing of the TCP and UDP end points on the system showing the port numbers and the services managing them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** rpc (10), uuid (2), tcp (2), udp (1)
> **Versions:** 0.2.8 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using WMI to enumerate Windows](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=0)** - [Instructor] WMI is the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) implementation of Web-Based Enterprise Management, WBEM, and Common Information Model, CIM, to industry-driven distributed system management standards. Managed components are represented as WMI objects, class instances representing highly structured operating system data. Microsoft provides a wealth of WMI objects that communicate information related to the operating system, as well as mechanisms such as [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) for accessing WMI data, and executing WMI methods. All WMI objects are queried using the WMI query language, WQL, which is similar to [SQL](../../Skills/Data%20Science/SQL.md). There are two types of WMI objects, dynamic and persistent. Dynamic objects are generated on the fly when a specific query is performed. For example, when 32 process objects are generated on the fly. Persistent objects are stored in the CIM repository located by default in the System32 [Windows](../../Glossary/Service/Windows.md) directory under WBEM/Repository/OBJECTS.DATA. The Windows Management Instrumentation Service is automatically started by default in Windows, and can be used to enumerate the windows configuration. Microsoft provides two protocols for transmitting WMI data remotely, DCOM and Windows Remote Management, WinRM.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=96)** DCOM has been the default protocol used by WMI since its inception. DCOM establishes an initial connection over TCP port 135 in order to negotiate a random service port. Although this port can be hard coded to a static port number by running Dcomconfig at the command prompt. Some WMI objects include methods that can be executed. For example, the create method of the Win32_Process class. WMI also provides an eventing system, whereby users can register event handlers upon the creation, modification, or deletion of any WMI object instance. The commonly used WMI Classes are described in detail on MSDN. But many more obscure WMI classes are not officially documented. WMI Classes are categorized hierarchically into namespaces, all of which derive from the root namespace. Microsoft uses root/cimv2 as it's default. WMI is an extremely powerful tool for attackers across many phases of the attack lifecycle. From reconnaissance, AVM detection, code execution, lateral movement, covered [Data Storage](../../Skills/Data%20Science/Data%20Storage.md), introduction of a bank door, and persistence. Understanding how to enumerate WMI is useful both for offensive and defensive activities. Let's use PowerShell to start by entering a simple WMI query
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=193)** to list all account names. There we go. A complete list of group, system, and user accounts. We can write a PowerShell script to do more sophisticated queries, such as enumerating the logical desks and showing their size. I have a short script to do this in notepad. I'll select it and right click to copy it and then right click in PowerShell to paste it. This then executes when I press Enter. This provides the enumeration of disc drives with their size. We can see the C and D drives as well as the Z: network share. We can run many different WMI queries to enumerate a window system. And there are hundreds of tables in the WMI database. We can script queries if we know the tables and entries, but there's an easier way. Microsoft provides the WMI C and WB M test utilities for interacting with WMI through PowerShell. Let's have a look at WBM test. This displays a gooey and waits for me to make connection. I'll click Connect. The default namespace is displayed root/cmiv2. I can enter credentials for privileged access session or just accept an authenticated access. I'll accept that and press the Connect button.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=290)** I now have the WMI controls active and can enumerate, create, open and delete classes and instances as well as running queries. I'll take a simple action and select Enum to enumerate and I'll leave the super namespace blank. I can now scroll down the list of classes and I can select Win32-Security Setting Group and these properties are displayed. We have complete control to edit, create and delete qualifiers properties and methods. If using the Microsoft tools is difficult, we can use a tool called WMI Explorer to manually navigate the WMI instrumentation data tables and explore them with a gooey. The end results will still be the same. Selection from a namespace and a script that runs to enumerate the information we want but it's easier than having to remember PowerShell scripts and it does provide a good hierarchical approach. WMI Explorer can be downloaded as a simple zip file from the code flex website. I've already downloaded it, so let's get started. The first thing I have to do is put in an IP address. I'll start by looking at my local host, either just a dot or I can specify 127.0.0.1.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=384)** We can see the WMI instrumentation groups in a tree view in the namespace panel. Windows instrumentation provides access to objects which have settings and which can have multiple instances. I can select ROOT\CMIV2 and expand it out. When we double-click on ROOT\CMIV2, we see at the top of the classes column, that there were 421 classes. I'll scroll down to Win32 account and select that. In the right-hand panel, I can see there are 49 instances and nine properties. In the instances, we can see the enumerated account information for the system, including group accounts, system accounts and at the bottom, the configured user accounts.
>
> **[7:15](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=435)** A little further down, I can select Win32_/BIOS. This has one instance and when I select it, I can see the 31 properties. Win32_/Disk Drive enumerate to one instance
>
> **[7:38](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=458)** and we can select it to see its properties. Down to Win32_/Logical Disk and we have three instances relating to 2 disk drives C and D which we saw in the PowerShell query and the Z share. Moving down the classes, I'll select ROOT\Security Center2, this shows three entries in the classes panel, I'll click on the first AntiSpyware and an entry appears in the instances. I can double click on that when we get the properties showing that windows [defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) is configured. PowerShell remoting uses WinRM rather than Dcom and allows for extremely powerful remote management of a windows enterprise at scale, using PowerShell. The default WinRMTCP port is 5985 http and provides encryption by default. Certificates may also be configured enabling https support over TCP port 5986. I can check from PowerShell whether a remote computer is set up to take a remote WMI request. I'll run the Test-WSMan command against the [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system. This confirms that it can access the remote windows seven system displaying the standard the WSMan identity banner. Let's use PowerShell again to query the remote system. I'll use the original query I run
>
> **[9:13](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=553)** but I'll point it at the remote system.
>
> **[9:22](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-wmi-to-enumerate-windows?u=76281980&t=562)** There we go, complete list of group system and user accounts from the remote system. We have a powerful tool for local and remote enumeration as well as many of the users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (11), [Windows](../../Glossary/Service/Windows.md) (9), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **Env Vars:** wmi (29), dcom (3), root (3), wbem (2), cim (2)
> **Tools:** powershell (11), command prompt (1)
> **UI Navigation:** scroll down (2), click on (2), double-click (1)
> **Analogies:** such as (2), for example (2), similar to (1)
> **Ports:** port 135 (1), port 5986 (1)
> **CLI Commands:** make (1)
> **Versions:** 127.0.0 (1)

#### [Enumeration using Finger](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=0)** - [Instructor] Finger is an older utility which was used for enumeration. It may still be available on some systems, and if it is, then it's an easy way of enumerating users. I've installed the Finger Daemon on my [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) host so let's take a look at what it gives me. It's basic use is to check on details of a specific user. Let's look at the user Malcolm. This provides the home director for the user Malcolm, the username, the login shell, details of the user login time and information about mail and plans. I can use Finger to look at all logged in users on a host, I do this by emitting the username. Malcolm and Harvey are logged in and we can see that details. We can also use finger to get information about users not currently active, if we know their user ID.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-using-finger?u=76281980&t=59)** Finger is legacy and often not used, but if it's detected on port 79, it can be quite useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Ports:** port 79 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Remote enumeration using PowerShell](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=0)** - [Instructor] When testing a target network, you may gain access to a [Windows](../../Glossary/Service/Windows.md) target inside the network. At this point, you'll likely want to scan the internal network. To do this, we can use the target's own [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) capability to scan for additional hosts or to do port scanning. This way, we don't need to increase the risk of detection by loading additional tools. Let's see how we do this. I'm at the PowerShell prompt and can use ipconfig as we normally would to get our IP address. Okay, we can see our IP address is 10.0.2.14. Let's scan the sub-net. To do this, I'll use the PowerShell for loop checking IP addresses ending with 0.1 to 0.254, checking whether the ping succeeds. Inside the for loop, we use the system net function for ping and send a ping request with 100 milliseconds timeout for each host. The variable hosty is output if a ping is a success. And we're scanning the sub-net now. Okay, that's it, and we found seven hosts active. Let's now do a scan of the host on address 10.0.2.8. To do this, again, I'll use the PowerShell for loop, this time checking for some common ports and we'll test each connection and list the port number if it's open. We start by initializing the port array with a few common ports. In the for loop, we use the system net TCP client
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/remote-enumeration-using-powershell?u=76281980&t=95)** and try to open a connection. If it connects, then we display the current entry in the ports array, and we can see we have the open port on 10.0.2.8. These are just two ways of enumerating with PowerShell and there are many more techniques you can use as you advance your PowerShell knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (6), [Windows](../../Glossary/Service/Windows.md) (1)
> **Tools:** powershell (6)
> **Versions:** 10.0.2 (3), 0.1 (1), 0.254 (1)
> **Env Vars:** tcp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Enumerating Web Apps

[↑ Back to Table of Contents](#table-of-contents)

#### [What is that web server?](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=0)** - [Instructor] We can fingerprint a website using a tool called WhatWeb. Let's use this against the Metasploitable server on 10.0.2.8 and see what it finds. Whatweb 10.0.2.8. We can see the web server is running on a [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) platform using the Apache 2.2.8 software configured with WebDAV, and it's called Metasploitable2 - [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). WhatWeb can also check all websites on a subnet, and using grep, we can skip hosts which don't respond. WhatWeb 10.0.2.0/24 --no errors, and we'll pipe that into grep-v Unassigned.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/what-is-that-web-server?u=76281980&t=50)** We have two websites available, the Metasploitable website we've just checked and another on IP address 10.0.2.9. This is also running on Ubuntu with Apache 2.4.29 and it's presenting the Apache default page. Whatweb comes with a large number of plugins which identify specific websites and applications. We can see these using the minus L switch. Whatweb -l, and that'll pipe that through to more. Here we see the plugins for all the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) and applications that Whatweb knows about, and there are plenty of them. Whatweb is useful for us to rapidly kickstart our web testing and gather valuable information for subsequent deeper targeted testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Versions:** 10.0.2 (4), 2.2.8 (1), 2.4.29 (1)
> **CLI Commands:** apache (3), grep (2)
> **Speakers:** - [instructor] (1)

#### [Enumerating a website with Nikto](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-a-website-with-nikto?u=76281980&t=0)** - [Instructor] Having identified our target list of [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) with a tool such as What Web, we can use [Nikto](../../Glossary/Tool/Nikto.md) to get more detailed enumeration of these websites. Let's run Nikto against the Metasploitable server on 10.0.2.8. Nikto -h 10.0.2.8. We can see that Metasploitable presents an Apache 2.2.8 server with WebDAV. Nikto advises that's anti-clickjacking, cross-site scripting protection and X content type headers aren't set. There's a warning that the Apache server is outdated. There's then a couple more warnings about a TCN header and multi-view weaknesses. Nikto then identifies a number of vulnerabilities starting with OSVDB-877, which means that the trace option is active and that it's vulnerable to cross-site tracing. Nikto also identifies a folder/doc which can be browsed, so let's check that out. Okay, Nikto was right and we have a lot of entries in this folder. I won't go through each of the vulnerabilities identified in detail, however, these do provide a good start point for your subsequent deeper testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Nikto](../../Glossary/Tool/Nikto.md) (7), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Versions:** 10.0.2 (2), 2.2.8 (1)
> **CLI Commands:** apache (2)
> **Env Vars:** tcn (1), osvdb (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating webpages](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-webpages?u=76281980&t=0)** - [Instructor] If we want to enumerate a website, we can do that with [OWASP](../../Skills/Cybersecurity/OWASP.md) ZAP which we can run from the web application analysis menu. We can run our analysis by clicking Automated Scan and entering 10.0.2.8. Pressing Attack. ZAP starts spidering the site, looking for ways to attack it. At the bottom left, we can see the alerts that are being raised as we go. Once its finished spidering, it will start its active scan. Let's wait while ZAP finishes the scan. Okay, we can see it's now doing its active scan. We've got enough to look at, so I'll stop the scan. If we expand Sites and expand 10.0.2.8, we can see the website's structure. At the bottom left, we can also see the alerts that have been raised by ZAP. If we click on the first path traversal, we can see that during enumeration, ZAP found it was able to find a path traversal. And if we copy this path, we see Metasploitable's password file. ZAP provides us with good website enumeration and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **Env Vars:** zap (6), owasp (1)
> **Versions:** 10.0.2 (2)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating hidden webpages](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=0)** - [Instructor] Spidering is fine for pages linked to the main web route, but we also need to find those pages that aren't. For that, we can use one of a number of tools, the main ones being [Dirb](../../Glossary/Tool/Dirb.md), DirBuster, and [Gobuster](../../Glossary/Tool/Gobuster.md). Let's look at a couple of these. DIRB by default uses its own small dictionary of webpages, which can be used as a first-pass enumeration. Like Gobuster and DirBuster, it also gives us the option of specifying a wordless file and selecting specific file extensions to search for. Let's run DIRB in its simplest form, dirb [http://10.0.2.8](http://10.0.2.8).
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=42)** The default dictionary for DIRB is in alphabetical order, and we can see the current [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) list being tested. We can see it's quickly found a number of files and folders at the top level. Once the top level structure and files have been listed, DIRB starts enumerating the folders, and providing a second level of enumeration, and this goes on until all folders and subfolders have been enumerated. Okay, we can see DIRB found 56 files. We can see there's a [PHP](../../Skills/Software%20Development/PHP.md) MyAdmin directory with a webpage, TODO. Let's take a look at that. Okay, we can see there's a user, nijel, and that the Sourceforge tracker is installed. Let's look at one of the other tools, Gobuster. This isn't installed by default, so we can install it by entering sudo apt install gobuster.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=106)** Okay, for this I'll run Gobuster using a medium-sized lowercase dictionary, and direct it to show me all of the PHP and text files in the search, as well as the webpages. I'll set the number of threads to 25. Gobuster, and move onto directory, listing of -u 10.0.2.8.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=129)** And we want to see PHP and text files, and the word list we're going to use is in usr/share/wordlists/dirbuster/
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=144)** directory-list-lowercase-2.3-medium.text,
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-hidden-webpages?u=76281980&t=154)** and we'll run with 25 threads. Okay. Gobuster doesn't by default display the current word being processed, although that's a configuration option, but it does display the folders and files it finds, starting with the /index folder and the PHP file. We'll let that run for a while. Okay, that's finished. Gobuster doesn't do recursive searches by default, but we can run it again with the folder name to go one level deeper. Let's enumerate the twiki folder. We can now see the files and folders under twiki, starting with the templates folder. There are other tools for webpage enumeration, and all are very similar, so the real key to enumerating websites is having the right dictionary. Kali provides a number of dictionaries to use, and you may wish to have your own available, based on your knowledge of what you've found in the past in your pen testing. The appropriate use of spidering is an adjunct to busting the website. Can save quite a bit of time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gobuster](../../Glossary/Tool/Gobuster.md) (8), [Dirb](../../Glossary/Tool/Dirb.md) (7), [PHP](../../Skills/Software%20Development/PHP.md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **Env Vars:** dirb (6), php (3), todo (1)
> **CLI Commands:** php (4), find (1), sudo (1), apt (1)
> **Versions:** 10.0.2 (2), 2.3 (1)
> **Prerequisites:** install (2)
> **URLs:** [http://10.0.2.8](http://10.0.2.8) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Enumerating the Internet

[↑ Back to Table of Contents](#table-of-contents)

#### [Tracing routes across the internet routes](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=0)** - [Instructor] When testing an internet based system, it's sometimes useful to enumerate the route from the test system to the target. Let's use sudo traceroute to trace the internet path. To demonstrate this I'll set ICMP echo mode using minus I and I'll use a random IP address of 67.3.11.1. Okay, we can follow the packet as it hops across the world to get to its destination, with a hop return trip time and the name of the hop server. The trace terminates when the responses cease. [Windows](../../Glossary/Service/Windows.md) provides a tracing tool called TRACERT. TRACERT and I'll look again at 67.3.11.1.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/tracing-routes-across-the-internet-routes?u=76281980&t=50)** This, again, shows the time taken for each hop and the name of the hop point. The Windows tool also shows hop points which provide no response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2)
> **Env Vars:** tracert (2), icmp (1)
> **Versions:** 67.3.11 (2)
> **CLI Commands:** sudo (1)
> **Speakers:** - [instructor] (1)

#### [Using Shodan](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=0)** - Shodan is an Internet repository which maintains indexes of the services presented to the Internet via a vast number of Internet servers. In essence, it's a service directory for the Internet. Signing up for Shodan is free, and you can do that by following the Create an Account link on the right. I've already got an account, so I'll log in. (keys click) Our free membership restricts the number of results that we can see. It's adequate to learn how to use Shodan. To start with, let's start by looking for IBM Domino servers. I'll type domino in the search bar, and press enter. Okay, we've got a candidate list of Domino servers. At the top of the list, we can see that right now Shodan knows of 51,715 of them. In addition to providing the IP address, Shodan gives us the banner from the server, and if I go down the list a little way, I can see the (indistinct) server from HeiTech Padu on IP address 202.171.35.11. We can get more details on the entry by pressing the Details link. This show's the ports open, and the services running on those ports, together with the banner from those services.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=95)** Another feature of Shodan is to enumerate all vulnerabilities related to the search. I'll click on the Exploits button on the left of the screen, and I'm presented with a set of vulnerabilities relevant to my last search. In this case, we've got all the known Domino server vulnerabilities listed. I'll scroll down to vulnerability described as Lotus Domino SMTP router, EMAIL server, and client DoS, and click it. And we're taken to the Exploit's DB site to see the details of the exploit. The Shodan database has a greater history than exploit's DB, so don't be surprised if the automated link leads to a missing entry. The Shodan list of Domino servers also shows the distribution of servers by country. It shows there are 3,083 systems hosting Domino in China, and if we click on China, we can see the list. Note, the search has been constructed as domino country "CN". However, if I enter China in search request, just as a filter term, (keys click) I get only the list of Domino servers with China in the company name. We've seen the use of country as a search filter. Other search filters we can use include the terms city, host name, OS, and port. Let's ask Shodan to enumerate all servers in its database with port 1352, the Domino administration port, open. (keys click)
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=192)** And Shodan enumerates 80 systems from its database. We can also search on the network address. A useful query to see what's known about subnet of interest. (keys click) We've got a 176 servers on that network. I can combine these with a query such as net 177.137.102.0/24 space port 80. (keys click)
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/using-shodan?u=76281980&t=235)** Which returns just two systems with HTTP open. Shodan allows export of the search results in CSV, [JSON](../../Skills/Web%20Development/JSON.md), or XML format by clicking the Downloads link, and also is able to create a formatted report which it stores for subsequent access. Shodan is a powerful enumeration tool that offers the opportunity to enumerate a significant amount of information about a target system or network without doing any active inquiries on the Internet. Of course, the Internet changes all the time, so Shodan, and similar post-survey tools, can only tell you what was there, not what's there now. That's needs active reconnaissance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** ibm (1), smtp (1), email (1), http (1), csv (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Ports:** port 1352 (1), port 80 (1)
> **Versions:** 202.171.35 (1), 177.137.102 (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - shodan (1)

#### [Scan the internet with ZMap](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=0)** - [Instructor] The internet has grown to consume most of the IPv4 address space and is continuing to grow as IPv6 and that offer the means of extending beyond that. Surprisingly, it's still possible to scan the internet and enumerate its connectivity. ZMap is designed to perform comprehensive scans of the IPv4 address space or large portions of it. At a rate which enables a full scan to complete within five minutes, given a good enough broadband connection. It's a research tool which is used to profile the shape and size of the internet or at least the IPv4 part of it. ZMap provides an ethical research capability by including a standard blankness file. This ensure sites which do not wish to be scammed are emitted from it's scanning. It also includes the capability to use a white list file to limit the scanning, to a known subset of the internet. ZMap can be downloaded from the website [zmap.io](https://zmap.io) using the download ZMap link shown. However, it can also be installed into [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) using the standard command apt-get install ZMap. I've already installed ZMap so let's check the available options. Let's run a simple scan on a limited number of hosts. By default ZMap we'll perform a TCP syn scan on the specified port at the maximum rate possible. Randomly selecting IP addresses and covering the whole internet. I can limit the search using its options.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=93)** I look for the open web server, port 80. With a limit of 1000 systems to scan, I'll output the results to web1.text and then list the results.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=111)** Okay, that's completed. And we found two public servers open for business in the first 1000 random internet addresses we enumerated. We can do the same scan for a specified sub-net range say 66 . 77 . 0 . 0 / 16 And I'll remove the limit on hosts scanned but I'll reduce the packet rates to 200 packets per second.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scan-the-internet-with-zmap?u=76281980&t=148)** Okay, that's finished. And again, we see a number of public [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) in that range. This is enumerated a full class b address space in just under six minutes on the consumer internet connection. Even though I've limited its bandwidth. Using ZMap to scan the internet is a noisy and potentially disruptive activity if run in an uncontrolled manner. In addition packets can be lost if the speed is too high and the results will then be incomplete. Nevertheless, it is a good tool to look at current services that have been made public and with some trial and error to find the maximum reliable working rate. ZMap can be a useful tool for numeration at scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **CLI Commands:** apt (1), find (1)
> **Definitions:** is a  (2)
> **URLs:** [zmap.io](https://zmap.io) (1)
> **Ports:** port 80 (1)
> **Env Vars:** tcp (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 6. Enumerating Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Enumeration of the cloud](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=0)** - [Instructor] Cloud service providers offer a wide range of services ranging from generic operating system platforms to specialized applications. Here we can see the services that Amazon offers which make up the [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) offering. Covering compute, storage, database, management and governance, more exotic services such as quantum and machine learning and many more. One of the most popular services in AWS is the elastic compute cloud or [EC2](../../Skills/DevOps/Amazon%20EC2.md) service. This is a [Windows](../../Glossary/Service/Windows.md) or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) platform with an operating system installed and ready to go. When we commissioned an EC2 platform, it's called an instance. The life business may run many hundreds of instances. Popular data resources are the S3 simple storage service which is like a virtual drive in the cloud and the RDS service, which provides various [Forms](../../Skills/Web%20Development/Forms.md) of [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md). Even though a cloud service is on a public cloud, that doesn't mean it's necessarily accessible from the internet. A cloud service such as EC2 will operate inside an AWS account [virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md). Being accessible only by the owner using a private IP address and accessed using SSH keys. However, such services can be configured for internet access using a public IP address and can be configured to accept traditional user ID and password login. We can use normal pen testing tools to enumerate internet facing cloud systems
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=94)** as we would do with any internet facing system. However, Amazon provides a command line tool which you can use to do additional enumeration. This is called AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). If you want to see how to register for an install list, check out my [Cybersecurity](../../Topics/Cybersecurity.md) and [Cloud Computing](../../Topics/Cloud%20Computing.md) course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. We don't need an Amazon account to do an authenticated testing, but this provides limited results. If we have a personal account, we can get access to much more information on a target. Having a target set of credentials provides of course the ideal level of access. And this is a typical testing scenario. These credentials are typically set up in what's known as a profile. And a user can have many profiles and select the one required for each command. Deploying infrastructure into the cloud retains the normal attack surface of the resources, system services accessible through their TCP and UDP ports, and injection points accessible through the web portal. We can enumerate these as normal using tools such as [Nmap](../../Glossary/Tool/Nmap.md) and [Burp Suite](../../Skills/Cybersecurity/Burp%20Suite.md). However, with cloud, we also get a complex set of policy scripts written in [JSON](../../Skills/Web%20Development/JSON.md) form, which are attached to users to detail the services they can access and the actions they can take. Policies can also be attached to resources, such as servers and storage to also detail access rights and restrictions. Let's take a look to fragment of user policy. This is an example of a policy which can be attached to a user to detail the actions that the user can take
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumeration-of-the-cloud?u=76281980&t=190)** and on what kind of resource. This is one version of the policy. And at the bottom we can see it's version one, and it's the default policy. However, other versions can exist and can be selected as the default to use. The key part of this policy from an attack surface perspective is the middle portion which details the actions, effects and resources. In this case, a user to which this policy is attached is restricted to three classes of actions, get resource, list resource, and change the default policy. The policy can be an allow or deny. And in this case it's an allow. This policy applies to any resource. So any service offered by AWS. Consequently, this policy allows a substantial amount of enumeration but not the ability to change any resource setting. So, enumerating cloud deployments involves not only traditional server and web portal enumeration, but also involves enumeration of resource policies to gain insight into the resource and looking for policy weaknesses which allow additional enumeration to be done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** aws (4), ec2 (3), rds (1), sql (1), ssh (1)
> **CLI Commands:** aws (4), make (1), ssh (1)
> **Definitions:** is a  (2), is called (1), known as (1), is an  (1)
> **Analogies:** such as (4)
> **Prerequisites:** install (1), set up (1)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)

#### [Enumerating cloud policies](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=0)** - [Instructor] When we start Pen Testing AWS it's usually based on having a set of credentials. These may have been obtained from earlier testing as hard coded API core parameters or from finding the credentials after penetrating a system. Let's use the Amazon command line tool to look at enumerating policies using credentials that have stored in to profiles called scenario one and scenario two. These come from testing deployments, I've set up using the CloudGoat AWS test system. There's a reasonable amount of work involved in setting up a testing environment for AWS. So we won't do that here, but if you want to get hands on with AWS, then I'd suggest you hop over to my Pen Testing AWS with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) course and take a deeper dive into the cloud. With the scenario two access keys. Let's look at how we enumerate the overall cloud accounts. We can do a first check on an access key using the command aws sts get access key info minus minus access key. And the access key we've got is ASIA 22ZK 7 SWAE WK6 X 4 MM And this returns the account that it belongs to. If we have the secret key and have set it up in a profile we can get the user information also, using aws sts
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=93)** get caller identity minus minus profile scenario1. We now get the user ID the Amazon resource name and the account. We can also extract the username from the yarn. We can see that the user is called raynor cgid, et cetera. We can get overall account information using the IAM service by querying aws iam get account summary minus minus profile scenario1. This is out the configuration information. And we're looking for things such as the number of policies and versions of policies. The number of access keys allowed per user and whether [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) is active. We can list the users active in the account with aws iam list users minus minus profile scenario1 there's two here. And the one we're interested in for the enumeration is Raynor. Having enumerated the basic account details. Let's look at what policies exist. We can do this with aws iam lists policies minus minus profile scenario1 to outerpol.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=186)** We get a lot of information provided in the [JSON](../../Skills/Web%20Development/JSON.md) structure. So I've saved it into a file. Let's take a look at it, nano outerpol minus l. We can see an initial policy called cg raynor policy cgid et cetera, et cetera. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the output relates to standard Amazon policies. Okay, now we've got the policy name. We can now check what policies are attached to our user by querying aws iam list attached user policies minus minus user- name raynor cgid sinp xl b t5t minus minus profile scenario1. Let's do that again. That should have been an n can see the account cg raynor policy is attached to Raynor. Now let's check on the policy versions, aws iam list policy versions minus minus policy arn. And then we have the arn for the policy that we saw before on aws iam
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-policies?u=76281980&t=282)** 744 730 10 5216 are account number policy / cg raynor policy cgid s inp x lb t5t minus minus profile scenario1. Now we can see, there are five versions. Let's check what one of the policy versions contains. You can do this by looking at version id v1, and instead of list policy versions, we'll get policy version. And we can see the policy version details. So we know that Raynor can get and list any resource and set the default policy. Before we leave let's see what version three has in it. And here we say that this policy allows any to be taken on any resource. It's a super user policy. While it's not active. We now know that we can activate it with Raynor's account. As Raynor is permitted to change the default policy. We can use this to escalate our privileges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** aws (13), python (1), yarn (1)
> **Env Vars:** aws (5), api (1), asia (1), swae (1), wk6 (1)
> **Tools:** command line (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating cloud compute resources](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=0)** - [Instructor] Let's use the Amazon Command Line tool to look at how we enumerate compute resources. We'll use a command called describe resources to enumerate all [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances in the account, and we'll use our default profile. We do this by entering the command, aws ec2 describe-instances, and we have to put the region in, which I'll use ap-southeast-2.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=36)** We can see that AWS has returned a [JSON](../../Skills/Web%20Development/JSON.md) structure. Let's examine this. First of all, we can see the image ID from which this instance was spawned, and its unique instance ID. When we select our elastic compute platform, we can select different types and sizes of computer. We can see that this instance is a T2 medium EC2 compute resource. Then we have a key name of Kali. That's the name I gave this EC2 instance and I've used the same name for its access keys. We can see there's a group clause. We can group our EC2 instances into categories, such as dev, prod, test, and so on, but in this case, I haven't specified a group. Further down, we can see this is placed in an availability zone, ap-southeast-2c. Resources can often be duplicated across availability zones for redundancy purposes. We then see the internal IP address for this instance. We can access this instance through this address by using the relevant AWS profile which is associated with this instance's VPN and the SSH keys provided by AWS for this server. We can see the product type of this resource, in this case, Kali is a product from the AWS Marketplace, and we can see its unique product ID. If we scroll down, we can see the public DNS name is blank. This instance doesn't have a DNS entry or a public IP address,
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-compute-resources?u=76281980&t=129)** so it's not accessible from the internet. We can also see it stopped. There's a fair bit more technical information provided about the instance, including its block storage and hypervisor type. We can see it's a [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) platform and we have its DNS information. This provides a fairly good start point for understanding the type of server this is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Env Vars:** ec2 (4), aws (4), dns (3), json (1), vpn (1)
> **CLI Commands:** aws (5), ssh (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating cloud storage resources](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=0)** - [Instructor] The first type of storage resource that we'll look at is the AWS simple storage system, which is a repository, or bucket in Amazon terms, for files. Let's see how we enumerate these resources using the AWS command line tool. S3 storage buckets are a global resource so we don't need to specify a region. We use the command, aws s3api list-buckets.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=29)** Okay, I can now see there's an S3 bucket called cg-cardholder-data-bucket. We may need to have permission to access the bucket or it may allow anyone access. Let's see if we can enumerate its contents. Aws s3 ls, and we give it the bucket name, and we have access to this bucket and we can enumerate its contents. We can see what's in a file using a special form of the copy command. to do this, we'll change this to cp, we'll use the s3 prefix, and let's look at the cardholder_data_primary, and we use the minus for denoting standard output, and we can see here the data in the file. The key problem with AWS storage is buckets being accidentally made open for public internet access. GrayhatWarfare provides an index of open buckets which we can search to find any related to our testing. I'll do a search for the term password.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=114)** At line four, we see a document. If we click on it and open it, we find it's the servicedesk credentials for user superadmin, probably not what we want to have on the internet. If we now navigate to the bucket and scroll down to the next page, we can see a set of safe password files. If we open one, we can see everybody's password, again, probably not what we want on a server, nevermind on the internet. There's another form of storage used frequently on Amazon, and that's the Relational Database Storage service or RDS which provides [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md). Let's see how we use the command line tool to enumerate our [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). The method we'll be focusing on for enumerating databases is describe-db-instances and we can try this using the command line interface. We need to specify a region, so we'll look at us-east-1. Aws rds describe-db-instances --region us-east-1.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-cloud-storage-resources?u=76281980&t=201)** Okay, we've now enumerated the relational databases on the account, there's just the one, which we can see is called securedb, which is managed with a master user account called cgadmin. It's a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) SQL database run on a db.t2.micro server. A little bit further down, we can see it's accessible as an endpoint through port 5432, and we find it's running Postgres9.6. That's a good start to enumerating the RDB server. There's a lot to learn about enumerating cloud, especially the account details in the identity and access management system and the accountant component policies. To learn more about cloud enumeration, check out my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning courses, [Cybersecurity](../../Topics/Cybersecurity.md) and [Cloud Computing](../../Topics/Cloud%20Computing.md) and Pen tTesting AWS with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (7), find (3), ls (1), cp (1), python (1)
> **Env Vars:** aws (4), sql (2), rds (1), rdb (1)
> **Tools:** command line (3)
> **UI Navigation:** click on (1), navigate to (1), scroll down (1)
> **Code Identifiers:** cardholder_data_primary (1), ttesting (1)
> **Definitions:** is a  (1), is called (1)
> **Ports:** port 5432 (1)


### 7. Other Enumeration

[↑ Back to Table of Contents](#table-of-contents)

#### [Scanning with SuperScan](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=1)** - [Narrator] SuperScan is a Legacy [Windows](../../Glossary/Service/Windows.md) Enumeration tool, which we can download from the SnapFile site as shown. The download is a zip file, and the tool can be used directly after extraction. SuperScan offers a simple tabbed interface for running Discovery and Enumeration Functions. The first thing I'll do is go to the Host and Service Discovery tab, and check all the discovery options. I'll leave the UDP and TCP ports to just the common ones, that are checked as default, but I'll change the TCP Scan to Full Connect. I'll also go to the Scan Options and uncheck Hide systems with no open ports. And I'll go back to the Scan tab, and I'll enter the range of IP addresses we want to check, 10.0.2.1 and I'll just go through to 20. I'll use the right-hand arrow to transfer them to the target list. And then the record button at the bottom, to run the scan. The scan progress is shown at the bottom of the screen. We can see we quickly found 7 hosts and SuperScan is now enumerating ports. Okay, that's finished now. SuperScan found 7 live systems and the summary results is shown in the middle panel. If I scroll up, I can see that we found IP addresses 10.0.2.1
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=93)** 2 3 8 9 14 and 15 5 of the 7 of open ports. I can also view the scan report as an [HTML](../../Skills/Web%20Development/HTML.md) document. This provides the details for each host, and identifies its service characteristics. For example, 10.0.2.1 is the main name server and has the trivial file transfer service, TFTP open. 10.0.2.2 has 2 ports open, and 10.0.2.3 is a closed system. 10.0.2.8 is called Metasploitable and has 18 TCP and 3 UDP ports open. As we look further down this report on Metasploitable, we can say that connecting port 1524 provides a shell prompt, It's an open command shell. 10.0.2.9 has 3 TCP and 2 UDP ports open. And we can see in the port banner information, that it's a [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) system. 10.0.2.14 has 8 common TCP ports open, and the UDP Echo port. And finally 10.0.2.15 is a closed system. The scan detected that port 139 is open on host 10.0.2.14, and this is a common SMB port. I'll go to the Window Enumeration tab and I will enter the address 10.0.2.14,
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=188)** and enumerate that. SuperScan uses NetBIOS to enumerate the [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) server. We can see the MAC address, but SuperScan isn't able to identify the operating system. It's a Legacy Tool, which sadly hasn't caught up with the latest Windows releases. It has found that its version is 10.0, however. It shows detailed information, on user, and group accounts. And it's enumerated the RPC endpoint information. It's identified the policies and shares, and detected the time logged on. It also finally lists the services table, showing all the running and stopped services. Let's clear this and let's now look at our 10.0.2.8 Metasploitable server. While SuperScan calls this a Windows Enumeration, we can still use it to enumerate Samba on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) systems. Okay, well it thinks this is a Windows NT system, but it has been able to extract the server name and comment, which shows us that it is the Metasploitable Debian server. It lists the user accounts, and it lists the password policy, the sole shares and then it finishes with time of day.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-superscan?u=76281980&t=281)** While this is not as complete as for a Window system, it does provide useful information as a start point for further Linux specific enumeration. Despite it being Legacy, SuperScan is simple to use, and it's a powerful tool to having the testing inventory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Env Vars:** tcp (5), udp (4), html (1), tftp (1), smb (1)
> **Versions:** 10.0.2 (12), 10.0 (1)
> **Definitions:** is a  (6), is called (1)
> **UI Navigation:** go to (3), scroll up (1)
> **Ports:** port 1524 (1), port 139 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** zip file (1)

#### [Scanning with NetScanTools Pro](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=0)** - [Instructor] When enumerating network information, it's useful to have a tool which combines a number of capabilities. One such tool is NetScanTools Pro. While it's a commercial product, a basic freeware version is available, and a 30-day demonstration version of the professional tool can be downloaded and used. I've downloaded and installed the NetScanTools Pro version. So let's have a look at how we can use it to enumerate our network. On the left-hand side of the screen is a set of controls which duplicate the entries in the accessibility menu. I'll select the automated tools section and enter and retrieve data. This shows the tools in the right-hand panel. The target type can be entered as an IP address, a name, an email address or a URL. Let's start with my metasploitable server. And I'll clear the functions and just select ping, scan and ARP scan. And I'll click on get information about the target. Okay, the scan is complete, and I can click on the reports button. This provides a record of the test. I'll select the record and view selected report. This produces an [HTML](../../Skills/Web%20Development/HTML.md) report showing the ping results followed by the port scan with banner information. The report finishes with an ARP scan, and that shows the systems
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=93)** that are known to be on the network together with their Mac addresses. The next option in the menu on the left is manual tools. Opening this item provides access to many tools with the down arrow enabling the list to be scrolled. These include the ping and ARP scans and many more. I'll scroll down to the OS fingerprinting tool which attempts to determine the type of operating system running on a target, and run this against 10.0.2.9. Analyze the target. This shows the test being carried out. Okay, that's complete now. And it's identified the target as a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) server, possibly a Slackware variant with kernel version 2.4.26. Well, it is a Linux system. Let's move down a little bit further to the system info - SMB tool. And I'll run this against 10.0.2.14, and get info. It's quickly gets our SMB information from the server. It's not able to access the user list or the account information or the password policy. It does provide the local security authority policy and provide share information. And it finishes with our system time information. The NetScanTools Pro's toolsets
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/scanning-with-netscantools-pro?u=76281980&t=189)** provides a useful consolidation of tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** arp (3), smb (2), url (1), html (1)
> **UI Navigation:** select the (2), click on (2), in the menu (1), scroll down (1)
> **Versions:** 10.0.2 (2), version 2 (1), 4.26 (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Enumerating LDAP](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=0)** - LDAP is the Lightweight Directory Access Protocol and is used extensively in various [Forms](../../Skills/Web%20Development/Forms.md) of enterprise servers. It provides a repository for organizational entity information. Allowing the structure of organizations and the people within them, to be reflected in a form that can be queried. Its main security use is for authenticating users. A number of [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) packages exist, the best known being OpenLDAP and [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) is a [Windows](../../Glossary/Service/Windows.md) product which uses LDAP as the access protocol. LDAP uses a tree structure database to store information about an organization and enable searching for people in the organization without knowing where they're located in the tree. An LDAP directory tree hierarchy consists of the root directory, which has broken down into countries. Each of which breaks down into organizations which branch out to one or more levels of organizational units, divisions, departments and so on. And then, individual entities such as people, files, printers and so on. An LDAP directory can be distributed among many servers, each having a replicated version of the total directory that synchronized periodically. An LDAP server that receives a request from a user, takes responsibility for the request. Passing it to other servers as necessary but ensuring a single coordinated response for the user. OpenLDAP is an open source tool which can be installed on Linux systems as an LDAP server. I've set up an OpenLDAP server on my [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) system
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=95)** as IP address 10.2.9 and populated it with some entries. I won't go into the details of how to do this. But you can find all you need to know in Grant Williams Linux, OpenLDAP course here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). We can enumerate LDAP information at the Kali terminal using [Nmap](../../Glossary/Tool/Nmap.md)'s LDAP search script. We do that with nmap, minus P 389, minus, minus script equals LDAP search and the servers 10.0.2.9. This connects to the server, confirms port 389 is open and enumerates the whole database using anonymous access. There are many ways to structure LDAP models. We can see here, we've modeled the organization by keeping key elements such as users and groups at the top level. And we've used attributes to control membership of users to groups. This makes the model more resilient to organizational change. Its perhaps easier to use a visual tool for managing LDAP domains. We can download a free LDAP administration client from SourceForge as shown here. I'll go into the files tab, LDAP admin, folder 183, and I can download LDAP admin, W 64-183.zip. This is a zipped executable.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-ldap?u=76281980&t=190)** I've downloaded it, extracted it and I've started it. Okay, let's select, start, connect and create a new connection. We'll call the connection name, Cybex. The host is 10.0.2.9 and I've got anonymous connection selected and I can [Fetch](../../Skills/Web%20Development/Fetch.md) DNs. We can see we've been able to get the Cybex.nz domain from the server. Okay, let's click okay, and double click Cybex to open it. Okay, we can see the LDAP structure for the Cybex.nz domain at the left and the schemer the right. We've got an admin account and two organizational units showing users and groups. If we open groups, we can see our two groups, developments and sales. And if we open users, we can see all our users. Let's select actor. When we click on actor, we'll see actor's details in the right hand pane. What would don't get returned, of course, is actor's password. We can't change the LDAP data with anonymous access but we can do a lot of useful enumeration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Nmap](../../Glossary/Tool/Nmap.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** ldap (17)
> **Versions:** 10.0.2 (2), 10.2.9 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Ports:** port 389 (1)
> **Tools:** terminal (1)

#### [Checking for SMTP users](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=0)** - [Instructor] Enumeration is usually carried out by running tools to list object instances, but it can also be done indirectly by checking whether objects exist. An example of this approach is used to enumerate an SMTP service. We can connect to SMTP by using Telnet or connect to the Metasploitable SMTP server using port 25.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=26)** I can now ask the server to verify an email address.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=35)** The server tells me that the email address doesn't exist with a failure code 511. I can ask the server to verify msfadmin, and the server responds with code 200, the email address exists. I can try more potential email address. We also use the receipt command to detect the existence of email addresses. The valid email address results in a 2.1.5 success code,
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/checking-for-smtp-users?u=76281980&t=78)** but in this case, the incorrect email address results in a 5.1.1 failure code. By using a set of common email addresses, this technique can be used to detect whether or not those addresses are active in the SMTP system.

> [!info]- Semantic Content
>
> **Env Vars:** smtp (4)
> **Versions:** 2.1.5 (1), 5.1.1 (1)
> **Ports:** port 25 (1)
> **Speakers:** - [instructor] (1)

#### [Digging into DNS](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=1)** - [Instructor] The domain name service is the set of public information which allows us to use computer names instead of their IP addresses. It provides the services to convert a computer name to an IP address, and an IP address back to a computer name. Domain name servers work together holding information on the set of hosts that they're responsible for, and passing on queries for other hosts to their name servers. We can enumerate the public information held on domain name servers to get a good idea of what's often called an organization's attack surface. For an attacker, these are the potential entry points into the organization. Let's run a simple DNS query. We can do that with a tool named Dig. Dig, and let's have a look at [sciencedirect.com](https://sciencedirect.com). This provides with information on the IP addresses for [sciencedirect.com](https://sciencedirect.com), which are 162.159.136.70 and 162.159.137.70. We also know the name servers that are used by [sciencedirect.com](https://sciencedirect.com), Sofia and Elmo in CloudFlare. We can use the T flag to search for specific information. Let's dig further to find the mail server with dig [sciencedirect.com](https://sciencedirect.com) minus -t mx, and we'll get the short output. We've now got the name of the mail server
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=95)** which is sciencedirect.mail.protection.[outlook.com](https://outlook.com). This is a [Microsoft 365](../../Skills/Cloud%20Computing/Microsoft%20365.md) mail service. Another command we can use to look for DNS information is the host command, host [sciencedirect.com](https://sciencedirect.com), and this provides a tidy set of information. A more extensive dig into DNS can be done using the DNS ENUM tool. So let's do dnsenum --noreverse, we don't need any reverse DNS checking, and we'll just look at [sciencedirect.com](https://sciencedirect.com).
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/digging-into-dns?u=76281980&t=148)** This provides the IP addresses of [sciencedirect.com](https://sciencedirect.com) and the associated name and mail servers, and tries to run his own transfer, which doesn't work, it rarely does nowadays. DNS ENUM then uses a host named dictionary to try to find additional DNS records through brute force. This is able to find the IP addresses of the Dev FTP, RSS, and web service, which in this case is just the four addresses identified. DNS ENUM also determines the range of IP addresses owned by Science Direct. These are shown as /32 IP blocks, which means it's just these two individual addresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (1), [Microsoft 365](../../Skills/Cloud%20Computing/Microsoft%20365.md) (1)
> **Env Vars:** dns (8), enum (3), ftp (1), rss (1)
> **URLs:** [sciencedirect.com](https://sciencedirect.com) (7), [outlook.com](https://outlook.com) (1)
> **CLI Commands:** find (3)
> **Versions:** 162.159.136 (1), 162.159.137 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Enumerating netbios](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=1)** - [Instructor] Window servers use the netBIOS over TCP service to manage system naming and file sharing. This is commonly used on local networks through ports 137 and 139, but may also be exposed to the internet. In order to demonstrate how we enumerate NetBIOS information, we'll do testing on my [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) server, so you won't be able to follow hands on. The first tool we'll use is NMB lookup. NMB lookup minus A 192.168.1.199
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=40)** and this returns the A records from the directory server. Here we see our computer name, starting with WIN B 5. The zero zero record is the computer name, and the 20 record is the name used for accessing shares through the file service. We also find that the server is a domain controller and the primary domain controller for the Cybex domain. These are the one C and one B entries. And finally, we'll have the server's Mac address. We can also use [Nmap](../../Glossary/Tool/Nmap.md) to run a NetBIOS scan. Nmap minus SV 192.168.1.199 minus minus script
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=88)** equals MB stat, and we'll get verbose output. Nmap provides a port scan, as usual, and then provides the same netBIOS information as we got through NMB lookup. Of course, if we have credentials to access a server, then we can get a lot more information. A useful tool for this is enum four [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Let's run that with our Sam Spade credentials. Enum four Linux minus A minus U Sam Spade minus P.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=130)** We use Scorpion 5 as the password, 192.168.1.199.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/enumerating-netbios?u=76281980&t=141)** We get the basic information on the machine name, MAC address and domain, and we also get the domain sid. There's information about the operating system platform and version and server type. This is followed by the user list with their full names and rids. The shares are enumerated and we're told that SMB one is not configured. And the various groups and group memberships are also enumerated. That's a reasonably good start if we want to focus our [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) on specific high value accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Nmap](../../Glossary/Tool/Nmap.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (1)
> **Env Vars:** nmb (3), tcp (1), win (1), mac (1), smb (1)
> **Versions:** 192.168.1 (3)
> **Code Identifiers:** netbios (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Taking time to enumerate](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=0)** - [Instructor] Our computers all need to work to an agreed time source, and this is provided by the network of time servers on the internet. We can enumerate time servers, although it's rare we'll need to do so in our day-to-day pen testing as these invariably sit outside our target scope. However, for completeness, let's just touch on a couple of ways of enumerating time. The first is to use the NTPQ tool. Let's check out its command set. Ntpq -c help. Okay, let's get a list of peers from a time server Ntpq -c peers 89.221.165.134.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=54)** We can see that there are two remote peers with IP addresses 89.135.149.196.133. This isn't the most important aspect of enumeration but nevertheless, do take some time to try out more of the NTPQ commands once you finish this course. Another tool we can use is [Nmap](../../Glossary/Tool/Nmap.md) with its NTP enumeration script. We'll run this as a UDP query against the time service on port 123. Sudo nmap minus -su -p 123 --script and we'll use the nmap script ntp info. 89.221.165.134.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/netbios-is-a-windows-service-used-to-manage-computer-names-and-file-sharing-in-this-video-learn-how-to-enumera?u=76281980&t=115)** We've enumerated the operational information from the time server. We can see the server is running NTP version four on a Unix platform. Then we have a lot of technical information around the time value it maintains, which may be of interest in some specialist situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Nmap](../../Glossary/Tool/Nmap.md) (3)
> **Env Vars:** ntpq (2), ntp (2), udp (1)
> **Versions:** 89.221.165 (2), 89.135.149 (1), 196.133 (1)
> **CLI Commands:** sudo (1)
> **Ports:** port 123 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-enumeration-13945377/next-steps?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course. I hope you enjoyed learning about enumeration. There's always something new to learn about in [Cybersecurity](../../Topics/Cybersecurity.md), and if you're interested in learning more, then check out the full cybersecurity segment in the library where new cybersecurity courses are added regularly. You'll find courses on cybersecurity in the cloud, using [Cryptography](../../Skills/Cybersecurity/Cryptography.md) for cybersecurity, cybersecurity and [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), and much more. I'd like to invite you to go to my author page where you can find some additional courses on cybersecurity. If you want to get hands-on with some of the common tools, then do take a look at Cybersecurity for IT Professionals. If you're wanting to learn about security for the cloud, then Cybersecurity for [Cloud Computing](../../Topics/Cloud%20Computing.md) is for you. You might also want to see what my colleague on the cybersecurity [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series, Lisa Bock, has for you on her home page. Thanks again for joining me on this course and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (10), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [Malcolm Shore](../../Instructors/Cybersecurity/Malcolm%20Shore.md)

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)
← [Ethical Hacking- Scanning Networks](Ethical%20Hacking-%20Scanning%20Networks.md) | **4 of 19** | [Ethical Hacking- Vulnerability Analysis](Ethical%20Hacking-%20Vulnerability%20Analysis.md) →

## Appears In

- [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)

## Related Courses

_Courses sharing skills:_

- [Offensive Penetration Testing](Offensive%20Penetration%20Testing.md) — Ethical Hacking
- [Stealth Penetration Testing with Advanced Enumeration](Stealth%20Penetration%20Testing%20with%20Advanced%20Enumeration.md) — Ethical Hacking
- [Kali Linux for Advanced Pen Testing and Ethical Hacking](Kali%20Linux%20for%20Advanced%20Pen%20Testing%20and%20Ethical%20Hacking.md) — Ethical Hacking
- [Ethical Hacking- SQL Injection](Ethical%20Hacking-%20SQL%20Injection.md) — Ethical Hacking
- [Ethical Hacking- Cloud Computing](Ethical%20Hacking-%20Cloud%20Computing.md) — Ethical Hacking

---

[↑ Back to top](#)